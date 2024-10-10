---
title: Python runtime metrics
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: The Python agent records runtime metrics for garbage collection and CPU/ memory usage
redirects:
  - /docs/agents/python-agent/supported-features/python-runtime-metrics
  - /docs/python/python-runtime-metrics
freshnessValidatedDate: never
---

The Python agent records runtime metrics to allow you to analyze the performance of your Python processes and interpreter. This includes metrics related to CPU usage, memory usage, and garbage collection.  This behavior is enabled by default.  To disable this, [disable the setting in either the configuration file or environment variable](/docs/apm/agents/python-agent/configuration/python-agent-configuration#runtime-metrics).

## CPU usage

With CPU runtime metrics, you can monitor CPU usage by examining user and system CPU utilization, and also see time spent in different components of the CPU. The following CPU usage metrics are available:

* <DNT>**CPU time**</DNT>: Track the amount of time being spent in different states of the CPU. This includes user (time running application code) and system (time spent in the operating system). This metric is represented as total elapsed time in seconds.
* <DNT>**CPU utilization**</DNT>: Analyze the amount of processing resources being utilized over time by different components of the CPU. This includes the user component (for running application code) and system component (for running kernel code). This metric is reported as a percentage representing the time spent in the specified CPU component divided by total elapsed CPU time.

## Memory usage

You can monitor your system’s overall memory consumption and utilization by process and host. The following memory usage metrics are available:

* <DNT>**Total physical memory**</DNT>: Monitor the amount of total physical memory in megabytes being used by your system over time. This metric is also available for individual process IDs.
* <DNT>**Memory utilization**</DNT>: Track memory utilization over time for your system and for individual processes. This metric is represented by the value of the total physical memory being used by your system (or a specific process) divided by the total amount of memory available.

## Garbage collection

<Callout variant="important">
  Garbage collection profiling is is disabled by default in the agent. To enable it, check out our documentation [here](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics).
</Callout>

The garbage collector finds unused data objects and reclaims that memory space so it can be used by another process. The Python agent provides the following garbage collection metrics:

* <DNT>**Object count by type**</DNT>: Gain insight into the most common object types being collected by the garbage collector by viewing their associated collection counts. You can customize the maximum number of object types you would like to see reported by this metric type by configuring the [top_object_count_limit setting](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics).
* <DNT>**Object count by generation**</DNT>:  As collection occurs in each generation of the garbage collector, objects that survive are promoted into higher generations. This metric allows you to view the number of objects being stored in each of the garbage collector’s generations over time.
* <DNT>**Total time by generation**</DNT>: Analyze the amount of time the garbage collector is spending in each generation of collection.
* <DNT>**Garbage collector collections**</DNT>: The number of collections is influenced by the object threshold set for each generation. When the threshold is reached, a collection process will be triggered. Collections can also be manually triggered within application code with calls to [gc.collect()](https://docs.python.org/3/library/gc.html#gc.collect). This metric reports the number of garbage collector sweeps that have happened in each generation over time.
* <DNT>**Garbage collector uncollectable**</DNT>: In some instances, the garbage collector may not be able to reach and free a certain object, deeming it uncollectable. This metric allows you to view the number of objects that were uncollectable by the garbage collector in each generation.
* <DNT>**Garbage collector collected**</DNT>: This metric reports the total number of objects that were collected by the garbage collector in each generation.
