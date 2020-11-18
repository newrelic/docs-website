---
name: db.innodb.bufferPoolReadAheadRndPerSecond
type: attribute
events:
  - MysqlSample
---

Number of random read-aheads per second initiated by InnoDB. This happens when a query scans a large portion of a table but in random order. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.