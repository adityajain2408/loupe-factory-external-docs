# Loupe Factory: Public documentation site

This repository contains the **customer-facing documentation** for [Loupe
Factory](https://loupefactory.com): a static site generated with
[MkDocs](https://www.mkdocs.org/) and the [Material for
MkDocs](https://squidfunk.github.io/mkdocs-material/) theme. It is intentionally
**separate** from the main Loupe Factory application codebase (Django monolith,
private product repo). Only user-relevant product guidance lives here, not
internal implementation or vendor-specific backend details.

## Live site

[docs.loupefactory.com](https://docs.loupefactory.com) (see `site_url` in
`mkdocs.yml`).

---

## What is Loupe Factory?

Loupe Factory is an **AI-native operations platform** for **modern manufacturing
and wholesale**. It brings day-to-day work into one workspace: **inventory**,
**production tracking**, **orders**, **invoicing**, **shipments**, **customers
and suppliers**, **team access**, and **reporting**, with built-in AI where it
removes busywork. The live product runs on the main application deployment (
`www.loupefactory.com`); this repository holds customer-facing documentation
only.

---

## What this project is (and is not)

| In scope | Out of scope |
| --- | --- |
| Markdown under `docs/` (guides, FAQ, billing help) | Application source code, APIs, or database schemas |
| Theme overrides, CSS, and MkDocs configuration | Production infrastructure runbooks for the Django app |
| Build output in `site/` (generated; deploy from CI) | Private or internal-only technical wikis |

---

## Architecture

```text
Loupe-Factory-external-docs/
├── docs/                 # All documentation source (Markdown + assets)
│   ├── index.md          # Marketing-style home (custom HTML/CSS sections)
│   ├── getting-started/
│   ├── platform-guide/
│   ├── account-billing/
│   ├── stylesheets/      # extra.css (brand colors, landing components)
│   └── assets/           # Images, favicons copied into the built site
├── overrides/            # Jinja templates extending Material (e.g. main.html)
├── mkdocs.yml            # Site metadata, nav, theme, plugins, extensions
├── requirements.txt      # Python deps for MkDocs and plugins
├── vercel.json           # Vercel install/build config for the docs site
├── .github/workflows/
│   └── ci.yml            # CI build verification for pushes and pull requests
└── site/                 # Generated static HTML (after build; not hand-edited)
```

### Build pipeline

1. **Source:** Markdown + assets in `docs/`.
2. **Generator:** MkDocs reads `mkdocs.yml`, applies Material theme,
   minification, optional git metadata plugins, and the production image
   pipeline for shared PMS screenshots.
3. **Output:** Static files under `site/`, suitable for any static host.

### Shared image pipeline

This project uses **Choice 2** for shared product screenshots:

- Docs pages reference fully qualified PMS CDN image URLs under
  `https://cdn.loupefactory.com/static/assets/img/...`.
- Material for MkDocs **privacy** downloads those external PMS images into the
  static build during production-style builds.
- Material for MkDocs **optimize** compresses the downloaded PMS images before
  deployment.
- Vercel serves the resulting static files from the docs deployment and
  provides the global edge caching layer.

This keeps the docs repo lightweight while still publishing self-hosted image
assets in the final site build.

### Deployment (Vercel)

- `vercel.json` creates a local `.vercel-venv`, installs from
  `requirements.txt`, installs `pngquant`, and runs `python -m mkdocs build
  --strict`.
- The build keeps `ENABLE_GIT_PLUGINS=true` so optional git-based **last
  updated** metadata can run when git history is available.
- The build also sets `DOCS_EXTERNAL_IMAGE_PIPELINE=true` so the Material
  `privacy` and `optimize` plugins run in Vercel.
- Published output directory: `site`.

### GitHub Actions CI

- `.github/workflows/ci.yml` validates the docs build on pushes and pull
  requests.
- CI no longer performs a second manual Vercel CLI deployment from `./site`;
  production deployment is handled by Vercel from the repository root using
  `vercel.json`.

### Plugins (see `mkdocs.yml`)

- **search**: Full-text search index.
- **privacy**: Downloads externally referenced PMS CDN screenshots into the
  built site during production-style builds.
- **optimize**: Optimizes downloaded PMS screenshots after the privacy plugin
  registers them with the build.
- **minify**: HTML minification for production builds.
- **git-revision-date-localized**: Optional “last updated” timestamps; gated by
  `ENABLE_GIT_PLUGINS` when git metadata is unavailable locally.

---

## Local development

### Requirements

Python 3.x with `pip`.

```bash
cd Loupe-Factory-external-docs
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

Open the URL MkDocs prints (usually `http://127.0.0.1:8000`) to preview with
live reload.

By default, local builds leave the shared PMS image pipeline off. In that mode,
docs pages keep their absolute CDN image URLs and do not self-host or optimize
them locally.

### Strict build (recommended before deploy)

```bash
mkdocs build --strict
```

To match production plugin behavior locally (if you want last-edited dates from
git):

```bash
ENABLE_GIT_PLUGINS=true mkdocs build --strict
```

### Production-parity image build

To run the same shared-image pipeline locally that Vercel runs in production:

```bash
DOCS_EXTERNAL_IMAGE_PIPELINE=true ENABLE_GIT_PLUGINS=true mkdocs build --strict
```

Notes:

- `mkdocs-material[imaging]` is installed from `requirements.txt` for Material
  image-processing support.
- `pngquant` must be available in your `PATH` for `.png` optimization.
- Vercel installs `pngquant` with `dnf` in `vercel.json`.

---

## Content conventions

- **Audience:** Loupe Factory customers and admins using the product, not
  engineers integrating private APIs.
- **Tone:** Clear, task-oriented guides; the home page uses shared classes in
  `docs/stylesheets/extra.css` for layout.
- **Assets:** Prefer `docs/assets/` for images and icons so they are versioned
  with the docs; favicons live under `docs/assets/images/`.
- **Shared PMS screenshots:** When reusing PMS product screenshots, reference
  the absolute CDN path under `https://cdn.loupefactory.com/static/assets/img/`
  in Markdown. The production image pipeline will self-host and optimize those
  files in the final docs build.

For internal product engineering details, use the main application codebase and
its maintainer documentation, not this docs site.

---

## Related links

- **Product:** [loupefactory.com](https://loupefactory.com)
- **Docs (canonical):** [docs.loupefactory.com](https://docs.loupefactory.com)
- **Theme docs:** [Material for
  MkDocs](https://squidfunk.github.io/mkdocs-material/)

---

## License / copyright

Site copyright and attribution are configured in `mkdocs.yml` (`copyright`,
`site_author`). Refer to your organization’s policy for repository licensing.
