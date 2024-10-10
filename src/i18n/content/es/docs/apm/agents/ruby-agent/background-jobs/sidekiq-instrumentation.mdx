---
title: Instrumentación Sidekiq
tags:
  - Agents
  - Ruby agent
  - Background jobs
metaDescription: 'How to configure New Relic''s Ruby agent to automatically instrument Sidekiq jobs for background processes, transaction traces, and traced errors.'
freshnessValidatedDate: never
translationType: machine
---

Además de su aplicación web, el agente New Relic Ruby (versión 3.6.0 o superior) puede [instrumentar automáticamente tus trabajos de Sidekiq](/docs/agents/ruby-agent/background-jobs/monitoring-ruby-background-processes-daemons). No es necesario incluir una biblioteca de instrumentación en su trabajador.

El agente Ruby implementará el método `perform` en todos los trabajadores de Sidekiq. Los datos para trabajos en segundo plano aparecen en [la página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/features/monitoring-background-processes#ui)de APM, completos con la traza de la transacción y los errores, al seleccionar <DNT>**Non-web transactions**</DNT> como tipo de transacción.

## Capturar argumentos laborales [#capturing_job_parameters]

A partir de la versión 3.6.9 del agente Ruby, Opcionalmente, puede configurar el agente Ruby para capturar los argumentos del trabajo de Sidekiq en la traza de la transacción y los errores de traza. Esto puede resultar especialmente útil al intentar reproducir trabajos fallidos.

De forma predeterminada, esta característica está desactivada en caso de que los argumentos de su trabajo contengan información confidencial. Para habilitar esta característica, edite su <DNT>**newrelic.yml**</DNT> según corresponda para su versión de agente:

* <DNT>
    **newrelic_rpm 3.12.0 or higher**
  </DNT>

  : `attributes.include: job.sidekiq.args.*`

* <DNT>
    **newrelic_rpm 3.6.9 to 3.11.x**
  </DNT>

  : `sidekiq.capture_params: true`

<Callout variant="tip">
  Esta característica es distinta de la configuración genérica de nivel superior [`capture_params`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#capture_params) , que controla si los parámetros de solicitud HTTP se capturan en la traza de la transacción y los errores de traza para las solicitudes web. Puede configurar estos dos ajustes de forma independiente.
</Callout>

## Incluir o excluir ciertos argumentos laborales. [#include_or_exclude_arguments]

A partir de la versión 9.5.0 del agente Ruby, una instancia del agente configurado para capturar argumentos de trabajo de Sidekiq como se describe anteriormente se puede configurar adicionalmente para incluir o excluir ciertos argumentos para un control detallado sobre qué argumentos se informan a New Relic.

La opción de configuración `:'sidekiq.args.include'` se puede establecer en una matriz de cadenas que servirán colectivamente como una lista de permitidos. Cada una de esas cadenas se pasará a `Regexp.new` para obtener soporte completo para expresiones regulares. Para los argumentos de trabajo que son hashes, si la clave de un hash coincide con uno de los patrones de inclusión, se incluirán tanto la clave como su valor correspondiente. Para argumentos escalares, la representación de cadena del escalar deberá coincidir con uno de los patrones de inclusión que se capturarán.

La opción `:'sidekiq.args.exclude'` funciona de manera similar. Se puede configurar en una matriz de cadenas que se pasarán a `Regexp.new` para crear patrones. Estos patrones servirán colectivamente como una lista de rechazados para argumentos laborales no deseados. Cualquier clave hash, valor hash o escalar que coincida con un patrón de exclusión será excluido (no enviado a New Relic).

### Configure `sidekiq.args.include` y `sidekiq.args.exclude`(newrelic_rpm 9.5.0 o superior):

`newrelic.yml` ejemplos:

Cualquier cadena en la matriz `:'sidekiq.args.include'` o `:'sidekiq.args.exclude'` se convertirá en una expresión regular. Se puede aprovechar el conocimiento del [soporte de expresiones regulares de Ruby](https://ruby-doc.org/3.2.2/Regexp.html) , pero no es obligatorio. Si no se utiliza la sintaxis de expresión regular, se realizarán coincidencias inexactas y la cadena "Fortune" coincidirá tanto con "Fortune 500" como con "Fortune and Glory". Para coincidencias exactas, utilice [anclajes de expresiones regulares](https://ruby-doc.org/3.2.2/Regexp.html#class-Regexp-label-Anchors).

```
# Include any argument whose string representation matches either "apple" or "banana"
# The "apple" pattern will match both "green apple" and "red apple"
sidekiq.args.include:
  - apple
  - banana

# Exclude any arguments that match either "grape", "orange", or "pear"
sidekiq.args.exclude:
  - grape
  - orange
  - pear

# Exclude any argument that is a 9 digit number
sidekiq.args.exclude:
  - '\d{9}'

# Include anything that starts with "blue" but exclude anything that ends in "green"
sidekiq.args.include
  - '^blue'

sidekiq.args.exclude
  - 'green$'
```

## Solucionar problemas de trabajos de Sidekiq [#troubleshooting]

Si parece que los trabajos no están siendo monitoreados, revise su archivo <DNT>**newrelic_agent.log**</DNT> generado cuando comienza el trabajador. Debe indicar si el agente detecta Sidekiq y se comunica con el servidor. Si necesita ayuda, tenga en cuenta la línea de comando exacta que utilizó para iniciar Sidekiq.
