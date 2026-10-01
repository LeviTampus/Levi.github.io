# PORTFOLIO_STORY.md

Single source of truth for the portfolio **narrative**. The projects page and
each repo README are generated from this file, so they always match.

> Rule: **framing + numbers, together.** A claim without a measured number
> hurts credibility. One number per project (except learning pieces).

## Positioning line

> Technical support engineer who builds **AI automations at work** — and
> rebuilds them **from scratch** to actually understand them.

## Hero (two featured cards)

- **Featured project (technical depth):** `RAG Eval Assistant` — *when it
  ships.* Until then, keep the watchlist agent featured.
- **From my day job (professional proof):** `Agent Conan — Workato Genie` —
  real production AI, closest to the AI-Ops role.

## "How I got here" (narration, ~60s read)

1. **At work** I build AI automations — **Genies** in Workato. I saw what they
   can and can't do, and I wanted to understand them *under the hood*.
2. **So I built an agent outside work**, and leaned on AI to write most of it.
3. **It worked, but the code grew past what I could explain.** I couldn't trust
   a change I didn't understand, so I **started over from scratch.**
4. I rebuilt my **Python fundamentals**, built my **first agent**, and now I'm
   building a **RAG assistant with an evaluation harness** — because I want to
   *measure* what I build.

*That last line is the pitch: **ownership + measurement.***

## Per-project one-liners (+ one number each)

| Project | One-liner | The number |
|---|---|---|
| **Agent Conan — Workato Genie** | A Workato Genie that reviews the morning ticket queue and notifies each assignee, with a companion skill for ticket details. | e.g. "~X min/day saved" or "N tickets/morning" *(measure it)* |
| **Integration / API Diagnostic Agent** | My first attempt at an agent. AI wrote most of it, and the code grew past what I could explain. | *(failed first attempt — no number)* |
| **Python Anime Watchlist** | A fundamentals exercise — one core backing both a CLI and a Tkinter window, persisted as local JSON. | e.g. "0 dependencies · CLI + GUI" |
| **Anime Watchlist Agent** | A from-scratch CLI AI agent — no framework: raw LLM API, JSON tool loop, and a confirm-before-changing gate. | e.g. "8 tools · 0 dependencies" |
| **LangChain Practice** | A guided build that grows a planetary Q&A assistant from prompt template → RAG → tool calling. | (learning — no number needed) |
| **RAG Eval Assistant** | A RAG assistant over 40 anime knowledge bases, with an evaluation harness that measures and improves retrieval. | recall@4 naive → hybrid → rerank *(fill after M7)* |

## Copy rules

- ✅ First person, short sentences, *how I think*
- ✅ One number per project (except learning pieces)
- ✅ Honest labels: Personal / Professional / Learning / Archived
- ❌ No long bio, no tool lists, no "passionate about AI"

## Page order

```
Hero (2 cards) → "How I got here" → All projects → Workato Integrations → From the archives
```

## Safety note

Keep the Workato angle **public-safe**: high-level description only (public
community recipes are fine). No internal demos, client data, or non-public
details.
