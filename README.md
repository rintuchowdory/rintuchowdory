```markdown
## Hi there 👋

This repository contains a minimal Next.js starter site and a GitHub Actions CI/CD workflow.

Getting started
---------------

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Build and export (static):

```bash
npm run build
npm run export
```

CI/CD
------

- The workflow at `.github/workflows/ci.yml` installs dependencies, builds the site, runs a static export (`out/`), and publishes `out/` to the `gh-pages` branch using `peaceiris/actions-gh-pages` and the built-in `GITHUB_TOKEN`.

Deployment notes
----------------

- For automatic production deployments consider connecting the repo to Vercel (recommended for Next.js) or keep using GitHub Pages for a static export.

If you'd like, I can: add a custom domain config, wire up Vercel deployment files, or improve the site content.

```
## Hi there 👋

<!--
**rintuchowdory/rintuchowdory** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
