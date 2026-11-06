# BH Plumber

Responsive React website for a plumbing business serving Melbourne, Victoria.
The design retains the source template's blue-and-orange identity while
organizing pages, shared components, routes and styles into separate modules.

## Run locally

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

For Apache hosting, upload the contents of `dist/` to the site's document root.
The build includes `.htaccess`, which serves existing files and directories
normally and routes other URLs through `index.html` for React Router.

Run the route-rendering tests:

```sh
npm test
```

## Routes

- `/` — Home
- `/about` — About BH Plumber
- `/services` — Plumbing services
- `/booking` — Request a quote
- `/team` — Service approach
- `/testimonials` — Customer feedback policy
- `/contact` — Contact details and Melbourne map
- Any unmatched route — Not found page

## Project layout

```text
public/images/          Local website photography
src/components/common/  Header, footer, icons and navigation helpers
src/components/shared/  Reusable page sections and form components
src/constants/          Contact information, metadata and service content
src/hooks/              Shared React hooks
src/layouts/            Shared site layout
src/pages/              Route-level page components
src/routes/             Route definitions
src/styles/             Global, responsive, animation and variable styles
```

## Before publishing

Confirm the phone number in `src/constants/site.js` is the business's verified
number before launch. Quote and contact forms validate in the browser and then
open the visitor's email app with the enquiry addressed to the business email;
no enquiry is stored on a server. The
website includes downloaded Unsplash photography in `public/images`; the Melbourne
map is embedded from Google Maps and requires an internet connection.

The original page layout is adapted from [Plumberz by HTML Codex](https://htmlcodex.com/free-plumbing-website-template);
its attribution and license are retained in the site footer and `LICENSE.txt`.
