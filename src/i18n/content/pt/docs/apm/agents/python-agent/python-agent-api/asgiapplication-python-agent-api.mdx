---
title: asgi_application (API do agente Python)
type: apiDoc
shortDescription: Monitor transações da web marcando o ponto de entrada do aplicativo ASGI.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Instruments an application''s WSGI entry point to capture web requests.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.asgi_application(application=None, name=None, group=None, framework=None)
```

Monitor transações da web marcando o ponto de entrada do aplicativo ASGI.

## Descrição

`asgi_application` é um decorador Python usado para monitor transações da web instrumentando o ponto de entrada da aplicação ASGI. O agente Python suporta automaticamente [a maioria das estruturas e servidores](/docs/agents/python-agent/getting-started/compatibility-requirements-python-agent) que usam ASGI. Se sua framework ou servidor web não for compatível, talvez seja necessário usar esta API como parte do [processo de integração avançada](/docs/agents/python-agent/installation-configuration/python-agent-integration#manual-integration).

Se não for possível usar o decorador `asgi_application` , você poderá usar um destes outros formatos de chamada:

* <DNT>
    **The wrapper:**
  </DNT>

  A chamada do wrapper é `ASGIApplicationWrapper`. É possível usar o wrapper em mais de um local para componentes distintos do aplicativo ASGI que podem estar empilhados. Nesse caso, o primeiro wrapper encontrado marca o início da transação e o agente determina o aplicativo de destino com base nesse primeiro wrapper (e ignora os subsequentes).

* <DNT>
    **The path-based wrapper:**
  </DNT>

  A chamada do wrapper baseada em caminho é `wrap_asgi_application`. Use isto se não for possível fazer referência ao objeto ASGI como uma variável no escopo de instrumentação. Isso leva o mesmo parâmetro do decorador com parâmetros adicionais `module` e `object_path` .

Para obter uma explicação dos motivos para usar o decorador em vez dos wrappers, consulte [Diferentes formatos de chamada](/docs/python-agent-api-different-call-forms).

## Parâmetro

### Parâmetro decorador

```py
newrelic.agent.asgi_application(application=None, name=None, group=None, framework=None)
```

O decorador `asgi_application` usa estes parâmetros:

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

        _string_ ou _objeto de aplicativo_
      </td>

      <td>
        Opcional. O nome do aplicativo a ser associado a esses dados. O padrão é `None`. Se não houver valor, o agente usará o nome do aplicativo [especificado na configuração do agente](/docs/agents/python-agent/installation-configuration/python-agent-configuration#app_name).

        Se uma sequência for fornecida, ela deverá ser o nome exato do aplicativo e não poderá ser uma lista de nomes de aplicativos. Para obter mais informações sobre como gerar um objeto de aplicativo, consulte o método [`application`](/docs/agents/python-agent/python-agent-api/application) .
      </td>
    </tr>

    <tr>
      <td>
        `name`

        _corda_
      </td>

      <td>
        Opcional, raramente usado. Define um nome de transação para todas as solicitações capturadas através do ponto de entrada ASGI. Geralmente não utilizado, porque normalmente não se deseja que todas as transações tenham o mesmo nome (ver também [questão de agrupamento métrico](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues)).
      </td>
    </tr>

    <tr>
      <td>
        `group`

        _corda_
      </td>

      <td>
        Opcional, raramente usado. O `group` representa a estrutura de nomenclatura do parâmetro `name` . Definir isso cria uma [subcategoria de tipo de transação](/docs/apm/applications-menu/monitoring/transactions-page#tx_functions). Semelhante a `name`, raramente deve ser usado porque geralmente você não deseja que o aplicativo inteiro seja relatado como um nome ou categoria de transação.
      </td>
    </tr>

    <tr>
      <td>
        `framework`

        _tuple_
      </td>

      <td>
        Opcional. Uma tupla com duas strings representando o nome da framework e o número da versão. Por exemplo: `('Flask', '0.12.2')`
      </td>
    </tr>
  </tbody>
</table>

### Parâmetro do wrapper

```py
newrelic.agent.ASGIApplicationWrapper(wrapped, application=None, name=None, group=None, framework=None)
```

Isso leva todos os [parâmetros](#decorator-parameters) exigidos por `asgi_application` além de um parâmetro `wrapped` :

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

        _objeto_
      </td>

      <td>
        <DNT>**Required**</DNT>. O objeto ASGI a ser empacotado.
      </td>
    </tr>
  </tbody>
</table>

### Parâmetro wrapper baseado em caminho [#path-based-parameters]

```py
newrelic.agent.wrap_asgi_application(module, object_path, application=None, name=None, group=None, framework=None)
```

Além do [parâmetro](#decorator-parameters) exigido por `asgi_application`, esta chamada requer parâmetros adicionais `module` e `object_path` :

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

        _objeto_ ou _string_
      </td>

      <td>
        <DNT>**Required**</DNT>. O módulo que contém o objeto ASGI.
      </td>
    </tr>

    <tr>
      <td>
        `object_path`

        _corda_
      </td>

      <td>
        <DNT>**Required**</DNT>. Representa o método de classe ou método para localizar o objeto ASGI em um arquivo.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### asgi_application example [#decorator-example]

Um exemplo do decorador sendo chamado sem o parâmetro opcional `application` :

```py
@newrelic.agent.asgi_application()
async def application(scope, receive, send):
    await send(
        {
            "type": "http.response.start",
            "status": 200,
            "headers": [(b"Content-type", b"text/plain")]
        }
    )
    await send(
        {
            "type": "http.response.body",
            "body": b"Hello World!"
        }
    )
```

### Exemplo ASGIApplicationWrapper [#wrapper-example]

Um exemplo de uso do `ASGIApplicationWrapper`, que pode ser necessário se o decorador `asgi_application` não funcionar:

```py
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")
from django.core.asgi import get_asgi_application
application = get_asgi_application()

application = newrelic.agent.ASGIApplicationWrapper(application)
```

### wrap_asgi_application example [#path-based-example]

Um exemplo de uso do wrapper baseado em caminho:

```py
import newrelic.agent
newrelic.agent.initialize('newrelic.ini')

class Application:
   def __init__(self, scope):
      self.scope = scope

   async def __call__(self, receive, send):
      await send({"type": "http.response.start", "status": 200})
      await send({"type": "http.response.body", "body": b"Hello World!"})

newrelic.agent.wrap_asgi_application(__name__, 'Application')
```
