---
title: register_application (API do agente Python)
type: apiDoc
shortDescription: Registra o agente Python imediatamente. Usado para inicialização manual do agente.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python agent API: Registers the Python agent immediately, instead of allowing it to be done more passively.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.register_application(name=None, timeout=None)
```

Registra o agente Python imediatamente. Usado para inicialização manual do agente.

## Descrição

Quando [`initialize`](/docs/agents/python-agent/python-agent-api/initialize) é chamado, ele configura o agente Python, mas não registra o agente no [coletor](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector). Esta chamada registra o agente no coletor.

Isso é usado principalmente para [transações instrumentadas em segundo plano](/docs/agents/python-agent/python-agent-api/background_task) fora da Web usando a API. Quando usado com transação fora da web, ligue para `register_application` assim que possível após a chamada para `initialize` .

Para transferência da web, o agente normalmente se registra automaticamente quando ocorre a primeira solicitação da web ou tarefa em segundo plano, o agente recebe sua [configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/configure-agent#ssc) do coletor. Como o registro pode levar cerca de um segundo, os detalhes geralmente são perdidos desde a primeira transação. Você pode coletar todos esses dados forçando o registro com `register_application`, embora isso signifique que seu aplicativo poderá aguardar a conclusão do registro antes de atender qualquer solicitação da Web ou executar tarefas em segundo plano.

Se o próprio script executar o servidor WSGI, chame `register_application` no thread do programa principal no arquivo de script principal. Se você usar Apache/mod_wsgi ou uWSGI, faça a chamada a partir do arquivo de script WSGI e faça a chamada imediatamente após `initialize`<DNT>**.**</DNT>

Esta chamada retorna o objeto do aplicativo, da mesma forma que [`application`](/docs/agents/python-agent/python-agent-api/application) faz. O objeto de aplicativo é usado para obter uma referência ao aplicativo monitor de agente atual e é usado por algumas chamadas de API do agente Python.

### Evite ligar durante o bloqueio de importação global [#globl-lock]

Não chame `register_application` com um tempo limite diferente de zero quando o bloqueio de importação global do Python for mantido. Em outras palavras, não o chame em um arquivo de módulo em escopo global enquanto o módulo estiver sendo importado. Fazer isso pode resultar em um impasse temporário com o thread em segundo plano criado por esta chamada (o impasse não será quebrado até que o tempo limite expire).

Observe que muitos servidores WSGI importam o módulo que contém o aplicativo WSGI por meio dos mecanismos padrão de importação de módulo Python. Nesses casos, o bloqueio de importação global será mantido e o problema de impasse descrito acima poderá ocorrer.

Para Gunicorn: O problema de impasse descrito também pode ocorrer ao usar o Gunicorn. O problema é que acionar `register_application` do módulo WSGI não é seguro, porque pré-carrega o módulo no processo pai. Para usar `register_application` com Gunicorn (com ou sem tempo limite), chame-o a partir de um retorno de chamada `post_fork()` . Isso não é um problema com o Apache/mod_wsgi, já que essas ferramentas foram projetadas para não fazer isso, portanto é seguro criar threads em segundo plano quando o aplicativo WSGI é carregado.

### Chamada após bifurcação do processo de trabalho [#worker-processes]

Se você estiver registrando a transação no processo do trabalhador filho, não chame `register_application` no processo pai antes que os processos do trabalhador filho sejam bifurcados. Se você chamasse `register_application` antes da bifurcação, o encadeamento do agente em segundo plano seria eliminado quando o processo fosse bifurcado. Como o thread pai está reportando dados ao coletor, o agente não poderá reportar dados do processo de trabalho filho.

## Parâmetro

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
        Opcional. O nome do aplicativo. Se definido, substitui o nome do aplicativo definido na configuração do agente Python.
      </td>
    </tr>

    <tr>
      <td>
        `timeout`

        _int_ ou _float_
      </td>

      <td>
        O número de segundos que o app tentará registrar antes de desistir e enviar uma resposta; o que significa que esta linha será bloqueada até que o New Relic seja iniciado ou o tempo limite seja excedido. Um valor `0` significa que o aplicativo não aguardará o registro antes de atender às solicitações. O padrão é `0`. Se estiver executando um aplicativo da web, definir esse valor não é recomendado, pois bloqueará e atrasará o aplicativo durante a inicialização do New Relic. Se for instrumentado uma única execução de programa ou tarefa, onde o processo é executado uma vez e termina imediatamente, é recomendável configurar isso, caso contrário o New Relic não será iniciado a tempo de capturar as informações.

        Este valor fornece o número máximo de segundos que o chamador deve ser bloqueado antes que o controle seja retornado e o chamador tenha permissão para prosseguir. Sem valor, a chamada usa a configuração [`startup_timeout`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#startup-timeout) definida globalmente na configuração do agente, que é `0.0` por padrão.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retorna um objeto de aplicativo que pode ser usado por outras chamadas de API do agente Python.

## Exemplos

### Registrando uma tarefa em segundo plano [#register-example]

Este exemplo registra uma tarefa em segundo plano que não é da Web com um tempo limite longo. Normalmente, para um aplicativo da web, você teria um tempo limite muito curto (o padrão é 0), mas você pode definir um tempo limite mais longo para uma tarefa não-web pouco frequente, para garantir que a inicialização e o registro ocorram.

```py
import newrelic.agent

newrelic.agent.initialize('newrelic.ini')
newrelic.agent.register_application(timeout=10.0)

@newrelic.agent.background_task()
def main():
    pass

if __name__ == '__main__':
    main()
```
