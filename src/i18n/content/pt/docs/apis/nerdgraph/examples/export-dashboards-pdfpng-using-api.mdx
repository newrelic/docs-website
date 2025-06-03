---
title: 'Tutorial do NerdGraph: Exportar painel como arquivos'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to understand how entities are related.
freshnessValidatedDate: never
translationType: machine
---

Você precisa agendar relatórios que contenham gráficos ou painéis? Você quer automatizar a forma como você compartilha o painel? Você pode obter seu <InlinePopover type="dashboards"/>como arquivos PDF ou PNG programaticamente com uma mutação [GraphQL](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) . Você também pode [exportar painéis como arquivos PDF usando a interface](/docs/dashboards/manage-your-dashboard/manage-your-dashboard#dash-export).

Por exemplo, você pode gerar [versões estáticas e instantâneas](/docs/apis/nerdgraph/examples/nerdgraph-dashboards/#other-operations) do painel do New Relic e enviá-las para o [Slack](/docs/alerts-applied-intelligence/notifications/notification-integrations/#slack) ou [baixá-las como arquivos](/docs/apis/nerdgraph/examples/export-dashboards-pdfpng-using-api/).

## Exportar páginas dashboard [#dash-multiple]

1. Obtenha o GUID do dashboard: clique no botão <Icon name="fe-more-horizontal"/> ícone ao lado do nome do dashboard para acessar o widget de metadados e ver o GUID do dashboard.

2. Obtenha os GUIDs das páginas individuais usando a consulta abaixo:

   ```graphql
   {
    actor {
       entitySearch(query: "id ='YOUR_PAGE_GUID' OR parentId ='YOUR_PAGE_GUID' AND tags.isDashboardPage = 'true'" ) {
         results {
           entities {
             guid
             name
             ... on DashboardEntityOutline {
               guid
               name
               dashboardParentGuid
             }
           }
         }
       }
     }
   }
   ```

3. Execute a mutação <DNT>**dashboardCreateSnapshotURL**</DNT> no [NerdGraphQL Explorer](https://api.newrelic.com/graphiql) quantas vezes forem as páginas dashboard que você deseja exportar. Você só precisa fornecer o GUID da página dashboard desejado como parâmetro.

4. Obtenha o link para recuperar a página do seu dashboard em PDF. O link é semelhante a:

   ```
   https://gorgon.nr-assets.net/image/e0c22263-2d88-40bc-940a-b885dbc1d98d?format=PDF&width=2000&height=2000
   ```

5. [Configure](#configure) o arquivo exportado, se necessário.

## Configure o arquivo que você recupera [#configure]

Edite o link retornado para alterar o formato da sua exportação (PDF ou PNG) ou redimensione-o.

Por exemplo, se você obtiver o link:

```
https://gorgon.nr-assets.net/image/e0c22263-2d88-40bc-940a-b885dbc1d98d?format=PDF&width=2000&height=2000
```

Você poderia:

* Substitua `PDF` por `PNG` para obter uma imagem.
* Modifique os campos de largura e altura para ajustar o tamanho às suas necessidades. O valor máximo é `2000`.

## Resolução de problemas [#troubleshooting]

Veja o que fazer se você encontrar algum dos seguintes erros ao tentar exportar um dashboard:

* Na interface do New Relic: <DNT>**We ran into an error while creating the PDF. Please try again**</DNT>
* Do New Relic NerdGraph: <DNT>**Operation on dashboard entity failed with guid:YOUR_GUID with cause: Error 504 calling Gorgon with url [https://chart-image.service.newrelic.com/dashboard-url-from-guid/YOUR_GUID](https://chart-image.service.newrelic.com/dashboard-url-from-guid/YOUR_GUID): upstream request timeout**</DNT>

Esses erros podem ser causados caso a geração do PDF ultrapasse o tempo máximo de resposta da API. Se você encontrar esses erros, verifique se algum widget em seu dashboard tem uma janela de tempo grande. Por exemplo, você pode comparar dados de um mês inteiro com os de meses anteriores. Se você vir uma janela de tempo grande, tente diminuir a janela.

Outra possível causa desses erros é que seu dashboard pode ter um grande número de widgets. Se você tiver um widget que não usa, tente remover alguns para ver se isso resolve o erro.
