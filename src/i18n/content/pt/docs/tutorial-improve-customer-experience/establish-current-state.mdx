---
title: Estabeleça seu estado atual
metaDescription: 'New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application''s performance to improve your customer experience.'
freshnessValidatedDate: '2023-08-16T00:00:00.000Z'
translationType: machine
---

Você quer melhorar sua experiência digital, mas como saber se a melhorou ou não? Primeiro, você precisa conhecer seu desempenho baseline para ter algo com que comparar seus dados futuros. Depois de verificar se tudo o que você precisa está sendo reportado corretamente à nossa plataforma, você pode validar suas informações e usar nosso dashboard base de qualidade para medir a experiência de seus clientes.

<Steps>
  <Step>
    ### Revise as páginas do instrumento [#review-instrument]

    Nossas <InlinePopover type="browser"/>ferramentas são uma ótima maneira de monitor os dados do seu aplicativo. Por isso, o melhor lugar para começar a melhorar sua experiência digital é analisando o painel do seu browser. Primeiro, você precisará revisar os aplicativos e páginas do seu browser para ter certeza de que tudo o que você espera relatar à New Relic está realmente acontecendo. Você pode fazer isso revisando a guia <DNT>**Page Views**</DNT> na interface de monitoramento do browser para cada aplicativo que você está ingerindo ou executando a seguinte consulta NRQL:

    ```
    SELECT uniques(pageUrl) from PageView LIMIT MAX
    ```

    <Callout variant="tip">
      Novo no NRQL? Confira nossa [introdução ao NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/) para saber como usar nossa linguagem de consulta personalizada para ajudar a maximizar seus dados!
    </Callout>
  </Step>

  <Step>
    ### Validar agrupamento de URLs do Browser [#validate-grouping]

    Depois de ter certeza de que suas páginas do Instrumento reportam seus dados corretamente na etapa anterior, é hora de garantir que os segmentos do browser sejam capturados corretamente para que você possa analisar melhor os dados que está usando para melhorar a experiência de seus clientes. Se você não estiver familiarizado com segmentos, eles são simplesmente o texto entre dois `/`s em um URL ou os `.`s de um nome de domínio.

    Quando você tem muitos URLs com muitos segmentos, pode resumi-los para que `website.com/product/widget-name` se torne `website.com/` ou `website.com/product/`. Embora a primeira versão funcione, a segunda versão é uma forma mais útil de agrupar dados de experiência de clientes para o produto porque permite mais segmentos nos dados.

    <Callout variant="tip">
      Não tem certeza se precisa ajustar sua configuração? Importe o [dashboard de investigação da lista de permissões de segmento](https://newrelic.com/instant-observability/browser-segment-investigation/eb24e234-90aa-4908-972d-64d6d56b557e) para ajudar.
    </Callout>

    <img
      title="Segment allow-list (aka white-list) investigation"
      alt="Segment allow-list (aka white-list) investigation"
      src="/images/cx_screenshot-full_segment-whitelist-investigation.webp"
    />

    Depois de identificar todos os seus segmentos, use a [Lista de permissões de segmentos no browser](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding) para adicioná-los, o que permitirá criar segmentos mais facilmente compreensíveis.
  </Step>

  <Step>
    ### Entenda como segmentar seus dados [#understand-segment]

    Agora que você validou o agrupamento de URLs do seu browser, você pode facilitar a compreensão dos dados de experiência dos seus clientes, dividindo-os em diferentes segmentos. Ao contrário da etapa anterior, os segmentos aqui não se referem a seções de URLs (como no [segmento lista de permissões](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding)), mas sim a grupos de dados.

    Você pode usar segmentos para agrupar seus dados de diferentes maneiras. Por exemplo:

    * A maior parte do usuário nos EUA, Canadá e EMEA experimenta 2 segundos ou mais para interagir com a próxima pintura, enquanto o usuário na Malásia e na Indonésia experimenta 4 segundos. Agrupar seus segmentos por localização geográfica forneceria esses insights.
    * Os clientes que compram seguro de carro normalmente veem 1 segundo para a pintura com maior conteúdo. Para seguro residencial, são 4 segundos.
    * Em uma semana, pode haver 700.000 visualizações de páginas em aplicativos de browser móvel, em comparação com 300.000 em desktops.

      Aqui estão categorias populares e úteis para segmentar seus dados:

      <CollapserGroup>
        <Collapser
          id="Region"
          title="Região e localização"
        >
          <DNT>**Basic:**</DNT> Agrupar por país. Os eventos do browser contêm automaticamente o código do país das solicitações, portanto, não há nada que você precise fazer para detalhar ainda mais.

          <DNT>**Advanced:**</DNT> Faça com que o agrupamento regional corresponda aos grupos regionais de SLO criando seu próprio atributo de região usando [o atributo personalizado](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes/) no monitoramento do Browser.

          Facetada por `countryCode`.

          Atributo relacionado:

          * `regionCode`
          * `city`
          * `asnLatitude`
          * `asnLongitude`
        </Collapser>

        <Collapser
          id="Device"
          title="Dispositivo"
        >
          Divida o desempenho e o tipo de dispositivo de engajamento para que você possa entender:

          * Análise típica de usuário de desktop versus Browser móvel

          * Experiência do usuário do Browser desktop versus Browser móvel

            Facetada por `deviceType`.

            Atributo relacionado:

          * `userAgentName`

          * `userAgentOS`

          * `userAgentVersion`
        </Collapser>

        <Collapser
          id="Product"
          title="Produto ou linha de negócios"
        >
          Quando um produto é uma linha separada de negócios ou serviço fornecido por uma organização. Alguns exemplos de indústrias e respectivos produtos:

          * Uma seguradora que vende seguros de automóveis e residências.

          * Uma empresa de mídia que possui vários serviços ou canais de streaming.

          * Uma agência de viagens que oferece aluguel de carros e reservas de hotéis.

            <DNT>**Basic:**</DNT> Divida o desempenho por produto por:

          * Facetamento em `pageUrl`: use esta abordagem ao agrupar vários produtos em um aplicativo de browser no New Relic.

          * Facetamento por `appName`: use esta abordagem ao utilizar cada produto como um aplicativo da web separado.

          * Agrupamento por `appName` e depois por faceta: use esta abordagem ao fazer o hsbr de vários aplicativos no browser que oferece suporte a um produto.

            <DNT>**Advanced:**</DNT> Adicione ofertas de produtos como atributo personalizado às páginas do browser usando [atributo personalizado](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes).
        </Collapser>

        <Collapser
          id="Environment"
          title="Ambiente"
        >
          Uma convenção de nomenclatura que especifica o ambiente para aplicativos de browser durante ou após a instrumentação. Aplicativos de browser bem nomeados especificam produtos e/ou funções, bem como o ambiente. Exemplos:

          * `account-management.prod`
          * `hotels-book.prod`
          * `car-insurance.uat`

            Use convenções de nomenclatura de aplicativos para observar que o ambiente oferece suporte à filtragem de dados na interface do usuário e no painel. Para obter mais informações, consulte nossos documentos sobre [como renomear aplicativos de browser](/docs/browser/new-relic-browser/configuration/rename-browser-apps/).
        </Collapser>

        <Collapser
          id="Team"
          title="Equipe"
        >
          Em algumas organizações, uma única equipe suporta múltiplos produtos, enquanto em outras, um produto é grande o suficiente para ser suportado por múltiplas equipes. Gere relatórios sobre o desempenho da equipe em relação à experiência ou engajamento dos clientes adicionando o nome da equipe ao nome do aplicativo do Browser no New Relic (por exemplo, `account-management.prod.unicorn-squad`) ou usando [atributo personalizado](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes).
        </Collapser>
      </CollapserGroup>
  </Step>

  <Step>
    ### Importe o dashboard de base de qualidade [#import-dashboard]

    <img
      title="Customer experience quality foundation dashboard"
      alt="Customer experience quality foundation dashboard"
      src="/images/cx_screenshot-full_qf-dashboard.webp"
    />

    A próxima etapa é criar um dashboard que você possa usar para medir e melhorar a experiência de seus clientes em relação ao desempenho baseline . Para fazer isso:

    1. Acesse o [início rápido do Quality Foundation](https://newrelic.com/instant-observability/customer-experience-quality-foundation/7a5739bf-30ee-4be9-9705-14871cafd7f4).
    2. Siga as instruções no início rápido para instalar o dashboard.
    3. Use o [guia fornecido](https://github.com/newrelic/newrelic-quickstarts/tree/main/quickstarts/oma-qf#readme) para personalizá-lo de acordo com a forma como você planeja segmentar os dados.

       <Callout variant="tip">
         Certifique-se de alinhar o dashboard às linhas de negócios ou às ofertas voltadas para os clientes, e não às equipes, para maximizar o impacto da sua otimização!
       </Callout>
  </Step>

  <Step>
    ### Capture o desempenho atual de cada página dashboard [#capture-performance]

    <img
      title="Capture current performance for each dashboard page"
      alt="Capture current performance for each dashboard page"
      src="/images/cx_diagram_qf_kpi_progress.webp"
    />

    A última etapa para estabelecer seu estado atual é capturar seu desempenho atual nas páginas do dashboard . Para fazer isso:

    1. Siga as instruções em nosso [README do GitHub de base de qualidade](https://github.com/newrelic/oma-resource-center/tree/main/src/content/docs/oma/value-drivers/customer-experience/use-cases/quality-foundation), que orienta você na lista de permissões do segmento e dashboard de base de qualidade.

    2. Use o dashboard da etapa anterior para compreender o desempenho geral de cada linha de negócios. Se for relevante, aplique filtros para ver o desempenho em toda a região ou dispositivo. Se os valores caírem abaixo do destino e isso for importante, adicione-o à planilha como candidato a melhoria. Exemplos de valor de rastreamento:

       * Não vale a pena acompanhar: uma empresa que vende seguros nos EUA só nota um fraco desempenho na Malásia.
       * Vale a pena acompanhar: uma empresa que vende seguros nos EUA só percebe um desempenho ruim em relação ao usuário móvel nos EUA.
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-customer-experience/improve-customer-experience/","title":"Próxima Etapa","body":"Aprenda como usar os dados do seu estado atual para fazer melhorias"}}/>
