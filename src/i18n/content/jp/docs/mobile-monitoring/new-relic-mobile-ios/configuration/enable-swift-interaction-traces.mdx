---
title: Swiftのインタラクション・トレースを有効にする
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: How to instrument Swift dynamic method lookups with New Relic's iOS instrumentation feature flag.
freshnessValidatedDate: never
translationType: machine
---

iOS開発用のDynamic-by-defaultメソッドルックアップがSwiftで廃止されました。これにより、エージェントのデフォルトのメソッドインスツルメンテーションが中断されます。例えば、Swift クラスのインタラクショントレーシングはデフォルトでは無効になっていますが、再度有効にすることができます。

Swift アプリ内のインタラクションは[、自動的にインストルメント化されたクラスとメソッドが](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios)使用されている場合、またはカスタム インタラクションを定義している場合にキャプチャされます。ただし、Swift クラスがこれらのデフォルト クラスのサブクラスを作成する場合は、次の手順に従ってインタラクションをキャプチャします。

## ダイナミック・メソッド・ルックアップの有効化 [#enable-dynamic]

Swift でメソッドごとに動的メソッド検索を再度有効にするには、 `dynamic` 宣言修飾子を追加します。例えば：

```swift
class MyViewController : UIViewController {
    override dynamic func viewDidLoad() {
        super.viewDidLoad()
        ...
    }
}
```

New Relic が[自動的にインスツルメントする](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios)すべての関数に対して、サブクラスを作成して Swift でオーバーライドするたびに、必ずこの修飾子を追加してください。

## Swiftのインストゥルメンテーションを有効にする [#swift-instrumentation]

メソッドのオーバーライドに `dynamic` キーワードを追加した後、次のメソッドを呼び出して Swift インストルメンテーションを再度有効にできます。

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
        の前に電話する `[NewRelic startWithApplicationToken:...];`

        ```objectivec
        [NewRelic enableFeatures:NRFeatureFlag_SwiftInteractionTracing];
        ```
      </td>
    </tr>

    <tr>
      <td>
        迅速
      </td>

      <td>
        の前に電話する `NewRelic.start(withApplicationToken:)`

        ```swift
        NewRelic.enableFeatures(NRMAFeatureFlags.NRFeatureFlag_SwiftInteractionTracing)
        ```
      </td>
    </tr>
  </tbody>
</table>
