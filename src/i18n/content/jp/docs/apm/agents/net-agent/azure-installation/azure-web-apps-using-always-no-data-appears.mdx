---
title: 'Azure Web Apps のトラブルシューティング: Always On の問題'
tags:
  - Agents
  - NET agent
  - Azure troubleshooting
metaDescription: Workarounds if you have problems after installing New Relic's .NET agent on a Windows Azure Web App.
freshnessValidatedDate: never
translationType: machine
---

## 問題

[Microsoft Azure Web Apps](/docs/agents/net-agent/azure-installation/install-app-azure-web-apps)から New Relic の .NET エージェントをインストールし、Azure の`Always On`設定を使用しています。いくらかのトラフィックを生成し、アプリのデータ収集が開始されるまで数分待った後でも、データは APM ユーザー インターフェイスに表示されません。

## 解決

.NET エージェント バージョン[8.22.181.0 以降](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-8221810)、エージェントに干渉することなく、Azure の`Always On`設定を有効にすることができます。`Always On`を使用したい場合は、単に[エージェントを更新して](/docs/agents/net-agent/azure-installation/install-net-agent-azure-web-apps)ください。

## .NET Framework 4.0以下のワークアラウンド [#4-0-framework]

アプリケーション[が.NET Framework 4.0 以下の](/docs/agents/net-agent/troubleshooting/technical-support-net-framework-40-or-lower)場合、Azure の[`Always On`設定](https://azure.microsoft.com/en-us/documentation/articles/web-sites-create-web-jobs/)がエージェントに干渉します。 この機能は、Azure の<DNT>**Basic**</DNT>および<DNT>**Standard**</DNT>モードでのみ使用できます。

`Always On`設定により、環境変数`APP_POOL_ID`が設定されなくなります。New Relic の .NET エージェントは、アプリ名を取得するためにこの環境変数を必要とします。エージェントがアプリケーション名を特定できない場合、エージェントは起動しません。

.NET Framework 4.0以下をご使用の場合は、以下の回避策をお試しください。

Azure Portal で Microsoft の<DNT>**Standard**</DNT>または<DNT>**Basic**</DNT>ティアを使用している場合は、 `Always On`設定が無効になっていることを確認してください。

1. Azure ポータルで、

   <DNT>
     **(your app) > Settings > Application Settings**
   </DNT>

   を選択します。

2. `Always On`トグルを`Off`に設定します。

他に試すことができるオプションをいくつか紹介します。 これらが機能しない場合は、 <DNT>**must**</DNT> [`Always On`設定をオフにします](#4-0-framework)。

<CollapserGroup>
  <Collapser
    id="name-app"
    title="アプリの名前にはKuduを使用します。"
  >
    Kudu を使用してローカル<DNT>**`newrelic.config`**</DNT>でアプリケーションに名前を付けるには:

    1. Microsoft Azure ポータルから<DNT>**(your app) > Tools > Kudu**</DNT>を選択し、次に<DNT>**Go**</DNT>を選択します。

    2. <DNT>**Debug Console > CMD**</DNT>を選択します。

    3. <DNT>**Site > wwwroot > newrelic**</DNT>を選択します。

    4. 編集を選択<Icon name="fe-edit-2"/>`newrelic.config`のアイコンを追加し、次を追加します。

       ```xml
       <application>
         <name>Your app's name</name>
       </application>
       ```

    5. 保存してアプリケーションを再起動してください。
  </Collapser>

  <Collapser
    id="name-app-web-config"
    title="アプリの名前にはapp/web.configを使います。"
  >
    <Callout variant="important">
      このオプションは、一時的な修正にしかならないことがわかっています。.NETエージェントのレポートが断続的に停止する可能性があります。
    </Callout>

    `app/web.config`ファイルでアプリケーションに名前を付けるには:

    1. 次のキーを`appSettings`に追加します:

       ```xml
       <appSettings>
         <add key="NewRelic.AppName" value="Your app's name" />
       </appSettings>
       ```

    2. インスタンスを再起動してください。
  </Collapser>

  <Collapser
    id="pinger"
    title="Synthetic monitoringを使ってウェブサイトを監視する。"
  >
    `Always On`の使用状況に応じて、 [Synthetic モニタリング](/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics)を使用して Web サイトをアクティブに保つことができます。

    * `Always On` 設定を使用して

      <DNT>
        **are not**
      </DNT>

      する場合は、外形監視の無料[pingerモニター](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#monitor-type-ping)をお試しください。

    * <DNT>
        **are**
      </DNT>

      で`Always On`設定を使用する場合、外形監視はワーカー ロールの インフラストラクチャ にアクセスできる必要があります。 できない場合は、[外形監視スクリプト モニター](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers)を使用してサイトで実行してみてください。
  </Collapser>
</CollapserGroup>
