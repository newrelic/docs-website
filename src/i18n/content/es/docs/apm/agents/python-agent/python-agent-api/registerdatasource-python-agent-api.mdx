---
title: register_data_source (API del agente Python)
type: apiDoc
shortDescription: Registra una fuente de datos para generar datos métricos personalizados.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call registers a data source for pulling custom metric data from.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.register_data_source(source, application=None, name=None, settings=None, **properties)
```

Registra una fuente de datos para generar datos métricos personalizados.

## Descripción

Esta llamada registra una fuente de datos que se encuestará al finalizar cada [ciclo de cosecha](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#harvest-cycle) para generar [datos de intervalo de tiempo de métrica](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#timeslice-data) personalizados. Para obtener más información sobre por qué y cómo utilizar fuentes de datos para métrica personalizada, consulte [fuentes de datos de métrica personalizada](/docs/agents/python-agent/supported-features/python-custom-metrics#custom-metric-data-sources).

<Callout variant="tip">
  En la mayoría de los casos, no necesitará utilizar ningún argumento opcional excepto `name`.
</Callout>

Las métricas devueltas por una fuente de datos pueden ser una tupla `(name, value)` simple donde el valor es numérico o flotante, o el valor puede ser un diccionario que corresponde a una muestra de datos ya agregada para una métrica específica.

Al devolver un diccionario como valor de métrica, los campos que se pueden proporcionar son:

* `count`
* `total`
* `min`
* `max`
* `sum_of_squares`

Para obtener más información sobre estos campos y algunos consejos generales de uso, consulte [Pre-métrica agregada](/docs/agents/python-agent/supported-features/python-custom-metrics#pre-aggregated-metrics).

<Callout variant="tip">
  También puede lograr el mismo resultado utilizando [la configuración del agente](/docs/agents/python-agent/installation-configuration/python-agent-configuration), que no requiere que cambie su código. Para agregar la fuente de datos de esta manera, agregue una sección en el archivo de configuración con el prefijo `data-source:`, seguido de un valor único para distinguir la sección de otra fuente de datos si se especifica más de una. He aquí un ejemplo:

  ```ini
  [data-source:memory-usage]enabled = true
  function = samplers:memory_metrics
  # application = ...
  # name = ...
  [data-source:cpu-usage]enabled = true
  function = samplers:CPUMetricsDataSource
  # application = ...
  # name = ...
  ```

  Si la fuente de datos fue especificada por una función, entonces el nombre sería `module:function`. Si es una clase, entonces sería: `module:class`. El módulo debe poder encontrarse utilizando la ruta de búsqueda del módulo Python.

  Al igual que con `register_data_source`, la aplicación para informar los datos y el nombre son opcionales.
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
        `source`

        _función_ o _clase_
      </td>

      <td>
        Requerido. La fuente de datos, que es una función o clase a la que se le ha asignado el decorador [`data_source_generator`](/docs/agents/python-agent/python-agent-api/data_source_generator) o [`data_source_factory`](/docs/agents/python-agent/python-agent-api/data_source_factory) .
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _objeto de aplicación_
      </td>

      <td>
        Opcional. El objeto de aplicación correspondiente a la cuenta New Relic-monitor a la que reportar datos. Si se establece el valor predeterminado de `None`, la fuente de datos se sondeará al final de cada ciclo de recolección para cada aplicación instrumentada. Alternativamente, cuando se proporciona un objeto de aplicación, la fuente de datos solo se sondeará para generar métricas para esa aplicación específica.

        En los casos en los que necesite una fuente de datos para conservar datos distintos para cada aplicación de informes, puede utilizar un patrón de fábrica para crear una instancia separada de la fuente de datos para cada aplicación.
      </td>
    </tr>

    <tr>
      <td>
        `name`

        _cadena_
      </td>

      <td>
        Opcional. El nombre de la fuente de datos. Esto se utiliza únicamente con fines de registro y de forma predeterminada utilizará el nombre proporcionado por la propia fuente de datos.
      </td>
    </tr>

    <tr>
      <td>
        `settings`

        _cadena_
      </td>

      <td>
        Opcional. La configuración para pasar a una fábrica de fuentes de datos.
      </td>
    </tr>

    <tr>
      <td>
        `properties`

        _cadena_
      </td>

      <td>
        Opcional. Cualquier propiedad adicional para pasar a la fábrica de fuentes de datos.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Ninguno.

## Ejemplos

### Registrar una fuente de datos [#register-example]

A continuación se muestra un ejemplo de código de aplicación que genera datos métricos personalizados:

```py
@newrelic.agent.data_source_generator(name='External') 
def services(): 
    # code goes here
    pass


if __name__ == '__main__': 
    application = nr.configure_newrelic() 
    newrelic.agent.register_data_source(services, application)

    while True: 
        pass
```

### Uso de memoria de la fuente de datos [#data-source-memory]

```py
import psutil
import os


@newrelic.agent.data_source_generator(name='Memory Usage')
def memory_metrics():
    pid = os.getpid()
    p = psutil.Process(os.getpid())
    m = p.get_memory_info()
    yield ('Custom/Memory/Physical', float(m.rss) / (1024 * 1024))
    yield ('Custom/Memory/Virtual', float(m.vms) / (1024 * 1024))


newrelic.agent.register_data_source(memory_metrics)
```
