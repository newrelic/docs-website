---
title: 'Monitor Google BigQuery with New Relic'
summary: 'Optimize query performance and control your costs on Google BigQuery'
releaseDate: '2023-03-29'
getStartedLink: 'https://newrelic.com/instant-observability/google-bigquery'
---
New Relic has integrated with Google Cloud Platform’s (GCP) BigQuery to provide continuous insights on the health and performance of BigQuery services. Through this integration with New Relic, you can ingest and visualize service metrics to troubleshoot performance issues or optimize your costs. Today we are further announcing that we successfully achieved Google Cloud Ready - BigQuery designation. 

BigQuery provides the capability to separate out your workloads, teams, or departments and provide computing capacity using the concept of reservations. You can allocate slots to designated groups of GCP projects in your organization. By integrating with BigQuery, New Relic provides real time observability for your Google BigQuery telemetry data such as: 

## Query optimization
For each reservation, you can monitor query counts and execution times. You can see the number of slots allocated for your different workloads and job types as well as slots allocated for queries within the project. You can quickly tell if the demand for jobs is higher than the allocated amount for the reservation. If one job ran slower and used significantly less slots than the other, then this can mean it had access to less resources because it was competing against other active jobs.

## Cost optimization
You can optimize your costs by evaluating your slot utilization and optimizing your table. Determine if slots are efficiently allocated, whether too many are underutilized, or whether you are too close to full utilization which could result in poor performance if there is a spike in usage. You can see from the metrics the number of billed bytes and organize the priority of executions to reduce the amount of resources required.

## Next steps
To begin exploring how to instrument Google BigQuery with New Relic see our [**docs**](https://docs.newrelic.com/docs/infrastructure/google-cloud-platform-integrations/gcp-integrations-list/google-bigquery-monitoring-integration/) and [**quickstart**](https://newrelic.com/instant-observability/google-bigquery).
