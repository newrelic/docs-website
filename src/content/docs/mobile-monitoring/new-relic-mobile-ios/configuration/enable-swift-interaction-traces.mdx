---
title: Enable Swift interaction traces
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: How to instrument Swift dynamic method lookups with New Relic's iOS instrumentation feature flag.
redirects:
  - /docs/mobile-monitoring/new-relic-mobile/getting-started/enabling-interaction-tracing-swift
  - /docs/mobile-monitoring/new-relic-mobile/getting-started/enabling-swift-interaction-tracing
  - /docs/mobile-monitoring/new-relic-mobile/getting-started/enabling-swift-interaction-traces
  - /docs/mobile-monitoring/new-relic-mobile-ios/install-configure/enabling-swift-interaction-traces
  - /docs/mobile-monitoring/new-relic-mobile-ios/install-configure/enable-swift-interaction-traces
freshnessValidatedDate: never
---

Dynamic-by-default method lookups for iOS development have been removed with Swift. This interrupts the agent's default method instrumentation. For example, interaction tracing in Swift classes are disabled by default, but you can re-enable them.

Interactions in a Swift app are captured if [automatically instrumented classes and methods](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios) are used or when defining custom interactions. However, if a Swift class creates sub-classes for any of these default classes, follow these steps to capture interactions.

## Enable dynamic method lookup [#enable-dynamic]

To re-enable dynamic method lookup on a method-by-method basis in Swift, adding the `dynamic` declaration modifier. For example:

```swift
class MyViewController : UIViewController {
    override dynamic func viewDidLoad() {
        super.viewDidLoad()
        ...
    }
}
```

For every function that New Relic [automatically instruments](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios), be sure to add this modifier every time you create a sub-class and override in Swift.

## Enable Swift instrumentation [#swift-instrumentation]

After adding the `dynamic` keyword to your method overrides, you can re-enable Swift instrumentation by calling the following method:

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        <DNT>
          **Language**
        </DNT>
      </th>

      <th>
        <DNT>
          **Procedure**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Objective-C
      </td>

      <td>
        Call prior to `[NewRelic startWithApplicationToken:...];`

        ```objectivec
        [NewRelic enableFeatures:NRFeatureFlag_SwiftInteractionTracing];
        ```
      </td>
    </tr>

    <tr>
      <td>
        Swift
      </td>

      <td>
        Call prior to `NewRelic.start(withApplicationToken:)`

        ```swift
        NewRelic.enableFeatures(NRMAFeatureFlags.NRFeatureFlag_SwiftInteractionTracing)
        ```
      </td>
    </tr>
  </tbody>
</table>
