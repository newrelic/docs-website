---
title: 'APM: Reporte evento personalizado y atributo'
tags:
  - Event data sources
  - Custom events
metaDescription: How to report APM custom events and attributes in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Si tiene [APM](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm), puede informar [datos de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data) personalizados. Luego podrá [consultar](/docs/using-new-relic/data/understand-data/query-new-relic-data) y visualizar sus datos en New Relic.

## Consideraciones de datos [#considerations]

El agente New Relic envía [datos de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data) a New Relic como parte del ciclo de recolección normal cada cinco segundos para las versiones de agente que admiten [transmisión en tiempo real](/docs/agents/manage-apm-agents/agent-data/real-time-streaming).

Enviar muchos eventos puede aumentar la sobrecarga de memoria del agente. New Relic impone un límite superior de 833 eventos personalizados cada 5 segundos. Además, no se registrarán publicaciones con un tamaño superior a 1 MB (10^6 bytes), independientemente del límite del evento personalizado.

También puedes enviar eventos personalizados usando la [API de eventos](/docs/insights/insights-data-sources/custom-data/introduction-event-api) (sin necesidad de APM). Sin embargo, tenga en cuenta que el evento personalizado enviado con las API del agente no es compatible con [el modo de alta seguridad](/docs/accounts-partnerships/accounts/security/high-security).

<Callout variant="tip">
  Para obtener más información, consulte el tutorial de New Relic University [Cómo agregar datos personalizados con la API del agente APM](https://newrelic.wistia.com/medias/uwjlnrk4nk). O vaya directamente al curso completo en línea [Datos personalizados con APM](https://learn.newrelic.com/custom-data-with-apm).
</Callout>

## Grabar evento personalizado y atributo [#steps]

Puede agregar su propio evento y [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) <InlinePopover type="apm"/>personalizado, que luego puede usar para [consultas y gráficos](/docs/using-new-relic/data/understand-data/query-new-relic-data). Esta es una de varias formas de [informar datos personalizados](/docs/insights/insights-data-sources/custom-data/send-custom-data-insights).

Para grabar un evento personalizado, sigue los procedimientos de tu agente de lenguaje de New Relic. Para agregar un atributo personalizado al evento APM, primero debe habilitarlos para su agente APM y luego realizar una llamada API para registrar el atributo. Siga los procedimientos de atributo personalizado específicos del agente.

Al crear su propio evento personalizado y atributo, siga los requisitos de datos para:

* [Límites de tamaño](/docs/telemetry-data-platform/custom-data/custom-events/data-requirements-limits-custom-event-data/#general)
* [Tipos de atributos](/docs/telemetry-data-platform/custom-data/custom-events/data-requirements-limits-custom-event-data/#general)
* [Palabras reservadas](/docs/telemetry-data-platform/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words)

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="go"
    title="Go"
  >
    Para agregar un evento personalizado al monitoreo de aplicaciones por parte del agente Go, use [`RecordCustomEvent`](/docs/agents/go-agent/features/create-custom-events-insights-go). Luego puede agregar [un atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes#go-att) para su aplicación Go.
  </Collapser>

  <Collapser
    className="freq-link"
    id="java-att"
    title="Java"
  >
    La colección de eventos personalizados está habilitada de forma predeterminada en agente de Java versión 3.13.0 o superior. Para enviar un evento personalizado, llame al [`recordCustomEvent`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Insights.html). Por ejemplo:

    ```java
    Map<String, Object> eventAttributes = new HashMap<String, Object>();
    NewRelic.getAgent().getInsights().recordCustomEvent("MyCustomEvent", eventAttributes);
    ```

    El primer argumento define el nombre de su tipo de evento y el segundo argumento es un mapa con el atributo para su evento personalizado. El atributo del evento debe ser cadenas o números. Asegúrese de limitar la cantidad de nombres de tipos de eventos únicos que crea y no genere estos nombres dinámicamente. Para conocer las restricciones sobre los nombres de tipos de eventos, consulte nuestra documentación sobre [límites y caracteres restringidos](/docs/telemetry-data-platform/custom-data/custom-events/data-requirements-limits-custom-event-data) y [palabras reservadas NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).

    Puede cambiar el número máximo de eventos registrados por el agente de Java mediante un parámetro de configuración en `newrelic.yml`.

    Especifique el número máximo de eventos para registrar por minuto como un número entero. Por ejemplo, si desea enviar menos eventos que los 10000 predeterminados:

    ```yml
    custom_insights_events:
      max_samples_stored: 5000
    ```

    Para desactivar completamente el evento personalizado, agregue lo siguiente a su `newrelic.yml`:

    ```yml
    custom_insights_events:
      enabled: false
    ```

    Luego puede agregar [un atributo personalizado](/docs/apm/other-features/attributes/collecting-custom-attributes#java-att) para su aplicación Java.

    Para versiones de agente de Java anteriores a 4.1.0, utilice la siguiente configuración YAML:

    ```yml
    custom_insights_events.enabled: true
    custom_insights_events.max_samples_stored: 5000
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="net-att"
    title=".NET"
  >
    La colección de eventos personalizados está habilitada de forma predeterminada en la versión 4.6.29.0 o superior del agente .NET. Para enviar un evento personalizado, simplemente llame al [`RecordCustomEvent()`](/docs/agents/net-agent/net-agent-api/recordcustomevent-net-agent). Por ejemplo:

    ```cs
    var eventAttributes = new Dictionary<String, Object>();
    NewRelic.Api.Agent.NewRelic.RecordCustomEvent("MyCustomEvent", eventAttributes);
    ```

    El primer argumento define el nombre de su tipo de evento y el segundo argumento es un `IEnumerable` con el atributo de su evento personalizado. Asegúrese de limitar la cantidad de nombres de tipos de eventos únicos que crea y no genere estos nombres dinámicamente. Para conocer las restricciones sobre los nombres de tipos de eventos, consulte nuestra documentación sobre [límites y caracteres restringidos](/docs/telemetry-data-platform/custom-data/custom-events/data-requirements-limits-custom-event-data) y [palabras reservadas NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).

    Luego puede agregar [un atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes#net-att) para su aplicación .NET.

    Puedes desactivar el evento personalizado por completo configurando [`customEvents.enabled`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#customevents-enabled) en `false` en `newrelic.config`.
  </Collapser>

  <Collapser
    className="freq-link"
    id="node-att"
    title="Node.js"
  >
    La colección de eventos personalizados está habilitada de forma predeterminada en la versión 1.15.0 o superior del agente Node.js. Para enviar un evento personalizado, simplemente llame a la API correspondiente. Por ejemplo:

    ```js
    recordCustomEvent(eventType, attributes)
    ```

    Utilice `recordCustomEvent()` para registrar una métrica basada en eventos, generalmente asociada con una duración particular. El `eventType` debe ser una cadena alfanumérica de menos de 255 caracteres. El atributo debe ser un objeto de pares clave y valor. Las claves deben tener menos de 255 caracteres y los valores deben ser cadenas, números o booleanos. Para conocer las restricciones sobre los nombres de tipos de eventos, consulte nuestra documentación sobre [límites y caracteres restringidos](/docs/telemetry-data-platform/custom-data/custom-events/data-requirements-limits-custom-event-data) y [palabras reservadas NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).

    Luego puede agregar [un atributo personalizado](/docs/apm/other-features/attributes/collecting-custom-attributes#nodejs-att) para su aplicación Node.js.

    Para deshabilitar completamente el evento personalizado, agregue `custom_insights_events.enabled: false` a `newrelic.js`.
  </Collapser>

  <Collapser
    className="freq-link"
    id="php-att"
    title="PHP"
  >
    La colección de eventos personalizados está habilitada de forma predeterminada en la versión 4.18 o superior del agente PHP. Para enviar un evento personalizado, simplemente llame a la función API correspondiente. Por ejemplo:

    ```php
    newrelic_record_custom_event("WidgetSale", array("color"=>"red", "weight"=>12.5));
    ```

    El primer argumento define el nombre de su tipo de evento y el segundo argumento es una matriz con el atributo para su evento personalizado. Asegúrese de limitar la cantidad de nombres de tipos de eventos únicos que crea y no genere estos nombres dinámicamente. Para conocer las restricciones sobre los nombres de tipos de eventos, consulte nuestra documentación sobre [límites y caracteres restringidos](/docs/telemetry-data-platform/custom-data/custom-events/data-requirements-limits-custom-event-data) y [palabras reservadas NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).

    De forma predeterminada, el número máximo de eventos personalizados registrados por minuto es 10.000. Esta configuración no se puede cambiar.

    Luego puede agregar [un atributo personalizado](/docs/apm/other-features/attributes/collecting-custom-attributes#php-att) para su aplicación PHP.

    Para deshabilitar completamente el evento personalizado, agregue `newrelic.custom_insights_events.enabled = false` a su `newrelic.ini` y reinicie el agente.
  </Collapser>

  <Collapser
    className="freq-link"
    id="python-att"
    title="Python"
  >
    La colección de eventos personalizados está habilitada de forma predeterminada en la versión 2.60.0.46 o superior del agente Python. Para enviar un evento personalizado, simplemente llame a la API correspondiente. Por ejemplo:

    ```python
    newrelic.agent.record_custom_event(event_type, params, application=None)
    ```

    El `event_type` define el nombre (o tipo) del evento personalizado. El atributo del evento personalizado debe pasarse como un diccionario mediante el argumento de palabra clave `params` . Asegúrese de limitar la cantidad de nombres de tipos de eventos únicos que crea y no genere estos nombres dinámicamente. Para conocer los límites y restricciones de `event_type` y `params`, consulte nuestra documentación sobre [límites, caracteres restringidos](/docs/telemetry-data-platform/custom-data/custom-events/apm-report-custom-events-attributes/) y [palabras reservadas.](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words)

    Si se llama fuera del contexto de una solicitud web de monitor o de una tarea en segundo plano, la llamada se ignorará a menos que se proporcione el argumento de palabra clave `application` y se proporcione un objeto de aplicación correspondiente a la aplicación en la que se debe registrar la excepción. Se puede obtener un objeto de aplicación adecuado utilizando la función `newrelic.agent.application()` .

    Luego puede agregar [un atributo personalizado](/docs/apm/other-features/attributes/collecting-custom-attributes#python-att) para su aplicación Python.

    Para deshabilitar completamente el evento personalizado, establezca [`custom_insights_events.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#custom_insights_events_enabled) en `False` en su archivo de configuración `newrelic.ini` .
  </Collapser>

  <Collapser
    className="freq-link"
    id="ruby-att"
    title="Ruby"
  >
    La colección de eventos personalizados está habilitada de forma predeterminada en la versión 3.9.8.273 o superior del agente Ruby. Para enviar un evento personalizado, simplemente llame a la API correspondiente. Por ejemplo:

    ```ruby
    ::NewRelic::Agent.record_custom_event('WidgetSale', color: 'red', weight: 12.5)
    ```

    El primer argumento define el nombre de su tipo de evento y el segundo argumento es un hash con el atributo de su evento personalizado. Asegúrese de limitar la cantidad de nombres de tipos de eventos únicos que crea y no genere estos nombres dinámicamente. Para conocer las restricciones sobre los nombres de tipos de eventos, consulte nuestra documentación sobre [límites y caracteres restringidos](/docs/telemetry-data-platform/custom-data/custom-events/data-requirements-limits-custom-event-data) y [palabras reservadas NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).

    Puede cambiar la cantidad máxima de eventos registrados por el agente Ruby a través de un parámetro de configuración en `newrelic.yml`:

    1. Agregue [`custom_insights_events.max_samples_stored:`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#custom_insights_events.max_samples_stored) a su archivo de configuración.

    2. Especifique el número máximo de eventos para registrar por minuto como un número entero. Por ejemplo, si desea poder enviar hasta 5000 eventos por minuto, agregue:

       ```yml
       custom_insights_events.max_samples_stored: 5000
       ```

    Luego puedes agregar [un atributo personalizado](/docs/apm/other-features/attributes/collecting-custom-attributes#ruby-att) para tu aplicación Ruby.

    Para deshabilitar completamente el evento personalizado, agregue `custom_insights_events.enabled: false` a `newrelic.yml`.
  </Collapser>
</CollapserGroup>

## Marca de tiempo

No puede especificar una timestamp en un evento que se recopila y registra a través del agente. El agente asignará automáticamente una timestamp al evento en función de cuándo se registran a través de la API.

## Límites y personajes restringidos [#limits]

Consulte [los requisitos de datos de evento personalizado](/docs/insights/insights-data-sources/custom-data/data-requirements) para conocer los límites de tamaño, los tipos de datos y los requisitos de sintaxis de nombres.

## Palabras reservadas [#keywords]

Antes de crear un atributo personalizado, revise la lista de [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) de New Relic. De lo contrario, pueden producirse resultados inesperados.
