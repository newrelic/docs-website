---
title: Os endpoints mínimos da API aparecem como uma transação
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting steps for using the New Relic .NET Agent in a Minimal APIs app with duplicate route paths but different HTTP request methods.
freshnessValidatedDate: '2023-06-13T00:00:00.000Z'
translationType: machine
---

## Problema [#problem]

Se o agente .NET estiver monitorando uma aplicação Asp..NET Core “Minimal API”, vários endpoints podem aparecer como uma única transação web. Isso ocorre porque o endpoint compartilha o mesmo caminho de rota, mesmo que tenham métodos de solicitação HTTP diferentes.

Para diferenciar esses endpoints, recomendamos aplicar a chamada de API `SetTransactionName()` .

## Solução [#solution]

Adicione `SetTransactionName()` para dar a cada endpoint um nome de transação exclusivo. Embora seus argumentos para a chamada de API possam variar, recomendamos adicionar `SetTransactionName()` como no exemplo abaixo:

```cs
// map a minimal API with GET and POST endpoints on the same route
app.MapGet(“/minimalApi”, () =>
{
  NewRelic.Api.Agent.NewRelic.SetTransactionName(null, name: “minimalApi/Get”);
  return Results.Ok(“Get: minimalApi”);
});
app.MapPost(“/minimalApi”, () =>
{
  NewRelic.Api.Agent.NewRelic.SetTransactionName(null, name: “minimalApi/Post”);
  return Results.Ok(“Post: minimalApi”);
});
```

Você pode ler sobre como definir nomes para transação em nosso [documento SetTransactionName](/docs/agents/net-agent/net-agent-api/settransactionname-net-agent-api).
