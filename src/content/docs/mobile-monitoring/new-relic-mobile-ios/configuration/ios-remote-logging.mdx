---
title: Logging with the iOS agent
tags:
  - Mobile logging
  - New Relic Mobile iOS
metaDescription: Suggestions for setting up the logging in your app with the New Relic agent
freshnessValidatedDate: never
---


To ensure consistent and comprehensive logging throughout the project, the iOS agent provides logging APIs. Use the agent's logging APIs to send your mobile apps logs to New Relic. This ensures that your logs are at one place for your analysis. For more information, refer our [mobile logging API](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs/#ios).


## Configuring log levels

You can configure the iOS agent log levels for the agent and remote logging. 

### Agent Log Level

The agent log level is configured in the New Relic agent and determines which log messages are written to the device's console. This also includes the New Relic agent logs. To view all New Relic agent logs, set the log level to `NRLogLevelDebug`.


### Remote Log Level

In the New Relic platform, the remote log level controls the verbosity of logs sent from a device to New Relic. This helps to manage the data volume and keeps the focus on relevant information.

**Configuration**: On the New Relic dashboard, you can set up the remote log level in <DNT>**Application**</DNT> tab. For more information on setting the remote log level, refer [mobile logs](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs).



## Automatic log collection

In the New Relic platform, when the remote logging is enabled, the iOS agent collects all logs written on `stdout` and `stderr` from the app.  It captures all calls to `NSLog()`,  Swift `print()`, and other print-family functions. The logs collected this way are set to `NRLogLevelInfo`. This feature is disabled by default. To enable it, use the `NRFeatureFlag_AutoCollectLogs` feature flag.

The agent separates log messages using a `'\n\n'` delimiter. The timestamp reflects when the agent collected the log, not when the application wrote it. This might cause difference of milliseconds as the log message was buffered before being collected by the agent.

<Callout variant="important">
This feature interferes with Xcode's built-in console, so it can not be enabled while the debugger is attached.
</Callout>

