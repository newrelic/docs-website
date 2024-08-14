---
title: Integración de monitoreo mejorado de Amazon RDS
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s AWS RDS Enhanced Monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

[New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para recopilar [datos mejorados de Amazon RDS](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html); esto complementa la [integración básica New Relic RDS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-rds-monitoring-integration) con tiempo real métrica sobre el sistema operativo en el que se ejecuta la base de datos instancia.

## Característica [#features]

Esta integración New Relic le permite monitor y [alertar](/docs/infrastructure/new-relic-infrastructure/configuration/infrastructure-alerts-add-edit-or-view-host-alert-information) sobre el monitoreo RDS Enhanced. Puede utilizar datos de integración y <InlinePopover type="alerts"/>para monitor los procesos de base de datos e identificar posibles puntos problemáticos, así como para perfilar la base de datos, lo que le permitirá mejorar y optimizar su respuesta y costo.

## Habilitar monitoreo mejorado [#activate]

<Callout variant="important">
  Habilitar esta integración generará algunos cargos adicionales en su cuenta de Amazon CloudWatch. Además, existen algunas limitaciones y diferencias en la recopilación de datos métricos de CPU que se explican en la documentación [de monitoreo mejorado](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html) de Amazon.
</Callout>

Primero debe tener habilitada la integración de monitoreo New Relic [Amazon RDS](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-rds-monitoring-integration) antes de habilitar el monitoreo RDS mejorado. Asegúrese de haber completado los pasos en [Conectar servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

New Relic utiliza AWS Lambda para recopilar registros de RDS y proporcionar datos reales casi en tiempo de su instancia de RDS, esta capacidad se llama monitoreo RDS mejorado en AWS.

Siga estos pasos para habilitar la integración de monitoreo mejorado de RDS:

1. Especifique la instancia de RDS que necesita habilitar el monitoreo mejorado de RDS. Puede especificar esto al crear o modificar la instancia: en

   <DNT>
     **Monitoring**
   </DNT>

   , establezca

   <DNT>
     **Enable Enhanced Monitoring**
   </DNT>

   en

   <DNT>
     **Yes**
   </DNT>

   . Recomendamos configurar los datos

   <DNT>
     **Granularity**
   </DNT>

   en 15 segundos.

2. Una vez habilitado el monitoreo mejorado, se crea una secuencia denominada `RDSOSMetrics` en el registro AWS CloudWatch. Los monitoreos métricos mejorados están disponibles a través de esta transmisión. Cree una función Lambda y suscríbase a esa secuencia en los siguientes pasos para obtener los datos.

3. Cree una nueva función Lambda AWS desde el repositorio Serverless: vaya a

   <DNT>
     **Lambda > Create Function > Browse serverless App repository**
   </DNT>

   , marque la casilla

   <DNT>
     **Show apps that create custom IAM roles or resource policies**
   </DNT>

   y busque `NewRelic-log-ingestion`.

4. Complete la variable de entorno `LICENSE_KEY` con su cuenta New Relic

   <InlinePopover type="licenseKey"/>

   .

5. Revise todos los parámetros opcionales y adáptelos según sus casos de uso.

6. Seleccione

   <DNT>
     **Deploy**
   </DNT>

   para crear una nueva stack de CloudFormation, una nueva función llamada `newrelic-log-ingestion` y el rol requerido.

7. Vaya a la función `newrelic-log-ingestion` .

8. Continúe con el procedimiento para [transmitir el registro a la función Lambda](#stream-logs).

<Callout variant="tip">
  La función `newrelic-log-ingestion` requiere la política AWSLambdaBasicExecutionRole que contiene los permisos mínimos (según lo recomendado por AWS). Se puede definir un nombre de función de IAM personalizado en el momento de la instalación; de lo contrario, se creará una función adecuada, que requerirá que se reconozca CAPABILITY_IAM.
</Callout>

## Transmitir registro a la función Lambda [#stream-logs]

Para vincular el flujo log `RDSOSMetrics` a la función Lambda (formato JSON):

1. Desde

   <DNT>
     **AWS Console > CloudWatch > Logs**
   </DNT>

   , seleccione `RDSOSMetrics` grupo log y aplique

   <DNT>
     **Actions > Create Lambda subscription filter**
   </DNT>

   .

2. Para

   <DNT>
     **Lambda function**
   </DNT>

   , seleccione `newrelic-log-ingestion`.

3. En el menú desplegable

   <DNT>
     **Log Format**
   </DNT>

   , seleccione `JSON` como

   <DNT>
     **Log format**
   </DNT>

   .

4. Introduzca una suscripción

   <DNT>
     **filter name**
   </DNT>

   .

5. En la parte inferior, haga clic en el botón

   <DNT>
     **Start streaming**
   </DNT>

   para guardar su filtro de suscripción Lambda.

Una vez completada, la función Lambda enviará todas las líneas log de `RDSOSMetrics` a los servicios de ingesta de New Relic.

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) predeterminada para la integración de monitoreo mejorado de Amazon RDS:

* New Relic intervalo de sondeo:

  * 30 segundos en promedio (recopilados a través del registro de CloudWatch)
  * Configurable al configurar AWS Lambda

* Intervalo de datos de Amazon CloudWatch: 1 minuto

## Buscar y utilizar datos [#find-data]

Para encontrar sus datos de integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione el enlace <DNT>**RDS > Enhanced monitoring dashboard**</DNT> .

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `DatastoreSample` , con un valor `provider` de `RdsDbInstance` .

Para obtener más información sobre cómo utilizar sus datos, consulte [Comprender y utilizar los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

New Relic recopila los siguientes datos RDS mejorados:

### Datos métricos para todos los motores de base de datos (excepto MS SQL Server)

<table>
  <thead>
    <tr>
      <th style={{ width: "174" }}>
        Grupo
      </th>

      <th style={{ width: "184" }}>
        Métrica
      </th>

      <th style={{ width: "249" }}>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td rowSpan={7}>
        `General`
      </td>

      <td>
        `engine`
      </td>

      <td>
        El motor de base de datos para la instancia de base de datos.
      </td>
    </tr>

    <tr>
      <td>
        `instanceId`
      </td>

      <td>
        El identificador de instancia de base de datos.
      </td>
    </tr>

    <tr>
      <td>
        `instanceResourceId`
      </td>

      <td>
        Un identificador inmutable, único en la región para la instancia de base de datos, que también se utiliza como identificador de flujo log .
      </td>
    </tr>

    <tr>
      <td>
        `numVCpus`
      </td>

      <td>
        La cantidad de CPU virtuales para la instancia de base de datos.
      </td>
    </tr>

    <tr>
      <td>
        `timestamp`
      </td>

      <td>
        La hora en que se tomaron las métricas.
      </td>
    </tr>

    <tr>
      <td>
        `uptime`
      </td>

      <td>
        La cantidad de tiempo que la instancia de base de datos ha estado activa.
      </td>
    </tr>

    <tr>
      <td>
        `version`
      </td>

      <td>
        La versión del sistema operativo métrica en formato JSON.
      </td>
    </tr>

    <tr>
      <td rowSpan={9}>
        `cpuUtilization`
      </td>

      <td>
        `guest`
      </td>

      <td>
        El porcentaje de CPU utilizado por los programas invitados.
      </td>
    </tr>

    <tr>
      <td>
        `idle`
      </td>

      <td>
        El porcentaje de CPU que está inactiva.
      </td>
    </tr>

    <tr>
      <td>
        `irq`
      </td>

      <td>
        El porcentaje de CPU en uso por interrupciones de software.
      </td>
    </tr>

    <tr>
      <td>
        `nice`
      </td>

      <td>
        El porcentaje de CPU utilizado por los programas que se ejecutan con la prioridad más baja.
      </td>
    </tr>

    <tr>
      <td>
        `steal`
      </td>

      <td>
        El porcentaje de CPU utilizado por otra máquina virtual.
      </td>
    </tr>

    <tr>
      <td>
        `system`
      </td>

      <td>
        El porcentaje de CPU utilizado por el kernel.
      </td>
    </tr>

    <tr>
      <td>
        `total`
      </td>

      <td>
        El porcentaje total de la CPU en uso. Este valor excluye el valor agradable.
      </td>
    </tr>

    <tr>
      <td>
        `user`
      </td>

      <td>
        El porcentaje de CPU utilizado por los programas de usuario.
      </td>
    </tr>

    <tr>
      <td>
        `wait`
      </td>

      <td>
        El porcentaje de CPU no utilizada mientras se espera acceso a E/S.
      </td>
    </tr>

    <tr>
      <td rowSpan={14}>
        `diskIO` (no disponible para Amazon Aurora)
      </td>

      <td>
        `avgQueueLen`
      </td>

      <td>
        La cantidad de solicitudes en espera en la cola del dispositivo de E/S.
      </td>
    </tr>

    <tr>
      <td>
        `avgReqSz`
      </td>

      <td>
        El tamaño promedio de la solicitud, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `await`
      </td>

      <td>
        La cantidad de milisegundos necesarios para responder a las solicitudes, incluido el tiempo de cola y el tiempo de servicio.
      </td>
    </tr>

    <tr>
      <td>
        `device`
      </td>

      <td>
        El identificador del dispositivo de disco en uso.
      </td>
    </tr>

    <tr>
      <td>
        `readIOsPS`
      </td>

      <td>
        El número de operaciones de lectura por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `readKb`
      </td>

      <td>
        El número total de kilobytes leídos.
      </td>
    </tr>

    <tr>
      <td>
        `readKbPS`
      </td>

      <td>
        El número de kilobytes leídos por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `rrqmPS`
      </td>

      <td>
        El número de solicitudes de lectura fusionadas en cola por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `tps`
      </td>

      <td>
        El número de transacciones de E/S por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `util`
      </td>

      <td>
        El porcentaje de tiempo de CPU durante el cual se emitieron las solicitudes.
      </td>
    </tr>

    <tr>
      <td>
        `writeIOsPS`
      </td>

      <td>
        El número de operaciones de escritura por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `writeKb`
      </td>

      <td>
        El número total de kilobytes escritos.
      </td>
    </tr>

    <tr>
      <td>
        `writeKbPS`
      </td>

      <td>
        El número de kilobytes escritos por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `wrqmPS`
      </td>

      <td>
        El número de solicitudes de escritura fusionadas en cola por segundo.
      </td>
    </tr>

    <tr>
      <td rowSpan={6}>
        `fileSys`
      </td>

      <td>
        `maxFiles`
      </td>

      <td>
        El número máximo de archivos que se pueden crear para el sistema de archivos.
      </td>
    </tr>

    <tr>
      <td>
        `total`
      </td>

      <td>
        La cantidad total de espacio en disco disponible para el sistema de archivos, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `used`
      </td>

      <td>
        La cantidad de espacio en disco utilizado por los archivos en el sistema de archivos, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `usedFilePercent`
      </td>

      <td>
        El porcentaje de archivos disponibles en uso.
      </td>
    </tr>

    <tr>
      <td>
        `usedFiles`
      </td>

      <td>
        El número de archivos en el sistema de archivos.
      </td>
    </tr>

    <tr>
      <td>
        `usedPercent`
      </td>

      <td>
        El porcentaje del espacio en disco del sistema de archivos en uso.
      </td>
    </tr>

    <tr>
      <td rowSpan={3}>
        `loadAverageMinute`
      </td>

      <td>
        `fifteen`
      </td>

      <td>
        La cantidad de procesos que solicitaron tiempo de CPU durante los últimos 15 minutos.
      </td>
    </tr>

    <tr>
      <td>
        `five`
      </td>

      <td>
        La cantidad de procesos que solicitaron tiempo de CPU durante los últimos 5 minutos.
      </td>
    </tr>

    <tr>
      <td>
        `one`
      </td>

      <td>
        La cantidad de procesos que solicitaron tiempo de CPU durante el último minuto.
      </td>
    </tr>

    <tr>
      <td rowSpan={16}>
        `memory`
      </td>

      <td>
        `active`
      </td>

      <td>
        La cantidad de memoria asignada, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `buffers`
      </td>

      <td>
        La cantidad de memoria utilizada para almacenar en búfer las solicitudes de E/S antes de escribir en el dispositivo de almacenamiento, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `cached`
      </td>

      <td>
        La cantidad de memoria utilizada para almacenar en caché la E/S basada en el sistema de archivos.
      </td>
    </tr>

    <tr>
      <td>
        `dirty`
      </td>

      <td>
        La cantidad de páginas de memoria en RAM que se han modificado pero no se han escrito en su bloque de datos relacionado en el almacenamiento, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `free`
      </td>

      <td>
        La cantidad de memoria no asignada, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `hugePagesFree`
      </td>

      <td>
        El número de páginas enormes gratuitas. Las páginas enormes son una característica del kernel de Linux.
      </td>
    </tr>

    <tr>
      <td>
        `hugePagesRsvd`
      </td>

      <td>
        El número de páginas enormes comprometidas.
      </td>
    </tr>

    <tr>
      <td>
        `hugePagesSize`
      </td>

      <td>
        El tamaño de cada unidad de páginas grandes, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `hugePagesSurp`
      </td>

      <td>
        El número de páginas enormes excedentes disponibles sobre el total.
      </td>
    </tr>

    <tr>
      <td>
        `hugePagesTotal`
      </td>

      <td>
        El número total de páginas enormes para el sistema.
      </td>
    </tr>

    <tr>
      <td>
        `inactive`
      </td>

      <td>
        La cantidad de páginas de memoria utilizadas con menos frecuencia, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `mapped`
      </td>

      <td>
        La cantidad total de contenido del sistema de archivos que se asigna en memoria dentro de un espacio de direcciones de proceso, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `pageTables`
      </td>

      <td>
        La cantidad de memoria utilizada por las tablas de páginas, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `slab`
      </td>

      <td>
        La cantidad de estructuras de datos del kernel reutilizables, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `total`
      </td>

      <td>
        La cantidad total de memoria, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `writeback`
      </td>

      <td>
        La cantidad de n kilobytes.
      </td>
    </tr>

    <tr>
      <td rowSpan={2}>
        `network`
      </td>

      <td>
        `rx`
      </td>

      <td>
        El número de bytes recibidos por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `tx`
      </td>

      <td>
        El número de bytes cargados por segundo.
      </td>
    </tr>

    <tr>
      <td rowSpan={4}>
        `process`
      </td>

      <td>
        `cpuUsedPc`
      </td>

      <td>
        El porcentaje de CPU utilizado por el proceso.
      </td>
    </tr>

    <tr>
      <td>
        `rss`
      </td>

      <td>
        La cantidad de RAM asignada al proceso, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `memoryUsedPc`
      </td>

      <td>
        La cantidad de memoria utilizada por el proceso, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `processName`
      </td>

      <td>
        El nombre del proceso.
      </td>
    </tr>

    <tr>
      <td rowSpan={3}>
        `swap`
      </td>

      <td>
        `cached`
      </td>

      <td>
        La cantidad de memoria de intercambio, en kilobytes, utilizada como memoria caché.
      </td>
    </tr>

    <tr>
      <td>
        `free`
      </td>

      <td>
        La cantidad total de memoria de intercambio libre, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `total`
      </td>

      <td>
        La cantidad total de memoria de intercambio disponible, en kilobytes.
      </td>
    </tr>

    <tr>
      <td rowSpan={6}>
        `tasks`
      </td>

      <td>
        `blocked`
      </td>

      <td>
        La cantidad de tareas que están bloqueadas.
      </td>
    </tr>

    <tr>
      <td>
        `running`
      </td>

      <td>
        El número de tareas que se están ejecutando.
      </td>
    </tr>

    <tr>
      <td>
        `sleeping`
      </td>

      <td>
        El número de tareas que están durmiendo.
      </td>
    </tr>

    <tr>
      <td>
        `stopped`
      </td>

      <td>
        El número de tareas que se detienen.
      </td>
    </tr>

    <tr>
      <td>
        `total`
      </td>

      <td>
        El número total de tareas.
      </td>
    </tr>

    <tr>
      <td>
        `zombie`
      </td>

      <td>
        La cantidad de tareas secundarias que están inactivas con una tarea principal activa.
      </td>
    </tr>
  </tbody>
</table>

### Datos métricos para MS SQL [#sql-metrics]

<table>
  <thead>
    <tr>
      <th style={{ width: "174" }}>
        Grupo
      </th>

      <th style={{ width: "184" }}>
        Métrica
      </th>

      <th style={{ width: "249" }}>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td rowSpan={9}>
        `disks`
      </td>

      <td>
        `totalKb`
      </td>

      <td>
        El espacio total del disco, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `usedKb`
      </td>

      <td>
        La cantidad de espacio utilizado en el disco, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `usedPc`
      </td>

      <td>
        El porcentaje de espacio utilizado en el disco.
      </td>
    </tr>

    <tr>
      <td>
        `availKb`
      </td>

      <td>
        El espacio disponible en el disco, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `availPc`
      </td>

      <td>
        El porcentaje de espacio disponible en el disco.
      </td>
    </tr>

    <tr>
      <td>
        `rdCountPS`
      </td>

      <td>
        El número de operaciones de lectura por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `rdBytesPS`
      </td>

      <td>
        El número de bytes leídos por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `wrCountPS`
      </td>

      <td>
        El número de operaciones de escritura por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `wBytesPS`
      </td>

      <td>
        La cantidad de bytes escritos por segundo.
      </td>
    </tr>

    <tr>
      <td rowSpan={11}>
        `memory`
      </td>

      <td>
        `commitToKb`
      </td>

      <td>
        La cantidad de espacio de direcciones virtuales respaldado por archivos de paginación en uso, es decir, el cargo de confirmación actual. Este valor se compone de memoria principal (RAM) y disco (archivos de paginación).
      </td>
    </tr>

    <tr>
      <td>
        `commitLimitKb`
      </td>

      <td>
        El valor máximo posible para la métrica commitTotKb. Este valor es la suma del tamaño del archivo de paginación actual más la memoria física disponible para contenidos paginables, excluyendo la RAM asignada a áreas no paginables.
      </td>
    </tr>

    <tr>
      <td>
        `commitPeakKb`
      </td>

      <td>
        El valor más grande de la métrica commitTotKb desde la última vez que se inició el sistema operativo.
      </td>
    </tr>

    <tr>
      <td>
        `kernTotKb`
      </td>

      <td>
        La suma de la memoria en los grupos de kernel paginados y no paginados, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `kernPagedKb`
      </td>

      <td>
        La cantidad de memoria en el grupo del kernel paginado, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `kernNonpagedKb`
      </td>

      <td>
        La cantidad de memoria en el grupo de kernel no paginado, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `pageSize`
      </td>

      <td>
        El tamaño de una página, en bytes.
      </td>
    </tr>

    <tr>
      <td>
        `physTotKb`
      </td>

      <td>
        La cantidad de memoria física, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `physAvailKb`
      </td>

      <td>
        La cantidad de memoria física disponible, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `sqlServerTotKb`
      </td>

      <td>
        La cantidad de memoria comprometida con Microsoft SQL Server, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `sysCacheKb`
      </td>

      <td>
        La cantidad de memoria caché del sistema, en kilobytes.
      </td>
    </tr>

    <tr>
      <td rowSpan={2}>
        `network`
      </td>

      <td>
        `rdBytesPS`
      </td>

      <td>
        El número de bytes recibidos por segundo.
      </td>
    </tr>

    <tr>
      <td>
        `wrBytesPS`
      </td>

      <td>
        El número de bytes enviados por segundo.
      </td>
    </tr>

    <tr>
      <td rowSpan={7}>
        `process`
      </td>

      <td>
        `cpuUsedPc`
      </td>

      <td>
        El porcentaje de CPU utilizado por el proceso.
      </td>
    </tr>

    <tr>
      <td>
        `memUsedPc`
      </td>

      <td>
        La cantidad de memoria utilizada por el proceso, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `processName`
      </td>

      <td>
        El nombre del proceso.
      </td>
    </tr>

    <tr>
      <td>
        `workingSetKb`
      </td>

      <td>
        La cantidad de memoria en el conjunto de trabajo privado más la cantidad de memoria que utiliza el proceso y que se puede compartir con otros procesos, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `workingSetPrivKb`
      </td>

      <td>
        La cantidad de memoria que utiliza un proceso, pero que no se puede compartir con otros procesos, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `workingSetShareableKb`
      </td>

      <td>
        La cantidad de memoria que utiliza un proceso y que se puede compartir con otros procesos, en kilobytes.
      </td>
    </tr>

    <tr>
      <td>
        `virtKb`
      </td>

      <td>
        La cantidad de espacio de direcciones virtuales que utiliza el proceso, en kilobytes. El uso del espacio de direcciones virtuales no implica necesariamente el uso correspondiente del disco o de las páginas de la memoria principal.
      </td>
    </tr>

    <tr>
      <td rowSpan={3}>
        `system`
      </td>

      <td>
        `handles`
      </td>

      <td>
        El número de identificadores que utiliza el sistema.
      </td>
    </tr>

    <tr>
      <td>
        `processes`
      </td>

      <td>
        El número de procesos que se ejecutan en el sistema.
      </td>
    </tr>

    <tr>
      <td>
        `threads`
      </td>

      <td>
        El número de subprocesos que se ejecutan en el sistema.
      </td>
    </tr>
  </tbody>
</table>

## Definiciones

<table>
  <thead>
    <tr>
      <th style={{ width: "100" }}>
        Término
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tipo de evento
      </td>

      <td>
        `DataStoreSample`
      </td>
    </tr>

    <tr>
      <td>
        Proveedor
      </td>

      <td>
        `RdsDbInstance`
      </td>
    </tr>

    <tr>
      <td>
        Procesos
      </td>

      <td>
        El monitoreo mejorado le permite monitor los siguientes procesos asociados con su instancia RDS. :

        * `RDS Process`: muestra un resumen de los recursos utilizados por el agente de administración de RDS, los procesos de monitoreo de diagnóstico y otros procesos AWS que se requieren para admitir la instancia de base de datos de RDS.
        * `RDS Child Process`: Anidado en Procesos RDS, muestra un resumen de los procesos RDS que admiten la instancia de base de datos, por ejemplo, `aurora` para el clúster de base de datos Amazon Aurora y `mysqld` para la instancia de base de datos MySQL .
        * `OS Processes`: Muestra un resumen de los procesos del kernel y del sistema, que generalmente tienen un impacto mínimo en el rendimiento.
      </td>
    </tr>
  </tbody>
</table>
