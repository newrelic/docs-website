---
title: Meraki controller entities have metrics missing
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: Meraki API polling is working, but expected metrics are missing.
redirects:
  - /docs/network-performance-monitoring/troubleshooting/meraki-controller-no-data
freshnessValidatedDate: never
---

## Problem [#problem]

During Meraki API monitoring, you don't see all of the expected metrics for your entity.

## Solution [#solution]

Identify what metrics exist in New Relic by running the following NRQL query:

```sql
FROM Metric, KExtEvent SELECT
  count(*)
FACET
  metricName OR eventType(),
  instrumentation.name
WHERE instrumentation.name LIKE 'meraki%'
OR eventType() = 'KExtEvent'
SINCE 1 HOUR AGO
LIMIT MAX
```

This query will give you a list of every dimensional metric and configuration change event being collected from your Meraki controller in the last hour. The [configuration documentation for the Meraki API integration](/docs/network-performance-monitoring/advanced/advanced-config/#meraki) describes the metrics and attributes available based on different options in your settings.
