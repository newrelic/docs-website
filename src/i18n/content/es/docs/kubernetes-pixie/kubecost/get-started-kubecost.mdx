---
title: Observabilidad de costos Kubernetes con Kubecost
tags:
  - Integrations
  - Kubernetes integration
  - Kubecost
  - Cost observability
  - Opencost
metaDescription: Understand the costs associated with your Kubernetes resources
freshnessValidatedDate: '2023-08-12T00:00:00.000Z'
translationType: machine
---

<Callout title="Avance">
  Esta característica se encuentra actualmente en versión preliminar.
</Callout>

Con New Relic y [Kubecost](https://kubecost.github.io/cost-analyzer/), puede comprender los costos asociados con cada uno de sus recursos de Kubernetes.

Información procesable valiosa:

* ¿Cuáles son los principales factores de costo en mi clúster (CPU, almacenamiento, salida, etc.)?
* ¿Qué nodos están generando aumentos recientes de costos en mi clúster?
* ¿Cuáles son los desgloses de costos por namespace para mi aplicación carga de trabajo?
* ¿Cómo puedo adaptar la estimación de costos en función de los precios/descuentos que me brindan mis proveedores de nube?

## Empezar

Esta guía supone que utilizará el servidor Prometheus incluido en Kubecost. Es posible utilizar el suyo propio, aunque está fuera del alcance de esta guía.

Deberá crear un extremo `Remote Write` en New Relic, lo cual puede hacer haciendo clic en el botón verde "Agregar datos de Prometheus" en esta página. Tenga en cuenta que se utilizará el token al portador. [Escritura remota Prometheus](/docs/infrastructure/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration/)

### Configurar la escritura remota de Prometheus

1. Seleccione una cuenta para recibir los datos de Prometheus.
2. Asigne un nombre a la fuente de datos, por ejemplo, `kubecost`.
3. Genere la URL y el token de portador para utilizarlos en el siguiente conjunto de pasos.

### Instale el agente de Kubecost en su clúster

A continuación, instale el agente de Kubecost a través de Helm.

1. Descargue el archivo YAML de plantilla para la instalación del agente Kubecost. Guárdelo en `kubecost-values.yaml`.

   ```yaml
   prometheus:
     serverFiles:
       prometheus.yml:
         remote_write:
         - url: https://metric-api.newrelic.com/prometheus/v1/write?prometheus_server=YOUR_CLUSTER_NAME
           bearer_token: YOUR_BEARER_TOKEN
     server:
       global:
         external_labels:
           cluster_id: YOUR_CLUSTER_NAME
   kubecostProductConfigs:
     clusterName: YOUR_CLUSTER_NAME
   ```

2. Abra `kubecost-values.yaml` en un editor de su elección.

3. Copie y pegue el extremo remoto_write del paso anterior, reemplazando las líneas 5 y 6.

4. Reemplace ambas entradas `YOUR_CLUSTER_NAME` con el nombre de su clúster.

5. Ejecute el siguiente comando Helm para agregar el agente de Kubecost a su clúster y comenzar a enviar datos a New Relic:

   ```shell
   helm upgrade --install kubecost \
   --repo https://kubecost.github.io/cost-analyzer/ cost-analyzer \
   --namespace kubecost --create-namespace \
   --values kubecost-values.yaml
   ```

6. Espera unos minutos. En la pestaña anterior donde configuró la escritura remota, haga clic en el botón <DNT>**See your data**</DNT> para ver si se han recibido datos.

7. Consulta tus datos:

   ```sql
   SELECT sum(`Total Cost($)`) AS 'Total Monthly Cost'
   FROM (FROM Metric SELECT (SELECT sum(`total_node_cost`)
   FROM (FROM Metric SELECT (average(kube_node_status_capacity_cpu_cores) * average(node_cpu_hourly_cost)
   * 730 + average(node_gpu_hourly_cost)
   * 730 + average(kube_node_status_capacity_memory_bytes) / 1024 / 1024 / 1024
   * average(node_ram_hourly_cost) * 730) AS 'total_node_cost' FACET node))
   + (SELECT (sum(acflb) / 1024 / 1024 / 1024 * 0.04) AS 'Container Cost($)'
   FROM (SELECT (average(container_fs_limit_bytes) * cardinality(container_fs_limit_bytes)) AS 'acflb'
   FROM Metric WHERE (NOT ((device = 'tmpfs')) AND (id = '/'))))
   + (SELECT sum(aphc * 730 * akpcb / 1024 / 1024 / 1024) AS 'Total Persistent Volume Cost($)'
   FROM (FROM Metric SELECT average(pv_hourly_cost)
   AS 'aphc', average(kube_persistentvolume_capacity_bytes) AS 'akpcb' FACET persistentvolume, instance))
   AS 'Total Cost($)')
   ```

Puede seguir los documentos de Kubecost para [exponer UI de Kubecost con un ingreso](https://docs.kubecost.com/install-and-configure/install/ingress-examples).
