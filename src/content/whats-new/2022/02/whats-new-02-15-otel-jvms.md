---
title: 'Compare JVM performance for OpenTelemetry services'
summary: 'New OpenTelemetry JVMs page'
releaseDate: '2022-02-17'
learnMoreLink: 'https://docs.newrelic.com/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/view-your-opentelemetry-data-new-relic/#jvms'
---
An updated JVMs page for services instrumented with OpenTelemetry allows you to identify which service instances have unusual or unhealthy performance patterns. You can compare the key service health and Java Virtual Machine (JVM) metrics, across any number of instances. With this data, you can determine which instances might need their JVM garbage collection or memory settings tuned for a better fit to their load, identify instances receiving an unbalanced amount of traffic, or spot slow memory leaks.

![Comparison view with timeseries charts, showing three JVM instances with different throughput rates, as well as different garbage collection behavior](./images/whats-new-02-15-otel-jvms.png "Comparison view with timeseries charts, showing three JVM instances with different throughput rates, as well as different garbage collection behavior")

With the new JVMs page, you can choose several service instances to compare, based on summaries of key metrics: response time, throughput, error rate, garbage collection time, and memory usage. Then, you can compare all those instances' JVM metrics collected by OpenTelemetry instrumentation using timeseries charts to spot problems.
