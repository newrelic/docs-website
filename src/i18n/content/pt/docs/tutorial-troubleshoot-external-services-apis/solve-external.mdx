---
title: Resolva seu problema de serviço externo
metaDescription: Resolve the root cause of your API or external service problems
freshnessValidatedDate: '2023-09-02T00:00:00.000Z'
translationType: machine
---

Agora você identificou a API ou serviço externo que requer atenção. Este tutorial orienta você pelas etapas necessárias para corrigir os problemas.

Observe que não existe uma solução única para problemas com API e serviços externos. Tome as ideias deste tutorial como um ponto de partida e mergulhe sempre que descobrir algo.

## Objetivos

Este documento usa `Sms notification`, o serviço externo que identificamos [no documento do tutorial anterior](/docs/tutorial-external-services/respond-external), como exemplo de API ou serviço externo problemático. Este documento cobre:

* Procurando anomalias em gráficos métricos
* Usando rastreamento para encontrar a causa raiz

## Identifique e resolva a causa raiz

Você já usou a visualização de mapa para identificar o serviço externo problemático, mas podemos usá-la para ir ainda mais fundo:

<Steps>
  <Step>
    ## Identificar com anomalia métrica

    Na visualização do mapa, passe o mouse sobre a API ou serviço externo problemático e selecione <DNT>**Show entity preview**</DNT>.

    <img
      title="The preview pane for an external service"
      alt="The preview pane for an external service"
      src="/images/apm_screenshot-crop_maps-preview.webp"
    />

    Isso abre um painel onde você obtém uma visão geral do estado geral do serviço. Você já usou algumas dessas métricas para identificá-lo como o problema, mas é útil dar uma olhada mais profunda aqui. Fique atento a:

    * Picos nas paradas.
    * Obviamente elevada taxa de resposta ou taxas de transferência.
    * As taxas de resposta e taxas de transferência atingiram altos e baixos ao mesmo tempo.

      Se você identificar uma anomalia, use o seletor de hora no canto superior direito para expandir o intervalo de tempo que você está vendo. Isso é útil para identificar uma anomalia em oposição a um padrão.

      Você pode ver na captura de tela acima que nada se destaca, exceto que as taxas de transferência são um pouco mais altas do que você esperava. Não há nada com que se preocupar imediatamente.
  </Step>

  <Step>
    ### Encontre um problema no nível do código com rastreamento

    Passe o mouse sobre o serviço externo problemático novamente e desta vez clique em <DNT>**View traces**</DNT>.

    <img
      title="The trace pane for an external service"
      alt="The trace pane for an external service"
      src="/images/apm_screenshot-crop_maps-trace.webp"
    />

    Isso exibe vários gráficos sobre o rastreamento envolvido nesse serviço. Nesse caso, há um único trace chamado `Controller/Sinatra//purchase` que permite acompanhar os dados criados desde o clique do usuário no botão comprar até a chamada de API que envia uma notificação por SMS.

    Clique o mais profundamente que achar útil, mas concentre-se novamente em encontrar anomalias ou erros no gráfico. Por exemplo, você pode seguir o trace até a chamada de API que descriptografa o número de telefone armazenado de um usuário. Um erro aqui pode revelar todo o problema. Se a chamada de descriptografia falhar e nunca retornar um número de telefone válido, seu usuário nunca receberá uma notificação por telefone.

    Isso também explicaria por que você não viu erros nos gráficos `Sms notification` . Essa API estava funcionando corretamente, mas uma API mais a montante estava fornecendo dados que na verdade não serviam a um propósito.
  </Step>

  <Step>
    ## Use os dados para identificar erros lógicos

    Nem toda solução vem diretamente de erros ou anomalias. A causa raiz pode ser muito mais mundana.

    Por exemplo, digamos que você explorou todos os gráficos relacionados à API `Sms notification` . Você também examinou todos os trace e não identificou nenhum erro ou anomalia estranha. Tudo parece funcionar bem, mas seus clientes ainda não estão recebendo notificações.

    Você se lembra de olhar o gráfico de taxas de transferência de `Sms notification` e de repente perceber que pode ter atingido o limite de compras fornecido pelo seu processador de pagamentos. A API deles recebeu sua chamada, mas como você atingiu sua cota, ela simplesmente não fez nada com a solicitação recebida. Isso nem mesmo gerou um erro para você.
  </Step>
</Steps>

## Qual é o próximo? [#next]

Agora que você corrigiu seus problemas de API e rastreou todo o mapa do sistema, está pronto para explorar mais um pouco nossa plataforma:

* Seu aplicativo está lento? Aprenda como fazer a triagem e diagnosticar a latência em seu aplicativo com nosso tutorial [Meu aplicativo é lento](/docs/tutorial-app-slow/root-causes) .
* Se você tiver um dia de pico de demanda chegando, saiba como a New Relic pode ajudá-lo com [o planejamento de capacidade](/docs/tutorial-peak-demand/get-started).
* Quer criar alertas de alta qualidade? Nosso [tutorial de alerta](/docs/tutorial-create-alerts/create-new-relic-alerts/) pode ajudá-lo a configurar um sistema de alerta.

<UserJourneyControls previousStep={{"path":"/docs/tutorial-external-services/respond-external","title":"Passo anterior","body":"Responda aos problemas da API e configure o New Relic para o seu aplicativo."}}/>
