---
title: Envie evento personalizado com nossa API de eventos
tags:
  - Ingest and manage data
  - Ingest APIs
metaDescription: 'Intro to New Relic''s Event API, which lets you send custom event data to your New Relic account.'
freshnessValidatedDate: never
translationType: machine
---

A API de eventos permite enviar [dados de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data) personalizados para o New Relic. Estes eventos podem então ser consultados e mapeados.

Quer experimentar nossa API de eventos? [Crie uma conta New Relic](https://newrelic.com/signup) gratuitamente! Não é necessário cartão de crédito.

Conteúdo Relacionado:

* Conheça [todas as opções de reporte de evento personalizado](/docs/insights/insights-data-sources/custom-data/report-custom-event-data).
* Para saber como adicionar atributo a um evento existente, consulte [Adicionar atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes).

## Por que usar a API de eventos? [#overview]

Nossa API de eventos é uma opção para relatar dados personalizados. Outra opção é reportar atributo personalizado. Para uma visão geral de por que você usaria a API de evento em vez de outras opções, consulte [evento personalizado e atributo](/docs/data-apis/custom-data/custom-events/report-custom-event-data#using-custom-events).

## Requisitos [#requirements]

Para limites de API de eventos e atributo restrito, consulte [Limites](#limits).

Certifique-se de que a conectividade de saída na porta TCP 443 seja permitida para o [intervalo CIDR](/docs/using-new-relic/cross-product-functions/install-configure/networks/#infrastructure) que corresponde à sua [região](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers). O método de configuração preferencial é usar o nome DNS `insights-collector.newrelic.com` ou `insights-collector.eu01.nr-data.net`.

## Exemplo de envio e consulta de um evento personalizado [#example-use-case]

Aqui está um exemplo da API de evento em ação:

<CollapserGroup>
  <Collapser
    id="ruby-example"
    title="Chamando a API de evento de um aplicativo Ruby"
  >
    O evento personalizado pode ser inserido através da [API do agente](/docs/data-apis/custom-data/custom-events/report-custom-event-data#ways) ou diretamente pela API do evento. O exemplo a seguir mostra como enviar um tipo de evento personalizado `CLIRun`, que rastreia quando uma ferramenta de linha de comando escrita em Ruby tem seu processo encerrado devido a uma exceção.

    ```ruby
    # Hook into the runtime 'at_exit' event
    at_exit do
      # Name the custom event
      payload = { 'eventType' => 'CLIRun' }

      # Check to see if the process is exiting due to an error
      if $!.nil? || $!.is_a?(SystemExit) && $!.success?
        payload[:status] = 0
      else
        # Gather any known errors
        errors = ""
        (Thread.current[:errors] ||= []).each do |err|
          errors += "#{err}\n"
        end
        payload[:errors] = errors
      end

      # Send the errors to New Relic as a custom event
      insights_url = URI.parse("https://insights-collector.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/events")
      headers = { "Api-Key" => "YOUR_LICENSE_KEY", "content-type" => "application/json" }

      http = Net::HTTP.new(insights_url.host, insights_url.port)
      http.use_ssl = true
      request = Net::HTTP::Post.new(insights_url.request_uri, headers)
      request.body = payload.to_json

      puts "Sending run summary to New Relic: #{payload.to_json}"
      begin
        response = http.request(request)
        puts "Response from New Relic: #{response.body}"
      rescue Exception => e
        puts "There was an error posting to New Relic. Error: #{e.inspect}"
      end
    end
    ```

    Então você poderia executar uma consulta NRQL para obter mais detalhes sobre esse evento personalizado, como:

    ```sql
    SELECT count(*) FROM CLIRun FACET errors SINCE 1 week ago
    ```
  </Collapser>
</CollapserGroup>

## Como usar a API de eventos [#workflow]

A API do evento é um endpoint assíncrono. Isso permite enviar um volume muito grande de POSTS, de forma confiável, com latência de resposta muito baixa.

<Callout variant="tip">
  Se a sua organização hospedar dados no data center da UE, verifique se você está usando o [endpoint adequado da região da UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center#endpoints).
</Callout>

Para enviar um evento personalizado para uma conta New Relic:

1. Obtenha um <InlinePopover type="licenseKey"/>para a conta para a qual você deseja relatar dados.
2. Antes de criar um evento personalizado ou atributo, revise nossa lista de [termos reservados utilizados pelo NRQL](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
3. [Gere JSON](#instrument) para o evento por instrumento de sua aplicação, consultando uma API, ou algum outro método.
4. [Envie uma carga JSON compactada](#submit-event) (por exemplo, `gzip` ou `deflate`) para o endpoint HTTPS usando curl em uma solicitação <DNT>**POST**</DNT> .
5. Recomendação: Configure [NRQL condição do alerta](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries) para notificá-lo quando ocorrerem [erros de análise](#errors-parsing).

A API do evento [limita o tamanho, taxa e caracteres](#limits) permitidos no evento personalizado. Além disso, assim como outros dados disponíveis no NRQL, os eventos personalizados não podem ser atualizados ou excluídos após serem criados. Se você tiver problemas com seu evento personalizado, siga os [procedimentos de resolução de problemas](#verify) ou crie um novo evento personalizado.

## Formate o JSON [#instrument]

A API do evento aceita formatos específicos para atributos incluídos no payload. Somente valores float ou string são permitidos.

<CollapserGroup>
  <Collapser
    id="json-guidelines"
    title="Diretrizes de formato JSON"
  >
    Ao definir o atributo para seu evento personalizado, siga estas diretrizes de formato JSON.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Atributo
          </th>

          <th>
            Diretrizes de formato JSON
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `eventType`
          </td>

          <td>
            <DNT>**Required:**</DNT> O nome do evento.
          </td>
        </tr>

        <tr>
          <td>
            Valores float e string
          </td>

          <td>
            Formato de valor float : `"label":value`

            Formato do valor da string: `"label":"value"`
          </td>
        </tr>

        <tr>
          <td>
            Tipos de dados
          </td>

          <td>
            A API aceita apenas pares de valores principais, não valores de mapa/objeto ou matriz. Os tipos de dados suportados por esta API são strings e números (inteiros ou flutuantes). Para obter mais informações, consulte [Requisitos de dados](/docs/insights/insights-data-sources/custom-data/insights-custom-data-requirements-limits).
          </td>
        </tr>

        <tr>
          <td>
            Dígitos em strings
          </td>

          <td>
            Por motivos relacionados ao desempenho, não lançamos valores enviados à API. Por exemplo, tratamos `123` como um número e `"123"` como uma string.

            O banco de dados armazenará apenas números de até 64 bits. Quaisquer números maiores que 64 bits serão truncados.
          </td>
        </tr>

        <tr>
          <td>
            Datas
          </td>

          <td>
            Para atributos que contenham informações de data, use um timestamp Unix não formatado no [formatador de dados](/docs/insights/use-insights-ui/manage-account-data/data-formatter-set-default-formats-numeric-values). Você pode [definir o atributo de data](#timestamp) em segundos ou milissegundos, ambos relativos à Unix epoch.
          </td>
        </tr>

        <tr>
          <td>
            Tempo
          </td>

          <td>
            A menos que especificado de outra forma, o timestamp de um evento enviado é a hora em que foi enviado à New Relic. Para especificar um horário diferente para o evento, use o [atributo`timestamp` ](#timestamp).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="json-example"
    title="Exemplo JSON"
  >
    Aqui está um exemplo de um conjunto de dados JSON típico para envio com a API. Esta chamada envia dois eventos do tipo <DNT>**Purchase**</DNT> como uma matriz JSON. Você pode adicionar vários eventos em uma única chamada HTTP usando uma matriz JSON.

    ```json
    [
        {
            "eventType": "Purchase",
            "account": 3,
            "amount": 259.54
        },
        {
            "eventType": "Purchase",
            "account": 5,
            "amount": 12309,
            "product": "Item"
        }
    ]
    ```

    Ao gerar o JSON, certifique-se de que seus atributos estejam [formatados corretamente](/docs/insights/new-relic-insights/decorating-events/insights-custom-attributes).
  </Collapser>

  <Collapser
    id="limits"
    title="Limites e caracteres restritos"
  >
    Os seguintes limites de tamanho e taxa se aplicam a eventos enviados por meio da API de eventos:

    * Tamanho total da carga útil: <DNT>**1MB(10^6 bytes) maximum per POST**</DNT>. É altamente recomendável usar compactação.

    * A carga deve ser codificada como <DNT>**UTF-8**</DNT>.

    * Número máximo de atributos por evento: 255

    * Comprimento máximo do nome do atributo: 255 caracteres

    * Comprimento máximo do valor do atributo: 4.096 caracteres

    * Existem [limites de taxa para o número de solicitações HTTP por minuto](#post-limit) enviadas para a API do evento.

      Alguns atributos têm restrições adicionais:

    * `accountId`: este é um nome de atributo reservado. Se estiver incluído, será descartado durante a ingestão.

    * `entity.guid`, `entity.name` e `entity.type`: Esses atributo são usados internamente para identificar entidade. Quaisquer valores enviados com essas chaves na seção atributo de um ponto de dados métricos podem causar comportamento indefinido, como falta de entidade na UI ou telemetria não associada à entidade esperada. Para mais informações consulte a [síntese da entidade](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/#entity-synthesis).

    * [`appId`](/docs/apis/rest-api-v2/requirements/find-product-id#apm): o valor deve ser um número inteiro. Se não for um número inteiro, o nome e o valor do atributo serão eliminados durante a ingestão.

    * `eventType`: esse atributo pode ser uma combinação de caracteres alfanuméricos, `_` sublinhados e `:` dois-pontos.

    * `timestamp`: esse atributo deve ser um timestamp hora da Unix epoch, definido em segundos ou milissegundos.
  </Collapser>
</CollapserGroup>

## Envie o evento personalizado [#submit-event]

Os dados enviados à API do evento usam um formato JSON compactado em uma solicitação HTTPS POST simples. Este exemplo usa `gzip`, mas você também pode usar `deflate`.

<CollapserGroup>
  <Collapser
    id="numberone"
    title="Exemplo Linux/bash"
  >
    ```bash
    gzip -c example_events.json | curl -X POST -H "Content-Type: application/json" \
    -H "Api-Key: YOUR_LICENSE_KEY" -H "Content-Encoding: gzip" \
    https://insights-collector.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/events --data-binary @-
    ```
  </Collapser>

  <Collapser
    id="numbertwo"
    title="Exemplo de Windows/PowerShell"
  >
    ```powershell
    $accountId = "YOUR_ACCOUNT_ID"
    $insertkey = "YOUR_LICENSE_KEY"
    # Replace with your custom event for the body
    $body = '[{"eventType": "powershell", "account": 4, "amount": 123, "fileLocation": "c:\\temp2", "zipped": "true" }]'

    $headers = @{}
    $headers.Add("Api-Key", "$insertkey")
    $headers.Add("Content-Encoding", "gzip")


    $encoding = [System.Text.Encoding]::UTF8
    $enc_data = $encoding.GetBytes($body)

    $output = [System.IO.MemoryStream]::new()
    $gzipStream = New-Object System.IO.Compression.GzipStream $output, ([IO.Compression.CompressionMode]::Compress)

    $gzipStream.Write($enc_data, 0, $enc_data.Length)
    $gzipStream.Close()
    $gzipBody = $output.ToArray()

    Invoke-WebRequest -Headers $headers -Method Post -Body $gzipBody  "https://insights-collector.newrelic.com/v1/accounts/$accountId/events"
    ```
  </Collapser>
</CollapserGroup>

<Callout variant="important">
  Sempre use compactação com cada carga útil. Isso permite enviar mais dados e economiza recursos durante a análise.
</Callout>

Antes de gerar sua solicitação HTTP, certifique-se de que ela esteja [formatada corretamente](/docs/insights/new-relic-insights/decorating-events/insights-custom-attributes), incluindo:

* O `Api-Key` contém o <InlinePopover type="licenseKey"/>correto.
* O `Content-Type` é `application/json`.
* A solicitação usa apenas POST. A API não aceita PUT e solicitação GET.

A API oferece suporte [a conexões persistentes HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html). Isso é útil para gerenciar o desempenho do lado do cliente sob cargas pesadas de eventos.

## Verifique ou solucione problemas de resposta à solicitação [#verify]

A API do evento segue um processo de duas etapas para processar solicitações:

1. A API do evento reconhece ou rejeita de forma síncrona a solicitação com base na validação dos cabeçalhos e no tamanho da carga útil.
2. A API do evento analisa de forma assíncrona a carga depois que uma resposta HTTP bem-sucedida é fornecida ao cliente. Isso pode gerar um erro devido a dados ausentes ou malformados. Eles são classificados como erros de envio ou erros de análise.

Todos os envios bem-sucedidos recebem uma resposta `200` , independentemente de quaisquer erros de dados que possam existir na carga útil. A resposta inclui um `uuid`, que é um ID único criado para cada solicitação. O `uuid` também aparece em qualquer evento de erro criado para a solicitação.

Outros problemas potenciais:

* Tempo limite de 10 segundos: a chamada de API que exceder 10 segundos irá expirar.
* Carga grande: carga superior a 100 KB pode aumentar o tempo de resposta.

Recomendação:Além de verificar uma mensagem de sucesso, crie uma consulta NRQL dos seus dados para verificar se estão disponíveis.

<CollapserGroup>
  <Collapser
    id="success"
    title="Código de resposta de sucesso"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            Mensagem de sucesso
          </th>

          <th>
            Comentários
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            200
          </td>

          <td>
            ```json
            {"success":true,"uuid":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"}
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="errors-submission"
    title="Erros de envio"
  >
    Carga com erros de envio são tratados e retornados ao remetente através de um código de resposta HTTP.

    Para solucionar erros de envio de carga útil, consulte estes códigos de resposta HTTP.

    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            Erros de envio
          </th>

          <th>
            Resolução de problemas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            400
          </td>

          <td>
            Comprimento do conteúdo ausente ou inválido: não é possível processar a solicitação vazia.
          </td>
        </tr>

        <tr>
          <td>
            403
          </td>

          <td>
            Chave ausente ou inválida: Chave de licença inválida. Registre um <InlinePopover type="licenseKey"/>válido. Você deve usar uma chave do tipo `License` . As teclas `Browser`, `Mobile` ou `User` não funcionarão.
          </td>
        </tr>

        <tr>
          <td>
            408
          </td>

          <td>
            A solicitação expirou: a solicitação demorou muito para ser processada.
          </td>
        </tr>

        <tr>
          <td>
            413
          </td>

          <td>
            Conteúdo muito grande: a solicitação é muito grande para ser processada. Consulte os limites e caracteres restritos para solucionar problemas.
          </td>
        </tr>

        <tr>
          <td>
            415
          </td>

          <td>
            Tipo de conteúdo inválido: deve ser aplicativo/JSON. A API do evento aceita qualquer tipo de conteúdo, exceto multiparte/relacionado, e assume que pode ser analisado para JSON.
          </td>
        </tr>

        <tr>
          <td>
            429
          </td>

          <td>
            Muitas solicitações devido à limitação de taxa.
          </td>
        </tr>

        <tr>
          <td>
            503
          </td>

          <td>
            Serviço temporariamente indisponível: solicitação de nova tentativa
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="errors-parsing"
    title="Erros de análise"
  >
    Erros de análise ocorrem se:

    * Um evento é enviado dentro de uma carga útil, mas faltam dados ou excede os limites máximos. O New Relic eliminará o evento individual da carga útil, gerará um [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)e processará o restante.

    * A carga JSON inclui JSON malformado ou dados necessários ausentes.

      Carga com erros de análise recebe uma resposta `200` para indicar um envio bem-sucedido. Para ajudar a resolver erros de análise, um novo tipo de evento `NrIntegrationError` é criado. Todos os erros de análise são devidos à consulta NRQL. Para mensagens de erro relacionadas a eventos descartados, o New Relic incluirá o número de eventos que foram descartados como parte da mensagem.

      Para solucionar problemas de solicitações com erros de análise, consulte estas mensagens de erro.

      <table>
        <thead>
          <tr>
            <th style={{ width: "300px" }}>
              Erros de análise
            </th>

            <th>
              Resolução de problemas
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              X evento(s) rejeitado(s) porque o atributo `appId` não era um número inteiro
            </td>

            <td>
              Um atributo `appId` tem um valor não inteiro, como um valor decimal ou uma string.
            </td>
          </tr>

          <tr>
            <td>
              Evento(s) X rejeitado(s) porque `eventType` não pode conter os seguintes caracteres: `[., \]`
            </td>

            <td>
              Um atributo `eventType` incluía um caractere inválido, como ponto final ou barra invertida.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rejeitado(s) porque falta o nome do atributo no atributo
            </td>

            <td>
              Um nome de atributo foi definido como nulo ou uma sequência vazia.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rejeitado(s) porque o nome do atributo excedeu o comprimento máximo
            </td>

            <td>
              Um nome de atributo tem mais de 255 caracteres.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rejeitado(s) porque o valor do atributo excedeu o comprimento máximo
            </td>

            <td>
              Um valor de atributo tinha mais de 4.096 caracteres.
            </td>
          </tr>

          <tr>
            <td>
              X evento(s) rejeitado(s) porque o evento excedeu o número máximo de atributos
            </td>

            <td>
              Um evento tem mais de 255 atributos.
            </td>
          </tr>

          <tr>
            <td>
              X eventos rejeitados porque faltam atributos obrigatórios `eventType`
            </td>

            <td>
              O atributo `eventType` é obrigatório para o evento personalizado.
            </td>
          </tr>

          <tr>
            <td>
              Erro ao analisar a carga JSON
            </td>

            <td>
              Ocorreu um erro ao analisar o JSON da solicitação devido a problemas de formatação ou dados corrompidos.
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>
</CollapserGroup>

## Consulta e alerta com NrIntegrationError [#nrIntegration]

O [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)permite consultar e definir <InlinePopover type="alerts"/>o envio de dados personalizados para sua conta New Relic. Recomendação: para obter alertas para erros de análise, [crie uma condição do alerta NRQL ](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries)para `NrIntegrationError`. Use este exemplo de consulta NRQL:

```sql
SELECT message FROM NrIntegrationError WHERE newRelicFeature = 'Event API' AND category = 'EventApiException'
```

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        NrIntegrationError atributo
      </th>

      <th>
        Resolução de problemas
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td id="timestamp">
        `timestamp`
      </td>

      <td>
        O timestamp em que a solicitação foi recebida. O atributo `timestamp` usa um timestamp de data/hora Unix inteiro de 64 bits das últimas 24 horas. Você pode definir o carimbo de data/hora em segundos ou milissegundos, ambos relativos à Unix epoch.

        Não use um decimal para o timestamp. Se um decimal for usado, o atributo assumirá como padrão o timestamp quando o evento personalizado foi criado.
      </td>
    </tr>

    <tr>
      <td>
        `newRelicFeature`
      </td>

      <td>
        O nome do recurso que apresenta erros. Para todos os erros de análise de evento personalizado, será `Event API`.
      </td>
    </tr>

    <tr>
      <td>
        `apiKeyPrefix`
      </td>

      <td>
        Os primeiros seis caracteres de <InlinePopover type="licenseKey"/>usados para a solicitação que gerou um erro.
      </td>
    </tr>

    <tr>
      <td>
        `requestId`
      </td>

      <td>
        O `uuid` retornado pela API para a solicitação que gerou um erro.
      </td>
    </tr>

    <tr>
      <td>
        `category`
      </td>

      <td>
        A categoria do erro. Para evento personalizado, é `EventApiException`.
      </td>
    </tr>

    <tr>
      <td>
        `message`
      </td>

      <td>
        Conteúdo da mensagem de erro.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        O nome do erro. Para evento personalizado, é sempre `EventValidationException`.
      </td>
    </tr>

    <tr>
      <td>
        `eventTypeSample`
      </td>

      <td>
        Um dos tipos de evento que gerou o erro, quando disponível.
      </td>
    </tr>
  </tbody>
</table>

## Encontre seus dados [#find-data]

Para encontrar dados enviados via API de eventos (e de integrações que utilizam esta API), você pode consultá-los. Por exemplo, para consultar um evento personalizado usando [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql), você executaria:

```sql
SELECT * FROM YOUR_CUSTOM_EVENT
```

Para mais informações sobre como consultar, consulte [dados de consulta](/docs/using-new-relic/data/understand-data/query-new-relic-data).

## Limite de solicitações HTTP [#post-limit]

A API de eventos tem um limite de taxa de 100.000 solicitações HTTP (POSTs) por minuto, por conta. (Observe que este **não** é um limite para o número de eventos por minuto; apenas para o número de POSTs por minuto.)

Esse limite ajuda a garantir que grandes picos de tráfego em contas em nossa plataforma multilocatário não afetem negativamente o desempenho do serviço para você.

Se o uso da sua API exceder 100 mil POSTs em uma janela de 1 minuto, rejeitaremos solicitações de API subsequentes com um código de resposta 429 para o restante da janela de 1 minuto. Ao final da janela de 1 minuto, o contador será zerado e permitirá que o tráfego seja retomado.

Este limite pretende ser um limite superior que você não deve atingir em cenários normais. Se você tiver um número alto de 429 respostas, considere usar menos a API. Se você espera um nível de atividade acima do normal em um futuro próximo e deseja se preparar para isso, [entre em contato com o suporte técnico](https://support.newrelic.com/).
