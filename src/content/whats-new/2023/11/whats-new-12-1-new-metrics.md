---
title: 'New AWS/Azure/GCP HOST metrics'
summary: 'New Relic Cloud Monitoring Polling integrations [AWS/Azure/GCP] will now fetch additional metrics.'
releaseDate: '2023-12-01'
---

As of December 1st 2023, the New Relic cloud monitoring integrations will report additional metrics. The new metrics are:

AWS EC2:
* `diskReadOps`
* `diskWriteOps`
* `diskReadBytes`
* `diskWriteBytes`
* `NetworkIn`
* `NetworkOut`
* `NetworkPacketsIn`
* `NetworkPacketsOut`

Azure VMs:
* `Percentage CPU`
* `Network In`
* `Network Out`
* `Disk Read Bytes`
* `Disk Write Bytes`
* `Disk Read Operations/Sec`
* `Disk Write Operations/Sec`

GCP Compute Engine (VMs):
* `instance/cpu/utilization`
* `instance/network/received_bytes_count`
* `instance/network/received_packets_count`
* `instance/network/sent_packets_count`
* `instance/network/sent_bytes_count`
* `instance/disk/read_bytes_count`
* `instance/disk/read_ops_count`
* `instance/disk/write_bytes_count`
* `instance/disk/write_ops_count`


## Potential impacts

When AWS API Polling, Azure Polling, and GCP integrations are enabled, additional metrics may incur data ingestion costs at 3 to 4KB per metric per host.

Contact [support.newrelic.com](https://support.newrelic.com/) to enable these metrics on-demand.
