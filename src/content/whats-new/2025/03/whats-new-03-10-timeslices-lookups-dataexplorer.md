---
title: 'Timeslice Metrics and Lookup Tables Now Available in Data Explorer'
summary: 'Query Enhance insights with business-specific context from CSV files and'
releaseDate: '2025-03-10'
---

The [data explorer](https://docs.newrelic.com/docs/query-your-data/explore-query-data/query-builder/introduction-new-data-explorer/) makes it easy to identify, fetch and visualize the data you are looking for through visual menus, without requiring knowledge of NRQL or building queries. It allows you to access all data stored in the New Relic database (NRDB) in a quick, intuitive way.

Now, we've added Timeslice Metrics and Lookup Tables to the data explorer so you can easily explore an even broader range of data in one place!

## Timeslice Metrics
Metric timeslice data is a lightweight data type reported by our APM, browser, and mobile agents. Now, you can easily explore timeslice metrics in the data explorer by selecting "Timeslices" in the data type dropdown menu.

<iframe width="560" height="315" src="https://fast.wistia.net/embed/iframe/4z9chi0x4c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Key Features:**
- **Automatic query recommendations:** Our intuitive data explorer interface provides quick, one-click recommended queries, streamlining your data analysis process.
- **Explore with context:** Effortlessly switch between Timeslices Metrics and Dimensional Metrics without losing the context of your account or entity.

**Learn More:**
- Learn more about metric timeslices in this [doc](https://docs.newrelic.com/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data)
- Learn more about extracting metric timeslice data with the API in this [doc](https://docs.newrelic.com/docs/apis/rest-api-v2/basic-functions/extract-metric-timeslice-data/)

## Lookup Tables 

Lookup tables allow you to access and query data from CSV files uploaded to the New Relic platform, enabling you to integrate and enrich New Relic-stored data with your business-specific data from CSV files.

<iframe width="560" height="315" src="https://fast.wistia.net/embed/iframe/c24shh4c0g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


**Key Features:**
- **Enrich your insights:** After uploading your CSV as a lookup table, explore and query your data with the same ease as any other metric or event in the platform.
- **Automatic query recommendations:** Our intuitive data explorer interface provides quick, one-click recommended queries, streamlining your data analysis process.

**Learn More:**
- Learn how to upload look up tables in this [doc](https://docs.newrelic.com/docs/logs/ui-data/lookup-tables-ui/#requirements)
- Learn how to use lookup table data in this [doc](https://docs.newrelic.com/docs/nrql/using-nrql/lookups/)
