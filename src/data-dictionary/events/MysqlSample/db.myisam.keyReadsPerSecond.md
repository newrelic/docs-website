---
name: db.myisam.keyReadsPerSecond
type: attribute
events:
  - MysqlSample
---

Number of physical reads of a key block from disk into the MyISAM key cache, per second. Data only captured when \`extended\_myisam\_metrics\` is enabled in the configuration file.