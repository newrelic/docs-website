---
name: query.slowQueriesPerSecond
type: attribute
events:
  - MysqlSample
---

Number of queries per second that have taken more than long\_query\_time seconds. This counter increments regardless of whether the slow query log is enabled.