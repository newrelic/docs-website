---
title: Activar y desactivar atributo (.NET)
tags:
  - Agents
  - NET agent
  - Attributes
metaDescription: 'How to include and exclude specific attributes for your New Relic .NET agent, including properties and rules.'
freshnessValidatedDate: never
translationType: machine
---

Esto describe las reglas que utiliza New Relic para determinar qué atributo incluir o excluir para un [destino](/docs/features/agent-attributes#destinations). Esto también incluye un resumen de las propiedades del agente .NET que ya no estaban disponibles con el lanzamiento del atributo del agente New Relic en las versiones 9.0 o superiores.

## Reglas de atributos [#attruls]

New Relic sigue estas reglas para determinar qué atributo incluir o excluir:

<CollapserGroup>
  <Collapser
    id="rule-root-precedence"
    title="El nivel raíz tiene prioridad para habilitado."
  >
    El campo `attributes.enabled` anula todas las demás configuraciones. Cuando `false`, no se informará ningún atributo a New Relic.

    Configuración de ejemplo:

    ```xml
    <attributes enabled="false">
      <include>foo</include>
      <include>bar</include>
    </attributes>
    <transactionTracer enabled="true">
      <attributes enabled="true"/>
    </transactionTracer>
    ```

    Salida de ejemplo:

    ```
    Keys passed in: foo, bar, bat
    Keys included for all destinations:
    Keys excluded for all destinations: foo, bar, bat
    ```
  </Collapser>

  <Collapser
    id="rule-destination-precedence"
    title="El destino habilitado tiene prioridad sobre incluir y excluir."
  >
    Las marcas `{destination}.attributes.enabled` tienen prioridad sobre las claves de inclusión y exclusión.

    Configuración de ejemplo:

    ```xml
    <attributes enabled="true">
      <include>one</include>
      <include>two</include>
    </attributes>
    <transactionTracer enabled="true">
      <attributes enabled="false">
        <include>three</include>
        <include>four</include>
      </attributes>
    </transactionTracer>
    ```

    Salida de ejemplo:

    ```
    Keys passed in: one, two, three, four
    Keys included for transaction traces:
    Keys excluded for transaction traces: one, two, three, four
    ```
  </Collapser>

  <Collapser
    id="rule-included-destination"
    title="El atributo se incluye si el destino está habilitado."
  >
    Si un destino está habilitado, todos los atributos del usuario se envían a ese destino de forma predeterminada.

    Todos los atributos de usuario están predeterminados en `true`. Sin embargo, de forma predeterminada, el atributo de solicitud y el parámetro de mensaje están deshabilitados para todos los destinos.

    Configuración de ejemplo:

    ```xml
    <attributes enabled="true">
      <exclude>myAttKey</exclude>
    </attributes>
    ```

    Salida de ejemplo:

    ```
    Keys passed in: foo, bar, myAttKey
    Keys included: foo, bar
    Keys excluded: myAttKey
    ```
  </Collapser>

  <Collapser
    id="rule-exclude-wins"
    title="Excluir siempre reemplaza a incluir."
  >
    Si la misma clave aparece en las listas de inclusión y exclusión, entonces se excluirá el atributo con la clave especificada.

    Configuración de ejemplo:

    ```xml
    <attributes enabled="true">
      <include>foo</include>
      <include>myCustomAtt</include>
      <exclude>password</exclude>
      <exclude>myCustomAtt</exclude>
    </attributes>
    ```

    Salida de ejemplo:

    ```
    Keys passed in: foo, myCustomAtt, password
    Keys included: foo
    Keys excluded: password, myCustomAtt
    ```
  </Collapser>

  <Collapser
    id="rule-keys-case-sensitive"
    title="Las claves distinguen entre mayúsculas y minúsculas."
  >
    Las claves distinguen entre mayúsculas y minúsculas.

    Configuración de ejemplo:

    ```xml
    <attributes enabled="true">
      <exclude>password</exclude>
      <exclude>PaSsWoRd</exclude>
    </attributes>
    ```

    Salida de ejemplo:

    ```
    Keys passed in: password, Password, PASSWORD, PaSsWoRd, PassWORD
    Keys included: Password, PASSWORD, PassWORD
    Keys excluded: password, PaSsWoRd
    ```
  </Collapser>

  <Collapser
    id="rule-star-wildcard"
    title={<>Utilice un asterisco <InlineCode>\*</InlineCode> como comodín.</>}
  >
    Puede utilizar un asterisco `*` al final de una clave como comodín. Esto hará coincidir todos los atributos con el mismo prefijo.

    Configuración de ejemplo:

    ```xml
    <attributes enabled="true">
      <include>custom*</include>
      <exclude>request.parameters.*</exclude>
    </attributes>
    ```

    Salida de ejemplo:

    ```
    Keys passed in: custom, custom.key1, custom.key2, request.parameters., request.parameters.foo, request.parameters.bar
    Keys included: custom, custom.key1, custom.key2
    Keys excluded: request.parameters., request.parameters.foo, request.parameters.bar
    ```
  </Collapser>

  <Collapser
    id="rule-specific-wins"
    title="La configuración más específica de una clave tiene prioridad."
  >
    Si varios atributos de inclusión o exclusión afectan a la misma clave, la configuración más específica tendrá prioridad.

    Configuración de ejemplo:

    ```xml
    <attributes enabled="true">
      <include>request.parameters.foo</include>
      <exclude>request.parameters.*</exclude>
    </attributes>
    ```

    Salida de ejemplo:

    ```
    Keys passed in: request.parameters., request.parameters.foo, request.parameters.bar
    Keys included: request.parameters.foo
    Keys excluded: request.parameters., request.parameters.bar
    ```
  </Collapser>

  <Collapser
    id="rule-destination-include-exclude"
    title="Incluir o excluir afecta al destino específico."
  >
    Si el atributo `include` o `exclude` se especifica en un destino, solo afecta a ese destino.

    Configuración de ejemplo:

    ```xml
    <attributes enabled="true">
      <include>foo</include>
    </attributes>
    <transactionEvents enabled="true">
      <attributes enabled="true">
        <exclude>foo</exclude>
      </attributes>
    </transactionEvents>
    ```

    Salida de ejemplo:

    ```
    Keys passed in: foo
    Keys included for transaction events:
    Keys included for other destinations: foo
    Keys excluded for transaction events: foo
    ```
  </Collapser>
</CollapserGroup>

## Propiedades obsoletas [#deprecated]

Las siguientes propiedades no están disponibles en el agente .NET v9.0. Visite la página [de la guía de migración del agente .NET 8.x a 9.x](/docs/agents/net-agent/getting-started/8x-to-9x-agent-migration-guide) para obtener propiedades de reemplazo al actualizar su agente .NET.

<CollapserGroup>
  <Collapser
    id="analyticsEvents"
    title="analyticsEvents reemplazados por transactionEvents"
  >
    El elemento `analyticsEvents` en <DNT>**newrelic.config**</DNT> está obsoleto. Habilite el elemento [`transactionEvents`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#transaction_events) en <DNT>**newrelic.config**</DNT>:

    ```xml
    <transactionEvents enabled="true"/>
    ```
  </Collapser>

  <Collapser
    id="requestParameters"
    title="requestParameters reemplazado por request.parameters.*"
  >
    De forma predeterminada, los parámetros de solicitud no se envían a New Relic. Agregue `request.parameters.*` a la lista `attributes.include` para habilitar la recopilación de parámetros de solicitud.

    ```xml
    <attributes>
      <include>request.parameters.*</include>
    </attributes>
    ```
  </Collapser>

  <Collapser
    id="parameterGroups"
    title="parameterGroups: habilitar e ignorar reemplazados por atributo verdadero, incluir y excluir"
  >
    El valor `parameterGroups` y sus configuraciones `enabled` y `ignore` están obsoletos. De forma predeterminada, `customParameters` y `responseHeaderParameters` están instrumentados, mientras que `serviceRequestParameters` no están instrumentados. Para personalizar estas configuraciones:

    * Utilice la marca [`enabled`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#agent-attributes-enabled) para habilitar la instrumentación.

    * Utilice [`include`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#agent-attributes-include) y [`exclude`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#agent-attributes-exclude) para alternar la instrumentación de un atributo específico.

      Por ejemplo:

      ```xml
      <attributes enabled="true">
        <include>service.request.*</include>
        <exclude>response.headers.*</exclude>
        <exclude>myCustomApiKey.*</exclude>
      </attributes>
      ```

      Para obtener más información sobre la configuración de atributos, consulte los [ejemplos de atributos](/docs/agents/net-agent/attributes/net-attribute-examples).
  </Collapser>

  <Collapser
    id="captureAttributes"
    title="Indicador captureAttributes reemplazado por subelementos de atributo"
  >
    El indicador de atributo de captura en `browserMonitoring`, `transactionTracer`, `transactionEvents` y `errorCollector` está obsoleto. En su lugar, utilice el subelemento `attributes` para configurar los ajustes de atributos para cada uno de estos destinos.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            <DNT>
              **New property**
            </DNT>
          </th>

          <th>
            <DNT>
              **Example**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            [`browserMonitoring`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#browser-attributes)
          </td>

          <td>
            ```xml
            <browserMonitoring enabled="true">
              <attributes enabled="false">
                <include>myKey.*</include>
                <exclude>myKey.foo</exclude>
              </attributes>
            </browserMonitoring>
            ```
          </td>
        </tr>

        <tr>
          <td>
            [`transactionTracer`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#tracer-attributes)
          </td>

          <td>
            ```xml
            <transactionTracer enabled="true">
              <attributes enabled="false">
                <include>myKey.*</include>
                <exclude>myKey.foo</exclude>
              </attributes>
            </transactionTracer>
            ```
          </td>
        </tr>

        <tr>
          <td>
            [`transactionEvents`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#paragrp-attributes)
          </td>

          <td>
            ```xml
            <transactionEvents enabled="true">
              <attributes enabled="false">
                <include>myKey.*</include>
                <exclude>myKey.foo</exclude>
              </attributes>
            </transactionEvents>
            ```
          </td>
        </tr>

        <tr>
          <td>
            [`errorCollector`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#error-attributes)
          </td>

          <td>
            ```xml
            <errorCollector enabled="true">
              <attributes enabled="false">
                <include>myKey.*</include>
                <exclude>myKey.foo</exclude>
              </attributes>
            </errorCollector>>
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
