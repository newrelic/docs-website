---
title: .NET performance metrics
redirects:
  - /docs/agents/net-agent/other-features/net-performance-metrics
  - /docs/agents/net-agent/other-features/view-net-runtime-metrics
freshnessValidatedDate: never
---

New Relic's .NET agent collects metrics from the .NET runtime about the performance of your application. These metrics can provide insight into how much CPU and memory an application consumes as well as how the performance of an application may be impacted by garbage collection and thread pool resource contention.

You can see these metrics at <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**</DNT>. Select an application and go to <DNT>**More views > Dotnet VMs**</DNT>.

You can also view these metrics by:

* Creating a custom [dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards).
* Using the <DNT>**Metric explorer**</DNT> in <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**</DNT> > select an application, and go to <DNT>**More views**</DNT>.

## CPU metrics [#cpu-metrics]

The following CPU metrics are collected:

<table>
  <tbody>
    <tr>
      <td>
        `CPU/User/Utilization`
      </td>

      <td>
        The percentage of CPU that is consumed by this process.
      </td>
    </tr>

    <tr>
      <td>
        `CPU/User Time`
      </td>

      <td>
        The amount of time the process has spent executing application code.
      </td>
    </tr>
  </tbody>
</table>

## Memory metrics [#memory-metrics]

The following memory metrics are collected:

<table>
  <tbody>
    <tr>
      <td>
        `Memory/Physical`
      </td>

      <td>
        The amount of private (physical) memory, in MB, allocated to the process.
      </td>
    </tr>

    <tr>
      <td>
        `Memory/WorkingSet`
      </td>

      <td>
        Amount of physical memory allocated to the process.
      </td>
    </tr>
  </tbody>
</table>

## Garbage collection metrics [#garbage-collection]

The .NET garbage collector runs in the background and is responsible for identifying and reclaiming memory tied to objects that are no longer referenced by an application. The following metrics may be useful in identifying patterns of object allocation and potential over-allocation scenarios. This [article](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) further explains the fundamentals of garbage collection in .NET.

<Callout variant="important">
  For .NET Framework applications, the Windows User under which your application runs must have access to windows performance counter data. Usually this is accomplished by adding the user to <DNT>**Performance Monitor Users**</DNT> and <DNT>**Performance Log Users**</DNT> groups. Insufficient permissions will result in the agent not collecting garbage collection metrics.
</Callout>

### Overall metrics [#overall-metrics]

Additionally, the following garbage collection metrics are collected:

<table>
  <tbody>
    <tr>
      <td>
        `GC/Handles`
      </td>

      <td>
        The number of references to objects.
      </td>
    </tr>

    <tr>
      <td>
        `GC/Induced`
      </td>

      <td>
        Normally, the runtime performs garbage collection automatically. This metric identifies the number of times that Garbage Collection was manually invoked by an explicit call to `GC.Collect` from within application code.
      </td>
    </tr>

    <tr>
      <td>
        `GC/PercentTimeInGC` (.NET Framework only)
      </td>

      <td>
        The percentage of elapsed time that the .NET runtime has spent performing garbage collection since the last garbage collection cycle.
      </td>
    </tr>
  </tbody>
</table>

### Generation - 0 heap [#gen-0-heap]

The following garbage collection Gen0 metrics are collected:

<table>
  <tbody>
    <tr>
      <td>
        `GC/Gen0/Size`
      </td>

      <td>
        The amount of memory (in MB) that is _available_ to be allocated in Generation 0. This does not indicate the amount of memory that is being _used_ by Generation 0, but the maximum available to be allocated.
      </td>
    </tr>

    <tr>
      <td>
        `GC/Gen0/Promoted`
      </td>

      <td>
        The amount of memory (in MB) that has survived garbage collection and has been promoted from Gen0 to Gen1. Memory survives garbage collection when there is an active reference to it.
      </td>
    </tr>

    <tr>
      <td>
        `GC/Gen0/Collections`
      </td>

      <td>
        The number of times Generation 0 Garbage Collection was executed by the garbage collector.
      </td>
    </tr>
  </tbody>
</table>

### Generation - 1 heap [#gen-1-heap]

The following garbage collection Gen1 metrics are collected:

<table>
  <tbody>
    <tr>
      <td>
        `GC/Gen1/Size`
      </td>

      <td>
        The amount of memory (in MB) that is _used_ in the Generation 1 heap. This differs from `Gen0/Size` which measure the maximum amount of memory _available_ for the generation 0 heap.
      </td>
    </tr>

    <tr>
      <td>
        `GC/Gen1/Promoted`
      </td>

      <td>
        The amount of memory (in MB) that has survived garbage collection and has been promoted from Gen1 to Gen2. Memory survives garbage collection when there is an active reference to it.
      </td>
    </tr>

    <tr>
      <td>
        `GC/Gen1/Collections`
      </td>

      <td>
        The number of times Generation 1 Garbage Collection was executed by the garbage collector.
      </td>
    </tr>
  </tbody>
</table>

### Generation - 2 heap [#gen-2-heap]

The following garbage collection Gen2 metrics are collected:

<table>
  <tbody>
    <tr>
      <td>
        `GC/Gen2/Size`
      </td>

      <td>
        The amount of memory (in MB) that is being _used_ by the Gen2 Heap.
      </td>
    </tr>

    <tr>
      <td>
        `GC/Gen2/Survived` (.NET Core Only)
      </td>

      <td>
        The amount of memory (in MB) that has survived garbage collection. Memory survives garbage collection when there is an active reference to it. Unlike Gen0 and Gen1, memory that survives garbage collection is _not_ promoted.
      </td>
    </tr>

    <tr>
      <td>
        `GC/Gen2/Collections`
      </td>

      <td>
        The number of times Generation 2 Garbage Collection was executed by the garbage collector.
      </td>
    </tr>
  </tbody>
</table>

### Large object heap (LOH) [#large-object-heap]

The following garbage collection LOH metrics are collected:

<table>
  <tbody>
    <tr>
      <td>
        `GC/LOH/Size`
      </td>

      <td>
        The amount of memory (in MB) that is being _used_ by the Large Object Heap (LOH). In .NET Core, the Large Object Heap is sometimes referred to as Gen3.
      </td>
    </tr>

    <tr>
      <td>
        `GC/LOH/Survived` (.NET Core Only)
      </td>

      <td>
        The amount of memory (in MB) that has survived garbage collection. Memory survives garbage collection when there is an active reference to it. Unlike Gen0 and Gen1, memory that survives garbage collection is _not_ promoted.
      </td>
    </tr>
  </tbody>
</table>

## Managed thread pool metrics [#managed-thread-pool]

The .NET runtime manages a pool of threads. The following metrics provide visibility into the performance of an application in terms of the thread pool and may help identify areas of thread pool starvation. Thread pool starvation/contention occurs when there are not enough threads available to process the requests made by an application. The following [article](https://docs.microsoft.com/en-us/dotnet/standard/threading/the-managed-thread-pool) describes the various features of the managed thread pool. Please note that these metrics do _not_ include information about threads that are not managed by the thread pool.

### Worker threads [#worker-threads]

Worker threads are CPU-bound threads that are employed to perform work on behalf of a process.

<table>
  <tbody>
    <tr>
      <td>
        `Threadpool/Worker/Available`
      </td>

      <td>
        Identifies the number of managed threads available to the process. Consistently low numbers indicate a potential starvation scenario.
      </td>
    </tr>

    <tr>
      <td>
        `Threadpool/Worker/InUse`
      </td>

      <td>
        Identifies the number of worker threads that are currently in use by the process.
      </td>
    </tr>
  </tbody>
</table>

### Completion threads [#completion-threads]

Completion threads, sometimes referred to as I/O threads, are employed to monitor the completion of I/O operations.

<table>
  <tbody>
    <tr>
      <td>
        `Threadpool/Completion/Available`
      </td>

      <td>
        This metric identifies the number of threads that are currently available to the process. Consistently low numbers indicate a potential starvation scenario.
      </td>
    </tr>

    <tr>
      <td>
        `Threadpool/Completion/InUse`
      </td>

      <td>
        This metric identifies the number of completion threads currently in use by the process.
      </td>
    </tr>
  </tbody>
</table>

### Throughput [#throughput]

Throughput metrics measure how much work has been requested to be performed on a different thread, the amount of work that has been started, and how much work is waiting for a thread pool resource to become available.

<table>
  <tbody>
    <tr>
      <td>
        `Threadpool/Throughput/Requested`
      </td>

      <td>
        Identifies the number of times that work has been requested to be run on a different thread pool managed thread.
      </td>
    </tr>

    <tr>
      <td>
        `Threadpool/Throughput/Started`
      </td>

      <td>
        Identifies the number of work items requested to be run on a separate thread that have started execution.
      </td>
    </tr>

    <tr>
      <td>
        `Threadpool/Throughput/QueueLength`
      </td>

      <td>
        Identifies the number of work items that have been requested, but are waiting to start. Numbers that consistently increase indicate a potential thread pool starvation situation. The following [article](https://docs.microsoft.com/en-us/dotnet/api/system.threading.threadpool.setmaxthreads) describes how to modify the number of threads that are available to an application.
      </td>
    </tr>
  </tbody>
</table>
