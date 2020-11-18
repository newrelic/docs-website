---
name: db.innodb.bufferPoolWriteRequestsPerSecond
type: attribute
events:
  - MysqlSample
---

Number of writes per second to the InnoDB buffer pool. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.