# portfolio-redesign

Personal portfolio for Levi Joan Tampus — technical support, integrations,
APIs, automation, troubleshooting, and AI applications.

Built with [Astro](https://astro.build) as a static, zero-client-JS site.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run `astro check` (types + content schemas) |

## Structure

```
src/
  components/   UI building blocks (Hero, ProjectCard, Role, ...)
  content/      Content collections (projects, recipes, certs, experience, archive, recognition)
  data/         Site-wide data (contact/social links, skill categories)
  layouts/      Base HTML document layout
  pages/        Routes (single-page index + 404)
  styles/       Design tokens
```

## Content

Portfolio entries live in `src/content/` as Markdown or JSON and are validated
against the schemas in `src/content.config.ts`. Adding a project, recipe,
certificate, or role is a data-only change — no layout edits required.

- **Projects** (`projects/*.md`): `featured` and `order` control emphasis and sort.
- **Experience** (`experience/*.json`): `tier` (`current`/`earlier`) and `order`.
- **Recipes** (`recipes/*.md`): `purpose` is optional.
- **Recognition** is reserved and only renders once an entry has `status: published`.

## Notes

- `resume.pdf` and `design-preference.png` are local references and are
  intentionally git-ignored. Do not publish them.
- The site is deployed as a GitHub project site. `base: '/portfolio-redesign'`
  in `astro.config.mjs` must match the final repository name.
- Web fonts are loaded from Google Fonts; self-hosting is a possible future
  improvement.
