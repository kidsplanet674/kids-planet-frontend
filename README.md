# Kids Planet Play School & Day Care

Static HTML, CSS and vanilla JavaScript website. Contact enquiries use Formspree.

## Contact setup

1. Sign in at https://formspree.io/ and create a form named Kids Planet Enquiries.
2. Set kidsplanet674@gmail.com as the notification recipient and complete any email verification requested by Formspree.
3. Copy the form endpoint from its Integration tab. It looks like https://formspree.io/f/xxxxxxxx.
4. The endpoint https://formspree.io/f/xnpndkqn is configured in contact.html in both website copies. The form supports standard HTML submission and JavaScript success/error feedback.
5. Review spam protection in Formspree. If restricting domains, allow both the GitHub Pages demo and the final school domain.
6. Upload the updated static files. No hosting email configuration is needed.
7. Submit a clearly labelled test enquiry from the deployed website. Check the Formspree dashboard and school inbox, including Spam. A success message alone does not prove inbox delivery.
8. Check your account submission allowance and notifications periodically. Keep the Formspree account under school control.

## GitHub Pages

Settings → Pages → GitHub Actions. Pushes to main build _demo/ using node scripts/build-demo.mjs. Demo pages have noindex metadata and retain the Formspree form. No custom domain is configured.

## Hostinger

Upload HTML pages, blog/, assets/, robots.txt and sitemap.xml. Exclude _demo/, .git/, .github/ and scripts/. Use production files rather than the noindex demo output.
