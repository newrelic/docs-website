---
title: 'Monitor Google BigQuery with New Relic'
summary: 'Optimize query performance and control your costs on Google BigQuery'
releaseDate: '2023-03-29'
getStartedLink: 'https://newrelic.com/instant-observability/google-bigquery'
---
New Relic has integrated with Google Cloud Platform’s (GCP) BigQuery to provide continuous insights on the health and performance of BigQuery services. By integrating your BigQuery data with New Relic, you can ingest and visualize service metrics to troubleshoot performance issues or optimize your costs. 

BigQuery provides the ability to allocate computing capacity across your organization's workloads, teams, or departments using the concept of reservations to designate slots for groups of GCP projects. As a designated [Google Cloud Ready - BigQuery](https://cloud.google.com/bigquery/docs/bigquery-ready-overview) integration, New Relic provides real-time observability for your Google BigQuery telemetry data such as: 

## Query optimization
For each reservation, you can see the number of slots allocated for your different workloads and job types, as well as slots allocated for queries within the project. By monitoring query counts and execution times, you can quickly determine if the demand for jobs is higher than the allocated amount for the reservation; for instance, if one job ran slower and used significantly fewer slots than the other, this could mean it had more limited access to resources because it was competing against other active jobs.

## Cost optimization
Optimize your costs by evaluating your slot utilization via table metrics. Determine if slots are efficiently allocated, whether too many are underutilized, or whether you are too close to full utilization — which could result in poor performance if usage spikes. You can also view the number of billed bytes, allowing you to prioritize executions in order to reduce the amount of resources required.

## Next steps
To begin exploring how to instrument Google BigQuery with New Relic see our [integration doc](https://docs.newrelic.com/docs/infrastructure/google-cloud-platform-integrations/gcp-integrations-list/google-bigquery-monitoring-integration/) and [quickstart](https://newrelic.com/instant-observability/google-bigquery).
