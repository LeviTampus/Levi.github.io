---
title: 'RAG Eval Assistant'
type: 'personal'
track: 'python'
tagline: 'A RAG assistant over 40 anime knowledge bases, with an evaluation harness that measures retrieval and improves it.'
preview: 'A grounded, cited assistant that compares a dense baseline, a hybrid retriever, and a reranked version against a hand-written question set.'
technologies: ['Python', 'LangChain', 'Chroma', 'RAG']
links:
  repo: 'https://github.com/LeviTampus/rag-eval-assistant'
order: 1
---

## Why I built it

After building an agent from scratch, retrieval was the next part I wanted to
understand, and the part I most wanted to measure. A RAG system is easy to demo
and hard to prove, so I built the evaluation in from the start.

## What it does

Answers questions over 40 anime knowledge bases with citations, and reports how
well retrieval works.

## How it's built

A pipeline of load, chunk, embed, retrieve, and answer with a grounded prompt. I
compare a dense baseline, a hybrid retriever, and a reranked version against a
hand-written question set, and score the answers with an LLM judge.

## Where it stands

Working locally as a CLI and a Gradio app. I am holding off on a public demo
until retrieval stops citing weak matches on out-of-corpus questions.
