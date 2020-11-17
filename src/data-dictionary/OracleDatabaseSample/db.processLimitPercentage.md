---
name: db.processLimitPercentage
events:
  - OracleDatabaseSample
---

The system checks the utilization of the process resource against the values (percentage) specified by the threshold arguments.

If the percentage of all current processes to the limit set in the PROCESSES initialization parameter exceeds the values specified in the threshold arguments, then a warning or critical alert is generated