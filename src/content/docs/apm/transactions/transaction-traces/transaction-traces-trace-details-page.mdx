---
title: 'Dive deep into transaction traces'
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: APM's Trace Details page shows additional timing details about the individual segments that make up a transaction trace.
redirects:
  - /docs/site/gray-and-blue-bars-in-transaction-traces
  - /docs/features/transaction-trace-details
  - /docs/traces/transaction-trace-details
  - /docs/site/web-transactions
  - /docs/apm/traces/transaction-traces/transaction-trace-details
  - /docs/apm/traces/transactions/transaction-trace-details
  - /docs/apm/transactions/transaction-traces/transaction-trace-details
freshnessValidatedDate: never
---

A transaction is a grouping of function and method calls that comprise a single work unit. Transactions often map to a URL, but not always. In <InlinePopover type="apm"/>, you can view all of your transactions for a particular entity under the **Transactions** tab. If you click on a specific transaction under the transactions tab, you'll see data for _all users_ across _all time_.

But if you want to learn more about what happened for a _specific_ user during a _specific_ instance, you need to use **Transaction traces**. With the ** Trace details tab**, you can:

* **Identify slow segments**: Segments that took over 25% of the total trace time are marked as "slow spans," directing attention to potential bottlenecks.
* **Visualize your transactions**: See a graphical representation of the transaction's timeline that showcases the duration of different segments like database calls, external calls, or code execution.
* **Efficiently troubleshoot**: Filter your data to focus exclusively on slow spans.

## How it works [#how-it-works]

Selecting a specific transaction in the **Transactions tab** will open the **Transaction details tab**. From there, select a transaction in the **Transaction trace** table to open the **Trace details page**. The **Trace details page**  provides an intricate deep dive into _one user's_ experience with a transaction in a _single instance_. Explore your data using one of three views: timeline, latency, or waterfall.

<img
  title="transaction trace details"
  alt="A screenshot depicting the transaction trace details view."
  src="/images/apm_screenshot-crop_transaction-trace-details.webp"
/>

<figcaption>
  Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace) > Trace details.**</DNT>
</figcaption>

<Tabs>
  <TabsBar>
    <TabsBarItem id="timeline-view">
      Timeline view
    </TabsBarItem>

    <TabsBarItem id="latency-view">
      Latency view
    </TabsBarItem>

    <TabsBarItem id="waterfall-view">
      Waterfall view
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="timeline-view">
      The trace timeline view contains an interactive condensed visual display of the trace. The node color presented in this view matches the waterfall legend for each segment's category.

      Hovering over nodes in this view will display the segment name above the timeline. Clicking on a node within this view will select the same node in the waterfall and open the segment details pane. A horizontal drag on this view will filter the nodes presented in the waterfall to those that occur within the selected window. You may change the filtered window by manually moving the green scrubbers or clicking the **Reset timeline** button.

      <img
        title="Timeline view"
        alt="transaction-traces-timeline-view.png"
        src="/images/distributed-tracing-trace-details-page-timeline-view.webp"
      />
    </TabsPageItem>

    <TabsPageItem id="latency-view">
      ### Latency view [#latency]

      The Latency View section provides insights into the six slowest services or components contributing to the overall trace duration, along with their individual contributions and slow node counts.

      Key things to note:

      * The reported duration of a service is the sum of the exclusive duration for all nodes originating from that service.
      * Clicking a service from a pie chart or table will select the waterfall's first node from that service.
      * When more than 6 services contribute to a trace, a category labeled **Other** may exist, which contains rolled-up data from all services in the trace, excluding the slowest 6. The **Other** category does not respond to clicks in the table or pie chart.

      <img
        title="Latency view"
        alt="transaction-traces-latency-view.png"
        src="/images/distributed-tracing-trace-details-page-latency-view.webp"
      />
    </TabsPageItem>

    <TabsPageItem id="waterfall-view">
      The waterfall displays a node tree of segments arranged into branches by call path. Each segment shows information about the originating service, including service name, segment type, and segment duration.

      ### Navigating the waterfall

      The waterfall view has several controls to make it easier to find segments that you care about:

      * **Expand/Collapse**: Easily show or hide individual segments or entire branches with the arrows.
      * **Focus on slow spans**: If your trace has slow spans, click the checkbox to filter out other segments and focus on potential bottlenecks instantly.
      * **Legend**: Click on any color in the legend to see details about segments belonging to that service category.

      ### Waterfall legend [#waterfall-legend]

      The waterfall is divided into different segments:

      Yellow: More than 25% of the total transaction time was spent in this segment.

      <img
        title="Slow segment background."
        alt="icon-alerts-yellow.png"
        src="/images/apm_icon_yellow-alert.webp"
      />

      Striped: Segments with classes and methods not instrumented with the agent's current configuration.

      <img
        title="uninstrumented segment"
        alt="The icon that represents and uninstrumented segment"
        src="/images/apm_icon_uninstrumented-segment.webp"
      />

      Each segment in the waterfall displays a bar representing its duration relative to the trace duration. The color of this bar indicates whether the segment belongs to application code, database calls, or external calls.

      <img
        title="transaction trace waterfall"
        alt="A screenshot showing the transaction trace waterfall view in the UI."
        src="/images/apm_screenshot-crop_transaction-trace-waterfall.webp"
      />

      ### Waterfall segment properties [#icons]

      These icons can identify each segment:

      <table id="segment-types">
        <thead>
          <tr>
            <th style={{ width: "130px" }}>
              Segment property
            </th>

            <th style={{ width: "110px" }}>
              Indicator
            </th>

            <th>
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Service
            </td>

            <td>
              <img
                title="new-relic-distributed-tracing-service-span-icon.png"
                alt="New Relic distributed tracing service icon."
                src="/images/new-relic-distributed-tracing-service-icon.webp"
              />
            </td>

            <td>
              This icon represents a node that's a service's entry point.
            </td>
          </tr>

          <tr id="in-process">
            <td>
              In-process
            </td>

            <td>
              <img
                title="new-relic-distributed-tracing-in-process-span-icon.png"
                alt="New Relic distributed tracing in-process span icon."
                src="/images/new-relic-distributed-tracing-inprocess-icon.webp"
              />
            </td>

            <td>
              This icon represents an in-process node, which is a node that occurs within a process (as opposed to a cross-process node). Examples include middleware instrumentation and user-created node.
            </td>
          </tr>

          <tr>
            <td>
              Datastore
            </td>

            <td>
              <img
                title="new-relic-distributed-tracing-database-span-icon.png"
                alt="New Relic distributed tracing datastore node icon."
                src="/images/new-relic-distributed-tracing-databases-icon.webp"
              />
            </td>

            <td>
              This icon represents a segment call to a datastore.
            </td>
          </tr>

          <tr>
            <td>
              External
            </td>

            <td>
              <img
                title="new-relic-distributed-tracing-external-span-icon.png"
                alt="New Relic distributed tracing external node icon."
                src="/images/new-relic-distributed-tracing-external-icon.webp"
              />
            </td>

            <td>
              This icon represents a category representing a call to an external service made via HTTP.
            </td>
          </tr>

          <tr>
            <td>
              Browser app
            </td>

            <td>
              <img
                title="distributed-tracing-browser-span-icon.png"
                alt="New Relic distributed tracing browser node icon."
                src="/images/distributed-tracing-browser-span-icon.webp"
              />
            </td>

            <td>
              This icon represents a [browser application segment](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing).
            </td>
          </tr>

          <tr>
            <td>
              Lambda
            </td>

            <td>
              <img
                title="new-relic-distributed-tracing-lambda-icon.png"
                alt="New Relic distributed tracing external node icon."
                src="/images/new-relic-distributed-tracing-databases-icon.webp"
              />
            </td>

            <td>
              This icon represents a node from a [Lambda function](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda).
            </td>
          </tr>
        </tbody>
      </table>

      ### Waterfall segment grouping rules [#rollup]

      New Relic automatically groups fast and repeated method calls within the waterfall to make complex transaction traces easier to understand. Grouping segments helps you focus on potentially problematic areas without getting overwhelmed by too many segments.

      Here's how it works:

      * **Fast calls**: When you see a segment titled `fast calls`, it means New Relic has grouped multiple calls completed quickly (under 7.5 ms each). These are usually not performance concerns, but you can expand the group to view individual segments if needed.
      * **Identical Calls**: Four or more consecutive identical calls often indicate an N+1 problem, so New Relic collapses them to highlight the potential issue. Expanding the collapsed group reveals the first three calls for analysis.
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Dive deeper into your data [#deep-dive]

### Slow spans [#slow-spans]

A node that is marked as a _Slow span_ meets the following criteria:

* The segment is a leaf or exit node, meaning that this node will have no children.
* The segment has an exclusive duration greater than or equal to 25% of the total trace duration.

### Application code in traces [#application-code]

If a segment is listed as **Application code** in the table, it indicates that that section of code was not instrumented. You can use [custom instrumentation](/docs/apm/other-features/metrics/custom-instrumentation) to get more detail on that part of the code. Segments are often listed as **Application code** for [partial traces](#partial).

### Partial traces [#partial]

For performance reasons, APM only captures the first 2,000 segments of a transaction trace (900 for Node.js). If a transaction trace exceeds that number of segments, the agent truncates the transaction trace and displays a message at the top of the <DNT>**Details**</DNT> page:

`This is a partial trace.`

The APM agents have differing rules for when to truncate segments.

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        APM agent
      </th>

      <th>
        Truncate segment rules
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        The segment duration must be greater than the [`TransactionTracer.SegmentThreshold`](/docs/agents/go-agent/configuration/go-agent-configuration#txn-tracer-segment-threshold) value set in your Go segment configuration.
      </td>
    </tr>

    <tr>
      <td>
        Java, .NET, Ruby
      </td>

      <td>
        These agents truncate traces chronologically. For more information, see the transaction tracer documentation for [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-transaction-segments), [.NET](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer), or [Ruby](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer) as applicable.
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        The Node.js agent only captures the first 900 segments of a transaction trace. For more information, see [Node.js transaction tracer configuration](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config).
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Truncates based on segment duration; the slowest 2,000 segments are captured for the trace. For more information, see [PHP transaction tracer configuration](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page/).
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Truncates based on segment duration; the slowest 2,000 segments are captured for the trace. For more information, see [Python transaction tracer configuration](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings).
      </td>
    </tr>
  </tbody>
</table>

### Distributed traces [#distributed-traces]

When a transaction trace is based on distributed trace data, you can view the full distributed trace by clicking on the distributed trace link in the page header.

Things to keep in mind:

* All attributes are grouped into a single `Attributes` section rather than split into the three default attribute types.
* Segment metric names may differ slightly between distributed traces and transaction traces.
* Stack traces are not displayed in segment attributes.
* The trace details page will display slightly different information when you look at a distributed trace instead of a transaction trace.

## Troubleshoot with segment details [#segment-details]

When you select a segment, a pane opens up with three separate segment detail pages. These tabs can help troubleshoot performance issues.

1. Performance tab:
   * **Visualize performance trends**: charts showcase a segment's operation's average duration and throughput, revealing patterns and potential outliers.
   * **Compare and contrast**: See how the performance of this specific segment stacks up against the average, pinpointing areas that might need attention.

2. Attributes tab:
   * **Explore further**: Understand attribute meanings and potential troubleshooting implications. You can learn more using our [data dictionary](/attribute-dictionary/?dataSource=Distributed+Tracing&event=Span).

3. Details tab:
   * **Foundational information**: View critical details like the segment's full name, data source, and relevant metadata. You can learn more in our [distributed tracing docs](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#prettified-span-names).
   * **Tailored insights**: Discover segment-specific information crucial for troubleshooting, such as the database query for datastore segments.

4. Logs tab:
   * **Examine logs**: With [logs in context](/docs/logs/logs-context/configure-logs-context-apm-agents/), you can see log messages related to your transaction trace directly in your app's UI.

Segments display date based on the segment type. For example, a datastore segment's details will include the database query.
