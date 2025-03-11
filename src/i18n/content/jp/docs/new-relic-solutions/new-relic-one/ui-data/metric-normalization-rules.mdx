---
title: メトリックの正規化ルール
tags:
  - New Relic
  - Use New Relic
  - UI and data
metaDescription: How to create and manage rules in New Relic  to deal with noise from high cardinality metrics and prevent metric grouping issues (MGIs).
freshnessValidatedDate: never
translationType: machine
---

アプリケーションが、グループでより適切に管理できる多くの個別のメトリックを送信する場合があります。これらのほとんどは、URLから名前が付けられたWebトランザクションメトリックで発生します。この問題の説明については、[メトリックグループ化の問題](/docs/using-new-relic/cross-product-functions/troubleshooting/metric-grouping-issues)（MGI）を参照してください。

高いカーディナリティを減らし、メトリックのグループ化の問題を防ぐために、New Relicはメトリックのタイムスライスデータをグループ化または除外するためのルール（正規化）をサポートしています。場合によっては、メトリックの数が非常に多いメトリックグループの問題が検出されると、プラットフォームをパフォーマンスの低下から保護するためのルールが自動的に作成されます。

## 要件 [#requirements]

メトリックのグループ化の問題とメトリックの正規化は、[メトリックのタイムスライス データ](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data)にのみ適用されます。<InlinePopover type="apm"/>エージェント、モバイル エージェント、および<InlinePopover type="browser"/>エージェントのレポートとメトリックのタイムスライス データの表示。

## メトリックの正規化ルール管理 [#create-rules]

[エンティティ エクスプローラー](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find)の各サービス ダッシュボードからアクセスできるメトリック正規化ツールを使用すると、高カーディナリティ メトリックから生成されるノイズに対処する新しいルールを作成および管理できます。そこに到達したら、左側のサイドバーで **Metric normalization** \[メトリックの正規化] を選択します。

ここでは、既存のルールを確認したり、新しいルールを作成したりすることができます。ルールを変更するにはルールをクリックし、新しいルールを作成するには **Create a new rule** をクリックします。ルールを設定するための新しいペインが表示されます。

<img
  style={{ width: '324px', height: '352px'}}
  class="inline"
  title="create new rule.png"
  alt="Create New Rule"
  src="/images/solutions_screenshot-full_create-new-rule-window.webp"
/>

利用可能なフィールドは次のとおりです。

* **Order** : ルールの優先順位を決定します。数値が小さいほど優先順位が高くなります。

* **Match expression**: 正規表現を入力して、ルールに含めるすべてのメトリックをグループ化します。

* **Matches**: ここでは、上記の正規表現と一致するメトリクスのプレビューが表示されます。

* **Action**: メトリクスに対して実行するアクション。

  * **Replace**: 一致したメトリクスを正規表現で**Replacement** \[置換]フィールドに記述された値に置き換えます。
  * **Ignore** : 正規表現に一致するメトリックを無視します。
  * **Deny new metric**: すでに報告されているメトリクスのみを書き込み、正規表現に一致するメトリクスを無視します。

* **Replacement**:**Replace** \[置換が]有効な場合にのみアクティブになります。一致したメトリクスはフィールドの値に置き換えられます。正規表現がグループをキャプチャしている場合は、グループ`1`と`2`にそれぞれ`\1`または`\2`を使用して、それらのプレースホルダーを使用できます。

* **Active**: ルールは削除できませんが、非アクティブ化することはできます。トグルをクリックしてルールを有効または無効にします。

* **Terminate**: 有効にすると、関連するパターンがマッチしたときに、ルールのウォーターフォールが終了します。

* **Notes**: ルールに関する内部メモ。ルールには影響しません。

フィールドの設定が完了したら、 **Create** （既存のルールを編集する場合は **Edit** ）をクリックすると、 **Active** であれば、すぐにルールが適用されます。
