---
title: 'Azure Web Apps のトラブルシューティング: App Insights の競合'
tags:
  - Agents
  - NET agent
  - Azure troubleshooting
metaDescription: What to do if no data appears and Microsoft's Application Insights profiler is preventing the New Relic .NET profiler from instrumenting your app.
freshnessValidatedDate: never
translationType: machine
---

## 問題

.NET エージェントがインストールされ、必要な <DNT>**App Settings**</DNT> が設定されていますが、データが表示されず、`D:\Home\Logfiles\NewRelic\` にNew Relic Logsが作成されません。 さらに、Azure Kudu コンソールの<DNT>**Process Explorer**</DNT>を使用してアプリケーションの<DNT>**Environment Variables**</DNT>を検査すると、 `COR_PROFILER_PATH_64`と`COR_PROFILER_PATH_32`が設定され、次の場所を指していることが示されます。

```
D:\Program Files (x86)\SiteExtensions\InstrumentationEngine\1.0.19\Instrumentation64\MicrosoftInstrumentationEngine_x64.dll
```

## 解決

.NET共通言語ランタイム（CLR）では、1つのプロファイラーしか使用できません。Microsoft の Application Insights プロファイラーがシステムにインストールされている場合、New Relic のプロファイラーはどのアプリケーションも計測せず、データも表示されません。詳しくは、 [Microsoft Azure Web Apps のドキュメント](https://docs.microsoft.com/en-us/azure/azure-monitor/app/azure-web-apps) を参照してください。

この問題を解決するには、アプリケーションからApplication Insightsを削除または無効にしてください。

アプリケーション インサイト サイト拡張機能を<DNT>**remove**</DNT>にインストールします:

1. <DNT>**Application > Settings > Application Settings**</DNT>と<DNT>**Save**</DNT>からアプリケーション インサイトに関連するすべての設定を削除します。 これには次のキーが含まれる場合があります。

   * で始まる任意のキー `APPINSIGHTS_`
   * で始まる任意のキー `APPLICATIONINSIGHTS_`
   * で始まる任意のキー `XDT_MicrosoftApplicationInsights_`
   * `DiagnosticServices_EXTENSION_VERSION`
   * `InstrumentationEngine_EXTENSION_VERSION`
   * `MicrosoftInstrumentationEngine_LatestPath`

2. <DNT>**Application > Tools > Extensions**</DNT>から拡張機能を削除します。 拡張機能を右クリックして<DNT>**Delete**</DNT>クリックします。

3. <DNT>**Application Panel**</DNT>から<DNT>**Tile Add-On**</DNT>削除します (存在する場合)。

4. アプリケーションを再起動します。

Azure Portal から<DNT>**disable**</DNT>アプリケーション インサイト にアクセスするには: <DNT>**Settings**</DNT>の下の アプリケーション インサイト パネルに移動します。 これによりアプリが再起動される可能性があります。
