---
title: 独自のマニフェスト ファイルを作成する
tags:
  - Integrations
  - Kubernetes integration
  - Installation
metaDescription: How to create a manifest using Helm as a templating system
freshnessValidatedDate: never
translationType: machine
---

Helm を使用して独自のマニフェスト ファイルを作成し、使用するプロキシを設定するなど、すべてのニーズをカバーできます。Helm のすべての機能を理解するには、このドキュメントを読み進める前に、 [Helm を使用して Kubernetes 統合をインストールする方法を](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm)読むことをお勧めします。

## 互換性と要件 [#compatibility]

* [Helm が](https://github.com/helm/helm#install)Kubernetes 統合バージョンと一致していることを確認してください。たとえば、Kubernetes 統合のバージョン 3 には Helm バージョン 3 が必要です。

* NewRelicアカウント。持っていませんか？[無料でお申し込み頂けます！](https://newrelic.com/signup)クレジットカードは必要ありません。

* あなたのNew Relic

  <InlinePopover type="licenseKey"/>

  。

* Kubernetes クラスターの名前。

  * クラスターの表示名が必要な場合は、次のコマンドの出力を使用できます。

    ```shell
    kubectl config current-context
    ```

## Helm との Kubernetes 統合のテンプレート化 [#install-k8-helm]

<Callout variant="important">
  マニフェストを使用したインストールとアップグレードはサポートされておらず、エラーが発生しやすくなっています。これが環境に必要なアプローチであることを完全に確認してください。
</Callout>

1. 以下を実行して、New Relic Helm チャート リポジトリを追加します。

   ```shell
   helm repo add newrelic https://helm-charts.newrelic.com
   ```

2. `values-newrelic.yaml`という名前のファイルを作成します。このファイルは構成の定義に使用され、次の構造に従います:

   <Callout variant="important">
     [設定方法](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#configure)については、Helm インストレーションのドキュメントを参照してください。
   </Callout>

   ```yaml
   global:
     licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
     cluster: _K8S_CLUSTER_NAME_

   newrelic-prometheus-agent:
     # Automatically scrape prometheus metrics for annotated services in the cluster
     enabled: true
   nri-metadata-injection:
     # Deploy our webhook to link APM and Kubernetes entities
     enabled: true
   nri-kube-events:
     # Report Kubernetes events
     enabled: true
   newrelic-logging:
     # Report logs for containers running in the cluster
     enabled: true
   kube-state-metrics:
     # Deploy kube-state-metrics in the cluster.
     # Set this to true unless it is already deployed.
     enabled: true
   ```

3. 次のコマンドを実行して、チャートですべてが適切に構成されていることを確認します。`--dry-run`と`--debug`を指定しているため、このステップでは何もインストールされないことに注意してください。

   ```shell
   helm upgrade --install newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml \
   --dry-run \
   --debug
   ```

   次の値に注意して変更してください。

   以下のフラグに注意して調整してください。

   * `global.licenseKey=YOUR_NEW_RELIC_LICENSE_KEY`：アカウントに対して有効な<InlinePopover type="licenseKey"/>に設定する必要があります。
   * `global.cluster=K8S_CLUSTER_NAME`: でクラスタを識別するために使用されるため、 アカウントで構成されている他のNew RelicUI Kubernetesクラスタでは使用されていないわかりやすい値にする必要があります。New Relic
   * `kube-state-metrics.enabled=true`: Kube State Metrics (KSM) を自動的にインストールするには、これを`true`に設定します。 これは、インテグレーションを実行するために必要です。 KSM が別のネームスペースにある場合でも、クラスタ内にすでに存在する場合はこれを false に設定できます。
   * `newrelic-prometheus-agent.enabled=true`: これを設定すると、クラスター内に存在する Prometheus エンドポイントからデータを自動的に収集する Prometheus エージェントがデプロイされます。
   * `nri-metadata-injection.enabled=true`: 最小限の Webhook をインストールするには、これを設定します。これにより環境変数が追加され、 [New Relic APMでインストゥルメントされたアプリケーションをKubernetesにリンクできる](/docs/kubernetes-pixie/kubernetes-integration/link-your-applications/link-your-applications-kubernetes)ようになります。

   <Callout variant="tip">
     当社の Kubernetes チャートには、特定のニーズに合わせて編集できる包括的なフラグと設定のセットが用意されています。 変更できる内容を確認するには、以下の[インテグレーションの設定](#configure)方法を確認してください。
   </Callout>

4. 以下を実行して、Kubernetes 統合をテンプレート化します。

   ```shell
   helm template newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml > templated-nri-bundle.yaml
   ```

5. 次を実行して生成されたマニフェストを適用します。

   ```shell
   kubectl -n newrelic apply -f templated-nri-bundle.yaml
   ```

## マニフェストを使用したアップグレード [#upgrade]

<Callout variant="important">
  マニフェストを使用したインストールとアップグレードはサポートされておらず、エラーが発生しやすくなっています。これが環境に必要なアプローチであることを完全に確認してください。
</Callout>

1. 以下を実行して、ローカル チャート リポジトリを更新します。

   ```shell
   helm repo update
   ```

2. 次を実行してファイルをテンプレート化します。

   ```shell
   helm template newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml > new-templated-nri-bundle.yaml
   ```

3. 以前のマニフェストを使用する以前のバージョンの Kubernetes 統合をアンインストールし、次のコマンドを実行して新しいマニフェストを適用します。

   ```shell
   kubectl -n newrelic delete -f templated-nri-bundle.yaml
   kubectl -n newrelic apply -f new-templated-nri-bundle.yaml
   ```

## Kubernetesインテグレーションのアンインストール [#uninstall]

Helm を使用して Kubernetes 統合をアンインストールするには、次を実行します。

```shell
kubectl -n newrelic delete -f templated-nri-bundle.yaml
```
