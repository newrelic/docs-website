---
title: Como usar a interface de serviços externos
metaDescription: Here are tips about how to use the external services UI
freshnessValidatedDate: never
translationType: machine
---

A interface para serviços externos é um ótimo lugar para analisar um único serviço juntamente com seus serviços upstream e downstream. A interface começa com um mapa do serviço selecionado, juntamente com gráficos de desempenho mostrando os cinco principais resultados para tempo de resposta, taxas de transferência e taxas de erros. Se preferir, você também pode ver os mesmos detalhes do mapa representados em [formato de tabela](#table-view).

## Como encontrar o recurso de serviços externos [#where-externals]

O recurso de serviços externos está disponível no painel de navegação esquerdo quando você seleciona um serviço de monitor APM. Você pode abri-lo acessando <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**</DNT>. Selecione um aplicativo e, na seção <DNT>**Monitor**</DNT> , clique em <DNT>**External services**</DNT>.

## O mapa de serviços externos [#use-the-map]

O mapa de abertura exibe o serviço selecionado como um vértice (formato hexagonal) com retângulos ao redor dos serviços upstream ou downstream. A visualização inicial é o serviço downstream, portanto a guia <DNT>**Downstream entities**</DNT> é selecionada por padrão. Quando você está nessa guia, os gráficos de desempenho (<DNT>**Response time**</DNT>, <DNT>**Throughput**</DNT> e <DNT>**Error rate**</DNT>) se aplicam aos serviços downstream. Você pode clicar em <DNT>**Upstream entities**</DNT> para alternar para esses gráficos de desempenho.

<img
  title="Screenshot showing the opening map for external services"
  alt="Screenshot showing the opening map for external services"
  src="/images/apm_screenshot-crop_external-service-intro.webp"
/>

### Ver detalhes da transação [#drill-down]

Na página inicial dos serviços externos, cada um dos retângulos contém vértices que representam os serviços upstream ou downstream. Os vértices são conectados entre serviços por arestas (linhas). Quando você detalha um serviço específico, os vértices nessas páginas de detalhamento se tornam o terminal do serviço para que você possa ver os detalhes da transação.

A espessura das linhas representa as taxas de transferência do serviço, e a escuridão da linha representa o tempo consumido (taxas de transferência vezes duração).

### Legenda do mapa [#map-legend]

Na legenda do mapa você tem a opção de selecionar dois tipos de serviços:

* <DNT>
    **Services**
  </DNT>

  : São serviços que você possui e tem instrumentado.

* <DNT>
    **Uninstrumented externals**
  </DNT>

  : são serviços não instrumentados que você pode ou não possuir.

## Como funcionam os gráficos de desempenho [#understand-data]

A página de abertura dos serviços externos exibe três gráficos de desempenho. Para o agente APM, esses gráficos de desempenho iniciais são preenchidos por dados métricos, enquanto para o OpenTelemetry, os valores iniciais são preenchidos por dados amostrados.

À medida que você detalha a página inicial – seja OpenTelemetry ou agente APM – cada página filha é preenchida por dados de amostra. Isso significa que se você não estiver vendo os dados esperados em páginas que mostram dados de amostra, talvez seja necessário aumentar sua [amostragem](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-setup#adjust-sampling).

Os gráficos de desempenho sempre refletem os dados da página que você está visualizando, mas o conjunto de gráficos de desempenho muda à medida que você faz uma busca detalhada abaixo da página de abertura. Aqui está o que você precisa para entender esses gráficos:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Gráfico de desempenho
      </th>

      <th>
        Página
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tempo de resposta
      </td>

      <td>
        Todas as páginas<br/> (APM e<br/> OpenTelemetry)
      </td>

      <td>
        A duração média das chamadas entre serviços na visualização inicial ou entre transações nas visualizações de detalhamento. A visualização inicial do APM mostra o tempo de resposta como dados métricos, que são baseados em todas as chamadas. A visualização inicial do OpenTelemetry mostra o tempo de resposta como dados trace , que são baseados apenas em chamadas de amostra.

        O tempo de resposta em todas as páginas de detalhamento mostra o tempo de resposta como dados trace , que são baseados apenas em chamadas de amostra. O quão bem isso representa o desempenho real do sistema depende da taxa de amostragem efetiva.
      </td>
    </tr>

    <tr>
      <td>
        Taxas de transferência
      </td>

      <td>
        Página de abertura<br/> (somente APM)
      </td>

      <td>
        O número total de chamadas entre dois serviços.
      </td>
    </tr>

    <tr>
      <td>
        Taxa de erros
      </td>

      <td>
        Página de abertura<br/> (somente APM)
      </td>

      <td>
        O número de erros por minuto para chamadas entre dois serviços.
      </td>
    </tr>

    <tr>
      <td>
        Contagem de chamadas de rastreamento
      </td>

      <td>
        Página de abertura<br/> (OpenTelemetry)

        Páginas de detalhamento<br/> (APM e<br/> OpenTelemetry)
      </td>

      <td>
        Representa o número de chamadas amostradas que temos para um determinado caminho entre dois serviços ou transações. Isto é inferior ao total das taxas de transferência, a menos que você esteja amostrando 100% de suas solicitações.
      </td>
    </tr>

    <tr>
      <td>
        Contagem de erros de rastreamento
      </td>

      <td>
        Página de abertura<br/> (OpenTelemetry)

        Páginas de detalhamento<br/> (APM e<br/> OpenTelemetry)
      </td>

      <td>
        O número de chamadas amostradas entre dois serviços ou transações que apresentaram erros.
      </td>
    </tr>
  </tbody>
</table>

## A tabela de serviços externos [#table-view]

Como complemento da visualização do mapa, a visualização em tabela lista todos os serviços relacionados em formato colunar. Ao clicar em <DNT>**List**</DNT> no canto superior direito da página, você verá os mesmos serviços na visualização do mapa:

<img
  title="Screenshot showing the table version of the external services map"
  alt="Screenshot showing the table version of the external services map"
  src="/images/apm_screenshot-crop_external-services-table.webp"
/>

Semelhante à visualização do mapa, você pode clicar em entidade específica (serviços) para ver a transação nas tabelas de detalhamento. Ao detalhar e encontrar um endpoint interessante, você pode clicar em <DNT>**Traces**</DNT> para alternar para detalhes distributed tracing .

À direita de cada coluna de desempenho há uma coluna <DNT>**% change**</DNT> (alteração percentual) correspondente. O cálculo da variação percentual é baseado no intervalo de tempo que você escolhe no seletor de hora principal e no seletor de hora de comparação (<DNT>**Compare to**</DNT>). O seletor de hora de comparação indica quanto antes da janela de tempo principal a comparação deve começar.

Aqui está um exemplo com <DNT>**Response time**</DNT>: Se o horário atual for 11h e o seletor de hora principal for <DNT>**last 30 minutes**</DNT> e o seletor de hora <DNT>**Compare to**</DNT> for <DNT>**1 hour ago**</DNT>:

* A duração é em média das 10h30 às 11h00

* O

  <DNT>
    **% change**
  </DNT>

  compara isso com a média das 9h30 às 10h

## Exemplo de fluxo de trabalho [#workflow-example]

Aqui está um fluxo de trabalho de mapa típico:

1. Procure a linha mais grossa e mais escura no mapa e siga-a até o serviço upstream ou downstream.

2. Clique no vértice upstream ou downstream.

3. Veja o detalhamento da transação entre os dois serviços.

   <img
     title="Screenshot showing calls to various endpoints in downstream service"
     alt="Screenshot showing calls to various endpoints in downstream service"
     src="/images/apm_screenshot-crop_external-services-downstream.webp"
   >
     <figcaption>
       Neste exemplo, uma das bordas mais grossas (linhas) vai do serviço Order-Composer até o do armazém endpoint no serviço Order Status.
     </figcaption>
   </img>

4. Se você decidir que uma determinada transação está demorando mais, clique nessa transação para focar especificamente em sua dependência.

   <img
     title="Screenshot showing the transaction between the Order-Composer service and the warehouse endpoint in the Order-Status service"
     alt="Screenshot showing the transaction between the Order-Composer service and the warehouse endpoint in the Order-Status service"
     src="/images/apm_screenshot-crop_external-services-specific-transaction.webp"
   >
     <figcaption>
       Nesta visualização detalhada, você pode ver a transação entre o serviço Order-Composer e o endpoint do warehouse no serviço Order-Status.
     </figcaption>
   </img>

5. A partir de qualquer ponto deste fluxo, consulte os gráficos de desempenho de apoio, que mostram as mudanças ao longo do tempo.

6. Se você chegar a um ponto no detalhamento em que deseja ver distributed tracing, clique em

   <DNT>
     **List**
   </DNT>

   no canto superior direito e, em seguida, clique em

   <DNT>
     **Traces**
   </DNT>

   na tabela.

   <img
     title="Screenshot showing the trace link in the table view"
     alt="Screenshot showing the trace link in the table view"
     src="/images/apm_screenshot-crop_external-services-link-table.webp"
   />

## Como visualizar serviços externos clássicos [#classic-toggle]

A visualização clássica de serviços externos ainda estará disponível se você estiver monitorando serviços existentes que utilizam rastreamento multiaplicativo. Como a visualização padrão são os serviços externos expandidos, você precisa clicar no botão de alternância <DNT>**Show new view**</DNT> para alternar para a visualização clássica.
