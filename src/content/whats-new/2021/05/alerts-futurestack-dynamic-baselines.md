---
title: 'Dynamic Baselines for all your services and infrastructure'
summary: 'Easily apply intelligent alerting to all of your services'
releaseDate: '2021-05-25'
learnMoreLink: 'https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-baseline-alert-conditions/#baseline-facets'
---

Business services and infrastructure are always changing. Now, instead of needing to understand the expected performance of an individual service so you can manually specify a static threshold, you can easily use dynamic thresholds by creating baseline alert conditions that cover all of your services and infrastructure. These adjust to accommodate the expected fluidity and volatility of your business.

We’ve expanded our existing dynamic baseline alerting, which previously had to be individually configured for each individual signal, to allow one alert configuration to apply dynamic thresholding across up to five thousand related time series of a particular service or entity. This greatly simplifies the process of adding alert coverage to all of your entities, by all of your teams. No team should be sitting on the sidelines, and missing the benefits of incident response.

![Animated gif showing condition thresholds](./images/dyn-baselines-2.gif "Animated gif showing condition thresholds")

Setting static thresholds can be intimidating to many engineers. It is easy to create dynamic baseline alert conditions that cover all of your services and infrastructure. Simply add the “FACET” clause to the NRQL queries you are using, and specify the metadata attributes that differentiate the signals that you want to monitor. Then, simply drag a slider to set and tune the sensitivity. 














