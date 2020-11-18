---
name: "db.qCacheLowmemPrunesPerSecond\t"
type: attribute
events:
  - MysqlSample
---

Number of queries per second that were deleted from the query cache because of low memory. Data only captured when \`extended\_metrics\` is enabled (set to 1) in the configuration file.