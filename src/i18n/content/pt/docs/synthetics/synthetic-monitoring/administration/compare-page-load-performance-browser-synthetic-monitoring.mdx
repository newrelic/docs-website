---
title: Compare o desempenho de carregamento da página no browser e no monitoramento sintético
tags:
  - Synthetics
  - Synthetic monitoring
  - Administration
metaDescription: 'For a direct page load time comparison between real user (browser) interactions and synthetic monitors, use New Relic''s comparative charting feature.'
freshnessValidatedDate: never
translationType: machine
---

[O monitoramento sintético](/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics) verifica regularmente seus sites, transações comerciais críticas e endpoints de API para medir o desempenho ideal. Nosso [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)rastreia os resultados reais do desempenho da página da Web em todas as variações de dispositivos, browsers e velocidades de conexão. Usados em conjunto, eles fornecem uma comparação direta do tempo de carregamento da página entre a interação real do usuário (browser) e o monitor Sintético.

<img
  title=""
  alt=""
  src="/images/browser_screenshot-full_synthetic-chart.webp"
/>

## Compare desempenho e tendências [#features]

O recurso de gráficos comparativos da New Relic ajuda gerentes e equipes de operações, fornecendo:

* Benchmark para tempo de carregamento da página
* Insights adicionais para ajudá-lo a planejar onde otimizar seu site
* Comparações das tendências do Sintético com o desempenho real do browser sem a necessidade de alternar entre nossos recursos de monitoramento.

Por exemplo, durante uma interrupção de página, você pode comparar tendências de monitoramento sintético com comparações reais de monitoramento de browser para ver se um problema também está visível na interface Sintético ou se é causado por variáveis fora do New Relic. Isso ajuda você a saber com mais eficiência onde agir.

## O que você precisa [#requirements]

O recurso de gráficos comparativos requer:

* Monitoramento de Browser habilitado com o [agente SPA do browser](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring#spa) ([versão 885](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) ou superior).
* Um [browser Sintético ou monitorcom script](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors) com um ou mais testes nas mesmas URLs monitoradas pelo agente browser.

## Ver dados de comparação [#view-ui]

<img
  title="synthetic monitors chart"
  alt="synthetic monitors chart"
  src="/images/browser_screenshot-full_synthetic-monitors-comparison-chart.gif"
/>

<figcaption>
  Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser >**</DNT> (selecione um aplicativo de browser) <DNT>**> Page views >**</DNT> (clique em um monitor de página por monitoramento sintético) > (role para baixo até o gráfico <DNT>**Synthetic monitors comparison**</DNT> ).
</figcaption>

O recurso de gráficos comparativos aparece sempre que o monitoramento sintético identifica uma correspondência de URL com o monitoramento do Browser e pode compará-la.

Com base nas [fontes de dados de comparação](#data-sources), o gráfico <DNT>**Synthetic monitors comparison**</DNT> mostra:

* Comparação percentual de velocidade geral entre visualizações de páginas do browser (usuário real) e quaisquer URLs correspondentes encontrados no monitor Sintético que o usuário tem permissão para visualizar
* Quantidade de URLs encontradas no monitor Sintético que correspondem à URL agregada do browser

### Não vê dados no gráfico <DNT>**Synthetic monitors comparison**</DNT> ?

Se você não visualizar dados, observe que, em alguns casos, o monitor simples do browser termina antes que o browser agente tenha a chance de coletar o evento `BrowserInteraction`. Neste caso, nenhum dado de gráfico comparativo é exibido na interface. Para resolver esse problema, crie um script monitor de browser com e adicione uma chamada para esperar (suspensão) após o carregamento da página. Aqui está um exemplo:

```js
$browser.get('https://www.mywebsite.com').then(function() {
  return $browser.sleep(1000);
});
```

## Fontes de dados

A New Relic utiliza essas fontes de dados para comparação do Sintético e do browser na interface. Para uma análise mais profunda dos dados do gráfico comparativo que você vê na interface, utilize o [criador de consulta](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-specify-data) para executar [a consulta NRQL](/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql).

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Variável
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Monitor ID da conta
      </td>

      <td>
        A conta a partir da qual você está executando o monitor:

        ```sql
        SELECT monitorAccountId FROM BrowserInteraction
        ```
      </td>
    </tr>

    <tr>
      <td>
        ID do monitor
      </td>

      <td>
        O ID único atribuído ao seu monitor Sintético:

        ```sql
        SELECT monitorId FROM BrowserInteraction
        ```
      </td>
    </tr>

    <tr>
      <td>
        Monitor ID do trabalho
      </td>

      <td>
        O ID de uma única execução do monitor Sintético, que começou em um horário específico e se originou em um local específico:

        ```sql
        SELECT monitorJobId FROM BrowserInteraction LIMIT 1
        ```
      </td>
    </tr>

    <tr>
      <td>
        Média real do usuário
      </td>

      <td>
        O tempo médio de carregamento da página para um usuário real que visualiza seu site (exclui monitor Sintético).
      </td>
    </tr>

    <tr>
      <td>
        Visualizações reais de páginas de usuários
      </td>

      <td>
        Detalhes de visualização de página provenientes de visitantes do seu site (excluindo monitor Sintético).
      </td>
    </tr>

    <tr>
      <td>
        Média de Sintético
      </td>

      <td>
        O tempo médio de carregamento da página do monitor Sintético simples ou com script executado em seu site.
      </td>
    </tr>

    <tr>
      <td>
        Visualizações de páginas do Sintético
      </td>

      <td>
        Somente tráfego gerado pelo monitor Sintético simples ou scriptado.
      </td>
    </tr>
  </tbody>
</table>
