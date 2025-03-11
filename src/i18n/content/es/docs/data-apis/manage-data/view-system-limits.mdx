---
title: Comprender los límites de datos de New Relic
tags:
  - Ingest and manage data
  - Manage data
freshnessValidatedDate: never
translationType: machine
---

Para garantizar que nuestros sistemas estén siempre activos y listos para brindarle asistencia, y para evitar un uso no deseado, ponemos [límites a la cantidad de datos](/docs/licenses/license-information/general-usage-licenses/new-relic-data-usage-limits-policies) que puede enviar, consultar y almacenar.

## Limita UI [#limits-ui]

Para encontrar la UI usuario de límites: en el [menú de usuario](/docs/accounts/accounts-billing/general-account-settings/intro-account-settings), haga clic en <DNT>**Manage your data**</DNT> y haga clic en <DNT>**Limits**</DNT>.

Esta UI muestra información sobre qué tan cerca está una cuenta de alcanzar los límites de tasa (tanto los límites relacionados con la ingesta de datos como los límites de consulta) y la incidencia de esos límites. Los datos que se muestran aquí se generan a partir de:

* [Uso de recursos métrica](/docs/data-apis/manage-data/query-limits/#limit-metrics)
* Limitar incidente reportado en [`NrIntegrationError` evento](/docs/data-apis/manage-data/nrintegrationerror)

<img
  title="Data limits UI screenshot"
  alt="Data limits UI screenshot"
  src="/images/accounts_screenshot-crop_data-limits-ui.webp"
/>

<figcaption>
  La UI de límites muestra información relacionada con la tasa de ingesta de datos y la tasa de consulta de una cuenta, y la incidencia de los límites.
</figcaption>

Qué significa el código de colores en la tabla de incidentes:

* Rojo: superó un límite
* Amarillo: 80-100% de un límite
* Verde: por debajo del 80%
* Gris: límites que no tienen uso o incidente reportado para el rango de tiempo dado

Algunos consejos sobre el uso de la UI de límites:

* Para obtener más detalles sobre una entrada de la tabla, intente hacer clic en ella. Algunas entradas tienen más detalles, incluida la consulta NRQL asociada.
* Cuando selecciona un rango de tiempo superior a seis horas, el gráfico utiliza valores promedio, lo que puede suavizar los picos. Esta es la razón por la que es posible que vea el mensaje "Para el período de tiempo elegido, el valor 'Uso del límite máximo' representa el promedio de sus límites de uso". Para ver resultados más precisos, utilice un rango de tiempo inferior a seis horas.
* Es posible que el uso de un recurso supere un límite sin generar un incidente. Por ejemplo, los eventos de límite de consulta se generan para un nivel de un minuto, pero los incidentes solo se generan por exceder continuamente ese límite en el nivel de 5 minutos.

Si desea obtener más detalles de los que proporciona la UI , consulte [consulte el uso de sus recursos](/docs/data-apis/manage-data/query-limits).

## Respuestas para limitar el incidente [#incidents]

Los límites se aplican por cuenta (no por [organización](/docs/glossary/glossary/#organization)). Es posible que alcance un límite si comienza a monitorear una nueva aplicación de alto tráfico o si tiene un pico repentino de datos. Cuando alcanzas un límite, New Relic responde según el tipo de datos y el límite alcanzado. Algunos ejemplos de respuestas:

* Establecemos un límite en la cantidad de solicitudes ingeridas por minuto (RPM) por tipo de datos. Cuando se alcanza este límite, dejamos de aceptar datos y devolvemos un código de estado 429 durante el minuto.
* Para las consultas, imponemos límites a la cantidad de consultas por minuto y a la cantidad de registros inspeccionados (consulte [Límites de tarifas de consultas de NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries)).
* Para las métricas, ponemos un límite en la cantidad de series temporales únicas (cardinalidad) por cuenta y por métrica. Cuando se alcanza este límite, los datos agregados se desactivan durante el resto del día UTC.

Por cada incidente de límite importante, New Relic crea un [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)para esa cuenta, que tiene estos atributos relacionados con el límite:

<table>
  <thead>
    <tr>
      <td style={{ width: "210px" }}>
        <DNT>
          **Attribute**
        </DNT>
      </td>

      <td>
        <DNT>
          **Description**
        </DNT>
      </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        categoría
      </td>

      <td>
        `RateLimit` o `ApiLimit`. La categoría `RateLimit` se utiliza para límites basados en una unidad de tiempo, como la cantidad de solicitudes ingeridas por minuto. El `ApiLimit` se usa para límites constantes, como el número de atributos en un registro.
      </td>
    </tr>

    <tr>
      <td>
        limitName
      </td>

      <td>
        El nombre del límite.
      </td>
    </tr>

    <tr>
      <td>
        mensaje
      </td>

      <td>
        Describe el límite y el impacto.
      </td>
    </tr>

    <tr>
      <td>
        limitValue
      </td>

      <td>
        El límite alcanzado.
      </td>
    </tr>
  </tbody>
</table>

## Límites a nivel de cuenta [#all_products]

Esta tabla incluye límites máximos generales que se aplican en todas las cuentas de New Relic. Las herramientas específicas de New Relic, como [agente e integración](#other-limits), tienen sus propios límites y configuración, y esos límites a veces serán más bajos que estos límites máximos teóricos a nivel de cuenta.

<table>
  <thead>
    <tr>
      <th>
        Condición limitada
      </th>

      <th style={{ width: "420px" }}>
        Límite
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tasa de ingesta de registros\* de NRDB
      </td>

      <td>
        55 millones por cuenta por minuto
      </td>
    </tr>

    <tr>
      <td>
        Registros NRDB máximos\* ingeridos por llamada API
      </td>

      <td>
        1MB (10^6 bytes)
      </td>
    </tr>

    <tr>
      <td>
        Tamaño máximo del valor del atributo
      </td>

      <td>
        1KB (10^3 bytes)
      </td>
    </tr>

    <tr>
      <td>
        Longitud máxima del nombre del atributo
      </td>

      <td>
        255 caracteres
      </td>
    </tr>

    <tr>
      <td>
        Longitud máxima del valor del atributo
      </td>

      <td>
        Métrica, traza y evento API: 4096 caracteres. API log : 4094 caracteres.
      </td>
    </tr>

    <tr>
      <td>
        Tamaño máximo de carga útil
      </td>

      <td>
        1MB (10^6 bytes)
      </td>
    </tr>

    <tr>
      <td>
        Atributo total máximo por tipo de datos (incluido el atributo predeterminado)
      </td>

      <td>
        254 (menos para algunas herramientas; por ejemplo, 64 para agente)
      </td>
    </tr>

    <tr>
      <td>
        Número de [tipos de datos](/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types) personalizados únicos por cuenta por [namespace](/docs/data-apis/manage-data/manage-data-retention) por día
      </td>

      <td>
        250 (principalmente un límite para [eventos personalizados](/docs/insights/insights-data-sources/custom-data/report-custom-event-data))
      </td>
    </tr>

    <tr>
      <td>
        Límites de APM
      </td>

      <td>
        * Instancia de agente: 50K por cuenta
        * Instancia de agente por aplicación: 10K
      </td>
    </tr>

    <tr>
      <td>
        Browser: número de páginas vistas
      </td>

      <td>
        1 millón por minuto por aplicación
      </td>
    </tr>

    <tr>
      <td>
        Tasa de [intervalo de tiempo de datos métricos](/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types#timeslice-data) (utilizado por APM, browser, <InlinePopover type="mobile"/>)
      </td>

      <td>
        * Ingesta: 2 millones por minuto
        * Tasa de nombres: 4 millones por minuto por cuenta
        * Número por aplicación de monitor: 300K
      </td>
    </tr>

    <tr>
      <td>
        rastreo distribuido
      </td>

      <td>
        Ver [límites de la traza](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#trace-origin-sampling).
      </td>
    </tr>

    <tr>
      <td>
        Agente de infraestructura, integracion
      </td>

      <td>
        * Número bruto de contenedores de monitores nuevos: 5.000 por hora por cuenta
        * Número bruto de nuevas entidades de monitores de integración en la nube (AWS, Azure, GCP): 30K por hora, por cuenta
        * AWS Metric Streams : solicitudes de Kinesis Data Firehose por minuto: 50
      </td>
    </tr>

    <tr>
      <td>
        Monitoreo de móviles: número de accidentes reportados
      </td>

      <td>
        10k por hora
      </td>
    </tr>

    <tr>
      <td>
        Monitor sintético
      </td>

      <td>
        Ver [límites de Sintético](/docs/synthetics/synthetic-monitoring/using-monitors/monitor-limits).
      </td>
    </tr>

    <tr>
      <td>
        Límites de consulta
      </td>

      <td>
        Ver [límites de consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries)
      </td>
    </tr>

    <tr>
      <td>
        Límites de consulta de alerta
      </td>

      <td>
        Ver [reglas y límites de alertas](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/rules-limits-alerts#query-limit)
      </td>
    </tr>
  </tbody>
</table>

\* Los registros NRDB se refieren a registros de base de datos para nuestros [tipos de datos principales](/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types), que incluyen datos de eventos, métricas (dimensionales), de registro y de rastreo distribuido (span), todos almacenados en la [base de datos de New Relic](/docs/telemetry-data-platform/ingest-manage-data/manage-data/manage-your-data) (NRDB). Esto **no** incluye [datos de intervalo de tiempo de métrica](/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types#timeslice-data).

## Límites de API de ingesta de datos [#data-ingest-limits]

Nuestras API de ingesta tienen límites adicionales que pueden anular los [límites más generales a nivel de cuenta](#all_products). Tenga en cuenta que estos límites también se aplican a nuestras herramientas que utilizan estas API.

* [métrica API](/docs/telemetry-data-platform/get-data/apis/metric-api-limits-restricted-attributes) (dimensional métrica)
* [API de eventos](/docs/telemetry-data-platform/ingest-manage-data/ingest-apis/introduction-event-api)
* [API log](/docs/logs/log-management/log-api/introduction-log-api)
* [Traza API](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits)

## Límites de la API de NerdGraph [#nerdgraph-limits]

Consulta [los límites de uso de NerdGraph](/docs/apis/nerdgraph/nerdgraph-usage-limits).

## Encontrar otros límites de agentes y de integración [#other-limits]

Para encontrar límites para nuestros otros agentes e integración, que anularán [límites más generales a nivel de cuenta](#all_products), consulte los documentos de esas herramientas: puede [buscar nuestros inicios rápidos aquí](https://newrelic.com/instant-observability/). Algunos límites de informes predeterminados se encuentran en los documentos de configuración de estas herramientas.
