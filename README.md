# rintuchowdory.github.io portfolio site

This is a Next.js portfolio website configured for automatic deployment to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Because `next.config.js` uses `output: 'export'`, static files are generated in `out/`.

## GitHub Pages deployment

Deployment is automated via `.github/workflows/github-pages.yml`.

1. Push to `main`.
2. In GitHub repo settings, go to **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Wait for the **Deploy GitHub Pages** workflow to finish.

Your site will be published at:

- `https://rintuchowdory.github.io/`

## CI checks

`.github/workflows/ci.yml` runs dependency install and static build checks on PRs and pushes.
