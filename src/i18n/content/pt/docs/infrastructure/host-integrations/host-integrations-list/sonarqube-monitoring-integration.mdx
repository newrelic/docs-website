---
title: SonarQube monitoramento integração
tags:
  - New Relic integrations
  - SonarQube
metaDescription: Use New Relic browser monitoring to get a dashboard with metrics from your SonarQube.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

Nossa integração SonarQube monitora o desempenho do seu aplicativo SonarQube, ajudando você a diagnosticar e otimizar o código. Nossa integração SonarQube faz uso de nosso agente de infraestrutura, integração PosgreSQL, NRI-Prometheus e NRI-JMX e fornece um dashboard pré-construído com suas métricas SonarQube mais importantes.

<img
  title="New Relic SonarQube dashboard"
  alt="New Relic SonarQube dashboard"
  src="/images/infrastructure_screenshot_full-sonarqube-dashboard.webp"
/>

<figcaption>
  Depois de configurar a nossa integração SonarQube, fornecemos-lhe um dashboard para a sua métrica SonarQube.
</figcaption>

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#infra-install]

    Para usar a integração do SonarQube, primeiro é necessário [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. Toda a nossa integração no host requer o agente de infraestrutura, que ajuda a expor e reportar métricas para New Relic.
  </Step>

  <Step>
    ## Instale a integração PostgreSQL

    Para usar a integração SonarQube, você precisa primeiro instalar nossa integração PostgreSQL.

    1. Confira nossos requisitos de integração do PostgreSQL em nossa [documentação](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-integration/) antes de instalar a integração. Confirme sua compatibilidade e retorne a este documento.

    2. Abra a página de início rápido do PostgreSQL [PostgreSQL início instalação rápida](https://newrelic.com/instant-observability/postresql).

    3. Clique em

       <DNT>
         **Install now**
       </DNT>

       para iniciar a instalação de início rápido do PostgreSQL.
  </Step>

  <Step>
    ## Configurar NRI-Prometheus

    1. Execute o seguinte comando para criar um arquivo de configuração NRI-Prometheus:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. Cole o seguinte trecho no novo arquivo de configuração. Certifique-se de atualizar `cluster_name` e `urls` com seus campos relevantes:

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true 
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk 
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "YOUR_CLUSTER_NAME"

             targets:
               - description: Sonarqube metrics list
                 urls: ["http://user_name:password@YOUR_HOST_IP:9000/api/monitoring/metrics"]

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
    ## Instalar e configurar a integração JMX

    Para usar a integração SonarQube, você também precisa [instalar nossa integração de monitoramento JMX](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-install/). A integração JMX coleta dados do SonarQube, que posteriormente transformaremos em painel e dados consultáveis.

    1. [Instale nossa integração de monitoramento JMX](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-install/).

    2. Adicione o seguinte trecho de código a `/opt/sonarqube/conf/sonar.properties`:

       ```yml
       # SonarQube Web Server JMX configuration.
         sonar.web.javaOpts=-Dcom.sun.management.jmxremote \
                         -Dcom.sun.management.jmxremote.port=9010 \
                         -Dcom.sun.management.jmxremote.authenticate=false \
                         -Dcom.sun.management.jmxremote.ssl=false

       # SonarQube Compute Engine JMX configuration.
         sonar.ce.javaOpts=-Dcom.sun.management.jmxremote \
                         -Dcom.sun.management.jmxremote.port=9011 \
                         -Dcom.sun.management.jmxremote.authenticate=false \
                         -Dcom.sun.management.jmxremote.ssl=false
       ```

    3. Adicione o seguinte trecho de código a `/etc/newrelic-infra/integrations.d/jvm-sonarqube-web-metrics.yml/`:

       ```yml
       collect:
         - domain: SonarQube
           event_type: JVMSampleSonarQubeWebMetrics
           beans:
             - query: name=AsyncExecution
               attributes:
                 - QueueSize
                 - WorkerCount
                 - LargestWorkerCount
             - query: name=Database
               attributes:
                 - MigrationStatus
                 - PoolActiveConnections
                 - PoolMaxActiveConnections
                 - PoolIdleConnections
                 - PoolMaxIdleConnections
                 - PoolMinIdleConnections
                 - PoolInitialSize
                 - PoolMaxWaitMillis
                 - PoolRemoveAbandoned
                 - PoolRemoveAbandonedTimeoutSeconds
             - query: name=SonarQube
               attributes:
                 - Version
                 - ServerId
                 - LogLevel
       ```

    4. Adicione o seguinte trecho de código a `/etc/newrelic-infra/integrations.d/jvm-sonarqube-compute-engine-metrics.yml`:

       ```yml
       collect:
         - domain: SonarQube
           event_type: JVMSampleSonarQubeComputeEngineMetrics
           beans:
             - query: name=ComputeEngineDatabaseConnection
               attributes:
                 - PoolInitialSize
                 - PoolActiveConnections
                 - PoolMaxActiveConnections
                 - PoolIdleConnections
                 - PoolMaxIdleConnections
                 - PoolMinIdleConnections
                 - PoolMaxWaitMillis
                 - PoolRemoveAbandoned
                 - PoolRemoveAbandonedTimeoutSeconds
             - query: name=ComputeEngineTasks
               attributes:
                 - PendingCount
                 - LongestTimePending
                 - InProgressCount
                 - ErrorCount
                 - SuccessCount
                 - ProcessingTime
                 - WorkerMaxCount
                 - WorkerCount
                 - WorkerUuids
                 - EnabledWorkerUuids
       ```

    5. Adicione o seguinte trecho de código a `/etc/newrelic-infra/integrations.d/jmx-sonarqube-compute-engine-config.yml`:

       ```yml
       integrations:
         - name: nri-jmx
           env:
             COLLECTION_FILES: /etc/newrelic-infra/integrations.d/jvm-sonarqube-compute-engine-metrics.yml
             JMX_HOST: <YOUR_HOST>
             JMX_PASS: admin
             JMX_PORT: 9010
             JMX_USER: admin
             CONNECTION_URL: service:jmx:rmi://<YOUR_IP>:9010/jndi/rmi://<YOUR_IP>:9010/jmxrmi
             REMOTE_MONITORING: "true"
           interval: 15s
           labels:
             env: staging
       ```

    6. Adicione o seguinte trecho de código a `/etc/newrelic-infra/integrations.d/jmx-sonarqube-web-config.yml`:

       ```yml
       integrations:
         - name: nri-jmx
           env:
             COLLECTION_FILES: /etc/newrelic-infra/integrations.d/jvm-sonarqube-web-metrics.yml
             JMX_HOST: <YOUR_HOST>
             JMX_PASS: admin
             JMX_PORT: 9011
             JMX_USER: admin
             CONNECTION_URL: service:jmx:rmi://<YOUR_IP>:9011/jndi/rmi://<YOUR_IP>:9011/jmxrmi
             REMOTE_MONITORING: "true"
           interval: 15s
           labels:
             env: staging
       ```
  </Step>

  <Step>
    ## Encaminhar log do SonarQube para New Relic

    Siga estas etapas para encaminhar o log do SonarQube para New Relic:

    1. Crie um arquivo de log denominado `logging.yml` no seguinte caminho:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Adicione o seguinte script ao arquivo `logging.yml` :

       ```yml
       logs:
         - name: sonar_logs
           file: /opt/sonarqube/logs/sonar.log
           attributes: 
             logtype: sonar_logs
         - name: ce_logs
           file: /opt/sonarqube/logs/ce.log
           attributes:
             logtype: sonar_ce_logs
         - name: es_logs
           file: /opt/sonarqube/logs/es.log
           attributes: 
             logtype: sonar_es_logs
         - name: web_logs
           file: /opt/sonarqube/logs/web.log
           attributes:
             logtype: sonar_web_logs
       ```
  </Step>

  <Step>
    ## Reinicie o agente do New Relic Infrastructure

    Reinicie seu agente de infraestrutura:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    Em alguns minutos, seu aplicativo enviará métricas para [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Encontre seus dados

    Você pode escolher nosso modelo dashboard pré-construído chamado `SonarQube` para monitor seu aplicativo métrico SonarQube. Siga estas etapas para usar nosso modelo dashboard pré-construído:

    1. De [one.newrelic.com](https://one.newrelic.com), vá para a página

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       .

    2. Clique em

       <DNT>
         **Dashboards**
       </DNT>

       .

    3. Na barra de pesquisa, digite `sonarqube`.

    4. O dashboard do SonarQube deve aparecer. Clique nele para instalá-lo.

       Seu dashboard do SonarQube é considerado um painel personalizado e pode ser encontrado na interface <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aqui estão alguns exemplos de consulta NRQL para dados Postfix:

       <CollapserGroup>
         <Collapser
           id="webstatus"
           title="Verifique o status da web do SonarQube"
         >
           ```sql
           SELECT latest(sonarqube_web_uptime_minutes) 
           AS 'SonarQube Web Uptime (minutes)' 
           FROM Metric
           ```
         </Collapser>

         <Collapser
           id="jvm-metrics"
           title="Veja a métrica JVM"
         >
           ```sql
           SELECT latest(PoolIdleConnections) FROM JVMSampleSonarQubeWebMetrics
           ```
         </Collapser>
       </CollapserGroup>
  </Step>
</Steps>

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição dos painéis ou para adicionar mais conteúdo ao seu dashboard.
