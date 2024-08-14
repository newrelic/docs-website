---
title: Protocolo de nomenclatura de transação
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: An explanation of how New Relic for Java names and groups transactions in the APM UI.
freshnessValidatedDate: never
translationType: machine
---

Se você estiver usando o New Relic para Java com [uma framework compatível](/docs/java/new-relic-for-java#h2-compatibility), o New Relic agrupará as transações com base nos nomes de transação obtidos da framework. Caso contrário, a New Relic agrupa as transações com base em seu componente. Os componentes são JSPs, servlets e filtros invocados durante a transação.

<Callout variant="important">
  Não use colchetes `[suffix]` no final do nome da sua transação. O New Relic remove automaticamente os colchetes do nome. Em vez disso, use parênteses `(suffix)` ou outros símbolos, se necessário.
</Callout>

## Agrupamento de transação [#components]

O agente Java da New Relic agrupa transações semelhantes sob um único nome. Se a New Relic não agrupasse a transação, cada URI exclusivo geraria um nome exclusivo. Por exemplo, seu aplicativo Web pode produzir URIs como:

```
/user/123/control_panel.jhtml
/user/456/control_panel.jhtml
/user/789/control_panel.jhtml
```

Sem agrupamento, isso produziria três métricas individuais (bastante sem sentido). Portanto, a New Relic tenta agrupar as transações sob um rótulo significativo. Para obter mais informações sobre agrupamento métrico, consulte [questões de agrupamento métrico](/docs/features/metric-grouping-issues).

Os nomes de transação usam o formato URI. Por exemplo:

```
MyTransactionName
/MyTransactionName
/MyServlet/MyTransactionName
```

Se você estiver usando [uma frameworksuportada](/docs/java/new-relic-for-java#h2-compatibility), o New Relic obterá o nome da transação da framework. Por exemplo, para Spring, o nome da transação normalmente vem da chamada de `getViewName` no objeto `org.springframework.web.servlet.ModelAndView` .

Se você não estiver usando uma framework suportada, o New Relic nomeia uma transação com base em seus componentes. O nome exato da transação é determinado pelo componente com [maior prioridade](#priority). Se vários componentes compartilharem prioridade, o agente usará o primeiro componente que foi chamado.

## Prioridade de nomenclatura [#priority]

A New Relic atribui um nome a cada transação de acordo com a seguinte prioridade, da prioridade mais alta para a mais baixa:

<CollapserGroup>
  <Collapser
    id="request-attributes"
    title="Solicitar atributo"
  >
    Atributo de solicitação e chamada de API têm a prioridade de nomenclatura mais alta. Se uma transação tiver um atributo de solicitação ou chamada de API, a transação receberá seu nome a partir daí.

    Você pode definir o atributo de solicitação a qualquer momento durante a solicitação da web. Se você definir vários atributos durante uma solicitação, o primeiro nome será usado.

    Este exemplo define o nome da transação usando um atributo de solicitação no `doGet` de um servlet:

    ```java
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ...
        request.setAttribute("com.newrelic.agent.TRANSACTION_NAME", "MyTransactionName");
        ...
    }
    ```
  </Collapser>

  <Collapser
    id="api-calls"
    title="Chamada de API"
  >
    Você também pode definir o nome da transação chamando o método `setTransactionName` da [API do agente Java](/docs/java/java-agent-api). Uma chamada de API tem a mesma prioridade que um atributo de solicitação. Se você definir vários atributos ou fizer várias chamadas de API durante uma solicitação, o nome mais recente será usado.
  </Collapser>

  <Collapser
    id="frameworks"
    title="Frameworks"
  >
    Se não houver solicitação de atributo ou chamada de API e você estiver usando [uma frameworksuportada](/docs/java/new-relic-for-java#h2-compatibility), a New Relic obterá o nome da transação dos componentes framework .
  </Collapser>

  <Collapser
    id="jsps"
    title="JavaServer Pages (JSPs)"
  >
    Após o framework, o agente Java da New Relic utilizará JavaServer Pages (JSPs). Um JSP obtém o nome da transação a partir do nome de sua classe. Por exemplo, se o nome da classe do servlet JSP for `org.apache.jsp.ShowBrowser_jsp` o nome da transação será `ShowBrowser.jsp`.
  </Collapser>

  <Collapser
    id="servlets"
    title="Servlets"
  >
    Depois dos JSPs, o agente Java da New Relic usará servlets. Um servlet define o nome da transação a partir de um parâmetro init ou do nome do servlet. O parâmetro init tem prioridade mais alta, portanto, servlets com um parâmetro init têm precedência sobre servlets sem.

    O nome do servlet e o parâmetro init são definidos no descritor de implantação. Por exemplo:

    SqlServlet test.SqlServlet com.newrelic.agent.TRANSACTION_NAME MyTransactionName
  </Collapser>

  <Collapser
    id="filters"
    title="Filtros de servlet"
  >
    Os filtros de servlet têm a prioridade mais baixa. Um filtro obtém o nome da transação de um parâmetro init ou do nome do filtro. O parâmetro init tem uma prioridade mais alta, portanto os filtros com um parâmetro init têm precedência sobre os filtros sem.

    O nome do filtro e o parâmetro init são definidos no descritor de implantação. Por exemplo:

    SqlFilter test.SqlFilter com.newrelic.agent.TRANSACTION_NAME MyTransactionName

    O nome do filtro é o valor do elemento `filter-name` . O parâmetro init é o valor do elemento `param-value` de um elemento `init-param` com um elemento `param-name` de `com.newrelic.agent.TRANSACTION_NAME`.
  </Collapser>
</CollapserGroup>

## Desativar nomenclatura baseada em componentes [#reverting]

Para alguns aplicativos, você pode querer desabilitar a nomenclatura de transação baseada em componentes. [Defina este valor em seu arquivo <DNT>**newrelic.yml**</DNT> ](/docs/java/java-agent-configuration#cfg-enable_auto_transaction_naming):

```yml
enable_auto_transaction_naming: false
```

<Callout variant="caution">
  A menos que você implemente a chamada de API para nomear sua transação, desabilitar a nomenclatura de transação automática provavelmente causará [problemas de agrupamento métrico](/docs/features/metric-grouping-issues).
</Callout>
