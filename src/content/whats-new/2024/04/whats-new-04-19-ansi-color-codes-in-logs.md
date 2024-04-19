---
title: 'View ANSI colors in logs'
summary: 'ANSI color codes now respected when viewing logs'
releaseDate: '2024-04-18'
---

View your logs with ANSI colors in the Logs UI! This new addition in logs allows you to view logs with ANSI respected colors in its text.

To get started, ingest logs with ANSI color codes attached to a log attribute. Ensure that proper unicode escape characters are used when sending in ANSI color codes.

Example log: 
```
{ 
  message: "\u001b[36m Sample ANSI message \u001b[0m",
  logType: "sample"
}
``` 

Once ingested, go to the **Logs UI** and you will see your log lines with their respective ANSI colors.

!["ANSI color coded logs"](./images/ansi-color-codes-in-log-table.png "ANSI color coded logs")