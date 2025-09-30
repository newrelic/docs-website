---
title: newrelic_end_transaction (API do agente PHP)
type: apiDoc
shortDescription: Pare de instrumentar a transação atual imediatamente.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to stop a transaction immediately. Useful for job queue processing.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_end_transaction([bool $ignore])
```

Pare de instrumentar a transação atual imediatamente.

## Requisitos

Versão do agente [3.0.5.95](/docs/release-notes/agent-release-notes/php-release-notes/php-agent) ou superior.

## Descrição

Pare imediatamente a transação atual instrumentada e envie os dados para o daemon. Esta chamada simula o que o agente normalmente faz quando o PHP encerra a transação atual. O uso mais comum dessa chamada é melhorar a instrumentação do script de linha de comando que trata do processamento da fila de trabalhos. Chame esse método no final de um trabalho específico e, em seguida, chame [`newrelic_start_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_start_transaction) quando uma nova tarefa for retirada da fila.

Normalmente, ao finalizar uma transação você deseja que o agente registre os dados associados. No entanto, você também pode descartar os dados definindo `$ignore` como `true`.

<Callout variant="tip">
  Compare [`newrelic_end_of_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_end_of_transaction), que para de cronometrar a transação, mas continua a instrumentá-la.
</Callout>

## Parâmetro

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$ignore`

        _boleano_
      </td>

      <td>
        Opcional. O padrão é `false`.

        Se `false` ou omitido, dados da transação <DNT>**is**</DNT> registrados pelo daemon.

        Se `true`, dados da transação <DNT>**is not**</DNT> registrados pelo daemon.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retornará `true` se a transação foi finalizada com sucesso e os dados foram enviados para o daemon New Relic.

## Exemplos

### Interrompa uma transação e inicie outra [#stop-and-start]

```php
function example() {
    // queuing logic
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_end_transaction(); // stop recording the current transaction
        newrelic_start_transaction(ini_get("newrelic.appname")); // start recording a new transaction
    }
    // more queuing logic
}
```

### Pare totalmente instrumentado [#stop-entirely]

```php
function example() {
    // this code is instrumented
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_end_transaction();
    }
    // this code is ignored
}
```
