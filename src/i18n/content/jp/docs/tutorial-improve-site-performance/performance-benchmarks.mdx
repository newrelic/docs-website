---
title: フロントエンドのパフォーマンスベンチマークを作成する
metaDescription: Learn how to create and define performance benchmarks with service levels.
freshnessValidatedDate: never
translationType: machine
---

システム アーキテクチャは、相互に影響し、依存するホスト、アプリ、サービスで構成されています。アーキテクチャの一部のパフォーマンスが低下すると、後で重大なシステム停止につながる可能性があります。ただし、サービス レベルを使用すると、システムの追跡を容易にするしきい値を適用できます。サービスのパフォーマンスが特定のしきい値を超えるか下回る場合、アラートを受け取ります。サービス レベルの階層は次のとおりです。

* サービス レベルは、サービス レベル目標 (SLO) で構成されます。SLO は、サービスがどのように動作すると期待されるかを表す目標です。
* SLO はサービス レベル インジケーター (SLI) によって定義されます。SLI は、サービスの可用性を決定する重要な測定値と指標です。
* これらの目標に加えて、インジケーターがアラートです。これらは、サービスが SLO を満たしていない場合に通知します。

## 目的 [#objectives]

このチュートリアルでは、サービス レベルを使用したパフォーマンス ベンチマークの作成について説明します。チュートリアルが終わるまでに、次のタスクが完了します。

* サービス レベル インジケーター (SLI) とサービス レベル目標 (SLO) の関係を理解します。
* フロントエンド エクスペリエンス用の SLI と SLO を作成して定義します。
* アラートを設定すると、サービスのパフォーマンスが低下したときにそれを知ることができます。

## サービスレベルを定義する [#define]

以下の手順に従ってサービス レベルを定義および管理すると、次のことが可能になります。

* 将来のセットアップを容易にする: ワンクリックのセットアップで、あらゆるサービスのパフォーマンスと信頼性のベースラインを自動的に確立します。
* チーム全体の信頼性を定義する: サービスの境界を決定するのに役立つ SLO および SLI の推奨事項を使用して、骨の折れる調整プロセスを回避します。任意のエンティティの最近のパフォーマンス メトリックに基づいて、信頼性ベンチマークを自動的に設定します。
* 反復と改善: Terraform などのオープンソースのコードとしてのインフラストラクチャ ツールによるフルスタック コンテキストと自動化により、チームは特定のノードまたはサービスがシステムの信頼性にどのように影響するかを把握し、パフォーマンスをすばやく制御できます。サービス オーナーとビジネス リーダーの両方にカスタム ビューを提供することで、運用効率が向上し、レポート、アラート、およびインシデント管理プロセスが改善されます。
* 信頼性の標準化: 組織間のチームは、サービスの信頼性に関する統一された透過的なビューを持ち、顧客向けの SLA により適切に準拠できます。SLO コンプライアンス メトリクスとエラー バジェットにより、組織は信頼性についてレポートし、アプリケーション、インフラストラクチャ、およびチーム全体に一貫した方法で変更を実装することができます。

## パフォーマンスのベンチマークを作成する [#create]

<Steps>
  <Step>
    ## サービス レベル インジケーターを選択します。

    フロントエンド エクスペリエンスのベンチマークを定義するために使用できる SLI は多数ありますが、特にお勧めする SLI は次のとおりです。各コラプスには、その SLI と対応する NRQL クエリ (ステップ 2 で使用します) をいつ選択する必要があるかについての説明があります。

    今のところ、次のいずれかを選択してください。

    <DNT>**SLIs for APM services instrumented with the New Relic agent**</DNT>: `Transaction`イベントに基づくと、次の SLI はリクエスト駆動型サービスで最も一般的です。

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="service-availability"
        title="サービスの成功"
      >
        サービスの成功は、すべての要求の数に対する成功した応答の数の比率です。事実上、これはエラー率ですが、たとえば、予想されるエラーを除外するなど、フィルター処理を行うことができます。

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}'
        ```

        ここで、 `{entityGuid}`はサービスのGUIDです。

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: TransactionError
        WHERE: entityGuid = '{entityGuid}' AND error.expected IS FALSE
        ```

        ここで、 `{entityGuid}`はサービスのGUIDです。
      </Collapser>

      <Collapser
        className="freq-link"
        id="service-latency"
        title="サービスの待ち時間"
      >
        レイテンシーSLIは、有効なリクエストのうち、良好なエクスペリエンスとして設定された閾値よりも速く処理された割合を測定するものです。

        継続時間のしきい値を決めるためには、過去数週間のサービスのパフォーマンスを確認し、その結果を現実的で達成可能なベースラインとして使用します。その後、SLIのしきい値を繰り返し検討し、より意欲的なパフォーマンスに合わせていくことができます。

        期間条件に適切な値を選択するための一般的な方法の 1 つは、過去 7 日または 15 日間の応答の 95 パーセンタイル期間を選択することです。 [クエリ ビルダー](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder/)を使用してこの期間のしきい値を見つけ、それを使用して SLI の適切なイベントを判断します。

        ```sql
        SELECT percentile(duration, 95) FROM Transaction WHERE entityGuid = '{entityGuid}' since 7 days ago limit max
        ```

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web'
        ```

        ここで、 `{entityGuid}`はサービスのGUIDです。

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web' AND duration < {duration}
        ```

        * ここで、 `{entityGuid}`はサービスのGUIDです。
        * ここで、 `{duration}`は、クライアントサービスまたはエンドユーザーに優れたエクスペリエンスを提供すると考える応答時間（秒単位）です。
      </Collapser>
    </CollapserGroup>

    <DNT>**SLIs for browser applications**</DNT>: 以下の SLI は、Google のコアウェブバイタルに基づいています。

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="browser-availability"
        title="ブラウザーアプリの成功"
      >
        ページビューのうち、エラーなく提供された割合のことです。

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageView
        WHERE: entityGuid = '{entityGuid}'
        ```

        ここで、 `{entityGuid}`はサービスのGUIDです。

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: JavaScriptError
        WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
        ```

        ここで、 `{entityGuid}`はブラウザアプリのGUIDです。
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-contentful-paint"
        title="ブラウザアプリ最大のcontentful paint"
      >
        これは、有効なページビューのうち、ビューポートに表示される最大のコンテンツ要素が、良好なエクスペリエンスに対応すると考えられる閾値よりも速くレンダリングされた割合です。

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint IS NOT NULL
        ```

        ここで、 `{entityGuid}`はサービスのGUIDです。

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint < '{largestContentfulPaint}'
        ```

        * ここで、 `{entityGuid}`はブラウザアプリのGUIDです。
        * ここで、 `{largestContentfulPaint}`は、ビューポートに表示される最大のコンテンツ要素をレンダリングする時間（ミリ秒単位）であり、エンドユーザーに優れたエクスペリエンスを提供します。頻繁な標準は4000ミリ秒です。

        ご使用の環境で`{largestContentfulPaint}`に使用する現実的な数値を決定するための一般的な方法のひとつは、過去7日間または15日間の応答の95パーセンタイル期間を選択することです。クエリビルダーを使用して検索します。

        ```sql
        SELECT percentile(largestContentfulPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-first-delay"
        title="browserアプリ インタラクションから次のペイントへ"
      >
        これは、ユーザーが最初にページにアクセスしてから、そのアクセスに対してブラウザが応答するまでの時間が、一定の閾値以下であるページビューの割合です。

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint IS NOT NULL
        ```

        ここで、 `{entityGuid}`はサービスのGUIDです。

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint < {interactionToNextPaint}
        ```

        * ここで、 `{entityGuid}`はブラウザアプリのGUIDです。
        * ここで、 `{interactionToNextPaint}`は、エンドユーザーに優れたエクスペリエンスを提供するためにブラウザーが応答する必要がある時間（ミリ秒単位）です。頻繁な標準は300ミリ秒です。

        ご使用の環境で`{interactionToNextPaint}`に使用する現実的な数値を決定するための一般的な方法のひとつは、過去7日間または15日間の応答の95パーセンタイル期間を選択することです。クエリビルダーを使用して検索します。

        ```sql
        SELECT percentile(interactionToNextPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX FACET deviceType
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-cumulative-shift"
        title="ブラウザアプリの累積レイアウト変更"
      >
        累積レイアウトシフト（CLS）が良好なページビューの割合です。CLSは、ページの寿命期間中に発生した予期せぬレイアウトシフトについて、個々のレイアウトシフトスコアの総和と表現されます。レイアウトシフトは、レンダリングされたフレームから次のフレームへと可視要素の位置が変わるときに発生します。

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift IS NOT NULL
        ```

        ここで、 `{entityGuid}`はサービスのGUIDです。

        デスクトップとモバイルデバイスのCLSを別々に追跡するために、別々のSLIを作成したい場合は、フィールドの最後にこれらの条項のいずれかを追加してください。

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift < {cumulativeLayoutShift}
        ```

        * ここで、 `{entityGuid}`はブラウザアプリのGUIDです。
        * ここで、 `{cumulativeLayoutShift}`は事前設定された値です。優れたユーザーエクスペリエンスを提供するには、サイトのCLSスコアが0.1以下になるように努める必要があります。 0.25以上のCLSスコアは、ユーザーエクスペリエンスが低いと見なされます。

        valid eventsクエリを定義した際に、デスクトップとモバイルデバイスのCLSを別々に追跡するために、別々のSLIを作成することにした場合は、フィールドの最後にこの句を追加します。

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        ご使用の環境で`{cumulativeLayoutShift}`に選択する現実的な数を決定するための一般的な方法のひとつは、モバイルデバイスとデスクトップデバイスに分割された、過去7日間または15日間のページ読み込みの75パーセンタイルを選択することです。クエリビルダーを使用して検索します。

        ```sql
        SELECT percentile(cumulativeLayoutShift, 95) FROM PageViewTiming WHERE  entityGuid = '{entityGuid}' since 7 days ago limit max facet deviceType
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="tip">
      組織は、特定のニーズ、ユーザーの期待、利用可能なリソースに基づいて SLO と SLI を定義する必要があります。このチュートリアルを完了したら、 [詳細なカスタム サービス レベルを定義する方法について学習することを](/docs/service-level-management/create-slm/#define-user-exp)お勧めします。
    </Callout>
  </Step>

  <Step>
    <img
      title="SLI ui"
      alt="An image of the service level maangement ui"
      src="/images/sonic_screenshot-full_sli-ui-overview.webp"
    />

    1. <DNT>
         **[one.newrelic.com](https://one.newrelic.com) > All capabilities > Service levels management**
       </DNT>

       に移動します。 このUIはすべてのサービスレベルが表示され、それらを定義、監視、編集できます。

    2. UI の右上にある

       <DNT>
         **+ Add a service level**
       </DNT>

       を選択します。
  </Step>

  <Step>
    サービスレベルを作成する対応するエンティティを選択します。 これは、ワークロード全体、特定のサービス、外形監視モニター、さらには特定の場面である可能性があります。 エンティティを選択したら、UI ペインの左側にある<DNT>**Continue**</DNT>をクリックします。
  </Step>

  <Step>
    ステップ 1 で選択した SLI をこのペインで定義します。たとえば、ブラウザー アプリの成功の SLI を定義することを選択した場合は、次のクエリを使用します。

    <DNT>**Query for valid events**</DNT>：

    ```sql
    FROM: PageView
    WHERE: entityGuid = '{entityGuid}'
    ```

    <DNT>**Query for bad events**</DNT>：

    ```sql
    FROM: JavaScriptError
    WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
    ```

    クエリが正しいことを確認したら、左側のペインで<DNT>**Continue**</DNT>を選択します。
  </Step>
</Steps>

## 次は何ですか？ [#next]

おめでとう！ New Relic を使用してサイトのパフォーマンスを向上させる方法に関する旅は完了しました。このチュートリアルでは、サイトのパフォーマンスを向上させる方法についていくつか学びました。次の方法を学びました。

* サイトをインストルメント化することで、サイトの現在のパフォーマンスを把握できるデータを取得します。
* エンドユーザー エクスペリエンスの向上に関して正しい決定を下せるように、Web の重要な要素を評価します。
* 高い遅延を修正し、JavaScript エラーを減らしてサイトを改善します。
* パフォーマンス ベンチマークを作成して、長期にわたるパフォーマンスを追跡します。

New Relic は、パフォーマンスの向上に役立つその他の機能を提供します。このチュートリアルはあなたのサイトに焦点を当てていますが、他のチュートリアルもチェックしてください。

* アプリが遅いですか?[「アプリのトラブルシューティングが遅い」](/docs/tutorial-app-slow/root-causes)を確認し、アプリの一般的な問題を修正してください。
* インフラストラクチャは装備されていますが、ホスト データを収集する方法がわかりませんか?[インフラ データを使用したホストのトラブルシューティング](/docs/tutorial-troubleshoot-infra-hosts/diagnose-app-infra-data)チュートリアルを確認してください。
* アラートが必要ですが、どこから始めればよいかわかりませんか?[アラートの作成と管理の](/docs/tutorial-create-alerts/create-new-relic-alerts)チュートリアルをご覧ください。
