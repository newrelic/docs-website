---
title: KSM 메트릭 채우기 오류
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
  - OpenShift
metaDescription: Some troubleshooting tips if KSM metrics aren't being populated
freshnessValidatedDate: '2024-12-09T00:00:00.000Z'
translationType: machine
---

## 문제

Kubernetes 통합에는 `kube-state-metrics` 필요합니다. 이것이 누락되었거나 두 개 이상인 경우 `nrk8s-ksm` 컨테이너 로그에 다음과 유사한 오류가 표시될 수 있습니다.

```shell
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, no data was populated"
time="2024-10-18T04:04:21Z" level=error msg="retrieving scraper data: retrieving ksm data: KSM data was not populated after trying all endpoints"
```

## 해결책

다음을 시도해 보세요.

* [Failed to discover kube-state-Metric](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/failed-discover-kube) 에서 제안을 참조하세요.
* `kube-state-metrics` 컨테이너에 대한 **namespace** \[네임스페이스를] 지정하세요. 기본적으로 Kubernetes 통합 번들은 `newrelic` 네임스페이스에 이를 생성합니다.

```yaml
newrelic-infrastructure:
  ksm:
    enabled: true
    config:
      selector: "app.kubernetes.io/name=kube-state-metrics"
      namespace: "newrelic"
```