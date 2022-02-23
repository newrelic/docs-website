const deserializeHTML = require('../deserialize-html');

const translatedHtml = `

<div data-type="frontmatter" data-value="eyJ0aXRsZSI6IkFQTSBTdW1tYXJ5IHBhZ2U6IFZpZXcgdHJhbnNhY3Rpb24sIEFwZGV4LCB1c2FnZSBkYXRhIiwidGFncyI6WyJBUE0iLCJBUE0gVUkgcGFnZXMiLCJNb25pdG9yaW5nIl0sInRyYW5zbGF0ZSI6WyJqcCJdLCJtZXRhRGVzY3JpcHRpb24iOiJUaGUgQVBNIFN1bW1hcnkgcGFnZSBwcm92aWRlcyBjaGFydHMgYW5kIHRhYmxlcyB0aGF0IHlvdSBjYW4gZHJpbGwgZG93biBpbnRvIGRldGFpbHMgYWJvdXQgeW91ciBzZWxlY3RlZCBhcHDigJlzIHBlcmZvcm1hbmNlLiIsInJlZGlyZWN0cyI6WyIvZG9jcy9hcHBsaWNhdGlvbnMtZGFzaGJvYXJkcy9hcHBsaWNhdGlvbnMtb3ZlcnZpZXciLCIvZG9jcy9zaXRlL2FwcGxpY2F0aW9ucy1vdmVydmlldyIsIi9kb2NzL2FwcGxpY2F0aW9ucy1tZW51L2FwcGxpY2F0aW9ucy1vdmVydmlldyIsIi9kb2NzL2FwbS9hcHBsaWNhdGlvbnMtbWVudS9tb25pdG9yaW5nL2FwcGxpY2F0aW9ucy1vdmVydmlldy1kYXNoYm9hcmQiLCIvZG9jcy9hcG0vYXBwbGljYXRpb25zLW1lbnUvbW9uaXRvcmluZy9hcG0tb3ZlcnZpZXctZGFzaGJvYXJkIiwiL2RvY3MvYXBtL2FwcGxpY2F0aW9ucy1tZW51L21vbml0b3JpbmcvYXBtLW92ZXJ2aWV3LXBhZ2UiLCIvZG9jcy9hcG0vYXBwbGljYXRpb25zLW1lbnUvbW9uaXRvcmluZy9hcG0tb3ZlcnZpZXctcGFnZS12aWV3LXRyYW5zYWN0aW9uLWFwZGV4LXVzYWdlLWRhdGEiLCIvZG9jcy9hcG0vYXBtLXVpLXBhZ2VzL21vbml0b3JpbmcvYXBtLW92ZXJ2aWV3LXBhZ2Utdmlldy10cmFuc2FjdGlvbi1hcGRleC11c2FnZS1kYXRhIl19">
  <div data-key="title">APM Summary page: View transaction, Apdex, usage data</div>
</div>
<p>The APM <span data-type="component" data-component="DoNotTranslate" data-tag="span" data-props="eyJ0eXBlIjoibWR4U3BhbkVsZW1lbnQiLCJuYW1lIjoiRG9Ob3RUcmFuc2xhdGUiLCJhdHRyaWJ1dGVzIjpbXSwiY2hpbGRyZW4iOlt7InR5cGUiOiJzdHJvbmciLCJjaGlsZHJlbiI6W3sidHlwZSI6InRleHQiLCJ2YWx1ZSI6IlN1bW1hcnkiLCJwb3NpdGlvbiI6eyJzdGFydCI6eyJsaW5lIjoyMSwiY29sdW1uIjoyNywib2Zmc2V0Ijo4NDR9LCJlbmQiOnsibGluZSI6MjEsImNvbHVtbiI6MzQsIm9mZnNldCI6ODUxfSwiaW5kZW50IjpbXX19XSwicG9zaXRpb24iOnsic3RhcnQiOnsibGluZSI6MjEsImNvbHVtbiI6MjUsIm9mZnNldCI6ODQyfSwiZW5kIjp7ImxpbmUiOjIxLCJjb2x1bW4iOjM2LCJvZmZzZXQiOjg1M30sImluZGVudCI6W119fV0sInBvc2l0aW9uIjp7InN0YXJ0Ijp7ImxpbmUiOjIxLCJjb2x1bW4iOjksIm9mZnNldCI6ODI2fSwiZW5kIjp7ImxpbmUiOjIxLCJjb2x1bW4iOjUzLCJvZmZzZXQiOjg3MH0sImluZGVudCI6W119fQ=="></span>page provides general information about the selected app, including <a href="/docs/apm/transactions/intro-transactions/transactions-new-relic-apm">web transactions</a> and <a href="/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions">non-web transactions</a>, <a href="/docs/site/apdex-measuring-user-satisfaction">Apdex</a> score, CPU usage, throughput (requests per minute or <strong>rpm</strong>), transaction times, error rate, application activity, and <a href="/docs/accounts-partnerships/accounts/account-billing-usage/compute-unit-pricing-host-pricing#understand">hosts</a>.</p>
<div data-type="component" data-component="Callout" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJ2YXJpYW50IiwidmFsdWUiOiJ0aXAifV0=">
  <div data-type="prop" data-prop="children">
    <p>
      To get a high-level overview of all your applications and services, use the
      <a href="/docs/new-relic-one/use-new-relic-one/ui-data/new-relic-one-entity-explorer">New Relic
explorer</a>.
    </p>
  </div>
</div>
<h2 id="overview">View your app's summary page</h2>
<p>To reach the <strong>Summary</strong> page, go to <strong><a href="https://one.newrelic.com">one.newrelic.com</a> > Explorer > Services - APM > (select an app)</strong>. Use the <a href="/docs/new-relic-one/use-new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts/">Explorer</a> to access all your <a href="/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/">entities</a>, that is, anything we can identify that reports data, from applications and hosts to custom groupings of any elements.</p>
<p>Alternatively, you can go to <strong><a href="https://one.newrelic.com">one.newrelic.com</a> > APM > (select an app)</strong>.</p>
<p>For more information, see the documentation about <a href="/docs/new-relic-one/use-new-relic-one/get-started/new-relic-one-core-ui-components">navigating core UI components</a> in New Relic One.</p>
<h2 id="charts">View app performance</h2>
<p>Use the <strong>Summary</strong> page for a quick summary of your website's performance.</p>
<div data-type="component" data-component="CollapserGroup">
  <div data-type="prop" data-prop="children">
    <div data-type="component" data-component="Collapser" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJpZCIsInZhbHVlIjoib3ZlcnZpZXdfY2hhcnRzIn0seyJ0eXBlIjoibWR4QXR0cmlidXRlIiwibmFtZSI6InRpdGxlIiwidmFsdWUiOiJPdmVydmlldyBjaGFydHMifV0=">
      <div data-type="prop" data-prop="title">Overview charts</div>
      <div data-type="prop" data-prop="children">
        <p>Some charts include links to APM pages where you can drill down into additional details.</p>
        <table data-type="component">
          <thead data-type="component">
            <tr data-type="component">
              <th data-type="component" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJzdHlsZSIsInZhbHVlIjp7InR5cGUiOiJtZHhWYWx1ZUV4cHJlc3Npb24iLCJ2YWx1ZSI6Insgd2lkdGg6IFwiMjAwcHhcIiB9IiwicG9zaXRpb24iOnsic3RhcnQiOnsibGluZSI6NTEsImNvbHVtbiI6MjEsIm9mZnNldCI6Mjg0MX0sImVuZCI6eyJsaW5lIjo1MSwiY29sdW1uIjo0MSwib2Zmc2V0IjoyODYxfX19fV0=">
                <p><strong>APM Summary chart</strong></p>
              </th>
              <th data-type="component">
                <p><strong>Comments</strong></p>
              </th>
            </tr>
          </thead>
          <tbody data-type="component">
            <tr data-type="component">
              <td data-type="component">
                <p>Transactions response time</p>
              </td>
              <td data-type="component">
                <p>This stacked chart represents the response time of <a href="/docs/apm/transactions/intro-transactions/transactions-new-relic-apm">web transactions</a> or <a href="/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions">non-web transactions</a> in your app. Segments in the chart vary depending on which agent you are using. Some charts may have an independent line for <strong>response time</strong> that represents the relationship between <a href="/docs/using-new-relic/user-interface-functions/view-your-data/response-time#response-time-total-time">response time and total time</a>.</p>
                <p>Also, for your external or background services, you may see data labeled as <a href="/docs/using-new-relic/welcome-new-relic/get-started/glossary#web-external"><code>Web external</code></a>. For more information about these out-of-process services, use the <a href="/docs/apm/applications-menu/monitoring/external-services-page-view-web-cloud-network-data"><strong>Externals</strong> page</a>.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>Apdex score</p>
              </td>
              <td data-type="component">
                <p>
                  This chart measures the performance of your app based on its <a href="/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction">Apdex T value</a> during the selected time window. To view additional details, hover over the question <span data-type="component" data-component="Icon" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJuYW1lIiwidmFsdWUiOiJmZS1oZWxwLWNpcmNsZSJ9XQ=="> </span>
                  icon or the chart's <strong>End user</strong> and <strong>App server</strong> lines. The <strong>End user</strong> line charts the Apdex for your <a href="/docs/browser">browser</a> apps, and the <strong>App server</strong> line charts the Apdex for your APM apps.
                </p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>Throughput</p>
              </td>
              <td data-type="component">
                <p>This chart illustrates the requests per minute for either <a href="/docs/apm/transactions/intro-transactions/transactions-new-relic-apm">web transactions</a> or <a href="/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions">non-web transactions</a>. To change the type of transaction, select the <strong>Transaction response time</strong> chart's dropdown arrow, then select <strong>Web</strong> or <strong>Non-web</strong>.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>Error rate</p>
              </td>
              <td data-type="component">
                <p>This chart shows the number of errors that have occurred in the current time window. The tooltip that appears when you hover over the <strong>Error rate</strong> chart shows the combined throughput for both web and non-web transactions. To understand how error rate is calculated, see <a href="/docs/apis/rest-api-v2/application-examples-v2/application-error-rate-example-v2">Application error rate example</a>.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div data-type="component" data-component="Collapser" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJpZCIsInZhbHVlIjoidmVydGljYWxfYmFycyJ9LHsidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJ0aXRsZSIsInZhbHVlIjoiRXZlbnQgbWFya2VycyJ9XQ==">
      <div data-type="prop" data-prop="title">Event markers</div>
      <div data-type="prop" data-prop="children">
        <p>Markers on the main <strong>Summary</strong> chart indicate events and changes to the app:</p>
        <ul>
          <li>
            <p>Black vertical bar: Apdex settings have changed.</p>
          </li>
          <li>
            <p>Blue vertical bar: A <a href="/docs/apm/applications-menu/events/deployments-page">deployment</a> marker has been created or another event has occurred, such as a settings change for the app.</p>
          </li>
          <li>
            <p>Yellow or red area: This indicates alert thresholds have been violated.</p>
            <p>To view additional information, mouse over the marker.</p>
          </li>
        </ul>
      </div>
    </div>
    <div data-type="component" data-component="Collapser" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJpZCIsInZhbHVlIjoib3Zlcl9kcmlsbGRvd24ifSx7InR5cGUiOiJtZHhBdHRyaWJ1dGUiLCJuYW1lIjoidGl0bGUiLCJ2YWx1ZSI6IkRyaWxsLWRvd24gZGV0YWlscyJ9XQ==">
      <div data-type="prop" data-prop="title">Drill-down details</div>
      <div data-type="prop" data-prop="children">
        <p>Use any of New Relic's <a href="/docs/data-analysis/user-interface-functions/standard-page-functions">standard page functions</a> to drill down into detailed information. Here is a summary of additional options with the APM <strong>Summary</strong> page.</p>
        <table data-type="component">
          <thead data-type="component">
            <tr data-type="component">
              <th data-type="component" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJ3aWR0aCIsInZhbHVlIjp7InR5cGUiOiJtZHhWYWx1ZUV4cHJlc3Npb24iLCJ2YWx1ZSI6IjI1MCIsInBvc2l0aW9uIjp7InN0YXJ0Ijp7ImxpbmUiOjEzMiwiY29sdW1uIjoyMSwib2Zmc2V0Ijo2NzA0fSwiZW5kIjp7ImxpbmUiOjEzMiwiY29sdW1uIjoyNiwib2Zmc2V0Ijo2NzA5fX19fV0=">
                <p><strong>If you want to...</strong></p>
              </th>
              <th data-type="component">
                <p><strong>Do this...</strong></p>
              </th>
            </tr>
          </thead>
          <tbody data-type="component">
            <tr data-type="component">
              <td data-type="component">
                <p>Change how data appears on the main chart</p>
              </td>
              <td data-type="component">
                <p>Select the chart title's drop-down arrow, and then <a href="/docs/data-analysis/user-interface-functions/selecting-chart-views">select your choice of view options</a>, including <a href="/docs/applications-menu/histograms-viewing-data-distribution">histograms</a> or <a href="/docs/applications-menu/percentiles-comparing-ranked-data">percentiles</a> if available.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>View threshold levels for your app's <a href="/docs/site/viewing-your-apdex-score">Apdex</a> score</p>
              </td>
              <td data-type="component">
                <p>Mouse over the Apdex score <strong>?</strong> icon. For <a href="/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions">non-web transactions</a>, the Apdex chart is blank because Apdex is not applicable to this class of apps.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>View trends in transaction time, Apdex, and throughput</p>
              </td>
              <td data-type="component">
                <p>Select the <strong>Compare with yesterday and last week</strong> checkbox.</p>
                <p>The checkbox is only available when viewing the <strong>Web transaction response time</strong> chart with the time picker window <strong>Ending now</strong>. The checkbox is unavailable if you are viewing histograms, percentiles, or custom dates.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>View app performance since the last deployment</p>
              </td>
              <td data-type="component">
                <p>From the <a href="/docs/site/timepicker-setting-time-periods-to-view-data">time picker</a>, select <strong>Performance since the last deployment</strong>. For detailed information about all deployments, select the <a href="/docs/apm/applications-menu/events/deployments-page">Deployments</a> page.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>View the <a href="/docs/apm/applications-menu/monitoring/transactions-page">Transactions</a> page</p>
              </td>
              <td data-type="component">
                <p>Select the <strong>Transactions</strong> table's heading on the APM <strong>Summary</strong> page. Or, to view details about a specific transaction (including operations, <a href="/docs/traces/transaction-traces">transaction traces</a>, and <a href="/docs/transactions-menu/key-transactions">key transactions</a>), select its name.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>View the <a href="/docs/apm/applications-menu/monitoring/databases-slow-queries-page">Databases</a> or <a href="/docs/apm/applications-menu/monitoring/external-services-page">External services</a> pages</p>
              </td>
              <td data-type="component">
                <p>Click on a related time band in the Web transactions response time chart.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>View the <a href="/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/">Errors</a> page</p>
              </td>
              <td data-type="component">
                <p>Select the <strong>Error rate</strong> chart's title on the APM <strong>Summary</strong> page. You can also view the Errors page from <strong><a href="https://one.newrelic.com">one.newrelic.com</a> > (select an app) > Events > Errors</strong>. From here you can also view available error <a href="/docs/logs/logs-context/configure-logs-context-apm-agents/">logs in context</a> for your app.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div data-type="component" data-component="Collapser" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJpZCIsInZhbHVlIjoiYnJvd3Nlcl9kZXRhaWxzIn0seyJ0eXBlIjoibWR4QXR0cmlidXRlIiwibmFtZSI6InRpdGxlIiwidmFsdWUiOiJCcm93c2VyIG1vbml0b3JpbmcgZGF0YSJ9XQ==">
      <div data-type="prop" data-prop="title">Browser monitoring data</div>
      <div data-type="prop" data-prop="children">
        <p>If you <a href="/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/">install the browser agent via an APM agent</a>, you can automatically link the browser-monitored app to the APM-monitored app.</p>
        <p>Once the browser agent is set up, the APM <strong>Summary</strong> page provides summary information and direct links to detailed information on the app's corresponding <a href="/docs/new-relic-browser/browser-overview">browser <strong>summary</strong> page</a>.</p>
        <ul>
          <li>To view chart details with browser <a href="/docs/new-relic-browser/page-load-timing-process">page load time</a>, select the main chart's <strong>Browser</strong> link.</li>
          <li>To view the Apdex score for browsers, select the Apdex chart's <strong>Browser</strong> link.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<h2 id="infra-server">Link app performance to resources</h2>
<p>The APM <strong>Summary</strong> page shows a table with averages about your app's instances on their <a href="/docs/accounts-partnerships/accounts/account-billing-usage/compute-unit-pricing-host-pricing#understand">hosts</a>, including:</p>
<ul>
  <li>Apdex</li>
  <li>Response time</li>
  <li>Throughput</li>
  <li>Error rate</li>
  <li>CPU usage</li>
  <li>Memory</li>
</ul>
<div data-type="component" data-component="Callout" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJ2YXJpYW50IiwidmFsdWUiOiJ0aXAifV0=">
  <div data-type="prop" data-prop="children">
    <p>
      CPU usage percentage is calculated as though the application is running on one
      CPU core. For more information about this calculation, see <a href="/docs/apm/new-relic-apm/troubleshooting/cpu-usage-over-100#h2-apps">CPU usage is over
100%</a>.
    </p>
  </div>
</div>
<div data-type="component" data-component="CollapserGroup">
  <div data-type="prop" data-prop="children">
    <div data-type="component" data-component="Collapser" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJpZCIsInZhbHVlIjoiaG9zdC1wZXJmb3JtYW5jZSJ9LHsidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJ0aXRsZSIsInZhbHVlIjoiRXhhbWluZSBhcHAgcGVyZm9ybWFuY2Ugd2l0aGluIHN5c3RlbSBjb250ZXh0In1d">
      <div data-type="prop" data-prop="title">Examine app performance within system context</div>
      <div data-type="prop" data-prop="children">
        <p>Use any of these options to examine your app's performance within the context of your system's architecture and resources, such as individual hosts:</p>
        <ul>
          <li>Select your choice from the table at the bottom of the APM <strong>Summary</strong> page for <a href="#hosts_details">infrastructure</a>.</li>
          <li>Toggle between a table view or breakout metric details.
            <img src="./images/crop-apm-overview-servers.png" alt="APM Overview: table-hosts toggle" title="APM Overview: table-hosts toggle">
          </li>
          <li>If applicable, select your choice from the drop-down at the top of the APM <strong>Summary</strong> page for servers or JVMs.</li>
        </ul>
      </div>
    </div>
    <div data-type="component" data-component="Collapser" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJpZCIsInZhbHVlIjoiaG9zdF9kZXRhaWxzIn0seyJ0eXBlIjoibWR4QXR0cmlidXRlIiwibmFtZSI6InRpdGxlIiwidmFsdWUiOiJFeGFtaW5lIGRldGFpbHMgd2l0aGluIGluZnJhc3RydWN0dXJlIn1d">
      <div data-type="prop" data-prop="title">Examine details within infrastructure</div>
      <div data-type="prop" data-prop="children">
        <p>To help you understand the full context of your app's performance within your environment, APM includes options to view performance from inside the application, as well as from outside the application with the <a href="/docs/infrastructure/new-relic-infrastructure/getting-started/welcome-new-relic-infrastructure">infrastructure</a> agent.</p>
        <p>To view detailed information from your resources' point of view, click any host link. The link takes you directly to the infrastructure <a href="/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-compute-page-measure-resource-usage"><strong>Compute</strong> page</a>.</p>
        <p>
          <img src="./images/crop-apm-overview-hosts112116.png" alt="APM: Infrastructure link" title="APM Overview: Hosts link">
        </p>
        <p>When you click, the <strong>Compute</strong> data may not immediately appear. If that happens, follow the prompt to validate your account and complete the conversion process for the infrastructure agent. If you need additional help, get support at <a href="https://support.newrelic.com"><strong>support.newrelic.com</strong></a>.</p>
      </div>
    </div>
    <div data-type="component" data-component="Collapser" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJpZCIsInZhbHVlIjoidHJvdWJsZXNob290LWhvc3QtbGluayJ9LHsidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJ0aXRsZSIsInZhbHVlIjoiVHJvdWJsZXNob290IGhvc3QgbGluayJ9XQ==">
      <div data-type="prop" data-prop="title">Troubleshoot host link</div>
      <div data-type="prop" data-prop="children">
        <p>To troubleshoot the host link from the <strong>APM Summary</strong> page, use these tips:</p>
        <table data-type="component">
          <thead data-type="component">
            <tr data-type="component">
              <th data-type="component" data-props="W3sidHlwZSI6Im1keEF0dHJpYnV0ZSIsIm5hbWUiOiJzdHlsZSIsInZhbHVlIjp7InR5cGUiOiJtZHhWYWx1ZUV4cHJlc3Npb24iLCJ2YWx1ZSI6Insgd2lkdGg6IFwiMjUwcHhcIiB9IiwicG9zaXRpb24iOnsic3RhcnQiOnsibGluZSI6Mjg2LCJjb2x1bW4iOjIxLCJvZmZzZXQiOjEzNjA1fSwiZW5kIjp7ImxpbmUiOjI4NiwiY29sdW1uIjo0MSwib2Zmc2V0IjoxMzYyNX19fX1d">
                <p>Host link from APM Summary</p>
              </th>
              <th data-type="component">
                <p>Troubleshooting tips</p>
              </th>
            </tr>
          </thead>
          <tbody data-type="component">
            <tr data-type="component">
              <td data-type="component">
                <p>Your infrastructure agent is not installed on the host.</p>
              </td>
              <td data-type="component">
                <p>Follow standard procedures to <a href="/docs/infrastructure/new-relic-infrastructure/installation">install our infrastructure agent</a>.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>The application is operating within a container, and your infrastructure agent is installed on the container’s host.</p>
              </td>
              <td data-type="component">
                <p>Set the hostname for the container to be the hostname of the underlying server.</p>
                <p>Docker containers: Run your Docker container with the argument:</p>
                <pre data-type="component" data-component="CodeBlock" data-props="eyJsYW5nIjpudWxsLCJtZXRhIjpudWxsLCJ2YWx1ZSI6Ii0tdXRzPVwiaG9zdFwiIiwicG9zaXRpb24iOnsic3RhcnQiOnsibGluZSI6MzE3LCJjb2x1bW4iOjEsIm9mZnNldCI6MTQ0NDd9LCJlbmQiOnsibGluZSI6MzIyLCJjb2x1bW4iOjExLCJvZmZzZXQiOjE0NzAxfSwiaW5kZW50IjpbMSwxLDEsMSwxXX19"><code></code></pre>
                <p>This will cause the container to share the UTS Linux Namespace with the underlying host. However, by using this set, a privileged container could change the host's hostname.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>The application is running on a Windows container, and your infrastructure agent is installed on the Windows host.</p>
              </td>
              <td data-type="component">
                <p>To get a direct link to infrastructure metric data for your application, <a href="/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#enable-process-metrics">enable process metrics</a> in the infrastructure agent's configuration.</p>
              </td>
            </tr>
            <tr data-type="component">
              <td data-type="component">
                <p>Your infrastructure agent is installed, but it only reports the short hostname, not the long hostname.</p>
              </td>
              <td data-type="component">
                <p>Configure your server's hostname settings so that the infrastructure agent and the APM agent return the exact same name string. If possible, do so by editing your server's fully qualified domain name (FQDN) settings.</p>
                <p>The APM and infrastructure agents both read their hostname from the operating system's FQDN settings, so setting the hostname there ensures both agents share a single hostname. For more information, see the <a href="/docs/agents/java-agent/troubleshooting/setting-hostname-reported-java-agent">Java agent troubleshooting example</a>.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


`;

const deserializedMdx = async (translatedHtml) => {
  const mdx = await deserializeHTML(translatedHtml);
  return mdx;
};

deserializedMdx(translatedHtml).then((res) => console.log(res));
