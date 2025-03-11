---
title: 'Agente de Java API: Error al agrupar con una implementación de devolución de llamada personalizada'
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: A guide on using the New Relic Java agent API for error grouping with a custom callback implementation.
freshnessValidatedDate: never
translationType: machine
---

La API New Relic agente de Java le permite configurar una agrupación de errores personalizada utilizando una implementación de devolución de llamada personalizada en su aplicación Java. Este documento muestra un ejemplo del uso de la agrupación de errores personalizada con una implementación de devolución de llamada en una aplicación de muestra.

<Callout variant="important">
  Para obtener mejores resultados al utilizar la API, asegúrese de tener la [última versión del agente de Java](/docs/release-notes/agent-release-notes/java-release-notes).
</Callout>

## Ejemplo: implementar una devolución de llamada de agrupación de errores personalizada [#example]

A continuación se muestra un ejemplo de una aplicación de muestra que utiliza la API agente de Java para implementar una agrupación de errores personalizada con una devolución de llamada y registrar la devolución de llamada.

<Callout variant="tip">
  Si copia y pega código de ejemplo, asegúrese de utilizar el espacio adecuado en su línea de comando.
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
