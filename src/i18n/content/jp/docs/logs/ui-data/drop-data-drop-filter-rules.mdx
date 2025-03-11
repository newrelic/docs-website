---
title: ドロップフィルタールールによるログデータのドロップ
tags:
  - Logs
  - Log management
  - UI and data
metaDescription: Use New Relic's log management UI to set up drop filter rules for dropping specific types of log data.
freshnessValidatedDate: never
translationType: machine
---

ログイベントデータがNewRelicに送信された後、NRDBデータベースに保存するか、ドロップ（破棄）することができます。このドキュメントで説明されているように、ログデータを削除するには、ログ管理UIを使用できます。 [NerdGraphを使用してデータを削除](/docs/accounts/accounts/data-management/drop-data-using-nerdgraph)することもできます。 NerdGraphはGraphQLエクスプローラーです。

## 節約、セキュリティ、スピード [#why-it-matters]

ドロップフィルターのルールは、いくつかの重要な目標を達成するのに役立ちます。

* お客様のアカウントに関連するログのみを保存することで、コストを削減できます。
* 個人を特定できる情報（PII）を削除することで、プライバシーとセキュリティを保護します。
* 無関係なイベントや属性を削除して、ノイズを減らす。

<Callout variant="caution">
  データをドロップするかどうかは慎重に判断してください。ドロップしたデータは復元できません。この機能を使用する前に、 [データをドロップする際の責任と考慮事項を確認してください。](#caution) 。
</Callout>

## ドロップフィルタールールの仕組み [#how-it-works]

ドロップフィルタールールは、クエリに基づいてデータを照合します。ドロップフィルタールールがトリガーされると、一致するデータがNew Relicデータベース（NRDB）に書き込まれる前に、取り込みパイプラインから削除されます。

これにより、お客様のドメインから転送されるログと、New Relicが収集するデータとの間に、明確な境界線ができます。ドロップフィルターのルールによって削除されたデータはバックエンドに到達しないため、クエリをかけることができません：データは消えてしまい、復元できません。

<img
  title="Logs architecture for drop filters in New Relic"
  alt="Diagram of logs architecture for drop filters in New Relic"
  src="/images/logs_diagram_ingest-pipeline.webp"
/>

<figcaption>
  取り込みプロセス中に、顧客ログデータを解析、変換、またはドロップしてから、New Relicデータベース（NRDB）に保存できます。
</figcaption>

## データを落とす際の注意点 [#caution]

ドロップルールを作成する際には、ルールが設定した条件を満たすデータを正確に識別し、廃棄することに責任を負います。また、ルールの監視だけでなく、New Relic に開示したデータの監視にも責任があります。

New Relic は、この機能によってお客様が抱えるデータ開示の懸念を完全に解決できることを保証するものではありません。New Relic は、あなたが開発したルールがどれだけ効果的であるかをレビューしたり監視したりしません。

機密データに関するルールを作成すると、どのような種類のデータを保持しているのか、データやシステムの形式（例えば、電子メールアドレスや特定のクレジットカード番号を参照することなど）などの情報が漏れてしまいます。関連するロールベースのアクセス制御権限を持つすべてのユーザーは、作成したルールのすべての情報を表示および編集できます。

<Callout variant="caution">
  ドロップ ルールはパーティション固有です。ドロップ ルールを作成するときは、ログが配置されているパーティションも指定する必要があります。後でログに関連付けられたパーティションを変更または削除すると、ログがドロップ ルールに一致しなくなる可能性があります。パーティションとドロップ ルールを使用している場合は、パーティション ルールを更新した後もドロップ ルールがまだ有効であることを確認してください。
</Callout>

## ドロップフィルタールールの作成 [#create]

パーミッション関連の要件については、 [ドロップデータの要件](/docs/data-apis/manage-data/drop-data-using-nerdgraph#requirements) を参照してください。

ドロップフィルターのルールが有効になると、その時点以降に取り込まれたすべてのログイベントに適用されます。ルールは過去にさかのぼって適用されません。ルールを作成する前に収集されたログは、そのルールではフィルタリングされません。

<img
  title="Log drop filter rule"
  alt="Screenshot of Log drop filter rule in UI"
  src="/images/logs_screenshot-full_drop-filter-selection-2.webp"
/>

<figcaption>
  削除するデータを含むログのセットをフィルターまたはクエリします。 次に、ログ UI の左側のナビゲーションにある<DNT>**Manage data**</DNT>から<DNT>**Create drop filter**</DNT>をクリックします。
</figcaption>

新しいドロップ フィルター ルールを作成するには、新しいログ クエリまたは既存の[ログ クエリ](/docs/logs/new-relic-logs/ui-data/query-syntax-logs)を使用できます。 ドロップ フィルターを作成するには、次の 2 つの方法があります。

**属性から:**

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**
   </DNT>

   に移動します。

2. \[**すべてのログ**] で、削除する属性を含むログをクリックして、ログの詳細ビューを開きます。

3. ドロップしたい属性をクリックして、属性メニューを開きます。

4. \[**属性からドロップ フィルタを作成] を**クリックします。

5. ドロップ ルールに意味のある名前を付けます。

6. ログが保存されているパーティションを選択します。

7. NRQL フィールドには、属性のキーと値が事前入力されます。クエリにまだ調整が必要な場合は、ここで自由に編集してください。

8. [](#drop-events)クエリにマッチしたログイベント 全体をドロップするか、マッチしたイベントの属性 特定のサブセットのみをドロップするかを選択します。[](#drop-attributes)

9. [\* ドロップフィルターのルールを保存します。](#drop-attributes)

[**最初から:**](#drop-attributes)

1. [](#drop-attributes)

2. <DNT>
     [\*\*\*\*](#drop-attributes)
   </DNT>

   **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**に移動します。

3. ログ UI の左側のナビゲーションにある **Manage data** \[データの管理] で、 **Drop filters** \[フィルターのドロップ]をクリックします。

4. ドロップ フィルター ビューの右側にある \[**ドロップ フィルターの作成**] ボタンをクリックします。

5. ドロップ ルールに意味のある名前を付けます。

6. ログが保存されているパーティションを選択します。

7. NRQL フィールドに入力して、削除したいデータを含むログをフィルタリングします。

8. [](#drop-events)クエリにマッチしたログイベント 全体をドロップするか、マッチしたイベントの属性 特定のサブセットのみをドロップするかを選択します。[](#drop-attributes)

9. [\* ドロップフィルターのルールを保存します。](#drop-attributes)

## [NerdGraph APIでドロップフィルタのルールを管理 \[#nerdgraph\]](#drop-attributes)

[ドロップフィルタールールをプログラムで管理するには、GraphQL Explorerである](#drop-attributes)[NerdGraph](/docs/accounts/accounts/data-management/drop-data-using-nerdgraph)を使用して、ドロップフィルタールールを作成、クエリ、および削除します。

## ドロップフィルタールールの種類 [#types]

ドロップフィルターのUIでは、クエリに基づいてログをドロップするか、特定の属性に基づいてドロップするかを選択するよう求められます。

### ログイベントの削除 [#drop-events]

ドロップフィルタールールのデフォルトタイプは、ログをドロップすることです。このオプションは、フィルタまたはクエリにマッチするログイベント全体をドロップします。ルールを作成する際には、ドロップすべきログデータのみにマッチする特定のクエリを提供するようにしてください。

当社のドロップフィルタプロセスでは、マッチングクエリに値がないドロップフィルタルールを作成することはできません。これにより、不適切に作成されたルールがすべてのログデータをドロップすることを防ぎます。

### ドロップ属性 [#drop-attributes]

クエリにマッチしたログイベントにドロップする属性を指定できます。少なくとも 1 つ以上の属性を選択する必要があります。選択された属性はすべてドロップされ、残りの属性はすべて維持されてNRDBに保存されます。

<Callout variant="tip">
  貴重なモニタリングデータを失うことなく、個人識別情報（PII）やその他の機密属性を含む可能性のあるフィールドを削除するには、この方法をお勧めします。
</Callout>

## ドロップフィルタールールの表示・削除 [#drop-rules-delete]

ここからドロップフィルタールールを削除すると、取り込んだログイベントはフィルター処理されなくなります。

<img
  title="Log drop filter rule"
  alt="Screenshot of existing Log drop filter rule in UI"
  src="/images/logs_screenshot-full_drop-filter-view2.webp"
/>

ドロップフィルターのルールを表示または削除するには

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**
   </DNT>

   に移動します。

2. ログ UI の左側のナビゲーションにある

   <DNT>
     **Manage data**
   </DNT>

   から、

   <DNT>
     **Drop filters**
   </DNT>

   をクリックします。
