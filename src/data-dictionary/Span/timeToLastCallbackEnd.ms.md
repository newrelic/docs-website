---
name: timeToLastCallbackEnd.ms
units: milliseconds (ms)
events:
  - Span
---

The duration, in milliseconds, from the start of the request (timestamp) to the end of the last callback. This is not just an additive function; the callback time can overlap with the wait time.