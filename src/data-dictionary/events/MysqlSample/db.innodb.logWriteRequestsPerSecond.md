---
name: db.innodb.logWriteRequestsPerSecond
type: attribute
events:
  - MysqlSample
---

Number of write requests for the InnoDB redo log per second. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.