---
title: kube-state-metrics 검색 실패
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if kube-state-metrics is not found.
freshnessValidatedDate: '2024-09-02T00:00:00.000Z'
translationType: machine
---

## 문제

Kubernetes 통합에는 `kube-state-metrics` 필요합니다. 이것이 누락된 경우 `nrk8s-ksm` 컨테이너 로그에 다음과 같은 오류가 표시됩니다.

```shell
  time="2022-06-21T09:12:20Z" level=error msg="retrieving scraper data: retrieving ksm data: discovering KSM endpoints: timeout discovering endpoints"
```

## 해결책

다음을 확인하십시오.

* `kube-state-metrics` 클러스터에 배포되지 않았습니다.
* `kube-state-metrics` 사용자 지정 배포를 사용하여 배포됩니다.
* 실행 중인 `kube-state-metrics` 의 여러 버전이 있으며 Kubernetes 통합이 올바른 버전을 찾지 못합니다.

Kubernetes 통합은 모든 네임스페이스에서 기본적으로 `app.kubernetes.io/name=kube-state-metrics` 레이블을 사용하여 클러스터에서 `kube-state-metrics` 자동으로 감지합니다.

<Callout variant="tip">
  [Helm 차트](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) 값의 `ksm.config` 에서 검색 동작을 변경할 수 있습니다.
</Callout>