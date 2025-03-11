---
title: Alta carga de memória em tarefas PHP de longa duração
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Using the PHP Agent with an application that has long running tasks can cause high memory usage.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Usar o agente PHP com uma aplicação que possui tarefas de longa execução causa alto uso de memória.

## Solução

Para oferecer suporte distributed tracing, o agente PHP precisa manter uma quantidade significativa de dados de chamadas de função em tempo de execução para que os intervalos possam ser amostrados com a maior precisão possível. Para transações da web e transações de histórico mais curtas, isso geralmente é imperceptível, tanto em termos de sobrecarga de CPU quanto de memória. Entretanto, para transações em segundo plano mais longas, o aumento da sobrecarga de memória pode se tornar perceptível, até mesmo ao ponto de resultar em uma condição de falta de memória.

Se a transação afetada executar uma série de processos repetitivos, como um consumidor de fila de mensagens ou um loop com diversas chamadas externas, você poderá instrumentar manualmente cada iteração como uma transação separada. Ao fazer isso, a memória utilizada será liberada após cada transação.

Iniciar e parar a transação manualmente traz os seguintes benefícios:

* Permite que todos os recursos do agente PHP permaneçam habilitados.
* Fornece dados mais detalhados sobre como o processo está operando.

Para implementar isso, primeiro ignore a transação automática inicial com [`newrelic_end_transaction()`](/docs/apm/agents/php-agent/php-agent-api/newrelic_end_transaction/) e, em seguida, use [`newrelic_start_transaction()`](/docs/apm/agents/php-agent/php-agent-api/newrelic_start_transaction/) e [`newrelic_end_transaction()`](/docs/apm/agents/php-agent/php-agent-api/newrelic_end_transaction/) para instrumentar cada transação por vez.

O exemplo de código a seguir mostra como fazer isso. No código real, você substituiria a estrutura `while()` por uma instrução de loop PHP adequada e inseriria a lógica da função no lugar das reticências.

```php
function example_long_task() {
    // Ensure PHP agent is available and
    // stop recording the current transaction
    if (extension_loaded('newrelic')) { 
        newrelic_end_transaction(); 
    }

    // replace next while statement with actual loop
    while (<condition>) {
        if (extension_loaded('newrelic')) { 
            // start recording a new transaction
            newrelic_start_transaction(ini_get("newrelic.appname")); transaction
        }

        // your function logic starts
        ...
        ...
        // your function logic stops

        // end transaction for current loop
        if (extension_loaded('newrelic')) { 
            newrelic_end_transaction(); 
        }
    }
}
```
