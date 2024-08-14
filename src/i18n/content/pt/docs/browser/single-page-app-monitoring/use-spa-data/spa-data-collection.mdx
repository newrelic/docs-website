---
title: Coleta de dados SPA
tags:
  - Browser
  - Single page app monitoring
  - Use SPA data
metaDescription: How browser stores data from an app that uses a single-page app (SPA) architecture.
freshnessValidatedDate: never
translationType: machine
---

Este documento explica como o browser coleta e armazena dados do seu aplicativo assíncrono de página única (SPA). Isso lhe dará uma melhor compreensão dos [dados do SPA que você vê na interface do browser](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser). Isso também ajudará você a adicionar monitoramento personalizado com mais facilidade com a [API SPA](/docs/browser/single-page-app-monitoring/use-spa-data/use-spa-api).

## Interação do browser [#browser-interaction]

No centro do monitoramento do SPA está o conceito de <DNT>**browser interaction**</DNT>. A New Relic define uma interação do browser como qualquer coisa que ocorra no browser do usuário do aplicativo; por exemplo:

* Uma interação do usuário que leva ao carregamento da página ou à alteração da rota
* Uma atualização dinâmica e agendada para o widget de um aplicativo

Uma interação do browser inclui não apenas o evento inicial de acionamento, mas também a atividade causada por esse evento, como solicitações AJAX e JavaScript síncrono e assíncrono. Ao rastrear não apenas a causa, mas também os efeitos de uma interação do browser, ajudamos você a entender como as visualizações e rotas do seu aplicativo são alteradas.

Todos os aplicativos são diferentes e têm necessidades de monitoramento diferentes. É por isso que incluímos monitoramento padrão, bem como a capacidade de configurar monitoramento personalizado para qualquer interação do browser que você escolher.

## Tipos de SPA relatório de dados [#spa-data]

Três categorias principais de dados de aplicativos de página única podem ser relatadas à New Relic:

* Carregamento inicial da página
* Mudanças de rota
* Interação personalizada do browser criada por meio da [API SPA](/docs/browser/single-page-app-monitoring/use-spa-data/use-spa-api)

Cada um deles cria um evento `BrowserInteraction` . Se uma ou mais solicitações AJAX fizerem parte de uma interação, então o evento `AjaxRequest` associado também será criado. Estes eventos e seus atributos podem ser consultados no [criador de consulta](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-specify-data).

## Carregamento inicial da página

Um <DNT>**initial page load**</DNT> é uma alteração de URL tradicional, resultante de um carregamento ou recarregamento completo de um URL. Isso é indicado no browser quando um evento de carregamento de página é acionado (o evento `window.onload` ). Os carregamentos iniciais da página aparecem junto com as alterações de rota na [interface do browser](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser).

## Mudanças de rota

A rota dinâmica da experiência do usuário do SPA muda de maneira semelhante aos carregamentos de páginas. Os visitantes de um site ou aplicativo geralmente não se importam <DNT>**how**</DNT> uma nova visualização tenha sido entregue; eles simplesmente sabem que quando realizam uma ação, uma nova visão aparece. Por esse motivo, tratamos as alterações de rota de maneira semelhante aos carregamentos de páginas na interface.

Para monitor de maneira ideal o aplicativo de página única, iniciamos o monitoramento de muitas interações do browser que poderiam, teoricamente, levar a mudanças de rota.

* Se essas interações **não** levarem a mudanças de rota, o browser inicia o monitoramento, mas depois as descarta.

* Se essas interações

  <DNT>
    **do**
  </DNT>

  levarem a uma mudança de rota, o browser salva a sequência de interação como um evento `BrowserInteraction` , incluindo informações sobre atividades síncronas e assíncronas.

Uma interação é considerada uma alteração de rota e salva como um evento `BrowserInteraction` quando ocorre uma das seguintes situações:

* O URL aplica alterações de hash (geralmente usando `window.location.hash`).
* Um evento `popstate` é acionado durante um retorno de chamada associado a uma interação.
* Uma API `pushState` ou `replaceState` é chamada.

As alterações de rota aparecem junto com os carregamentos iniciais da página na [interface do browser](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser).

Recebemos e salvamos fragmentos de hash aplicados de URLs de mudança de rota. Se você usar aplicar hash para passar dados privados ou confidenciais, esses dados poderão ficar visíveis para o usuário da sua conta New Relic. Para obter mais informações sobre coleta de dados e relatórios, consulte [Segurança para browser](/docs/browser/new-relic-browser/performance-quality/security-new-relic-browser).

## Monitoramento personalizado [#api-custom-events]

Você pode usar a [API SPA](/docs/browser/new-relic-browser/browser-agent-spa-api) para configurar o monitoramento personalizado da interação do browser que não é monitorado por padrão. Você também pode usar a API para desabilitar o monitoramento padrão.

Evento personalizado são salvos como `BrowserInteraction` evento e possuem o seguinte atributo:

* O atributo `category` terá o valor `Custom`.
* O atributo `trigger` terá o valor `api`. (Este é o valor padrão, mas pode ser alterado com a API.)

## Diferença do tempo de carregamento de página tradicional [#page-load-timing-diff]

Para fornecer dados otimizados para monitoramento de aplicativos de página única, medimos o tempo de carregamento da página de uma nova maneira: agrupando funções de browser de baixo nível, tanto síncronas quanto assíncronas. Isso fornece uma descrição mais completa de quanto tempo leva para concluir as alterações necessárias para uma nova visualização.

Isso é diferente do método tradicional de tempo de carregamento da página. [O tempo de carregamento de página tradicional](/docs/browser/new-relic-browser/page-load-timing-resources/page-load-timing-process) usa o acionamento do evento `window.onload` para determinar quando uma página é carregada. Essa não é uma maneira ideal de medir o tempo de alteração da visualização porque os aplicativos da web geralmente têm código assíncrono que é executado por um período significativo após a ocorrência do evento `window.onload` .

<Callout variant="tip">
  A página <DNT>**Page views**</DNT> padrão do browser, não SPA, exibe um ritmo de carregamento da página diferente do que quando o monitoramento SPA está ativado. Como o monitoramento do SPA mede toda a atividade assíncrona, os tempos de carregamento do SPA geralmente serão maiores do que o tempo de carregamento da página padrão.
</Callout>

O tempo de carregamento da página `window.onload` tradicional ainda aparece na página <DNT>**Page views**</DNT> do SPA. Quando você seleciona um evento de carregamento de página específico, <DNT>**Window onload**</DNT> aparece como uma linha vermelha no gráfico de tempo de carregamento da página. Você também pode selecionar <DNT>**Switch to standard page views**</DNT> para retornar às exibições tradicionais de tempo de carregamento.

## Temporizadores [#spa-timers]

O agente monitora todas as chamadas assíncronas, inclusive os timers. Os temporizadores com durações inferiores a um segundo são agrupados. Timers com mais de um segundo não são agrupados porque geralmente são destinados à [transação fora da web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions), como trabalho em segundo plano ou polling que não está relacionado à interação do usuário.

## Evento e atributo [#event-data-structure]

Salvamos a interação do browser que leva a alterações de rota e carregamentos de página como evento `BrowserInteraction` e solicitações AJAX como evento `AjaxRequest` . Você pode consultar estes eventos no [criador de consulta](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-specify-data).
