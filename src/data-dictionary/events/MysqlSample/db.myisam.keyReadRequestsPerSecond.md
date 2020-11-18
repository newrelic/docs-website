---
name: db.myisam.keyReadRequestsPerSecond
type: attribute
events:
  - MysqlSample
---

Number of requests to read a key block from the MyISAM key cache, per second. Data only captured when \`extended\_myisam\_metrics\` is enabled in the configuration file.