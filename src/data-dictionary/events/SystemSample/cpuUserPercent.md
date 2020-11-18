---
name: cpuUserPercent
type: attribute
units: percentage (%)
events:
  - SystemSample
---

The portion of the current CPU utilization composed only of user time usage.

This is calculated as:

current\_sample\_user\_time - previous\_sample\_user\_time) / elapsed\_time