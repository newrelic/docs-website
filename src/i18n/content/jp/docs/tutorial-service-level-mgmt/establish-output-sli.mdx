---
title: 出力パフォーマンス SLI を確立する
metaDescription: 'New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders.'
freshnessValidatedDate: never
translationType: machine
---

膨大な量のデータを効率的に管理およびクエリする機能は、New Relic の中心機能の 1 つです。 クエリ出力の正常性は、クライアント側の機能を測定するのと同じように、HTTP クエリ リクエストが応答をどれだけ速くエラーなく受け取るかによって測定されます。 これを出力パフォーマンスと呼び、SLI を測定してこれを追跡できます。 以下の手順を使用して出力パフォーマンス SLI を設定すると、アプリケーションの応答時間とエラー率の両方を追跡できます。

<Steps>
  <Step>
    ## アプリを探す

    まず、SLI を作成するアプリがセットアップされていることを確認する必要があります。 見つからない場合、またはまだ設定していない場合は、続行する前に必ず次の操作を行ってください。

    * [New Relic APM エージェント](/docs/apm/new-relic-apm/getting-started/introduction-apm)を使用してプライマリ アプリケーションをインストルメントしました。
    * 見つけやすいように、使い慣れた命名規則に従ってアプリケーションに名前を付けます。
    * [one.newrelic.com > All entities](https://one.newrelic.com/nr1-core)でアプリケーションを見つけます。

      **All entities** \[すべてのエンティティ]で、アプリケーション (エンティティ タイプ`Services - APM` ) を見つけて選択します。 以下の概要画面が表示されますが、**まだ`Service levels`をクリックしないでください。**

      <img
        alt="APM Overview screenshot"
        src="/images/apm_screenshot-full_overview-screen.webp"
      />
  </Step>

  <Step>
    ## サービスバウンダリーの特定 [#identifying-service-boundary]

    次に、サービスの出力を確実に測定する必要があります。 アプリケーションの依存関係はそれぞれ応答タイムと成功率に影響しますが、リクエストが受信されて応答する時点での最終および合計の応答タイムと成功率を測定できます。

    [サービス マップ](/docs/new-relic-one/ui-data/service-maps/how-use-service-maps/)と[オートマップを](/docs/new-relic-one/ui-data/automaps)使用すると、調べているアプリケーションが依存関係にあるのか、エンドポイント API を実行しているのかを判断するのに役立ちます。

    以下のスクリーンショットの例では、注文処理をサポートするすべてのアプリケーションを確認できます。 まずは #2 (Order-Composer) の選択から始めます。 次に、 **Service maps**\[サービス マップ]をクリックすると、 **Order-Composer**が 実際には依存関係であることがわかります。 真の健康サービスレベルを確立するには、#1 (注文処理) を選択する必要があります。

    <img
      alt="Service map example"
      src="/images/apm_screenshot-crop_service-boundary.webp"
    />

    <Callout variant="tip">
      チームは**Order-Composer**の 依存関係のみに責任を負う場合があります。 その場合、 **Order-Composer**上の独自のサービスレベルがパフォーマンスを自己監視できます。 正常性レポートでのフィルタリングを強化できるように、顧客向けではない独自のサービスレベルを必ず`customer-facing:false`としてタグ付けしてください。 また、オブザーバビリティ中に顧客向けエンドポイント (#1 注文処理) と連携して、真の出力パフォーマンス、入力接続サービス レベル、およびクライアント サービス レベルを作成することも検討してください。
    </Callout>
  </Step>

  <Step>
    ## ベースラインを作成する

    サービスレベルを作成するときは、まずアプリケーションの出力パフォーマンスをベースラインとして確認する必要があります。これは、サービスレベルを実装するために確立する必要があります。 ベースラインを作成すると、基準点としてサービスのパフォーマンスを測定し、サービスレベル レポートを使用してそのベースラインに達しているかどうかを確認できます。 ほぼすべてのデータセットのベースラインを作成できます。ただし、ユースケースごとに異なる公式と推奨事項を使用します。

    応答タイム (レイテンシ) と非エラー (成功) の割合を開始ベースラインとして使用できます。 これを行うと、信頼性ヘルス メトリクスが作成されます。

    適切なベースラインを確立するには、1 ～ 2 週間のパフォーマンス データの履歴をお勧めします。 季節性やピーク使用量によってパフォーマンスが低下することはあってはならないし、測定に含める履歴が増えるほど、リリースからの異なるコードベースが含まれる可能性が高くなります。 以前のデプロイメントは、たとえどれほど小規模であっても、結果を歪める可能性があります。

    以下は、レイテンシの 7 日間のサービスレベル目標の推奨目標を示す NRQL クエリの例です。

    ```
    FROM Transaction SELECT percentile(duration, 95) AS 'Latency Baseline SLI' WHERE appName='Order-Processing' SINCE 1 WEEK AGO
    ```

    <img
      alt="Latency Baseline"
      src="/images/apm_screenshot-full_latency-baseline.webp"
    />

    成功した (エラーのない) ベースラインを得るには、次のクエリを試してください。 忘れずに、 `Order-Processing`独自のアプリケーション名に置き換えてください。

    ```
    FROM Transaction SELECT percentage(count(*), WHERE error is false) AS 'Success Baseline SLI' SINCE 1 WEEK AGO WHERE appName='Order-Processing'
    ```
  </Step>

  <Step>
    ## サービスレベルの作成

    **注：** \[**サービスレベルの追加**]ボタンが表示されない場合は、権限についてNewRelic管理者に確認してください。

    Google のプラットフォームは、推奨される<InlinePopover type="apm"/>とbrowserベースラインを自動的に計算します。 ステップ 2 で選択したアプリケーション APM データを見つけて**Service levels** \[サービスレベル] をクリックすると、以下のビューが表示されます。

    <img
      alt="Service levels start from APM"
      src="/images/apm_screenshot-full_sl-start-from-apm.webp"
    />

    **Add baseline service level objectives** \[ベースライン サービス レベル目標の追加]をクリックして、レイテンシ SLI と成功 SLI の両方、およびそれぞれの目標を作成します。 各 SLO スコアカードの右上隅にある省略記号アイコンをクリックすると、すべての設定を表示および変更できます。

    <Callout variant="tip">
      データの寿命とクエリ パフォーマンスのためにイベント[からメトリクスへのサービスを](/docs/data-apis/convert-to-metrics/create-metrics-other-data-types/)使用しているため、データが SLO スコアに入力されるまでに約 10 分かかります。 変換が行われてデータの入力が開始されるまでには少し時間がかかります。
    </Callout>
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-service-level-mgmt/establish-input-sli/","title":"次のステップ","body":"インプット指標と目標を作成する方法を学ぶ"}}/>
