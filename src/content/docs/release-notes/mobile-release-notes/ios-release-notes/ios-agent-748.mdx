---
subject: iOS agent
releaseDate: '2023-12-11'
version: 7.4.8
downloadLink: 'https://download.newrelic.com/ios_agent/NewRelic_XCFramework_Agent_7.4.8.zip'
---

## Fixed in this release [#fixed]

* Fixes async requests so they appear in distributed tracing.
* Adds `NRFeatureFlag_NewEventSystem` feature flag. Enable this flag to use our new, more stable, event system for iOS agent:

```
    NewRelic.enableFeatures([NRMAFeatureFlags.NRFeatureFlag_NewEventSystem])
```

* Adds configurable request header instrumentation to network events:
  * The agent will now produce network event attributes for select header values if it detects headers on the request. The header names to instrument pass into the agent when started.
  * For more information, see [Adding Tracked Headers](https://docs.newrelic.com/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/add-tracked-headers) in the Mobile Monitoring documentation.

* Adds GraphQL attributes to network events:
  * If the agent detects request headers from Apollo GraphQL servers, it will add additional attributes to the network request event.
  * For more information, see [Adding Tracked Headers](https://docs.newrelic.com/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/add-tracked-headers) in the Mobile Monitoring documentation.

### Other notes

* With the 7.4.6 release, the XCFramework no longer includes the `dsym-upload-tools`. You can find the `dsym-upload-tools` in the `dsym-upload-tools` folder of the `https://github.com/newrelic/newrelic-ios-agent-spm` Swift Package Manager repository. Please copy the dsym-upload-tools directory into your application source code directory by copying the XCFramework into your project or using Cocoapods if you're integrating the New Relic iOS Agent. Use the run script below in your Xcode build phases to perform symbol upload steps during app builds in Xcode.

```
ARTIFACT_DIR="${BUILD_DIR%Build/*}"
SCRIPT=`/usr/bin/find "${SRCROOT}" "${ARTIFACT_DIR}" -type f -name run-symbol-tool | head -n 1`
/bin/sh "${SCRIPT}" "APP_TOKEN"
```

* We recommend using the swift package manager for your installation method.

### Support statement

* As of iOS agent version 7.4.1, the iOS agent will consolidate previously separate XCFramework and tvOS agents into a singular iOS agent.
* As of this release, the oldest supported version of the [XCFramework](/docs/release-notes/mobile-release-notes/xcframework-release-notes/xcframework-agent-732) is 7.3.2.
