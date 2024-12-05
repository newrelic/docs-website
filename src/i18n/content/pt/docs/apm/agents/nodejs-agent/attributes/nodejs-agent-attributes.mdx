---
title: Atributo do agente Node.js
tags:
  - Agents
  - Nodejs agent
  - Attributes
metaDescription: 'New Relic Node.js agent: How to include and exclude specific attributes for events and transactions, including their properties and rules.'
freshnessValidatedDate: never
translationType: machine
---

Este documento descreve o [atributo](/docs/agents/manage-apm-agents/agent-data/agent-attributes) do agente New Relic Node.js, detalha como ativar ou desativar o atributo e descreve as regras que o agente segue para determinar qual atributo incluir ou excluir para um [destino](/docs/agents/manage-apm-agents/agent-data/agent-attributes#destinations).

<Callout variant="tip">
  Essas configurações de atributo se aplicam ao agente Node.js versão 2.7.1 ou superior. Se você usa uma versão mais antiga do agente, consulte [Atualizar configuração do legado atributo](/docs/agents/nodejs-agent/installation-configuration/upgrade-nodejs-agent).
</Callout>

## Encontre e use o atributo [#location]

[Atributo](/docs/agents/manage-apm-agents/agent-data/agent-attributes) New Relic são pares de valores principais contendo informações que determinam as propriedades dos dados [do evento](/docs/accounts-partnerships/getting-started-new-relic/glossary#event) e [da transação](/docs/accounts-partnerships/getting-started-new-relic/glossary#transaction) . atributo pode ajudá-lo a obter maiores insights sobre sua aplicação e anotar os dados no [New Relic](/docs/insights/use-insights-ui/getting-started/introduction-new-relic-insights).

Atributo (padrão e [customizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes)) pode ser encontrado em:

* APM [trace da transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) e [análise de erros](/docs/apm/applications-menu/error-analytics/introduction-error-analytics)
* [Evento APM](/docs/insights/explore-data/attributes/apm-default-attributes-insights)
* [Evento do browser](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browser-attributes-table)

Você pode personalizar exatamente qual atributo será enviado para cada um desses destinos.

<Callout variant="tip">
  A partir da versão 6.10.0 do agente Node.js, quando você ativa distributed tracing e/ou rastreamento infinito, as informações do evento `Transaction` são aplicadas ao `Span` atualmente disponível da transação. Por causa disso, você pode querer aplicar as configurações de atributo do evento `Transaction` ao evento `Span` ou aplicá-las como configurações de atributo globais.
</Callout>

## Atributo específico do Node.js [#attributes]

Além do [atributo padrão do APM](/docs/insights/new-relic-insights/decorating-events/apm-default-attributes-insights#transaction-event), o agente Node.js coleta atributo destas fontes:

<CollapserGroup>
  <Collapser
    id="httpResponseCode"
    title="Códigos de resposta HTTP"
  >
    O código de status de resposta para uma solicitação da web. A chave para este atributo é `httpResponseCode`.

    A configuração padrão para cada destino é:

    * Rastreamento da transação: Habilitado

    * Análise de erros: habilitada

    * Evento APM: Habilitado

    * Evento do browser: Desativado

      <DNT>**Note:**</DNT> O atributo `httpResponseCode` (valor de string) foi removido a partir da versão 7.0.0 do agente. `http.statusCode` (valor inteiro) deve ser usado em seu lugar.
  </Collapser>

  <Collapser
    id="httpResponseMessage"
    title="Mensagens de resposta HTTP"
  >
    A mensagem de status de resposta, se presente para uma solicitação da web. A chave para este atributo é `httpResponseMessage`.

    A configuração padrão para cada destino é:

    * Rastreamento da transação: Habilitado

    * Análise de erros: habilitada

    * Evento APM: Habilitado

    * Evento do browser: Desativado

      <DNT>**Note:**</DNT> O atributo `httpResponseMessage` (valor de string) foi removido a partir da versão 7.0.0 do agente. `http.statusText` (valor da string) deve ser usado em seu lugar.
  </Collapser>

  <Collapser
    id="NRaddCustomParameter"
    title="Atributo personalizado"
  >
    Atributo adicionado a uma chamada [`addCustomAttribute()`](https://newrelic.github.io/node-newrelic/API.html#addCustomAttribute) para a API do agente Node.js. O nome da chave para esse atributo depende do que você especifica ao chamar o método.

    A configuração padrão para cada destino é:

    * Rastreamento da transação: Habilitado

    * Análise de erros: habilitada

    * Evento APM: Habilitado

    * Evento do browser: Desativado

      <Callout variant="important">
        Antes de criar um atributo personalizado, revise a lista de [termos reservados da New Relic usados pelo NRQL](/docs/insights/insights-data-sources/custom-data/insights-custom-data-requirements-limits#reserved-words). Caso contrário, poderão ocorrer resultados inesperados.
      </Callout>
  </Collapser>

  <Collapser
    id="NRaddnoticeError"
    title={<><InlineCode>noticeError()</InlineCode> Chamada de API</>}
  >
    Atributo adicionado a uma chamada [`noticeError()`](https://newrelic.github.io/node-newrelic/API.html#noticeError) na API do agente Node.js. O nome da chave para esse atributo depende do que você especifica ao chamar o método.

    A configuração padrão para cada destino é:

    * Rastreamento da transação: Indisponível
    * Análise de erros: habilitada
    * Evento APM: Indisponível
    * Evento do browser: indisponível
  </Collapser>

  <Collapser
    id="requestHeaders"
    title="Cabeçalhos de solicitação e resposta"
  >
    O agente Node.js pode capturar cabeçalhos de resposta e solicitação como atributo. Por padrão, o agente Node.js coletará todos os cabeçalhos de solicitação que não forem excluídos.

    Cabeçalhos de solicitação HTTP excluídos por padrão:

    * `request.headers.cookie`

    * `request.headers.authorization`

    * `request.headers.proxy-authorization`

    * `request.headers.set-cookie*`

    * `request.headers.x-*`

      Cabeçalho de resposta capturado: `response.headers.content-type`

      Você pode desativar a coleta de todos os cabeçalhos definindo `allow_all_headers` como `false` no arquivo `newrelic.js` .

      A configuração padrão para cada destino é:

    * Rastreamento da transação: Habilitado

    * Análise de erros: habilitada

    * Evento APM: Habilitado

    * Evento do browser: Desativado
  </Collapser>

  <Collapser
    id="requestparams"
    title="Parâmetro de solicitação"
  >
    Parâmetro de solicitação da transação. O agente Node.js não captura parâmetros por padrão. Todos os parâmetros GET podem ser capturados se a entrada `request.parameters.*` for adicionada a [`attributes.include`](#cfg-attributes-include) ou parâmetros de solicitação específicos puderem ser adicionados à lista, por exemplo, `request.parameters.foo` ou `request.parameters.bar`. Para capturar o parâmetro POST, use a chamada de API do agente [`addCustomAttribute()`](https://newrelic.github.io/node-newrelic/API.html#addCustomAttribute) Node.js.
  </Collapser>
</CollapserGroup>

## Configurar atributo

Você pode personalizar quais tipos de atributos o agente Node.js envia para cada destino. Isso é mais comum por motivos de segurança, quando você tem certos atributos confidenciais que não deseja relatar à New Relic.

Use as seguintes propriedades de configuração juntamente com as [regras de atributo](#attruls) para ativar ou desativar o atributo:

<CollapserGroup>
  <Collapser
    id="cfg-attributes-enabled"
    title="allow_all_headers"
  >
    Desativado por padrão. Defina como `true` para que o agente colete apenas todos os cabeçalhos, exceto aqueles filtrados pelas regras `exclude` .
  </Collapser>

  <Collapser
    id="cfg-attributes-include-enabled"
    title="attributes.include_enabled"
  >
    Habilitado por padrão. Defina como `false` para desativar a matriz [`attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_include) .
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
            Opção de configuração
          </th>

          <th>
            Padrão
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Todos
          </td>

          <td>
            [`attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_enabled)
          </td>

          <td>
            Verdadeiro
          </td>
        </tr>

        <tr>
          <td>
            Rastreamento da transação
          </td>

          <td>
            [`transaction_tracer.attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tracer_enabled)
          </td>

          <td>
            Verdadeiro
          </td>
        </tr>

        <tr>
          <td>
            Análise de erros
          </td>

          <td>
            [`error_collector.attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#error_collector)
          </td>

          <td>
            Verdadeiro
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
            Verdadeiro
          </td>
        </tr>

        <tr>
          <td>
            Evento do browser
          </td>

          <td>
            [`browser_monitoring.attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser)
          </td>

          <td>
            Falso
          </td>
        </tr>
      </tbody>
    </table>

    Habilite ou desabilite totalmente o atributo. Se você definir um destino como `false`, nenhum atributo será enviado para esse destino, independentemente das configurações de inclusão/exclusão. Se um destino estiver habilitado, todos os atributos do usuário serão enviados para esse destino por padrão.
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
            Opção de configuração
          </th>

          <th>
            Padrão
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Todos
          </td>

          <td>
            [`attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_include)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Rastreamento da transação
          </td>

          <td>
            [`transaction_tracer.attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#hide-attributes-include)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Análise de erros
          </td>

          <td>
            [`error_collector.attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#error_attributes_include)
          </td>

          <td>
            (nenhum)
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
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Evento do browser
          </td>

          <td>
            [`browser_monitoring.attributes.include`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser-debug-include)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>
      </tbody>
    </table>

    Especifique chaves de atributo específicas que você deseja que o agente reporte à New Relic. Para todos os destinos, esta é uma lista de strings vazia por padrão. As propriedades `.exclude` substituem as propriedades `.include` . Para desativar todos os valores `.include` , defina [`attributes.include_enabled`](#cfg-attributes-include-enabled) como `false`.
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
            Opção de configuração
          </th>

          <th>
            Padrão
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Todos
          </td>

          <td>
            [`attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_exclude)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Rastreamento da transação
          </td>

          <td>
            [`transaction_tracer.attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#hide-attributes-exclude)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Análise de erros
          </td>

          <td>
            [`error_collector.attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#error_attributes_exclude)
          </td>

          <td>
            (nenhum)
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
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Evento do browser
          </td>

          <td>
            [`browser_monitoring.attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser-debug-exclude)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>
      </tbody>
    </table>

    Especifique chaves de atributo específicas que você não deseja que o agente reporte à New Relic. Para todos os destinos, esta é uma lista de strings vazia por padrão. As propriedades `.exclude` substituem as propriedades `.include` .
  </Collapser>
</CollapserGroup>

## Regras de atributo [#attruls]

O agente Node.js segue estas regras ao determinar qual atributo incluir ou excluir para um destino:

<CollapserGroup>
  <Collapser
    id="rule-disable-overrides-all"
    title="Definir attributes.enabled como false substitui todas as outras configurações."
  >
    Se você definir a propriedade [`attributes.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_enabled) principal como `false`, o agente não reportará nenhum atributo.

    <CollapserGroup>
      <Collapser
        id="disable-all-example"
        title="Desativar todos os atributos"
      >
        Configuração do agente:

        * `attributes.enabled: false`

        * `attributes.include: request.parameters.*`

        * `error_collector.attributes.enabled: true`

          Chaves de entrada:

        * `foo`

        * `bar`

        * `request.parameters.foo`

        * `request.parameters.bar`

          Saída do agente:

        * Rastreamento da transação: Sem atributo

        * Análise de erros: sem atributo

        * Evento APM: Sem atributo

        * Evento do browser: Sem atributo
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-enable-overrides-incl-excl"
    title="Definir um destino para substituições falsas inclui/exclui."
  >
    Quando você define [ativado](#cfg-attributes-enabled) como `false` para um destino, o agente ignora suas configurações de inclusão/exclusão e não relata nenhum atributo para esse destino.

    <CollapserGroup>
      <Collapser
        id="example-disabling-destination"
        title="Desabilitar um destino"
      >
        Configuração do agente:

        * `transaction_tracer.attributes.enabled: false`

        * `attributes.include: one, two*`

        * `transaction_tracer.attributes.include: three, four`

          Chaves de entrada:

        * `one`

        * `two`

        * `three`

        * `four`

          Saída do agente:

        * Rastreamento da transação: Sem atributo

        * Análise de erros: `one`, `two`

        * Evento APM: `one`, `two`

        * Evento do browser: Sem atributo
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-exclude-overrides-include"
    title="Excluir substituições incluem."
  >
    As propriedades `.exclude` substituem as propriedades `.include` .

    <CollapserGroup>
      <Collapser
        id="example-exclude-overrides"
        title="Conflito entre configurações de inclusão e exclusão"
      >
        Configuração do agente:

        * `attributes.enabled: true`

        * `attributes.include: foo, myCustomAtt`

        * `attributes.exclude: password, myCustomAtt`

          Chaves de entrada:

        * `foo`

        * `myCustomAtt`

        * `password`

          Saída do agente:

        * Rastreamento da transação: `foo`

        * Análise de erros: `foo`

        * Evento APM: `foo`

        * Evento do browser: `foo`
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-specific-wins"
    title="Regras mais específicas têm prioridade."
  >
    Se vários atributos de inclusão ou exclusão afetarem a mesma chave, a configuração mais específica terá prioridade.

    <CollapserGroup>
      <Collapser
        id="example-most-specific"
        title="Conflitos com configurações específicas"
      >
        Configuração do agente:

        * `attributes.enabled: true`

        * `attributes.include: foo, myCustomAtt`

        * `attributes.exclude: password, myCustomAtt`

        * `browser_monitoring.attributes.enabled: true`

          Chaves de entrada:

        * `food`

        * `food.bread`

        * `food.fruit.banana`

        * `food.fruit.apple`

          Saída do agente:

        * Rastreamento da transação: `food.fruit.apple`

        * Análise de erros: `food.fruit.banana`, `food.fruit.apple`

        * Evento APM: `food.fruit.banana`, `food.fruit.apple`

        * Evento do browser: `food.fruit.banana`, `food.fruit.apple`
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-keys-case-sensitive"
    title="As chaves diferenciam maiúsculas de minúsculas."
  >
    As chaves especificadas nas propriedades `.include` e `.exclude` diferenciam maiúsculas de minúsculas.

    <CollapserGroup>
      <Collapser
        id="example-case-sensitive"
        title="As chaves não correspondem ao caso especificado"
      >
        Configuração do agente:

        * `attributes.enabled: true`

        * `attributes.exclude: password, PaSsWoRd`

          Chaves de entrada:

        * `password`

        * `Password`

        * `PASSWORD`

        * `PaSsWoRd`

        * `PassWORD`

          Saída do agente:

        * Rastreamento da transação: `Password`, `PASSWORD`, `PassWORD`

        * Análise de erros: `Password`, `PASSWORD`, `PassWORD`

        * Evento APM: `Password`, `PASSWORD`, `PassWORD`

        * Evento do browser: `Password`, `PASSWORD`, `PassWORD`
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rule-star-wildcard"
    title="Use um asterisco para curingas."
  >
    Você pode usar um asterisco `*` no final de uma chave como curinga. Isso corresponderá a um conjunto de atributo com o mesmo prefixo.

    <CollapserGroup>
      <Collapser
        id="example-asterisk-wildcard"
        title="O curinga corresponde a várias chaves de entrada"
      >
        Configuração do agente:

        * `attributes.enabled: true`

        * `attributes.include: custom*`

        * `attributes.exclude: request.parameters.*`

          Chaves de entrada:

        * `custom`

        * `custom.key1`

        * `custom.key2`

        * `request.parameters.`

        * `request.parameters.foo`

        * `request.parameters.bar`

          Saída do agente:

        * Rastreamento da transação: `custom`, `custom.key1`, `custom.key2`

        * Análise de erros: `custom`, `custom.key1`, `custom.key2`

        * Evento APM: `custom`, `custom.key1`, `custom.key2`

        * Evento do browser: `custom`, `custom.key1`, `custom.key2`
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>
