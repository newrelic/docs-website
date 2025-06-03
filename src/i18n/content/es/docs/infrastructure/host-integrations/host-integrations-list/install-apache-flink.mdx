---
title: Integración de Apache Flink
tags:
  - Integrations
  - Configure Prometheus OpenMetrics for Flink
  - Apache Flink integration on New Relic
metaDescription: Get a dashboard of all your most important Flink metrics with our quickstart.
freshnessValidatedDate: never
translationType: machine
---

Con nuestro dashboard de Apache Flink, puede rastrear fácilmente su registro, controlar sus fuentes de instrumentación y obtener una descripción general del tiempo de actividad y el tiempo de inactividad para todas las instancias de su aplicación. Creado con nuestro agente de infraestructura y nuestra integración Prometheus OpenMetrics, Flink <InlinePopover type="dashboards"/>aprovecha el raspado extremo de OpenMetrics para que pueda ver todos sus datos más importantes, en su lugar.

<img
  src="/images/dashboards_screenshot-full_apache-flink-quickstart.webp"
  title="Apache Flink dashboard landing page"
  alt="A screenshot of a dashboard with Apache Flink metrics."
/>

<figcaption>
  Después de configurar Flink con New Relic, sus datos se mostrarán en un panel como este, nada más sacarlo de la caja.
</figcaption>

## Instalar el agente de infraestructura [#install]

Antes de introducir datos de Flink en New Relic, primero instale nuestro agente de infraestructura y luego exponga su métrica instalando Prometheus OpenMetrics.

Hay dos formas de instalar nuestro agente de infraestructura:

* A través de nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=5e236fa2-fbfd-1f53-e55d-9241d2a73068).
* Instale el agente de infraestructura [manualmente](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), a través de la línea de comando.

## Configurar Apache Flink para exponer métrica [#expose-apache-flink-metrics]

Necesitará el archivo jar de Apache Flink Prometheus para exponer métrica en un puerto configurado. Idealmente, al descargar Apache Flink, el archivo denominado `flink-metrics-prometheus-VERSION.jar` se colocará en la siguiente ruta.

Ruta de archivo: `FLINK-DIRECTORY/plugins/metrics-prometheus/`

Actualice el archivo de configuración de flink para exponer métrica en los puertos 9250 a 9260

Ruta del archivo de configuración de Apache Flink: `FLINK-DIRECTORY/conf/flink-conf.yaml`

```yml
metrics.reporters: prom
metrics.reporter.prom.class: org.apache.flink.metrics.prometheus.PrometheusReporter
metrics.reporter.prom.factory.class: org.apache.flink.metrics.prometheus.PrometheusReporterFactory
metrics.reporter.prom.host: localhost
metrics.reporter.prom.port: 9250-9260
```

Siga el siguiente comando para iniciar un clúster de Apache Flink

```bash
./bin/start-cluster.sh
```

Ahora debería poder ver métrica en las siguientes URL

* Gestor de trabajo métrica

```yml
http://YOUR_DOMAIN:9250
```

* Administrador de tareas métrica

```yml
http://YOUR_DOMAIN:9251
```

También puede verificar si hay otros puertos del administrador de tareas ejecutándose en su PC ejecutando el siguiente comando:

```yml
sudo lsof -i -P -n | grep LISTEN
```

## Configurar `nri-prometheus` para Apache Flink [#configure]

Primero, cree un archivo llamado `nri-prometheus-config.yml` en la siguiente ruta

Camino: `/etc/newrelic-infra/integrations.d`

Ahora, actualice los campos que se enumeran a continuación:

* cluster_name: "YOUR_DESIRED_CLUSTER_NAME", por ejemplo: `cluster_name: "apache_flink"`
* urls: \["http&#x3A;//YOUR_DOMAIN:9250", "http&#x3A;//YOUR_DOMAIN:9251"], por ejemplo: `urls: ["http://localhost:9250", "http://localhost:9251"]`

Su archivo `nri-prometheus-config.yml` debería verse así:

```yml
integrations:
  - name: nri-prometheus
    config:
      standalone: false
      # Defaults to true. When standalone is set to `false`, `nri-prometheus` requires an infrastructure agent to send data.
      emitters: infra-sdk
      # When running with infrastructure agent emitters will have to include infra-sdk
      cluster_name: "YOUR_DESIRED_CLUSTER_NAME"
      # Match the name of your cluster with the name seen in New Relic. 
      targets:
        - description: "YOUR_DESIRED_DESCRIPTION_HERE"
          urls: ["http://YOUR_DOMAIN:9250", "http://YOUR_DOMAIN:9251"]
      #    tls_config:
      #      ca_file_path: "/etc/etcd/etcd-client-ca.crt"
      #      cert_file_path: "/etc/etcd/etcd-client.crt"
      #      key_file_path: "/etc/etcd/etcd-client.key"

      verbose: false
      # Defaults to false. This determines whether or not the integration should run in verbose mode.
      audit: false
      # Defaults to false and does not include verbose mode. Audit mode logs the uncompressed data sent to New Relic and can lead to a high log volume.
      # scrape_timeout: "YOUR_TIMEOUT_DURATION"
      # `scrape_timeout` is not a mandatory configuration and defaults to 30s. The HTTP client timeout when fetching data from endpoints.
      scrape_duration: "5s"
      # worker_threads: 4
      # `worker_threads` is not a mandatory configuration and defaults to `4` for clusters with more than 400 endpoints. Slowly increase the worker thread until scrape time falls between the desired `scrape_duration`. Note: Increasing this value too much results in huge memory consumption if too many metrics are scraped at once.
      insecure_skip_verify: false
      # Defaults to false. Determins if the integration should skip TLS verification or not.
    timeout: 10s
```

## Configurar manualmente el reenvío de registros [#logs]

Puede utilizar nuestra documentación [de reenvío de registros](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para reenviar el registro específico de la aplicación a New Relic.

Al instalar el agente de infraestructura en las máquinas Linux, su archivo de registro llamado `logging.yml` debe estar presente en esta ruta: `/etc/newrelic-infra/logging.d/`.

Si no ve su archivo de registro en la ruta anterior, deberá crear un archivo de registro siguiendo la documentación del reenvío de registros anterior.

A continuación se muestra un ejemplo del nombre log que será similar al siguiente:

```yml
- name: flink-u1-taskexecutor-0-u1-VirtualBox.log
```

Agregue el siguiente script al archivo `logging.yml` para enviar el registro de Apache Flink a New Relic.

```yml
logs:
  - name: flink-<REST_OF_THE_FILE_NAME>.log 
    file: <FLINK-DIRECTORY>/log/flink-<REST_OF_THE_FILE_NAME>.log
    attributes:
      logtype: flink_logs
```

## Reiniciar el agente New Relic Infrastructure [#restart-infrastructure-agent]

Antes de que pueda comenzar a leer sus datos, [reinicie su agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/).

## Monitor Apache Flink en New Relic

Si desea utilizar nuestra plantilla dashboard prediseñadas llamada Apache Flink para monitor su métrica Apache Flink, siga estos pasos:

1. Vaya a

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/)**
   </DNT>

   y haga clic en

   <DNT>
     **+ Add Data**
   </DNT>

   .

2. Haga clic en la pestaña

   <DNT>
     **Dashboards**
   </DNT>

   .

3. En el cuadro de búsqueda, busque

   <DNT>
     **Apache Flink**
   </DNT>

   .

4. Haga clic en el dashboard de Apache Flink para instalarlo en su cuenta.

Una vez que su aplicación esté integrada siguiendo los pasos anteriores, el dashboard debería reflejar métricamente en ella.

Para instrumentar el inicio rápido de Apache Flink y ver métricas y alertas, también puede seguir nuestra [página de inicio rápido de Apache Flink](https://newrelic.com/instant-observability/apache-flink) haciendo clic en el botón <DNT>**Install now**</DNT> .

## Utilice NRQL para consultar sus datos

Puede utilizar NRQL para [consultar sus datos](/docs/apis/nerdgraph/examples/nerdgraph-nrql-tutorial/). Por ejemplo, si desea ver el número total de puntos de control completados en el generador de consultas de New Relic, utilice esta consulta NRQL :

```sql
FROM Metric SELECT latest(flink_jobmanager_job_numberOfCompletedCheckpoints) AS 'Number of Completed Checkpoints'
```

## ¿Que sigue?

Si desea personalizar aún más su panel de Apache Flink, puede obtener más información sobre NRQL cómo crear consultas y administrar su <InlinePopover type="dashboards"/>en la New Relic UI:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
