---
title: Los extremos mínimos de API aparecen como una transacción
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

Si el agente .NET está monitoreando una aplicación Asp..NET Core “API mínimas”, pueden aparecer múltiples extremos como una sola transacción web. Esto se debe a que los extremos comparten la misma ruta incluso si tienen diferentes métodos de solicitud HTTP.

Para diferenciar estos extremos, recomendamos aplicar la llamada API `SetTransactionName()` .

## Solución [#solution]

Agregue `SetTransactionName()` para darle a cada extremo un nombre de transacción único. Si bien sus argumentos para la llamada API pueden variar, recomendamos agregar `SetTransactionName()` como en el siguiente ejemplo:

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

Puede leer sobre cómo configurar nombres para transacciones en nuestro [documento SetTransactionName](/docs/agents/net-agent/net-agent-api/settransactionname-net-agent-api).
