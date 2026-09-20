<?php
declare(strict_types=1);
use PHPMailer\PHPMailer\PHPMailer;
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function respond(int $code, string $message): void {
    http_response_code($code);
    if (strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['success' => $code === 200, 'message' => $message]);
    } else {
        header('Content-Type: text/html; charset=utf-8');
        $safe = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
        echo '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Kids Planet Enquiry</title><body><main><h1>Kids Planet Enquiry</h1><p>' . $safe . '</p><p><a href="../contact.html">Return to contact page</a> | <a href="tel:+919337164626">Call 9337164626</a></p></main></body></html>';
    }
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'Please submit your enquiry from the contact page.');
}
if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) respond(413, 'Your message is too long. Please shorten it and try again.');
function field(string $key, int $limit): string {
    $value = $_POST[$key] ?? '';
    if (!is_string($value) || strlen($value) > $limit) respond(400, 'Please check your form details and try again.');
    return trim($value);
}
$name = field('name', 100);
$email = field('email', 254);
$phone = field('phone', 20);
$age = field('age', 20);
$subject = field('subject', 40);
$message = field('message', 12000);
if (field('website', 200) !== '') respond(400, 'Unable to accept this submission. Please contact the school by phone.');
if ($name === '' || preg_match('/[\r\n]/', $name) || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || !preg_match('/^\+?[0-9 ()-]{7,20}$/', $phone)
    || strlen(preg_replace('/\D/', '', $phone)) < 7
    || !in_array($age, ['2-3 years', '3-4 years', '4-5 years', '5-6 years'], true)
    || !in_array($subject, ['School admission', 'Daycare', 'School and daycare'], true)
    || strlen($message) < 10) {
    respond(400, 'Please provide your name, valid email and phone, age group, enquiry type and a message of at least 10 characters.');
}
// Hosting environment variables keep credentials out of public website files.
$host = getenv('KP_SMTP_HOST') ?: '';
$user = getenv('KP_SMTP_USER') ?: '';
$password = getenv('KP_SMTP_PASSWORD') ?: '';
$from = getenv('KP_MAIL_FROM') ?: $user;
$port = (int) (getenv('KP_SMTP_PORT') ?: '587');
if ($host === '' || $user === '' || $password === '' || !filter_var($from, FILTER_VALIDATE_EMAIL) || !in_array($port, [465, 587], true)) {
    respond(503, 'Email enquiries are temporarily unavailable. Please call 9337164626 or message us on WhatsApp.');
}
// One attempt per minute per client, guarded across concurrent requests.
$rateFile = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'kidsplanet-enquiry-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rate = @fopen($rateFile, 'c+');
if (!$rate || !flock($rate, LOCK_EX)) respond(503, 'Please try again later, or call 9337164626.');
$last = (int) stream_get_contents($rate);
if (time() - $last < 60) {
    flock($rate, LOCK_UN);
    fclose($rate);
    header('Retry-After: 60');
    respond(429, 'Please wait a minute before sending another enquiry.');
}
rewind($rate);
ftruncate($rate, 0);
fwrite($rate, (string) time());
flock($rate, LOCK_UN);
fclose($rate);
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $host;
    $mail->SMTPAuth = true;
    $mail->Username = $user;
    $mail->Password = $password;
    $mail->Port = $port;
    $mail->SMTPSecure = $port === 465 ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Timeout = 15;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($from, 'Kids Planet Website');
    $mail->addAddress('kidsplanet674@gmail.com');
    $mail->addReplyTo($email, $name);
    $mail->isHTML(false);
    $mail->Subject = 'Kids Planet enquiry: ' . $subject;
    $mail->Body = "Parent / guardian: $name\nEmail: $email\nPhone: $phone\nChild's age: $age\nInterested in: $subject\n\n$message";
    $mail->send();
    respond(200, 'Thank you! Your enquiry has been sent to Kids Planet. Our team will contact you.');
} catch (Throwable $error) {
    error_log('Kids Planet enquiry: SMTP delivery failed. Check hosting mail configuration.');
    respond(502, 'Your enquiry could not be sent. Please call 9337164626 or message us on WhatsApp.');
}
