---
title: Integración de monitoreo de Couchbase
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: New Relic's Couchbase integration collects and sends inventory and metric data from your Couchbase cluster to the New Relic platform.
freshnessValidatedDate: never
translationType: machine
---

Nuestra [integración](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) Couchbase recopila y envía datos métricos y de inventario de su clúster Couchbase a la plataforma New Relic, donde puede ver rápidamente el estado de su entorno Couchbase. Recopilamos datos a nivel de clúster, nodo, motor de consulta y depósito para que pueda rastrear un problema hasta su origen.

Continúe leyendo para instalar la integración y ver qué datos recopilamos.

## Compatibilidad y requisitos [#req]

Nuestra integración es compatible con Couchbase versión 4.0 o superior.

## Inicio rápido [#quick]

Si no está ejecutando Couchbase en entornos Kubernetes o ECS, le recomendamos nuestra instalación guiada. Nuestra instalación guiada utiliza nuestro agente de infraestructura y nuestra CLI para configurar la integración de Couchbase, descubre otras aplicaciones y fuentes log que se ejecutan en su entorno y luego recomienda cuáles debería utilizar.

La instalación guiada funciona con la mayoría de las configuraciones. Pero si no se adapta a sus necesidades, existen otras opciones de instalación a continuación.

¿Listo para comenzar? Haga clic en el botón correspondiente, según la [región del centro de datos](/docs/accounts/accounts-billing/account-setup/choose-your-data-center) que utilice. Cuando haya terminado con la instalación, regrese a esta documentación para revisar las opciones de configuración.

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/marketplace/install-data-source?state=7cd80f29-a702-ebb3-edcd-80cab8b61ee2"
    variant="primary"
  >
    Instalación guiada, región de EE. UU.
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.newrelic.com/marketplace/install-data-source?state=7cd80f29-a702-ebb3-edcd-80cab8b61ee2"
    variant="primary"
  >
    Instalación guiada, región de la UE
  </ButtonLink>
</ButtonGroup>

## Instalar [#install]

Para instalar la integración de Couchbase, siga las instrucciones para su entorno:

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
    1. Instale [el agente de infraestructura](/docs/integrations/host-integrations/installation/install-infrastructure-host-integrations/#install) y reemplace la variable `INTEGRATION_FILE_NAME` con `nri-couchbase`.

    2. Cambiar directorio a la carpeta de integración:

       ```
       cd /etc/newrelic-infra/integrations.d
       ```

    3. Copia del archivo de configuración de muestra:

       ```
       sudo cp couchbase-config.yml.sample couchbase-config.yml
       ```

    4. Edite el archivo `couchbase-config.yml` como se describe en los [ajustes de configuración](#config).
  </Collapser>

  <Collapser
    id="windows-install"
    title="Windows"
  >
    1. Descargue la imagen del instalador `nri-couchbase` .MSI desde:

       [https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-couchbase/nri-couchbase-amd64.msi](https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-couchbase/nri-couchbase-amd64.msi)

    2. Para instalar desde el símbolo del sistema de Windows, ejecute:

       ```
       msiexec.exe /qn /i PATH\TO\nri-couchbase-amd64.msi
       ```

    3. En el directorio de integración, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`, cree una copia del archivo de configuración de muestra ejecutando:

       ```
       cp couchbase-config.yml.sample couchbase-config.yml
       ```

    4. Edite el archivo `couchbase-config.yml` como se describe en los [ajustes de configuración](#config).
  </Collapser>
</CollapserGroup>

## Actualiza tu integración [#update]

Esta integración no se actualiza automáticamente. Para obtener mejores resultados, [actualice periódicamente el paquete de integración](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package) y [el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

## Tareas posteriores a la instalación [#after-install]

Cuando haya terminado con la instalación, puede establecer las opciones de configuración. Se requieren algunas configuraciones para que la integración funcione, mientras que otras son opcionales.

### Configurar la integración [#config]

Si habilitó esta integración a través de nuestra integración ECS o Kubernetes, consulte esos documentos:

* [Kubernetes](/docs/monitor-service-running-kubernetes)
* [ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs)

Para la instalación estándar en el host, esta integración viene con un archivo de configuración YAML, `apache-config.yml`. Esta configuración es donde puede colocar las credenciales de inicio de sesión requeridas y configurar cómo se recopilan los datos. Las opciones que cambie dependen de su configuración y preferencias. Viene con un archivo de configuración de muestra `apache-config.yml.sample` que puedes copiar y editar.

El archivo de configuración tiene configuraciones comunes aplicables a todas las integraciones, como `interval`, `timeout`, `inventory_source`. Para leer todo sobre estas configuraciones comunes, consulte nuestro documento [Formato de configuración](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-newer-configuration-format/#configuration-basics) .

Las configuraciones específicas relacionadas con Couchbase se definen usando la sección `env` del archivo de configuración. Estas configuraciones controlan la conexión a su instancia de Couchbase, así como otras configuraciones y características de seguridad. La lista de configuraciones válidas se describe en la siguiente sección de este documento.

#### Opciones de configuración de Couchbase [#config-options]

La integración Couchbase recopila información métrica y de inventario. Esta tabla muestra a qué se aplica cada opción de configuración.

' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '

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
        Nombre de host o IP donde se está ejecutando Couchbase.
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
        Puerto en el que escucha la API de Couchbase.
      </td>

      <td>
        8091
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **QUERY_PORT**
        </DNT>
      </td>

      <td>
        Puerto en el que escucha el servicio Couchbase N1QL.
      </td>

      <td>
        8093
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
        Nombre de usuario para acceder a la API de Couchbase.
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
        Contraseña para el usuario dado.
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
          **USE_SSL**
        </DNT>
      </td>

      <td>
        Utilice SSL cuando se comunique con Couchbase.
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
          **CA_BUNDLE_FILE**
        </DNT>
      </td>

      <td>
        Ubicación del certificado SSL en el host. Solo es necesario si `USE_SSL` es verdadero.
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
          **CA_BUNDLE_DIR**
        </DNT>
      </td>

      <td>
        Directorio de paquete de autoridad de certificación alternativa.
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
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        Tiempo de espera para solicitudes de API, en segundos.
      </td>

      <td>
        30
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ENABLE_BUCKETS**
        </DNT>
      </td>

      <td>
        Si es verdadero, recopila recursos del depósito.
      </td>

      <td>
        verdadero
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ENABLE_BUCKET_STATS**
        </DNT>
      </td>

      <td>
        Si es verdadero, recopila estadísticas de depósitos adicionales.
      </td>

      <td>
        verdadero
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ENABLE_CLUSTER_AND_NODES**
        </DNT>
      </td>

      <td>
        Si es verdadero, recopila recursos de clúster y nodo.
      </td>

      <td>
        verdadero
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
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

* Agregar el valor directamente en el archivo de configuración (la forma más común).
* Reemplazar los valores de las variables de entorno usando la notación `{{}}` . Esto requiere la versión 1.14.0 o superior del agente de infraestructura. Para obtener más información, consulte [Configuración de infraestructura](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough) o consulte [el ejemplo de variable de entorno](#example5).
* Utilizando la gestión de secretos. Utilícelo para proteger información confidencial, como contraseñas que quedarían expuestas en texto sin formato en el archivo de configuración. Para obtener más información, consulte [Gestión de secretos](/docs/integrations/host-integrations/installation/secrets-management).

### Etiquetas [#labels]

Puedes decorar aún más tu métrica usando etiquetas. Las etiquetas le permiten agregar atributos (pares de valores principales) a su métrica, que luego puede usar para consultar, filtrar o agrupar su métrica.

Nuestro archivo de configuración de muestra predeterminado incluye ejemplos de etiquetas pero, como no son obligatorias, puede eliminar, modificar o agregar nuevas de su elección.

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
      - name: nri-couchbase
        env:
          HOSTNAME: localhost
          PORT: 8091
          QUERY_PORT: 8093
          USERNAME: couchbase_user
          PASSWORD: couchbase_password
        interval: 15s
        labels:
          environment: production
        inventory_source: config/couchbase
    ```
  </Collapser>

  <Collapser
    id="basic-intervals"
    title="Configuración básica con diferentes intervalos métricos/de inventario."
  >
    Esta configuración recolecta métrica cada 15 segundos e inventario cada 60 segundos:

    ```
    integrations:
      - name: nri-couchbase
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 8091
          QUERY_PORT: 8093
          USERNAME: couchbase_user
          PASSWORD: couchbase_password
        interval: 15s
        labels:
          environment: production

      - name: nri-couchbase
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 8091
          QUERY_PORT: 8093
          USERNAME: couchbase_user
          PASSWORD: couchbase_password
        interval: 60s
        labels:
          environment: production
        inventory_source: config/couchbase
    ```
  </Collapser>

  <Collapser
    id="envvar-replacement"
    title="Reemplazo de variables de entorno"
  >
    En esta configuración estamos usando la variable de entorno `COUCHBASE_HOST` para completar la configuración del nombre de host de la integración:

    ```
    integrations:
      - name: nri-couchbase
        env:
          METRICS: "true"
          HOSTNAME: {{COUCHBASE_HOST}}
          PORT: 8091
          QUERY_PORT: 8093
          USERNAME: couchbase_user
          PASSWORD: couchbase_password
        interval: 15s
        labels:
          env: production
          role: load_balancer
    ```
  </Collapser>

  <Collapser
    id="multi-instance"
    title="Monitoreo multiinstancia"
  >
    En esta configuración estamos monitoreando múltiples servidores Couchbase desde la misma integración. Para la primera instancia (`HOSTNAME: 1st_couchbase_host`) estamos recolectando métrica e inventario mientras que para la segunda instancia (`HOSTNAME: 2nd_couchbase_host`) solo recolectaremos métrica.

    ```
    integrations:
      - name: nri-couchbase
        env:
          METRICS: "true"
          HOSTNAME: 1st_couchbase_host
          PORT: 8091
          QUERY_PORT: 8093
          USERNAME: couchbase_user
          PASSWORD: couchbase_password
        interval: 15s
        labels:
          env: production
          role: load_balancer
      - name: nri-couchbase
        env:
          INVENTORY: "true"
          HOSTNAME: 1st_couchbase_host
          PORT: 8091
          QUERY_PORT: 8093
          USERNAME: couchbase_user
          PASSWORD: couchbase_password
        interval: 60s
        labels:
          env: production
          role: load_balancer
        inventory_source: config/couchbase

      - name: nri-couchbase
        env:
          METRICS: "true"
          HOSTNAME: 2nd_couchbase_host
          PORT: 8091
          QUERY_PORT: 8093
          USERNAME: couchbase_user
          PASSWORD: couchbase_password
        interval: 15s
        labels:
          env: production
          role: load_balancer
    ```
  </Collapser>
</CollapserGroup>

## Buscar y utilizar datos [#find-and-use]

Los datos de integración se informan al [panel de integración](/docs/integrations/new-relic-integrations/getting-started/infrastructure-integration-dashboards-charts).

Los datos de Couchbase se adjuntan a los siguientes [tipos de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic):

* `CouchbaseBucketSample`
* `CouchbaseClusterSample`
* `CouchbaseNodeSample`
* `CouchbaseQueryEngineSample`

Puede [consultar estos datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) para fines de resolución de problemas o para crear gráficos y paneles personalizados.

Para obtener más información sobre cómo encontrar y utilizar sus datos, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

La integración Couchbase recopila los siguientes atributos de datos métricos. Algunos nombres de métricas tienen como prefijo un indicador de categoría y un punto, como `cluster.` o `node.`.

### Balde base canapé muestra métrica [#bucket-sample-metric]

Estos atributos están adjuntos al tipo de evento `CouchbaseBucketSample` .

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
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
        `bucket.activeResidentItemsRatio`
      </td>

      <td>
        Porcentaje de elementos activos almacenados en caché en la RAM en este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.averageDiskCommitTimeInMilliseconds`
      </td>

      <td>
        El tiempo promedio de confirmación del disco del depósito, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.averageDiskUpdateTimeInMilliseconds`
      </td>

      <td>
        El tiempo promedio de actualización del disco del depósito, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.cacheMissRatio`
      </td>

      <td>
        Porcentaje de lecturas por segundo de este depósito desde el disco en comparación con la RAM.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.currentConnections`
      </td>

      <td>
        Número de conexiones a este servidor, incluidas conexiones desde SDK de clientes externos, servidores proxy, solicitudes TAP y recopilación de estadísticas internas.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.dataUsedInBytes`
      </td>

      <td>
        Cantidad de datos utilizados por este depósito, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.decrementHitsPerSecond`
      </td>

      <td>
        El número de visitas de disminución por segundo del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.decrementMissesPerSecond`
      </td>

      <td>
        El número de errores de decremento por segundo del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.deleteHitsPerSecond`
      </td>

      <td>
        El número de aciertos de eliminación por segundo para este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.deleteMissesPerSecond`
      </td>

      <td>
        El número de errores de eliminación por segundo para este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.diskCreateOperationsPerSecond`
      </td>

      <td>
        Número de elementos nuevos creados en el disco por segundo para este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.diskFetchesPerSecond`
      </td>

      <td>
        La cantidad de operaciones necesarias por segundo para recuperar elementos del disco en el depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.diskUpdateOperationsPerSecond`
      </td>

      <td>
        Número de elementos actualizados en el disco por segundo para este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.diskUsedInBytes`
      </td>

      <td>
        La cantidad de espacio en disco utilizado para el depósito, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.diskWriteQueue`
      </td>

      <td>
        Número de elementos en espera de ser escritos en el disco del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.ejectionsPerSecond`
      </td>

      <td>
        Número total de elementos por segundo que se expulsan al disco en este depósito
      </td>
    </tr>

    <tr>
      <td>
        `bucket.evictionPolicy`
      </td>

      <td>
        La política de desalojo del cubo.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.evictionsPerSecond`
      </td>

      <td>
        La cantidad de elementos por segundo desalojados del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.getHitsPerSecond`
      </td>

      <td>
        Número de operaciones de obtención por segundo para los datos que contiene este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.getMissesPerSecond`
      </td>

      <td>
        Número de operaciones de obtención por segundo para datos que este depósito no contiene.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.hitRatio`
      </td>

      <td>
        Porcentaje de solicitud GET atendida con datos de este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.incrementHitsPerSecond`
      </td>

      <td>
        El número de visitas incrementales por segundo del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.incrementMissesPerSecond`
      </td>

      <td>
        El número de incrementos perdidos por segundo del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.itemCount`
      </td>

      <td>
        La cantidad de objetos almacenados en el depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.memoryHighWaterMarkInBytes`
      </td>

      <td>
        Marca de límite superior para los desalojos automáticos en el depósito, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.memoryLowWaterMarkInBytes`
      </td>

      <td>
        Marca de límite inferior para desalojos automáticos en el depósito, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.memoryUsedInBytes`
      </td>

      <td>
        La cantidad de RAM utilizada para el depósito, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.metadataInRAMInBytes`
      </td>

      <td>
        Cantidad de RAM utilizada para los metadatos en este depósito, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.missesPerSecond`
      </td>

      <td>
        El número de fallos por segundo del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.nodeLocator`
      </td>

      <td>
        Tipo de localizador de nodos.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.outOfMemoryErrorsPerSecond`
      </td>

      <td>
        Número de errores de falta de memoria para este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.OverheadInBytes`
      </td>

      <td>
        La memoria adicional utilizada por los datos transitorios (colas de persistencia, colas de replicación, puntos de control, etc.) en el depósito, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.pendingResidentItemsRatio`
      </td>

      <td>
        Porcentaje de elementos pendientes almacenados en caché en la RAM de este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.quotaUtilization`
      </td>

      <td>
        El porcentaje de la cuota de RAM actualmente en uso en el depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.readOperationsPerSecond`
      </td>

      <td>
        El número de lecturas (operaciones de obtención) por segundo de este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.readRatePerSecond`
      </td>

      <td>
        Los bytes leídos por segundo del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.replicaIndex`
      </td>

      <td>
        Define si el depósito tiene índices de réplica habilitados.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.replicaNumber`
      </td>

      <td>
        Número de réplicas de este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.replicaResidentItemsRatio`
      </td>

      <td>
        Porcentaje de elementos de réplica almacenados en caché en la RAM en este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.residentItemsRatio`
      </td>

      <td>
        Porcentaje de todos los elementos almacenados en caché en la RAM en este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.temporaryOutOfMemoryErrorsPerSecond`
      </td>

      <td>
        Número de interrupciones enviadas por segundo a los SDK del cliente debido a situaciones de falta de memoria de este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.threadsNumber`
      </td>

      <td>
        El número de lectores y escritores simultáneos para el depósito de datos.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.totalOperationsPerSecond`
      </td>

      <td>
        El total de operaciones por segundo del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.writeOperationsPerSecond`
      </td>

      <td>
        El número de escrituras (operaciones establecidas) por segundo en este depósito.
      </td>
    </tr>

    <tr>
      <td>
        `bucket.writeRatePerSecond`
      </td>

      <td>
        Los bytes escritos del depósito.
      </td>
    </tr>
  </tbody>
</table>

### Couchbase clúster muestra métrica [#cluster-sample-metric]

Estos atributos están adjuntos al tipo de evento `CouchbaseClusterSample` .

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
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
        `cluster.autoFailoverCount`
      </td>

      <td>
        El número de conmutaciones por error automáticas en el clúster.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.autoFailoverEnabled`
      </td>

      <td>
        Indica si la conmutación por error está habilitada en el clúster.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.databaseFragmentationThreshold`
      </td>

      <td>
        El nivel de porcentaje dentro de la base de datos en el que se produce la compactación.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.diskFreeInBytes`
      </td>

      <td>
        El espacio libre en disco en este clúster, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.diskQuotaTotalInBytes`
      </td>

      <td>
        Espacio total en disco disponible para Couchbase, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.diskTotalInBytes`
      </td>

      <td>
        Espacio total en disco disponible, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.diskUsedbyDataInBytes`
      </td>

      <td>
        Disco utilizado por los datos del depósito en este clúster, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.diskUsedInBytes`
      </td>

      <td>
        El espacio en disco utilizado en este clúster, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.indexFragmentationThreshold`
      </td>

      <td>
        El nivel porcentual dentro de los índices en el que se produce la compactación.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.maximumBucketCount`
      </td>

      <td>
        Número máximo de depósitos que admite este clúster.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.memoryQuotaTotalInBytes`
      </td>

      <td>
        RAM total disponible para Couchbase, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.memoryQuotaTotalPerNodeInBytes`
      </td>

      <td>
        RAM total disponible para Couchbase, por nodo, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.memoryQuotaUsedInBytes`
      </td>

      <td>
        RAM total utilizada por Couchbase, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.memoryQuotaUsedPerNodeInBytes`
      </td>

      <td>
        RAM total utilizada por Couchbase, por nodo, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.memoryTotalInBytes`
      </td>

      <td>
        La RAM total de este clúster, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.memoryUsedByDataInBytes`
      </td>

      <td>
        RAM total utilizada por los datos del depósito en este clúster, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.memoryUsedInBytes`
      </td>

      <td>
        La RAM total utilizada en este clúster, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `cluster.viewFragmentationThreshold`
      </td>

      <td>
        El porcentaje de fragmentación dentro de todos los archivos de índice de vista en el que se activa la compactación.
      </td>
    </tr>
  </tbody>
</table>

### Muestra de nodo de base de sofá métrica [#node-sample-metric]

Estos atributos están adjuntos al tipo de evento `CouchbaseNodeSample` .

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
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
        `node.cpuUtilization`
      </td>

      <td>
        La utilización de CPU del nodo.
      </td>
    </tr>

    <tr>
      <td>
        `node.memoryFreeInBytes`
      </td>

      <td>
        La memoria libre del nodo, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `node.memoryTotalInBytes`
      </td>

      <td>
        La memoria total asignada al nodo, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `node.recoveryType`
      </td>

      <td>
        El tipo de recuperación del nodo.
      </td>
    </tr>

    <tr>
      <td>
        `node.services`
      </td>

      <td>
        Los servicios del nodo.
      </td>
    </tr>

    <tr>
      <td>
        `node.status`
      </td>

      <td>
        El estado del nodo. (`0` = no saludable, `1` = saludable)
      </td>
    </tr>

    <tr>
      <td>
        `node.swapTotalInBytes`
      </td>

      <td>
        El espacio de intercambio total del nodo, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `node.swapUsedInBytes`
      </td>

      <td>
        El espacio de intercambio utilizado del nodo, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `node.uptimeInMilliseconds`
      </td>

      <td>
        El tiempo de actividad del nodo, en milisegundos.
      </td>
    </tr>
  </tbody>
</table>

### Couchbase consulta motor muestra métrica [#query-engine-sample-metric]

Estos atributos están adjuntos al tipo de evento `CouchbaseQueryEngineSample` .

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
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
        `queryengine.activeRequests`
      </td>

      <td>
        Número actual de solicitudes activas.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.averageRequestTimeInMilliseconds`
      </td>

      <td>
        Tiempo promedio de solicitud de este motor de consulta, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.completedLimit`
      </td>

      <td>
        Número de consultas que Couchbase mantendrá en el log de consultas.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.completedRequests`
      </td>

      <td>
        Número actual de solicitudes completadas.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.completedThresholdInMilliseconds`
      </td>

      <td>
        Tiempo mínimo que debe tomar la consulta para iniciar sesión en el log de consultas de Couchbase, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.cores`
      </td>

      <td>
        Número de núcleos disponibles para este motor de consulta.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.garbageCollectionNumber`
      </td>

      <td>
        Número de la última recogida de basura.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.garbageCollectionPaused`
      </td>

      <td>
        Porcentaje de tiempo que se pausa la recolección de basura.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.garbageCollectionTimePausedInMilliseconds`
      </td>

      <td>
        Número de milisegundos que se pausa la recolección de basura, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.medianRequestTimeInMilliseconds`
      </td>

      <td>
        Tiempo medio de solicitud de este motor de consulta, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.preparedStatementUtilization`
      </td>

      <td>
        Porcentaje de solicitudes que son declaraciones preparadas.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.requestsLast15MinutesPerSecond`
      </td>

      <td>
        Promedio de solicitudes por segundo durante los últimos 15 minutos.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.requestsLast1MinutesPerSecond`
      </td>

      <td>
        Promedio de solicitudes por segundo durante el último minuto.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.requestsLast5MinutesPerSecond`
      </td>

      <td>
        Promedio de solicitudes por segundo durante los últimos 5 minutos.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.requestTime80thPercentileInMilliseconds`
      </td>

      <td>
        Percentil 80 del tiempo de solicitud de este motor de consulta, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.requestTime95thPercentileInMilliseconds`
      </td>

      <td>
        Percentil 95 del tiempo de solicitud de este motor de consulta, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.requestTime99thPercentileInMilliseconds`
      </td>

      <td>
        Percentil 99 del tiempo de solicitud de este motor de consulta, en milisegundos.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.systemCPUUtilization`
      </td>

      <td>
        Utilización de CPU de este motor de consulta
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.systemMemoryInBytes`
      </td>

      <td>
        El espacio de direcciones virtuales reservado por este motor de consulta, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.totalMemoryInBytes`
      </td>

      <td>
        Cantidad acumulada de memoria asignada para objetos de montón por este motor de consulta, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.totalThreads`
      </td>

      <td>
        Total de hilos utilizados por este motor de consulta.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.uptimeInMilliseconds`
      </td>

      <td>
        Tiempo de actividad de este motor de consulta, en milisegundos
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.usedMemoryInBytes`
      </td>

      <td>
        Cantidad de memoria asignada para objetos de montón para este motor de consulta, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `queryengine.userCPUUtilization`
      </td>

      <td>
        Usuario CPU utilización de este motor de consulta.
      </td>
    </tr>
  </tbody>
</table>

## Datos de inventario [#inventory]

La integración de Couchbase captura el parámetro de configuración de la base de datos de Couchbase. Los datos están disponibles en la [página Inventario](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure) en la UI de infraestructura, en la fuente <DNT>**config/couchbase**</DNT>. Para obtener más información sobre los datos de inventario, consulte [Comprender los datos](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#inventory-data).

La integración captura datos para el siguiente parámetro de configuración de Couchbase:

<CollapserGroup>
  <Collapser
    id="bucket-parameters"
    title="Parámetro del cubo"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
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
            `Node locator`
          </td>

          <td>
            Tipo de localizador de nodos.
          </td>
        </tr>

        <tr>
          <td>
            `Proxy port`
          </td>

          <td>
            Puerto proxy en el que se comunica el depósito.
          </td>
        </tr>

        <tr>
          <td>
            `Type`
          </td>

          <td>
            El tipo de cubo.
          </td>
        </tr>

        <tr>
          <td>
            `UUID`
          </td>

          <td>
            El UUID del depósito.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="cluster-parameters"
    title="Parámetro cluster"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
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
            `Collection node`
          </td>

          <td>
            El nodo sirve para recoger métrica.
          </td>
        </tr>

        <tr>
          <td>
            `Couchbase version`
          </td>

          <td>
            La versión de Couchbase que se ejecuta en este clúster.
          </td>
        </tr>

        <tr>
          <td>
            `UUID`
          </td>

          <td>
            El UUID del clúster.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="node-parameters"
    title="Parámetro de nodo"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
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
            `Cluster membership`
          </td>

          <td>
            La membresía del clúster del nodo.
          </td>
        </tr>

        <tr>
          <td>
            `Hostname`
          </td>

          <td>
            El nombre de host del nodo.
          </td>
        </tr>

        <tr>
          <td>
            `Operating system`
          </td>

          <td>
            El sistema operativo del nodo.
          </td>
        </tr>

        <tr>
          <td>
            `Port`
          </td>

          <td>
            El puerto del nodo.
          </td>
        </tr>

        <tr>
          <td>
            `Recovery type`
          </td>

          <td>
            El tipo de recuperación del nodo.
          </td>
        </tr>

        <tr>
          <td>
            `Services`
          </td>

          <td>
            Una lista de servicios del nodo separados por comas.
          </td>
        </tr>

        <tr>
          <td>
            `Version`
          </td>

          <td>
            La versión de Couchbase que se ejecuta en este nodo.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="query-engine-parameters"
    title="Consultar parámetros del motor"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "300px" }}>
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
            `Node hostname`
          </td>

          <td>
            El nombre de host del nodo en el que se ejecuta este motor de consulta.
          </td>
        </tr>

        <tr>
          <td>
            `Node port`
          </td>

          <td>
            El puerto del nodo en el que se ejecuta este motor de consulta.
          </td>
        </tr>

        <tr>
          <td>
            `Version`
          </td>

          <td>
            La versión de este motor de consulta.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Comprueba el código fuente [#source-code]

Esta integración es software de código abierto. Eso significa que puedes [explorar su código fuente](https://github.com/newrelic/nri-apache/) y enviar mejoras, o crear tu propia bifurcación y compilarla.
