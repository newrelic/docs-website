---
title: Responda a interrupções com monitoramento de erros
metaDescription: Learn how to monitor your system so you can quickly identify and resolve many error occurrences fast.
freshnessValidatedDate: '2023-07-18T00:00:00.000Z'
translationType: machine
---

Erros estão fadados a acontecer. Mesmo com uma ferramenta de observabilidade, encontrar a origem de um erro não é tão simples quanto você imagina. Pense em um quintal inundado. Você percebe água fluindo perto de sua mangueira, mas a causa da inundação é na verdade uma rachadura em algum lugar da tubulação de água. Se você presumisse que o vazamento da mangueira causou a enchente, acabaria com uma mangueira consertada, mas com um gramado arruinado: um erro caro.

A análise de erros leva você à origem do problema para que possa corrigi-lo antes que a inundação aconteça. Quando uma equipe faz uma nova implantação ou um serviço falha no upstream, você precisa se aprofundar antes de implementar qualquer solução. Não há espaço para suposições na análise de erros.

## Objetivos [#objective]

Esta série de tutoriais mostra como resolver erros críticos e, em seguida, orienta você na redução da contagem geral de erros. Este documento aborda como navegar em nosso recurso [Errors Inbox](/docs/errors-inbox/getting-started) , incluindo como:

* Escolha um serviço para iniciar a análise de erros
* Escolha um grupo de erros que indique uma interrupção

## Pré-requisitos [#prereq]

Para monitor o desempenho do seu aplicativo, você usará um agente criado especificamente para o idioma do seu aplicativo. Clicar em um logotipo direciona você para um instalador guiado na interface do New Relic, onde você será orientado durante a instalação e configuração do agente.

<TechTileGrid>
  <TechTile
    name="Go agent"
    icon="logo-go"
    to="https://one.newrelic.com/nr1-core?state=985d4005-ba90-a8c7-1da1-2af34539b03b"
  />

  <TechTile
    name="Java agent"
    icon="logo-java"
    to="https://one.newrelic.com/nr1-core?state=80d18bcb-4919-1fcb-2b77-9406838eb916"
  />

  <TechTile
    name=".NET agent"
    icon="logo-dotnet"
    to="https://one.newrelic.com/nr1-core?state=30e93090-6dfa-6b70-8e75-472f54414355"
  />

  <TechTile
    name="Node.js agent"
    icon="logo-nodejs"
    to="https://one.newrelic.com/marketplace/install-data-source?state=be2e62fa-cc3b-c428-27c4-8d662c9e80a1"
  />

  <TechTile
    name="PHP agent"
    icon="logo-php"
    to="https://one.newrelic.com/nr1-core?state=aa633b41-72d4-009c-3abf-55dcf64894fe"
  />

  <TechTile
    name="Python agent"
    icon="logo-python"
    to="https://one.newrelic.com/nr1-core?state=20fda75b-58fb-a92a-f9e1-7b052035c6e8"
  />

  <TechTile
    name="Ruby agent"
    icon="logo-ruby"
    to="https://one.newrelic.com/nr1-core?state=d69143ab-605c-579b-25bf-cc6e5fee5b80"
  />
</TechTileGrid>

Depois de instalar um agente, acesse <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT> e selecione seu aplicativo. Se você ainda não vê muitos dados, afaste-se por um tempo e deixe o agente coletar dados em tempo real enquanto seu aplicativo é executado. Este tutorial também pressupõe que você tenha alguma familiaridade com <InlinePopover type="alertsTutorial"/>, mesmo que ainda não tenha criado seu primeiro alerta.

## Detecte e rastreie erros em seu aplicativo [#detect-error]

Agora que seus aplicativos são um instrumento, a New Relic está capturando dados sobre seus serviços. Isso inclui dados sobre ocorrências de erros no seu aplicativo.

<Steps>
  <Step>
    ## Pense no usuário final

    Alerta avisa que existe um problema: é a água do seu gramado. Mas o alerta não fornecerá todo o contexto. É aí que entra a sua Errors Inbox .

    Imagine que você é responsável por alguns aplicativos em um site de comércio eletrônico. Você recebeu dois alertas para dois componentes, um para check-out e outro para pesquisa de estoque. Você está recebendo apenas relatórios de que a funcionalidade de pesquisa está falhando para o usuário final, mas o componente de check out funciona bem. Você pode acreditar que a função de check-out é mais importante, mas é fundamental separar suas crenças de suas práticas de observabilidade.

    Esta prática se aplica mesmo que o usuário final não tenha relatado nada. Ao notar falhas nos serviços, você pode se perguntar o seguinte:

    * A experiência do usuário final é um problema?
    * Como deve ser a experiência deles?
    * Que comportamento eles estão experimentando atualmente?
  </Step>

  <Step>
    ## Determine quais serviços estão relatando erros

    Vamos ver como isso pode parecer na prática. Ao visualizar a página <DNT>**All entities**</DNT> , você percebe quatro serviços em alerta.

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_all_entities.webp"
    />

    Depois de se fazer as perguntas da primeira etapa, você sabe que:

    * O usuário final está tendo dificuldades com ações de compra.
    * Seu site deve exibir apenas itens em estoque.
    * Seu site exibe todos os produtos, para que os clientes possam comprar itens fora de estoque.

      Você identificou que `api-gateway` é uma dependência crítica para seu inventário. É aqui que você começará sua análise de erros.
  </Step>

  <Step>
    ## Localize o que mudou [#source]

    Você tem seu ponto de entrada em seu sistema, então agora pode analisar os erros que afetam seu aplicativo. Na página de resumo `api-gateway` , clique na guia <DNT>**Errors**</DNT> em <DNT>**Triage**</DNT>. Sua página de erros filtra seus dados para uma visualização somente de erros.

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-inbox-page.webp"
    />

    Há pelo menos seis grupos de erros relatados em `api-gateway`. Os grupos de erros aparecem de uma dúzia a milhares de ocorrências em seu aplicativo.

    A princípio parece faltar granularidade, mas sua série temporal fornece informações suficientes para apontar o que mudou ao longo do tempo. Vamos detalhar isso:

    * Com base apenas no número de ocorrências, seu primeiro instinto pode lhe dizer para começar com `ActivemModel:::ValidationError` , pois ele tem 4.000 ocorrências. Porém, se você observar a série temporal, verá que seus altos e baixos são relativamente consistentes. Este poderia ser um erro esperado, mas vejamos os outros cinco.
    * O grupo de erros `Net::OpenTimeOut` tem um padrão semelhante e, na verdade, compõe quatro dos seis grupos de relatórios. Em cada grupo de erros, você pode ver altos e baixos consistentes que se estendem antes do incidente. Com o mesmo nome e padrões semelhantes, podemos inferir que este também é um erro esperado.
    * Nossa última opção é `JsonapiClient:::Notfound`. Assim como `ActivemModel:::ValidationError`, ele tem um formato distinto e gera relatórios de forma consistente. Embora não tenha muitas ocorrências, a série temporal é anômala o suficiente para que valha a pena aprofundar um pouco mais.
  </Step>

  <Step>
    ## Ajustar a série temporal [#timeseries]

    Para ter certeza, ajuste o parâmetro de tempo para mostrar os padrões das últimas 12 horas:

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-anomaly.webp"
    />

    Com o ajuste, você verá que `ActivemModel:::ValidationError`tem um padrão imutável de altos e baixos, mas seu `JsonapiClient:::Notfound` aumentou dramaticamente na última hora. Este é um bom ponto de partida.

    Saber quando algo aconteceu é uma peça crítica para se aproximar da fonte. Tendo uma compreensão completa do espaço do problema, agora você pode se aprofundar na fonte.
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-errors/solve-critical-errors","title":"Próxima Etapa","body":"Depois de selecionar seus grupos de erros, a página de resumo de erros exibe dados de atributo sobre falhas em seu sistema."}}/>
