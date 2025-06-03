---
title: Apache 트래픽 서버 통합
tags:
  - Apache Traffic Server integration
  - New Relic integrations
metaDescription: Install our Apache Traffic Server dashboards and see your Apache Traffic Server  data in New Relic.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

당사의 Apache Traffic Server 통합은 Apache Traffic Server의 성능을 모니터링합니다. HTTP/HTTPS 트래픽은 한 방향 또는 양방향으로 전달 또는 역방향 프록시될 수 있어 성능과 확장성을 모두 제공합니다.

<img
  title="Apache Traffic Server dashboard"
  alt="Apache Traffic Server dashboard"
  src="/images/infrastructure_screenshot-full_apache-traffic-server-dashboard.webp"
/>

<figcaption>
  Apache 트래픽 서버를 설정한 후 Apache 트래픽 서버 메트릭에 대한 대시보드를 설치할 수 있습니다.
</figcaption>

## 인프라 에이전트 설치 [#infra]

데이터를 New Relic으로 가져오려면 인프라 에이전트를 설치하십시오. 당사의 인프라 에이전트는 데이터를 수집하고 수집하므로 앱의 성능을 추적할 수 있습니다. NRI-Flex 통합을 지원하려면 버전이 1.10.7 이상이어야 합니다.

두 가지 방법으로 인프라 에이전트를 설치할 수 있습니다.

* [가이드 설치](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) 는 시스템을 검사하고 시스템에 가장 적합한 애플리케이션 모니터링 에이전트와 함께 인프라 에이전트를 설치하는 CLI 도구입니다. 가이드 설치 작동 방식에 대해 자세히 알아보려면 [가이드 설치 개요](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview) 를 확인하세요.
* 인프라 에이전트를 수동으로 설치하려면 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/)또는 [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/)용 수동 설치에 대한 자습서를 따를 수 있습니다.

## Apache New Relic 에이전트 설치

Apache 통합은 TCP 연결, DNS 조회, HTTPS, SSL, 서버 및 작업자 상태와 같은 네트워크 측정항목을 수집합니다. 통합을 설치하려면 [안내 설치](https://one.newrelic.com/launcher/nr1-core.explorer?pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5saXN0aW5nIn0=&cards%5B0%5D=eyJuZXJkbGV0SWQiOiJucjEtaW5zdGFsbC1uZXdyZWxpYy5ucjEtaW5zdGFsbC1uZXdyZWxpYyIsInBhdGgiOiJvaGkiLCJyZWNpcGVOYW1lIjoiYXBhY2hlLW9wZW4tc291cmNlLWludGVncmF0aW9uIiwiYWN0aXZlQ29tcG9uZW50IjoiVlRTT0NvbW1hbmQiLCJhY3RpdmVFbnZpcm9ubWVudCI6ImFwYWNoZS1vcGVuLXNvdXJjZS1pbnRlZ3JhdGlvbiJ9) 단계를 따르세요. 다른 방식으로 통합을 설치해야 하는 경우 [Apache 모니터링 통합을](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration/) 참조하세요.

## 메트릭 노출

성공적으로 설치한 후 Apache 트래픽 서버를 성공적으로 시작한 다음 `8080` 포트를 사용하여 `your_ip` 에서 실행을 시작해야 합니다. 메트릭 노출 통계를 구성해야 합니다.

1. `plugin.config` 파일로 이동합니다.

   ```shell
   sudo nano /etc/trafficserver/plugin.config
   ```

2. `plugin.config` 파일에 아래 줄을 추가합니다.

   ```
   stats_over_http.so
   ```

3. 측정항목이 아래 URL에 노출되어 있는지 확인하세요.

   Apache 트래픽 서버의 지표: `http://YOUR_IP:8080/_stats`

## Apache 트래픽 서버용 NRI-Flex 구성 [#integrate]

Flex는 New Relic 인프라 에이전트와 함께 번들로 제공됩니다. 플렉스 구성 파일을 만들려면 다음 단계를 따르세요.

1. `integrations.d` 디렉토리로 이동합니다.

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

2. `nri-flex-apache-traffic-server-config.yml`, `nri-flex-ats-cache-config.yml` 및 `nri-flex-ats-http-config.yml` 라는 세 개의 파일을 만듭니다.

`event_type` 의 값은 NRDB에 측정항목을 저장하는 데 사용됩니다. 파일은 다음과 같아야 합니다.

`nri-flex-apache-traffic-server-config.yml`:

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ApcheTrafficServerMetrics
      apis:
        - event_type: ATSSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          remove_keys:
            - http
            - cache
```

`nri-flex-ats-cache-config.yml`:

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ATSCacheMetrics
      apis:
        - event_type: ATSCacheSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          keep_keys:
          	- cache
```

`nri-flex-ats-http-config.yml`:

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ApcheTrafficServerMetrics
      apis:
        - event_type: ATSHttpSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          keep_keys:
          	- http
```

## New Relic에 Apache 트래픽 서버 로그 전달

[로그 전달을](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) 사용하여 Apache Traffic Server 로그를 New Relic으로 전달할 수 있습니다.

Linux 시스템에서는 `logging.yml` 라는 로그 파일이 다음 경로에 있어야 합니다.

```shell
cd /etc/newrelic-infra/logging.d/
```

로그 파일을 만든 후 `logging.yml` 파일에 다음 스크립트를 추가합니다.

```yml
logs:
  - name: manager
    file: /var/log/trafficserver/manager.log
    attributes:
      logtype: ats_manager_logs
  - name: diags
    file: /var/log/trafficserver/diags.log
    attributes:
      logtype: ats_diags_logs 
```

## New Relic 인프라 에이전트 다시 시작

데이터 읽기를 시작하기 전에 [인프라 에이전트 문서](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) 의 지침을 사용하여 인프라 에이전트를 다시 시작하십시오.

```shell
sudo systemctl restart newrelic-infra.service
```

몇 분 안에 Apache 트래픽 서버가 메트릭을 [one.newrelic.com](https://one.newrelic.com) 으로 보냅니다.

## 데이터 찾기

`Apache Traffic Server` 라는 사전 빌드된 대시보드 템플릿을 선택하여 Apache Traffic Server 서버 측정항목을 모니터링할 수 있습니다. 사전 구축된 대시보드 템플릿을 사용하려면 다음 단계를 따르세요.

1. [one.newrelic.com](https://one.newrelic.com) 에서,

   <DNT>
     **+ Integrations & Agents**
   </DNT>

   페이지로 이동하세요.

2. <DNT>
     **Dashboards**
   </DNT>

   을 클릭합니다.

3. 검색창에 `Apache Traffic Server` 를 입력합니다.

4. Apache 트래픽 서버 대시보드가 나타납니다. 그것을 클릭하여 설치하십시오.

Apache Traffic Server 대시보드는 맞춤형 대시보드로 간주되며 <DNT>**Dashboards**</DNT> UI 에서 찾을 수 있습니다. 대시보드 사용 및 편집에 대한 문서는 [대시보드 문서 를](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) 참조하세요.

다음은 Apache 트래픽 서버에서 캐시 총 누락을 확인하는 NRQL 쿼리입니다.

```sql
SELECT latest(global.proxy.process.cache_total_misses) AS 'cache misses' FROM ATSCacheSampleMetrics
```

## 다음은 뭐지?

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* 대시보드를 [관리하여 대시](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) 보드 표시 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가합니다.
