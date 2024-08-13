---
title: View slow query details
tags:
  - APM
  - APM UI pages
  - Monitoring
translate:
  - jp
metaDescription: 'APM: How to view slow query data, and how to enable and configure slow query data collection.'
redirects:
  - /docs/apm/applications-menu/monitoring/viewing-slow-query-details
  - /docs/apm/applications-menu/monitoring/view-slow-query-details
freshnessValidatedDate: 2024-06-07 
---

In APM, when we collect [transaction traces](/docs/apm/transactions/transaction-traces/introduction-transaction-traces), we might also find some additional <DNT>**Slow query**</DNT> data and display it on the [<DNT>**Databases**</DNT>](/docs/apm/apm-ui-pages/monitoring/databases-page-view-operations-throughput-response-time/) page. Let's look at what slow query data is, where to find it, and how to configure it.

## Sampling of slow query data [#about]

When [transaction traces](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) are reported, the slow queries feature samples the slowest database queries in those traces and reports data about them on the [<DNT>**Databases**</DNT>](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) page. Slow query data can include:

* Duration of query segments
* Query/explain plans (if recognized)
* [Host and instance level details](/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues) (if supported by agent)

## View slow query data [#db_slowsql]

You can view data about slow SQL queries in our APM UI:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**</DNT>.
2. Select an app.
3. Under the <DNT>**Monitor**</DNT> section, click <DNT>**Databases**</DNT>.
4. Select a database transaction.
5. Click on any [slow queries](#slowsql_details) to get details.
   <img title="Screenshot showing the APM databases page with slow queries" alt="Screenshot showing the APM databases page with slow queries" src="/images/apm_screenshot-full_apm-databases-ui.webp"/>

If you do not see expected slow query data, follow the [troubleshooting tips](#troubleshooting).

## Configuration [#settings]

In general, you can configure your slow query settings either of these ways:

* Agent configuration (see below)
* [Server-side configuration](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) (if available for your agent)

Agent configuration gives you more options than server-side configuration does. How you choose to configure slow queries will depend on your own setup and preferences. For more information, see the documentation for the specific agent:

<CollapserGroup>
  <Collapser
    id="go"
    title="Go"
  >
    Agent configuration options:

    * Enable/disable: [`SlowQuery.Enabled`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query)
    * Slow query threshold: [`SlowQuery.Threshold`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query-threshold)
    * For other datastore config options, see [Datastore tracer configuration](/docs/agents/go-agent/configuration/go-agent-configuration#datastore-tracer).
  </Collapser>

  <Collapser
    id="java"
    title="Java"
  >
    Agent configuration:

    * Slow query threshold: [`explain_threshold`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-explain_threshold).
    * For other settings related to slow transactions and queries, see the [Transaction tracer config options](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-Transaction-tracer).

      You can also edit basic slow query settings via [server-side configuration](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>

  <Collapser
    id="net"
    title=".NET"
  >
    Agent configuration:

    * Enable/disable: [`slowSql enabled`](/docs/agents/net-agent/configuration/net-agent-configuration#slow_sql)
    * Slow query threshold: [explainThreshold](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-explainThreshold)
    * For other settings related to slow transactions and queries, see the [Transaction tracer config options](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) and the [Datastore tracer options](/docs/agents/net-agent/configuration/net-agent-configuration#datastore_tracer).

      You can also edit basic slow query settings via [server-side configuration](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>

  <Collapser
    id="node"
    title="Node.js"
  >
    Agent configuration:

    * Enable/disable: [`enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-enabled)
    * Threshold: [`explain_threshold`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#explain_threshold)
    * Maximum slow query samples: [`max_samples`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-max-samples)
    * For other settings related to slow transactions and queries, see the [Transaction tracer config options](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config).

      [Server-side configuration](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) of slow query data is not possible for the Node.js agent.
  </Collapser>

  <Collapser
    id="php"
    title="PHP"
  >
    Agent configuration:

    * Enable/disable: [`slow_sql`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-slowsql)
    * Threshold: [`explain_threshold`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-epthreshold)
    * For other settings related to slow transactions and queries, see the [Transaction tracer config options](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-settings).

      [Server-side configuration](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) is not possible for the PHP agent.
  </Collapser>

  <Collapser
    id="python"
    title="Python"
  >
    Agent configuration:

    * Slow query threshold: [`explain_threshold`](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-explain-threshold)
    * For other settings related to slow transactions and queries, see the [Transaction tracer config options](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings) and the [Datastore tracer options](/docs/agents/python-agent/configuration/python-agent-configuration#datastore-tracer-settings).

      You can also edit basic slow query settings via [server-side configuration](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>

  <Collapser
    id="ruby"
    title="Ruby"
  >
    Agent configuration:

    * Enable/disable: [`slow_sql.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-enabled)
    * Slow query threshold: [`slow_sql.explain_threshold`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-explain_threshold)
    * For other settings related to slow transactions and queries, see the [Transaction tracer config options](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer) and the [Slow SQL config options](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql).

      If applicable for your application's agent language, you can also edit basic slow query settings by using [server-side configuration](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>
</CollapserGroup>

## Slow queries metrics [#slowsql_details]

The slow queries list contains the following metrics:

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Response time`
      </td>

      <td>
        The average response time (in milliseconds) for the statements sampled.
      </td>
    </tr>

    <tr>
      <td>
        `Sample count`
      </td>

      <td>
        The number of slow queries identified in the sample.
      </td>
    </tr>
  </tbody>
</table>

To view additional details, select an individual slow query:

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Start time`
      </td>

      <td>
        When the stack trace began collecting the data shown.
      </td>
    </tr>

    <tr>
      <td>
        `Max time`
      </td>

      <td>
        The maximum time for all similar query statements in the sample.
      </td>
    </tr>

    <tr>
      <td>
        `Action`
      </td>

      <td>
        The action or process invoking the query.
      </td>
    </tr>

    <tr>
      <td>
        `Query`
      </td>

      <td>
        The query that is being reported as slow. Depending on your configuration, some parts of the query may be obfuscated.
      </td>
    </tr>

    <tr>
      <td>
        `Stack trace`
      </td>

      <td>
        Where in the code the statement was called.
      </td>
    </tr>
  </tbody>
</table>

For MySQL, we provide a query analysis, which explains what happened in your query and what you might do to speed it up. Other databases display an explain plan whenever possible.

## Troubleshooting: No slow query data [#troubleshooting]

If you don't see slow query data, it's possible that we don't instrument your particular database for slow SQL.

It's also possible you have configuration issues:

* The slow query feature has been disabled.
* The duration of the threshold is set too high and no slow queries are being reported.
* The query obfuscation setting (usually `record_sql` or similar) may be set to `Off`.

See [configuration options](#settings) for more information.
