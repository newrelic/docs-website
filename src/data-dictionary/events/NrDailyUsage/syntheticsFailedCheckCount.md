---
name: syntheticsFailedCheckCount
type: attribute
units: count
events:
  - NrDailyUsage
---

Number of failed checks that ran on the given day for the given Synthetics monitor and location.

Failed checks count toward subscription usage for Synthetics. Only checks with syntheticsType not equal to SIMPLE count toward billable subscription usage.