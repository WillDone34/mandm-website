# M&M Fixings website

A responsive static website for M&M Fixings Ltd, Cardiff. Built with HTML, CSS and JavaScript, with no dependencies or build step.

## Deploy to Vercel

1. Import the `mandm-website` GitHub repository into Vercel.
2. Keep the root directory at the repository root.
3. The included `vercel.json` selects the **Other** framework preset, skips the build step, and serves **dist**.
4. Deploy. Future pushes to the connected production branch trigger an updated deployment.

No environment variables or secrets are required. The Sites preview's ChatGPT sign-in gate is hosting-specific and is not part of this website's code.

## Local preview

Run `python3 -m http.server 8080 --directory dist` from the repository root and open http://localhost:8080.

## Files

- `dist/index.html`: company content, product placeholders, reviews, contact details and Google Maps embed.
- `dist/style.css`: responsive layout and continuous brand/review animations, including reduced-motion support.
- `dist/app.js`: category search, brand duplication, scroll reveals and seamless review loop.
- `dist/assets/`: company logo, manufacturer logos and hero photograph.
- `vercel.json`: static hosting configuration.

The product catalogue intentionally contains placeholders, with no fabricated products or prices. Online payment and order processing have not been connected.

## Content and assets

The company logo and eight five-star Google review excerpts were supplied by the user. Review dates and profile metadata are omitted. Contact emails are ned@mandmfixings.com and john@mandmfixings.com.

Manufacturer logos were downloaded from M&M Fixings' existing website, https://www.mandmfixings.com/: fischer, DEWALT, Makita, Bosch, Everbuild, Rawl Fixings, Ancon and SPIT. Company history and technical services were checked against that website on 29 October 2026.

Hero photograph: https://images.unsplash.com/photo-1504148455328-c376907d081c (Unsplash). Fonts: Barlow Condensed and DM Sans via Google Fonts, with local system fallbacks. Map: Google Maps embed for Unit A5 Southpoint, Foreshore Road, Cardiff CF10 4SP.
