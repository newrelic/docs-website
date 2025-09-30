---
title: Coleta de lixo
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'To track garbage collection time with New Relic''s Ruby agent, use GC::Profiler.enable (CRuby 1.9.2 or higher) or GC.enable_stats (REE).'
freshnessValidatedDate: never
translationType: machine
---

A coleta de lixo (GC) encontra objetos de dados não utilizados e recupera esse espaço de memória para uso por outro processo. O agente New Relic Ruby pode coletar informações sobre quanto tempo é gasto na coleta de lixo para aplicações rodando em CRuby 1.9.2 ou superior ou Ruby edição Enterprise, mas você deve habilitar explicitamente este recurso em seu aplicativo.

<Callout variant="important">
  Evite usar a coleta de lixo na produção por longos períodos de tempo, pois aumenta a sobrecarga.
</Callout>

## Habilitar instrumentação de coleta de lixo [#gc_setup]

Para ativar o recurso, adicione a chamada apropriada na inicialização do seu aplicativo.

* CRuby 1.9.2 ou superior: `GC::Profiler.enable`
* Edição Ruby Enterprise: `GC.enable_stats`

Para o aplicativo Rails, você pode adicionar esta chamada a um inicializador em `config/initializers` ou adicioná-la diretamente ao seu arquivo `config/application.rb` .

## Veja estatísticas de GC em todo o aplicativo [#gc_view]

Para visualizar estatísticas gerais de coleta de lixo:

1. [Log no New Relic](https://one.newrelic.com), selecione um aplicativo Ruby e vá para

   <DNT>
     **Summary**
   </DNT>

   .

2. Na página APM

   <DNT>
     **Summary**
   </DNT>

   , procure estatísticas

   <DNT>
     **GC Execution**
   </DNT>

   no gráfico

   <DNT>
     **Web transactions time**
   </DNT>

   .

<img
  title="garbage_collection_overview"
  alt="garbage_collection_overview"
  src="/images/apm_screenshot-full_garbage-collection-transaction.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Summary**</DNT>: No gráfico de tempo de transação da Web, as estatísticas de coleta de lixo são rotuladas como <DNT>**GC Execution**</DNT>.
</figcaption>

## Ver métricas detalhadas de GC [#detailed]

Para visualizar métricas de coleta de lixo por transação, acesse <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Transactions > (select a transaction)**</DNT>. Você pode então visualizar a quantidade de tempo gasto no GC e o número médio de vezes que o GC é chamado para cada transação. Oculte outros rótulos para obter uma visão detalhada da coleta de lixo.

Informações detalhadas incluem:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Garbage collection details**
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
        Tendência do tempo de coleta de lixo
      </td>

      <td>
        A coleta de lixo geralmente leva um pouco de tempo e, portanto, a linha de tendência pode não estar visível em seus gráficos. Para visualizar a tendência no tempo de coleta de lixo, navegue até o [gráfico de visão geral](#gc_view) ou até [a métrica detalhada da transação](#detailed). Em seguida, oculte todos os rótulos do gráfico, exceto <DNT>**GC Execution**</DNT> , selecionando cada rótulo.
      </td>
    </tr>

    <tr>
      <td>
        Número médio de chamadas
      </td>

      <td>
        Para visualizar o número médio de chamadas de coleta de lixo para cada ação do controlador: Na [página](/docs/apm/applications-menu/monitoring/applications-overview-dashboard) [<DNT>**Summary**</DNT>do APM](/docs/apm/applications-menu/monitoring/applications-overview-dashboard), selecione <DNT>**Transaction**</DNT>. Em seguida, selecione uma ação do controlador e visualize o <DNT>**App Server Breakdown**</DNT>.
      </td>
    </tr>
  </tbody>
</table>
