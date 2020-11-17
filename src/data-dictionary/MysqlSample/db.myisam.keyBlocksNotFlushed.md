---
name: db.myisam.keyBlocksNotFlushed
events:
  - MysqlSample
---

Number of key blocks in the MyISAM key cache that have changed but have not yet been flushed to disk. Data only captured when \`extended\_myisam\_metrics\` is enabled in the configuration file.