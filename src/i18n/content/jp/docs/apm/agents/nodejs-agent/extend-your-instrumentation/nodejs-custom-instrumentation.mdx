---
title: Node.jsカスタムインストゥルメンテーション
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: 'Expand Node.js instrumentation in New Relic for non-web transactions (frameworks, databases, segments, etc.). Use custom tracers to track async work.'
freshnessValidatedDate: never
translationType: human
---

Node.js用New Relicは、大半の標準的なウェブリクエストを自動的にインストゥルメントしますが、時には拡張インストゥルメンテーションを必要とする場合もあります。エージェントの[カスタムインストゥルメンテーションAPI](https://newrelic.github.io/node-newrelic/API.html)を使用すると、サポートされていない他の[ウェブフレームワーク](#web-framework)、[データストア](#datastore)、[メッセージサービスクライアント](#message-client)に向けてインストゥルメンテーションを作成できます。

Node.jsエージェントのカスタムインストゥルメンテーションAPIでは、以下を行うことができます：

* [ウェブトランザクション](#web-txn)の作成（トランザクションを自動的に作成できないウェブソケットなどで便利）。
* Web以外の[バックグラウンドトランザクション](#background-txn)の作成（バックグラウンドジョブの記録に便利）。
* コードの[特定のセクションをターゲットにして](#expanding-instrumentation)さらなる分析を実行。

## エージェントのバージョン要件 [#version]

このドキュメント内のカスタムインストゥルメンテーション方法は、[Node.jsエージェントのバージョン2.0.0](/docs/release-notes/agent-release-notes/nodejs-release-notes)から利用できます。カスタムインストゥルメンテーションAPI v1.xを使用したインストゥルメンテーションの詳細に関しては、[レガシーNode.jsカスタムインストゥルメンテーション](/docs/agents/nodejs-agent/supported-features/nodejs-v1x-custom-instrumentation-legacy)のドキュメントを参照してください。

## 未対応のWebフレームワークをインストゥルメントする [#web-framework]

Node.jsエージェントバージョン2.0.0より、New Relicは追加のウェブフレームワークに対するインストゥルメンテーション拡張のためにAPIを提供しています。詳細については、GitHubの[サンプルアプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-webframework)を参照してください。

## 未対応のメッセージサービスクライアントをインストゥルメントする [#message-client]

Node.jsエージェントバージョン2.0.0より、New Relicは追加のメッセージサービスライブラリに対するインストゥルメンテーション拡張のためにAPIを提供しています。詳細については、GitHubの[サンプルアプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-messages)を参照してください。

## 未対応のデータストアをインストゥルメントする [#datastore]

Node.jsエージェントバージョン2.0.0より、New Relicは追加のデータストアライブラリに対するインストゥルメンテーションを拡張するためにAPIを提供しています。詳細については、GitHubの[サンプルアプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-datastore)を参照してください。

## Webトランザクションをインストゥルメントする [#web-txn]

カスタム[ウェブトランザクション](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm)を作成するには、`startWebTransaction`を呼び出してトランザクションを開始します。詳細については、GitHubの[サンプルアプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/0a036fd669b4b47b8afbc7add8696980f799f0da/custom-instrumentation/start-web-transaction)を参照してください。

リンクされたサンプルアプリケーションで得られるのは、作成したトランザクションに関する基本的なタイミングデータのみとなります。特定のフレームワークに関する、より複雑なタイミングデータとトランザクションの命名を作成するには、[Node.js APIドキュメント](https://newrelic.github.io/node-newrelic/API.html#instrumentWebframework)ならびにGitHubにある[関連のWebFrameworkサンプルアプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-webframework)を参照してください。

## バックグラウンドトランザクションをインストゥルメントする [#background-txn]

カスタムトランザクションを使用して、[Web以外のトランザクション](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions)（バックグラウンドトランザクション）をインストゥルメントできます。たとえば：

* ご利用のアプリケーションにおける周期的な仕事
* リクエスト完了後も続く作業

バックグラウンドタスクをインストゥルメントするには、ハンドラーで[`startBackgroundTransaction`](https://newrelic.github.io/node-newrelic/API.html#startBackgroundTransaction)を呼び出してバックグラウンドトランザクションを開始します。詳細については、GitHubの[サンプルアプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/background-transactions)を参照してください。

## トランザクション内でインストゥルメンテーションを拡張する [#expanding-instrumentation]

[APIにあるインストゥルメンテーション登録手段](https://newrelic.github.io/node-newrelic/API.html#instrument)を使用して、インストゥルメンテーションを作成することができます。インストゥルメンテーションAPIを使用してインストゥルメンテーションを書いた場合、関連オブジェクト上で「モンキーパッチ」メソッド（置換関数）を用いてメトリクスと命名をより詳細に指定できるようになります。他のオプションとして、既にインストゥルメントされたウェブトランザクションを可視化したり、自動的にインストゥルメントされないデータベースやその他のトランザクション内作業に関するインサイトを得たりすることができます。

これを行うには、コールバックをカスタムトレーサーでラップします。カスタムトレーサーは、特定の関数やデータベース呼び出しなど、既存トランザクション内の追加セグメントに関する具体的なメトリクスの作成・収集を行います。詳細については、GitHubの[サンプルアプリケーション](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/segments)を参照してください。