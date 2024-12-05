---
title: Integración de monitoreo de Amazon Kinesis Data Streams
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s integration with AWS Kinesis Data Streams: How to activate it and what data it reports.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[New Relic](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations) incluye una integración para monitoreo Amazon Kinesis Data Streams. Este documento explica cómo activar la integración y describe los datos que se pueden reportar.

## Característica [#features]

[Amazon Kinesis Data Streams](http://docs.aws.amazon.com/streams/latest/dev/introduction.html) es una plataforma para streaming de datos en AWS, facilitando la carga y análisis de datos en tiempo real. También le brinda la posibilidad de crear una aplicación de transmisión de datos personalizada para necesidades especializadas.

La integración Kinesis Data Streams de New Relic recopila datos métricos y de configuración de todos los flujos asociados con su cuenta.

Los datos recopilados incluyen bytes colocados y recuperados del flujo, registros colocados y recuperados, tiempo necesario para las operaciones y otras [métricas](#metrics). Puede ver sus datos de Kinesis Data Streams en un panel prediseñado y crear consultas y gráficos personalizados en New Relic.

También tiene una opción para [habilitar la recopilación de datos de fragmentos](#polling). Los registros de datos de AWS se procesan secuencialmente en fragmentos, que a su vez se agrupan en secuencias. La cantidad de fragmentos en una secuencia determina la capacidad total de lectura y escritura de datos del servicio.

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Sondeo y configuración [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) predeterminada para la integración de Amazon Kinesis Data Streams:

* New Relic intervalo de sondeo: 15 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto

Datos de fragmentos: para recopilar datos de fragmentos, habilite <DNT>**Collect shards data**</DNT> en las opciones de configuración de la integración en la UI.

<Callout variant="important">
  Si habilita la recopilación de datos de fragmentos, esto aumentará la cantidad de llamadas API a su servicio AWS CloudWatch. Habrá siete llamadas por fragmento por intervalo de sondeo.
</Callout>

## Buscar y utilizar datos [#find-data]

Para encontrar sus datos de integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de Kinesis Data Streams.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `QueueSample` . El valor `provider` incluye:

* Corriente métrica: `KinesisStream`
* Fragmento métrico: `KinesisStreamShard`

Para obtener más información sobre cómo utilizar sus datos, consulte [Comprender y utilizar los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

Esta integración recoge la siguiente métrica. Para obtener información adicional, consulte la documentación de Amazon para [monitorear Amazon Kinesis Data Streams](http://docs.aws.amazon.com/streams/latest/dev/monitoring-with-cloudwatch.html).

Esta integración recoge las siguientes métricas:

<table>
  <thead>
    <tr>
      <th style={{ width: "285" }}>
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
        `getRecordsBytes`
      </td>

      <td>
        La cantidad de bytes recuperados del flujo de Kinesis, medidos durante el período de tiempo especificado. Las estadísticas mínima, máxima y promedio representan los bytes en una sola operación `GetRecords` para la secuencia en el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `getRecordsIteratorAgeMilliseconds`
      </td>

      <td>
        La antigüedad del último registro de todas `GetRecords` llamadas realizadas en una transmisión de Kinesis, medida durante el período de tiempo especificado, en milisegundos. La edad es la diferencia entre la hora actual y el momento en que se escribió el último registro de la llamada `GetRecords` en la secuencia. Las estadísticas Mínimo y Máximo se pueden utilizar para realizar un seguimiento del progreso de la aplicación Kinesis consumidor. Un valor de cero indica que los registros que se leen están completamente al día con la secuencia.
      </td>
    </tr>

    <tr>
      <td>
        `getRecordsLatency`
      </td>

      <td>
        El tiempo necesario en milisegundos por operación `GetRecords` , medido durante el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `getRecordsRecords`
      </td>

      <td>
        La cantidad de registros recuperados del fragmento, medido durante el período de tiempo especificado. Las estadísticas mínima, máxima y promedio representan los registros en una sola operación `GetRecords` para la transmisión en el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `incomingBytes`
      </td>

      <td>
        La cantidad de bytes colocados correctamente en la secuencia de Kinesis durante el período de tiempo especificado. Esta métrica incluye bytes de operaciones `PutRecord` y `PutRecords` . Las estadísticas mínima, máxima y promedio representan los bytes en una única operación de transferencia para la secuencia en el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `incomingRecords`
      </td>

      <td>
        La cantidad de registros colocados correctamente en la transmisión de Kinesis durante el período de tiempo especificado. Esta métrica incluye recuentos de registros de operaciones `PutRecord` y `PutRecords` . Las estadísticas mínima, máxima y promedio representan los registros en una única operación de colocación para la secuencia en el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `putRecordBytes`
      </td>

      <td>
        La cantidad de bytes colocados en la secuencia de Kinesis mediante la operación `PutRecord` durante el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `putRecordLatency`
      </td>

      <td>
        El tiempo necesario en milisegundos por operación `PutRecord` , medido durante el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `putRecordSuccess`
      </td>

      <td>
        El número de `PutRecord` operaciones exitosas por secuencia de Kinesis, medidas durante el período de tiempo especificado. El promedio refleja el porcentaje de escrituras exitosas en una secuencia.
      </td>
    </tr>

    <tr>
      <td>
        `putRecordsBytes`
      </td>

      <td>
        La cantidad de bytes colocados en la secuencia de Kinesis mediante la operación `PutRecords` durante el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `putRecordsLatency`
      </td>

      <td>
        El tiempo necesario en milisegundos por operación `PutRecords` , medido durante el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `putRecordsRecords`
      </td>

      <td>
        La cantidad de registros exitosos en una operación `PutRecords` por secuencia de Kinesis, medida durante el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `putRecordsSuccess`
      </td>

      <td>
        El número de `PutRecords` operaciones en las que al menos un registro se realizó correctamente, por secuencia de Kinesis, medido durante el período de tiempo especificado.
      </td>
    </tr>

    <tr>
      <td>
        `readProvisionedThroughputExceeded`
      </td>

      <td>
        La cantidad de llamadas GetRecords limitadas para la transmisión durante el período de tiempo especificado. La estadística más utilizada para esta métrica es el promedio.
      </td>
    </tr>

    <tr>
      <td>
        `writeProvisionedThroughputExceeded`
      </td>

      <td>
        La cantidad de registros rechazados debido a la limitación de la transmisión durante el período de tiempo especificado. Esta métrica incluye la limitación de las operaciones `PutRecord` y `PutRecords` . La estadística más utilizada para esta métrica es Promedio.

        Cuando la estadística Mínimo tiene un valor distinto de cero, los registros se estaban limitando para la secuencia durante el período de tiempo especificado.

        Cuando la estadística Máximo tiene un valor de 0 (cero), no se limitó ningún registro para la transmisión durante el período de tiempo especificado.
      </td>
    </tr>
  </tbody>
</table>
