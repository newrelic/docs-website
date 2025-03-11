---
title: ブラウザインジェクション。ヘルスチェックの競合
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting tips for your New Relic .NET agent if your webpage health check is failing.
freshnessValidatedDate: never
translationType: machine
---

## 問題

ヘルスチェックとして、ロードバランサー (F5 ロードバランサーなど) は、指定された Web ページに定期的に ping を送信します。場合によっては、[ブラウザーの自動挿入が](/docs/agents/net-agent/additional-installation/new-relic-browser-net-agent)有効になっている場合、 [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)ページヘッダーに追加された JavaScript スニペットにより、このチェックが失敗します。ロード バランサーの設定によっては、トラフィックが他のアプリケーション インスタンスにルーティングされる可能性があります。

## 解決

これを防ぐには、 [`requestPathsExcluded`サブ要素](/docs/agents/net-agent/configuration/net-agent-configuration#browser-path-exclusion)を.NETエージェントの構成に追加します。これは、アプリケーション内のパスの仮想ディレクトリへの参照であり、除外するパスの完全なURLではありません。

たとえば、ロードバランサーが`https://www.mywebsite.com/healthmonitor/`のウェブページにpingを実行するように設定されている場合は、パスの正規表現値として`/healthmonitor/`を挿入します。

```xml
<!-- If you use both the Exclude and Attribute elements
     the Exclude element must be listed first. -->
<browserMonitoring autoInstrument="true">
  <requestPathsExcluded>
    <path regex="/healthmonitor/"/>
  </requestPathsExcluded>
</browserMonitoring>
```

## 原因

ブラウザエージェント [ウェブページのヘッダーに注入されるJavaScriptスニペットです。ヘルスチェックモニターがサイトの健全性を確認するために必要な情報を表示できなくなることがあります。ヘルスチェックのページがあるパスを除外することで、エージェントが特定のページのヘッダーにスニペットを注入するのを防ぐことができます。](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent)

[](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent)
