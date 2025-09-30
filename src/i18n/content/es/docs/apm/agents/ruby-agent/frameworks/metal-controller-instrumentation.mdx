---
title: Instrumentación de controlador de metal.
tags:
  - Agents
  - Ruby agent
  - Instrumented gems
metaDescription: 'How to view ActionController:Metal controllers for the Ruby agent in New Relic''s user interface.'
freshnessValidatedDate: never
translationType: machine
---

De forma predeterminada, el agente New Relic Ruby no controla `ActionController::Metal` controladores. Esto está en consonancia con la filosofía de que el controlador Metal proporciona solo la interfaz mínima necesaria para ofrecer una aplicación Rack válida. Por lo general, depende de usted embellecer los controladores metálicos según sea necesario. Este documento describe cómo hacer que estas acciones del controlador aparezcan en la [página APM <DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)y en descripciones generales junto con las que heredan de `ApplicationController` para aplicaciones Rails 3 o superiores.

## Rails 4.0 o superior [#rails4]

A partir de Rails 4.0, la instrumentación del controlador de New Relic usa `ActiveSupport::Notifications`. Incluir el módulo `ActionController::Instrumentation` garantiza que los eventos del controlador se activen desde su controlador Metal. Esto permite a New Relic instrumentar esas acciones.

```
class PlatinumController < ActionController::Metal
  include ActionController::Rendering

  def show
    render :text => "Here is some text"
  end

  # Ensure ActiveSupport::Notifications events are fired
  include ActionController::Instrumentation

  # Uncomment the following line to include New Relic helper methods, such as newrelic_ignore or add_method_tracer
  # include NewRelic::Agent::Instrumentation::ControllerInstrumentation
end
```

## Rails 3.0 a 3.2 [#rails3]

### Método 1

El siguiente método instrumenta automáticamente todas las acciones del controlador Metal igual que con el controlador base.

Incluye `NewRelic::Agent::Instrumentation::ControllerInstrumentation` y `NewRelic::Agent::Instrumentation::Rails3::ActionController` al final de tus clases de Metal Controller:

```
class SteelController < ActionController::Metal
  include ActionController::Rendering

  def show
    render :text => "Here is some text"
  end

  include NewRelic::Agent::Instrumentation::ControllerInstrumentation
  include NewRelic::Agent::Instrumentation::Rails3::ActionController
end
```

### Método 2

El siguiente ejemplo le permite optar por rastrear solo métodos de acción específicos del controlador Metal.

Incluya `NewRelic::Agent::Instrumentation::ControllerInstrumentation` y llame a `add_transaction_tracer` para cada instrumentación de método:

```
class SteelController < ActionController::Metal
  include ActionController::Rendering
  include NewRelic::Agent::Instrumentation::ControllerInstrumentation

  def show
    render :text => "Here is some text"
  end
  add_transaction_tracer :show
end
```

### Método 3

El último ejemplo es una forma más general de agregar seguimiento del método que funcionará en cualquier clase, no solo en la clase Metal Controller.

Incluya `NewRelic::Agent::MethodTracer` y llame a `add_method_tracer` para cada instrumentación de método:

```
class SteelController < ActionController::Metal
  include ActionController::Rendering
  include NewRelic::Agent::MethodTracer

  def show
    render :text => "Here is some text"
  end
  add_method_tracer :show
end
```

## Rails 2.3 [#rails2]

Si usas la clase `Rails::Rack::Metal` de Rails 2, puedes realizar llamadas de instrumento a tus Metals de la siguiente manera:

```
require 'newrelic_rpm'

class MyMetal < Rails::Rack::Metal
  def self.call(env)
    # ... your metal code ...
  end

  class << self
    include NewRelic::Agent::Instrumentation::ControllerInstrumentation
    add_transaction_tracer :call
  end
end
```
