---
title: "Performance Risks Inbox is now in Public Preview"
summary: "Detect and resolve critical coding anti-patterns before they impact your customers using Performance Risks Inbox, now free during Public Preview."
releaseDate: "2026-05-14"
---

## What is Performance Risks Inbox?:
Traditional monitoring is often reactive, alerting you only after a service is down or error rates have spiked. Performance Risks Inbox shifts your strategy from reactive to proactive. It is an intelligence-led workflow that automatically detects and groups the "silent killers" of application stability, such as N+1 queries and inefficient database calls. These issues often degrade performance slowly over time before cascading into major outages.

By analyzing the rich, correlated telemetry New Relic already collects across your full stack, Performance Risks Inbox surfaces these risks in a single, opinionated location. This allows your team to triage issues during normal working hours, protecting your engineering flow and reducing the cost of emergency downtime. **Performance Risks Inbox is available at no additional cost during the Public Preview phase**.

## What’s included in the Public Preview?:
Performance Risks Inbox identifies the most common stability risks within your events and traces to highlight:

- **N+1 Queries:** Identify where a single request triggers a cascade of unnecessary database calls.
- **Slow SQL Queries:** Pinpoint inefficient queries that are dragging down transaction times.
- **Excessive Database Queries:** Detects loops where a high volume of queries is bundled into a single transaction, potentially impacting database performance.
- **Sequential Database Queries:** Identify patterns where multiple database queries are executed one after another instead of being batched or run in parallel.
- **Slow HTTP Requests:** Pinpoint outgoing HTTP calls that consistently exceed performance benchmarks.
- **Large HTTP Payloads:** Detects heavy responses that consume excessive bandwidth and memory, slowing down the end-user experience.

![performance inbox](/images/performance-risks-inbox.webp "performance inbox")

## The road ahead:
Performance Risks Inbox in Public Preview is just the beginning of our move toward proactive, intelligence-led observability. We are continuing to deepen our detection capabilities and build tighter integrations across the New Relic platform to help you stay in your creative flow and spend more time shipping.
We invite you to explore Performance Risks Inbox within both your **APM and Browser entity views and global Errors Inbox** to start seeing the silent killers in your code today. Your feedback drives our roadmap; reach out to us with any questions or ideas for what you’d like to see next.
