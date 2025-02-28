---
title: Microsoft SQL Server의 통합 쿼리 수준 모니터링
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
  - Configuration
metaDescription: Configuration New Relic's Kafka integration.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="시사">
  이 기능은 아직 개발 중이지만 꼭 사용해 보시기 바랍니다!

  이 기능은 현재 [사전 출시 정책](https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy/) 에 따라 미리보기의 일부로 제공됩니다.
</Callout>

쿼리 수준 분석을 보고 MSSQL 데이터베이스 내에서 SQL 쿼리를 모니터링하여 성능과 영향을 평가할 수 있습니다. 이는 인사이트 실행 시간, 리소스 소비 및 잠재적인 병목기능 현상, 병목지점을 제공하여 데이터베이스 작업을 최적화할 수 있도록 합니다. 자세한 내용은 [쿼리 수준 분석을](/docs/infrastructure/infrastructure-data/query-level-monitoring) 참조하세요.

<img title="Query Performance monitoring" alt="Query Performance monitoring" src="/images/mssql-query-performance.webp" />

## 필수 조건:

* Microsoft SQL Server는 2017, 2019 또는 2022를 지원합니다.
* DB 사용자는 sysadmin 고정 서버 역할의 멤버이거나 `VIEW SERVER STATE` 권한이 있어야 합니다.

쿼리 수준 모니터링 기능을 활성화하려면 다음 단계를 따르세요.

<Steps>
  <Step>
    ## SQL Server 및 Windows 인증 모드를 활성화하려면

    SQL Server 및 Windows 인증 모드에서 로그인을 활성화합니다. 자세한 내용은 [Microsoft 인증 모드 변경 설명서를](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/change-server-authentication-mode?view=sql-server-ver16&tabs=ssms) 참조하세요.
  </Step>

  <Step>
    ## TCP를 활성화하려면

    1. [설명서를](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver16)사용하여 인스턴스에서 원격 액세스를 위해 TCP가 활성화되어 있는지 확인하세요.
    2. 방화벽 설정을 확인하세요:

    * 방화벽이 포트 `1433` 에서 트래픽을 허용하는지 확인하세요. 이는 Microsoft SQL Server의 수신 포트입니다.

      * **Windows Defender Firewall with Advanced Security** \[고급 보안 기능이 있는 Windows Defender 방화벽을] 엽니다.
      * 왼쪽 메뉴에서 **Inbound Rules** \[인바운드 규칙을] 클릭합니다.
      * SQL Server에 대한 규칙을 찾아보세요(일반적으로 SQL Server(TCP-In) 또는 SQL Server TCP 1433이라고 합니다).
      * 규칙이 없으면 포트 1433에서 TCP 트래픽을 허용하기 위해 새 규칙을 만듭니다.
  </Step>

  <Step>
    ## 쿼리 저장소를 활성화하려면 [#queryStore]

    다음 명령을 실행하세요

    ```sql
    ALTER DATABASE DATABASE_NAME SET QUERY_STORE = ON ( QUERY_CAPTURE_MODE = ALL, DATA_FLUSH_INTERVAL_SECONDS = 900 )
    ```
  </Step>

  <Step>
    ## 아래 쿼리를 실행하여 쿼리 저장소가 활성화되었는지 확인하세요. [#confirmQueryStore]

    쿼리의 출력이 1이면 쿼리 저장소가 활성화된 것으로 가정할 수 있습니다.

    ```sql
    SELECT is_query_store_on FROM sys.databases where physical_database_name = DATABASE_NAME
    ```
  </Step>

  <Step>
    ## MSSQL 에이전트를 통합하려면

    [이 가이드를 사용하여 MSSQL 에이전트를 통합하세요.](/install/microsoft-sql)
  </Step>

  <Step>
    ## 쿼리 성능 모니터링을 활성화하기 위해 MSSQL 통합을 구성하려면

    1. 디렉터리를 통합 설정 폴더로 변경하려면 다음을 실행하세요.

    ```bash
    cd "C:\Program Files\New Relic\newrelic-infra\integrations.d\"
    ```

    2. 다음 설정으로 `mssql-config.yml` 파일을 편집하세요.

    * `ENABLE_QUERY_MONITORING` - 쿼리 성능 모니터링 활성화 - 기본값은 `false` 입니다.
    * `QUERY_MONITORING_RESPONSE_TIME_THRESHOLD `- 개별 쿼리 성능 지표를 검색하려면 쿼리 응답 시간에 대한 올리브 값을 ms 단위로 설정합니다. `Defaults` 이 `500 ms` 로 설정되었습니다.
    * `QUERY_MONITORING_COUNT_THRESHOLD` - 각 쿼리 성능 지표에 대한 레코드 수입니다. `Defaults` 이 `20` 로 설정되었습니다.

    ```yaml
      integrations:
      - name: nri-mssql
      env:
        HOSTNAME: localhost
        PORT: 1433
        USERNAME: USERNAME
        PASSWORD: PASSWORD
        ENABLE_SSL: true
        TRUST_SERVER_CERTIFICATE: true
        # Enable collection of detailed query performance metrics.
        ENABLE_QUERY_MONITORING: true
        # Threshold in milliseconds for query response time. If response time exceeds this threshold, the query will be considered slow.
        QUERY_MONITORING_RESPONSE_TIME_THRESHOLD: 500
        # Maximum number of queries returned in query analysis results.
        QUERY_MONITORING_COUNT_THRESHOLD: 20
        # Interval in seconds for fetching grouped slow queries; Should always be same as mysql-config interval.
        QUERY_MONITORING_FETCH_INTERVAL: 15
      interval: 15s
      labels:
        environment: production
      inventory_source: config/mssql
    ```
  </Step>

  <Step>
    ## 데이터 찾기

    사전 구축된 대시보드 템플릿을 사용하여 MSSQL 메트릭을 모니터링할 수 있습니다. 사전 구축된 대시보드 템플릿을 사용하려면 다음 단계를 따르세요.

    1. [one.newrelic.com](https://one.newrelic.com) 에서, <DNT>**+ Integrations &amp; Agents**</DNT> 페이지로 이동하세요.
    2. 딸깍 하는 소리 <DNT>**Dashboards**</DNT>
    3. 검색창에 다음을 입력하세요. `MSSQL On-Host Integration`
    4. MSSQL 대시보드가 나타납니다. 클릭해서 설치하세요.
  </Step>
</Steps>

## 통합을 통해 수집된 메트릭

<CollapserGroup>
  <Collapser id="blockingSession" title="세션 메트릭 차단">
    <table>
      <thead>
        <tr>
          <th>
            미터법
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `blocking_spid`
          </td>

          <td>
            차단 세션의 ID입니다.
          </td>
        </tr>

        <tr>
          <td>
            `blocking_status`
          </td>

          <td>
            차단 세션의 상태입니다.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_spid`
          </td>

          <td>
            차단된 세션의 ID입니다.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_status`
          </td>

          <td>
            차단된 세션의 상태입니다.
          </td>
        </tr>

        <tr>
          <td>
            `wait_type`
          </td>

          <td>
            차단된 세션이 경험하는 대기 유형입니다.
          </td>
        </tr>

        <tr>
          <td>
            `wait_time_in_seconds`
          </td>

          <td>
            세션이 대기한 시간(초)입니다.
          </td>
        </tr>

        <tr>
          <td>
            `command_type`
          </td>

          <td>
            수행되는 명령의 유형.
          </td>
        </tr>

        <tr>
          <td>
            `database_name`
          </td>

          <td>
            차단이 발생하는 데이터베이스의 이름입니다.
          </td>
        </tr>

        <tr>
          <td>
            `blocking_query_text`
          </td>

          <td>
            차단을 유발하는 쿼리의 텍스트입니다.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_query_text`
          </td>

          <td>
            차단되는 쿼리의 텍스트입니다.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_query_start_time`
          </td>

          <td>
            차단된 쿼리의 시작 시간입니다.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="executionPlan" title="쿼리 실행 계획 메트릭">
    <table>
      <thead>
        <tr>
          <th>
            미터법
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `sql_text`
          </td>

          <td>
            SQL 명령문 텍스트.
          </td>
        </tr>

        <tr>
          <td>
            `query_id`
          </td>

          <td>
            쿼리에 대한 고유 식별자입니다.
          </td>
        </tr>

        <tr>
          <td>
            `query_plan_id`
          </td>

          <td>
            쿼리 계획에 대한 고유 식별자입니다.
          </td>
        </tr>

        <tr>
          <td>
            `NodeId`
          </td>

          <td>
            실행 계획의 노드 ID입니다.
          </td>
        </tr>

        <tr>
          <td>
            `PhysicalOp`
          </td>

          <td>
            이 노드가 수행하는 물리적 작업입니다.
          </td>
        </tr>

        <tr>
          <td>
            `LogicalOp`
          </td>

          <td>
            이 노드가 나타내는 논리적 연산입니다.
          </td>
        </tr>

        <tr>
          <td>
            `EstimateRows`
          </td>

          <td>
            이 작업으로 생성될 행의 예상 개수입니다.
          </td>
        </tr>

        <tr>
          <td>
            `EstimateIO`
          </td>

          <td>
            이 작업의 예상 I/O 비용입니다.
          </td>
        </tr>

        <tr>
          <td>
            `EstimateCPU`
          </td>

          <td>
            이 작업의 예상 CPU 비용입니다.
          </td>
        </tr>

        <tr>
          <td>
            `AvgRowSize`
          </td>

          <td>
            이 노드에서 처리하는 행의 평균 크기입니다.
          </td>
        </tr>

        <tr>
          <td>
            `TotalSubtreeCost`
          </td>

          <td>
            이 서브트리를 실행하는 데 드는 총 비용 추정치입니다.
          </td>
        </tr>

        <tr>
          <td>
            `EstimatedOperatorCost`
          </td>

          <td>
            노드 운영에 드는 비용 추정.
          </td>
        </tr>

        <tr>
          <td>
            `EstimatedExecutionMode`
          </td>

          <td>
            이 작업의 예상 실행 모드입니다.
          </td>
        </tr>

        <tr>
          <td>
            `GrantedMemoryKb`
          </td>

          <td>
            이 쿼리에 대해 허용된 메모리 양(KB)입니다.
          </td>
        </tr>

        <tr>
          <td>
            `SpillOccurred`
          </td>

          <td>
            유출이 발생했는지 여부를 나타내는 부울 지표.
          </td>
        </tr>

        <tr>
          <td>
            `NoJoinPredicate`
          </td>

          <td>
            조인 조건이 있는지 여부를 나타내는 부울 지표입니다.
          </td>
        </tr>

        <tr>
          <td>
            `total_worker_time`
          </td>

          <td>
            총 작업자 시간(밀리초)입니다.
          </td>
        </tr>

        <tr>
          <td>
            `total_elapsed_time`
          </td>

          <td>
            총 경과 시간(밀리초)입니다.
          </td>
        </tr>

        <tr>
          <td>
            `total_logical_reads`
          </td>

          <td>
            수행된 총 논리적 읽기 수.
          </td>
        </tr>

        <tr>
          <td>
            `total_logical_writes`
          </td>

          <td>
            수행된 총 논리적 쓰기 수.
          </td>
        </tr>

        <tr>
          <td>
            `execution_count`
          </td>

          <td>
            쿼리가 실행된 횟수.
          </td>
        </tr>

        <tr>
          <td>
            `plan_handle`
          </td>

          <td>
            계획을 검색하는 데 사용되는 계획 핸들입니다.
          </td>
        </tr>

        <tr>
          <td>
            `avg_elapsed_time_ms`
          </td>

          <td>
            평균 경과 시간(밀리초)입니다.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="waitTime" title="대기 이벤트 메트릭">
    <table>
      <thead>
        <tr>
          <th>
            미터법
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            설문조사
          </td>

          <td>
            쿼리에 대한 고유 식별자입니다.
          </td>
        </tr>

        <tr>
          <td>
            데이터베이스 이름
          </td>

          <td>
            데이터베이스의 이름.
          </td>
        </tr>

        <tr>
          <td>
            쿼리 텍스트
          </td>

          <td>
            쿼리의 텍스트.
          </td>
        </tr>

        <tr>
          <td>
            대기 카테고리
          </td>

          <td>
            쿼리가 경험한 대기 범주입니다.
          </td>
        </tr>

        <tr>
          <td>
            총 대기 시간(ms)
          </td>

          <td>
            총 대기 시간(밀리초)입니다.
          </td>
        </tr>

        <tr>
          <td>
            평균 대기 시간(ms)
          </td>

          <td>
            평균 대기 시간(밀리초)입니다.
          </td>
        </tr>

        <tr>
          <td>
            대기_이벤트_카운트
          </td>

          <td>
            발생한 대기 이벤트의 수입니다.
          </td>
        </tr>

        <tr>
          <td>
            마지막 실행 시간
          </td>

          <td>
            쿼리의 마지막 실행 시간.
          </td>
        </tr>

        <tr>
          <td>
            컬렉션 타임스탬프
          </td>

          <td>
            데이터가 수집된 타임스탬프입니다.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="slowQueries" title="느린 쿼리 메트릭">
    <table>
      <thead>
        <tr>
          <th>
            메트릭
          </th>

          <th>
            설명
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            설문조사
          </td>

          <td>
            쿼리에 대한 고유 식별자입니다.
          </td>
        </tr>

        <tr>
          <td>
            쿼리 텍스트
          </td>

          <td>
            쿼리의 텍스트.
          </td>
        </tr>

        <tr>
          <td>
            데이터베이스 이름
          </td>

          <td>
            데이터베이스의 이름.
          </td>
        </tr>

        <tr>
          <td>
            스키마 이름
          </td>

          <td>
            스키마의 이름.
          </td>
        </tr>

        <tr>
          <td>
            마지막 실행 타임스탬프
          </td>

          <td>
            쿼리의 마지막 실행 타임스탬프.
          </td>
        </tr>

        <tr>
          <td>
            실행 횟수
          </td>

          <td>
            쿼리가 실행된 횟수.
          </td>
        </tr>

        <tr>
          <td>
            평균 CPU 시간(ms)
          </td>

          <td>
            평균 CPU 시간 (밀리초)입니다.
          </td>
        </tr>

        <tr>
          <td>
            평균 경과 시간(ms)
          </td>

          <td>
            평균 경과 시간(밀리초)입니다.
          </td>
        </tr>

        <tr>
          <td>
            평균 디스크 읽기
          </td>

          <td>
            디스크 읽기의 평균 횟수.
          </td>
        </tr>

        <tr>
          <td>
            평균 디스크 쓰기
          </td>

          <td>
            디스크 쓰기의 평균 횟수.
          </td>
        </tr>

        <tr>
          <td>
            문장_유형
          </td>

          <td>
            SQL 문의 유형.
          </td>
        </tr>

        <tr>
          <td>
            컬렉션 타임스탬프
          </td>

          <td>
            데이터가 수집된 타임스탬프입니다.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>