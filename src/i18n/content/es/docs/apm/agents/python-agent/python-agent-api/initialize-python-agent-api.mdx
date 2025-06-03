---
title: inicializar (API del agente Python)
type: apiDoc
shortDescription: Inicializa el agente Python con un archivo de configuración especificado durante un proceso de integración manual.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Initializes Python agent with a specified config file during the manual integration process.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.initialize(config_file=None, environment=None, ignore_errors=None, log_file=None, log_level=None)
```

Inicializa el agente Python con un archivo de configuración especificado durante un proceso de integración manual.

## Descripción

Esto se llama para inicializar el agente Python con un [archivo de configuración](/docs/agents/python-agent/installation-configuration/python-agent-configuration#agent-configuration-file) específico cuando el agente se [integra manualmente con una aplicación Python](/docs/agents/python-agent/installation-configuration/python-agent-integration#manual-integration).

Para obtener mejores resultados de instrumentación, realice esta llamada lo antes posible en el código de su aplicación. A diferencia de la funcionalidad típica de Python, el orden de importación importa. Para archivos de script de aplicación y WSGI, coloque la llamada `initialize` antes de todas las importaciones, con la excepción de la importación `sys` y las actualizaciones de `sys.path`. Si llama a `initialize` varias veces, el agente ignora las llamadas después de la primera si el archivo de configuración y las opciones de entorno son las mismas. Si las opciones difieren, se plantea una excepción.

Si llama a `initialize` sin argumentos, ya debe haber especificado su <InlinePopover type="licenseKey"/>con la variable de entorno [`NEW_RELIC_LICENSE_KEY`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#license_key) . Alternativamente, puede configurar `NEW_RELIC_CONFIG_FILE` y `NEW_RELIC_ENVIRONMENT`. Luego, el agente leerá esos valores en lugar de los argumentos que faltan.

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
        `config_file`

        _cadena_
      </td>

      <td>
        Opcional. La ruta al archivo de configuración del agente. Si proporciona un archivo de configuración, puede anular elementos de ese archivo de configuración con el parámetro opcional `environment` .
      </td>
    </tr>

    <tr>
      <td>
        `environment`

        _cadena_
      </td>

      <td>
        Opcional. Indica el nombre del entorno. Si está utilizando un archivo de configuración, puede anular la configuración de ese archivo con `environment`.
      </td>
    </tr>

    <tr>
      <td>
        `ignore_errors`

        _booleano_
      </td>

      <td>
        Opcional. Indica si se ignoran los errores de inicio. El valor predeterminado es `True`.
      </td>
    </tr>

    <tr>
      <td>
        `log_file`

        _cadena_
      </td>

      <td>
        Opcional. Ruta al archivo de registro del agente. También acepta `stdout` y `stderr` (igual que la opción [`log_file`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#log_file) en el archivo de configuración).
      </td>
    </tr>

    <tr>
      <td>
        `log_level`

        _int_ o tipo de parámetro de registro aplicable
      </td>

      <td>
        Opcional. Establece el nivel de registro. El agente utiliza [el módulo de registro de Python](https://docs.python.org/2.7/library/logging.html#logging-levels). Las opciones son las mismas que para la opción [`log_level`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#log_level) en el archivo de configuración.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Ninguno.

## Ejemplos

### Inicializando con el archivo de configuración y el entorno [#init-example]

A continuación se muestra un ejemplo de cómo inicializar el agente Python con un archivo de configuración y una cadena de entorno:

```py
newrelic.agent.initialize('/etc/newrelic/newrelic.ini', 'production')
```

### Usando todos los valores de parámetros [#init-example-2]

Llamando con todos los valores de parámetros:

```py
newrelic.agent.initialize('/etc/newrelic/newrelic.ini', 'production', ignore_errors=False, log_file='/var/log/newrelic.log', log_level=logging.DEBUG)
```
