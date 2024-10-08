---
title: Rastreamento de cliente HTTP em Ruby
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'Information about HTTP tracing in the New Relic Ruby agent, including supported clients and versions.'
freshnessValidatedDate: never
translationType: machine
---

O agente Ruby pode trace solicitações HTTP de saída feitas pelo seu aplicativo ou script para:

* Registre métricas sobre quanto tempo suas solicitações HTTP estão demorando e quais hosts elas estão atingindo.
* Anote o rastreamento da transação com nós para cada solicitação HTTP.
* Forneça [distributed tracing](/docs/distributed-tracing/concepts/introduction-distributed-tracing/) para solicitações entre aplicativos instrumentados com New Relic.

## Biblioteca de cliente HTTP suportada [#supported_libraries]

A seguinte biblioteca cliente HTTP é atualmente suportada pelo agente Ruby:

<table>
  <thead>
    <tr>
      <th width={150}>
        Nome
      </th>

      <th width={200}>
        Versão mínima suportada
      </th>

      <th>
        Notas
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [Async::HTTP](https://github.com/socketry/async-http)
      </td>

      <td>
        0,59,0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [Meio-fio](https://github.com/taf2/curb)
      </td>

      <td>
        0.9.3
      </td>

      <td>
        Curl::Multi requests obtêm instrumentação parcial. Consulte [Notas sobre Curb](#curb).
      </td>
    </tr>

    <tr>
      <td>
        [Éton](https://github.com/typhoeus/ethon)
      </td>

      <td>
        0.12.0
      </td>

      <td>
        Veja [notas de Ethon](#ethon).
      </td>
    </tr>

    <tr>
      <td>
        [Excon](https://github.com/geemus/excon)
      </td>

      <td>
        0,56,0
      </td>

      <td>
        Veja [notas do Excon](#excon).
      </td>
    </tr>

    <tr>
      <td>
        [Cliente HTTP](https://github.com/nahi/httpclient)
      </td>

      <td>
        2.8.3
      </td>

      <td>
        A instrumentação de solicitações assíncronas não é suportada.
      </td>
    </tr>

    <tr>
      <td>
        [http.rb](https://github.com/httprb/http)
      </td>

      <td>
        2.2.2
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [HTTPX](https://honeyryderchuck.gitlab.io/httpx/)
      </td>

      <td>
        1.0.0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        Net::HTTP
      </td>

      <td>
        N/A (parte da biblioteca padrão Ruby)
      </td>

      <td>
        Também inclui biblioteca construída em Net::HTTP, como [httparty](http://johnnunemaker.com/httparty/).
      </td>
    </tr>

    <tr>
      <td>
        [Tifeu](https://github.com/typhoeus/typhoeus)
      </td>

      <td>
        1.3.0
      </td>
    </tr>
  </tbody>
</table>

## Notas de Ethon [#ethon]

A mesma equipe que mantém o Ethon e depende do Ethon para sua funcionalidade também mantém o Typhoeus. Para evitar relatórios duplicados para cada solicitação HTTP, o agente desativa a instrumentação Ethon ao detectar o Typhoeus.

## Notas do Excon [#excon]

O agente Ruby suporta a versão Excon <DNT>**0.56.0 or higher.**</DNT> A instrumentação Excon depende da capacidade de adicionar um middleware Excon à chave `:middlewares` de `Excon.defaults`, portanto, se seu aplicativo modificar `Excon.defaults` você deve garantir que preserva o valor de `:middlewares` chave.

## Notas de meio-fio [#curb]

O agente Ruby suporta a versão Curb <DNT>**0.9.3 or higher.**</DNT> A instrumentação Curb em JRuby **não** é suportada.

Atualmente, as solicitações feitas por meio da API `Curl::Multi` têm suporte apenas parcial distributed tracing . O agente Ruby registrará um único nó de rastreamento de transação representando todo o lote, mas você não poderá ver os detalhes sobre solicitações individuais no lote.
