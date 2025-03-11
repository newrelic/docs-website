---
title: メッセージキュー
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: 'New Relic''s Node.js agentsupports the amqplib RabbitMQ client library, giving you insight into the performance of your message processing.'
freshnessValidatedDate: never
translationType: machine
---

New Relic Node.js エージェントは、RabbitMQ クライアントライブラリ [amqplib をサポートしており、受信メッセージと送信メッセージの両方について、メッセージ処理のパフォーマンスを把握することができます。](https://www.npmjs.com/package/amqplib)

[APM UI には、RabbitMQ メッセージ受信 (メッセージのサブスクライブ/消費) によって開始されたトランザクションが<DNT>**Message**</DNT>バックグラウンド タスクとして表示されます。 RabbitMQ によるメッセージの作成は、遺跡トレースにも表示されます。](https://www.npmjs.com/package/amqplib)

[この機能を利用するには、New Relic ](https://www.npmjs.com/package/amqplib)[Node.js エージェントのバージョン 2.0.0 以上が必要です](/docs/release-notes/agent-release-notes/nodejs-release-notes) 。

## バックグラウンドタスクのパフォーマンス改善 [#background]

Webアプリケーションの応答性を向上させる方法の一つとして、バックグラウンドプロセスに作業を委ねる方法があります。このプロセス間通信には、メッセージキューがよく使われます。

メッセージ キューイング システムのコンテキストでは、アプリケーションは通常、メッセージ ブローカーと対話してメッセージを送受信します。`amqplib`クライアント ライブラリを使用すると、Node.js アプリケーションは、Advanced Message Queuing Protocol (AMQP) 0.9 以降を実装するメッセージ ブローカーとやり取りできます。

New Relic の Node.js エージェントは、RabbitMQ クライアントライブラリを使用して送受信されたメッセージを表示します。この可視性により、以下のような詳細を確認することができます。

* アプリで生成されたメッセージの数
* アプリがメッセージを公開するのにかかる時間
* アプリが"消費された" メッセージの処理に費やす時間

[APM](#view-queue) は、キューとやりとりするオペレーションを便利にグループ化し、レポートします。この情報を分析することで、メッセージパッシングアーキテクチャのボトルネックやパフォーマンス向上のための領域をより簡単に特定することができます。

## キューの操作 [#queue-ops]

キュー操作でサポートされているエントリ ポイントは、APM のユーザー インターフェースでは`Put` (メッセージの発行) または`Take` (メッセージの受信) として表示されます。

<table>
  <thead>
    <tr>
      <th width={200}>
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

        `sendToQueue`
      </td>

      <td>
        `get`

        `consume`
      </td>
    </tr>
  </tbody>
</table>

## New Relic UIでの表示 [#view-queue]

キュー操作は、選択したアプリの APM の[<DNT>**Transactions**</DNT>ページ](/docs/apm/applications-menu/monitoring/transactions-dashboard)に表示されます。 `Put`と`Take`メトリクスは<DNT>**Breakdown table**</DNT>に表示され、 `MessageBroker`メトリクスとして分類されます。 以下に例を示します。

<img
  title="metric-breakdown-table"
  alt="metric-breakdown-table"
  src="/images/apm_screenshot-crop_messaging-breakdown-table.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Applications > (select an app) > Transactions > (select a transaction):**</DNT> トランザクションの<DNT>**Breakdown table**</DNT>はキュー操作を`MessageBroker`メトリクスとして分類し、それらに`Put` (メッセージの発行) または`Take` (メッセージの受信) のラベルを付けます。
</figcaption>

[**低速トレースの概要**ページでは、](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)**Slowest components**セクションに`Put`および`Take`の操作が表示される場合があります。 例えば：

<img
  title="slow-message-component"
  alt="slow-message-component"
  src="/images/apm_screenshot-crop_trx-slowest-components.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Applications > (select an app) > Summary > (select a transaction trace):**</DNT> この例では、選択された戦場トレースの<DNT>**Summary**</DNT>は、RabbitMQ 操作を色付きのバーチャートで示しています。 <DNT>**Slowest components**</DNT>セクションには、RabbitMQ `Put`および`Take`の結果もリストされます。
</figcaption>

[<DNT>**Transaction trace**</DNT>ページに](/docs/apm/transactions/transaction-traces/transaction-traces)は、トランザクションの一部として発生したメッセージ アクティビティの概要を表示する専用の<DNT>**Messages**</DNT>タブも含まれています。

<Callout variant="tip">
  <DNT>**APM**</DNT>のアプリの<DNT>**Summary**</DNT>または<DNT>**Transactions**</DNT>ページから[、段階トレースを選択](/docs/apm/transactions/transaction-traces/viewing-transaction-traces)できます。
</Callout>
