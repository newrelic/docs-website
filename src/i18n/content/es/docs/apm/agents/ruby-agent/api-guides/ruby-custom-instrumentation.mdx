---
title: Ruby instrumentación personalizada
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: 'For information about customizing New Relic''s Ruby agent API to collect additional metrics, start here.'
freshnessValidatedDate: never
translationType: machine
---

El agente New Relic Ruby recopila automáticamente muchas métricas. También incluye una API que puede utilizar para recopilar métricas adicionales sobre su aplicación. Si ve <DNT>**Application Code**</DNT> segmentos grandes en los detalles de la traza de la transacción, la instrumentación personalizada puede brindarle una imagen más completa de lo que sucede en su aplicación. Para obtener detalles sobre todos los métodos API disponibles, consulte nuestra [documentación de la API del agente Ruby](https://www.rubydoc.info/gems/newrelic_rpm).

<Callout variant="tip">
  Recopilar demasiadas métricas puede afectar el rendimiento de su aplicación y de New Relic. Para evitar problemas de datos, mantenga el número total de métricas únicas introducidas por instrumentación personalizada por debajo de 2000.
</Callout>

## Método rastreador [#method_tracers]

La forma más sencilla de capturar instrumentación personalizada es rastrear llamadas a un método particular. El seguimiento de un método como se describe a continuación insertará un nodo adicional en su traza de la transacción para cada invocación de ese método, proporcionando mayores detalles sobre hacia dónde va el tiempo en su transacción.

Esto se utiliza mejor cuando está seguro de que ya existe una transacción. El método rastreador le brinda un nivel adicional de granularidad dentro del contexto de algo ya instrumentado por el agente. Si no está seguro de si existe una transacción, consulte [Seguimiento de puntos de entrada de transacciones](#transaction-tracers).

El método rastreador son sondas de software que puedes colocar en un método de cualquier clase. Las sondas utilizan el módulo antepuesto para insertarse cuando se ejecutan los métodos objetivo y recopilar instrumentación personalizada sobre su desempeño.

## Seguimiento en definiciones de clases [#tracing-classes]

El método rastreador se puede utilizar dentro de las definiciones de clases normales, siempre que se haya definido primero el método objetivo:

```rb
require 'new_relic/agent/method_tracer'
class Foo
  include ::NewRelic::Agent::MethodTracer

  def generate_image
    ...
  end

  add_method_tracer :generate_image, 'Custom/generate_image'
end
```

Para instrumentar un método de clase, agregue el método tracer en el singleton de clase:

```rb
require 'new_relic/agent/method_tracer'
class Foo
  def self.generate_image
     ...
  end

  class << self
    include ::NewRelic::Agent::MethodTracer

    add_method_tracer :generate_image, 'Custom/generate_image'
  end
end
```

El método `add_method_tracer` toma un nombre de métrica opcional y un hash de opciones. Para obtener más información, consulte [add_method_tracer en New Relic RubyDoc](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/MethodTracer/ClassMethods#add_method_tracer-instance_method).

## Seguimiento de inicializadores

Para Rails, una forma común de agregar instrumentación es crear un inicializador y "parchear mono" las directivas de instrumentación.

Por ejemplo, para agregar un rastreador de métodos a `MyCache#get`:

1. Asegúrese de que la clase MyCache esté cargada antes de agregar el rastreador de métodos.

2. Agregue lo siguiente en un archivo llamado <DNT>**config/initializers/rpm_instrumentation.rb**</DNT>:

   ```rb
   require 'new_relic/agent/method_tracer'

   MyCache.class_eval do
     include ::NewRelic::Agent::MethodTracer

     add_method_tracer :get
   end
   ```

## Seguimiento de bloques de código [#tracing-blocks]

A veces, un único método es tan complejo que el seguimiento del tiempo total no proporciona suficientes detalles. Si tiene una transacción existente para la cual le gustaría tener información más granular sobre un método individual, puede envolver un bloque de código con un rastreador. Llama a `trace_execution_scoped` pasando el código a traza como bloque:

```rb
extend ::NewRelic::Agent::MethodTracer

def slow_action
  self.class.trace_execution_scoped(['Custom/slow_action/beginning_work']) do
    # do stuff and report execution time with a custom metric name
  end

  # more stuff, whose time will be "blamed" to slow_action
end
```

Para obtener más información, consulte [add_method_tracer en New Relic RubyDoc](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/MethodTracer#trace_execution_scoped-instance_method). Si no está seguro de si ya existe una transacción o necesita iniciar una nueva, consulte [la sección instrumentado de código](https://docs.newrelic.com/docs/apm/agents/ruby-agent/api-guides/ruby-custom-instrumentation/#in-transaction) en Instrumentación personalizada avanzada.

## Nombrar transacción

La transacción instrumentada se utiliza para determinar el rendimiento y el tiempo de respuesta general de su aplicación. El nombre del método y la clase se utilizarán para el nombre de la transacción tal como se informa a New Relic. Para obtener más información, consulte [Visualización de la traza de la transacción](/docs/traces/viewing-transaction-traces).

Normalmente el agente elige automáticamente el nombre de la transacción. Si desea cambiar el nombre de una transacción mientras aún se está ejecutando, use `NewRelic::Agent.set_transaction_name` y el `NewRelic::Agent.get_transaction_name` correspondiente.

<Callout variant="important">
  No utilice corchetes `[suffix]` al final del nombre de su transacción. New Relic elimina automáticamente los corchetes del nombre. En su lugar, utilice paréntesis `(suffix)` u otros símbolos si es necesario.
</Callout>

Esto es útil si desea segmentar su transacción según algunos criterios. Por ejemplo, si quisieras variar el nombre de la transacción según el formato de respuesta en Rails:

```rb
class UsersController
  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json do
        NewRelic::Agent.set_transaction_name('Users/index.json')
        render :json => @users
      end
      format.xml do
        NewRelic::Agent.set_transaction_name('Users/index.xml')
        render :xml => @users
      end
    end
  end
end
```

El cambio de nombre de transacción también se puede utilizar para segmentar sus solicitudes según algunos criterios comerciales. Por ejemplo, podrías segmentar una transacción en "Grandes clientes" y "Pequeños clientes" con un código como este:

```rb
class UsersController

  before_filter :segment_new_relic_by_customer_size

  def segment_new_relic_by_customer_size
    new_relic_name = NewRelic::Agent.get_transaction_name
    if current_user.big_customer?
      NewRelic::Agent.set_transaction_name("#{new_relic_name} - big customer")
    else
      NewRelic::Agent.set_transaction_name("#{new_relic_name} - small customer")
    end
  end

end
```

## Seguimiento de puntos de entrada de transacciones [#transaction-tracers]

Normalmente, el agente podrá identificar transacciones dentro de su aplicación, pero si no está utilizando un framework compatible o si desea registrar transacciones que el agente no registra automáticamente, puede definir métodos como puntos de entrada de transacciones. :

```rb
class Controller
  include NewRelic::Agent::Instrumentation::ControllerInstrumentation

  def transaction
    # execute a transaction
  end
  add_transaction_tracer :transaction
end
```

Para instrumentar un método de clase, agregue el método tracer en el singleton de clase:

```rb
class Controller
  include NewRelic::Agent::Instrumentation::ControllerInstrumentation
  
  class << self 
    def transaction
      # execute a transaction
    end
    add_transaction_tracer :transaction
  end
end
```

## Transacción instrumentada no web [#non-web-transactions]

Junto con el seguimiento a nivel de método, puede realizar transacciones no web, como tareas en segundo plano, con el mismo nivel de detalle de transacciones y errores que las transacciones web. Para obtener más información, consulte [monitoreo de daemons y procesos en segundo plano de Ruby](/docs/ruby/monitoring-ruby-background-processes-and-daemons).

## Instrumentación avanzada personalizada [#advanced-tracing]

Cuando el código de seguimiento no es instrumentado automáticamente por el agente, el [método rastreador](/docs/agents/ruby-agent/api-guides/ruby-custom-instrumentation#method_tracers) estándar suele ser suficiente.

Sin embargo, a veces es necesario instrumentar algo más complejo que una sola llamada a un método. Por ejemplo, es posible que desee instrumentar algunas líneas de código dentro de un método, o puede que desee iniciar una transacción en una parte de su código y finalizarla en otra parte.

El módulo rastreador, introducido en la versión 6.0 del agente, proporciona una API flexible que le permite crear transacciones y segmentos, así como interactuar con la transacción actual.

### Instrumentado una sección de código [#in-transaction]

Para instrumentar una sección de código, envuelva el código en un bloque y luego pase el bloque al método `Tracer.in_transaction` . El agente se asegurará de que exista una transacción y creará un segmento dentro de ella para el código dentro del bloque.

```rb
require 'new_relic/agent/tracer'

def long_and_complex_process
  expensive_setup

  NewRelic::Agent::Tracer.in_transaction(
    partial_name: 'Complex/process',
    category: :task
  ) do
    code_to_be_instrumented
  end

  expensive_teardown
end
```

### Iniciar una transacción o segmento [#start-transaction-or-segment]

Si necesita iniciar una transacción en una ubicación de su código pero finalizarla en otra (como puede suceder con un evento basado en devolución de llamada), llame a `NewRelic::Agent::Tracer.start_transaction_or_segment`. Usted <DNT>**must**</DNT> llama a `finish` con el valor de retorno de este método:

```rb
class MyEventWatcher
  def event_started
    @transaction = NewRelic::Agent::Tracer.start_transaction_or_segment(
      partial_name: 'MyEventWatcher/my_event',
      category:     :task)
  end

  def event_completed
    @transaction.finish
  end
end
```

Para obtener más información, consulte [Tracer#start_transaction_or_segment en New Relic RubyDoc](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/Tracer#start_transaction_or_segment-class_method).

### Instrumentado Temas

En 8.7.0 y versiones posteriores, use la clase `NewRelic::TracedThread` en la aplicación para crear subprocesos instrumentados por New Relic.

Utilice esta clase como reemplazo de la clase nativa `Thread` . Consulte nuestra [documentación de la API TracedThread](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/TracedThread) para obtener más detalles.
