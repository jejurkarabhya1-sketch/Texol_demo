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
- Current Pages base: `https://jejurkarabhya1-sketch.github.io/Texol_demo/`. Update `astro.config.mjs`, canonical URLs and `public/sitemap.xml` if the hosting URL changes.
- Photos are currently served from TEXOL image hosting. Approved local copies can be bundled later to reduce external dependency.
- The contact form opens your email application with the enquiry details prefilled; it does not store enquiries on a server.



## Contact form email delivery

The contact form submits through FormSubmit AJAX to the configured recipient address in `public/script.js`. The form displays success only when the service returns a successful response; errors and network failures are shown as not sent/not confirmed. **Before first use, the recipient must complete the activation/verification email from FormSubmit**. Until activation is complete, submissions may fail. FormSubmit is a third-party service; review its terms and privacy policy before public launch. No SMTP credentials are exposed in this static website.


### Branding and responsive refinements
- Updated the header/footer brand lockup to use `public/texol-logo.svg` and matched the favicon.
- Improved leadership card spacing, typography, hover behavior, mobile stacking, navigation dropdown scrolling, and reduced-motion support.
- The original TEXOL website profile text identifies five key persons. Their verified portrait image files were not available in the source package/runtime, so this update does not fabricate or substitute headshots. Add the original portrait files when they can be retrieved from the official site.


## Branding update

The site header and footer now use `public/texol-logo-new.png`, a newly designed TEXOL Engineering logo concept with no tagline. The source image is bundled locally for reliable display on GitHub Pages.

The official TEXOL Key Persons page was checked for leadership details, but the current environment could not retrieve the original portrait image files into this package. The Key Persons cards therefore retain their text profiles; no synthetic portraits have been substituted. Add the genuine portraits to `public/images/` and update the matching cards when the original image files are available.
