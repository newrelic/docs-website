---
title: 'Enhanced APM golden metrics accuracy for services instrumented with OpenTelemetry'
summary: 'APM golden metrics are now calculated directly from OpenTelemetry metrics'
releaseDate: '2025-01-13'
learnMoreLink: 'https://docs.newrelic.com/docs/opentelemetry/get-started/apm-monitoring/opentelemetry-apm-ui/#golden-metrics'
getStartedLink: ''
---

Starting today, we're improving the accuracy of APM golden metrics for services instrumented with OpenTelemetry. "Golden metrics" or "golden signals" refer to high-value metrics such as latency, error rate, and throughput, which are visible in the entity explorer, workloads activity page, and change tracking details page. Previously, these metrics were derived from sampled span data. Now that OpenTelemetry metrics have matured, we are calculating them using unsampled metrics data, providing a more precise and comprehensive view of your service's performance. **To maintain visibility of golden metrics for your OpenTelemetry services, please ensure you are reporting both traces and metrics.**

**Key Benefits:**
* **Improved accuracy:** If you're already reporting metrics for your OpenTelemetry-instrumented services, you will now receive more accurate and reliable data for latency, error rate, and throughput. This enhancement will be reflected in key areas such as the **Entity Explorer**, **Workloads Activity** page, and **Change Tracking Details** page.

* **Faster troubleshooting:** With more accurate metrics, you can gain a clearer understanding of your application's performance. This precision allows you to pinpoint issues faster, identify root causes more efficiently, and resolve them swiftly. Detailed and accurate metrics help you trace anomalies to their sources, enabling quicker fixes and reducing downtime.

**Next Steps:**

* **Review instrumentation:** If you're using OpenTelemetry, verify that you are reporting both traces and metrics for your services.

* ![OTelmetrics image](/images/otelmetrics.webp "OTel metrics screenshot")
