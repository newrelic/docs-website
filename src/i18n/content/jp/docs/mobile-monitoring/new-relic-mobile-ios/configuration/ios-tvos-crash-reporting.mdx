---
title: iOSとtvOSのクラッシュレポート
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: 'By default, New Relic enables crash reporting for your mobile iOS apps to help track and diagnose crashes.'
freshnessValidatedDate: never
translationType: machine
---

エージェントのバージョン4以降では、New Relicはモバイルアプリケーションのクラッシュレポートを作成します。iOS や tvOS のアプリケーションがクラッシュすると、OS がクラッシュレポートを作成し、デバイスに保存します。New Relic は、アプリケーションが次回起動したときにこのレポートをアップロードします。

このレポートと関連するdSYMファイルを使用すると、クラッシュレポートには人間が読める情報を含む完全なスタックトレースが含まれます。そして、New Relic にログインして、クラッシュしたメソッドと行、さらにデバイスと環境の詳細を含む各クラッシュを確認することができます。

## dSYMファイル [#about-dsym]

iOS または tvOS アプリケーションのリリースビルドを作成すると、メソッドやクラスの名前が削除され、機械読み取り可能なメモリアドレスのみが残されます。アプリケーションがクラッシュすると、スタックトレースはこの機械可読なコードで構成されます。

<DNT>**dSYM file**</DNT>は<DNT>**debug symbols**</DNT>の Xcode プロジェクト ファイルです。 これには、最初のクラッシュ レポートを人間が読める情報に変換できるようにするデバッグ シンボルが含まれています。 このプロセスは記号化として知られています。

New Relic は、dSYM のアップロードのためにダイナミックフレームワークをサポートしています。アプリが複数のdSYMファイルを持つダイナミックフレームワークを使用している場合、New Relicは自動的にそれらのファイルをアップロードして使用します。

詳しくは、 [Retrieve and download dSYMs](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/retrieve-upload-dsyms) または [Upload dSYM files](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps) をご覧ください。

## クラッシュレポーターのデバッグ [#debugging]

クラッシュレポートはデフォルトでは有効ですが、状況によっては無効になることもあります。

* <DNT>**If the app is running in a simulator:**</DNT> シミュレーターで実行されているアプリはクラッシュ レポートでは使用できません。 シミュレータのクラッシュはシンボル化できません。

* <DNT>**If the debugger is enabled:**</DNT> アプリケーションごとに一度に登録できる未キャッチ例外ハンドラーは 1 つだけです。 デバッガーを接続した状態で実行している場合、New Relic はクラッシュをキャプチャして報告しません。

* <DNT>**If another crash reporter is enabled:**</DNT> New Relic起動後に別のキャッチされていない例外ハンドラーが登録されている場合、次のエラーメッセージがログに記録されます。

  ```
  The New Relic exception handler has been replaced. 
  This may result in crashes no longer reporting to New Relic.
  ```

## クラッシュレポートの無効化 [#disabling-crash-reporting]

New Relic のクラッシュレポートを無効にするには、以下の API メソッドを呼び出します。

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
        の前に電話する `[NewRelic startWithApplicationToken:...];`

        ```objectivec
        [NewRelic disableFeatures:NRFeatureFlag_CrashReporting];
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
        NewRelic.disableFeatures(NRMAFeatureFlags.NRFeatureFlag_CrashReporting)
        ```
      </td>
    </tr>
  </tbody>
</table>

この呼び出しの詳細については、 `NewRelic.h`ファイルを参照してください。該当する機能フラグの詳細については、 `NewRelicFeatureFlags.h`ファイルを参照してください。
