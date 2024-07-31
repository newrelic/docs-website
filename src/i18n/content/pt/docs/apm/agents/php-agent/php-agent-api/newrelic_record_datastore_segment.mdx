---
title: newrelic_record_datastore_segment (API do agente PHP)
type: apiDoc
shortDescription: Registra um segmento de armazenamento de dados.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: 'Record a datastore segment, to instrument a datastore library which the PHP agent does not instrument by default.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_record_datastore_segment(callable $func, array $parameters)
```

Registra um segmento de armazenamento de dados.

## Requisitos [#require]

Versão do agente [7.5.0.199](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-750199) ou superior.

## Descrição [#desc]

Registra um segmento de armazenamento de dados. Os segmentos do datastore aparecem nas guias <DNT>**Breakdown table**</DNT> e <DNT>**Databases**</DNT> da [página de transação](/docs/apm/applications-menu/monitoring/transactions-page) na interface do New Relic.

Esta função permite que um datastore não suportado seja instrumentado da mesma forma que o agente PHP instrumenta automaticamente seus [datastores suportados](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#databases).

## Parâmetro [#para]

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
        `$callback`

        _chamável_
      </td>

      <td>
        Obrigatório. A função que deve ser cronometrada para criar o segmento do armazenamento de dados.
      </td>
    </tr>

    <tr>
      <td>
        `$parameters`

        _matriz_
      </td>

      <td>
        Obrigatório. Uma matriz associativa de parâmetros que descreve a chamada do armazenamento de dados.
      </td>
    </tr>
  </tbody>
</table>

As chaves suportadas na matriz `$parameters` são as seguintes:

<table>
  <thead>
    <tr>
      <th width="25%">
        Chave
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `product`

        _corda_
      </td>

      <td>
        Obrigatório. O nome do produto de armazenamento de dados que está sendo usado: por exemplo, `MySQL` para indicar que o segmento representa uma consulta em um banco de dados MySQL.
      </td>
    </tr>

    <tr>
      <td>
        `collection`

        _corda_
      </td>

      <td>
        Opcional. A tabela ou coleção que está sendo usada ou consultada.
      </td>
    </tr>

    <tr>
      <td>
        `operation`

        _corda_
      </td>

      <td>
        Opcional. A operação que está sendo executada: por exemplo, `select` para uma consulta SQL SELECT ou `set` para uma operação de conjunto do Memcached.

        Embora as operações possam ser especificadas em qualquer caso, a New Relic sugere o uso de letras minúsculas para melhor alinhar com os nomes das operações usados pela instrumentação automatizada de armazenamento de dados do agente PHP.
      </td>
    </tr>

    <tr>
      <td>
        `host`

        _corda_
      </td>

      <td>
        Opcional. O nome do host do armazenamento de dados.
      </td>
    </tr>

    <tr>
      <td>
        `portPathOrId`

        _corda_
      </td>

      <td>
        Opcional. A porta ou soquete usado para conectar-se ao armazenamento de dados.
      </td>
    </tr>

    <tr>
      <td>
        `databaseName`

        _corda_
      </td>

      <td>
        Opcional. O nome ou número do banco de dados em uso.
      </td>
    </tr>

    <tr>
      <td>
        `query`

        _corda_
      </td>

      <td>
        Opcional. A consulta que foi enviada ao servidor.

        Por motivos de segurança, esse valor só será usado se você definir `product` como um armazenamento de dados compatível. Isso permite que o agente ofusque corretamente a consulta. Os valores de produto suportados (que são correspondidos sem distinção entre maiúsculas e minúsculas) são: `MySQL`, `MSSQL`, `Oracle`, `Postgres`, `SQLite`, `Firebird`, `Sybase` e `Informix`.
      </td>
    </tr>

    <tr>
      <td>
        `inputQueryLabel`

        _corda_
      </td>

      <td>
        Opcional. O nome do ORM em uso (por exemplo: `Doctrine`).
      </td>
    </tr>

    <tr>
      <td>
        `inputQuery`

        _corda_
      </td>

      <td>
        Opcional. A consulta de entrada fornecida ao ORM.

        Por motivos de segurança, e assim como acontece com o parâmetro `query` , esse valor será ignorado se o produto não for um armazenamento de dados compatível.
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="important">
  Os argumentos _de string_ usados na matriz `$parameters` não devem conter o caractere especial '/'.
</Callout>

## Valores de retorno [#return]

O valor de retorno de `$callback` é retornado. Se ocorrer um erro, `false` será retornado e um erro no nível `E_WARNING` será acionado.

## Exemplos [#examples]

### Instrumentado um armazenamento de dados NoSQL não suportado [#unsupported-nosql]

Para instrumentar um armazenamento de dados NoSQL hipotético chamado `Bucket` que expõe um método `get` , o código a seguir criaria uma métrica de armazenamento de dados que apareceria na interface do New Relic:

```php
$bucket = new Bucket($host, $port);
$id = 12345;

$value = newrelic_record_datastore_segment(function () use ($bucket, $id) {
    return $bucket->get($id);
}, array(
    'product'      => 'Bucket',
    'collection'   => $id,
    'operation'    => 'get',
    'host'         => $host,
    'portPathOrId' => $port,
));
```

### Instrumentado uma biblioteca cliente SQL não suportada [#unspported-sql]

Para registrar uma consulta para uma biblioteca cliente MySQL não suportada com a consulta ofuscada e anexada ao segmento:

```php
$sql = 'SELECT * FROM table';
$stmt = $db->prepare($sql);

$result = newrelic_record_datastore_segment(function () use ($stmt) {
    return $stmt->execute();
}, array(
    'product'      => 'MySQL',
    'collection'   => 'table',
    'operation'    => 'select',
    'host'         => $host,
    'portPathOrId' => $port,
    'databaseName' => 'dbname',
    'query'        => $query,
));
```
