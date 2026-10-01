---
title: 'Agent Conan — Workato Genie'
type: 'professional'
tagline: 'A Workato Genie that reviews the morning ticket queue and notifies the assignee. A separate skill fetches the ticket details.'
preview: 'The team version of my personal monitoring agent. It reviews the morning queue, fetches each ticket’s details through a companion skill, and notifies the assignee.'
hero: 'professional'
technologies: ['Workato', 'Workato Genie', 'Agent Skills', 'Slackbot']
links: {}
assets:
  image: 'projects/agent-conan-snapshot.jpg'
  imageAlt: 'Overview of the Workato Agent Conan and its morning ticket review recipe.'
  imageWidth: 1682
  imageHeight: 850
  recipe: 'https://app.workato.com/recipes/82410038-morning-ticket-review/browse?community=us'
  skill: 'https://app.workato.com/recipes/82411073-ticket-details/browse?community=us'
featured: false
order: 1
status: 'building'
---

## Why I built it

In my support role at Workato I use a personal agent to monitor my queue. I built
this as the team version, so the whole team gets the same monitoring instead of
each person watching their own tickets.

## What it does

Each morning it reviews the incoming ticket queue, pulls the details for each
ticket through a companion skill, and notifies the assignee.

## How it's built

The agent is a Workato Genie named Agent Conan, paired with a ticket-details
skill. The agent recipe runs the morning review, and the skill handles the
lookups. Both recipes are shared in Workato's community and linked below.

## Where it stands

Built, but not in use yet. The walkthrough video is still being recorded and will
be added here once it's ready.
