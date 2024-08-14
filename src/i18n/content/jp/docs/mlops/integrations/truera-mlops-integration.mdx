---
title: TruEra の統合
metaDescription: Send your machine learning model data from TruEra to New Relic to understand your model's performance.
freshnessValidatedDate: never
translationType: machine
---

TruEra は、AI スタックの重要なギャップを埋め、ライフサイクルを通じてモデルの品質を説明およびテストします。TruEra の AI ソリューションは、機械学習モデルの説明、デバッグ、およびモニタリングを行い、より高い品質と信頼性を実現するとともに、迅速なデプロイメントを可能にします。このソリューションは、モデルのライフサイクル全体にわたって機能し、モデル開発プラットフォームに依存せず、既存のAIスタックに簡単に組み込むことができます。

TruEra には、New Relic との[モデル パフォーマンス モニタリング](/docs/alerts-applied-intelligence/mlops/get-started/intro-mlops/)統合が含まれており、MLOps チームが ML ライフサイクル全体で信号を関連付け、標準精度を超え、入力と出力のドリフトを監視するのに役立ちます。

## TruEraとNew Relicの統合 [#integrate-truera]

### 機械学習モデルを TruEra に追加する [#add-mlm]

TruEraは、機械学習モデルやその他のデータを取り込むためのコマンドライン・インターフェース（CLI）とPythonクライアントを提供しています。CLIを使用してモデルを追加する手順には、新規プロジェクトの作成、データ収集、トレーニングデータの追加、モデルのパッケージ化と取り込み、本番データの追加が含まれます。

これらの手順は、 [TruEraのテクニカル・ドキュメント・ページ](https://truera.com/newrelicintegration/) に記載されています。

### TruEraからNew Relicへのデータの流れ [#stream-data]

新しいデータセットがTrueraMonitoringシステムに取り込まれるたびに、関連するメトリックが計算されて保存されます。これらの計算されたメトリックは、 `truera2newrelic`データエクスポーターを使用して定期的にNewRelicにプッシュできます。このエクスポーターには、TrueraおよびNewRelicコンソールによって生成されたAPIキーが必要です。

以下に、これらのキーを作成する方法を説明します。

1. **New Relic アカウントにログインします:**

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > + Add more data**
   </DNT>

   に移動します。

2. **「TruEra」をクリックします。**検索バーに

   <DNT>
     **TruEra**
   </DNT>

   と入力します。

3. **Select an account ID:** TruEraと統合したいアカウントIDを選択してください。

4. **API キーを選択または作成します。**ダッシュボード管理には

   <DNT>
     **Active dashboard key**
   </DNT>

   が必要で、メトリック取り込みには

   <DNT>
     **Model metrics data key**
   </DNT>

   必要です。 これらのキーは

   <InlinePopover type="licenseKey"/>

   を参照します。 新しいキーを作成するか、2 つのキー セクションで既存のキーを選択します。

5. **TruEra でキーを作成する:** TruEra コンソールにログインし、ユーザー ページに移動します。

   <DNT>
     **Auth token**
   </DNT>

   を作成するには

   <DNT>
     **Generate Credentials**
   </DNT>

   をクリックしてください。

6. **Verify the data export run and set up the batch exporter**: 次に、 [TruEra docs](https://truera.com/newrelicintegration/) にアクセスして、ターミナルのコマンドを使用して最初のデータ・エクスポー ト実行を検証する方法の手順を確認してください。次に、仮想マシン上でバッチ・データ・エクスポーターをセットアップします。

<InstallFeedback/>

## TruEra を使用して、すぐに使える New Relic ダッシュボードを表示します。 [#truera-dashboards]

機械学習のモニタリング指標を可視化するために、TruEra は、モデルの健全性、セグメントのドリルダウン、フィーチャの値、データの品質、公平性などのテーマを使用して問題を監視し、ドリルダウンするためのスケルトン・ダッシュボードを提供します。

これら<InlinePopover type="dashboards"/>は、 `truera2newrelic`ダッシュボード ツールを使用して設定できます。 これを行うには、次の手順に従います。

1. **モデルメトリックスを確認します**: <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT>からナビゲーション メニューに移動し、メイン ナビゲーション メニューのダッシュボード タブをクリックします。 指定された ML モデルに対して自動的に生成されたダッシュボード設定が表示されます。 最近エクスポートされたモデル メトリクスが表示されていることを確認します。

   <img
     title="Automatic TrueEra dashboard"
     alt="Automatic TrueEra dashboard."
     src="/images/model-performance-monitoring_screenshot-crop_TruEra-dashboard.webp"
   />

2. **まとめ通知の設定:**ダッシュボードを作成したら、データにアラートを取得できます。 チャートから NRQL <InlinePopover type="alerts"/>条件を作成するには、チャート ウィジェットをクリックし、次に<DNT>**Create alert condition**</DNT>をクリックします。 条件に名前を付けてカスタマイズしたら、既存のポリシーに追加したり、新しいポリシーを作成したりできます。

   <img
     title="Set up alert notifications"
     alt="Set up alert notifications."
     src="/images/model-performance-monitoring_screenshot-crop_TruEra-alerts.webp"
   />

3. **Get notified:** アラート条件を作成したら、どのように通知するかを選択できます。通知チャンネルの設定方法については、 [のドキュメントを参照してください](/docs/alerts-applied-intelligence/new-relic-alerts/alert-notifications/notification-channels-control-where-send-alerts/) 。

4. **インシデントの関連付け：**通知に加えて、インシデントインテリジェンスを使用してインシデントを関連付けることができます。 [決定を使用してインシデントを関連付ける方法](/docs/alerts-applied-intelligence/applied-intelligence/incident-intelligence/change-applied-intelligence-correlation-logic-decisions/)については、ドキュメントを参照してください。

これで、New Relic と TruEra の統合が完了しました。新たに作成されたアラートは、New Relic のアラートと相関関係があり、新たに報告された予測に関するデータを見ることができるようになりました。
