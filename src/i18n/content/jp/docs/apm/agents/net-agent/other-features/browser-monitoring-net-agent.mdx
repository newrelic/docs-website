---
title: ブラウザ監視と.NETエージェント
tags:
  - Agents
  - NET agent
  - Other features
metaDescription: How to install browser monitoring automatically through the .NET APM agent.
freshnessValidatedDate: never
translationType: machine
---

.NET エージェントを使用すると、Web ページに[<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)インストゥルメンテーションを追加できます。 .NET エージェントでbrowserを使用する前に、 [.NET エージェントのリリース ノート](/docs/release-notes/agent-release-notes/net-release-notes)を参照し、[最新の .NET エージェント リリースがインストールされて](/docs/agents/net-agent/installation/install-net-agent-windows)いることを確認してください。

[.NET エージェントの要件](/docs/agents/net-agent/getting-started/introduction-new-relic-net#extend) から [ブラウザモニタリングのインストール](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent) に従います。その後、このドキュメントの手順に従って、.NET エージェントを手動でインスツルメンテーションします。

## オートインストルメント [#auto_instrumentation]

<Callout variant="important">
  自動インストゥルメントは、.NET フレームワーク Web アプリおよび ..NET Core v6.0 以降の Web アプリでのみ使用できます。 ASP.NET Core v5.0 以前のアプリケーションでは、.NET エージェントによって監視されている場合でも、自動インストゥルメントは使用できません。
</Callout>

browser自動インストゥルメンテーションを使用すると、.NET エージェントは、`content-type` が `text/html` であり、ページ内に `<head>` タグも含まれるすべてのページにbrowser JavaScript ヘッダーを自動的に挿入します。 [browser自動インストゥルメントは、](/docs/agents/net-agent/configuration/net-agent-configuration#browsermon-autoInstrument) .NET フレームワーク Web アプリでは既定で有効になっていますが、..NET Core v6 以降の Web アプリでは既定で無効になっています。 詳細については[、「.NET Core v6+ のbrowser自動インストゥルメントの有効化」を](#enable_netcore6plus)参照してください。

`<head>`タグの検索はDOMの先頭から始まります。 .NETエージェントは、コンテンツをユーザーにストリーミングする前に、HTTP応答フィルターを使用してページを変更する`HttpModule`を追加することでJavaScriptヘッダーを挿入します。

初めて自動計測を有効にするときは、aspxページが再コンパイルされるように、 `asp.net`キャッシュディレクトリをクリーンアップする必要がある場合があります。次のコマンドを使用します。

```bash
flush_dotnet_temp.cmd
```

このインジェクションでは、 `content-type`が正しく設定されていないと、以前に機能していたページが機能しなくなる可能性があります。修正するには、アプリの`content-types`を確認して更新するか、[自動計測を無効](/docs/agents/net-agent/features/page-load-timing-net#disable-instrumentation)にします。

## エージェントAPIによる手動での計測 [#manual_instrumentation]

自動計測を有効にできない場合でも、New Relic .NET エージェント API を使用し、ページ内に適切なコードを含めることで、ブラウザエージェントを手動で組み込むことができます。

1. `NewRelic.Api.Agent.dll`をダウンロードするには、インストールを再実行して`.dll`を参照してください。

   * New Relic .NET エージェント ディレクトリから、

     <DNT>
       **New Relic.Net**
     </DNT>

     エージェント セクションを選択し、

     <DNT>
       **API Assembly**
     </DNT>

     を選択します。

   * NuGet: `Install-package NewRelic.Agent.Api`を実行して

     <DNT>
       **.dll**
     </DNT>

     インストールし、参照します。

2. New Relic .NET エージェント API を呼び出すように Web アプリケーションを設定するには、プロジェクトに <DNT>**`NewRelic.Api.Agent.dll`**</DNT> への参照を追加します。

3. オプション: Web サーバーにデプロイされたアプリケーション ディレクトリを変更する場合は、 <DNT>**`NewRelic.Api.Agent.dll`**</DNT>アプリケーションの<DNT>**`bin`**</DNT>ディレクトリにコピーします。

4. `<head>`タグでAPIを呼び出します。 `X-UA-COMPATIBLE http-equiv`属性のメタタグが存在する場合は、そのメタタグの後に設定します。

<CollapserGroup>
  <Collapser
    id="net-web-forms"
    title=".NET Web Forms ビューエンジン"
  >
    .NET Webフォームビューエンジンを使用する場合は、 `:` `=`を使用してください。このようにして、ビューエンジンはAPIから返されたHTMLの文字列をHTML / JavaScriptとして認識し、適切にレンダリングします。

    マスターページで.NETASPWebフォームを使用している場合は、マスターページの`<head>`タグの下にある[`GetBrowserTimingHeader()`](/docs/agents/net-agent/net-agent-api/getbrowsertimingheader-net-agent)を呼び出して、ヘッダーを手動で追加します。

    ```aspnet
    <%= NewRelic.Api.Agent.NewRelic.GetBrowserTimingHeader() %>
    ```

    で名前空間をインポートします。

    ```aspnet
    <%@ Import Namespace="NewRelic.Api.Agent" %>
    ```
  </Collapser>

  <Collapser
    id="razor"
    title="Razorのような他のビューエンジン"
  >
    [Razor](https://en.wikipedia.org/wiki/ASP.NET_Razor)などの他のビュー エンジンの場合は、 [`GetBrowserTimingHeader()`](/docs/agents/net-agent/net-agent-api/getbrowsertimingheader-net-agent)メソッドを使用してヘッダー文字列を生成できます。 以下は Razor ベースのビューの例です。

    ```razor
    <!DOCTYPE html>
    <html lang="en">
      <head>
        @Html.Raw(NewRelic.Api.Agent.NewRelic.GetBrowserTimingHeader())
        ...
      </head>
    </html>
    ```
  </Collapser>

  <Collapser
    id=".net-mvc"
    title=".NET MVC"
  >
    .NET MVCを使用する場合は、 `Html.Raw`ヘルパーを呼び出します。このようにして、.NETMVCはAPIから返されたHTMLの文字列をHTML/ JavaScriptとして認識し、適切にレンダリングします。
  </Collapser>
</CollapserGroup>

## コピー/ペーストによる手動インストゥルメンテーション [#copy-paste]

ブラウザ監視を有効にすると、アプリの Web ページに JavaScript スニペットを手動で挿入できます。 コピー/貼り付けオプションを使用すると、Web ページのパフォーマンスを監視するために必要な JavaScript スニペットの正確な配置を制御できます。 コピー/貼り付けによるブラウザ監視を有効にする手順については、 [ブラウザのドキュメント](/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/#copy-paste)を参照してください。

## 計装の無効化 [#disable_instrumentation]

インストゥルメンテーションを無効にするには

<CollapserGroup>
  <Collapser
    id="disable_auto-instrumentation"
    title="オートインストルメントの無効化"
  >
    自動インストゥルメンテーションを完全に無効にするには、 <DNT>**`newrelic.config`**</DNT>を編集し、 [`browserMonitoring` `autoInstrument`フラグ](/docs/agents/net-agent/installation-configuration/net-agent-configuration#browsermon-autoInstrument)を`false`に設定します。

    ```xml
    <!-- disable auto instrumentation -->
    <browserMonitoring autoInstrument="false"/>
    ```

    <Callout variant="important">
      フラグを変更したり、.NETエージェントをアンインストールしたりした場合は、必ずキャッシュを再度フラッシュし、コンパイル済みのファイルからエージェントへの参照が削除されるようにしてください。
    </Callout>
  </Collapser>

  <Collapser
    id="disable_instrumentation_pageview"
    title="特定のビューでの自動計測の無効化"
  >
    特定のビューで自動インストルメンテーションのみを無効にするには、エージェントAPI呼び出し`DisableBrowserMonitoring()`を使用します。ブラウザスクリプトが不要または不要なビューにこの呼び出しを追加します。このAPI呼び出しを、無効にするビューの上部にできるだけ近づけてください。
  </Collapser>

  <Collapser
    id="disable_instrumentation_manually"
    title="特定のビューで自動および手動の計装を無効にする"
  >
    個々のWebページの自動インストルメンテーションと手動インストルメンテーションの両方を無効にするには、エージェントAPI呼び出し[`DisableBrowserMonitoring(true)`](/docs/agents/net-agent/net-agent-api/disablebrowsermonitoring-net-agent)を使用します。
  </Collapser>
</CollapserGroup>

## トラブルシューティング

[ブラウザのタイミングデータが表示されない場合は、トラブルシューティングの手順に従ってください](/docs/agents/net-agent/troubleshooting/no-page-load-timing-data-appears-net) 。

## .NET Core v6+ Web アプリケーションのbrowser自動インストレーションを有効にする [#enable_netcore6plus]

.NET Core v6+ Web アプリでbrowser自動インストゥルメントを有効にするには (.NET エージェント v10.19.2 以降が必要):

1. <DNT>**`newrelic.config`**</DNT>を編集し、 [`browserMonitoring` `autoInstrument`フラグ](/docs/agents/net-agent/installation-configuration/net-agent-configuration#browsermon-autoInstrument)を`true`に設定して、自動インストゥルメンテーションがグローバルに有効になっていることを確認します。

   ```xml
   <!-- enable auto instrumentation globally -->
   <browserMonitoring autoInstrument="true"/>
   ```

2. <DNT>**`newrelic.config`**</DNT>を編集し、 `appSettings`セクションに新しい項目を追加して (または、 `appSettings`セクションが存在しない場合は追加して)、..NET Core 6+ Web アプリの自動インストゥルメンテーションを有効にします - これは、 `web.config`ファイルの`appSettings`セクションと同じでは**ない**ことに注意してください。

   ```xml
   <!-- enable .NET Core 6+ instrumentation -->
   <appSettings>
     <add key="EnableAspNetCore6PlusBrowserInjection" value="true" />
   </appSettings>
   ```

Web アプリケーションとの互換性を確認するために、この機能を本番環境以外の環境で徹底的にテストすることをお勧めします。 この機能に関して問題が発生した場合は、[サポートにお問い合わせ](/docs/new-relic-solutions/solve-common-issues/find-help-use-support-portal/)ください。
