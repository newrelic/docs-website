---
title: 'Cloud Cost Intelligence reaches General Availability'
summary: 'Unify cloud cost visibility and observability across AWS, Azure, and Google Cloud with production-ready FinOps capabilities'
releaseDate: '2026-04-28'
learnMoreLink: 'https://docs.newrelic.com/docs/cci/overview/'
---

Cloud Cost Intelligence brings full cloud cost visibility directly into New Relic.

In modern cloud environments, cost accountability is a major source of organizational friction. Engineering teams know their services are running, but finance teams can't attribute spend to the right teams, applications, or resources — and optimization opportunities stay buried in spreadsheets. Cloud Cost Intelligence closes that gap by embedding full cloud cost visibility directly into New Relic, alongside the performance data you already rely on every day.

CCI supports all three major cloud providers — **AWS, Azure, and Google Cloud** — and delivers a unified view of your cloud expenditure without requiring you to leave the New Relic platform.

## What's included at GA

### Intelligent Summary Dashboard

The centerpiece of CCI is the **Intelligent Summary Dashboard** — an at-a-glance view of all cloud spending across services, teams, and regions. The interactive Sankey chart makes it easy to trace cost flows from account to service to resource. Month-over-month trend analysis and top 5 cost variance drivers let you identify anomalies before they become budget surprises.

### Cost Overview and Drill-Down Analysis

Go beyond the summary with the **Cost Overview** page. Slice your spend by cloud provider, account, region, charge type, or custom resource tags. Switch between bar charts, line charts, tree charts, and heat maps to find the visualization that surfaces the signal fastest. Drill from the service level all the way down to individual resources in just a few clicks.

### Kubernetes Cost Allocation

For teams running containerized workloads, **Kubernetes Cost Allocation** breaks down cluster spend by application name, providing CPU and memory usage alongside unused and unallocated cost visibility. By leveraging your existing New Relic Kubernetes telemetry, this feature requires no additional instrumentation.

### Budget Management

Set spending limits for periods of 1 to 12 months and track actual spend against those limits in real time. Budget status indicators — **Under Budget**, **At Risk**, and **Breached** — surface at configurable thresholds (60%, 70%, 80%, and 100%), and alerts can be triggered automatically to keep the right stakeholders informed before limits are exceeded.

### Cost Optimization Recommendations

CCI surfaces cost optimization opportunities from two complementary sources:

* **AWS Trusted Advisor integration** for AWS-native recommendations including right-sizing, idle resources, and Reserved Instance coverage.
* **CCI Native Optimization Engine** for proprietary cross-cloud analysis, including Savings Plans commitment analysis with monthly and annual projected savings.

Every recommendation can be acknowledged, dismissed, or tracked as pending — giving your FinOps team a clear action queue to work from.

### AI Cost management

The **AI Costs** page provides cost visibility for AI services across your cloud providers. It surfaces token-level costs broken down by service, model, and token type, giving you a unified view of AI spending across multi-cloud environments and multiple LLM models.

### Alerts support

Build cost as an operational metric, with native integrations with Alerts, Notifications and Workflows.

## The exciting road ahead

Cloud Cost Intelligence at GA is just the beginning. We're continuing to expand multi-cloud recommendation coverage, deepen Kubernetes cost attribution, and build tighter integrations between cost data and the rest of the New Relic observability platform — so you can answer "why did costs spike?" with the same confidence as "why did latency spike?"

We invite you to explore [Cloud Cost Intelligence](https://docs.newrelic.com/docs/cci/overview/) and start connecting your cloud spend to the engineering context that explains it. Your feedback drives our roadmap — reach out to us at cci-support@newrelic.com with questions, ideas, or anything you'd like to see next.
