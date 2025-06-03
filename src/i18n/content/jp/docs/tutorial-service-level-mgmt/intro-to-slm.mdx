---
title: サービスレベルによる信頼性の管理
metaDescription: 'New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders.'
freshnessValidatedDate: never
translationType: machine
---

サービスレベル管理は、データを共通言語に標準化する実践です。 組織内では、利害関係者間のコミュニケーションが必要以上に困難になることがよくあります。 IT 部門は通常、組織のビジネス中心の部分が理解できるような言葉で話しませんし、ひいては IT チームが役立つと思われる言葉でコミュニケーションすることもありません。 信頼性を向上させるには、この言語の壁を解決することが問題の防止に役立ちます。 サービスレベル管理、つまりデータをすべての関係者が理解できる世界共通言語に標準化する実践は、まさにそれを行うのに役立ちます。

サービスレベル管理は**、稼働時間、パフォーマンス、信頼性**の実践に最もよく適用されますが、**顧客エクスペリエンス**、**イノベーションと成長**、**運用効率**の他の実践にも適用されます ([これらの実践について詳しくは、こちらをご覧ください](/docs/new-relic-solutions/observability-maturity/introduction))。 どの領域を改善したいかに関係なく、SLM を使用すると、ビジネス上の成果と運用上の成果という 2 つの主要な領域に影響を及ぼします。

<Tabs stacked>
  <TabsBar>
    <TabsBarItem id="business-outcome">
      事業成果
    </TabsBarItem>

    <TabsBarItem id="op-outcome">
      運用成果
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="business-outcome">
      信頼性の観点から求められるビジネス成果は、ビジネスに影響を与えるインシデントの数、期間、関係者の数を削減することに重点を置いています。

      * ビジネスを混乱させるインシデントの数を減らします。
      * 平均解決時間 (MTTR) を短縮します。
      * 重大インシデントごとの平均従事者数 (FTE) を削減します。
    </TabsPageItem>

    <TabsPageItem id="op-outcome">
      信頼性の観点から求められる運用上の成果は、デジタル製品の健全性に焦点を当てています。

      * 運用の成功を、標準のサービスレベルでカバーしている重要な製品アプリケーションの割合によって測定します。
      * 主要な利害関係者によるポリシーの採用率を調べます。
      * 利害関係者にとって何が重要であるかに焦点を当て、シンプルさを確保し、サービスレベル管理の有効性を証明します。
    </TabsPageItem>
  </TabsPages>
</Tabs>

## サービスレベル管理を使用する理由 [#why-slm]

サービスのレベルと信頼性を向上させるには、サービスのすべての利害関係者がこの慣行を採用する必要があります。 これには、サービスレベルの力と価値を迅速に示し、各グループにとって何が重要かについての議論を開始するためのエンジニアリング管理、製品管理、経営管理が含まれます。 このガイドの手順を実行すると、有意義な議論がすぐに得られます。

一般的な方法では、最初に 1 つのデジタル製品とその重要な機能の出力パフォーマンスと入力パフォーマンスのサービスレベルを確立します。 これには通常、エンドポイント アプリケーションごとに 1 つの[全体的な出力](/docs/tutorial-service-level-mgmt/establish-output-sli)および[入力サービス](/docs/tutorial-service-level-mgmt/establish-input-sli)レベル (通常は 1 つまたは 2 つ) が含まれ、その後、エンドポイント トランザクションで測定された想定される重要な機能に対して約 4 ～ 7 つの出力パフォーマンス サービス レベルが含まれます。

このようなシナリオでは調査に時間がかかりすぎ、部分が多すぎることが多いため、この方法では各関係者に対して何を測定すべきか、何を測定すべきではないかを調査することはありません。 重要なことは、ベースラインとキーを「能力」として始めることです。

サービスレベルの実装が成功すると、システム全体の健全性を簡単に測定して伝達できることが実証されます。 この最初のデモンストレーションでは、サービスレベルの測定内容を改善するためにより多くの時間を投資する価値があることがわかります。 完全なデモンストレーションを早く提供するほど、より早く広く採用され、すべての関係者と協力して信頼性向上プロセスを開始できるようになります。

次に進む前に、いくつかの一般的な用語を見て、KPI を定義しましょう。

## 用語解説 [#terminology]

<Collapser
  id="slm-terminology-service-level"
  title="サービスレベル"
>
  [サービスレベルは](https://en.wikipedia.org/wiki/Service_level)システムのパフォーマンスを測定します。 サービスレベルは、指標を使用し、期待されるパフォーマンスと結果に関する一連の目標と比較することによって測定します。
</Collapser>

<Collapser
  id="slm-terminology-service-level-management"
  title="サービスレベル管理"
>
  当社では、サービスレベル管理をサービスレベルのコンプライアンスを報告、維持、管理する実践として定義しています。
</Collapser>

<Collapser
  id="slm-terminology-sli"
  title="サービスレベルインジケーター"
>
  サービスレベル指標 (SLI) はサービスレベルを測定します。 SLI は測定対象を特定し、1 つのデータポイントまたはデータポイントの複合を測定します。 SLI は通常、成功したトランザクションまたはイベントの割合 (%) を表します。 1 時間、1 日、1 週間など、指定された期間にわたって計算された有効なイベントの合計数に対する良好なイベントの合計数を測定します。

  **例SLI。**

  * 500ミリ秒以内に完了したログインAPIトランザクションの割合。
  * ログインAPIトランザクションのうち、内部サーバーエラーなしで完了したトランザクションの割合。
  * 500ミリ秒以内に完了し、内部サーバーエラーが発生しなかったログインAPIトランザクションのパーセンテージ。
  * Login APIに対する合成チェックPingのうち、成功した割合。
  * ブラウザログイン後、3秒以内にランディングページに遷移する割合。
  * インジェストされたメトリクスのうち、3秒以内にクエリーが可能なメトリクスの割合。
  * 上記の一部または全部を1つのSLIに集約した。
</Collapser>

<Collapser
  id="slm-terminology-slo"
  title="サービスレベル目標"
>
  サービスレベル目標 (SLO) は、システム、ジョブ、または機能の予想されるサービスレベルを記述します。 これは通常、一定期間内の 1 つ以上の SLI の成功に必要な割合を示します。

  **SLOの例。**

  * ログインAPIは500ミリ秒以内に応答し、毎週99.99％の時間エラーが発生しません。
  * モバイルログイン機能は、毎週99.99％の時間で3秒以内にランディングページに移行します。
  * メトリクスのデータインジェストは、毎日99.99%の確率でAPIから消費後3秒以内にクエリーを利用できるようになります。
</Collapser>

<Collapser
  id="slm-terminology-service-boundary"
  title="サービス境界"
>
  サービス境界は、多くの場合、消費者がクライアントを通じてリクエストを行うシステム内のポイントであり、外部 API またはエンドポイントとも呼ばれます。 サービス境界は 2 つの異なるシステム間の内部に存在することもあり、その場合、あるアプリケーションのコレクションが別のアプリケーションのコレクションのリクエストに対応します。 たとえば、アイデンティティ管理システムは、クライアントからのログイン要求と、さまざまな機能のアクセス許可の承認の両方に対応できます。

  境界の種類：

  * **顧客向けのサービス境界**: 顧客向けの GraphQL API。 この境界により、各依存関係を測定する必要がなく、パフォーマンスの健全性を測定するために必要な応答タイムと成功メトリクスの合計が得られます。
  * **内部サービス境界**: 顧客向けの GraphQL API の背後にあるミドルウェアの依存関係。 GraphQL ティアに応答する各依存関係 API は、独自の内部サービス境界としてカウントされます。 内部サービス境界は、全体的な出力パフォーマンスの健全性を 1:1 の比率で表すものではありません。 たとえば、GraphQL API に対する顧客リクエストは 7 つの内部依存関係にヒットする可能性があります。 1 つの遅い依存関係は、元のリクエストの合計応答時間には影響しません。
</Collapser>

<Collapser
  id="slm-terminology-error-budget"
  title="エラーバジェット"
>
  エラー バジェットは、サービスレベル目標のコンプライアンスを測定し、伝達します。 この高度な方法に関する詳細情報は[、サービスレベル管理ドキュメント](/docs/service-level-management/intro-slm)に記載されています。

  エラー バジェットは、サービスが「コンプライアンス違反」になる前にどの程度失敗できるかを追跡します。 エラー バジェットを定義および測定するには、いくつかの異なる方法を使用できます。 「エラー バジェット」の「エラー」という言葉は、HTTP リクエスト エラーやアプリケーション エラーを意味するのではなく、サービスレベル目標で定義されている「不正なリクエストまたはイベント」を指します。

  **注**: エラー バジェットを実装する前に、まずサービスレベルのコンプライアンスを定義、計算、伝達する方法を学習することをお勧めします。 SLI が目標をどれだけ達成しているかを測定するために、SLI の目標を確立できることが非常に重要です。 たとえば、24 時間のログイン リクエストの間隔が 500 ミリ秒以内かどうか、99.99% でエラーがないかどうかを追跡できます。 24 時間の SLI コンプライアンス結果が 99.99% を満たしていれば、目標は達成されたと考えることができます。

  **参考文献**

  Google はエラー バジェットを次のように定義しています。

  "一言で言えば、エラーバジェットとは、ユーザーが不満を持ち始める前に、サービスが一定期間内に蓄積できるエラーの量です。サービスレベルの目標（SLO）に対して、それぞれの目標（SLI）を定義すると、エラーバジェットは、100までの残りになります。" -- [Google Cloud - メンテナンスウィンドウがエラーバジェットに与える影響-SREのヒント](https://cloud.google.com/blog/products/management-tools/sre-error-budgets-and-maintenance-windows)

  アトラシアンでは、エラー バジェットを次のように定義しています。

  「エラーバジェットとは、技術システムが契約上の影響なしに失敗する可能性がある最大時間です。たとえば、サービスレベル契約（SLA）で、ビジネスが顧客に補償する前にシステムが99.99％の時間機能することが指定されている場合、停止、つまり、エラーバジェット（またはシステムが結果なしにダウンする可能性がある時間）は、年間52分35秒です。」 [--Atlassian-エラーバジェットとは何ですか？なぜそれが重要なのですか？](https://www.atlassian.com/incident-management/kpis/error-budget)
</Collapser>

## 前提条件 [#prerequisites]

* プライマリ アプリケーションの[APM インストゥルメンテーション](/docs/apm/new-relic-apm/getting-started/introduction-apm)などを通じて、SLI を監視および確立するためのデータを用意します。
* アプリケーションの[合成テストを](/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring)使用して、顧客に依存せずに監視するデータを生成することもできます。
* 必須ではありませんが、New Relic[ダッシュボードと NRQL](https://learn.newrelic.com/webinar-getting-started-with-dashboards-nrql)を使用して基本的なスキルを習得することを強くお勧めします。

## このシリーズには何がありますか? [#the-series]

<DocTiles>
  <DocTile
    title="Establish an output performance SLI"
    path="/docs/tutorial-service-level-mgmt/establish-output-sli/"
  >
    サービスの成果を適切に測定する方法を学ぶ
  </DocTile>

  <DocTile
    title="Establish an input performance SLI"
    path="/docs/tutorial-service-level-mgmt/establish-input-sli/"
  >
    インプット指標と目標を作成する方法を学ぶ
  </DocTile>

  <DocTile
    title="Establish capability SLIs"
    path="/docs/tutorial-service-level-mgmt/establish-capability-sli/"
  >
    機能に関するサービスレベルスコアを作成する方法を学ぶ
  </DocTile>

  <DocTile
    title="Improve with service level management"
    path="/docs/tutorial-service-level-mgmt/improve-with-slm/"
  >
    SLM テクニックを使用して信頼性を向上させる方法を学ぶ
  </DocTile>
</DocTiles>
