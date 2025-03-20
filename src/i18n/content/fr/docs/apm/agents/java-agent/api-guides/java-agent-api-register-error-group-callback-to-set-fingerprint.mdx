---
title: "API d'agent Java\_: regroupement d'erreurs avec une implémentation de rappel personnalisée"
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: A guide on using the New Relic Java agent API for error grouping with a custom callback implementation.
freshnessValidatedDate: never
translationType: machine
---

L&apos;API de l&apos;agent Java New Relic vous permet de configurer un regroupement d&apos;erreurs personnalisé à l&apos;aide d&apos;une implémentation de rappel personnalisée dans votre application Java. Ce document montre un exemple d’utilisation du regroupement d’erreurs personnalisé avec une implémentation de rappel dans un exemple d’application.

<Callout variant="important">
  Pour de meilleurs résultats lors de l&apos;utilisation de l&apos;API, assurez-vous de disposer de la [dernière version agent Java ](/docs/release-notes/agent-release-notes/java-release-notes).
</Callout>

## Exemple : implémentation d&apos;un rappel de regroupement d&apos;erreurs personnalisé [#example]

Vous trouverez ci-dessous un exemple d&apos;application utilisant l&apos;API de l&apos;agent Java pour implémenter un regroupement d&apos;erreurs personnalisé avec un rappel et enregistrer le rappel.

<Callout variant="tip">
  Si vous copiez et collez un exemple de code, assurez-vous d&apos;utiliser un espacement approprié sur votre ligne de commande.
</Callout>

```java
package test;
import com.newrelic.api.agent.ErrorGroupCallback;
import com.newrelic.api.agent.NewRelic;
import java.io.IOException;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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