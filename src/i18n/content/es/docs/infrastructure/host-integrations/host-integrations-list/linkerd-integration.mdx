---
title: Integración Linkerd
tags:
  - New Relic integrations
  - Linkerd integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Linkerd.
freshnessValidatedDate: '2024-05-29T00:00:00.000Z'
translationType: machine
---

Nuestra integración Linkerd es una malla de servicios para Kubernetes. Hace que la ejecución de servicios sea más fácil y segura al brindarle depuración, observabilidad, confiabilidad y seguridad en tiempo de ejecución, todo sin necesidad de realizar ningún cambio en su código.

<img
  title="Linkerd dashboard"
  alt="Linkerd dashboard"
  src="/images/infrastructure_screenshot_full-linkerd-dashboard.webp"
/>

<figcaption>
  Luego de configurar nuestra integración Linkerd, verá un dashboard para su métrica Linkerd.
</figcaption>

<Steps>
  <Step>
    ## Instalar el agente de infraestructura [#infra-install]

    Para emplear la integración de Linkerd, también debe [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) en el mismo host. El agente de infraestructura monitorea el host en sí, mientras que la integración que instalará en el siguiente paso amplía su monitoreo con datos específicos de Linkerd.
  </Step>

  <Step>
    ## Exponer Linkerd métrica [#expose-linkerd-metrics]

    1. Emplee el siguiente script para comprobar todos los pods de Linkerd:

       ```shell
           kubectl get pods -n <LINKERD_NAMESPACE>
       ```

       * Reemplace `LINKERD_NAMESPACE` con el namespace real donde se ejecuta su pod Linkerd.

    2. A continuación, cerciorar de enviar todas las métricas al Puerto 4191 para cada pod Linkerd:

       ```shell
           kubectl port-forward --address 0.0.0.0 -n <LINKERD_NAMESPACE> <LINKERD_POD_NAME> 4191:4191 &
       ```

       * Reemplace `LINKERD_NAMESPACE` con el namespace real donde se ejecuta su pod Linkerd y `LINKERD_POD_NAME` con el nombre real de cada pod Linkerd.
  </Step>

  <Step>
    ## Habilite la integración de Linkerd con nri-prometheus [#enable-linkerd]

    Para configurar la integración de Linkerd, siga estos pasos:

    1. Cree un archivo llamado `nri-prometheus-config.yml` en el directorio de integración:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. Agregue el siguiente fragmento a su archivo `nri-prometheus-config.yml` para permitir que el agente capture datos de Linkerd:

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
    ## Reinicie el agente New Relic Infrastructure

    Reinicie su agente de infraestructura.

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    En un par de minutos, tu aplicación enviará métrica a [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Encuentra tus datos

    Puede elegir nuestra plantilla dashboard prediseñadas llamada `Linkerd` para monitor su aplicación métrica Linkerd. Siga estos pasos para emplear nuestra plantilla dashboard prediseñadas:

    1. Desde [one.newrelic.com](https://one.newrelic.com), vaya a la página

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       .

    2. Haga clic en

       <DNT>
         **Dashboards**
       </DNT>

       .

    3. En la barra de búsqueda, escriba `Linkerd`.

    4. Cuando aparezca la opción dashboard Linkerd, haga clic para instalarla.

       Su dashboard Linkerd se considera un dashboard personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aquí hay una consulta NRQL para verificar las conexiones totales descendentes de Linkerd:

       ```sql
       SELECT latest(process_virtual_memory_bytes)/(1024*1024) as 'Memory in MB' FROM Metric
       ```
  </Step>
</Steps>

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
