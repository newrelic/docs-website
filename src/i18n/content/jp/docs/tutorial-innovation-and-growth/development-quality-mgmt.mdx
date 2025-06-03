---
title: コードベースを改善する
metaDescription: Our development quality guide helps increase stability by using New Relic to ensure that fewer defects are introduced into the code base.
freshnessValidatedDate: never
translationType: machine
---

全体として、企業のデジタル運用の安定性はコードの安定性によって決まります。安定したコード ベースがなければ、エンジニアリング部門は、顧客のために新しくエキサイティングな機能を革新するために必要なペースで進むことはおろか、新機能に対する基本的な需要さえ満たすことができなくなります。エンジニアは、顧客体験のマイナスを防ぐために、トラブルシューティングと低品質コードの修正に時間を費やします。高品質のコードを実装することは、組織が革新し成長する能力の鍵となります。

このガイドでは、コード品質の向上に役立つ特定の重要なパフォーマンス指標とプロセスを特定します。このガイドの後に[リリース品質ガイドが](/docs/new-relic-solutions/observability-maturity/innovation-growth/release-quality-implementation-guide)続きます。このガイドは、このガイドに記載されている手順を完了した後にのみ実行できます。

次の場合は、このガイドを使用するのに適しています。

* 現在、コードの品質を測定していません。
* あなたのコードの品質が悪いと思われている。
* 開発者がどこに時間を費やしているかわかりません。
* アプリケーションの不具合による障害が多発している。

## 主要業績評価指標 [#key-perf-indicators]

これらの KPI は、コードの欠陥の原因と、開発者が最も効率的に時間を使えるように、開発者の労力を最も必要とする領域を特定するのに役立ちます。KPI は、開発速度がコードの品質に影響を与えるかどうかを理解するのにも役立ちます。

### 安定性 [#kpi-stability]

<CollapserGroup>
  <Collapser
    id="kpi-build-success"
    title="成功のKPIを構築する"
  >
    ビルドの成功は、新しいコードのコンパイルやアプリケーション全体への統合が成功した回数を測定します。

    <DNT>**Goal:**</DNT> ビルド成功率をほぼ100%に向上

    <DNT>**Best practices:**</DNT> コード ビルド イベントには次の属性を含める必要があります。

    * ビルドID
    * ビルド名
    * ビルド結果(成功/失敗)
    * 構築期間
  </Collapser>

  <Collapser
    id="kpi-unit-test-success"
    title="ユニットテスト成功のKPI"
  >
    ユニットテストの成功は、新しいコードがユニットテストに合格した割合を測定します。

    <DNT>**Goal:**</DNT> テストの成功率を高めます。

    <DNT>
      **Best practices:**
    </DNT>

    ユニットテストは次のようになります。

    * 1つのユースケースをテストする。

    * 早く完成させる。

    * 信頼できること。

    * 相互依存、外部依存がないこと。

    * シンプルでメンテナンスしやすいコードであること。

      ユニットテストイベントは、以下の属性を含むべきである。

    * テスト名

    * テスト中のコミットメント

    * 試験時間

    * 試験結果（成功・失敗）
  </Collapser>

  <Collapser
    id="kpi-code-coverage"
    title="コードカバレッジKPI"
  >
    コードカバレッジは、少なくとも1つの単体テストの対象となるアプリケーションのコードベースの量を測定します。

    <DNT>**Goal:**</DNT> コードカバレッジを 100% に増加します。

    <DNT>**Best practices:**</DNT> [ユニット テストの](#kpi-unit-test-success)ベストプラクティスに従って、コード テスト カバレッジが 100% の目標に達するようにします。
  </Collapser>

  <Collapser
    id="kpi-defect-volume"
    title="欠陥量KPI"
  >
    欠陥量は、コードの特定のモジュールによってアプリケーションに導入された欠陥の数を測定します。

    <DNT>**Goal:**</DNT> 新たな欠陥の数を減らします。 <DNT>**Best practices:**</DNT>特定のサービスとコード モジュールに関連付けて、新しい欠陥の原因を特定します。

    コード欠陥イベントには、次の属性を含める必要があります。

    * タイムスタンプ
    * アプリケーション
    * コードモジュール
    * 不具合に関する言及
  </Collapser>
</CollapserGroup>

### ベロシティ [#kpi-velocity]

<CollapserGroup>
  <Collapser
    id="kpi-commit-volume"
    title="コードコミット量KPI"
  >
    コードコミット率は、時間の経過に伴う新しいコードのコミット数を測定します。

    <DNT>**Goal:**</DNT> 速度と安定性の最適なバランスを特定するには、コードコミット率を欠陥量と相関させる必要があります。

    <DNT>**Best practices:**</DNT> コード コミット イベントには次の属性を含める必要があります。

    * タイムスタンプ
    * ユーザー
    * プロジェクト
    * リポジトリ
    * 支店
    * コミットIDまたはハッシュ
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### 必要なKPIを収集する [#gather-kpis]

    まず始めるのに最適な場所は、主要業績評価指標を収集することです。これを行うには、ソース コード リポジトリやビルド/テスト自動化プラットフォームなど、開発プロセスをサポートする特定のテクノロジ プラットフォームを知る必要があります。次に、各 KPI の属性を抽出して New Relic にインポートする方法を特定する必要があります。

    このユースケースに必要な KPI と最低限必要な属性は、上記の[主要業績評価指標](#key-perf-indicators)セクションで見つけることができます。通常は、開発ツールチェーンの API を使用して KPI とその属性を抽出し、[カスタム イベント API](/docs/data-apis/ingest-apis/introduction-event-api/)を使用してそれらを New Relic に送信します。

    カスタム統合作業を開始する前に、適用可能なすぐに使える統合が存在するかどうかを確認する必要があります。
  </Step>

  <Step>
    ### ダッシュボードの実装 [#implement-dashboards]

    当社の<InlinePopover type="dashboards"/>は、この改善プロセスで使用される主な方法です。 現在の KPI が表示され、改善が必要な領域を特定するのに役立ちます。 サンプルダッシュボードは[、GitHub の New Relic OMA リソース センターで](https://github.com/newrelic/oma-resource-center)見つかります。

    ダッシュボードに表示される情報は開発ツールチェーンによって異なるため、正確な仕様に合わせ [てダッシュボードをカスタマイズする](https://developer.newrelic.com/collect-data/monitor-your-application/query-custom-data/)必要があります。
  </Step>

  <Step>
    ### 開発ベースラインを確立する [#establish-baseline]

    [初期有効化を実行する](#perform-enablement-one)前に、ベースラインを形成するのに十分なデータが必要であるため、開発アクティビティのサンプルから構成されるベースラインを確立する必要があります。通常、これには最低 2 週間かかりますが、現在の開発ペースによっては最大 6 週間かかる場合があります。これを行う簡単な方法の 1 つは、ベースラインの収集と評価サイクルをアジャイル スプリントに合わせることです (該当する場合)。

    ベースラインを確立する間、イベント データが New Relic に期待どおりに蓄積されていることを定期的に確認する必要があります。
  </Step>

  <Step>
    ### チームと会う [#meet-with-team]

    ベースラインを確立したら、開発チームやその他の関係者に、収集されたデータと、従うことになる継続的な改善プロセスを紹介します。

    このプロセスは、3つの活動で構成されています。

    1. <DNT>
         **Review the KPIs and trends**
       </DNT>

       : あなたと関係者は KPI を確認し、傾向を特定します。

    2. <DNT>
         **Identfy achievements, challenges, and opportunities**
       </DNT>

       このフェーズでは、KPI が改善している領域 (成果) と改善していない領域 (課題) を特定します。 次に、KPI (機会) を改善するための戦略と戦術、およびそれらを最適に実装する方法を特定します。

    3. <DNT>
         **Make technical recommendations**
       </DNT>

       ここでは、あなたと関連する利害関係者が、開発ツールチェーンや耐障害性戦略の変更などの技術的な推奨事項を特定して確認します。
  </Step>

  <Step>
    ### 改善プロセスを開始する [#improvement-process]

    この最後のステップは継続的な改善プロセスです。このフェーズでは、[チームと会い、](#meet-with-team)ベースラインに対する進捗状況を確認し、望ましい改善を実現できるように戦略を調整します。改善プロセスの各サイクルは、開発プロセスを数回繰り返した後に行う必要があります。通常、これらはすべてのアジャイル スプリントの中間点と終了時に発生します。

    この段階では、あなたは

    * KPI を毎週関係者に報告して、チームが作業に適切な優先順位を付けていることを確認し、約束されたビジネス成果に向けた進捗状況を示します。
    * 新しいベースラインを確立し、改善率を示すために、毎週の KPI を長期間にわたって記録して保持します。
  </Step>
</Steps>

上記のプロセスを完了したら、New Relic を使用してリリースの品質を向上させることができます。

<UserJourneyControls nextStep={{"path":"/docs/tutorial-innovation-and-growth/release-quality-mgmt/","title":"次のステップ","body":"New Relic を使用してリリースの品質を向上させる方法を学びます"}}/>
