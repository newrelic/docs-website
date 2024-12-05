---
title: Integración del monitoreo AWS Health
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s AWS Health integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar sus datos AWS Health a New Relic. Este documento explica cómo activar esta integración y describe los datos que se pueden reportar.

## Característica [#features]

Esta integración recopila información de [AWS Health](https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html) sobre eventos que pueden afectar los recursos y servicios AWS a nivel global o en una cuenta específica. Estos datos pueden ayudarle a anticipar posibles interrupciones de la aplicación.

AWS Health informa tres tipos de eventos:

* <DNT>
    **Open issues**
  </DNT>

  : muestra problemas que podrían afectar su infraestructura de AWS.

* <DNT>
    **Scheduled changes**
  </DNT>

  : Le informa con antelación sobre las actividades programadas que podrían tener un impacto en los servicios de AWS y los recursos.

* <DNT>
    **Notifications**
  </DNT>

  : Proporciona información adicional.

El evento de salud se vinculará a la entidad existente para los recursos AWS EC2 y heredará todos los metadatos de la entidad disponibles, como región, zona de disponibilidad, etiqueta de recurso y más.

Para ver la lista completa de atributos disponibles utilice la función `keyset` :

```
  FROM AwsHealthNotification SELECT keyset()
```

## Requisitos [#requirements]

Esta integración está disponible solo para clientes de AWS que tienen un plan de soporte Business o Enterprise, porque es un requisito para utilizar la [API de AWS Health](https://docs.aws.amazon.com/health/latest/ug/health-api.html).

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de AWS Health:

* New Relic intervalo de sondeo: 5 minutos

## Explorar datos de integración [#find-use]

Para utilizar los datos de esta integración:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**
   </DNT>

   .

2. Seleccione cualquiera de los enlaces de integración de AWS Health disponibles.

3. Para ver una cronología cuando se crea, modifica o elimina un evento de AWS Health, utilice la [página](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-events-page-live-feed-every-config-change)

   <DNT>
     [**Events**](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-events-page-live-feed-every-config-change)
   </DNT>

   [](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-events-page-live-feed-every-config-change).

## Eventos monitoreo y alertas [#event-monitoring]

Los eventos AWS Health se incorporan como <DNT>**AwsHealthNotification**</DNT> evento. Puede consultar, crear widgets y definir la política de alertas NRQL en función de estos eventos.

La siguiente tabla muestra el atributo principal disponible para el evento <DNT>**AwsHealthNotification**</DNT> :

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Evento atributo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `affectedEntityArn`
      </td>

      <td>
        El ARN del recurso de AWS.
      </td>
    </tr>

    <tr>
      <td>
        `arn`
      </td>

      <td>
        El ARN del propio evento de AWS Health.
      </td>
    </tr>

    <tr>
      <td>
        `affectedRegion`
      </td>

      <td>
        La región afectada por AWS.
      </td>
    </tr>

    <tr>
      <td>
        `affectedResources`
      </td>

      <td>
        Número de recursos afectados. Métrica generada automáticamente que se puede utilizar para definir las condiciones <InlinePopover type="alerts"/>New Relic .
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        Descripción detallada del evento.
      </td>
    </tr>

    <tr>
      <td>
        `eventTypeCategory`
      </td>

      <td>
        Categoría de AWS Health: problema, cambio programado, notificación de cuenta, investigación.
      </td>
    </tr>

    <tr>
      <td>
        `eventTypeCode`
      </td>

      <td>
        Una lista de identificadores únicos para tipos de eventos. Por ejemplo,`AWS_EC2_SYSTEM_MAINTENANCE_EVENT` o `AWS_RDS_MAINTENANCE_SCHEDULED`.
      </td>
    </tr>

    <tr>
      <td>
        `service`
      </td>

      <td>
        Los servicios de AWS asociados con el evento. Por ejemplo, EC2, RDS.
      </td>
    </tr>

    <tr>
      <td>
        `statusCode`
      </td>

      <td>
        El estado del evento de salud de AWS: `Open`, `Closed`, `Upcoming`.
      </td>
    </tr>

    <tr>
      <td>
        `startTime`
      </td>

      <td>
        La fecha y hora en que comenzó el evento (en formato de cadena).
      </td>
    </tr>

    <tr>
      <td>
        `startTimestamp`
      </td>

      <td>
        Comenzó la timestamp de época (en segundos) para el evento.
      </td>
    </tr>

    <tr>
      <td>
        `endTime`
      </td>

      <td>
        La fecha y hora para la resolución del evento (en formato de cadena).
      </td>
    </tr>

    <tr>
      <td>
        `endTimestamp`
      </td>

      <td>
        La timestamp de época (en segundos) para la resolución del evento.
      </td>
    </tr>

    <tr>
      <td>
        `lastUpdatedTime`
      </td>

      <td>
        La fecha y hora de la última actualización del evento recibida (en formato de cadena).
      </td>
    </tr>

    <tr>
      <td>
        `lastUpdatedTimestamp`
      </td>

      <td>
        La timestamp de época (en segundos) de la última actualización del evento recibida.
      </td>
    </tr>
  </tbody>
</table>

La condición de alerta NRQL se puede definir para recibir una notificación cuando AWS informa un evento de salud.

Por ejemplo, la siguiente consulta monitorea cualquier problema abierto en EC2 por recurso:

```
SELECT uniqueCount(affectedEntityArn) FROM AwsHealthNotification where statusCode = 'open' and eventTypeCategory = 'Issue' and service = 'EC2'
```
