---
title: Understand the trace details UI page
tags:
    - Distributed tracing
    - UI and data
    - Trace details
metaDescription: "Dive deeper into New Relic's distributed tracing feature: learn how to use and understand the trace details UI."
redirects:
    - /docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#trace-details
    - /docs/distributed-tracing-attributes
    - /docs/apm/distributed-tracing/ui-data/distributed-tracing-attributes
    - /docs/apm/distributed-tracing/ui-data/span-event
    - /docs/understand-dependencies/distributed-tracing/ui-data/span-attributes
    - /docs/distributed-tracing/ui-data/span-attributes/
freshnessValidatedDate: 2023-07-19
---

Once you select a trace from the trace list, you'll be directed to the trace details page in the UI. Use trace details to understand the flow of operations that make up a distributed trace, and adjust the view to find the information most important to you.

<img
  title="Trace details page"
  alt="New Relic distributed tracing UI - trace details page"
  src="/images/distributed-tracing-trace-details-page.webp"
/>

<figcaption>
  Select a trace from the list of traces to see details about it.
</figcaption>

Check out ways to display your traces' spans:

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
      The timeline view is a high-density view of all the spans in the trace. This view allows you to quickly scroll through the entire trace and see how latency and errors propagate through the trace and across entity boundaries. You can select spans from this view to see span details in the waterfall view below it.
    </TabsPageItem>

    <TabsPageItem id="latency-view">
      The latency view shows you how much latency is contributed by each entity in the trace, as well as the number of error spans per entity. The latency contributed by an entity is the wall-clock time that it had one or more processes running but was **not** making any external or database calls.
      Here are two examples:

      * If an entity has a process lasting 500ms, but 400ms of that time it's making an external call, it's shown as contributing 100ms of latency to the trace.
      * If an entity has three processes running in parallel for one second, and none of them made external calls, it's shown as contributing one second of latency to the trace.

        <img
          title="Latency view"
          alt="Screenshot showing the distributed tracing latency view"
          src="/images/distributed-tracing-trace-details-page-latency-view.webp"
        />
    </TabsPageItem>

    <TabsPageItem id="waterfall-view">
      The waterfall view in the bottom section of the page displays a detailed flow of all the operations that make up the distributed trace. This allows you to see the exact context from which latency and errors arise.

      ### Waterfall controls [#waterfall-controls]

      The waterfall view has a number of controls to make it easier to find spans that you care about:

      * <DNT>**Expand all/Collapse all**</DNT>: Use this option to toggle between showing every span (including in-process spans) and showing collapsed spans.
      * <DNT>**Standard/Manual**</DNT>: In standard mode, you get a semi-expanded view that includes the first span in each process. In manual mode, you only see what you expand.
        * Both <DNT>**Standard**</DNT> and <DNT>**Manual**</DNT> are overridden by <DNT>**Expand all**</DNT>, which displays all spans.
        * If you're in standard or manual mode, and you click <DNT>**Collapse all**</DNT>, the waterfall is reset to the default for the mode you're using.
      * <DNT>**Focus on**</DNT>: If your span has errors or anomalies, you'll see checkboxes for each of these types. If you check these boxes, your waterfall view will collapse all other types of spans and only show color-coded error or anomalous spans. This is a quick way to find problematic spans.
        <img style={{ width: "70%",align: "left" }} title="Screenshot showing the color coding of focus on" alt="Screenshot showing the color coding of focus on" src="/images/distributed-tracing_screenshot-crop_focus-on-example.webp"/>
      * <DNT>**Maximize**</DNT>: This allows you to see more spans on the screen by expanding the waterfall and hiding the entity map.

        ### Waterfall span properties [#span-icons]

        The UI indicates span properties with these icons:

        <table id="span-types">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                Span property
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
                  alt="New Relic distributed tracing service icon"
                  src="/images/new-relic-distributed-tracing-service-icon.webp"
                />
              </td>

              <td>
                This icon represents a span that's a service's entry point.
              </td>
            </tr>

            <tr id="in-process">
              <td>
                In-process
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-in-process-span-icon.png"
                  alt="New Relic distributed tracing in-process span icon "
                  src="/images/new-relic-distributed-tracing-inprocess-icon.webp"
                />
              </td>

              <td>
                This icon represents an [in-process span](#in-process), which is a span that takes place within a process (as opposed to a cross-process span). Examples: middleware instrumentation, user-created spans.
              </td>
            </tr>

            <tr>
              <td>
                Datastore
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-database-span-icon.png"
                  alt="New Relic distributed tracing datastore span icon"
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                This icon represents a span call to a datastore.
              </td>
            </tr>

            <tr>
              <td>
                External
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-external-span-icon.png"
                  alt="New Relic distributed tracing external span icon"
                  src="/images/new-relic-distributed-tracing-external-icon.webp"
                />
              </td>

              <td>
                This icon represents category representing a call to an external service made via HTTP.
              </td>
            </tr>

            <tr>
              <td>
                Browser app
              </td>

              <td>
                <img
                  title="distributed-tracing-browser-span-icon.png"
                  alt="New Relic distributed tracing browser span icon"
                  src="/images/distributed-tracing-browser-span-icon.webp"
                />
              </td>

              <td>
                This icon represents a [browser application span](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing).
              </td>
            </tr>

            <tr>
              <td>
                Lambda
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lambda-icon.png"
                  alt="New Relic distributed tracing external span icon"
                  src="/images/new-relic-distributed-tracing-lambda-icon.webp"
                />
              </td>

              <td>
                This icon represents a span from a [Lambda function](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda).
              </td>
            </tr>
          </tbody>
        </table>

        Some spans will have additional indicators:

        <table id="span-types-table">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                Span property
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
            <tr id="connecting-lines">
              <td>
                Type of connection
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lines-image.png"
                  alt="New Relic distributed tracing connecting lines image"
                  src="/images/new-relic-distributed-tracing-lines-image.webp"
                />
              </td>

              <td>
                Solid lines indicate a direct parent-child relationship; in other words, one process or function directly calling another. A dotted line indicates a non-direct relationship. For more on relationships between spans, see [Trace structure](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).
              </td>
            </tr>

            <tr>
              <td>
                Errors
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-error-icon.png"
                  alt="New Relic distributed tracing error icon"
                  src="/images/new-relic-distributed-tracing-error-icon.webp"
                />
              </td>

              <td>
                A span with an error. See [How to understand span errors](#error-tips).
              </td>
            </tr>

            <tr>
              <td>
                Anomalous
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-anomalous-icon.png"
                  alt="New Relic distributed tracing datastore span icon"
                  src="/images/new-relic-distributed-tracing-anomalous-icon.webp"
                />
              </td>

              <td>
                This icon represents the detection of an [anomalous span](#anomalous-spans).
              </td>
            </tr>

            <tr>
              <td>
                Orphaned spans
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-fragmented-icon.png"
                  alt="New Relic distributed tracing orphaned span icon"
                  src="/images/new-relic-distributed-tracing-orphan-icon.webp"
                />
              </td>

              <td>
                Some spans may be "orphaned," or separated, from the trace. These spans will appear at the bottom of the trace. For more details, see [Fragmented traces](#fragmented-traces).
              </td>
            </tr>

            <tr>
              <td>
                Multiple app names
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-multiple-app-names-indicator.png"
                  alt="New Relic distributed tracing multiple app names indicator"
                  src="/images/new-relic-distributed-tracing-multiapp-icon.webp"
                />
              </td>

              <td>
                When beside a span name, this represents an entity that has had [multiple app names set](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app). Select this to see all app names it reports to. To search trace data by alternate app names, use the `appName` attribute.
              </td>
            </tr>

            <tr>
              <td>
                Client/server time difference
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-client-server-time-indicator.png"
                  alt="New Relic distributed tracing client-server time difference indicator"
                  src="/images/new-relic-distributed-tracing-client-server-time-indicator.webp"
                />
              </td>

              <td>
                If a span's duration indicator is not completely colored in (like in this example), it means that there is a time discrepancy between the server-side duration and the client-side duration for that activity. For details on this, see [Client/server time difference](#client-server-time).
              </td>
            </tr>
          </tbody>
        </table>
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Span details pane [#span-details]

When you select a span, a pane opens up with span details. These details can be helpful for troubleshooting performance issues. This page has three tabs:

* <DNT>**Performance**</DNT>: You’ll see charts showing the average duration and throughput for that span operation, as well as how the performance of this specific span compares to the average.
* <DNT>**Attributes**</DNT>: You can learn more about attributes from our [data dictionary](/attribute-dictionary/?dataSource=Distributed+Tracing&event=Span).
* <DNT>**Details**</DNT>: You can view details, such as the [span's full name](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#prettified-span-names) and data source.

What a span displays is based on its span type. For example, the datastore span's details will include the database query. For more on the trace structure and how span properties are determined, see [Trace structure](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).

## Span attributes [#span-attributes]

If you'd like to learn more about `Span` data:

* Explore your span data using the [query builder](/docs/chart-builder/use-chart-builder/get-started/introduction-chart-builder).
* To see the default attributes attached to span data, use the [data dictionary](/attribute-dictionary/?event=Span).
* Check out these [example queries](/docs/apm/distributed-tracing/ui-data/example-insights-queries-distributed-trace-data) for help with NRQL queries using these attributes.

## View related logs [#view-your-logs]

If you are using our [logs in context](/docs/logs/logs-context/configure-logs-context-apm-agents/) feature, you can see any logs that are linked to your traces:

1. Go to the trace details page by clicking on a trace.
2. In the upper-left corner of the span details page, click the <DNT>**Logs**</DNT> tab.
3. For details related to an individual log message, click directly on the message.
