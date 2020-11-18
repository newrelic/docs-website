---
name: "db.threadCacheMissRate\t"
type: attribute
units: percentage (%)
events:
  - MysqlSample
---

Percent of threads that need to be created to handle new connections because there are not enough threads available in the cache. Data only captured when \`extended\_metrics\` is enabled (set to 1) in the configuration file.