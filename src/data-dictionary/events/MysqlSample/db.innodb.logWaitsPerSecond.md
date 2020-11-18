---
name: db.innodb.logWaitsPerSecond
type: attribute
events:
  - MysqlSample
---

Number of times that the log buffer was too small and a wait was required for it to be flushed before continuing, in waits per second.