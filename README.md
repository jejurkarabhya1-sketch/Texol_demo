# TEXOL Engineering website redesign (static Astro + GitHub Pages)

This is a static redesign prototype based on TEXOL Engineering's public website. It is not connected to TEXOL's WordPress admin, database, private source code or lead-management systems.

## Pages included

Home; Company Profile; Solutions; Industries Served; Projects; Bio; Chemicals; Petrochemicals; Petroleum, Gas & Refinery; Pharma / Specialty Chemicals; Polymer / Paints; Strategic Area; Achievements; Standard Units; Execution Strategies; Mission & Approach; Key Persons; Global Connections; Downloads; Gallery; TEXOL Energy; Contact.

## Image handling

- The gallery uses direct links to full-size image files publicly linked from TEXOL's original Gallery page (office and factory views).
- Gallery images use `object-fit: contain` to avoid distortion/cropping and link to the source file for full-size viewing.
- Key-person profile text is based on the public profile. Individual portrait image URLs were not verified from the text available during research, so initials are used rather than fabricated portraits. Replace them with company-approved original portrait files when verified.
- Many image files remain hosted on `texol.in`; this means they depend on that host remaining available. Before launch, confirm permission and consider self-hosting approved high-resolution files in `public/images/`.
- Some old legacy image URLs on the original website may be low-resolution or no longer available. A display change cannot restore missing image detail.

## Important data and launch notes

- Public text was reviewed for company history, offerings, project names, key persons, achievements, energy information and office/factory contacts. Some historical claims, role titles, emails, certificates and current project status should be reviewed by TEXOL before production publication.
- The contact form in the existing prototype uses a mailto flow; it does not store or submit leads to a backend.
- GitHub Pages serves static sites only. This project does not include WordPress/PHP functionality or a private admin system.
- No deployment has been performed.

## Run locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`. Push the project to a GitHub repository, set Pages source to **GitHub Actions**, and confirm `astro.config.mjs` `base` if deploying under a repository subpath. If using a custom domain, configure it only after review and authorization.

## Source pages reviewed

- https://texol.in/
- https://texol.in/index.php/company-profile/
- https://texol.in/index.php/achievements/
- https://texol.in/index.php/standard-units-of-texol/
- https://texol.in/index.php/industries-served/
- https://texol.in/index.php/key-persons-profile/
- https://texol.in/index.php/projects/
- https://texol.in/index.php/gallery/
- https://texol.in/index.php/texol-energy/
- https://texol.in/index.php/contact-us/


## GitHub Pages configuration

This project is configured for the repository `abhijejurkar/Texol_demo`, with the project-site base path `/Texol_demo`. If you rename the repository, update `base` in `astro.config.mjs` and the `/Texol_demo/` asset prefixes in `src/pages/*.astro`.

The browser script is loaded as an inline-preserved public asset (`/Texol_demo/script.js`) so Astro does not try to resolve it relative to each `.astro` source file.
