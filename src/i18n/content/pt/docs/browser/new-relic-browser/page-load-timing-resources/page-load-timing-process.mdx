---
title: Como a New Relic mede o tempo de carregamento da página
tags:
  - Browser
  - Browser monitoring
  - Page load timing resources
metaDescription: Time-based explanation of how a web page load event happens and how that corresponds to browser's page load timing measurements.
freshnessValidatedDate: never
translationType: machine
---

Este documento explica:

* Como uma página da web carrega

* Como

  <InlinePopover type="browser">
    [](/docs/browser/new-relic-browser/getting-started/new-relic-browser)
  </InlinePopover>

  mede o tempo de carregamento da página, também conhecido como monitoramento de usuário real (RUM)

<Callout variant="tip">
  Esta é uma descrição do tempo de carregamento de página tradicional e síncrono. O browser também pode monitor [o tempo de carregamento assíncrono da página](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring).
</Callout>

## Processo de carregamento da página [#process]

Aqui estão as principais etapas no carregamento da maioria das páginas da web. Os números de 1 a 6 no diagrama correspondem às etapas numeradas abaixo.

<img
  title="browser-pageload-timeline.png"
  alt="browser-pageload-timeline.png"
  src="/images/browser_diagram_page-load-timeline.webp"
/>

<figcaption>
  <DNT>**Page load timeline:**</DNT> As etapas envolvidas no carregamento de uma página da web. Os gráficos de monitoramento do browser exibem os seguintes segmentos desse processo: <DNT>**[Network](#h3-network)**</DNT>, <DNT>**[Web application](#h3-app-time)**</DNT>, <DNT>**[DOM processing](#h3-dom)**</DNT> e <DNT>**[Page rendering](#h3-page)**</DNT>.
</figcaption>

1. O carregamento de uma página começa quando um usuário seleciona um hiperlink, envia um formulário ou digita um URL em um browser. Isso também é conhecido como

   <DNT>
     **initial request**
   </DNT>

   ou

   <DNT>
     **navigation start**
   </DNT>

   . A ação do usuário envia um

   <DNT>
     **request**
   </DNT>

   pela rede para o servidor do aplicativo web.

2. A solicitação chega ao aplicativo para processamento. (A solicitação pode levar algum tempo para começar a ser processada. Isso pode ser o resultado de

   <DNT>
     **request queuing**
   </DNT>

   ou outros fatores.)

3. O aplicativo conclui o processamento e envia um HTML

   <DNT>
     **response**
   </DNT>

   de volta pela rede para o browser do usuário. Às vezes isso é chamado de

   <DNT>
     **response start**
   </DNT>

   ou

   <DNT>
     **first byte**
   </DNT>

   .

4. (Tempo até o primeiro byte) O browser do usuário começa a receber a resposta HTML e a processar o modelo de objeto de documento, ou

   <DNT>
     **DOM**
   </DNT>

   .

5. O DOM termina de carregar; este ponto é conhecido como

   <DNT>
     **DOM ready**
   </DNT>

   . Usando o DOM, o browser do usuário começa a renderizar a página.

6. A página termina a renderização no browser do usuário e o

   <DNT>
     **window load event**
   </DNT>

   é acionado. (Para páginas que usam [carregamento assíncrono](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring), alguns elementos podem continuar a carregar após ocorrer o evento de carregamento da janela.)

## Gráficos de tempo de carregamento da página no monitoramento do browser [#page-load-charts]

O monitoramento do browser captura os principais segmentos de tempo de carregamento da página na [página <DNT>**Summary**</DNT> do browser](/docs/browser/new-relic-browser/getting-started/browser-overview-website-performance-glance) e na [página<DNT>**Page views**</DNT> ](/docs/browser/new-relic-browser/additional-standard-features/page-views-understanding-your-sites-popularity). Se o monitoramento do SPA estiver ativado, você terá acesso a este gráfico e [aos gráficos específicos do SPA](/docs/browser/single-page-app-monitoring/use-spa-data/view-spa-data-new-relic-browser). Os gráficos mostram:

* Rede
* Hora do aplicativo da web
* Processamento DOM
* Renderização de página
* Outros segmentos, conforme aplicável, como enfileiramento de solicitações

As cores do gráfico correspondem às cores do [diagrama de tempo de carregamento da página](#process).

<img
  title="page_load_overview.png"
  alt="page_load_overview.png"
  src="/images/browser_screenshot-full_page-load-chart.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Summary**</DNT>: o gráfico de tempo de carregamento aparece nas páginas <DNT>**Summary**</DNT> e <DNT>**Page views**</DNT> .
</figcaption>

A forma como o browser coleta esses tempos depende da capacidade do browser de usar a [API de especificação de tempo de navegação](/docs/browser/new-relic-browser/page-load-timing-resources/instrumentation-browser-monitoring). Você pode adicionar um evento de tempo de carregamento de página personalizado com a [API do agente browser](/docs/browser/new-relic-browser/browser-apis/using-browser-apis).

Aqui estão as descrições da atividade incluída nos segmentos do gráfico de tempo de carregamento do browser:

<CollapserGroup>
  <Collapser
    id="h3-app-time"
    title="Aplicativo da Web"
  >
    O tempo do aplicativo web inclui o tempo gasto no servidor do aplicativo. Isso só poderá ser determinado se a instrumentação do browser para tempo de carregamento da página tiver sido fornecida por um agente <InlinePopover type="apm"/>.
  </Collapser>

  <Collapser
    id="h3-network"
    title="Rede"
  >
    A camada de rede inclui o tempo gasto em redirecionamentos, bem como na solicitação e recebimento de HTML. Não inclui o tempo no servidor ou para ativos estáticos.

    A medição do tempo da rede começa no clique inicial em um link. O tempo de rede inclui DNS e pode incluir mais de uma pesquisa se você tiver redirecionamentos em seu site, TCP (incluindo o firewall, a menos que você tenha configurado [o monitoramento do tempo de fila de solicitações](/docs/apm/other-features/request-queueing/request-queuing-tracking-frontend-time)) e tempo de conexão SSL.

    * Se você <DNT>**have**</DNT> configurou o monitoramento do tempo de fila de solicitação, o tempo de rede <DNT>**does not**</DNT> incluirá qualquer tempo de fila de solicitação que ocorra após o cabeçalho X-Request.

    * Se você <DNT>**have not**</DNT> configurou o monitoramento do tempo de fila de solicitações, o tempo de rede <DNT>**does**</DNT> incluirá todo o tempo de fila de solicitações.

      A [API de especificação de tempo de navegação](/docs/browser/new-relic-browser/page-load-timing-resources/instrumentation-browser-monitoring) fornece um detalhamento do tempo da rede. (Para browsers antigos, o cronômetro inicia no evento "antes do descarregamento".)

      Para aplicativos que foram [implantados usando o método copiar/colar](/docs/browser/new-relic-browser/installation-configuration/adding-apps-new-relic-browser), o browser inclui aplicativo da web e tempo de fila no horário da rede. Isso ocorre porque o browser depende do agente do lado do servidor para passar os valores do aplicativo para o agente browser por meio de injeção automática.

      Para obter mais informações sobre como esse tempo backend é dividido do ponto de vista do browser, use a [página<DNT>**Session traces**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle). O trace da sessão reporta todos os eventos relacionados à rede disponíveis, para que você possa ver caso a caso como o browser está gastando tempo em pesquisas de DNS e outros eventos de rede.

      <Callout variant="important">
        Mesmo com o enfileiramento de solicitações configurado, a configuração do servidor front-end ainda pode afetar o tempo da rede. Isso ocorre porque o servidor front-end não adiciona o cabeçalho do tempo de fila até que ele realmente aceite e processe a solicitação. Se o servidor frontend estiver configurado de alguma forma que faça com que as solicitações iniciem o backlog e enfileiram-se no soquete listener que o servidor frontend usa para aceitar conexões, então você verá um aumento no tempo de rede para monitoramento do browser. Os cabeçalhos de tempo de fila nunca podem levar em conta o backlog neste soquete do ouvinte.
      </Callout>
  </Collapser>

  <Collapser
    id="h3-dom"
    title="Processamento DOM"
  >
    O processamento do DOM é o tempo necessário para analisar o HTML em um DOM e recuperar ou executar o script síncrono. Se o browser começar a baixar imagens nesta fase, o tempo de carregamento da página capturará o tempo de carregamento da imagem.

    As camadas de processamento DOM e renderização de página incluem tempo de rede para ativos estáticos (ativos que não são recuperados explicitamente após o carregamento da página). No entanto, se um script na página inserir dinamicamente a tag de imagem e carregar imagens após a conclusão do servidor ou do sistema de entrega de conteúdo (CDN), o tempo de carregamento da página não poderá capturar o tempo de carregamento da imagem.
  </Collapser>

  <Collapser
    id="h3-page"
    title="Renderização de página"
  >
    A fase de renderização da página é o tempo entre a conclusão do DOM e o evento de carregamento da janela. Esta fase mede o processamento do conteúdo da página no lado do browser e geralmente inclui tempo para o carregamento de scripts e ativos estáticos.
  </Collapser>

  <Collapser
    id="h3-request"
    title="Solicitar fila"
  >
    <DNT>**Request queuing**</DNT> será exibido no gráfico de tempo de carregamento se essa conta tiver monitoramento de Browser e APM vinculados. No New Relic, [o enfileiramento de solicitações](/docs/apm/applications-menu/features/request-queuing-tracking-frontend-time) se refere ao tempo entre uma solicitação que entra em seus sistemas de produção e chega ao seu aplicativo. Dependendo das especificidades da sua infraestrutura de produção, esse tempo pode incluir uma fila real na qual as solicitações entram ou pode representar outras funções que levam tempo (como balanceamento de carga ou latência de rede interna).
  </Collapser>
</CollapserGroup>

## Solicitações do servidor de aplicativos vs. transação do browser [#rpm-vs-ppm]

Muitas vezes, o número de transações do servidor de aplicativos (solicitações por minuto ou <DNT>**rpm**</DNT>) é maior do que o número de transações do browser (páginas por minuto ou <DNT>**ppm**</DNT>) para o mesmo aplicativo. Para mais informações, consulte os [procedimentos de resolução de problemas](/docs/browser/new-relic-browser/troubleshooting/app-server-requests-greatly-outnumber-browser-transactions).

## Ponto fora da curva [#outliers]

Não importa o desempenho do seu aplicativo, haverá alguns browsers, plataformas e redes lentos que farão com que o tempo de resposta agregado geral pareça mais lento. Para minimizar a distorção causada por valores discrepantes, o tempo de carregamento da página fixa e dimensiona o tempo de resposta do usuário final que é maior que 4,5 vezes a configuração do Apdex T do browser do seu aplicativo para 4,5 vezes o Apdex T ou para 13,5 segundos, o que for maior. ([Os valores discrepantes do histograma](/docs/data-analysis/user-interface-functions/histograms-viewing-data-distribution#outliers) são cortados em 95%.)

Por exemplo, se [o limite Apdex T do usuário final](/docs/browser/new-relic-browser/installation-configuration/browser-settings-ui-options-browser-monitoring#apdex) do seu aplicativo for de 8 segundos, esse tempo de resposta será fixado em 36 segundos. Isso minimiza o impacto desse tempo de resposta em seu aplicativo geral, mas ainda fornece contabilização de pontuações Apdex "frustradas".

Para [monitoramento de SPA](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring), os valores discrepantes são tratados de maneira diferente. Quando a duração de um carregamento de página inicial ou alteração de rota atinge 30 minutos, esse evento é tratado como dados inválidos e descartado.

## Próximos passos [#next-steps]

Saiba mais sobre o tempo de carregamento da página com estes documentos:

* [Sobre o evento PageViewTiming](/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details)
* [Cookies criados pelo tempo de carregamento da página](/docs/browser/browser-monitoring/page-load-timing-resources/new-relic-cookies-used-browser)
* [Coleta de cookies e rastreamento de sessão](/docs/browser/browser-monitoring/page-load-timing-resources/cookie-collection-session-tracking)
* [Como as páginas em cache são monitoradas](/docs/browser/new-relic-browser/page-load-timing-resources/cached-pages)
* [Compare o Sintético e o tempo de carregamento da página do browser](/docs/browser/new-relic-browser/page-load-timing-resources/compare-page-load-performance-browser-synthetics)
