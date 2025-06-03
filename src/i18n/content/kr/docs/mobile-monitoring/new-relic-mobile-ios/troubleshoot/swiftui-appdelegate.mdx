---
title: SwiftUI 앱에 AppDelegate 추가
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Installation
  - SwiftUI
metaDescription: How to prperly setup your SwiftUI app with the New Relic agent.
freshnessValidatedDate: never
translationType: machine
---

SwiftUI 프로젝트는 iOS/tvOS에서 뉴렐릭 기능을 설치하고 구성하는 데 필요한 구성 요소인 AppDelegate 파일로 생성하지 않습니다. SwiftUI 앱에 AppDelegate를 추가하려면 여기에 설명된 단계를 따르세요. AppDelegate를 추가하기 전에 [간략한 절차에](/docs/mobile-monitoring/new-relic-mobile-ios/installation/spm-installation) 따라 뉴렐릭 에이전트를 올바르게 설치하세요.

1. 이름이 지정된 프로젝트에 새 파일을 추가합니다. `AppDelegate`

2. 그런 다음 해당 파일에 `NSObject` 에서 상속되고 `UIApplicationDelegate` 프로토콜을 준수하는 `AppDelegate` 이라는 클래스를 추가합니다.

3. 생성한 `AppDelegate` 클래스에 `application:didFinishLaunchingWithOptions` 함수를 추가합니다.

4. 가능한 한 `application:didFinishLaunchingWithOptions` 의 시작 부분에 가깝게 `APP_TOKEN` [애플리케이션 토큰](/docs/mobile-apps/viewing-your-application-token) 으로 바꾸는 `NewRelic.start(withApplicationToken: "APP_TOKEN")` 추가하세요.

   <Callout variant="important">
     적절한 계측을 보장하려면 `didFinishLaunchingWithOptions()` 의 첫 번째 줄에서 에이전트를 호출하고 기본 스레드에서 에이전트를 실행해야 합니다. 나중에, 백그라운드 스레드에서 또는 비동기적으로 호출을 시작하면 예기치 않거나 불안정한 동작이 발생할 수 있습니다.
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

5. 기본 앱 구조 개체에서 `@UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate` 줄을 추가합니다.

   ```swift
   @main
   struct SwiftUI_ExampleApp: App {
       @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
   ```

이것이 SwiftUI 애플리케이션에 `AppDelegate.swift` 파일을 추가하고 권장되는 방식으로 New Relic iOS 에이전트를 시작하기 위해 수행해야 할 전부입니다.

<InstallFeedback/>
