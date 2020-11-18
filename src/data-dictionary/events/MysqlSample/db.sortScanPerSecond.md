---
name: db.sortScanPerSecond
type: attribute
events:
  - MysqlSample
---

Number of sorts that were done by scanning the table, per second. Data only captured when \`extended\_metrics\` is enabled (set to 1) in the configuration file.