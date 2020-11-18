---
name: db.innodb.osLogFsyncsPerSecond
type: attribute
events:
  - MysqlSample
---

Number of fsync() writes per second done to the InnoDB redo log files. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.