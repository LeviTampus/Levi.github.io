---
title: 'Integration / API Diagnostic Agent'
type: 'personal'
tagline: 'AI troubleshooting agent that investigates integration and API issues with diagnostic tools and knowledge retrieval.'
technologies: ['Python', 'LangGraph', 'RAG', 'Tool Calling', 'APIs', 'HTTP Diagnostics']
tags: ['AI Agents', 'Integrations', 'Automation']
links:
  demo: 'https://integration-api-diagnostic-agent.onrender.com/'
tbd: ['repo']
---

## Problem

Production integrations fail in ambiguous ways — an HTTP call returns an
unexpected status, a payload doesn't match, a workflow stalls — and diagnosing
them means correlating logs, docs, and live API behavior by hand.

## Approach

A personal project exploring agentic AI: a LangGraph-orchestrated agent with
planning, tool calling, memory, structured outputs, and validation. It runs
HTTP/API diagnostics, retrieves troubleshooting knowledge (RAG), works across
interchangeable AI models via a model-abstraction layer, and generates a
structured diagnostic report. Automated tests cover the pipeline.

## Outcome

A working live demo plus hands-on depth in agent architecture — planning, tool
use, validation, and report generation — that complements professional
integration-troubleshooting experience. Built to learn how AI agents work
behind the scenes; not a production system.
