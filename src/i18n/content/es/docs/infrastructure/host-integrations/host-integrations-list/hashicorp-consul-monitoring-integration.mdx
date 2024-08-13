---
title: HashiCorp Cónsul monitoreo integración
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s HashiCorp integration: what data it reports and how to configure it.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra [integración en el host](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) HashiCorp Consul recopila y envía inventario y métrica desde su entorno de centro de datos Consul a New Relic, donde puede ver el estado de su entorno. Recopilamos datos tanto a nivel del centro de datos como de agente/nodo.

<Callout variant="tip">
  Tenga en cuenta que también contamos con una [plataforma HashiCorp Cloud Consul integración](/docs/infrastructure/host-integrations/host-integrations-list/hashicorp-consul-monitoring-integration).
</Callout>

## Compatibilidad y requisitos [#comp-req]

Antes de la instalación, asegúrese de cumplir con estos requisitos:

* Nuestra integración es compatible con HashiCorp Consul 1.0 o superior.
* Si utiliza ACL, las credenciales para la integración de Consul deben tener las políticas `agent:read`, `node:read` y `service:read`.

## Inicio rápido [#quick]

Instrumente su entorno Cónsul rápidamente y envíe sus telemetry data con instalación guiada. Nuestra instalación guiada utiliza nuestro agente de infraestructura y nuestra CLI para configurar la integración de HashiCorp, descubre otras aplicaciones y fuentes log que se ejecutan en su entorno y luego recomienda cuáles debería utilizar.

La instalación guiada funciona con la mayoría de las configuraciones. Pero si no se adapta a sus necesidades, existen otras opciones de instalación a continuación.

¿Listo para comenzar? Haga clic en el botón correspondiente, según la [región del centro de datos](/docs/accounts/accounts-billing/account-setup/choose-your-data-center) que utilice. Cuando haya terminado con la instalación, regrese a esta documentación para revisar las opciones de configuración.

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/launcher/nr1-core.explorer?pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5saXN0aW5nIn0=&cards[0]=eyJuZXJkbGV0SWQiOiJucjEtaW5zdGFsbC1uZXdyZWxpYy5ucjEtaW5zdGFsbC1uZXdyZWxpYyIsInBhdGgiOiJvaGkiLCJyZWNpcGVOYW1lIjoiYXBhY2hlLW9wZW4tc291cmNlLWludGVncmF0aW9uIiwiYWN0aXZlQ29tcG9uZW50IjoiVlRTT0NvbW1hbmQiLCJhY3RpdmVFbnZpcm9ubWVudCI6ImFwYWNoZS1vcGVuLXNvdXJjZS1pbnRlZ3JhdGlvbiJ9"
    variant="primary"
  >
    Instalación guiada, región de EE. UU.
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.newrelic.com/launcher/nr1-core.explorer?pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5saXN0aW5nIn0=&cards[0]=eyJuZXJkbGV0SWQiOiJucjEtaW5zdGFsbC1uZXdyZWxpYy5ucjEtaW5zdGFsbC1uZXdyZWxpYyIsInBhdGgiOiJvaGkiLCJyZWNpcGVOYW1lIjoiYXBhY2hlLW9wZW4tc291cmNlLWludGVncmF0aW9uIiwiYWN0aXZlQ29tcG9uZW50IjoiVlRTT0NvbW1hbmQiLCJhY3RpdmVFbnZpcm9ubWVudCI6ImFwYWNoZS1vcGVuLXNvdXJjZS1pbnRlZ3JhdGlvbiJ9"
    variant="primary"
  >
    Instalación guiada, región de la UE
  </ButtonLink>
</ButtonGroup>

## Instalar [#install]

Para instalar la integración de HashiCorp Consul, siga las instrucciones para su entorno:

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
    1. Instale [el agente de infraestructura](/docs/integrations/host-integrations/installation/install-infrastructure-host-integrations/#install) y reemplace la variable `INTEGRATION_FILE_NAME` con `nri-consul`.

    2. Cambiar directorio a la carpeta de integración:

       ```
       cd /etc/newrelic-infra/integrations.d
       ```

    3. Copie el archivo de configuración de muestra:

       ```
       sudo cp consul-config.yml.sample consul-config.yml
       ```

    4. Edite el archivo `consul-config.yml` como se describe en los [ajustes de configuración](#config).
  </Collapser>

  <Collapser
    id="windows-install"
    title="Windows"
  >
    1. Descargue la imagen del instalador `nri-consul` .MSI desde:

       [https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-consul/nri-consul-amd64.msi](https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-consul/nri-consul-amd64.msi)

    2. Para instalar desde el símbolo del sistema de Windows, ejecute:

       ```
       msiexec.exe /qn /i PATH\TO\nri-consul-amd64.msi
       ```

    3. En el directorio de integración, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`, cree una copia del archivo de configuración de muestra ejecutando:

       ```
       cp consul-config.yml.sample consul-config.yml
       ```

    4. Edite el archivo `consul-config.yml` como se describe en los [ajustes de configuración](#config).
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

Las configuraciones específicas relacionadas con Consul se definen usando la sección `env` del archivo de configuración. Estas configuraciones controlan la conexión a su instancia de Consul, así como otras configuraciones y características de seguridad.

<Callout variant="important">
  Si todavía utiliza nuestros archivos de configuración/definición legacy, consulte este [documento](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format/) para obtener ayuda.
</Callout>

#### Opciones de configuración del cónsul [#config-options]

El Cónsul integración recopila información tanto métrica como de inventario. Esta tabla muestra a qué se aplica cada opción de configuración.

' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '

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
        Nombre de host o IP donde se está ejecutando Consul.
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
        Puerto en el que el cónsul está escuchando.
      </td>

      <td>
        8500
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOKEN**
        </DNT>
      </td>

      <td>
        Token ACL si la autenticación token está habilitada.
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
          **ENABLE_SSL**
        </DNT>
      </td>

      <td>
        Conéctese mediante SSL.
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
        Archivo de paquete de autoridad de certificación alternativa.
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
          **TRUST_SERVER_CERTIFICATE**
        </DNT>
      </td>

      <td>
        Si se establece en verdadero, el certificado del servidor NO se verifica para SSL.
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
          **FAN_OUT**
        </DNT>
      </td>

      <td>
        Si es cierto, intentará recopilar métrica de todos los demás nodos en el clúster Consul.
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
          **CHECK_LEADERSHIP**
        </DNT>
      </td>

      <td>
        Verifique el liderazgo en el servidor del cónsul. Esto debería estar deshabilitado en el cónsul en modo cliente.
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
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        Tiempo de espera para cada una de las llamadas del cliente cónsul.
      </td>

      <td>
        30 años
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

* Agregando el valor directamente en el archivo de configuración. Esta es la forma más común.
* Reemplazar los valores de las variables de entorno usando la notación `{{}}` . Esto requiere el agente de infraestructura v1.14.0+. Lea más [aquí](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough) o vea el ejemplo [a continuación](#envvar-replacement).
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
      - name: nri-consul
        env:
          HOSTNAME: localhost
          PORT: 8500
        interval: 15s
        labels:
          environment: production
        inventory_source: config/consul
    ```
  </Collapser>

  <Collapser
    id="basic-intervals"
    title="Configuración básica con diferentes intervalos métricos/de inventario."
  >
    Esta configuración recopila métrica cada 30 segundos e inventario cada 60 segundos con tiempo de espera:

    ```
    integrations:
      - name: nri-consul
        env:
          METRICS: true
          HOSTNAME: localhost
          PORT: 8500
          TIMEOUT: 10s
        interval: 15s
        labels:
          environment: production

      - name: nri-consul
        env:
          INVENTORY: true
          HOSTNAME: localhost
          PORT: 8500
          TIMEOUT: 10s
        interval: 60s
        labels:
          environment: production
        inventory_source: config/consul
    ```
  </Collapser>

  <Collapser
    id="envvar-replacement"
    title="Reemplazo de variables de entorno"
  >
    En esta configuración estamos usando la variable de entorno `CONSUL_HOST` para completar la configuración del nombre de host de la integración:

    ```
    integrations:
      - name: nri-consul
        env:
          METRICS: "true"
          HOSTNAME: {{CONSUL_HOST}}
          PORT: 8500
        interval: 15s
        labels:
          env: production
          role: load_balancer
    ```
  </Collapser>

  <Collapser
    id="metrics-nofanout"
    title="Solo métrica con token y sin Fan Out"
  >
    En esta configuración usamos un token ACL para conectarnos y no recopilamos métricas de otros nodos cónsules conectados (FAN_OUT: false):

    ```
    integrations:
      - name: nri-consul
        env:
          METRICS: "true"
          HOSTNAME: localhost
          PORT: 8500
          TOKEN: my_token
          FAN_OUT: false
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
    En esta configuración estamos monitoreando múltiples servidores Consul desde una misma integración. Para la primera instancia (`HOSTNAME: 1st_consul_host`) estamos recolectando métrica e inventario mientras que para la segunda instancia (`HOSTNAME: 2nd_consul_host`) solo recolectaremos métrica.

    ```
    integrations:
      - name: nri-consul
        env:
          METRICS: "true"
          HOSTNAME: 1st_consul_host
          PORT: 8500
        interval: 15s
        labels:
          env: production
          role: load_balancer
      - name: nri-consul
        env:
          INVENTORY: "true"
          HOSTNAME: 1st_consul_host
          PORT: 8500
        interval: 60s
        labels:
          env: production
          role: load_balancer
        inventory_source: config/consul

      - name: nri-consul
        env:
          METRICS: "true"
          HOSTNAME: 2nd_consul_host
          PORT: 8500
        interval: 15s
        labels:
          env: production
          role: load_balancer
    ```
  </Collapser>
</CollapserGroup>

## Buscar y utilizar datos [#find-and-use]

Los datos de esta integración se pueden encontrar en: <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > Infrastructure > Third-party services > Apache**</DNT>.

Los datos de Apache se adjuntan a los [tipos de evento](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic) `ConsulDatacenterSample`y `ConsulAgentSample` . Puede [consultar estos datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) para fines de resolución de problemas o para crear gráficos y paneles personalizados.

Para obtener más información sobre cómo encontrar y utilizar sus datos, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

La integración HashiCorp Consul recopila los siguientes datos métricos del atributo:

### Muestra cónsul datacenter métrica [#consul-datacenter-sample]

Estos atributos están adjuntos al tipo de evento `ConsulDatacenterSample` :

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
        `consul.catalog.nodes_critical`
      </td>

      <td>
        La cantidad de nodos con estado de servicio `critical` de los registrados.
      </td>
    </tr>

    <tr>
      <td>
        `consul.catalog.nodes_passing`
      </td>

      <td>
        La cantidad de nodos con estado de servicio `passing` de los registrados.
      </td>
    </tr>

    <tr>
      <td>
        `consul.catalog.nodes_up`
      </td>

      <td>
        El número de nodos.
      </td>
    </tr>

    <tr>
      <td>
        `consul.catalog.nodes_warning`
      </td>

      <td>
        La cantidad de nodos con estado de servicio `warning` de los registrados.
      </td>
    </tr>

    <tr>
      <td>
        `consul.catalog.total_nodes`
      </td>

      <td>
        El número de nodos registrados en el clúster del cónsul.
      </td>
    </tr>

    <tr>
      <td>
        `consul.memberlist.msg.suspect`
      </td>

      <td>
        La cantidad de veces que un agente sospecha que otro falló mientras investigaba durante el protocolo de chismes.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.apply`
      </td>

      <td>
        El número de transacciones de balsa que se producen.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.commitTime.avg`
      </td>

      <td>
        El tiempo promedio que se tarda en realizar una nueva entrada en el log de la balsa en el líder.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.commitTime.count`
      </td>

      <td>
        El número de muestras de `raft.commitTime`.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.commitTime.max`
      </td>

      <td>
        El tiempo máximo que lleva confirmar una nueva entrada en el log de balsa del líder.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.commitTime.median`
      </td>

      <td>
        El tiempo medio que se tarda en realizar una nueva entrada en el log de la balsa en el líder.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.leader.dispatchLog.avg`
      </td>

      <td>
        El tiempo promedio que le toma al líder escribir entradas log en el disco.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.leader.dispatchLog.count`
      </td>

      <td>
        El número de muestras de `raft.leader.dispatchLog`.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.leader.dispatchLog.max`
      </td>

      <td>
        El tiempo máximo que le toma al líder escribir entradas log en el disco.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.leader.dispatchLog.median`
      </td>

      <td>
        El tiempo medio que le toma al líder escribir entradas log en el disco.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.leader.lastContact.avg`
      </td>

      <td>
        El tiempo promedio transcurrido desde la última vez que el líder pudo verificar su contrato de arrendamiento con sus seguidores.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.leader.lastContact.count`
      </td>

      <td>
        El número de muestras de `raft.leader.lastContact`.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.leader.lastContact.max`
      </td>

      <td>
        El tiempo máximo transcurrido desde que el líder pudo verificar por última vez su contrato de arrendamiento con sus seguidores.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.leader.lastContact.median`
      </td>

      <td>
        La mediana del tiempo transcurrido desde la última vez que el líder pudo comprobar su contrato de arrendamiento con sus seguidores.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.state.candidate`
      </td>

      <td>
        El número de elecciones de líderes iniciadas.
      </td>
    </tr>

    <tr>
      <td>
        `consul.raft.state.leader`
      </td>

      <td>
        El número de elecciones de líderes completadas.
      </td>
    </tr>

    <tr>
      <td>
        `consul.serf.member.flap`
      </td>

      <td>
        La cantidad de veces que un agente es marcado como muerto y luego se recupera rápidamente.
      </td>
    </tr>
  </tbody>
</table>

### Cónsul agente muestra métrica [#consul-agent-sample]

Estos atributos están adjuntos al tipo de evento `ConsulAgentSample` :

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
        `agent.aclCacheHit`
      </td>

      <td>
        ACL activado de caché.
      </td>
    </tr>

    <tr>
      <td>
        `agent.aclCacheMiss`
      </td>

      <td>
        Falta la caché de ACL.
      </td>
    </tr>

    <tr>
      <td>
        `agent.kvStores`
      </td>

      <td>
        El número de muestras de `kvs.apply`.
      </td>
    </tr>

    <tr>
      <td>
        `agent.kvStoresAvgInMilliseconds`
      </td>

      <td>
        El tiempo promedio que lleva completar una actualización en la tienda KV.
      </td>
    </tr>

    <tr>
      <td>
        `agent.kvStoresMaxInMilliseconds`
      </td>

      <td>
        El tiempo máximo que lleva completar una actualización de la tienda KV.
      </td>
    </tr>

    <tr>
      <td>
        `agent.kvStoresMedianInMilliseconds`
      </td>

      <td>
        El tiempo medio que lleva completar una actualización en la tienda KV.
      </td>
    </tr>

    <tr>
      <td>
        `agent.peers`
      </td>

      <td>
        El número de pares en el conjunto de pares.
      </td>
    </tr>

    <tr>
      <td>
        `agent.staleQueries`
      </td>

      <td>
        Se realizó consulta dentro del umbral viciado permitido.
      </td>
    </tr>

    <tr>
      <td>
        `agent.txnAvgInMilliseconds`
      </td>

      <td>
        El tiempo promedio que lleva aplicar una operación de transacción.
      </td>
    </tr>

    <tr>
      <td>
        `agent.txnMaxInMilliseconds`
      </td>

      <td>
        El tiempo máximo que lleva aplicar una operación de transacción.
      </td>
    </tr>

    <tr>
      <td>
        `agent.txnMedianInMilliseconds`
      </td>

      <td>
        El tiempo medio que lleva aplicar una operación de transacción.
      </td>
    </tr>

    <tr>
      <td>
        `agent.txns`
      </td>

      <td>
        El número de muestras de `txn.apply`.
      </td>
    </tr>

    <tr>
      <td>
        `client.rpcFailed`
      </td>

      <td>
        Medida de solicitudes RPC fallidas.
      </td>
    </tr>

    <tr>
      <td>
        `client.rpcLoad`
      </td>

      <td>
        Medida de cuánto está cargando un agente los servidores de Consul.
      </td>
    </tr>

    <tr>
      <td>
        `client.rpcRateLimited`
      </td>

      <td>
        Medida de solicitudes de RPC que tienen una tasa limitada.
      </td>
    </tr>

    <tr>
      <td>
        `net.agent.maxLatencyInMilliseconds`
      </td>

      <td>
        Latencia máxima de este nodo a todos los demás.
      </td>
    </tr>

    <tr>
      <td>
        `net.agent.medianLatencyInMilliseconds`
      </td>

      <td>
        Latencia mediana de este nodo a todos los demás.
      </td>
    </tr>

    <tr>
      <td>
        `net.agent.minLatencyInMilliseconds`
      </td>

      <td>
        Latencia mínima de este nodo a todos los demás.
      </td>
    </tr>

    <tr>
      <td>
        `net.agent.p25LatencyInMilliseconds`
      </td>

      <td>
        Latencia P25 de este nodo a todos los demás.
      </td>
    </tr>

    <tr>
      <td>
        `net.agent.p75LatencyInMilliseconds`
      </td>

      <td>
        Latencia P75 de este nodo a todos los demás.
      </td>
    </tr>

    <tr>
      <td>
        `net.agent.p90LatencyInMilliseconds`
      </td>

      <td>
        Latencia P90 de este nodo a todos los demás.
      </td>
    </tr>

    <tr>
      <td>
        `net.agent.p95LatencyInMilliseconds`
      </td>

      <td>
        Latencia P95 de este nodo a todos los demás.
      </td>
    </tr>

    <tr>
      <td>
        `net.agent.p99LatencyInMilliseconds`
      </td>

      <td>
        Latencia P99 de este nodo a todos los demás.
      </td>
    </tr>

    <tr>
      <td>
        `runtime.allocations`
      </td>

      <td>
        Recuento acumulado de objetos del montón asignados.
      </td>
    </tr>

    <tr>
      <td>
        `runtime.allocationsInBytes`
      </td>

      <td>
        Los bytes actuales asignados por el proceso Cónsul.
      </td>
    </tr>

    <tr>
      <td>
        `runtime.frees`
      </td>

      <td>
        Recuento acumulado de objetos del montón liberados.
      </td>
    </tr>

    <tr>
      <td>
        `runtime.gcCycles`
      </td>

      <td>
        El número de ciclos de GC completados.
      </td>
    </tr>

    <tr>
      <td>
        `runtime.gcPauseInMilliseconds`
      </td>

      <td>
        Los nanosegundos acumulados en GC detienen el mundo desde que comenzó Consul.
      </td>
    </tr>

    <tr>
      <td>
        `runtime.goroutines`
      </td>

      <td>
        El número de rutinas de carrera.
      </td>
    </tr>

    <tr>
      <td>
        `runtime.heapObjects`
      </td>

      <td>
        El número de objetos asignados en el montón.
      </td>
    </tr>

    <tr>
      <td>
        `runtime.virtualAddressSpaceInBytes`
      </td>

      <td>
        Tamaño total del espacio de direcciones virtuales reservado por el tiempo de ejecución de go.
      </td>
    </tr>
  </tbody>
</table>

## Datos de inventario [#inventory]

La integración HashiCorp Consul captura el parámetro de configuración y la configuración actual de los nodos del agente Consul. Recopila los resultados de los `/v1/agent/self` REST extremos de API. Extrae las secciones `Config` y `DebugConfig` de esa respuesta.

<Callout variant="tip">
  <DNT>**Note**</DNT>: Las secciones anidadas dentro de `Config` y `DebugConfig` no se recopilan.
</Callout>

Los datos están disponibles en la [página Inventario](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure), en la fuente <DNT>**config/consul**</DNT> . Para obtener más información sobre los datos de inventario, consulte [Comprender los datos de integración](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#inventory-data).

## Comprueba el código fuente [#source-code]

Esta integración es software de código abierto. Eso significa que puedes [explorar su código fuente](https://github.com/newrelic/nri-consul) y enviar mejoras, o crear tu propia bifurcación y compilarla.
