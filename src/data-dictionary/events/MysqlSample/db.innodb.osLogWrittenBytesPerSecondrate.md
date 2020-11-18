---
name: db.innodb.osLogWrittenBytesPerSecondrate
type: attribute
units: bytes (B)
events:
  - MysqlSample
---

Number of bytes written per second to the InnoDB redo log files. Data only captured when \`extended\_innodb\_metrics\` is enabled (set to 1) in the configuration file.