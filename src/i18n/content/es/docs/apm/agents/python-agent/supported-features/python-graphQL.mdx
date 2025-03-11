---
title: Python y GraphQL
tags:
  - Agents
  - Python agent
freshnessValidatedDate: never
translationType: machine
---

## Transacción

Las transacciones se capturan como transacciones web y reciben nombres en función de las operaciones GraphQL ejecutadas. Los siguientes detalles se utilizan para agrupar representaciones de consulta únicas: tipo de operación, nombre de la operación y la ruta única más profunda.

La representación sin formato de una transacción se parece a la siguiente: `{operation_type}/{operation_name}/{deepest_unique_path}`

Usando este ejemplo de consulta:

```graphql
query {
  libraries {
    books {
      title
      author {
        name
      }
    }
  }
}
```

La transacción en la UI finalmente se mostrará similar a esta: `query/<anonymous>/libraries.books`

### Detalles

#### Tipo de operación

Indica si la operación fue una consulta o una mutación.

#### Nombre de la operación

El nombre de la operación cuando se proporciona, o `<anonymous>`.

`query { libraries }` tendría un nombre de operación en blanco porque no se proporcionó un nombre.

Una consulta con un nombre como `query GetLibraries { libraries }` usaría el nombre de operación `'GetLibraries'`.

#### Camino único más profundo

La ruta más profunda incluida en el conjunto de selección de una consulta donde solo se seleccionó un campo en cada nivel. Dado que los nombres de las operaciones se pueden reutilizar, esto ayuda a determinar aún más la unicidad de una operación determinada.

Usamos la ruta única más profunda (en lugar de la ruta más profunda como antes) para evitar tomar decisiones arbitrarias al nombrar, lo que puede implicar u ocultar detalles de lo que podría causar lentitud en una aplicación.

Para la consulta:

```graphql
query {
  libraries {
    branch
    booksInStock {
      isbn,
      title,
      author
    }
    magazinesInStock {
      issue,
      title
    }
  }
}
```

Seleccionaremos una ruta única más profunda de 'biblioteca' a medida que seleccionamos múltiples campos más allá de ese punto. Cualquier resolución ejecutada más allá de ese punto puede contribuir a las características de rendimiento de la transacción.

Si la consulta seleccionara solo un campo por resolución, seleccionamos la ruta completa ya que cada conjunto de selección es único.

La consulta:

```graphql
query {
  libraries {
    booksInStock {
      title
    }
  }
}
```

Dará como resultado la ruta única más profunda: `'libraries.booksInStock.title'`.

`id` y `__typename` campos se excluyen automáticamente de la decisión de denominación.

Por ejemplo, una consulta de subgráfico:

```graph1l
query {
  libraries {
    branch
    __typename
    id
  }
}
```

Daría como resultado la ruta única más profunda de: `libraries.branch`.

### Tipos de unión y fragmentos en línea

Para los tipos de unión que utilizan fragmentos en línea, el nombre de la transacción usará corchetes `< ... >` para indicar el campo seleccionado subyacente para la consulta de unión si solo se especifica un resultado en la consulta.

Para el siguiente esquema:

```graphql
union SearchResult = Book | Author

type Book {
  title: String!
}

type Author {
  name: String!
}

type Query {
  search(contains: String): [SearchResult!]
}
```

y la siguiente consulta:

```graphql
query example {
  search(contains: "author") {
    __typename
    ... on Author {
      name
    }
  }
}
```

Resultaría en el siguiente nombre de transacción:

`query/example/search<Author>.name`

Sin embargo, si la consulta devuelve tanto Libro como Autor:

```graphql
query example {
  search(contains: "author") {
    __typename
    ... on Author {
      name
    }
    ... on Book {
      title
    }
  }
}
```

El nombre de la transacción resultante sería `query/example/search`

### Nombrar por error

Los errores al validar o analizar una solicitud GraphQL pueden afectar el nombre de la transacción.

#### Excepciones

Si se encuentra un error en el middleware o en el solucionador, el nombre de la transacción será simplemente el nombre del middleware o solucionador en el que ocurrió la falla.

#### Errores de validación

Si una operación solicitada se pudo analizar pero no se pudo validar, se generará lo siguiente como nombre de la transacción:

En GraphQL2: `graphql.validation.validation:validate` En GraphQL3: `graphql.validation.validate.validate`

#### Errores de análisis

Si una operación solicitada no se puede analizar, se generará lo siguiente como nombre de la transacción:

```
graphql.language.parser:parse
```

## Métrica

El agente Python informa la resolución de campo GraphQL y la operación métrica para permitirle comprender y analizar tendencias a largo plazo.

### Operación métrica

Las operaciones métricas se reportan utilizando el siguiente formato:

```
GraphQL/operation/GraphQL/{operation_type}/{operation_name}/{deepest_unique_path}
```

Tipo de operación: Especifica el tipo de operación a ejecutar. Será `query`, `mutation` o `<unknown>` si no se puede determinar el tipo de operación.

Nombre de la operación: el nombre de la operación, si se proporciona, o `<anonymous>`.

[Ruta única más profunda](#deepest-unique-path): la ruta más profunda incluida en el conjunto de selección de una consulta donde solo se selecciona un campo en cada nivel. Esto ayuda a determinar aún más la unicidad de una operación determinada, ya que los nombres de las operaciones se pueden reutilizar.

### Resolución de campo métrica

Las métricas de resolución de campo se reportan utilizando el siguiente formato:

```
GraphQL/resolve/GraphQL/{field_name}
```

Resolver métrica captura el tiempo dedicado a resolver una parte particular de los datos GraphQL solicitados. Estos se pueden utilizar para encontrar solucionadores específicos que puedan contribuir a ralentizar las consultas entrantes.

## Spans y atributo

Los intervalos se capturan para operaciones GraphQL, resoluciones de campo y trabajo adicional que ocurre como parte de una resolución de campo, como realizar una consulta a una base de datos.

Los intervalos de operación incluyen el tipo de operación, el nombre de la operación y la ruta única más profunda. Estos representan la duración individual y el atributo de una invocación específica dentro de una transacción o traza.

```
GraphQL/operation/GraphQL/{operation_type}/{operation_name}/{deepest_unique_path}
```

<DNT>
  **Operation span attributes**
</DNT>

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Name**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `graphql.operation.type`
      </td>

      <td>
        Consulta o mutación
      </td>
    </tr>

    <tr>
      <td>
        `graphql.operation.name`
      </td>

      <td>
        Nombre dado a la operación o `< anonymous >`
      </td>
    </tr>

    <tr>
      <td>
        `graphql.operation.query`
      </td>

      <td>
        Nombre dado a la consulta o `< anonymous >`
      </td>
    </tr>
  </tbody>
</table>

### Abarcas de resolución de campo

Los tramos de resolución aprovechan la ruta de resolución del campo individual para diferenciarse mejor dentro de una traza o transacción determinada. Por ejemplo, se podría utilizar `libraries.books` en lugar de solo libros. Estos representan la duración individual y el atributo de un campo específico que se resuelve como parte de la operación GraphQL.

```
GraphQL/resolve/GraphQL/{path}
```

<DNT>
  **Resolver span attributes**
</DNT>

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Name**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `graphql.field.name`
      </td>

      <td>
        Nombre del campo resuelto
      </td>
    </tr>

    <tr>
      <td>
        `graphql.field.returnType`
      </td>

      <td>
        Tipo de devolución del campo resuelto (por ejemplo, `Book!`, `[String]`)
      </td>
    </tr>

    <tr>
      <td>
        `graphql.field.parentType`
      </td>

      <td>
        Tipo de padre de este campo (por ejemplo, `[Book]`)
      </td>
    </tr>

    <tr>
      <td>
        `graphql.field.path`
      </td>

      <td>
        Ruta de resolución completa del campo (por ejemplo, `libraries.books`)
      </td>
    </tr>
  </tbody>
</table>
