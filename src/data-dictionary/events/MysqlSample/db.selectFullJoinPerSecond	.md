---
name: "db.selectFullJoinPerSecond\t"
type: attribute
events:
  - MysqlSample
---

Number of joins that perform table scans because they do not use indexes, per second. Data only captured when \`extended\_metrics\` is enabled (set to 1) in the configuration file.