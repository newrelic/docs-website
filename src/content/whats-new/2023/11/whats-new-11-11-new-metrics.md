---
title: 'New AWS/Azure/GCP HOST metrics'
summary: 'New Relic Cloud Monitoring Polling integrations [AWS/Azure/GCP] will now fetch additional metrics.'
releaseDate: '2023-12-01'
---

As of Dec 1st 2223, you'll have access to additional metrics for your New Relic cloud  monitoring integrations. The list of new metrics are:

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

The infrastructure agent is no longer necessary to fetch these metrics.

Note that these metrics may incur additional data ingestion (3-4KB per metric per hour) when the any of the three integrations (AWS API Polling, Azure Polling, and GCP integration) are enabled.
