---
title: Instrumentação Ruby personalizada
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: 'For information about customizing New Relic''s Ruby agent API to collect additional metrics, start here.'
freshnessValidatedDate: never
translationType: machine
---

O agente New Relic Ruby coleta automaticamente muitas métricas. Também inclui uma API que você pode usar para coletar métricas adicionais sobre sua aplicação. Se você observar grandes segmentos <DNT>**Application Code**</DNT> nos detalhes do rastreamento da transação, a instrumentação personalizada poderá fornecer uma visão mais completa do que está acontecendo em seu aplicativo. Para obter detalhes sobre todos os métodos de API disponíveis, consulte nossa [documentação da API do agente Ruby](https://www.rubydoc.info/gems/newrelic_rpm).

<Callout variant="tip">
  Coletar muitas métricas pode impactar o desempenho do seu aplicativo e do New Relic. Para evitar problemas de dados, mantenha o número total de métricas exclusivas introduzidas pela instrumentação personalizada abaixo de 2.000.
</Callout>

## Rastreador de método [#method\_tracers][#method_tracers]

A maneira mais fácil de capturar instrumentação personalizada é rastrear chamadas para um método específico. Rastrear um método conforme descrito abaixo irá inserir um nó adicional em seu rastreamento da transação para cada invocação desse método, fornecendo maiores detalhes sobre para onde está indo o tempo em suas transações.

É melhor usá-lo quando você tem certeza de que já existe uma transação. O rastreador de método oferece um nível adicional de granularidade no contexto de algo já instrumentado pelo agente. Se você não tiver certeza se existe uma transação, consulte [Rastreamento de pontos de entrada de transação](#transaction-tracers).

Rastreadores de método são testes de software que você pode colocar em um método de qualquer classe. Os testes usam prefixos de módulo para se inserirem quando os métodos de destino são executados e coletam instrumentação personalizada sobre seu desempenho.

## Rastreamento em definições de classe [#tracing-classes]

O rastreador de método pode ser usado dentro de definições normais de classe, desde que o método destino tenha sido definido primeiro:

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

Para instrumentalizar um método de classe, adicione o método tracer no singleton da classe:

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

O método `add_method_tracer` usa um nome de métrica opcional e um hash de opções aplicar. Para obter mais informações, consulte [add\_method\_tracer no New Relic RubyDoc](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/MethodTracer/ClassMethods#add_method_tracer-instance_method).

## Rastreando inicializadores

Para Rails, uma maneira comum de adicionar instrumentação é criar um inicializador e &quot;monkey patch&quot; as diretivas de instrumentação.

Por exemplo, para adicionar um tracer de método a `MyCache#get`:

1. Certifique-se de que a classe MyCache esteja carregada antes de adicionar o método tracer.

2. Adicione o seguinte em um arquivo chamado <DNT>**config/initializers/rpm\_instrumentation.rb**</DNT>:

   ```rb
   require 'new_relic/agent/method_tracer'

   MyCache.class_eval do
     include ::NewRelic::Agent::MethodTracer

     add_method_tracer :get
   end
   ```

## Rastreando blocos de código [#tracing-blocks]

Às vezes, um único método é tão complexo que o monitoramento do tempo total não fornece detalhes suficientes. Se você tiver uma transação existente para a qual gostaria de ter informações mais granulares sobre um método individual, poderá agrupar um bloco de código com um tracer. Chame `trace_execution_scoped` passando o código a trace como um bloco:

```rb
extend ::NewRelic::Agent::MethodTracer

def slow_action
  self.class.trace_execution_scoped(['Custom/slow_action/beginning_work']) do
    # do stuff and report execution time with a custom metric name
  end

  # more stuff, whose time will be "blamed" to slow_action
end
```

Para mais informações, consulte [add\_method\_tracer no New Relic RubyDoc](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/MethodTracer#trace_execution_scoped-instance_method). Se você não tiver certeza se uma transação já existe ou precisar iniciar uma nova, consulte [instrumentado a seção de código](/docs/apm/agents/ruby-agent/api-guides/ruby-custom-instrumentation/#in-transaction) em Instrumentação personalizada avançada.

## Nomeação de transação

Transação instrumentada são usados para determinar as taxas de transferência e o tempo geral de resposta para sua aplicação. O nome do método e da classe serão usados para o nome da transação conforme relatado à New Relic. Para obter mais informações, consulte [Visualização do rastreamento da transação](/docs/traces/viewing-transaction-traces).

Normalmente o agente escolhe automaticamente o nome da transação. Se você quiser alterar o nome de uma transação enquanto ela ainda está em execução, use `NewRelic::Agent.set_transaction_name` e o `NewRelic::Agent.get_transaction_name` correspondente.

<Callout variant="important">
  Não use colchetes `[suffix]` no final do nome da sua transação. O New Relic remove automaticamente os colchetes do nome. Em vez disso, use parênteses `(suffix)` ou outros símbolos, se necessário.
</Callout>

Isto é útil se você deseja segmentar sua transação com base em alguns critérios. Por exemplo, se você quiser variar o nome da transação por formato de resposta no Rails:

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

A renomeação de transações também pode ser usada para segmentar suas solicitações em torno de alguns critérios de negócios. Por exemplo, você poderia segmentar uma transação em “Grandes clientes” e “Pequenos clientes” com um código como este:

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

## Rastreando pontos de entrada de transação [#transaction-tracers]

Normalmente o agente será capaz de identificar a transação dentro da sua aplicação, mas se você não estiver usando um framework suportado, ou se quiser registrar a transação que o agente não está registrando automaticamente, você pode definir métodos como sendo pontos de entrada da transação :

```rb
class Controller
  include NewRelic::Agent::Instrumentation::ControllerInstrumentation

  def transaction
    # execute a transaction
  end
  add_transaction_tracer :transaction
end
```

Para instrumentalizar um método de classe, adicione o método tracer no singleton da classe:

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

## Transação instrumentada fora da web [#non-web-transactions]

Junto com o rastreamento em nível de método, você pode instrumento de transação fora da web, como tarefas em segundo plano, com o mesmo nível de detalhes de transação e erro da transação da web. Para obter mais informações, consulte [monitoramento de processos e daemon em segundo plano Ruby](/docs/ruby/monitoring-ruby-background-processes-and-daemons).

## Aplicando o rastreador de método automaticamente via configuração

Com New Relic Ruby agente v9.14.0 e superior, o rastreador de métodos pode ser aplicado automaticamente pelo agente para qualquer método Ruby definido na configuração do agente (definido por meio do arquivo de configuração YAML ou variáveis de ambiente).

O parâmetro de configuração `:automatic_custom_instrumentation_method_list` pode ser usado para definir uma lista de métodos Ruby totalmente qualificados (com namespace) para os quais o agente tentará adicionar um tracer. Isso não requer nenhuma modificação no código das classes que definem os métodos.

A lista deve ser uma matriz de strings `CLASS#METHOD` (para métodos de instância) e/ou `CLASS.METHOD` (para métodos de classe).

Use nomes de classe totalmente qualificados (usando o delimitador `::` ) que incluam qualquer namespace de módulo ou classe.

Aqui está um código-fonte Ruby que define um método de instância `render_png` para uma classe `Image` e um método de classe `notify` para uma classe `User` , ambos dentro de um namespace de módulo `MyCompany` :

```rb
module MyCompany
  class Image
    def render_png
      # code to render a PNG
    end
  end

  class User
    def self.notify
      # code to notify users
    end
  end
end
```

Dado esse código-fonte, o arquivo de configuração `newrelic.yml` pode solicitar instrumentação para ambos os métodos, assim:

```yml
automatic_custom_instrumentation_method_list:
  - MyCompany::Image#render_png
  - MyCompany::User.notify
```

Esse exemplo de configuração usa a sintaxe de matriz YAML para especificar ambos os métodos. Como alternativa, você pode usar uma string delimitada por vírgulas:

```yml
automatic_custom_instrumentation_method_list: 'MyCompany::Image#render_png, MyCompany::User.notify'
```

O espaço em branco ao redor da(s) vírgula(s) na lista é opcional. Ao configurar o agente com uma lista de métodos por meio da variável de ambiente `NEW_RELIC_AUTOMATIC_CUSTOM_INSTRUMENTATION_METHOD_LIST` , use este formato de string delimitada por vírgulas:

```sh
export NEW_RELIC_AUTOMATIC_CUSTOM_INSTRUMENTATION_METHOD_LIST='MyCompany::Image#render_png, MyCompany::User.notify'
```

A entrada YAML ou a configuração da variável de ambiente é tudo o que é necessário. Com essa abordagem, não há necessidade de adicionar nenhuma das linhas de código `require`, `include` ou `add_method_tracer` ao aplicativo.

## Instrumentação avançada personalizada [#advanced-tracing]

Ao rastrear código não instrumentado automaticamente pelo agente, o [rastreador de método](/docs/agents/ruby-agent/api-guides/ruby-custom-instrumentation#method_tracers) padrão geralmente será suficiente.

Porém, às vezes você precisa instrumentar algo mais complexo do que uma única chamada de método. Por exemplo, você pode querer instrumentar algumas linhas de código dentro de um método, ou pode querer iniciar uma transação em uma parte do seu código e terminá-la em outro lugar.

O módulo tracer , introduzido na versão 6.0 do agente, fornece uma API flexível que permite criar transações e segmentos, bem como interagir com a transação atual.

### Instrumentado uma seção de código [#in-transaction]

Para instrumentar uma seção de código, coloque o código em um bloco e passe o bloco para o método `Tracer.in_transaction` . O agente garantirá a existência de uma transação e criará um segmento dentro dela para o código dentro do bloco.

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

### Iniciando uma transação ou segmento [#start-transaction-or-segment]

Se você precisar iniciar uma transação em um local do seu código, mas finalizá-la em outro (como pode acontecer com evento baseado em retorno de chamada), chame `NewRelic::Agent::Tracer.start_transaction_or_segment`. Você <DNT>**must**</DNT> chama `finish` no valor de retorno deste método:

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

Para obter mais informações, consulte [Tracer#start\_transaction\_or\_segment no New Relic RubyDoc](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/Tracer#start_transaction_or_segment-class_method).

### Threads instrumentados

Na versão 8.7.0 e superior, use a classe `NewRelic::TracedThread` no aplicativo para criar threads que são instrumentados pela New Relic.

Use esta classe como um substituto para a classe nativa `Thread` . Consulte nossa [documentação da API TracedThread](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/TracedThread) para obter mais detalhes.