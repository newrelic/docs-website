---
title: "Establish your current state" 
metaDescription: "New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application's performance to improve your customer experience."
redirects:
  - /docs/tutorial-customer-experience/establish-current-state
freshnessValidatedDate: 2023-08-16
---

You want to improve your digital experience, but how do you know if you've improved it or not? First, you need to know your baseline performance so you have something to compare your future data to. Once you check to make sure everything you need is reporting correctly to our platform, you can validate your information and use our quality foundation dashboard to measure your customer experience.

<Steps>
  <Step>
    ### Review instrumented pages [#review-instrument]

    Our <InlinePopover type="browser"/> tools are a great way to monitor your app data, and so the best place to start with improving your digital experience is reviewing your browser dashboards. First, you'll need to review your browser apps and pages to make sure that everything you expect to report to New Relic is actually doing so. You can do this by reviewing the <DNT>**Page Views**</DNT> tab in the browser monitoring UI for each app you're ingesting or by running the following NRQL query:

    ```
    SELECT uniques(pageUrl) from PageView LIMIT MAX 
    ```

    <Callout variant="tip">
      New to NRQL? Check out our [introduction to NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/) to learn about how to use our custom query language to help maximize your data!
    </Callout>
  </Step>

  <Step>
    ### Validate browser URL grouping [#validate-grouping]

    After you've made sure that your instrumented pages report their data correctly in the previous step, it's time to ensure browser segments are captured correctly so that you can better parse the data that you're using to improve your customer experience. If you're unfamiliar with segments, they're simply the text between two `/`s in a URL or the `.`s of a domain name.

    When you have a lot of URLs with a lot of segments, you can abridge them so that `website.com/product/widget-name` becomes `website.com/` or `website.com/product/`. While the first version does work, the second version is a more useful way of grouping customer experience data for the product because it allows for more segments in the data.

    <Callout variant="tip">
      Not sure whether you need to tune your configuration? Import the [Segment allow-list investigation dashboard](https://newrelic.com/instant-observability/browser-segment-investigation/eb24e234-90aa-4908-972d-64d6d56b557e) to help.
    </Callout>

    <img
      title="Segment allow-list (aka white-list) investigation"
      alt="Segment allow-list (aka white-list) investigation"
      src="/images/cx_screenshot-full_segment-whitelist-investigation.webp"
    />

    Once you've identified all your segments, use the [Segment allow-lists in browser](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding) to add them, which will enable you to create more easily understood segments.  

  </Step>

  <Step>
    ### Understand how to segment your data [#understand-segment]

    Now that you've validated your browser URL grouping, you can make your customer experience data easier to understand by breaking it out into different segments. Unlike the previous step, segments here don't refer to sections of URLs (as in the [segment allow lists](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding)), but instead refer to groups of data.

    You can use segments to group your data in different ways. For example:

    * Most of the users in the US, Canada, and EMEA experience 2 seconds or better to interaction to next paint, while users in Malaysia and Indonesia experience 4 seconds. Grouping your segments by geographical location would give you this insight.
    * Customers buying car insurance typically see 1 second to largest contentful paint. For home insurance, it's 4 seconds.
    * In one week, there can be 700,000 page views on mobile browser apps compared to 300,000 on desktop.

    Here are popular and useful categories to segment your data:

    <CollapserGroup>
      <Collapser
        id="Region"
        title="Region and Location"
      >
        <DNT>**Basic:**</DNT> Group by country. Browser events automatically contain the country code of requests, so there's nothing you need to do to break it out further.

        <DNT>**Advanced:**</DNT> Make regional grouping match regional SLO groups by creating your own region attribute using [custom attributes](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes/) in browser monitoring.

        Facet by `countryCode`.

        Related attributes:

        * `regionCode`
        * `city`
        * `asnLatitude`
        * `asnLongitude`
      </Collapser>

      <Collapser
        id="Device"
        title="Device"
      >
        Break out performance and engagement device type so you can understand:

        * Typical breakdown of desktop vs mobile browser users
        * Experience of desktop vs mobile browser users

        Facet by `deviceType`.

        Related attributes:

        * `userAgentName`
        * `userAgentOS`
        * `userAgentVersion`
      </Collapser>

      <Collapser
        id="Product"
        title="Product or line of business"
      >
        When a product is a separate line of business or service provided by an organization. Some examples of industries and respective products:

        * An insurance company that sells both car and house insurance.
        * A media company that has multiple streaming services or channels.
        * A travel company that provides car rental as well as hotel bookings.

        <DNT>**Basic:**</DNT> Break out performance by product by:

        * Faceting on `pageUrl`: Use this approach when you group multiple products into one browser app in New Relic.
        * Faceting by `appName`: Use this approach when you instrument each product as a separate web app.
        * Grouping by `appName` and then facet: Use this approach when you hsbr multiple apps in browser supporting one product.

        <DNT>**Advanced:**</DNT> Add product offerings as custom attributes to browser pages using [custom attributes](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes).
      </Collapser>

      <Collapser
        id="Environment"
        title="Environment"
      >
        A naming convention that specifies the environment for browser apps during or after instrumentation . Well named browser apps specify products and/or functions as well as environment. Examples:

        * `account-management.prod`
        * `hotels-book.prod`
        * `car-insurance.uat`

        Use app naming conventions to note that the environment supports filtering data in both the UI and in dashboards. For more information, see our docs for [how to rename browser apps](/docs/browser/new-relic-browser/configuration/rename-browser-apps/).
      </Collapser>

      <Collapser
        id="Team"
        title="Team"
      >
        In some organizations, a single team supports multiple products, while in others, a product is big enough to be supported by multiple teams. Report on team performance against customer experience or engagement by either adding the team name to the browser app name in New Relic (for example, `account-management.prod.unicorn-squad`) or by using [custom attributes](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes).
      </Collapser>
    </CollapserGroup>
  </Step>

  <Step>
    ### Import the quality foundation dashboard [#import-dashboard]

    <img
      title="Customer experience quality foundation dashboard"
      alt="Customer experience quality foundation dashboard"
      src="/images/cx_screenshot-full_qf-dashboard.webp"
    />

    The next step is to create a dashboard you can use to measure and improve your customer experience against your baseline performance. To do this:

    1. Go to the [Quality foundation quickstart](https://newrelic.com/instant-observability/customer-experience-quality-foundation/7a5739bf-30ee-4be9-9705-14871cafd7f4).
    2. Follow the instructions in the quickstart to install the dashboard.
    3. Use the [provided guide](https://github.com/newrelic/newrelic-quickstarts/tree/main/quickstarts/oma-qf#readme) to customize it to fit how you plan to segment the data.

    <Callout variant="tip">
      Make sure to align the dashboard to lines of business or customer-facing offerings rather than to teams to maximize the impact of your optimization!
    </Callout>
  </Step>

  <Step>
    ### Capture current performance for each dashboard page [#capture-performance]

    <img
      title="Capture current performance for each dashboard page"
      alt="Capture current performance for each dashboard page"
      src="/images/cx_diagram_qf_kpi_progress.webp"
    />

    The last step in establishing your current state is to capture your current performance from the dashboard pages. To do this:

    1. Follow the instructions on our [Quality foundation GitHub README](https://github.com/newrelic/oma-resource-center/tree/main/src/content/docs/oma/value-drivers/customer-experience/use-cases/quality-foundation), which walk you through the segment allow list and quality foundation dashboard.
    2. Use the dashboard from the previous step to understand the overall performance for each line of business. If relevant, apply filters to see performance across region or device. If values drop below targets and it matters, add it to the sheet as a candidate for improvement. Examples of tracking-value:
       * Not worth tracking: A company that sells insurance in the US only notices poor performance in Malaysia.
       * Worth tracking: A company that sells insurance in the US only notices poor performance with respect to mobile users in the US.
  </Step>
</Steps>

<UserJourneyControls nextStep={{path: "/docs/tutorial-customer-experience/improve-customer-experience/", title: "Next step", body: "Learn how to use the data from your current state to make improvements"}}/>
