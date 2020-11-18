---
name: db.innodb.bufferPoolPagesDirty
type: attribute
events:
  - MysqlSample
---

Current number of dirty pages in the InnoDB buffer pool. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.