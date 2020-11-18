---
name: db.innodb.numOpenFiles
type: attribute
events:
  - MysqlSample
---

Number of files InnoDB currently holds open. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.