---
name: db.innodb.bufferPoolWaitFreePerSecond
type: attribute
events:
  - MysqlSample
---

Number of times, per second, a read or write to InnoDB had to wait because there were not clean pages available in the buffer pool. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.