---
title: 'AI Case Triage'
type: 'personal'
track: 'n8n'
tagline: 'An event-driven n8n workflow that classifies, prioritises, and drafts a first reply, auto-routing the easy cases and escalating the rest.'
preview: 'A Salesforce-triggered workflow with an AI agent, a knowledge-grounded reply, a confidence gate, and an audit log of every decision.'
technologies: ['n8n', 'Salesforce', 'RAG']
links:
  repo: 'https://github.com/LeviTampus/n8n-case-triage'
assets:
  image: 'projects/n8n-case-triage.gif'
  imageAlt: 'A run of the case triage workflow: the agent classifies a case, drafts a reply, and routes or escalates it.'
order: 2
---

## Why I built it

Support cases arrive faster than a person can triage them. Every case needs a
category, a priority, a route, and a first reply. I wanted to automate that first
pass and keep a human for the risky ones.

## What it does

For each new case it classifies, prioritises, and drafts a grounded first reply.
Cases it is confident about are routed automatically; the uncertain ones are
escalated to a person.

## How it's built

An event-driven n8n workflow. A Salesforce trigger starts it, an idempotency
check skips cases already handled, an AI agent retrieves from a
Confluence-backed knowledge base, and a confidence gate decides whether to route
or escalate. Every decision is written to an audit table.

## Where it stands

Built and running against a test setup. It is the low-code companion to my
code-based agent work.
