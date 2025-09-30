---
title: Vertica 통합
tags:
  - Vertica integration
  - New Relic integrations
metaDescription: Use New Relics infrastructure agent to get a dashboard with metrics from your Vertica.
freshnessValidatedDate: '2023-09-01T00:00:00.000Z'
translationType: machine
---

Vertica 통합은 데이터 스토리지 성능을 모니터링합니다.

<img
  title="Vertica dashboard"
  alt="Vertica dashboard"
  src="/images/infrastructure_screenshot-full_Vertica-dashboard.webp"
/>

<figcaption>
  Vertica 통합을 설정한 후 Vertica 지표에 대한 대시보드가 제공됩니다.
</figcaption>

<Steps>
  <Step>
    ## 인프라 에이전트 설치 [#infra-install]

    두 가지 방법으로 인프라 에이전트를 설치할 수 있습니다.

    * [가이드 설치](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) 는 시스템을 검사하고 시스템에 가장 적합한 애플리케이션 모니터링 에이전트와 함께 인프라 에이전트를 설치하는 CLI 도구입니다. 가이드 설치 작동 방식에 대해 자세히 알아보려면 [가이드 설치 개요](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview) 를 확인하세요.
    * 인프라 에이전트를 수동으로 설치하려면 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/)또는 [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/)용 수동 설치에 대한 자습서를 따를 수 있습니다.
  </Step>

  <Step>
    ## 측정항목을 캡처하려면 `nri-flex` 사용하세요. [#flex]

    Flex는 New Relic 인프라 에이전트와 함께 번들로 제공됩니다. Vertica에 대해 `nri-flex` 구성하고 Flex 구성 파일을 생성해야 합니다.

    이 단계를 따르세요:

    1. 다음 경로에 `vertica-flex-config.yml` 이라는 파일을 만듭니다.

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. 다음 구성으로 `vertica-flex-config.yml` 파일을 업데이트합니다.

       * `EVENT_TYPE`: `EVENT_TYPE` NRQL을 사용하여 쿼리할 수 있는 New Relic 데이터베이스 테이블로 간주할 수 있습니다.
       * `COMMAND`: 터미널에서 메트릭을 인쇄하는 데 사용되는 명령이 포함되어 있습니다.

         구성 파일이 업데이트되면 다음과 같이 표시됩니다.

       ```yml
         --- 
         integrations:
           - name: nri-flex
             config:
               name: VerticaFlex
               apis:
                 - database: vertica
                   db_conn: 'vertica://dbadmin:vertica@13.235.79.230:5433/dbadmin'
                   logging:
                     open: true
                   db_async: true # process queries async
                   db_queries:
                     - name: VerticaFindCitiesDetails
                       run: SELECT * FROM cities;
                     - name: VerticaDiskSpaceUsedByTables
                       run: SELECT projection_schema, anchor_table_name, to_char(sum(used_bytes)/1024/1024/1024,'999,999.99') as disk_space_used_gb FROM projection_storage
       GROUP by projection_schema, anchor_table_name ORDER by disk_space_used_gb desc limit 50;
                     - name: VerticaFreeDiskSpace
                       run: SELECT to_char(sum(disk_space_free_mb)/1024,'999,999,999') AS disk_space_free_gb, to_char(sum(disk_space_used_mb)/1024,'999,999,999') AS disk_space_used_gb FROM disk_storage;
                     - name: VerticaUserInformation
                       run: SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap FROM users;
                     - name: VerticaUserDetails
                       run: SELECT * FROM user_sessions;
                     - name: VerticaQueriesByUser
                       run: SELECT * FROM query_profiles WHERE user_name ILIKE '%dbadmin%';
                     - name: VerticaUserRolesInformation
                       run: SELECT * FROM roles;
                     - name: VerticaResourcePoolAssignments
                       run: SELECT user_name, resource_pool FROM users;
                     - name: VerticaTableInfo
                       run: SELECT table_name, is_flextable, is_temp_table, is_system_table, count(*) FROM tables GROUP by 1,2,3,4;
                     - name: VerticaActiveEvents
                       run: SELECT * FROM active_events WHERE event_problem_description NOT ILIKE '%state to UP';
                     - name: VerticaDiskStorage
                       run:  SELECT node_name, storage_path, storage_usage, storage_status, disk_space_free_percent FROM disk_storage;
                     - name: VerticaLongRunningQueries
                       run: SELECT query_duration_us/1000000/60 AS query_duration_mins, table_name, user_name, processed_row_count AS rows_processed, substr(query,0,70) FROM query_profiles ORDER BY query_duration_us DESC LIMIT 250;
                     - name: VerticaLicenseConsumption
                       run: SELECT GET_COMPLIANCE_STATUS();
                     - name: VerticaAudit
                       run: SELECT AUDIT('');

       ```
  </Step>

  <Step>
    ## Vertica 로그를 New Relic으로 전달 [#logs]

    [로그 전달을](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) 사용하여 Vertica 로그를 New Relic으로 전달할 수 있습니다.

    Linux 시스템에서는 다음 경로에서 `logging.yml` 이라는 로그 파일을 찾을 수 있습니다.

    ```shell
    /etc/newrelic-infra/logging.d/
    ```

    로그 파일을 만든 후 `logging.yml` 파일에 다음 스크립트를 추가합니다.

    ```yml
    logs:
      - name: vertica.log
        file: /home/dbadmin/vdb/v_vdb_node0001_catalog/vertica.log
        attributes:
          logtype: vertica_log
    ```
  </Step>

  <Step>
    ## New Relic 인프라 에이전트 다시 시작 [#restart]

    데이터 읽기를 시작하기 전에 [인프라 에이전트 문서](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) 의 지침을 사용하여 인프라 에이전트를 다시 시작하십시오.

    ```bash
    sudo systemctl restart newrelic-infra.service
    ```

    몇 분 안에 애플리케이션이 메트릭을 [one.newrelic.com](https://one.newrelic.com)으로 보냅니다.
  </Step>

  <Step>
    ## 데이터 찾기 [#find-data]

    `Vertica` 이라는 사전 구축된 대시보드 템플릿을 선택하여 Vertica 애플리케이션 측정항목을 모니터링할 수 있습니다. 사전 구축된 대시보드 템플릿을 사용하려면 다음 단계를 따르세요.

    1. [one.newrelic.com](https://one.newrelic.com) 에서,

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       페이지로 이동하세요.

    2. <DNT>
         **Dashboards**
       </DNT>

       을 클릭합니다.

    3. 검색창에 `vertica` 를 입력합니다.

    4. Vertica 대시보드가 나타납니다. 그것을 클릭하여 설치하십시오.

       귀하의 Vertica 대시보드는 맞춤형 대시보드로 간주되며 <DNT>**Dashboards**</DNT> UI 에서 찾을 수 있습니다. 대시보드 사용 및 편집에 대한 문서는 [대시보드 문서 를](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) 참조하세요.

       다음은 사용자 이름, 리소스 풀, 메모리 한도, 임시 공간 한도 및 런타임 한도와 같은 데이터 포인트에 대한 데이터베이스 사용자 정보를 검색하는 NRQL 쿼리입니다.

       ```sql
       SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap 
       FROM VerticaUserInformation;
       ```
  </Step>
</Steps>

## 다음은 뭐지? [#next]

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)

* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)

* [대시보드를 관리하여](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)

  <InlinePopover type="dashboards"/>

  디스플레이 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가하세요.
