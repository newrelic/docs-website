---
title: Use matriz para organização
metaDescription: 'How to use arrays in NRQL, the New Relic query language'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

Como parte do nosso suporte ao OpenTelemetry Protocol (OTLP), a New Relic pode processar atributo contendo matriz. Mas o que são matrizes? Essencialmente, matriz são estruturas de dados contendo uma coleção ordenada de valores que você pode consultar com NRQL. Normalmente, a matriz é exibida em um formato como `[1, 2, 3, 4, 5]` ou `["US", "CA", "UK"]`.

Atualmente, oferecemos suporte apenas a matrizes simples e unidimensionais. Você pode usar matriz simples para armazenar uma lista de valores do mesmo tipo primitivo; por exemplo, numérico, booleano ou string. Para verificar rapidamente se uma matriz contém dados, você pode usar o tipo de gráfico JSON para ver se os dados são exibidos em uma estrutura de matriz.

## Recurso suportado [#supported-features]

* A cláusula `FACET` suporta atributo de array.
* Você pode executar as funções `getfield()`, `length()` e `contains()` na matriz.
* Você também pode usar as funções de agregador `uniques()`, `uniqueCount()` e `latest()` .
* Matriz pode conter até 64 elementos.

## Recurso não suportado [#unsupported-features]

* Operadores de comparação como `=`, `!=` e `IN` não são suportados com matriz.
* Você não pode agregar matriz com outras funções agregadoras, como `sum()`, `min()`, `max()`, etc.
* Matriz não pode conter outra matriz, como `["UK", "US", ["CA", "OR", "ATL"]]`.
* Matriz não pode conter `NULL`.

## Funções e exemplos de matriz [#array-functions]

<CollapserGroup>
  <Collapser
    className="freq-link"
    title={<InlineCode>getfield(attribute, i) OR attribute\[i]</InlineCode>}
  >
    Use a notação `getfield()` para obter o `i`º elemento em uma matriz.

    <Callout variant="important">
      A indexação da matriz começa com `0`.
    </Callout>

    <DNT>**Example:**</DNT> Considere uma matriz simples, `[100, 110, 90, 100, 105]`, armazenada em um atributo de duração.

    `getfield(durations, 2)` retornará `90`.

    Você pode usar a abreviação de colchetes `[ ]` em vez da função `getfield()`.

    <DNT>**Example:**</DNT> `durations[4]` retornará `105`.
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>length(attribute)</InlineCode>}
  >
    Use a função `length()` para retornar o número de elementos em uma matriz.

    <DNT>**Example:**</DNT> Considere uma matriz simples, `countries`, com o valor `["US", "CA", "UK"]`.

    `length(countries)` retornará `3`.
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>contains(attribute, element)</InlineCode>}
  >
    Use a função `contains()` para ver se há um elemento em uma matriz.

    <CollapserGroup>
      <Collapser title="Exemplo: Verifique se a matriz contém um elemento">
        Exemplo: Considere uma matriz, `guids`, como `["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]`.

        `contains(guids, '5555-3456-555')` retornará `TRUE`.
      </Collapser>

      <Collapser title={<>Use contém para filtrar itens em <InlineCode>count(\*)</InlineCode></>}>
        Considere um tipo de evento `Transaction` incluindo uma matriz `guids` com o valor `["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]`. Para encontrar a contagem de transações que incluem o GUID `"9999-1234-9999"` , use:

        ```sql
        SELECT count(*) FROM Transaction WHERE contains(guids, '9999-1234-9999')
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>
