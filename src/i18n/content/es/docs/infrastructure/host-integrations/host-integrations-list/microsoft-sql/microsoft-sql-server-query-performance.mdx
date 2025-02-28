---
title: Integración de Microsoft SQL Server consulta nivel monitoreo
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
  - Configuration
metaDescription: Configuration New Relic's Kafka integration.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="Avance">
  Todavía estamos trabajando en esta característica, ¡pero nos encantaría que la probaras!

  Esta función se proporciona actualmente como parte de una vista previa de conformidad con nuestras [políticas de prelanzamiento](https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy/).
</Callout>

Puede ver análisis a nivel de consulta para monitorear su consulta SQL dentro de su base de datos MSSQL para evaluar su rendimiento e impacto. Esta característica proporciona información valiosa sobre los tiempos de ejecución, el consumo de recursos y el potencial cuello de botella, lo que le permite optimizar las operaciones de la base de datos. Para obtener más información, consulte [Análisis a nivel de consulta](/docs/infrastructure/infrastructure-data/query-level-monitoring).

<img title="Query Performance monitoring" alt="Query Performance monitoring" src="/images/mssql-query-performance.webp" />

## Prerrequisitos:

* Microsoft SQL Server es compatible con 2017, 2019 o 2022.
* El usuario de la base de datos debe ser miembro del rol fijo de servidor sysadmin o tener la licencia `VIEW SERVER STATE` .

Para habilitar la característica de monitoreo a nivel de consulta, siga estos pasos:

<Steps>
  <Step>
    ## Para habilitar el modo de autenticación de SQL Server y Windows

    Habilite el inicio de sesión en SQL Server y el modo de autenticación de Windows. Para obtener más información, consulte [la documentación sobre el cambio del modo de autenticación de Microsoft](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/change-server-authentication-mode?view=sql-server-ver16&tabs=ssms).
  </Step>

  <Step>
    ## Para habilitar TCP

    1. Cerciorar de que TCP esté habilitado para el acceso remoto en su instancia empleando la [documentación](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver16)
    2. Compruebe la configuración del firewall:

    * Cerciorar de que su firewall permita el tráfico en el puerto `1433`. Este es el puerto de escucha para Microsoft SQL Server:

      * Abra el **Windows Defender Firewall with Advanced Security**.
      * En el menú de la izquierda, haga clic en **Inbound Rules.**
      * Busque cualquier regla para SQL Server (normalmente denominada SQL Server (TCP-In) o SQL Server TCP 1433).
      * Si no existe una regla, cree una nueva regla para permitir el tráfico TCP en el puerto 1433.
  </Step>

  <Step>
    ## Para habilitar la tienda de consultas [#queryStore]

    Ejecute el siguiente comando

    ```sql
    ALTER DATABASE DATABASE_NAME SET QUERY_STORE = ON ( QUERY_CAPTURE_MODE = ALL, DATA_FLUSH_INTERVAL_SECONDS = 900 )
    ```
  </Step>

  <Step>
    ## Ejecute la siguiente consulta para confirmar si la tienda de consultas está habilitada [#confirmQueryStore]

    Si la salida de la consulta es 1, entonces podemos asumir que la tienda de consultas está habilitada.

    ```sql
    SELECT is_query_store_on FROM sys.databases where physical_database_name = DATABASE_NAME
    ```
  </Step>

  <Step>
    ## Para integrar el agente MSSQL

    Integre el agente MSSQL empleando [esta guía.](/install/microsoft-sql)
  </Step>

  <Step>
    ## Configurar la integración MSSQL para permitir consulta monitoreo de rendimiento

    1. Para cambiar el directorio a la carpeta de configuración de integración, ejecute:

    ```bash
    cd "C:\Program Files\New Relic\newrelic-infra\integrations.d\"
    ```

    2. Edite el archivo `mssql-config.yml` con la siguiente configuración:

    * `ENABLE_QUERY_MONITORING` - Habilitar consulta monitoreo de rendimiento - El valor predeterminado es `false`.
    * `QUERY_MONITORING_RESPONSE_TIME_THRESHOLD `- Establecer el umbral de tiempo de respuesta de consulta en ms para recuperar el rendimiento métrico de la consulta individual. El `Defaults` se establece en `500 ms`.
    * `QUERY_MONITORING_COUNT_THRESHOLD` - El número de registros para cada métrica de rendimiento de la consulta. El `Defaults` se establece en `20`.

    ```yaml
      integrations:
      - name: nri-mssql
      env:
        HOSTNAME: localhost
        PORT: 1433
        USERNAME: USERNAME
        PASSWORD: PASSWORD
        ENABLE_SSL: true
        TRUST_SERVER_CERTIFICATE: true
        # Enable collection of detailed query performance metrics.
        ENABLE_QUERY_MONITORING: true
        # Threshold in milliseconds for query response time. If response time exceeds this threshold, the query will be considered slow.
        QUERY_MONITORING_RESPONSE_TIME_THRESHOLD: 500
        # Maximum number of queries returned in query analysis results.
        QUERY_MONITORING_COUNT_THRESHOLD: 20
        # Interval in seconds for fetching grouped slow queries; Should always be same as mysql-config interval.
        QUERY_MONITORING_FETCH_INTERVAL: 15
      interval: 15s
      labels:
        environment: production
      inventory_source: config/mssql
    ```
  </Step>

  <Step>
    ## Encuentra tus datos

    Puede emplear nuestra plantilla dashboard prediseñada para monitorear su métrica MSSQL. Siga estos pasos para emplear nuestra plantilla dashboard prediseñada:

    1. Desde [one.newrelic.com](https://one.newrelic.com), vaya a la página <DNT>**+ Integrations &amp; Agents**</DNT> .
    2. Hacer clic <DNT>**Dashboards**</DNT>
    3. En la barra de búsqueda, escribe `MSSQL On-Host Integration`
    4. Aparece el dashboard MSSQL. Haga clic para instalarlo.
  </Step>
</Steps>

## métrica recogida por integración

<CollapserGroup>
  <Collapser id="blockingSession" title="Bloqueo de sesión métrica">
    <table>
      <thead>
        <tr>
          <th>
            Métrica
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `blocking_spid`
          </td>

          <td>
            El ID de la sesión de bloqueo.
          </td>
        </tr>

        <tr>
          <td>
            `blocking_status`
          </td>

          <td>
            El estado de la sesión de bloqueo.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_spid`
          </td>

          <td>
            El ID de la sesión bloqueada.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_status`
          </td>

          <td>
            El estado de la sesión bloqueada.
          </td>
        </tr>

        <tr>
          <td>
            `wait_type`
          </td>

          <td>
            El tipo de espera que experimentó la sesión bloqueada.
          </td>
        </tr>

        <tr>
          <td>
            `wait_time_in_seconds`
          </td>

          <td>
            El tiempo que la sesión estuvo esperando en segundos.
          </td>
        </tr>

        <tr>
          <td>
            `command_type`
          </td>

          <td>
            El tipo de comando que se está ejecutando.
          </td>
        </tr>

        <tr>
          <td>
            `database_name`
          </td>

          <td>
            El nombre de la base de datos donde se produce el bloqueo.
          </td>
        </tr>

        <tr>
          <td>
            `blocking_query_text`
          </td>

          <td>
            El texto de la consulta que provoca el bloqueo.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_query_text`
          </td>

          <td>
            El texto de la consulta que está bloqueada.
          </td>
        </tr>

        <tr>
          <td>
            `blocked_query_start_time`
          </td>

          <td>
            La hora de inicio de la consulta bloqueada.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="executionPlan" title="consulta Plan de Ejecución métrica">
    <table>
      <thead>
        <tr>
          <th>
            Métrica
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `sql_text`
          </td>

          <td>
            El texto de la declaración SQL.
          </td>
        </tr>

        <tr>
          <td>
            `query_id`
          </td>

          <td>
            El identificador único para la consulta.
          </td>
        </tr>

        <tr>
          <td>
            `query_plan_id`
          </td>

          <td>
            El identificador único para el plan de consulta.
          </td>
        </tr>

        <tr>
          <td>
            `NodeId`
          </td>

          <td>
            El ID del nodo en el plan de ejecución.
          </td>
        </tr>

        <tr>
          <td>
            `PhysicalOp`
          </td>

          <td>
            La operación física realizada por este nodo.
          </td>
        </tr>

        <tr>
          <td>
            `LogicalOp`
          </td>

          <td>
            La operación lógica representada por este nodo.
          </td>
        </tr>

        <tr>
          <td>
            `EstimateRows`
          </td>

          <td>
            El número estimado de filas que producirá esta operación.
          </td>
        </tr>

        <tr>
          <td>
            `EstimateIO`
          </td>

          <td>
            El costo de I/O estimado de esta operación.
          </td>
        </tr>

        <tr>
          <td>
            `EstimateCPU`
          </td>

          <td>
            El costo estimado de CPU de esta operación.
          </td>
        </tr>

        <tr>
          <td>
            `AvgRowSize`
          </td>

          <td>
            El tamaño promedio de las filas procesadas por este nodo.
          </td>
        </tr>

        <tr>
          <td>
            `TotalSubtreeCost`
          </td>

          <td>
            El costo total estimado para ejecutar este subárbol.
          </td>
        </tr>

        <tr>
          <td>
            `EstimatedOperatorCost`
          </td>

          <td>
            La estimación del costo de operación del nodo.
          </td>
        </tr>

        <tr>
          <td>
            `EstimatedExecutionMode`
          </td>

          <td>
            El modo de ejecución estimado de esta operación.
          </td>
        </tr>

        <tr>
          <td>
            `GrantedMemoryKb`
          </td>

          <td>
            La cantidad de memoria concedida para esta consulta en kilobytes.
          </td>
        </tr>

        <tr>
          <td>
            `SpillOccurred`
          </td>

          <td>
            Un indicador booleano de si se produjo un derrame.
          </td>
        </tr>

        <tr>
          <td>
            `NoJoinPredicate`
          </td>

          <td>
            Un indicador booleano de si hay un predicado de unión.
          </td>
        </tr>

        <tr>
          <td>
            `total_worker_time`
          </td>

          <td>
            El tiempo total del trabajador en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `total_elapsed_time`
          </td>

          <td>
            El tiempo total transcurrido en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `total_logical_reads`
          </td>

          <td>
            El número total de lecturas lógicas realizadas.
          </td>
        </tr>

        <tr>
          <td>
            `total_logical_writes`
          </td>

          <td>
            El número total de escrituras lógicas realizadas.
          </td>
        </tr>

        <tr>
          <td>
            `execution_count`
          </td>

          <td>
            El número de veces que se ejecutó la consulta.
          </td>
        </tr>

        <tr>
          <td>
            `plan_handle`
          </td>

          <td>
            El identificador del plan empleado para recuperar el plan.
          </td>
        </tr>

        <tr>
          <td>
            `avg_elapsed_time_ms`
          </td>

          <td>
            El tiempo transcurrido promedio en milisegundos.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="waitTime" title="Espere evento métrico">
    <table>
      <thead>
        <tr>
          <th>
            Métrica
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            id de consulta
          </td>

          <td>
            El identificador único para la consulta.
          </td>
        </tr>

        <tr>
          <td>
            base de datos
          </td>

          <td>
            El nombre de la base de datos.
          </td>
        </tr>

        <tr>
          <td>
            texto de consulta
          </td>

          <td>
            El texto de la consulta.
          </td>
        </tr>

        <tr>
          <td>
            esperar_categoría
          </td>

          <td>
            La categoría de espera experimentada por la consulta.
          </td>
        </tr>

        <tr>
          <td>
            tiempo_total_de_espera_ms
          </td>

          <td>
            La cantidad total de tiempo de espera en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            tiempo de espera promedio en ms
          </td>

          <td>
            El tiempo promedio de espera en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            espera_conteo_de_eventos
          </td>

          <td>
            El recuento de eventos de espera que ocurrieron.
          </td>
        </tr>

        <tr>
          <td>
            hora_de_ultima_ejecucion
          </td>

          <td>
            La hora de la última ejecución de la consulta.
          </td>
        </tr>

        <tr>
          <td>
            marca de tiempo de colección
          </td>

          <td>
            La timestamp del momento en que se recopilaron los datos.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="slowQueries" title="consulta lenta métrica">
    <table>
      <thead>
        <tr>
          <th>
            Métrica
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            id de consulta
          </td>

          <td>
            El identificador único para la consulta.
          </td>
        </tr>

        <tr>
          <td>
            texto de consulta
          </td>

          <td>
            El texto de la consulta.
          </td>
        </tr>

        <tr>
          <td>
            base de datos
          </td>

          <td>
            El nombre de la base de datos.
          </td>
        </tr>

        <tr>
          <td>
            nombre_esquema
          </td>

          <td>
            El nombre del esquema.
          </td>
        </tr>

        <tr>
          <td>
            marca de tiempo de la última ejecución
          </td>

          <td>
            La timestamp de la última ejecución de la consulta.
          </td>
        </tr>

        <tr>
          <td>
            recuento de ejecuciones
          </td>

          <td>
            El número de veces que se ejecutó la consulta.
          </td>
        </tr>

        <tr>
          <td>
            tiempo promedio de CPU en ms
          </td>

          <td>
            El tiempo promedio de CPU en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            tiempo transcurrido promedio ms
          </td>

          <td>
            El tiempo transcurrido promedio en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            promedio_lecturas_de_disco
          </td>

          <td>
            El número promedio de lecturas de disco.
          </td>
        </tr>

        <tr>
          <td>
            promedio_de_escrituras_en_disco
          </td>

          <td>
            El número promedio de escrituras en disco.
          </td>
        </tr>

        <tr>
          <td>
            tipo_de_declaración
          </td>

          <td>
            El tipo de declaración SQL.
          </td>
        </tr>

        <tr>
          <td>
            marca de tiempo de colección
          </td>

          <td>
            La timestamp del momento en que se recopilaron los datos.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>