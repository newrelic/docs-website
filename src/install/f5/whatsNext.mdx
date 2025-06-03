---
componentType: default
headingText: Metrics collected by the integration
---

## F5 instance settings [#instance-settings]

The F5 integration collects both metrics(**M**) and inventory(**I**) information. In the table, use the **Applies To** column for the settings available to each collection:

<table>
  <thead>
    <tr>
      <th style={{ width: '150px' }}>
        Setting
      </th>

      <th>
        Description
      </th>

      <th>
        Default
      </th>

      <th>
        Applies to
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `HOSTNAME`
      </td>

      <td>
        Hostname or IP where F5 is running.
      </td>

      <td>
        `localhost`
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `PORT`
      </td>

      <td>
        Port on which F5 API is listening.
      </td>

      <td>
        `443`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `USERNAME`
      </td>

      <td>
        Username for accessing F5 API.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `PASSWORD`
      </td>

      <td>
        Password for the given user.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `CA_BUNDLE_FILE`
      </td>

      <td>
        Alternative Certificate Authority bundle file.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `CA_BUNDLE_DIR`
      </td>

      <td>
        Alternative Certificate Authority bundle directory.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `TIMEOUT`
      </td>

      <td>
        Timeout for requests, in seconds.
      </td>

      <td>
        30
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `PARTITION_FILTER`
      </td>

      <td>
        A JSON array of BIG-IP partitions to collect from. See this [metrics-only
        with partition filtering example](#filters).
      </td>

      <td>
        `["Common"]`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `MAX_CONCURRENT_REQUESTS`
      </td>

      <td>
        Maximum number of requests running concurrently.
      </td>

      <td>
        `10`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `TLS_INSECURE_SKIP_VERIFY`
      </td>

      <td>
        Skip verification of the certificate sent by the host.
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `METRICS`
      </td>

      <td>
        Set to `true` to enable metrics-only collection.
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `INVENTORY`
      </td>

      <td>
        Set to `true` to enable inventory-only collection.
      </td>

      <td>
        `false`
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

You can define these setting values in different ways, depending on your preference and need:

* Add the value directly in the config file. This is the most common way.
* Replace the values from environment variables using the `{{}}` notation. This requires infrastructure agent v1.14.0 or higher. Read more [on using passthrough](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough) or see the [environment variables replacement example](#envvar-replacement).
* Use secrets management to protect sensitive information, such as passwords, that would be exposed in plain text in the configuration file. For more information, read more about using [secrets management](/docs/integrations/host-integrations/installation/secrets-management).

## Labels and custom attributes [#labels]

You can also decorate your metrics using labels. Labels allow you to add key/value pair attributes to your metrics, which you can then use to query, filter, or group your metrics.

Our default sample config file includes examples of labels. You can remove, modify, or add new ones of your choice.

```yml
labels:
  env: production
  role: load_balancer
```

## Example configurations [#examples]

<CollapserGroup>
  <Collapser
    id="basic-config"
    title="Basic configuration"
  >
    This is the basic configuration used to collect metrics and inventory from your localhost:

    ```yml
    integrations:
      - name: nri-f5
        env:
          HOSTNAME: localhost
          PORT: 443
          USERNAME: f5_user
          PASSWORD: f5_password
        interval: 15s
        labels:
          environment: production
        inventory_source: config/f5
    ```
  </Collapser>

  <Collapser
    id="basic-intervals"
    title="Basic configuration with different metric or inventory intervals"
  >
    This configuration collects metrics every 15 seconds and inventory every 60 seconds:

    ```yml
    integrations:
      - name: nri-f5
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 443
          USERNAME: f5_user
          PASSWORD: f5_password
        interval: 15s
        labels:
          environment: production

      - name: nri-f5
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 443
          USERNAME: f5_user
          PASSWORD: f5_password
        interval: 60s
        labels:
          environment: production
        inventory_source: config/f5
    ```
  </Collapser>

  <Collapser
    id="envvar-replacement"
    title="Environment variables replacement"
  >
    In this configuration, the environment variable `F5_HOST` populates the `HOSTNAME` setting of the integration:

    ```yml
    integrations:
      - name: nri-f5
        env:
          METRICS: "true"
          HOSTNAME: {{F5_HOST}}
          PORT: 443
          USERNAME: f5_user
          PASSWORD: f5_password
        interval: 15s
        labels:
          env: production
          role: load_balancer
    ```
  </Collapser>

  <Collapser
    id="filters"
    title="Metrics-only with partition filtering"
  >
    This configuration only collects metrics and adds `"MyOtherPartition"` to the list of partitions to be sampled. By default, the integration only samples the `"Common"` partition:

    ```yml
    integrations:
      - name: nri-f5
        env:
          METRICS: "true"
          HOSTNAME: {{F5_HOST}}
          PORT: 443
          USERNAME: f5_user
          PASSWORD: f5_password
          PARTITION_FILTER:  '["Common","MyOtherPartition"]'
        interval: 15s
        labels:
          env: production
          role: load_balancer
    ```
  </Collapser>

  <Collapser
    id="multi-instance"
    title="Multi-instance monitoring"
  >
    This configuration monitors multiple F5 servers from the same integration. The first instance (`HOSTNAME: 1st_f5_host`) collects metrics and inventory, while the second instance (`HOSTNAME: 2nd_f5_host`) only collects metrics.

    ```yml
    integrations:
      - name: nri-f5
        env:
          METRICS: "true"
          HOSTNAME: 1st_f5_host
          PORT: 443
          USERNAME: f5_user
          PASSWORD: f5_password
        interval: 15s
        labels:
          env: production
          role: load_balancer
      - name: nri-f5
        env:
          INVENTORY: "true"
          HOSTNAME: 1st_f5_host
          PORT: 443
          USERNAME: f5_user
          PASSWORD: f5_password
        interval: 60s
        labels:
          env: production
          role: load_balancer
        inventory_source: config/f5

      - name: nri-f5
        env:
          METRICS: "true"
          HOSTNAME: 2nd_f5_host
          PORT: 443
          USERNAME: f5_user
          PASSWORD: f5_password
        interval: 15s
        labels:
          env: production
          role: load_balancer
    ```
  </Collapser>
</CollapserGroup>

## Find and use data [#find-and-use]

To find your integration data, go to **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Third-party services** and select one of the F5 BIG-IP integration links.

F5 BIG-IP data is attached to the following event types:

* `F5BigIpSystemSample`
* `F5BigIpVirtualServerSample`
* `F5BigIpPoolSample`
* `F5BigIpPoolMemberSample`
* `F5BigIpNodeSample`

For more on how to find and use your data, see [Understand integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Metric data [#metrics]

The F5 BIG-IP integration collects the following metric data attributes. Some metric name are prefixed with a category indicator and a period, such as `system.`, `virtualserver.`, or `pool.`.

### System sample metrics [#system-sample]

These attributes can be found by querying the `F5BigIpSystemSample` event types.

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Metric
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `system.cpuIdleTicksPerSecond`
      </td>

      <td>
        Amount of CPU ticks that the CPU was idle per second. Requires Administrator-level user permissions to collect.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuIdleUtilization`
      </td>

      <td>
        Average percentage of time the CPU is idle.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuInterruptRequestUtilization`
      </td>

      <td>
        Average percentage of time the CPU is handling interrupt requests.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuIOWaitUtilization`
      </td>

      <td>
        Average percentage of time the CPU is waiting on IO.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuNiceLevelUtilization`
      </td>

      <td>
        Average percentage of time the CPU is handling nice level processes.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuSoftInterruptRequestUtilization`
      </td>

      <td>
        Average percentage of time the CPU is handling soft interrupt requests.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuStolenUtilization`
      </td>

      <td>
        Average percentage of time the CPU is handling reclaimed cycles by the hypervisor.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuSystemTicksPerSecond`
      </td>

      <td>
        Amount of CPU ticks used by the kernel processes per second. Requires Administrator-level user permissions to collect.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuSystemUtilization`
      </td>

      <td>
        Average percentage of time the CPU is used by the kernel.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuUserTicksPerSecond`
      </td>

      <td>
        Amount of CPU ticks used by user processes per second. Requires Administrator-level user permissions to collect.
      </td>
    </tr>

    <tr>
      <td>
        `system.cpuUserUtilization`
      </td>

      <td>
        Average percentage of time the CPU is used by user processes.
      </td>
    </tr>

    <tr>
      <td>
        `system.memoryFreeInBytes`
      </td>

      <td>
        Total amount of memory free, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.memoryTotalInBytes`
      </td>

      <td>
        Total amount of memory, in bytes. Requires Administrator-level user permissions to collect.
      </td>
    </tr>

    <tr>
      <td>
        `system.memoryUsedInBytes`
      </td>

      <td>
        Total amount of memory used, in bytes. Requires Administrator-level user permissions to collect.
      </td>
    </tr>

    <tr>
      <td>
        `system.otherMemoryFreeInBytes`
      </td>

      <td>
        Free memory reserved for control plane processes, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.otherMemoryTotalInBytes`
      </td>

      <td>
        Total memory reserved for control plane processes, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.otherMemoryUsedInBytes`
      </td>

      <td>
        Used memory reserved for control plane processes, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.swapFreeInBytes`
      </td>

      <td>
        Swap space free, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.swapTotalInBytes`
      </td>

      <td>
        Swap space total, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.swapUsedInBytes`
      </td>

      <td>
        Swap space used, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.tmmMemoryFreeInBytes`
      </td>

      <td>
        Free memory reserved for Traffic Management Microkernel (TMM), in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.tmmMemoryTotalInBytes`
      </td>

      <td>
        Total memory reserved for Traffic Management Microkernel (TMM), in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.tmmMemoryUsedInBytes`
      </td>

      <td>
        Used memory reserved for Traffic Management Microkernel (TMM), in bytes.
      </td>
    </tr>
  </tbody>
</table>

### Virtual server sample metrics [#virtual-server-sample]

These attributes can be found by querying the `F5BigIpVirtualServerSample` event type.

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Metric
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `virtualserver.avaibilityState`
      </td>

      <td>
        The BIG-IP defined availability. Options:

        * `0` = Offline
        * `1` = Unknown
        * `2` = Online
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.clientsideConnectionsPerSecond`
      </td>

      <td>
        The rate of connections created through the client side of the object per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.cmpEnabled`
      </td>

      <td>
        Indicates whether or not Cluster Multiprocessing (CMP) is enabled.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.cmpEnableMode`
      </td>

      <td>
        Shows the Cluster Multiprocessing (CMP) mode indicators. Options:

        * CMP disabled = `none`, `disable`, or `single`.
        * CMP enabled = `enable` or `all`.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.connections`
      </td>

      <td>
        The current number of connections from BIG-IP.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.csMaxConnDur`
      </td>

      <td>
        Maximum connection duration from the client side of the object.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.csMinConnDur`
      </td>

      <td>
        Minimum connection duration from the client side of the object.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.enabled`
      </td>

      <td>
        The current enabled state. Options:

        * `0` = Disabled
        * `1` = Enabled
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.ephemeralBytesInPerSecond`
      </td>

      <td>
        Total number of bytes in through the ephemeral port per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.ephemeralBytesOutPerSecond`
      </td>

      <td>
        Total number of bytes out through the ephemeral port per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.ephemeralConnectionsPerSecond`
      </td>

      <td>
        The rate of connection creation through the ephemeral port per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.ephemeralCurrentConnections`
      </td>

      <td>
        The current number of connections through the ephemeral port.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.ephemeralEvictedConnectionsPerSecond`
      </td>

      <td>
        The number of connections that are evicted through the ephemeral port per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.ephemeralMaxConnections`
      </td>

      <td>
        Maximum number of connections through the ephemeral port.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.ephemeralPacketsReceivedPerSecond`
      </td>

      <td>
        The number of packets in through the ephemeral port per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.ephemeralPacketsSentPerSecond`
      </td>

      <td>
        The number of packets out through the ephemeral port per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.ephemeralSlowKilledPerSecond`
      </td>

      <td>
        The number of slow connections that are killed through the ephemeral port per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.evictedConnsPerSecond`
      </td>

      <td>
        The rate of connections evicted per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.inDataInBytes`
      </td>

      <td>
        The amount of data received from the BIG-IP virtual server, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.outDataInBytes`
      </td>

      <td>
        The amount of data sent to the BIG-IP virtual server, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.packetsReceived`
      </td>

      <td>
        The number of packets received from the BIG-IP virtual server.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.packetsSent`
      </td>

      <td>
        The number of packets sent to the BIG-IP virtual server.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.requests`
      </td>

      <td>
        The number of requests in the last collection interval to BIG-IP.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.slowKilledPerSecond`
      </td>

      <td>
        The number of slow connections killed through the client side of the object per second.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.statusReason`
      </td>

      <td>
        An explanation of the current status.
      </td>
    </tr>

    <tr>
      <td>
        `virtualserver.usageRatio`
      </td>

      <td>
        The usage ratio for the virtual server.
      </td>
    </tr>
  </tbody>
</table>

### Pool sample metrics [#pool-sample]

These attributes can be found by querying the `F5BigIpPoolSample` event type.

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Metric
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `pool.activeMembers`
      </td>

      <td>
        The number of active pool members.
      </td>
    </tr>

    <tr>
      <td>
        `pool.availabilityState`
      </td>

      <td>
        The current availability state. Options:

        * `0` = Offline
        * `1` = Unknown
        * `2` = Online
      </td>
    </tr>

    <tr>
      <td>
        `pool.connections`
      </td>

      <td>
        The current number of connections.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqAgeEdm`
      </td>

      <td>
        The queue age exponential-decaying max.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqAgeEma`
      </td>

      <td>
        The queue age exponential-moving average.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqAgeHead`
      </td>

      <td>
        The current queue age head.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqAgeMax`
      </td>

      <td>
        The queue age all-time max.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqAllAgeEdm`
      </td>

      <td>
        The sum of pool member queue age exponential-decaying max.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqAllAgeEma`
      </td>

      <td>
        The sum of pool member queue age exponential-moving average.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqAllAgeHead`
      </td>

      <td>
        The sum of pool member queue age head.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqAllAgeMax`
      </td>

      <td>
        The sum of pool member queue age all-time max.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqAllDepth`
      </td>

      <td>
        The sum of pool member depth.
      </td>
    </tr>

    <tr>
      <td>
        `pool.connqDepth`
      </td>

      <td>
        The queue depth.
      </td>
    </tr>

    <tr>
      <td>
        `pool.currentConnections`
      </td>

      <td>
        The current connections.
      </td>
    </tr>

    <tr>
      <td>
        `pool.enabled`
      </td>

      <td>
        The current enabled state, can be user defined. Options:

        * `0` = Disabled
        * `1` = Enabled
      </td>
    </tr>

    <tr>
      <td>
        `pool.inDataInBytes`
      </td>

      <td>
        The amount of data received from the BIG-IP pool, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `pool.minActiveMembers`
      </td>

      <td>
        Pool minimum active members.
      </td>
    </tr>

    <tr>
      <td>
        `pool.outDataInBytes`
      </td>

      <td>
        The amount of data sent to the BIG-IP pool, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `pool.packetsReceived`
      </td>

      <td>
        The number of packets received from the BIG-IP pool.
      </td>
    </tr>

    <tr>
      <td>
        `pool.packetsSent`
      </td>

      <td>
        The number of packets sent to the BIG-IP pool.
      </td>
    </tr>

    <tr>
      <td>
        `pool.requests`
      </td>

      <td>
        The total number of requests to the pool.
      </td>
    </tr>

    <tr>
      <td>
        `pool.statusReason`
      </td>

      <td>
        Textual property explaining the overall health reason.
      </td>
    </tr>
  </tbody>
</table>

### Pool member sample metrics [#pool-member-sample]

These attributes can be found by querying the `F5BigIpPoolMemberSample` event type.

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Metric
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `member.availabilityState`
      </td>

      <td>
        The current availability from the BIG-IP system. Options:

        * `0` = Offline
        * `1` = Unknown
        * `2` = Online
      </td>
    </tr>

    <tr>
      <td>
        `member.connections`
      </td>

      <td>
        The current connections.
      </td>
    </tr>

    <tr>
      <td>
        `member.enabled`
      </td>

      <td>
        Enabled state of the pool member with regards to the parent pool. Options:

        * `0` = Disabled
        * `1` = Enabled
      </td>
    </tr>

    <tr>
      <td>
        `member.inDataInBytes`
      </td>

      <td>
        The amount of data received from the BIG-IP pool member, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `member.monitorStatus`
      </td>

      <td>
        The status of the monitor. Options:

        * `0` = Down
        * `1` = Unchecked
        * `2` = Any other status
      </td>
    </tr>

    <tr>
      <td>
        `member.outDataInBytes`
      </td>

      <td>
        The amount of data sent to the BIG-IP pool member, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `member.packetsReceived`
      </td>

      <td>
        The number of packets received from the BIG-IP pool member.
      </td>
    </tr>

    <tr>
      <td>
        `member.packetsSent`
      </td>

      <td>
        The number of packets sent to the BIG-IP pool member.
      </td>
    </tr>

    <tr>
      <td>
        `member.requests`
      </td>

      <td>
        The current number of requests over the last collection interval.
      </td>
    </tr>

    <tr>
      <td>
        `member.sessions`
      </td>

      <td>
        The current session count.
      </td>
    </tr>

    <tr>
      <td>
        `member.sessionStatus`
      </td>

      <td>
        The current session health status. Options:

        * `0` = Disabled
        * `1` = Enabled
      </td>
    </tr>

    <tr>
      <td>
        `member.state`
      </td>

      <td>
        The current state. Options:

        * `0` = Down
        * `1` = Up
      </td>
    </tr>

    <tr>
      <td>
        `member.statusReason`
      </td>

      <td>
        Explanation of the current status.
      </td>
    </tr>
  </tbody>
</table>

### Node sample metrics [#node-sample]

These attributes can be found by querying the `F5BigIpNodeSample` event type.

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Metric
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `node.availabilityState`
      </td>

      <td>
        The current BIG-IP availability state to the node. Options:

        * `0` = Offline
        * `1` = Unknown
        * `2` = Online
      </td>
    </tr>

    <tr>
      <td>
        `node.connections`
      </td>

      <td>
        The current number of network connections from BIG-IP.
      </td>
    </tr>

    <tr>
      <td>
        `node.connectionsPerSecond`
      </td>

      <td>
        The number of connections made per second.
      </td>
    </tr>

    <tr>
      <td>
        `node.enabled`
      </td>

      <td>
        The current BIG-IP enabled state. Options:

        * `0` = Disabled
        * `1` = Enabled

          ,
      </td>
    </tr>

    <tr>
      <td>
        `node.inDataInBytes`
      </td>

      <td>
        The amount of data received from the BIG-IP node, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `node.monitorStatus`
      </td>

      <td>
        The current health monitor rule status. Options:

        * `0` = Down
        * `1` = Unchecked
        * `2` = Any other status
      </td>
    </tr>

    <tr>
      <td>
        `node.outDataInBytes`
      </td>

      <td>
        The amount of data sent to the BIG-IP node, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `node.packetsReceived`
      </td>

      <td>
        The number of packets received from the BIG-IP node.
      </td>
    </tr>

    <tr>
      <td>
        `node.packetsSent`
      </td>

      <td>
        The number of packets sent to the BIG-IP node.
      </td>
    </tr>

    <tr>
      <td>
        `node.requests`
      </td>

      <td>
        The current number of requests over the last collection from BIG-IP.
      </td>
    </tr>

    <tr>
      <td>
        `node.sessions`
      </td>

      <td>
        The current number of sessions.
      </td>
    </tr>

    <tr>
      <td>
        `node.sessionStatus`
      </td>

      <td>
        The current status of the session. Options:

        * `0` = Disabled
        * `1` = Enabled
      </td>
    </tr>

    <tr>
      <td>
        `node.statusReason`
      </td>

      <td>
        BIG-IP reason for the current status.
      </td>
    </tr>
  </tbody>
</table>

## Inventory data [#inventory]

The F5 BIG-IP integration also collects configuration data at system, application, pool, pool member, virtual server, and node levels.

The data is available on the [Inventory page](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure) in the infrastructure UI, under the **config/f5** source. For more about inventory data, see [Understand integration data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#inventory-data).

The integration captures data for the following F5 BIG-IP configuration parameters:

<CollapserGroup>
  <Collapser
    id="pool-inventory"
    title="Pool Inventory"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
            Metric
          </th>

          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `currentLoadMode`
          </td>

          <td>
            Current load balancing mode.
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            User defined description.
          </td>
        </tr>

        <tr>
          <td>
            `kind`
          </td>

          <td>
            Kind of pool.
          </td>
        </tr>

        <tr>
          <td>
            `maxConnections`
          </td>

          <td>
            Current max number of connections seen at one point.
          </td>
        </tr>

        <tr>
          <td>
            `monitorRule`
          </td>

          <td>
            Current health monitoring rule applied.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="node-inventory"
    title="Node inventory"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
            Metric
          </th>

          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `address`
          </td>

          <td>
            BIG-IP network address to send to the node.
          </td>
        </tr>

        <tr>
          <td>
            `fqdn`
          </td>

          <td>
            FQDN of node.
          </td>
        </tr>

        <tr>
          <td>
            `kind`
          </td>

          <td>
            Type of Node in BIG-IP.
          </td>
        </tr>

        <tr>
          <td>
            `maxConnections`
          </td>

          <td>
            Current highest number of network connections reported from BIG-IP.
          </td>
        </tr>

        <tr>
          <td>
            `monitorRule`
          </td>

          <td>
            BIG-IP Health Monitor rule.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="pool-member-inventory"
    title="Pool Member Inventory"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
            Metric
          </th>

          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `kind`
          </td>

          <td>
            Type of Pool member.
          </td>
        </tr>

        <tr>
          <td>
            `maxConnections`
          </td>

          <td>
            Current highest number of network connections reported from BIG-IP.
          </td>
        </tr>

        <tr>
          <td>
            `monitorRule`
          </td>

          <td>
            BIG-IP health monitor rule.
          </td>
        </tr>

        <tr>
          <td>
            `nodeName`
          </td>

          <td>
            Name of the node the pool member is using.
          </td>
        </tr>

        <tr>
          <td>
            `poolName`
          </td>

          <td>
            Name of the pool the pool member belongs.
          </td>
        </tr>

        <tr>
          <td>
            `port`
          </td>

          <td>
            Port the pool member listens on.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="virtual-server-inventory"
    title="Virtual Server Inventory"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
            Metric
          </th>

          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `applicationService`
          </td>

          <td>
            Current application service assigned.
          </td>
        </tr>

        <tr>
          <td>
            `destination`
          </td>

          <td>
            Destination address picked up by BIG-IP.
          </td>
        </tr>

        <tr>
          <td>
            `kind`
          </td>

          <td>
            Type of virtual server.
          </td>
        </tr>

        <tr>
          <td>
            `maxConnections`
          </td>

          <td>
            Current highest number of network connections reported from BIG-IP.
          </td>
        </tr>

        <tr>
          <td>
            `name`
          </td>

          <td>
            User defined name.
          </td>
        </tr>

        <tr>
          <td>
            `pool`
          </td>

          <td>
            Pool the virtual server uses for load balancing.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="system-inventory"
    title="System Inventory"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
            Metric
          </th>

          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `chassisSerialNumber`
          </td>

          <td>
            Chassis Serial Number for the current device. Requires Access Administrator-level user permissions to collect.
          </td>
        </tr>

        <tr>
          <td>
            `platform`
          </td>

          <td>
            Platform of the current device. Requires Access Administrator-level user permissions to collect.
          </td>
        </tr>

        <tr>
          <td>
            `product`
          </td>

          <td>
            Product Name for the current device. Requires Access Administrator-level user permissions to collect.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="application-inventory"
    title="Application Inventory"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
            Metric
          </th>

          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `deviceGroup`
          </td>

          <td>
            Device group running application service.
          </td>
        </tr>

        <tr>
          <td>
            `kind`
          </td>

          <td>
            BIG-IP Defined type.
          </td>
        </tr>

        <tr>
          <td>
            `name`
          </td>

          <td>
            User defined name.
          </td>
        </tr>

        <tr>
          <td>
            `poolToUse`
          </td>

          <td>
            Server side pool load balancing requests.
          </td>
        </tr>

        <tr>
          <td>
            `template`
          </td>

          <td>
            Template applied to application including security and monitoring rules.
          </td>
        </tr>

        <tr>
          <td>
            `templateModified`
          </td>

          <td>
            Indicator of modifications made to out of the box template.
          </td>
        </tr>

        <tr>
          <td>
            `trafficGroup`
          </td>

          <td>
            Current traffic group to which service is applied.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Check the source code [#source-code]

This integration is open source software. That means you can [browse its source code](https://github.com/newrelic/nri-f5) and send improvements, or create your own fork and build it.
