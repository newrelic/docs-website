---
componentType: default
headingText: What's next?
---

<Callout variant="important">
  This integration doesn't automatically update. For best results, regularly [update the integration package](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package) and [the infrastructure agent](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).
</Callout>

## Configuration options [#config-options]

For the standard on-host installation, this integration comes with a YAML config file, `cassandra-config.yml`. This configuration is where you can place required login credentials and configure how data is collected. Which options you change depends on your setup and preferences. It comes with a sample config file `cassandra-config.yml.sample` that you can copy and edit.

Specific settings related to Cassandra are defined using the `env` section of the configuration file. These settings control the connection to your Cassandra instance as well as other security settings and features. The list of valid settings is described in the next section of this document.

### Cassandra configuration options [#config-options]

The Cassandra integration collects both metrics(**M**) and inventory(**I**) information. In the table, use the **Applies To** column for the settings available to each collection:

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
        Hostname or IP where Cassandra is running.
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
        Port on which Cassandra is listening.
      </td>

      <td>
        `7199`
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
        `USERNAME`
      </td>

      <td>
        Username for accessing JMX.
      </td>

      <td>
        N/A
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
        `PASSWORD`
      </td>

      <td>
        Password for the given user.
      </td>

      <td>
        N/A
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
        `CONFIG_PATH`
      </td>

      <td>
        Path to the Cassandra configuration file.
      </td>

      <td>
        `/etc/cassandra/`
        <br/>
        `cassandra.yaml`
      </td>

      <td style={{ 'text-align': 'center' }}>
        I
      </td>
    </tr>

    {
      ' '
    }

    <tr>
      <td>
        `COLUMN_FAMILIES_LIMIT`
      </td>

      <td>
        Limit on number of Cassandra Column Families.
      </td>

      <td>
        `20`
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
        `TIMEOUT`
      </td>

      <td>
        Request timeout in milliseconds.
      </td>

      <td>
        `2000`
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
        `KEY_STORE`
      </td>

      <td>
        The filepath of the keystore containing the JMX client's SSL certificate.
      </td>

      <td>
        N/A
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
        `KEY_STORE_PASSWORD`
      </td>

      <td>
        The password for the JMX SSL key store.
      </td>

      <td>
        N/A
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
        `TRUST_STORE`
      </td>

      <td>
        The filepath of the trust store containing the JMX client's SSL certificate.
      </td>

      <td>
        N/A
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
        `TRUST_STORE_PASSWORD`
      </td>

      <td>
        The password for the JMX SSL trust store.
      </td>

      <td>
        N/A
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
        [`REMOTE_MONITORING`](/docs/remote-monitoring-host-integrations)
      </td>

      <td>
        Enable multi-tenancy monitoring.
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

You can define the values for these settings in several ways:

* Adding the value directly in the config file. This is the most common way.
* Replacing the values from environment variables using the `{{}}` notation. This requires infrastructure agent v1.14.0+. Read more [here](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough) or see the example [below](#envvar-replacement).
* Using secrets management. Use this to protect sensitive information, such as passwords that would be exposed in plain text on the configuration file. For more information, see [Secrets management](/docs/integrations/host-integrations/installation/secrets-management).

### Labels [#labels]

You can further decorate your metrics using labels. Labels allow you to add attributes (key/value pairs) to your metrics, which you can then use to query, filter, or group your metrics.

Our default sample config file includes examples of labels but, because they're not mandatory, you can remove, modify, or add new ones of your choice.

```yml
labels:
  env: production
  role: load_balancer
```

## Example configurations [#examples]

Here are some example YAML configurations:

<CollapserGroup>
  <Collapser
    id="basic-intervals"
    title="Basic configuration with different metric/inventory intervals"
  >
    This configuration collects metrics every 30 seconds and inventory every 60 seconds:

    ```yml
    integrations:
      - name: nri-cassandra
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 7199
          USERNAME: cassandra_user
          PASSWORD: cassandra_password
          REMOTE_MONITORING: true
        interval: 30s
        labels:
          environment: production

      - name: nri-cassandra
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 7199
          USERNAME: cassandra_user
          PASSWORD: cassandra_password
          CONFIG_PATH: /etc/cassandra/cassandra.yml
        interval: 60s
        labels:
          environment: production
        inventory_source: config/cassandra
    ```
  </Collapser>

  <Collapser
    id="envvar-replacement"
    title="Environment variables replacement"
  >
    In this configuration we're using the environment variable `CASSANDRA_HOST` to populate the `HOSTNAME` setting of the integration:

    ```yml
    integrations:
      - name: nri-cassandra
        env:
          METRICS: "true"
          HOSTNAME: { { CASSANDRA_HOST } }
          PORT: 7199
          USERNAME: cassandra_user
          PASSWORD: cassandra_password
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
    In this configuration we're monitoring multiple Cassandra servers from the same integration. For the first instance (`HOSTNAME: 1st_cassandra_host`) we're collecting metrics and inventory while for the second instance (`HOSTNAME: 2nd_cassandra_host`) we will only collect metrics.

    ```yml
    integrations:
      - name: nri-cassandra
        env:
          METRICS: "true"
          HOSTNAME: 1st_cassandra_host
          PORT: 7199
          USERNAME: cassandra_user
          PASSWORD: cassandra_password
        interval: 30s
        labels:
          env: production
          role: load_balancer
      - name: nri-cassandra
        env:
          INVENTORY: "true"
          HOSTNAME: 1st_cassandra_host
          PORT: 7199
          USERNAME: cassandra_user
          PASSWORD: cassandra_password
        interval: 60s
        labels:
          env: production
          role: load_balancer
        inventory_source: config/cassandra

      - name: nri-cassandra
        env:
          METRICS: "true"
          HOSTNAME: 2nd_cassandra_host
          PORT: 7199
          USERNAME: cassandra_user
          PASSWORD: cassandra_password
        interval: 30s
        labels:
          env: production
          role: load_balancer
    ```
  </Collapser>
</CollapserGroup>

## Metric data [#metrics]

Cassandra node metrics are attached to the `CassandraSample` [event type](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic). The Cassandra integration collects these node metrics:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `db.allMemtablesOffHeapSizeBytes`
      </td>

      <td>
        Total amount of bytes stored in the memtables (2i and pending flush memtables included) that resides on-heap.
      </td>
    </tr>

    <tr>
      <td>
        `db.allMemtablesOnHeapSizeBytes`
      </td>

      <td>
        Total amount of bytes stored in the memtables (2i and pending flush memtables included) that resides off-heap.
      </td>
    </tr>

    <tr>
      <td>
        `db.commitLogCompletedTasksPerSecond`
      </td>

      <td>
        The number of commit log messages written per second.
      </td>
    </tr>

    <tr>
      <td>
        `db.commitLogPendindTasks`
      </td>

      <td>
        Number of commit log messages written but yet to be fsync’ed.
      </td>
    </tr>

    <tr>
      <td>
        `db.commitLogTotalSizeBytes`
      </td>

      <td>
        Current size, in bytes, used by all the commit log segments.
      </td>
    </tr>

    <tr>
      <td>
        `db.droppedRequestTypeMessagesPerSecond`
      </td>

      <td>
        Dropped messages per second for this type of request. `RequestType` can be any of the following: BatchRemove, BatchStore, CounterMutation, Hint, Mutation, PagedRange, RangeSlice, Read, ReadRepair, RequestResponse, or Trace.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyCacheCapacityBytes`
      </td>

      <td>
        Key cache capacity in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyCacheHitRate`
      </td>

      <td>
        One-minute key cache hit rate.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyCacheHitsPerSecond`
      </td>

      <td>
        Number of key cache hits per second.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyCacheRequestsPerSecond`
      </td>

      <td>
        Number of requests to the key cache per second.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyCacheSizeBytes`
      </td>

      <td>
        Size of occupied cache in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `db.liveSSTableCount`
      </td>

      <td>
        Number of SSTables on disk for this column family.
      </td>
    </tr>

    <tr>
      <td>
        `db.loadBytes`
      </td>

      <td>
        Size, in bytes, of the on disk data size this node manages.
      </td>
    </tr>

    <tr>
      <td>
        `db.rowCacheCapacityBytes`
      </td>

      <td>
        Row cache capacity in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `db.rowCacheHitRate`
      </td>

      <td>
        One-minute row cache hit rate.
      </td>
    </tr>

    <tr>
      <td>
        `db.rowCacheHitsPerSecond`
      </td>

      <td>
        Number of row cache hits per second.
      </td>
    </tr>

    <tr>
      <td>
        `db.rowCacheRequestsPerSecond`
      </td>

      <td>
        Number of requests to the row cache per second.
      </td>
    </tr>

    <tr>
      <td>
        `db.rowCacheSizeBytes`
      </td>

      <td>
        Total size of occupied row cache, in bytes.
      </td>
    </tr>

    <tr>
      <td>
        `db.threadpool.<pool>ActiveTasks`
      </td>

      <td>
        Number of tasks being actively worked on by this pool. `pool` can be one of the following:

        * `internalAntiEntropyStage`
        * `internalCacheCleanupExecutor`
        * `internalCompactionExecutor`
        * `internalGossipStage`
        * `internalHintsDispatcher`
        * `internalInternalResponseStage`
        * `internalMemtableFlushWriter`
        * `internalMemtablePostFlush`
        * `internalMemtableReclaimMemory`
        * `internalMigrationStage`
        * `internalMiscStage`
        * `internalPendingRangeCalculator`
        * `internalSampler`
        * `internalSecondaryIndexManagement`
        * `internalValidationExecutor`
        * `nativeTransportRequest`
        * `requestCounterMutationStage`
        * `requestMutationStage`
        * `requestReadRepairStage`
        * `requestReadStage`
        * `requestRequestResponse`
        * `requestViewMutationStage`
      </td>
    </tr>

    <tr>
      <td>
        `db.threadpool.<pool>PendingTasks`
      </td>

      <td>
        Number of queued tasks queued up on this pool. `pool` can be any of the items in the list provided in the description of `db.threadpool.<pool>ActiveTasks`.
      </td>
    </tr>

    <tr>
      <td>
        `db.threadpool.<pool>CompletedTasks`
      </td>

      <td>
        Number of tasks completed. `pool` can be any of the items in the list provided in the description of `db.threadpool.<pool>ActiveTasks`.
      </td>
    </tr>

    <tr>
      <td>
        `db.threadpool.<pool>TotalBlockedTasks`
      </td>

      <td>
        Number of tasks that were blocked due to queue saturation. `pool` can be any of the items in the list provided in the description of `db.threadpool.<pool>ActiveTasks`.
      </td>
    </tr>

    <tr>
      <td>
        `db.threadpool.<pool>CurrentlyBlockedTask`
      </td>

      <td>
        Number of tasks that are currently blocked due to queue saturation but on retry will become unblocked. `pool` can be any of the items in the list provided in the description of `db.threadpool.<pool>ActiveTasks`.
      </td>
    </tr>

    <tr>
      <td>
        `db.totalHintsInProgress`
      </td>

      <td>
        Number of hints currently attempting to be sent.
      </td>
    </tr>

    <tr>
      <td>
        `db.totalHintsPerSecond`
      </td>

      <td>
        Number of hint messages per second written to this node. Includes one entry for each host to be hinted per hint.
      </td>
    </tr>

    <tr>
      <td>
        `query.CASReadRequestsPerSecond`
      </td>

      <td>
        Transaction read latency in requests per second.
      </td>
    </tr>

    <tr>
      <td>
        `query.CASWriteRequestsPerSecond`
      </td>

      <td>
        Transaction write latency in requests per second.
      </td>
    </tr>

    <tr>
      <td>
        `query.rangeSliceRequestsPerSecond`
      </td>

      <td>
        Number of range slice requests per second.
      </td>
    </tr>

    <tr>
      <td>
        `query.rangeSliceTimeoutsPerSecond`
      </td>

      <td>
        Number of timeouts encountered per second when processing token range read requests.
      </td>
    </tr>

    <tr>
      <td>
        `query.rangeSliceUnavailablesPerSecond`
      </td>

      <td>
        Number of unavailable exceptions encountered per second when processing token range read requests.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency50thPercentileMilliseconds`
      </td>

      <td>
        Read latency in milliseconds, 50th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency75thPercentileMilliseconds`
      </td>

      <td>
        Read latency in milliseconds, 75th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency95thPercentileMilliseconds`
      </td>

      <td>
        Read latency in milliseconds, 95th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency98thPercentileMilliseconds`
      </td>

      <td>
        Read latency in milliseconds, 98th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency999thPercentileMilliseconds`
      </td>

      <td>
        Read latency in milliseconds, 999th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency99thPercentileMilliseconds`
      </td>

      <td>
        Read latency in milliseconds, 99th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readRequestsPerSecond`
      </td>

      <td>
        Number of read requests per second.
      </td>
    </tr>

    <tr>
      <td>
        `query.readTimeoutsPerSecond`
      </td>

      <td>
        Number of timeouts encountered per second when processing standard read requests.
      </td>
    </tr>

    <tr>
      <td>
        `query.readUnavailablesPerSecond`
      </td>

      <td>
        Number of unavailable exceptions encountered per second when processing standard read requests.
      </td>
    </tr>

    <tr>
      <td>
        `query.viewWriteRequestsPerSecond`
      </td>

      <td>
        Number of view write requests per second.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency50thPercentileMilliseconds`
      </td>

      <td>
        Write latency in milliseconds, 50th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency75thPercentileMilliseconds`
      </td>

      <td>
        Write latency in milliseconds, 75th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency95thPercentileMilliseconds`
      </td>

      <td>
        Write latency in milliseconds, 95th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency98thPercentileMilliseconds`
      </td>

      <td>
        Write latency in milliseconds, 98th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency999thPercentileMilliseconds`
      </td>

      <td>
        Write latency in milliseconds, 999th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency99thPercentileMilliseconds`
      </td>

      <td>
        Write latency in milliseconds, 99th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeRequestsPerSecond`
      </td>

      <td>
        Number of write requests per second.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeTimeoutsPerSecond`
      </td>

      <td>
        Number of timeouts encountered per second when processing regular write requests.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeUnavailablesPerSecond`
      </td>

      <td>
        Number of unavailable exceptions encountered per second when processing regular write requests.
      </td>
    </tr>
  </tbody>
</table>

### Cassandra column family metrics and metadata [#column-fam-metrics]

The Cassandra integration retrieves column family metrics. Cassandra [column family data](#column-fam-metrics) is attached to the `CassandraColumnFamilySample` event type. It skips system keyspaces (`system`, `system_auth`, `system_distributed`, `system_schema`, `system_traces` and `OpsCenter`). To limit the performance impact, the integration will only capture metrics for a maximum of 20 column families.

The following metadata indicates the keyspace and column family associated with the sample metrics:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `db.columnFamily`
      </td>

      <td>
        The Cassandra column family these metrics refer to.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspace`
      </td>

      <td>
        The Cassandra keyspace that contains this column family.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspaceAndColumnFamily`
      </td>

      <td>
        The keyspace and column family in a single metadata attribute in the following format: `keyspace`.`columnFamily`.
      </td>
    </tr>
  </tbody>
</table>

The list of metrics below refer to the specific keyspace and column family specified in the metadata above:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `db.allMemtablesOffHeapSizeBytes`
      </td>

      <td>
        Total number of bytes stored in the memtables (2i and pending flush memtables included) that resides off-heap.
      </td>
    </tr>

    <tr>
      <td>
        `db.allMemtablesOnHeapSizeBytes`
      </td>

      <td>
        Total number of bytes stored in the memtables (2i and pending flush memtables included) that resides on-heap.
      </td>
    </tr>

    <tr>
      <td>
        `db.liveDiskSpaceUsedBytes`
      </td>

      <td>
        Disk space in bytes used by SSTables belonging to this column family (in bytes).
      </td>
    </tr>

    <tr>
      <td>
        `db.liveSSTableCount`
      </td>

      <td>
        Number of SSTables on disk for this column family.
      </td>
    </tr>

    <tr>
      <td>
        `db.pendingCompactions`
      </td>

      <td>
        Estimate of number of pending compactions for this column family.
      </td>
    </tr>

    <tr>
      <td>
        `db.SSTablesPerRead50thPercentileMilliseconds`
      </td>

      <td>
        Number of sstable data files accessed per read, 50th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `db.SSTablesPerRead75thPercentileMilliseconds`
      </td>

      <td>
        Number of sstable data files accessed per read, 75th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `db.SSTablesPerRead95thPercentileMilliseconds`
      </td>

      <td>
        Number of sstable data files accessed per read, 95th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `db.SSTablesPerRead98thPercentileMilliseconds`
      </td>

      <td>
        Number of sstable data files accessed per read, 98th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `db.SSTablesPerRead999thPercentileMilliseconds`
      </td>

      <td>
        Number of sstable data files accessed per read, 999th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `db.SSTablesPerRead99thPercentileMilliseconds`
      </td>

      <td>
        Number of sstable data files accessed per read, 99th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency50thPercentileMilliseconds`
      </td>

      <td>
        Local read latency in milliseconds for this column family, 50th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency75thPercentileMilliseconds`
      </td>

      <td>
        Local read latency in milliseconds for this column family, 75th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency95thPercentileMilliseconds`
      </td>

      <td>
        Local read latency in milliseconds for this column family, 95th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency98thPercentileMilliseconds`
      </td>

      <td>
        Local read latency in milliseconds for this column family, 98th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency999thPercentileMilliseconds`
      </td>

      <td>
        Local read latency in milliseconds for this column family, 999th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readLatency99thPercentileMilliseconds`
      </td>

      <td>
        Local read latency in milliseconds for this column family, 99th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.readRequestsPerSecond`
      </td>

      <td>
        Number of read requests per second for this column family.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency50thPercentileMilliseconds`
      </td>

      <td>
        Local write latency in milliseconds for this column family, 50th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency75thPercentileMilliseconds`
      </td>

      <td>
        Local write latency in milliseconds for this column family, 75th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency95thPercentileMilliseconds`
      </td>

      <td>
        Local write latency in milliseconds for this column family, 95th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency98thPercentileMilliseconds`
      </td>

      <td>
        Local write latency in milliseconds for this column family, 98th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency999thPercentileMilliseconds`
      </td>

      <td>
        Local write latency in milliseconds for this column family, 999th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeLatency99thPercentileMilliseconds`
      </td>

      <td>
        Local write latency in milliseconds for this column family, 99th percentile.
      </td>
    </tr>

    <tr>
      <td>
        `query.writeRequestsPerSecond`
      </td>

      <td>
        Number of write requests per second for this column family.
      </td>
    </tr>
  </tbody>
</table>

## Inventory

The integration captures configuration options defined in the Cassandra configuration and reports them as [inventory data in the New Relic UI](/docs/find-use-infrastructure-integration-data).

## System metadata [#metadata]

The Cassandra integration also collects these [attributes](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) about the service and its configuration:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `software.version`
      </td>

      <td>
        The Cassandra version.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.name`
      </td>

      <td>
        The name of the cluster this Cassandra node belongs to.
      </td>
    </tr>
  </tbody>
</table>

## Check the source code [#source-code]

This integration is open source software. That means you can [browse its source code](https://github.com/newrelic/nri-cassandra) and send improvements, or create your own fork and build it.
