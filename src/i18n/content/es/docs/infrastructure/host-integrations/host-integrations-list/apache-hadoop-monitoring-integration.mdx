---
title: Integración de Apache Hadoop
tags:
  - Apache Hadoop integration
  - New Relic integrations
metaDescription: Install our Apache Hadoop dashboards and see your Apache Hadoop  data in New Relic.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

Nuestra integración Apache Hadoop monitorea el rendimiento de su clúster y aplicación Hadoop.

<img
  title="Apache Hadoop dashboard"
  alt="Apache Hadoop dashboard"
  src="/images/infrastructure_screenshot-full_apache-hadoop-dashboard.webp"
/>

<figcaption>
  Luego de configurar nuestro Apache Hadoop, te entregamos un dashboard para tu Apache Hadoop métrica.
</figcaption>

## Instalar el agente de infraestructura [#infra]

Para ingresar datos en New Relic, instale nuestro agente de infraestructura. Nuestro agente de infraestructura recopila e ingiere datos para que pueda realizar un seguimiento del rendimiento de su aplicación. La versión debe ser 1.10.7 o superior para admitir la integración NRI-Flex.

Puede instalar el agente de infraestructura de dos maneras diferentes:

* Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial para la instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) o [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Configurar NRI-Flex para Apache Hadoop [#integrate]

Flex viene incluido con el agente New Relic Infrastructure . Para crear un archivo de configuración flexible, siga estos pasos:

1. Cree un archivo llamado `nri-flex-hadoop-config.yml` en esta ruta:

   ```shell
   /etc/newrelic-infra/integrations.d
   ```

2. Utilice nuestra [plantilla de configuración](https://github.com/newrelic/nri-flex/blob/master/examples/json-read-cmd-example.yml) para actualizar los campos `EVENT_TYPE` y `YOUR_DOMAIN` en el archivo creado llamado `nri-flex-hadoop-config.yml`. El valor en `event_type` se usa para almacenar métrica en el NRDB.

   Ejemplo:

   * `EVENT_TYPE1` se puede actualizar a `HadoopResourceManagerSample`
   * `EVENT_TYPE2` se puede actualizar a `HadoopNameNodeSample`

   Su archivo `nri-flex-hadoop-config.yml` debería verse así:

   ```yml
   integrations:
     - name: nri-flex
       # interval: 30s
       config:
         name: hadoopMetrics
         apis:
           - event_type: EVENT_TYPE1
             commands: 
               # run any command, you could cat .json file, or run some commands that produce a json output
             # the example just calls an API that returns json
               - run: curl -s https://YOUR_DOMAIN:9870/jmx #json output is retrieved from this command
           - event_type: EVENT_TYPE2
             commands: 
               - run: curl -s https://YOUR_DOMAIN:8088/jmx?qry=Hadoop:*
   ```

## Reenviar el registro de Apache Hadoop a New Relic

Puede utilizar nuestro [reenvío de registros](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para reenviar el registro de Apache Hadoop a New Relic.

En máquinas Linux, su archivo de registro llamado `logging.yml` debe estar presente en esta ruta:

```shell
/etc/newrelic-infra/logging.d/
```

Después de crear el archivo de registro, agregue el siguiente script al archivo `logging.yml`:

```yml
logs:
  - name: hadoop_secondarynamenode_log
    file: /usr/local/hadoop/logs/hadoop-hadoopuser-secondarynamenode-hadoop-master.log
    attributes:
      logtype: hadoop_secondarynamenode_logs
  - name: hadoop_resourcemanager_log
    file: /usr/local/hadoop/logs/hadoop-hadoopuser-resourcemanager-hadoop-master.log
    attributes:
      logtype: hadoop_hadoop_resourcemanager_logs
  - name: hadoop_namenode_log
    file: /usr/local/hadoop/logs/hadoop-hadoopuser-namenode-hadoop-master.log
    attributes:
      logtype: hadoop_namenode_logs
```

## Reinicie el agente New Relic Infrastructure

Antes de que pueda comenzar a leer sus datos, utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura.

```shell
sudo systemctl restart newrelic-infra.service
```

En un par de minutos, tu aplicación se enviará métrica a [one.newrelic.com](https://one.newrelic.com).

## Encuentra tus datos

Puede elegir nuestra plantilla dashboard prediseñadas llamada `Apache Hadoop` para monitor su servidor Apache Hadoop métricamente. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

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

3. En la barra de búsqueda, escriba `apache hadoop`.

4. Debería aparecer el dashboard de Apache Hadoop. Haga clic en él para instalarlo.

Su dashboard de Apache Hadoop se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Aquí hay una consulta NRQL para verificar los usuarios activos desde el administrador de recursos:

```sql
SELECT latest(activeUsers) 
FROM HadoopResourceManagerSample
```

Aquí hay una consulta NRQL para ver la cantidad de clientes activos desde el nodo de nombre:

```sql
SELECT latest(numActiveClients) 
FROM HadoopNameNodeSample
```

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
