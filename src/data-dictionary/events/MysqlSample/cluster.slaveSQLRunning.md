---
name: cluster.slaveSQLRunning
type: attribute
events:
  - MysqlSample
---

Boolean: 0 or 1. Status of whether the SQL thread is started. Data only captured when when the extended metrics flag is enabled in the configuration file and the \`cluster.slaveRunning\` metric is set to 1.