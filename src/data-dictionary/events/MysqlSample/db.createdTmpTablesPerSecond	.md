---
name: "db.createdTmpTablesPerSecond\t"
type: attribute
events:
  - MysqlSample
---

Number of internal temporary tables created per second by the server while executing statements. Data only captured when \`extended\_metrics\` is enabled (set to 1) in the configuration file.