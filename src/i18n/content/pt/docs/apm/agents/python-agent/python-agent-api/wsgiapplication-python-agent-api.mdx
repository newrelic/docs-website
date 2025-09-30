---
title: wsgi_application (API do agente Python)
type: apiDoc
shortDescription: Monitor transações da web marcando o ponto de entrada da aplicação WSGI.
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
newrelic.agent.wsgi_application(application=None, name=None, group=None, framework=None)
```

Monitor transações da web marcando o ponto de entrada da aplicação WSGI.

## Descrição

`wsgi_application` é um decorador Python usado para monitor transações da web instrumentando o ponto de entrada da aplicação WSGI. O agente Python oferece suporte automaticamente [à maioria das estruturas e servidores](/docs/agents/python-agent/getting-started/compatibility-requirements-python-agent) que usam WSGI. Se sua framework ou servidor web não for compatível, talvez seja necessário usar esta API como parte do [processo de integração avançada](/docs/agents/python-agent/installation-configuration/python-agent-integration#manual-integration).

Se não for possível usar o decorador `wsgi_application` , você poderá usar um destes outros formatos de chamada:

* <DNT>
    **The wrapper:**
  </DNT>

  A chamada do wrapper é `WSGIApplicationWrapper`. É possível usar o wrapper em mais de um local para componentes distintos do aplicativo WSGI que podem estar empilhados. Nesse caso, o primeiro wrapper encontrado marca o início da transação e o agente determina o aplicativo de destino com base nesse primeiro wrapper (e ignora os subsequentes).

* <DNT>
    **The path-based wrapper:**
  </DNT>

  A chamada do wrapper baseada em caminho é `wrap_wsgi_application`. Use isto se não for possível fazer referência ao objeto WSGI como uma variável no escopo de instrumentação. Isso leva o mesmo parâmetro do decorador com parâmetros adicionais `module` e `object_path` .

Para obter uma explicação dos motivos para usar o decorador em vez dos wrappers, consulte [Diferentes formatos de chamada](/docs/python-agent-api-different-call-forms).

## Parâmetro

### Parâmetro decorador

```py
newrelic.agent.wsgi_application(application=None, name=None, group=None, framework=None)
```

O decorador `wsgi_application` usa estes parâmetros:

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

        O aplicativo, mesmo se especificado, ainda poderá ser substituído se `newrelic.app_name` for definido no aplicativo WSGI por dicionário de ambiente de solicitação.
      </td>
    </tr>

    <tr>
      <td>
        `name`

        _corda_
      </td>

      <td>
        Opcional, raramente usado. Define um nome de transação para todas as solicitações capturadas por meio do ponto de entrada WSGI. Geralmente não utilizado, porque normalmente não se deseja que todas as transações tenham o mesmo nome (ver também [questão de agrupamento métrico](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues)).
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
newrelic.agent.WSGIApplicationWrapper(wrapped, application=None, name=None, group=None, framework=None)
```

Isso leva todos os [parâmetros](#decorator-parameters) exigidos por `wsgi_application` além de um parâmetro `wrapped` :

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
        Obrigatório. O objeto WSGI a ser empacotado.
      </td>
    </tr>
  </tbody>
</table>

### Parâmetro wrapper baseado em caminho [#path-based-parameters]

```py
newrelic.agent.wrap_wsgi_application(module, object_path, application=None, name=None, group=None, framework=None)
```

Além do [parâmetro](#decorator-parameters) exigido por `wsgi_application`, esta chamada requer parâmetros adicionais `module` e `object_path` :

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
        Obrigatório. O módulo que contém o objeto WSGI.
      </td>
    </tr>

    <tr>
      <td>
        `object_path`

        _corda_
      </td>

      <td>
        Obrigatório. Representa o método de classe ou método para localizar o objeto WSGI em um arquivo.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### exemplo wsgi_application [#decorator-example]

Um exemplo do decorador sendo chamado sem o parâmetro opcional `application` :

```py
@newrelic.agent.wsgi_application()
def application(environ, start_response):
    status = '200 OK'
    output = 'Hello World!'

    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(output)))]
    start_response(status, response_headers)

    return [output]
```

### Exemplo de WSGIApplicationWrapper [#wrapper-example]

Um exemplo de uso do `WSGIApplicationWrapper`, que pode ser necessário se o decorador `wsgi_application` não funcionar:

```py
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

application = newrelic.agent.WSGIApplicationWrapper(application)
```

### exemplo wrap_wsgi_application [#path-based-example]

Um exemplo de uso do wrapper baseado em caminho:

```py
import newrelic.agent
newrelic.agent.initialize('newrelic.ini')

class Application(object):
    def application(self, environ, start_response):
        status = '200 OK'
        response_headers = [('Content-type', 'text/plain')]
        start_response(status, response_headers)
        return [b'Hello World']

newrelic.agent.wrap_wsgi_application(__name__, 'Application.application')
```
