---
title: 버전 2에 대한 노드가 누락되었습니다.
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration v2
  - Troubleshooting
metaDescription: Some troubleshooting tips if you're not seeing data show up for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## 문제

[구현하다, 배포하다 에이전트를](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/) 사용하고 [Kubernetes Kubernetes 절차를](/install/kubernetes/) 완료했지만 모든 노드가 표시되지는 않습니다.

## 해결책

이 단계를 따르세요:

1. 다음 명령을 실행하여 각 노드에서 인프라 에이전트를 예약할 수 있는지 확인하세요.

```shell
  kubectl describe daemonset newrelic-infra
```

2. 모든 노드의 시간이 정확한지 확인합니다. 2분 이상 빠르거나 늦은 노드는 클러스터 탐색기에 표시되지 않습니다. 다음 NRQL 쿼리를 사용하여 이러한 경우를 확인할 수 있습니다.

```sql
FROM K8sNodeSample
SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds'
FACET nodeName LIMIT max SINCE 1 DAY AGO
```

3. 클러스터 탐색기에 표시되지 않는 노드의 [인프라 에이전트에서 로그를 검색하고](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#logs-version2) [오류 메시지](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/errors/) 가 없는지 확인합니다.