# TEXOL Engineering — responsive website refresh (Astro + GitHub Pages)

## Features in this build
- Responsive desktop/tablet/mobile layout and mobile navigation
- Accessible image lightbox: click photos to enlarge; use arrow keys, Escape, or the close button; open the original file separately
- Scroll progress indicator and back-to-top button
- Page titles/descriptions, canonical URLs, Open Graph/Twitter metadata, organization JSON-LD, robots.txt, sitemap.xml and favicon
- Lazy-loaded responsive images and reduced-motion support
- GitHub Actions deployment workflow

## Deploy
1. Keep this project at the root of the `Texol_demo` repository.
2. In Settings → Pages, choose GitHub Actions as the source.
3. Commit/push to `main`; inspect Actions for the build and deploy result.

## Important
- GitHub Pages URL configured as `https://abhijejurkar.github.io/Texol_demo/`. Update `astro.config.mjs`, canonical tags and sitemap if the repository/user changes.
- Original TEXOL photos remain externally hosted on `texol.in` in this package; an external server can block or change them. For maximum reliability and performance, obtain permission and bundle approved image files locally.
- Contact form prepares an email draft only; it does not send/store form data on a server.
- SEO metadata is a technical foundation, not a guarantee of ranking. Search Console submission, real domain canonical strategy, image permissions, company claims and contact details should be reviewed before production.
- This package has not been live-deployed by the assistant. Run GitHub Actions to confirm the final build.

All page-to-page navigation stays within this website. Public photos are currently loaded from TEXOL image hosting.
