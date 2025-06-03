---
title: ビットコードアプリのdSYMを取得する
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: How to retrieve dSYMs for crash reports from Bitcode-enabled iOS apps that are monitored with the New Relic agent.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Xcode 14 以降では、App Store は Xcode 14 からのビットコード送信を受け入れなくなりました。プロジェクトで明示的にビットコードを有効にすると、Xcode は「ビットコードを使用したビルドは非推奨です。プロジェクトやターゲット設定を更新して、ビットコードを無効にしてください。」[Xcode 14 のリリース ノート](https://developer.apple.com/documentation/xcode-release-notes/xcode-14-release-notes)には、「ビットコードを使用してアプリをビルドする機能は、将来のアップデートで削除される」と書かれています。

  Xcode 14 以降を使用する場合、ビットコードを使用してリリース ビルドからシンボリック化されたクラッシュ スタックをキャプチャする代わりに、 [自動シンボル アップロード スクリプト](/docs/mobile-monitoring/new-relic-mobile-ios/installation/spm-installation#configure-using-swift-package-manager)を使用してビルドのシンボルをアップロードすることをお勧めします。
</Callout>

ビットコードは、Apple が特定のユーザーのハードウェア用に iOS および tvOS アプリケーションを再コンパイルできるようにする機能です。これにより、エンド ユーザーのダウンロード サイズが小さくなります。このプロセスの詳細については、Apple の[ビットコードとアプリの細線化に関するドキュメント を](https://developer.apple.com/library/watchos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html)参照してください。Apple がアプリをコンパイルすると、dSYM ファイルもコンパイルされます。New Relic が Bitcode 対応アプリのクラッシュを象徴できるようにするには、これらの dSYM ファイルを Apple からダウンロードしてから New Relic にアップロードする必要があります。

## 欠落しているdSYMを特定する [#IdentifyingMissingdSYMs]

Bitcode対応アプリをAppStoreのレビューまたはアドホック配布のためにAppleにアップロードする場合、[モバイルクラッシュレポート](/docs/mobile-monitoring/new-relic-mobile/getting-started/ios-agent-crash-reporting)を適切にシンボル化できるように、dSYMをAppleから手動でダウンロードしてNewRelicにアップロードする必要があります。これらのdSYMは、アプリをアップロードしてから数分以内にXcodeのアーカイブオーガナイザーからダウンロードできます。この状況では、手順に従って[アーカイブを検索し、dSYMをダウンロードします](#Archive)。

アプリにdSYMファイルがない場合は、モバイルモニタリングUIに次の3つのインジケーターが表示されます。

* <DNT>**Banner notification**</DNT>: [<DNT>**Crash report**</DNT>ページ](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-apps-crash-report-dashboard)にバナー警告が表示されます。 警告には次のように書かれています。

  ```
  We were unable to locate your dsym.
  ```

* <DNT>**Upload prompt**</DNT>: <DNT>**Crash type summary**</DNT>ページでは[、dSYM ファイルが見つからない場合はアップロードする](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps#mobile-ui)ように自動的に求められます。

* <DNT>**Machine code**</DNT>: <DNT>**Crash report**</DNT>ページのクラッシュ スタック トレースには、人間が判読できるエラー メッセージではなく、マシン コードが表示されます。

## iTunes ConnectによるdSYMファイルのダウンロード [#iTunes]

アプリに必要なdSYMファイルをダウンロードします。

1. Apple [AppStoreConnect](https://appstoreconnect.apple.com/login)にログインします。

2. <DNT>
     **Apps > (select an app) > TestFlight**
   </DNT>

   を選択します。

3. アプリケーション用のビルドのリストから、dSYMに必要なビルド番号を選択します。

4. <DNT>
     **Build Metadata**
   </DNT>

   タブから

   <DNT>
     **Download dSYM**
   </DNT>

   を選択します。

そして、出来上がったZIPファイルをNew Relicに直接アップロードします。

1. [手動でdSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps#manual-dsym) をアップロードする場合は、手順1を飛ばしてください。
2. このZIPファイルに含まれるdSYMを1つ解凍して、アップロード可能なビルドUUIDを取得してください。(手動アップロード手順の最後のステップに従ってください。)

New Relic が zip ファイルを受け取ると、その zip ファイルに含まれる他のすべての dSYM のビルド UUID が特定されます。

## Xcodeのapp archiveを使ってdSYMファイルをダウンロードします。 [#Archive]

[アプリのバージョンとビルド番号を](#identifyingAppVersion)使用して、Xcode <DNT>**Organizer**</DNT>内の該当するアプリ アーカイブを識別し、dSYM をダウンロードします。

<img
  title="Download dSYMs for mobile app version/build"
  alt="Download dSYMs for mobile app version/build"
  src="/images/mobile_screenshot-full_download-dsym-file.webp"
/>

<figcaption>
  <DNT>**Using Xcode to download dSYMs:**</DNT> <DNT>**Archives**</DNT>タブからアプリとバージョン/ビルドを選択し、 <DNT>**Download dSYMs**</DNT>を選択します。
</figcaption>

1. Xcode

   <DNT>
     **Organizer**
   </DNT>

   を開きます:

   <DNT>
     **Xcode**
   </DNT>

   メニューから

   <DNT>
     **Window > Organizer > Archives > (select a mobile app)**
   </DNT>

   を選択します。

2. <DNT>
     **Version**
   </DNT>

   から、アプリのバージョン (最初にリストされている) とビルド番号 (括弧内のアプリのバージョンの後) に一致するアーカイブを選択します。

3. <DNT>
     **Download dSYMs**
   </DNT>

   を選択します。

dSYMは、ファイル名にアルファベットと数字が含まれていれば、Appleからダウンロードされます。dSYMのファイル名がプロジェクトの依存関係を表すものであれば、ダウンロードは成功しません。

## dSYMのアップロード [#Upload-dSYMs]

[dSYMの場所がわかったら、指示に従って、zip圧縮されたdSYMごとにdSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps) をアップロードしてください。
