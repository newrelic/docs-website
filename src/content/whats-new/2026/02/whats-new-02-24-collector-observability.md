---
title: "Monitor your OpenTelemetry Collectors with Collector Observability"
summary: "Get visibility into your collector health, performance, and data flow with a dedicated APM UI experience."
releaseDate: "2026-02-24"
learnMoreLink: "https://docs.newrelic.com/docs/opentelemetry/collector-observability/collector-observability-intro"
getStartedLink: "https://docs.newrelic.com/docs/opentelemetry/collector-observability/collector-observability-setup"
---

Your [OpenTelemetry](/docs/opentelemetry/opentelemetry-introduction) collectors are critical components in your observability pipeline—and now you can monitor them just like any other service. We're excited to announce the **public preview** of **OpenTelemetry Collector Observability**, bringing native monitoring capabilities for your collectors directly into New Relic.

## What is Collector Observability?

[OpenTelemetry collectors](https://opentelemetry.io/docs/collector/) process massive volumes of telemetry data, but until now, understanding their health and performance required custom dashboards and manual metric collection. Collector Observability changes that by leveraging the collector's [internal telemetry](https://opentelemetry.io/docs/collector/internal-telemetry/) to provide dedicated monitoring through a familiar APM UI experience.

## Key capabilities

**Dedicated APM UI for collectors**
- View your collectors as service entities in **APM & Services**
- Monitor health, throughput, and performance in real-time
- Track resource utilization (CPU, memory) at a glance
- See infrastructure relationships (host or container running the collector)

**Native internal telemetry**
- **Metrics**: Component-level insights into receivers, processors, and exporters
- **Logs**: Sampled logs with minimal overhead during normal operation
- **Traces**: Optional experimental support for deep pipeline analysis

**Golden signals for collectors**
- **Throughput**: Data processed per second (spans, metrics, logs)
- **Latency**: Processing time through the pipeline
- **Errors**: Dropped, refused, or failed data
- **Saturation**: Queue depth and resource utilization

## Why it matters

**Detect issues before they impact downstream observability**
- Identify memory leaks, CPU spikes, or data drops early
- Understand bottlenecks in complex pipelines
- Validate that configuration changes have the desired effect

**Optimize performance and capacity**
- Track resource utilization trends for capacity planning
- Fine-tune batch sizes, queue depths, and processor configurations
- Ensure collectors are operating efficiently under load

**Faster troubleshooting**
- Quickly identify if missing telemetry is due to collector issues
- Component-level metrics show exactly where data is being processed or dropped
- Infrastructure relationships provide full context (host, container, or pod)

## Get started

Collector Observability requires **[NRDOT Collector](/docs/opentelemetry/nrdot/nrdot-collector) version 1.10.0 or later** and is enabled through a simple configuration:

1. **Download the internal telemetry configuration** from the [NRDOT releases repository](https://github.com/newrelic/nrdot-collector-releases)
2. **Configure environment variables** for your New Relic license key and collector name
3. **Merge the configuration** with your existing collector setup using `--config` arguments
4. **Add the entity tag** `newrelic.service.type: otel_collector` to opt into the UI experience

Your collectors will then appear in **[APM & Services](/docs/apm/new-relic-apm/getting-started/introduction-apm/)** with a tailored monitoring experience.

## What's included in the preview

During public preview:
- ✅ **Summary page** with health and performance metrics (billable as Core CCU)
- ✅ **Process page** with system resource metrics (not billable)
- ✅ **HTTP/RPC page** with network communication metrics (not billable)
- ✅ **Infrastructure relationships** for host and container monitoring
- ✅ **Custom dashboards and alerts** using collector telemetry data

## Important considerations

**Billing**: Collector Observability generates additional telemetry data (measured in GB Ingested) and the Summary page is measured in Core CCU. Both are billable during preview. See the [data costs documentation](/docs/opentelemetry/collector-observability/collector-telemetry-overhead) for details.

**Telemetry stability**: The collector's internal telemetry schema is not yet stable and may change during preview. Only the most recent telemetry version is supported. Backwards compatibility will be provided at General Availability.

**Export format**: The UI expects data in OTLP exporter format. Prometheus format (e.g., `http_client_request_duration`) is not supported.

## Learn more

- **[Collector Observability overview](/docs/opentelemetry/collector-observability/collector-observability-intro)**: Complete introduction to the feature
- **[Set up collector monitoring](/docs/opentelemetry/collector-observability/collector-observability-setup)**: Step-by-step configuration guide
- **[Understand data costs](/docs/opentelemetry/collector-observability/collector-telemetry-overhead)**: Learn about billing and optimize overhead
- **[View collectors in the UI](/docs/opentelemetry/collector-observability/collector-observability-ui)**: Navigate the APM experience
- **[See configuration examples](/docs/opentelemetry/collector-observability/collector-observability-examples)**: Docker, Kubernetes, and more
- **[Read the blog post](https://newrelic.com/blog/how-to-relic/opentelemetry-collector-observability)**: Deep dive into the feature and use cases

## Try it now

Collector Observability is available in **[public preview](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy/)** for all New Relic customers. Start monitoring your collectors today and gain confidence that your observability pipeline is healthy and performant.

Not using the OpenTelemetry Collector yet? Learn about [NRDOT](/docs/opentelemetry/nrdot/nrdot-intro), New Relic's distribution of the OpenTelemetry Collector, or explore [collector use cases](/docs/opentelemetry/get-started/collector-processing/opentelemetry-collector-processing-intro) to see how collectors can enhance your observability stack.

Don't have a New Relic account? [Sign up for free](https://newrelic.com/signup) to start monitoring your OpenTelemetry collectors and get full-stack observability for your entire infrastructure.
