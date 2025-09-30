---
title: 'Errores de CoCreate: No hay logde eventos'
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

Después de generar tráfico y esperar unos minutos, su aplicación .NET no informa datos a New Relic. Además, no existe log de eventos de New Relic para su aplicación .NET.

## Solución

Es posible que esté ejecutando otro generador de perfiles que entre en conflicto con New Relic. Debido a la arquitectura de .NET, sólo puede ejecutar un generador de perfiles a la vez.

Para verificar si New Relic está en conflicto con otro generador de perfiles:

1. Verifique log de eventos de su aplicación para detectar errores; Por ejemplo:

   ```
   NET Runtime version 2.0.50727.4234 - Failed to CoCreate profiler. Profiler CLSID: '{TRQGTQJM-KMJB-FQGP-VNGG-KUQTZWCKQ6QQ}'.
   ```

   ```
   NET Runtime version 4.0.30319.296 - Loading profiler failed during CoCreateInstance. Profiler CLSID: '{71DA0A04-7777-4EC6-9643-7D28B46A8A41}'.
   ```

2. Compare el CLSID en el error con los CLSID de New Relic:

   ```
   {71DA0A04-7777-4EC6-9643-7D28B46A8A41} (agent for .NET Framework)
   {36032161-FFC0-4B61-B559-F6C5D41BAE5A} (agent for .NET Core)
   ```

3. Haz una de las siguientes:

   * Si el CLSID no coincide, desinstale el otro generador de perfiles.
   * Si el CLSID coincide, verifique si hay [errores de permisos de CoCreateInstance](/docs/agents/net-agent/troubleshooting/cocreateinstance-errors-no-profiler-log).

## Causa

Estos errores `NET Runtime version` indican que hay otro generador de perfiles .NET ejecutándose. El agente New Relic .NET debe estar registrado como generador de perfiles con Common Language Runtime (CLR) como generador de perfiles para poder funcionar. El CLR llama al agente .NET cuando se carga el código y el agente instrumenta el código para la llamada al método según corresponda.
