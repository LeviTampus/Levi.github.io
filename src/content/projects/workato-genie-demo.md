---
title: 'Agent Conan — Workato Genie'
type: 'professional'
tagline: 'A Workato Genie agent built in my support role that reviews the morning ticket queue and notifies each assignee, with a companion skill for ticket details.'
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
order: 4
wip: true
---

## Why I built it

In my support role at Workato I use a personal agent to monitor my queue. I built
this as the team version, so the whole team gets the same monitoring instead of
each person watching their own tickets.

## What it does

Each morning it reviews the incoming ticket queue, pulls the details for each
ticket through a companion skill, and notifies the assignee.

## How it's built

A Workato Genie agent — Agent Conan — paired with a ticket-details skill. The
agent recipe runs the morning review; the skill handles the lookups. Both recipes
are shared in Workato's community and linked below.

## Where it stands

Built, but not in use yet. The walkthrough video is still being recorded and will
be added here once it's ready.
