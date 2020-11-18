---
name: "db.sortMergePassesPerSecond\t"
type: attribute
events:
  - MysqlSample
---

Number of merge passes that the sort algorithm has had to do, per second. Data only captured when \`extended\_metrics\` is enabled (set to 1) in the configuration file.