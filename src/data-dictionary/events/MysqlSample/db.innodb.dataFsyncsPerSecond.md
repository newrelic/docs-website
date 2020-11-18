---
name: db.innodb.dataFsyncsPerSecond
type: attribute
events:
  - MysqlSample
---

Number of fsync() operations per second. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.