---
title: 'Analyze errors and root cause faster with errors inbox enhancements for OpenTelemetry'
summary: 'Dynamically group and filter errors for deeper insights and analysis'
releaseDate: '2024-03-11'
learnMoreLink: 'https://docs.newrelic.com/docs/errors-inbox/otel-tab/'
getStartedLink: ''
---

The error tracking team is excited to announce an exciting improvement to OpenTelemetry’s error tracking experience. This update empowers you to analyze errors with greater efficiency and pinpoint root causes faster.

## Group and Filter Errors for Deeper Insights:

The new **Group Errors** tab lets you dynamically organize your span errors based on specific attributes. By default, errors are grouped by `error.group.name`and `error.group.message`.
![Group Errors Tab](/images/ei_1.webp 'A screenshot that show the new group errors tab')

You can also customize grouping by any relevant attribute, like host name, to uncover hidden patterns and identify common error sources.

![Group Errors custom attribute ](/images/ei_2.webp 'A screenshot that show the custom attribute in errors tab')

## Drill Down for Efficient Triage:

Selecting a specific error group within the **Group Errors** tab takes you to a detailed drilldown page. Prioritize troubleshooting by quickly identifying errors with available stack traces, which offer valuable clues to the cause of the issue and further refine your analysis by filtering based on any relevant attribute.

![Group Errors triage ](/images/ei_3.webp 'A screenshot that show the triage in errors')

As OpenTelemetry’s semantic conventions continue to evolve, the error tracking team will continue to make improvements to the OpenTelemetry error tracking experience to provide even more powerful insights into your application health.
