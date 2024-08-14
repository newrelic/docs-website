---
title: Integración de Redpanda
tags:
  - Integrations
  - Configure nri-prometheus for Redpanda
  - Redpanda metrics integration on New Relic platform
metaDescription: Get a dashboard of all your most important Redpanda metrics with our Redpanda quickstart.
freshnessValidatedDate: never
translationType: machine
---

Nuestra integración RedPanda captura métricas a nivel de clúster, datos sobre grupos de programación y detalles sobre los errores de su servicio y el tiempo de actividad, y luego muestra esos datos en un <InlinePopover type="dashboards"/>prediseñado.

<img
  src="/images/prometheus_screenshot-full_redpanda-integration.webp"
  title="Redpanda dashboard landing page"
  alt="A screenshot of a dashboard with Redpanda metrics."
/>

<figcaption>
  Después de configurar Redpanda con New Relic, sus datos se mostrarán en un dashboard, nada más sacarlo de la caja.
</figcaption>

## Instalar el agente de infraestructura [#install-agent]

Antes de obtener datos de Redpanda en New Relic, debe instalar nuestro agente de infraestructura y luego configurar `nri-prometheus` para extraer datos.

* Siga nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=5e236fa2-fbfd-1f53-e55d-9241d2a73068) para instrumentar su sistema con el agente de infraestructura. Puede [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) a través de la línea de comando usando nuestros documentos.

## Configurar `nri-prometheus` para RedPanda [#configure]

1. Cree un archivo llamado `nri-prometheus-config.yml` en `/etc/newrelic-infra/integrations.d`.

2. Agregue un fragmento a su archivo `nri-prometheus-config.yml` que permita al agente capturar datos de RedPanda. Su archivo de configuración debe coincidir con nuestro fragmento en el repositorio [nri-prometheus](https://github.com/newrelic/nri-prometheus/blob/main/configs/nri-prometheus-config.yml.sample) :

   ```yml
   integrations:
     - name: nri-prometheus
       config:
         # When standalone is set to false, nri-prometheus requires an infrastructure agent to work and send data. Defaults to true
         standalone: false

         # If using the infrastructure agent, emitters have to include infra-sdk
         emitters: infra-sdk
   ```

# El nombre de su clúster. El nombre de su clúster debe ser coherente en todos los productos New Relic para que el agente de infraestructura y nri-prometheus puedan extraer datos del clúster.

cluster_name: "YOUR_EXPORTER_NAME"

objetivo:

* descripción: Las métricas de Redpanda se capturan en las siguientes URL: \["http&#x3A;//localhost:9644/metrics", "http&#x3A;//localhost:9644/public_metrics"]

  # tls_config:

  # ca_file_path: "/etc/etcd/etcd-client-ca.crt"

  # cert_file_path: "/etc/etcd/etcd-client.crt"

  # key_file_path: "/etc/etcd/etcd-client.key"

  # Especifica si la integración debe ejecutarse o no en modo detallado. El valor predeterminado es falso.

  detallado: falso

  # Especifica si la integración debe ejecutarse o no en modo auditoría. El valor predeterminado es falso.

  # El modo de auditoría registra los datos sin comprimir enviados a New Relic. Utilice esto para log todos los datos enviados.

  # No incluye modo detallado. Esto puede provocar un volumen log elevado; utilícelo con cuidado.

  auditoría: falso

  # El tiempo de espera del cliente HTTP al recuperar datos del extremo. El valor predeterminado es "5s" si no está configurado.

  # scrape_timeout: "5s"

  # Tiempo de distribución del raspado desde el extremo. El valor predeterminado es "30s" si no está configurado.

  scrape_duration: "5s"

  # Número de subprocesos de trabajo utilizados para el objetivo de scraping.

  # Para grupos grandes con muchos (>400) extremos, aumente lentamente hasta raspar

  # el tiempo cae entre el `scrape_duration` deseado.

  # Aumentar demasiado este valor resultará en un enorme consumo de memoria si también

  # Se están raspando muchas métricas.

  # Predeterminado: 4

  # worker_threads: 4

  \#Especifica si la integración debe omitir la verificación TLS. El valor predeterminado es falso. insecure_skip_verify: false

  tiempo de espera: 10s

  ```

  ```

## Obtén RedPanda métrica como dashboard [#redpanda-metrics]

Para confirmar que tus datos están reportados:

1. Vaya a [one.newrelic.com](https://one.newrelic.com/all-capabilities), luego haga clic en

   <DNT>
     **Metrics & events**
   </DNT>

   .

2. Ejecute la siguiente consulta NRQL: `FROM Metric SELECT latest(vectorized_application_uptime)`.

3. Una vez que hayas confirmado que New Relic ingirió tu métrica de Redpanda, ve a

   <DNT>
     **Dashboards**
   </DNT>

   desde [one.newrelic.com](https://one.newrelic.com/all-capabilities) para ver tu dashboard RedPanda.

## ¿Que sigue? [#whats-next]

Si desea personalizar su panel de RedPanda, puede obtener más información sobre NRQL cómo crear una consulta y administrar su panel en la New Relic UI:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su dashboard o para agregar más contenido a su dashboard.
