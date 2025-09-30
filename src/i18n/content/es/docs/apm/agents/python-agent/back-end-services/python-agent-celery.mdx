---
title: Agente Python y Celery
tags:
  - Agents
  - Python agent
  - Back-end services
metaDescription: How to record Celery background processes using the Python agent.
freshnessValidatedDate: never
translationType: machine
---

Si está utilizando Celery como un sistema de cola de tareas distribuido, puede usar el agente Python para registrar los procesos de Celery como [transacción no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions).

Para que el agente Python funcione con Celery, primero siga las [instrucciones de instalación del agente](/docs/agents/python-agent/installation-and-configuration/python-agent-installation) para instalar, configurar y [probar](/docs/agents/python-agent/installation-and-configuration/testing-python-agent) el agente. Luego siga estas instrucciones específicas para el Celery.

## Ejecutar Celery [#running-with-celery]

El comando que utilice para ejecutar Celery con el agente depende de su versión de Celery y de su configuración específica.

<CollapserGroup>
  <Collapser
    id="run-celery-celery"
    title="celery"
  >
    Si utiliza el comando `celery` , incluya las opciones personalizadas:

    ```
    NEW_RELIC_CONFIG_FILE=/some/path/newrelic.ini newrelic-admin run-program celery YOUR_COMMAND_OPTIONS
    ```

    Por ejemplo:

    ```
    NEW_RELIC_CONFIG_FILE=/some/path/newrelic.ini newrelic-admin run-program celery -A tasks worker --loglevel=info
    ```
  </Collapser>

  <Collapser
    id="run-celery-celeryd"
    title="celeryd"
  >
    El comando de ejecución `celeryd` está obsoleto en las versiones más recientes de Celery. Si todavía usas `celeryd`, incluye opciones personalizadas:

    ```
    NEW_RELIC_CONFIG_FILE=some/path/newrelic.ini newrelic-admin run-program celeryd YOUR_COMMAND_OPTIONS
    ```
  </Collapser>

  <Collapser
    id="run-celery-django"
    title="Django"
  >
    Si inicia Celery con un comando de administración de Django, use `manage.py`. Reemplace el comando `celery` con su comando Django e incluya cualquier opción personalizada:

    ```
    NEW_RELIC_CONFIG_FILE=/some/path/newrelic.ini newrelic-admin run-program python manage.py celery YOUR_COMMAND_OPTIONS
    ```
  </Collapser>

  <Collapser
    id="run-celery-initd"
    title="Guión de inicio"
  >
    Si está utilizando uno de los scripts de inicio genéricos de Celery, script y ajuste el comando `celery` que se llama cuando se utiliza el script . Este comando suele verse así:

    ```
    CELERY_BIN=${CELERY_BIN:-"celery"}
    ```

    Para agregar el script contenedor del agente, cambie la variable `CELERY_BIN` a lo siguiente, donde `some/path/` es su ruta real al archivo o paquete:

    ```
    CELERY_BIN=${CELERY_BIN:-"NEW_RELIC_CONFIG_FILE=/some/path/newrelic.ini /some/path/bin/newrelic-admin run-program /some/path/bin/celery"}
    ```

    Con este cambio, cada vez que se llame a `CELERY_BIN` , se llamará con el script contenedor del agente alrededor del comando `celery` real.
  </Collapser>
</CollapserGroup>

## Seleccione el nombre de la aplicación [#selecting-the-application-name]

La configuración `app_name` en el archivo de configuración del agente Python establece el nombre de la aplicación que se muestra en la UI de New Relic.

* Si su agente de Python monitorea las tareas de Celery y configura `app_name` con el mismo valor utilizado en el `app_name` de su agente de aplicación, los datos de ambas fuentes se combinarán en la UI con ese nombre.
* Si establece nombres diferentes, los datos aparecen por separado en la UI como dos nombres diferentes.

Al [configurar varios nombres de aplicaciones en los archivos de configuración del agente](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app), puede monitor tanto los datos combinados como los datos segregados. A continuación se muestra una forma común de hacer esto, usando una aplicación Django como ejemplo:

<CollapserGroup>
  <Collapser
    id="multiple-app-names"
    title="Usar múltiples nombres de aplicaciones"
  >
    Para el agente que monitorea la aplicación Django, configure lo siguiente:

    ```
    app_name = Your_app_name (Django); Your_app_name (Combined)
    ```

    Para el agente monitoreo Celery, configure lo siguiente:

    ```
    app_name = Your_app_name (Celery); Your_app_name (Combined)
    ```

    Esto da como resultado tres nombres mostrados en la UI:

    * `Your_app_name (Combined)`, que combina datos de Celery y de la aplicación Django
    * `Your_app_name (Django)`, que muestra los datos de la aplicación Django.
    * `Your_app_name (Celery)`, que muestra los datos de Celery.
  </Collapser>
</CollapserGroup>

## Ignorar errores de reintento de tarea [#ignoring-task-retry-errors]

Al utilizar Celery, es posible que una tarea falle y genere una excepción `celery.exceptions:Retry` o `celery.exceptions:RetryTaskError` . La excepción depende de qué versión de Celery se utilice.

Para ignorar estos errores, configúrelo desde la UI de New Relic <DNT>**Application settings**</DNT> o desde el archivo de configuración del agente. Los cambios UI anulan los cambios en el archivo de configuración según las [reglas de precedencia de configuración](/docs/agents/python-agent/installation-configuration/python-agent-configuration#options).

Para utilizar la configuración de error omitida desde la UI:

1. Desde

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
   </DNT>

   , seleccione

   <DNT>
     **APM > (select an app) > Settings > Application**
   </DNT>

   .

2. Seleccione

   <DNT>
     **Server-side agent configuration**
   </DNT>

   .

3. Desde

   <DNT>
     **Error collection**
   </DNT>

   , ingresa los errores que deseas ignorar, separados por comas.

Para ignorar estos errores usando el archivo de configuración del agente, use la configuración [`ignore_errors`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#error-ignore) y una lista de excepciones separadas por espacios:

```
error_collector.ignore_errors = celery.exceptions:Retry celery.exceptions:RetryTaskError
```

## Resolución de problemas

Cuando un proceso de trabajo de Celery finaliza repentinamente, el agente no puede completar su proceso de apagado normal, lo que significa que no se envía su carga útil de datos final. Esto da como resultado que el agente informe menos transacciones de Celery de las esperadas o ninguna transacción en absoluto.

Esto puede ocurrir cuando se utiliza la configuración `CELERYD_MAX_TASKS_PER_CHILD` , que define la cantidad máxima de tareas que un proceso de trabajo del grupo puede ejecutar antes de ser reemplazado por uno nuevo. Si se utiliza, el trabajador es cerrado por la fuerza cuando se alcanza ese límite, lo que significa que el agente no registra esos datos. Por ejemplo, si `MAX_TASKS_PER_CHILD = 1`, esto da como resultado que no se informen datos.

La forma de solucionar este problema dependerá de por qué desea utilizar el límite `MAX_TASKS_PER_CHILD` en su aplicación.

* Para permitir el proceso de apagado normal, vuelva a la configuración predeterminada sin límite.
* Para reducir el impacto del problema, aumente el límite de `MAX_TASKS_PER_CHILD` .

<Callout variant="important">
  Para la versión 3.2.2.94 o superior, el agente Python se cerrará cuando se alcance el límite `MAX_TASKS_PER_CHILD` . no se perderán los datos.
</Callout>

<Callout variant="important">
  Monitorear el proceso principal de Celery no es posible con el agente, solo puede monitor los procesos de trabajo. Ver [Activar advertencia de aplicación](/docs/apm/agents/python-agent/troubleshooting/activate-application-warning-python)
</Callout>
