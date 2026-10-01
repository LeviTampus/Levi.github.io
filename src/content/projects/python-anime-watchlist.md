---
title: 'Python Anime Watchlist'
type: 'personal'
tagline: 'A small Python app I built to practice the basics. The same code runs a command-line tool and a Tkinter window, and the watchlist saves to local JSON.'
preview: 'A fundamentals exercise with no external packages: the same modules back a CLI and a Tkinter window, and the watchlist is saved as local JSON.'
technologies: ['Python', 'Standard Library', 'Tkinter', 'Tenrai API', 'JSON Storage', 'CLI']
links:
  repo: 'https://github.com/LeviTampus/python-anime-watchlist'
featured: false
order: 3
status: 'shipped'
---

## Why I built it

A fundamentals exercise in Python: lists, dictionaries, functions, file
handling, JSON, and basic HTTP. I built something small and genuinely useful
rather than production software.

## What it does

From a menu you can view currently airing anime, search by title and add a
result, update episode progress, change watch status (Watching, Completed, Plan
to Watch, Dropped, On Hold), and remove entries. The watchlist is saved locally
and persists between runs.

## How it's built

Python 3 with no external packages, using the Tenrai API for anime data. The
same modules back both the command-line app (<code translate="no">main.py</code>) and an optional Tkinter
window (<code translate="no">gui.py</code>), with the watchlist stored as JSON in
<code translate="no">data/watchlist.json</code>.

## Where it stands

All core features work and the watchlist persists between sessions. It's
single-user with local JSON storage, and it depends on a public, unofficial
API.
