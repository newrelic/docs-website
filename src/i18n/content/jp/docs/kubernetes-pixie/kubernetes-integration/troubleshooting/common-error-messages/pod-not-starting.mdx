---
title: ポッドが起動していません
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if the Pod is not starting.
freshnessValidatedDate: '2024-09-02T00:00:00.000Z'
translationType: machine
---

## 問題

ガイド付きインストレーションに従うと、出力エラー`nrk8s-kubelet pod is not starting`が発生します。

## 解決

このエラーは、 Kubernetes kubelet ポッドを 5 分以内に開始できず、このタイムアウトによりインストレーション スクリプトが失敗することを示します。

この場合、次のコマンドを実行してポッドのステータスと再起動を確認できます。

```bash
  kubectl get pods -o wide -n newrelic | grep nrk8s-kubelet
```

次の点をチェックします。

* ポッドが`ImagePullBackOff`ステータスの場合、ネットワーク接続を確認して、[適切なドメイン](/docs/new-relic-solutions/get-started/networks)からイメージを取得できるようにしてください。

* ポッドのステータスが`Pending`または`ContainerCreating`の場合、次のコマンドを実行して、 [デバッグ ログ](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging)から考えられる理由を調べてください。

```bash
kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic
kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic -c kubelet
```