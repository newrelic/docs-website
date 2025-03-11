---
title: 'SystemStackError: nivel stack demasiado profundo'
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'Find out what to do if you receive the error message SystemStackError: stack level too deep on the Error details page in your APM UI.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Aparece un error `stack level too deep (SystemStackError)` después de agregar la gema `newrelic_rpm` a su aplicación o después de actualizar a la versión 7.0.0 o superior.

## Solución

En la mayoría de los casos, el agente Ruby no es el problema subyacente. El problema es que el método cadena (alias_method) y Module#prepend funcionan juntos solo en situaciones particulares. Cuando no se usan juntos correctamente, pueden causar recursividades no terminantes. El agente Ruby ofrece instrumentación de gemas de cadena de método y módulo#prepend para permitir flexibilidad a los clientes. Para obtener más información sobre la incompatibilidad del método cadena y Module#prepend, lea: [Resolución de conflictos `Module#prepend` y `alias_method` que involucran al agente New Relic Ruby](https://newrelic.com/blog/best-practices/ruby-agent-module-prepend-alias-method-chains)

### 1. Obtén el rastreo del stack completo

Lo primero que deberá hacer es obtener el seguimiento completo del error que está viendo. La razón por la que debe ser el rastreo completo de la pila es porque necesitará encontrar la sección en el seguimiento de la pila que muestra la recursividad para encontrar las dos ubicaciones que están en conflicto. Cosas como Rails log y Passenger log a menudo truncan el rastreo de la pila porque es muy largo, por lo que es posible que tengas que reproducir el error en un entorno donde puedas obtener el rastreo de la pila completo y no truncado. Una forma de hacer esto es llamar a Exception#backtrace en la excepción `stack level too deep` , que devolverá el rastreo completo de la pila.

### 2. Encuentra el código conflictivo en el rastreo del stack.

Una vez que tengas el rastreo del stack completo, busca una sección con repetición entre una gema y la gema `newrelic_rpm` . Probablemente esta sea la gema que causa el conflicto. Aquí hay una sección de ejemplo de un rastreo del stack que muestra las ubicaciones en conflicto con Module#prepend y el método cadena.

```
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rails/net_http.rb:11:in `block in request'
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rack.rb:25:in `capture_timing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rails/net_http.rb:10:in `request'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/chain.rb:16:in `block in request_with_newrelic_trace'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/instrumentation.rb:26:in `block (2 levels) in request_with_tracing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/tracer.rb:371:in `capture_segment_error'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/instrumentation.rb:25:in `block in request_with_tracing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent.rb:501:in `disable_all_tracing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/instrumentation.rb:24:in `request_with_tracing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/chain.rb:16:in `request_with_newrelic_trace'
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rails/net_http.rb:11:in `block in request'
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rack.rb:25:in `capture_timing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rails/net_http.rb:10:in `request'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/chain.rb:16:in `block in request_with_newrelic_trace'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/instrumentation.rb:26:in `block (2 levels) in request_with_tracing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/tracer.rb:371:in `capture_segment_error'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/instrumentation.rb:25:in `block in request_with_tracing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent.rb:501:in `disable_all_tracing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/instrumentation.rb:24:in `request_with_tracing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/chain.rb:16:in `request_with_newrelic_trace'
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rails/net_http.rb:11:in `block in request'
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rack.rb:25:in `capture_timing'
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rails/net_http.rb:10:in `request'
```

Puede ver qué archivos están causando el conflicto, incluidos los números de línea. Esto le permitirá saber qué instrumentación de gema es parte de este error. Usando el ejemplo anterior, las dos ubicaciones que causan la recursividad son:

```
/Users/user/.rvm/gems/ruby-2.6.5/gems/newrelic_rpm-7.0.0/lib/new_relic/agent/instrumentation/net_http/chain.rb:16:in `request_with_newrelic_trace'
```

```
/Users/user/.rvm/gems/ruby-2.6.5/gems/airbrake-11.0.1/lib/airbrake/rails/net_http.rb:11:in `block in request'
```

Si abrieras el código en esos dos lugares, verías que uno usa anteponer y el otro usa el método cadena. En este ejemplo específico, el agente usa el método cadena y Airbrake usa Module#prepend. Dado que el agente ofrece tanto el método cadena como Module#prepend, puede configurar el agente para utilizar la estrategia compatible con la gema en conflicto.

### 3. Actualizar el archivo de configuración

Al observar más de cerca la línea del agente en el rastreo del stack, puede ver en el nombre de la ruta qué instrumentación de gema debe configurarse.

```
new_relic/agent/instrumentation/net_http/chain.rb:16
```

El nombre de la gema sigue a `new_relic/agent/instrumentation/` en la ruta del archivo. Para este ejemplo, puede ver que esta es nuestra instrumentación Net::HTTP, por lo que querrá usar `net_http` en su archivo de configuración para controlar esta instrumentación. Al mirar el nombre del archivo, también puede ver que está utilizando la instrumentación del método cadena. El nombre de archivo para el método cadena es `/chain.rb` y para Module#prepend sería `/prepend.rb`.

Agregue la opción de configuración a su `newrelic.yml`, utilizando cualquier instrumentación de gemas que haya encontrado como parte del conflicto. En este ejemplo, el error se generó debido a un conflicto con la instrumentación del método cadena. Para resolverlo, configuraremos nuestra instrumentación Net::HTTP para usar Module#prepend:

```
instrumentation:
  net_http: prepend
```

Si, en cambio, viéramos que se hace referencia al archivo `prepend.rb` en el rastreo de la pila, estableceríamos esta opción de configuración en `chain`.

Para obtener detalles sobre las opciones de configuración disponibles del agente, consulte la sección de instrumentación de nuestra [documentación de configuración](/docs/agents/ruby-agent/configuration/ruby-agent-configuration/#instrumentation).

### 4. ¿Sigues viendo un error?

Si después de seguir las instrucciones anteriores todavía ve un error de nivel stack demasiado profundo, verifique si se trata del mismo conflicto y rastreo del stack, o si se trata de un conflicto diferente al que acaba de solucionar.

Si se trata de un conflicto diferente con un rastreo del stack diferente, repita los pasos anteriores con el nuevo rastreo del stack. Eso debería resolver el conflicto recién surgido.

Si el rastreo del stack es el mismo que el primero, verifique que el agente pueda cargar su archivo de configuración. Si el agente tiene problemas para localizar o cargar el archivo de configuración, resolver ese problema debería permitirle utilizar la instrumentación de gemas que necesita. Consulte nuestra [documentación de configuración](/docs/agents/ruby-agent/configuration/ruby-agent-configuration/) para obtener más información.

## Causa

Cuando una ubicación en su aplicación (o una gema utilizada en su aplicación) usa Module#prepend en un método en el que otra ubicación (o gema) luego usa un alias_method, crea una recursión sin terminación y arroja el `SystemStackError: stack level too deep error`.

Con la versión 7.0 del agente Ruby, se agregó la instrumentación Module#prepend para toda la instrumentación de gemas que anteriormente solo usaba el método cadena. Module#prepend también se utilizará de forma predeterminada en la mayoría de los casos. El agente todavía permite que se utilice el método cadena para la instrumentación de gemas; este comportamiento está controlado por la [configuración del agente](/docs/agents/ruby-agent/configuration/ruby-agent-configuration/#instrumentation).

Cuando el agente utiliza el valor predeterminado para la configuración de instrumentación de gemas, comprobará el entorno en busca de conflictos comunes conocidos con Module#prepend. Si se detecta una gema que causa este conflicto, el agente instala en su lugar la instrumentación del método cadena.

Sin embargo, no conocemos todos los posibles conflictos. Cualquier gema o aplicación puede agregar el método cadena a cualquier método. Es por esto que ofrecemos la opción de configurar qué tipo de instrumentación se utiliza.

Estos son solo algunos ejemplos de conflictos conocidos que el agente busca e instala la instrumentación de gemas compatible.

<DNT>
  **Net::HTTP Instrumentation**
</DNT>

Utiliza el método cadena en los métodos Net::HTTP cuando se utiliza Airbrake &lt; 10.0.2. Airbrake 10.0.2+ actualizado para usar Module#prepend en Net::HTTP, por lo que el agente instalará la instrumentación antepuesto cuando se detecte esa versión o superior.

<DNT>
  **Resque Instrumentation**
</DNT>

Utiliza el método cadena en los métodos Reque cuando se utiliza Airbrake &lt; 11.0.3. Freno de aire 11.0.3+ actualizado para usar Module#prepend en Resque, por lo que el agente instalará la instrumentación antepuesto cuando se detecte esa versión o superior.

<DNT>
  **Redis Instrumentation**
</DNT>

Utiliza el método cadena cuando se detecta PrometheusExporter, ya que esa gema usa el método cadena en los métodos Redis .
