---
title: Forward Micrometer data to New Relic with OpenTelemetry
metaDescription: New Relic offers an integration that sends your Micrometer telemetry data to your New Relic account.
redirects:
  - /docs/integrations/open-source-telemetry-integrations/micrometer/micrometer-metrics-registry
  - /docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/new-relics-micrometer-integration
  - /docs/more-integrations/open-source-telemetry-integrations/micrometer/micrometer-metrics-registry
  - /docs/apm/agents/java-agent/third-party-integrations/micrometer/micrometer-metrics-registry
freshnessValidatedDate: never
---

New Relic supports [Micrometer data](https://micrometer.io/) so you can view all of your observability metrics in one platform. You'll configure the [OpenTelemetry Micrometer bridge](https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/micrometer/micrometer-1.5/library) with the OpenTelemetry SDK, then use OpenTelemetry Protocol (OTLP) to forward your Micrometer data to New Relic.

<img
  title="Micrometer bridged with OpenTelemetry in New Relic"
  alt="A screenshot of the Micrometer summary page when instrumented with OpenTelemetry"
  src="/images/opentelemetry_screenshot-full_micrometer-with-otel.webp"
/>

<figcaption>
  Go to **[one.newrelic.com](https://one.newrelic.com) > All Capabilities > APM & Services**, then find the **Services - OpenTelemetry** section: View your Micrometer data in New Relic when bridged through OpenTelemetry
</figcaption>

## Compatibility and requirements [#requirements]

Before working through these procedures, you should:

* Configure the OpenTelemetry Metrics SDK to [export data to New Relic via OTLP](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/opentelemetry-introduction/#how-it-works)
* Install the OpenTelemetry Micrometer bridge

## Forward Micrometer data to New Relic [#forward-data-OpenTelemetry]

These are generalized steps to set up Micrometer metrics forwarding. You may want to update code snippets as needed to fit your specific environment.

<Steps>
  <Step>
    ### Add OpenTelemetry Micrometer instrumentation

    Add OpenTelemetry Micrometer instrumentation to the alpha modules section of your `build.gradle` file:

    ```groovy
    //Alpha modules
    implementation 'io.opentelemetry.instrumentation:opentelemetry-micrometer-1.5'
    ```
  </Step>

  <Step>
    ### Add OpenTelemetry dependencies

    In the `dependencies` section, add the OpenTelemetry SDK and OTLP exporter:

    ```groovy
    dependencies {
      implementation 'io.opentelemetry:opentelemetry-sdk'
      implementation 'io.opentelemetry:opentelemetry-exporters-otlp'
    }
    ```

    An example file with alpha modules and dependencies added might look something like this:

    ```groovy
    plugins {
      id 'java-library'
      id 'org.springframework.boot'
    }

    bootRun {
      mainClass.set 'io.opentelemetry.example.micrometer.Application'
    }

    dependencies {
      implementation platform("io.opentelemetry:opentelemetry-bom-alpha:JAVA_OTEL_VERSION")
      implementation 'io.opentelemetry:opentelemetry-sdk'
      implementation 'io.opentelemetry:opentelemetry-exporters-otlp'

      implementation platform("io.opentelemetry.instrumentation:opentelemetry-instrumentation-bom-alpha:OTEL_JAVA_INSTRUMENTATION_VERSION")
      implementation 'io.opentelemetry.instrumentation:opentelemetry-micrometer-1.5'
    }
    ```

    Keep in mind you will need to update the snippet with correct versioning.
  </Step>

  <Step>
    ### Configure Micrometer to forward data to New Relic

    Below is an example code snippet that directs Micrometer to use the OpenTelemetry Micrometer bridge.

    This snippet updates your code so OpenTelemetry can detect Micrometer data, then forward that data to New Relic:

    ```java
    public OpenTelemetry openTelemetry() {
      return OpenTelemetrySdk.builder()
        .setMeterProvider(
          SdkMeterProvider.builder()
            .setResource(
              Resource.getDefault()
                .toBuilder()
                .put("service.name", "micrometer-shim")
                // Include instrumentation.provider=micrometer to enable
                // micrometer metrics experience in New Relic
                .put("instrumentation.provider", "micrometer")
                .build())
            .registerMetricReader(
              PeriodicMetricReader.builder(
                OtlpHttpMetricExporter.builder()
                  .setEndpoint("https://otlp.nr-data.net/v1/metrics")
                  .addHeader("api-key",
                    Optional
                      .ofNullable(System.getenv("NEW_RELIC_LICENSE_KEY"))
                      .filter(str -> !str.isEmpty() && !str.isBlank())
                      .orElseThrow())
                  // IMPORTANT: New Relic exports data using delta
                  // temporality rather than cumulative temporality
                  .setAggregationTemporalitySelector(
                    AggregationTemporalitySelector
                      .deltaPreferred())
                  // Use exponential histogram aggregation for
                  // histogram instruments to produce better data
                  // and compression
                  .setDefaultAggregationSelector(
                    DefaultAggregationSelector.getDefault().with(
                      InstrumentType.HISTOGRAM,
                      Aggregation.base2ExponentialBucketHistogram()))
                  .build())
              // Match default micrometer collection interval of 60
              // seconds
              .setInterval(Duration.ofSeconds(60))
              .build())
            .build())
        .build();
    }
    ```
  </Step>

  <Step>
    ### Find your data in New Relic

    Wait a few minutes, trigger some test data, then go to **[one.newrelic.com](https://one.newrelic.com) > All Capabilities > APM & Services**, then find **Services - OpenTelemetry** to choose the service instrumented with Micrometer.
  </Step>
</Steps>

## What's next? [#whats-next]

To learn more about using New Relic with Micrometer data, we recommend these docs:

* Learn to create [custom visualizations with dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* [Set up some alerts](/docs/tutorial-create-alerts/create-an-alert) to keep track of system performance
* [Query your data with NRQL](/docs/nrql/get-started/introduction-nrql-how-nrql-works)
