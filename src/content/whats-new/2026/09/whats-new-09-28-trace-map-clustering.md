---
title: 'A new trace map experience with intelligent clustering'
summary: 'Trace maps now keep high-importance services visible and collapse the long tail into clusters, so bottlenecks and failing services stand out.'
releaseDate: '2026-09-28'
learnMoreLink: 'https://docs.newrelic.com/docs/distributed-tracing/ui-data/trace-details/'
---

Complex traces that span dozens of services can make trace maps unreadable when every node is rendered at once. Services causing latency or errors get buried in visual noise, which makes troubleshooting harder.

We've unified the trace map experience and added clustering logic to limit how many nodes the map displays at once.

## What's new

- **Focus on high-importance services**: Key services stay visible in the trace view automatically.
- **Long-tail collapse**: Low-importance services collapse into a cluster node that shows the number of hidden services.
- **Dynamic ranking**: New Relic ranks and prioritizes services by their latency and error rate impact.

## Why it matters

- **Faster mean time to identify (MTTI)**: Find bottlenecks and failing services without filtering through clutter.
- **Consistent experience**: Trace maps now match the map experience used across the rest of New Relic.

## How to get started

The new trace map opens from a trace:

1. Go to **Traces**.
2. In the **Trace groups** table, select a trace group. A drawer opens with all traces in that group.
3. Select a trace to see the new map.

New Relic displays the new trace map by default. You can switch back to the previous map experience if you need to.
