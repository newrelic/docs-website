---
name: "db.maxExecutionTimeExceededPerSecond\t"
events:
  - MysqlSample
---

Number of SELECT statements per second for which the execution timeout was exceeded. Data only captured when \`extended\_metrics\` is enabled (set to 1) in the configuration file.