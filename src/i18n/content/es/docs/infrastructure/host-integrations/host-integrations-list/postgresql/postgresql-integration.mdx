---
title: Integración de monitoreo PostgreSQL
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s PostgreSQL integration: how to install it and configure it, and what data it reports.'
freshnessValidatedDate: never
translationType: machine
---

La integración New Relic PostgreSQL [en el host](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) recibe y envía métricas de inventario desde su instancia de PostgreSQL a la plataforma New Relic, donde puede agregar y visualizar rendimiento métrico clave. Los datos de instancia, base de datos y clúster le ayudan a encontrar el origen de los problemas.

Para instalar la integración de monitoreo de PostgreSQL, debe seguir los siguientes pasos:

1. [Instalar y activar la integración](#install).
2. [Configurar la integración](#config).
3. [Usuario y permisos de PostgreSQL](#create-user).
4. [Buscar y utilizar datos](#find-and-use).
5. Opcionalmente, consulte [los ajustes de configuración de PostgreSQL](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-config).

<Callout variant="important">
  Para obtener mejores resultados, [actualice periódicamente el paquete de integración](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package) y [el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).
</Callout>

## Compatibilidad y requisitos [#req]

### Versiones de PostgreSQL [#postgresql-versions]

Nuestra integración es compatible con PostgreSQL hasta la versión 16.

### Servicios gestionados compatibles [#supported-ms]

* Amazon RDS
* Azul Flexible

### Sistema operativo soportado [#supported-os]

* Windows

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="Windows"
    alt="Windows"
    src="/images/os_icon_windows.webp"
  />

* linux

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="Linux"
    alt="Linux"
    src="/images/os_icon_linux.webp"
  />

Para obtener una lista completa de versiones específicas de Windows y Linux, consulte la tabla de [sistemas operativos compatibles](/docs/infrastructure/install-infrastructure-agent/get-started/requirements-infrastructure-agent/#operating-systems).

### Requisito del sistema [#system-reqs]

* Una cuenta New Relic . ¿No tienes uno? [¡Registrate gratis!](https://newrelic.com/signup) No se requiere tarjeta de crédito.

* Si PostgreSQL no se ejecuta en Kubernetes o Amazon ECS, puede [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) en un host con sistema operativo Linux o Windows o en un host capaz de acceder de forma remota al lugar donde está instalado PostgreSQL. De lo contrario:

  * Si está funcionando

    <img
      style={{ width: '32px', height: '32px'}}
      class="inline"
      title="Kubernetes"
      alt="Kubernetes"
      src="/images/os_icon_k8.webp"
    >
      Kubernetes, consulte [estos requisitos](/docs/monitor-service-running-kubernetes#requirements).
    </img>

  * Si está funcionando

    <img
      style={{ width: '32px', height: '32px'}}
      class="inline"
      title="ECS"
      alt="ECS"
      src="/images/os_icon_ecs.webp"
    >
      Amazon ECS, consulte [estos requisitos](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
    </img>

## Instalar y activar la integración. [#install]

Para instalar la integración de PostgreSQL, siga las instrucciones de su entorno.

### Instalación de linux [#linux]

1. Instale [el agente de infraestructura](/docs/integrations/host-integrations/installation/install-infrastructure-host-integrations/#install) y reemplace la variable `INTEGRATION_FILE_NAME` con `nri-postgresql`.

2. Cambie el directorio a la carpeta de configuración de integración ejecutando:

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

3. Copie el archivo de configuración de muestra ejecutando:

   ```shell
   sudo cp postgresql-config.yml.sample postgresql-config.yml
   ```

4. Edite el archivo de configuración `postgresql-config.yml` con su editor favorito. Vea algunos [ejemplos de archivos de configuración.](#examples).

5. Antes de reiniciar el agente de infraestructura, [cree un usuario](#create-user) con permisos `READ` en las funciones requeridas.

6. Para habilitar el análisis y reenvío automático de Postgresql, copie o cambie el nombre del archivo `postgresql-log.yml.example` a `postgresql-log.yml`. No es necesario reiniciar el agente, pero es posible que deba actualizar el archivo YML con la ubicación de su archivo de registro postgresql, si no está utilizando las ubicaciones predeterminadas.

   Por ejemplo:

   ````shell
   sudo cp /etc/newrelic-infra/logging.d/postgresql-log.yml.example /etc/newrelic-infra/logging.d/postgresql-log.yml
   ```  
   ````

### Otros ambientes [#other-env]

<CollapserGroup>
  <Collapser
    id="windows-install"
    title={<><img src="/images/os_icon_windows.webp" title="Windows installation" alt="Windows installation" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>instalación de Windows</img></>}
  >
    1. Descargue la imagen del instalador `nri-postgresql` .MSI desde:

       [https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-postgresql/nri-postgresql-amd64.msi](https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-postgresql/nri-postgresql-amd64.msi)

    2. Para instalar desde el símbolo del sistema de Windows, ejecute:

       ```shell
       msiexec.exe /qn /i PATH\TO\nri-postgresql-amd64.msi
       ```

    3. En el directorio de integración, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`, cree una copia del archivo de configuración de muestra ejecutando:

       ```shell
       cp postgresql-config.yml.sample postgresql-config.yml
       ```

    4. Edite el archivo `postgresql-config.yml` como se describe en [los archivos de muestra postgresql-config.yml](#examples).
  </Collapser>

  <Collapser
    id="ecs-install"
    title={<><img src="/images/os_icon_ecs.webp" title="Amazon ECS installation" alt="Amazon ECS installation" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>' ' Instalación de Amazon ECS</img></>}
  >
    Consulte [Servicio de monitorización ejecutándose en ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
  </Collapser>

  <Collapser
    id="k8s-install"
    title={<><img src="/images/os_icon_k8.webp" title="Kubernetes installation" alt="Kubernetes installation" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>Kubernetes Instalación</img></>}
  >
    Consulte [Supervisar el servicio que se ejecuta en Kubernetes](/docs/monitor-service-running-kubernetes).
  </Collapser>
</CollapserGroup>

Notas adicionales:

* <DNT>
    **Advanced:**
  </DNT>

  integración también están disponibles en [formato tarball](/docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic#tarball) para permitir la instalación fuera de un administrador de paquetes.

* <DNT>
    **On-host integrations do not automatically update.**
  </DNT>

  Para obtener mejores resultados, [actualice periódicamente el paquete de integración](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package) y [el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

<InstallFeedback/>

## Configurar la integración [#config]

Hay varias formas de configurar la integración, dependiendo de cómo la hayas instalado:

* Si se habilita a través de

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="Kubernetes"
    alt="Kubernetes"
    src="/images/os_icon_k8.webp"
  >
    Kubernetes, consulte [Supervisar los servicios que se ejecutan en Kubernetes](/docs/monitor-service-running-kubernetes).
  </img>

* Si se habilita a través de

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="ECS"
    alt="ECS"
    src="/images/os_icon_ecs.webp"
  >
    Amazon ECS, consulte [Monitorear servicios que se ejecutan en ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
  </img>

* Si está instalado en el host, edite la configuración en el archivo de configuración YAML de la integración, `postgresql-config.yml`. La configuración de formato YAML de una integración es donde puede colocar las credenciales de inicio de sesión requeridas y configurar cómo se recopilan los datos. Las opciones que cambie dependen de su configuración y preferencia. El archivo de configuración tiene configuraciones comunes aplicables a todas las integraciones, como `interval`, `timeout`, `inventory_source`. Para leer todo sobre estas configuraciones comunes, consulte nuestro documento [Formato de configuración](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-newer-configuration-format/#configuration-basics) .

<Callout variant="important">
  Si todavía utiliza nuestros archivos de configuración o definición legacy, verifique el [formato de configuración estándar](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format/).
</Callout>

Las configuraciones específicas relacionadas con PostgreSQL se definen usando la sección `env` del archivo de configuración. Estas configuraciones controlan la conexión a su instancia de PostgreSQL, así como otras configuraciones y características de seguridad. La lista de configuraciones válidas se describe en la siguiente sección de este documento.

## Usuario y permisos de PostgreSQL [#create-user]

Cree un usuario con `SELECT` permisos en:

* `pg_stat_database`
* `pg_stat_database_conflicts`
* `pg_stat_bgwriter`

Para crear el usuario para la integración de PostgreSQL:

```sql
CREATE USER new_relic WITH PASSWORD MY_PASSWORD;
GRANT SELECT ON pg_stat_database TO new_relic;
GRANT SELECT ON pg_stat_database_conflicts TO new_relic;
GRANT SELECT ON pg_stat_bgwriter TO new_relic;
```

Esto permitirá que la integración recopile métricas globales relacionadas con la instancia de PostgreSQL.

Si también desea obtener métricas relacionadas con tablas e índices (por ejemplo, tamaño de tabla y tamaño de índice), el rol de PostgreSQL utilizado por la integración (`new_relic`) también necesita permisos `SELECT` en las tablas de las cuales recopilará métricas. de. Por ejemplo, para permitir que la integración recopile métricas de todas las tablas e índices presentes en la base de datos (en el público `schema`), use lo siguiente:

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA public TO new_relic;
```

Si también desea obtener métricas de nivel de consulta del archivo de configuración de consulta personalizada de PostgreSQL, la función de PostgreSQL utilizada por la integración (`new_relic`) debe agregarse a la función (`pg_read_all_stats`). Esto se debe a que el usuario aprovecha la extensión (`pg_stat_statements`).

```sql
GRANT pg_read_all_stats TO new_relic;
```

Habilitar la extensión `pg_stat_statements` puede requerir que la crees manualmente desde un símbolo de consulta:

```sql
CREATE EXTENSION pg_stat_statements;
```

### Archivos de muestra postgresql-config.yml [#examples]

<CollapserGroup>
  <Collapser
    id="example-postgresSQL-collection-config"
    title="Archivo de recopilación de configuración de PostgreSQL"
  >
    * Matriz JSON: Interpretada como una lista de nombres de bases de datos de la cual recopilar todas las métricas relevantes, incluidas las tablas e índices pertenecientes a esa base de datos.

      Por ejemplo:

      ```yml
      collection_list: '["postgres"]'
      ```

    * Objeto JSON: solo se recopilará la entidad especificada en el objeto, no se realizará ningún descubrimiento automático. Los niveles de JSON son `database name -> schema name -> table name -> index name`.

      Por ejemplo:

      ```yml
      collection_list: '{"postgres":{"public":{"pg_table1":["pg_index1","pg_index2"],"pg_table2":[]}}}'
      ```

    * `ALL`: recopila métricas para todas las bases de datos, esquemas, tablas e índices descubiertos.

      Por ejemplo:

      ```yml
      collection_list: 'ALL'
      ```

      ```yml
      integrations:
        - name: nri-postgresql
          env:
            USERNAME: postgres
            PASSWORD: pass
            HOSTNAME: psql-sample.localnet
            PORT: 6432
            DATABASE: postgres

            COLLECT_DB_LOCK_METRICS: false
            COLLECTION_LIST: '{"postgres":{"public":{"pg_table1":["pg_index1","pg_index2"],"pg_table2":[]}}}'
            TIMEOUT:  10
          interval: 15s
          labels:
            env: production
            role: postgresql
          inventory_source: config/postgresql
      ```
  </Collapser>

  <Collapser
    id="example-postgresSQL-managed-db-service-config"
    title="Archivo de configuración de PostgreSQL Azure Flexible y AWS RDS/Aurora"
  >
    * Opciones habilitadas para Azure/AWS SSL: las ofertas de base de datos administrada flexible de Azure requieren SSL para conectarse. AWS RDS/Aurora puede requerir SSL si su versión MySQL es 5.7+ y require_secure_transport está configurado en ON en su grupo de parámetros Aurora. Para cumplir con el requisito de SSL, estas configuraciones en postgresql-config.yml deben establecerse en `true`.

      Por ejemplo:

      ```yml
      ENABLE_SSL: "true"
      TRUST_SERVER_CERTIFICATE: "true"
      ```

    * Opciones deshabilitadas de Azure/AWS SSL: además de las configuraciones anteriores, las siguientes configuraciones de SSL deben comentarse o eliminarse de la configuración. Esto se debe a que la configuración confía en el certificado del servidor anterior.

      Por ejemplo:

      ```yml
      # SSL_ROOT_CERT_LOCATION: /etc/newrelic-infra/root_cert.crt
      # SSL_CERT_LOCATION: /etc/newrelic-infra/postgresql.crt
      # SSL_KEY_LOCATION: /etc/newrelic-infra/postgresql.key
      ```

    * Resumen: una vez implementadas estas configuraciones, el archivo de configuración completo de Azure/AWS debería verse como el siguiente. Nota: el agente de infraestructura y la integración Postgresql deben instalarse en un host con acceso de red a la base de datos instancia.

      Por ejemplo:

      ```yml
      integrations:
        - name: nri-postgresql
          env:
            USERNAME: newrelic
            PASSWORD: password
            HOSTNAME: AWS-or-Azure-instance-name
            PORT: 5432
            DATABASE: postgres
            COLLECT_DB_LOCK_METRICS: false
            COLLECTION_LIST: 'ALL'
            ENABLE_SSL: "true"
            TRUST_SERVER_CERTIFICATE: "true"
            # SSL_ROOT_CERT_LOCATION: /etc/newrelic-infra/root_cert.crt
            # SSL_CERT_LOCATION: /etc/newrelic-infra/postgresql.crt
            # SSL_KEY_LOCATION: /etc/newrelic-infra/postgresql.key
            TIMEOUT:  10
          interval: 15s
          labels:
            env: production
            role: postgresql
          inventory_source: config/postgresql
      ```
  </Collapser>

  <Collapser
    id="example-postgresSQL-SSL-config"
    title="Archivo de recopilación de configuración SSL de PostgreSQL"
  >
    ```yml
    integrations:
      - name: nri-postgresql
        env:
          USERNAME: postgres
          PASSWORD: pass
          HOSTNAME: psql-sample.localnet
          PORT: 6432
          DATABASE: postgres

          COLLECT_DB_LOCK_METRICS: false
          COLLECTION_LIST: '["postgres"]'
          ENABLE_SSL: true
          TRUST_SERVER_CERTIFICATE: false
          SSL_ROOT_CERT_LOCATION: /etc/newrelic-infra/root_cert.crt
          SSL_CERT_LOCATION: /etc/newrelic-infra/postgresql.crt
          SSL_KEY_LOCATION: /etc/newrelic-infra/postgresql.key
          TIMEOUT:  10
        interval: 15s
        labels:
          env: production
          role: postgresql
        inventory_source: config/postgresql
    ```
  </Collapser>

  <Collapser
    id="example-postgresSQL-custom-query-config"
    title="Consulta personalizada de PostgreSQL"
  >
    ```yml
    integrations:
      - name: nri-postgresql
        env:
          USERNAME: postgres
          PASSWORD: pass
          HOSTNAME: psql-sample.localnet
          PORT: 6432
          DATABASE: postgres

          COLLECT_DB_LOCK_METRICS: false
          COLLECTION_LIST: ALL
          CUSTOM_METRICS_QUERY: >-
            select
              'rows_inserted' as "metric_name",
              'delta' as "metric_type",
              sd.tup_inserted as "metric_value",
              sd.datid as "database_id"
              from pg_stat_database sd;
          TIMEOUT:  10
        interval: 15s
        labels:
          env: production
          role: postgresql
        inventory_source: config/postgresql
    ```
  </Collapser>

  <Collapser
    id="example-postgresSQL-custom-query-config-file"
    title="Archivo de configuración de consulta personalizada de PostgreSQL"
  >
    Se puede definir un archivo de configuración YAML adicional con uno o más SQL personalizados y la integración necesitará la ruta al archivo en el parámetro CUSTOM_METRICS_CONFIG.

    * postgresql-config.yml

      ```yml
      integrations:
        - name: nri-postgresql
          env:
            USERNAME: postgres
            PASSWORD: pass
            HOSTNAME: psql-sample.localnet
            PORT: 6432
            DATABASE: postgres

            COLLECT_DB_LOCK_METRICS: false
            COLLECTION_LIST: ALL
            CUSTOM_METRICS_CONFIG: "path/to/postgresql-custom-query.yml"
            TIMEOUT:  10
          interval: 15s
          labels:
            env: production
            role: postgresql
          inventory_source: config/postgresql
      ```

    * postgresql-custom-query.yml

      ```yml
      ---
      queries:

        # Metric names are set to the column names in the query results
        - query: >-
            SELECT
            BG.checkpoints_timed AS scheduled_checkpoints_performed,
            BG.checkpoints_req AS requested_checkpoints_performed,
            BG.buffers_checkpoint AS buffers_written_during_checkpoint,
            BG.buffers_clean AS buffers_written_by_background_writer,
            BG.maxwritten_clean AS background_writer_stops,
            BG.buffers_backend AS buffers_written_by_backend,
            BG.buffers_alloc AS buffers_allocated
            FROM pg_stat_bgwriter BG;

          # database defaults to the auth database in the main config
          database: new_frontier_config_dev

          # If not set explicitly here, metric type will default to
          # 'gauge' for numbers and 'attribute' for strings
          metric_types:
            buffers_allocated: rate

          # If unset, sample_name defaults to PostgresqlCustomSample
          sample_name: MyCustomSample
      ```
  </Collapser>
</CollapserGroup>

Para obtener más información sobre la estructura general de la configuración de integración en el host, consulte [Configuración](/docs/integrations/integrations-sdk/file-specifications/host-integration-configuration-overview).

## Opciones de configuración para la integración. [#config-options]

Para obtener más información sobre cómo encontrar y utilizar sus datos, consulte [los ajustes de configuración de PostgreSQL](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-config).

## Buscar y utilizar datos [#find-and-use]

Los datos de este servicio se informan a un [dashboard de integración](/docs/integrations/new-relic-integrations/getting-started/infrastructure-integration-dashboards-charts).

métricas se adjuntan a estos [tipos de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic):

* [PostgresqlBase de datosMuestra métrica](#databaseSample)
* [PostgresqlIndexMuestra métrica](#indexSample)
* [PostgresqlInstanciaMuestra métrica](#instanceSample)
* [PostgresqlTableMuestra métrica](#tableSample)
* [PgBouncerMuestra métrica](#pgBouncerSample)

Puede [consultar estos datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) para fines de resolución de problemas o para crear gráficos y paneles personalizados.

Para obtener más información sobre cómo encontrar y utilizar sus datos, consulte cómo [entender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Métrica recogida por la integración [#metrics]

La integración PostgreSQL recoge la siguiente métrica. Algunos nombres de métricas tienen como prefijo un indicador de categoría y un punto, como `db.` o `index.`.

<CollapserGroup>
  <Collapser
    id="databaseSample"
    title="PostgresqlBase de datosMuestra métrica"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            PostgreSQLDatabaseSample atributo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `db.connections`
          </td>

          <td>
            Número de backend actualmente conectados a esta base de datos.
          </td>
        </tr>

        <tr>
          <td>
            `db.maxconnections`
          </td>

          <td>
            El número máximo de conexiones simultáneas al servidor de base de datos.
          </td>
        </tr>

        <tr>
          <td>
            `db.commitsPerSecond`
          </td>

          <td>
            Transacción comprometida por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `db.rollbacksPerSecond`
          </td>

          <td>
            Transacción revertida por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `db.readsPerSecond`
          </td>

          <td>
            Número de bloques de disco leídos en esta base de datos por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `db.bufferHitsPerSecond`
          </td>

          <td>
            Número de veces que ya se encontraron bloques de disco en la memoria caché del búfer, por lo que no fue necesaria una lectura. Esto solo incluye visitas al caché del búfer de PostgreSQL, no al caché del sistema de archivos del sistema operativo.
          </td>
        </tr>

        <tr>
          <td>
            `db.rowsReturnedPerSecond`
          </td>

          <td>
            Filas devueltas por consulta por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `db.rowsFetchedPerSecond`
          </td>

          <td>
            Filas recuperadas por consulta por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `db.rowsInsertedPerSecond`
          </td>

          <td>
            Filas insertadas por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `db.rowsUpdatedPerSecond`
          </td>

          <td>
            Filas actualizadas por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `db.rowsDeletedPerSecond`
          </td>

          <td>
            Filas eliminadas por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `db.conflicts.tablespacePerSecond`
          </td>

          <td>
            Número de consultas en esta base de datos que han sido canceladas debido a la caída de tablespaces.
          </td>
        </tr>

        <tr>
          <td>
            `db.conflicts.locksPerSecond`
          </td>

          <td>
            Número de consultas en esta base de datos que han sido canceladas por tiempos de espera de bloqueo.
          </td>
        </tr>

        <tr>
          <td>
            `db.conflicts.snapshotPerSecond`
          </td>

          <td>
            Número de consultas en esta base de datos que han sido canceladas debido a instantáneas antiguas.
          </td>
        </tr>

        <tr>
          <td>
            `db.conflicts.bufferpinPerSecond`
          </td>

          <td>
            Número de consultas en esta base de datos que han sido canceladas debido a buffers anclados.
          </td>
        </tr>

        <tr>
          <td>
            `db.conflicts.deadlockPerSecond`
          </td>

          <td>
            Número de consultas de esta base de datos que han sido canceladas por bloqueos.
          </td>
        </tr>

        <tr>
          <td>
            `db.tempFilesCreatedPerSecond`
          </td>

          <td>
            Número de ficheros temporales creados por consulta en esta base de datos. Se cuentan todos los archivos temporales, independientemente de por qué se creó el archivo temporal (por ejemplo, clasificación o hash) y de la configuración `log_temp_files` .
          </td>
        </tr>

        <tr>
          <td>
            `db.tempWrittenInBytesPerSecond`
          </td>

          <td>
            Cantidad total de datos escritos en archivos temporales por consulta en esta base de datos. Se cuentan todos los archivos temporales, independientemente de por qué se creó el archivo temporal y de la configuración `log_temp_files` .
          </td>
        </tr>

        <tr>
          <td>
            `db.deadlocksPerSecond`
          </td>

          <td>
            Número de interbloqueos detectados en esta base de datos.
          </td>
        </tr>

        <tr>
          <td>
            `db.readTimeInMillisecondsPerSecond`
          </td>

          <td>
            Tiempo dedicado a leer bloques de archivos de datos por backend en esta base de datos, en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `db.writeTimeInMillisecondsPerSecond`
          </td>

          <td>
            Tiempo dedicado a escribir bloques de archivos de datos por backend en esta base de datos, en milisegundos.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="indexSample"
    title="PostgresqlIndexMuestra métrica"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            PostgreSQLIndexSample atributo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `index.sizeInBytes`
          </td>

          <td>
            El tamaño de un índice.
          </td>
        </tr>

        <tr>
          <td>
            `index.rowsReadPerSecond`
          </td>

          <td>
            El número de entradas de índice devueltas por los escaneos en este índice.
          </td>
        </tr>

        <tr>
          <td>
            `index.rowsFetchedPerSecond`
          </td>

          <td>
            El número de entradas de índice obtenidas mediante escaneos en este índice.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="instanceSample"
    title="PostgresqlInstanciaMuestra métrica"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            PostgreSQLInstanceSample atributo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `bgwriter.checkpointsScheduledPerSecond`
          </td>

          <td>
            Número de controles programados que se han realizado.
          </td>
        </tr>

        <tr>
          <td>
            `bgwriter.checkpointsRequestedPerSecond`
          </td>

          <td>
            Número de controles solicitados que se han realizado.
          </td>
        </tr>

        <tr>
          <td>
            `bgwriter.buffersWrittenForCheckpointsPerSecond`
          </td>

          <td>
            Número de buffers escritos durante los puntos de control.
          </td>
        </tr>

        <tr>
          <td>
            `bgwriter.buffersWrittenByBackgroundWriterPerSecond`
          </td>

          <td>
            Número de buffers escritos por el escritor en segundo plano.
          </td>
        </tr>

        <tr>
          <td>
            `bgwriter.backgroundWriterStopsPerSecond`
          </td>

          <td>
            Número de veces que el escritor en segundo plano detuvo un análisis de limpieza porque había escrito demasiados buffers.
          </td>
        </tr>

        <tr>
          <td>
            `bgwriter.buffersWrittenByBackendPerSecond`
          </td>

          <td>
            Número de buffers escritos directamente por un backend.
          </td>
        </tr>

        <tr>
          <td>
            `bgwriter.buffersAllocatedPerSecond`
          </td>

          <td>
            Número de buffers asignados.
          </td>
        </tr>

        <tr>
          <td>
            `bgwriter.backendFsyncCallsPerSecond`
          </td>

          <td>
            Número de veces que un backend tuvo que ejecutar su propia llamada `fsync` . Normalmente, el escritor en segundo plano los maneja incluso cuando el backend realiza su propia escritura.
          </td>
        </tr>

        <tr>
          <td>
            `bgwriter.checkpointWriteTimeInMillisecondsPerSecond`
          </td>

          <td>
            Cantidad total de tiempo invertido en la parte del procesamiento del punto de control donde los archivos se escriben en el disco, en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `bgwriter.checkpointSyncTimeInMillisecondsPerSecond`
          </td>

          <td>
            Cantidad total de tiempo invertido en la parte del procesamiento del punto de control donde los archivos se sincronizan con el disco, en milisegundos.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="tableSample"
    title="PostgresqlTableMuestra métrica"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            PostgreSQLTableSample atributo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table.totalSizeInBytes`
          </td>

          <td>
            El espacio total en disco utilizado por la tabla, incluidos índices y datos TOAST.
          </td>
        </tr>

        <tr>
          <td>
            `table.indexSizeInBytes`
          </td>

          <td>
            El espacio total en disco utilizado por los índices adjuntos a la tabla especificada.
          </td>
        </tr>

        <tr>
          <td>
            `table.liveRows`
          </td>

          <td>
            Número de filas activas.
          </td>
        </tr>

        <tr>
          <td>
            `table.deadRows`
          </td>

          <td>
            Número de filas muertas.
          </td>
        </tr>

        <tr>
          <td>
            `table.indexBlocksReadPerSecond`
          </td>

          <td>
            El número de bloques de disco leídos de todos los índices de esta tabla.
          </td>
        </tr>

        <tr>
          <td>
            `table.indexBlocksHitPerSecond`
          </td>

          <td>
            El número de aciertos del búfer en todos los índices de esta tabla.
          </td>
        </tr>

        <tr>
          <td>
            `table.indexToastBlocksReadPerSecond`
          </td>

          <td>
            El número de bloques de disco leídos del índice de la tabla TOAST de esta tabla.
          </td>
        </tr>

        <tr>
          <td>
            `table.indexToastBlocksHitPerSecond`
          </td>

          <td>
            El número de aciertos del búfer en el índice de la tabla TOAST de esta tabla.
          </td>
        </tr>

        <tr>
          <td>
            `table.lastVacuum`
          </td>

          <td>
            Hora del último vacío en la mesa.
          </td>
        </tr>

        <tr>
          <td>
            `table.lastAutoVacuum`
          </td>

          <td>
            Hora del último vacío automático en la mesa.
          </td>
        </tr>

        <tr>
          <td>
            `table.lastAnalyze`
          </td>

          <td>
            Hora del último análisis en la mesa.
          </td>
        </tr>

        <tr>
          <td>
            `table.lastAutoAnalyze`
          </td>

          <td>
            Hora del último análisis automático en la mesa.
          </td>
        </tr>

        <tr>
          <td>
            `table.sequentialScansPerSecond`
          </td>

          <td>
            Número de exploraciones secuenciales iniciadas en esta tabla por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `table.sequentialScanRowsFetchedPerSecond`
          </td>

          <td>
            Número de filas activas recuperadas por escaneos secuenciales por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `table.indexScansPerSecond`
          </td>

          <td>
            Número de exploraciones de índice iniciadas en esta tabla.
          </td>
        </tr>

        <tr>
          <td>
            `table.indexScanRowsFetchedPerSecon`
          </td>

          <td>
            Número de filas activas obtenidas mediante escaneos de índice.
          </td>
        </tr>

        <tr>
          <td>
            `table.rowsInsertedPerSecond`
          </td>

          <td>
            Filas insertadas por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `table.rowsUpdatedPerSecond`
          </td>

          <td>
            Filas actualizadas por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `table.rowsDeletedPerSecond`
          </td>

          <td>
            Filas eliminadas por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `table.bloatSizeInBytes`
          </td>

          <td>
            Tamaño de la hinchazón en bytes.
          </td>
        </tr>

        <tr>
          <td>
            `table.dataSizeInBytes`
          </td>

          <td>
            Tamaño del espacio entre discos utilizado por la bifurcación principal de la mesa.
          </td>
        </tr>

        <tr>
          <td>
            `table.bloatRatio`
          </td>

          <td>
            Fracción del tamaño de datos de la tabla que está hinchada.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="pgBouncerSample"
    title="PgBouncerMuestra métrica"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            PgBouncerSample atributo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `pgbouncer.stats.transactionsPerSecond`
          </td>

          <td>
            La tasa de transacción.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.queriesPerSecond`
          </td>

          <td>
            La tasa de consulta.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.bytesInPerSecond`
          </td>

          <td>
            El tráfico total de red recibido.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.bytesOutPerSecond`
          </td>

          <td>
            El tráfico total de red enviado.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.totalTransactionDurationInMillisecondsPerSecond`
          </td>

          <td>
            Tiempo empleado por `pgbouncer` en la transacción.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.totalQueryDurationInMillisecondsPerSecond`
          </td>

          <td>
            Tiempo dedicado por `pgbouncer` a consultar activamente PostgreSQL.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.avgTransactionCount`
          </td>

          <td>
            El número promedio de transacciones por segundo en el último período de estadísticas.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.avgTransactionDurationInMilliseconds`
          </td>

          <td>
            La duración promedio de la transacción.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.avgQueryCount`
          </td>

          <td>
            El número promedio de consultas por segundo en el último período de estadísticas.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.avgBytesIn`
          </td>

          <td>
            El tráfico de red del cliente recibido.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.avgBytesOut`
          </td>

          <td>
            El tráfico de red del cliente enviado.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.stats.avgQueryDurationInMilliseconds`
          </td>

          <td>
            La duración promedio de la consulta.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.clientConnectionsActive`
          </td>

          <td>
            Conexiones de cliente vinculadas a la conexión del servidor y capaces de procesar la consulta.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.clientConnectionsWaiting`
          </td>

          <td>
            Conexiones de cliente esperando en una conexión de servidor.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.clientConnectionsWaitingCancelReq`
          </td>

          <td>
            Conexiones de clientes que aún no han enviado cancelaciones de consultas al servidor.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.clientConnectionsActiveCancelReq`
          </td>

          <td>
            Conexiones de clientes que han enviado cancelaciones de consultas al servidor y están esperando la respuesta del servidor.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.serverConnectionsActiveCancel`
          </td>

          <td>
            Conexiones de servidor que actualmente están reenviando una solicitud de cancelación.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.serverConnectionsBeingCancel`
          </td>

          <td>
            Servidores que normalmente podrían quedar inactivos pero que están esperando hacerlo hasta que se hayan completado todas las solicitudes de cancelación en curso que se enviaron para cancelar una consulta en este servidor.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.serverConnectionsActive`
          </td>

          <td>
            Conexiones de servidor vinculadas a una conexión de cliente.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.serverConnectionsIdle`
          </td>

          <td>
            Conexiones del servidor inactivas y listas para una consulta del cliente.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.serverConnectionsUsed`
          </td>

          <td>
            Las conexiones del servidor están inactivas durante más de `server_check_delay` y necesitan `server_check_query`.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.serverConnectionsTested`
          </td>

          <td>
            Conexiones de servidor que actualmente se ejecutan `server_reset_query` o `server_check_query`.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.serverConnectionsLogin`
          </td>

          <td>
            Conexiones del servidor actualmente en proceso de inicio de sesión.
          </td>
        </tr>

        <tr>
          <td>
            `pgbouncer.pools.maxwaitInMilliseconds`
          </td>

          <td>
            Antigüedad de la conexión de cliente no atendida más antigua.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
