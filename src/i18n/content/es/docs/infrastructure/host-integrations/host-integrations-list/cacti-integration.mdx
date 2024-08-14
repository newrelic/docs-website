---
title: Integración de Cacti
tags:
  - Cacti integration
  - New Relic integrations
metaDescription: Use the New Relic infrastructure agent to monitor your Cacti data.
freshnessValidatedDate: never
translationType: machine
---

La integración de Cacti con New Relic le proporciona una representación gráfica fácil de usar de sus datos RRD, todo dentro de la plataforma unificada de New Relic.

<img
  title="Cacti dashboard"
  alt="Cacti dashboard"
  src="/images/infrastructure_screenshot-full_cacti-dashboard.webp"
/>

<figcaption>
  Puede ver sus datos en un dashboard luego de configurar la integración de Cacti con New Relic.
</figcaption>

## Configurar la integración de Cacti [#setup]

Complete los siguientes pasos para configurar la integración de Cacti:

<Steps>
  <Step>
    ## Instalar el agente de infraestructura [#install]

    Para emplear la integración de Cacti, primero debe [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) en el mismo host.
  </Step>

  <Step>
    ## Exponer Cacti métrica [#Expose]

    Complete los pasos a continuación para exponer sus datos RRD en formato CSV o JSON:

    1. Exporte datos de los archivos RRD de Cacti al `XML format` usando RRDTool.
    2. Convierta los datos XML al formato `CSV or JSON` .
  </Step>

  <Step>
    ## Emplee NRI-Flex para capturar formato CSV métrico [#capture-csv]

    Flex viene incluido con el agente New Relic Infrastructure . Debe configurar NRI-Flex para Cacti y crear un archivo de configuración flexible. Sigue estos pasos:

    1. Cree un archivo llamado `cacti-config.yml` en la ruta `/newrelic-infra/integrations.d` .

    2. Actualice el `cacti-config.yml` con el siguiente ejemplo de configuración:

       ```yml
       ---
       integrations:
         - name: nri-flex
           config:
             name: machineLoad
             apis:
              - name: machineLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_load_1min_2.csv
              - name: memSwap
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_swap_5.csv
              - name: proc
                file: /home/ubuntu/xmlToCsv/local_linux_machine_proc_1.csv
              - name: machineUser
                file: /home/ubuntu/xmlToCsv/local_linux_machine_users_3.csv
              - name: memBuffers
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_buffers_4.csv
              - name: ApacheCpuLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_cpuload_6.csv
              - name: ApacheTotalHits
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_hits_7.csv
              - name: ApacheTotalKbytes
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_kbytes_8.csv
              - name: UserLogins
                file: /home/ubuntu/xmlToCsv/local_linux_machine_active_10.csv
       ```
  </Step>

  <Step>
    ## Reenviar logs de Cacti [#forward]

    Siga estos pasos para reenviar el registro de Cacti a New Relic:

    1. Edite el archivo de registro llamado `logging.yml` ubicado en la siguiente ruta:

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. Agregue el siguiente fragmento al archivo `logging.yml` . Reemplace `file` con la ruta del archivo de log de Cacti si es necesario:

       ```yml
       logs:
         - name: cacti.log
           file: /var/www/html/cacti/log/LOG_FILE_NAME
           attributes:
             logtype: cacti_log
       ```
  </Step>

  <Step>
    ## Reinicie el agente New Relic Infrastructure [#restart]

    Reinicie su agente de infraestructura:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    Tu aplicación enviará métrica a [one.newrelic.com](https://one.newrelic.com) en unos minutos.
  </Step>

  <Step>
    ## Encuentra tus datos [#find-data]

    Puede emplear nuestra plantilla dashboard prediseñadas para monitor su aplicación métrica de Cacti. Siga estos pasos para emplear nuestra plantilla dashboard prediseñadas:

    1. Desde [one.newrelic.com](https://one.newrelic.com), ir a la página

       <DNT>
         **+ Integrations & Agents**
       </DNT>

    2. Haga clic en

       <DNT>
         **Dashboards**
       </DNT>

    3. En la barra de búsqueda, escribe `Cacti`

    4. Debería aparecer el dashboard de Cacti. Haga clic en él para instalarlo

       Su dashboard Cacti se considera un dashboard personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       A continuación se muestra un ejemplo de consulta NRQL para ver el recuento de inicios de sesión del usuario:

       ```sql
       SELECT latest(value) FROM UserLoginsSample FACET name
       ```
  </Step>
</Steps>

## ¿Que sigue? [#whats-next]

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Gestione su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización del dashboard o agregar más contenido.
