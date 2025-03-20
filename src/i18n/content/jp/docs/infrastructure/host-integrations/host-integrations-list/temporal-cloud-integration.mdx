---
title: 時間的クラウド統合
tags:
  - Temporal Cloud integration
  - Temporal Cloud monitoring
  - New Relic integrations
metaDescription: Install our Temporal Cloud dashboards and see your Temporal Cloud data in New Relic.
freshnessValidatedDate: never
translationType: machine
---

当社の Temporal クラウドインテグレーションは、Temporal Cloud データのパフォーマンスを監視し、ワークフロー、ネームスペース、スケーラブルなアプリケーションの問題の診断に役立ちます。 当社の Temporal クラウドインテグレーションでは、最も重要な Temporal Cloud メトリックスが組み込まれた事前構築されたダッシュボードが提供されます。

<img title="Temporal Cloud" alt="A screenshot depicting the Temporal Cloud dashboard" src="/images/infrastructure_screenshot-full_temporal_cloud-dashboard.webp" />

<figcaption>
  New Relic との統合を設定したら、すぐにこのようなダッシュボードでデータを確認できます。
</figcaption>

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#infra]

    Temporal クラウド インテグレーションを使用するには、まず同じホストに[インフラストラクチャ エージェントをインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 インフラストラクチャエージェントはホスト自体を監視しますが、次のステップでインストールする統合は、データベースやインスタンス メトリクスなどの時間固有のデータを使用して監視を拡張します。
  </Step>

  <Step>
    ## 設定 `nri-flex` [#configure-flex]

    Temporal Cloud メトリクスが Prometheus エンドポイントで公開され、 `https://<account-id>.tmprl.cloud/prometheus`経由でアクセスできるようになったら、それに応じて[セットアップを構成する](https://docs.temporal.io/production-deployment/cloud/metrics/general-setup)必要があります。

    <Callout title="注記" variant="tip">
      Flex には[New Relicアカウント](/docs/accounts/accounts-billing/account-setup/create-your-new-relic-account)が必要で、次の OS/プラットフォームと互換性があります。

      1. Linux

      2. ウィンドウズ

      3. Kubernetes

         互換性のあるディストリビューションとバージョンの詳細については、 [インフラストラクチャエージェントの互換性ページ](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure)を参照してください。
    </Callout>

    1. 次のパスに`nri-flex-temporal-cloud-config.yml`という名前のファイルを作成します。

       ```shell
       touch /etc/newrelic-infra/integrations.d/
       ```

    2. 以下は`nri-flex`設定ファイルです。 必ずその内容をコピーして、以前に作成した`nri-flex-temporal-cloud-config.yml`ファイルに貼り付けてください。また、Prometheus エンドポイント URL のアカウント ID と証明書ファイルのパスも更新してください。

       ```yml
       integrations:
        - name: nri-flex
          config:
            name: temporalCloudIntegration
            global:
              base_url: https://<your_account_id>.tmprl.cloud/prometheus/api/v1/
              headers:
                accept: application/json
              tls_config:
                enable: true
                key: /certs/client.key
                cert: /certs/client.pem
            interval: 60s
            timeout: 55s
            apis:
              - event_type: temporalCloudFrontendServiceError
                # sum(increase(temporal_cloud_v0_frontend_service_error_count[1m])) by (temporal_namespace,operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_frontend_service_error_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudFrontendServiceRequest
                # sum(increase(temporal_cloud_v0_frontend_service_request_count[1m])) by (temporal_namespace,operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_frontend_service_request_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudPollSuccess
                # sum(increase(temporal_cloud_v0_poll_success_count[1m])) by (temporal_namespace,operation,task_type)
                url: query?query=sum%28increase%28temporal_cloud_v0_poll_success_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%2Ctask_type%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudPollSuccessSync
                # sum(increase(temporal_cloud_v0_poll_success_sync_count[1m])) by (temporal_namespace,operation,task_type)
                url: query?query=sum%28increase%28temporal_cloud_v0_poll_success_sync_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%2Ctask_type%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudPollTimeout
                # sum(increase(temporal_cloud_v0_poll_timeout_count[1m])) by (temporal_namespace,operation,task_type)
                url: query?query=sum%28increase%28temporal_cloud_v0_poll_timeout_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Coperation%2Ctask_type%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudResourceExhaustedErrors
                # sum(increase(temporal_cloud_v0_resource_exhausted_error_count[1m])) by (temporal_namespace,resource_exhausted_cause)
                url: query?query=sum%28increase%28temporal_cloud_v0_resource_exhausted_error_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2Cresource_exhausted_cause%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleActionSuccess
                # sum(increase(temporal_cloud_v0_schedule_action_success_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_action_success_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleBufferOverruns
                # sum(increase(temporal_cloud_v0_schedule_buffer_overruns_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_buffer_overruns_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleMissedCatchupWindow
                # sum(increase(temporal_cloud_v0_schedule_missed_catchup_window_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_missed_catchup_window_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudScheduleRateLimited
                # sum(increase(temporal_cloud_v0_schedule_rate_limited_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_schedule_rate_limited_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudStateTransition
                # sum(increase(temporal_cloud_v0_state_transition_count[1m])) by (temporal_namespace)
                url: query?query=sum%28increase%28temporal_cloud_v0_state_transition_count%5B1m%5D%29%29%20by%20%28temporal_namespace%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudTotalAction
                # sum(increase(temporal_cloud_v0_total_action_count[1m])) by (temporal_namespace, namespace_mode)
                url: query?query=sum%28increase%28temporal_cloud_v0_total_action_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20namespace_mode%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowCancel
                # sum(increase(temporal_cloud_v0_workflow_cancel_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_cancel_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowContinued
                # sum(increase(temporal_cloud_v0_workflow_continued_as_new_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_continued_as_new_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowFailed
                # sum(increase(temporal_cloud_v0_workflow_failed_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_failed_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowSuccess
                # sum(increase(temporal_cloud_v0_workflow_success_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_success_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowTerminate
                # sum(increase(temporal_cloud_v0_workflow_terminate_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_terminate_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowTimeout
                # sum(increase(temporal_cloud_v0_workflow_timeout_count[1m])) by (temporal_namespace, operation)
                url: query?query=sum%28increase%28temporal_cloud_v0_workflow_timeout_count%5B1m%5D%29%29%20by%20%28temporal_namespace%2C%20operation%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudWorkflowExecutionLatencySecP95
                # histogram_quantile(0.95, sum(rate(temporal_cloud_v0_service_latency_bucket[1m] offset 1m)) by (temporal_namespace, operation, le))
                url: query?query=histogram_quantile%280.95%2C%20sum%28rate%28temporal_cloud_v0_service_latency_bucket%5B1m%5D%20offset%201m%29%29%20by%20%28temporal_namespace%2C%20operation%2C%20le%29%29
                split_array: true
                leaf_array: true
              - event_type: temporalCloudReplicationLagSecP95
                # histogram_quantile(0.95, sum(rate(temporal_cloud_v0_replication_lag_bucket[1m] offset 1m)) by (temporal_namespace, le))
                url: query?query=histogram_quantile%280.95%2C%20sum%28rate%28temporal_cloud_v0_replication_lag_bucket%5B1m%5D%20offset%201m%29%29%20by%20%28temporal_namespace%2C%20le%29%29
                split_array: true
                leaf_array: true
       ```

    3. 以下の手順[に従って、インフラストラクチャ エージェントを再起動してください。](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/)

       ```bash
       sudo systemctl restart newrelic-infra.service
       ```

    4. データが[New Relic アカウント](https://one.newrelic.com/)に流れ始めるまで数分間お待ちください。
  </Step>

  <Step>
    ## データを検索する [#find-your-data]

    Temporal Cloud メトリックを監視するために、Temporal Cloud という事前に構築されたダッシュボード テンプレートを選択できます。 事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従ってください。

    1. [one.newrelic.com](https://one.newrelic.com/)より、 **+ Integrations &amp; Agents**ページに移動します。
    2. **\[ダッシュボード]**をクリックします。
    3. 検索バーに**Temporal Cloud**と入力します。
    4. Temporal Cloud ダッシュボードが表示されます。 クリックしてインストールしてください。

    Temporal Cloud ダッシュボードはカスタムダッシュボードとみなされ、ダッシュボードUIに表示されます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメント](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/)を参照してください。

    以下は、ネームスペースと操作ごとにグループ化された Temporal Cloud フロントエンド サービス リクエストを確認するためのNRQLです。

    ```sql
    FROM temporalCloudFrontendServiceRequest SELECT latest(`data.result-value1`) FACET `data.result-metric-temporal_namespace` AS namespace, `data.result-metric-operation` AS operation TIMESERIES 1 minute
    ```
  </Step>
</Steps>

## 次は何ですか？

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。
* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。
* ダッシュボードを[管理して、ダッシュ](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)ボードの表示モードを調整したり、ダッシュボードにコンテンツを追加したりします。