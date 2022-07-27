---
name: SyntheticCheck
type: event
dataSources:
  - Synthetics
---

SyntheticCheck returns metrics from one run of a specific monitor. These metrics include duration information for the monitor, location of the monitor check, size of the request and response headers, the type of monitor, and a timestamp. Each time a synthetic monitor runs a check, details about the check are captured in the SyntheticCheck event type. SyntheticCheck events contain details specific to the check to provide visibility such as the status, type of monitor, and size of request and response headers.