---
title: 'More flexibility when partitioning logs'
summary: 'Create log data partitions with all the power of NRQL filtering'
releaseDate: '2023-02-15'
learnMoreLink: 'https://docs.newrelic.com/docs/logs/log-management/ui-data/data-partitions'
getStartedLink: 'https://docs.newrelic.com/docs/logs/get-started/logging-best-practices/#partitions'
---

If your systems generate a massive amount of logs, than you probably already know and love the data partitioning capability in our logging product. By setting up simple rules, it's possible to segment ingested logs by any available attribute, which gives you more control over retention time and query times.

We've made it easier to create log data partitions with powerful and flexible matching criteria. Now rules can be specified using a simple NRQL `WHERE` clause when creating or modifying log data partitions.

![Log data partition using nrql where clause](./images/data-partitions-improvements.png "A screenshot that shows data partition update using nrql where clause")

Nothing will change about your current data partitions, but now you can see exactly what criteria is being used and fine tune the partition filter to give you exactly what you want.

For more information, see our [log partition docs](https://docs.newrelic.com/docs/logs/log-management/ui-data/data-partitions).
