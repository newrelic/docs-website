---
title: SonarQube monitoreo integrado
tags:
  - New Relic integrations
  - SonarQube
metaDescription: Use New Relic browser monitoring to get a dashboard with metrics from your SonarQube.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

Nuestra integración SonarQube monitorea el rendimiento de tu aplicación SonarQube, ayudándote a diagnosticar y optimizar el código. Nuestra integración SonarQube hace uso de nuestro agente de infraestructura, integración PosgreSQL, NRI-Prometheus y NRI-JMX y le brinda un dashboard prediseñado con su métrica SonarQube más importante.

<img
  title="New Relic SonarQube dashboard"
  alt="New Relic SonarQube dashboard"
  src="/images/infrastructure_screenshot_full-sonarqube-dashboard.webp"
/>

<figcaption>
  Después de configurar nuestra integración SonarQube, te brindamos un dashboard para tu SonarQube métrica.
</figcaption>

<Steps>
  <Step>
    ## Instalar el agente de infraestructura [#infra-install]

    Para utilizar la integración de SonarQube, primero debe [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) en el mismo host. Toda nuestra integración en el host requiere el agente de infraestructura, que ayuda a exponer e informar métricamente a New Relic.
  </Step>

  <Step>
    ## Instalar la integración de PostgreSQL

    Para utilizar la integración de SonarQube, primero debe instalar nuestra integración PostgreSQL.

    1. Consulte nuestros requisitos de integración de PostgreSQL en nuestra [documentación](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-integration/) antes de instalar la integración. Confirme su compatibilidad y luego regrese a este documento.

    2. Abra la página de inicio rápido de PostgreSQL [Instalación rápida de inicio de PostgreSQL](https://newrelic.com/instant-observability/postresql).

    3. Haga clic en

       <DNT>
         **Install now**
       </DNT>

       para iniciar la instalación de inicio rápido de PostgreSQL.
  </Step>

  <Step>
    ## Configurar NRI-Prometheus

    1. Ejecute el siguiente comando para crear un archivo de configuración de NRI-Prometheus:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. Pegue el siguiente fragmento en el nuevo archivo de configuración. Asegúrese de actualizar `cluster_name` y `urls` con sus campos relevantes:

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
    ## Instalar y configurar la integración JMX.

    Para utilizar la integración de SonarQube, también debe [instalar nuestra integración de monitoreo JMX](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-install/). La integración JMX extrae los datos de SonarQube, que luego convertiremos en un panel y en datos consultables.

    1. [Instale nuestra integración de monitoreo JMX](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-install/).

    2. Agregue el siguiente fragmento de código a `/opt/sonarqube/conf/sonar.properties`:

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

    3. Agregue el siguiente fragmento de código a `/etc/newrelic-infra/integrations.d/jvm-sonarqube-web-metrics.yml/`:

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

    4. Agregue el siguiente fragmento de código a `/etc/newrelic-infra/integrations.d/jvm-sonarqube-compute-engine-metrics.yml`:

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

    5. Agregue el siguiente fragmento de código a `/etc/newrelic-infra/integrations.d/jmx-sonarqube-compute-engine-config.yml`:

       ```yml
       integrations:
         - name: nri-jmx
           env:
             COLLECTION_FILES: /etc/newrelic-infra/integrations.d/jmx-sonarqube-web-config.yml
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

    6. Agregue el siguiente fragmento de código a `/etc/newrelic-infra/integrations.d/jmx-sonarqube-web-config.yml`:

       ```yml
       integrations:
         - name: nri-jmx
           env:
             COLLECTION_FILES: /etc/newrelic-infra/integrations.d/jmx-sonarqube-compute-engine-config.yml
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
    ## Reenviar el registro de SonarQube a New Relic

    Siga estos pasos para reenviar el registro de SonarQube a New Relic:

    1. Cree un archivo de log denominado `logging.yml` en la siguiente ruta:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Agregue el siguiente script al archivo `logging.yml` :

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
    ## Reinicie el agente New Relic Infrastructure

    Reinicie su agente de infraestructura:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    En un par de minutos, tu aplicación enviará métrica a [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Encuentra tus datos

    Puede elegir nuestra plantilla dashboard prediseñadas llamada `SonarQube` para monitor su aplicación métrica SonarQube. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

    1. Desde [one.newrelic.com](https://one.newrelic.com), vaya a la página

       <DNT>
         **+ Add data**
       </DNT>

       .

    2. Haga clic en

       <DNT>
         **Dashboards**
       </DNT>

       .

    3. En la barra de búsqueda, escriba `sonarqube`.

    4. Debería aparecer el dashboard de SonarQube. Haga clic en él para instalarlo.

       Su dashboard de SonarQube se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aquí hay algunos ejemplos de consulta NRQL para datos de Postfix:

       <CollapserGroup>
         <Collapser
           id="webstatus"
           title="Consulta el estado de tu web SonarQube"
         >
           ```sql
           SELECT latest(sonarqube_web_uptime_minutes) 
           AS 'SonarQube Web Uptime (minutes)' 
           FROM Metric
           ```
         </Collapser>

         <Collapser
           id="jvm-metrics"
           title="Ver la JVM métrica"
         >
           ```sql
           SELECT latest(PoolIdleConnections) FROM JVMSampleSonarQubeWebMetrics
           ```
         </Collapser>
       </CollapserGroup>
  </Step>
</Steps>

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
