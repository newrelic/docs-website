---
name: cluster.slaveIORunning
type: attribute
events:
  - MysqlSample
---

Boolean: 0 or 1. Status of whether the I/O thread is started and has connected successfully to the master. Data only captured when when the extended metrics flag is enabled in the configuration file and the \`cluster.slaveRunning\` metric is set to 1.