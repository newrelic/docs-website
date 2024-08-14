---
title: Configuración de error del agente de Java
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: 'Use New Relic''s Java agent to prevent expected errors from affecting error rate or Apdex score, also to ignore or report errors not reported automatically.'
freshnessValidatedDate: never
translationType: machine
---

El agente de Java de APM brinda información detallada sobre los errores que ocurren dentro de su aplicación. Esto le brinda información valiosa sobre áreas problemáticas que pueden estar afectando el rendimiento de su aplicación o la experiencia del usuario final.

Con [las versiones 3.40.0 o superiores](/docs/release-notes/agent-release-notes/java-release-notes) del agente de Java, existen varias opciones de configuración que le permiten controlar cómo se informan los errores, que incluyen:

* Configurar los errores esperados para que no afecten a la tasa de errores o Apdex
* Error omitido
* Informar errores que no se notifican automáticamente

Para obtener más información sobre cómo ver sus datos de error, consulte [Análisis de errores](/docs/apm/applications-menu/error-analytics/introduction-error-analytics). Para obtener una descripción general de los datos de error en todos los agentes, consulte [Administrar errores en APM](/docs/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-mark-expected).

## Ejemplos de errores comunes reportados [#examples]

El agente de Java reporta errores en los siguientes escenarios:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Error al reportar
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Errores no controlados (incluye rastreo del stack)
      </td>

      <td>
        Si ocurre un error no controlado dentro de una transacción que el agente de Java estaba rastreando, el error se informará con el rastreo completo de la pila.
      </td>
    </tr>

    <tr>
      <td>
        Códigos de estado HTTP (sin rastreo del stack)
      </td>

      <td>
        Si una transacción genera un código de estado HTTP, el error se informará sin el rastreo del stack. Esto es porque:

        * El servidor de la aplicación detectó una condición de error y estableció explícitamente el código de estado.

          O

        * La condición de error fue detectada por la lógica del programa y, por lo tanto, no hubo ningún objeto o stack de excepción.

          Para incluir el rastreo del stack con estos tipos de transacciones, debe utilizar una llamada API `noticeError(...)` .
      </td>
    </tr>

    <tr>
      <td>
        `noticeError(...)` Llamada API
      </td>

      <td>
        Si el agente de Java realiza una llamada explícita utilizando la llamada API `noticeError(...)` , el error se informará independientemente de si ocurre o no dentro de una transacción. La información reportada depende del parámetro utilizado en la llamada API `noticeError(...)` , como se describe en los [Javadocs](https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html).
      </td>
    </tr>

    <tr>
      <td>
        Errores sin alcance que informan más del 100%
      </td>

      <td>
        El agente de Java puede informar errores sin alcance, que son errores que no están vinculados a ninguna transacción. Debido a esto, es posible tener una transacción en un intervalo de tiempo y varios errores en el mismo intervalo de tiempo. En esta situación, New Relic mostraría una tasa de errores <DNT>**over 100%**</DNT>.
      </td>
    </tr>
  </tbody>
</table>

## Configurar informes de errores [#error-configuration]

<Callout variant="important">
  Para utilizar esta característica, [actualice](/docs/agents/java-agent/installation/upgrade-java-agent) a la [última versión](/docs/release-notes/agent-release-notes/java-release-notes) (agente de Java 3.40.0 o superior).
</Callout>

El agente de Java proporciona varias opciones de configuración flexibles para controlar cómo se informan los errores.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Config options**
        </DNT>
      </th>

      <th>
        <DNT>
          **Details**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Configurar errores a través de la UI.
      </td>

      <td>
        Puede omitirlos por error o marcarlos como se esperaba mediante [la configuración del lado del servidor](#server-side-config).
      </td>
    </tr>

    <tr>
      <td>
        Configurar como error esperado vía `newrelic.yml`.
      </td>

      <td>
        Los errores reportados por estas versiones de `noticeError` se pueden configurar como [error esperado](/docs/agents/java-agent/configuration/java-agent-error-configuration#expected-errors) en `newrelic.yml`. Las llamadas a esta API se anularán si el error se configura como [ignorado](/docs/agents/java-agent/configuration/java-agent-error-configuration#ignore-errors) en `newrelic.yml`. Para obtener más información, consulte [Prioridad de configuración de errores](/docs/agents/java-agent/configuration/java-agent-error-configuration#error-config-precedence).

        Utilice estas `noticeError()` API de llamada para informar errores que no se informan automáticamente y configúrelos como [error esperado](/docs/agents/java-agent/configuration/java-agent-error-configuration#enable-error-collector) en `newrelic.yml`:

        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-">noticeError(Throwable throwable)</a>
          ```
        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-java.util.Map-">noticeError(Throwable throwable, Map<String, String> params)</a>
          ```
      </td>
    </tr>

    <tr>
      <td>
        Anular el error esperado a través de `newrelic.yml`.
      </td>

      <td>
        Los errores informados por estas versiones de `noticeError` anularán la configuración [esperada del error](/docs/agents/java-agent/configuration/java-agent-error-configuration#expected-errors) `newrelic.yml` . Las llamadas a esta API se anularán si el error se configura como [ignorado](/docs/agents/java-agent/configuration/java-agent-error-configuration#ignore-errors) en el archivo yml. Para obtener más información, consulte [Prioridad de configuración de errores](/docs/agents/java-agent/configuration/java-agent-error-configuration#error-config-precedence).

        Utilice estas API de llamada `noticeError(...)` para informar errores que no se informan automáticamente y configúrelos como [errores esperados](/docs/agents/java-agent/configuration/java-agent-error-configuration#enable-error-collector) con la API (anula la configuración esperada del error yml):

        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.String-boolean-">noticeError(String message, boolean expected)</a>
          ```
        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.String-java.util.Map-boolean-">noticeError(String message, Map<String, String> params, boolean expected)</a>
          ```
        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-boolean-">noticeError(Throwable throwable, boolean expected)</a>
          ```
        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-java.util.Map-boolean-">noticeError(Throwable throwable, Map<String, String> params, boolean expected)</a>
          ```
      </td>
    </tr>

    <tr>
      <td>
        Ignore o espere errores a través del archivo de configuración.
      </td>

      <td>
        En las versiones 3.40.0 o superiores, puede controlar cómo se informan los errores mediante la [configuración basada en YAML](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Error_Collector). Esto le permite omitir errores o esperar errores basados en códigos de estado HTTP <DNT>**or**</DNT> basados en una lista de nombres de clases de excepción más un mensaje de error opcional.

        * <DNT>**Ignoring errors**</DNT> impide que las clases o códigos de excepción especificados se informen a <InlinePopover type="apm"/>.

        * <DNT>**Expecting errors**</DNT> evita que las clases o códigos de excepción especificados afecten [la tasa de errores](/docs/apis/rest-api-v2/application-examples-v2/application-error-rate-example-v2) y [la puntuación Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) de su aplicación. Esto le permite conservar la información de error para fines de resolución de problemas y al mismo tiempo evitar alertas basadas en la tasa de errores o la puntuación Apdex.

          Estas configuraciones son dinámicas, por lo que al ejecutar agente notará cambios en <DNT>**newrelic.yml**</DNT> sin reiniciar JVM. Para obtener más información y ejemplos, consulte el [archivo de configuración del agente de Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file).
      </td>
    </tr>
  </tbody>
</table>

## Configuración basada en YAML para la recopilación de errores [#yml-config]

La configuración basada en YAML para la recopilación de errores le permite ignorar por completo errores específicos o eximir al error esperado de afectar la tasa de error de su aplicación y la puntuación Apdex. Puede marcar errores como ignorados o esperados según los siguientes criterios:

* Un rango determinado de códigos de estado HTTP, presentados como una lista separada por comas o un rango de puntos

* Una lista separada por comas que utiliza el nombre completo de un paquete/clase

  <DNT>
    **and**
  </DNT>

  y una cadena de mensaje de error proporcionada opcionalmente

<CollapserGroup>
  <Collapser
    id="enable-error-collector"
    title="Habilitar la recopilación de errores"
  >
    De forma predeterminada, el agente de Java incluye una sección `error_collector` bajo la cual se encuentran todas las opciones [de configuración de errores basadas en YAML](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Error_Collector) . La recopilación de errores se puede habilitar o deshabilitar de la siguiente manera:

    ```yml
    error_collector:
      enabled: true
    ```
  </Collapser>

  <Collapser
    id="ignore-errors"
    title="Ignorar errores específicos"
  >
    Los errores que no son de ningún interés particular pueden ignorarse por completo. Identificando errores a ignorar:

    * No serán reportados a APM.

    * No afectarán la tasa de errores de tu aplicación ni la puntuación Apdex.

      A continuación se muestra un ejemplo que muestra las opciones [de configuración basadas en YAML](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Error_Collector) para el error omitido:

      ```yml
      error_collector:
          enabled: true

          ignore_classes:
            - "com.example.ErrorClassToIgnore"

          ignore_messages:
            com.example.OtherErrorClassToIgnore:
              - "some error message to ignore"

          ignore_status_codes: 404,507-511
      ```
  </Collapser>

  <Collapser
    id="expected-errors"
    title="Evitar que el error esperado afecte la tasa de errores y Apdex"
  >
    Se puede evitar que los errores que son <DNT>**expected**</DNT> como parte de la lógica empresarial de una aplicación afecten la tasa de errores o la puntuación Apdex y aún así se informen a APM. Esto le permite conservar la información de error en la UI para fines de resolución de problemas y al mismo tiempo evitar alertas (basadas en la tasa de errores y la puntuación Apdex) causadas por estos errores.

    Aquí hay un ejemplo que muestra las opciones [de configuración basadas en YAML](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Error_Collector) para el error esperado:

    ```yml
    error_collector:
        enabled: true

        expected_classes:
          - "com.example.ExpectedErrorClass"

        expected_messages:
          com.example.OtherExpectedErrorClass:
            - "some expected error message"

        expected_status_codes: 406,500-504
    ```
  </Collapser>
</CollapserGroup>

## Prioridad de configuración de errores [#error-config-precedence]

La prioridad para la configuración de errores es:

1. [configuración del lado del servidor](#server-side-config) (superpone valores en el archivo YAML)
2. `ignore_*` configuración en el YAML
3. `expected` parámetro en la llamada API `noticeError(..)`
4. `expected_*` configuración en el YAML

A continuación se muestran ejemplos de los resultados al combinar varias API de llamadas y configuraciones YAML.

<CollapserGroup>
  <Collapser
    id="ignore-classes"
    title="Error de clases omitidas (YAML anula API)"
  >
    Configuración de YAML:

    ```yml
    error_collector:
      ignore_classes:
        - "com.example.ErrorClass"
    ```

    y

    API de llamada:

    ```java
    noticeError(com.example.ErrorClass)
    ```

    Resultado:

    El YAML `ignore_classes` anula la llamada API `noticeError` y el error se ignora.
  </Collapser>

  <Collapser
    id="expected-classes"
    title="Informe de error esperado (YAML y API)"
  >
    Configuración de YAML:

    ```yml
    error_collector:
      expected_classes:
        - "com.example.ErrorClass"
    ```

    Y

    API de llamada:

    ```java
    noticeError(com.newrelic.Exception)
    ```

    Resultado:

    El parámetro `expected` en la llamada API `noticeError` es verdadero de forma predeterminada y la configuración YAML `expected_classes` contiene una clase de error. Por lo tanto, el error se informa y se marca como `expected`.
  </Collapser>

  <Collapser
    id="expected-no-yaml"
    title="Informe de error esperado (sin YAML)"
  >
    Sin configuración YAML

    Y

    API de llamada:

    ```java
    noticeError(com.newrelic.Exception, expected = true)
    ```

    Resultado:

    El error se informa y se marca como se esperaba.
  </Collapser>

  <Collapser
    id="ignore-error"
    title="YAML ignore_classes anula el parámetro esperado de API"
  >
    Configuración de YAML:

    ```yaml
    error_collector:
      ignore_classes:
        - "com.example.ErrorClass"
    ```

    Y

    API de llamada:

    ```java
    noticeError(com.newrelic.Exception, expected = true)
    ```

    Resultado:

    El YAML `ignore_classes`anula el parámetro `expected` en la llamada API `noticeError` , por lo que se ignora el error.
  </Collapser>

  <Collapser
    id="expected-false"
    title="El parámetro esperado de API anula las expected_classes de YAML"
  >
    Configuración de YAML:

    ```yaml
    error_collector:
      expected_classes:
        - "com.example.ErrorClass"
    ```

    Y

    API de llamada:

    ```java
    noticeError(com.newrelic.Exception, expected = false)
    ```

    Resultado:

    El parámetro `expected` en la llamada API `noticeError` anula `expected_classes` en YAML. Por lo tanto, el error se informa como normal (no marcado como `expected`).
  </Collapser>

  <Collapser
    id="ignore-expected"
    title="Ignorar las anulaciones esperadas en YAML"
  >
    Configuración de YAML:

    ```yaml
    error_collector:
      ignore_classes:
        - "com.example.ErrorClass"
    ```

    Y

    Configuración YAML adicional:

    ```yaml
    error_collector:
      expected_classes:
        - "com.example.ErrorClass"
    ```

    Resultado:

    El YAML `ignore_classes/ignore_messages` anula el YAML `expected_classes/expected_messages`, por lo que se ignora el error. Este mismo principio se aplica a `ignore_status_codes` y `expected_status_codes`.
  </Collapser>
</CollapserGroup>

## Examinar el registro para obtener detalles del error [#logs-context]

Puede reunir los datos de su registro y de la aplicación para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/java-configure-logs-context-all/), puede ver el mensaje de registro relacionado con sus errores y la traza directamente en UI de su aplicación.

1. Desde la página

   <DNT>
     **Errors**
   </DNT>

   , haga clic en una traza para ir a la [página](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)

   <DNT>
     [**Error details**](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)
   </DNT>

   [](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/).

2. En la página de detalles del error, haga clic en

   <DNT>
     **See logs**
   </DNT>

   .

3. Para ver detalles relacionados con un mensaje de registro individual, haga clic directamente en el mensaje.

## Configurar ignorado y error esperado a través de UI [#server-side-config]

Para configurar [el error esperado](/docs/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected#expected) a través de la UI de APM:

1. Si aún no está habilitado, [habilite la configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#enable-ssc).

2. [Vaya al menú de configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc) para la aplicación con errores que desea marcar como se esperaba.

3. En

   <DNT>
     **Error collection**
   </DNT>

   , para

   <DNT>
     **Ignore**
   </DNT>

   o

   <DNT>
     **Exclude expected errors**
   </DNT>

   , ingrese el código HTTP o la clase de error para los errores que desea configurar.

4. Seleccione

   <DNT>
     **Save**
   </DNT>

   .

Para obtener información sobre cómo ver el error esperado en la UI, consulte [Ver error esperado](/docs/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected#expected).
