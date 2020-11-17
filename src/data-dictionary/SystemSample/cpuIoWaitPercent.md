---
name: cpuIoWaitPercent
units: percentage (%)
events:
  - SystemSample
---

The portion of the current CPU utilization composed only of I/O wait time usage.

This is calculated as:

current\_sample\_io\_time - previous\_sample\_io\_time) / elapsed\_time