---
title: set_background_task (API do agente Python)
type: apiDoc
shortDescription: Marca uma transação como uma &quot;tarefa em segundo plano&quot;.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python agent API: This call changes a web transaction to a non-web "background task".'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.set_background_task(flag=True)
```

Marca uma transação como uma "tarefa em segundo plano".

## Descrição

Esta chamada classifica uma [transação](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction) como uma “tarefa em segundo plano”. As tarefas de transação marcadas como background ficam visíveis na interface como transações fora da web. Você também pode usar esta chamada para reclassificar uma tarefa em segundo plano do monitor como uma transação da web, passando o parâmetro `False` .

Esta API reclassifica uma transação existente como uma transação de tarefa em segundo plano. Se não houver transação existente, esta chamada não funcionará.

A designação "tarefa em segundo plano" é normalmente usada para transações fora da web (por exemplo: processos de trabalho, sistemas baseados em trabalho ou script independente), mas você também pode querer designar uma transação da web como uma "tarefa em segundo plano" para separar de suas outras transações do aplicativo. Por exemplo, você tem uma transação da web de longa duração que está distorcendo sua pontuação Apdex ou tempo médio de resposta.

O agente identifica uma transação de monitor como uma transação da web ou tarefa em segundo plano no início da transação, com base no tipo de wrapper de ponto de entrada que iniciou o monitoramento. Para criar inicialmente uma tarefa em segundo plano (em vez de marcar uma transação da web como uma tarefa em segundo plano), você usaria `background_task`. Para obter um tutorial sobre como criar tarefas em segundo plano, consulte [monitor tarefas, scripts e funções que não sejam da Web](/docs/agents/python-agent/supported-features/python-background-tasks).

<Callout variant="tip">
  Você também pode marcar uma transação da web como uma tarefa em segundo plano no dicionário de ambiente WSGI. Para fazer isso, defina a chave `newrelic.set_background_task` para a solicitação específica no dicionário de ambiente WSGI transmitido pelo servidor WSGI em seu aplicativo WSGI de destino.
</Callout>

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
        `flag`

        _boleano_
      </td>

      <td>
        Opcional. O valor padrão é `True`. Use `False` para classificar a transação como uma transação da web.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Nenhum.

## Exemplos

### Configurando solicitação da web para tarefa em segundo plano [#bg-task-example]

Um exemplo de configuração de uma transação da web para uma tarefa em segundo plano que não seja da web:

```py
def wsgi_app(environ, start_response):
    newrelic.agent.set_background_task()
```

### Reclassificando uma tarefa em segundo plano como uma transação da web [#bg-task-example-2]

Às vezes, você pode querer classificar uma tarefa em segundo plano como uma transação da web, para poder vê-la com as transações da web de outros aplicativos. Para fazer isso, adicione esta chamada onde uma tarefa de segundo plano do monitor é executada:

```py
import newrelic.agent
newrelic.agent.set_background_task(False)
```
