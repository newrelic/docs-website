---
title: 最初のPHPトランザクションは報告されない
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Why you need to run two processes for New Relic's PHP agent to start reporting after initial installation.
freshnessValidatedDate: never
translationType: machine
---

## 問題

New Relic PHP エージェントをインストールし、いくつかのトラフィックを生成しましたが、エージェントが最初のトランザクションを送信しません。

## 解決

これは予想される動作です。 [PHP デーモン](/docs/agents/php-agent/getting-started/new-relic-daemon-processes)が初期状態にある場合、レポートを開始する前に<DNT>**two**</DNT>トランザクションが発生する必要があります。

* 最初のトランザクションでは、PHP デーモンは新しく報告されたアプリケーションを自身のアプリケーション情報テーブルに追加します。
* アプリケーションが追加されると、PHP デーモンは 2 番目のトランザクションを New Relic に報告します。

推奨事項: レポートするプロセスを実行する前に、 `phpinfo()`などの単純な PHP プロセスを実行します。

## 原因

これは、PHP デーモンが期待する動作であり、最初は 2 つのトランザクションが報告される必要があります。
