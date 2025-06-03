---
title: "Improve your customer experience" 
metaDescription: "New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application's performance to improve your customer experience."
redirects:
  - /docs/tutorial-customer-experience/improve-customer-experience/
freshnessValidatedDate: 2023-08-16
---

After you've [established the current state of your digital experience's performance](/docs/tutorial-customer-experience/establish-current-state/), it's time to take the information you've gathered and use it to start improving your customer experience. Since your needs can vary, only you can know what areas you may need to improve. The following steps are a suggested order to use for improving your customers' experience, and you can focus your attention on what's most relevant to you and skip what isn't. As this is a continuing process, we recommend you bookmark this page so that you can refer to it in the future as your KPIs change.

After you [establish your current state](/docs/tutorial-customer-experience/establish-current-state/), you know what your user experience looks like across your system. From there, you need to determine which of the following areas need to improve:

1. <DNT>**Start with business priorities:**</DNT> If you have clear business directives, you should focus on what matters most to your organization. For example, if your company has recently launched a new initiative around a line of business but the KPIs associated with the UI are below target, this is a great place to focus your efforts.
2. <DNT>**Align your data to your KPIs:**</DNT> Your key performance indicators provide insight on the various aspects of your system that act as pain points for your customers. Take that data and compare it to your KPIs so you can see where you need to improve.
3. <DNT>**Filter each segment:**</DNT> Take each of your segments that you created in the previous doc and group them to see if you need to focus more on specific regions, devices, or any other helpful grouping.

### Improve targeted KPIs [#improve-kpi]

To track your progress, create a new dashboard (or add a new page to the existing dashboard) and name it `Quality Foundation KPI Improvement`. For more information, see [Improve web uptime](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-web-uptime).

### Improve page load performance [#improve-performance]

Once you've created the quality foundation dashboard, it's time to narrow your focus to the specific pages that aren't meeting target KPI values.

For each page load KPI result that's reporting as poor on the quality foundation dashboard, remove the `COMPARE WITH` clause and add `FACET pageUrl/targetGroupedUrl LIMIT MAX` to find which pages are the poor performers. Use `targetGroupedUrl` when there are many results, such as when the customer ID is part of the URL. Otherwise, use `pageUrl`.

Original dashboard query:

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' SINCE 1 week AGO COMPARE WITH 1 week AGO 
```

New query to identify problem pages:

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' FACET targetGroupedUrl LIMIT MAX
```

Once you've identified pages to improve, see the guidance in [Improve page load performance](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-page-load).

### Improve AJAX response times [#improve-ajax-response]

After locating and fixing any insufficient page load times, AJAX response times are a great place to move on to next. To find slow AJAX response times:

1. Go to the AJAX duration widget on the dashboard.
2. Select <DNT>**View query**</DNT>, then open in query builder.
3. Add `facet requestUrl LIMIT MAX` to the end of the query.
4. Run the query.
5. View the results as a table and save to your KPI improvement dashboard as `LOB - AjaxResponseTimes`.
6. Focus improving requests with a `timeToSettle` > 2.5s.

For more information on improving your AJAX requests, check out our [AJAX troubleshooting tips](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls/).

### Improve the AJAX error rate [#improve-ajax-error]

After identifying and improving your AJAX response times, you should move on to improving the error rate as well since you're already dealing with AJAX. To find the failing requests:

1. Go to <InlinePopover type="dashboards"/> > Query builder.
2. Enter and run the following query:
   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND <Ajax Request filter>
   SINCE 1 week AGO facet pageUrl, appName
   ```
3. View the results as a table and save to your KPI improvement dashboard as `LOB - Pages with AjaxErrors`.
4. Run the query again for the most problematic pages to find the requests that are failing:
   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND pageUrl=PROBLEMATIC_PAGE AND appName = YOUR_APP_NAME <Ajax Request filter> 
   SINCE 1 week AGO facet requestUrl
   ```
   Once you've successfully identified any insufficient AJAX error rates, see our [AJAX troubleshooting tips](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls) for more information on how you can improve your response times.

### Improve JavaScript errors [#improve-java]

To wrap up your improvement process, you should focus on fixing excessive JavaScript errors. To find the most common failures:

1. Go to <InlinePopover type="dashboards"/> > Query builder
2. Enter and run the following query:
   ```
   FROM JavaScriptError 
   SELECT count(errorClass) 
   SINCE 1 week AGO WHERE <PageView filter>  
   FACET transactionName, errorClass, errorMessage, domain
   ```
3. View the results as a table and save to your KPI improvement dashboard as `LOB - Javascript Errors`.
4. Use this information to figure out which errors need to be addressed. See our [JavaScript errors page: Detect and analyze errors](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors/) doc for more information.
5. Remove third party errors that don't add value.

<Callout variant="tip">
  You may be using a third party JavaScript that's noisy but works as expected. You can take a couple of approaches:

  * Remove the domain name from the JavaScript error/Pageview ratio widget and add it as its own widget so you can see unexpected changes. You can alert on this using [Anomaly NRQL](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-baseline-alert-conditions/) alerts.
  * Drop the JavaScript error using [drop filters](/docs/logs/log-management/ui-data/drop-data-drop-filter-rules). Only use this option if the volume of errors is impacting your data ingest in a significant way. Be as specific as you can in the drop filter.
</Callout>

## Moving forward [#movingforward]

After you've followed the procedure above, it's a good idea to revisit your KPIs regularly to ensure that your customer experience is always of adequate quality. Each organization will have different needs, and so the procedures you use will be unique to your organzation. However, you can keep the following suggestions in mind:

* Revisit performance metrics at the end of each sprint.
* Incorporate performance improvements into developer sprints.
* Openly share metrics with the lines of the business you support as well as other internal stakeholders.
* Define customer experience SLOs.
* [Create alerts](/docs/tutorial-create-alerts/create-new-relic-alerts/) for business critical drops in quality foundation KPIs.

<UserJourneyControls
  nextStep={{path: "/docs/tutorial-customer-experience/bottom-funnel-analysis/", title: "Next step", body: "Learn how to analyze the end of a customer experience to improve your conversions"}}
  previousStep={{path: "/docs/tutorial-customer-experience/establish-current-state/", title: "Previous step", body: "Learn how to establish your current state to create your baselines"}}
/>
