---
title: Habilitar Swift traza de interacción
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: How to instrument Swift dynamic method lookups with New Relic's iOS instrumentation feature flag.
freshnessValidatedDate: never
translationType: machine
---

Las búsquedas de métodos dinámicos por defecto para el desarrollo de iOS se eliminaron con Swift. Esto interrumpe la instrumentación del método predeterminado del agente. Por ejemplo, el seguimiento de interacciones en las clases de Swift está deshabilitado de forma predeterminada, pero puedes volver a habilitarlo.

La interacción en una aplicación Swift se captura si se utilizan [clases y métodos instrumentados automáticamente](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios) o al definir una interacción personalizada. Sin embargo, si una clase Swift crea subclases para cualquiera de estas clases predeterminadas, siga estos pasos para capturar la interacción.

## Habilitar la búsqueda de métodos dinámicos [#enable-dynamic]

Para volver a habilitar la búsqueda dinámica de métodos método por método en Swift, agregue el modificador de declaración `dynamic` . Por ejemplo:

```swift
class MyViewController : UIViewController {
    override dynamic func viewDidLoad() {
        super.viewDidLoad()
        ...
    }
}
```

Para cada función que New Relic [instrumentó automáticamente](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide/#method-list-ios), asegúrese de agregar este modificador cada vez que cree una subclase y la anule en Swift.

## Habilitar instrumentación Swift [#swift-instrumentation]

Después de agregar la palabra clave `dynamic` a las anulaciones de su método, puede volver a habilitar la instrumentación de Swift llamando al siguiente método:

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
        Llame antes de `[NewRelic startWithApplicationToken:...];`

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
        Llame antes de `NewRelic.start(withApplicationToken:)`

        ```swift
        NewRelic.enableFeatures(NRMAFeatureFlags.NRFeatureFlag_SwiftInteractionTracing)
        ```
      </td>
    </tr>
  </tbody>
</table>
