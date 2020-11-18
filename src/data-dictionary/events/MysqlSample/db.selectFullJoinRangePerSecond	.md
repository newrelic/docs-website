---
name: "db.selectFullJoinRangePerSecond\t"
type: attribute
events:
  - MysqlSample
---

Number of joins per second that used a range search on a reference table. Data only captured when \`extended\_metrics\` is enabled (set to 1) in the configuration file.