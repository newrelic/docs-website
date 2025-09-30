---
title: 'Regras para criação de métricas: requisitos e dicas'
tags:
  - Telemetry Data Platform
  - Ingest and manage data
  - Convert data to metrics
metaDescription: 'How to create metric rules for data from events, logs, or spans in New Relic.'
freshnessValidatedDate: never
translationType: machine
---

Aqui estão alguns limites, requisitos e recomendações ao criar métricas a partir de evento, log ou spans.

## Agregação métrica [#summary-and-uniquecount]

Sua consulta NRQL deve usar uma das seguintes funções `summary`, `uniqueCount` ou `distribution` para métrica agregada:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Função
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `summary`
      </td>

      <td>
        Cria um ponto de dados métricos resumidos para cada janela de tempo (atualmente 1 minuto). Use isto se sua consulta NRQL usar [funções agregadoras](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions) suportadas pelo tipo de métrica de resumo, como `average`, `sum`, `min` ou `max`.

        <DNT>
          **Example rule-creation query:**
        </DNT>

        ```sql
        SELECT summary(duration) AS 'service.responseTime' FROM Transaction 
        WHERE appName = 'Data Points Staging' FACET name, appName, host
        ```
      </td>
    </tr>

    <tr>
      <td>
        `uniqueCount`
      </td>

      <td>
        Cria um ponto de dados de métrica `uniqueCount` para cada intervalo de tempo de 1 minuto. Use isto se sua consulta NRQL usar o [tipo de agregador](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions) `uniqueCount` .

        Exemplo de consulta de criação de regra:

        ```sql
        FROM Transaction SELECT uniqueCount(request.headers.userAgent) 
        AS 'server.request.header.userAgent.uniqueCount' 
        WHERE appName = 'Browser Monitoring Router' FACET http.statusCode, name, appName, host
        ```
      </td>
    </tr>

    <tr>
      <td>
        `distribution`
      </td>

      <td>
        Cria um ponto de dados de métrica de distribuição para cada janela de tempo de 1 minuto. Use isto se sua consulta NRQL usar [funções agregadoras](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions) como `percentile`, `histogram`, `min`, `max`, `average`, `sum` ou `count`. Use apenas o atributo de interesse como argumento e descarte o restante dos argumentos de `percentile` ou `histogram`. A métrica gerada oferece suporte a qualquer argumento em `percentile` ou `histogram`.

        <DNT>
          **Example of creating a `distribution` rule:**
        </DNT>

        ```sql
        SELECT distribution(duration) AS 'service.responseTime' FROM Transaction 
        WHERE appName = 'Data Points Staging' FACET name, appName, host
        ```
      </td>
    </tr>

    <tr>
      <td>
        Contagem simples: `summary(1)` e `sum`
      </td>

      <td>
        Se você quiser uma métrica que seja uma contagem simples de eventos, registros ou períodos que correspondam a uma cláusula `WHERE` específica, use a métrica `summary(1)` . Este tipo de métrica conta o número de eventos, logs ou intervalos especificados por minuto. Ao consultar a métrica criada, utilize o método `sum` para ver o resultado.

        <DNT>**Example:**</DNT> Se você quiser criar uma métrica chamada `foo.count` que conte a transação chamada `foo`, o NRQL ficaria assim:

        ```sql
        FROM Transaction SELECT summary(1) AS 'foo.count' WHERE name = 'foo'
        ```

        Então você consultaria assim:

        ```sql
        FROM Metric SELECT sum(foo.count) SINCE 30 minutes ago
        ```

        Para mais informações sobre métrica, consulte nossa documentação sobre [tipos de métrica](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type#metric-types).
      </td>
    </tr>
  </tbody>
</table>

## Limites de criação de regras [#limits]

Esses limites afetam a criação de regras métricas:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Limites
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Limites da conta
      </td>

      <td>
        Uma conta pode ter no máximo 1.000 regras de criação de métricas.
      </td>
    </tr>

    <tr>
      <td>
        Limites da regra métrica
      </td>

      <td>
        Uma regra pode:

        * Crie no [máximo 10 métricas](#multiple-metrics).
        * Use apenas um tipo de dados (evento, log ou spans).
        * Selecione no máximo 20 atributos (facetas) para incluir em uma métrica.
      </td>
    </tr>

    <tr>
      <td>
        Limites de janela de tempo
      </td>

      <td>
        Limite de 50 mil em combinações exclusivas de nome de métrica/valor de atributo para uma única métrica em um intervalo de tempo de 30 segundos. Serão aplicados [limites normais de cardinalidade em rollups](/docs/data-apis/ingest-apis/metric-api/metric-api-limits-restricted-attributes/#requirements) .

        Se o limite de 50 mil em uma janela de 30 segundos for excedido, a regra será desativada e um [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)será criado nessa conta que inclui:

        * Os detalhes da regra
        * Uma mensagem sobre ter muitas facetas
        * Um valor de atributo `newRelicFeature` de `eventToMetric`
      </td>
    </tr>
  </tbody>
</table>

## Limites de cardinalidade [#attributes-limit]

[Os limites de criação de regras](#limits) incluem limites ao número de combinações únicas de nomes de métricas e valores de atributos. Este limite existe porque um grande número de atributo e/ou valores de atributo pode levar a um aumento exponencial no tamanho dos dados reportados.

<DNT>
  **Example metric creation rule that attaches five attributes:**
</DNT>

```sql
FROM ProcessSample SELECT summary(ioTotalReadBytes) 
WHERE entityType = 'ComputeSample' 
FACET awsRegion, awsAvailabilityZone, commandName, entityName, processId
```

Se cada um dos cinco atributos reportasse dez valores exclusivos dentro de uma janela de tempo de um minuto, o número de combinações únicas de nome-métrica/atributo teria teoricamente um máximo de 10x10x10x10x10, ou 100.000. Múltiplos atributos com múltiplos valores exclusivos podem levar a um grande número de entradas métricas únicas.

Na prática, normalmente não é esse o caso, porque os atributo costumam estar relacionados. Por exemplo, se um atributo for `hostname` e outro for `awsRegion`, quando você vir o nome do host A, ele sempre estará na região B da AWS; você nunca veria o nome do host A e outros valores de região da AWS.

É por isso que é importante, durante o [processo de criação de NRQL](#create-nrql), usar a função `uniqueCount` para verificar quantas combinações exclusivas de nome de métrica/valor de atributo sua consulta NRQL está gerando.

## Múltiplas métricas de uma regra [#multiple-metrics]

Uma regra pode criar até dez métricas. Não existem diferenças funcionais entre métricas criadas uma de cada vez e aquelas criadas com uma única regra. Razões para criar múltiplas métricas com uma única regra:

* Menos probabilidade de atingir [o limite de regras por conta](#limits).
* É mais fácil adicionar o mesmo atributo a métricas múltiplas.

<DNT>
  **Example creating multiple metrics with a single rule:**
</DNT>

```sql
FROM Transaction SELECT uniqueCount(request.headers.userAgent) AS 'server.request.header.userAgent.uniqueCount', 
summary(duration) AS 'server.duration', summary(totalTime) AS 'server.totalTime' 
WHERE appName = 'Browser Monitoring Router' FACET http.statusCode, name, appName, host
```

## Nomenclatura métrica [#naming]

Uma métrica recebe um nome com a cláusula `AS` , como parte do [processo de criação de regras NRQL](#create-nrql). No exemplo de NRQL a seguir, o nome da métrica é `io.totalread.bytes`:

```sql
FROM ProcessSample SELECT summary(ioTotalReadBytes) AS 'io.totalread.bytes' 
WHERE entityType = 'ComputeSample' FACET awsRegion, awsAvailabilityZone, commandName
```

Se não houver nenhum nome atribuído com a cláusula `AS` , o nome da métrica será o nome do atributo de consulta. Neste exemplo, se nenhum nome fosse atribuído, o nome da métrica seria `ioTotalReadBytes`.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nomes métricos
      </th>

      <th>
        Requisitos e recomendações
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Requisitos
      </td>

      <td>
        Requisitos para nomear uma métrica:

        * Menor ou igual a 255 (UTF-16) unidades de código de 16 bits. Uma maneira de garantir que você está abaixo do limite é manter cada string abaixo de 127 do que for mais fácil de contar.

        * Sem espaços.

        * Comece com uma carta.

          Exemplos de nomes métricos fortes:

        * `rubyvm.memory.heap_used`

        * `redis.container.cpu.percent`

        * `memcached.process_virtual_memory.bytes`
      </td>
    </tr>

    <tr>
      <td>
        Comprimento e estrutura
      </td>

      <td>
        Decida um nome e uma estrutura que torne mais fácil para outras pessoas encontrarem, compreenderem e usarem essa métrica.

        * Recomendamos manter o nome da sua métrica com menos de 40 caracteres para uma legibilidade ideal. Nomes mais longos podem ser cortados ou sobrepostos a outros nomes.
        * Seu esquema de nomenclatura de métrica dependerá de sua lógica de negócios. Talvez você queira usar o namespace para prefixar o nome da sua métrica ou talvez seus nomes precisem ser mais gerais.
      </td>
    </tr>

    <tr>
      <td>
        Componentes dentro do nome
      </td>

      <td>
        Se você deseja criar componentes dentro do nome da sua métrica (como a fonte das métricas e o que você está medindo), recomendamos ir do amplo ao específico (da esquerda para a direita):

        1. Use um ponto para separar esses componentes para ser consistente com os nomes das métricas da New Relic.

        2. Em seguida, use um sublinhado para separar as palavras dentro dos pontos.

           <DNT>
             **Example:**
           </DNT>

           ```
           application.page_view.duration
           ```
      </td>
    </tr>

    <tr>
      <td>
        Atributo
      </td>

      <td>
        Evite colocar atributo no nome da sua métrica. atributo são qualidades da sua métrica que você pode usar para filtrar ou facetar seus dados, como cluster ou zona de disponibilidade.

        <DNT>**Example:**</DNT> Se você incluísse a zona de disponibilidade no nome da sua métrica, isso significaria que, para essa métrica, você não conseguiria ver resultados em todas as zonas de disponibilidade.
      </td>
    </tr>

    <tr>
      <td>
        Alterando nomes de métricas
      </td>

      <td>
        Se você alterar o nome de uma métrica, os dados históricos **não** serão atualizados para esse novo nome. Para consultar ou mapear esses dados históricos, você precisará especificar o nome da métrica mais antiga.
      </td>
    </tr>
  </tbody>
</table>
