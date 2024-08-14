---
title: suppress_transaction_trace (API do agente Python)
type: apiDoc
shortDescription: Evita que a transação atual gere um rastreamento da transação.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call prevents a transaction from producing a transaction trace.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.suppress_transaction_trace(flag=True)
```

Evita que a transação atual gere um rastreamento da transação.

## Descrição

Esta chamada evita que a transação atual produza um [trace da transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces).

Você pode usar isso se tiver uma transação recorrente de longa duração da qual raramente deseja ver um rastreamento da transação. No entanto, nosso algoritmo para selecionar rastreamento de transação já desprioriza rastreamento para transação que gerou recentemente um trace. Assim, esta chamada geralmente não é necessária.

Para cancelar a supressão de uma transação suprimida anteriormente, você usaria `flag=False`.

<Callout variant="tip">
  Você também pode impedir que uma transação produza rastreio com um dicionário de ambiente WSGI. Para fazer isso, defina a chave `newrelic.suppress_transaction_trace` para a solicitação específica no dicionário de ambiente WSGI transmitido pelo servidor WSGI para o aplicativo WSGI que está sendo monitorado.
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
        Opcional. O padrão é `True`. Se uma transação tiver sido previamente impedida de produzir um trace, você poderá cancelar sua supressão definindo o sinalizador como `False`.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Nenhum.

## Exemplos

### Suprimir rastreamento da transação [#trace-example]

Neste exemplo, você tem alguns URLs ou visualizações onde seus clientes costumam fazer upload de arquivos. Essas transações frequentemente lentas geram rastreamento de transação com mais frequência do que é útil, e você gostaria de desativar o rastreamento de transação nelas para receber rastreamentos mais relevantes.

Para desativar o rastreamento dessas transações, execute o seguinte procedimento no local em que a transação está sendo executada:

```py
import newrelic.agent
newrelic.agent.suppress_transaction_trace()
```
