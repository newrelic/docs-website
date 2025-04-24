---
title: 'Improved OpenTelemetry data validation policy is coming!'
summary: 'New Relic is introducing a more lenient approach to OTLP ingest validation, ensuring reduced data loss and improved data completeness.'
releaseDate: '2024-04-23'
learnMoreLink: 'https://docs.newrelic.com/docs/opentelemetry/best-practices/opentelemetry-otlp-attributes-processing-update/'
getStartedLink: ''
---

Starting June 2, 2025, New Relic will introduce a more lenient validation logic for OTLP ingest attribute processing. This update marks an evolution in how New Relic handles attribute variations. Invalid attributes will no longer cause entire records to be dropped. Instead, problematic attributes will be pruned or modified, allowing the rest of the record to remain intact. This will provide greater data reliability and simplify your observability workflows by providing:

* **Reduced data loss:** Fewer instances of entire records being dropped due to a single invalid attribute.
* **Improved data completeness:** A more faithful representation of the data you're sending.
* **Easier troubleshooting:** Less time spent tracking down and diagnosing missing data.

It’s important to note that this new approach will store records previously dropped due to invalid attributes. While this contributes to your account’s data usage under New Relic’s pricing model, the benefits of improved data retention and reliability far outweigh the trade-off.


For more information on how you can prepare for this change, read this [doc](https://docs.newrelic.com/docs/opentelemetry/best-practices/opentelemetry-otlp-attributes-processing-update/).










 





