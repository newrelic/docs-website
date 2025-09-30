---
title: 'Erros de CoCreate: nenhum log de eventos'
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If your .NET app does not report data to New Relic, or if it does not have an event log, check for profiler conflicts.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Depois de gerar tráfego e esperar alguns minutos, seu aplicativo .NET não reporta dados ao New Relic. Além disso, não há log de eventos do New Relic para seu aplicativo .NET.

## Solução

Você pode estar executando outro profiler que entra em conflito com o New Relic. Devido à arquitetura do .NET, você pode executar apenas um profiler por vez.

Para verificar se o New Relic está em conflito com outro profiler:

1. Verifique se há erros no log de eventos do seu aplicativo; por exemplo:

   ```
   NET Runtime version 2.0.50727.4234 - Failed to CoCreate profiler. Profiler CLSID: '{TRQGTQJM-KMJB-FQGP-VNGG-KUQTZWCKQ6QQ}'.
   ```

   ```
   NET Runtime version 4.0.30319.296 - Loading profiler failed during CoCreateInstance. Profiler CLSID: '{71DA0A04-7777-4EC6-9643-7D28B46A8A41}'.
   ```

2. Compare o CLSID no erro com os CLSIDs da New Relic:

   ```
   {71DA0A04-7777-4EC6-9643-7D28B46A8A41} (agent for .NET Framework)
   {36032161-FFC0-4B61-B559-F6C5D41BAE5A} (agent for .NET Core)
   ```

3. Faça um dos seguintes:

   * Se o CLSID não corresponder, desinstale o outro profiler.
   * Se o CLSID corresponder, verifique se há [erros de permissão CoCreateInstance](/docs/agents/net-agent/troubleshooting/cocreateinstance-errors-no-profiler-log).

## Causa

Esses erros `NET Runtime version` indicam que há outro profiler .NET em execução. O agente New Relic .NET deve ser registrado como um profiler com o Common Language Runtime (CLR) como profiler para funcionar. O CLR chama o agente .NET quando o código é carregado, e o agente utiliza o código para a chamada do método, conforme apropriado.
