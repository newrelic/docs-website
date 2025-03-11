---
title: Integración de monitoreo de Amazon S3
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon S3 monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar sus datos de Amazon S3 a New Relic. Este documento explica cómo activar la integración y describe los datos reportados.

## Característica [#features]

[Amazon Simple Storage Service](https://aws.amazon.com/s3) (Amazon S3) proporciona a los desarrolladores y equipos de TI almacenamiento en la nube seguro, duradero y altamente escalable.

Con la integración Amazon S3 de New Relic, los datos reportados incluyen el tamaño del depósito S3, el recuento de objetos del depósito, las solicitudes GET, POST y otras [métricas](#metrics). Los datos de S3 están disponibles en <InlinePopover type="dashboards"/>prediseñado y también puede crear [consultas y gráficos personalizados](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights). También puede crear una condición de alerta para notificarle sobre cambios en los datos de S3.

## Activar la integración [#activate]

<Callout variant="important">
  Las métricas [de Solicitud y Transferencia de Datos](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/configure-metrics.html) son métricas premium y se pagan por separado a través de AWS. Para obtener información sobre precios de CloudWatch, consulte la documentación [de monitoreo mejorado S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html) de Amazon.
</Callout>

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) predeterminada para la integración de Amazon S3:

* New Relic intervalo de sondeo:

  * Cubos S3: 1 hora
  * Solicitudes S3: 5 minutos

* Intervalo de sonido de Amazon CloudWatch:

  * Cubos S3: 24 horas
  * Solicitudes S3: 1 minuto

Tenga en cuenta que cambiar el intervalo de sondeo para esta integración solo afectará la recopilación de datos para la solicitud métrica de S3.

## Buscar y utilizar datos [#find-data]

Para encontrar sus datos de integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de S3.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `DatastoreSample` , con un valor `provider` de `S3Bucket`.

Para obtener más información sobre cómo utilizar sus datos, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

Esta integración recoge la siguiente métrica de Amazon S3. Para obtener más detalles sobre estas métricas, consulte [la documentación S3 de Amazon](http://docs.aws.amazon.com/AmazonS3/latest/dev/cloudwatch-monitoring.html#s3-cloudwatch-metrics).

### Datos de Amazon S3 para depósitos [#provider-S3Bucket]

<table>
  <thead>
    <tr>
      <th width={285}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `BucketSizeBytes`
      </td>

      <td>
        La cantidad de datos en bytes almacenados en un depósito, incluido el almacenamiento estándar, el almacenamiento de redundancia reducida, el almacenamiento de acceso poco frecuente (IAS), el IAS de una zona y el almacenamiento Glacier, incluidos los gastos generales.
      </td>
    </tr>

    <tr>
      <td>
        `NumberOfObjects`
      </td>

      <td>
        El número total de objetos almacenados en un depósito para todas las clases de almacenamiento excepto la clase de almacenamiento `GLACIER` .
      </td>
    </tr>
  </tbody>
</table>

### Datos de Amazon S3 para solicitud métrica [#provider-S3BucketRequests]

Para cobrar estas métricas, debes habilitar la solicitud métrica para tu cazo S3:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `AllRequests`
      </td>

      <td>
        El número total de solicitudes HTTP realizadas a un depósito de Amazon S3, independientemente del tipo. Cuando se utiliza una configuración métrica con un filtro, esta métrica solo cuenta las solicitudes HTTP de objetos que cumplen con los requisitos del filtro. Si crea varios filtros métricos de depósito, debe crear un filtro con alcance para todos los objetos del depósito como se detalla en [estas instrucciones AWS ](https://docs.aws.amazon.com/AmazonS3/latest/userguide/configure-request-metrics-bucket.html). Tenga en cuenta que <DNT>**only**</DNT> ese filtro debe tener como alcance todos los objetos del depósito.
      </td>
    </tr>

    <tr>
      <td>
        `GetRequests`
      </td>

      <td>
        El número de solicitudes HTTP GET realizadas para objetos en un depósito de Amazon S3. Esto no incluye operaciones de lista.
      </td>
    </tr>

    <tr>
      <td>
        `PutRequests`
      </td>

      <td>
        La cantidad de solicitudes HTTP PUT realizadas para objetos en un depósito de Amazon S3.
      </td>
    </tr>

    <tr>
      <td>
        `DeleteRequests`
      </td>

      <td>
        El número de solicitudes HTTP DELETE realizadas para objetos en un depósito de Amazon S3. Esto también incluye solicitudes [de eliminación de varios objetos](http://docs.aws.amazon.com/AmazonS3/latest/API/multiobjectdeleteapi.html) . Esta métrica muestra la cantidad de solicitudes, no la cantidad de objetos eliminados.
      </td>
    </tr>

    <tr>
      <td>
        `HeadRequests`
      </td>

      <td>
        La cantidad de solicitudes HTTP HEAD realizadas a un depósito de Amazon S3.
      </td>
    </tr>

    <tr>
      <td>
        `PostRequests`
      </td>

      <td>
        La cantidad de solicitudes HTTP POST realizadas a un depósito de Amazon S3.
      </td>
    </tr>

    <tr>
      <td>
        `ListRequests`
      </td>

      <td>
        La cantidad de solicitudes HTTP que enumeran el contenido de un depósito.
      </td>
    </tr>

    <tr>
      <td>
        `BytesDownloaded`
      </td>

      <td>
        El número de bytes descargados para solicitudes realizadas a un depósito de Amazon S3, donde la respuesta incluye un cuerpo.

        Estadísticas válidas: promedio (bytes por solicitud), suma (bytes por período), recuento de muestras, mínimo, máximo
      </td>
    </tr>

    <tr>
      <td>
        `BytesUploaded`
      </td>

      <td>
        El número de bytes cargados que contienen un cuerpo de solicitud, realizados en un depósito de Amazon S3.

        Estadísticas válidas: promedio (bytes por solicitud), suma (bytes por período), recuento de muestras, mínimo, máximo
      </td>
    </tr>

    <tr>
      <td>
        `4xxErrors`
      </td>

      <td>
        El número de solicitudes de código de estado de error del cliente HTTP 4xx realizadas a un depósito de Amazon S3 con un valor de `0` o `1`. La estadística `average` muestra la tasa de errores y la estadística `sum` muestra el recuento de ese tipo de error, durante cada período.

        Estadísticas válidas: Promedio (informes por solicitud), Suma (informes por período), Mín., Máx., Recuento de muestras
      </td>
    </tr>

    <tr>
      <td>
        `5xxErrors`
      </td>

      <td>
        El número de solicitudes de código de estado de error del servidor HTTP 5xx realizadas a un depósito de Amazon S3 con un valor de `0` o `1`. La estadística `average`muestra la tasa de errores y la estadística `sum` muestra el recuento de ese tipo de error, durante cada período.

        Estadísticas válidas: Promedio (informes por solicitud), Suma (informes por período), Mín., Máx., Recuento de muestras
      </td>
    </tr>

    <tr>
      <td>
        `FirstByteLatency`
      </td>

      <td>
        El tiempo por solicitud, en milisegundos, desde el momento en que el depósito de S3 recibió una solicitud completa hasta el momento en que comenzó a devolverse la respuesta.

        Estadísticas válidas: promedio, suma, mínimo, máximo, recuento de muestras
      </td>
    </tr>

    <tr>
      <td>
        `TotalRequestLatency`
      </td>

      <td>
        El tiempo transcurrido por solicitud, en milisegundos, desde el primer byte recibido hasta el último byte enviado a un depósito de Amazon S3. Esto incluye el tiempo necesario para recibir el cuerpo de la solicitud y enviar el cuerpo de la respuesta, que no está incluido en `FirstByteLatency`.

        Estadísticas válidas: promedio, suma, mínimo, máximo, recuento de muestras
      </td>
    </tr>
  </tbody>
</table>
