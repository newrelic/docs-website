---
name: db.innodb.bufferPoolReadAheadEvictedPerSecond
type: attribute
events:
  - MysqlSample
---

Number of pages per second read into the InnoDB buffer pool by the read-ahead background thread that were subsequently evicted without having been accessed by queries. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.