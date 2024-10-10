---
title: Não vendo nomes específicos de páginas ou endpoint nos dados do browser
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'Troubleshooting tips if you do not see expected page views, URLs, or AJAX when using New Relic browser or SPA monitoring.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você está procurando detalhamentos de desempenho para páginas ou endpoints específicos na[página da<DNT>**Page views**</DNT> ](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity)<InlinePopover type="browser"/>ou [na página da IU<DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls). A interface não mostra o grupo de URLs que você está procurando ou mostra apenas `/` e `/*`. Este comportamento também aparece nos dados SPA no evento `BrowserInteraction` e se aplica ao atributo `browserInteractionName`, `targetGroupedUrl` e `previousGroupedUrl` .

## Solução

O monitoramento do browser "aprende" automaticamente a agrupar suas visualizações de página quando seu aplicativo é implantado pela primeira vez e adiciona essas informações a uma [lista de permissões para URLs](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls). Às vezes, esse agrupamento pode não corresponder às informações de visualização de página atuais.

Para resolver esse problema, gerencie [as configurações da lista de segmentos de URL](/docs/browser/new-relic-browser/configuration/browser-settings-ui-options-apdex-geography#enabling) do seu aplicativo [editando as regras existentes](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls#maintaining) ou [adicionando o domínio e os segmentos de URL](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls#adding) que compõem os URLs do seu site. Depois de adicionar as regras necessárias, você verá um detalhamento útil de suas informações na interface.

Aqui estão algumas dicas úteis:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Adding segments to your allow list**
        </DNT>
      </th>

      <th>
        <DNT>
          **Tip**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Use segmentos de URL constantes.
      </td>

      <td>
        Adicione apenas os segmentos de URL que permanecem constantes em muitas visualizações de página. Não adicione segmentos exclusivos, como IDs ou categorias altamente específicas, pois isso pode levar a [problemas de agrupamento métrico](/docs/features/metric-grouping-issues).
      </td>
    </tr>

    <tr>
      <td>
        Insira correspondências exatas.
      </td>

      <td>
        Insira quaisquer segmentos de URL como correspondências exatas, incluindo maiúsculas e minúsculas.
      </td>
    </tr>

    <tr>
      <td>
        Use regras existentes.
      </td>

      <td>
        Se uma regra já aparecer para um domínio:

        1. Vá para

           <DNT>
             **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings > Segment allow lists**
           </DNT>

           .

        2. Em vez de criar uma nova regra, edite a regra existente e adicione o domínio ao campo

           <DNT>
             **Allow listed segments**
           </DNT>

           da interface.
      </td>
    </tr>

    <tr>
      <td>
        Subdomínio do grupo.
      </td>

      <td>
        Agrupe subdomínios semelhantes como `foo.domain.com` e `bar.domain.com` em `*.domain.com`. Esse agrupamento deve ocorrer logo antes do nome de domínio de nível superior.
      </td>
    </tr>

    <tr>
      <td>
        Configure aplicativos de página única.
      </td>

      <td>
        Se o seu site for um aplicativo de página única e você vir apenas `/` nas visualizações de página, seu agrupamento está funcionando corretamente. O New Relic registra solicitações subsequentes à medida que o AJAX é carregado, e sua [página<DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls)conterá informações mais detalhadas. Caso contrário, siga as dicas deste documento.
      </td>
    </tr>

    <tr>
      <td>
        Remova regras quando apropriado.
      </td>

      <td>
        Se precisar remover uma regra, obtenha suporte em [support.newrelic.com](https://support.newrelic.com/).
      </td>
    </tr>
  </tbody>
</table>
