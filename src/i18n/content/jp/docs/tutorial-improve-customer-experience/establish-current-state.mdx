---
title: 現在の状態を確立する
metaDescription: 'New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application''s performance to improve your customer experience.'
freshnessValidatedDate: '2023-08-16T00:00:00.000Z'
translationType: machine
---

デジタル エクスペリエンスを向上させたいと考えていますが、向上したかどうかはどうすればわかりますか?まず、将来のデータと比較する対象を得るために、ベースラインのパフォーマンスを知る必要があります。必要なものがすべてプラットフォームに正しく報告されていることを確認したら、情報を検証し、品質基盤ダッシュボードを使用してカスタマー エクスペリエンスを測定できます。

<Steps>
  <Step>
    ### インストルメントページの確認 [#review-instrument]

    <InlinePopover type="browser"/>Google のツールはアプリのデータを監視する優れた方法であるため、デジタル エクスペリエンスを改善するには、 browserのダッシュボードを確認することから始めるのが最適です。 まず、 browserアプリとページをレビューして、 New Relicに報告する予定のすべてが実際に報告されていることを確認する必要があります。 これを行うには、取り込んでいる各アプリのブラウザ監視 UI の<DNT>**Page Views**</DNT>タブを確認するか、次の NRQL クエリを実行します。

    ```
    SELECT uniques(pageUrl) from PageView LIMIT MAX
    ```

    <Callout variant="tip">
      NRQL は初めてですか?データを最大化するためにカスタム クエリ言語を使用する方法については [、NRQL の概要](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/) をご覧ください。
    </Callout>
  </Step>

  <Step>
    ### ブラウザのURLグループ化を検証する [#validate-grouping]

    前のステップで、インストルメントされたページがデータを正しく報告していることを確認したら、ブラウザーのセグメントが正しくキャプチャされていることを確認し、顧客エクスペリエンスを向上させるために使用しているデータをより適切に解析できるようにします。セグメントに詳しくない方のために説明すると、セグメントは、URL 内の 2 つの `/`またはドメイン名の `.`の間にある単なるテキストです。

    多数のセグメントを含む URL が多数ある場合は、それらを短縮して、 `website.com/product/widget-name` を `website.com/` または `website.com/product/`にすることができます。最初のバージョンでも機能しますが、2 番目のバージョンでは、より多くのセグメントをデータに含めることができるため、製品のカスタマー エクスペリエンス データをグループ化するためのより便利な方法です。

    <Callout variant="tip">
      構成を調整する必要があるかどうかわからない場合は、役立つ[セグメント許可リスト調査ダッシュボード](https://newrelic.com/instant-observability/browser-segment-investigation/eb24e234-90aa-4908-972d-64d6d56b557e)をインポートします。
    </Callout>

    <img
      title="Segment allow-list (aka white-list) investigation"
      alt="Segment allow-list (aka white-list) investigation"
      src="/images/cx_screenshot-full_segment-whitelist-investigation.webp"
    />

    すべてのセグメントを特定したら、 [ブラウザーのセグメント許可リストを](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding) 使用してセグメントを追加します。これにより、より理解しやすいセグメントを作成できるようになります。
  </Step>

  <Step>
    ### データをセグメント化する方法を理解する [#understand-segment]

    ブラウザーの URL グループ化を検証したので、カスタマー エクスペリエンス データをさまざまなセグメントに分割して理解しやすくすることができます。前のステップとは異なり、ここでのセグメントは ([セグメント許可リスト](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding)の場合のように) URL のセクションを参照するのではなく、データのグループを参照します。

    セグメントを使用して、さまざまな方法でデータをグループ化できます。例えば：

    * 米国、カナダ、EMEA のユーザーのほとんどは、次のペイントまでのインタラクションに 2 秒以上かかりますが、マレーシアとインドネシアのユーザーは 4 秒かかります。 セグメントを地理的位置別にグループ化すると、このインサイトが得られます。
    * 自動車保険を購入する顧客は、通常、1秒から最大の満足のいく塗料を目にします。住宅保険の場合、4秒です。
    * 1 週間で、モバイル ブラウザ アプリでは 700,000 のページ ビューがあるのに対し、デスクトップでは 300,000 のページ ビューが発生する可能性があります。

      データをセグメント化するのに人気があり便利なカテゴリを次に示します。

      <CollapserGroup>
        <Collapser
          id="Region"
          title="地域と場所"
        >
          <DNT>**Basic:**</DNT> 国ごとにグループ化します。 browserはリクエストの国コードが自動的に含まれるため、それをさらに分割するために何もする必要はありません。

          <DNT>**Advanced:**</DNT> ブラウザ監視で[カスタム アトリビュート](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes/)を使用して独自の地域プロパティを作成し、地域グループを地域 SLO グループと一致させます。

          `countryCode`によるファセット。

          関連する属性

          * `regionCode`
          * `city`
          * `asnLatitude`
          * `asnLongitude`
        </Collapser>

        <Collapser
          id="Device"
          title="デバイス"
        >
          パフォーマンスとエンゲージメントのデバイスタイプを分けて、理解できるようにする。

          * デスクトップとモバイルブラウザのユーザーの典型的な内訳

          * デスクトップとモバイルブラウザのユーザーの経験

            `deviceType`によるファセット。

            関連する属性

          * `userAgentName`

          * `userAgentOS`

          * `userAgentVersion`
        </Collapser>

        <Collapser
          id="Product"
          title="製品または事業内容"
        >
          製品が組織によって提供される別の事業またはサービスである場合。業界とそれぞれの製品の例:

          * 自動車保険と住宅保険を販売する保険会社です。

          * 複数のストリーミング サービスまたはチャネルを持つメディア会社。

          * ホテルの予約だけでなくレンタカーも提供する旅行会社です。

            <DNT>**Basic:**</DNT> 製品ごとのパフォーマンスの内訳は次のとおりです。

          * `pageUrl`でのファセット: New Relic で複数の製品を 1 つのブラウザ アプリにグループ化する場合は、このアプローチを使用します。

          * `appName`によるファセット: 各製品を個別の Web アプリとしてインストルメント化する場合は、このアプローチを使用します。

          * `appName` でグループ化してからファセット: 1 つの製品をサポートするブラウザーで複数のアプリを HSBR する場合は、このアプローチを使用します。

            <DNT>**Advanced:**</DNT> カスタムアトリビュート を使用して、製品オファリングをカスタムアトリビュートとしてbrowser [](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes)ページに追加します。
        </Collapser>

        <Collapser
          id="Environment"
          title="環境"
        >
          インストルメンテーション中またはインストルメンテーション後のブラウザ アプリの環境を指定する命名規則。適切な名前のブラウザ アプリは、環境だけでなく製品や機能も指定します。例:

          * `account-management.prod`
          * `hotels-book.prod`
          * `car-insurance.uat`

            アプリの命名規則を使用して、環境が UI とダッシュボードの両方でデータのフィルター処理をサポートしていることに注意してください。詳細については、 [ブラウザ アプリの名前を変更する方法](/docs/browser/new-relic-browser/configuration/rename-browser-apps/)に関するドキュメントを参照してください。
        </Collapser>

        <Collapser
          id="Team"
          title="チーム"
        >
          一部の組織では、単一のチームが複数の製品をサポートしますが、他の組織では、製品が複数のチームでサポートされるのに十分な大きさです。 New Relicのブラウザアプリ名にチーム名を追加するか（たとえば、 `account-management.prod.unicorn-squad` ）、 [カスタム属性](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes)を使用して、カスタマーエクスペリエンスまたはエンゲージメントに対するチームのパフォーマンスをレポートします。
        </Collapser>
      </CollapserGroup>
  </Step>

  <Step>
    ### Quality Foundationのダッシュボードのインポート [#import-dashboard]

    <img
      title="Customer experience quality foundation dashboard"
      alt="Customer experience quality foundation dashboard"
      src="/images/cx_screenshot-full_qf-dashboard.webp"
    />

    次のステップは、ベースライン パフォーマンスに対してカスタマー エクスペリエンスを測定および改善するために使用できるダッシュボードを作成することです。これをする：

    1. [QualityFoundationクイックスタート](https://newrelic.com/instant-observability/customer-experience-quality-foundation/7a5739bf-30ee-4be9-9705-14871cafd7f4)に移動します。
    2. クイックスタートの指示に従ってダッシュボードをインストールします。
    3. [提供されているガイド](https://github.com/newrelic/newrelic-quickstarts/tree/main/quickstarts/oma-qf#readme) を使用して、計画しているデータのセグメント化方法に合わせてガイドをカスタマイズします。

       <Callout variant="tip">
         最適化の効果を最大化するために、ダッシュボードをチームではなく、事業部門や顧客向けのサービスに合わせて調整してください。
       </Callout>
  </Step>

  <Step>
    ### ダッシュボードの各ページの現在のパフォーマンスを把握 [#capture-performance]

    <img
      title="Capture current performance for each dashboard page"
      alt="Capture current performance for each dashboard page"
      src="/images/cx_diagram_qf_kpi_progress.webp"
    />

    現在の状態を確立するための最後のステップは、ダッシュボード ページから現在のパフォーマンスをキャプチャすることです。これをする：

    1. [品質基盤 GitHub README](https://github.com/newrelic/oma-resource-center/tree/main/src/content/docs/oma/value-drivers/customer-experience/use-cases/quality-foundation)の指示に従ってください。セグメント許可リストと品質基盤ダッシュボードの手順が説明されています。

    2. 前の手順のダッシュボードを使用して、各事業部門の全体的なパフォーマンスを理解します。必要に応じて、フィルターを適用して、地域またはデバイス全体のパフォーマンスを確認します。値が目標を下回り、それが重要な場合は、改善の候補としてシートに追加します。追跡値の例：

       * 追跡する価値はない。米国で保険を販売している会社が、マレーシアでのパフォーマンスの低さに気づく。
       * 追跡する価値がある。米国で保険を販売している会社が、米国のモバイルユーザーに関してのみパフォーマンスが低いことに気づく。
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-customer-experience/improve-customer-experience/","title":"次のステップ","body":"現在の状態のデータを使用して改善する方法を学びます"}}/>
