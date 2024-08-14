---
title: 링커드 통합
tags:
  - New Relic integrations
  - Linkerd integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Linkerd.
freshnessValidatedDate: '2024-05-29T00:00:00.000Z'
translationType: machine
---

Linkerd 통합은 Kubernetes용 서비스 메시입니다. 코드를 변경할 필요 없이 런타임 디버깅, 옵저버빌리티, 안정성 및 보안을 제공하여 서비스를 더 쉽고 안전하게 실행할 수 있습니다.

<img
  title="Linkerd dashboard"
  alt="Linkerd dashboard"
  src="/images/infrastructure_screenshot_full-linkerd-dashboard.webp"
/>

<figcaption>
  Linkerd 통합을 설정하면 Linkerd 지표에 대한 대시보드가 표시됩니다.
</figcaption>

<Steps>
  <Step>
    ## 인프라 에이전트 설치 [#infra-install]

    Linkerd 통합을 사용하려면 동일한 호스트에 [인프라 에이전트도 설치](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) 해야 합니다. 클라이언트 에이전트는 호스트 자체를 모니터링하는 반면, 다음 단계에서 설치하게 될 통합은 Linkerd 관련 데이터로 모니터링을 확장합니다.
  </Step>

  <Step>
    ## 링커드 지표 노출 [#expose-linkerd-metrics]

    1. 모든 Linkerd 필드를 확인하려면 다음 펼쳐보기를 사용하세요:

       ```shell
           kubectl get pods -n <LINKERD_NAMESPACE>
       ```

       * `LINKERD_NAMESPACE` Linkerd 파드가 실행 중인 실제 지우스페이스로 바꾸세요.

    2. 다음으로 각 Linkerd 패드에 대해 모든 지표를 포트 4191로 보내야 합니다.

       ```shell
           kubectl port-forward --address 0.0.0.0 -n <LINKERD_NAMESPACE> <LINKERD_POD_NAME> 4191:4191 &
       ```

       * `LINKERD_NAMESPACE` Linkerd 패드가 실행 중인 실제 지우스페이스로 바꾸고, `LINKERD_POD_NAME` 각 Linkerd 패드의 실제 이름으로 바꾸세요.
  </Step>

  <Step>
    ## nri-prometheus와 Linkerd 통합 활성화 [#enable-linkerd]

    Linkerd 통합을 설정하려면 다음 단계를 따르세요.

    1. 통합 디렉터리에 `nri-prometheus-config.yml` 이라는 파일을 만듭니다.

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. 에이전트가 Linkerd 데이터를 캡처할 수 있도록 하려면 다음 스니펫을 `nri-prometheus-config.yml` 파일에 추가하세요.

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true 
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk 
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "YOUR_DESIRED_CLUSTER_NAME"

             targets:
               - description: Linkerd metrics list
                 urls: ["http://<ip-address>:4191/metrics","http://<ip-address>:9090/metrics"]

             #     tls_config:
             #     ca_file_path: "/etc/etcd/etcd-client-ca.crt"
             #     cert_file_path: "/etc/etcd/etcd-client.crt"
             #      key_file_path: "/etc/etcd/etcd-client.key"

             # Whether the integration should run in verbose mode or not. Defaults to false
             verbose: false

             # Whether the integration should run in audit mode or not. Defaults to false.
             # Audit mode logs the uncompressed data sent to New Relic. Use this to log all data sent.
             # It does not include verbose mode. This can lead to a high log volume, use with care
             audit: false

             # The HTTP client timeout when fetching data from endpoints. Defaults to 30s.
             # scrape_timeout: "30s"

             # Length in time to distribute the scraping from the endpoints
             scrape_duration: "5s"

             # Number of worker threads used for scraping targets.
             # For large clusters with many (&gt;400) endpoints, slowly increase until scrape
             # time falls between the desired `scrape_duration`.
             # Increasing this value too much will result in huge memory consumption if too
             # many metrics are being scraped.
             # Default: 4
             # worker_threads: 4

             # Whether the integration should skip TLS verification or not. Defaults to false
             insecure_skip_verify: true
           timeout: 10s
       ```
  </Step>

  <Step>
    ## New Relic 인프라 에이전트 다시 시작

    인프라 에이전트를 다시 시작하십시오.

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    몇 분 안에 애플리케이션이 메트릭을 [one.newrelic.com](https://one.newrelic.com) 으로 보냅니다.
  </Step>

  <Step>
    ## 데이터 찾기

    `Linkerd` 이라는 사전 제작된 대시보드 템플릿을 선택하여 Linkerd의 피규어 메트릭을 모니터링할 수 있습니다. 사전 구축된 대시보드 템플릿을 사용하려면 다음 단계를 따르세요.

    1. [one.newrelic.com](https://one.newrelic.com) 에서,

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       페이지로 이동하세요.

    2. <DNT>
         **Dashboards**
       </DNT>

       을 클릭합니다.

    3. 검색창에 `Linkerd` 를 입력합니다.

    4. Linkerd 대시보드 옵션이 나타나면 클릭하여 설치하세요.

       Linkerd 대시보드는 맞춤형 대시보드로 간주되며 <DNT>**Dashboards**</DNT> UI 에서 찾을 수 있습니다. 대시보드 사용 및 편집에 대한 문서는 [대시보드 문서 를](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) 참조하세요.

       다음은 Linkerd 다운스트림 총 연결을 확인하는 NRQL 쿼리입니다.

       ```sql
       SELECT latest(process_virtual_memory_bytes)/(1024*1024) as 'Memory in MB' FROM Metric
       ```
  </Step>
</Steps>

## 다음은 뭐지?

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* 대시보드를 [관리하여 대시](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) 보드 표시 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가합니다.
