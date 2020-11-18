---
name: cluster.secondsBehindMaster
type: attribute
units: seconds (s)
events:
  - MysqlSample
---

Difference in seconds between the slave's clock time and the timestamp of the query when it was recorded in the master's binary log. When the slave is not correctly connected to the master, this metric won't be reported. Data only captured when when the extended metrics flag is enabled in the configuration file and the \`cluster.slaveRunning\` metric is set to 1.