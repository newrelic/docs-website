---
title: 아파치 메소스 통합
tags:
  - New Relic integrations
  - Apache Mesos integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Apache Mesos.
freshnessValidatedDate: '2024-05-20T00:00:00.000Z'
translationType: machine
---

성능, 상태 및 리소스 활용도에 대한 포괄적인 인사이트를 위해 뉴렐릭을 통해 Apache Mesos 클러스터를 원활하게 모니터링합니다. 마스터 및 슬레이브 노드를 추적하고, 작업 실행을 모니터링하고, 시스템 지수를 검토합니다.

<img
  title="Apache Mesos dashboard"
  alt="Apache Mesos dashboard"
  src="/images/infrastructure_screenshot_full-apache-mesos-dashboard.webp"
/>

<figcaption>
  Apache Mesos 통합을 설정한 후 Apache Mesos 지표에 대한 대시보드를 제공합니다.
</figcaption>

<Steps>
  <Step>
    ## 인프라 에이전트 설치 [#infra-install]

    Apache Mesos 통합을 사용하려면 동일한 호스트에 [인프라 에이전트도 설치](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) 해야 합니다. 클라이언트 에이전트는 호스트 자체를 모니터링하는 반면, 다음 단계에서 설치하게 될 통합은 Apache Mesos 관련 데이터로 모니터링을 확장합니다.
  </Step>

  <Step>
    ## nri-flex와 Apache Mesos 통합 활성화

    Apache Mesos 통합을 설정하려면 다음 단계를 따르세요.

    1. 통합 디렉터리에 `nri-apache-mesos-config.yml` 이라는 파일을 만듭니다.

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-apache-mesos-config.yml
       ```

    2. 에이전트가 Apache Mesos 데이터를 캡처할 수 있도록 하려면 `nri-apache-mesos-config.yml` 파일에 다음 스니펫을 추가하세요.

       ```yml
       integrations:
         - name: nri-flex
           interval: 30s
           config:
             name: apacheMesos
             apis:
               - event_type: apacheMesos
                 url: http://<ip-address>:5050/metrics/snapshot
       ```
  </Step>

  <Step>
    ## Apache Mesos 로그 전달

    Apache Mesos 로그를 뉴렐릭으로 전달하려면 다음 단계를 따르세요.

    1. 다음 경로에 있는 `logging.yml` 이라는 로그 파일을 편집합니다.

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. 다음 스니펫을 `logging.yml` 파일에 추가합니다. 필요한 경우 `file` Apache Mesos 로그 파일 경로로 바꾸세요.

       ```yml
       logs:
         - name: apache-mesos.log
           file: /var/log/mesos/LOG_FILE_NAME
           attributes:
             logtype: apache_mesos_log
       ```
  </Step>

  <Step>
    ## New Relic 인프라 에이전트 다시 시작

    인프라 에이전트를 다시 시작합니다.

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    몇 분 안에 귀하의 견적이 [one.newrelic.com](https://one.newrelic.com) 으로 지표를 보내기 시작합니다.
  </Step>

  <Step>
    ## 데이터 찾기

    사전 구축된 대시보드 템플릿을 사용하여 Apache Mesos의 멋진 메트릭을 모니터링할 수 있습니다. 사전 구축된 대시보드 템플릿을 사용하려면 다음 단계를 따르세요.

    1. [one.newrelic.com](https://one.newrelic.com) 에서,

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       페이지로 이동

    2. 클릭

       <DNT>
         **Dashboards**
       </DNT>

    3. 검색창에 다음을 입력하세요. `Apache Mesos`

    4. Apache Mesos 대시보드가 나타납니다. 클릭해서 설치하세요

       Apache Mesos 대시보드는 맞춤형 대시보드로 간주되며 <DNT>**Dashboards**</DNT> UI 에서 찾을 수 있습니다. 대시보드 사용 및 편집에 대한 문서는 [대시보드 문서 를](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) 참조하세요.

       다음은 Apache Mesos 마스터업타임을 보기 위한 NRQL 쿼리의 예입니다.

       ```sql
       SELECT latest(`master/uptime_secs`) as 'Masters uptime (seconds)' FROM apacheMesos
       ```
  </Step>
</Steps>

## 다음은 뭐지?

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* 대시보드를 [관리하여 대시](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) 보드 표시 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가합니다.
