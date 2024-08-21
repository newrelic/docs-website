---
title: NVML 통합
tags:
  - NVML integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with nvml metrics.
freshnessValidatedDate: never
translationType: machine
---

NVML을 뉴렐릭과 통합하면 디자인과 시스템의 GPU 활용도와 성능 지표에 귀중한 인사이트를 제공하여 리소스 최적화, 성능 병목 현상, 병목지점 식별, 환경의 전반적인 안정성과 효율성 유지를 촉진합니다.

<img
  title="NVML dashboard"
  alt="nvml dashboard"
  src="/images/infrastructure_screenshot-full_nvml-dashboard.webp"
/>

<figcaption>
  뉴렐릭으로 NVML 통합을 설정한 후, 상자에서 꺼내자마자 대시보드에서 데이터를 확인하세요.
</figcaption>

## NVML 통합 설정

NVML 통합을 설정하려면 다음 단계를 완료하세요.

<Steps>
  <Step>
    ## 인프라 에이전트 설치

    NVML 통합을 사용하려면 먼저 동일한 호스트에 [인프라 에이전트를 설치](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) 해야 합니다. 클라이언트 에이전트는 호스트 자체를 모니터링하는 반면, nvml 통합은 GPU 클러스터 관련 데이터로 모니터링을 확장합니다.
  </Step>

  <Step>
    ## NRI-Flex를 사용하여 메트릭 캡처

    Flex는 뉴렐릭 인프라 에이전트와 함께 번들로 제공됩니다. nvml용 NRI-Flex를 구성하고 flex 설정 파일을 생성해야 합니다. 다음과 같이하세요:

    1. 아래 경로에 `nvml-config.yml` 라는 파일을 만듭니다.

       * 리눅스용, `/etc/newrelic-infra/integrations.d`
       * 창문용, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`

    2. 아래 스니펫을 사용하여 이름이 지정된 구성 파일을 업데이트합니다. `nvml-config.yml`

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: NVMLexample
             apis:
               - name: nvml
                 file: <PATH_TO_METRIC_CSV_FILE>
       ```
  </Step>

  <Step>
    ## 인프라 에이전트 다시 시작 [#restart-infra]

    [인프라 에이전트 문서](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) 의 지침을 사용하여 인프라 에이전트를 다시 시작하세요. 이것은 대부분의 사람들에게 작동하는 기본 명령입니다.

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## 뉴렐릭에서 nvml 지표를 확인하세요. [#view-data]

    위의 설정을 완료하면 사전 제작된 대시보드 템플릿을 사용하여 지표를 볼 수 있습니다. 이 대시보드에 액세스하려면:

    1. **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents** 로 이동합니다.
    2. **Dashboards** \[대시보드] 탭을 클릭합니다.
    3. 검색 상자에 `nvml`입력합니다.
    4. 이를 선택하고 **Install** \[설치를] 클릭합니다.

       nvml 퀵스타트를 사용하고 지표 및 알림을 보려면 `Install now` 버튼을 클릭하여 [NVML 퀵스타트 페이지를](https://newrelic.com/instant-observability/nvml) 팔로우할 수도 있습니다.

       다음은 GPU의 장치 수를 확인하는 쿼리 예시입니다.

       ```sql
       SELECT latest(temperature_gpu) FROM nvmlSample TIMESERIES 
       ```
  </Step>
</Steps>

## 다음은 뭐지? [#whats-next]

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)

* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)

* [대시보드를 관리하여](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)

  <InlinePopover type="dashboards"/>

  디스플레이 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가하세요.
