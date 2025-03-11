---
title: Criar e definir carga de trabalho
tags:
  - New Relic
  - Use New Relic
  - Workloads
metaDescription: 'In New Relic, create a workload, which helps you group together monitored entities that are related.'
freshnessValidatedDate: '2023-06-23T00:00:00.000Z'
translationType: machine
---

A entidade adicionada a uma workload depende dos seus objetivos e estrutura organizacional. Neste documento, você aprenderá como criar carga de trabalho na interface. Você pode ler sobre como a carga de trabalho alinha as equipes em nosso [tutorial de carga de trabalho](/docs/tutorial-peak-demand/organize-data-workloads).

## Contas e permissões [#accounts]

Existem dois tipos de contas que contribuem para a carga de trabalho: a <DNT>**workload account**</DNT> e a <DNT>**scope accounts**</DNT>. Se a sua [organização New Relic](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure) tiver mais de uma conta, a diferenciação entre a workload e as contas de escopo facilitará o gerenciamento da sua carga de trabalho.

* O

  <DNT>
    **workload account**
  </DNT>

  é onde reside a workload e seus dados. A conta usada para criar uma workload, então, é considerada a conta workload . Esta conta determina qual usuário pode ver e gerenciar a workload, com base nas permissões de conta que lhe foram atribuídas.

* As

  <DNT>
    **scope accounts**
  </DNT>

  são contas das quais a workload busca dados de telemetria. O usuário sem acesso a todas as contas de escopo de uma workload pode não conseguir ver todos os dados de uma workload. Para membros da equipe que usam uma workload, adicione as contas relevantes da equipe das quais workload extrai dados.

Uma vez criada, a conta workload não pode ser alterada. As contas de escopo, no entanto, podem ser atualizadas a qualquer momento por qualquer usuário com recursos de gerenciamento workload na conta workload . Por padrão, todas as contas às quais o criador da workload tem acesso no momento da criação da workload são definidas como contas de escopo.

## Criar carga de trabalho [#create]

Existem algumas maneiras diferentes de criar carga de trabalho, embora a escolha seja inteiramente sua. Recomendamos escolher o método mais conveniente para alinhar suas equipes.

<CollapserGroup>
  <Collapser
    id="UI"
    title="Crie uma workload na interface"
  >
    <img
      title="new-relic-create-workload.png"
      alt="New Relic - workload creation UI"
      src="/images/workloads_screenshot-full_create-workload.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Workloads > Create a workload:**</DNT> Ao [criar uma workload](#create), você escolhe as contas associadas e monitora a entidade.
    </figcaption>

    Veja como criar uma workload na interface de carga de trabalho:

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Workloads**</DNT> e clique em <DNT>**+ Create a workload**</DNT>.

    2. Dê à workload um nome que seja significativo para você e sua equipe.

    3. No dropdown <DNT>**Select an account**</DNT>, selecione a [contaworkload ](#accounts)que você deseja usar.

    4. Clique em [Escolher as contas de escopo](#scope-accounts) para verificar todas as contas das quais esta workload usará dados.

    5. Localize e escolha a entidade que compõe a workload. Quando tiver os resultados que procura, você pode adicionar entidade específica ou adicionar a consulta para atualizar dinamicamente a entidade na workload.

       * Você pode pesquisar por tipo de entidade, [tag](#tags) ou [atributo](/docs/new-relic-solutions/get-started/glossary#attribute) (como nome da entidade, ID da conta e região da AWS).

       * Clique em

         <DNT>
           **+ Add this query**
         </DNT>

         para criar uma lista de entidades atualizadas dinamicamente para sua workload. Recomendamos isso se você quiser que sua workload atualize sua entidade à medida que seu sistema muda.

       * Clique em

         <DNT>
           **+ Add**
         </DNT>

         ao lado de uma entidade para adicioná-la à sua workload. Esta é uma boa escolha se você sabe que a entidade permanecerá útil mesmo quando seu sistema mudar.

    6. Você pode adicionar consultas e entidades específicas à workload, que funcionam juntas de acordo com a [lógica da consulta](#query-logic).

    7. Clique em <DNT>**Create a workload**</DNT> para salvá-lo.

       Se sua workload contiver um ou mais painéis, você poderá [definir filtros nesses links dashboard ](#filter-dashboards).
  </Collapser>

  <Collapser
    id="errors-inbox"
    title="Criar na Errors Inbox"
  >
    Para criar uma carga de trabalho a partir Errors Inbox, consulte [Errors Inbox](/docs/errors-inbox/getting-started/#global-workload).
  </Collapser>

  <Collapser
    id="api"
    title="Criar via API"
  >
    Você pode [consultar, criar e atualizar cargas de trabalho com nossa API NerdGraph](/docs/nerdgraph-workloads-tutorials).
  </Collapser>
</CollapserGroup>

## Defina sua carga de trabalho [#define]

Abaixo estão alguns detalhes e dicas sobre alguns aspectos da definição da carga de trabalho:

<CollapserGroup>
  <Collapser
    id="tags"
    title="Use tag para definir o conteúdo da workload"
  >
    Você pode consultar e selecionar entidade workload usando tanto [tag](/docs/new-relic-one/use-new-relic-one/core-concepts/tagging-use-tags-organize-group-what-you-monitor) quanto [atributo](/docs/new-relic-solutions/get-started/glossary#attribute). Portanto, para otimizar o uso da carga de trabalho, é útil ter uma boa estratégia de tag de entidade. Recomendamos ler a [documentação sobre tags](/docs/new-relic-one/use-new-relic-one/core-concepts/tagging-use-tags-organize-group-what-you-monitor) e assistir [a este vídeo sobre como usar tags para definir uma workload](https://www.youtube.com/watch?v=nXCH_3XjGkQ).

    <Video
      id="nXCH_3XjGkQ"
      type="youtube"
    />
  </Collapser>

  <Collapser
    id="query-logic"
    title="Como funciona a lógica de consulta dinâmica"
  >
    Você pode adicionar diversas entidades e consultas individuais para definir uma workload.

    * Consulta pode incluir vários termos de pesquisa. Eles são combinados com um operador AND.
    * Consultas separadas dentro de uma workload são combinadas com um operador OR.
    * Você pode agrupar strings entre sinais de porcentagem (`%`) para corresponder às substrings exatas em uma consulta. Se você usar substrings em nomes de entidades para categorizar essas entidades (por exemplo, `<team>-<env>-<appName>`), considere usar [tags](/docs/new-relic-one/use-new-relic-one/core-concepts/tagging-use-tags-organize-group-what-you-monitor) complementarmente, que são mais poderosas para filtragem e agrupamento (por exemplo, `team:awesome`, `env:production`).
    * Recomendamos não utilizar sinais de porcentagem (`%`) em consultas dinâmicas que possam retornar mais de 500 entidades. Dessa forma, você obtém uma experiência mais consistente na interface do usuário.
  </Collapser>

  <Collapser
    id="add-dashboards"
    title="Adicionar painel à carga de trabalho"
  >
    Se você tiver [um painel personalizado](/docs/dashboards/new-relic-one-dashboards/get-started/introduction-new-relic-one-dashboards) e já souber quais dados são relevantes para sua equipe observar e operar a carga de trabalho, poderá vinculá-los <InlinePopover type="dashboards"/>da sua workload.

    Para adicionar painel a uma workload: Depois de criar uma workload, vá para a página <DNT>**Activity**</DNT> de uma workload e clique em <DNT>**Add dashboard**</DNT>.
  </Collapser>
</CollapserGroup>
