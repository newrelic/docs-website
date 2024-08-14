---
title: Integración de directorio activo
tags:
  - Active Directory integration
  - New Relic integrations
metaDescription: Install our Active Directory integration to monitor the health of your environment.
freshnessValidatedDate: never
translationType: machine
---

Con nuestra integración de Active Directory, puede monitor fácilmente el estado de su entorno de servicios de directorio y alertar proactivamente sobre posibles problemas.

Creada con nuestro agente de infraestructura, la integración de Active Directory le brinda un conjunto de <InlinePopover type="dashboards"/>y <InlinePopover type="alerts"/>prediseñados que le permiten ver sus datos de rendimiento más críticos, en su lugar.

<Callout variant="tip">
  Esta integración se encuentra bajo la designación <DNT>**Community project**</DNT> en nuestras [categorías de código abierto](https://opensource.newrelic.com/oss-category). Este código se desarrolla de forma abierta con aportes de la comunidad a través de problemas y relaciones públicas. Hay un equipo de mantenimiento activo dentro de New Relic, así como soporte de resolución de problemas en New Relic Explorer Hub y documentación disponible en el repositorio del proyecto.
</Callout>

<img
  src="/images/infrastructure_screenshot_full_active-directory-dashboard.webp"
  title="Active Directory dashboard"
  alt="A screenshot of a dashboard with Active Directory performance metrics."
/>

<figcaption>
  Después de configurar la integración de Active Directory con New Relic, vea sus datos en un dashboard como este, listo para usar.
</figcaption>

## Instalar el agente de infraestructura [#infra]

Para ver sus datos de Active Directory en New Relic, instale nuestro agente de infraestructura. El agente de infraestructura recopila datos de contadores de rendimiento, servicios de Windows, scripts de PowerShell y registros de eventos de Windows y envía esos datos a New Relic, donde puede usar la telemetría para medir la salud de su entorno de Active Directory.

Existen dos métodos para instalar el agente de infraestructura:

* Siga nuestra [instalación guiada](https://one.newrelic.com/marketplace?state=8f14e646-461e-b010-4675-3a0658bb3d20) para instrumentar su sistema con el agente de infraestructura.
* [Instale el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) a través de la línea de comando usando nuestros documentos.

## Instrumento Active Directory con New Relic [#instrument]

Para instrumentar Active Directory con el agente de infraestructura, siga los procedimientos a continuación entre este documento y el [repositorio de integración New Relic Active Directory](https://github.com/newrelic/newrelic-active-directory-integration).

<CollapserGroup>
  <Collapser
    id="step1"
    title="Paso 1. Clonar el repositorio"
  >
    Ejecute el siguiente comando en su CLI para clonar el repositorio de integración New Relic Active Directory:

    ```bash
    git clone https://github.com/newrelic/newrelic-active-directory-integration.git
    ```
  </Collapser>

  <Collapser
    id="step2"
    title="Paso 2. Copie los archivos de configuración a su host"
  >
    Copie los archivos de configuración relevantes del repositorio al agente, reemplazando `$ROOT_PATH` con la ruta donde clonó el repositorio:

    ```powershell
    # integrations.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\integrations.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\integrations.d" -Recurse

    # logging.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\logging.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\logging.d" -Recurse
    ```
  </Collapser>
</CollapserGroup>

Una vez que haya seguido todos estos pasos, puede instalar el [inicio rápido de Active Directory](https://newrelic.com/instant-observability/active-directory) desde el catálogo New Relic I/O para agregar el dashboard y las alertas relevantes.

## Buscar y utilizar datos [#find-and-use]

La recopilación de telemetría de Active Directory depende de varios archivos de configuración y script ubicados en la estructura de directorios del agente de infraestructura, como este:

```
C:\Program Files\New Relic\newrelic-infra\
    ├── integrations.d
    │   ├── windows-active-directory-performance-counters.ps1
    │   ├── windows-active-directory-performance-counters.yml
    │   ├── windows-active-directory-replication-checks.yml
    │   ├── windows-active-directory-replication-failures.ps1
    │   ├── windows-active-directory-replication-partners.ps1
    │   └── windows-active-directory-services.yml
    └── logging.d
        └── windows-active-directory.yml
```

Cada uno de estos archivos trabaja en conjunto para presentar una huella de observabilidad completa. La telemetría resultante en New Relic consta de datos métricos, de eventos y log .

### Contadores de rendimiento [#perfmon-counters]

La recopilación de contadores de rendimiento de Active Directory se logra a través de Flex utilizando este script de PowerShell y el archivo de configuración asociado:

```
windows-active-directory-performance-counters.ps1
windows-active-directory-performance-counters.yml
```

Los resultados de esta colección se almacenan como un evento denominado `activeDirectoryPerformanceCounters`.

### Detalles del evento

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **COUNTER NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `addressBookClientSessions`
      </td>

      <td>
        `\NTDS\AB Client Sessions`
      </td>

      <td>
        Número de sesiones de cliente de libreta de direcciones conectadas
      </td>
    </tr>

    <tr>
      <td>
        `inboundFullSyncObjectsRemaining`
      </td>

      <td>
        `\NTDS\DRA Inbound Full Sync Objects Remaining`
      </td>

      <td>
        El número de objetos que quedan hasta que se complete la sincronización completa.
      </td>
    </tr>

    <tr>
      <td>
        `draInbound`
      </td>

      <td>
        `\NTDS\DRA Inbound Values (DNs only)/sec`
      </td>

      <td>
        El número de valores de propiedad de objeto recibidos de socios de replicación entrantes que son DN que hacen referencia a otros objetos
      </td>
    </tr>

    <tr>
      <td>
        `draOutbound`
      </td>

      <td>
        `\NTDS\DRA Outbound Values (DNs only)/sec`
      </td>

      <td>
        La cantidad de valores de propiedad de objeto que contienen DN enviados a socios de replicación salientes
      </td>
    </tr>

    <tr>
      <td>
        `draPendingReplicationSync`
      </td>

      <td>
        `\NTDS\DRA Pending Replication Synchronizations`
      </td>

      <td>
        El número de sincronizaciones de directorios que están en cola para este servidor pero que aún no se han procesado.
      </td>
    </tr>

    <tr>
      <td>
        `directoryReadsPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Reads/sec`
      </td>

      <td>
        El número de lecturas de directorio por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `directoryWritesPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Writes/sec`
      </td>

      <td>
        El número de escrituras de directorio por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `directoryNotifyQueueSize`
      </td>

      <td>
        `\NTDS\DS Notify Queue Size`
      </td>

      <td>
        El número de notificaciones de actualización pendientes que están en cola pero que aún no se han transmitido a los clientes.
      </td>
    </tr>

    <tr>
      <td>
        `directoryThreadsInUse`
      </td>

      <td>
        `\NTDS\DS Threads in Use`
      </td>

      <td>
        El número actual de subprocesos que utiliza el servicio de directorio.
      </td>
    </tr>

    <tr>
      <td>
        `ldapActiveThreads`
      </td>

      <td>
        `\NTDS\LDAP Active Threads`
      </td>

      <td>
        El número actual de subprocesos que utiliza el subsistema LDAP del servicio de directorio local.
      </td>
    </tr>

    <tr>
      <td>
        `ldapBindTime`
      </td>

      <td>
        `\NTDS\LDAP Bind Time`
      </td>

      <td>
        El tiempo (en milisegundos) que se tarda en completar el último enlace LDAP.
      </td>
    </tr>

    <tr>
      <td>
        `ldapClientSessions`
      </td>

      <td>
        `\NTDS\LDAP Client Sessions`
      </td>

      <td>
        El número de sesiones de cliente LDAP actualmente conectadas
      </td>
    </tr>

    <tr>
      <td>
        `ldapSearchesPerSec`
      </td>

      <td>
        `\NTDS\LDAP Searches/sec`
      </td>

      <td>
        La velocidad a la que los clientes LDAP realizan operaciones de búsqueda.
      </td>
    </tr>

    <tr>
      <td>
        `ldapSuccessfulBindsPerSec`
      </td>

      <td>
        `\NTDS\LDAP Successful Binds/sec`
      </td>

      <td>
        El número de enlaces LDAP por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `contextSwitchesPerSec`
      </td>

      <td>
        `\System\Context Switches/sec`
      </td>

      <td>
        La velocidad combinada a la que todos los procesadores de la computadora cambian de un hilo a otro.
      </td>
    </tr>

    <tr>
      <td>
        `processorQueueLength`
      </td>

      <td>
        `\System\Processor Queue Length`
      </td>

      <td>
        La cantidad de subprocesos esperando ser ejecutados en la cola.
      </td>
    </tr>
  </tbody>
</table>

### Ver tus datos

En New Relic, puedes consultar tus resultados con este patrón NRQL :

```sql
FROM activeDirectoryHealthChecks SELECT
    latest(addressBookClientSessions),
    latest(inboundFullSyncObjectsRemaining),
    latest(draInbound),
    latest(draOutbound),
    latest(draPendingReplicationSync),
    latest(directoryReadsPerSec),
    latest(directoryWritesPerSec),
    latest(directoryNotifyQueueSize),
    latest(directoryThreadsInUse),
    latest(ldapActiveThreads),
    latest(ldapBindTime),
    latest(ldapClientSessions),
    latest(ldapSearchesPerSec),
    latest(ldapSuccessfulBindsPerSec),
    latest(contextSwitchesPerSec),
    latest(processorQueueLength)
SINCE 1 DAY AGO
LIMIT MAX
```

### Servicios de Windows [#windows-services]

La recopilación de servicios de Windows de Active Directory se logra a través de la integración nativa de servicios de Windows mediante este archivo de configuración:

```
windows-active-directory-services.yml
```

Los resultados de esta colección se almacenan como dimensión métrica con la etiqueta decorada: `label.primary_app = 'active_directory'`.

### Detalles métricos

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **SERVICE NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ADWS`
      </td>

      <td>
        Servicios web de directorio activo
      </td>
    </tr>

    <tr>
      <td>
        `DFS`
      </td>

      <td>
        Sistema de archivos distribuido
      </td>
    </tr>

    <tr>
      <td>
        `DFSR`
      </td>

      <td>
        Replicación DFS
      </td>
    </tr>

    <tr>
      <td>
        `DNS`
      </td>

      <td>
        Servidor DNS
      </td>
    </tr>

    <tr>
      <td>
        `Dnscache`
      </td>

      <td>
        Cliente DNS
      </td>
    </tr>

    <tr>
      <td>
        `IsmServ`
      </td>

      <td>
        Mensajería entre sitios
      </td>
    </tr>

    <tr>
      <td>
        `kdc`
      </td>

      <td>
        Centro de distribución de claves Kerberos
      </td>
    </tr>

    <tr>
      <td>
        `lanmanserver`
      </td>

      <td>
        Servidor
      </td>
    </tr>

    <tr>
      <td>
        `lanmanworkstation`
      </td>

      <td>
        Puesto de trabajo
      </td>
    </tr>

    <tr>
      <td>
        `Netlogon`
      </td>

      <td>
        Inicio de sesión Net
      </td>
    </tr>

    <tr>
      <td>
        `NTDS`
      </td>

      <td>
        Servicios de dominio de Active Directory
      </td>
    </tr>

    <tr>
      <td>
        `RpcSs`
      </td>

      <td>
        Llamada a procedimiento remoto (RPC)
      </td>
    </tr>

    <tr>
      <td>
        `SamSs`
      </td>

      <td>
        Gerente de Cuentas de Seguridad
      </td>
    </tr>

    <tr>
      <td>
        `W32Time`
      </td>

      <td>
        Hora de Windows
      </td>
    </tr>
  </tbody>
</table>

### Ver tus datos

En New Relic, puedes consultar tus resultados con este patrón NRQL :

```sql
FROM Metric SELECT
    latest(timestamp) AS 'Reporting Time',
    latest(state) AS 'Current State',
    latest(start_mode) AS 'Start Mode'
FACET
    hostname AS 'Host',
    display_name AS 'Display Name',
    service_name AS 'Service Name',
    process_id AS 'Parent PID',
    run_as AS 'Service Account'
WHERE label.primary_app = 'active_directory'
SINCE 1 DAY AGO
LIMIT MAX
```

### Estado de replicación de Active Directory [#replication-status]

La recopilación de contadores de rendimiento de Active Directory se logra a través de Flex utilizando estos dos scripts de PowerShell y el archivo de configuración asociado:

```
windows-active-directory-replication-checks.yml
windows-active-directory-replication-failures.ps1
windows-active-directory-replication-partners.ps1
```

Los resultados de esta colección se almacenan como eventos denominados `activeDirectoryReplicationFailures` y `activeDirectoryReplicationPartners`.

### Detalles del evento

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureCount`
      </td>

      <td>
        Entero que indica el recuento total de errores de replicación que se han producido en el controlador de dominio especificado.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureType`
      </td>

      <td>
        Representación de cadena del último tipo de error de replicación experimentado por el controlador de dominio especificado.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `firstFailureTime`
      </td>

      <td>
        Timestamp (`MM/dd/yyyy h:mm:ss tt`) que indica el primer error observado en el controlador de dominio especificado.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `lastError`
      </td>

      <td>
        Entero que indica el último código de error recibido por un error de replicación en el controlador de dominio especificado.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `server`
      </td>

      <td>
        Nombre de cadena del controlador de dominio donde ocurrió el error de replicación.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationAttempt`
      </td>

      <td>
        Cadena timestamp (`MM/dd/yyyy h:mm:ss tt`) que indica el último intento de replicación entre el servidor y el socio.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationSuccess`
      </td>

      <td>
        Cadena timestamp (`MM/dd/yyyy h:mm:ss tt`) que indica la última replicación exitosa entre el servidor y el socio.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `partner`
      </td>

      <td>
        Nombre corto del socio remoto para la replicación.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `server`
      </td>

      <td>
        Nombre corto del servidor local para
      </td>
    </tr>
  </tbody>
</table>

### Ver tus datos

En New Relic, puedes consultar tus estadísticas de replicación con estos patrones NRQL :

```sql
FROM activeDirectoryReplicationFailures SELECT
    latest(failureType) AS 'Type',
    latest(failureError) AS 'Error',
    latest(firstFailureTime) AS 'First Failure',
    latest(failureCount) AS 'Attempts Made'
FACET
    server
SINCE 1 DAY AGO
LIMIT MAX
```

```sql
FROM activeDirectoryReplicationPartners SELECT
    latest(lastReplicationAttempt) AS 'Last Attempt',
    latest(lastReplicationSuccess) AS 'Last Success'
FACET
    server AS 'Source',
    partner AS 'Partner',
    if(lastReplicationSuccess != lastReplicationAttempt, 'Failed Replication', 'Successful Replication') AS 'Current Status'
SINCE 1 DAY AGO
LIMIT MAX
```

### Logs de eventos de Windows [#event-logs]

La recopilación de eventos de Windows de Active Directory se realiza con el reenviador de registros integrado en el agente de infraestructura utilizando este archivo de configuración:

```
windows-active-directory.yml
```

Los resultados de esta colección se almacenan como un registro con la etiqueta decorada: `logtype = 'active_directory'`.

### Detalles log

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **CHANNEL**
        </DNT>
      </th>

      <th>
        <DNT>
          **EVENT ID**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4609`
      </td>

      <td>
        Windows se está cerrando
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4616`
      </td>

      <td>
        La hora del sistema fue cambiada.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4625`
      </td>

      <td>
        Una cuenta no pudo log sesión
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4648`
      </td>

      <td>
        Se intentó iniciar sesión utilizando credenciales explícitas
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4649`
      </td>

      <td>
        Se detectó un archivo adjunto de repetición
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4950`
      </td>

      <td>
        Se estableció una asociación de seguridad del modo principal IPsec
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4697`
      </td>

      <td>
        Se instaló un servicio en el sistema.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4713`
      </td>

      <td>
        Se cambió la política de Kerberos.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4714`
      </td>

      <td>
        Se cambió la política de recuperación de datos cifrados.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4719`
      </td>

      <td>
        Se cambió la política de auditoría del sistema.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4720`
      </td>

      <td>
        Se creó una cuenta de usuario.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4723`
      </td>

      <td>
        Se intentó cambiar la contraseña de una cuenta.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4724`
      </td>

      <td>
        Se intentó restablecer la contraseña de una cuenta.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4725`
      </td>

      <td>
        Una cuenta de usuario fue deshabilitada
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4726`
      </td>

      <td>
        Se eliminó una cuenta de usuario
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4738`
      </td>

      <td>
        Se cambió una cuenta de usuario.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4739`
      </td>

      <td>
        Se cambió la política de dominio.
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4740`
      </td>

      <td>
        Una cuenta de usuario fue bloqueada
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        `4781`
      </td>

      <td>
        Se creó una cuenta de computadora
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1083`
      </td>

      <td>
        No se pudo determinar el número de versión del descriptor de seguridad
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1202`
      </td>

      <td>
        Las políticas de seguridad se propagaron con advertencia. 0x534: no se realizó ningún mapeo entre los nombres de cuentas y los ID de seguridad.
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1265`
      </td>

      <td>
        Falló el intento de establecer un enlace de replicación para la siguiente partición de directorio grabable
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1311`
      </td>

      <td>
        El Comprobador de coherencia del conocimiento (KCC) ha detectado problemas con la siguiente partición del directorio
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1388`
      </td>

      <td>
        Durante los últimos \[número] días; Los errores de replicación en una o más particiones de directorio han provocado que la replicación se deshabilite para el contexto de nomenclatura especificado en el controlador de dominio actual.
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1645`
      </td>

      <td>
        Los servicios de dominio de Active Directory han detectado que el dominio todavía utiliza la contraseña predeterminada para la cuenta de 'administrador'
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `5805`
      </td>

      <td>
        La configuración de la sesión desde la computadora \[nombre de la computadora] no pudo autenticarse
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `5807`
      </td>

      <td>
        Durante los últimos \[número] días; Ha habido algunos errores de replicación en el bosque. Puede haber problemas de red o de conectividad en el bosque
      </td>
    </tr>
  </tbody>
</table>

### Ver tus datos

En New Relic, puedes consultar tus resultados con este patrón NRQL :

```sql
FROM Log SELECT
  hostname AS 'Host',
  Channel,
  EventID,
  message AS 'Message'
WHERE logtype = 'active_directory'
SINCE 1 DAY AGO
LIMIT MAX
```

## Comprueba el código fuente [#source-code]

Esta integración es software de código abierto. Eso significa que puedes [explorar su código fuente](https://github.com/newrelic/newrelic-active-directory-integration) y enviar mejoras, o crear tu propia bifurcación y compilarla.
