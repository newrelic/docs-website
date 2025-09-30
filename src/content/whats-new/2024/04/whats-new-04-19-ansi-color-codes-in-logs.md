---
title: 'View ANSI colors in logs'
summary: 'Ingest logs with ANSI color codes to display in the log table'
releaseDate: '2024-04-22'
---

The records you view in the **Logs** UI are now color coded. This new addition displays log text in ANSI supported colors.

When a log line is ingested that has ANSI color codes attached to a log attribute, that log line is parsed and displayed automatically in the log table with the ANSI codes respected. You do not need to add additional parsing rules&mdash;just ensure that proper unicode escape characters are used in the logs. If no ANSI color codes are supplied at ingest, then the log line will be displayed in the default color of the log table.

Example log:

```
{
  message: "\u001b[36m Sample ANSI message \u001b[0m",
  logType: "sample"
}
```

Once the logs are ingested, go to the **Logs** UI where you'll see your log lines with their respective ANSI colors. Note: this update supports the extended 256 ANSI color set.

For more information on ingesting logs, read the [Forwarding logs documentation](https://docs.newrelic.com/docs/logs/forward-logs/enable-log-management-new-relic/).

!["A screenshot of an example log with ANSI color coding."](/images/ansi-color-codes-in-log-table.webp 'A screenshot of an example log with ANSI color coding.')

<figcaption>
  A screenshot of an example log with ANSI color coding.  
</figcaption>
