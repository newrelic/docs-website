---
title: newrelic_set_error_group_callback (API do agente PHP)
type: apiDoc
shortDescription: Este método permite que um usuário defina uma função de retorno de chamada personalizada para gerar nomes de grupos de erros.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: Use this API to register a callback which returns a custom error group name.
freshnessValidatedDate: '2023-09-01T00:00:00.000Z'
translationType: machine
---

## Sintaxe

```php
newrelic_set_error_group_callback($callback)
```

Agrupe erros com sua própria função de retorno de chamada de impressão digital personalizada.

## Requisitos

Versão do agente 10.12 ou superior.

## Descrição

Esta API permite que um usuário registre uma função de retorno de chamada personalizada com o agente PHP que será chamada quando o aplicativo encontrar um erro.

O retorno de chamada fornecerá duas matrizes PHP do agente - uma contendo dados de transação e outra contendo dados de erro.

Usando as informações de contexto fornecidas, o retorno de chamada deve retornar uma sequência não vazia com base na lógica definida pelo usuário que servirá como o nome do grupo de erros exibido na interface da Errors Inbox .

<Callout variant="important">
  * Quando há múltiplas chamadas para esta função em uma única transação, o agente PHP retém o retorno de chamada apenas da última chamada.
  * Retorno de chamada são registrados por solicitação. Essa API deve ser chamada em um caminho de código com execução garantida para cada solicitação, ou o retorno de chamada não será invocado.
  * É altamente recomendável manter a função de retorno de chamada o mínimo possível. O retorno de chamada com uso intensivo de CPU (como chamadas de banco de dados) ou outra lógica complexa resultará em impactos no desempenho do seu aplicativo.
</Callout>

## Parâmetro

Esta API aceita um único retorno de chamada do tipo função como argumento. O retorno de chamada fornecido deve aceitar 2 parâmetros.

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro API
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$callback` (_função_)
      </td>

      <td>
        Obrigatório. Forneça uma função de retorno de chamada que será registrada no agente PHP.
      </td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro de retorno de chamada
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$transaction_data` (_matriz_)
      </td>

      <td>
        Obrigatório. Uma matriz de dados de transação fornecidos ao seu retorno de chamada pelo agente PHP.
      </td>
    </tr>

    <tr>
      <td>
        `$error_data` (_matriz_)
      </td>

      <td>
        Obrigatório. Uma matriz de dados de erro fornecidos ao seu retorno de chamada pelo agente PHP.
      </td>
    </tr>
  </tbody>
</table>

### Matriz de pares de valores principais

#### `$transaction_data` - Dados de transação do agente PHP fornecidos ao seu retorno de chamada

<table>
  <thead>
    <tr>
      <th width="25%">
        Chave
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        "request_uri"
      </td>

      <td>
        (_string_) Solicitar URI
      </td>
    </tr>

    <tr>
      <td>
        "caminho"
      </td>

      <td>
        (_string_) Caminho do arquivo
      </td>
    </tr>

    <tr>
      <td>
        "método"
      </td>

      <td>
        (_string_) Método HTTP (`GET`, `POST`, etc.)
      </td>
    </tr>

    <tr>
      <td>
        "status_code"
      </td>

      <td>
        (_int_) Código de status HTTP (`200`, `404`, etc.)
      </td>
    </tr>
  </tbody>
</table>

#### `$error_data` - Dados de erro do agente PHP fornecidos ao seu retorno de chamada

<table>
  <thead>
    <tr>
      <th width="25%">
        Chave
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        "classe"
      </td>

      <td>
        (_string_) Nome da classe
      </td>
    </tr>

    <tr>
      <td>
        "mensagem"
      </td>

      <td>
        (_string_) mensagem de erro
      </td>
    </tr>

    <tr>
      <td>
        "arquivo"
      </td>

      <td>
        (_string_) Caminho do arquivo
      </td>
    </tr>

    <tr>
      <td>
        "pilha"
      </td>

      <td>
        (_string_) tracede rastreamento de erro JSON
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="important">
  * Nem todas as chaves contêm valores garantidos. Isso depende muito do aplicativo do usuário e da natureza do erro.
  * As chaves da matriz sempre serão definidas, independentemente de conterem ou não valores vazios.
</Callout>

## Valores de retorno

A API retorna `true` se o retorno de chamada for registrado com sucesso, caso contrário `false`.

## Exemplos

```php
if (extension_loaded('newrelic')) { // Ensure PHP agent is available
  $callback = function(array $transaction_data, array $error_data)
  {
      $fingerprint = "";

      //
      // Add custom code to parse array data
      //

      // Example code
      if ($error_data["klass"] == "E_USER_ERROR") {
        $fingerprint = "USER ERROR";
      };

      return $fingerprint;    // Non-empty string error group name
  };

  newrelic_set_error_group_callback($callback);
};
```
