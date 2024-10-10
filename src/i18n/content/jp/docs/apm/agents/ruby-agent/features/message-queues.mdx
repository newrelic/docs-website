---
title: メッセージキュー
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'New Relic for Ruby supports the Bunny RabbitMQ client library, giving you insight into the performance of your message processing.'
freshnessValidatedDate: never
translationType: machine
---

New RelicのRubyエージェントは、 [Bunny RabbitMQクライアントライブラリ](https://rubygems.org/gems/bunny) をサポートしており、受信メッセージと送信メッセージの両方について、メッセージ処理のパフォーマンスを把握することができます。

APM UI には、RabbitMQ メッセージ受信 (メッセージのサブスクライブ/消費) によって開始されたトランザクションが<DNT>**Message**</DNT>バックグラウンド タスクとして表示されます。 RabbitMQ によるメッセージの作成は、遺跡トレースにも表示されます。

## 要件

New Relicが必要です [Rubyエージェントバージョン4.3.0以上](/docs/release-notes/agent-release-notes/ruby-release-notes) 。インスツルメンテーションは、 [サポートされているバージョンのBunny AMQP](/docs/agents/ruby-agent/getting-started/ruby-agent-requirements-supported-frameworks#other) では自動的に行われ、追加の設定は必要ありません。

## バックグラウンドタスクのパフォーマンス改善 [#background]

Webアプリケーションの応答性を向上させる方法の一つとして、バックグラウンドプロセスに作業を委ねる方法があります。このプロセス間通信には、メッセージキューがよく使われます。

メッセージキューイングシステムのコンテキストでは、アプリケーションは通常、メッセージブローカーと対話してメッセージを送受信します。RabbitMQ Bunnyクライアントライブラリを使用すると、RubyアプリケーションはAMQP（Advanced Message Queuing Protocol）を実装したメッセージブローカーとインターフェースをとることができます。

New Relic の Ruby エージェントは、RabbitMQ クライアントライブラリを使用して送受信されたメッセージを表示します。この可視性により、以下のような詳細を確認することができます。

* アプリで生成されたメッセージの数
* アプリがメッセージを公開するのにかかる時間
* アプリが"消費された" メッセージの処理に費やす時間

[APM](#view-queue) は、キューとやりとりするオペレーションを便利にグループ化し、レポートします。この情報を分析することで、メッセージパッシングアーキテクチャのボトルネックやパフォーマンス向上のための領域をより簡単に特定することができます。

## キューの操作 [#queue-ops]

キュー操作でサポートされているエントリ ポイントは、APM のユーザー インターフェースでは`Put` (メッセージの発行) または`Take` (メッセージの受信) として表示されます。

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Queue operations**
        </DNT>
      </th>

      <th>
        <DNT>
          **Publish a message (`Put` in UI)**
        </DNT>
      </th>

      <th>
        <DNT>
          **Receive a message (`Take` in UI)**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        RabbitMQ
      </td>

      <td>
        `publish`
      </td>

      <td>
        `pop`

        `subscribe (with block)`
      </td>
    </tr>
  </tbody>
</table>

## New Relic UIでの表示 [#view-queue]

メッセージキューの操作は、APMのUIのいくつかの場所で見ることができます。

<CollapserGroup>
  <Collapser
    id="view-in-txn-page"
    title="トランザクションのページ"
  >
    キュー操作は、選択したアプリの APM の[<DNT>**Transactions**</DNT>ページ](/docs/apm/applications-menu/monitoring/transactions-dashboard)に表示されます。 `Put`と`Take`メトリクスは<DNT>**Breakdown table**</DNT>に表示され、 `MessageBroker`メトリクスとして分類されます。 以下に例を示します。

    <img
      title="transactions_page.png"
      alt="transactions_page.png"
      src="/images/apm_screenshot-full_transactions-overview.webp"
    />

    [トランザクショントレース](/docs/apm/transactions/transaction-traces/transaction-traces) メッセージの追加詳細情報も提供しています。

    <Callout variant="tip">
      APM のアプリの<DNT>**Summary**</DNT>または<DNT>**Transactions**</DNT>ページから[、段階トレースを選択](/docs/apm/transactions/transaction-traces/viewing-transaction-traces)できます。
    </Callout>
  </Collapser>

  <Collapser
    id="view-in-txn-trace-summary"
    title="トランザクション・トレース・サマリー・ページ"
  >
    [**低速トレースの概要**ページでは、](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)**Slowest components**セクションに`Put`および`Take`の操作が表示される場合があります。 例えば：

    <img
      title="trace_summary.png"
      alt="trace_summary.png"
      src="/images/apm_screenshot-full_trace-summary.webp"
    />
  </Collapser>

  <Collapser
    id="view-in-txn-trace-page"
    title="トランザクショントレース詳細タブ"
  >
    <DNT>**Transaction trace**</DNT>ページには、トランザクションに関する詳細情報を表示する専用の<DNT>**Details**</DNT>タブが含まれています。 以下に例を示します。

    <img
      title="trace_details.png"
      alt="trace_details.png"
      src="/images/apm_screenshot-full_trace-details.webp"
    />
  </Collapser>
</CollapserGroup>
