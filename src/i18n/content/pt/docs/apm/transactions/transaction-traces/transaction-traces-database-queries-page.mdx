---
title: 'Rastreamento da transação: página de consulta ao banco de dados'
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: 'In APM, transaction traces can include database query data, which gives you deeper insight into performance issues.'
freshnessValidatedDate: never
translationType: machine
---

No [APM](/docs/apm/new-relic-apm/getting-started/welcome-new-relic-apm), o rastreamento da transação pode conter dados de consulta ao banco de dados. Use a página <DNT>**Database queries**</DNT> para analisar uma transação lenta ou alterar as configurações de coleta de consulta ao banco de dados.

## Encontre consulta ao banco de dados [#view-sql]

Se a consulta ao banco de dados de dados estiver associada ao [rastreamento de transação selecionado](/docs/apm/transactions/transaction-traces/transaction-traces#find-view), a página <DNT>**Database queries**</DNT> ficará visível na página de detalhes <DNT>**Transaction trace**</DNT> .

Se você espera ver os dados do banco de dados para um rastreamento de transação, mas não os vê, pode ser necessário alterar as [configurações da consulta ao banco de dados](#settings).

<img
  title="transaction trace database queries tab"
  alt="A screenshot depicting the transaction trace database queries tab in the UI."
  src="/images/apm_screenshot-crop_transaction-trace-database-queries-tab.webp"
/>

<figcaption>
  Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace) > Database queries**</DNT>.
</figcaption>

## Use consulta ao banco de dados [#use]

Aqui estão situações em que você pode usar a página **de consulta ao banco de dados** para analisar e solucionar uma transação lenta:

* Você percebe na [página **Overview** do APM](/docs/apm/applications-menu/monitoring/apm-overview-page) que uma transação está anormalmente lenta.
* Você seleciona um [rastreamento da transação](/docs/apm/transactions/transaction-traces/transaction-traces) para obter mais detalhes sobre essa transação.
* Você seleciona a página **Database queries** para examinar a consulta lenta no trace e usá-la como base para [solucionar problemas e melhorar o desempenho do seu aplicativo](#troubleshooting).
* Quando existir um stack trace associado a uma consulta ao banco de dados, clique na linha da **tabela de consultas ao banco de dados** para visualizar o stack trace formatado.

<img
  title="transaction trace stacktrace view"
  alt="A screenshot showing the stacktrace view of a transaction trace in the UI"
  src="/images/apm_screenshot-crop_transaction-trace-stacktrace-view.webp"
/>

## Definir configurações de consulta ao banco de dados [#settings]

Você pode alterar as configurações de consulta ao banco de dados da mesma forma que altera outras [configurações de rastreamento da transação](/docs/apm/transactions/transaction-traces/configure-transaction-traces); por exemplo, por meio da configuração do agente New Relic ou, para alguns agentes, por meio da interface.

As alterações comuns nas configurações da consulta ao banco de dados incluem:

* [Coletando dados brutos de consulta em vez de ofuscar ou desligar a coleta de consulta](/docs/apm/transactions/transaction-traces/configure-transaction-traces#record-sql)
* Alterando o limite stack trace
* Ativando a coleta de plano de explicação de consulta

## Use a consulta ao banco de dados para melhorar o desempenho [#troubleshooting]

Aqui estão algumas dicas para melhorar o desempenho do banco de dados do seu aplicativo:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Use database queries**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tempo
      </td>

      <td>
        Procure consultas onde o `TOTAL DURATION` contribui com grande quantidade de tempo para o ritmo geral de transação. Isso indica um bom lugar para tentar aprimorar sua consulta ao banco de dados com um índice ou alguma outra otimização.
      </td>
    </tr>

    <tr>
      <td>
        Consulta duplicada
      </td>

      <td>
        Procure consultas que consultem repetidamente o mesmo tipo de informação; por exemplo, consultas múltiplas para procurar IDs de contas individuais. Tente reescrever a consulta para `INCLUDE` os valores específicos (IDs de conta 1, 2, 10, 14, 17 etc.) para que uma única consulta possa obter todos os itens relevantes.
      </td>
    </tr>

    <tr>
      <td>
        Sobrecarga de banco de dados
      </td>

      <td>
        Observe a estrutura da sua consulta para ver se há oportunidades de combinar diferentes tipos de informações em uma única ligação; por exemplo, consultando o ID da conta, nome, etc. Isto é útil, por exemplo, se o seu centro de banco de dados estiver em uma localização geográfica diferente, pois reduzirá a sobrecarga.

        O tempo necessário para a solicitação e resposta do banco de dados pode ser muito rápido. Porém, ao combinar solicitações em menos chamadas, você pode reduzir ainda mais esse tempo.
      </td>
    </tr>

    <tr>
      <td>
        MySQL
      </td>

      <td>
        Na página principal [do APM <DNT>**Summary**</DNT>](/docs/apm/applications-menu/monitoring/apm-overview-page) do seu aplicativo, compare o tempo do banco de dados no gráfico principal com outro tempo de processamento. Picos repentinos ou maiores quantidades de tempo de banco de dados em comparação com outros tempos de processamento podem indicar problemas.
      </td>
    </tr>
  </tbody>
</table>

## Encontre outra consulta lenta [#slow-queries]

A página **Trace details** é útil para examinar os detalhes de uma transação específica. Para ver todas as consultas mais lentas do seu aplicativo em um só lugar, use o [recurso consulta lenta](/docs/apm/applications-menu/monitoring/viewing-slow-query-details).
