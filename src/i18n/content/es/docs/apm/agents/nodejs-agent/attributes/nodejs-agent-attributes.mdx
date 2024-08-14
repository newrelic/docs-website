---
title: Atributo del agente Node.js
tags:
  - Agents
  - Nodejs agent
  - Attributes
metaDescription: 'New Relic Node.js agent: How to include and exclude specific attributes for events and transactions, including their properties and rules.'
freshnessValidatedDate: never
translationType: machine
---

Este documento describe el [atributo](/docs/agents/manage-apm-agents/agent-data/agent-attributes) del agente New Relic Node.js, detalla cómo habilitar o deshabilitar el atributo y describe las reglas que sigue el agente para determinar qué atributo incluir o excluir para un [destino](/docs/agents/manage-apm-agents/agent-data/agent-attributes#destinations).

<Callout variant="tip">
  Esta configuración de atributos se aplica a la versión 2.7.1 o superior del agente Node.js. Si utiliza una versión anterior del agente, consulte [Actualizar la configuración de atributos legacy ](/docs/agents/nodejs-agent/installation-configuration/upgrade-nodejs-agent).
</Callout>

## Buscar y utilizar atributo [#location]

[El atributo](/docs/agents/manage-apm-agents/agent-data/agent-attributes) New Relic son pares de valores principales que contienen información que determina las propiedades de los datos de [eventos](/docs/accounts-partnerships/getting-started-new-relic/glossary#event) y [transacciones](/docs/accounts-partnerships/getting-started-new-relic/glossary#transaction) . El atributo puede ayudarle a obtener mayor información valiosa en su aplicación y anotar los datos en [New Relic](/docs/insights/use-insights-ui/getting-started/introduction-new-relic-insights).

El atributo (tanto predeterminado como [personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes)) se puede encontrar en:

* APM [traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) y [análisis de errores](/docs/apm/applications-menu/error-analytics/introduction-error-analytics)
* [Evento APM](/docs/insights/explore-data/attributes/apm-default-attributes-insights)
* [Evento browser](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browser-attributes-table)

Puedes personalizar exactamente qué atributo se enviará a cada uno de estos destinos.

<Callout variant="tip">
  A partir de la versión 6.10.0 del agente Node.js, cuando habilita rastreo distribuido y/o Infinite Tracing, la información del evento `Transaction` se aplica al `Span` actualmente disponible de la transacción. Debido a esto, es posible que desees aplicar la configuración de atributo para `Transaction` evento a `Span` evento o aplicarlos como configuración de atributo global.
</Callout>

## Atributo específico de Node.js [#attributes]

Además del [atributo APM predeterminado](/docs/insights/new-relic-insights/decorating-events/apm-default-attributes-insights#transaction-event), el agente de Node.js recopila atributos de estas fuentes:

<CollapserGroup>
  <Collapser
    id="httpResponseCode"
    title="Códigos de respuesta HTTP"
  >
    El código de estado de respuesta para una solicitud web. La clave para este atributo es `httpResponseCode`.

    La configuración predeterminada para cada destino es:

    * Traza de la transacción: Habilitado

    * Análisis de errores: habilitado

    * Evento APM: Habilitado

    * Evento browser : Deshabilitado

      <DNT>**Note:**</DNT> El atributo `httpResponseCode` (valor de cadena) se elimina a partir de la versión 7.0.0 del agente. En su lugar, se debe utilizar `http.statusCode` (valor entero).
  </Collapser>

  <Collapser
    id="httpResponseMessage"
    title="Mensajes de respuesta HTTP"
  >
    El mensaje de estado de respuesta, si está presente para una solicitud web. La clave para este atributo es `httpResponseMessage`.

    La configuración predeterminada para cada destino es:

    * Traza de la transacción: Habilitado

    * Análisis de errores: habilitado

    * Evento APM: Habilitado

    * Evento browser : Deshabilitado

      <DNT>**Note:**</DNT> El atributo `httpResponseMessage` (valor de cadena) se elimina a partir de la versión 7.0.0 del agente. En su lugar, se debe utilizar `http.statusText` (valor de cadena).
  </Collapser>

  <Collapser
    id="NRaddCustomParameter"
    title="Atributo personalizado"
  >
    Atributo agregado a una llamada [`addCustomAttribute()`](https://newrelic.github.io/node-newrelic/API.html#addCustomAttribute) a la API del agente de Node.js. El nombre de clave para este atributo depende de lo que especifique cuando llame al método.

    La configuración predeterminada para cada destino es:

    * Traza de la transacción: Habilitado

    * Análisis de errores: habilitado

    * Evento APM: Habilitado

    * Evento browser : Deshabilitado

      <Callout variant="important">
        Antes de crear un atributo personalizado, revise la lista de [términos reservados utilizados por NRQL](/docs/insights/insights-data-sources/custom-data/insights-custom-data-requirements-limits#reserved-words) de New Relic. De lo contrario, pueden producirse resultados inesperados.
      </Callout>
  </Collapser>

  <Collapser
    id="NRaddnoticeError"
    title={<><InlineCode>noticeError()</InlineCode> Llamada API</>}
  >
    Atributo agregado a una llamada [`noticeError()`](https://newrelic.github.io/node-newrelic/API.html#noticeError) en la API del agente de Node.js. El nombre de clave para este atributo depende de lo que especifique cuando llame al método.

    La configuración predeterminada para cada destino es:

    * Traza de la transacción: No disponible
    * Análisis de errores: habilitado
    * Evento APM: No disponible
    * Evento browser : no disponible
  </Collapser>

  <Collapser
    id="requestHeaders"
    title="Encabezados de solicitud y respuesta"
  >
    El agente de Node.js puede capturar encabezados de respuesta y solicitud como atributo. De forma predeterminada, el agente de Node.js recopilará todos los encabezados de solicitud que no estén excluidos.

    Encabezados de solicitud HTTP excluidos de forma predeterminada:

    * `request.headers.cookie`

    * `request.headers.authorization`

    * `request.headers.proxy-authorization`

    * `request.headers.set-cookie*`

    * `request.headers.x-*`

      Encabezado de respuesta capturado: `response.headers.content-type`

      Puede desactivar la recopilación de todos los encabezados configurando `allow_all_headers` en `false` en su archivo `newrelic.js` .

      La configuración predeterminada para cada destino es:

    * Traza de la transacción: Habilitado

    * Análisis de errores: habilitado

    * Evento APM: Habilitado

    * Evento browser : Deshabilitado
  </Collapser>

  <Collapser
    id="requestparams"
    title="Solicitar parámetro"
  >
    Solicitar parámetro de la transacción. El agente Node.js no captura el parámetro de forma predeterminada. Todos los parámetros GET se pueden capturar si la entrada `request.parameters.*` se agrega a [`attributes.include`](#cfg-attributes-include) o se puede agregar un parámetro de solicitud específico a la lista, por ejemplo, `request.parameters.foo` o `request.parameters.bar`. Para capturar el parámetro POST, utilice la llamada API del agente [`addCustomAttribute()`](https://newrelic.github.io/node-newrelic/API.html#addCustomAttribute) Node.js.
  </Collapser>
</CollapserGroup>

## Configurar atributo

Puede personalizar qué tipos de atributos envía el agente de Node.js a cada destino. Esto es más común por razones de seguridad, cuando tienes cierto atributo sensible que no quieres que se informe a New Relic.

Utilice las siguientes propiedades de configuración junto con las [reglas de atributo](#attruls) para habilitar o deshabilitar el atributo:

<CollapserGroup>
  <Collapser
    id="cfg-attributes-enabled"
    title="allow_all_headers"
  >
    Deshabilitado por defecto. Establezca esto en `true` para que el agente solo recopile todos los encabezados, excepto aquellos filtrados por las reglas `exclude` .
  </Collapser>

  <Collapser
    id="cfg-attributes-include-enabled"
    title="attributes.include_enabled"
  >
    Habilitado de forma predeterminada. Establezca esto en `false` para deshabilitar la matriz [`attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_include) .
  </Collapser>

  <Collapser
    id="cfg-attributes-enabled"
    title={<>destination.attributes.enabled</>}
  >
    <table>
      <thead>
        <tr>
          <th>
            Destino
          </th>

          <th style={{ width: "400px" }}>
            Opción de configuración
          </th>

          <th>
            Por defecto
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Todo
          </td>

          <td>
            [`attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_enabled)
          </td>

          <td>
            Verdadero
          </td>
        </tr>

        <tr>
          <td>
            Traza de la transaccion
          </td>

          <td>
            [`transaction_tracer.attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tracer_enabled)
          </td>

          <td>
            Verdadero
          </td>
        </tr>

        <tr>
          <td>
            Análisis de errores
          </td>

          <td>
            [`error_collector.attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#error_collector)
          </td>

          <td>
            Verdadero
          </td>
        </tr>

        <tr>
          <td>
            Evento APM
          </td>

          <td>
            [`transaction_events.attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_events_enabled)
          </td>

          <td>
            Verdadero
          </td>
        </tr>

        <tr>
          <td>
            Evento browser
          </td>

          <td>
            [`browser_monitoring.attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser)
          </td>

          <td>
            FALSO
          </td>
        </tr>
      </tbody>
    </table>

    Habilita o deshabilita el atributo por completo. Si establece un destino en `false`, no se enviará ningún atributo a ese destino independientemente de su configuración de inclusión/exclusión. Si un destino está habilitado, todos los atributos del usuario se envían a ese destino de forma predeterminada.
  </Collapser>

  <Collapser
    id="cfg-attributes-include"
    title={<>destination.attributes.include</>}
  >
    <table>
      <thead>
        <tr>
          <th>
            Destino
          </th>

          <th style={{ width: "400px" }}>
            Opción de configuración
          </th>

          <th>
            Por defecto
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Todo
          </td>

          <td>
            [`attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_include)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Traza de la transaccion
          </td>

          <td>
            [`transaction_tracer.attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#hide-attributes-include)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Análisis de errores
          </td>

          <td>
            [`error_collector.attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#error_attributes_include)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Evento APM
          </td>

          <td>
            [`transaction_events.attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx-attributes-include)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Evento browser
          </td>

          <td>
            [`browser_monitoring.attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser-debug-include)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>
      </tbody>
    </table>

    Especifique las claves de atributos particulares que desea que el agente informe a New Relic. Para todos los destinos, esta es una lista de cadenas que está vacía de forma predeterminada. Las propiedades `.exclude` anulan las propiedades `.include` . Para deshabilitar todos los valores `.include` , establezca [`attributes.include_enabled`](#cfg-attributes-include-enabled) en `false`.
  </Collapser>

  <Collapser
    id="cfg-error-attributes-enabled"
    title={<>destination.attributes.exclude</>}
  >
    <table>
      <thead>
        <tr>
          <th>
            Destino
          </th>

          <th style={{ width: "400px" }}>
            Opción de configuración
          </th>

          <th>
            Por defecto
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Todo
          </td>

          <td>
            [`attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_exclude)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Traza de la transaccion
          </td>

          <td>
            [`transaction_tracer.attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#hide-attributes-exclude)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Análisis de errores
          </td>

          <td>
            [`error_collector.attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#error_attributes_exclude)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Evento APM
          </td>

          <td>
            [`transaction_events.attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx-attributes-exclude)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Evento browser
          </td>

          <td>
            [`browser_monitoring.attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser-debug-exclude)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>
      </tbody>
    </table>

    Especifique claves de atributos particulares que no desea que el agente informe a New Relic. Para todos los destinos, esta es una lista de cadenas que está vacía de forma predeterminada. Las propiedades `.exclude` anulan las propiedades `.include` .
  </Collapser>
</CollapserGroup>

## Reglas de atributos [#attruls]

El agente de Node.js sigue estas reglas al determinar qué atributo incluir o excluir para un destino:

<CollapserGroup>
  <Collapser
    id="rule-disable-overrides-all"
    title="Establecer atributo.enabled en false anula todas las demás configuraciones."
  >
    Si establece la propiedad principal [`attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_enabled) en `false`, el agente no informa ningún atributo en absoluto.

    <CollapserGroup>
      <Collapser
        id="disable-all-example"
        title="Deshabilitar todos los atributos"
      >
        Configuración del agente:

        * `attributes.enabled: false`

        * `attributes.include: request.parameters.*`

        * `error_collector.attributes.enabled: true`

          Teclas de entrada:

        * `foo`

        * `bar`

        * `request.parameters.foo`

        * `request.parameters.bar`

          Salida del agente:

        * Traza de la transacción: Sin atributo

        * Análisis de errores: Sin atributo

        * Evento APM: Sin atributo

        * Evento browser : Sin atributo
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-enable-overrides-incl-excl"
    title="Establecer un destino para incluir/excluir anulaciones falsas."
  >
    Cuando configura [habilitado](#cfg-attributes-enabled) en `false` para un destino, el agente ignora su configuración de inclusión/exclusión y no informa ningún atributo para ese destino.

    <CollapserGroup>
      <Collapser
        id="example-disabling-destination"
        title="Deshabilitar un destino"
      >
        Configuración del agente:

        * `transaction_tracer.attributes.enabled: false`

        * `attributes.include: one, two*`

        * `transaction_tracer.attributes.include: three, four`

          Teclas de entrada:

        * `one`

        * `two`

        * `three`

        * `four`

          Salida del agente:

        * Traza de la transacción: Sin atributo

        * Análisis de errores: `one`, `two`

        * Evento APM: `one`, `two`

        * Evento browser : Sin atributo
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-exclude-overrides-include"
    title="Excluir anulaciones incluyen."
  >
    Las propiedades `.exclude` anulan las propiedades `.include` .

    <CollapserGroup>
      <Collapser
        id="example-exclude-overrides"
        title="Conflicto entre configuraciones de inclusión y exclusión"
      >
        Configuración del agente:

        * `attributes.enabled: true`

        * `attributes.include: foo, myCustomAtt`

        * `attributes.exclude: password, myCustomAtt`

          Teclas de entrada:

        * `foo`

        * `myCustomAtt`

        * `password`

          Salida del agente:

        * Traza de la transacción: `foo`

        * Análisis de errores: `foo`

        * Evento APM: `foo`

        * Evento browser : `foo`
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-specific-wins"
    title="Tienen prioridad normas más específicas."
  >
    Si varios atributos de inclusión o exclusión afectan a la misma clave, la configuración más específica tendrá prioridad.

    <CollapserGroup>
      <Collapser
        id="example-most-specific"
        title="Conflictos con configuraciones específicas"
      >
        Configuración del agente:

        * `attributes.enabled: true`

        * `attributes.include: foo, myCustomAtt`

        * `attributes.exclude: password, myCustomAtt`

        * `browser_monitoring.attributes.enabled: true`

          Teclas de entrada:

        * `food`

        * `food.bread`

        * `food.fruit.banana`

        * `food.fruit.apple`

          Salida del agente:

        * Traza de la transacción: `food.fruit.apple`

        * Análisis de errores: `food.fruit.banana`, `food.fruit.apple`

        * Evento APM: `food.fruit.banana`, `food.fruit.apple`

        * Evento browser : `food.fruit.banana`, `food.fruit.apple`
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-keys-case-sensitive"
    title="Las claves distinguen entre mayúsculas y minúsculas."
  >
    Las claves especificadas en las propiedades `.include` y `.exclude` distinguen entre mayúsculas y minúsculas.

    <CollapserGroup>
      <Collapser
        id="example-case-sensitive"
        title="Las claves no coinciden con el caso especificado"
      >
        Configuración del agente:

        * `attributes.enabled: true`

        * `attributes.exclude: password, PaSsWoRd`

          Teclas de entrada:

        * `password`

        * `Password`

        * `PASSWORD`

        * `PaSsWoRd`

        * `PassWORD`

          Salida del agente:

        * Traza de la transacción: `Password`, `PASSWORD`, `PassWORD`

        * Análisis de errores: `Password`, `PASSWORD`, `PassWORD`

        * Evento APM: `Password`, `PASSWORD`, `PassWORD`

        * Evento browser : `Password`, `PASSWORD`, `PassWORD`
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-star-wildcard"
    title="Utilice un asterisco para los comodines."
  >
    Puede utilizar un asterisco `*` al final de una clave como comodín. Esto coincidirá con un conjunto de atributos con el mismo prefijo.

    <CollapserGroup>
      <Collapser
        id="example-asterisk-wildcard"
        title="El comodín coincide con varias claves de entrada"
      >
        Configuración del agente:

        * `attributes.enabled: true`

        * `attributes.include: custom*`

        * `attributes.exclude: request.parameters.*`

          Teclas de entrada:

        * `custom`

        * `custom.key1`

        * `custom.key2`

        * `request.parameters.`

        * `request.parameters.foo`

        * `request.parameters.bar`

          Salida del agente:

        * Traza de la transacción: `custom`, `custom.key1`, `custom.key2`

        * Análisis de errores: `custom`, `custom.key1`, `custom.key2`

        * Evento APM: `custom`, `custom.key1`, `custom.key2`

        * Evento browser : `custom`, `custom.key1`, `custom.key2`
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>
