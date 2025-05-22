---
title: コントロールプレーンデータが見えない
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data control plane data for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## 問題点

[Kubernetesインストレーション手順](/install/kubernetes/) が完了し、 アカウントに データが表示されていますが、コントロール プレーンKubernetes New Relicコンポーネントからのデータがありません。

## 解決

<CollapserGroup>
  <Collapser id="control-plane-sample-missing" title="コントロールプレーンのサンプルがありません">
    コントロール プレーン データが欠落している場合 (例: `K8sSchedulerSample` 、最初に行うべきことは、コントロール プレーン コンポーネントの詳細ログを確認することです。 [詳細ログを有効にする](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging)方法をお読みください。

    * 可能性の 1 つは、自動検出が最も一般的なラベルを使用してクラスタ内のコントロール プレーン ポッドを見つけようとすることです。単一コンポーネントのポッドが見つからない場合でも、さらなるデータの欠落を確実に回避できます。 次のようなログが表示されます。

      ```bash
      time="2022-06-21T12:21:25Z" level=debug msg="Autodiscovering pods for \"scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"tier=control-plane,component=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"tier=control-plane,component=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"k8s-app=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"k8s-app=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"app=openshift-kube-scheduler,scheduler=true\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"app=openshift-kube-scheduler,scheduler=true\""
      time="2022-06-21T12:21:25Z" level=debug msg="No \"scheduler\" pod has been discovered"
      ```

      この場合、 [Helm チャート値](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml)の`controlplane.config.[component].autodiscover[].selector`構成を使用して検出動作を変更できます。 [コントロール プレーン コンポーネント](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#nrk8s-controlplane)の詳細については、こちらをご覧ください。

    * コントロールプレーン コンポーネントが見つかったが、エンドポイントとの認証が失敗する可能性もあります。 次のようなログが表示されます。

      ```bash
      time="2022-06-21T15:54:52Z" level=debug msg="Endpoint \"https://localhost:10257\" probe failed, skipping: http request failed with status: 403 Forbidden"
      ```

      この場合、ヘルム[チャート値](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml)の`controlplane.config.[component].autodiscover[].endpoints[].auth`構成を使用して、各エンドポイントの認証動作を変更できます。

    * 統合のコントロール プレーン コンポーネントがすべてのコントロール プレーン ノードで実行されていない可能性もあります。 次のコマンドを実行すると、それが正しいかどうかを再確認できます。

      ```bash
      kubectl get pod -n <NEWRELIC_NAMESPACE> -l app.kubernetes.io/component=controlplane -o wide
      ```

      New Relic監視インスタンスのないノードで実行中のコントロール プレーン ポッドを監視したい場合は、必要に応じて[Helm チャートの値](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml)の `controlplane.affinity`、`controlplane.nodeSelector`、および `controlplane.tolerations` を変更できます。
  </Collapser>

  <Collapser
    id="control-plane-CrashLoopBackOff"
    title={<>コントロールプレーンコンポーネントは <InlineCode>
      CrashLoopBackOff
    </InlineCode></>
    }
  >
    コントロール プレーン コンポーネントがコントロール プレーン ポッドを自動検出または正常にスクレイピングしない場合は、 `CrashLoopBackOff`に入ります。

    ニーズに合わせて、自動検出の動作と認証方法を変更できます。

    一方、そのデータに興味がない場合は、 [Helm チャート値](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml)に`controlplane.enabled=false`を設定するだけで、コントロール プレーン コンポーネントを無効にすることができます。
  </Collapser>
</CollapserGroup>