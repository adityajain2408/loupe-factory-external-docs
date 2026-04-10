# Loupe Factory — Public documentation site

This repository contains the **customer-facing documentation** for [Loupe Factory](https://loupefactory.com): a static site generated with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme. It is intentionally **separate** from the main Loupe Factory application codebase (Django monolith, private product repo). Only user-relevant product guidance lives here—not internal implementation or vendor-specific backend details.

## Live site

[docs.loupefactory.com](https://docs.loupefactory.com) (see `site_url` in `mkdocs.yml`).

---

## What is Loupe Factory?

Loupe Factory is an **AI-native operations platform** for **modern manufacturing and wholesale**. It brings day-to-day work into one workspace: **inventory**, **production tracking**, **orders**, **invoicing**, **shipments**, **customers and suppliers**, **team access**, and **reporting**—with built-in AI where it removes busywork. The live product runs on the main application deployment (e.g. `app.loupefactory.com`); this repository holds customer-facing documentation only.

---

## What this project is (and is not)

| In scope | Out of scope |
|----------|----------------|
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
├── vercel.json           # Vercel build: pip install + mkdocs build → site/
└── site/                 # Generated static HTML (after build; not hand-edited)
```

### Build pipeline

1. **Source:** Markdown + assets in `docs/`.
2. **Generator:** MkDocs reads `mkdocs.yml`, applies Material theme, minification, and optional git metadata plugins.
3. **Output:** Static files under `site/`, suitable for any static host.

### Deployment (Vercel)

- `vercel.json` runs `pip install … -r requirements.txt` then `mkdocs build`, with `ENABLE_GIT_PLUGINS=true` so optional git-based **last updated** metadata can run when git history is available.
- Published output directory: `site`.

### Plugins (see `mkdocs.yml`)

- **search** — Full-text search index.
- **minify** — HTML minification for production builds.
- **git-revision-date-localized** — Optional “last updated” timestamps; gated by `ENABLE_GIT_PLUGINS` when git metadata is unavailable locally.

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

Open the URL MkDocs prints (usually `http://127.0.0.1:8000`) to preview with live reload.

### Strict build (recommended before deploy)

```bash
mkdocs build --strict
```

To match production plugin behavior locally (if you want last-edited dates from git):

```bash
ENABLE_GIT_PLUGINS=true mkdocs build --strict
```

---

## Content conventions

- **Audience:** Loupe Factory customers and admins using the product—not engineers integrating private APIs.
- **Tone:** Clear, task-oriented guides; the home page uses shared classes in `docs/stylesheets/extra.css` for layout.
- **Assets:** Prefer `docs/assets/` for images and icons so they are versioned with the docs; favicons live under `docs/assets/images/`.

For internal product engineering details, use the main application codebase and its maintainer documentation—not this docs site.

---

## Related links

- **Product:** [loupefactory.com](https://loupefactory.com)
- **Docs (canonical):** [docs.loupefactory.com](https://docs.loupefactory.com)
- **Theme docs:** [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

---

## License / copyright

Site copyright and attribution are configured in `mkdocs.yml` (`copyright`, `site_author`). Refer to your organization’s policy for repository licensing.
