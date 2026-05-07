# Rintu Chowdory — ChatGPT Clone Portfolio

This repository contains a Next.js ChatGPT-style portfolio assistant built for GitHub Pages. It is a recruiter-friendly project that demonstrates chat UI design, React state management, prompt workflows, and safe deployment practices.

## Features

- ChatGPT-style messaging interface for portfolio and CV prompts.
- Starter prompts for project descriptions, CRM planning, and GitHub README improvements.
- Static GitHub Pages deployment with no secrets committed to the repository.
- OpenAI-ready documentation for adding a real server-side API integration later.

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

## OpenAI API key setup

This static GitHub Pages version runs in demo mode. Do **not** put an OpenAI API key in browser code, Git history, or public repository settings.

To add real AI responses later:

1. Create an API key from the OpenAI dashboard.
2. Store it as a private environment variable named `OPENAI_API_KEY` on a server-side host such as Vercel, Render, Fly.io, or your own backend.
3. Add a private API endpoint that calls the OpenAI Responses API from the server.
4. Call your own endpoint from the React UI.

Example environment variable name:

```bash
OPENAI_API_KEY=your_private_key_here
```

## GitHub Pages deployment

Deployment is automated via `.github/workflows/github-pages.yml`.

1. Push to `main`.
2. In GitHub repo settings, go to **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Wait for the **Deploy GitHub Pages** workflow to finish.

For this repository, GitHub may publish the project page at:

- `https://rintuchowdory.github.io/rintuchowdory/`

If you create a repository named `rintuchowdory.github.io`, the same site can publish at:

- `https://rintuchowdory.github.io/`

## CI checks

`.github/workflows/ci.yml` runs dependency install and static build checks on PRs and pushes.
