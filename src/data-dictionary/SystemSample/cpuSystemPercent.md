---
name: cpuSystemPercent
units: percentage (%)
events:
  - SystemSample
---

The portion of the current CPU utilization composed only of system time usage.

This is calculated as:

(current\_sample\_sys\_time - previous\_sample\_sys\_time) / elapsed\_time