---
title: Agente altera o cabeçalho Content-Type para aplicativos WCF (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting steps if data does not appear in your app after you installed the New Relic .NET agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Com o agente .NET habilitado para um aplicativo Windows Communication Foundation (WCF), o cabeçalho de resposta `Content-Type` é alterado inesperadamente para `application/xml`.

## Solução

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Basic solutions**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Desabilite o recurso de Rastreamento Multiaplicativo (CAT).
      </td>

      <td>
        Leia sobre como [alterar a configuração do CAT](/docs/agents/net-agent/configuration/net-agent-configuration#cross_application_tracer).

        Se precisar que o CAT permaneça habilitado, consulte as outras soluções.
      </td>
    </tr>

    <tr>
      <td>
        Use o recurso distributed tracing (DT) em vez de CAT.
      </td>

      <td>
        Leia sobre como [habilitar a configuração DT](/docs/agents/net-agent/configuration/net-agent-configuration#distributed_tracing).

        DT é uma forma nova e aprimorada de realizar rastreamento e possui recurso aprimorado, comparado ao CAT, na interface New Relic.

        A DT não requer modificações nos cabeçalhos de resposta e não será afetada pela alteração dos cabeçalhos de resposta.
      </td>
    </tr>

    <tr>
      <td>
        Adicione o cabeçalho `Content-Type` desejado à mensagem e `OperationContext`.
      </td>

      <td>
        Esta solução requer que você modifique o código do seu aplicativo.
      </td>
    </tr>
  </tbody>
</table>

## Causa

O recurso Multiaplicativo Tracing (CAT) está habilitado por padrão no agente .NET. CAT funciona adicionando cabeçalhos às mensagens de solicitação e às mensagens de resposta.

Isto é o que acontece no agente:

1. A implementação do método de serviço WCF é executada.
2. O agente tentará adicionar cabeçalhos CAT à resposta do WCF adicionando uma instância `HttpResponseMessageProperty` , com os cabeçalhos CAT, a `OperationContext.Current.OutgoingMessageProperties`.
3. O `DispatchMessageFormatter` personalizado é executado e cria uma nova mensagem onde o cabeçalho `Content-Type` esperado é adicionado diretamente à nova mensagem.
4. A implementação do WCF da Microsoft tentará mesclar as propriedades da mensagem definidas na mensagem de resposta com as propriedades da mensagem definidas em `OperationContext`. Consulte esta [referência da Microsoft em ImmutableDispatchRuntime.cs](https://referencesource.microsoft.com/#System.ServiceModel/System/ServiceModel/Dispatcher/ImmutableDispatchRuntime.cs,725) para obter mais detalhes.
5. O `HttpResponseMessageProperty` não suporta mesclagem, portanto, o valor definido em `OperationContext` é usado em vez do valor definido na mensagem.
6. Como resultado, o cabeçalho `Content-Type` que foi originalmente adicionado à mensagem formatada é descartado e o cabeçalho `Content-Type` padrão é usado.

Como o agente deve oferecer suporte a várias associações WCF, ele precisa adicionar nossos cabeçalhos CAT ao `OperationContext`.
