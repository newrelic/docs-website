---
title: '禁止: ユーザーまたはサービス アカウントでは使用できません'
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
  - OpenShift
metaDescription: Some troubleshooting tips if there are permissions issues with OpenShift
freshnessValidatedDate: '2024-12-09T00:00:00.000Z'
translationType: machine
---

## 問題

コンテナのサービス アカウントに適切な権限がありません。

## 解決

1. そのポッドで実行されているサービス アカウントを見つけます。

```shell
oc get pod <pod-name> -o jsonpath='{.spec.serviceAccountName}' -n <namespace>
```

2. 特権セキュリティ コンテキスト制約 (または使用する scc) をそのサービス アカウントに追加します。

```shell
oc adm policy add-scc-to-user privileged system:serviceaccount:<namespace>:<release_name>-newrelic-infrastructure
```