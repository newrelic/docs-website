---
title: 'New thresholds markers for line charts and tables'
summary: 'Configure thresholds on line charts and tables to add context and make your data easier to interpret.'
releaseDate: '2024-04-22'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/explore-query-data/use-charts/use-your-charts/#thresholds'
getStartedLink: ''
---

When analyzing your data, it's important to know at a glance whether a metric needs your attention. Someone viewing your chart may not know the context of whether a number is normal, or more importantly, not normal.

That's why we've released a new thresholds feature that lets you draw custom lines and regions to label your line time-series charts and tables. This feature allows you to add more context to your dashboard customizations and make data more easily understood.

<iframe width="560" height="315" src="https://fast.wistia.net/embed/iframe/ikpu24sqjr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

With thresholds you can:

- Specify boundaries in time series charts
- Set colored regions in times series charts
- Set only the lower value to set a minimum boundary and shade everything above that value
- Set only the higher value to shade everything below
- Color cells in a table depending on its value
- Add multiple thresholds in a single chart or table to show varying degrees of severity

## How to configure thresholds

In time series charts:

1. Edit the chart and expand the **Thresholds** menu.
2. Select **+** to add a threshold and enter a **Name**.
3. Enter values for **From** and **To**. If you want to create a single line, enter the same number for both fields.
4. Select a **Severity level**. This determines the color of the line and/or region.

![Setting thresholds in a line chart](/images/thresholds-timeseries.webp 'Setting thresholds in a line chart')

In tables:

1. Edit the table widget and expand the **Thresholds** menu.
2. Select **+** to add a threshold and select a **Column**.
3. Enter values for **From** and **To**. To set an upper bound, leave the **From** field empty. To set a lower bound, leave the **To** field empty.
4. Select a **Severity level**. This determines the color of the cell.

![Setting thresholds in a table widget](/images/thresholds-table.webp 'Setting thresholds in a table widget')

## Remove a threshold

To remove a threshold marker or region, hover over one of the fields and select the **-** symbol beside the Name field.

## Learn more

Learn more about how you can customize charts by reading the [docs page](https://docs.newrelic.com/docs/query-your-data/explore-query-data/use-charts/use-your-charts/#thresholds).
