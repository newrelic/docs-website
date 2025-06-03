---
title: '금지됨: 사용자 또는 서비스 계정에서 사용할 수 없음'
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

## 문제

컨테이너의 서비스 계정에 올바른 권한이 없습니다.

## 해결책

1. 해당 파드에서 실행 중인 서비스 계정을 찾아보세요.

```shell
oc get pod <pod-name> -o jsonpath='{.spec.serviceAccountName}' -n <namespace>
```

2. 해당 서비스 계정에 권한이 있는 보안 컨텍스트 제약 조건(또는 사용하려는 scc)을 추가합니다.

```shell
oc adm policy add-scc-to-user privileged system:serviceaccount:<namespace>:<release_name>-newrelic-infrastructure
```