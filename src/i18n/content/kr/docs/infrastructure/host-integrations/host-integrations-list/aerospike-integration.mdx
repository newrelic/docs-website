---
title: Aerospike 플랫폼 통합
tags:
  - New Relic integrations
  - Aerospike
metaDescription: Use New Relic's infrastructure monitoring to get a dashboard with metrics from your Aerospike platform.
freshnessValidatedDate: never
translationType: machine
---

당사의 Aerospike 통합은 Aerospike 데이터 플랫폼의 성능을 모니터링하여 애플리케이션의 문제를 진단하고 코드를 최적화하는 데 도움을 줍니다. 당사의 Aerospike 통합은 가장 중요한 Aerospike 앱 메트릭이 포함된 사전 구축된 대시보드를 제공합니다.

<img
  title="aerospike dashboard"
  alt="A screenshot depicting an Aerospike pre-built dashboard"
  src="/images/infrastructure_screenshot-full_aerospike-dashboard.webp"
/>

<figcaption>
  New Relic과의 통합을 설정한 후 즉시 사용 가능한 것과 같은 대시보드에서 데이터를 확인하십시오.
</figcaption>

<Steps>
  <Step>
    ## 인프라 에이전트 설치 [#infra]

    Aerospike 통합을 사용하려면 먼저 동일한 호스트에 [인프라 에이전트를 설치](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) 해야 합니다. 에이전트 에이전트는 호스트 자체를 모니터링하는 반면, 다음 단계에서 설치하게 될 통합은 Aerospike 관련 데이터로 모니터링을 확장합니다.
  </Step>

  <Step>
    ## Aerospike 통합 설치

    1. nri-aerospike를 설치하려면 다음 명령을 사용하십시오.

       ```bash
       sudo apt-get install nri-aerospike
       ```

    2. 다음을 통해 `nri-aerospike` (가) 성공적으로 설치되었는지 확인하세요.

       * <DNT>**Exporter**</DNT> 이 `/var/db/newrelic-infra/newrelic-integrations/bin` 디렉터리에 설치되어 있는지 확인합니다.
       * `/etc/newrelic-infra/integrations.d` 디렉토리에서 설정 파일을 확인하는 중
  </Step>

  <Step>
    ## 통합을 구성합니다.

    1. 샘플 설정 파일의 이름을 `aerospike-config.yml.sample` 에서 `aerospike-config.yml` 로 바꿉니다.

       ```shell
       sudo cp aerospike-config.yml.sample aerospike-config.yml
       ```

    2. 필요에 따라 구성 파일을 편집합니다. 다음은 설정 파일의 기본 예입니다.

       ```yml
       integrations:
         - name: nri-aerospike
           config:
             # API URL of the aerospike service
             aerospike_db_host: localhost
             aerospike_db_port: 3000

             # Port to expose scrape endpoint on, If this is not provided a random port will be used to launch the exporter
             exporter_port: 9145

             # Cluster name is used on the aerospike.prometheus.json.template - 
             # all the metrics captured by nri-prometheus will be categorized under this cluster name
             aerospike_cluster_name: YOUR_DESIRED_CLUSTER_NAME
             scrape_timeout: 5s
      
             label_type: development
             label_source: aerospike

             exporter_files_path: /tmp
       ```

       `nri-aerospike`(를) 성공적으로 구성한 후에는 `http://localhost:9145/metrics` 에서 모니터 Aerospike 지표 목록을 볼 수 있습니다.
  </Step>

  <Step>
    ## 데이터 찾기 [#find-data]

    Aerospike 대시보드를 얻으려면:

    1. [one.newrelic.com](https://one.newrelic.com) 에서, [<DNT>**Integrations & Agents**</DNT> 페이지](https://one.newrelic.com/marketplace) 로 이동하세요.
    2. <DNT>**Dashboards**</DNT> 을 클릭합니다.
    3. 검색창에 `Aerospike` 를 입력합니다.
    4. Aerospike 대시보드가 나타납니다. 그것을 클릭하여 설치하십시오.

       Aerospike 대시보드는 맞춤형 대시보드로 간주되며 <DNT>**Dashboards**</DNT> UI 에서 찾을 수 있습니다. 대시보드 사용 및 편집에 대한 문서는 [대시보드 문서 를](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) 참조하세요.

       이 통합은 [인프라 에이전트](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events)형식으로 데이터를 보고합니다.

       다음은 네임스페이스에서 사용 가능한 메모리 용량의 백분율을 확인하는 NRQL 쿼리의 예입니다.

       ```sql
       FROM Metric 
       SELECT latest (aerospike_namespace_memory_free_pct)
       ```
  </Step>
</Steps>

## 다음은 뭐지? [#whats-next]

데이터 쿼리 및 맞춤형 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* [쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [맞춤형 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* [대시보드 관리](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)
