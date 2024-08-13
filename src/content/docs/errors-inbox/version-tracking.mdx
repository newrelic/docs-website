---
title: 'Version tracking with errors inbox'
metaDescription: "Errors inbox is an error tracking solution designed to give you the tools to proactively detect, triage, and resolve errors across your full application stack."
freshnessValidatedDate: 2024-05-13
---

<SideBySide>
  <Side>
    Errors inbox version tracking allows developers to monitor each deployment to check for accuracy and success. Let's say you and your team get an alert that says one of your entities has a spike in error rate. You identify the [source of the error](/docs/tutorial-error-tracking/respond-outages/) and decide to release a canary deployment. You can use version tracking to monitor your fix as well as the previous deployments to determine if you solved the problem or if you need to go back to the drawing board.
  </Side>

  <Side>
    <img
      width="60%"
      title="errors inbox change tracking"
      alt="A screenshot that depicts error occurrences by version"
      src="/images/errors-inbox_screenshot-crop_errors-inbox-change-tracking.webp"
    />
  </Side>
</SideBySide>

## Triage by error status [#error-status]

When you triage your inbox, you can choose from a variety of statuses. You may want to resolve errors immediately or even mark them so they are ignored. In other cases, you may want to resolve issues in the next version or in a specific version.

<img
  style={{ align: 'left',maxWidth: '100%' }}
  title="Screenshot showing resolve in version"
  alt="Screenshot showing resolve in version"
  src="/images/errors-inbox_screenshot-full_resolve-in-version.webp"
/>

You can set one of following statuses and filter your inbox by status:

* <DNT>**Unresolved**</DNT>: This is the default status of error groups.
* <DNT>**Resolve in next version**</DNT>: We recommend that you use this status if you expect to resolve this error group in your next release. In order to enable this option, you need to set up [change tracking](/docs/change-tracking/change-tracking-introduction/#start-tracking) for your application so that errors inbox can detect a new release and check that the error group was indeed resolved. In the event the error group is still detected in the next version or any future versions, the error group will be auto-unresolved, marked with a regression, and you'll receive a Slack notification about the regression.
* <DNT>**Resolve in specific version**</DNT>: Choose this option to resolve error groups in these situations:
  * If you know the error group will be resolved in a specific version
  * If ​​you know the error group is resolved in an existing version
  * If you'd like to enter a specific version
  In order to enable this option, you need to [instrument version tracking](#instrument-version-tracking) for your application or service. If an error occurrence with an equivalent or higher semantic version is detected, the error group will be auto-unresolved, marked with a regression, and you'll receive a Slack notification about the regression.
* <DNT>**Resolve**</DNT>: Setting an error group as resolved will hide it from the default inbox view unless filters are updated to include resolved error groups. If events matching the error group fingerprint occur after marking an error group as resolved, it will automatically reset the status to **Unresolved**.  This can be useful for identifying regressions.
* <DNT>**Ignore**</DNT>: This will hide the error group from the inbox view unless filters are updated to include ignored errors, or until you stop ignoring the error group.

<Callout variant="tip">
  The options <DNT>**Resolve in next version**</DNT> and <DNT>**Resolve in specific version**</DNT> are only supported if your team uses semantic versioning.
</Callout>

## Understand version tracking fields [#understand-version-tracking-fields]

Before you instrument version tracking, it's important to understand how errors inbox sorts your results. In APM and OpenTelemetry applications, when you're tracking errors the following event fields are checked and displayed _in this order_:

1. `service.version`
2. `tags.service.version`
3. `tags.releaseTag`
4. `tags.commit`

For mobile applications, the event field is `appVersion`.

For browser applications, the event field is `application.version`.

## Instrument version tracking [#instrument-version-tracking]

To capture data from our version tracking, you must configure fields for relevant entities:

* [For OpenTelemetry entities, configure `service.version`](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-resources/).
* For APM entities, configure environment variables for APM entities.
  * [Go](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config/#errors-inbox-configuration)
  * [Java](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#errors-inbox-configuration)
  * [.NET](/docs/apm/agents/net-agent/configuration/net-agent-configuration/#errors-inbox-configuration)
  * [Node.js](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#errors-inbox-configuration)
  * [PHP](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#errors-inbox-configuration)
  * [Python](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#errors-inbox-configuration)
  * [Ruby](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#errors-inbox-configuration)
* [For mobile entities, configure `appVersion`](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-application-version/).
* [For browser entities, use `application.version`](/docs/browser/new-relic-browser/browser-apis/setApplicationVersion/).

## Filter by version [#filter-by-version]

Once you have instrumented version tracking, your error groups will automatically capture data from each release. You can filter by each version.

To filter error groups with multiple versions, use the + operator to choose an `OR` condition.

<img
  style={{ align: 'left',maxWidth: '50%' }}
  title="version tracking errors inbox"
  alt="A screenshot depicting how to filter by versions in errors inbox. "
  src="/images/errors-inbox_screenshot-crop_filter-errors-by-versions.webp"
/>

You can use [change tracking](/docs/change-tracking/change-tracking-view-analyze/) to monitor your deployments. If you have done this, it's important to make sure that your deployments match the same version format you instrumented on your entities so you can match versions from your errors to your deployments.

## Find versions by error group [#find-versions-by-error-group]

You can also click on an error group to see each deployment that matches the first and last seen dates for your error group. You will only see versions that were live within 30 minutes after your first seen date and within 30 minutes before your last seen date.

<img
  style={{ align: 'left',maxWidth: '50%' }}
  title="error date"
  alt="A screenshot depicting last seen date of errors"
  src="/images/errors-inbox_screenshot-full_error-date.webp"
/>

You can dive deeper into your error groups by using the chart that shows each of your error occurrences grouped by version.

If you have also set up deployments with change tracking, you will see deployment markers on this chart. These markers indicate when each deployment was released. Click the marker to navigate to the deployment.
