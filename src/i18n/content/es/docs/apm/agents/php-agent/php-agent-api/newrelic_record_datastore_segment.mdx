---
title: newrelic_record_datastore_segment (API del agente PHP)
type: apiDoc
shortDescription: Registra un segmento de almacenamiento de datos.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: 'Record a datastore segment, to instrument a datastore library which the PHP agent does not instrument by default.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_record_datastore_segment(callable $func, array $parameters)
```

Registra un segmento de almacenamiento de datos.

## Requisitos [#require]

Versión del agente [7.5.0.199](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-750199) o superior.

## Descripción [#desc]

Registra un segmento de almacenamiento de datos. Los segmentos de almacenamiento de datos aparecen en las pestañas <DNT>**Breakdown table**</DNT> y <DNT>**Databases**</DNT> de la [página de transacciones](/docs/apm/applications-menu/monitoring/transactions-page) en la UI de New Relic.

Esta función permite instrumentar un almacenamiento de datos no compatible de la misma manera que el agente PHP instrumenta automáticamente sus [almacenes de datos compatibles](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#databases).

## Parámetros [#para]

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$callback`

        _invocable_
      </td>

      <td>
        Requerido. La función que debe programarse para crear el segmento de almacenamiento de datos.
      </td>
    </tr>

    <tr>
      <td>
        `$parameters`

        _matriz_
      </td>

      <td>
        Requerido. Una matriz asociativa de parámetros que describen la llamada de almacenamiento de datos.
      </td>
    </tr>
  </tbody>
</table>

Las claves admitidas en la matriz `$parameters` son las siguientes:

<table>
  <thead>
    <tr>
      <th width="25%">
        Llave
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `product`

        _cadena_
      </td>

      <td>
        Requerido. El nombre del producto de almacenamiento de datos que se utiliza: por ejemplo, `MySQL` para indicar que el segmento representa una consulta a una base de datos MySQL.
      </td>
    </tr>

    <tr>
      <td>
        `collection`

        _cadena_
      </td>

      <td>
        Opcional. La tabla o colección que se utiliza o se consulta.
      </td>
    </tr>

    <tr>
      <td>
        `operation`

        _cadena_
      </td>

      <td>
        Opcional. La operación que se está realizando: por ejemplo, `select` para una consulta SQL SELECT o `set` para una operación de conjunto de Memcached.

        Si bien las operaciones se pueden especificar con cualquier caso, New Relic sugiere usar minúsculas para alinearse mejor con los nombres de las operaciones utilizadas por la instrumentación automatizada de almacenamiento de datos del agente PHP.
      </td>
    </tr>

    <tr>
      <td>
        `host`

        _cadena_
      </td>

      <td>
        Opcional. El nombre del host de almacenamiento de datos.
      </td>
    </tr>

    <tr>
      <td>
        `portPathOrId`

        _cadena_
      </td>

      <td>
        Opcional. El puerto o socket utilizado para conectarse al almacenamiento de datos.
      </td>
    </tr>

    <tr>
      <td>
        `databaseName`

        _cadena_
      </td>

      <td>
        Opcional. El nombre o número de la base de datos en uso.
      </td>
    </tr>

    <tr>
      <td>
        `query`

        _cadena_
      </td>

      <td>
        Opcional. La consulta que se envió al servidor.

        Por motivos de seguridad, este valor solo se utiliza si configura `product` en un almacenamiento de datos compatible. Esto permite al agente ofuscar correctamente la consulta. Los valores de producto admitidos (que coinciden sin distinguir entre mayúsculas y minúsculas) son: `MySQL`, `MSSQL`, `Oracle`, `Postgres`, `SQLite`, `Firebird`, `Sybase` y `Informix`.
      </td>
    </tr>

    <tr>
      <td>
        `inputQueryLabel`

        _cadena_
      </td>

      <td>
        Opcional. El nombre del ORM en uso (por ejemplo: `Doctrine`).
      </td>
    </tr>

    <tr>
      <td>
        `inputQuery`

        _cadena_
      </td>

      <td>
        Opcional. La consulta de entrada que se proporcionó al ORM.

        Por motivos de seguridad, y al igual que con el parámetro `query` , este valor se ignorará si el producto no es un almacenamiento de datos compatible.
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="important">
  Los argumentos _de cadena_ utilizados en la matriz `$parameters` no deben contener el carácter especial '/'.
</Callout>

## Valores de retorno [#return]

Se devuelve el valor de retorno de `$callback` . Si se produce un error, se devuelve `false` y se activará un error en el nivel `E_WARNING` .

## Ejemplos [#examples]

### Instrumentado un almacenamiento de datos NoSQL no compatible [#unsupported-nosql]

Para instrumentar un almacenamiento de datos NoSQL hipotético llamado `Bucket` que exponga un método `get`, el siguiente código crearía una métrica de almacenamiento de datos que se mostraría en la UI de New Relic:

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

### Instrumentado una biblioteca cliente SQL no compatible [#unspported-sql]

Para registrar una consulta para una biblioteca cliente MySQL no compatible con la consulta ofuscada y adjunta al segmento:

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
