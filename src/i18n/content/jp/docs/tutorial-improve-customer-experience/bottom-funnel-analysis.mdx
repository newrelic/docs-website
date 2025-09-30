---
title: ファネルのボトムを分析する
tags:
  - Observability maturity
  - Customer experience
  - Digital customer experience
  - Implementation guide
  - Conversions
  - Funnel
  - Bottom of the funnel
metaDescription: 'New Relic observability maturity series: Bottom-of-the-funnel analysis shows New Relic users how to improve end-user conversions.'
freshnessValidatedDate: never
translationType: machine
---

[カスタマー エクスペリエンスの向上は](/docs/tutorial-customer-experience/improve-customer-experience/) 包括的に行われることが多いですが、コンバージョンの向上に重点的に取り組むことで、カスタマー エクスペリエンスの質も向上します。これはボトムオブザファネル分析として知られるもので、顧客エクスペリエンス全体ではなく、ユーザージャーニーの最後のパフォーマンスに焦点を当ててコンバージョンを改善することを目的としています。このガイドでは、New Relic を使用してこれを適切に行う方法を説明します。ガイドの最後までに、ファネルのボトムを分析し、継続的に分析するために必要な情報を取得できるようになります。

<img
  title="User journey funnel"
  alt="User journey funnel"
  src="/images/cx_diagram_botfa-funnel.webp"
/>

ほとんどのサイトやアプリは 1 つ以上の目的を念頭に置いて構築されており、目的があるところにはユーザー ジャーニーも存在する可能性があります。例えば：

| 目的                     | ユーザージャーニー                        |
| ---------------------- | -------------------------------- |
| ブランド認知度                | ホワイトペーパーをダウンロードする                |
| 顧客サポート                 | サポートチケットを上げる                     |
| カスタマーサービス（登録、フォーム、支払い） | 支払いをする                           |
| エンターテイメント              | 映画をストリーミングする                     |
| 品                      | 服やアクセサリーを買う                      |
| 情報提供の目的                | お住まいの州のサポートプログラムを探す              |
| リードジェネレーション            | 配布リストに参加して、プロモーションやクーポンを入手してください |
| アウトリーチ                 | あなたの町のイベントに関する情報を入手する            |
| サービス（旅行、レンタル、予約）       | フライトを予約する                        |
| ソーシャルメディア              | 自撮り写真を共有する                       |

ユーザーがジャーニーを完了すると、それはコンバージョンと呼ばれます。すべてのコンバージョンには価値があり、コンバージョン率を向上させる最善の方法は、ユーザー ジャーニーを完了する意図が明確なファネルの最下部から始めることです。

アプリやサイトに関する明らかな問題は、発生場所に関係なく、常に対処する必要があります。コンバージョンの最適化に関しては、次の 2 つの理由により、目標到達プロセスの最下部から開始することをお勧めします。

* ユーザーがすでにコンバージョンに至る可能性が高い段階に焦点を当てることで、投資収益率が向上します。ここでパフォーマンスの問題に対処すると、収益にすぐに影響が出ます。
* ファネルの下部に問題がある場合、初期段階を最適化してもコンバージョン率に大きな影響を与えない可能性があります。

最初にファネルの下部に焦点を当てずに上部または中間を最適化すると、カスタマー エクスペリエンスに大きな穴が残る可能性があります。ファネルの下部を最適化したら、同じ手法を使用してユーザー ジャーニーの初期段階を最適化できます。

## 主要業績評価指標 [#kpis]

目標到達プロセスの最下位分析では、次のKPIを測定します。

<CollapserGroup>
  <Collapser
    id="conversion-rate"
    title="目標到達プロセスの最下位の成功/コンバージョン率"
  >
    ユーザーがアクションを完了して実際に完了する意図を示すのに十分な距離に達した後のコンバージョン率。この例は次のとおりです。

    * チェックアウト->注文送信
    * 保険フォームのレビュー->提出
    * サインアップの詳細の完了->送信

      ファネルの下部でエラーとレイテンシーに対処することで、コンバージョン率を高めます。
  </Collapser>

  <Collapser
    id="latency-risk"
    title="レイテンシーによるリスクのある収益"
  >
    コンバージョンの価値に、業界の基準よりも遅いファネルの下部のページまたはインタラクションの数を掛けたもの。ページの KPI を改善して、この値を減らすことに重点を置きます。
  </Collapser>

  <Collapser
    id="Error risk"
    title="エラーによるリスクのある収益"
  >
    コンバージョンの値に、ファネルの最下部のインタラクションにおけるバックエンド エラーの数を掛けたもの。この値を調整して、エンド ユーザーには見えないエラーを除外して意味のある値にし、その値を減らすことに重点を置きます。アラートを作成して、突然上昇傾向にある場合に通知します。
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### じょうごの底がどこから始まるかを特定する [#id-funnel]

    ファネルの最下部は、ユーザーがジャーニーを完了する意図を示すまでに十分な距離まで進んだ、ユーザー ジャーニーの最終ステップに焦点を当てています。ここではいくつかの例を示します。

    <CollapserGroup>
      <Collapser
        id="ecommerce-journey"
        title="eコマースのユーザージャーニー"
      >
        <img
          title="Ecommerce bottom of the funnel"
          alt="Ecommerce bottom of the funnel"
          src="/images/cx_diagram_botfa-ecommerce.webp"
        />

        ユーザージャーニーが簡素化されているため、目標到達プロセスの最下部から始まる場所、つまりチェックアウトに集中できます。チェックアウトフェーズに入るほとんどのユーザーは、何かを購入することを計画しています。この時点からエラーとレイテンシを減らすことで、目標到達プロセスの他の部分に焦点を合わせるよりも、コンバージョンを改善できる可能性が高くなります。
      </Collapser>

      <Collapser
        id="insurance-journey"
        title="自動車保険購入のユーザージャーニー"
      >
        <img
          title="Car insurance bottom of the funnel"
          alt="Car insurance bottom of the funnel"
          src="/images/cx_diagram_botfa-car-insurance.webp"
        />

        上記の例では、ユーザーが情報を入力するときに自動車保険に関心がありますが、ユーザーが見積もりを確認して続行するまで、ユーザーの意図はわかりません。
      </Collapser>
    </CollapserGroup>
  </Step>

  <Step>
    ### ページとアクションを区別する [#distinguish-actions]

    ユーザー ジャーニーの最終ステップは、ページ全体の読み込みと AJAX 呼び出しの組み合わせとなる可能性があります。次のステップでは、すべてのページと AJAX リクエストを知っておく必要があります。問題のページからどのリクエストが実行されているかがわからない場合は、次のコマンドを実行できます。

    ```
    SELECT count(*) FROM AjaxRequest WHERE pageUrl like '%FILTER%' FACET groupedRequestUrl SINCE 1 DAY AGO
    ```

    <img
      title="Distinguish between pages and actions"
      alt="Distinguish between pages and actions"
      src="/images/cx_diagram_pages-actions.webp"
    />

    これを完了すると、ボトムオブザファネル用のスクリプト化されたモニターを作成できます。
  </Step>

  <Step>
    ### ボトム・オブ・ザ・ファネルのスクリプト化されたモニターを作成する [#create-monitor]

    目標到達プロセスの下部を通るパスごとに、 [スクリプト化されたモニター](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/)があることを確認してください。目標は、目標到達プロセスの最下位のサービスが24時間体制で機能していることを確認することです。

    たとえば、顧客の支払い設定に応じて、別の支払い API を呼び出すチェックアウト フローがあるとします。
  </Step>

  <Step>
    ### 目標到達プロセスの最下部のダッシュボードをインポートします

    [ファネル分析クイックスタートの下部に](https://newrelic.com/instant-observability/customer-experience-bottom-funnel-analysis/8d339aa7-69e3-4efa-abc2-9eba600db91c)ある手順に従って、ダッシュボードをインストールして構成します。
  </Step>

  <Step>
    ### 現在のパフォーマンスをキャプチャする [#capture-performance]

    <img
      title="Bottom-of-the-funnel KPI tracking"
      alt="Bottom-of-the-funnel KPI tracking"
      src="/images/cx_diagram_botfa-kpi-tracking.webp"
    />

    1. [GitHub のボトムオブザファネル分析 README](https://github.com/newrelic/oma-resource-center/blob/main/src/content/docs/oma/value-drivers/customer-experience/use-cases/bottom-of-the-funnel-analysis/README.md)の手順に従ってください。この README では、ボトムオブザファネル分析のダッシュボードと関連する KPI について説明します。
    2. 前の手順のダッシュボードを使用して、目標到達プロセスの最下位のパフォーマンスを理解します。
    3. 目標値を満たさないKPIを改善し、リスクのある収益を削減するための計画を作成します。
  </Step>

  <Step>
    ### 改善プロセス

    パフォーマンスを向上させるための専用の取り組みを行っている場合でも、それを継続的なメンテナンスとして分類している場合でも、スプリントごとの終了時に進捗状況を追跡する必要があります。詳細については、以下を参照してください。

    * [稼働時間を改善する](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-web-uptime)
    * [ページの読み込みパフォーマンスを向上させる](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-page-load)
    * [AJAXのパフォーマンスを向上させる](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls)
  </Step>
</Steps>

<Callout variant="tip">
  よくある質問は、パフォーマンスを地域やデバイス タイプなどのコホートに分割してセグメンテーションを適用する必要があるかどうかです。ニーズによって異なりますが、次のような場合にはセグメンテーションを行うことをお勧めします。

  * あなたの組織は、カスタム属性または New Relic ですでに利用可能なデータを使用してセグメント化できる特定のコホートのターゲット ユーザーに対処したいと考えています。
  * ボトムオブザファネル分析についてはすでによくご存知であり、追跡や開発者が注目するのに十分なほど、さまざまなコホート間でパフォーマンスに大きな差があります。
</Callout>

### 今後のベストプラクティス [#best-practices]

ボトムオブザファネルの高品質を維持することは継続的なプロセスであり、コンバージョン率が最適であることを確認するために定期的に分析と調整を行うことをお勧めします。ニーズは組織に固有のものであり、使用する手順はそれを反映しています。時間の経過とともにニーズが変化するにつれて、手順も変更される場合があります。ただし、次の提案に留意してください。

* 各スプリントの最後にパフォーマンスメトリックを再検討します。
* ユーザージャーニーが変わるたびに、目標到達プロセスの最下部の手順が同じかどうかを再確認してください。必要に応じて、開発者スプリントの変更を組み込みます。
* サポートしている事業部門やその他の内部の利害関係者とメトリックをオープンに共有します。
* カスタマーエクスペリエンスSLOを再検討してください。目標到達プロセスの終わりに、より野心的なSLOを定義する必要がありますか？
* ビジネス上の重要な品質基盤 KPI の低下に関する[アラートを作成します](/docs/tutorial-create-alerts/create-new-relic-alerts/) 。
