---
title: 'Place pipeline processors anywhere you need them with Pipeline Control'
summary: 'Add, reorder, and delete Sample Rate, Filter, and Transform processors at any point in a Pipeline Control pipeline, instead of being limited to one fixed node of each type.'
releaseDate: '2026-09-30'
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-control/pipeline-control/gateway/ui-guide'
---

Pipeline Control pipelines used to ship with a static, fixed structure — one Sample Rate node, one Filter node, one Transform node, in a set order. Now you can add and delete Sample Rate, Filter, and Transform processors at any point in the pipeline, in any order, as many times as you need.

## What you get

- **No more fixed layout** — Insert a Sample Rate, Filter, or Transform node at any point along the pipeline using the **+** control between two nodes, instead of being limited to one of each in a preset position. Stack multiple Filter or Transform nodes back to back, or sample before and after a transform — whatever order your data needs.
- **Write OTTL by hand or start from a recipe** — Transform and Filter rules are backed by real OpenTelemetry Transformation Language (OTTL) statements. Use the built-in recipes to pre-fill common conditions and statements, or write your own from scratch, and preview exactly how a rule reshapes a sample payload before you save it.
- **Draft, save, and deploy on your terms** — Changes to a pipeline are staged as a new draft version. Save your draft, preview the generated OTel YAML, and only push it live when you're ready with **Create Deployment**.
- **Delete a processor from anywhere in the chain** — Added a node for testing, or no longer need one in the middle of the pipeline? Delete it from wherever it sits on the map, save the draft, and redeploy. Nodes don't have to stay in their original slot, or stay at all.

## Get started

Open **New Relic Control > Pipeline Control > Pipelines**, select a pipeline, and use the **+** control between any two nodes — anywhere along the chain — to add a Sample Rate, Filter, or Transform step. Define your condition and OTTL statement (or pick a recipe), save your draft, and click **Create Deployment** to roll it out to your fleet. To remove a processor, select its delete icon wherever it sits in the pipeline, save the draft, and deploy again.

To learn more, see [Gateway UI guide](https://docs.newrelic.com/docs/new-relic-control/pipeline-control/gateway/ui-guide).
