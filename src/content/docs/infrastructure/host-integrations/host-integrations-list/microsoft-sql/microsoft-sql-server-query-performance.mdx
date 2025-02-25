---
title: Microsoft SQL Server's integration query level monitoring
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
  - Configuration
metaDescription: Configuration New Relic's Kafka integration.
freshnessValidatedDate: never
---

<Callout title="Preview">
    We're still working on this feature, but we'd love for you to try it out!

    This feature is currently provided as part of a preview pursuant to our [pre-release policies](https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy/).
</Callout>

You can view query-level analysis to monitor your SQL queries within your MSSQL database to assess their performance and impact. This feature provides insights into execution times, resource consumption, and potential bottlenecks, enabling you to optimize database operations. For more information, refer [Query-Level Analysis](/docs/infrastructure/infrastructure-data/query-level-monitoring). 



<img
  title="Query Performance monitoring"
  alt="Query Performance monitoring"
  src="/images/mssql-query-performance.webp"
/>


## Prerequisites:
* Microsoft SQL Server supports 2017, 2019, or 2022.
* DB user should be a member of the sysadmin fixed server role or have the `VIEW SERVER STATE` permission.


To enable the query level monitoring feature, follow these steps:

<Steps>
  <Step>
    ## To Enable SQL Server and Windows Authentication mode
    Enable the login on the SQL Server and Windows Authentication mode. For more information, refer [Microsoft change authentication mode documentation](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/change-server-authentication-mode?view=sql-server-ver16&tabs=ssms).
  </Step>
  <Step>
    ## To Enable TCP
    1. Ensure TCP is enabled for remote access on your instance using the [documentation](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver16)
    2. Check firewall settings:
      - Ensure that your firewall allows traffic on port `1433`. This is the listening port for Microsoft SQL Server:
        - Open **Windows Defender Firewall with Advanced Security**.
        - In the left menu, click **Inbound Rules.**
        - Find any rule for SQL Server (typically named SQL Server (TCP-In) or SQL Server TCP 1433).
        - If a rule doesn't exist, create a new rule to allow TCP traffic on port 1433.
  </Step>
  <Step>
    ## To Enable the query store [#queryStore]
    Run the following command
    ```sql
    ALTER DATABASE DATABASE_NAME SET QUERY_STORE = ON ( QUERY_CAPTURE_MODE = ALL, DATA_FLUSH_INTERVAL_SECONDS = 900 )
    ```
  </Step>
  <Step>
    ## Run the below query to confirm if the query store is enabled [#confirmQueryStore]
    If the output of the query is 1 then we can assume the query store is enabled.
    ```sql
    SELECT is_query_store_on FROM sys.databases where physical_database_name = DATABASE_NAME
    ```
  </Step>
  <Step>
    ## To Integrate MSSQL agent
    Integrate MSSQL agent using [this guide.](/install/microsoft-sql)
  </Step>
  <Step>
    ## To Configure the MSSQL integration to enable query performance monitoring
    1. To change the directory to the integration configuration folder, run:

    ```bash
    cd "C:\Program Files\New Relic\newrelic-infra\integrations.d\"
    ```

    2. Edit the `mssql-config.yml` file with the following configuration:
      * `ENABLE_QUERY_MONITORING` - Enable query performance monitoring - Defaults to `false`.
      * `QUERY_MONITORING_RESPONSE_TIME_THRESHOLD `-  Set the threshold for query response time in ms to retrieve individual query performance metrics. The `Defaults` is set to `500 ms`.
      * `QUERY_MONITORING_COUNT_THRESHOLD` - The number of records for each query performance metrics. The `Defaults` is set to `20`.

      ```yaml
        integrations:
        - name: nri-mssql
        env:
          HOSTNAME: localhost
          PORT: 1433
          USERNAME: USERNAME
          PASSWORD: PASSWORD
          ENABLE_SSL: true
          TRUST_SERVER_CERTIFICATE: true
          # Enable collection of detailed query performance metrics.
          ENABLE_QUERY_MONITORING: true
          # Threshold in milliseconds for query response time. If response time exceeds this threshold, the query will be considered slow.
          QUERY_MONITORING_RESPONSE_TIME_THRESHOLD: 500
          # Maximum number of queries returned in query analysis results.
          QUERY_MONITORING_COUNT_THRESHOLD: 20
          # Interval in seconds for fetching grouped slow queries; Should always be same as mysql-config interval.
          QUERY_MONITORING_FETCH_INTERVAL: 15
        interval: 15s
        labels:
          environment: production
        inventory_source: config/mssql
      ```
  </Step>
  <Step>
    ## Find your data

    You can use our prebuilt dashboard template to monitor your MSSQL metrics. Follow these steps to use our prebuilt dashboard template:

    1. From [one.newrelic.com](https://one.newrelic.com), go to the <DNT>**+ Integrations & Agents**</DNT> page.
    2. Click <DNT>**Dashboards**</DNT>
    3. In the search bar, type `MSSQL On-Host Integration`
    4. The MSSQL dashboard appears. Click it to install.
  </Step>
</Steps>

## Metrics collected by Integration

<CollapserGroup>
  <Collapser
    id="blockingSession"
    title="Blocking session metrics"
  >
    <table>
      <thead>
      <tr>
        <th>
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
          `blocking_spid`
        </td>
        <td>
          The ID of the blocking session.
        </td>
      </tr>
      <tr>
        <td>
          `blocking_status`
        </td>
        <td>
          The status of the blocking session.
        </td>
      </tr>
      <tr>
        <td>
          `blocked_spid`
        </td>
        <td>
          The ID of the blocked session.
        </td>
      </tr>
      <tr>
        <td>
          `blocked_status`
        </td>
        <td>
          The status of the blocked session.
        </td>
      </tr>
      <tr>
        <td>
          `wait_type`
        </td>
        <td>
          The type of wait experienced by the blocked session.
        </td>
      </tr>
      <tr>
        <td>
          `wait_time_in_seconds`
        </td>
        <td>
          The time the session has been waiting in seconds.
        </td>
      </tr>
      <tr>
        <td>
          `command_type`
        </td>
        <td>
          The type of command being performed.
        </td>
      </tr>
      <tr>
        <td>
          `database_name`
        </td>
        <td>
          The name of the database where the blocking is occurring.
        </td>
      </tr>
      <tr>
        <td>
          `blocking_query_text`
        </td>
        <td>
          The text of the query causing the block.
        </td>
      </tr>
      <tr>
        <td>
          `blocked_query_text`
        </td>
        <td>
          The text of the query being blocked.
        </td>
      </tr>
      <tr>
        <td>
          `blocked_query_start_time`
        </td>
        <td>
          The start time of the blocked query.
        </td>
      </tr>
      </tbody>
    </table>
  </Collapser>
  <Collapser
    id="executionPlan"
    title="Query Execution Plan Metrics">
    <table>
      <thead>
      <tr>
        <th>
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
          `sql_text`
        </td>
        <td>
          The SQL statement text.
        </td>
      </tr>
      <tr>
        <td>
          `query_id`
        </td>
        <td>
          The unique identifier for the query.
        </td>
      </tr>
      <tr>
        <td>
          `query_plan_id`
        </td>
        <td>
          The unique identifier for the query plan.
        </td>
      </tr>
      <tr>
        <td>
          `NodeId`
        </td>
        <td>
          The ID of the node in the execution plan.
        </td>
      </tr>
      <tr>
        <td>
          `PhysicalOp`
        </td>
        <td>
          The physical operation performed by this node.
        </td>
      </tr>
      <tr>
        <td>
          `LogicalOp`
        </td>
        <td>
          The logical operation represented by this node.
        </td>
      </tr>
      <tr>
        <td>
          `EstimateRows`
        </td>
        <td>
          The estimated number of rows this operation will produce.
        </td>
      </tr>
      <tr>
        <td>
          `EstimateIO`
        </td>
        <td>
          The estimated I/O cost of this operation.
        </td>
      </tr>
      <tr>
        <td>
          `EstimateCPU`
        </td>
        <td>
          The estimated CPU cost of this operation.
        </td>
      </tr>
      <tr>
        <td>
          `AvgRowSize`
        </td>
        <td>
          The average size of the rows processed by this node.
        </td>
      </tr>
      <tr>
        <td>
          `TotalSubtreeCost`
        </td>
        <td>
          The estimated total cost for running this subtree.
        </td>
      </tr>
      <tr>
        <td>
          `EstimatedOperatorCost`
        </td>
        <td>
          The cost estimate of the node's operation.
        </td>
      </tr>
      <tr>
        <td>
          `EstimatedExecutionMode`
        </td>
        <td>
          The estimated execution mode of this operation.
        </td>
      </tr>
      <tr>
        <td>
          `GrantedMemoryKb`
        </td>
        <td>
          The amount of memory granted for this query in kilobytes.
        </td>
      </tr>
      <tr>
        <td>
          `SpillOccurred`
        </td>
        <td>
          A boolean indicator of whether a spill occurred.
        </td>
      </tr>
      <tr>
        <td>
          `NoJoinPredicate`
        </td>
        <td>
          A boolean indicator of whether there is a join predicate.
        </td>
      </tr>
      <tr>
        <td>
          `total_worker_time`
        </td>
        <td>
          The total worker time in milliseconds.
        </td>
      </tr>
      <tr>
        <td>
          `total_elapsed_time`
        </td>
        <td>
          The total elapsed time in milliseconds.
        </td>
      </tr>
      <tr>
        <td>
          `total_logical_reads`
        </td>
        <td>
          The total number of logical reads performed.
        </td>
      </tr>
      <tr>
        <td>
          `total_logical_writes`
        </td>
        <td>
          The total number of logical writes performed.
        </td>
      </tr>
      <tr>
        <td>
          `execution_count`
        </td>
        <td>
          The number of times the query was executed.
        </td>
      </tr>
      <tr>
        <td>
          `plan_handle`
        </td>
        <td>
          The plan handle used for retrieving the plan.
        </td>
      </tr>
      <tr>
        <td>
          `avg_elapsed_time_ms`
        </td>
        <td>
          The average elapsed time in milliseconds.
        </td>
      </tr>
      </tbody>
    </table>
  </Collapser>
  <Collapser id="waitTime"
             title="Wait Event Metrics">
    <table>
      <thead>
      <tr>
        <th>Metric</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>query_id</td>
        <td>The unique identifier for the query.</td>
      </tr>
      <tr>
        <td>database_name</td>
        <td>The name of the database.</td>
      </tr>
      <tr>
        <td>query_text</td>
        <td>The text of the query.</td>
      </tr>
      <tr>
        <td>wait_category</td>
        <td>The category of wait experienced by the query.</td>
      </tr>
      <tr>
        <td>total_wait_time_ms</td>
        <td>The total amount of wait time in milliseconds.</td>
      </tr>
      <tr>
        <td>avg_wait_time_ms</td>
        <td>The average amount of wait time in milliseconds.</td>
      </tr>
      <tr>
        <td>wait_event_count</td>
        <td>The count of wait events that occurred.</td>
      </tr>
      <tr>
        <td>last_execution_time</td>
        <td>The time of the last execution of the query.</td>
      </tr>
      <tr>
        <td>collection_timestamp</td>
        <td>The timestamp of when the data was collected.</td>
      </tr>
      </tbody>
    </table>
  </Collapser>
  <Collapser id="slowQueries"
             title="Slow Query Metrics">
    <table>
      <thead>
      <tr>
        <th >Metrics</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>query_id</td>
        <td>The unique identifier for the query.</td>
      </tr>
      <tr>
        <td>query_text</td>
        <td>The text of the query.</td>
      </tr>
      <tr>
        <td>database_name</td>
        <td>The name of the database.</td>
      </tr>
      <tr>
        <td>schema_name</td>
        <td>The name of the schema.</td>
      </tr>
      <tr>
        <td>last_execution_timestamp</td>
        <td>The timestamp of the last execution of the query.</td>
      </tr>
      <tr>
        <td>execution_count</td>
        <td>The number of times the query was executed.</td>
      </tr>
      <tr>
        <td>avg_cpu_time_ms</td>
        <td>The average CPU time in milliseconds.</td>
      </tr>
      <tr>
        <td>avg_elapsed_time_ms</td>
        <td>The average elapsed time in milliseconds.</td>
      </tr>
      <tr>
        <td>avg_disk_reads</td>
        <td>The average number of disk reads.</td>
      </tr>
      <tr>
        <td>avg_disk_writes</td>
        <td>The average number of disk writes.</td>
      </tr>
      <tr>
        <td>statement_type</td>
        <td>The type of SQL statement.</td>
      </tr>
      <tr>
        <td>collection_timestamp</td>
        <td>The timestamp of when the data was collected.</td>
      </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
