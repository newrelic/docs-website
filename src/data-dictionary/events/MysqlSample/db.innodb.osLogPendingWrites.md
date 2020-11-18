---
name: db.innodb.osLogPendingWrites
type: attribute
events:
  - MysqlSample
---

Number of pending writes per second to the InnoDB redo log files. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.