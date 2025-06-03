---
title: Integración de monitoreo de Amazon EMR
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon EMR monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar sus datos [de Amazon EMR (Elastic MapReduce)](https://aws.amazon.com/emr/) a New Relic. Este documento explica cómo activar esta integración y describe los datos que se pueden reportar.

## Característica [#features]

Puede monitor y alertar sobre sus datos EMR directamente desde [New Relic](/docs/infrastructure), consultar datos y crear un panel.

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de Amazon EMR:

* New Relic intervalo de sondeo: 5 minutos
* Resolución: 1 punto de datos cada 5 minutos

## Explorar datos de integración [#find-data]

Para utilizar sus [datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de EMR.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `ElasticMapReduceClusterSample` , con un valor `provider` de `ElasticMapReduceCluster`.

## Datos métricos [#metrics]

Esta integración recopila los siguientes datos de Amazon EMR. Para casos de uso e información adicional, consulte [la documentación de EMR de Amazon](https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_ViewingMetrics.html#UsingEMR_ViewingMetrics_MetricsReported).

<table>
  <thead>
    <tr>
      <th width={300}>
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
        `isIdle`
      </td>

      <td>
        Indica que un clúster ya no realiza trabajo, pero sigue activo y acumulando cargos. Se establece en 1 si no se están ejecutando tareas ni trabajos, y se establece en 0 en caso contrario.

        Este valor se verifica en intervalos de cinco minutos y un valor de 1 indica solo que el clúster estaba inactivo cuando se verificó, no que estuvo inactivo durante los cinco minutos completos. <DNT>**Recommendation:**</DNT> Para evitar falsos positivos, aumente un umbral de alerta cuando este valor haya sido 1 durante más de una comprobación consecutiva de cinco minutos. Por ejemplo, genere una alerta sobre este valor si ha sido 1 durante treinta minutos o más.
      </td>
    </tr>

    <tr>
      <td>
        `coreNodesRunning`
      </td>

      <td>
        La cantidad de nodos centrales que funcionan. Los puntos de datos para esta métrica se informan solo cuando existe un grupo de instancias correspondiente.
      </td>
    </tr>

    <tr>
      <td>
        `coreNodesPending`
      </td>

      <td>
        La cantidad de nodos centrales que esperan ser asignados. Es posible que todos los nodos centrales solicitados no estén disponibles de inmediato; esta métrica informa las solicitudes pendientes. Los puntos de datos para esta métrica se informan solo cuando existe un grupo de instancias correspondiente.
      </td>
    </tr>

    <tr>
      <td>
        `liveDataNodesPercentage`
      </td>

      <td>
        El porcentaje de nodos de datos que reciben trabajo de Hadoop.
      </td>
    </tr>

    <tr>
      <td>
        `s3WrittenBytes`
      </td>

      <td>
        La cantidad de bytes escritos en Amazon S3. Esta métrica agrega trabajos de MapReduce únicamente. No aplica para otra carga de trabajo en EMR.
      </td>
    </tr>

    <tr>
      <td>
        `s3ReadBytes`
      </td>

      <td>
        La cantidad de bytes leídos de Amazon S3. Esta métrica agrega trabajos de MapReduce únicamente y no se aplica a otras cargas de trabajo en EMR.
      </td>
    </tr>

    <tr>
      <td>
        `hdfsUtilizationPercentage`
      </td>

      <td>
        El porcentaje de almacenamiento HDFS utilizado actualmente.
      </td>
    </tr>

    <tr>
      <td>
        `hdfsReadBytes`
      </td>

      <td>
        La cantidad de bytes leídos de HDFS.
      </td>
    </tr>

    <tr>
      <td>
        `hdfsWrittenBytes`
      </td>

      <td>
        El número de bytes escritos en HDFS.
      </td>
    </tr>

    <tr>
      <td>
        `missingBlocks`
      </td>

      <td>
        La cantidad de bloques en los que HDFS no tiene réplicas. Estos podrían ser bloques corruptos.
      </td>
    </tr>

    <tr>
      <td>
        `totalLoad`
      </td>

      <td>
        El número total actual de lectores y escritores informados por todos los DataNodes en un clúster.
      </td>
    </tr>

    <tr>
      <td>
        `mostRecentBackupDurationMinutes`
      </td>

      <td>
        La cantidad de tiempo que tardó en completarse la copia de seguridad anterior. Esta métrica se establece independientemente de si la última copia de seguridad completada se realizó correctamente o falló.

        Mientras la copia de seguridad está en curso, esta métrica devuelve la cantidad de minutos después de que comenzó la copia de seguridad. Esta métrica solo se reporta para el clúster HBase.
      </td>
    </tr>

    <tr>
      <td>
        `timeSinceLastSuccessfulBackupMinutes`
      </td>

      <td>
        La cantidad de minutos transcurridos después de que se inició la última copia de seguridad exitosa de HBase en su clúster. Esta métrica solo se reporta para el clúster HBase.
      </td>
    </tr>
  </tbody>
</table>

Las siguientes métricas aparecen en la muestra dependiendo de la versión Hadoop del recurso.

### Hadoop 1 AMI métricas [#hadoop-1]

<table>
  <thead>
    <tr>
      <th width={300}>
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
        `jobsRunning`
      </td>

      <td>
        La cantidad de trabajos en el clúster que se están ejecutando actualmente.
      </td>
    </tr>

    <tr>
      <td>
        `jobsFailed`
      </td>

      <td>
        La cantidad de trabajos en el clúster que fallaron.
      </td>
    </tr>

    <tr>
      <td>
        `mapTasksRunning`
      </td>

      <td>
        El número de tareas de mapa en ejecución para cada trabajo. Si tiene un programador instalado y varios trabajos en ejecución, se generan varios gráficos.
      </td>
    </tr>

    <tr>
      <td>
        `mapTasksRemaining`
      </td>

      <td>
        El número de tareas de mapa restantes para cada trabajo. Si tiene un programador instalado y varios trabajos en ejecución, se generan varios gráficos. Una tarea de mapa restante es aquella que no se encuentra en ninguno de los siguientes estados: `Running`, `Killed` o `Completed`.
      </td>
    </tr>

    <tr>
      <td>
        `mapSlotsOpen`
      </td>

      <td>
        La capacidad de tarea de mapa no utilizada. Esto se calcula como la cantidad máxima de tareas de mapas para un clúster determinado, menos la cantidad total de tareas de mapas que se ejecutan actualmente en ese clúster.
      </td>
    </tr>

    <tr>
      <td>
        `remainingMapTasksPerSlot`
      </td>

      <td>
        La proporción entre el total de tareas de mapas restantes y el total de espacios de mapas disponibles en el clúster.
      </td>
    </tr>

    <tr>
      <td>
        `reduceTasksRunning`
      </td>

      <td>
        El número de tareas reducidas en ejecución para cada trabajo. Si tiene un programador instalado y varios trabajos en ejecución, se generan varios gráficos.
      </td>
    </tr>

    <tr>
      <td>
        `reduceTasksRemaining`
      </td>

      <td>
        El número de tareas reducidas en ejecución para cada trabajo. Si tiene un programador instalado y varios trabajos en ejecución, se generan varios gráficos.
      </td>
    </tr>

    <tr>
      <td>
        `reduceSlotsOpen`
      </td>

      <td>
        No utilizados reducen la capacidad de la tarea. Esto se calcula como la capacidad máxima de tareas de reducción para un clúster determinado, menos la cantidad de tareas de reducción que se ejecutan actualmente en ese clúster.
      </td>
    </tr>

    <tr>
      <td>
        `taskNodesRunning`
      </td>

      <td>
        El número de nodos de tareas en funcionamiento. Los puntos de datos para esta métrica se informan solo cuando existe un grupo de instancias correspondiente.
      </td>
    </tr>

    <tr>
      <td>
        `taskNodesPending`
      </td>

      <td>
        La cantidad de nodos centrales que esperan ser asignados. Es posible que todos los nodos de tareas solicitados no estén disponibles de inmediato; esta métrica informa las solicitudes pendientes. Los puntos de datos para esta métrica se informan solo cuando existe un grupo de instancias correspondiente.
      </td>
    </tr>

    <tr>
      <td>
        `liveTaskTrackersPercentage`
      </td>

      <td>
        El porcentaje de rastreadores de tareas que son funcionales.
      </td>
    </tr>

    <tr>
      <td>
        `backupFailed`
      </td>

      <td>
        Si falló la última copia de seguridad. Esto se establece en 0 de forma predeterminada y se actualiza a 1 si falló el intento de copia de seguridad anterior. Esta métrica solo se reporta para el clúster HBase.
      </td>
    </tr>
  </tbody>
</table>

### Hadoop 2 AMI métricas [#hadoop-2]

<table>
  <thead>
    <tr>
      <th width={300}>
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
        `containerAllocated`
      </td>

      <td>
        El número de contenedor de recursos asignado por ResourceManager.
      </td>
    </tr>

    <tr>
      <td>
        `containerReserved`
      </td>

      <td>
        El número de contenedor de recursos asignado por ResourceManager.
      </td>
    </tr>

    <tr>
      <td>
        `containerPending`
      </td>

      <td>
        El número de contenedores en la cola que aún no se han asignado.
      </td>
    </tr>

    <tr>
      <td>
        `containerPendingRatio`
      </td>

      <td>
        La proporción de contenedores pendientes a contenedores asignados.
      </td>
    </tr>

    <tr>
      <td>
        `appsCompleted`
      </td>

      <td>
        El número de solicitudes enviadas a YARN que se han completado.
      </td>
    </tr>

    <tr>
      <td>
        `appsFailed`
      </td>

      <td>
        El número de solicitudes enviadas a YARN que no se completaron.
      </td>
    </tr>

    <tr>
      <td>
        `appsKilled`
      </td>

      <td>
        El número de solicitudes enviadas a YARN que han sido eliminadas.
      </td>
    </tr>

    <tr>
      <td>
        `appsPending`
      </td>

      <td>
        El número de solicitudes enviadas a YARN que están en estado pendiente.
      </td>
    </tr>

    <tr>
      <td>
        `appsRunning`
      </td>

      <td>
        El número de aplicaciones enviadas a YARN que se están ejecutando.
      </td>
    </tr>

    <tr>
      <td>
        `appsSubmitted`
      </td>

      <td>
        El número de solicitudes enviadas a YARN.
      </td>
    </tr>

    <tr>
      <td>
        `mrTotalNodes`
      </td>

      <td>
        La cantidad de nodos actualmente disponibles para los trabajos de MapReduce.
      </td>
    </tr>

    <tr>
      <td>
        `mrActiveNodes`
      </td>

      <td>
        La cantidad de nodos que actualmente ejecutan tareas o trabajos de MapReduce.
      </td>
    </tr>

    <tr>
      <td>
        `mrLostNodes`
      </td>

      <td>
        La cantidad de nodos asignados a MapReduce que se han marcado en estado PERDIDO.
      </td>
    </tr>

    <tr>
      <td>
        `mrUnhealthyNodes`
      </td>

      <td>
        La cantidad de nodos disponibles para los trabajos de MapReduce marcados en un estado NO SALUDABLE.
      </td>
    </tr>

    <tr>
      <td>
        `mrDecommissionedNodes`
      </td>

      <td>
        La cantidad de nodos asignados a la aplicación MapReduce que se han marcado en estado DECOMMISSIONED.
      </td>
    </tr>

    <tr>
      <td>
        `mrRebootedNodes`
      </td>

      <td>
        La cantidad de nodos disponibles para MapReduce que se han reiniciado y marcado en un estado REBOOTED.
      </td>
    </tr>

    <tr>
      <td>
        `corruptBlocks`
      </td>

      <td>
        La cantidad de bloques que HDFS informa como corruptos.
      </td>
    </tr>

    <tr>
      <td>
        `memoryTotalBytes`
      </td>

      <td>
        La cantidad total de memoria en el clúster.
      </td>
    </tr>

    <tr>
      <td>
        `memoryReservedBytes`
      </td>

      <td>
        La cantidad de memoria reservada.
      </td>
    </tr>

    <tr>
      <td>
        `memoryAvailableBytes`
      </td>

      <td>
        La cantidad de memoria disponible para asignar.
      </td>
    </tr>

    <tr>
      <td>
        `memoryAllocatedBytes`
      </td>

      <td>
        La cantidad de memoria asignada al clúster.
      </td>
    </tr>

    <tr>
      <td>
        `yarnMemoryAvailablePercentage`
      </td>

      <td>
        El porcentaje de memoria restante disponible para YARN
      </td>
    </tr>

    <tr>
      <td>
        `underReplicatedBlocks`
      </td>

      <td>
        La cantidad de bloques que deben replicarse una o más veces.
      </td>
    </tr>

    <tr>
      <td>
        `dfsPendingReplicationBlocks`
      </td>

      <td>
        El estado de la replicación de bloques: bloques que se replican, antigüedad de las solicitudes de replicación y solicitudes de replicación fallidas.
      </td>
    </tr>

    <tr>
      <td>
        `capacityRemainingBytes`
      </td>

      <td>
        La cantidad de capacidad restante del disco HDFS.
      </td>
    </tr>

    <tr>
      <td>
        `hbaseBackupFailed`
      </td>

      <td>
        Si falló la última copia de seguridad. Esto se establece en 0 de forma predeterminada y se actualiza a 1 si falló el intento de copia de seguridad anterior. Esta métrica solo se reporta para el clúster HBase.
      </td>
    </tr>
  </tbody>
</table>
