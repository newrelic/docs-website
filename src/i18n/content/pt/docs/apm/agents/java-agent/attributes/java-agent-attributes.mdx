---
title: Atributo do agente Java
tags:
  - Agents
  - Java agent
  - Attributes
metaDescription: 'How to include and exclude specific attributes for your New Relic Java agent, including properties and rules.'
freshnessValidatedDate: never
translationType: machine
---

[Atributo](/docs/features/agent-attributes) New Relic são pares de valores principais contendo informações que determinam as propriedades de um evento ou transação. Esses pares de valores principais podem ajudá-lo a obter maiores insights sobre seu aplicativo e a anotar os dados ao [consultá-los](/docs/query-your-data/explore-query-data/explore-data/introduction-querying-new-relic-data). Você também pode [encaminhar automaticamente as informações do usuário para o New Relic](#).

Tanto o atributo padrão quanto [o personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) são visíveis em <InlinePopover type="apm"/>trace da transação, trace distribuído e análise de erros; [Evento APM](/docs/insights/explore-data/attributes/apm-default-attributes-insights) e [evento do browser](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browser-attributes-table) no [painel](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards). Você pode personalizar exatamente qual atributo será enviado para cada um desses destinos.

Este documento descreve o atributo do agente Java, detalha como ativar ou desativar o atributo e descreve as regras que o agente segue para determinar qual atributo incluir ou excluir para um [destino](/docs/features/agent-attributes#destinations).

<Callout variant="tip">
  Essas configurações de atributo se aplicam à versão 3.7.0 ou superior do agente Java. Se você usa uma versão mais antiga do agente, consulte [Atualizar configuração do legado atributo](/docs/agents/java-agent/troubleshooting/update-legacy-attribute-configuration).
</Callout>

## Atributo específico de Java [#attributes]

Além do [atributo padrão do APM](/docs/insights/new-relic-insights/decorating-events/apm-default-attributes-insights#transaction-defaults), o agente Java coleta atributo destas fontes:

<CollapserGroup>
  <Collapser
    id="httpResponseCode"
    title="Códigos de resposta HTTP"
  >
    O código de status de resposta para uma solicitação da web. A chave para este atributo é `http.statusCode`. Nota: As versões do agente abaixo de 8.0.0 usaram o atributo `httpResponseCode`.

    A configuração padrão para cada destino é:

    * Rastreamento da transação: Habilitado
    * Análise de erros: habilitada
    * Evento APM: Habilitado
    * Evento do browser: Desativado
  </Collapser>

  <Collapser
    id="httpResponseMessage"
    title="Mensagens de resposta HTTP"
  >
    A mensagem de status de resposta, se presente para uma solicitação da web. A chave para este atributo é `http.statusText`. Nota: As versões do agente abaixo de 8.0.0 usaram o atributo `httpResponseMessage`.

    A configuração padrão para cada destino é:

    * Rastreamento da transação: Habilitado
    * Análise de erros: habilitada
    * Evento APM: Habilitado
    * Evento do browser: Desativado
  </Collapser>

  <Collapser
    id="jvmThreadName"
    title="Encadeamentos JVM"
  >
    O nome do tópico. A chave para este atributo é `jvm.thread_name`.

    A configuração padrão para cada destino é:

    * Rastreamento da transação: Habilitado
    * Análise de erros: habilitada
    * Evento APM: Desativado
    * Evento do browser: indisponível
  </Collapser>

  <Collapser
    id="jvmLockThreadName"
    title="Threads JVM bloqueados"
  >
    O nome de um thread bloqueado. A chave para este atributo é `jvm.lock_thread_name`.

    A configuração padrão para cada destino é:

    * Rastreamento da transação: Indisponível
    * Análise de erros: habilitada
    * Evento APM: Indisponível
    * Evento do browser: indisponível
  </Collapser>

  <Collapser
    id="NRaddCustomParameter"
    title="Atributo de transação personalizado"
  >
    Atributo adicionado por uma chamada à API do agente Java [NewRelic.addCustomParameter(...)](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#addCustomParameter-java.lang.String-java.lang.Number-) . O nome da chave para esse atributo depende do que você especifica ao chamar o método.

    A configuração padrão para cada destino é:

    * Rastreamento da transação: Habilitado

    * Análise de erros: habilitada

    * Evento APM: Desativado

    * Evento do browser: Desativado

      <Callout variant="important">
        Antes de criar um atributo personalizado, revise a lista de [termos reservados da New Relic usados pelo NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words). Caso contrário, você poderá obter alguns resultados inesperados.
      </Callout>
  </Collapser>

  <Collapser
    id="NRaddCustomParameter"
    title="Atributo de evento de período personalizado"
  >
    Atributo adicionado por uma chamada à API do agente Java [NewRelic.getAgent().getTracedMethod().addCustomAttribute(...)](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/TracedMethod.html) . O nome da chave para esse atributo depende do que você especifica ao chamar o método.

    Esses atributos são adicionados ao span evento, que pode ser encontrado na [interfacedistributed tracing ](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure)ou consultado diretamente no [criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder).

    <Callout variant="important">
      Antes de criar um atributo personalizado, revise a lista de [termos reservados da New Relic usados pelo NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words). Caso contrário, você poderá obter resultados inesperados.
    </Callout>
  </Collapser>

  <Collapser
    id="NRaddnoticeError"
    title="NoticeError() chamada de API"
  >
    Atributo adicionado a uma chamada [`NoticeError()`](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.String-) na API do agente Java. O nome da chave para esse atributo depende do que você especifica ao chamar o método.

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
    O agente Java pode capturar os seguintes cabeçalhos de resposta e solicitação como atributo:

    Cabeçalhos de solicitação HTTP capturados:

    * `request.headers.referer`

    * `request.headers.accept`

    * `request.headers.contentLength`

    * `request.headers.host`

    * `request.headers.userAgent`

      Cabeçalho de resposta capturado: `response.headers.contentType`

      O agente não captura outros cabeçalhos de solicitação.

      O sistema de atributo não se aplica a nenhum valor de cabeçalho diferente dos listados acima. Se desejar capturar cabeçalhos de solicitação adicionais não listados aqui, você deverá usar a opção de configuração [custom_request_headers](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#tt-custom-request-headers) para especificar cabeçalhos a serem capturados pelo agente. Como alternativa, você mesmo pode registrar diretamente os cabeçalhos usando o método `addCustomParameter()` da [API do agente Java](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes#api-java).

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
    O agente Java captura os métodos de solicitação GET, POST e PUT por padrão como parte do atributo `request.method` .

    Os parâmetros de solicitação da transação não são capturados por padrão. Use a API do agente Java [`addCustomParameter()`](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#addCustomParameter-java.lang.String-java.lang.Number-) para capturar o parâmetro da solicitação.

    A chave para esses atributos é `request.parameters.*`. Se a captura de informações confidenciais for uma preocupação, você pode usar estas opções:

    * Evite usar curingas em `attributes.include`. Em vez disso, especifique explicitamente cada campo a ser capturado.
    * Se você quiser usar um curinga em `attributes.include`, exclua explicitamente os campos confidenciais usando `attributes.exclude`.
  </Collapser>
</CollapserGroup>

## Coletar atributos do usuário [#user-attributes]

Com o agente Java do APM, você pode coletar automaticamente informações do usuário editando seu arquivo de configuração. Você pode então executar [a consulta NRQL](/docs/insights/using-insights-ui/basic-ui-tasks/query-page-create-edit-nrql-queries) com base nas informações do usuário sem precisar criar um atributo personalizado manualmente. Este recurso está disponível com [o agente Java 3.10.0](/docs/release-notes/agent-release-notes/java-release-notes) da New Relic ou mais alto.

<Callout variant="important">
  Atributos de usuários Java são incompatíveis com [o modo de alta segurança](/docs/accounts-partnerships/accounts/security/high-security).
</Callout>

<CollapserGroup>
  <Collapser
    id="collect-user-instructions"
    title="Habilitar coleta de atributos do usuário"
  >
    Para coletar o atributo de usuário `enduser.id` por meio da [API pública](/docs/apm/agents/java-agent/api-guides/guide-using-java-agent-api/#transactions) com o agente Java 8.1.0 ou superior, ligue:

    ```java
    NewRelic.setUserId(String userId);
    ```

    Aqui está um trecho de código de exemplo definindo o ID do usuário:

    ```java
    @Trace(dispatcher = true)
    public void run() {
        NewRelic.setUserId("example-user-id");
    }
    ```

    Para coletar atributos do usuário por meio de nossa instrumentação de servlet com agente Java 3.10.0 ou mais alto:

    1. Abra `newrelic.yml`, geralmente localizado no mesmo diretório que `newrelic.jar`.

    2. Na seção [`class_transformer`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Custom_Instrumentation) , edite [`com.newrelic.instrumentation.servlet-user`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#servlet-user) para definir `enabled` como `true`:

       ```yml
       class_transformer:
         # This instrumentation reports the name of the user principal returned from 
         # HttpServletRequest.getUserPrincipal() when servlets and filters are invoked.
         com.newrelic.instrumentation.servlet-user:
           enabled: true
       ```

    3. Reinicie seu servidor web.
  </Collapser>

  <Collapser
    id="view-user-attributes"
    title="Ver atributo do usuário no painel"
  >
    Se você estiver usando o [8.1.0](/docs/release-notes/agent-release-notes/java-release-notes/) versão do agente Java ou superior, você pode consultar o atributo `enduser.id` ativando [`com.newrelic.instrumentation.servlet-user`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#servlet-user) ou usando a [API pública](/docs/apm/agents/java-agent/api-guides/guide-using-java-agent-api/#transactions) e aguardando alguns minutos. Por exemplo, você poderia usar a seguinte [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) para obter uma contagem exclusiva de todos os usuários:

    ```sql
    SELECT uniqueCount(enduser.id) FROM Transaction SINCE 1 day ago
    ```

    Ou se você estiver usando o [3.10.0](/docs/release-notes/agent-release-notes/java-release-notes/) versão do agente Java ou superior, e habilitado [`com.newrelic.instrumentation.servlet-user`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#servlet-user), você pode consultar o atributo `user` em poucos minutos:

    ```sql
    SELECT uniqueCount(user) FROM Transaction SINCE 1 day ago
    ```

    Em ambos os casos, caso sejam reportados erros, você pode utilizar o(s) atributo(s) do usuário para ver [quantos usuários são impactados em um determinado grupo de erros](/docs/errors-inbox/error-users-impacted).
  </Collapser>
</CollapserGroup>

## Configurar atributo: ativar, incluir e excluir [#properties]

Você pode configurar quais tipos de atributo, ou qual atributo específico, o agente Java reporta à New Relic. Isso geralmente é feito por motivos de segurança, quando há certos atributos confidenciais que você não deseja que sejam relatados à New Relic. Para saber quais configurações substituem outras configurações, consulte as [regras de configuração do atributo](#attruls).

Opções de configuração do atributo:

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
            [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-enabled)
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
            [`transaction_tracer.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-tt-attributes-enabled)
          </td>

          <td>
            Verdadeiro
          </td>
        </tr>

        <tr>
          <td>
            Segmentos de transação
          </td>

          <td>
            [`transaction_segments.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ts-attributes-enabled)
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
            [`error_collector.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-error-attributes-enabled)
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
            [`transaction_events.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-events-attributes-enabled)
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
            [`browser_monitoring.attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-browser-attributes-enabled)
          </td>

          <td>
            Falso
          </td>
        </tr>

        <tr>
          <td>
            Evento de extensão
          </td>

          <td>
            `span_events.attributes.enabled`
          </td>

          <td>
            Verdadeiro
          </td>
        </tr>
      </tbody>
    </table>

    Outros recursos:

    * Consulte o [modelo de arquivo de configuração do agente Java](/docs/agents/java-agent/configuration/java-agent-config-file-template).
    * Consulte [as regras que regem a configuração do atributo, incluindo quais configurações substituem outras configurações](#attruls).
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
            [`attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-include)
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
            [`transaction_tracer.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-tt-attributes-include)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Segmentos de transação
          </td>

          <td>
            [`transaction_segments.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ts-attributes-include)
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
            [`error_collector.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ec-attributes-include)
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
            [`transaction_events.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-te-attributes-include)
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
            [`browser_monitoring.attributes.include`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-bm-attributes-include)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Evento de extensão
          </td>

          <td>
            `span_events.attributes.include`
          </td>

          <td>
            (nenhum)
          </td>
        </tr>
      </tbody>
    </table>

    Outros recursos:

    * Consulte o [modelo de arquivo de configuração do agente Java](/docs/agents/java-agent/configuration/java-agent-config-file-template).
    * Consulte [as regras que regem a configuração do atributo, incluindo quais configurações substituem outras configurações](#attruls).
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
            [`attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-exclude)
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
            [`transaction_tracer.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-tt-attributes-exclude)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Segmentos de transação
          </td>

          <td>
            [`transaction_segments.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ts-attributes-exclude)
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
            [`error_collector.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ec-attributes-exclude)
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
            [`transaction_events.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-te-attributes-exclude)
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
            [`browser_monitoring.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-bm-attributes-exclude)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>

        <tr>
          <td>
            Evento de extensão
          </td>

          <td>
            [`span_events.attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-span-events-attributes-exclude)
          </td>

          <td>
            (nenhum)
          </td>
        </tr>
      </tbody>
    </table>

    Outros recursos:

    * Consulte o [modelo de arquivo de configuração do agente Java](/docs/agents/java-agent/configuration/java-agent-config-file-template).
    * Consulte [as regras que regem a configuração do atributo, incluindo quais configurações substituem outras configurações](#attruls).
  </Collapser>
</CollapserGroup>

## Regras de atributo [#attruls]

O agente Java segue estas regras ao determinar qual atributo incluir ou excluir para um destino:

<CollapserGroup>
  <Collapser
    id="rule-disable-overrides-all"
    title="Definir attributes.enabled como false substitui todas as outras configurações."
  >
    Se você definir a propriedade [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-enabled) principal como `false`, o agente não reportará nenhum atributo.

    <CollapserGroup>
      <Collapser
        id="disable-all-example"
        title="Desativando todos os atributos"
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
        title="Configurações específicas conflitantes"
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
        title="Chaves que não correspondem ao caso especificado"
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
        title="Combine várias chaves de entrada"
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
