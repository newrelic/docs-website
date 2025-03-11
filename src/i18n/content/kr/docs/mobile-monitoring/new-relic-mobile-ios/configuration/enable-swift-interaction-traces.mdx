---
title: Swift 상호작용 추적 사용
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: How to instrument Swift dynamic method lookups with New Relic's iOS instrumentation feature flag.
freshnessValidatedDate: never
translationType: machine
---

iOS 개발을 위한 동적 기본 메서드 조회가 Swift에서 제거되었습니다. 그러면 에이전트의 기본 메서드 계측이 중단됩니다. 예를 들어, Swift 클래스의 상호 작용 추적은 기본적으로 비활성화되어 있지만 다시 활성화할 수 있습니다.

Swift 앱의 상호 작용은 [자동으로 계측된 클래스 및 메서드가](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios) 사용되거나 사용자 정의 상호 작용을 정의할 때 캡처됩니다. 그러나 Swift 클래스가 이러한 기본 클래스에 대한 하위 클래스를 생성하는 경우 다음 단계에 따라 상호 작용을 캡처하세요.

## 동적 메서드 조회 활성화 [#enable-dynamic]

Swift에서 메서드별로 동적 메서드 조회를 다시 활성화하려면 `dynamic` 선언 수정자를 추가합니다. 예를 들어:

```swift
class MyViewController : UIViewController {
    override dynamic func viewDidLoad() {
        super.viewDidLoad()
        ...
    }
}
```

New Relic이 [자동으로 계측하는](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios) 모든 기능에 대해 하위 클래스를 생성하고 Swift에서 재정의할 때마다 이 수정자를 추가해야 합니다.

## Swift 계측 활성화 [#swift-instrumentation]

메서드 재정의에 `dynamic` 키워드를 추가한 후 다음 메서드를 호출하여 Swift 계측을 다시 활성화할 수 있습니다.

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
        오브젝티브-C
      </td>

      <td>
        전에 전화 `[NewRelic startWithApplicationToken:...];`

        ```objectivec
        [NewRelic enableFeatures:NRFeatureFlag_SwiftInteractionTracing];
        ```
      </td>
    </tr>

    <tr>
      <td>
        빠른
      </td>

      <td>
        전에 전화 `NewRelic.start(withApplicationToken:)`

        ```swift
        NewRelic.enableFeatures(NRMAFeatureFlags.NRFeatureFlag_SwiftInteractionTracing)
        ```
      </td>
    </tr>
  </tbody>
</table>
