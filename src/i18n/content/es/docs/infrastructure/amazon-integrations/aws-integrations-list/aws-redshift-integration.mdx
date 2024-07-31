---
title: Integración de Amazon Redshift
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon Redshift monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar sus datos de Amazon Redshift a New Relic. Este documento explica cómo activar la integración y describe los datos reportados.

## Característica [#features]

[Amazon Redshift](https://aws.amazon.com/redshift) es un almacén de datos completamente administrado que hace que sea simple y rentable analizar todos sus datos utilizando SQL estándar y sus herramientas existentes de Amazon Business Intelligence (BI). La integración Redshift de New Relic recopila datos métricos y de configuración para la base de datos relacionales asociados con su cuenta de Amazon Redshift.

Los datos reportados incluyen bytes recibidos y bytes transmitidos, estado de salud, base de datos de conexiones, latencia y otras [métricas](#metrics)). Sus datos de Redshift están disponibles en <InlinePopover type="dashboards"/>prediseñado y también puede crear [consultas y gráficos personalizados](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

Para permitir que New Relic acceda a los datos de Redshift, su cuenta de AWS debe tener la política <DNT>**ReadOnly**</DNT> asociada o se deben otorgar los siguientes permisos a su cuenta de New Relic:

* `describeClusters`
* `describeClusterParameters`

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) predeterminada para la integración de Amazon RedShift:

* New Relic intervalo de sondeo: 5 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto

## Buscar y utilizar datos [#find-data]

Para encontrar sus datos de integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de Redshift.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) usando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `DatastoreSample` , con un valor `provider` de `RedshiftNode` para nodos Redshift, o `RedshiftCluster` para clúster Redshift.

Para obtener más información sobre cómo utilizar sus datos, consulte [Comprender y utilizar los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

New Relic recopila los siguientes datos de Amazon Redshift. Para obtener descripciones completas de cada métrica, consulte [la documentación de Redshift](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/rs-metricscollected.html) de Amazon.

<table>
  <thead>
    <tr>
      <th style={{ width: "275px" }}>
        Nombre
      </th>

      <th>
        Tipo de datos
      </th>

      <th>
        Dimensión
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `CPUUtilization`
      </td>

      <td>
        por ciento
      </td>

      <td>
        `NodeID, ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `DatabaseConnections`
      </td>

      <td>
        count
      </td>

      <td>
        `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `HealthStatus`
      </td>

      <td>
        1/0 (`HEALTHY`/`UNHEALTHY` en la consola de Amazon CloudWatch)
      </td>

      <td>
        `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `MaintenanceMode`
      </td>

      <td>
        1/0 (`ON`/`OFF` en la consola de Amazon CloudWatch)
      </td>

      <td>
        `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `NetworkReceiveThroughput`
      </td>

      <td>
        bytes/segundos (`MB/s` en la consola de Amazon CloudWatch)
      </td>

      <td>
        `NodeID`, `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `NetworkTransmitThroughput`
      </td>

      <td>
        bytes/segundos (`MB/s` en la consola de Amazon CloudWatch)
      </td>

      <td>
        `NodeID`, `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `PercentageDiskSpaceUsed`
      </td>

      <td>
        por ciento
      </td>

      <td>
        `NodeID`, `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `QueriesCompletedPerSecond`
      </td>

      <td>
        recuento/segundo (para clústeres de múltiples nodos)
      </td>

      <td>
        `latency`, `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `QueryDuration`
      </td>

      <td>
        microsegundos (para clústeres de múltiples nodos)
      </td>

      <td>
        `latency`, `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `ReadIOPS`
      </td>

      <td>
        cuenta/segundo
      </td>

      <td>
        `NodeID`, `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `ReadLatency`
      </td>

      <td>
        segundos
      </td>

      <td>
        `NodeID`
      </td>
    </tr>

    <tr>
      <td>
        `ReadThroughput`
      </td>

      <td>
        bytes (`GB/s` en la consola de Amazon CloudWatch)
      </td>

      <td>
        `NodeID`
      </td>
    </tr>

    <tr>
      <td>
        `WLMQueriesCompletedPerSecond`
      </td>

      <td>
        recuento/segundo (para clústeres de múltiples nodos)
      </td>

      <td>
        `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `WLMQueryDuration`
      </td>

      <td>
        Microsegundos (para clústeres de múltiples nodos)
      </td>

      <td>
        `ClusterIdentifier`
      </td>
    </tr>

    <tr>
      <td>
        `WriteIOPS`
      </td>

      <td>
        contar/segundos
      </td>

      <td>
        `NodeID`
      </td>
    </tr>

    <tr>
      <td>
        `WriteLatency`
      </td>

      <td>
        segundos
      </td>

      <td>
        `NodeID`
      </td>
    </tr>

    <tr>
      <td>
        `WriteThroughput`
      </td>

      <td>
        bytes (`GB/s` en la consola de Amazon CloudWatch)
      </td>

      <td>
        `NodeID`
      </td>
    </tr>
  </tbody>
</table>

## Dimensiones Amazon Redshift métrica [#dimensions]

Los datos de Amazon Redshift se pueden filtrar según cualquiera de las siguientes [dimensiones](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/rs-metricscollected.html#rs-metric-dimensions):

<table>
  <thead>
    <tr>
      <th width={285}>
        Dimensión
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `NodeID`
      </td>

      <td>
        Filtra los datos solicitados que son específicos de los nodos de un clúster. `NodeID` será `Leader`, `Shared` o `Compute-N`, donde `N` es 0, 1, etc. para la cantidad de nodos en el clúster.

        `Shared` significa que el clúster tiene un solo nodo. El nodo `Leader` y el nodo `Compute` se combinan.
      </td>
    </tr>

    <tr>
      <td>
        `ClusterIdentifier`
      </td>

      <td>
        Filtra los datos solicitados que son específicos del clúster. Las métricas que son específicas del clúster incluyen `HealthStatus`, `MaintenanceMode` y `DatabaseConnections`.

        En general, las métricas para esta dimensión (por ejemplo, `ReadIOPS`) que también son métricas de nodos representan un agregado de los datos métricos del nodo. Tenga cuidado al interpretar estas métricas, porque agregan el comportamiento de los nodos `Leader` y `Compute` .
      </td>
    </tr>
  </tbody>
</table>
