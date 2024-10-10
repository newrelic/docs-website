---
title: Protocolo de nomenclatura de transacciones
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: An explanation of how New Relic for Java names and groups transactions in the APM UI.
freshnessValidatedDate: never
translationType: machine
---

Si está utilizando New Relic para Java con [un frameworkcompatible](/docs/java/new-relic-for-java#h2-compatibility), New Relic agrupa las transacciones según los nombres de transacciones obtenidos del framework. De lo contrario, New Relic agrupa las transacciones según su componente. Los componentes son los JSP, servlets y filtros invocados durante la transacción.

<Callout variant="important">
  No utilice corchetes `[suffix]` al final del nombre de su transacción. New Relic elimina automáticamente los corchetes del nombre. En su lugar, utilice paréntesis `(suffix)` u otros símbolos si es necesario.
</Callout>

## Transacción de agrupación [#components]

New Relic agente de Java agrupa transacciones similares bajo un solo nombre. Si New Relic no agrupara las transacciones, cada URI único generaría un nombre único. Por ejemplo, su aplicación web podría generar URI como:

```
/user/123/control_panel.jhtml
/user/456/control_panel.jhtml
/user/789/control_panel.jhtml
```

Sin agrupación, esto produciría tres métricas individuales (bastante sin sentido). Por lo tanto, New Relic intenta agrupar las transacciones bajo una etiqueta significativa. Para obtener más información sobre la agrupación métrica, consulte [problemas de agrupación métrica](/docs/features/metric-grouping-issues).

Los nombres de las transacciones utilizan el formato URI. Por ejemplo:

```
MyTransactionName
/MyTransactionName
/MyServlet/MyTransactionName
```

Si está utilizando [un frameworkcompatible](/docs/java/new-relic-for-java#h2-compatibility), New Relic obtiene el nombre de la transacción del framework. Por ejemplo, para Spring, el nombre de la transacción generalmente proviene de llamar `getViewName` en el objeto `org.springframework.web.servlet.ModelAndView` .

Si no está utilizando un framework compatible, New Relic nombra una transacción según sus componentes. El nombre exacto de la transacción lo determina el componente con [mayor prioridad](#priority). Si varios componentes comparten prioridad, el agente utiliza el primer componente que se invocó.

## Prioridad de nomenclatura [#priority]

New Relic asigna a cada transacción un nombre de acuerdo con la siguiente prioridad, de mayor a menor prioridad:

<CollapserGroup>
  <Collapser
    id="request-attributes"
    title="Solicitar atributo"
  >
    El atributo de solicitud y la API de llamada tienen la prioridad de nomenclatura más alta. Si una transacción tiene un atributo de solicitud o una llamada API, la transacción tomará su nombre de ahí.

    Puede configurar el atributo de solicitud en cualquier momento durante la solicitud web. Si configura varios atributos durante una solicitud, se utilizará el primer nombre.

    Este ejemplo establece el nombre de la transacción utilizando un atributo de solicitud en el `doGet` de un servlet:

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
    title="Llamada API"
  >
    También puede configurar el nombre de la transacción llamando al método `setTransactionName` desde la [API del agente de Java](/docs/java/java-agent-api). Una llamada API tiene la misma prioridad que un atributo de solicitud. Si configura varios atributos o realiza múltiples llamadas API durante una solicitud, se utilizará el nombre más reciente.
  </Collapser>

  <Collapser
    id="frameworks"
    title="Frameworks"
  >
    Si no hay ningún atributo de solicitud o API de llamada y estás utilizando [un frameworkcompatible](/docs/java/new-relic-for-java#h2-compatibility), New Relic obtiene el nombre de la transacción de los componentes framework .
  </Collapser>

  <Collapser
    id="jsps"
    title="Páginas de servidor Java (JSP)"
  >
    Después del marco, el agente de Java New Relic utilizará JavaServer Pages (JSP). Una JSP obtiene el nombre de la transacción a partir de su nombre de clase. Por ejemplo, si el nombre de la clase del servlet JSP es `org.apache.jsp.ShowBrowser_jsp` el nombre de la transacción es `ShowBrowser.jsp`.
  </Collapser>

  <Collapser
    id="servlets"
    title="Servlets"
  >
    Después de los JSP, el agente de Java de New Relic utilizará servlets. Un servlet establece el nombre de la transacción a partir de un parámetro de inicio o del nombre del servlet. El parámetro init tiene mayor prioridad, por lo que los servlets con un parámetro init tienen prioridad sobre los servlets sin él.

    El nombre del servlet y el parámetro init se definen en el descriptor desplegable. Por ejemplo:

    SqlServlet test.SqlServlet com.newrelic.agent.TRANSACTION_NAME MyTransactionName
  </Collapser>

  <Collapser
    id="filters"
    title="Filtros de servlet"
  >
    Los filtros de servlet tienen la prioridad más baja. Un filtro obtiene el nombre de la transacción a partir de un parámetro de inicio o del nombre del filtro. El parámetro init tiene una prioridad más alta, por lo que los filtros con un parámetro init tienen prioridad sobre los filtros que no lo tienen.

    El nombre del filtro y el parámetro de inicio se definen en el descriptor desplegable. Por ejemplo:

    SqlFilter test.SqlFilter com.newrelic.agent.TRANSACTION_NAME MyTransactionName

    El nombre del filtro es el valor del elemento `filter-name` . El parámetro de inicio es el valor del elemento `param-value` de un elemento `init-param` con un elemento `param-name` de `com.newrelic.agent.TRANSACTION_NAME`.
  </Collapser>
</CollapserGroup>

## Deshabilitar la denominación basada en componentes [#reverting]

Para algunas aplicaciones, es posible que desee desactivar la denominación de transacciones basada en componentes. [Establezca este valor en su archivo <DNT>**newrelic.yml**</DNT> ](/docs/java/java-agent-configuration#cfg-enable_auto_transaction_naming):

```yml
enable_auto_transaction_naming: false
```

<Callout variant="caution">
  A menos que implemente la API de llamada para nombrar su transacción, es muy probable que deshabilitar el nombramiento de transacciones automáticas cause [problemas de agrupación métrica](/docs/features/metric-grouping-issues).
</Callout>
