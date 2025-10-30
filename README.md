# SweetHaven — Product Page

A lightweight, responsive product landing page built with plain HTML, CSS and JavaScript. This repository contains the front-end for a simple e-commerce product page (product listing, product details and a cart page) intended as a small demo project.

## Live demo

Open `index.html` in your browser or serve the folder locally (instructions below).

## Key features

- Responsive layout for desktop and mobile
- Product listing and product detail UI (static dataset)
- Simple cart page at `pages/cart.html`
- No build step or frontend framework — small and easy to customize

## Tech stack

- HTML5
- CSS3 (written in `style.css`)
- Vanilla JavaScript (`index.js`)

## Repository structure

```
.
├── index.html         # Main product page
├── index.js           # Front-end JavaScript
├── style.css          # Project styles
├── assets/            # Images, icons and other static assets
└── pages/
	└── cart.html      # Cart / checkout demo page
```

## Getting started (local)

Prerequisites

- A modern browser (Chrome, Firefox, Edge, Safari).
- Optional: Node.js (for `npx serve`) or Python 3 to quickly serve the site.

Recommended ways to run locally

Using Python 3 built-in server (works on Windows with WSL, Git Bash, or PowerShell):

```bash
# from the project root
python -m http.server 3000
# then open http://localhost:3000
```

Using Node.js (no global install):

```bash
# from the project root
npx serve -s . -l 3000
# or
npx http-server -p 3000
# then open http://localhost:3000
```

Or just double-click `index.html` to open in your default browser (some features that use routing or fetch may require a server).

## Development notes

- The project is intentionally dependency-free to keep it simple and portable.
- Styles live in `style.css`. Modify variables and classes there to restyle the page.
- Behavior is implemented in `index.js`. For new features, keep code modular and well-commented.

## Performance & accessibility

- Images in `assets/` should be optimized (WebP/AVIF where possible) to keep the page fast.
- Use semantic HTML (headings, buttons, aria-\* attributes) when adding interactive components.
- Aim for efficient DOM updates — avoid reflows in tight loops.

## Deployment

This is a static site and can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, Surge, S3, etc.).

GitHub Pages quick deploy (choose the repository settings -> Pages -> deploy from `main` branch / root):

1. Push your code to the `main` branch.
2. In repo Settings → Pages, set the source to the `main` branch and / (root). GitHub will publish the site.

Alternatively, deploy with the `gh-pages` package or use your preferred CI to push a `gh-pages` branch.


## Contributing

Contributions are welcome. A minimal contributing flow:

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Make changes and commit with meaningful messages
4. Open a pull request describing your changes

If you add features, please include basic usage instructions and (when appropriate) a small test or example.

## License

This repository has no license file by default. If you want others to reuse your code, consider adding an open-source license such as the MIT License. To use MIT, add a `LICENSE` file with the MIT text.


