---
name: event
type: attribute
events:
  - NrAiSignal
---

The type of event captured in this data point.
* Value: A single value was evaluated (most common).
* Expiration: A signal loss is detected.
* Reset: Indicates a detail of the condition was changed, and [the signal has been reset](https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#evaluation-resets).