---
title: Nomeação automática de aplicativos
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: How to configure New Relic's Java agent to report data for individual web apps to their own application in APM.
freshnessValidatedDate: never
translationType: machine
---

Os nomes que você dá ao seu aplicativo podem ajudar a organizar sua métrica de desempenho do New Relic.

O agente Java da New Relic relata todas as transações e outras métricas em uma única JVM para o nome do aplicativo especificado em `newrelic.yml` na configuração `app_name` (para obter mais informações sobre a nomenclatura do aplicativo, consulte [Nomeie seu aplicativo Java](/docs/agents/java-agent/configuration/name-your-java-application)). Ao alterar `enable_auto_app_naming` em `newrelic.yml` para `true`, o aplicativo será nomeado de acordo com seu contexto, filtro, servlet ou atributo de solicitação.

Essa configuração permite que você execute vários aplicativos da web em uma única JVM enquanto reporta transações, erros e métricas para outro aplicativo apropriado na interface do usuário do New Relic. As tarefas em segundo plano ainda usarão o nome do aplicativo padrão de `newrelic.yml`.

<Callout variant="important">
  Essas mudanças de configuração exigem uma reinicialização da JVM para entrarem em vigor.

  Esta configuração NÃO funciona com o Rastreamento Infinito habilitado.
</Callout>

<Callout variant="caution">
  Ativar a nomeação automática de aplicativos aumentará a quantidade de dados ingeridos pelo agente. Existem vários métodos para [alertar e monitor a ingestão de dados](/docs/data-apis/manage-data/manage-data-coming-new-relic/).
</Callout>

## Fontes de nomes de aplicativos [#enable-auto-app-naming]

Quando você define `enable_auto_app_naming` como `true`, o New Relic usa as seguintes fontes de informações para nomear seu aplicativo:

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **App type**
        </DNT>
      </th>

      <th>
        <DNT>
          **Naming source**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tarefas em segundo plano
      </td>

      <td>
        O nome do aplicativo padrão de `newrelic.yml`
      </td>
    </tr>

    <tr>
      <td>
        Transação da web
      </td>

      <td>
        Em ordem de prioridade:

        * Solicitar atributo (maior prioridade)
        * Parâmetro de inicialização do servlet
        * Parâmetro de inicialização do filtro
        * Parâmetro de contexto do aplicativo Web
        * Nome do contexto do aplicativo Web (nome de exibição)
        * Caminho de contexto do aplicativo Web (prioridade mais baixa)
      </td>
    </tr>
  </tbody>
</table>

## Solicitar atributo

O atributo de solicitação `APPLICATION_NAME` tem precedência sobre quaisquer configurações no XML. Defina esse atributo o mais cedo possível na transação da web. Se for chamada diversas vezes, a última invocação determinará o nome do aplicativo.

<Callout variant="tip">
  `APPLICATION_NAME` só funciona com ServletRequests.
</Callout>

Para usar o atributo request para nomenclatura refinada do aplicativo com base no URI da solicitação:

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  ...
  String requestUri = httpServletRequest.getRequestURI();

  if (requestUri.startsWith("/my-special-request/")) {
      request.setAttribute("com.newrelic.agent.APPLICATION_NAME", "MySpecialWebApp");
  }
  ...
```

## Parâmetro de inicialização do servlet [#servlet-init-param]

Para configurar o nome do aplicativo para servlets individuais em `web.xml` usando <DNT>**init parameters**</DNT>:

```xml
<servlet>
  <servlet-name>SqlServlet</servlet-name>
  <servlet-class>test.SqlServlet</servlet-class>
  <init-param>
    <param-name>com.newrelic.agent.APPLICATION_NAME</param-name>
    <param-value>MyServletApp</param-value>
  </init-param>
</servlet>
```

O agente obtém o valor de `init-param` chamando

```java
javax.servlet.ServletConfig#getInitParameter(String)
```

com o argumento `com.newrelic.agent.APPLICATION_NAME`.

Se uma solicitação da web chamar vários servlets, o `init-param` do primeiro servlet a terminar terá precedência. Um servlet que não possui `init-param` usa o nome do aplicativo padrão para o aplicativo da web.

Além de declarar o nome do aplicativo em XML, você também pode defini-lo no código do seu aplicativo armazenando um atributo no `javax.servlet.ServletRequest`:

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  ...
  request.setAttribute("com.newrelic.agent.APPLICATION_NAME", "MyWebApp");
  ...
```

## Parâmetro de inicialização do filtro [#filter-init-param]

Se seu aplicativo web não tiver servlets, você poderá usar um parâmetro init para um filtro:

```xml
<filter>
  <filter-name>SqlFilter</filter-name>
  <filter-class>test.SqlFilter</filter-class>
  <init-param>
    <param-name>com.newrelic.agent.APPLICATION_NAME</param-name>
    <param-value>MyFilterApp</param-value>
  </init-param>
</filter>
```

O agente obtém o valor de `init-param` chamando `javax.servlet.FilterConfig#getInitParameter(String)` com o argumento `com.newrelic.agent.APPLICATION_NAME`. Os servlets têm precedência sobre os filtros para nomenclatura de aplicativos, portanto, o parâmetro init de um filtro será usado somente se nenhum servlet tiver sido chamado. O `init-param` do primeiro filtro a terminar tem precedência.

## Parâmetro de contexto [#context-param]

Para usar um parâmetro de contexto para definir o nome do aplicativo:

```xml
<context-param>
  <param-name>com.newrelic.agent.APPLICATION_NAME</param-name>
  <param-value>MyWebApp</param-value>
</context-param>
```

O agente obtém o valor do parâmetro de contexto chamando `javax.servlet.ServletContext#getInitParameter(String)` com o argumento `com.newrelic.agent.APPLICATION_NAME`. O parâmetro de contexto tem precedência sobre o elemento `display-name` .

## Nome de exibição

Para determinar o nome do aplicativo usando o elemento `display-name` em `web.xml`:

```xml
<display-name>MyWebApp</display-name>
```

O agente obtém o valor do elemento `display-name` chamando `javax.servlet.ServletContext#getServletContextName()`.

## Caminho de contexto

Se não houver nenhum elemento `display-name` e nenhum dos outros métodos de hierarquia superior for usado para definir o nome do aplicativo, o nome do aplicativo virá do caminho de contexto do aplicativo da web. O agente obtém o caminho do contexto chamando `javax.servlet.ServletContext#getContextPath()`.

O caminho do contexto é a parte do URI da solicitação usada para selecionar o contexto da solicitação. O caminho do contexto sempre vem primeiro em um URI de solicitação. Por exemplo:

Considere o seguinte URL:

```
http://example.com/newrelic-axis2-ws/getWeather
```

Neste URL:

* O URI da solicitação é `/newrelic-axis2-ws/getWeather`.
* O caminho do contexto é `/newrelic-axis2-ws`.
* O aplicativo é denominado `newrelic-axis2-ws`.
