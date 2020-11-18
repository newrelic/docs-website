---
name: db.innodb.dataPendingReads
type: attribute
events:
  - MysqlSample
---

Current number of pending reads. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.