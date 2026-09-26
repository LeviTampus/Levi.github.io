---
title: 'Python Anime Watchlist Agent'
type: 'personal'
tagline: 'A from-scratch CLI AI agent that manages an anime watchlist by chatting in natural language.'
technologies: ['Python', 'LLM Agents', 'Tool Calling', 'Ollama / Groq', 'CLI', 'Tenrai API']
links:
  repo: 'https://github.com/LeviTampus/python-anime-watchlist-agent'
featured: true
order: 1
trace:
  title: 'Agent run'
  status: 'Confirmed'
  steps:
    - 'Read your message'
    - 'Pick a tool + arguments'
    - 'Ask before changing'
    - 'Run the Python function'
    - 'Answer, or loop again'
---

## Why I built it

A personal project to understand how AI agents actually work by building one
from scratch — the model call, the system prompt, the tools, the agent loop,
and how it decides to stop. The goal was to learn the parts rather than wrap a
framework.

## What it does

It manages an anime watchlist through chat. You can ask what's airing, search
for a title, add it, log episodes watched, change its status, or remove it. For
each message the agent picks a tool, and anything that changes the watchlist
asks for a <code translate="no">y/n</code> confirmation before it runs.

## How it's built

Plain Python with no external dependencies. The model replies with JSON naming
a tool and its arguments; the program runs the matching function and feeds the
result back until the model calls <code translate="no">finish</code>. It works with any OpenAI-compatible
endpoint — Ollama locally or Groq in the cloud — and pulls anime data from the
Tenrai API. The model never executes code itself; the program decides what
happens.

## Where it stands

A working CLI agent and a clearer picture of how agent loops are wired. Chat
memory is session-only and small models can be unreliable at returning valid
JSON, so it's built to learn, not for production. The watchlist logic and data
layer come from the companion watchlist app.
