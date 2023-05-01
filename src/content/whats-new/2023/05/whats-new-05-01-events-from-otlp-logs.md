---
title: "Events from OTLP logs"
summary: "Events have joined OpenTelemetry metrics, logs, and traces in New Relic!"
releaseDate: "yyyy-mm-dd"
getStartedLink: "https://docs.newrelic.com/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/view-your-data/opentelemetry-events/"
---

OpenTelemetry’s experimental [Events API](https://opentelemetry.io/docs/reference/specification/logs/event-api/) allows you to emit events as logs containing two special attributes:

-   `event.domain`: The domain of the emitted events. It needs to be set during the creation of the EventLogger.
-   `event.name`: The event name. This attribute is what New Relic uses to map an OpenTelemetry event to a [New Relic event type](https://docs.newrelic.com/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general).

New Relic’s OTLP Logs API will detect logs with those attributes and write them as custom events instead of logs. For example, if your application emits an event with `event.domain=DefaultEventDomain` and `event.name=ApiRequest`, you will be able to find these events under the `ApiRequest` event type in New Relic.

Here's an example of how to view the data using the [query builder](https://docs.newrelic.com/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/view-your-data/opentelemetry-data-explorer-query-builder/):

![](https://docs.newrelic.com/static/otel-events-133393f4958cc530f0fb16ef4c1c4a01.png "Screenshot showing how OpenTelemetry events having event.type='ApiRequest' can be queried in the query builder using SELECT * FROM ApiRequest")

Note that both event.type and event.domain need to be included in the OpenTelemetry events for them to become available as events in New Relic. The OpenTelemetry Events API already [enforces](https://opentelemetry.io/docs/reference/specification/logs/event-api/) this through the EventLogger and Events constructor or factory method interfaces.

To learn about OpenTelemetry in other UI pages, see the [UI overview](https://docs.newrelic.com/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/view-your-data/opentelemetry-view-your-data/). Feedback or questions about OpenTelemetry events? Come chat with us in [CNCF slack, #otel-newrelic](https://cloud-native.slack.com/archives/C024DRQ63UP).

**As of May 2023, the Event API is marked experimental. Because New Relic supports the latest OpenTelemetry standards, if the Events API changes before it stabilizes, we will update our support without advance notice.**

**What does that mean for you? The Logs API could change the criteria for writing events from OTLP logs. Any queries written using the custom event (e.g. dashboards, alerts) would stop working and your data would be preserved as Logs rather than custom events.**
