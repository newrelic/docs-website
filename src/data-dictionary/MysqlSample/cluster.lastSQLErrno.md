---
name: cluster.lastSQLErrno
events:
  - MysqlSample
---

Error number of the most recent error that caused the SQL thread to stop. Data only captured when when the extended metrics flag is enabled in the configuration file and the \`cluster.slaveRunning\` metric is set to 1.