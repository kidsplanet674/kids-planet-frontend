# Kids Planet Play School & Day Care

Production website: static HTML, Mindu CSS, vanilla JavaScript and a PHP/PHPMailer contact handler. No React build or database is required.

## Client demo on GitHub Pages

In repository Settings → Pages, select **GitHub Actions** as the source. Pushes to `main` build and publish the demo. The expected project URL is https://kidsplanet674.github.io/kids-planet-frontend/.

The workflow builds `_demo/` using `node scripts/build-demo.mjs`. Demo pages have noindex metadata, exclude PHP and PHPMailer, and replace the email form with an explicit demo notice and working WhatsApp/call links. No custom domain is configured. The existing Hostinger website is unaffected.

## Hostinger production deployment

Upload the HTML pages, `blog/`, `assets/`, `robots.txt` and `sitemap.xml` to the final website document root. Do not upload `_demo/`, `.git/`, `.github/` or `scripts/`. Production HTML keeps the contact form and has no demo noindex directives.

Configure SMTP securely through hosting environment variables: `KP_SMTP_HOST`, `KP_SMTP_USER`, `KP_SMTP_PASSWORD`, `KP_SMTP_PORT`, and `KP_MAIL_FROM`. Never commit credentials. Test email delivery before launch.
