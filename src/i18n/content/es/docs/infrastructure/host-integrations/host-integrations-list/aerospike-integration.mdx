---
title: Integración de plataforma Aerospike
tags:
  - New Relic integrations
  - Aerospike
metaDescription: Use New Relic's infrastructure monitoring to get a dashboard with metrics from your Aerospike platform.
freshnessValidatedDate: never
translationType: machine
---

Nuestra integración Aerospike monitorea el rendimiento de su plataforma de datos Aerospike, ayudándolo a diagnosticar problemas en su aplicación y optimizar su código. Nuestra integración Aerospike le brinda un dashboard prediseñado con su aplicación Aerospike métrica más importante.

<img
  title="aerospike dashboard"
  alt="A screenshot depicting an Aerospike pre-built dashboard"
  src="/images/infrastructure_screenshot-full_aerospike-dashboard.webp"
/>

<figcaption>
  Luego de configurar nuestra integración Aerospike, te brindamos un dashboard para tu plataforma métrica Aerospike.
</figcaption>

## Instalar [#install]

### Paso 1: instalar el agente de infraestructura [#infra-install]

La instalación del agente de infraestructura le brindará métricas importantes sobre el host donde se ejecuta su aplicación.

Para hacer esto, siga [los pasos de instalación del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent) para el host que contiene su aplicación Aerospike.

### Paso 2: Instale la aplicación nri-aerospike [#aerospike]

La aplicación exportadora de Prometheus, `nri-aerospike`, está disponible en el repositorio de apt-get.

1. Para instalar nri-aerospike, use el siguiente comando:

   ```bash
   sudo apt-get install nri-aerospike
   ```

   Sabrá que nri-aerospike se instaló correctamente porque:

   * Verás que

     <DNT>
       **Exporter**
     </DNT>

     está instalado en el directorio `/var/db/newrelic-infra/newrelic-integrations/bin`

   * Se creó un archivo de configuración de muestra en el directorio `/etc/newrelic-infra/integrations.d`

2. Cambie el nombre del archivo de configuración de muestra de `aerospike-config.yml.sample` a `aerospike-config.yml`

   Su archivo de configuración debería verse así

   ```yml
   integrations:
     - name: nri-aerospike
       config:
         # API URL of the aerospike service
         aerospike_db_host: localhost
         aerospike_db_port: 3000

         # Port to expose scrape endpoint on, If this is not provided a random port will be used to launch the exporter
         exporter_port: 9145

         # Cluster name is used on the aerospike.prometheus.json.template - all the metrics captured by nri-prometheus will be categorized under this cluster name
         aerospike_cluster_name: YOUR_DESIRED_CLUSTER_NAME
         scrape_timeout: 5s

         label_type: development
         label_source: aerospike

         exporter_files_path: /tmp
   ```

   Después de haber configurado `nri-aerospike` exitosamente podrás ver la lista de monitor Aerospike métrica en `http://localhost:9145/metrics`.

3. Reinicie el agente New Relic Infrastructure . Si necesita más información, siga la [documentación del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/).

## Encuentra tus datos [#find-data]

Para obtener su dashboard de Aerospike:

1. Desde [one.newrelic.com](https://one.newrelic.com), vaya a la [página](https://one.newrelic.com/marketplace)

   <DNT>
     [**Add data**](https://one.newrelic.com/marketplace)
   </DNT>

   [](https://one.newrelic.com/marketplace).

2. Haga clic en

   <DNT>
     **Dashboards**
   </DNT>

   .

3. En la barra de búsqueda, escriba `Aerospike`.

4. Debería aparecer el dashboard de Aerospike. Haga clic en él para instalarlo.

Su dashboard de Aerospike se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Esta integración reporta datos en forma de nuestro [agente de infraestructura](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events).

Aquí hay un ejemplo de consulta NRQL que verifica el porcentaje de capacidad de memoria libre en el namespace:

```sql
FROM Metric 
SELECT latest (aerospike_namespace_memory_free_pct)
```

## ¿Que sigue? [#whats-next]

Para obtener más información sobre cómo consultar sus datos y crear un panel personalizado, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [Introducción al panel personalizado](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* [Administra tu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)
