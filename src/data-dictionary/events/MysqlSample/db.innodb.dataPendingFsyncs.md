---
name: db.innodb.dataPendingFsyncs
type: attribute
events:
  - MysqlSample
---

Current number of pending \`fsync()\` operations. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.