---
title: 'Exceções tratadas: analise tendências, evite falhas, investigue ocorrências'
tags:
  - Mobile monitoring
  - Mobile monitoring UI
  - Crashes
metaDescription: 'Use the handled exceptions UI to analyze major factors contributing to poor mobile app experience, and use filterable data to find a resolution.'
freshnessValidatedDate: never
translationType: machine
---

Nosso recurso de monitoramento de exceções tratadas ajuda a identificar fatores significativos que contribuem para uma experiência ruim com aplicativos móveis e a usar dados filtráveis para encontrar uma solução mais rapidamente. Você também pode usar a [API de exceções tratadas](#hex-api) para personalizar os dados enviados e usar NRQL para consultar e compartilhar os dados.

<img
  title="Mobile Handled Exceptions"
  alt="Mobile Handled Exceptions"
  src="/images/mobile_screenshot-full_handled-exceptions-summary.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> À medida que você explora a riqueza de dados nos gráficos e na tabela, use grupos e filtros para descobrir padrões que ajudam a determinar a causa raiz das exceções de aplicativos móveis.
</figcaption>

## Recurso

Lidar com exceções à medida que elas ocorrem pode ajudar a melhorar a experiência do usuário no aplicativo mobile, mas não é suficiente para capturar exceções. Você também precisa saber como evitá-los. Nosso recurso de exceções tratadas ajuda você a responder a estes tipos de perguntas:

* Quantos tipos diferentes de exceções tratadas estão ocorrendo? Uma alta taxa de ocorrência pode indicar que você precisa fazer alterações nos sistemas backend .
* Por que o uso do aplicativo pelo usuário resulta em um try/catch? Qual é o contexto das exceções?
* Quando as respostas de um ambiente de teste às exceções tratadas podem indicar problemas adicionais e mais sérios?
* O que teria causado uma falha se a exceção não tivesse sido detectada na produção? O que mais (no código ou na API backend ) ainda está afetando a experiência do usuário?

Ao usar exceções tratadas, você pode identificar e resolver esses tipos de problemas mais rapidamente.

## Requisitos

Para visualizar dados de exceções tratadas, seu aplicativo precisa atender a estes requisitos:

* <DNT>
    **Android:**
  </DNT>

  [Agente Android versão 5.15.0 ou superior](/docs/release-notes/mobile-release-notes/android-release-notes)

* <DNT>
    **iOS:**
  </DNT>

  [Agente iOS versão 5.15.0 ou superior](/docs/release-notes/mobile-release-notes/ios-release-notes)

## Gráficos de porcentagem de exceção [#percentage-charts]

Comece com os gráficos de porcentagem <DNT>**Users affected**</DNT> e <DNT>**Sessions affected**</DNT> para ver se há picos, quedas ou padrões inesperados com exceções em geral. Se o gráfico <DNT>**Users affected**</DNT> estiver vazio, significa que não houve sessões de usuário durante o período selecionado.

Use isso para responder perguntas como:

* Há algum pico próximo ao lançamento de uma versão recente?
* Existe um período em que a porcentagem de usuários foi afetada significativamente pela exceção?
* Existem períodos sem intercorrências?

Para examinar os dados com mais detalhes: Abaixo de qualquer gráfico, selecione [<DNT>**Expand chart**</DNT>](#top5-image).

<CollapserGroup>
  <Collapser
    id="percentage-charts-image"
    title="Exemplo de gráficos de porcentagem de exceção"
  >
    <img
      title="Mobile Handled Exceptions: Percentage charts"
      alt="Mobile Handled Exceptions: Percentage charts"
      src="/images/mobile_screenshot-full_handled-exception-percentages.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> Os gráficos de porcentagem ajudam você a ver rapidamente quaisquer picos, quedas ou padrões inesperados, com exceções em geral.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Grupos e filtros [#groups-filters]

Use os grupos e filtros para examinar o atributo de falhas, dispositivos, locais ou outro atributo personalizado com mais detalhes. Você pode selecionar um grupo e filtrar dados específicos. Use isso para fazer coisas como:

* Agrupe a lista por local de exceção (padrão), causa, compilação ou versão do aplicativo, dispositivos, conexões ou outro atributo personalizado. Isso permite descobrir padrões em suas exceções para determinar a causa raiz.

* Use o [seletor de hora](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) para ajustar o período de tempo atualmente selecionado.

* Filtre por um

  <DNT>
    **Version**
  </DNT>

  específico ou por um ou mais atributo

  <DNT>
    **Filter**
  </DNT>

  , como `appVersion`, `exceptionLocationMethod`, `lastInteraction`, ou qualquer uma da [lista mais longa](/docs/insights/insights-data-sources/default-data/mobile-events-attributes) de atributo padrão e personalizado.

Os filtros atualmente selecionados aparecem na parte superior da página da interface. Você pode fechá-los, adicionar outros filtros ou selecionar outros grupos e filtros.

<CollapserGroup>
  <Collapser
    id="groups-filters-image"
    title="Exemplo de grupos e filtros"
  >
    <img
      title="Mobile Handled Exceptions: Groups and filters"
      alt="Mobile Handled Exceptions: Groups and filters"
      src="/images/mobile_screenshot-full_handled-exception-groups.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> Agrupe os dados por atributos que são mais importantes para você e selecione um ou mais filtros para ajudar a identificar as causas específicas por trás das exceções.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Principais locais de exceção [#top5-exceptions]

Use a tabela <DNT>**Top exception locations**</DNT> para localizar ou classificar padrões no tipo de exceção selecionado nos [grupos e filtros](#groups-filters). Isso inclui:

* Locais recorrentes no stack trace
* Versão do aplicativo mobile
* Número de ocorrências
* Número de usuários afetados durante o [período selecionado](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker)

Por exemplo, você pode agrupar por `Exception Message`, filtrar a mensagem `timeout` e selecionar locais de tempo limite individuais na tabela para revisar o encadeamento stack trace e os detalhes sobre cada ocorrência.

* Para filtrar ou agrupar por outro atributo, utilize a janela de busca da tabela, ou selecione algum dos filtros disponíveis. Por exemplo, filtre por tipo de ocorrência, dispositivo, local específico ou qualquer atributo personalizado.
* Para procurar outros padrões históricos, altere o período selecionado.

<CollapserGroup>
  <Collapser
    id="top-image"
    title="Exemplo de principais locais de exceção"
  >
    <img
      title="Mobile Handled Exceptions: Top locations"
      alt="Mobile Handled Exceptions: Top locations"
      src="/images/mobile_screenshot-full_handled-exception-locations.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> Este exemplo mostra o botão <DNT>**Expand chart**</DNT> e links para o criador de consulta, onde você pode consultar, criar dashboard e compartilhar os dados das exceções tratadas.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Criador de links de consulta [#insights]

<DNT>**Handled exceptions**</DNT> gráficos usam atributo padrão para eventos móveis (incluindo [`MobileHandledException`](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes)), juntamente com qualquer atributo personalizado que você adicionou a este tipo de evento. Quando você passa o mouse sobre os gráficos, [links diretos](#top5-image) aparecem abaixo deles. Esses links para o criador de consulta permitem que você analise os dados do seu aplicativo mobile ainda mais profundamente.

* <DNT>
    **View query**
  </DNT>

  link: Visualize a [consulta NRQL](/docs/insights/new-relic-insights/using-new-relic-query-language/using-nrql) usada para calcular os dados do gráfico.

* <DNT>
    **View in query builder**
  </DNT>

  link: [Visualize o gráfico](/docs/insights/new-relic-insights/using-insights-interface/query-page-creating-editing-nrql-queries) e compartilhe-o com outras pessoas.

## Tabela de locais de exceção [#locations-table]

A tabela <DNT>**Exception locations**</DNT> complementa os gráficos. Ele lista onde as cinco principais exceções tratadas aparecem no thread stack trace e as vincula a detalhes relevantes. Cada linha ajuda você a encontrar respostas para perguntas como:

* Quantas dessas exceções ocorreram dentro do [período](#time-period) selecionado?
* Uma versão específica do aplicativo possui um número maior (ou menor) de usuários afetados?
* Qual exceção tem o menor número de ocorrências?

Você pode alterar a ordem de classificação ou as opções de filtro para se concentrar apenas nos tipos de exceções que são mais importantes para você e suas equipes. Para visualizar [detalhes adicionais do thread para cada ocorrência](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/handled-exceptions-occurrences) da exceção, selecione um registro na tabela <DNT>**Top exceptions location**</DNT> .

<CollapserGroup>
  <Collapser
    id="table-image"
    title="Exemplo de tabela de locais de exceção"
  >
    <img
      title="Mobile Handled Exceptions: Locations table"
      alt="Mobile Handled Exceptions: Locations table"
      src="/images/mobile_screenshot-full_handled-exception-location-example.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions > (click on an exception):**</DNT> Para continuar na página <DNT>**Occurrences**</DNT> da exceção tratada, selecione qualquer linha na tabela.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Detalhes da ocorrência de exceção tratada [#hex-occurrences]

Para visualizar detalhes de cada ocorrência de uma exceção tratada:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions**
   </DNT>

   .

2. Na tabela

   <DNT>
     **Top exception locations**
   </DNT>

   , selecione uma exceção tratada em qualquer linha.

A página <DNT>**Occurrences**</DNT> mostra detalhes sobre a exceção selecionada, incluindo dados detalhados por tipo de dispositivo ou sistema operacional, número de usuários afetados, total de ocorrências no período selecionado, atributo e muito mais.

<img
  title="Mobile Handled Exceptions: Occurrences"
  alt="Mobile Handled Exceptions: Occurrences"
  src="/images/mobile_screenshot-full_handled-exception-occurrences.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions > (select an exception) > Occurrences:**</DNT> Use os detalhes do thread para examinar melhor os padrões no stack trace para uma exceção tratada.
</figcaption>

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Encontre padrões gerais
      </td>

      <td>
        Na página <DNT>**Occurrences**</DNT> :

        * Revise as informações

          <DNT>
            **Summary**
          </DNT>

          da ocorrência selecionada.

        * Compare os gráficos

          <DNT>
            **Occurrence by version**
          </DNT>

          e

          <DNT>
            **Breakdown of handled exception type**
          </DNT>

          .

        * No gráfico

          <DNT>
            **Breakdown of handled exception type**
          </DNT>

          , alterne entre `Device type` e `OS version`.

        * Use o [seletor de hora](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) para ajustar o período de tempo atualmente selecionado.

        * Para procurar outros padrões, selecione

          <DNT>
            **Back to handled exceptions**
          </DNT>

          .
      </td>
    </tr>

    <tr>
      <td>
        Encontre padrões mais específicos
      </td>

      <td>
        Faça um dos seguintes:

        * Na parte superior da página, selecione um

          <DNT>
            **Version**
          </DNT>

          específico ou selecione um ou mais

          <DNT>
            **Filter**
          </DNT>

          .

        * Examine os dados no thread.

        * Nos detalhes de

          <DNT>
            **Stack trace**
          </DNT>

          , role pelo número de ocorrências.

        * Use o [seletor de hora](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) para ajustar o período de tempo atualmente selecionado.
      </td>
    </tr>

    <tr>
      <td>
        Encontre padrões de atributo
      </td>

      <td>
        Revise as listas de [`MobileHandledException`atributos](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes) relacionados à ocorrência, incluindo:

        * Exceções tratadas
        * Dispositivo
        * Conexão
        * Localização
        * Outros, como [atributo personalizado](/docs/insights/insights-data-sources/custom-events/insert-custom-events-attributes-mobile-data) que você criou
      </td>
    </tr>

    <tr>
      <td>
        Consultar ou visualizar os dados da ocorrência
      </td>

      <td>
        Use o New Relic para [consultar os dados](/docs/insights/nrql-new-relic-query-language/using-nrql/query-page-create-edit-nrql-queries) ou [criar um painel](/docs/insights/use-insights-ui/manage-dashboards/create-edit-copy-insights-dashboards) que você pode visualizar ou compartilhar.
      </td>
    </tr>
  </tbody>
</table>

### Trilha de evento para uma ocorrência [#event-trail]

O gráfico <DNT>**Event trail**</DNT> permite ver o evento de carimbo de data/hora que leva a uma exceção tratada.

<img
  title="event trail chart for handled exceptions"
  alt="event trail chart for handled exceptions"
  src="/images/mobile_screenshot-full_event-trail-handled-exceptions.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions > (click an exception) > (scroll down to Event trail chart):**</DNT> Visualize a trilha de evento para eventos que levaram a uma exceção tratada.
</figcaption>

## Rastreamento de pilha não simbolizado [#unsymbolicated]

A New Relic não armazena rastreamento de pilha não simbolizado para exceções tratadas. Isso é diferente da [crash trilha de evento](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-crash-event-trail). Você pode [fazer upload de um dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps) posteriormente, conforme necessário, pois novas exceções tratadas serão simbolizadas.

## API de exceções tratadas [#hex-api]

Nosso recurso <DNT>**Handled exceptions**</DNT> inclui automaticamente um atributo padrão que você pode usar para explorar seus dados de exceções tratadas no criador de consulta e obter detalhes específicos:

* Use o [método`recordHandledExceptions()` ](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-handled-exceptions/).

* [consulte](/docs/insights/nrql-new-relic-query-language/using-nrql/query-page-create-edit-nrql-queries) o tipo de evento [`MobileHandledException`](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes) . Para obter mais informações, consulte os [exemplos de NRQL](/docs/insights/nrql-new-relic-query-language/nrql-query-examples/insights-query-examples-new-relic-mobile#mobilehandledexception-examples) para

  <InlinePopover type="mobile"/>

  .

## Criar atributo personalizado e evento

Você também pode [atributo personalizado](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile/#custom-attributes) e [evento personalizado](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile). Depois de criá-los, selecione e consulte o atributo na página <DNT>**Handled exceptions**</DNT> .
