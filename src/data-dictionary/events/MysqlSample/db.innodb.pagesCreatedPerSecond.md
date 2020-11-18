---
name: db.innodb.pagesCreatedPerSecond
type: attribute
events:
  - MysqlSample
---

The number of pages created per second by operations on InnoDB tables. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.