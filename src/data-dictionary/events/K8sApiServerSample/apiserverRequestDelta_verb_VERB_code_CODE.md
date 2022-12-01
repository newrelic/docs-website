---
name: apiserverRequestDelta_verb_VERB_code_CODE
type: attribute
units: count
events:
  - K8sApiServerSample
---

This is a delta counter for each request verb (e.g. GET, WATCH, LIST, CREATE) and their response codes. The delta is between the current and the last polled value.