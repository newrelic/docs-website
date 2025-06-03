---
title: Integración de Apache Mesos
tags:
  - New Relic integrations
  - Apache Mesos integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Apache Mesos.
freshnessValidatedDate: '2024-05-20T00:00:00.000Z'
translationType: machine
---

Monitor el clúster Apache Mesos sin problemas con New Relic para obtener información completa y valiosa sobre el rendimiento, el estado y la utilización de recursos. Realice un seguimiento de los nodos maestros y esclavos, monitor la ejecución de tareas y revise el sistema métrico.

<img
  title="Apache Mesos dashboard"
  alt="Apache Mesos dashboard"
  src="/images/infrastructure_screenshot_full-apache-mesos-dashboard.webp"
/>

<figcaption>
  Luego de configurar nuestra integración Apache Mesos, le brindamos un dashboard para su Apache Mesos métrica.
</figcaption>

<Steps>
  <Step>
    ## Instalar el agente de infraestructura [#infra-install]

    Para emplear la integración de Apache Mesos, también debe [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) en el mismo host. El agente de infraestructura monitorea el host en sí, mientras que la integración que instalará en el siguiente paso amplía su monitoreo con datos específicos de Apache Mesos.
  </Step>

  <Step>
    ## Habilite la integración de Apache Mesos con nri-flex

    Para configurar la integración de Apache Mesos, siga estos pasos:

    1. Cree un archivo llamado `nri-apache-mesos-config.yml` en el directorio de integración:

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-apache-mesos-config.yml
       ```

    2. Agregue el siguiente fragmento a su archivo `nri-apache-mesos-config.yml` para permitir que el agente capture datos de Apache Mesos:

       ```yml
       integrations:
         - name: nri-flex
           interval: 30s
           config:
             name: apacheMesos
             apis:
               - event_type: apacheMesos
                 url: http://<ip-address>:5050/metrics/snapshot
       ```
  </Step>

  <Step>
    ## Log de avance de Apache Mesos

    Siga estos pasos para reenviar el log de Apache Mesos a New Relic:

    1. Edite el archivo de registro llamado `logging.yml` ubicado en la siguiente ruta:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Agregue el siguiente fragmento al archivo `logging.yml` . Reemplace `file` con la ruta del archivo log de Apache Mesos si es necesario:

       ```yml
       logs:
         - name: apache-mesos.log
           file: /var/log/mesos/LOG_FILE_NAME
           attributes:
             logtype: apache_mesos_log
       ```
  </Step>

  <Step>
    ## Reinicie el agente New Relic Infrastructure

    Reinicie su agente de infraestructura:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    En un par de minutos, tu aplicación comenzará a enviar métrica a [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Encuentra tus datos

    Puede emplear nuestra plantilla dashboard prediseñadas para monitor su aplicación métrica Apache Mesos. Siga estos pasos para emplear nuestra plantilla dashboard prediseñadas:

    1. Desde [one.newrelic.com](https://one.newrelic.com), ir a la página

       <DNT>
         **+ Integrations & Agents**
       </DNT>

    2. Haga clic en

       <DNT>
         **Dashboards**
       </DNT>

    3. En la barra de búsqueda, escribe `Apache Mesos`

    4. Debería aparecer el dashboard Apache Mesos. Haga clic en él para instalarlo

       Su dashboard Apache Mesos se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       A continuación se muestra un ejemplo de consulta NRQL para ver el tiempo de actividad del maestro Apache Mesos:

       ```sql
       SELECT latest(`master/uptime_secs`) as 'Masters uptime (seconds)' FROM apacheMesos
       ```
  </Step>
</Steps>

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
