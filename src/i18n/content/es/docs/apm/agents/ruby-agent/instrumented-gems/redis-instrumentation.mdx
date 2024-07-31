---
title: Instrumentación redis
tags:
  - Agents
  - Ruby agent
  - Instrumented gems
metaDescription: The New Relic Ruby agent automatically instruments Redis tasks.
freshnessValidatedDate: never
translationType: machine
---

El [agente New Relic Ruby](/docs/agents/ruby-agent/getting-started/new-relic-ruby) instrumentó automáticamente la gema Redis (gema versión 3.0.0 o mas alto). Después de [instalar el agente](/docs/agents/ruby-agent/installation-configuration/ruby-agent-installation) y generar tráfico para su aplicación, puede ver las operaciones de Redis en la [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page), en la [página<DNT>**Databases**</DNT> ](/docs/apm/applications-menu/monitoring/databases-slow-queries-page)y en la [traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces). Por ejemplo, el gráfico principal de la página APM <DNT>**Summary**</DNT> mostrará información de Redis codificada por colores.

<Callout variant="tip">
  La instrumentación de Redis requiere la versión 3.13.0 o superior del agente Ruby.
</Callout>

## Interacción con newrelic-Redis [#third-party-gems]

La gema `newrelic-redis` de terceros proporciona soporte de instrumentación de Redis como complemento del agente Ruby de New Relic. Si el agente Ruby detecta `newrelic-redis`, no instalará la instrumentación integrada de Redis y registrará un mensaje de registro como este al inicio:

```
INFO : Not installing New Relic supported Redis instrumentation because the third party newrelic-redis gem is present
```

Para utilizar la instrumentación de Redis integrada de New Relic y ver la información de Redis en la UI, elimine la gema `newrelic-redis`.

<Callout variant="important">
  Quitar la gema `newrelic-redis` en favor de la instrumentación integrada cambiará los nombres de sus transacciones. Para conservar los nombres de sus transacciones existentes, ignore el mensaje de registro y no desinstale la gema.
</Callout>

## Capturar argumentos del comando Redis [#ex_sidekiq_args]

De forma predeterminada, el agente Ruby solo captura los nombres de los comandos de Redis. Para capturar los argumentos del comando Redis, use esta configuración:

```
transaction_tracer:
  record_redis_arguments: true
```

El agente limita la cantidad de caracteres y argumentos recopilados de cada nodo de traza de la transacción. El agente trunca los elementos que superan estos límites.
