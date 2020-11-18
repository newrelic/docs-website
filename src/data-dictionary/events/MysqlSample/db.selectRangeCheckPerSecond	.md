---
name: "db.selectRangeCheckPerSecond\t"
type: attribute
events:
  - MysqlSample
---

Number of joins per second without keys that check for key usage after each row. Data only captured when \`extended\_metrics\` is enabled (set to 1) in the configuration file.