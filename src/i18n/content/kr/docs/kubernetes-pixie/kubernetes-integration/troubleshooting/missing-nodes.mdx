---
title: 누락된 노드
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data show up for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## 문제

[구현하다, 배포하다 에이전트를](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/) 사용하고 [Kubernetes Kubernetes 절차를](/install/kubernetes/) 완료했지만 모든 노드가 표시되지는 않습니다.

## 해결책

이 단계를 따르세요:

1. 다음 명령을 실행하여 각 노드에서 인프라 에이전트를 예약할 수 있는지 확인하세요.

```shell
  kubectl describe daemonset RELEASE_NAME-nrk8s-kubelet
```

<Callout variant="caution">
  Kubernetes 통합의 V2 버전에서는 이 명령이 변경된다는 점에 유의하세요. [누락된 노드(버전 2)를](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/troubleshooting/missing-nodes) 참조하세요.
</Callout>

2. 모든 노드의 시간이 정확한지 확인하세요. 2분 이상 앞이나 뒤처진 노드는 클러스터 탐색기에 표시되지 않습니다. 다음 NRQL 쿼리를 사용하면 이러한 경우인지 확인할 수 있습니다.

```sql
FROM K8sNodeSample
SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds' FACET nodeName
LIMIT max SINCE 1 DAY AGO
```

3. 클러스터 탐색기에 나타나지 않는 노드의 [인프라 에이전트에서 로그를 검색하여](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/) [오류 메시지가](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/error-messages) 없는지 확인합니다.