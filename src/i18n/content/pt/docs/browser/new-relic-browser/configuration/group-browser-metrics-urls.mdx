---
title: Agrupar dados do browser por URLs
tags:
  - Browser
  - Browser monitoring
  - Configuration
metaDescription: 'To override the default URL patterns New Relic uses to group event data, add URLs to your allow list in browser monitoring settings.'
freshnessValidatedDate: never
translationType: machine
---

Nosso <InlinePopover type="browser"/>usa padrões de URL para dados na [página<DNT>**Page views**</DNT> ](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity)e [na página<DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls). Os benefícios do uso de padrões de URL incluem:

* Apresente tempos para visualizações de páginas e chamadas AJAX usando agrupamentos úteis de páginas semelhantes.
* Use um formato intuitivo baseado nas URLs do site.

O agrupamento de URLs pode ser feito automaticamente com base na análise do espaço de URL do site pelo browser. Isso resulta em padrões de URL como `www.foo.com/users/*/profile`, que omitem o parâmetro variável de ID do usuário e agrupam visualizações de páginas de "perfil de usuário" semelhantes.

Você pode criar seus próprios grupos de URLs para capturar as partes do URL que são semelhantes em muitas visualizações de páginas individuais diferentes e para fornecer informações sobre o caminho do código que gerou o conteúdo do URL. Você também pode criar condições para [adicionar domínios específicos](/docs/browser/new-relic-browser/installation-configuration/monitor-or-block-specific-domains) à sua lista de permissões ou de negações.

## Entrada para lista de permissões [#whitelists]

Os grupos de URL são criados automaticamente quando um aplicativo reporta dados pela primeira vez ao New Relic. As entradas para esse algoritmo de agrupamento incluem:

* As URLs que o usuário acessa em seu site
* O endpoint AJAX para o qual seu site faz chamadas (sejam eles o seu próprio endpoint ou o endpoint de terceiros)

Quando um URL é carregado ou uma chamada AJAX é gravada, o URL é primeiro filtrado removendo qualquer parâmetro de consulta do URL. aplicar fragmentos de hash também são removidos [, a menos que você esteja usando monitoramento SPA](/docs/browser/single-page-app-monitoring/use-spa-data/understand-spa-data-collection). Esses parâmetros podem conter informações confidenciais e, em muitos casos, variam muito para criar agrupamentos úteis.

## Comportamento de agrupamento automático [#hierarchy]

Após a URL ter sido filtrada, a New Relic analisa as solicitações e divide as URLs em segmentos em caracteres separadores (pontos para domínio, barras para caminhos). Essa lógica também preserva termos úteis e os utiliza no agrupamento automatizado. As informações do domínio são separadas automaticamente pelo número da porta, de modo que (por exemplo) os terminais HTTP e HTTPS sejam listados separadamente.

## Adicionar agrupamentos de URL [#adding]

Você pode modificar como o browser agrupa seus dados adicionando-os à lista de permissões de URL do seu aplicativo. Adicionar segmentos faz com que esses termos sempre apareçam em seus grupos de URLs para novos dados relatados à New Relic. Eles nunca serão acumulados para `*`.

A ordem não é importante ao listar vários segmentos. No entanto, certifique-se de que os segmentos adicionados <DNT>**exactly match**</DNT> sejam da mesma forma que os segmentos aparecem em seus URLs. Se um segmento de caminho de URL terminar em `.html` ou `.jsp`, a extensão deverá ser incluída no segmento. Os segmentos diferenciam maiúsculas de minúsculas.

Para adicionar novos segmentos de URL à lista de permissões do seu aplicativo, você pode adicioná-los programaticamente usando [GraphQL](/docs/apis/nerdgraph/examples/browser-monitoring-config-nerdgraph#browser-segments) ou pode usar listas de permissão de segmento na interface de monitoramento de browser do New Relic:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings > Application settings > Segment allow lists**
   </DNT>

   .

2. Em

   <DNT>
     **Allow listed segments**
   </DNT>

   , selecione o sinal de mais

   <Icon name="fe-plus-circle"/>

   ícone.

3. Digite os [segmentos](#format) que deseja que apareçam em agrupamentos nas páginas

   <DNT>
     **Page views**
   </DNT>

   e

   <DNT>
     **AJAX**
   </DNT>

   .

4. Insira segmentos de domínio (elementos do domínio entre pontos) ou segmentos de caminho (elementos do caminho do URL entre barras).

## Criar regras [#format]

Siga estas diretrizes para criar sua lista de permissões de URL.

<table>
  <thead>
    <tr id="segments">
      <th width={200}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this...**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Adicione um segmento que você não vê à lista
      </td>

      <td>
        Insira o segmento. Por exemplo, se você vir `/users/*` e tiver um caminho `/users/edit` que não vê, insira `edit` na lista.

        Não é possível listar números, GUIDs ou segmentos extremamente longos (100 ou mais caracteres).
      </td>
    </tr>

    <tr>
      <td>
        Listar um domínio
      </td>

      <td>
        Insira cada segmento do domínio. Por exemplo, para adicionar `www.newrelic.com` à sua lista de permissões, insira `www`, `newrelic` e `com`.
      </td>
    </tr>

    <tr>
      <td>
        Liste um caminho
      </td>

      <td>
        Adicione todos os termos desse caminho. Por exemplo, para ver `www.domain1.com/bar/foo` e você já vê `www.domain1.com`, insira `bar` e `foo` como segmentos.
      </td>
    </tr>
  </tbody>
</table>

## Manter lista de permissões de URL [#maintaining]

Com o tempo, os URLs ou domínios do seu aplicativo podem mudar. Adaptamos automaticamente os agrupamentos do seu aplicativo com base nessas alterações, mas você também pode querer fazer alterações mais adequadas às suas necessidades atuais. Siga [os procedimentos padrão](#adding) para adicionar ou remover segmentos da sua lista de permissões e alterar a forma como seus URLs são agrupados.

O algoritmo de agrupamento automatizado AI Monitoring para agrupar URLs é útil, mas ocasionalmente você pode ver mais agrupamentos diferentes do que espera. Se você encontrar muitos agrupamentos de URLs ou termos que não são úteis para você, ou se tiver problemas para agrupar seus URLs de maneira eficaz, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).

## Nomes de controladores [#controller]

O monitoramento do browser usa padrões de URL para agrupamento de dados em vez de nomes de ação do controlador do lado do servidor, como `ApplicationsController#show`. Inclui links para eventos backend <InlinePopover type="apm"/>relacionados, conforme aplicável. No entanto, esta não é a principal estratégia de agrupamento para o browser como um serviço independente.
