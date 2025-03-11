---
title: Sintaxe de consulta para log
tags:
  - Logs
  - Log management
  - Example queries
  - UI and data
metaDescription: How to query your logs data in New Relic using the logs query syntax.
freshnessValidatedDate: never
translationType: machine
---

Use nossa interface de log em <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT> para pesquisar rapidamente seus dados log em segundos. Cada log lista o atributo disponível na coluna `log_summary`. Para detalhar detalhes adicionais, clique em qualquer atributo destacado.

## Estrutura de consulta [#query-structure]

Usando log, você pode pesquisar seus dados log inserindo palavras-chave simples, como `new` e `relic`, ou frases como `"new relic agent"`, diretamente no campo de pesquisa.

Termos simples são uma pesquisa 'contém' para o atributo da mensagem e o `filePath` do seu log. Por exemplo, `"new relic agent"` é equivalente ao mais detalhado `message: "*New Relic Agent*"`.

Para pesquisar outro atributo, prefixe o atributo aos seus termos, como `source: "*new relic agent*"`. Consulte [Operadores gerais](#general-operators) abaixo para obter mais detalhes.

Você também pode combinar palavras-chave ou frases com operadores para formar consultas mais complexas.

<Callout variant="tip">
  Log consulta no New Relic são baseados na linguagem de consulta <DNT>Lucene</DNT> e qualquer função <DNT>Lucene</DNT> listada neste documento é suportada. (Se uma função <DNT>Lucene</DNT> não estiver listada, não oferecemos suporte a ela.) Para alguns exemplos úteis, confira este [<DNT>Lucene</DNT> tutorial](https://www.lucenetutorial.com/lucene-query-syntax.html).
</Callout>

Regras gerais de consulta:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Regras de consulta de log
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Maiúsculas e minúsculas
      </td>

      <td>
        A sintaxe da consulta diferencia maiúsculas de minúsculas para valores de atributo. nomes de atributo sempre diferenciam maiúsculas de minúsculas.

        Exceção: pesquisas curinga não diferenciam maiúsculas de minúsculas para valores de atributo.
      </td>
    </tr>

    <tr>
      <td>
        Caracteres de espaço em branco
      </td>

      <td>
        Quando um termo contém caracteres de espaço em branco, como espaço ou tabulação, o termo precisará ser colocado entre aspas duplas.

        Exemplo: Para consultar um atributo `status` que contenha exatamente `POST /log/v1`, cite o termo assim:

        `status: "POST /log/v1"`

        Observação: para consultar um atributo `status` que contenha `POST /log/v1` em algum lugar do atributo, você precisará adicionar caracteres curinga como `status: "*POST /log/v1*"` (veja abaixo detalhes sobre caracteres curinga)
      </td>
    </tr>

    <tr>
      <td>
        Caracteres especiais
      </td>

      <td>
        Quando um termo contém caracteres especiais, coloque o termo entre aspas duplas e escape dos caracteres especiais usando uma barra invertida (`\`). Isso inclui caracteres especiais como `+`, `-`, `&`, `|`, `!`, `(`, `)`, `{`, `}`, `[`, `]`, `^`, `"`, `~`, `*`, `?`, `:`, `/` ou `\`.

        Exemplo: Para consultar um atributo `status` contendo exatamente `"POST /log/v1 HTTP/1.1" 202`, escape das aspas assim:

        `status: "\"POST /log/v1 HTTP/1.1\" 202"`
      </td>
    </tr>

    <tr>
      <td>
        Pesquisas curinga
      </td>

      <td>
        Você pode executar pesquisas curinga usando um asterisco (`*`) para substituir zero ou mais caracteres.

        Exemplo: para consultar um atributo `status` que contém `202` em algum lugar dele, formate a consulta assim:

        `status: *202*`

        Se o seu termo contiver espaços ou outros metacaracteres (veja acima), você precisará citar o termo curinga.

        Por exemplo, para consultar um atributo `status` que contém `/log/v1 202` em algum lugar dele, formate a consulta assim:

        `status: "*/log/v1 202*"`
      </td>
    </tr>
  </tbody>
</table>

## Pesquisar com texto [#query-text]

Para retornar resultados de consulta mais específicos, use pesquisas de texto para unir palavras-chave ou frases.

### Operadores de texto [#text-operators]

A sintaxe log consulta aceita os seguintes operadores de texto:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Doença
      </th>

      <th>
        Exemplo de operador de texto
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Correspondência (palavra-chave)
      </td>

      <td>
        Pesquise resultados de log contendo palavras-chave inseridas separadamente:

        `"new" "relic"`
      </td>
    </tr>

    <tr>
      <td>
        Correspondência exata (frase)
      </td>

      <td>
        Pesquise resultados log contendo a frase específica inserida:

        `"new relic agent"`
      </td>
    </tr>

    <tr>
      <td>
        Ou
      </td>

      <td>
        Pesquise resultados log contendo uma ou ambas as palavras-chave inseridas:

        `new OR relic`
      </td>
    </tr>

    <tr>
      <td>
        E
      </td>

      <td>
        Pesquise resultados log contendo ambas as palavras-chave inseridas:

        `new AND relic`
      </td>
    </tr>

    <tr>
      <td>
        \* Curinga (zero ou mais)
      </td>

      <td>
        Pesquise resultados de log contendo ambas as palavras-chave inseridas, com zero ou mais caracteres entre elas:

        `new*relic`
      </td>
    </tr>

    <tr>
      <td>
        Negação (palavra-chave)
      </td>

      <td>
        Pesquise resultados de log que não contenham a palavra-chave específica inserida:

        `-new`
      </td>
    </tr>

    <tr>
      <td>
        Negação (frase)
      </td>

      <td>
        Pesquise resultados de log que não contenham a frase específica inserida.

        `-"new relic"`
      </td>
    </tr>
  </tbody>
</table>

## Pesquise com atributo [#query-attributes]

Use pesquisas de atributo para restringir os resultados da consulta a um atributo ou campo específico.

### Operadores gerais [#general-operators]

Os seguintes operadores podem ser usados por todos os tipos de atributo:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Doença
      </th>

      <th>
        Exemplo de operador geral
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Igual `:`
      </td>

      <td>
        Pesquise resultados de log em que o atributo seja igual à palavra-chave especificada. Exemplo: O campo `hostname` é igual a `chi`:

        `hostname:chi`
      </td>
    </tr>

    <tr>
      <td>
        Não é igual `- :`
      </td>

      <td>
        Procure resultados de log em que o atributo não seja igual à palavra-chave especificada. Exemplo: O campo `hostname` não é igual `chi`.

        `-hostname:chi`
      </td>
    </tr>

    <tr>
      <td>
        Contém `*`
      </td>

      <td>
        Procure resultados de log em que o atributo contenha a palavra-chave especificada. Exemplo: O campo `hostname` contém `chi`.

        `hostname:*chi*`
      </td>
    </tr>

    <tr>
      <td>
        Não contém `- *`
      </td>

      <td>
        Procure resultados de log em que o atributo não contenha a palavra-chave especificada. Exemplo: O campo `hostname` não contém `chi`.

        `-hostname:*chi*`
      </td>
    </tr>

    <tr>
      <td>
        Começa com `*`
      </td>

      <td>
        Pesquise resultados de log onde o atributo começa com a palavra-chave especificada. Exemplo: O campo `hostname` começa com `chi`.

        `hostname:chi*`
      </td>
    </tr>

    <tr>
      <td>
        Termina com `*`
      </td>

      <td>
        Pesquise resultados de log onde o atributo termina com a palavra-chave especificada. Exemplo: O campo `hostname` termina com `chi`.

        `hostname:*chi`
      </td>
    </tr>

    <tr>
      <td>
        Tem
      </td>

      <td>
        Procure resultados de log que tenham o campo especificado. Exemplo: Possui o campo `user_name`.

        `has:user_name`
      </td>
    </tr>

    <tr>
      <td>
        Ausente
      </td>

      <td>
        Procure resultados de log que não tenham o campo especificado. Exemplo: Falta o campo `user_name`.

        `missing:user_name`
      </td>
    </tr>
  </tbody>
</table>

### Operadores numéricos [#numeric-operators]

Os seguintes operadores só podem ser utilizados por atributo numérico:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Doença
      </th>

      <th>
        Exemplo de operador numérico
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Maior que
      </td>

      <td>
        Pesquise por correspondências de atributo de resultados log que sejam maiores que o parâmetro fornecido. Exemplo: O campo `http_response_time_ms` é maior que `500`.

        `http_response_time_ms:>500`
      </td>
    </tr>

    <tr>
      <td>
        Melhor que ou igual a
      </td>

      <td>
        Pesquise resultados log com correspondências de atributo maiores ou iguais ao parâmetro fornecido. Exemplo: O campo `http_response_time_ms` é maior ou igual a `500`.

        `http_response_time_ms:>=500`
      </td>
    </tr>

    <tr>
      <td>
        Menor que
      </td>

      <td>
        Pesquise resultados log com correspondências de atributo menores que o parâmetro fornecido. Exemplo: O campo `http_response_time_ms` é menor que `500`.

        `http_response_time_ms:<500`
      </td>
    </tr>

    <tr>
      <td>
        Menos que ou igual a
      </td>

      <td>
        Pesquise resultados log com correspondências de atributo menores ou iguais ao parâmetro fornecido. Exemplo: O campo `http_response_time_ms` é menor ou igual a `500`.

        `http_response_time_ms:<=500`
      </td>
    </tr>
  </tbody>
</table>

## Exemplos de consulta de log [#query]

### Exemplo: consulta <DNT>Apache</DNT> [#example-query-apache-logs]

<Callout
  variant="tip"
  title="Sobre o registro do Apache"
>
  Se você tiver log <DNT>Apache</DNT> , recomendamos usar nossas regras de análise integradas para [log<DNT>Apache</DNT> ](/docs/logs/ui-data/built-log-parsing-rules/#apache)para analisar o log em atributo. Para usar a análise integrada, basta adicionar o atributo `logtype: apache` à sua configuração `logging.yml` nos hosts do seu log <DNT>Apache</DNT>.
</Callout>

Aqui estão alguns exemplos de consulta do log <DNT>Apache</DNT> :

<CollapserGroup>
  <Collapser
    id="503-responce-code"
    title="Veja todo o log do Apache com códigos de resposta `503`:"
  >
    ```
    logtype:apache response:503
    ```
  </Collapser>

  <Collapser
    id="multiple-response-codes"
    title="Veja todo o log do Apache com códigos de resposta `4xx` ou `5xx`:"
  >
    ```
    logtype:apache response:4* OR response 5*
    ```
  </Collapser>

  <Collapser
    id="method-example"
    title="Veja todo o log do Apache com `Method=GET` e `Response=2xx`"
  >
    ```
    logtype:apache verb:GET response:2*
    ```
  </Collapser>
</CollapserGroup>

### Exemplo: consulta <DNT>Amazon Cloudfront CDN</DNT> [#example-query-cloudfront]

<Callout
  variant="tip"
  title="Sobre o registro CDN"
>
  Se você tiver log <DNT>Amazon CloudFront</DNT>, saiba como [encaminhar o log de acesso <DNT>Amazon CloudFront</DNT> ](/docs/logs/forward-logs/cloudfront-web-logs/)para New Relic. Oferecemos regras de análise integradas que podem ser usadas para analisar automaticamente seus <DNT>Amazon Cloudfront</DNT> logs de acesso [padrão](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront) ou [em tempo real](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront-rtl). Também temos um [<DNT>Amazon Cloudfront</DNT> de log de acesso início rápido](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs) dashboard que você pode instalar e que fornece insights imediatos sobre seu <DNT>Amazon CloudFront CDN</DNT> log de acesso!
</Callout>

Aqui estão alguns exemplos de consulta ao [log de acesso<DNT>Amazon Cloudfront CDN</DNT> ](/docs/logs/forward-logs/cloudfront-web-logs/):

<CollapserGroup>
  <Collapser
    id="chase-miss-example"
    title="Ver todos os logs de acesso que resultaram em perda de cache"
  >
    ```
    logtype:cloudfront-rtl x_edge_result_type:Miss
    ```
  </Collapser>

  <Collapser
    id="edge-locations"
    title="Ver todos os registros de acesso que resultaram em uma perda de acesso nos pontos de presença de Atlanta"
  >
    ```
    logtype:cloudfront-rtl x_edge_result_type:Miss x_edge_location:ATL*
    ```
  </Collapser>

  <Collapser
    id="methods"
    title="Visualize todos os logs de acesso com cs_method=GET que resultaram em um erro 4xx ou 5xx nos pontos de presença de Atlanta"
  >
    ```
    logtype:cloudfront-rtl cs_method:GET x_edge_location:ATL* sc_status:4* OR sc_status:5*
    ```
  </Collapser>
</CollapserGroup>

## Consulte a consulta NRQL e adicione ao dashboard [#create-dashboard]

Para ver a versão NRQL de um gráfico de log, clique no menu de reticências desse gráfico e clique em <DNT>**View query**</DNT>. Isso abre uma visão do NRQL que gerou esse gráfico. Você pode modificar a consulta lá ou adicioná-la a um dashboard.

Para mudar de uma consulta de sintaxe <DNT>Lucene</DNT> para uma consulta NRQL , à direita do criador de consulta clique [no botão <DNT>**NRQL**</DNT> ](/docs/logs/ui-data/use-logs-ui#workflow-search).

Digamos que você queira pesquisar no log <DNT>Apache</DNT> códigos de resposta 503, converter isso em uma consulta NRQL usando `FACET`, visualizá-lo como um gráfico de pizza e adicionar esse gráfico a um dashboard. Veja como:

1. Na página da interface <DNT>**All logs**</DNT> , pesquise todos os logs <DNT>Apache</DNT> com 503 códigos de resposta, usando a consulta `logtype:apache response:503`
2. No menu de reticências do gráfico log , clique em <DNT>**View query**</DNT>.
3. Na consulta, substitua `SINCE <timestamp> UNTIL <timestamp> TIMESERIES MAX` por `FACET verb` e clique em <DNT>**Run**</DNT>. Você verá uma tabela com códigos de resposta agrupados por método (verbo).
4. Altere o tipo de gráfico para <DNT>**Pie**</DNT>.
5. Clique em <DNT>**Add to dashboard**</DNT> e conclua as etapas.
