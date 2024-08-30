---
title: Instrumentação PHP personalizada
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: New Relic's PHP agent includes API calls you can add to your app to collect additional custom instrumentation for web and non-web transactions.
freshnessValidatedDate: never
translationType: machine
---

A New Relic coleta e relata informações sobre [transações](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) e [transações fora da web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) do browser da web, como tarefas em segundo plano. A New Relic normalmente produz informações completas imediatamente, sem qualquer necessidade de modificar o código do seu aplicativo. No entanto, se o New Relic não oferecer suporte à sua [framework](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#frameworks), pode ser necessário adicionar instrumentação personalizada.

A instrumentação personalizada também é útil para adicionar detalhes ao seu rastreamento de transação, para bloquear a instrumentação em transações que você não deseja instrumentar ou se a New Relic simplesmente não estiver captando uma parte do seu código que você deseja instrumentar.

## Certifique-se de que todas as funções PHP estejam cronometradas [#enable-custom-instrumentation]

Para obter visibilidade máxima do seu aplicativo, certifique-se de que o parâmetro [`newrelic.transaction_tracer.detail`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-tt-detail) esteja definido como `1` (padrão). Isso fará com que todas as funções do PHP sejam cronometradas, reduzindo bastante a quantidade de "tempo não instrumentado" em um trace da transação.

## Use a API do agente para controlar transações [#use-agent-api]

Além dessa configuração, as chamadas de API do agente podem controlar a transação e adicionar instrumentação personalizada:

* [`newrelic_add_custom_tracer()`](/docs/agents/php-agent/php-agent-api/newrelic_add_custom_tracer)

  Especifique um método específico que você deseja instrumentar.

* [`newrelic_end_of_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_end_of_transaction)

  Pare de cronometrar uma transação, mas continue instrumentando-a. Útil para dados de streaming.

* [`newrelic_ignore_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_ignore_transaction)

  Não institua nenhuma transação.

* [`newrelic_name_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_name_transaction)

  Personalize o nome de uma transação quando o nome padrão não for útil.

* [`newrelic_notice_error()`](/docs/agents/php-agent/php-agent-api/newrelic_notice_error)

  Registre uma mensagem de erro com um stack trace.

* [`newrelic_start_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_start_transaction) e [`newrelic_end_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_end_transaction)

  Encerre manualmente a transação atual e inicie uma nova transação. Útil para gerenciadores de filas ou outros scripts que criam vários "filhos".
