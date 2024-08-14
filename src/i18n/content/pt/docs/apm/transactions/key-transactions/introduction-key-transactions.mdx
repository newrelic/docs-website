---
title: Guia para transação principal
tags:
  - APM
  - Transactions
  - Key transactions
metaDescription: 'In APM, key transactions are used to monitor your application''''s important or unique transactions and processes.'
freshnessValidatedDate: never
translationType: machine
---

As transações principais são uma forma de as equipes de engenharia criarem monitoramento de nível personalizado em suas transações mais significativas. As ferramentas de monitoramento APM da New Relic ajudam você a detectar e resolver problemas rapidamente antes que eles afetem seu usuário, reportando _todas as transações_. Mas, por vezes, a informação essencial para a gestão dos seus negócios digitais não é a mais traficada. É aqui que a transação principal pode ajudá-lo a rastrear transações essenciais que você deseja monitor e gerenciar – independentemente das taxas de transferência gerais do aplicativo.

## Transação principal na prática

Vamos pensar em um cenário em que um cliente faça login no seu aplicativo de e-commerce para comprar um telefone. Os clientes apresentam resposta lenta ao tentar carregar a página dos planos e navegar nos serviços. Isso faz com que os clientes saiam do site e abandonem a compra. Sua equipe de microsserviços `PlanService` precisa identificar rapidamente a causa raiz dessa lentidão e corrigi-la para evitar a perda de mais clientes.

Sua equipe começa identificando a transação comercial mais importante de `PlanService`: `getPlans` (que carrega a página de planos). Então, você precisa fazer `getPlans` uma transação principal, aplicar a tag relevante e analisá-la dentro do contexto do [ecossistema da entidade](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/) maior.

Você pode aprender mais sobre transações e se sua framework as suporta em nossos [documentos APM](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm/).

<CollapserGroup>
  <Collapser
    id="create-key-transactions"
    title="Criar transação principal"
  >
    Para fazer `getPlans` uma transação principal:

    1. Vá para

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**
       </DNT>

       .

    2. Vá para

       <DNT>
         **Transactions**
       </DNT>

       na navegação esquerda.

    3. Selecione a transação `getPlans` .

    4. Selecione

       <DNT>
         **Make key transaction**
       </DNT>

       na visualização de detalhes da transação. Você também pode automatizar essa etapa usando a API REST para criar e interromper o rastreamento da transação principal.

       <img
         title="Create a key transaction"
         alt="A screenshot decpicting how to create a key transaction"
         src="/images/apm_screenshot-full_make-a-key-transaction.webp"
       />

       Depois de criar o principal de transação, eles se tornam parte do ecossistema da entidade New Relic. Você pode ver todas as transações, incluindo o `getPlans` principal de transação que acabou de criar, em <DNT>**entity list view**</DNT>.
  </Collapser>

  <Collapser
    id="rename-a-key-transaction"
    title="Renomear uma transação principal"
  >
    Digamos que você queira renomear sua transação principal para torná-la mais precisa ou mais fácil de filtrar. Veja como:

    1. Vá para

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Key transactions**
       </DNT>

       .

    2. No índice, selecione o principal da transação que deseja renomear.

    3. Escolha

       <DNT>
         **Application**
       </DNT>

       na área de configurações na navegação esquerda.

    4. Insira um novo nome para a transação e salve.
  </Collapser>

  <Collapser
    id="change-apdex-settings"
    title="Alterar configurações do Apdex"
  >
    Você pode definir um [limite de Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) personalizado para um principal de transação se for uma [transação da web](/docs/new-relic-solutions/get-started/glossary/#transaction). Apdex não é aplicável para [transações da web](/docs/new-relic-solutions/get-started/glossary/#non-web-transaction).

    <Callout variant="important">
      Transação principal As configurações do Apdex substituem o valor T definido para esse aplicativo. Isso pode significar, por exemplo, que um principal de transação poderia ser relatado como <DNT>**Satisfied**</DNT> , mas uma transação diferente no mesmo aplicativo com o mesmo tempo de resposta poderia ser <DNT>**Frustrated**</DNT>.
    </Callout>

    Para alterar o limite de Apdex de uma transação principal:

    1. Vá para

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Key transactions**
       </DNT>

       .

    2. No índice, selecione o

       <DNT>
         **key transaction**
       </DNT>

       que você deseja renomear.

    3. Escolha o aplicativo na área de configurações na navegação esquerda.

    4. Insira um novo valor em segundos sob o título

       <DNT>
         **Apdex T**
       </DNT>

       e salve.

       O limite do Apdex afeta como os principais rastreamentos da transação são criados.
  </Collapser>

  <Collapser
    id="delete-key-transactions"
    title="Excluir transação principal"
  >
    1. Vá para

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Key transactions**
       </DNT>

       .

    2. No índice, selecione a transação principal que deseja excluir.

    3. Escolha

       <DNT>
         **Application**
       </DNT>

       na área de configurações na navegação esquerda.

    4. Selecione

       <DNT>
         **stop tracking**
       </DNT>

       transação principal.

       A New Relic exclui automaticamente quaisquer alertas e eventos associados ao principal de transação excluído.
  </Collapser>
</CollapserGroup>

## Tag transação principal

No APM, você pode organizar e filtrar o principal da transação para determinar rapidamente as equipes, os ambientes ou os níveis de prioridade, adicionando um <DNT>**tag**</DNT> ao [principal da transação](/docs/apm/transactions/key-transactions/introduction-key-transactions/). Essas tags também fornecem contexto para que você possa isolar o problema ao receber uma notificação de alerta.

Tag são metadados associados à transação. Eles são úteis para aplicar em transações que tenham coisas em comum. Por exemplo, você pode aplicar uma tag `checkout` a todos os principais transações que fazem parte do processo de finalização da compra. Depois, você pode filtrar por `checkout` para ver todas as transações em um só lugar.

Em nosso cenário, a equipe de microsserviços `PlanService` está tentando identificar lentidão na finalização da compra e pode querer filtrar facilmente por `environment` ou `accountid` para poder identificar problemas e encontrar soluções rápidas.

<CollapserGroup>
  <Collapser
    id="assign-tags"
    title="Atribuir etiqueta"
  >
    Para atribuir uma tag a uma transação principal:

    1. Acesse <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT> e selecione um principal de transação.

    2. Perto do nome da entidade, na parte superior da página, selecione o menu <DNT>**See metadata and manage tags**</DNT> .

    3. No campo <DNT>**Add a new tag...**</DNT> do menu pop-up, adicione uma tag com este formato: `accountId: 123456789`.

       <img
         title="Tag a key transaction"
         alt="A screenshot depicting how to tag a key transaction"
         src="/images/apm_screenshot-full_tag-a-key-transaction.webp"
       />

    4. Para o agente APM, caso queira utilizar essas tags na consulta NRQL, reinicie seu serviço.
  </Collapser>

  <Collapser
    id="filter"
    title="Etiqueta de filtro"
  >
    Para filtrar o principal de transação por tag:

    1. Vá para

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
       </DNT>

       .

    2. Clique no campo

       <DNT>
         **Filter by ...**
       </DNT>

       para ver uma dropdown de atributos e tags disponíveis ou insira uma tag pela qual deseja filtrar, como `accountId: 123456789`.
  </Collapser>
</CollapserGroup>

## Agrupar o principal de transação e criar alertas

Depois de criar uma transação principal, você poderá aumentar sua visibilidade conectando-a às nossas <InlinePopover type="alerts"/>ferramentas e carga de trabalho.

<CollapserGroup>
  <Collapser
    id="key-transaction-workload"
    title="Adicione seu principal de transação a uma workload"
  >
    No New Relic, você pode usar a carga de trabalho para agrupar entidades que compõem um serviço comercial específico. Esse agrupamento facilita isolar e solucionar problemas. Adicione seu principal de transação à carga de trabalho junto com os serviços e hosts relacionados, para que você possa obter uma visão agregada da saúde e da atividade da entidade que compõe sua stack.

    Este exemplo de captura de tela mostra uma visão abrangente da workload do principal de transação `getPlans` com todas as outras entidades relacionadas.

    <img
      title="Workloads and key transactions"
      alt="A screenshot depiciting workloads and key transactions"
      src="/images/apm_screenshot-full_workloads-and-key-transactions.webp"
    />
  </Collapser>

  <Collapser
    id="set-alerts"
    title="Configurar alertas para uma transação principal"
  >
    Agora que seu principal de transação faz parte de uma workload e tag, o próximo passo é criar alertas para que você seja notificado quando houver algum comportamento incomum em sua transação. Você pode configurar [alertas estáticos](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/your-first-nrql-condition/#static-threshold) e [alertas de anomalia](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/your-first-nrql-condition/#anomaly-threshold) no principal de transação usando o poderoso e flexível [sistema de alerta NRQL](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/) e agora também pode adicionar seu principal de transação ao painel. Se desejar configurar alertas ou adicionar o principal da transação ao painel, você pode fazer isso diretamente nos gráficos de transação principal clicando nas reticências.
  </Collapser>

  <Collapser
    id="create-service-levels"
    title="Criar nível de serviço para transação principal."
  >
    Além do limite de alertas, você também pode medir o desempenho do ponto de vista do usuário da sua aplicação. Para fazer isso, estabeleça [um nível de serviço](/docs/service-level-management/intro-slm/) contra o principal da transação comercial.
  </Collapser>
</CollapserGroup>

## Use o principal da transação no contexto

Depois de criar um principal de transação, adicionar tag, criar carga de trabalho e configurar alertas, você pode começar a analisar seus dados no contexto com outras entidades que você monitor. Depois de compreender seu papel em seu sistema mais amplo, você poderá tomar medidas adicionais para melhorar o ritmo de operação e a confiabilidade.

<CollapserGroup>
  <Collapser
    id="lookout"
    title="Analise Desvio com o New Relic Lookout"
  >
    Para analisar rapidamente o Desvio em todas as suas transações principais, você pode começar com o New Relic [Lookout](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-lookout-monitor-your-estate-glance/). Isso fornece uma visão em tempo real da sua transação em todas as suas contas, destacando as alterações em toda a sua telemetria. Neste exemplo, você pode ver que a transação `getPlans` mostra um aumento no tempo de resposta:

    <img
      title="New Relic Lookout and key transactions"
      alt="A screenshot depicting New Relic Lookout and key transactions."
      src="/images/apm_screenshot-full_lookout-and-key-transactions.webp"
    />
  </Collapser>

  <Collapser
    id="service-maps"
    title="Entenda o impacto por meio de mapas de serviços"
  >
    Para entender o impacto completo da degradação do desempenho da transação `getPlans` , você pode usar um [mapa de serviço](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/introduction-service-maps/). Você pode visualizar a saúde de todas as outras entidades conectadas, como o serviço de origem, hosts, banco de dados e outros principais de transação.

    <img
      title="Service maps and key transactions"
      alt="A screenshot depicting service level maps and key transactions"
      src="/images/apm_screenshot-full_service-maps-and-key-transactions.webp"
    />
  </Collapser>

  <Collapser
    id="change tracking"
    title="Alterações de percurso"
  >
    Para acompanhar o impacto de qualquer evento de alteração, como implantação de código, alterações de configuração e eventos de negócios, você pode utilizar os [marcadores Monitoramento de Alterações](/docs/change-tracking/change-tracking-view-analyze/) nos gráficos de transação principal. Isso ajuda você a detalhar ainda mais o trace para solucionar as alterações que estão causando problemas.

    Nesta captura de tela, você pode ver um aumento no tempo de transação `getPlans` logo após uma implantação para otimizar uma consulta ao banco de dados. Isso ajuda a trace o problema até a implantação. Neste exemplo, quando revertemos a alteração, o tempo de transação voltou ao normal e a página de planos começou a carregar rapidamente.

    <img
      title="Key transactions and change tracking"
      alt="A screenshot depicting change tracking and key transactions"
      src="/images/apm_screenshot-full_key-transactions-track-changes.webp"
    />
  </Collapser>
</CollapserGroup>
