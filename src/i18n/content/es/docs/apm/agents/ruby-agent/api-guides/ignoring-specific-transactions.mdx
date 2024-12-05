---
title: Ignorar una transacción específica
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: 'How to prevent specific requests from being instrumented entirely in New Relic, or prevent them from being factored into your Apdex score.'
freshnessValidatedDate: never
translationType: machine
---

New Relic for Ruby le permite deshabilitar selectivamente la instrumentación para solicitudes particulares dentro de su aplicación Rails, Roda o Sinatra.

## Bloqueando toda la instrumentación [#ignore]

Llame a `newrelic_ignore` sin argumentos desde un controlador Rails, una aplicación Roda o una aplicación Sinatra para evitar la instrumentación de todas las solicitudes atendidas por ese controlador o aplicación:

```rb
newrelic_ignore
```

El uso de `newrelic_ignore` evita que el agente registre cualquier dato de rendimiento (métrica, traza de la transacción, evento, errores de traza, etc.) para la transacción objetivo y también evitará que la transacción contribuya a su puntuación Apdex general.

## Ignorar acciones específicas con Rails [#ignore-rails]

Si desea ignorar solo acciones específicas con un controlador Rails, puede usar las opciones `:only` o `:except` con `newrelic_ignore`.

Por ejemplo, para ignorar sólo las acciones `index` y `show` en el controlador, utilice:

```rb
newrelic_ignore :only => [:index, :show]
```

Para ignorar todas las acciones en el controlador <DNT>**except**</DNT> `index`:

```rb
newrelic_ignore :except => [:index]
```

## Ignorando rutas específicas con Roda [#ignore-roda]

Ignore rutas específicas en aplicaciones Roda pasando una ruta estilo Roda hacia `newrelic_ignore` desde fuera del bloque `route` de su aplicación Roda. Para más información, consulte [Roda: Ignorar rutas](/docs/agents/ruby-agent/frameworks/roda-support#ignoring-routes).

## Ignorando rutas específicas con Sinatra [#ignore-sinatra]

Si desea ignorar solo rutas específicas dentro de su aplicación Sinatra, puede pasar una definición de ruta estilo Sinatra a `newrelic_ignore` desde su aplicación Sinatra. Para obtener más información, consulte [Sinatra: Ignorar rutas](/docs/agents/ruby-agent/frameworks/sinatra-support#ignoring-routes).

## Ignorando las contribuciones de Apdex [#apdex]

Si desea evitar que todas las acciones en un controlador contribuyan a su puntuación Apdex, pero aún desea obtener otros datos de rendimiento, utilice `newrelic_ignore_apdex`:

```rb
newrelic_ignore_apdex
```

En una aplicación Rails, `newrelic_ignore_apdex` admite las mismas [opciones`:only` y `:except` ](#ignore-rails)que `newrelic_ignore`. En una aplicación Roda o Sinatra, aceptará la [misma ruta estilo Roda](#ignore-roda) o [ruta estilo Sinatra](#ignore-sinatra) para apuntar a transacciones específicas.

## Bloquear la instrumentación browser [#page-load-timing-rum]

El uso de `newrelic_ignore_enduser` evita que el agente inserte automáticamente el JavaScript utilizado para capturar datos [<InlinePopover type="browser"/>](/docs/agents/ruby-agent/features/page-load-timing-ruby). La instrumentación del lado del servidor no se verá afectada.

Para evitar la inyección del agente del navegador para todas las acciones en un controlador, agregue una llamada como esta a la clase del controlador:

```rb
newrelic_ignore_enduser
```

En una aplicación Rails, `newrelic_ignore_enduser` admite las mismas [opciones`:only` y `:except` ](#ignore-rails)que `newrelic_ignore`. En una aplicación Roda o Sinatra, aceptará la [misma ruta estilo Roda](#ignore-roda) o [ruta estilo Sinatra](#ignore-sinatra) para apuntar a transacciones específicas.

## Ignorar la transacción dinámicamente [#dynamic-ignoring]

En algunos casos, es posible que desee basar la decisión de ignorar una transacción específica en criterios que sólo se conocen en tiempo de ejecución, durante la solicitud. Para escenarios como este, los mecanismos declarativos explicados anteriormente no son adecuados. A partir de la versión 3.9.2 del agente Ruby, en su lugar, puedes utilizar la siguiente familia de API de llamada desde cualquier punto dentro de tu transacción:

```rb
NewRelic::Agent.ignore_transaction
NewRelic::Agent.ignore_apdex
NewRelic::Agent.ignore_enduser
```

Estos métodos tendrán resultados similares a las llamadas `newrelic_ignore`, `newrelic_ignore_apdex` y `newrelic_ignore_enduser` , pero se pueden llamar durante una solicitud en lugar de durante la definición de clase.

## Ignorando transacción por URL con configuración [#config-ignoring]

Puede ignorar la transacción por URL usando la configuración `rules.ignore_url_regexes` :

```yml
rules:
  ignore_url_regexes: ["secret", "^/admin"]
```

Esta configuración solo evitará que se informen [eventos de transacción](/docs/telemetry-data-platform/understand-data/event-data/events-reported-apm/) que coincidan con el patrón establecido. Utilice cualquiera de la familia de métodos `newrelic_ignore*` si desea evitar que todos los datos, como los datos de traza, se informen de una transacción.

Tenga en cuenta que las expresiones regulares no incluyen ningún tipo de anclaje de forma predeterminada. La expresión regular /secret/ coincidirá con 'newrelic.com/secret/login' y también coincidirá con 'newrelic.com/users/secretpanda'. La expresión regular del administrador anclada coincidirá con 'newrelic.com/admin/praetorians' pero no coincidirá con 'newrelic.com/users/totally-real-admin'.

Si es necesario, también puede proporcionar una lista de expresiones regulares en una cadena separada por comas, lo que le permitirá ignorar expresiones regulares con una variable de entorno:

```ini
NEW_RELIC_RULES_IGNORE_URL_REGEXES="secret,^/admin"
```

Como siempre, la configuración de las variables de entorno anulará la configuración en newrelic.yml.

## Resolución de problemas

La familia de métodos `newrelic_ignore*` solo funcionará dentro de las clases de controlador Rails, fuera del bloque `route` de la aplicación Roda (subclases de `Roda`) o dentro de la aplicación Sinatra (subclases de `Sinatra::Base`). Otra aplicación debe utilizar la familia `NewRelic::Agent.ignore_*` de llamadas dentro de cada solicitud que desee ignorar, que funcionará en cualquier contexto.

Si obtiene un `NoMethodError` cuando intenta usar `newrelic_ignore` desde un controlador Rails, una aplicación Roda o una aplicación Sinatra, asegúrese de que se haya requerido `newrelic_rpm` antes de intentar llamar `newrelic_ignore` dentro de su definición de clase.
