---
title: 'Python Anime Watchlist'
type: 'personal'
tagline: "A small command-line app for searching anime, following what's airing, and keeping a watchlist that persists between sessions."
technologies: ['Python', 'Standard Library', 'Tkinter', 'Tenrai API', 'JSON Storage', 'CLI']
links:
  repo: 'https://github.com/LeviTampus/python-anime-watchlist'
featured: false
order: 2
---

## Why I built it

A fundamentals exercise in Python — lists, dictionaries, functions, file
handling, JSON, and basic HTTP — built as something small and genuinely useful
rather than as production software.

## What it does

From a menu you can view currently airing anime, search by title and add a
result, update episode progress, change watch status (Watching, Completed, Plan
to Watch, Dropped, On Hold), and remove entries. The watchlist is saved locally
and persists between runs.

## How it's built

Python 3 with no external packages, using the Tenrai API for anime data. The
same modules back both the command-line app (`main.py`) and an optional Tkinter
window (`gui.py`), with the watchlist stored as JSON in `data/watchlist.json`.

## Where it stands

All core features work and the watchlist persists between sessions. It's
single-user with local JSON storage, and it depends on a public, unofficial
API.
