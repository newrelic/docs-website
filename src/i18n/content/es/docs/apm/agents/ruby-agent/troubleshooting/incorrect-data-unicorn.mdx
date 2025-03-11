---
title: Conteos incorrectos con Unicornio
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: Troubleshooting for New Relic Ruby APM monitoring for use of Unicorn when metric and custom event metrics seem too low.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Estás usando New Relic Ruby APM y Unicorn juntos, pero los recuentos de métrica y evento personalizado parecen demasiado pequeños.

## Solución

Haga que Unicorn llame manualmente a `NewRelic::Agent.shutdown` para ejecutar los controladores de salida del agente. Algunos de los métodos de salida de Unicorn impiden que el agente se cierre como se esperaba. El siguiente cambio ejecuta el método de cierre de New Relic antes de finalizar el proceso Unicorn.

Esta solución se basa en la bifurcación de [@expectedbehavior](https://github.com/expectedbehavior) de [la gema unicorn-worker-killer](https://github.com/expectedbehavior/unicorn-worker-killer).

1. Agregue esto a su Gemfile usando:

   ```
   gem 'unicorn-worker-killer', git: 'https://github.com/expectedbehavior/unicorn-worker-killer'
   ```

   Si ya estás usando `unicorn-worker-killer` en tu Gemfile, actualiza la referencia para usar esta bifurcación.

2. Manojo:

   ```
   bundle install
   ```

3. Actualice su configuración de unicornio para incluir:

   ```
   require "unicorn/worker_killer"

   ::Unicorn::WorkerKiller.configure do |config|
     config.before_kill do |signal|
       ::NewRelic::Agent.increment_metric("Custom/UnicornWorkerBeforeKillSignal/#{signal}")
       ::NewRelic::Agent.shutdown
     end
   end
   ```

4. Reinicia tu servidor
