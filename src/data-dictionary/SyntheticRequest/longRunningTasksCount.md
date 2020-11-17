---
name: longRunningTasksCount
units: count
events:
  - SyntheticRequest
---

A browser responds to user input by adding tasks to a queue on the main thread to be executed one by one. Any task taking 50 milliseconds or longer to execute is identified as a long running time.

Google's [User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics) contains detailed information about its Paint Timing API and `longRunningTasksCount`.