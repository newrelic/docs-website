---
title: Responder a problemas de API
metaDescription: Learn how to manage APIs and other external services
freshnessValidatedDate: '2023-09-02T00:00:00.000Z'
translationType: machine
---

Quase todos os aplicativos e serviços fazem chamadas para API e outros serviços externos. Quando algo tão simples como pressionar o botão `buy` em um site pode gerar dezenas de chamadas de API, problemas podem surgir. A chamada problemática da API pode resultar em qualquer coisa, desde um pequeno acidente de inventário até uma situação de código vermelho em que seu site não consegue se comunicar com seu processador de pagamentos.

Analisar esses erros é demorado. O seu site não está conseguindo processar compras porque a chamada da transação de compra falhou? Ou talvez seja a sua chamada de autenticação para o seu processador de pagamentos? Talvez nem seja um problema de API externa, mas um problema com sua API de inventário interno. É mesmo um erro de API ou um erro dentro do seu próprio aplicativo? Com o New Relic, você pode resolver esses problemas em uma fração do tempo que levaria manualmente.

<img
  title="Maps overview"
  alt="Home maps overview"
  src="/images/apm_screenshot-crop_maps-home.webp"
/>

## Objetivos [#objective]

Esta série de tutoriais mostra como identificar interações problemáticas de API e como resolvê-las com a plataforma New Relic. Este documento cobre:

* Integrando o New Relic ao seu aplicativo para enviar dados para monitor
* Identificando API problemática por meio da interface de serviços externos

## Integrar New Relic [#integrate]

Antes de monitor ou resolver qualquer coisa, você precisa instalar um agente para coletar os dados que usará.

<Steps>
  <Step>
    ## Instale um agente APM

    Para monitor o desempenho do seu aplicativo, você usará um agente criado especificamente para o idioma do seu aplicativo. Clicar em um logotipo direciona você para a plataforma New Relic, onde você será orientado na instalação e configuração do agente.

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

    Depois de instalar um agente, acesse <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT> e selecione seu aplicativo. Se você ainda não vê muitos dados, afaste-se por um tempo e deixe o agente coletar dados em tempo real enquanto seu aplicativo é executado.
  </Step>

  <Step>
    ## Configuração adicional

    Sua configuração específica pode exigir configuração adicional. Dê uma olhada em nosso [documento de configuração de serviço externo](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-setup/) para obter mais informações.

    Depois de concluir as etapas adicionais do documento acima, vá para <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT> > selecione seu aplicativo > <DNT>**External services**</DNT>. Você deverá ver dados sobre sua API e fluxo de serviços externos.
  </Step>
</Steps>

## Identifique API problemática

Agora você pode acompanhar como seu aplicativo interage com API e outros serviços externos. Vamos usar essas informações para identificar quais API ou serviços externos estão causando problemas:

<Steps>
  <Step>
    ## Pense na causa raiz

    Se você está procurando API ou serviços problemáticos, provavelmente já tem um problema que está pronto para resolver. Talvez o seu usuário não consiga fazer compras ou mesmo login no seu site.

    Seu aplicativo pode fazer chamadas para dezenas ou centenas de API. Enquanto você continua com as etapas a seguir, lembre-se do problema raiz. Se você sabe que tem problemas com compras, concentre-se na API relacionada a compras e transações. Se for um problema de log , você pode se concentrar em chamadas para usuário banco de dados ou serviços de autenticação externa.
  </Step>

  <Step>
    ## Triagem com mapas

    Digamos que você tenha uma loja virtual e tenha recebido e-mails de seu usuário reclamando que não foi avisado quando seu pacote chegou. Você acha isso estranho, pois eles deveriam ter recebido notificação por SMS e e-mail.

    Você tem um instrumento de serviço que cuida de todo o processo de entrega. Vá para a página <DNT>**External services**</DNT> e clique em <DNT>**Maps**</DNT>.

    <img
      title="Map view"
      alt="The maps view"
      src="/images/apm_screenshot-crop_external-maps.webp"
    />

    Isso mostra o relacionamento entre todos os seus próprios serviços e quaisquer serviços externos ou API. Nesse caso, o serviço com o qual você se preocupa na triagem é `Delivery`. Ele é chamado por outro serviço chamado `Order-Composer` e chama outros quatro serviços e API , como você pode ver à direita.
  </Step>

  <Step>
    ## Identificar anomalia

    A visualização do mapa mostra alguns gráficos úteis para rastrear taxas de transferência e tempo de resposta, mas também representa visualmente essas métricas através da espessura e cor da linha entre o seu serviço e os serviços que ele chama.

    <img
      title="RPM"
      alt="Screenshot showing the hover view of map entities"
      src="/images/apm_screenshot-crop_maps-rpm.webp"
    />

    As linhas entre o serviço `Delivery` e sua dependência parecem bastante semelhantes, exceto aquela que aponta para `Sms notification`. Na verdade, ao passar o mouse sobre o serviço de SMS você pode ver que as taxas de transferência são muito mais altas do que o resto da dependência.
  </Step>
</Steps>

Você agora identificou `Sms notification` como a causa provável da frustração do seu usuário. Agora que identificamos um provável suspeito, você pode resolver a raiz do problema.

<UserJourneyControls nextStep={{"path":"/docs/tutorial-external-services/solve-external","title":"Próxima Etapa","body":"Use gráficos métricos, mapas de sistema e rastreamento para corrigir problemas de API."}}/>
