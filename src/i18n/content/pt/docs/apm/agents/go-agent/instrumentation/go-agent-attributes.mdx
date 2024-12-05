---
title: Go agente atributo
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: 'Adjust default attributes collected by New Relic from your Go app, and create custom attributes.'
freshnessValidatedDate: never
translationType: machine
---

[atributo](/docs/features/agent-attributes) são pares de valores principais contendo informações para evento de transação, evento de erro e erros de rastreamento. Você pode ajustar os destinos do atributo padrão e criar atributo personalizado para o atributo coletado pelo [agente de idiomas Go da New Relic](/docs/agents/go-agent/get-started/new-relic-go), incluindo:

* Rastreamento de erro
* Evento de transação
* Visualizações de página

Para um nível extra de detalhes de monitoramento, [crie um atributo personalizado](/docs/agents/go-agent/go-agent-attributes#custom-attributes).

## Go agente atributo [#attributes]

O agente Go recebe o seguinte [atributo padrão](/docs/agents/manage-apm-agents/agent-metrics/agent-attributes) do seu aplicativo. Você pode ajustar essas configurações padrão e [ativar ou desativar o atributo](#change-attribute-destination) para determinados destinos.

<CollapserGroup>
  <Collapser
    id="attributeHostDisplayName"
    title="host.displayName"
  >
    O nome do host do servidor no qual o script atual está sendo executado, chamado com `newrelic.AttributeHostDisplayName`.

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Desativado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeHostDisplayName)
      ```
  </Collapser>

  <Collapser
    id="httpResponseCode"
    title="httpResponseCode"
  >
    O código de status de resposta para uma solicitação da web, chamado com `newrelic.AttributeResponseCodeDeprecated`

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeResponseCodeDeprecated)
      ```

      <Callout variant="important">
        A partir do agente Go v3.0.0, esse atributo foi marcado como obsoleto e renomeado para `http.statusCode`. O agente v3.x continuará a produzir esse atributo, mas ele será removido na v4.0.0.
      </Callout>
  </Collapser>

  <Collapser
    id="requestHeadersAccept"
    title="request.headers.accept"
  >
    O tipo lido no cabeçalho `Accept` da solicitação HTTP, chamado com `newrelic.AttributeRequestAccept`

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeRequestAccept)
      ```
  </Collapser>

  <Collapser
    id="requestHeadersContentLength"
    title="request.headers.contentLength"
  >
    O tamanho da solicitação recebida em bytes conforme lido no cabeçalho da solicitação `Content-Length` , chamado com `newrelic.AttributeRequestContentLength`.

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeRequestContentLength)
      ```
  </Collapser>

  <Collapser
    id="requestHeadersContentType"
    title="request.headers.contentType"
  >
    O tipo de conteúdo da solicitação recebida conforme lido no cabeçalho da solicitação `Content-Type` , chamado com `newrelic.AttributeRequestContentType`.

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeRequestContentType)
      ```
  </Collapser>

  <Collapser
    id="requestHeadersHost"
    title="request.headers.host"
  >
    O nome do cabeçalho de solicitação do host HTTP, chamado com `newrelic.AttributeRequestHost`.

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeRequestHost)
      ```
  </Collapser>

  <Collapser
    id="requestHeadersReferer"
    title="request.headers.referer"
  >
    O referenciador de solicitação recebida conforme lido no cabeçalho da solicitação `Referer` , chamado com `newrelic.AttributeRequestReferer`.

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Desativado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeRequestReferer)
      ```
  </Collapser>

  <Collapser
    id="user-Agent"
    title="request.headers.User-Agent"
  >
    O conteúdo do cabeçalho HTTP `User-Agent` , chamado com `newrelic.AttributeRequestUserAgentDeprecated`

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Desativado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeRequestUserAgentDeprecated)
      ```

      <Callout variant="important">
        A partir do agente Go v3.0.0, esse atributo foi marcado como obsoleto e renomeado para `request.headers.userAgent`. O agente v3.x continuará a produzir esse atributo, mas ele será removido na v4.0.0.
      </Callout>
  </Collapser>

  <Collapser
    id="userAgent"
    title="request.headers.userAgent"
  >
    O conteúdo do cabeçalho HTTP `User-Agent` , chamado com `newrelic.AttributeRequestUserAgent`

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Desativado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeRequestUserAgent)
      ```

      <Callout variant="important">
        Este atributo foi adicionado na v3.0.0 do agente e o `request.headers.User-Agent` original será eventualmente removido. Portanto o agente v3.x produzirá dois atributos representando o conteúdo do cabeçalho HTTP do usuário-agente. Para excluir completamente o atributo ao usar o agente v3.x, você deve incluir os atributos antigos e novos. Por exemplo:

        ```go
        config.Attributes.Exclude = append(config.Attributes.Exclude,
            newrelic.AttributeRequestUserAgent,
            newrelic.AttributeRequestUserAgentDeprecated,
        )
        ```
      </Callout>
  </Collapser>

  <Collapser
    id="requestMethod"
    title="request.method"
  >
    O método HTTP da solicitação recebida, chamado com `newrelic.AttributeRequestMethod`

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeRequestMethod)
      ```
  </Collapser>

  <Collapser
    id="responseheadersContentLength"
    title="response.headers.contentLength"
  >
    O tamanho da resposta de saída em bytes conforme lido no cabeçalho de resposta Content-Length, chamado com `newrelic.AttributeResponseContentLength`.

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeResponseContentLength)
      ```
  </Collapser>

  <Collapser
    id="responseHeadersContentType"
    title="response.headers.contentType"
  >
    O content-type da resposta de saída conforme lido no cabeçalho de resposta Content-Type, chamado com `newrelic.AttributeResponseContentType`.

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeResponseContentType)
      ```
  </Collapser>

  <Collapser
    id="responseStatusCode"
    title="http.statusCode"
  >
    O código de status de resposta para uma solicitação da web, chamado com `newrelic.AttributeResponseCode`

    Configurações padrão:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeResponseCode)
      ```

      <Callout variant="important">
        Este atributo foi adicionado na v3.0.0 do agente e o `httpResponseCode` original será eventualmente removido. Portanto o agente v3.x produzirá dois atributos representando o código de status de resposta para uma solicitação web. Para excluir completamente o atributo ao usar o agente v3.x, você deve incluir os atributos antigos e novos. Por exemplo:

        ```go
        config.Attributes.Exclude = append(config.Attributes.Exclude,
            newrelic.AttributeResponseCode,
            newrelic.AttributeResponseCodeDeprecated,
        )
        ```
      </Callout>
  </Collapser>
</CollapserGroup>

## Atributo de extensão e segmento [#span-and-segment-attributes]

Se você tiver [o agente Go v2.6.0 ou superior](/docs/release-notes/agent-release-notes/go-release-notes), poderá configurar o atributo em spans e segmentos. O agente Go recebe o seguinte [atributo padrão](/docs/agents/manage-apm-agents/agent-metrics/agent-attributes) do seu aplicativo. Esses atributos são encontrados apenas nos segmentos span evento e trace da transação. Você pode ajustar essas configurações padrão e [ativar ou desativar o atributo](#change-attribute-destination) para determinados destinos.

<CollapserGroup>
  <Collapser
    id="dbCollection"
    title="db.collection"
  >
    Para [segmentos de armazenamento de dados](/docs/agents/go-agent/get-started/instrument-go-segments#go-datastore-segments), esta é a coleção usada e representa a tabela ou grupo, chamado com `newrelic.SpanAttributeDBCollection`.

    Configurações padrão:

    * Rastreamento da transação de segmentos: Habilitado

    * Evento de extensão: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.SpanAttributeDBCollection)
      ```
  </Collapser>

  <Collapser
    id="dbInstance"
    title="db.instance"
  >
    Para [segmentos de armazenamento de dados,](/docs/agents/go-agent/get-started/instrument-go-segments#go-datastore-segments) este é o nome do banco de dados e representa o nome do banco de dados onde a consulta está sendo executada, chamado com `newrelic.SpanAttributeDBInstance`.

    Configurações padrão:

    * Rastreamento da transação de segmentos: Habilitado

    * Evento de extensão: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.SpanAttributeDBInstance)
      ```
  </Collapser>

  <Collapser
    id="dbStatement"
    title="db.statement"
  >
    Para [segmentos de armazenamento de dados,](/docs/agents/go-agent/get-started/instrument-go-segments#go-datastore-segments) esta é a consulta parametrizada que está sendo executada e representa a consulta que está sendo executada, chamada com `newrelic.SpanAttributeDBStatement`.

    Configurações padrão:

    * Rastreamento da transação de segmentos: Habilitado

    * Evento de extensão: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.SpanAttributeDBStatement)
      ```
  </Collapser>

  <Collapser
    id="httpMethod"
    title="http.method"
  >
    Para [segmentos externos,](/docs/agents/go-agent/get-started/instrument-go-segments#go-external-segments) este é o método http da solicitação de saída, chamado com `newrelic.SpanAttributeHTTPMethod`.

    Configurações padrão:

    * Rastreamento da transação de segmentos: Habilitado

    * Evento de extensão: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.SpanAttributeHTTPMethod)
      ```
  </Collapser>

  <Collapser
    id="httpUrl"
    title="http.url"
  >
    Para [segmentos externos,](/docs/agents/go-agent/get-started/instrument-go-segments#go-external-segments) este é o URL da solicitação de saída, chamada com `newrelic.SpanAttributeHTTPURL`.

    Configurações padrão:

    * Rastreamento da transação de segmentos: Habilitado

    * Evento de extensão: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.SpanAttributeHTTPURL)
      ```
  </Collapser>

  <Collapser
    id="peerAddress"
    title="peer.address"
  >
    Para [segmentos de armazenamento de dados,](/docs/agents/go-agent/get-started/instrument-go-segments#go-datastore-segments) este é o nome do host mais a porta do banco de dados que está sendo consultado, chamado com `newrelic.SpanAttributePeerAddress`.

    Configurações padrão:

    * Rastreamento da transação de segmentos: Habilitado

    * Evento de extensão: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.SpanAttributePeerAddress)
      ```
  </Collapser>

  <Collapser
    id="peerHostname"
    title="peer.hostname"
  >
    Para [segmentos de armazenamento de dados](/docs/agents/go-agent/get-started/instrument-go-segments#go-datastore-segments) este é o nome do host do banco de dados que está sendo consultado, chamado com `newrelic.SpanAttributePeerHostname`.

    Configurações padrão:

    * Rastreamento da transação de segmentos: Habilitado

    * Evento de extensão: Habilitado

      Exemplo de exclusão deste atributo:

      ```go
      config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.SpanAttributePeerHostname)
      ```
  </Collapser>
</CollapserGroup>

## Alterar destino do atributo

Use estas opções para alterar os destinos do atributo:

<CollapserGroup>
  <Collapser
    id="turn-destinations-on-off"
    title="Ativar ou desativar destinos"
  >
    Para abrir ou fechar um destino inteiro para atributo, defina o sinalizador `.Enabled` como `true` ou `false`.

    Por exemplo, para desativar a coleta de erros <InlinePopover type="apm"/>: Após a [configuração](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#config-and-application), adicione:

    ```go
    config.ErrorCollector.Attributes.Enabled = false
    ```
  </Collapser>

  <Collapser
    id="turn-attributes-on-off"
    title="Ativar ou desativar o atributo"
  >
    Para ativar ou desativar um atributo específico, use os métodos `.Include` ou `.Exclude` .

    Por exemplo, para desativar `AttributeResponseCode`: Após a [configuração](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#config-and-application), adicione:

    ```go
    config.Attributes.Exclude = append(config.Attributes.Exclude, newrelic.AttributeResponseCode)
    ```
  </Collapser>
</CollapserGroup>

## Criar atributo personalizado [#custom-attributes]

Adicione atributo personalizado usando este método em uma transação:

```go
txn.AddAttribute("key", "value")
```

A variável `txn` é aquela [instrumentada para a transação Go](/docs/agents/go-agent/get-started/instrument-go-transactions#go-txn). Por exemplo:

```go
txn.AddAttribute("product", "widget")
txn.AddAttribute("price", 19.99)
txn.AddAttribute("importantCustomer", true)
```

Configurações padrão para destinos de atributo personalizado:

* Erro coletor (erros de rastreamento): Habilitado
* Evento de transação: Habilitado
