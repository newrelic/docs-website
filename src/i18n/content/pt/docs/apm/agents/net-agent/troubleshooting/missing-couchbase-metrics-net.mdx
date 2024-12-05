---
title: Métrica Couchbase ausente (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'What to do if you see metrics and transaction segments for some of your Couchbase activity, but not all of it, such as Get, GetDocument, Remove, Upsert.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você vê segmentos métricos e de transação para algumas de suas atividades no Couchbase, mas não todas. Por exemplo, o agente .NET da New Relic não faz chamadas instrumentadas para:

* `Get(string id)`
* `GetDocument(string id)`
* `Remove(string id)`
* `Remove(string id, ulong cas)`
* `Upsert<T>(string id, T value)`

## Solução

O Couchbase SDK contém métodos para `Get()`, `Remove()` e `Upsert()` que atuam em vários documentos. Esses métodos usam processos multithread para chamar outros métodos públicos no Couchbase SDK.

Para evitar dupla instrumentação, o agente .NET da New Relic instrumenta automaticamente os vários métodos de documentos. No entanto, o agente não instrumenta automaticamente os métodos básicos aos quais ele chama.

Para ver métricas adicionais e segmentos de transação para a atividade do Couchbase, use uma destas opções:

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Couchbase options**
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
    <tr id="couchbase-sdk">
      <td>
        Utilize métodos alternativos
      </td>

      <td>
        Use outros métodos no Couchbase SDK onde a instrumentação de agente .NET não está desabilitada. Por exemplo, se você usar `GetAsync(string id)` em vez de `Get(string id)`, suas chamadas serão instrumentadas.
      </td>
    </tr>

    <tr id="couchbase-xml">
      <td>
        Editar arquivo XML de instrumentação
      </td>

      <td>
        Se você não usar vários métodos de documento em seu aplicativo

        1. Comente os métodos no arquivo XML de instrumentação para Couchbase.
        2. Comente os métodos que estão comentando atualmente.
      </td>
    </tr>
  </tbody>
</table>
