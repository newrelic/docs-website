---
title: "Analyze the bottom-of-the-funnel"
tags:
  - Observability maturity
  - Customer experience
  - Digital customer experience
  - Implementation guide
  - Conversions
  - Funnel
  - Bottom of the funnel
metaDescription: "New Relic observability maturity series: Bottom-of-the-funnel analysis shows New Relic users how to improve end-user conversions."
redirects:
  - /docs/new-relic-solutions/observability-maturity/bofta-implementation-guide
  - /docs/new-relic-solutions/observability-maturity/customer-experience/bofta-implementation-guide
  - /docs/new-relic-solutions/observability-maturity/customer-experience/bottom-funnel-analysis-customer-journey-guide
  - /docs/tutorial-customer-experience/bottom-funnel-analysis/
  - /docs/new-relic-solutions/observability-maturity/customer-experience/bottom-funnel-analysis-customer-journey-guide
freshnessValidatedDate: never
---

Even though [improving your customer experience](/docs/tutorial-customer-experience/improve-customer-experience/) is often done comprehensively, focusing your efforts on improving conversion also increases your customer experience quality. This is what's known as bottom-of-the-funnel analysis, and it's about improving conversion by focusing on performance at the end of the user journey instead of the customer experience as a whole. This guide walks you through how to do this properly using New Relic, and by the end of the guide you'll have both analyzed your bottom-of-the-funnel and have the information needed to do so as continually.

<img
  title="User journey funnel"
  alt="User journey funnel"
  src="/images/cx_diagram_botfa-funnel.webp"
/>

Most sites and apps are built with one or more purposes in mind, and where there's a purpose, there's also likely a user journey. For example:

| Purpose                                           | User journey                                         |
| ------------------------------------------------- | ---------------------------------------------------- |
| Brand awareness                                   | Download a whitepaper                                |
| Customer support                                  | Raise a support ticket                               |
| Customer services (registration, forms, payments) | Make a payment                                       |
| Entertainment                                     | Stream a movie                                       |
| Goods                                             | Buy clothes and accessories                          |
| Informational purposes                            | Find a support program in your state                 |
| Lead generation                                   | Join distribution list to get promotions and coupons |
| Outreach                                          | Get information about events in your town            |
| Services (travel, rentals, bookings)              | Book a flight                                        |
| Social media                                      | Share a selfie                                       |

When a user completes a journey, it's referred to as a conversion. All conversions have a value, and the best way to improve the conversion rate is to start at the bottom of the funnel, when the intent to complete the user journey is clear.

You should always address any glaring issues with your app or site no matter where they occur. When it comes to optimizing conversion, it's better to start at the bottom of the funnel for two reasons:

* Higher return on investment by focusing on the stage where users are already more likely to convert. Addressing performance issues here will see an immediate impact on your bottom line.
* If you have issues at the bottom of the funnel, optimizing earlier stages may not have much of an impact on your conversion rate.

Optimizing the top or the middle of the funnel without focusing on the bottom first can leave a large hole in your customer experience. Once you've optimized the bottom of the funnel, you can use the same techniques to optimize earlier stages of the user journey.

## Key performance indicators [#kpis]

Bottom-of-the-funnel analysis measures the following KPIs:

<CollapserGroup>
  <Collapser
    id="conversion-rate"
    title="Bottom-of-the-funnel success/conversion rate"
  >
    The rate of conversion once a user has gone far enough to demonstrate intent to complete an action to actual completion. Examples of this are rates of:

    * Checkout -> order submission
    * Insurance form review -> submission
    * Completing sign up details -> submission

    Increase the rate of conversion by addressing errors and latency at the bottom of the funnel.
  </Collapser>

  <Collapser
    id="latency-risk"
    title="Revenue at risk due to latency"
  >
    Value of a conversion times the number of pages or interactions in the bottom of the funnel that are slower than the industry threshold. Focus on reducing this value by improving page KPIs.
  </Collapser>

  <Collapser
    id="Error risk"
    title="Revenue at risk due to errors"
  >
    Value of a conversion times the number of backend errors in the bottom of the funnel interactions. Tune this value to make it meaningful by filtering out errors that aren't visible to the end user, then focus on reducing it. Create an alert to notify you if it suddenly trends upward.
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### Identify where the bottom of the funnel starts [#id-funnel]

    The bottom of the funnel is focused on the final steps of a user journey where a user has gone far enough to show intent to complete the journey. Here are some examples:

    <CollapserGroup>
      <Collapser
        id="ecommerce-journey"
        title="Ecommerce user journey"
      >
        <img
          title="Ecommerce bottom of the funnel"
          alt="Ecommerce bottom of the funnel"
          src="/images/cx_diagram_botfa-ecommerce.webp"
        />

        The user journey is simplified so you can focus on where the bottom of the funnel begins: at checkout. Most users entering the checkout phase plan to purchase something. Reducing errors and latency from this point onward is more likely to improve conversions than focusing on any other part of the funnel.
      </Collapser>

      <Collapser
        id="insurance-journey"
        title="Car insurance purchase user journey"
      >
        <img
          title="Car insurance bottom of the funnel"
          alt="Car insurance bottom of the funnel"
          src="/images/cx_diagram_botfa-car-insurance.webp"
        />

        In the example above, you have the user's interest in car insurance as they enter information, but you don't know their intent until they see the quote and continue to proceed.
      </Collapser>
    </CollapserGroup>
  </Step>

  <Step>
    ### Distinguish between pages and actions [#distinguish-actions]

    The final steps of a user's journey are likely to be a mix of full page loads and AJAX calls. You'll need to know all pages and AJAX requests for the next step. If you're not sure which requests are running from the page in question, you can run:

    ```
    SELECT count(*) FROM AjaxRequest WHERE pageUrl like '%FILTER%' FACET groupedRequestUrl SINCE 1 DAY AGO
    ```

    <img
      title="Distinguish between pages and actions"
      alt="Distinguish between pages and actions"
      src="/images/cx_diagram_pages-actions.webp"
    />

    Once you've done this, you can create a scripted monitor for your bottom-of-the-funnel.
  </Step>

  <Step>
    ### Create a scripted monitor for the bottom-of-the-funnel [#create-monitor]

    Make sure you have a [scripted monitor](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/) for each path through the bottom of the funnel. The goal is to make sure your bottom-of-the-funnel services are working around the clock.

    For example, you may have a checkout flow that calls a different payment API depending on the customer's payment preferences.  

  </Step>

  <Step>
    ### Import the bottom-of-the-funnel dashboard

    Follow the instructions in the [bottom-of-the-funnel analysis quickstart](https://newrelic.com/instant-observability/customer-experience-bottom-funnel-analysis/8d339aa7-69e3-4efa-abc2-9eba600db91c) to install the dashboard and configure it.
  </Step>

  <Step>
    ### Capture current performance [#capture-performance]

    <img
      title="Bottom-of-the-funnel KPI tracking"
      alt="Bottom-of-the-funnel KPI tracking"
      src="/images/cx_diagram_botfa-kpi-tracking.webp"
    />

    1. Follow the instructions in our [bottom-of-the-funnel analysis README on GitHub](https://github.com/newrelic/oma-resource-center/blob/main/src/content/docs/oma/value-drivers/customer-experience/use-cases/bottom-of-the-funnel-analysis/README.md), which walks you through the bottom-of-the-funnel analysis dashboard and relevant KPIs.
    2. Use the dashboard from the previous step to understand the bottom-of-the-funnel performance.
    3. Create a plan to improve KPIs that don't meet target values, as well as reduce revenue at risk.
  </Step>

  <Step>
    ### Improvement process

    Whether you have a dedicated initiative to improve performance or you've classified it as ongoing maintenance, you need to track your progress at the end of every sprint. For detailed information, see:

    * [Improve uptime](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-web-uptime)
    * [Improve page load performance](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-page-load)
    * [Improve AJAX performance](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls)
  </Step>
</Steps>

<Callout variant="tip">
  A common question is: Should I apply segmentation by breaking out performance into cohorts, such as region and device type? It depends on your needs, but segmentation is a good idea if:

  * Your organization wants to address a target audience from a particular cohort that you can segment by using either custom attributes or data that is already available in New Relic.
  * You're already familiar with bottom-of-the-funnel analysis and there's a significant enough difference in performance among different cohorts to warrant tracking and/or developer focus.
</Callout>

### Best practices going forward [#best-practices]

Maintaining a high quality of your bottom-of-the-funnel is an ongoing process, and it's a good idea to make routine analysis and adjustments to ensure your conversion rate is optimal. Your needs will be unique to your organization, and the procedure you use will reflect that. The procedure may also change as your needs change over time. However, you can keep the following suggestions in mind:

* Revisit performance metrics at the end of each sprint.
* Any time the user journey changes, revisit if the bottom-of-the-funnel steps are the same. Incorporate changes in developer sprints as needed.
* Openly share metrics with the lines of the business you support as well as other internal stakeholders.
* Revisit your customer experience SLOs. Do you need to define more ambitious SLOs for the end of the funnel?
* [Create alerts](/docs/tutorial-create-alerts/create-new-relic-alerts/) for business critical drops in quality foundation KPIs.
