---
title: Activar aviso de aplicación (Python)
type: troubleshooting
tags:
  - Agents
  - Python agent
  - Troubleshooting
metaDescription: 'If your New Relic Python application doesn''t report data and you see an activation warning message, try these troubleshooting steps.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

<Callout variant="important">
  Tenga en cuenta que esto sólo es un problema si no se informan datos.
</Callout>

Estás utilizando el [último agente de Python](/docs/release-notes/agent-release-notes/python-release-notes) y ves una entrada log con un mensaje de advertencia como:

```
Attempt to activate application in a process different to where the agent harvest thread was started.
```

O:

```
Attempt to reactivate application or record transactions in a process different to where the agent was already registered.
```

La aplicación se muestra como informes en la UI de New Relic, pero no se informa ningún dato a New Relic.

## Solución

Para resolver este problema con su aplicación:

1. Mueva todas las llamadas a [`newrelic.agent.register_application`](/docs/agents/python-agent/python-agent-api/register_application) o [`newrelic.agent.application`](/docs/agents/python-agent/python-agent-api/application) dentro de funciones dentro de una marca `__name__ == __main__` .

2. Si no está seguro de dónde se producen las llamadas a [`newrelic.agent.register_application`](/docs/agents/python-agent/python-agent-api/register_application) o `newrelic.agent.application` , utilice el [registro de depuración del agente](/docs/agents/python-agent/troubleshooting/python-agent-logging) para buscar una entrada que contenga:

   ```
   newrelic.core.agent DEBUG - Application was activated from:
   ```

3. Utilice el rastreo de la entrada de la llamada que activó al agente. Consulte los siguientes cuadros, que se consideran normales:

   ```
   File "newrelic/api/transaction.py", line x, in __init__
       application.activate()
   ```

   ```
   File "newrelic/hooks/application_celery.py", line x, in process_initializer
       application_instance().activate()
   ```

4. Si la activación se produce desde una ubicación diferente, corrija este problema siguiendo este ejemplo:

   <DNT>
     **Before:**
   </DNT>

   ```
   import newrelic.agent

   # This will cause the agent to activate whenever custom_event is imported
   app = newrelic.agent.application()

   def custom_event():
       newrelic.agent.record_custom_event('CustomEvent', {}, application=app)
   ```

   <DNT>**After**</DNT>:

   ```
   import newrelic.agent

   def custom_event():
       app = newrelic.agent.application()
       newrelic.agent.record_custom_event('CustomEvent', {}, application=app)
   ```

Para obtener otros consejos cuando no aparecen datos, consulte la [documentación de resolución de problemas de Python](/docs/agents/python-agent/troubleshooting/no-data-appears-python).

## Causa

Hay dos causas principales de este problema. El primero es crear una instancia de aplicación varias veces o crear una instancia de aplicación antes de la bifurcación.

1. Esto suele deberse a una llamada a [`newrelic.agent.register_application`](/docs/agents/python-agent/python-agent-api/register_application) o [`newrelic.agent.application`](/docs/agents/python-agent/python-agent-api/application) que se produce en el momento de la importación.

   <DNT>**Example**</DNT>:

   ```
   import newrelic.agent

   # This will cause the agent to activate whenever custom_event is imported
   app = newrelic.agent.application()

   def custom_event():
       newrelic.agent.record_custom_event('CustomEvent', {}, application=app)
   ```

2. Este problema también puede ocurrir cuando se monitorean servicios como el celery donde se procesa un proceso principal de trabajo de lanzamiento. Ocurre cuando se crea una instancia de aplicación de agente en el proceso principal antes de bifurcar los procesos de trabajo. Dado que el agente se lanza en el proceso principal, no se recopilan datos en el proceso secundario.
