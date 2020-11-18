---
name: cpuPercent
type: attribute
units: percentage (%)
events:
  - SystemSample
---

Total CPU utilization as a percentage. This is not an actual recorded value; it is an alias that combines percentage data from cpuSystemPercent, cpuUserPercent, cpuIoWaitPercent and cpuStealPercent.

This is calculated as:

(cpuUserPercent + cpuSystemPercent + cpuIOWaitPercent + cpuStealPercent)