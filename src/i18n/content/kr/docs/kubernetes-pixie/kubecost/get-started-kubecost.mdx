---
title: Kubecost를 사용한 Kubernetes 비용 관측 가능성
tags:
  - Integrations
  - Kubernetes integration
  - Kubecost
  - Cost observability
  - Opencost
metaDescription: Understand the costs associated with your Kubernetes resources
freshnessValidatedDate: '2023-08-12T00:00:00.000Z'
translationType: machine
---

<Callout title="시사">
  이 기능은 아직 개발 중이지만 꼭 사용해 보시기 바랍니다!

  이 기능은 현재 [출시 전 정책](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy) 에 따라 미리보기 프로그램의 일부로 제공됩니다.
</Callout>

New Relic 및 [Kubecost를](https://kubecost.github.io/cost-analyzer/) 사용하면 각 Kubernetes 리소스와 관련된 비용을 이해할 수 있습니다.

실행 가능한 통찰력:

* 내 클러스터(CPU, 스토리지, 송신 등)의 주요 비용 동인은 무엇입니까?
* 내 클러스터에서 최근 비용 증가를 유발하는 노드는 무엇입니까?
* 내 애플리케이션 워크로드에 대한 네임스페이스별 비용 분석은 어떻게 되나요?
* 클라우드 공급자가 제공한 가격/할인을 기반으로 비용 추정을 조정하려면 어떻게 해야 합니까?

## 시작하다

이 가이드에서는 Kubecost 번들 Prometheus 서버를 사용한다고 가정합니다. 이 가이드의 범위를 벗어나더라도 자신의 것을 사용할 수 있습니다.

New Relic에서 `Remote Write` 엔드포인트를 생성해야 하며, 이 페이지의 녹색 'Prometheus 데이터 추가' 버튼을 클릭하면 됩니다. Bearer 토큰이 사용됩니다. [프로메테우스 원격 쓰기](/docs/infrastructure/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration/)

### Prometheus 원격 쓰기 설정

1. Prometheus 데이터를 받을 계정을 선택하세요.
2. 데이터 소스의 이름을 지정합니다(예: `kubecost`.
3. 다음 단계에서 사용할 URL 및 전달자 토큰을 생성합니다.

### 클러스터에 Kubecost 에이전트 설치

다음으로 Helm을 통해 Kubecost 에이전트를 설치합니다.

1. Kubecost 에이전트 설치를 위한 템플릿 YAML 파일을 다운로드합니다. `kubecost-values.yaml` 에 저장합니다.

   ```yaml
   prometheus:
     serverFiles:
       prometheus.yml:
         remote_write:
         - url: https://metric-api.newrelic.com/prometheus/v1/write?prometheus_server=YOUR_CLUSTER_NAME
           bearer_token: YOUR_BEARER_TOKEN
     server:
       global:
         external_labels:
           cluster_id: YOUR_CLUSTER_NAME
   kubecostProductConfigs:
     clusterName: YOUR_CLUSTER_NAME
   ```

2. 선택한 편집기에서 `kubecost-values.yaml` 엽니다.

3. 이전 단계의 Remote_write 엔드포인트를 복사하여 붙여넣고 5행과 6행을 바꿉니다.

4. 두 `YOUR_CLUSTER_NAME` 항목을 모두 클러스터 이름으로 바꿉니다.

5. 아래 Helm 명령을 실행하여 Kubecost 에이전트를 클러스터에 추가하고 New Relic으로 데이터 전송을 시작하세요.

   ```shell
   helm upgrade --install kubecost \
   --repo https://kubecost.github.io/cost-analyzer/ cost-analyzer \
   --namespace kubecost --create-namespace \
   --values kubecost-values.yaml
   ```

6. 몇 분 정도 기다리십시오. 원격 쓰기를 설정한 이전 탭에서 <DNT>**See your data**</DNT> 버튼을 클릭하여 데이터 수신 여부를 확인하세요.

7. 데이터 쿼리:

   ```sql
   SELECT sum(`Total Cost($)`) AS 'Total Monthly Cost'
   FROM (FROM Metric SELECT (SELECT sum(`total_node_cost`)
   FROM (FROM Metric SELECT (average(kube_node_status_capacity_cpu_cores) * average(node_cpu_hourly_cost)
   * 730 + average(node_gpu_hourly_cost)
   * 730 + average(kube_node_status_capacity_memory_bytes) / 1024 / 1024 / 1024
   * average(node_ram_hourly_cost) * 730) AS 'total_node_cost' FACET node))
   + (SELECT (sum(acflb) / 1024 / 1024 / 1024 * 0.04) AS 'Container Cost($)'
   FROM (SELECT (average(container_fs_limit_bytes) * cardinality(container_fs_limit_bytes)) AS 'acflb'
   FROM Metric WHERE (NOT ((device = 'tmpfs')) AND (id = '/'))))
   + (SELECT sum(aphc * 730 * akpcb / 1024 / 1024 / 1024) AS 'Total Persistent Volume Cost($)'
   FROM (FROM Metric SELECT average(pv_hourly_cost)
   AS 'aphc', average(kube_persistentvolume_capacity_bytes) AS 'akpcb' FACET persistentvolume, instance))
   AS 'Total Cost($)')
   ```

[ingress를 통해 Kubecost UI를 노출](https://docs.kubecost.com/install-and-configure/install/ingress-examples) 하려면 Kubecost 문서를 따라갈 수 있습니다.
