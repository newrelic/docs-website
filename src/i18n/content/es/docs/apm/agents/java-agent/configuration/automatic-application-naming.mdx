---
title: Nomenclatura automática de aplicaciones
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: How to configure New Relic's Java agent to report data for individual web apps to their own application in APM.
freshnessValidatedDate: never
translationType: machine
---

Los nombres que le des a tu aplicación pueden ayudarte a organizar tu desempeño métrico de New Relic.

El agente de Java de New Relic informa todas las transacciones y otras métricas en una única JVM al nombre de la aplicación especificado en `newrelic.yml` bajo la configuración `app_name` (para obtener más información sobre la denominación de aplicaciones, consulte [Nombre de su aplicación Java](/docs/agents/java-agent/configuration/name-your-java-application)). Al cambiar `enable_auto_app_naming` en `newrelic.yml` a `true`, la aplicación recibirá un nombre según su contexto, filtro, servlet o atributo de solicitud.

Esta configuración le permite ejecutar varias aplicaciones web en una sola JVM mientras informa transacciones, errores y métricas a otra aplicación apropiada en la interfaz de usuario de New Relic. Las tareas en segundo plano seguirán utilizando el nombre de aplicación predeterminado de `newrelic.yml`.

<Callout variant="important">
  Estos cambios de configuración requieren un reinicio de JVM para que surtan efecto.

  Esta configuración NO funciona con Infinite Tracing habilitado.
</Callout>

<Callout variant="caution">
  Habilitar la denominación automática de aplicaciones aumentará la cantidad de datos ingeridos por el agente. Existen varios métodos para [alertar y monitor la ingesta de datos](/docs/data-apis/manage-data/manage-data-coming-new-relic/).
</Callout>

## Fuentes del nombre de la aplicación [#enable-auto-app-naming]

Cuando configuras `enable_auto_app_naming` en `true`, New Relic utiliza las siguientes fuentes de información para nombrar tu aplicación:

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
        Tarea en segundo plano
      </td>

      <td>
        El nombre de la aplicación predeterminada de `newrelic.yml`
      </td>
    </tr>

    <tr>
      <td>
        Transacciones web
      </td>

      <td>
        En orden de prioridad:

        * Solicitar atributo (prioridad más alta)
        * Parámetro de inicio del servlet
        * Parámetro de inicio del filtro
        * Parámetro de contexto de la aplicación web
        * Nombre del contexto de la aplicación web (nombre para mostrar)
        * Ruta de contexto de la aplicación web (prioridad más baja)
      </td>
    </tr>
  </tbody>
</table>

## Solicitar atributo

El atributo de solicitud `APPLICATION_NAME` tiene prioridad sobre cualquier configuración en el XML. Establezca este atributo lo antes posible en la transacción web. Si se llama varias veces, la última invocación determina el nombre de la aplicación.

<Callout variant="tip">
  `APPLICATION_NAME` sólo funciona con ServletRequests.
</Callout>

Para utilizar el atributo de solicitud para nombrar aplicaciones detalladas según el URI de solicitud:

```
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    ...
   String requestUri = httpServletRequest.getRequestURI();

   if (requestUri.startsWith("/my-special-request/")) {
       request.setAttribute("com.newrelic.agent.APPLICATION_NAME", "MySpecialWebApp");
    }
    ...
```

## Parámetro de inicio del servlet [#servlet-init-param]

Para configurar el nombre de la aplicación para servlets individuales en `web.xml` usando <DNT>**init parameters**</DNT>:

```
<servlet>
 <servlet-name>SqlServlet</servlet-name>
 <servlet-class>test.SqlServlet</servlet-class>
 <init-param>
   <param-name>com.newrelic.agent.APPLICATION_NAME</param-name>
   <param-value>MyServletApp</param-value>
 </init-param>
</servlet>
```

El agente obtiene el valor del `init-param` llamando

```
javax.servlet.ServletConfig#getInitParameter(String)
```

con el argumento `com.newrelic.agent.APPLICATION_NAME`.

Si una solicitud web llama a varios servlets, el `init-param` del primer servlet en finalizar tiene prioridad. Un servlet que no tiene `init-param` utiliza el nombre de aplicación predeterminado para la aplicación web.

Además de declarar el nombre de la aplicación en XML, también puede configurarlo en el código de su aplicación almacenando un atributo en javax.servlet.ServletRequest:

```
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    ...
    request.setAttribute("com.newrelic.agent.APPLICATION_NAME", "MyWebApp");
    ...
```

## Parámetro de inicio del filtro [#filter-init-param]

Si su aplicación web no tiene servlets, puede usar un parámetro de inicio para un filtro:

```
<filter>
  <filter-name>SqlFilter</filter-name>
  <filter-class>test.SqlFilter</filter-class>
  <init-param>
    <param-name>com.newrelic.agent.APPLICATION_NAME</param-name>
    <param-value>MyFilterApp</param-value>
   </init-param>
</filter>
```

El agente obtiene el valor de `init-param` llamando `javax.servlet.FilterConfig#getInitParameter(String)` con el argumento `com.newrelic.agent.APPLICATION_NAME`. Los servlets tienen prioridad sobre los filtros para la denominación de aplicaciones, por lo que el parámetro init para un filtro se utiliza sólo si no se invocó ningún servlet. El `init-param` del primer filtro en finalizar tiene prioridad.

## Parámetro de contexto [#context-param]

Para utilizar un parámetro de contexto para establecer el nombre de la aplicación:

```
<context-param>
  <param-name>com.newrelic.agent.APPLICATION_NAME</param-name>
  <param-value>MyWebApp</param-value>
</context-param>
```

El agente obtiene el valor del parámetro de contexto llamando `javax.servlet.ServletContext#getInitParameter(String)` con el argumento `com.newrelic.agent.APPLICATION_NAME`. El parámetro de contexto tiene prioridad sobre el elemento `display-name` .

## Nombre para mostrar

Para determinar el nombre de la aplicación utilizando el elemento `display-name` en `web.xml`:

```
<display-name>MyWebApp</display-name>
```

El agente obtiene el valor del elemento `display-name` llamando `javax.servlet.ServletContext#getServletContextName()`.

## Ruta de contexto

Si no hay ningún elemento `display-name` y no se utiliza ninguno de los otros métodos de jerarquía superior para establecer el nombre de la aplicación, el nombre de la aplicación proviene de la ruta de contexto de la aplicación web. El agente obtiene la ruta de contexto llamando a `javax.servlet.ServletContext#getContextPath()`.

La ruta de contexto es la parte del URI de solicitud que se utiliza para seleccionar el contexto de la solicitud. La ruta de contexto siempre aparece primero en un URI de solicitud. Por ejemplo:

Considere la siguiente URL:

```
http://example.com/newrelic-axis2-ws/getWeather
```

En esta URL:

* El URI de solicitud es `/newrelic-axis2-ws/getWeather`.
* La ruta de contexto es `/newrelic-axis2-ws`.
* La aplicación se llama `newrelic-axis2-ws`.
