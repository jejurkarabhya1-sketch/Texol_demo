# TEXOL Engineering Website

Responsive multi-page website built with Astro and deployed to GitHub Pages.

## Included
- 22 content pages covering company information, capabilities, industries, projects, gallery, leadership, achievements, energy and contact.
- Responsive navigation, interactive image viewer, project search and category filters.
- Page-specific titles and descriptions, canonical URLs, social metadata, organization structured data, sitemap, robots file and favicon.
- GitHub Actions workflow for static deployment.

## Deploy
1. Keep the project files at the root of the `Texol_demo` repository.
2. In repository Settings → Pages, choose GitHub Actions as the source.
3. Commit and push to `main`, then review the Actions run.

## Configuration
- Current Pages base: `https://abhijejurkar.github.io/Texol_demo/`. Update `astro.config.mjs`, canonical URLs and `public/sitemap.xml` if the hosting URL changes.
- Photos are currently served from TEXOL image hosting. Approved local copies can be bundled later to reduce external dependency.
- The contact form opens your email application with the enquiry details prefilled; it does not store enquiries on a server.



## Contact form email delivery

The contact form submits through FormSubmit AJAX to the configured recipient address in `public/script.js`. The form displays success only when the service returns a successful response; errors and network failures are shown as not sent/not confirmed. **Before first use, the recipient must complete the activation/verification email from FormSubmit**. Until activation is complete, submissions may fail. FormSubmit is a third-party service; review its terms and privacy policy before public launch. No SMTP credentials are exposed in this static website.
