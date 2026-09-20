import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Build a separate static preview; production files retain their PHP form.
const root = process.cwd();
const out = path.join(root, '_demo');
await mkdir(out, { recursive: true });
for (const name of ['assets', 'blog']) {
  await cp(path.join(root, name), path.join(out, name), {
    recursive: true,
    filter: source => !source.endsWith('.php') && !source.split(path.sep).includes('PHPMailer') && !source.split(path.sep).includes('scss')
  });
}
for (const entry of await readdir(root)) {
  if (entry.endsWith('.html')) await cp(path.join(root, entry), path.join(out, entry));
}
async function adapt(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { await adapt(file); continue; }
    if (!entry.name.endsWith('.html')) continue;
    let html = await readFile(file, 'utf8');
    html = html.replace('<head>', '<head>\n<meta name="robots" content="noindex, nofollow">');
    html = html.replace(/<form\b[^>]*id="contact-form"[\s\S]*?<\/form>/, '<div class="tp-contact-form-spacing"><h2>Enquiries</h2><p>This is a website preview. Email form submission is unavailable in this demo.</p><p><a class="tp-btn" href="https://wa.me/919337164626"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Chat Now</a></p><p><a href="tel:+919337164626">Call 9337164626</a></p></div>');
    await writeFile(file, html);
  }
}
await adapt(out);
await writeFile(path.join(out, '.nojekyll'), '');
// Allow crawling so search engines can read the noindex metadata.
await writeFile(path.join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n');
console.log('Static demo built in _demo; email form and PHP excluded.');
