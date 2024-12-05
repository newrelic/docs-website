---
title: Instrumentación de Python personalizada mediante archivo de configuración
tags:
  - Agents
  - Python agent
  - Custom instrumentation
metaDescription: Modify your config file to add additional instrumentation to a monitored application when using the Python agent.
freshnessValidatedDate: never
translationType: machine
---

Puede extender el monitoreo del agente Python para trazar el tiempo invertido en funciones o métodos de clases adicionales editando su [archivo de configuración`newrelic.ini` ](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#agent-configuration-file). Esta forma de [instrumentación personalizada](/docs/python/python-custom-instrumentation) es más sencilla de implementar que la llamada API y no requiere que modifiques tu código. Sin embargo, para necesidades más complejas, es posible que necesites [tocar a través de API](/docs/python/python-instrumentation-by-api) .

## Listado de funciones en el archivo de configuración [#listing_functions]

Para ampliar la instrumentación a funciones y métodos de clase designados, agréguelos a la configuración `transaction_tracer.function_trace` dentro de la sección `newrelic` del archivo de configuración del agente. El identificador de una función debe tener la forma `module:function` y la de un método de clase `module:class.function`.

<CollapserGroup>
  <Collapser
    id="dumdbm-example"
    title="Usando tontodbm"
  >
    En este ejemplo, utiliza el módulo <DNT>**`dumbdbm`**</DNT> de Python y desea calcular el tiempo que llevó abrir una base de datos y luego volver a escribir esa base de datos en un archivo. En este caso usarías:

    ```ini
    transaction_tracer.function_trace = dumbdbm:open
                                                   dumbdbm:_Database._commit
    ```
  </Collapser>
</CollapserGroup>

Para enumerar más de un elemento, utilice cualquiera de estos métodos:

* Una línea: Separe cada elemento con un espacio.

* Varias líneas: siga la convención de archivos

  <DNT>
    **ini**
  </DNT>

  para sangrar las líneas siguientes.

Cuando se informan datos para la función instrumentada, la métrica tendrá un nombre con el formato `Function/module:function` o `Function/module:class.function`. En el desglose del rendimiento de una transacción, la categoría se mostrará como `Function` y el segmento será `module:function` o `module:class.function`. Para traza de la transacción lenta, solo aparece el nombre del segmento. Tenga en cuenta que cuando una función realmente devuelve un generador, solo se registrará el tiempo dedicado a devolver el generador y no el consumo de los valores del generador.

## Restricciones al empaquetar API de extensión [#restrictions_on_wrapping]

Al empaquetar funciones enumerándolas en el archivo de configuración del agente, no puede designar métodos de clase de esta manera cuando el método es miembro de una clase implementada en código C mediante un módulo de extensión C. Esto se debe a que no es posible modificar la tabla de métodos de un tipo implementado utilizando la API de Python C.

## Anulación del nombre de la función informada [#overriding_the_name]

Cuando se utiliza la configuración `transaction_tracer.function_trace` en el archivo de configuración del agente, el nombre de la función se utilizará en el nombre de la métrica y se clasificará como `Function`. Si es necesario anular qué nombre de función se puede usar en el nombre de la métrica o clasificarlo de manera diferente, entonces se puede usar un medio alternativo para definir la función traza en el archivo de configuración. El equivalente a:

```ini
transaction_tracer.function_trace = dumbdbm:open
                                               dumbdbm:_Database._commit
```

Sería crear dos nuevas secciones de configuración en el archivo de configuración del agente, una para cada función a trazar:

```ini
[function-trace:dumbdbm-1]
enabled = true
function = dumbdbm:open
name = dumbdbm:open
group = Function

[function-trace:dumbdbm-2]
enabled = true
function = dumbdbm:_Database._commit
name = dumbdbm:_Database._commit
group = Function
```

El nombre de la sección del archivo `.ini` debe comenzar con `function-trace:`. El componente de nombre que sigue a ese prefijo puede ser cualquier cosa, pero debe ser único en todas las secciones de traza de funciones en el archivo de configuración. Puede anular las configuraciones `group` y `name` para obtener el nombre de métrica deseado. La configuración `enabled` por defecto es `false` y debes cambiarla a `true` para habilitar la función traza.

## Instrumento con la API [#function_decorators]

Para propósitos simples de instrumentación personalizada, el método del archivo de configuración funciona bien. Para obtener ajustes de instrumentación y comportamiento del agente más precisos y personalizados, utilice la [API del agente Python](/docs/agents/python-agent/api/python-agent-api-guide).
