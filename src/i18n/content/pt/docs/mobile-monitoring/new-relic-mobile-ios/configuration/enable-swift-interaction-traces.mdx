---
title: Habilite o rastreamento da interação do Swift
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: How to instrument Swift dynamic method lookups with New Relic's iOS instrumentation feature flag.
freshnessValidatedDate: never
translationType: machine
---

As pesquisas de método dinâmico por padrão para desenvolvimento iOS foram removidas com Swift. Isso interrompe a instrumentação do método padrão do agente. Por exemplo, o rastreamento de interação nas classes Swift está desabilitado por padrão, mas você pode reativá-lo.

As interações em um aplicativo Swift são capturadas se [classes e métodos de instrumentos forem usados automaticamente](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios) ou ao definir interações personalizadas. No entanto, se uma classe Swift criar subclasses para qualquer uma dessas classes padrão, siga estas etapas para capturar a interação.

## Habilitar pesquisa de método dinâmico [#enable-dynamic]

Para reativar a pesquisa de método dinâmico método por método em Swift, adicionando o modificador de declaração `dynamic` . Por exemplo:

```swift
class MyViewController : UIViewController {
    override dynamic func viewDidLoad() {
        super.viewDidLoad()
        ...
    }
}
```

Para cada função que o New Relic [instrumento automaticamente](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios), certifique-se de adicionar este modificador toda vez que você criar uma subclasse e substituir no Swift.

## Habilitar instrumentação Swift [#swift-instrumentation]

Depois de adicionar a palavra-chave `dynamic` às substituições de método, você poderá reativar a instrumentação Swift chamando o seguinte método:

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
        Ligue antes de `[NewRelic startWithApplicationToken:...];`

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
        Ligue antes de `NewRelic.start(withApplicationToken:)`

        ```swift
        NewRelic.enableFeatures(NRMAFeatureFlags.NRFeatureFlag_SwiftInteractionTracing)
        ```
      </td>
    </tr>
  </tbody>
</table>
