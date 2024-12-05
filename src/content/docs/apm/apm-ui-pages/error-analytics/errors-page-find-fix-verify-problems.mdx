---
title: 'Legacy errors page'
tags:
  - APM
  - APM UI pages
  - Error analytics
metaDescription: Use APM's Errors page for detailed investigations of reported errors.
freshnessValidatedDate: never
---

With the <DNT>**Errors**</DNT> UI, you can see the line of code that's causing a bad experience for your users, and get enough data to reproduce the issue so you can fix it. When you do, you'll be able to confirm your fix is working in production.

Use the <DNT>**Errors**</DNT> tab to:

* Group and filter events to triage important errors.
* Get alert notifications about errors.
* Review stack traces, [logs](#logs-context), and other details.
* Share the error information with charts and dashboards.
* Report new errors using instrumentation, prevent certain errors from being reported, and filter out noisy errors using [<DNT>**expected errors**</DNT>](#expected-errors).

## Error profiles: Troubleshoot trends

When DevOps experts need to track down what causes errors in your app, it may not be easy to identify the cause. APM's error profiles automatically compare one set of events to another.

Each error profile provides visual details about significant differences in the frequency of different values for the events. For each [attribute](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute), the error profile includes:

* A pie chart showing how the error's attribute is distributed for values that deviate the most
* A table comparing the error attribute's distribution to that of non-erroring transactions

This helps you take more of the guesswork out of resolving your app errors. You can more easily determine if you can safely ignore the error, or if you should attempt to resolve the error with a new deployment, code edits, customer communications, or other actions.

## Error profile attribute examples [#error-profile-attributes]

To access error profiles go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Errors > Error profiles**</DNT>

<img
  title="APM: Error profiles example"
  alt="APM: Error profiles example"
  src="/images/apm_screenshot-full_seldon-error-profiles.webp"
/>

<figcaption>
  Use error profiles to troubleshoot trends and significant differences in the frequency of error events for your app.
</figcaption>

An error profile is a collection of [attributes](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) with significantly different traits compared to non-errors. An attribute is "unusual" if a set of events represent what is normal (for example, errors compared to all traffic for a given time window), or differences between similar criteria (for example, two different hosts).

Errors may be related to events such as:

* Specific [web transaction](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) names or [non-web transaction](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) names, JVM thread names, etc.
* Unique types of error messages, classes, etc.
* Random customer interactions; for example, a particular error comes from a single customer's account, while normal traffic comes from a wide variety of accounts
* External call counts or duration
* Timing differences among hosts in your ecosystem, cluster agent IDs, etc.
* Other anomalies

## Select error profile criteria [#criteria]

Based on criteria in your app's [<DNT>**Errors**</DNT> page](/docs/apm/applications-menu/error-analytics/error-analytics-explore-events-behind-errors), New Relic analyzes and lists unusual trends by their significance. Your selected criteria includes:

* [Time window](/docs/data-analysis/user-interface-functions/view-your-data/time-picker-setting-time-periods-view-data)
* <DNT>**Errors**</DNT> page filters
* Search criteria on the <DNT>**Errors**</DNT> page or the <DNT>**Error profiles**</DNT> tab

As you examine error profile results and want to dig deeper, add or change your app's error profile criteria. The <DNT>**Error profile**</DNT> tab refreshes to show the traits that distinguish the errors that match the updated criteria.

<CollapserGroup>
  <Collapser
    id="profile-criteria-example"
    title="Error profile criteria example"
  >
    Your app's <DNT>**Error profile**</DNT> tab currently shows several error classes or messages. To filter to a specific error class or message, use any of these options:

    * From the <DNT>**Errors**</DNT> page's time picker, change the time range. For example, change the default (30 minutes) to <DNT>**Last 24 hours, ending now**</DNT>.
    * From the <DNT>**Errors**</DNT> page's filter <Icon name="fe-filter"/>
      section: Select <DNT>**Back to groupings list**</DNT>, then select other <DNT>**Error groups**</DNT>, <DNT>**Error attributes**</DNT>, or <DNT>**Custom attributes**</DNT>.
    * From the <DNT>**Errors**</DNT> page's filter <Icon name="fe-filter"/>
      section: Click a specific item on the list to narrow the filter. For example, if several error messages are listed, click only the message you are interested in.
    * From the <DNT>**Error profiles**</DNT> tab's search <Icon name="fe-search"/>
      box, type `class`, `message`, or other search values.
  </Collapser>
</CollapserGroup>

## Analyze error profile results [#details]

To examine details for the attribute results in your app's error profile, you must use the classic APM view.

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Errors**</DNT>, then toggle <DNT>**Show new view**</DNT> so that APM shows the classic view of the <DNT>**Errors**</DNT> page.
2. From the <DNT>**Errors**</DNT> page, select the <DNT>**Error profile**</DNT> tab.
3. From the <DNT>**Error profile**</DNT> tab, review the list of error attributes that match the currently selected [error profile criteria](#criteria).
4. To view a specific attribute's details, click it.
5. To highlight specific error details, mouse over any pie chart segment or table row for the attribute.
6. To investigate a specific attribute for your app's errors, type its name in the <DNT>**Error profiles**</DNT> tab's search window, or change the currently selected [error profile criteria](#criteria).

Compare values with large differences to identify the traits that distinguish the errors for an attribute. The comparative data in the error profile results and the [error trace details](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces) can help you decide what steps to take for additional troubleshooting and resolving the error.

## Error and non-error distribution [#distribution]

Depending on an error's attributes, sometimes the attribute is distributed differently for errors than for non-errors.

<CollapserGroup>
  <Collapser
    id="top"
    title="Top deviating values"
  >
    New Relic analyzes each attribute for your app's errors and compares the distribution for errors that match your criteria to transactions without errors. If the proportions between these errors are roughly the same compared to transactions without any errors, the attribute does not contain much useful information for debugging.

    New Relic limits the error profile's pie chart and table for each attribute to show only the top deviating values. When proportions are roughly the same, New Relic does not include them in the error profile.
  </Collapser>

  <Collapser
    id="other"
    title="Other category"
  >
    After the top deviating values, the error profile groups the rest into an <DNT>**Other**</DNT> category. This helps you focus on the values that are different for these errors.
  </Collapser>

  <Collapser
    id="no-value"
    title="No value category"
  >
    If values are unusually present or are not present in the errors, you may see a <DNT>**No value**</DNT> category on the list of error profiles.
  </Collapser>

  <Collapser
    id="filters"
    title="Filters"
  >
    If you do not have any filters selected, the profile shows any distinguishing traits your errors exhibit in aggregate.

    <DNT>**Example:**</DNT> A certain kind of transaction makes up 20% of all of your traffic and is responsible for 80% of your errors. The error profile will show the unexpected proportions in the `Transaction` attribute.

    Adjust your [error profile criteria](#criteria) to drill down even deeper into the profile results, so you can more effectively troubleshoot and resolve specific error events.
  </Collapser>
</CollapserGroup>
