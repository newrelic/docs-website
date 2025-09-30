---
title: global_settings (API del agente Python)
type: apiDoc
shortDescription: Esta llamada devuelve una referencia al objeto de configuración global del agente Python.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call returns a reference to the agent''s global settings object.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.global_settings()
```

Esta llamada devuelve una referencia al objeto de configuración global del agente Python.

## Descripción

Esta llamada devuelve una referencia al objeto de configuración global del agente, que luego puede usar para realizar cambios en la configuración disponible. El objeto de configuración devuelto contiene objetos jerárquicos anidados. Los nombres de las configuraciones coinciden con los nombres de las configuraciones globales en el [archivo de configuración del agente](/docs/agents/python-agent/installation-and-configuration/python-agent-configuration).

El objeto `global_settings` contiene configuraciones del archivo de configuración y variables de entorno; el objeto [`application_settings`](/docs/agents/python-agent/python-agent-api/application_settings) contiene cambios de configuración adicionales de [la configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/configure-agent#ssc).

Si actualiza la configuración global utilizando el objeto de configuración global, los cambios solo tendrán efecto la próxima vez que el agente Python se registre con el [recolector](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector) para esa aplicación específica.

Si se accede <DNT>**before**</DNT> , se inicializa el agente, la configuración global tendrá la configuración predeterminada, junto con cualquier anulación de las variables de entorno del usuario. Si se accede a la inicialización del agente <DNT>**after**</DNT> , la configuración global contiene cualquier configuración del archivo de configuración del agente que también sea configuración global (porque el archivo de configuración contiene menos configuraciones que el objeto de configuración global).

## Valores de retorno

Devuelve una referencia al objeto de configuración global del agente.

## Ejemplos

### Asignar varias configuraciones [#some-settings]

A continuación se muestran algunos ejemplos de cómo asignar las configuraciones `proxy_host`, `proxy_port`, `slow_sql.enabled` y `browser_monitoring.auto_instrument` :

```py
settings = newrelic.agent.global_settings()

settings.proxy_host = 'proxy.intranet' 
settings.proxy_port = 8888
settings.slow_sql.enabled = False
settings.browser_monitoring.auto_instrument = False
```

### Pasar configuraciones a un dict [#dict]

Si está depurando o iniciando sesión y requiere la configuración global como un objeto de diccionario tradicional de Python, puede pasar el resultado a un dict. He aquí un ejemplo:

```py
settings_dict = dict(newrelic.agent.global_settings())

for name, value in settings_dict.items():
    print name, value
```

Cada `name` será la ruta de puntos completa para esa configuración.
