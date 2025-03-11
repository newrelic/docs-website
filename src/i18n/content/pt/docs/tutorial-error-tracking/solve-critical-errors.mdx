---
title: Resolva seus erros críticos
metaDescription: Learn how to manage a high number of errors in your app.
freshnessValidatedDate: '2023-07-18T00:00:00.000Z'
translationType: machine
---

Na primeira parte deste tutorial, escolhemos um grupo de erros para investigar mais detalhadamente. Na segunda parte, investigaremos uma nova página que exibe atributo, log e rastreamento sobre o erro.

Esta parte do tutorial orienta você por dois caminhos recomendados para analisar um erro: seu log e rastreamento de pilha.

## Objetivos [#objectives]

Este documento se baseia no problema definido no documento [Responder a interrupções de serviço](/docs/tutorial-errors/respond-outages) desta série de tutoriais. Neste documento, você:

* Localize o código de erro associado a uma API com falha no log
* Use o rastreamento de pilha para descobrir onde o erro está ocorrendo no seu código

## Localize a origem de um erro com log e rastreamento de pilha [#analyze]

O resumo dos erros conta a história por trás dos seus grupos de erros. Dependendo de como você configurou o New Relic, cada serviço pode exibir diferentes tipos de informações sobre um erro. Por exemplo, se você tiver desabilitado distributed tracing, não verá tantos detalhes sobre serviços externos no seu rastreamento.

<Steps>
  <Step>
    ## Abra a janela Detalhes do log

    Observando nosso exemplo, o agente APM extraiu o log relacionado a `api-gateway`, fornecendo dados de evento sobre nosso erro:

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-logs.webp"
    />

    Nosso recurso de logs em contexto formata suas informações de log, embora você também tenha a opção de investigar o log não formatado.
  </Step>

  <Step>
    ## Encontre o ponto de falha em seu sistema

    Dependendo da natureza do log, você pode ter mais ou menos detalhes de log para classificar. Como você gastou tempo restringindo antecipadamente o serviço mais próximo da falha e escolhendo o provável grupo de erros, você terá tempo para ler seu log.

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-logs-zoomed.webp"
    />

    De acordo com seu log, seu problema é:

    * Um erro de tempo limite: `error.error.code: ETIMEDOUT`
    * Relacionado à API de seus clientes: `error.endpoint: customers-api-internal`
    * Independentemente do tipo de solicitação enviada à API do cliente: `error.request: /api/customers/search/Kirlin/-/`

      Você tem contexto suficiente para unir tudo. Você conclui que há uma falha de dependência: todas as chamadas para a API de clientes estão atingindo o tempo limite e causando falha nas solicitações upstream de `api-gateway` .
  </Step>

  <Step>
    ## Encontre o ponto de falha no seu código com rastreamento de pilha

    Quando você executa seu código, o New Relic captura suas exceções ou erros de tempo de execução e os organiza em uma visualização em cascata. Este é o seu rastreamento de pilha. Dependendo da linguagem usada, esse rastreamento de pilha fornece mensagens detalhadas e os locais dos pontos de falha.

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-stack-traces.webp"
    />

    Embora seu log informe o que está causando o erro, seu rastreamento de pilha identifica onde. Você pode usar esse rastreamento de pilha para descobrir exatamente onde um erro está ocorrendo em seu código e, em seguida, conectar esses erros à equipe proprietária.
  </Step>

  <Step>
    ## Abra em seu IDE do New Relic

    Para abrir seu código do New Relic, você precisa [instalar CodeStream](/docs/codestream/start-here/install-codestream). Este é um recurso opcional, mas altamente recomendado, que permite abrir seu IDE diretamente do rastreamento de pilha:

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-IDE.webp"
    />
  </Step>
</Steps>

## Qual é o próximo? [#next]

Reagir a um erro e encontrar a causa direta de uma interrupção é apenas parte do processo de lidar com erros em seu aplicativo. Agora que cobrimos como descrever, diagnosticar e encontrar a origem de uma interrupção, você pode encaminhar os erros para as equipes relevantes.

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-errors/route-teams","title":"Próxima Etapa","body":"Agora que você sabe onde seu código está falhando, aprenda a encaminhar os erros para as equipes corretas."}}
  previousStep={{"path":"/docs/tutorial-errors/respond-outages","title":"Passo anterior","body":"Aprenda como escolher serviços e grupos de erros mais próximos do ponto de falha."}}
/>
