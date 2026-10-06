---
title: 'AI API Diagnostic Team'
type: 'personal'
track: 'n8n'
tagline: 'A multi-agent API-troubleshooting team built low-code in n8n. Paste a URL or a failing response — it probes the endpoint, diagnoses the auth failure, and returns a likely cause with next steps.'
preview: 'An orchestrator routes to HTTP, Authentication, and Root Cause agents, each grounded in its own runbook and traced end to end. Measured against a 12-scenario evaluation.'
technologies: ['n8n', 'RAG', 'Supabase']
links: { repo: 'https://github.com/LeviTampus/api-diagnostic-team' }
assets:
  image: 'projects/ai-api-diagnostic-team.gif'
  imageAlt: 'A chat session where the team diagnoses a seeded API failure and returns a likely cause with next steps.'
featured: true
order: 1
status: 'building'
---

## Why I built it

First-line API triage is the work I did every day in support: read the status
code, check the headers, decide whether it's auth vs upstream vs a timeout, then
write it up clearly. I wanted to see how much of that first pass a small team of
agents could do — grounded in runbooks, and with a trace I could actually inspect
when it got something wrong.

## What it does

You paste a URL, an error, or a failing response. The team probes the endpoint,
checks for auth problems, and returns a likely cause with next steps. The
Authentication agent works from **pasted evidence only** — it never asks for or
handles credentials.

## How it's built

Low-code in n8n, using a nested-agent pattern. A Chat Trigger feeds an
**Orchestrator** agent (session-scoped memory) that calls three specialist
agents as tools:

- **HTTP Diagnostic** — probes a public URL with an HTTP Request tool.
- **Authentication** — diagnoses 401/403/407 from pasted evidence.
- **Root Cause** — synthesizes findings into a structured verdict
  (`likely_cause`, `confidence`, `evidence`, `next_steps`).

Each specialist has its **own knowledge base**, embedded with Google Gemini
embeddings into Supabase (Postgres + <code translate="no">pgvector</code>) and
retrieved through a metadata filter per agent. Every run is traced in
**LangSmith** (grouped per session via <code translate="no">thread_id</code>) and
logged to an audit table. The demo targets are a Cloudflare Worker with seeded
failing endpoints (expired token, 403, 500, 502, 429, wrong content-type,
timeout, redirect loop).

## Where it stands

Built and tested locally, and scored **12/12** on the scenario set. Hosted
deployment is in progress — the free tier I started on (512 MB) runs out of
memory for n8n under real load, so I'm moving it to a host with enough RAM before
linking a live demo.
