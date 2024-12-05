---
title: Habilitar e desabilitar atributo (.NET)
tags:
  - Agents
  - NET agent
  - Attributes
metaDescription: 'How to include and exclude specific attributes for your New Relic .NET agent, including properties and rules.'
freshnessValidatedDate: never
translationType: machine
---

Isto descreve as regras que a New Relic usa para determinar qual atributo incluir ou excluir para um [destino](/docs/features/agent-attributes#destinations). Isso também inclui um resumo das propriedades do agente .NET que não estavam mais disponíveis com o lançamento do atributo do agente New Relic nas versões 9.0 ou superior.

## Regras de atributo [#attruls]

A New Relic segue estas regras para determinar qual atributo incluir ou excluir:

<CollapserGroup>
  <Collapser
    id="rule-root-precedence"
    title="O nível raiz tem precedência para ativado."
  >
    O campo `attributes.enabled` substitui todas as outras configurações. Quando `false`, nenhum atributo será reportado à New Relic.

    Exemplo de configuração:

    ```xml
    <attributes enabled="false">
      <include>foo</include>
      <include>bar</include>
    </attributes>
    <transactionTracer enabled="true">
      <attributes enabled="true"/>
    </transactionTracer>
    ```

    Exemplo de saída:

    ```
    Keys passed in: foo, bar, bat
    Keys included for all destinations:
    Keys excluded for all destinations: foo, bar, bat
    ```
  </Collapser>

  <Collapser
    id="rule-destination-precedence"
    title="O destino ativado tem precedência sobre inclusão e exclusão."
  >
    As sinalizações `{destination}.attributes.enabled` têm precedência sobre as chaves de inclusão e exclusão.

    Exemplo de configuração:

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

    Exemplo de saída:

    ```
    Keys passed in: one, two, three, four
    Keys included for transaction traces:
    Keys excluded for transaction traces: one, two, three, four
    ```
  </Collapser>

  <Collapser
    id="rule-included-destination"
    title="O atributo será incluído se o destino estiver habilitado."
  >
    Se um destino estiver habilitado, todos os atributos do usuário serão enviados para esse destino por padrão.

    Todos os atributos do usuário são padronizados como `true`. Porém, por padrão, request atributo e message parâmetro estão desabilitados para todos os destinos.

    Exemplo de configuração:

    ```xml
    <attributes enabled="true">
      <exclude>myAttKey</exclude>
    </attributes>
    ```

    Exemplo de saída:

    ```
    Keys passed in: foo, bar, myAttKey
    Keys included: foo, bar
    Keys excluded: myAttKey
    ```
  </Collapser>

  <Collapser
    id="rule-exclude-wins"
    title="Excluir sempre substitui incluir."
  >
    Se a mesma chave estiver listada nas listas de inclusão e exclusão, então o atributo com a chave especificada será excluído.

    Exemplo de configuração:

    ```xml
    <attributes enabled="true">
      <include>foo</include>
      <include>myCustomAtt</include>
      <exclude>password</exclude>
      <exclude>myCustomAtt</exclude>
    </attributes>
    ```

    Exemplo de saída:

    ```
    Keys passed in: foo, myCustomAtt, password
    Keys included: foo
    Keys excluded: password, myCustomAtt
    ```
  </Collapser>

  <Collapser
    id="rule-keys-case-sensitive"
    title="As chaves diferenciam maiúsculas de minúsculas."
  >
    As chaves diferenciam maiúsculas de minúsculas.

    Exemplo de configuração:

    ```xml
    <attributes enabled="true">
      <exclude>password</exclude>
      <exclude>PaSsWoRd</exclude>
    </attributes>
    ```

    Exemplo de saída:

    ```
    Keys passed in: password, Password, PASSWORD, PaSsWoRd, PassWORD
    Keys included: Password, PASSWORD, PassWORD
    Keys excluded: password, PaSsWoRd
    ```
  </Collapser>

  <Collapser
    id="rule-star-wildcard"
    title={<>Use um asterisco <InlineCode>\*</InlineCode> para curingas.</>}
  >
    Você pode usar um asterisco `*` no final de uma chave como curinga. Isso corresponderá a todos os atributos com o mesmo prefixo.

    Exemplo de configuração:

    ```xml
    <attributes enabled="true">
      <include>custom*</include>
      <exclude>request.parameters.*</exclude>
    </attributes>
    ```

    Exemplo de saída:

    ```
    Keys passed in: custom, custom.key1, custom.key2, request.parameters., request.parameters.foo, request.parameters.bar
    Keys included: custom, custom.key1, custom.key2
    Keys excluded: request.parameters., request.parameters.foo, request.parameters.bar
    ```
  </Collapser>

  <Collapser
    id="rule-specific-wins"
    title="A configuração mais específica de uma chave tem prioridade."
  >
    Se vários atributos de inclusão ou exclusão afetarem a mesma chave, a configuração mais específica terá prioridade.

    Exemplo de configuração:

    ```xml
    <attributes enabled="true">
      <include>request.parameters.foo</include>
      <exclude>request.parameters.*</exclude>
    </attributes>
    ```

    Exemplo de saída:

    ```
    Keys passed in: request.parameters., request.parameters.foo, request.parameters.bar
    Keys included: request.parameters.foo
    Keys excluded: request.parameters., request.parameters.bar
    ```
  </Collapser>

  <Collapser
    id="rule-destination-include-exclude"
    title="Incluir ou excluir afeta o destino específico."
  >
    Se o atributo `include` ou `exclude` for especificado em um destino, ele afetará apenas esse destino.

    Exemplo de configuração:

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

    Exemplo de saída:

    ```
    Keys passed in: foo
    Keys included for transaction events:
    Keys included for other destinations: foo
    Keys excluded for transaction events: foo
    ```
  </Collapser>
</CollapserGroup>

## Propriedades obsoletas [#deprecated]

As propriedades a seguir não estão disponíveis no agente .NET v9.0. Visite a página [do guia de migração do agente .NET 8.x para 9.x](/docs/agents/net-agent/getting-started/8x-to-9x-agent-migration-guide) para obter propriedades de substituição ao atualizar seu agente .NET.

<CollapserGroup>
  <Collapser
    id="analyticsEvents"
    title="analyticsEvents substituído por transactionEvents"
  >
    O elemento `analyticsEvents` em <DNT>**newrelic.config**</DNT> está obsoleto. Habilite o elemento [`transactionEvents`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#transaction_events) em <DNT>**newrelic.config**</DNT>:

    ```xml
    <transactionEvents enabled="true"/>
    ```
  </Collapser>

  <Collapser
    id="requestParameters"
    title="requestParameters substituído por request.parameters.*"
  >
    Por padrão, os parâmetros de solicitação não são enviados para o New Relic. Adicione `request.parameters.*` à lista `attributes.include` para ativar a coleta de parâmetros de solicitação.

    ```xml
    <attributes>
      <include>request.parameters.*</include>
    </attributes>
    ```
  </Collapser>

  <Collapser
    id="parameterGroups"
    title="parameterGroups: ativar e ignorar substituído por atributo true, incluir e excluir"
  >
    O valor `parameterGroups` e suas configurações `enabled` e `ignore` estão obsoletos. Por padrão, `customParameters` e `responseHeaderParameters` são instrumentados, enquanto `serviceRequestParameters` não são instrumentados. Para personalizar essas configurações:

    * Use a sinalização [`enabled`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#agent-attributes-enabled) para ativar a instrumentação.

    * Use [`include`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#agent-attributes-include) e [`exclude`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#agent-attributes-exclude) para alternar a instrumentação para um atributo específico.

      Por exemplo:

      ```xml
      <attributes enabled="true">
        <include>service.request.*</include>
        <exclude>response.headers.*</exclude>
        <exclude>myCustomApiKey.*</exclude>
      </attributes>
      ```

      Para mais informações sobre como configurar o atributo, veja os [exemplos de atributo](/docs/agents/net-agent/attributes/net-attribute-examples).
  </Collapser>

  <Collapser
    id="captureAttributes"
    title="Sinalizador captureAttributes substituído por subelementos atributo"
  >
    O sinalizador capture atributo em `browserMonitoring`, `transactionTracer`, `transactionEvents` e `errorCollector` está obsoleto. Em vez disso, use o subelemento `attributes` para definir as configurações de atributo para cada um desses destinos.

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
