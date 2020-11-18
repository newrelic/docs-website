---
name: db.relayLogSpace
type: attribute
units: bytes (B)
events:
  - MysqlSample
---

Total combined number of bytes for all existing relay log files. Data only captured when when the extended metrics flag is enabled in the configuration file and the \`cluster.slaveRunning\` metric is set to 1.