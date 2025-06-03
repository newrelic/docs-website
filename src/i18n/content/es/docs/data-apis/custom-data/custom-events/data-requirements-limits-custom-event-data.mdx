---
title: Requisitos y límites de datos para eventos personalizados
tags:
  - Event data sources
  - Custom events
metaDescription: 'For New Relic, general limits and requirements for reporting custom events and attributes.'
freshnessValidatedDate: never
translationType: machine
---

Este documento contiene requisitos y reglas generales para insertar y utilizar eventos personalizados y sus [atributos](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) asociados. Es posible que se apliquen requisitos adicionales según el método que utilice.

Puedes reportar [un evento](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic) personalizado a New Relic de varias maneras, incluyendo:

* <InlinePopover type="apm">
    [](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents)
  </InlinePopover>

  [API del agente](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents)

* [evento API](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api) (Existen requisitos adicionales al utilizar la API de eventos).

* [API del agente y](/docs/insights/insights-data-sources/custom-data/insert-data-via-new-relic-browser)

  <InlinePopover type="browser">
    [](/docs/insights/insights-data-sources/custom-data/insert-data-via-new-relic-browser)
  </InlinePopover>

  (existen requisitos adicionales con el evento personalizado `PageAction` .)

* [SDK de monitoreo de móviles](/docs/insights/insights-data-sources/custom-events/insert-custom-events-attributes-mobile-data)

## Requerimientos generales [#general]

Al informar eventos personalizados y atributos, siga estos requisitos generales para los tipos de datos admitidos, la sintaxis de nombres y el tamaño:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Requisito
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Payload
      </td>

      <td>
        Tamaño o longitud máxima total: <DNT>**1MB (10^6 bytes) maximum per POST**</DNT>. Recomendamos encarecidamente utilizar compresión.

        La carga útil debe estar codificada como <DNT>**UTF-8**</DNT>.

        La API de eventos tiene [límites de velocidad HTTP](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api#post-limit) adicionales.
      </td>
    </tr>

    <tr>
      <td>
        Tipos de datos de atributos
      </td>

      <td>
        Los valores [de los atributos](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) pueden ser una cadena, un número entero o flotante. Para obtener información sobre cómo formatear los datos de fecha y hora, consulte [Fecha/hora personalizada](/docs/query-your-data/explore-query-data/use-charts/use-your-charts/#custom-date-time).
      </td>
    </tr>

    <tr>
      <td>
        Límites de atributos
      </td>

      <td>
        Longitud máxima del nombre del atributo: 255 caracteres.

        Longitud máxima de los valores del atributo personalizado:

        * Para evento enviado a través de [evento API](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api): 4096 caracteres

        * Para evento enviado vía agente: 255 caracteres

          Atributo total máximo por evento: 254. <DNT>**Exception:**</DNT> Si utiliza una API de agente APM, el máximo es 64.

          Atributo total máximo por tipo de evento: 48.000.

          <Callout variant="important">
            Los gráficos solo pueden mostrar los primeros 255 caracteres de los valores de los atributos. Para obtener valores completos de los atributos, utilice el [tipo de gráfico JSON](/docs/insights/use-insights-ui/manage-dashboards/chart-types#widget-json) o [consulte API](/docs/insights/insights-api/get-data/query-insights-event-data-api).
          </Callout>
      </td>
    </tr>

    <tr>
      <td>
        Sintaxis de nomenclatura para eventos y atributos
      </td>

      <td>
        Los nombres de eventos pueden ser una combinación de caracteres alfanuméricos, dos puntos (`:`) y guiones bajos (`_`). Los nombres de atributos pueden incluirlos y también puntos (`.`).

        Recomendamos comenzar los nombres con una letra: si comienzan con otra cosa, deberás poner comillas graves alrededor del nombre al realizar la consulta. Para obtener más información sobre cuándo se requieren acentos graves en una consulta, consulte [la referencia de NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-how-nrql-works/#syntax).

        No utilice [palabras reservadas para uso de NRQL](#reserved-words).

        Longitud máxima del nombre del evento: 255 caracteres.
      </td>
    </tr>

    <tr>
      <td>
        Valores nulos
      </td>

      <td>
        La base de datos no almacena ningún dato con un valor nulo.
      </td>
    </tr>
  </tbody>
</table>

## Palabras reservadas

Evite utilizar las siguientes palabras reservadas como nombres para eventos y atributos. De lo contrario, pueden producirse resultados inesperados.

<Callout variant="important">
  Esta no es una lista completa. En general, evite el uso [de palabras reservadas de MySQL](https://dev.mysql.com/doc/refman/5.5/en/keywords.html) para evitar colisiones con futuras funciones de New Relic.
</Callout>

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Keyword**
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
    <tr id="reserved-accountId">
      <td>
        `accountId`
      </td>

      <td>
        Este es un nombre [de atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) reservado. Si está incluido, se eliminará durante la ingesta.
      </td>
    </tr>

    <tr id="reserved-appId">
      <td>
        `appId`
      </td>

      <td>
        El valor debe ser un número entero. Si no es un número entero, el nombre y el valor del atributo se eliminarán durante la ingesta.
      </td>
    </tr>

    <tr>
      <td id="reserved-eventType">
        `eventType`
      </td>

      <td>
        El tipo de evento almacenado en New Relic. El agente y el script de New Relic normalmente informan esto como `eventType`. Puede ser una combinación de caracteres alfanuméricos, dos puntos (`:`) y guiones bajos (`_`). Asegúrese de revisar los [valores `eventType` ](#prohibited-eventType)y [los límites`eventType` ](#event-limits)prohibidos.
      </td>
    </tr>

    <tr id="prohibited-eventType">
      <td>
        Valores `eventType` prohibidos
      </td>

      <td>
        Para su valor `eventType` , evite usar:

        * `Metric`, `MetricRaw` y cadenas con el prefijo `Metric[0-9]` (como `Metric2` o `Metric1Minute`).

        * `Public_` y cadenas con el prefijo `Public_`.

          Estos tipos de eventos están reservados para uso de New Relic. El evento pasado con estos valores `eventType` se eliminará.
      </td>
    </tr>

    <tr id="reserved-timestamp">
      <td>
        `timestamp`
      </td>

      <td>
        Debe ser una timestamp de Unix epoch. Puede definir la marca de tiempo en segundos o en milisegundos. Debe ser +/-1 día (24 horas) de la hora actual en el servidor.
      </td>
    </tr>

    <tr>
      <td id="reserved-log-forwarding">
        Términos de reenvío de logs
      </td>

      <td>
        Las siguientes claves están reservadas por el reenvío de registros característico del agente de infraestructura: `entity.guid`, log, `hostname`, `plugin.type`, `fb.input`. Si se usan, se eliminan durante la ingesta y se agrega una advertencia al registro.
      </td>
    </tr>

    <tr>
      <td id="reserved-syntax">
        Términos de sintaxis NRQL
      </td>

      <td>
        Si necesita utilizar términos de sintaxis [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) como nombres de atributos, incluidos los atributos con puntos, deben estar entre comillas invertidas; por ejemplo, `` `LIMIT` `` o `` `consumer.offset` ``. De lo contrario, evite utilizar estas palabras reservadas:

        `ago`, `and`, `as`, `auto`,

        `begin`, `begintime`,

        `compare`,

        `day`, `days`,

        `end`, `endtime`, `explain`,

        `facet`, `from`,

        `hour`, `hours`,

        `in`, `is`,

        `like`, `limit`,

        `minute`, `minutes`, `month`, `months`,

        `not`, `null`,

        `offset`, `or`,

        `raw`,

        `second`, `seconds`, `select`, `since`,

        `timeseries`,

        `until`,

        `week`, `weeks`, `where`, `with`
      </td>
    </tr>
  </tbody>
</table>

## Límites de tipo de evento [#event-limits]

El límite actual para el número total de valores `eventType` es 250 por cuenta (no por organización) en un período determinado de 24 horas. Si una cuenta excede este límite, New Relic puede filtrar o eliminar datos. Los tipos de eventos incluyen:

* Evento predeterminado del agente New Relic e integración
* Evento personalizado de agente o
* Evento personalizado desde evento API
