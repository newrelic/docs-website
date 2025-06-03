---
title: Integración de Envoy
tags:
  - New Relic integrations
  - Envoy integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Envoy.
freshnessValidatedDate: '2024-03-21T00:00:00.000Z'
translationType: machine
---

Obtenga información profunda y valiosa sobre las operaciones de Envoy con una perfecta integración de datos en New Relic. monitor la clave métrica para garantizar el rendimiento óptimo de su clúster backend de Envoy, sockets de escucha, enrutamiento HTTP y material criptográfico.

<img
  title="Envoy dashboard"
  alt="Envoy dashboard"
  src="/images/infrastructure_screenshot_full-envoy-dashboard.webp"
/>

<figcaption>
  Después de configurar nuestra integración Envoy, le brindamos un dashboard para su Envoy métrica.
</figcaption>

<Steps>
  <Step>
    ## Instalar el agente de infraestructura [#infra-install]

    Para utilizar la integración de Envoy, también debe [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) en el mismo host. El agente de infraestructura monitorea el host en sí, mientras que la integración que instalará en el siguiente paso amplía su monitoreo con datos específicos de Envoy.
  </Step>

  <Step>
    ## Habilite la integración de Envoy con nri-prometheus

    Para configurar la integración de Envoy, siga estos pasos:

    1. Cree un archivo llamado `nri-prometheus-config.yml` en el directorio de integración:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. Agregue el siguiente fragmento a su archivo `nri-prometheus-config.yml` para permitir que el agente capture datos de Envoy:

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
               - description: Envoy metrics list
                 urls: ["http://<ip-address>:9901/stats/prometheus"]

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
    ## Directo logs de Envoy

    Siga estos pasos para reenviar el log de Envoy a New Relic:

    1. Edite el archivo de registro llamado `logging.yml` ubicado en la siguiente ruta:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Agregue el siguiente script al archivo `logging.yml` . Reemplace `file` con la ruta del archivo log de Envoy si es necesario:

       ```yml
       logs:
       ```

    * name: envoy.log
      file: /tmp/envoy.log
      attributes:
      logtype: envoy_logs
    * name: envoy-admin.log
      file: /tmp/admin_access.log
      attributes:
      logtype: envoy_admin_logs
      ```

      ```
  </Step>

  <Step>
    ## Reinicie el agente New Relic Infrastructure

    Reinicie su agente de infraestructura.

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    En un par de minutos, tu aplicación enviará métrica a [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Encuentra tus datos

    Puede elegir nuestra plantilla dashboard prediseñadas llamada `Envoy` para monitor su aplicación métrica Envoy. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

    1. Desde [one.newrelic.com](https://one.newrelic.com), ir a la página

       <DNT>
         **+ Add data**
       </DNT>

    2. Haga clic en

       <DNT>
         **Dashboards**
       </DNT>

    3. En la barra de búsqueda, escribe `Envoy`

    4. Debería aparecer el dashboard de Envoy. Haga clic en él para instalarlo

       Su dashboard de Envoy se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos sobre dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aquí hay una consulta NRQL para verificar las conexiones totales descendentes de Envoy:

       ```sql
       SELECT latest(envoy_http_downstream_cx_total) as 'Downstream total connections' from Metric
       ```
  </Step>
</Steps>

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
