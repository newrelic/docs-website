---
title: 선인장 통합
tags:
  - Cacti integration
  - New Relic integrations
metaDescription: Use the New Relic infrastructure agent to monitor your Cacti data.
freshnessValidatedDate: never
translationType: machine
---

Cacti를 뉴렐릭과 통합하면 뉴렐릭의 통합 플랫폼 내에서 RRD 데이터에 대한 사용자 친화적인 그래픽 표현이 제공됩니다.

<img
  title="Cacti dashboard"
  alt="Cacti dashboard"
  src="/images/infrastructure_screenshot-full_cacti-dashboard.webp"
/>

<figcaption>
  뉴렐릭으로 Cacti 통합을 설정한 후 대시보드에서 데이터를 볼 수 있습니다.
</figcaption>

## Cacti 통합 설정 [#setup]

Cacti 통합을 설정하려면 다음 단계를 완료하세요.

<Steps>
  <Step>
    ## 인프라 에이전트 설치 [#install]

    Cacti 통합을 사용하려면 먼저 동일한 호스트에 [인프라 에이전트를 설치](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) 해야 합니다.
  </Step>

  <Step>
    ## 선인장 지표 노출 [#Expose]

    RRD 데이터를 CSV 또는 JSON 형식으로 노출하려면 아래 단계를 완료하세요.

    1. RRDTool을 사용하여 Cacti의 RRD 파일에서 `XML format` 로 데이터를 내보냅니다.
    2. XML 데이터를 `CSV or JSON` 형식으로 변환합니다.
  </Step>

  <Step>
    ## NRI-Flex를 사용하여 CSV 형식 지표 캡처 [#capture-csv]

    Flex는 뉴렐릭 인프라 에이전트와 함께 번들로 제공됩니다. Cacti용 NRI-Flex를 구성하고 flex 설정 파일을 생성해야 합니다. 다음과 같이하세요:

    1. `/newrelic-infra/integrations.d` 경로에 `cacti-config.yml` 이라는 파일을 생성합니다.

    2. 다음 설정 예시로 `cacti-config.yml` 업데이트합니다.

       ```yml
       ---
       integrations:
         - name: nri-flex
           config:
             name: machineLoad
             apis:
              - name: machineLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_load_1min_2.csv
              - name: memSwap
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_swap_5.csv
              - name: proc
                file: /home/ubuntu/xmlToCsv/local_linux_machine_proc_1.csv
              - name: machineUser
                file: /home/ubuntu/xmlToCsv/local_linux_machine_users_3.csv
              - name: memBuffers
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_buffers_4.csv
              - name: ApacheCpuLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_cpuload_6.csv
              - name: ApacheTotalHits
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_hits_7.csv
              - name: ApacheTotalKbytes
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_kbytes_8.csv
              - name: UserLogins
                file: /home/ubuntu/xmlToCsv/local_linux_machine_active_10.csv
       ```
  </Step>

  <Step>
    ## 선인장 로그 전달 [#forward]

    Cacti 로그를 뉴렐릭으로 전달하려면 다음 단계를 따르세요.

    1. 다음 경로에 있는 `logging.yml` 이라는 로그 파일을 편집합니다.

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. 다음 스니펫을 `logging.yml` 파일에 추가합니다. 필요한 경우 `file` Cacti 로그 파일 경로로 바꿉니다.

       ```yml
       logs:
         - name: cacti.log
           file: /var/www/html/cacti/log/LOG_FILE_NAME
           attributes:
             logtype: cacti_log
       ```
  </Step>

  <Step>
    ## New Relic 인프라 에이전트 다시 시작 [#restart]

    인프라 에이전트를 다시 시작합니다.

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    귀하의 전설 지표가 몇 분 안에 [one.newrelic.com](https://one.newrelic.com) 으로 전송될 것입니다.
  </Step>

  <Step>
    ## 데이터 찾기 [#find-data]

    사전 제작된 대시보드 템플릿을 사용하여 Cacti의 멋진 차트를 모니터링할 수 있습니다. 사전 구축된 대시보드 템플릿을 사용하려면 다음 단계를 따르세요.

    1. [one.newrelic.com](https://one.newrelic.com) 에서,

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       페이지로 이동

    2. 클릭

       <DNT>
         **Dashboards**
       </DNT>

    3. 검색창에 다음을 입력하세요. `Cacti`

    4. Cacti 대시보드가 나타납니다. 클릭해서 설치하세요

       귀하의 Cacti 대시보드는 맞춤형 대시보드로 간주되며 <DNT>**Dashboards**</DNT> UI 에서 찾을 수 있습니다. 대시보드 사용 및 편집에 대한 문서는 [대시보드 문서 를](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) 참조하세요.

       다음은 사용자 로그인 횟수를 보기 위한 NRQL 쿼리의 예입니다.

       ```sql
       SELECT latest(value) FROM UserLoginsSample FACET name
       ```
  </Step>
</Steps>

## 다음은 뭐지? [#whats-next]

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* 대시보드 표시 모드를 조정하거나 더 많은 콘텐츠를 추가하려면 [대시보드를 관리하세요](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) .
