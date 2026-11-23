# Eshanya BuildPro website

A static website: plain HTML, CSS and JavaScript. No build step.

## Files

- `index.html` — the page, including the SEO tags and structured data in `<head>`
- `css/styles.css` — all styling, with phone, tablet and desktop layouts
- `js/main.js` — mobile menu, enquiry forms, and the settings block described below
- `images/` — logo, project photos and the social sharing image
- `robots.txt`, `sitemap.xml`, `vercel.json` — search engine and hosting files

## View it on your computer

Double-click `index.html`, or open the folder in VS Code and use "Live Server".

## Things to fill in (top of `js/main.js`)

- `social` — paste your Facebook, Instagram, YouTube and LinkedIn page links. The icons always show in the footer, but an icon with no link does nothing when clicked, so fill these in before publishing (or delete the ones you do not use from `index.html`).
- `reviews` — add real customer reviews. The testimonials section appears once there is at least one.
- `googleReviewsUrl` — your Google Business Profile link.

## How enquiries work

Both forms open WhatsApp with the visitor's details typed into a message to +91 97424 81544. Nothing is stored on the website and no server is needed.

## Publishing

Upload the contents of this folder to your host. On Vercel, replace the files in the repository that serves eshanyabuildpro.com with these and push.
