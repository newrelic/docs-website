---
title: Utilice matriz para la organización.
metaDescription: 'How to use arrays in NRQL, the New Relic query language'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

Como parte de nuestro soporte para el Protocolo OpenTelemetry (OTLP), New Relic puede procesar atributos que contienen matrices. ¿Pero qué son las matrices? Básicamente, las matrices son estructuras de datos que contienen una colección ordenada de valores que puede consultar con NRQL. Normalmente, la matriz se muestra en un formato como `[1, 2, 3, 4, 5]` o `["US", "CA", "UK"]`.

Actualmente, solo admitimos matrices simples y unidimensionales. Puede utilizar una matriz simple para almacenar una lista de valores del mismo tipo primitivo; por ejemplo, numérico, booleano o cadena. Para verificar rápidamente que una matriz contiene datos, puede usar el tipo de gráfico JSON para ver si los datos se muestran en una estructura de matriz.

## Característica admitida [#supported-features]

* La cláusula `FACET` admite el atributo de matriz.
* Puede ejecutar las funciones `getfield()`, `length()` y `contains()` en matriz.
* También puede utilizar las funciones de agregador `uniques()`, `uniqueCount()` y `latest()` .
* La matriz puede contener hasta 64 elementos.

## Característica no admitida [#unsupported-features]

* Los operadores de comparación como `=`, `!=` y `IN` no son compatibles con matriz.
* No puede agregar matriz con otras funciones agregadoras, como `sum()`, `min()`, `max()`, etc.
* Matriz no puede contener otra matriz, como `["UK", "US", ["CA", "OR", "ATL"]]`.
* La matriz no puede contener `NULL`.

## Funciones de matriz y ejemplos [#array-functions]

<CollapserGroup>
  <Collapser
    className="freq-link"
    title={<InlineCode>getfield(attribute, i) OR attribute\[i]</InlineCode>}
  >
    Utilice la notación `getfield()` para obtener el `i`ésimo elemento de una matriz.

    <Callout variant="important">
      La indexación matricial comienza con `0`.
    </Callout>

    <DNT>**Example:**</DNT> Considere una matriz simple, `[100, 110, 90, 100, 105]`, almacenada en un atributo de duración.

    `getfield(durations, 2)` devolverá `90`.

    Puede utilizar la abreviatura de corchetes `[ ]` en lugar de la función `getfield()`.

    <DNT>**Example:**</DNT> `durations[4]` devolverá `105`.
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>longitud (atributo)</InlineCode>}
  >
    Utilice la función `length()` para devolver el número de elementos de una matriz.

    <DNT>**Example:**</DNT> Considere una matriz simple, `countries`, con el valor `["US", "CA", "UK"]`.

    `length(countries)` devolverá `3`.
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>contiene (atributo, elemento)</InlineCode>}
  >
    Utilice la función `contains()` para ver si hay un elemento en una matriz.

    <CollapserGroup>
      <Collapser title="Ejemplo: comprobar si la matriz contiene un elemento">
        Ejemplo: considere una matriz, `guids`, como `["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]`.

        `contains(guids, '5555-3456-555')` devolverá `TRUE`.
      </Collapser>

      <Collapser title={<>Utilice contiene para filtrar elementos en <InlineCode>count(\*)</InlineCode></>}>
        Considere un tipo de evento `Transaction` que incluya una matriz `guids` con el valor `["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]`. Para encontrar el recuento de transacciones que incluyen el GUID `"9999-1234-9999"` , utilice:

        ```sql
        SELECT count(*) FROM Transaction WHERE contains(guids, '9999-1234-9999')
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>
