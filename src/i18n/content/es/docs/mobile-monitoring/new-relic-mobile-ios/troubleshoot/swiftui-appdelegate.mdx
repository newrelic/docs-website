---
title: Agregar un AppDelegate a su aplicación SwiftUI
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Installation
  - SwiftUI
metaDescription: How to prperly setup your SwiftUI app with the New Relic agent.
freshnessValidatedDate: never
translationType: machine
---

Los proyectos SwiftUI no se generan con un archivo AppDelegate, que es un componente necesario para instalar y configurar la funcionalidad New Relic con la aplicación iOS/tvOS. Para agregar un AppDelegate a su aplicación SwiftUI, siga los pasos que se detallan aquí. Antes de agregar AppDelegate, siga el [procedimiento descrito](/docs/mobile-monitoring/new-relic-mobile-ios/installation/spm-installation) para instalar correctamente el agente New Relic.

1. Agregue un nuevo archivo a su proyecto llamado `AppDelegate`

2. Luego, en ese archivo agregue una clase llamada `AppDelegate` que hereda de `NSObject` y se ajusta al protocolo `UIApplicationDelegate` .

3. En la clase `AppDelegate` que creó, agregue la función `application:didFinishLaunchingWithOptions` .

4. Lo más cerca posible del inicio de `application:didFinishLaunchingWithOptions` , agregue `NewRelic.start(withApplicationToken: "APP_TOKEN")` reemplazando `APP_TOKEN` con su [token de aplicación](/docs/mobile-apps/viewing-your-application-token).

   <Callout variant="important">
     Para garantizar una instrumentación adecuada, debe llamar al agente en la primera línea de `didFinishLaunchingWithOptions()` y ejecutar el agente en el hilo principal. Iniciar la llamada más tarde, en un subproceso en segundo plano o de forma asincrónica puede provocar un comportamiento inesperado o inestable.
   </Callout>

   ```swift
   import UIKit
   import NewRelic

   class AppDelegate: NSObject, UIApplicationDelegate {
       func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
           NewRelic.start(withApplicationToken: "APP_TOKEN")
           return true
       }
   }
   ```

5. En el objeto de estructura de la aplicación principal, agregue la siguiente línea: `@UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate`.

   ```swift
   @main
   struct SwiftUI_ExampleApp: App {
       @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
   ```

Eso es todo lo que necesita hacer para agregar un archivo `AppDelegate.swift` a su aplicación SwiftUI e iniciar el agente New Relic iOS de la forma recomendada.

<InstallFeedback/>
