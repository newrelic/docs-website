---
name: apmComputeUnits
type: attribute
units: count
events:
  - NrDailyUsage
---

Number of compute units (CUs) recorded for the given host.

CUs are calculated as apmHoursUsed multiplied by apmBillingInstanceSize. For more information, see [Compute unit pricing](https://docs.newrelic.com/docs/accounts/accounts/subscription-pricing/compute-unit-cu-pricing-vs-host-based-pricing-apm-infrastructure).