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

A personal AI application engineering project built to understand how AI agents
work behind the scenes — not just how to use one. The point was to design the
moving parts myself: conversation handling, memory, planning, tool calling,
knowledge retrieval, RAG, orchestration, validation, evaluation, structured
outputs, and a model-abstraction layer that keeps the agent portable across
providers.

## What it does

It investigates integration and API issues. Production integrations fail in
ambiguous ways — an HTTP call returns an unexpected status, a payload doesn't
match, a workflow stalls — and diagnosing them means correlating logs, docs, and
live API behavior by hand. The agent runs HTTP and API diagnostics, retrieves
troubleshooting knowledge, and produces a structured report of what it checked,
what it found, and what to try next.

## How it's built

A LangGraph-orchestrated agent with planning and tool calling, backed by memory
and retrieval over troubleshooting knowledge. Outputs are validated and
structured rather than free-form text, and the model layer is abstracted so the
same agent can run against interchangeable AI models. Automated tests cover the
pipeline.

## Where it stands

A working live demo plus hands-on depth in agent architecture — planning, tool
use, memory, retrieval, validation, and report generation. Built to learn how
agents work; not a production system.
