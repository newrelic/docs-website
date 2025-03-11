---
title: Monitoreo integrado de Zookeeper
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: An introduction to New Relic's open-source ZooKeeper integration.
freshnessValidatedDate: never
translationType: machine
---

Nuestra integración Apache ZooKeeper monitorea el rendimiento de su clúster ZooKeeper, ayudándolo a administrar y sincronizar sus sistemas distribuidos. Nuestra integración Apache ZooKeeper le brinda un dashboard prediseñado que incluye métricas a nivel de clúster y a nivel de nodo.

<img
  src="/images/infrastructure_screenshot-full_apache-zookeeper-dashboard.webp"
  title="Apache ZooKeeper dashboard landing page"
  alt="A screenshot of a dashboard with Apache ZooKeeper metrics."
/>

<figcaption>
  Después de configurar nuestra integración Apache ZooKeeper, le brindamos un dashboard para su métrica ZooKeeper.
</figcaption>

## Integre Apache ZooKeeper con New Relic

Antes de incorporar datos de ZooKeeper a New Relic, deberá seguir [los pasos de instalación del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent) para el host que contiene su aplicación Apache ZooKeeper.

Puede integrar Apache Zookeeper con New Relic utilizando `NRI-Flex` para Apache ZooKeeper.

## Utilice NRI-Flex para capturar métricas

Flex viene incluido con el agente New Relic Infrastructure . Debe configurar NRI-Flex para Apache ZooKeeper y crear un archivo de configuración flexible. Sigue estos pasos:

1. Cree un archivo llamado `zookeeper-config.yml` en la siguiente ruta:

   * para Linux, `/etc/newrelic-infra/integrations.d`
   * para Windows, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`

2. Utilice el siguiente fragmento para actualizar su archivo de configuración llamado `zookeeper-config.yml`

   ```yml
   integrations:
     - name: nri-flex
       # interval: 30s
       config:
         name: zookeeperFlex
         apis:
           - name: zookeeper
             event_type: zkSample
             commands:
               - run: echo mntr | nc localhost 2181  ## change to your zookeeper server
                 split_by: "\t"  ## split by tab
             snake_to_camel: true
             custom_attributes:
               myCustomAttr: theValue  ## inject your own additional custom attributes
   ```

## Reinicie el agente New Relic Infrastructure

Antes de que pueda comenzar a leer sus datos, utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura.

```bash
sudo systemctl restart newrelic-infra.service
```

## Encuentra tus datos

Puede elegir nuestra plantilla dashboard prediseñadas llamada `Apache ZooKeeper` para monitor su aplicación métrica Zookeeper. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

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

3. En la barra de búsqueda, escriba `apache zookeeper`.

4. Debería aparecer el dashboard de ZooKeeper. Haga clic en él para instalarlo.

Su dashboard de Apache ZooKeeper se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Cuando utilices la integración `nri-flex`, tu métrica se exportará al `EVENT_TYPE` dado. Aquí hay una consulta NRQL para verificar la cantidad de znodes en el namespace de ZooKeeper con una integración `nri-flex`:

```sql
FROM <EVENT_TYPE> 
SELECT latest(zkZnodeCount)
```

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
