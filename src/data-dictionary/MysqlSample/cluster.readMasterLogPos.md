---
name: cluster.readMasterLogPos
events:
  - MysqlSample
---

Position in the current master binary log file up to which the I/O thread has read. Data only captured when when the extended metrics flag is enabled in the configuration file and the \`cluster.slaveRunning\` metric is set to 1.