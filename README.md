# GitHub Pages Demo

A minimal TypeScript project for learning web development and GitHub Pages deployment.

## Tech Stack

- TypeScript
- Vite
- Node.js / npm
- GitHub Actions
- GitHub Pages

## Prerequisites

Verify the required tools:

```bash
git --version
node --version
npm --version
```

Node.js must satisfy the version requirements defined by Vite.

## Setup

Initialize Vite in the repository root if it has not been configured:

```bash
npm create vite@latest . -- --template vanilla-ts
```

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

GitHub Pages deployment is automated using GitHub Actions.

- Vite configuration: `vite.config.ts`
- Deployment workflow: `.github/workflows/deploy.yml`
- Build output: `dist/`

Configure GitHub Pages:

1. Open **Settings → Pages**.
2. Set the deployment source to **GitHub Actions**.
3. Push changes to `main`.
4. Verify the deployment in the **Actions** tab.

Expected URL:

`https://<username>.github.io/github_pages_demo/`

## Verification

- [ ] Required tools available
- [ ] Dependencies installed
- [ ] Local development successful
- [ ] Production build successful
- [ ] GitHub Actions deployment successful
- [ ] Published website accessible

## References

- [Vite](https://vite.dev/guide/)
- [GitHub Pages](https://docs.github.com/en/pages)