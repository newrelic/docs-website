---
title: アカウント設定のベストプラクティス
metaDescription: How to add accounts to your New Relic organization.
freshnessValidatedDate: never
translationType: human
---

New Relicを使い始める前に、New Relicに送信しようとしているデータをどのように使用するかを考えることが重要です。いくつかの異なる子会社を持つ親組織を管理していますか？急速に成長している小規模な組織で、開発プロセスのあらゆる段階でアプリケーションを監視する必要がありますか？アカウントを使用すると、組織の特定のニーズに合わせて、New Relicを簡単にカスタマイズできます。

New Relicのアカウント構造を使用すると、次のことが可能になります。

* データ取り込みを最大化する
* データを整理しておく
* ステージングや開発などの複数の環境を監視する
* 組織のさまざまな領域にわたる請求を管理する
* アカウントレベルでデータアクセスを制御する

このドキュメントでは、アカウント構造の設定について説明します。複数のアカウントを作成する場合は、データの取り込みを開始する*前に*作成することをお勧めします。New Relicをアプリケーションに接続した後は、これまでのコンテキストが失われるおそれがあるため、変更を加えるのが難しくなる場合があります。複数のアカウントの作成を待つ場合、ダウンタイムが警告される可能性もあります。

<Callout variant="tip">
  無料エディションまたはStandardエディションを使用している場合、使用できるアカウントは1つだけなので、このドキュメントは必要ありません。[ProまたはEnterprise](https://newrelic.com/pricing)に変更する場合は、お気軽にこのページに再度アクセスしてください。
</Callout>

## 始める前に [#begin]

追加のアカウントを作成するかどうかを決定する際に重要となる、いくつかの用語をよく理解しておいてください。

* <DNT>**Organization**</DNT>：組織はNew Relicの顧客を表します。New Relic組織には、アカウント、ユーザー、データが含まれています。
* <DNT>**Account**</DNT>：New Relicにサインアップすると、組織に1つのアカウントが自動的に割り当てられます。アカウントには、レポートする多くのデータソースがあります。たとえば、1つのアカウントで、当社のInfrastructureエージェント、APM エージェント、およびその他のインテグレーションからのデータレポートを作成できます。New RelicにレポートされるすべてのデータにはアカウントIDが必要です。これにより、New Relicは対象アカウントに属するデータを把握できます。このIDは、API呼び出しなどのアカウント固有のタスクにも使用されます。
* <DNT>**User**</DNT>: お客様の組織の[New Relicユーザー](/docs/accounts/accounts-billing/new-relic-one-user-management/introduction-managing-users/)には、職務と責任に関連する特定のアカウントへのアクセス権が付与されます。ユーザーのアカウントへのアクセスを管理するには、特定のアカウントの特定の役割にグループアクセスを許可します。当社のユーザー管理システムでは、いくつかのアカウントでの役割が少数の場合でも、多くのアカウントで多くの役割を持つ複雑な場合でも、必要なユーザーアクセスを作成できます

## 単一アカウント構造 [#single-account-structure]

New Relicにサインアップすると、組織が自動生成されます。手動でアカウントを作成しない限り、組織には1つのアカウントが含まれています。1 つのアカウントが多くの企業に適していることもあるため、さらにアカウントを追加する必要がない場合もあります。

単一アカウントが最適であることを示すいくつかの兆候：

* データを大量には取り込んではいません。不明な場合は、[当社のスプレッドシート](https://newrelic.com/blog/nerdlog/estimate-data-cost)を使用して、New Relicに送信する可能性のあるデータ量を見積もってください
* 適度な量のアラートを送信することが予想されます。不明な場合は、[アラートのルールと制限](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/rules-limits-alerts)を確認してください

これらに該当する場合は、1つのアカウントで対応できる可能性があります。それ以外の場合は、必要に応じてマルチアカウント構造を検討することをお勧めします。

## 複数アカウントの作成 [#multiple-accounts]

組織内で複数アカウントを作成する理由はたくさんあります。マルチアカウント構造がチームに適しているかどうかを判断するのに役立つ、一般的な例をいくつか紹介します。

### 複数アカウントを使用してテスト環境と本番環境を分離する [#environments]

複数のアカウントを使用すると、複数の環境にわたるデータを観察できるため、本番環境に移行する前に変更を監視できます。アプリケーションを定期的に更新する場合は、各デプロイメントにエラーがないことを確認できる強力なテスト環境を用意することが重要です。

<img style={{ align: 'left',maxWidth: '100%' }} title="multiple environments" alt="A diagram demonstrating how to use New Relic with multiple environments" src="/images/accounts_diagram_multiple-account-environments.webp" />

### 固有のデータセットと複数のアカウントを持つ個別のプロジェクト [#data-sets]

組織は、さまざまなアカウントのさまざまなデータを保持するコンテナです。各アカウントはデータを分離して保持し、特定の要件に基づいて簡単にフィルタリングやクエリを実行できる優れた方法です。

複数アカウントを使用するいくつかのシナリオを次に示します。

* 複数の国で稼働する決済プロバイダーを管理しており、各国のデータ（通貨、税金規制など）が他の国のデータと混在することを望んでいません
* ソーシャルメディアサイトを管理しており、地域ごとに異なるデータ収集ポリシーに準拠する必要があります

<img style={{ align: 'left',maxWidth: '100%' }} title="Multiple data sets" alt="A diagram showing how to use New Relic with multiple data sets" src="/images/accounts_diagram_unique-data-sets.webp" />

### アカウントを使用して大規模なデータ制限を管理する [#large-data-limits]

大量のデータを取り込む予定がある場合は、データ制限を回避するために複数のアカウントを作成することをお勧めします。金融機関や医療サービス提供者は、複数の地域にまたがる取引やユーザー情報を高速で追跡するため、大量のデータを取り込むことがよくあります。大手小売業者も複数のアカウントを作成することでメリットを得られます。単一の組織で複数の異なる店舗を運営している場合は、会社ごとにアカウントを作成することをお勧めします。

以下の重要な制限に留意してください。

* アラート条件のデフォルトはアカウントごとに4,000条件です
* アラートワークフローのデフォルトは、アカウントごとに1,000ワークフローです
* アラートポリシーのデフォルトは、アカウントごとに10,000ポリシーです
* アラートの送信先はデフォルトでアカウントごとに2,000件です
* NRDBクエリで検査されるカウント制限は、標準アカウントとData Plusアカウントでは異なります

制限の詳細については、以下を参照してください。

* [NRQLクエリの検査されたデータポイント](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#inspected-count-limits)
* [アラート制限](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/rules-limits-alerts/)

<img style={{ align: 'left',maxWidth: '100%' }} title="Large data limits" alt="A screenshot depicting how to use New Relic to manage large data limits" src="/images/accounts_diagram_multiple-accounts-for-large-data-limits.webp" />

### 複数のアカウントを使用してセキュリティを管理する [#security]

ユーザー全員がすべてのデータにアクセスする必要はありません。請負業者にかなり依存しているスタートアップ企業だとしましょう。臨時従業員にすべての履歴データへのアクセスを許可したくない場合があります。ここで複数アカウントを作成するとよいでしょう。

<img style={{ align: 'left',maxWidth: '100%' }} title="manage security" alt="A diagram showing how to use New Relic to manage security" src="/images/accounts_diagram_manage-security.webp" />

### 複数のアカウントとディストリビューティッド（分散）トレーシング

New Relicのディストリビューティッド（分散）トレーシングは、システム全体にわたるすべてのリクエストのパスをマッピングし、どこで速度が低下したり中断しているかが表示されるため、より迅速に修正できます。分散トレーシングは複数のアカウントにわたって機能するため、組織の複数の領域にあるサービスを追跡できます。このクロスアカウント構造は、分散トレーシングを柔軟にし、さまざまなアカウント設定に役立ちます。ただし、アクセス権のないアカウントのサービスにアクセスするトレースをユーザーが表示したい場合、トレースのすべての部分にアクセスできるわけではないことに留意してください。

ユーザーの詳細とアカウントへのアクセスを許可する方法については、[ユーザータイプのドキュメント](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type/)を参照してください。

## 次のステップ

<DocTiles>
  <DocTile path="https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/add-accounts/" title="Add an account" />

  <DocTile path="https://newrelic.com/pricing" title="Learn more about pricing" />

  <DocTile path="https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/introduction-managing-users/" title="Learn about how to manage users" />
</DocTiles>