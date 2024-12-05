---
title: application_settings (API del agente Python)
type: apiDoc
shortDescription: Devuelve un objeto de configuración de la aplicación.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call returns an application settings object.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```
newrelic.agent.application_settings(name=None)
```

Devuelve un objeto de configuración de la aplicación.

## Descripción

Esto devuelve una referencia al objeto de configuración de la aplicación. El objeto [`global_settings`](/docs/agents/python-agent/python-agent-api/global_settings) contiene configuraciones en el archivo de configuración y variables de entorno; Este objeto `application_settings` incluye además cambios de configuración establecidos en el lado del servidor a través de la UI de New Relic.

Las configuraciones devueltas son objetos jerárquicos anidados y los nombres de las configuraciones coinciden con los nombres en el [archivo de configuración del agente](/docs/agents/python-agent/installation-and-configuration/python-agent-configuration). La razón principal para exponer la configuración de la aplicación es si desea que su instrumentación haga referencia a la configuración local específica del agente y no a lo que está configurado en el lado del servidor.

Si no se establece el valor `name` , la llamada utiliza el nombre de la aplicación especificado en el archivo de configuración del agente o mediante la variable de entorno `NEW_RELIC_APP_NAME` .

Si la aplicación no se ha registrado con el recolector de datos cuando se realiza esta llamada, devuelve el valor `None`. Cuando una llamada se realiza correctamente y devuelve valores, reflejará los valores de cualquier configuración local superpuestos con la [configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/configure-agent#ssc) para esa aplicación obtenida durante el registro.

<Callout variant="important">
  No realice ningún cambio en el objeto de configuración de la aplicación. No almacene en caché el objeto de configuración porque será invalidado y reemplazado si un cambio de configuración del lado del servidor hace que el agente vuelva a registrar la aplicación con el recolector de datos.
</Callout>

## Parámetros

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`

        _cadena_
      </td>

      <td>
        Opcional. El nombre de la aplicación. Si no se establece, el nombre coincide con el nombre establecido en la configuración del agente Python para esa aplicación.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve un objeto de configuración de la aplicación. El objeto en sí no presenta ninguna API pública; algunas otras convocatorias requieren que se apruebe.

## Ejemplos

### Usando una declaración IF [#if-example]

Es posible que desee comprobar los ajustes de configuración para determinar qué instrumentación personalizada implementar. A continuación se muestra un ejemplo del uso de una declaración `if` con el objeto de configuración de la aplicación:

```py
settings = newrelic.agent.application_settings()

if settings and settings.error_collector.enabled:
    ...
```

### Pasar resultados a dict [#settings-example]

Si está depurando o iniciando sesión y requiere la configuración global como un objeto de diccionario tradicional de Python, puede pasar el resultado a un `dict`. Por ejemplo:

```py
settings_dict = dict(newrelic.agent.application_settings())

for name, value in settings_dict.items():
    print name, value
```

Cada `name` será la ruta de puntos completa para esa configuración.
