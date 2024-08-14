---
title: 'Página AJAX: Identifique chamadas demoradas'
metaDescription: Use New Relic's browser monitoring AJAX page to pinpoint problems with your end users' experience when you have time-consuming or failing AJAX calls.
freshnessValidatedDate: never
translationType: machine
---

Nossa interface <InlinePopover type="browser"/><DNT>**AJAX**</DNT> mostra solicitações AJAX recentes do browser para endpoint externo, como domínio HTTP ou HTTPS. Essas informações ajudam a identificar problemas com a experiência do usuário final quando você tem chamadas AJAX demoradas ou com falha que atualizam partes de uma página da Web em seu site. Você pode analisar problemas por tipo de dispositivo, incluindo browser de desktop, dispositivos móveis e tablets.

## O que solucionar [#troubleshooting]

Aqui estão algumas dicas de resolução de problemas para identificar problemas de desempenho em seu aplicativo:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Resolução de problemas chamadas AJAX
      </th>

      <th>
        Exemplos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Problemas em toda a solicitação
      </td>

      <td>
        Se você não tiver certeza de onde está o problema ou quiser trace suas solicitações do início ao fim, clique no link [distributed tracing](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) na interface <DNT>**AJAX**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        Problemas de tempo
      </td>

      <td>
        [As porcentagens de tempo](#time-percentage-example) total, as taxas de transferência de solicitações por minuto (rpm) e as taxas médias de transferência de dados por solicitação podem ajudar a identificar problemas de tempo.

        * Procure picos grandes no gráfico

          <DNT>
            **Average data transfer per request**
          </DNT>

          da página de resumo

          <DNT>
            **AJAX**
          </DNT>

          .

        * Analise as tendências dos seus dados usando a lista suspensa

          <DNT>
            **Group By**
          </DNT>

          para avaliar o desempenho do AJAX por URL de solicitação, nomes de operações do GraphQL e muitos outros campos.

        * Na guia

          <DNT>
            **AJAX performance**
          </DNT>

          da chamada individual, procure correlações entre valores altos de tempo de retorno de chamada e taxas de transferência de dados.
      </td>
    </tr>

    <tr>
      <td>
        Problemas de endpoint
      </td>

      <td>
        Procure qualquer endpoint outlier e investigue as solicitações individuais feitas a partir deles.

        O gráfico <DNT>**Status codes**</DNT> na página de resumo <DNT>**AJAX**</DNT> fornece informações sobre o comportamento de retorno da chamada. Se você vir um grande número de códigos de status fora do intervalo `200` , isso pode indicar um problema com seu endpoint AJAX.
      </td>
    </tr>

    <tr>
      <td>
        Problemas específicos de localização de páginas da web
      </td>

      <td>
        Examine possíveis problemas de AJAX no contexto da página onde eles são carregados. Selecione uma transação AJAX e selecione qualquer trace da tabela [<DNT>**Session traces with AJAX**</DNT>](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle) .
      </td>
    </tr>
  </tbody>
</table>

## Como fazer isso [#ajax-dashboard]

Para solucionar problemas com solicitações AJAX para seu aplicativo:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > AJAX**
   </DNT>

   .

2. Selecione o tipo de dispositivo: desktop (padrão), mobile e tablet.

3. Clique em uma solicitação AJAX.

Depois de identificar uma solicitação Ajax, é hora de investigar. Experimente algumas destas estratégias:

<CollapserGroup>
  <Collapser
    id="ajax-summary"
    title="Comece com gráficos de resumo AJAX"
  >
    A página de resumo fornece vários gráficos para ajudá-lo a solucionar problemas de chamadas AJAX.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Página de resumo AJAX
          </th>

          <th>
            Comentários
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Grupos e filtros
          </td>

          <td>
            Use qualquer uma das opções <DNT>**Sort by**</DNT> disponíveis na interface. Todas as solicitações AJAX que demoram mais de dois minutos são filtradas automaticamente
          </td>

          <td>
            Use a opção <DNT>**Group by**</DNT> para selecionar `requestUrl` ou `groupedRequestUrl` para obter mais flexibilidade na visualização de seus dados.
          </td>
        </tr>

        <tr>
          <td>
            Ponto final
          </td>

          <td>
            O gráfico <DNT>**Throughput**</DNT> mostra os cinco endpoints com as maiores taxas de transferência. Se a chamada tiver mais de cinco endpoints, eles serão consolidados no gráfico como <DNT>**Other**</DNT>.
          </td>
        </tr>

        <tr>
          <td>
            Chamadas da New Relic
          </td>

          <td>
            Você pode ver nosso próprio monitoramento de chamadas AJAX do browser para seu aplicativo. Isso é normal porque toda a atividade é capturada durante a sessão do browser.
          </td>
        </tr>

        <tr>
          <td>
            Faltando dados do browser
          </td>

          <td>
            Os detalhes de tempo do AJAX não estão disponíveis no browser IE 7, IE 8 ou Chrome para iOS. Caso você não veja os dados esperados de outro browser, siga nossos [procedimentos de resolução de problemas AJAX](/docs/browser/new-relic-browser/troubleshooting/troubleshoot-ajax-data-collection).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="ajax-performancex"
    title="Obtenha detalhes por chamadas ou visualizações de página"
  >
    Depois de selecionar uma chamada específica na página de resumo <DNT>**AJAX**</DNT> , você poderá detalhar informações detalhadas com o link <DNT>**AJAX performance**</DNT> . Isso inclui um link direto para [rastrear detalhes da sessão](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle).

    A partir daqui você também pode selecionar a guia para obter dados de desempenho por visualizações de página. (Se as solicitações do servidor do seu aplicativo superam em muito a transação do seu browser `PageView`, isso ocorre porque algumas solicitações ao seu backend são feitas por meio de AJAX. Para obter mais informações, consulte nossos [procedimentos de resolução de problemas](/docs/browser/new-relic-browser/troubleshooting/app-server-requests-greatly-outnumber-browser-pageview-transactions).)

    <img
      title="New Relic browser monitoring: AJAX details"
      alt="A screenshot of the AJAX details UI in New Relic"
      src="/images/browser_screenshot-full_ajax-details.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > AJAX > (select an AJAX call)**</DNT>: este exemplo mostra detalhes de desempenho para uma chamada AJAX específica. Você também pode visualizar detalhes de desempenho por visualizações de página.
    </figcaption>

    O endpoint AJAX no gráfico <DNT>**Average response time**</DNT> aparece como quatro ou dois períodos de tempo. Isso depende se existem [cabeçalhos de rastreamento multiaplicativo](/docs/apm/transactions/cross-application-traces/cross-application-tracing#security).

    * Quatro períodos de tempo (

      <DNT>
        **Application time**
      </DNT>

      ,

      <DNT>
        **Queue time**
      </DNT>

      ,

      <DNT>
        **Network time**
      </DNT>

      e

      <DNT>
        **Callback time**
      </DNT>

      ): Essas chamadas AJAX são feitas em aplicativos monitorados pelo agente

      <InlinePopover type="apm"/>

      que fornece cabeçalhos de rastreamento multiaplicativo.

    * Dois períodos de tempo (

      <DNT>
        **Response time**
      </DNT>

      e

      <DNT>
        **Callback time**
      </DNT>

      ): Essas chamadas AJAX são feitas em aplicativos que não são monitorados pelo agente APM ou são monitorados por agentes que não fornecem cabeçalhos de rastreamento multiaplicativo.
  </Collapser>

  <Collapser
    id="distributed tracing"
    title="Trace suas solicitações do início ao fim"
  >
    Para trace suas solicitações do início ao fim, você também pode clicar no link [distributed tracing](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) na interface <DNT>**AJAX**</DNT>.

    * Para visualizar uma lista de rastreamentos distribuídos, clique no link na interface

      <DNT>
        **AJAX**
      </DNT>

      no nível de resumo AJAX.

    * Para visualizar todos os rastreamentos filtrados pelo seu aplicativo e um tipo de solicitação específico, clique no link distributed tracing da solicitação selecionada na interface

      <DNT>
        **AJAX**
      </DNT>

      .
  </Collapser>

  <Collapser
    id="time-percentage-example"
    title="Exemplo de porcentagem de tempo"
  >
    Quando você classifica a lista de categorias AJAX por <DNT>**Total time percentage**</DNT>, a lista mostra a porcentagem para cada categoria AJAX. Além disso, o gráfico mostra as principais solicitações com as maiores porcentagens de tempo.

    Para apresentar essas informações, o browser pega o tempo de solicitação cumulativo para cada categoria AJAX e o divide pelo tempo de solicitação cumulativo para todas as solicitações AJAX. Isto ajuda a identificar onde otimizar o tempo de resposta, porque os pedidos de taxas de transferência elevadas serão favorecidos em detrimento dos pedidos de taxas de transferência baixas.

    <DNT>
      **Example: Calculating time percentages for two AJAX categories**
    </DNT>

    Este exemplo usa duas categorias AJAX: `api1.example.com` e `api2.example.com`.

    * Seu `api1.example.com` é atingido 1 vez e leva 1 segundo (1000 ms) para responder (1 x 1 segundo = 1 segundo).

    * Seu `api2.example.com` é atingido 500 vezes e leva 1 ms para responder (500 x 1 ms = 500 ms ou 0,5 segundo).

      O tempo de solicitação cumulativo para todas as suas categorias AJAX é de 1.500 ms ou 1,5 segundos. Para obter as porcentagens de tempo, divida cada categoria AJAX pelo tempo de solicitação cumulativo e multiplique por 100 para obter a porcentagem.

      Portanto, `api1.example.com` é 67% (1.000 dividido por 1.500, vezes 100) e `api2.example.com` é 33% (500 dividido por 1.500, vezes 100) da porcentagem de tempo total.

      <table>
        <thead>
          <tr>
            <th>
              <DNT>
                **Time calculations**
              </DNT>
            </th>

            <th>
              <DNT>
                **api1**
              </DNT>
            </th>

            <th>
              <DNT>
                **api2**
              </DNT>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Número de acessos
            </td>

            <td>
              1
            </td>

            <td>
              500
            </td>
          </tr>

          <tr>
            <td>
              Hora de responder
            </td>

            <td>
              1 segundo (1000ms)

              1 acerto x 1000ms = 1000ms (1 segundo)
            </td>

            <td>
              1 milissegundo (1ms)

              500 acertos x 1 ms = 500 ms (0,5 segundo)
            </td>
          </tr>

          <tr>
            <td>
              Tempo de solicitação cumulativo para todas as categorias AJAX
            </td>

            <td>
              1000ms + 500ms = 1500ms (1,5 segundos)
            </td>

            <td>
              1000ms + 500ms = 1500ms (1,5 segundos)
            </td>
          </tr>

          <tr>
            <td>
              Porcentagem de tempo = categoria/tempo de solicitação cumulativo de 1.500 ms x 100 para porcentagem
            </td>

            <td>
              1000 ms/1500 x 100 = 67%
            </td>

            <td>
              500ms/1500 x 100 = 33%
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>
</CollapserGroup>

## Qual é o próximo [#next]

Além da interface <DNT>**AJAX**</DNT> , você também pode usar estes recursos:

* Ajude a evitar a ocorrência de problemas usando [alertas](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/introduction-alerts) para seus principais indicadores de desempenho.
* Use [o monitoramento de aplicativo de página única (SPA)](/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring). Isso é valioso para qualquer aplicativo que use solicitações AJAX para extrair conteúdo dinamicamente e criar uma experiência do usuário fluida.
* [consulte seus dados](/docs/query-your-data/explore-query-data/explore-data/introduction-querying-new-relic-data) na interface ou por API. Por exemplo, você pode consultar [o evento padrão do browser](/docs/insights/insights-data-sources/default-data/browser-default-events-insights), usar [o SPA `AjaxRequest`](/attribute-dictionary/?event=AjaxRequest) para dados geográficos e do browser ou obter seus próprios [dados personalizados](/docs/telemetry-data-platform/get-data-new-relic/getting-started/introduction-new-relic-data-ingest-apis-sdks) no New Relic.
* Visualize e compartilhe seus dados com [gráficos](/docs/insights/use-insights-ui/manage-dashboards/chart-types) e [painel](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards).
