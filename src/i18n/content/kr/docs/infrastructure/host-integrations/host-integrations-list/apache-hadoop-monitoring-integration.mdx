---
title: 아파치 하둡 통합
tags:
  - Apache Hadoop integration
  - New Relic integrations
metaDescription: Install our Apache Hadoop dashboards and see your Apache Hadoop  data in New Relic.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

Apache Hadoop 통합은 Hadoop 클러스터 및 애플리케이션의 성능을 모니터링합니다. 통합을 통해 HDFS(Hadoop 분산 파일 시스템), 블록, 시스템 로드, 데이터 노드, NodeManager 및 작업에 대한 데이터를 제공하여 Apache Hadoop 성능 및 상태에 대한 심층적인 이해를 제공합니다.

<img
  title="Apache Hadoop dashboard"
  alt="Apache Hadoop dashboard"
  src="/images/infrastructure_screenshot-full_apache-hadoop-dashboard.webp"
/>

<figcaption>
  Apache Hadoop을 설정한 후 Apache Hadoop 메트릭에 대한 대시보드를 제공합니다.
</figcaption>

통합을 설치하려면 다음 단계를 완료하세요.

<Steps>
  <Step>
    ## 인프라 에이전트 설치 [#infra]

    Apache Hadoop 통합을 사용하려면 먼저 동일한 호스트에 [인프라 에이전트를 설치](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) 해야 합니다. 클라이언트 에이전트는 호스트 자체를 모니터링하는 반면, 다음 단계에서 설치하게 될 통합은 Hadoop 관련 데이터로 모니터링을 확장합니다.
  </Step>

  <Step>
    ## Apache Hadoop용 NRI-Flex 구성 [#integrate]

    당사의 플렉스 통합은 뉴렐릭 인프라 에이전트와 함께 번들로 제공되며 Apache Hadoop 데이터를 뉴렐릭으로 보내는 데 사용됩니다. Flex 설정 파일을 생성하려면 다음 단계를 따르세요.

    1. `/etc/newrelic-infra/integrations.d` 경로에 `nri-flex-hadoop-config.yml` 이라는 파일을 생성합니다.

    2. [구성 템플릿을](https://github.com/newrelic/nri-flex/blob/master/examples/json-read-cmd-example.yml) 사용하여 `nri-flex-hadoop-config.yml`라는 생성된 파일에서 `EVENT_TYPE` 및 `YOUR_DOMAIN` 필드를 업데이트합니다. `event_type` 의 값은 NRDB에 메트릭을 저장하는 데 사용됩니다.

       예시:

       * `EVENT_TYPE1` 로 업데이트할 수 있습니다. `HadoopResourceManagerSample`
       * `EVENT_TYPE2` 로 업데이트할 수 있습니다. `HadoopNameNodeSample`

       `nri-flex-hadoop-config.yml` 파일은 다음과 같아야 합니다.

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: hadoopMetrics
             apis:
               - event_type: EVENT_TYPE1
                 commands: 
                   # run any command, you could cat .json file, or run some commands that produce a json output
                   # the example just calls an API that returns json
                   - run: curl -s https://YOUR_DOMAIN:9870/jmx #json output is retrieved from this command
               - event_type: EVENT_TYPE2
                 commands: 
                   - run: curl -s https://YOUR_DOMAIN:8088/jmx?qry=Hadoop:*
       ```
  </Step>

  <Step>
    ## New Relic에 Apache Hadoop 로그 전달

    [로그 전달을](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) 사용하여 Apache Hadoop 로그를 New Relic으로 전달할 수 있습니다.

    1. 다음 위치에 `logging.yml` 이라는 로그 파일을 생성합니다. `/etc/newrelic-infra/logging.d/`

    2. 로그 파일을 만든 후 `logging.yml` 파일에 다음 스크립트를 추가합니다.

       ```yml
       logs:
         - name: hadoop_secondarynamenode_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-secondarynamenode-hadoop-master.log
           attributes:
             logtype: hadoop_secondarynamenode_logs
         - name: hadoop_resourcemanager_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-resourcemanager-hadoop-master.log
           attributes:
             logtype: hadoop_hadoop_resourcemanager_logs
         - name: hadoop_namenode_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-namenode-hadoop-master.log
           attributes:
             logtype: hadoop_namenode_logs
       ```
  </Step>

  <Step>
    ## New Relic 인프라 에이전트 다시 시작

    데이터 사용을 시작하기 전에 [인프라 에이전트를 다시 시작하세요](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/).

    다음 명령은 대부분의 시스템에서 작동합니다.

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## 데이터 찾기

    `Apache Hadoop` 라는 사전 빌드된 대시보드 템플릿을 선택하여 Apache Hadoop 서버 측정항목을 모니터링할 수 있습니다. 사전 구축된 대시보드 템플릿을 사용하려면 다음 단계를 따르세요.

    1. [one.newrelic.com](https://one.newrelic.com) 에서,

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       페이지로 이동하세요.

    2. <DNT>
         **Dashboards**
       </DNT>

       을 클릭합니다.

    3. 검색창에 `apache hadoop` 를 입력합니다.

    4. Apache Hadoop 대시보드가 나타납니다. 그것을 클릭하여 설치하십시오.

       Apache Hadoop 대시보드는 맞춤형 대시보드로 간주되며 <DNT>**Dashboards**</DNT> UI 에서 찾을 수 있습니다. 대시보드 사용 및 편집에 대한 문서는 [대시보드 문서 를](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) 참조하세요.

       다음은 리소스 관리자에서 활성 사용자를 확인하는 NRQL 쿼리입니다.

       ```sql
       SELECT latest(activeUsers) 
       FROM HadoopResourceManagerSample
       ```

       다음은 이름 노드에서 활성 클라이언트 수를 보기 위한 NRQL 쿼리입니다.

       ```sql
       SELECT latest(numActiveClients) 
       FROM HadoopNameNodeSample
       ```
  </Step>
</Steps>

## 다음은 뭐지?

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* 대시보드를 [관리하여 대시](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) 보드 표시 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가합니다.
