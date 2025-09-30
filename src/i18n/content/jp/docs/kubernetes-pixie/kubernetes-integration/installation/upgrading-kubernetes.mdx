---
title: Kubernetes統合をアップグレードする
tags:
  - Integrations
  - Kubernetes integration
  - Upgrade
metaDescription: Learn how to upgrade the Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

新しいバージョンの Kubernetes がリリースされた後、クラスター内のコントロール プレーン ノードとワーカー ノードで実行されている Kubernetes バージョンをアップグレードできます。

## Kubernetes 統合をアップグレードする [#update]

Kubernetes 統合は現在積極的に開発中であり、バグ修正、新機能、新しい Kubernetes バージョンとクラウド プロバイダーのサポートを含む [アップデートを定期的にリリースしています](/docs/release-notes/infrastructure-release-notes/kubernetes-integration-release-notes/)。最高のエクスペリエンスを得るために、Kubernetes 統合を定期的に更新することを強くお勧めします。

### ガイド付きインストールと Helm を使用したアップグレード [#upgrade-helm]

[guided install](https://one.newrelic.com/nr1-core?state=51fbbd48-c8ca-ead9-bb90-af96e18d82a7)で提供される Helm コマンドを使用してデプロイされたインストールを更新するには、プロセスを実行し、Helm コマンドを再度実行します。これにより、新しいバージョンのチャートとその依存関係が取得され、最新バージョンにアップグレードされます。

Helm 経由でインストールされた Kubernetes 統合を手動でアップグレードする場合:

1. ローカルチャートのリポジトリを更新します。

   ```bash
   helm repo update
   ```

2. 上記のセクションの適切な `helm upgrade --install ...` コマンドを実行して、リリースを更新します。

   ```bash
   helm upgrade --install newrelic-bundle newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml
   ```

### ガイド付きインストールとプレーンマニフェストを使用したアップグレード [#update-manifests]

<Callout variant="tip">
  また、Helmを使用してインテグレーションをデプロイすることをお勧めします。これは、マニフェストを直接使用するよりもクリーンなアップグレードパスを提供します。
</Callout>

Helm の代わりにカスタム マニフェストを使用した場合:

1. まず、古いインストールを削除します。

   ```bash
   kubectl delete -f previous-manifest-file.yml
   ```

2. ガイド付きインストールを再度進めます。これにより、次を使用してデプロイできる更新されたマニフェストのセットが生成されます。

   ```bash
   kubectl apply -f manifest-file.yml
   ```

前のバージョンを削除せずに新しいバージョンのマニフェスト ファイルを適用することはお勧めしません。これは、クラスター内にコンポーネントが残っている可能性があるためです。

マニフェストを作成する高度な方法が必要な場合は、Helm を使用してテンプレート化します。

## `nri-bundle` バージョンをアップグレードする [#update-nri-bundle]

以下に、 [`nri-bundle`](https://github.com/newrelic/helm-charts/blob/master/charts/nri-bundle/README.md)をアップグレードするときに発生する可能性のあるいくつかの問題とその解決方法を示します。

### 変更されたラベル セレクター [#changed-label-selectors]

新しいバージョンの `kube-state-metrics` (または KSM) にアップグレードすると、次のようなエラーが表示される場合があります。

```
v1.LabelSelector{MatchLabels:map[string]string{"app.kubernetes.io/instance":"newrelic", "app.kubernetes.io/name":"kube-state-metrics"}, MatchExpressions:[]v1.LabelSelectorRequirement(nil)}: field is immutable
```

新しいバージョンのチャートのラベル セレクターは変更されましたが、デプロイの名前は変更されていません。したがって、アップグレードするには、 `helm upgrade`を実行する前に`kube-state-metrics`デプロイメントを削除するか、統合を完全にアンインストールしてから再インストールする必要があります。

### 非推奨の値 [#deprecated-values]

次のログが表示された場合:

```
warning: skipped value for nri-bundle.kube-state-metrics.collectors: Not a table.
Error: UPGRADE FAILED: template: nri-bundle/charts/kube-state-metrics/templates/role.yaml:18:6: executing "nri-bundle/charts/kube-state-metrics/templates/role.yaml" at <has "certificatesigningrequests" $.Values.collectors>: error calling has: Cannot find has on type map
```

これは、KSM チャートの値が変更され、コレクターのマップがコレクターのリストに変更されたためです。コレクター リストは不要になり、新しい値から削除されました。

静的 Helm 値にこれらの値がまだ含まれている場合、またはフラグ `--reuse-values`を使用している場合は、まず次の値を削除する必要があります。

```yml
kube-state-metrics:
  collectors:
    certificatesigningrequests: true
    ingresses: false
```

### サポートされていない Kubernetes リソース [#unsupported-k8s-resources]

`nri-bundle`をアップグレードするときに、特定のリソースが特定の Kubernetes API でサポートされていないことに関するエラーが表示される場合があります。例えば、

```
Error: UPGRADE FAILED: unable to build kubernetes objects from current release manifest: resource mapping not found for name: "newrelic-bundle-nri-metadata-injection" namespace: "" from "": no matches for kind "MutatingWebhookConfiguration" in version "admissionregistration.k8s.io/v1beta1"
```

これは、対応する Kubernetes リソースが、対応する Kubernetes API によってサポートされていないことを意味します。[Helm mapkubeapis Plugin リポジトリ](https://github.com/helm/helm-mapkubeapis) の指示に従ってエラーを解決できます。
