---
name: cluster.masterLogFile
type: attribute
events:
  - MysqlSample
---

Name of the master binary log file from which the I/O thread is currently reading. Data only captured when when the extended metrics flag is enabled in the configuration file and the \`cluster.slaveRunning\` metric is set to 1.