---
name: db.innodb.pagesReadPerSecond
events:
  - MysqlSample
---

Number of pages read per second from the InnoDB buffer pool by operations on InnoDB tables. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.