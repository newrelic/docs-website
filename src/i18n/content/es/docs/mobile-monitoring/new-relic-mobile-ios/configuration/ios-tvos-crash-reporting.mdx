---
title: Informes de fallos de iOS y tvOS
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: 'By default, New Relic enables crash reporting for your mobile iOS apps to help track and diagnose crashes.'
freshnessValidatedDate: never
translationType: machine
---

Para la versión 4 del agente o superior, New Relic genera informes de fallos para su aplicación móvil. Cuando una aplicación iOS o tvOS falla, el sistema operativo crea un informe de fallas y lo almacena en el dispositivo. New Relic carga este informe la próxima vez que se lanza la aplicación.

Utilizando este informe y cualquier archivo dSYM relevante, el informe de fallos incluye el rastreo completo de la pila con información legible por humanos. Luego puede log en New Relic y ver cada falla, incluido el método y la línea donde falló, además de los detalles del dispositivo y el entorno.

## Archivos dSYM [#about-dsym]

Cuando crea una versión de lanzamiento de una aplicación iOS o tvOS, los nombres de los métodos y clases se eliminan, dejando solo direcciones de memoria legibles por máquina. Cuando la aplicación falla, el rastreo del stack consta de este código legible por máquina.

Un <DNT>**dSYM file**</DNT> es un archivo de proyecto Xcode para <DNT>**debug symbols**</DNT>. Contiene los símbolos de depuración que permiten la traducción del informe de fallo inicial a información legible por humanos. Este proceso se conoce como simbolización.

New Relic tiene soporte framework dinámico para la carga de dSYM. Si su aplicación usa un framework dinámico con múltiples archivos dSYM, New Relic carga y usa esos archivos automáticamente.

Para obtener más información, consulte [Recuperar y descargar archivos dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/retrieve-upload-dsyms) o [Cargar archivos dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps).

## Depurar el reportero de fallas [#debugging]

Los informes de fallos están habilitados de forma predeterminada, pero hay algunas circunstancias en las que se deshabilitarán:

* <DNT>**If the app is running in a simulator:**</DNT> Una aplicación que se ejecuta en el simulador no se puede utilizar con informes de fallos. Los fallos del simulador no se pueden simbolizar.

* <DNT>**If the debugger is enabled:**</DNT> Sólo puede haber un controlador de excepciones no detectadas registrado a la vez por aplicación. Si se ejecuta con el depurador adjunto, New Relic no capturará ni informará fallas.

* <DNT>**If another crash reporter is enabled:**</DNT> Si se registra otro controlador de excepciones no detectado después de que se inicia New Relic, se registra este mensaje de error:

  ```
  The New Relic exception handler has been replaced. 
  This may result in crashes no longer reporting to New Relic.
  ```

## Desactivar informes de fallos [#disabling-crash-reporting]

Para deshabilitar los informes de fallas de New Relic, llame al siguiente método API:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
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
        [NewRelic disableFeatures:NRFeatureFlag_CrashReporting];
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
        NewRelic.disableFeatures(NRMAFeatureFlags.NRFeatureFlag_CrashReporting)
        ```
      </td>
    </tr>
  </tbody>
</table>

Para obtener más información sobre esta llamada, consulte el archivo `NewRelic.h` . Para obtener más información sobre los indicadores de características aplicables, consulte el archivo `NewRelicFeatureFlags.h` .
