---
title: Redis monitoreo integracion
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s Redis integration: how to install it, configure it, and understand the data it reports.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra integración de Redis informa datos de rendimiento críticos de su servidor [Redis](https://redis.io) a los productos New Relic. Puede ver estos [datos métricos](#metrics) y [datos de inventario](#inventory) en un panel prediseñado, crear políticas de alertas y crear consultas y gráficos personalizados. También puede especificar claves que sean importantes para su aplicación y obtener información sobre su longitud.

Continúe leyendo para instalar la integración y ver qué datos recopilamos.

## Compatibilidad y requisitos [#comp-req]

Nuestra integración es compatible con las versiones de Redis desde 3.0 a 7.0.

Antes de instalar la integración, asegúrese de cumplir con los siguientes requisitos:

* Una cuenta New Relic . ¿No tienes uno? [¡Registrate gratis!](https://newrelic.com/signup) No se requiere tarjeta de crédito.

* Si Redis **no** se ejecuta en Kubernetes o Amazon ECS, debe [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) en un host del sistema operativo Linux que ejecute Redis. De lo contrario:

  * Si se ejecuta en Kubernetes, consulte [estos requisitos](/docs/monitor-service-running-kubernetes#requirements).
  * Si se ejecuta en ECS, consulte [estos requisitos](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).

La integración obtiene datos ejecutando comandos de Redis:

* [Comando`INFO` ](https://redis.io/commands/info): los datos del comando INFO completan los datos métricos y algunos datos de inventario.

* [Comando`CONFIG GET` ](https://redis.io/commands/config-get): la mayoría de los datos de inventario provienen de este comando.

  * En instalación Redis administrada sin permisos para ejecutar el comando `CONFIG` (por ejemplo, AWS ElastiCache), se puede deshabilitar la ejecución de este comando con la opción de configuración `config_inventory: false`.

* Adquisición de longitud de clave: Dependiendo del tipo de clave se utilizan estos comandos:

  * [`LLEN`](https://redis.io/commands/llen) para `list`
  * [`SCARD`](https://redis.io/commands/scard) para `set`
  * [`ZCOUNT`](https://redis.io/commands/zcount) para `zset`
  * [`HLEN`](https://redis.io/commands/hlen) para `hash` tipo.

Para la recopilación de datos de longitud de clave, el agente utiliza [canalización](https://redis.io/topics/pipelining) para minimizar el impacto en el rendimiento de Redis. Sin embargo, si recopila la longitud de muchas claves, el rendimiento de Redis puede verse afectado. Por este motivo, el agente incluye un límite de claves predeterminado (pero este límite se puede sobrescribir).

<Callout variant="important">
  Si editó los nombres de los comandos de Redis mencionados anteriormente, la integración no podrá recuperar los datos de Redis.
</Callout>

## Inicio rápido [#quick]

Instrumente su servidor Redis rápidamente y envíe sus telemetry data con instalación guiada. Nuestra instalación guiada crea un comando CLI personalizado para su entorno que descarga e instala la CLI de New Relic y el agente de infraestructura.

¿Listo para comenzar? Haga clic en uno de estos botones para probarlo.

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/marketplace/install-data-source?state=eea8674d-6cb6-b7c3-e0c9-d25f5d75ff79"
    variant="primary"
  >
    Instalación
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.newrelic.com/marketplace/install-data-source?state=eea8674d-6cb6-b7c3-e0c9-d25f5d75ff79"
    variant="primary"
  >
    Instalación de la UE
  </ButtonLink>
</ButtonGroup>

## Instalar y activar [#install]

Para instalar la integración de Redis, siga las instrucciones para su entorno:

Notas adicionales:

* <DNT>
    **Advanced:**
  </DNT>

  integración también están disponibles en [formato tarball](/docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic#tarball) para permitir la instalación fuera de un administrador de paquetes.

* <DNT>
    **On-host integrations do not automatically update.**
  </DNT>

  Para obtener mejores resultados, [actualice periódicamente el paquete de integración](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package) y [el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

<CollapserGroup>
  <Collapser
    id="ecs-install"
    title="ECS"
  >
    Consulte [Servicio de monitorización ejecutándose en ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
  </Collapser>

  ' '

  <Collapser
    id="k8s-install"
    title="Kubernetes"
  >
    Consulte [Supervisar el servicio que se ejecuta en Kubernetes](/docs/monitor-service-running-kubernetes).
  </Collapser>

  <Collapser
    id="linux-install"
    title="Linux"
  >
    1. Instale [el agente de infraestructura](/docs/integrations/host-integrations/installation/install-infrastructure-host-integrations/#install) y reemplace la variable `INTEGRATION_FILE_NAME` con `nri-redis`.

    2. Cambie el directorio a la carpeta de configuración de integración:

       ```
       cd /etc/newrelic-infra/integrations.d
       ```

    3. Copie el archivo de configuración de muestra:

       ```
       sudo cp redis-config.yml.sample redis-config.yml
       ```

    4. Edite el archivo `redis-config.yml` según los métodos de conexión de su servidor Redis:

       <CollapserGroup>
         <Collapser
           id="socket-connect"
           title="Conectar con socket Unix"
         >
           Si se conecta mediante un socket Unix, especifique `unix_socket_path` en el [archivo de configuración](#config). Si hay más de una instancia de Redis que utiliza sockets Unix, asegúrese de establecer `use_unix_socket` en `true` en el [archivo de configuración](#config).

           Asegúrese de que el usuario que ejecuta la integración de Redis tenga los permisos correctos para acceder a ese socket Unix. Los permisos del socket Unix se establecen en la configuración de Redis (valor de `unixsocketperm`).
         </Collapser>

         <Collapser
           id="tcp-connect"
           title="Conéctate con TCP"
         >
           Si se conecta a través de TCP, el [archivo de configuración](config) está configurado de forma predeterminada en `localhost` y el puerto `6379`. Puede cambiar esto especificando `hostname` y/o el argumento `port` . Si utiliza este método, no se puede configurar el parámetro `unix_socket_path` .
         </Collapser>
       </CollapserGroup>

    5. Si es necesario, establezca otras configuraciones del archivo de configuración según su configuración Redis, como se describe en [configuración](#config).

    6. Para habilitar el análisis de errores de Redis y el reenvío automático, copie (o cambie el nombre) el archivo `redis-log.yml.example` a `redis-log.yml`. No es necesario reiniciar el agente.

       <DNT>
         **Example:**
       </DNT>

       ```
       sudo cp /etc/newrelic-infra/logging.d/redis-log.yml.example /etc/newrelic-infra/logging.d/redis-log.yml
       ```
  </Collapser>

  <Collapser
    id="windows-install"
    title="Windows"
  >
    1. Descargue la imagen del instalador `nri-redis` .MSI desde:

       [https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-redis/nri-redis-amd64.msi](https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-redis/nri-redis-amd64.msi)

    2. Para instalar desde el símbolo del sistema de Windows, ejecute:

       ```
       msiexec.exe /qn /i PATH\TO\nri-redis-amd64.msi
       ```

       o haga doble clic en el archivo en el Explorador.

    3. En el directorio de integración, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`, cree una copia del archivo de configuración de muestra ejecutando:

       ```
       copy redis-win-config.yml.sample redis-win-config.yml
       ```

    4. Edite el archivo `redis-win-config.yml` como se describe en los [ajustes de configuración](#config).
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Cree un usuario de New Relic para su servidor Redis [#enable-instance]

Si utiliza Redis 6+ y utiliza listas de control de acceso (ACL) para controlar el acceso a su instancia, es posible que desee crear un usuario `newrelic` para la integración. Utilice este comando para crear y otorgar los permisos necesarios a su usuario:

```
ACL SETUSER newrelic on >'YOUR_SELECTED_PASSWORD' ~* +INFO +CONFIG|GET +SELECT +TYPE +LLEN +SCARD +ZCOUNT +HLEN
```

## Configurar la integración [#config]

Hay varias formas de configurar la integración, dependiendo de cómo se instaló:

* Si está habilitado a través de Kubernetes: consulte [Supervisar servicios que se ejecutan en Kubernetes](/docs/monitor-service-running-kubernetes).
* Si está habilitado a través de Amazon ECS: consulte [Servicios de monitorización que se ejecutan en ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
* Si está instalado en el host: edite la configuración en el archivo de configuración YAML de la integración `redis-config.yml`.

Utilice la configuración YAML para colocar las credenciales de inicio de sesión requeridas y configurar cómo se recopilan sus datos, según su configuración y preferencias.

El archivo de configuración tiene configuraciones comunes aplicables a todas las integraciones, como `interval`, `timeout`, `inventory_source`. Para obtener más información sobre estas configuraciones comunes, consulte nuestro [formato de configuración YAML](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-newer-configuration-format/#configuration-basics).

<Callout variant="important">
  Si todavía estás usando nuestros archivos de configuración/definición legacy, usa nuestro [formato de configuración estándar más antiguo](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format/).
</Callout>

Las configuraciones específicas relacionadas con Redis se definen usando la sección `env` del archivo de configuración. Estas configuraciones controlan la conexión a su instancia Redis, así como otras configuraciones y características de seguridad.

## Configuración de instancia de Redis [#instance-settings]

La integración Redis recopila información métrica(<DNT>**M**</DNT>) e Inventario(<DNT>**I**</DNT>). En la tabla, utilice la columna <DNT>**Applies To**</DNT> para las configuraciones disponibles para cada colección:

' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: '150px' }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **HOSTNAME**
        </DNT>
      </td>

      <td>
        Nombre del host del servidor Redis .
      </td>

      <td>
        host local
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **PORT**
        </DNT>
      </td>

      <td>
        Puerto donde escucha el servidor Redis.
      </td>

      <td>
        6379
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **USERNAME**
        </DNT>
      </td>

      <td>
        Nombre de usuario que se utilizará al conectarse al servidor Redis. Úselo solo con Redis 6+ si ACL está habilitado.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **PASSWORD**
        </DNT>
      </td>

      <td>
        Contraseña que se utilizará al conectarse al servidor Redis. Úselo solo con servidores Redis si `REQUIREPASS` o ACL están habilitados.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **UNIX_SOCKET_PATH**
        </DNT>
      </td>

      <td>
        Ruta al archivo de socket Unix en el que escucha el servidor Redis. Utilice esto en lugar de nombre de host/Puerto.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **USE_UNIX_SOCKET**
        </DNT>
      </td>

      <td>
        Configúrelo en `true` para identificar de forma única la entidad del monitor cuando se utilizan sockets Unix.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **USE_TLS**
        </DNT>
      </td>

      <td>
        Utilice TLS cuando se comunique con el servidor Redis.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TLS_INSECURE_SKIP_VERIFY**
        </DNT>
      </td>

      <td>
        Deshabilite la verificación del nombre del servidor cuando se conecte a través de TLS.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEYS**
        </DNT>
      </td>

      <td>
        Lista de claves para recuperar sus longitudes.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEYS_LIMIT**
        </DNT>
      </td>

      <td>
        Número máximo de claves para recuperar sus longitudes.
      </td>

      <td>
        30
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONFIG_INVENTORY**
        </DNT>
      </td>

      <td>
        Configúrelo en "falso" en entornos donde el comando Redis CONFIG no está permitido (por ejemplo, AWS o ElastiCache).
      </td>

      <td>
        verdadero
      </td>

      <td style={{ 'text-align': 'center' }}>
        I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **RENAMED_COMMANDS**
        </DNT>
      </td>

      <td>
        Asigne los comandos predeterminados de Redis a su forma renombrada.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **[REMOTE_MONITORING](/docs/remote-monitoring-host-integrations)**
        </DNT>
      </td>

      <td>
        Habilite el monitoreo de múltiples inquilinos.
      </td>

      <td>
        verdadero
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        Establezca en `true` para habilitar la recopilación solo métrica.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    <tr>
      <td>
        <DNT>
          **INVENTORY**
        </DNT>
      </td>

      <td>
        Configúrelo en `true` para habilitar la recopilación solo de inventario.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

Los valores para estas configuraciones se pueden definir de varias maneras:

* Agregue el valor directamente al archivo de configuración. Esta es la forma más común.
* Reemplace los valores de las variables de entorno utilizando la notación `{{}}` . Esto requiere el agente de infraestructura 1.14.0+. Para obtener más información sobre esto, consulte más sobre [las variables de entorno de paso a través del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough).
* Utilice la administración de secretos para proteger la información confidencial, como las contraseñas, de modo que no quede expuesta en texto sin formato en el archivo de configuración. Para obtener más información, consulte [gestión de secretos](/docs/integrations/host-integrations/installation/secrets-management).

## Etiquetas y atributos personalizados [#labels]

También puedes decorar tu métrica con etiquetas. Las etiquetas le permiten agregar valor par principal atributo a su métrica para que pueda consultar, filtrar o agrupar su métrica.

Aunque nuestro archivo de configuración de muestra predeterminado incluye ejemplos de etiquetas, son opcionales. Puede eliminar, modificar o agregar otros nuevos.

```
 labels:
   env: production
   role: load_balancer
```

## Configuración de ejemplo [#examples]

<CollapserGroup>
  <Collapser
    id="basic-config"
    title="Configuración básica"
  >
    Esta es la configuración básica utilizada para recopilar métricas e inventario de su localhost:

    ```
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 6379
          REMOTE_MONITORING: true
        interval: 60s
        labels:
          environment: production
        inventory_source: config/redis
    ```
  </Collapser>

  <Collapser
    id="basic-auth"
    title="Autenticación básica"
  >
    Esta configuración se conecta a Redis mediante autenticación básica. Reemplace `my_password` con su contraseña `REQUIREPASS` :

    ```
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          PASSWORD: "my_password"
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 6379
          PASSWORD: "my_password"
          REMOTE_MONITORING: true
        interval: 60s
        labels:
          environment: production
        inventory_source: config/redis
    ```
  </Collapser>

  <Collapser
    id="acl-auth"
    title="Autenticación ACL Redis 6+"
  >
    En Redis 6+, puede proteger su instancia con [Listas de control de acceso (ACL)](https://redis.io/topics/acl). Para las ACL, reemplace los valores `USERNAME` y `PASSWORD` con sus credenciales:

    ```
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          USERNAME: my_user
          PASSWORD: "my_password"
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 6379
          USERNAME: my_user
          PASSWORD: "my_password"
          REMOTE_MONITORING: true
        interval: 60s
        labels:
          environment: production
        inventory_source: config/redis
    ```
  </Collapser>

  <Collapser
    id="metrics-tls-connection"
    title="Sólo métrica con conexión TLS"
  >
    Úselo para conectarse a Redis con TLS. Puede agregar `TLS_INSECURE_SKIP_VERIFY : true` para deshabilitar la verificación del nombre del servidor:

    ```
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          USE_TLS: true
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production
    ```
  </Collapser>

  <Collapser
    id="metrics-connect-socket"
    title="Conexión solo métrica sobre casquillo"
  >
    Úselo para conectarse a Redis usando un archivo de socket. Esta es una alternativa a una conexión TCP de nombre de host/puerto:

    ```
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          UNIX_SOCKET_PATH: /var/run/redis/redis.sock
          USE_UNIX_SOCKET: true
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production
    ```
  </Collapser>

  <Collapser
    id="renamed-commands"
    title="Usar comandos renombrados"
  >
    Use esto para recopilar su métrica/inventario si ha usado el [`rename-command`](https://redis.io/topics/security#disabling-of-specific-commands) para proteger su instancia:

    ```
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 6379
          RENAMED_COMMANDS: {"CONFIG":"b840fc9f15f59e41cb7be6c52","LLEN":"c940fc2d15f59e41cb7be6c21"}
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 6379
          RENAMED_COMMANDS: '{"CONFIG":"b840fc9f15f59e41cb7be6c52"}'
          REMOTE_MONITORING: true
        interval: 60s
        labels:
          environment: production
        inventory_source: config/redis
    ```
  </Collapser>

  <Collapser
    id="multi-instance-keys-filtering"
    title="Monitoreo multiinstancia con filtrado de claves"
  >
    Úselo si necesita recopilar métrica de dos servidores Redis diferentes usando la misma integración.

    El primer ejemplo de instancia solo recopila `KEY_1` y `KEY_2` de Redis base de datos 0. El segundo ejemplo de instancia muestra cómo recopilar de diferentes bases de datos con `{"DB":"KEYS"}`.

    ```
    integrations:
      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: redis_host_1
          PORT: 6379
          KEYS: '["KEY_1","KEY_2"]'
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production

      - name: nri-redis
        env:
          METRICS: true
          HOSTNAME: redis_host_2
          PORT: 6379
          KEYS: '{"0":["KEY_1","KEY_2"],"1":["KEY_3"]}'
          REMOTE_MONITORING: true
        interval: 15s
        labels:
          environment: production
    ```
  </Collapser>
</CollapserGroup>

## Buscar y utilizar datos [#find-and-use]

Los datos de este servicio se informan a un [dashboard de integración](/docs/integrations/new-relic-integrations/getting-started/infrastructure-integration-dashboards-charts).

Métrica se adjuntan a los [tipos de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic) `RedisSample` y `RedisKeyspaceSample` . Puede [consultar estos datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) para fines de resolución de problemas o para crear gráficos y paneles personalizados.

Para obtener más información sobre cómo encontrar y utilizar sus datos, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

La integración Redis recopila los siguientes atributos métricos:

### Redis muestra métrica [#redissample-metrics]

Estos atributos están adjuntos al tipo de evento `RedisSample` :

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Nombre
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `cluster.connectedSlaves`
      </td>

      <td>
        Número de esclavos conectados.
      </td>
    </tr>

    <tr>
      <td>
        `db.aofLastRewriteTimeInMilliseconds`
      </td>

      <td>
        Duración de la última operación de reescritura de AOF en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `db.aofLastBgrewriteStatus`
      </td>

      <td>
        Booleano que representa el estado de la última operación de reescritura en segundo plano de AOF.
      </td>
    </tr>

    <tr>
      <td>
        `db.aofLastWriteStatus`
      </td>

      <td>
        Booleano que representa el estado de la última operación de escritura AOF.
      </td>
    </tr>

    <tr>
      <td>
        `db.evictedKeysPerSecond`
      </td>

      <td>
        Número de claves desalojadas debido al límite máximo de memoria por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `db.expiredKeysPerSecond`
      </td>

      <td>
        Número de eventos de caducidad de clave por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspaceHitsPerSecond`
      </td>

      <td>
        Número de búsquedas exitosas de claves en el diccionario principal por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspaceMissesPerSecond`
      </td>

      <td>
        Número de búsquedas fallidas de claves en el diccionario principal por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `db.latestForkUsecMilliseconds`
      </td>

      <td>
        Duración de la última operación de bifurcación en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbBgsaveInProgress`
      </td>

      <td>
        Booleano. Un indicador que indica que se está guardando RDB.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbChangesSinceLastSave`
      </td>

      <td>
        Número de cambios desde el último volcado.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbLastBgsaveStatus`
      </td>

      <td>
        Booleano que representa el estado de la última operación de guardado de RDB.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbLastBgsaveTimeMilliseconds`
      </td>

      <td>
        Duración de la última operación de guardado de RDB en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `db.rdbLastSaveTime`
      </td>

      <td>
        Timestamp basada en la época del último guardado exitoso de RDB en segundos.
      </td>
    </tr>

    <tr>
      <td>
        `db.syncFull`
      </td>

      <td>
        Recuento del número de veces que los esclavos se han sincronizado completamente con este maestro.
      </td>
    </tr>

    <tr>
      <td>
        `db.syncPartialErr`
      </td>

      <td>
        Recuento del número de veces que no se pudieron completar sincronizaciones parciales.
      </td>
    </tr>

    <tr>
      <td>
        `db.syncPartialOk`
      </td>

      <td>
        Recuento del número de veces que se han completado sincronizaciones parciales.
      </td>
    </tr>

    <tr>
      <td>
        `net.blockedClients`
      </td>

      <td>
        Número de clientes pendientes de una llamada de bloqueo (`BLPOP`, `BRPOP`, `BRPOPLPUSH`).
      </td>
    </tr>

    <tr>
      <td>
        `net.clientBiggestInputBufBytes`
      </td>

      <td>
        El búfer de entrada más grande entre las conexiones de clientes actuales.
      </td>
    </tr>

    <tr>
      <td>
        `net.clientLongestOutputList`
      </td>

      <td>
        La lista de salida más larga entre las conexiones de clientes actuales.
      </td>
    </tr>

    <tr>
      <td>
        `net.commandsProcessedPerSecond`
      </td>

      <td>
        Número de comandos procesados por el servidor por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `net.connectedClients`
      </td>

      <td>
        Número de conexiones de clientes (excluyendo conexiones de esclavos).
      </td>
    </tr>

    <tr>
      <td>
        `net.connectionsReceivedPerSecond`
      </td>

      <td>
        Número de conexiones aceptadas por el servidor por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `net.inputBytesPerSecond`
      </td>

      <td>
        Número total de bytes de entrada por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `net.outputBytesPerSecond`
      </td>

      <td>
        Número total de bytes de salida por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `net.pubsubChannels`
      </td>

      <td>
        Número global de canales pub/sub con suscripción de cliente.
      </td>
    </tr>

    <tr>
      <td>
        `net.pubsubPatterns`
      </td>

      <td>
        Número global de patrones de publicación/suscripción con suscripciones de clientes.
      </td>
    </tr>

    <tr>
      <td>
        `net.rejectedConnectionsPerSecond`
      </td>

      <td>
        Número de conexiones por segundo rechazadas debido al límite de maxclients.
      </td>
    </tr>

    <tr>
      <td>
        `software.uptimeMilliseconds`
      </td>

      <td>
        Número de milisegundos desde el inicio del servidor Redis.
      </td>
    </tr>

    <tr>
      <td>
        `system.memFragmentationRatio`
      </td>

      <td>
        Relación entre `used_memory_rss` y `used_memory`.
      </td>
    </tr>

    <tr>
      <td>
        `system.totalSystemMemoryBytes`
      </td>

      <td>
        La cantidad de memoria en bytes disponible en la instancia donde se ejecuta Redis.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuSysMilliseconds`
      </td>

      <td>
        CPU del sistema consumida por el servidor Redis en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuSysChildrenMilliseconds`
      </td>

      <td>
        CPU del sistema consumida por los procesos en segundo plano en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuUserMilliseconds`
      </td>

      <td>
        CPU del usuario consumida por el servidor Redis en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedCpuUserChildrenMilliseconds`
      </td>

      <td>
        CPU del usuario consumida por los procesos en segundo plano en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryBytes`
      </td>

      <td>
        El número total de bytes asignados por Redis utilizando su asignador (ya sea `libc`, `jemalloc` estándar o un asignador alternativo como `tcmalloc`).
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryLuaBytes`
      </td>

      <td>
        Número de bytes utilizados por el motor Lua.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryPeakBytes`
      </td>

      <td>
        La memoria máxima consumida por Redis en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `system.usedMemoryRssBytes`
      </td>

      <td>
        Número de bytes que Redis asignó según lo ve el sistema operativo (también conocido como tamaño del conjunto residente). Este es el número informado por herramientas como `top(1)` y `ps(1)`.
      </td>
    </tr>
  </tbody>
</table>

### Keyspace métrica

La integración Redis recopila los siguientes metadatos y métricas keyspace . Estos atributos están adjuntos al tipo de evento `RedisKeyspaceSample` :

<table>
  <thead>
    <tr>
      <th style={{ width: "270px" }}>
        Nombre
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `db.avgTtl`
      </td>

      <td>
        El tiempo de vida promedio (TTL) en milisegundos de las claves que tienen una caducidad establecida en la base de datos sobre la que se informa.
      </td>
    </tr>

    <tr>
      <td>
        `db.keys`
      </td>

      <td>
        Número de claves en la base de datos sobre las que se informa.
      </td>
    </tr>

    <tr>
      <td>
        `db.keyspace`
      </td>

      <td>
        Índice de la base de datos de Redis, que es el número entero (normalmente un número entre `0` y `15`). Formato: `db` seguido del índice de la base de datos. Por ejemplo: `db0`, `db1`, `db2`, etc.
      </td>
    </tr>

    <tr>
      <td>
        `db.expires`
      </td>

      <td>
        Número de claves con vencimiento en la base de datos sobre las que se informa.
      </td>
    </tr>
  </tbody>
</table>

## Datos de inventario [#inventory]

Los datos de inventario incluyen todo lo informado por el comando [`CONFIG GET`](https://redis.io/commands/config-get) de Redis, con la excepción de `requirepass`, que almacena la contraseña del servidor de Redis. Para obtener más información sobre los datos de inventario, consulte [Comprender los datos de inventario](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#inventory-data).

## Otros datos del sistema [#metadata]

La integración Redis recopila estos [atributos](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) adicionales sobre su servicio Redis :

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Nombre
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `software.version`
      </td>

      <td>
        La versión del servidor Redis. Ejemplo: `3.2.3`.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.role`
      </td>

      <td>
        Ya sea `master` o `slave,` dependiendo de la función del nodo Redis que se está supervisando.
      </td>
    </tr>
  </tbody>
</table>

## Comprueba el código fuente [#source-code]

Esta integración es software de código abierto. Eso significa que puedes [explorar su código fuente](https://github.com/newrelic/nri-redis) y enviar mejoras, o crear tu propia bifurcación y compilarla.
