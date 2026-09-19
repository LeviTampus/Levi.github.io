---
title: 'Integration / API Diagnostic Agent'
type: 'personal'
tagline: 'AI troubleshooting agent that investigates integration and API issues with diagnostic tools and knowledge retrieval.'
technologies: ['Python', 'LangGraph', 'RAG', 'Tool Calling', 'APIs', 'HTTP Diagnostics']
links:
  demo: 'https://integration-api-diagnostic-agent.onrender.com/'
featured: true
order: 2
---

## Why I built it

A personal project to learn how AI agents actually work by building one. I
used AI assistance throughout — the goal was understanding the parts, not
claiming to have invented them.

## What it does

It investigates integration and API issues. When a call returns an unexpected
status or a payload doesn't match, the agent runs HTTP and API diagnostics,
pulls in troubleshooting notes, and returns a short report of what it checked,
what it found, and what to try next.

## How it's built

A LangGraph agent with tool calling and retrieval over troubleshooting notes.
Outputs are structured rather than free-form, and the model layer is swappable.

## Where it stands

A working demo and a better grasp of agent architecture. Built to learn, not
production-ready.
