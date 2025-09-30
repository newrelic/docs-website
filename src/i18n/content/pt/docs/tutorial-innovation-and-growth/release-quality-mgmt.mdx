---
title: Melhore a qualidade dos seus lançamentos
tags:
  - Observability maturity
  - Innovation and growth
  - Release quality
  - Implementation guide
metaDescription: Our release quality guide helps you use New Relic to improve and optimize the quality and cadence of your code deployments.
freshnessValidatedDate: never
translationType: machine
---

O sucesso de uma equipe de desenvolvimento depende da frequência e do sucesso de seus lançamentos. As equipes que lançam muito lentamente não conseguirão acompanhar as demandas e a inovação dos negócios, e as equipes que criam muitos lançamentos malsucedidos terão um impacto negativo na satisfação dos clientes, na receita e na estabilidade geral do sistema.

A equipe [de pesquisa e avaliação DevOps](https://www.devops-research.com/research.html) (DORA) do Google identificou quatro métricas principais que indicam o desempenho de uma organização de desenvolvimento de software. Nosso driver de valor <DNT>**Innovation and Growth**</DNT> usa essas métricas para criar um programa geral que cria equipes de desenvolvimento mais eficientes e responsivas, juntamente com aplicativos mais confiáveis. Este guia de qualidade de lançamento ajuda a melhorar a frequência de implantação, o desempenho do aplicativo e a confiabilidade do aplicativo.

## Conceitos chave [#key-concepts]

Os conceitos Kep incluem:

### Comunicar, remediar, inovar [#communicate]

Um dos temas centrais da prática de maturidade de observabilidade da New Relic é “Comunicar, remediar, inovar”. Apoiamos esse tema permitindo que você comunique o estado atual de suas práticas de desenvolvimento às partes interessadas usando KPIs específicos. Em seguida, você usará esses KPIs para ajustar suas práticas de desenvolvimento e identificar componentes de aplicativos lentos e não confiáveis para que possa corrigi-los em sprints de desenvolvimento subsequentes. Por fim, você usará esses KPIs para tornar suas práticas de desenvolvimento mais eficientes e adicionar mais tempo para suas equipes inovarem.

### Desenvolvimento baseado em tronco [#trunk]

O desenvolvimento baseado em tronco é definido como "Um modelo de ramificação de controle de origem, onde os desenvolvedores colaboram no código em uma única ramificação chamada <DNT>**trunk**</DNT>, resistem a qualquer pressão para criar outras ramificações de desenvolvimento de longa duração, empregando técnicas documentadas." Resumindo, ele divide o trabalho de desenvolvimento em pequenos lotes executados em ramificações de um único tronco. Assim que um lote de trabalho for concluído, a ramificação será mesclada novamente no tronco. Cada branch tem uma vida útil curta, simplificando as mesclagens de volta ao tronco e garantindo que todos os desenvolvedores estejam trabalhando a partir de versões recentes da base de código.

Essa prática foi identificada pela organização DevOps Research and Assessment (DORA) como um recurso essencial que impulsiona uma entrega mais rápida e maior desempenho organizacional. É uma prática obrigatória para CI/CD.

### Limite de serviço de TI [#it-boundary]

Melhorar a qualidade da versão funciona no nível do limite do serviço de TI. Ao medir o serviço na fronteira, você pode ter uma ideia do que está acontecendo a montante dele.

O [guia gerenciamento a nível de serviço](/docs/new-relic-solutions/observability-maturity/uptime-performance-reliability/slm-implementation-guide) utiliza o conceito de fronteira de serviço para medir o tempo de resposta e a taxa de erro de um determinado serviço. Neste guia, você usará o mesmo conceito para medir o impacto que suas práticas de desenvolvimento têm no serviço e, em seguida, para melhorar a capacidade de resposta, a capacidade de inovação e a estabilidade do aplicativo da sua equipe de desenvolvimento.

## Principais indicadores de desempenho [#key-perf-indicators]

Você usará o processo de qualidade de desenvolvimento para coletar e medir os seguintes KPIs:

<CollapserGroup>
  <Collapser
    id="kpi-release-rate"
    title="KPI de taxa de liberação"
  >
    A taxa de liberação mede o número de liberações ao longo do tempo. O evento de lançamento deverá incluir o seguinte atributo:

    * O nome do aplicativo

    * O identificador exclusivo da versão (assinatura SHA, número da versão, etc.)

    * O número de linhas de código adicionadas

    * O número de linhas de código removidas

    * A data e hora em que o lançamento ocorreu

    * O usuário ou processo que implanta o release

    * A URL que aponta para esta versão no repositório do código-fonte

    * Um indicador que mostra se esta versão é nova ou uma reversão

      <DNT>**Goal:**</DNT> Aumentar a taxa de lançamentos.

      <DNT>
        **Best practices:**
      </DNT>

    * Use processos de melhoria contínua para gerar uma taxa de liberação mais alta.

    * Minimize o número de alterações em cada versão para reduzir o impacto de falhas de versão.

    * Mapeie esse KPI de acordo com o impacto nos negócios e relate-o às partes interessadas.
  </Collapser>

  <Collapser
    id="kpi-release-size-scope"
    title="KPI de tamanho/escopo da versão"
  >
    O tamanho/escopo da versão mede o número de linhas de código adicionadas ou removidas. Como alternativa, pode medir a porcentagem da base de código alterada.

    Você deve incluir esse KPI como um atributo de um evento de lançamento conforme definido pelo KPI Taxa de liberação.

    <DNT>**Goal:**</DNT> Reduza o tamanho/escopo de cada versão.

    <DNT>
      **Best practices:**
    </DNT>

    * Minimize o número de alterações em cada versão para reduzir o impacto de falhas de versão.
    * Mapeie esse KPI de acordo com o impacto nos negócios e relate-o às partes interessadas.
  </Collapser>

  <Collapser
    id="kpi-app-resp-errors"
    title="KPI de capacidade de resposta e erros de transação do aplicativo"
  >
    O KPI de capacidade de resposta e erros do aplicativo mede o tempo de resposta do 95º percentil e o volume de erros da versão.

    Você deve usar instrumentação de observabilidade para coletar esse KPI para cada transação no limite de serviço do aplicativo. O atributo do KPI deve, no mínimo, incluir o seguinte:

    * Nome da transação e/ou URI

    * Início da transação tempo transcorrido

    * A duração da transação

    * O recurso de computador que atendeu a solicitação

      <DNT>**Goal:**</DNT> Melhore o tempo de resposta e reduza erros.

      <DNT>
        **Best practices:**
      </DNT>

    * Use técnicas de gerenciamento a nível de serviço para criar aplicativos mais responsivos e com menos erros enfrentados pelo usuário.

    * Use este KPI para priorizar os esforços de melhoria de desempenho da engenharia.

    * Use sua solução de observabilidade para enviar informações sobre gargalo e culpar componentes para suas equipes de desenvolvimento para que possam corrigi-los.
  </Collapser>

  <Collapser
    id="kpi-production-impact"
    title="KPI de impacto na produção"
  >
    O impacto na produção mede o número de versões com falha (como versões que foram revertidas ou que não foram implantadas).

    Você deve incluir esse KPI como um atributo de um evento de lançamento conforme definido pelo KPI de taxa de lançamento.

    <DNT>**Goal:**</DNT> Reduza o número de versões com falha.

    <DNT>
      **Best practices:**
    </DNT>

    * Certifique-se de testar realisticamente sua implantação em ambiente não produção antes de movê-la para produção.
    * Realize retrospectivas detalhadas sobre implantações com falha para descobrir e corrigir lacunas em seus processos de testes e implantação.
  </Collapser>

  <Collapser
    id="kpi-observability-coverage"
    title="KPI de cobertura de observabilidade"
  >
    Este KPI mede a porcentagem do aplicativo que possui instrumentação de observabilidade.

    <DNT>**Goal:**</DNT> 100% de cobertura

    <DNT>
      **Best practices:**
    </DNT>

    * Adicione instrumentação de diagnóstico aos principais componentes do aplicativo.
    * Use falhas na obtenção de SLO para conduzir processos de diagnóstico para identificar e preencher lacunas de observabilidade.
    * Use retrospectivas de incidentes para identificar e preencher lacunas de observabilidade.
  </Collapser>

  <Collapser
    id="kpi-support-ticket-volume"
    title="KPI de volume ticket de suporte (opcional)"
  >
    O volume ticket de suporte mede o número de tickets de suporte abertos nesta versão. Este é um KPI opcional.

    Você deve coletar este KPI como uma métrica horária ou diária que tem o seguinte atributo:

    * Nome e versão do aplicativo

    * Timestamp

    * Número de tickets abertos por gravidade

    * Tempo médio para fechar por gravidade

      <DNT>**Goal:**</DNT> Reduza o número de ingressos.

      <DNT>
        **Best practices:**
      </DNT>

    * Certifique-se de poder correlacionar o ticket de suporte com versões específicas.

    * Analise o ticket de suporte para entender os tipos de problemas encontrados e use essas informações para impulsionar a melhoria contínua.
  </Collapser>

  <Collapser
    id="kpi-infra-costs"
    title="KPI de custo de infraestrutura (opcional)"
  >
    Este KPI mede os custos de hospedagem do aplicativo. É um KPI opcional.

    <DNT>**Goal:**</DNT> Crie um modelo de custos previsível e estável.

    <DNT>
      **Best practices:**
    </DNT>

    * Meça os custos da infraestrutura de hospedagem de cada aplicativo.
    * Revise periodicamente a métrica de desempenho versus custo do aplicativo para garantir que o aplicativo tenha recursos adequados à sua função e importância comercial.
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### Identifique o aplicativo [#identify-application]

    A primeira etapa é identificar os aplicativos que estão no escopo das primeiras iterações do processo de melhoria. Os aplicativos que são bons candidatos para inclusão são aqueles que:

    * Estão em desenvolvimento ativo
    * São um serviço operacional chave
    * Têm ciclos de desenvolvimento lentos
    * Ter um histórico de implantação fracassada
  </Step>

  <Step>
    ### Reúna os KPIs necessários [#gather-kpis]

    Em seguida, você precisa reunir os KPIs definidos a partir de fontes como sua plataforma CI/CD, repositório de origem, solução de observabilidade, etc. Depois de identificar as fontes de seus KPIs, você precisará identificar métodos para extraí-los e importá-los para a plataforma New Relic.

    Você pode ver os KPIs e os atributos mínimos exigidos na seção [Principais Indicadores de Desempenho](#key-perf-indicators) acima. Normalmente, você usará as APIs do seu conjunto de ferramentas de desenvolvimento para extrair os KPIs e seus atributos e, em seguida, enviá-los para a New Relic usando a [API do evento personalizado](/docs/data-apis/ingest-apis/introduction-event-api/).

    Antes de iniciar qualquer trabalho de integração personalizada, você deve determinar se existe alguma integração pronta para uso que atenda aos seus objetivos.
  </Step>

  <Step>
    ### Implementar painel [#implement-dashboards]

    Nossos <InlinePopover type="dashboards"/>são os principais impulsionadores do processo de melhoria da qualidade. Eles mostrarão KPIs e tendências para que você possa identificar e priorizar seus esforços de melhoria. Um exemplo de painel pode ser [encontrado em nosso centro de recursos de maturidade de observabilidade no GitHub](https://github.com/newrelic/oma-resource-center).

    As informações exibidas no painel dependem do seu conjunto de ferramentas de desenvolvimento, portanto, você precisará [personalizar seu dashboard](https://developer.newrelic.com/collect-data/monitor-your-application/query-custom-data/) de acordo com suas especificações exatas.
  </Step>

  <Step>
    ### Estabeleça sua baselinede lançamento [#establish-baseline]

    Como você precisa de dados suficientes para formar uma baseline antes de [executar a ativação inicial](#perform-enablement-one), você deve estabelecer sua linha de base que consiste em uma amostra da atividade de desenvolvimento. Normalmente, isso levará no mínimo duas semanas, mas pode levar até seis semanas, dependendo do seu ritmo de desenvolvimento atual. Uma maneira fácil de fazer isso é alinhar seu ciclo de coleta e avaliação baseline com seus sprints Agile, se aplicável.

    Você deve garantir periodicamente que os dados do evento estejam se acumulando conforme esperado no New Relic enquanto estabelece sua linha de base.
  </Step>

  <Step>
    ### Reúna-se com sua equipe [#meet-with-team]

    Depois de estabelecer sua linha de base, você apresentará às equipes de desenvolvimento e outras partes interessadas os dados coletados e o processo de melhoria contínua que seguirá.

    O processo consiste em quatro atividades:

    1. <DNT>
         **Introduce the concepts of trunk-based development**
       </DNT>

       : Você e as partes interessadas revisarão os conceitos básicos do desenvolvimento baseado em caminhões, identificarão onde suas práticas atuais diferem e, em seguida, criarão estratégias para implementá-las.

    2. <DNT>
         **Review your release KPIs and trends**
       </DNT>

       : você analisará a taxa de liberação e os KPIs de tamanho e escopo da liberação para garantir que está progredindo na implementação do desenvolvimento baseado em tronco. Seu objetivo é aumentar sua taxa de lançamento e, ao mesmo tempo, reduzir o tamanho e o escopo de novos lançamentos.

    3. <DNT>
         **Review your application KPIs and trends**
       </DNT>

       : aqui, você analisará os KPIs de desempenho e erro do seu aplicativo para identificar e priorizar seus esforços para melhorar a confiabilidade e o desempenho do aplicativo.

    4. <DNT>
         **Make technical recommendations**
       </DNT>

       : aqui, você e as partes interessadas relevantes identificarão e revisarão recomendações técnicas, como fazer alterações em seu fluxo de trabalho de lançamento ou estratégias de observabilidade.
  </Step>

  <Step>
    ### Comece o processo de melhoria [#improvement-process]

    Esta etapa final é um processo de melhoria contínua. Durante esta fase, você se [reunirá com sua equipe](#meet-with-team) para analisar seu progresso em relação à baseline e ajustar suas estratégias para entregar as melhorias desejadas. Cada ciclo do processo de melhoria deve ocorrer após várias iterações do seu processo de desenvolvimento. Normalmente, eles ocorrem no meio e no final de cada sprint Agile.

    Durante esta fase você deve:

    * Relate seus KPIs todas as semanas às partes interessadas para garantir que as equipes estejam priorizando o trabalho de maneira adequada e mostrem o progresso feito em direção aos resultados de negócios prometidos.
    * Registre e retenha seus KPIs semanais ao longo do tempo para estabelecer uma nova linha de base e mostrar a taxa de melhoria.
  </Step>
</Steps>

<UserJourneyControls previousStep={{"path":"/docs/tutorial-innovation-and-growth/development-quality-mgmt/","title":"Passo anterior","body":"Aprenda como usar o New Relic para melhorar a qualidade dos seus ciclos de desenvolvimento"}}/>
