---
title: Agente de atributo Java
tags:
  - Agents
  - Java agent
  - Attributes
metaDescription: 'How to include and exclude specific attributes for your New Relic Java agent, including properties and rules.'
freshnessValidatedDate: never
translationType: machine
---

[Los atributos](/docs/features/agent-attributes) New Relic son pares de valores principales que contienen información que determina las propiedades de un evento o transacción. Estos pares de valores principales pueden ayudarle a obtener mayor información valiosa en su aplicación y anotar los datos cuando [la consulte](/docs/query-your-data/explore-query-data/explore-data/introduction-querying-new-relic-data). También puede [reenviar automáticamente información del usuario a New Relic](#).

Tanto el atributo predeterminado como [el personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) son visibles en <InlinePopover type="apm"/>traza de la transacción, rastreo distribuido y análisis de errores; [Evento APM](/docs/insights/explore-data/attributes/apm-default-attributes-insights) y [evento del browser](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browser-attributes-table) en [el panel](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards). Puedes personalizar exactamente qué atributo se enviará a cada uno de estos destinos.

Este documento describe el atributo del agente de Java, detalla cómo habilitar o deshabilitar el atributo y describe las reglas que sigue el agente para determinar qué atributo incluir o excluir para un [destino](/docs/features/agent-attributes#destinations).

<Callout variant="tip">
  Esta configuración de atributos se aplica a la versión 3.7.0 o superior del agente de Java. Si utiliza una versión anterior del agente, consulte [Actualizar la configuración de atributos heredados](/docs/agents/java-agent/troubleshooting/update-legacy-attribute-configuration).
</Callout>

## Atributo específico de Java [#attributes]

Además del [atributo APM predeterminado](/docs/insights/new-relic-insights/decorating-events/apm-default-attributes-insights#transaction-defaults), el agente de Java recopila atributos de estas fuentes:

<CollapserGroup>
  <Collapser
    id="httpResponseCode"
    title="Códigos de respuesta HTTP"
  >
    El código de estado de respuesta para una solicitud web. La clave para este atributo es `http.statusCode`. Nota: Las versiones del agente inferiores a 8.0.0 usaban el atributo `httpResponseCode`.

    La configuración predeterminada para cada destino es:

    * Traza de la transacción: Habilitado
    * Análisis de errores: habilitado
    * Evento APM: Habilitado
    * Evento browser : Deshabilitado
  </Collapser>

  <Collapser
    id="httpResponseMessage"
    title="Mensajes de respuesta HTTP"
  >
    El mensaje de estado de respuesta, si está presente para una solicitud web. La clave para este atributo es `http.statusText`. Nota: Las versiones del agente inferiores a 8.0.0 usaban el atributo `httpResponseMessage`.

    La configuración predeterminada para cada destino es:

    * Traza de la transacción: Habilitado
    * Análisis de errores: habilitado
    * Evento APM: Habilitado
    * Evento browser : Deshabilitado
  </Collapser>

  <Collapser
    id="jvmThreadName"
    title="Hilos JVM"
  >
    El nombre del hilo. La clave para este atributo es `jvm.thread_name`.

    La configuración predeterminada para cada destino es:

    * Traza de la transacción: Habilitado
    * Análisis de errores: habilitado
    * Evento APM: Deshabilitado
    * Evento browser : no disponible
  </Collapser>

  <Collapser
    id="jvmLockThreadName"
    title="Hilos JVM bloqueados"
  >
    El nombre de un hilo bloqueado. La clave para este atributo es `jvm.lock_thread_name`.

    La configuración predeterminada para cada destino es:

    * Traza de la transacción: No disponible
    * Análisis de errores: habilitado
    * Evento APM: No disponible
    * Evento browser : no disponible
  </Collapser>

  <Collapser
    id="NRaddCustomParameter"
    title="Atributo de transacción personalizada"
  >
    Atributo agregado mediante una llamada al [NewRelic.addCustomParameter(...)](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#addCustomParameter-java.lang.String-java.lang.Number-) agente de Java API. El nombre de clave para este atributo depende de lo que especifique cuando llame al método.

    La configuración predeterminada para cada destino es:

    * Traza de la transacción: Habilitado

    * Análisis de errores: habilitado

    * Evento APM: Deshabilitado

    * Evento browser : Deshabilitado

      <Callout variant="important">
        Antes de crear un atributo personalizado, revise la lista de [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) de New Relic. De lo contrario, es posible que obtenga resultados inesperados.
      </Callout>
  </Collapser>

  <Collapser
    id="NRaddCustomParameter"
    title="Atributo de evento de intervalo personalizado"
  >
    Atributo agregado mediante una llamada al [NewRelic.getAgent().getTracedMethod().addCustomAttribute(...)](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/TracedMethod.html) agente de API de Java. El nombre de clave para este atributo depende de lo que especifique cuando llame al método.

    Estos atributos se agregan al evento span, que se puede encontrar en la [UIdel rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure) o consultar directamente en el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder).

    <Callout variant="important">
      Antes de crear un atributo personalizado, revise la lista de [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) de New Relic. De lo contrario, podría obtener resultados inesperados.
    </Callout>
  </Collapser>

  <Collapser
    id="NRaddnoticeError"
    title="NoticeError() llamada API"
  >
    Atributo agregado a una llamada [`NoticeError()`](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.String-) en la API del agente de Java. El nombre de clave para este atributo depende de lo que especifique cuando llame al método.

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
    El agente de Java puede capturar los siguientes encabezados de respuesta y solicitud como atributo:

    Encabezados de solicitud HTTP capturados:

    * `request.headers.referer`

    * `request.headers.accept`

    * `request.headers.contentLength`

    * `request.headers.host`

    * `request.headers.userAgent`

      Encabezado de respuesta capturado: `response.headers.contentType`

      El agente no captura otros encabezados de solicitud.

      El sistema de atributos no se aplica a ningún valor de encabezado distinto de los enumerados anteriormente. Si desea capturar encabezados de solicitud adicionales que no figuran aquí, debe usar la opción de configuración [custom_request_headers](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#tt-custom-request-headers) para especificar encabezados que el agente debe capturar. Alternativamente, puede registrar directamente los encabezados usted mismo utilizando el método `addCustomParameter()` de la [API del agente de Java](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes#api-java).

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
    El agente de Java captura los métodos de solicitud GET, POST y PUT de forma predeterminada como parte del atributo `request.method` .

    Los parámetros de solicitud de la transacción no se capturan de forma predeterminada. Utilice la API [`addCustomParameter()`](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#addCustomParameter-java.lang.String-java.lang.Number-) agente de Java para capturar el parámetro de solicitud.

    La clave para estos atributos es `request.parameters.*`. Si le preocupa capturar información confidencial, puede utilizar estas opciones:

    * Evite el uso de comodines en `attributes.include`. En su lugar, especifique explícitamente cada campo para capturar.
    * Si desea utilizar un comodín en `attributes.include`, excluya explícitamente los campos confidenciales usando `attributes.exclude`.
  </Collapser>
</CollapserGroup>

## Recopilar atributo de usuario [#user-attributes]

Con el agente de Java de APM, puede recopilar automáticamente información del usuario editando su archivo de configuración. Luego puede ejecutar [NRQL consulta](/docs/insights/using-insights-ui/basic-ui-tasks/query-page-create-edit-nrql-queries) con la información del usuario sin necesidad de crear un atributo personalizado manualmente. Esta característica está disponible con [el agente de Java 3.10.0](/docs/release-notes/agent-release-notes/java-release-notes) de New Relic o mas alto.

<Callout variant="important">
  Los atributos de usuario de Java son incompatibles con [el modo de alta seguridad](/docs/accounts-partnerships/accounts/security/high-security).
</Callout>

<CollapserGroup>
  <Collapser
    id="collect-user-instructions"
    title="Habilitar colección de atributos de usuario"
  >
    Para recopilar el atributo de usuario `enduser.id` a través de la [API pública](/docs/apm/agents/java-agent/api-guides/guide-using-java-agent-api/#transactions) con agente de Java 8.1.0 o superior, llame al:

    ```java
    NewRelic.setUserId(String userId);
    ```

    Aquí hay un fragmento de código de ejemplo que configura la ID de usuario:

    ```java
    @Trace(dispatcher = true)
    public void run() {
        NewRelic.setUserId("example-user-id");
    }
    ```

    Para recopilar atributos de usuario a través de nuestra instrumentación de servlet con agente de Java 3.10.0 o mas alto:

    1. Abra `newrelic.yml`, normalmente ubicado en el mismo directorio que `newrelic.jar`.

    2. En la sección [`class_transformer`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Custom_Instrumentation) , edite [`com.newrelic.instrumentation.servlet-user`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#servlet-user) para establecer `enabled` en `true`:

       ```yml
       class_transformer:
         # This instrumentation reports the name of the user principal returned from 
         # HttpServletRequest.getUserPrincipal() when servlets and filters are invoked.
         com.newrelic.instrumentation.servlet-user:
           enabled: true
       ```

    3. Reinicie su servidor web.
  </Collapser>

  <Collapser
    id="view-user-attributes"
    title="Ver atributo de usuario en el panel"
  >
    Si está utilizando el [8.1.0](/docs/release-notes/agent-release-notes/java-release-notes/) versión del agente de Java, o superior, puedes consultar el atributo `enduser.id` ya sea habilitando [`com.newrelic.instrumentation.servlet-user`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#servlet-user) o usando la [API pública](/docs/apm/agents/java-agent/api-guides/guide-using-java-agent-api/#transactions) y esperando unos minutos. Por ejemplo, podría utilizar la siguiente [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) para obtener un recuento único de todos los usuarios:

    ```sql
    SELECT uniqueCount(enduser.id) FROM Transaction SINCE 1 day ago
    ```

    O si estás usando la [versión 3.10.0](/docs/release-notes/agent-release-notes/java-release-notes/) versión del agente de Java o superior, y habilitado [`com.newrelic.instrumentation.servlet-user`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#servlet-user), podrás consultar el atributo `user` en unos minutos:

    ```sql
    SELECT uniqueCount(user) FROM Transaction SINCE 1 day ago
    ```

    En ambos casos, si se informan errores, puede utilizar los atributos de usuario para ver [cuántos usuarios se ven afectados en un grupo de errores determinado](/docs/errors-inbox/error-users-impacted).
  </Collapser>
</CollapserGroup>

## Configurar atributo: habilitar, incluir y excluir [#properties]

Puede configurar qué tipos de atributo, o qué atributo específico, reporta el agente de Java a New Relic. Esto a menudo se hace por razones de seguridad, cuando hay ciertos atributos sensibles que no desea que se informen a New Relic. Para saber qué configuraciones anulan otras configuraciones, consulte las [reglas de configuración de atributos](#attruls).

Opciones de configuración de atributos:

<CollapserGroup>
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
            [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-enabled)
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
            [`transaction_tracer.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-tt-attributes-enabled)
          </td>

          <td>
            Verdadero
          </td>
        </tr>

        <tr>
          <td>
            Segmentos de transacciones
          </td>

          <td>
            [`transaction_segments.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ts-attributes-enabled)
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
            [`error_collector.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-error-attributes-enabled)
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
            [`transaction_events.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-events-attributes-enabled)
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
            [`browser_monitoring.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-browser-attributes-enabled)
          </td>

          <td>
            FALSO
          </td>
        </tr>

        <tr>
          <td>
            Evento de duración
          </td>

          <td>
            `span_events.attributes.enabled`
          </td>

          <td>
            Verdadero
          </td>
        </tr>
      </tbody>
    </table>

    Otros recursos:

    * Consulte la [plantilla del archivo de configuración del agente de Java](/docs/agents/java-agent/configuration/java-agent-config-file-template).
    * Consulte [las reglas que rigen la configuración de atributos, incluidas las configuraciones que anulan otras configuraciones](#attruls).
  </Collapser>

  <Collapser
    id="cfg-tt-attributes-enabled"
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
            [`attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-include)
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
            [`transaction_tracer.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-tt-attributes-include)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Segmentos de transacciones
          </td>

          <td>
            [`transaction_segments.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ts-attributes-include)
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
            [`error_collector.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ec-attributes-include)
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
            [`transaction_events.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-te-attributes-include)
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
            [`browser_monitoring.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-bm-attributes-include)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Evento de duración
          </td>

          <td>
            `span_events.attributes.include`
          </td>

          <td>
            (ninguno)
          </td>
        </tr>
      </tbody>
    </table>

    Otros recursos:

    * Consulte la [plantilla del archivo de configuración del agente de Java](/docs/agents/java-agent/configuration/java-agent-config-file-template).
    * Consulte [las reglas que rigen la configuración de atributos, incluidas las configuraciones que anulan otras configuraciones](#attruls).
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
            [`attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-exclude)
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
            [`transaction_tracer.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-tt-attributes-exclude)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Segmentos de transacciones
          </td>

          <td>
            [`transaction_segments.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ts-attributes-exclude)
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
            [`error_collector.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ec-attributes-exclude)
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
            [`transaction_events.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-te-attributes-exclude)
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
            [`browser_monitoring.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-bm-attributes-exclude)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <td>
            Evento de duración
          </td>

          <td>
            [`span_events.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-span-events-attributes-exclude)
          </td>

          <td>
            (ninguno)
          </td>
        </tr>
      </tbody>
    </table>

    Otros recursos:

    * Consulte la [plantilla del archivo de configuración del agente de Java](/docs/agents/java-agent/configuration/java-agent-config-file-template).
    * Consulte [las reglas que rigen la configuración de atributos, incluidas las configuraciones que anulan otras configuraciones](#attruls).
  </Collapser>
</CollapserGroup>

## Reglas de atributos [#attruls]

El agente de Java sigue estas reglas al determinar qué atributo incluir o excluir para un destino:

<CollapserGroup>
  <Collapser
    id="rule-disable-overrides-all"
    title="Establecer atributo.enabled en false anula todas las demás configuraciones."
  >
    Si establece la propiedad principal [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-enabled) en `false`, el agente no informa ningún atributo en absoluto.

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
        title="Configuraciones específicas conflictivas"
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
        title="Claves que no coinciden con el caso especificado"
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
        title="Coincidir con varias claves de entrada"
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
