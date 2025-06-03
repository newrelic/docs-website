---
title: Use pesquisas para consultar dados da tabela
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'In New Relic, how to query data added via CSV lookup tables.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

Ao fazer [upload da tabela de consulta em formato CSV](/docs/logs/ui-data/lookup-tables-ui), você pode usar a função `lookup()` para acessar esses dados em sua consulta NRQL. Você pode usar a tabela de consulta para ajudá-lo a analisar dados de telemetria e personalizar seus agrupamentos de dados.

## Sintaxe de consulta básica [#basic-syntax]

A consulta de pesquisa a seguir mostra a sintaxe básica dessa função usando uma tabela chamada `storeNames` e selecionando todos os dados dessa tabela:

```sql
FROM lookup(storeNames)
SELECT *
```

Esta consulta seleciona um atributo específico dessa mesma tabela:

```sql
FROM lookup(storeNames)
SELECT store_ID, store_name, description
```

## Limites de consulta [#query-limits]

Tabela de consulta suporta um [`LIMIT`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit) maior durante a consulta do que outros tipos de dados NRQL. Você pode definir um `LIMIT` de até 20.000 ao usar uma tabela de consulta em uma consulta, [subconsulta](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql/) e [agregação aninhada](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query/).

<Callout variant="tip">
  Ao usar uma tabela de consulta em uma subconsulta, a consulta externa `LIMIT` é vinculada ao valor máximo padrão, a menos que também use uma tabela de consulta.
</Callout>

## Limitações técnicas [#limitations]

* Você não pode usar dados de pesquisa com NRQL condição do alerta.

* Você só pode consultar tabela de consulta a partir da [conta](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure/#organization-accounts) em que carregou a tabela de consulta.

* As seguintes cláusulas NRQL não são suportadas com consulta de pesquisa:

  * `TIMESERIES`

  * `COMPARE WITH`

  * `EXTRAPOLATE`

  * <DNT>
      **Note:**
    </DNT>

    Você pode usar essas cláusulas se contiver a consulta de pesquisa em uma consulta interna. Veja [esta consulta](#item-ids) para obter um exemplo.

## Exemplos de pesquisa [#query-with-data]

Tabela de consulta permite que você use consultas que combinam dados com seus dados de telemetria armazenados no New Relic.

Aqui estão alguns exemplos de consulta:

<CollapserGroup>
  <Collapser
    id="avoid-hardcording"
    title="Evite codificar uma longa lista de hosts"
  >
    Esta consulta evita codificar uma longa lista de hosts consultando nomes de hosts contidos em uma tabela de consulta:

    ```sql
    FROM Log
    SELECT count(*)
    WHERE hostname IN (FROM lookup(myHosts) SELECT uniques(myHost))
    ```
  </Collapser>

  <Collapser
    id="using-join"
    title="Consulta usando JOIN"
  >
    Usar `JOIN` consulta pode facilitar a compreensão dos seus dados. Por exemplo, esta consulta para um tipo de evento personalizado usa a tabela `storeNames` para mostrar os nomes das lojas junto com o total de vendas.

    ```sql
    FROM StoreEvent
    JOIN (FROM lookup(storeNames) SELECT store_ID as storeId, storeName AS name LIMIT 10000) ON shopId = storeId
    SELECT shopId, storeName, totalSales
    ```

    Isto permite um limite de 10.000 porque a tabela de consulta suporta um limite maior do que outros tipos de dados NRQL, conforme mencionado na seção [de limites de consulta](#query-limits) .
  </Collapser>

  <Collapser
    id="map-values"
    title="Mapeie valores para categorias mais amplas"
  >
    Esta consulta mapeia valores `shopId` para um valor `storeCategory` mais amplo usando uma cláusula `JOIN` na tabela de consulta data. Isso permite realizar agregações em registros `StoreEvent` com base nessas categorias mais amplas e extrair novos insights de seus dados.

    ```sql
    FROM StoreEvent
    JOIN (FROM lookup(storeCategories) SELECT store_ID as storeId, storeCategory) ON shopId = storeId
    SELECT sum(totalSales) FACET storeCategory
    ```
  </Collapser>

  <Collapser
    id="status-codes"
    title="Traduzir códigos de status"
  >
    Aqui está uma consulta que traduz códigos de status em resumos legíveis do status:

    ```sql
    FROM Transaction
      JOIN (FROM lookup(statusCodeTable) SELECT status_code, status_summary, status_definition)
      ON http.statusCode=status_code
    SELECT count(*) FACET status_summary
    ```

    Aqui estão alguns exemplos de resultados:

    <img
      title="Screenshot of query for lookups translating status codes"
      alt="Screenshot of query for lookups translating status codes"
      src="/images/nrql_screenshot-crop_example-status-codes.webp"
    />
  </Collapser>

  <Collapser
    id="item-ids"
    title="Traduzir IDs de itens"
  >
    Esta consulta mostra como diversos recursos NRQL podem trabalhar juntos para obter informações de negócio a partir de consultas de dados de log. A consulta abaixo:

    1. Extrai informações sobre itens da mensagem do log usando [`aparse()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-aparse)
    2. Usa `JOIN` na tabela de dados de consulta para obter nomes de itens amigáveis ao usuário
    3. Produz uma tabela de nomes de itens e o número de itens armazenados

       ```sql
       WITH aparse(message, 'POST to carts: * body: {"itemId":"*","unitPrice":*}%') AS (URL, ItemID, Price)
       FROM Log
         JOIN (FROM lookup(itemNames) SELECT ItemID, itemName) ON ItemID
       SELECT count(*) FACET itemName
       WHERE message LIKE 'POST to carts%'
       SINCE 30 days ago
       ```

       Aqui estão alguns exemplos de resultados:

       <img
         title="Screenshot of query for lookups translating item IDs"
         alt="Screenshot of query for lookups translating item IDs"
         src="/images/nrql_screenshot-crop_lookup-query-translate-item-ids.webp"
       />
  </Collapser>

  <Collapser
    id="geoip"
    title="Use informações geográficas para analisar locais"
  >
    Esta consulta combina pesquisas e [GeoIP](/docs/logs/ui-data/parsing#geo) para descobrir quais locais têm os status mais malsucedidos:

    ```sql
    FROM Log
      JOIN (FROM lookup(statusCodeTable) SELECT status_code, status_summary, status_definition)
      ON CacheResponseStatus=status_code
    SELECT count(*) WHERE ClientIP.countryName IS NOT NULL AND status_summary != 'Success'
    FACET ClientIP.countryName, status_summary, CacheResponseStatus
    SINCE 1 day ago LIMIT MAX
    ```

    Aqui estão alguns exemplos de resultados:

    <img
      title="Screenshot of query for GeoIP info"
      alt="Screenshot of query for GeoIP info"
      src="/images/nrql_screenshot-crop_lookup-query-geoip.webp"
    />
  </Collapser>
</CollapserGroup>
