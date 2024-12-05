---
title: 'API do agente Java: agrupamento de erros com uma implementação de retorno de chamada personalizada'
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: A guide on using the New Relic Java agent API for error grouping with a custom callback implementation.
freshnessValidatedDate: never
translationType: machine
---

A API do agente Java da New Relic permite que você configure um agrupamento de erros personalizado usando uma implementação de retorno de chamada personalizada em seu aplicativo Java. Este documento mostra um exemplo de uso do agrupamento de erros personalizado com uma implementação de retorno de chamada em um aplicativo de exemplo.

<Callout variant="important">
  Para obter melhores resultados ao usar a API, certifique-se de ter a [versão mais recente do agente Java](/docs/release-notes/agent-release-notes/java-release-notes).
</Callout>

## Exemplo: Implementando um retorno de chamada de agrupamento de erros personalizado [#example]

Abaixo está um exemplo de aplicativo de amostra usando a API do agente Java para implementar o agrupamento de erros customizado com um retorno de chamada e registrar o retorno de chamada.

<Callout variant="tip">
  Se você copiar e colar o código de exemplo, certifique-se de usar o espaçamento apropriado em sua linha de comando.
</Callout>

````java

package test;
import java.io.IOException;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newrelic.api.agent.ErrorGroupCallback;
import com.newrelic.api.agent.NewRelic;

public class MyServletContextListener implements ServletContextListener {

@Override
public void contextDestroyed(ServletContextEvent arg0) {
// Do any cleanup if needed
  }

@Override
public void contextInitialized(ServletContextEvent arg0) {
// Register the error grouping callback on application startup
NewRelic.setErrorGroupCallback(new MyErrorGrouper());
  }
}

public class MyErrorGrouper implements ErrorGroupCallback {

public String generateGroupingString(ErrorData errorData) {
String clazz = errorData.getErrorClass();
String txnName = errorData.getTransactionName();

return (clazz.isEmpty() || txnName.isEmpty()) ? null : clazz + "_" + txnName;
  }
}

public class TestServlet extends HttpServlet {

private static final long serialVersionUID = 1L;

protected void processRequest(HttpServletRequest req, HttpServletResponse resp)
throws ServletException, IOException {
// Simulate an exception
  throw new ServletException("Simulated ServletException");
  }

@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp)
throws ServletException, IOException {
  processRequest(req, resp);
  }

@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp)
  throws ServletException, IOException {
  processRequest(req, resp);
  }
}
```
````
