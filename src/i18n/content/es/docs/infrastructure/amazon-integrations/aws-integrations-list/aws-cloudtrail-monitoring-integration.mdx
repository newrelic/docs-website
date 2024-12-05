---
title: Integración de monitoreo AWS CloudTrail
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s AWS CloudTrail monitoring integration: how to enable it, and what data it reports.'
freshnessValidatedDate: never
translationType: machine
---

[La integración New Relic ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar su evento AWS CloudTrail a New Relic. Este documento explica cómo activar esta integración y describe los datos que se pueden reportar.

## Característica

Esta integración recopila información de [AWS CloudTrail](https://aws.amazon.com/documentation/cloudtrail/), que captura y registra la actividad de la cuenta de AWS, principalmente con fines de auditoría y gobernanza.

New Relic AWS La integración CloudTrail de recopila eventos que representan errores e inicios de sesión en AWS la consola . Los errores le brindan información sobre la API de llamadas y los servicios que fallaron, y los inicios de sesión en la consola lo ayudan monitor la actividad de la consola y los posibles intentos de intrusión.

Además de estos dos tipos de datos, New Relic no recopila ningún otro dato.

## Activar la integración [#requirements]

<Callout variant="important">
  La integración de AWS CloudTrail recopila datos de <DNT>**us-east-1 region only**</DNT> de forma predeterminada. Para habilitar todas las regiones de AWS, contáctenos en [support.newrelic.com](https://support.newrelic.com/).
</Callout>

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/amazon-integrations/get-started/connect-aws-new-relic-infrastructure-monitoring/).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de AWS CloudTrail:

* New Relic intervalo de sondeo: 5 minutos

## Buscar y utilizar datos [#find-data]

Para encontrar sus datos de integración en infraestructura, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de AWS CloudTrail.

Esta integración no proporciona métrica: sólo [datos del evento](/docs/telemetry-data-platform/understand-data/new-relic-data-types/#events-new-relic). En nuestra UI de infraestructura, puede utilizar la [página<DNT>**Events**</DNT> ](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-events-page-live-feed-every-config-change)para ver una línea de tiempo de estos eventos.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `InfrastructureEvent` , con un valor `provider` de `CloudTrail`.

Para obtener información general sobre cómo buscar y utilizar datos de integración, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Evento atributo

Estos son los atributos que se pueden informar con el evento CloudTrail:

<table>
  <thead>
    <tr>
      <th>
        Metadatos
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `awsRegion`
      </td>

      <td>
        La región de AWS desde la que se realizó la solicitud.
      </td>
    </tr>

    <tr>
      <td>
        `cloudTrailEventType`
      </td>

      <td>
        Identifica el tipo de evento que generó el registro de evento. Este puede ser uno de los siguientes valores: `AwsApiCall`, `AwsServiceEvent`, `ConsoleSignin`.
      </td>
    </tr>

    <tr>
      <td>
        `errorCode`
      </td>

      <td>
        El error de servicios de AWS (si la solicitud devuelve un error). Para obtener una lista de los errores más comunes, consulte la [documentación de AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/CommonErrors.html).
      </td>
    </tr>

    <tr>
      <td>
        `errorMessage`
      </td>

      <td>
        Si la solicitud devuelve un error, la descripción del error.
      </td>
    </tr>

    <tr>
      <td>
        `eventId`
      </td>

      <td>
        El identificador único del evento.
      </td>
    </tr>

    <tr>
      <td>
        `eventName`
      </td>

      <td>
        La acción solicitada.
      </td>
    </tr>

    <tr>
      <td>
        `eventSource`
      </td>

      <td>
        Los servicios de AWS de los que se realizó la solicitud.
      </td>
    </tr>

    <tr>
      <td>
        `sourceIpAddress`
      </td>

      <td>
        La dirección IP desde la que se realizó la solicitud.
      </td>
    </tr>

    <tr>
      <td>
        `userAgent`
      </td>

      <td>
        El agente a través del cual se realizó la solicitud, como la Consola de administración AWS , los servicios de AWS, los SDK AWS o la CLI AWS .
      </td>
    </tr>

    <tr>
      <td>
        `userName`
      </td>

      <td>
        El nombre de usuario o nombre de función del solicitante que llamó a la API en el evento devuelto.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos de consulta [#example-queries]

Puede utilizar New Relic para ejecutar consultas de datos de AWS CloudTrail y, opcionalmente, utilizar New Relic <InlinePopover type="alerts"/>para configurar alertas sobre esos datos.

<CollapserGroup>
  <Collapser
    id="api-fails"
    title="Ejemplo de consulta: Recuento de llamadas API fallidas"
  >
    Consulta por un recuento de llamadas API fallidas, agregado por los servicios de AWS a los que se realizó la solicitud:

    ```
    SELECT count(*) from InfrastructureEvent WHERE provider = 'CloudTrail' 
        AND cloudTrailEventType = 'AwsApiCall' 
        FACET eventSource
    ```
  </Collapser>

  <Collapser
    id="api-fails"
    title="Ejemplo de consulta: recuento de errores de inicio de sesión en la consola"
  >
    Consulte para encontrar todos los errores de inicio de sesión de la consola:

    ```
    SELECT * from InfrastructureEvent WHERE provider = 'CloudTrail' 
        AND cloudTrailEventType = 'AwsConsoleSignIn' 
        AND errorMessage IS NOT NULL
    ```
  </Collapser>
</CollapserGroup>
