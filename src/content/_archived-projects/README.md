# Archived project entries

Project entries parked here are **not rendered** by the portfolio. Astro only
loads the collections defined in `src/content.config.ts`, and `_archived-projects`
is not one of them (the leading underscore also marks it as intentionally
ignored).

## diagnostic-agent.md

`Integration / API Diagnostic Agent` was hidden from the visible portfolio in
the September 2026 project update, when `Python Anime Watchlist Agent` took the
featured slot. Nothing was deleted and git history is intact.

To restore it:

1. Move `diagnostic-agent.md` back into `src/content/projects/`.
2. Set `featured: true` if it should take the featured slot again, and clear
   that flag on whichever entry currently holds it.
3. Adjust `order` values if needed — the Projects page sorts by `featured`
   first, then by `order`.
4. Rebuild. If the entry does not appear, clear the local content cache:
   `rm -rf node_modules/.astro .astro && npm run build`.
