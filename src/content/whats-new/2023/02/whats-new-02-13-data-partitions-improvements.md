---
title: 'More flexibility when partitioning logs'
summary: 'Create log data partitions with all the power of NRQL filtering'
releaseDate: '2023-02-15'
learnMoreLink: 'https://docs.newrelic.com/docs/logs/log-management/ui-data/data-partitions'
getStartedLink: 'https://docs.newrelic.com/docs/logs/get-started/logging-best-practices/#partitions'
---

If your systems generate a massive amount of logs, then you probably already know and love the data partitioning capability in our logging product. This feature gives you control over retention and query times by setting up simple rules to segment ingested logs by any available attribute.

Our latest improvements have made it even easier to create log data partitions to give you exactly what you want. Now, rules can be specified using a simple NRQL `WHERE` clause when creating or modifying log data partitions.

![Log data partition using nrql where clause](./images/data-partitions-improvements.webp "A screenshot that shows data partition update using nrql where clause")

Nothing will change about your current data partitions, but now you can see and adjust the criteria being used as a partition filter for more fine-tuned results.

For more information, see our [log partition docs](https://docs.newrelic.com/docs/logs/log-management/ui-data/data-partitions).
