---
title: AppDelegate を SwiftUI アプリに追加する
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Installation
  - SwiftUI
metaDescription: How to prperly setup your SwiftUI app with the New Relic agent.
freshnessValidatedDate: never
translationType: machine
---

SwiftUI プロジェクトは、iOS/tvOS アプリケーションで New Relic 機能をインストールおよび設定するために必要なコンポーネントである AppDelegate ファイルでは生成されません。 SwiftUI アプリに AppDelegate を追加するには、ここで説明する手順に従ってください。 AppDelegate を追加する前に、[概説された手順](/docs/mobile-monitoring/new-relic-mobile-ios/installation/spm-installation)に従って New Relic エージェントを正しくインストールします。

1. という名前のプロジェクトに新しいファイルを追加します `AppDelegate`

2. 次に、そのファイルに、 `NSObject` から継承し、 `UIApplicationDelegate` プロトコルに準拠する `AppDelegate` という名前のクラスを追加します。

3. 作成した `AppDelegate` クラスに、 `application:didFinishLaunchingWithOptions` 関数を追加します。

4. `application:didFinishLaunchingWithOptions` の先頭のできるだけ近くに、 `NewRelic.start(withApplicationToken: "APP_TOKEN")` を追加して、 `APP_TOKEN` [アプリケーション トークン](/docs/mobile-apps/viewing-your-application-token)に置き換えます。

   <Callout variant="important">
     適切なインストゥルメンテーションを確保するために、`didFinishLaunchingWithOptions()`の先頭行でエージェントを呼び出し、メインスレッドでエージェントを実行する必要があります。呼び出しを後回しにして、バックグラウンドスレッドで実行したり、非同期で実行したりすると、想定外の動作や不安定な動作を引き起こす場合があります。
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

5. アプリのメイン構造オブジェクトに次の行を追加します: `@UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate` .

   ```swift
   @main
   struct SwiftUI_ExampleApp: App {
       @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
   ```

SwiftUI アプリケーションに `AppDelegate.swift` ファイルを追加し、推奨される方法で New Relic iOS エージェントを起動するために必要な作業はこれだけです。

<InstallFeedback/>
