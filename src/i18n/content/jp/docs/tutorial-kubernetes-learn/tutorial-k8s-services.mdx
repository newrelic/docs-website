---
title: サービス層とアプリケーション層を理解して監視する
freshnessValidatedDate: '2023-08-29T00:00:00.000Z'
translationType: machine
---

Kubernetes システムでは、各ポッドに、Kubernetes システムがサポートする実際の機能を提供するサービスとアプリケーションが含まれています。システムは、計算、Web アプリ、またはその間のものをサポートできます。

システム全体としては正常であっても、個々のアプリケーションやサービスが失敗したり、エラーが発生したりする可能性があります。次の手順では、アプリケーションとサービスを監視し、優先順位を付けるための一般的な戦略を説明します。

<Steps>
  <Step>
    ## APM Kubernetes ダッシュボードに移動します

    **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services > (アプリケーションを選択) > Kubernetes**に移動します。
  </Step>

  <Step>
    ## アプリケーションのトリアージ

    このページには、Kubernetes クラスター内のそのアプリケーションのすべてのインスタンスの概要が表示されます。ここにはさまざまな便利なチャートやグラフがありますが、一番右のアクティビティ ストリームをよく見てください。これにより、それらのアプリケーションの重要なパフォーマンス イベントが強調表示されます。パフォーマンス履歴の全体像を収集するには、必要に応じて時間範囲を拡大します。

    何が許容できるかを決定できるのはあなただけですが、1 日に複数のイベントが発生することは、パフォーマンスを向上できる可能性があることを示しています。たとえば、上の画像では、わずか数時間以内に複数の Apdex 警告があります。[Apdex の警告は、ユーザー エクスペリエンスの低下を示します](/docs/apm/new-relic-apm/apdex/apdex-measure-user-satisfaction/)。

    <img
      title="tutorialAPMOverview"
      alt="The main overview dashboard for an APM service in a Kubernetes cluster"
      src="/images/tutorial_screenshot-full_apmK8s.webp"
    />
  </Step>

  <Step>
    ## パフォーマンスの問題の原因を特定する

    4 つのグラフが表示されるまで下にスクロールします。各グラフの左上でドロップダウンを選択し、グラフを次のように設定します。

    * サービスエラー率

    * サービスのスループット

    * サービス応答時間

    * コンテナ再稼働回数

      <img
        title="tutorialAPMOverview"
        alt="The main overview dashboard for an APM service in a Kubernetes cluster"
        src="/images/tutorial_screenshot-full_apm-k8s-performance.webp"
      />

      最初の 3 つのグラフは、アプリケーションの健全性を示します。再起動回数のグラフは、パフォーマンスがポッドの全体的な健全性に影響を与えているかどうかを相関させるのに役立ちます。

      上のスクリーンショットでは、いくつかの点に注意することができます。

    * エラー率はゼロのままです。これは、エラーがパフォーマンスに影響を与えていないことを意味します。

    * サービスのスループットが非常に頻繁に急増する

    * サービスの応答時間は定期的に 70 ミリ秒近く変動します

    * コンテナーの再起動グラフはゼロのままです。これは、アプリケーションのパフォーマンスがクラスターで重大な障害を引き起こしていないことを意味します。

      この場合、パフォーマンス低下の主な指標としてスループットと応答時間を特定できます。これらを解決するには、アプリケーション自体を最適化する方法や、アプリケーションをホストするコンテナーに CPU パワーを投入する方法など、さまざまな方法があります。
  </Step>
</Steps>

## 次は何ですか？

New Relic を使用して Kubernetes を監視する方法を学習したので、他のチュートリアルを探索できます。

* アプリの動作が遅いですか?「アプリ[が遅い」](/docs/tutorial-app-slow/root-causes)チュートリアルで、アプリの遅延を優先順位付けして診断する方法を学びましょう。
* ピーク需要の日が近づいている場合は、New Relic が [容量計画](/docs/tutorial-peak-demand/get-started)にどのように役立つかをご覧ください。
* 高品質のアラートを作成したいですか?[アラート チュートリアルは、](/docs/tutorial-create-alerts/create-new-relic-alerts/) アラート システムのセットアップに役立ちます。

<UserJourneyControls previousStep={{"path":"/docs/tutorial-kubernetes-learn/tutorial-k8s-orchestrated","title":"一つ前の手順","body":"Kubernetes のデプロイメントとポッドを監視します。"}}/>
