---
title: background_task (API do agente Python)
type: apiDoc
shortDescription: Usado para instrumentalizar uma tarefa em segundo plano ou outra transação fora da web de tempo de execução finito.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Used to instrument a background task or other non-web transaction of finite run time.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.background_task(application=None, name=None, group=None)
```

Usado para instrumentalizar uma tarefa em segundo plano ou outra transação fora da web de tempo de execução finito.

## Descrição

Este decorador Python pode ser usado para instrumentar tarefas em segundo plano ou outras [transações fora da web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) de tempo de execução finito. Isso normalmente é usado para instrumentar atividades fora da Web, como processos de trabalho, sistemas baseados em tarefas e scripts independentes. As transações marcadas como tarefas em segundo plano são exibidas como transações fora da web na interface do APM e separadas das transações da web.

<Callout variant="important">
  Se uma função ainda não for um instrumento, você poderá usar [`function_trace()`](/docs/apm/agents/python-agent/python-agent-api/functiontrace-python-agent-api) para criar um trace de função para essa função em uma tarefa em segundo plano. Ou você pode usar o [arquivo de configuração](/docs/apm/agents/python-agent/custom-instrumentation/python-custom-instrumentation-config-file/#listing_functions) para funções não instrumentadas do instrumento.
</Callout>

Se uma função que usa o decorador de tarefa em segundo plano for chamada no contexto de uma transação da web, a transação da web será marcada como uma tarefa em segundo plano. A medição do tempo gasto começa quando se inicia a transação original da web.

Se você não puder usar o decorador, um destes formatos de chamada pode ser mais útil:

* <DNT>
    **The context manager**
  </DNT>

  : se as tarefas a serem monitoradas forem determinadas apenas no tempo de execução (e não no tempo de importação), você poderá usar o gerenciador de contexto `BackgroundTask` para agrupar diretamente a execução de um bloco de código. (Este é o gerenciador de contexto usado por `BackgroundTaskWrapper`.)

* <DNT>
    **The wrapper**
  </DNT>

  : se você souber antecipadamente onde estão as funções específicas que deseja rastrear, poderá usar o decorador `background_task` . Mas se você não conhece todas as funções que precisam ser rastreadas (por exemplo, se elas estão sendo pesquisadas dinamicamente como parte de um sistema de roteamento), então você deve usar o `BackgroundTaskWrapper` para agrupar a função no momento da inscrição ou no momento da ligação.

* <DNT>
    **The path-based wrapper**
  </DNT>

  : o formulário wrapper baseado em caminho é `wrap_background_task`.

Para obter mais informações sobre as diferenças e os usos dessas formas de função, consulte [Formatos de chamada de variáveis](/docs/python-agent-api-different-call-forms).

## Parâmetro

### Parâmetro decorador e gerenciador de contexto [#main-params]

```py
newrelic.agent.background_task(application=None, name=None, group=None)
```

```py
newrelic.agent.BackgroundTask(application=None, name=None, group=None)
```

Parâmetro para essas chamadas:

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
        `application`

        _Instância do aplicativo_
      </td>

      <td>
        Obrigatório. O aplicativo sob o qual os dados serão relatados. O padrão é `None`. Se ficar sem valor, o aplicativo especificado na [configuração](/docs/agents/python-agent/installation-configuration/python-agent-configuration) do agente (arquivo de configuração ou variável de ambiente) será usado.

        Para obter mais informações sobre como gerar um objeto de aplicativo, consulte o método [`application()`](/docs/agents/python-agent/python-agent-api/application) .

        O aplicativo, mesmo se especificado, ainda poderá ser substituído se `newrelic.app_name` for definido no aplicativo WSGI por dicionário de ambiente de solicitação.
      </td>
    </tr>

    <tr>
      <td>
        `name`

        _corda_
      </td>

      <td>
        Obrigatório. O nome da transação. O valor padrão é `None`. Por padrão, o nome será o nome da função à qual o decorador foi aplicado, mas você pode substituir isso fornecendo este nome.
      </td>
    </tr>

    <tr>
      <td>
        `group`

        _corda_
      </td>

      <td>
        Opcional. O `group` representa a estrutura de nomenclatura do parâmetro `name` . Isto é usado na interface para definir o [tipo de transação](/docs/apm/applications-menu/monitoring/transactions-page#tx_functions).

        Se não for fornecido, o grupo será padronizado como `Function` na expectativa de que o nome tenha o formato `module:class.function` ou `module:function` e represente o nome da função que está sendo executada. Se você estiver criando um grupo personalizado, recomendamos prefixá-lo com `Python/`.
      </td>
    </tr>
  </tbody>
</table>

### Parâmetro do wrapper: [#wrapper-params]

```py
newrelic.agent.BackgroundTaskWrapper(wrapped, application=None, name=None, group=None)
```

`BackgroundTaskWrapper` usa os mesmos [parâmetros](#main-params) do decorador `background_task` e este parâmetro `wrapped` adicional:

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

        _método_
      </td>

      <td>
        Obrigatório. O método a ser rastreado.
      </td>
    </tr>
  </tbody>
</table>

### Parâmetro baseado em caminho: [#path-based-params]

```py
newrelic.agent.wrap_background_task(module, object_path, application=None, name=None, group=None)
```

`wrap_background_task` leva o mesmo [parâmetro](#main-params) do decorador `background_task` mais estes parâmetros adicionais:

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

        _módulo_ ou _string_
      </td>

      <td>
        Obrigatório. O módulo que contém a função/atividade não web que você é instrumento.
      </td>
    </tr>

    <tr>
      <td>
        `object_path`

        _corda_
      </td>

      <td>
        Obrigatório. O caminho para o módulo.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### `background_task` exemplo de decorador [#bg_task_example]

Aqui está um exemplo de uso do decorador `background_task` :

```py
@newrelic.agent.background_task()
def task():
    ...
```

### `BackgroundTask` exemplo de gerenciador de contexto [#context-mgr-example]

Um exemplo de uso de `BackgroundTask`:

```py
application = newrelic.agent.application()
name = newrelic.agent.callable_name(task)

with BackgroundTask(application, name):
    task()
```

Aqui está outro exemplo com mais parâmetros:

```py
application = newrelic.agent.register_application(timeout=10.0)

def execute_task(task_name):
    with newrelic.agent.BackgroundTask(application, name=task_name, group='Task'):
        ...
```

### `BackgroundTaskWrapper` exemplo [#wrapper-example]

Um exemplo de uso do `BackgroundTaskWrapper`:

```py
task = newrelic.agent.BackgroundTaskWrapper(get_next_task())
result = task(*args, **kwargs)
```

Neste exemplo, se esta chamada foi realizada em uma transação da web sendo monitorada por um agente, a chamada reclassificará a transação da web como uma tarefa em segundo plano. Se, no entanto, a chamada fosse feita em um thread ou corrotina em segundo plano, ela iniciaria a gravação de uma nova transação de tarefa em segundo plano que rastreia o que ocorre até que a chamada retorne.

## Resolução de problemas

Se a transação da tarefa em segundo plano não estiver aparecendo na interface do usuário, isso pode ocorrer porque a transação criada pela tarefa em segundo plano nunca foi encerrada ou a tarefa foi executada por muito tempo. Se uma tarefa em segundo plano for executada por mais de 20 minutos, ela será descartada pelo servidor porque foi considerada muito antiga para ser mantida. As tarefas em segundo plano não devem ser executadas por mais de 20 minutos e, se isso acontecer, devem ser divididas em várias tarefas em segundo plano.
