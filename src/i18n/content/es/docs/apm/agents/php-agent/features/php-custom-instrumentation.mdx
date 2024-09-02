---
title: Instrumentación PHP personalizada
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: New Relic's PHP agent includes API calls you can add to your app to collect additional custom instrumentation for web and non-web transactions.
freshnessValidatedDate: never
translationType: machine
---

New Relic recopila y reporta información sobre [transacciones browser web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) y [transacciones no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions), como tareas en segundo plano. New Relic normalmente produce información completa desde el primer momento sin necesidad de modificar el código de su aplicación. Sin embargo, si New Relic no es compatible con su [framework](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#frameworks), es posible que deba agregar instrumentación personalizada.

La instrumentación personalizada también es útil para agregar detalles a su traza de la transacción, para bloquear la instrumentación en transacciones que no desea instrumentar, o si New Relic simplemente no recoge una parte de su código que desea instrumentar.

## Asegúrese de que todas las funciones de PHP estén cronometradas [#enable-custom-instrumentation]

Para obtener la máxima visibilidad de su aplicación, asegúrese de que el parámetro [`newrelic.transaction_tracer.detail`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-tt-detail) esté establecido en `1` (predeterminado). Esto hará que todas las funciones PHP sean cronometradas, reduciendo así en gran medida la cantidad de "tiempo no instrumentado" en una traza de la transacción.

## Utilice la API del agente para controlar la transacción [#use-agent-api]

Más allá de esa configuración, las llamadas API del agente pueden controlar la transacción y agregar instrumentación personalizada:

* [`newrelic_add_custom_tracer()`](/docs/agents/php-agent/php-agent-api/newrelic_add_custom_tracer)

  Especifica un método particular que deseas utilizar como instrumento.

* [`newrelic_end_of_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_end_of_transaction)

  Deje de cronometrar una transacción, pero continúe instrumentándola. Útil para la transmisión de datos.

* [`newrelic_ignore_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_ignore_transaction)

  No instrumente ninguna transacción en absoluto.

* [`newrelic_name_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_name_transaction)

  Personalice el nombre de una transacción cuando el nombre predeterminado no sea útil.

* [`newrelic_notice_error()`](/docs/agents/php-agent/php-agent-api/newrelic_notice_error)

  Graba un mensaje de error con un rastreo del stack.

* [`newrelic_start_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_start_transaction) y [`newrelic_end_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_end_transaction)

  Finalice manualmente la transacción actual y luego inicie una nueva transacción. Útil para administradores de colas u otros scripts que crean numerosos "hijos".
