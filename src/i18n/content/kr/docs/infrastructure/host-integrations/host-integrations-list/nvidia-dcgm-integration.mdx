---
title: NVIDIA DCGM 통합
tags:
  - NVIDIA integration
  - DCGM integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with DCGM metrics.
freshnessValidatedDate: '2023-10-30T00:00:00.000Z'
translationType: machine
---

NVIDIA DCGM 통합은 GPU 상태를 모니터링하는 데 도움이 됩니다. 이 통합은 NVIDIA의 SMI 유틸리티와 원활하게 통합되는 인프라 에이전트와 Prometheus 원격 쓰기 통합을 활용합니다. GPU 활용도, XID 오류 수, 클럭 및 성능 상태, 온도, 전력 사용량 등 중요한 DCGM 지표가 포함된 사전 구축된 대시보드를 제공합니다.

<img
  title="NVIDIA DCGM dashboard"
  alt="NVIDIA DCGM dashboard"
  src="/images/infrastructure_screenshot-full_nvidia-dcgm-dashboard.webp"
/>

<figcaption>
  NVIDIA DCGM 통합을 설정하면 DCGM 지표에 대한 대시보드가 제공됩니다.
</figcaption>

## 인프라 에이전트 설치 [#infra]

New Relic에 데이터를 가져오려면 인프라 에이전트를 설치하세요. 당사의 인프라 에이전트는 귀하가 DCGM 성과를 추적할 수 있도록 데이터를 수집하고 수집합니다.

두 가지 방법으로 인프라 에이전트를 설치할 수 있습니다.

* [가이드 설치](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) 는 시스템을 검사하고 시스템에 가장 적합한 애플리케이션 모니터링 에이전트와 함께 인프라 에이전트를 설치하는 CLI 도구입니다. 가이드 설치 작동 방식에 대해 자세히 알아보려면 [가이드 설치 개요](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview) 를 확인하세요.
* 인프라 에이전트를 수동으로 설치하려는 경우 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) 용 수동 설치 자습서를 따를 수 있습니다.

## DCGM 내보내기 구성 [#configure-exporter]

1. 터미널에서 `dcgm-exporter` 저장소를 복제합니다.

   ```shell
   git clone https://github.com/NVIDIA/dcgm-exporter
   ```

2. 복제된 저장소에서 `dcgm-exporter` 디렉터리로 이동합니다.

   ```shell
   cd dcgm-exporter
   ```

3. 필요한 바이너리를 설치합니다:

   ```shell
   make binary
   ```

   ```shell
   sudo make install
   ```

4. `dcgm-exporter` 을 시작합니다.

   ```shell
   dcgm-exporter &
   ```

5. DCGM 측정항목의 세부정보를 확인하세요.

   ```shell
   curl localhost:9400/metrics
   ```

## Prometheus의 NVIDIA-DCGM 구성 [#configure-prometheus]

Prometheus는 NVIDIA-DCGM 내보내기를 사용하여 NVIDIA GPU를 모니터링하는 데 사용할 수 있는 오픈 소스 모니터링 및 경고 도구입니다. DCGM 측정항목을 모니터링하도록 Prometheus를 구성하려면 다음 단계를 따르세요.

1. 최신 릴리스를 찾으려면 [Prometheus 다운로드 페이지를](https://prometheus.io/download/) 방문하세요.

2. 운영 체제 및 아키텍처에 적합한 버전을 선택하십시오. Linux의 경우 linux-amd64 버전을 선택할 가능성이 높습니다. tarball(`.tar.gz` 파일)에 대한 다운로드 링크를 복사합니다.

3. Prometheus가 다운로드되면 다운로드 tar 파일의 압축을 풉니다.

   ```shell
   tar -xvzf <filename.tar.gz>
   ```

4. 다운로드한 Prometheus 폴더로 이동합니다.

   ```shell
   cd /DOWNLOADED-FOLDER/
   ```

5. `prometheus.yml` 파일을 열고 다음 줄을 추가합니다.

   ```yml
   ---
   scrape_configs:
     - job_name: NVIDI
       static_configs:
         - targets:['localhost:9400']
   ```

6. 프로메테우스를 시작하세요:

   ```shell
   ./prometheus --config.file=prometheus.yml
   ```

## NVIDIA-DCGM용 Prometheus 원격 쓰기 에이전트 설치 [#install-remote-write]

Prometheus 구성을 설정한 후 NVIDIA DCGM 지표를 Prometheus로 보내야 합니다. 나중에 Prometheus 측정항목을 New Relic과 통합하기 위해 Prometheus 원격 쓰기 에이전트를 활용할 수 있습니다. [UI에서 Prometheus 원격 쓰기 설정 실행 프로그램을](https://one.newrelic.com/catalog-pack-details?state=04de330d-ad8b-b61c-68e2-ad852c2ca1d4) 따르기만 하면 됩니다.

## New Relic 인프라 에이전트 다시 시작 [#restart-infra-agent]

데이터 읽기를 시작하기 전에 [인프라 에이전트 문서](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) 의 지침을 사용하여 인프라 에이전트를 다시 시작하십시오.

```shell
sudo systemctl restart newrelic-infra.service
```

## New Relic에서 DCGM 측정항목 보기 [#view-data]

위의 설정을 완료하면 nvidia-dcgm이라는 사전 구축된 대시보드 템플릿을 사용하여 측정항목을 볼 수 있습니다. 이 대시보드에 액세스하려면:

1. <DNT>
     **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**
   </DNT>

   으)로 이동합니다.

2. <DNT>
     **Dashboards**
   </DNT>

   탭을 클릭합니다.

3. 검색창에 "nvidia-dcgm"을 입력하세요.

4. 이를 선택하고

   <DNT>
     **Install**
   </DNT>

   클릭합니다.

`nvidia-dcgm` 퀵스타트를 다운로드하고 지표 및 알림을 보려면 지금 설치 버튼을 클릭하여 [Nvidia-DCGM 퀵스타트 페이지를](https://newrelic.com/instant-observability/nvidia-dcgm) 팔로우할 **수도** 있습니다.

다음은 몇 가지 예시 쿼리입니다.

<DNT>**Example:**</DNT> 장치 GPU 온도 수 보기

```sql
SELECT latest(DCGM_FI_DEV_GPU_TEMP) FROM Metric WHERE metricName LIKE 'DCGM_FI_DEV_GPU_TEMP' TIMESERIES
```

## 다음은 뭐지? [#whats-next]

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)

* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)

* [대시보드를 관리하여](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)

  <InlinePopover type="dashboards"/>

  디스플레이 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가하세요.
