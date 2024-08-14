---
title: Adicionando um AppDelegate ao seu aplicativo SwiftUI
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Installation
  - SwiftUI
metaDescription: How to prperly setup your SwiftUI app with the New Relic agent.
freshnessValidatedDate: never
translationType: machine
---

Os projetos SwiftUI não são gerados com um arquivo AppDelegate, que é um componente necessário para instalar e configurar a funcionalidade New Relic com o aplicativo iOS/tvOS. Para adicionar um AppDelegate ao seu aplicativo SwiftUI, siga as etapas detalhadas aqui. Antes de adicionar o AppDelegate, siga o [procedimento descrito](/docs/mobile-monitoring/new-relic-mobile-ios/installation/spm-installation) para instalar corretamente o agente New Relic.

1. Adicione um novo arquivo ao seu projeto chamado `AppDelegate`

2. Em seguida, adicione nesse arquivo uma classe chamada `AppDelegate` que herda de `NSObject` e está em conformidade com o protocolo `UIApplicationDelegate` .

3. Na classe `AppDelegate` que você criou, adicione a função `application:didFinishLaunchingWithOptions` .

4. O mais próximo possível do início de `application:didFinishLaunchingWithOptions` , adicione `NewRelic.start(withApplicationToken: "APP_TOKEN")` substituindo `APP_TOKEN` pelo [token do seu aplicativo](/docs/mobile-apps/viewing-your-application-token).

   <Callout variant="important">
     Para garantir a instrumentação adequada, você deve chamar o agente na primeira linha de `didFinishLaunchingWithOptions()` e executar o agente no thread principal. Iniciar a chamada posteriormente, em um thread em segundo plano ou de forma assíncrona pode causar um comportamento inesperado ou instável.
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

5. No objeto principal da estrutura do aplicativo, adicione a seguinte linha: `@UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate`.

   ```swift
   @main
   struct SwiftUI_ExampleApp: App {
       @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
   ```

Isso é tudo que você precisa fazer para adicionar um arquivo `AppDelegate.swift` ao seu aplicativo SwiftUI e iniciar o agente iOS da New Relic da maneira recomendada.

<InstallFeedback/>
