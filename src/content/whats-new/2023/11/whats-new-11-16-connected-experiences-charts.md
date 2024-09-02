---
title: 'New connected experiences feature for charts'
summary: 'Quickly pivot between dashboards and relevant observability pages in a click with contextual links'
releaseDate: '2023-11-16'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/explore-query-data/use-charts/chart-types/#widget-linechart' 
getStartedLink: 'https://one.newrelic.com/dashboards'
---

We’ve updated our charts to make it easier to see the right data in the right view with fewer clicks!

Dashboards help you query, visualize, and correlate data from multiple sources across your stack. When dips and spikes appear on your charts, you want to quickly understand the reason why and go from a broader view to a deep diving into your data.

Now, you can click on time series charts from anywhere in New Relic to go directly to associated entities as well as their traces and logs. This allows you to:
- **Troubleshoot faster with context**: Take the right next steps by seeing associated entities.
- **Deep dive to the right data easier**:  Automatically connect with relevant services, hosts, and more. 
- **Get context from anywhere in the platform**: Pivot to the right pages in a single click.

<iframe width="560" height="315" src="https://fast.wistia.net/embed/iframe/5jkkp2wbu7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<figcaption>Explore and troubleshoot faster in relevant UI views with connected experiences for charts in New Relic. </figcaption>

This new feature is available in charts that appear in:
- [Custom dashboards](https://one.newrelic.com/dashboards)
- Curated capability views like [APM](https://one.newrelic.com/apm), [infrastructure](https://one.newrelic.com/infra), [browser](https://one.newrelic.com/browser), and more
- [Query builder](https://one.newrelic.com/data-exploration)

**Note:** Entities only appear in the contextual menu if the widget query explicitly defines the entities queried with `​​entityGuid`, `entity.guid`, `appName`, `entity.name` or `entityName` in the `WHERE` clause of the underlying NRQL code.

Learn more in the charts [documentation](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/prebuilt-dashboards) or watch the video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/EhDQt-2lEuA?si=fc3WNkssXY0OCSBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
