---
title: 포드가 시작되지 않음
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if the Pod is not starting.
freshnessValidatedDate: '2024-09-02T00:00:00.000Z'
translationType: machine
---

## 문제

가이드 설치에 따라 설치하면 출력 오류 `nrk8s-kubelet pod is not starting` 이 발생합니다.

## 해결책

이 오류는 Kubernetes kubelet 패드를 5분 이내에 시작할 수 없고, 이 시간 초과로 인해 설치 스프레드시트가 실패함을 나타냅니다.

이 경우 다음 명령을 실행하여 패드의 상태와 재시작을 확인할 수 있습니다.

```bash
  kubectl get pods -o wide -n newrelic | grep nrk8s-kubelet
```

다음을 확인하십시오.

* 파드가 `ImagePullBackOff` 상태인 경우 [올바른 도메인](/docs/new-relic-solutions/get-started/networks) 에서 이미지를 가져올 수 있도록 네트워크 연결을 확인하세요.

* 파드가 `Pending` 또는 `ContainerCreating` 상태인 경우 다음 명령을 실행하여 [디버그 로그](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging) 에서 가능한 원인을 확인하세요.

```bash
kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic
kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic -c kubelet
```