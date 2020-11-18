---
name: db.myisam.keyWritesPerSecond
type: attribute
events:
  - MysqlSample
---

Number of physical writes of a key block from the MyISAM key cache to disk, per second. Data only captured when \`extended\_myisam\_metrics\` is enabled in the configuration file.