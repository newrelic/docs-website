---
title: Introducción al evento personalizado y atributo
metaDescription: An overview of the options to send custom events and attributes to New Relic.
freshnessValidatedDate: never
translationType: machine
---

Una de las formas de reportar [datos personalizados](/docs/data-apis/custom-data/intro-custom-data) a New Relic es usando evento personalizado y/o atributo personalizado.

## Requisitos [#requirements]

Para conocer los requisitos y las mejores prácticas de formato de eventos y atributos, consulte nuestros [documentos sobre requisitos y límites de datos](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data).

## Evite los límites de tarifas [#rate-limits]

Informar una gran cantidad de eventos personalizados y/o atributos puede causar un rendimiento degradado de la consulta. También puede resultar en acercarse o superar los límites de velocidad de recopilación de datos. Para un rendimiento óptimo, primero piense qué datos desea analizar y luego cree solo el evento y/o atributo necesario para cumplir con estos objetivos específicos.

Tenga en cuenta los siguientes requisitos de datos y suscripción para insertar y acceder a datos personalizados:

* Asegúrese de seguir [los límites y requisitos](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data) en torno a los tipos de datos de eventos/atributos, la sintaxis de nombres y el tamaño.
* La cantidad de datos a los que tiene acceso a lo largo del tiempo depende de su [política de retención de datos](/docs/accounts/original-accounts-billing/original-data-retention/event-data-retention-original-pricing-plan).

## Casos de uso de ejemplo [#examples]

Dos soluciones populares para informar datos personalizados son informar evento personalizado y atributo personalizado. Hay varias formas de lograr esto, dependiendo de su implementación y herramientas de New Relic, y entraremos en más detalles sobre esto más adelante en este documento. Pero primero, aquí hay algunos casos de uso comunes que explican por qué usaría evento personalizado o atributo personalizado.

### Casos de uso para atributo personalizado

Los atributos personalizados se utilizan a menudo para agregar un contexto operativo y comercial importante a un evento existente. Por ejemplo, para New Relic <InlinePopover type="browser"/>, puede crear un atributo personalizado para realizar un seguimiento del nombre de usuario asociado con una solicitud lenta o fallida. Esto le permitiría crear consultas y gráficos personalizados para analizar esos datos.

El atributo personalizado es una buena opción cuando usas una solución New Relic (como APM, browser, <InlinePopover type="mobile"/>, infraestructura y monitoreo sintético) y deseas decorar un evento existente con tus propios metadatos.

### Casos de uso para eventos personalizados

Mientras que agregar un atributo personalizado agrega metadatos a un evento existente, un evento personalizado crea un tipo de evento completamente nuevo. Cree un evento personalizado para definir, visualizar y recibir alertas sobre datos adicionales, tal como lo haría con cualquier dato que proporcionemos de nuestro agente principal. El evento personalizado se puede insertar a través de nuestra API del agente o directamente a través de nuestra API de eventos.

Evento data es uno de los cuatro [tipos de datos](/docs/data-apis/understand-data/new-relic-data-types/#event-data) principales de New Relic. Recomendamos leer esa definición para comprender qué queremos decir con "evento" y por qué ese tipo de datos se utiliza más para informar tipos específicos de actividad.

Los casos de uso de evento personalizado varían ampliamente. Básicamente se utilizan para cualquier tipo de actividad que una organización considere importante y que aún no esté siendo monitoreada. Por ejemplo:

* Un evento puede representar una actividad que involucra múltiples acciones, como que un cliente compre una determinada combinación de productos.
* Un evento puede registrar la actividad de respaldo. Por ejemplo, puede configurar informes de eventos que representen copias de seguridad de producción de la instancia SOLR en una tabla de eventos, con una marca de timestamp de cuándo ocurrió, qué clúster y la duración.

## Utilice evento personalizado [#use-events]

Después [de crear un evento personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/#enabling-custom), puede usarlo en una consulta NRQL estándar de la misma manera que usaría [cualquier otro evento](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions).

```sql
SELECT *
FROM YourCustomEvent
```

También puedes usar evento personalizado con el [explorador de eventos y métrica](/docs/query-your-data/explore-query-data/browse-data/introduction-data-explorer/) buscando tu evento personalizado en la interfaz y seleccionándolos para escribir tu consulta.

## Enviar evento personalizado y atributo [#ways]

Los métodos para enviar eventos personalizados y atributos incluyen:

<table>
  <thead>
    <tr>
      <th width="200px">
        Fuente
      </th>

      <th>
        Cómo enviar datos personalizados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [Agente APM](/docs/apm/new-relic-apm/getting-started/introduction-apm)
      </td>

      <td>
        Utilice <InlinePopover type="apm"/>API del agente para [informar evento personalizado y atributo personalizado](/docs/data-apis/custom-data/custom-events/apm-report-custom-events-attributes/).
      </td>
    </tr>

    <tr>
      <td>
        [Monitoreo de agente del navegador](/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring)
      </td>

      <td>
        Agregue un atributo personalizado al evento `PageView` mediante la llamada API del navegador [`setCustomAttribute`](/docs/browser/new-relic-browser/browser-agent-spa-api/setcustomattribute-browser-agent-api). Envía [`PageAction` evento y atributo](/docs/data-apis/custom-data/custom-events/report-browser-monitoring-custom-events-attributes) a través de la API del navegador.

        Reenviar [atributo personalizado del agente APM](/docs/data-apis/custom-data/custom-events/report-browser-monitoring-custom-events-attributes/) al evento `PageView` .
      </td>
    </tr>

    <tr>
      <td>
        [API de eventos](/docs/data-apis/ingest-apis/introduction-event-api)
      </td>

      <td>
        Para informar un evento personalizado no asociado con otra característica de New Relic, utilice la [API de eventos](/docs/data-apis/ingest-apis/introduction-event-api).
      </td>
    </tr>

    <tr>
      <td>
        [Agente de monitoreo de infraestructura](/docs/infrastructure/new-relic-infrastructure/data-instrumentation/default-infrastructure-attributes-events)
      </td>

      <td>
        [Agregue un atributo personalizado](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data) al evento de infraestructura predeterminado.

        Utilice la [herramienta de integración Flex](/docs/infrastructure/host-integrations/host-integrations-list/flex-integration-tool-build-your-own-integration/) para informar los datos de su propio evento personalizado.
      </td>
    </tr>

    <tr>
      <td>
        [Agente de monitoreo de móviles](/docs/mobile-monitoring/new-relic-mobile/get-started/introduction-mobile-monitoring)
      </td>

      <td>
        Utilice la API del agente móvil para [enviar eventos personalizados y atributos](/docs/data-apis/custom-data/custom-events/report-mobile-monitoring-custom-events-attributes).
      </td>
    </tr>

    <tr>
      <td>
        [Monitoreo sintetico](/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring)
      </td>

      <td>
        [Agregue un atributo personalizado](/docs/synthetics/synthetic-monitoring/scripting-monitors/add-custom-attributes-synthetic-monitoring-data) al evento `SyntheticCheck` mediante las herramientas `$util.insights` .
      </td>
    </tr>
  </tbody>
</table>

Para conocer otras opciones para informar datos personalizados, consulte [Datos personalizados](/docs/data-apis/custom-data/intro-custom-data).
