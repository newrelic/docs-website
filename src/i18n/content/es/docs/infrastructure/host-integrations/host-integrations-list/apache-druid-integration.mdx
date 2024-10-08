---
title: Integración de Apache Druid
tags:
  - Druid integration
  - apache druid integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with druid metrics.
freshnessValidatedDate: '2024-04-21T00:00:00.000Z'
translationType: machine
---

La integración de Apache Druid con New Relic mejora su capacidad para monitor, analizar y optimizar el rendimiento de su clúster Druid. La integración Apache Druid proporciona una poderosa característica de monitoreo y alerta para que pueda garantizar la confiabilidad y eficiencia de su plataforma de análisis basada en Druid.

<img
  title="Apache Druid dashboard"
  alt="Apache Druid dashboard"
  src="/images/infrastructure_screenshot-full_apache-druid-dashboard.webp"
/>

<figcaption>
  Después de configurar la integración de Apache Druid con New Relic, vea sus datos en un dashboard listo para usar.
</figcaption>

## Configurar la integración de Apache Druid

Complete los siguientes pasos para configurar la integración de Apache Druid:

<Steps>
  <Step>
    ## Instalar el agente de infraestructura

    Para utilizar la integración de Apache Druid, primero debe [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) en el mismo host. El agente de infraestructura monitorea el host en sí, mientras que la integración Apache Druid extiende su monitoreo con datos específicos de su clúster Druid.
  </Step>

  <Step>
    ## Exponer Druid métrica usando Prometheus Emitter [#Expose]

    1. Agregue `prometheus.emitter` al final de la lista de carga de extensiones en su archivo `apache-druid-$version/conf/druid/single-server/micro-quickstart/_common/common.runtime.properties` :

       ```yml
       druid.extensions.loadList=["druid-hdfs-storage", "druid-kafka-indexing-service", "druid-datasketches", "druid-multi-stage-query", "prometheus-emitter"]
       ```

    2. En las rutas de archivo enumeradas en la columna de la izquierda, agregue el fragmento de código que figura en las columnas de la derecha.

       <table>
         <thead>
           <tr>
             <th>
               Ruta de archivo
             </th>

             <th>
               Fragmento de código
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `PATH/TO/broker/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19091
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/coordinator-overlord/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19092
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/historical/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19093
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/middleManager/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19094
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/router/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19095
               ```
             </td>
           </tr>
         </tbody>
       </table>
  </Step>

  <Step>
    ## Instale la extensión del emisor Prometheus [#prometheus-emitter-extension]

    1. Ejecute los siguientes comandos para crear una carpeta llamada `prometheus-emitter` dentro del directorio de carpetas `extensions` de su configuración de Apache Druid:

       ```shell
       cd apache-druid-$version/extensions/
       ```

       ```shell
       sudo mkdir prometheus-emitter
       ```

    2. Navegue hasta el directorio de descarga de Druid y ejecute el siguiente comando para crear archivos jar que el servidor llama al iniciarse:

       ```shell
       sudo java \
       -cp "lib/*" \
       -Ddruid.extensions.directory="extensions" \
       -Ddruid.extensions.hadoopDependenciesDir="hadoop-dependencies" \
       org.apache.druid.cli.Main tools pull-deps \
       --no-default-hadoop \
       -c "org.apache.druid.extensions.contrib:prometheus-emitter:24.0.0"
       ```
  </Step>

  <Step>
    ## Configurar `nri-prometheus` para Apache Druid [#configure]

    1. Cree un archivo llamado `nri-prometheus-config.yml`:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. Agregue el siguiente fragmento a su archivo `nri-prometheus-config.yml` para habilitar la captura de datos de Apache Druid:

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "Apache-druid"

             targets:
               - description: Secure etcd example
                 urls: ["http://<YOUR_HOST_IP>:19091/metrics","http://<YOUR_HOST_IP>:19092/metrics", "http://<YOUR_HOST_IP>:19093/metrics","http://<YOUR_HOST_IP>:19094/metrics","http://<YOUR_HOST_IP>:19095/metrics"]
             #    tls_config:
             #      ca_file_path: "/etc/etcd/etcd-client-ca.crt"
             #      cert_file_path: "/etc/etcd/etcd-client.crt"
             #      key_file_path: "/etc/etcd/etcd-client.key"

             # Whether the integration should run in verbose mode or not. Defaults to false.
             verbose: false

             # Whether the integration should run in audit mode or not. Defaults to false.
             # Audit mode logs the uncompressed data sent to New Relic. Use this to log all data sent.
             # It does not include verbose mode. This can lead to a high log volume, use with care.
             audit: false

             # The HTTP client timeout when fetching data from endpoints. Defaults to "5s" if it is not set.
             # This timeout in seconds is passed as well as a X-Prometheus-Scrape-Timeout-Seconds header to the exporters
             # scrape_timeout: "5s"

             # Length in time to distribute the scraping from the endpoints. Default to "30s" if it is not set.
             scrape_duration: "5s"

             # Number of worker threads used for scraping targets.
             # For large clusters with many (>400) endpoints, slowly increase until scrape
             # time falls between the desired `scrape_duration`.
             # Increasing this value too much will result in huge memory consumption if too
             # many metrics are being scraped.
             # Default: 4
             # worker_threads: 4

             # Whether the integration should skip TLS verification or not. Defaults to false.
             insecure_skip_verify: false

           timeout: 10s
       ```
  </Step>

  <Step>
    ## Reenviar logs de Druid a New Relic

    1. Edite el archivo de registro llamado `logging.yml` ubicado en la siguiente ruta:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Agregue el siguiente fragmento al archivo `logging.yml` :

       ```yml
       - name: druid-logs
       file: /home/<Druid-Download Directory>/log/*.log
       attributes:
           logtype: apache-druid
       ```
  </Step>

  <Step>
    ## Reiniciar el agente de infraestructura. [#restart-infra]

    Utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura. Este es un comando básico que debería funcionar para la mayoría de las personas:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## Ver tu Druid métrica en New Relic [#view-data]

    Una vez que haya completado la configuración anterior, podrá ver su métrica utilizando nuestra plantilla dashboard prediseñadas. Para acceder a este dashboard:

    1. Vaya a **[one.newrelic.com](https://one.newrelic.com/) > + Add data**.
    2. Haga clic en la pestaña del **Dashboards** .
    3. En el cuadro de búsqueda, escriba `Apache druid`.
    4. Selecciónelo y haga clic en **Install**.

       Para instrumentar el inicio rápido de Apache Druid y ver métricas y alertas, también puede seguir nuestra [página de inicio rápido de Apache Druid](https://newrelic.com/instant-observability/apache-druid) haciendo clic en el botón `Install now` .

       Aquí hay una consulta de ejemplo para verificar el tamaño promedio del segmento de Druid:

       ```sql
       SELECT average(druid_segment_size) AS  'MiB' FROM Metric SINCE 30 MINUTES AGO
       ```
  </Step>
</Steps>

## ¿Que sigue? [#whats-next]

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.

* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su

  <InlinePopover type="dashboards"/>

  modo de visualización o para agregar más contenido a su dashboard.
