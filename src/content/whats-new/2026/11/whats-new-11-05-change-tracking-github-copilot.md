---
title: 'Change Tracking for GitHub Copilot is now in Preview'
summary: 'Link deployments to pull requests and trigger automated GitHub Copilot fix workflows when regressions occur.'
releaseDate: '2026-11-09'
learnMoreLink: 'https://docs.newrelic.com/docs/agentic-ai/autopilot/change-tracking-for-github-copilot/'
---

Change Tracking for GitHub Copilot connects production telemetry to automated code remediation. Autopilot monitors service health after each deployment, ties regressions back to the specific pull request that caused them, and opens a GitHub Issue with the evidence GitHub Copilot needs to start work on a fix.

This feature is in Preview. To access it, you must be a New Relic Organization Manager and opt in at **one.newrelic.com > Administration > Preview & Trials**.

## How it works

After a deployment, Autopilot checks service health at six checkpoints: 10 minutes, 30 minutes, 1 hour, 2 hours, 24 hours, and 72 hours. At each checkpoint it reports one of three results: regression, no regression, or inconclusive.

When Autopilot detects a regression, we automatically open a GitHub Issue that describes what regressed, the supporting evidence, where to investigate, and acceptance criteria for a fix. If your organization has GitHub Copilot Enterprise, Copilot picks up the issue and starts work automatically.

## Get started

Follow these steps to set up Change Tracking for GitHub Copilot:

1. Configure a GitHub Fine-Grained Personal Access Token (PAT) with read and write access to pull requests, issues, and contents.
2. Click **Ask AI** in New Relic, click **...**, then click **Configure**. Under **External MCP connections**, connect GitHub with your token and organization name, then turn on **Enable deployment monitoring**.
3. Include `watchpoint_monitoring: "true"` in the custom attributes of your Change Tracking deployment mutation to trigger deployment monitoring.

[Learn more](https://docs.newrelic.com/docs/agentic-ai/autopilot/change-tracking-for-github-copilot/)
