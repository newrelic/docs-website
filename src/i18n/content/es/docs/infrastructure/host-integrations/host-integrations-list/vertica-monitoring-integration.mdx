---
title: integración Vertica
tags:
  - Vertica integration
  - New Relic integrations
metaDescription: Use New Relics infrastructure agent to get a dashboard with metrics from your Vertica.
freshnessValidatedDate: '2023-09-01T00:00:00.000Z'
translationType: machine
---

Nuestra integración Vertica monitorea el rendimiento de su almacenamiento de datos.

<img
  title="Vertica dashboard"
  alt="Vertica dashboard"
  src="/images/infrastructure_screenshot-full_Vertica-dashboard.webp"
/>

<figcaption>
  Después de configurar nuestra integración Vertica, te brindamos un dashboard para tu Vertica métrica.
</figcaption>

<Steps>
  <Step>
    ## Instalar el agente de infraestructura [#infra-install]

    Puede instalar el agente de infraestructura de dos maneras diferentes:

    * Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
    * Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial para la instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) o [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).
  </Step>

  <Step>
    ## Utilice `nri-flex` para capturar métrica [#flex]

    Flex viene incluido con el agente New Relic Infrastructure . Debe configurar `nri-flex` para Vertica y crear un archivo de configuración flexible.

    Sigue estos pasos:

    1. Cree un archivo llamado `vertica-flex-config.yml` en esta ruta:

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Actualiza el archivo `vertica-flex-config.yml` con esta configuración:

       * `EVENT_TYPE`: Puedes considerar `EVENT_TYPE` como una tabla base de datos New Relic que puedes consultar usando NRQL.
       * `COMMAND`: Contiene el comando que se utiliza para imprimir métrica en el terminal.

         Una vez que su archivo de configuración esté actualizado, se verá como a continuación:

       ```yml
         --- 
         integrations:
           - name: nri-flex
             config:
               name: VerticaFlex
               apis:
                 - database: vertica
                   db_conn: 'vertica://dbadmin:vertica@13.235.79.230:5433/dbadmin'
                   logging:
                     open: true
                   db_async: true # process queries async
                   db_queries:
                     - name: VerticaFindCitiesDetails
                       run: SELECT * FROM cities;
                     - name: VerticaDiskSpaceUsedByTables
                       run: SELECT projection_schema, anchor_table_name, to_char(sum(used_bytes)/1024/1024/1024,'999,999.99') as disk_space_used_gb FROM projection_storage
       GROUP by projection_schema, anchor_table_name ORDER by disk_space_used_gb desc limit 50;
                     - name: VerticaFreeDiskSpace
                       run: SELECT to_char(sum(disk_space_free_mb)/1024,'999,999,999') AS disk_space_free_gb, to_char(sum(disk_space_used_mb)/1024,'999,999,999') AS disk_space_used_gb FROM disk_storage;
                     - name: VerticaUserInformation
                       run: SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap FROM users;
                     - name: VerticaUserDetails
                       run: SELECT * FROM user_sessions;
                     - name: VerticaQueriesByUser
                       run: SELECT * FROM query_profiles WHERE user_name ILIKE '%dbadmin%';
                     - name: VerticaUserRolesInformation
                       run: SELECT * FROM roles;
                     - name: VerticaResourcePoolAssignments
                       run: SELECT user_name, resource_pool FROM users;
                     - name: VerticaTableInfo
                       run: SELECT table_name, is_flextable, is_temp_table, is_system_table, count(*) FROM tables GROUP by 1,2,3,4;
                     - name: VerticaActiveEvents
                       run: SELECT * FROM active_events WHERE event_problem_description NOT ILIKE '%state to UP';
                     - name: VerticaDiskStorage
                       run:  SELECT node_name, storage_path, storage_usage, storage_status, disk_space_free_percent FROM disk_storage;
                     - name: VerticaLongRunningQueries
                       run: SELECT query_duration_us/1000000/60 AS query_duration_mins, table_name, user_name, processed_row_count AS rows_processed, substr(query,0,70) FROM query_profiles ORDER BY query_duration_us DESC LIMIT 250;
                     - name: VerticaLicenseConsumption
                       run: SELECT GET_COMPLIANCE_STATUS();
                     - name: VerticaAudit
                       run: SELECT AUDIT('');

       ```
  </Step>

  <Step>
    ## Envía tu registro de Vertica a New Relic [#logs]

    Puede utilizar nuestro [reenvío de registros](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para reenviar el registro de Vertica a New Relic.

    En máquinas Linux, puede encontrar su archivo de registro llamado `logging.yml` en esta ruta:

    ```shell
    /etc/newrelic-infra/logging.d/
    ```

    Después de crear el archivo de registro, agregue el siguiente script al archivo `logging.yml`:

    ```yml
    logs:
      - name: vertica.log
        file: /home/dbadmin/vdb/v_vdb_node0001_catalog/vertica.log
        attributes:
          logtype: vertica_log
    ```
  </Step>

  <Step>
    ## Reinicie el agente New Relic Infrastructure [#restart]

    Antes de que pueda comenzar a leer sus datos, utilice las instrucciones de nuestros [documentos del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura.

    ```bash
    sudo systemctl restart newrelic-infra.service
    ```

    En un par de minutos, tu aplicación enviará métrica a [one.newrelic.com](https://one.newrelic.com).
  </Step>

  <Step>
    ## Encuentra tus datos [#find-data]

    Puede elegir nuestra plantilla dashboard prediseñadas llamada `Vertica` para monitor su aplicación métrica Vertica. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

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

    3. En la barra de búsqueda, escriba `vertica`.

    4. Debería aparecer el dashboard de Vertica. Haga clic en él para instalarlo.

       Su dashboard Vertica se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

       Aquí hay una consulta NRQL para buscar información del usuario de la base de datos para puntos de datos como nombre de usuario, grupo de recursos, límite de memoria, límite de espacio temporal y límite de tiempo de ejecución.

       ```sql
       SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap 
       FROM VerticaUserInformation;
       ```
  </Step>
</Steps>

## ¿Que sigue? [#next]

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.

* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.

* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar su

  <InlinePopover type="dashboards"/>

  modo de visualización o para agregar más contenido a su dashboard.
