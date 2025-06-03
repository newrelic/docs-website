---
title: function_trace (API do agente Python)
type: apiDoc
shortDescription: 'Usado para instrumentar funções, métodos, geradores e corrotinas que não são instrumentados por padrão.'
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Functions for adding functions and class methods to a transaction.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.function_trace(name=None, group=None, label=None, params=None, terminal=False)
```

Usado para instrumentar funções, métodos, geradores e corrotinas que não são instrumentados por padrão.

## Descrição

`function_trace` é um decorador para adicionar funções, métodos, geradores e corrotinas. Adicionar este decorador permite coletar informações adicionais [da transação](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction) (incluindo informações de rastreamento da transação). (Uma maneira alternativa de o instrumento funcionar sem precisar tocar no código do aplicativo é [listá-los no arquivo de configuração](/docs/agents/python-agent/custom-instrumentation/python-custom-instrumentation-config-file).)

`function_trace` não fornece um perfil completo de todas as funções que acontecem em uma função decorada. O que ele faz é adicionar a função decorada como um nó na interface do New Relic e capturar o tempo gasto nessa função. Se precisar de mais detalhes sobre o que está acontecendo nessa função, você também precisará aplicar o trace da função às funções filhas da função.

O decorador `function_trace` pode ser usado em geradores e corrotinas com agente versão 2.102.0.85 ou superior. O tempo desses objetos começa quando o consumo começa e termina quando o objeto se esgota ou sai do escopo. Esta é uma mudança em relação às versões anteriores, onde a métrica representava o tempo necessário para criar o gerador ou o próprio objeto de corrotina.

Você pode usar o decorador em conjunto com decoradores existentes, incluindo aqueles para métodos estáticos e de classe. Ao aninhar vários decoradores, tenha o decorador `function_trace` como o decorador mais externo.

<Callout variant="important">
  Para qualquer decorador que esteja sendo empacotado, use `functools.wraps()` da biblioteca padrão do Python em sua implementação. (Ou, caso contrário, certifique-se de que o decorador propague o atributo de nome correto do objeto empacotado mais interno necessário para permitir a introspecção de nome correta.) Se isso não for feito, quando a métrica for relatada, o nome da função decoradora aninhada (não a função encapsulada mais interna) será usado.
</Callout>

## Formulários de chamada alternativos [#alternate]

Para configurações onde você não pode usar o decorador, estes formulários de chamada alternativos estão disponíveis:

### O gerenciador de contexto [#context-manager]

O gerenciador de contexto `FunctionTrace` é usado quando o parâmetro a ser passado não pode ser determinado antes do tempo de execução. (Por exemplo, você pode não saber o nome de uma função no momento da importação.) Ao usar o gerenciador de contexto para nomear uma métrica, você deve sempre fornecer o nome e o prefixo do caminho da métrica.

A classe `FunctionTrace` implementa o gerenciador de contexto e é usada em conjunto com a instrução `with` . A classe `FunctionTrace` é a primitiva de nível mais baixo disponível para rastrear o tempo em relação a uma transação.

A instrução `with` define os limites do que é cronometrado e não uma única função. Assim, o gerenciador de contexto poderia ser aplicado a um bloco arbitrário de código. O bloco de código pode, portanto, conter chamadas para múltiplas funções ou pode ser um bloco de código independente que implementa um algoritmo orientado ao tempo que você deseja rastrear.

<Callout variant="important">
  Evite rastrear blocos de código que são chamados um número excessivo de vezes. Por exemplo, não use-o no contexto de um loop que é executado muitas vezes. Os dados gerados incorrerão em uma sobrecarga de desempenho. Uma solução melhor é encerrar o loop.
</Callout>

### O invólucro

Se você souber antecipadamente onde estão as funções específicas que deseja trace , poderá usar o decorador `function_trace`. No entanto, se você <DNT>**don't**</DNT> conhece todas as funções que precisam ser rastreadas (por exemplo, se elas estão sendo pesquisadas dinamicamente como parte de um sistema de roteamento), então você deve usar o `FunctionTraceWrapper` para encapsular a função no no momento da inscrição ou no momento da ligação.

### Quebra automática baseada em caminho [#path-based]

`wrap_function_trace` é usado para agrupar funções fora do código em que foram declaradas. Por exemplo: você pode usar isso para o código da biblioteca do instrumento que não deseja modificar.

Para obter mais informações sobre as diferenças entre esses formatos de chamada, consulte [Diferentes formatos de chamada](/docs/python-agent-api-different-call-forms).

## Parâmetro

### Parâmetro para decorador [#main-parameters]

```py
newrelic.agent.function_trace(name=None, group=None, label=None, params=None, terminal=False)
```

Esta chamada inclui estes parâmetros:

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`

        _corda_
      </td>

      <td>
        Opcional. O nome da função. Se não for definido, o padrão será o nome capturado da função.
      </td>
    </tr>

    <tr>
      <td>
        `group`

        _corda_
      </td>

      <td>
        Opcional. O `group` representa a estrutura de nomenclatura do parâmetro `name` . Isto é usado na interface para segregar os [tipos de transação](/docs/apm/applications-menu/monitoring/transactions-page#tx_functions).

        Se não for fornecido, o grupo terá como padrão `Function` na expectativa de que o nome tenha o formato `module:class.function` ou `module:function` e represente o nome da função que está sendo executada. Se você estiver criando um grupo personalizado, é recomendável prefixá-lo com `Python/`.
      </td>
    </tr>

    <tr>
      <td>
        `label`

        _corda_
      </td>

      <td>
        Opcional. Adiciona um sinalizador de estilo callout ao segmento em um rastreamento de transação. O padrão é `None`.
      </td>
    </tr>

    <tr>
      <td>
        `params`

        _dict_
      </td>

      <td>
        Opcional. Parâmetro personalizado a ser adicionado ao segmento no rastreamento da transação.
      </td>
    </tr>

    <tr>
      <td>
        `terminal`

        _boleano_
      </td>

      <td>
        Opcional. Se for verdade, nenhum segmento filho será gravado. O padrão é falso.
      </td>
    </tr>
  </tbody>
</table>

### Parâmetro para gerenciador de contexto [#context-mgr-parameters]

```py
newrelic.agent.FunctionTrace(name, group=None, label=None, params=None, terminal=False)
```

O parâmetro para o gerenciador de contexto inclui todos os [parâmetros](#main-parameters) de `function_trace`. O parâmetro `name` é obrigatório e não opcional.

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`

        _corda_
      </td>

      <td>
        Obrigatório. O nome da função.
      </td>
    </tr>
  </tbody>
</table>

### Parâmetro do wrapper

```py
newrelic.agent.FunctionTraceWrapper(wrapped, name=None, group=None, label=None, params=None, terminal=False)
```

Os parâmetros do wrapper incluem todos [os parâmetros](#main-parameters) para `function_trace` e um parâmetro `wrapped` :

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `wrapped`

        _função_
      </td>

      <td>
        Obrigatório. A função que está sendo encapsulada.
      </td>
    </tr>
  </tbody>
</table>

### Parâmetro de encapsulamento baseado em caminho [#path-wrap-parameters]

```py
newrelic.agent.wrap_function_trace(module, object_path, name=None, group=None, label=None, params=None, terminal=False)
```

parâmetro inclui todos [os parâmetros](#main-parameters) para `function_trace` e estes parâmetros:

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `module`

        _objeto_
      </td>

      <td>
        Obrigatório. O módulo que contém a função a ser instrumentada.
      </td>
    </tr>

    <tr>
      <td>
        `object_path`

        _corda_
      </td>

      <td>
        O caminho para o local da função.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### `function_trace` exemplo [#trace_example]

Um exemplo de uso do decorador `function_trace` :

```py
import newrelic.agent

class _Database(UserDict.DictMixin):

    ...

    @newrelic.agent.function_trace()
    def _commit(self):
        ...

@newrelic.agent.function_trace()
def open(file, flag=None, mode=0666):
...
```

Um exemplo de uso do decorador `function_trace` com corrotinas nativas:

```py
import newrelic.agent

class _Database(UserDict.DictMixin):

    ...

    @newrelic.agent.function_trace()
    async def _commit(self):
        ...

@newrelic.agent.function_trace()
async def open(file, flag=None, mode=0666):
...
```

### Exemplo de gerenciador de contexto [#context-mgr-example]

Um exemplo de uso do gerenciador de contexto `FunctionTrace` :

```py
import newrelic.agent

def dispatch_request(self, request):
    adapter = self.url_map.bind_to_environ(request.environ)
    try:
        endpoint, values = adapter.match()
        function = getattr(self, 'on_' + endpoint)
        with newrelic.agent.FunctionTrace(
                endpoint, 'Python/EndPoint'):
            return function(request, <DNT>**values)
    except HTTPException as e:
        return e
```

### Exemplo de wrapper [#trace-wrap-example]

Um exemplo de uso do `FunctionTraceWrapper`:

O roteamento de URL com Werkzeug produz um nome que é usado primeiro para procurar dinamicamente um método de uma classe usando `getattr()` e o resultado é então invocado:

```py
def dispatch_request(self, request):
    adapter = self.url_map.bind_to_environ(request.environ)
    try:
        endpoint, values = adapter.match()
        return getattr(self, 'on_' + endpoint)(request, **</DNT>values)
    except HTTPException as e:
        return e
```

Se quiser trace a função do endpoint, você pode reescrever isso como:

```py
import newrelic.agent

def dispatch_request(self, request):
    adapter = self.url_map.bind_to_environ(request.environ)
    try:
        endpoint, values = adapter.match()
        function = getattr(self, 'on_' + endpoint)
        function = newrelic.agent.FunctionTraceWrapper(function)
        return function(request, <DNT>**values)
    except HTTPException as e:
        return e
```

Se desejar nomear a métrica após o nome do endpoint (em vez de nomear a métrica com base no identificador da função que está sendo chamada), você poderá fornecer o nome a ser usado, além de um prefixo de caminho de métrica alternativo quando o objeto `FunctionTraceWrapper` for criado.

```py
import newrelic.agent

def dispatch_request(self, request):
    adapter = self.url_map.bind_to_environ(request.environ)
    try:
        endpoint, values = adapter.match()
        function = getattr(self, 'on_' + endpoint)
        function = newrelic.agent.FunctionTraceWrapper(
                function, name=endpoint, group='Python/EndPoint')
        return function(request, **</DNT>values)
    except HTTPException as e:
        return e
```

Neste exemplo, se o endpoint fosse chamado `help`, a métrica final seria:

```
Python/EndPoint/help
```

No detalhamento do desempenho de uma transação, a categoria seria `Python` e o nome do segmento `EndPoint/help`. Esse nome de segmento também apareceria no rastreamento lento da transação como o nome do nó.
