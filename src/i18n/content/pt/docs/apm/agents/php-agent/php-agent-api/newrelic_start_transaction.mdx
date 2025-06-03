---
title: newrelic_start_transaction (API do agente PHP)
type: apiDoc
shortDescription: 'Inicia uma nova transação, geralmente após encerrar manualmente uma transação.'
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to manually start a transaction. Useful for job queue processing.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_start_transaction(string $appname[, string $license])
```

Inicia uma nova transação, geralmente após encerrar manualmente uma transação.

## Requisitos

Versão do agente [3.0.5.95](/docs/release-notes/agent-release-notes/php-release-notes/php-agent) ou superior.

## Descrição

Inicie uma nova transação manualmente. Geralmente usado após finalizar manualmente uma transação com `newrelic_end_transaction()`, por exemplo, ao separar tarefas em um gerenciador de filas de trabalhos. Ao instrumentar esta nova transação, o agente executa as mesmas operações de quando o script foi iniciado pela primeira vez.

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
        `$appname`

        _corda_
      </td>

      <td>
        Obrigatório. O [nome do aplicativo](/docs/agents/manage-apm-agents/app-naming/name-your-application) a ser associado aos dados desta transação. Usa o mesmo formato de [`newrelic.appname`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-appname) e pode definir vários nomes de aplicativos separando cada um deles com ponto e vírgula `;`.

        Embora esta opção seja obrigatória, você pode ler o nome do aplicativo de `newrelic.ini` com `ini_get("newrelic.appname")`.
      </td>
    </tr>

    <tr>
      <td>
        `$license`

        _corda_
      </td>

      <td>
        Opcional. O padrão é <InlinePopover type="licenseKey"/>definido no arquivo `newrelic.ini` do agente New Relic.

        Forneça um <InlinePopover type="licenseKey"/>diferente se desejar que a transação seja reportada a uma conta New Relic diferente. Se definida, esta licença substituirá todas as licenças por diretório e padrão global configuradas em arquivos INI.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Esta função retornará `true` se a transação foi iniciada com sucesso.

## Exemplos

### Interrompa uma transação e inicie outra [#stop-and-start]

Para gerenciadores de filas de tarefas, é possível usar `newrelic_end_transaction()` e `newrelic_start_transaction()` juntos para separar manualmente a transação. Este exemplo usa `ini_get` para ler o nome do aplicativo no arquivo de configuração.

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

### Inicie uma nova transação com uma nova chave de licença [#start-license-key]

Este exemplo especifica manualmente o nome do aplicativo e o <InlinePopover type="licenseKey"/>:

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_start_transaction("App1", "01234567890abcde01234567890abcde01234567890");
    }
    ...
}
```
