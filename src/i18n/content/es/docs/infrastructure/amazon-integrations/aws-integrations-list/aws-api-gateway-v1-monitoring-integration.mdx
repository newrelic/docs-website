---
title: Integración de monitoreo de Amazon API Gateway REST (v1)
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s AWS API Gateway monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar los datos de su Amazon API Gateway a New Relic. Este documento explica cómo activar esta integración y describe los datos que se pueden reportar.

<Callout variant="tip">
  API Gateway v1 métrica están disponibles exclusivamente a través de la integración de sondeo API para Amazon API Gateway. [Las métricasAPI Gateway v2](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-api-gateway-v2-monitoring-integration) se transmiten a través de CloudWatch Metric Streams.
</Callout>

## Característica [#features]

[API Gateway de Amazon](https://aws.amazon.com/api-gateway/) es un servicio completamente administrado que le permite crear, publicar, mantener, monitor y proteger API a cualquier escala. Con la integración de New Relic API Gateway, obtiene más datos sobre cómo funciona su capa API detrás de escena. Recibirás datos métricos sobre la cantidad de llamadas API, las solicitudes atendidas, la cantidad de errores, recuentos de latencia y más.

Puede monitor y alertar sobre los datos de su API Gateway directamente desde [New Relic](/docs/infrastructure), consultar datos y crear un panel.

## Requisitos [#requierments]

API Gateway no enviará las métricas "Recuento de llamadas por recurso", "Error 4xx por recurso" y "Errores 5xx por recurso" a menos que haya habilitado explícitamente las métricas detalladas de CloudWatch.

<Callout variant="tip">
  Habilitar estas métricas puede agregar cargos adicionales a [los precios de su cuenta de Amazon CloudWatch](https://aws.amazon.com/cloudwatch/pricing/).
</Callout>

Para habilitar las métricas de CloudWatch, utilice cualquiera de estas opciones:

* Vaya a la Consola de administración AWS , seleccione la opción

  <DNT>
    **Settings**
  </DNT>

  para CloudWatch y luego seleccione la opción para habilitar métricas detalladas de CloudWatch.

* Llame a la acción `stage:update` de la API REST de Amazon API Gateway para actualizar la propiedad [`metricsEnabled`](https://docs.aws.amazon.com/apigateway/api-reference/resource/stage/#metricsEnabled) a `true`.

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) predeterminada para la integración de la puerta de enlace API de Amazon:

* New Relic intervalo de sondeo: 5 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto

## Buscar y utilizar datos [#find-data]

Para encontrar sus datos de integración en la UI de infraestructura, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración API Gateway.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `ApiGatewaySample` .

Para obtener más información sobre cómo utilizar sus datos, consulte [Comprender y utilizar los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

Esta integración New Relic Infrastructure recopila los siguientes datos de Amazon API Gateway:

<table>
  <thead>
    <tr>
      <th style={{ width: "260px" }}>
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
        `4XXError`
      </td>

      <td>
        El número de errores del lado del cliente capturados
      </td>
    </tr>

    <tr>
      <td>
        `5XXError`
      </td>

      <td>
        La cantidad de errores del lado del servidor capturados.
      </td>
    </tr>

    <tr>
      <td>
        `CacheHitCount`
      </td>

      <td>
        La cantidad de solicitudes atendidas desde la caché de API.
      </td>
    </tr>

    <tr>
      <td>
        `CacheMissCount`
      </td>

      <td>
        La cantidad de solicitudes atendidas desde el backend cuando el almacenamiento en caché de API está habilitado.
      </td>
    </tr>

    <tr>
      <td>
        `Count`
      </td>

      <td>
        El número de llamadas a métodos API.
      </td>
    </tr>

    <tr>
      <td>
        `IntegrationLatency`
      </td>

      <td>
        El tiempo en milisegundos entre el momento en que API Gateway transmite una solicitud al backend y el momento en que recibe una respuesta del backend.
      </td>
    </tr>

    <tr>
      <td>
        `Latency`
      </td>

      <td>
        El tiempo en milisegundos entre el momento en que API Gateway recibe una solicitud de un cliente y el momento en que devuelve una respuesta al cliente. La latencia incluye la latencia de integración y otros gastos generales de API Gateway.
      </td>
    </tr>
  </tbody>
</table>

## Dimensiones

Puede utilizar las [dimensiones](http://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Dimension.html) de la siguiente tabla para filtrar API Gateway métrica.

<table>
  <thead>
    <tr>
      <th style={{ width: "285x" }}>
        Dimensiones
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ApiName`
      </td>

      <td>
        Filtra API Gateway métrica para una API del nombre de API especificado.
      </td>
    </tr>

    <tr>
      <td>
        `ApiName`, `Method`, `Resource`, `Stage`
      </td>

      <td>
        Filtra API Gateway métrica para un método API de la API, etapa, recurso y método especificados.
      </td>
    </tr>

    <tr>
      <td>
        `ApiName`, `Stage`
      </td>

      <td>
        Filtros API Gateway métrica para una etapa API de la API y etapa especificada.
      </td>
    </tr>
  </tbody>
</table>
