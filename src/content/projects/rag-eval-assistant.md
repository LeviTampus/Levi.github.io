---
title: 'RAG Eval Assistant'
type: 'personal'
tagline: 'A RAG assistant that answers questions over 40 anime knowledge bases. An evaluation harness scores the retrieval so I can tell when a change helps.'
preview: 'Question answering over 40 anime knowledge bases, measured with an evaluation harness so retrieval changes are scored instead of guessed.'
status: 'planned'
featured: false
order: 6
links: {}
---

## Why I built it

After building an agent from scratch, retrieval was the next part I wanted to
understand, and the part I most wanted to measure. A RAG system is easy to demo
and hard to prove, so I want numbers behind the retrieval.

## What it does

Answers questions over 40 anime knowledge bases using retrieval-augmented
generation, with an evaluation harness that scores how well retrieval finds the
right passages.

## How it's built

Planned pipeline: naive retrieval first, then hybrid, then rerank. Each step is
scored with <code translate="no">recall@4</code> against a labeled evaluation set,
so every change is measured instead of assumed.

## Where it stands

Not built yet. The evaluation design comes first; the numbers will be added here
once the harness runs.
