---
title: Kong Gateway ログを転送する
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'How to forward your logs to New Relic using our kong Gateway file log plugin, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Kong Gateway のログをNew Relicに転送すると、 APIゲートウェイのパフォーマンス、健全性、セキュリティ、および使用状況に関する貴重なインサイトが提供されます。 このドキュメントでは、Kong Gateway からファイル ログ プラグインを指示して、Kong Gateway からNew Relicにログを転送する方法について概要を説明します。

## 互換性と要件 [#compatibility-requirements]

このログ転送プラグインを使用するには、次のものが必要です。

* [Kubernetesプラグイン](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding)がインストールされています
* [カスタム リソース定義 (CRD)](https://docs.konghq.com/kubernetes-ingress-controller/latest/plugins/rate-limiting/#install-the-gateway-apis)とともにインストールされた Kong Gateway

## Kong ゲートウェイ プラグインをインストールする [#install-overview]

Kong Gateway からログを受信するには、Kong Gateway ファイル ログ プラグインをNew Relic Kubernetesインテグレーションに接続する必要があります。 この設定では、標準出力 (`/dev/stdout`) を通じてログが送信され、 New Relic Kubernetesインテグレーションと Kong ゲートウェイ間の接続が確立されます。

<Steps>
  <Step>
    ## New Relic Kubernetesログ統合のインストール [#install-k8s-logs]

    まだインストールしていない場合は、[ログ転送用の New Relic Kubernetes プラグインをインストールしてから](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding)、このドキュメントに戻ってください。 プラグインは、 Kubernetes環境からログを収集して転送するスタンドアロンの Docker イメージを使用します。
  </Step>

  <Step>
    ## ファイルログプラグインを構成する [#install-config-filelog]

    [Kong Gateway File ログ プラグインをインストールし](https://docs.konghq.com/hub/kong-inc/file-log/)たら、ログを`/dev/stdout`に送信するようにプラグインを指示する必要があります。 この設定のマニフェストの例を次に示します。

    ```yaml
    # file-log-plugin.yaml
    apiVersion: configuration.konghq.com/v1
    kind: KongClusterPlugin
      metadata:
        name: global-file-log
        annotations:
            kubernetes.io/ingress.class: kong
        labels:
            global: "true"
      config:
        path: "/dev/stdout" # Directs logs through a standard output so New Relic can receive Kong Gateway logs
    plugin: file-log
    ```
  </Step>

  <Step>
    ## 設定をKubernetesクラスタにデプロイする [#deploy-config]

    ファイル ログ プラグイン設定を Kubenrnetes クラスタにデプロイしますが、必ずマニフェストの実際のファイル名で`file-log-plugin.yaml`更新してください。

    ```bash
    kubectl apply -f file-log-plugin.yaml -n kong
    ```
  </Step>

  <Step>
    ## ログがNew Relicプラットフォームにあることを確認します [#confirm-logs-platform]

    設定をデプロイしたら、 **[one.newrelic.com &gt; All Capabilities &gt; Logs](https://one.newrelic.com/launcher/logger.log-launcher)**に移動します。 いくつかのデータをトリガーし、そのデータをフィルターするクエリを実行して、Kong Gateway からのログがプラットフォームに表示されていることを確認します。

    次の例を使用してクエリの構築を開始できます。

    ```sql
    SELECT * FROM Log
    ```
  </Step>
</Steps>

## 次は何ですか？ [#whats-next]

Kong Gateway ログを New Relic に転送するようになったので、他のドキュメントやチュートリアルも確認することをお勧めします。

* [大量のログを管理する](/docs/tutorial-manage-large-log-volume/get-started-managing-large-logs)方法については、チュートリアルに従ってください。
* [ログ クエリ構文](/docs/logs/ui-data/query-syntax-logs)について学習します。
* LogUI 概要ドキュメント から始めて、UI[ UIに関するドキュメントを調べてください。](/docs/logs/ui-data/use-logs-ui)