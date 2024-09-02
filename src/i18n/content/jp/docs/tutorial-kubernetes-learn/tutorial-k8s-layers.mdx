---
title: Kubernetes クラスターを理解して監視する
freshnessValidatedDate: '2023-07-18T00:00:00.000Z'
translationType: machine
---

Kubernetes システムの構成要素を確認し、New Relic がクラスター全体のレベルでシステムを理解するのにどのように役立つかを探ってみましょう。

## 分解して理解する

まず、Kubernetes システムを個別のレイヤーに分割しましょう。

<img
  title="k8sDiagramContext"
  alt="an image showing an abstracted view of a kubernetes system. This includes pods, apps, and clusters"
  src="/images/tutorials_diagram_kubernetes-overview.webp"
/>

Kubernetes システムについては 3 つの主要なセクションで説明します。

* **クラスター**: これは Kubernetes システム全体を表します。クラスターには複数のデプロイメントが含まれており、それらのデプロイメントには多数のポッドが収容されます。各ポッドは、個別のサービスとアプリケーションを維持します。
* **オーケストレーションされたもの**: これらは Kubernetes システムの中核となる要素です。オーケストレーションされたコンポーネントは、必要に応じてポッドをスピンアップおよびスピンダウンするデプロイメント全体で構成されます。
* **サービスとアプリケーション**: サービスとアプリケーションは、Kubernetes システムの主力です。Kubernetes システム内では、各ポッドに 1 つ以上のサービスとアプリケーションが収容されます。サービスとアプリケーションは、システムの目的を推進する重要な機能を提供します。これは、計算、Web アプリ、またはその他のアプリケーションである可能性があります。

これらのセクションは相互にネストされていることに注意することが重要です。クラスターには複数のオーケストレーションされたレイヤーが含まれており、各オーケストレーションされたレイヤーは複数のサービス レイヤーとアプリケーション レイヤーで構成されます。

<Callout variant="important">
  Kubernetes システムを理解するためにそれを分割する方法はたくさんあります。これらのレイヤーは、システムについて考える 1 つの方法にすぎません。
</Callout>

## クラスター層を理解して監視する

多数のデプロイメントとポッドを備えた大規模な Kubernetes システムでは、各コンポーネントを手動で監視することは現実的ではありません。 数十または数百のデプロイメントを扱う可能性があるため、数百または数千の個別のポッド、サービス、およびアプリケーションを監視する必要がある可能性があります。 New Relic は、システム全体の健全性を監視し、タイムリーに情報を受け取るためのより効率的なアプローチを提供します。 <InlinePopover type="alerts"/>問題が発生したとき。

次の手順は、クラスターの一般的な監視戦略をガイドします。

<Steps>
  <Step>
    ## Kubernetes 概要ダッシュボードに移動します

    **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Kubernetes > Overview Dashboard**に移動します。必ず下にスクロールして、利用可能なすべてのグラフを確認してください。

    データが表示されない場合は、前のチュートリアルで[モニタリングを設定していることを確認してください ](/docs/tutorial-kubernetes-learn/tutorial-k8s-intro/#install-new-relic-agent)。
  </Step>

  <Step>
    ## クラスターを優先順位付けします

    Kubernetes 概要ダッシュボードには、クラスターに関する高レベルのデータが表示されます。 ポッドやサービスの数などの一般的なデータを見つけることができます。 さらに重要なのは、実行中のポッドの割合、失敗したポッドの数、コンテナーの再起動の数など、クラスターの健全性に関するデータを見つけることができることです。<img title="tutorialOverviewdashboard" alt="The main overview dashboard for the kubernetes capability" src="/images/tutorial_screenshot-full_overview-dashboard.webp"/>

    このダッシュボードを使用して、クラスターの全体的な健全性を測定します。探すべき点がいくつかあります。

    <table>
      <thead>
        <tr>
          <th>
            コンポーネント
          </th>

          <th>
            それが示すもの
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            赤または黄色のタイル
          </td>

          <td>
            黄色のタイルは警告です。彼らが何を言及しているかに注目してください。たとえば、異常な展開が 2 つある場合は、それらの展開に注意してトラブルシューティングを計画する必要があります。

            赤いタイルは重要なアラートです。これらは必ずしもシステムの障害であるとは限りませんが、できるだけ早く対処することを優先する必要があります。
          </td>
        </tr>

        <tr>
          <td>
            グラフの異常なスパイク
          </td>

          <td>
            長期にわたる保留中のポッドや長期にわたるメモリ使用率などを示すさまざまなグラフがあります。

            上のスクリーンショットにある理由別の **Kubernetes Warning Events by Reason** \[Kubernetes 警告イベント グラフの] スパイクのように、スパイクは常に懸念の原因となるわけではありません。このようなスパイクは約 5 分ごとに定期的に発生するため、危険信号は発生しません。規則的なパターンから外れて発生するスパイク、または通常よりもはるかに大きい規模のスパイクを探します。
          </td>
        </tr>

        <tr>
          <td>
            ノードの準備状況
          </td>

          <td>
            クラスター内のノードの準備ができており、ポッドをホストできるかどうかを確認します。クラスターのインフラストラクチャーがボトルネックなしでワークロードを処理できることを確認してください。
          </td>
        </tr>

        <tr>
          <td>
            リソース数の洞察
          </td>

          <td>
            クラスター内のポッド、コンテナー、ノード、またはその他の Kubernetes リソースの数を注意深く監視してください。実行可能な何かが常に見つかるとは限りませんが、リソース使用率を監視することで、将来のスケーリングを計画することができます。
          </td>
        </tr>
      </tbody>
    </table>

    ページの左上にある時間セレクターを使用して、時間範囲全体のデータを表示し、問題のあるデータが単なるランダムではないことを確認したり、より長い期間にわたって優先順位を付けたりできます。
  </Step>
</Steps>

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-kubernetes-learn/tutorial-k8s-orchestrated","title":"次のステップ","body":"Kubernetes のデプロイメントとポッドを監視します。"}}
  previousStep={{"path":"/docs/tutorial-kubernetes-learn/tutorial-k8s-intro","title":"一つ前の手順","body":"Kubernetes モニタリングについて学びます。"}}
/>
