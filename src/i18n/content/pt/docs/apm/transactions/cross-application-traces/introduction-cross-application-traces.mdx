---
title: Introdução ao rastreamento multiaplicativo
tags:
  - APM
  - Transactions
  - Cross application traces
metaDescription: APM's cross application tracing feature allows you to view details for applications that happen across multiple applications.
freshnessValidatedDate: never
translationType: machine
---

O rastreamento multiaplicativo do APM permite vincular transações entre seu aplicativo monitor APM.

## O que é rastreamento multiaplicativo? [#feature]

<Callout variant="important">
  Multiaplicativo tracing, foi descontinuado em favor do [recursos do distributed tracing ](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing)e será removido em versões futuras do agente. Distributed tracing é uma melhoria no recurso de rastreamento multiaplicativo e é recomendado para grandes sistemas distribuídos.
</Callout>

Transmissão de link de rastreamento multiaplicativo do APM entre aplicativos APM em sua arquitetura orientada a serviços (SOA). Isso é útil, por exemplo, para identificar problemas de desempenho entre seu próprio aplicativo (o aplicativo "chamador") e quaisquer serviços internos ou externos (o aplicativo "chamado"), como tráfego para serviços internos.

Isso ajuda você a:

* Identifique gargalo em seus fluxos de chamadas multiaplicativos.
* Entenda de ponta a ponta como transações específicas são utilizadas por outros aplicativos e serviços.
* Diagnostique problemas com mais rapidez e melhore a colaboração entre equipes.

## Considerações de segurança [#security]

O rastreamento multiaplicativo depende de três cabeçalhos HTTP para trocar informações entre o aplicativo chamador e o aplicativo chamado.

* Os dois primeiros (`X-NewRelic-ID` e `X-NewRelic-Transaction`) aparecem como cabeçalhos de solicitação HTTP em solicitações de saída enviadas por um aplicativo instrumentado.
* O cabeçalho restante (`X-NewRelic-App-Data`) será inserido na resposta HTTP se o aplicativo chamado pertencer à mesma conta New Relic que o aplicativo chamador.

A New Relic ofusca todos esses cabeçalhos usando um esquema de ofuscação idêntico ao que usamos para <InlinePopover type="browser"/>, mas com uma chave diferente.

<table>
  <thead>
    <tr>
      <th width={250}>
        <DNT>
          **HTTP header**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `X-NewRelic-ID`

        (no cabeçalho da solicitação)
      </td>

      <td>
        Contém o ID da conta e o ID do aplicativo que está fazendo a chamada
      </td>
    </tr>

    <tr>
      <td>
        `X-NewRelic-Transaction`

        (no cabeçalho da solicitação)
      </td>

      <td>
        Contém informações sobre uma transação individual criada pela chamada (um GUID exclusivo para a transação chamadora, juntamente com informações sobre chamadas upstream que geraram a transação)
      </td>
    </tr>

    <tr>
      <td>
        `X-NewRelic-App-Data`

        (na resposta, se aplicável)
      </td>

      <td>
        Contém informações sobre o aplicativo chamado, incluindo:

        * ID da conta
        * ID do aplicativo
        * Nome da transação chamada
        * Informações de tempo para a transação chamada
        * GUID da transação chamada
      </td>
    </tr>
  </tbody>
</table>
