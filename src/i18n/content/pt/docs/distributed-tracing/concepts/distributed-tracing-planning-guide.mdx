---
title: 'Distributed tracing: guia de planejamento'
tags:
  - Understand dependencies
  - Distributed tracing
  - Get started
metaDescription: Enabling New Relic distributed tracing impacts some APM features.
freshnessValidatedDate: never
translationType: machine
---

distributed tracing é habilitado por padrão em muitos de nossos produtos, mas se você estiver planejando implementá-lo em grandes sistemas distribuídos, recomendamos revisar as etapas [de planejamento](#rollout) abaixo.

Além disso, se você usa versões mais antigas do <InlinePopover type="apm"/>agente e não usa distributed tracing, recomendamos que você revise o [recurso Impacto no APM](#changes) antes de implementar distributed tracing.

## Planeje seu lançamento [#rollout]

Se você estiver habilitando distributed tracing para grandes sistemas distribuídos, aqui estão algumas dicas:

* Se você é um usuário atual do APM, consulte [Impacto no recurso APM](#changes).

* Determine as solicitações que são mais importantes para o seu negócio ou que têm maior probabilidade de exigir análise e resolução de problemas e [habilite distributed tracing](#enable) para esses serviços. Habilite o rastreamento de serviços aproximadamente ao mesmo tempo para que você possa avaliar com mais facilidade o quão completo é o seu rastreamento de ponta a ponta.

* Ao observar o rastreamento na [interfacedistributed tracing ](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data), você verá intervalos no trace para chamadas externas para outros serviços. Em seguida, você pode [habilitar distributed tracing](#enable) para qualquer um dos serviços que desejar. Se um serviço for bastante autônomo e não for usado com frequência no contexto de outros serviços, talvez você não queira habilitar distributed tracing para ele.

  Aqui está uma representação visual dessa implementação em fases:

  <img
    title="Diagram showing a roll-out strategy for distributed tracing."
    alt="Diagram showing a roll-out strategy for distributed tracing."
    src="/images/distributed-tracing_diagram_distributed-tracing-rollout.webp"
  />

* Se você estiver usando <InlinePopover type="apm"/>para um serviço grande e monolítico, poderá haver muitos períodos de subprocessos por trace e [os limites de APM](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#rules-limits) poderão resultar em menos rastreamento do que o esperado. Você pode resolver isso usando a instrumentação de agente do APM para desabilitar o relatório de dados sem importância.

* Distributed tracing funciona [propagando informações de cabeçalho](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#headers) de serviço para serviço em um caminho de solicitação. Alguns serviços podem comunicar-se através de um proxy ou outro serviço intermediário que não propaga automaticamente o cabeçalho. Nesse caso, você precisa configurar esse proxy para permitir que o valor do cabeçalho `newrelic` seja propagado da origem ao destino.

## Impacto no recurso APM [#changes]

Nosso distributed tracing melhora o [recurso anterior de rastreamento multiaplicativo](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces) do APM. Aqui estão alguns benefícios principais:

* Veja mais detalhes de atividades entre serviços e rastreamento de ponta a ponta mais completo.
* Filtre e consulte rastreamento, bem como faça gráficos customizados.
* Veja o trace completo mesmo quando as chamadas ultrapassam os limites da conta de uma organização.
* Consulte [Introdução ao distributed tracing](/docs/intro-distributed-tracing) para obter mais recursos.

[A ativação distributed tracing](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing#enable) pode afetar alguns <InlinePopover type="apm"/>recursos que você usa atualmente. Essas alterações afetam apenas o aplicativo monitor por agente que tem distributed tracing habilitado – elas não se aplicam no nível da conta.

Poderemos fornecer compatibilidade retroativa com alguns ou todos os recursos afetados em versões futuras. Por enquanto, você deve compreender as seguintes alterações antes de ativar distributed tracing:

<CollapserGroup>
  <Collapser
    id="txn-trace-changes"
    title="Interface de rastreamento da transação exibe URLs de serviço, não links de transação"
  >
    Quando distributed tracing estiver habilitado para uma aplicação, a interface do trace da transação não terá mais o nome da transação e o link do serviço chamado (veja a imagem abaixo). Este será substituído pelo URL do serviço chamado.

    <img
      title="distributed-tracing_screenshot-full_transaction-trace-UI.png"
      alt="Distributed tracing - Transaction trace effects"
      src="/images/distributed-tracing_screenshot-full_transaction-trace-UI.webp"
    />

    <img
      title="distributed-tracing_screenshot-crop_trace-name-change-UI.png"
      alt="distributed-tracing_screenshot-crop_trace-name-change-UI.png"
      src="/images/distributed-tracing_screenshot-crop_trace-name-change-UI.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace)**</DNT>: mostra a IU do rastreamento da transação antes que distributed tracing seja ativado, com um link para a transação associada. Com distributed tracing habilitado, o URL do serviço será exibido.
    </figcaption>

    Se você quiser obter mais detalhes sobre a atividade trace , acesse a página da interface <DNT>**Distributed tracing**</DNT> e examine esse trace.
  </Collapser>

  <Collapser
    id="cat-disabled"
    title="O rastreamento multiaplicativo será desabilitado"
  >
    A ativação distributed tracing desativará o recurso [de rastreamento multiaplicativo](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces) . distributed tracing é uma versão melhorada do rastreamento multiaplicativo e apenas um pode ser habilitado por vez.
  </Collapser>

  <Collapser
    id="maps-no-browser-mobile"
    title="Impactos relacionados ao monitoramento de Mobile"
  >
    Os impactos relacionados ao APM incluem:

    * Quando distributed tracing estiver ativado para uma entidade de monitor APM, [os mapas de serviço](/docs/understand-dependencies/understand-system-dependencies/service-maps/introduction-service-maps) legados não mostrarão o aplicativo monitor por

      <InlinePopover type="mobile"/>

      .

    * O recurso [de detalhamento do servidor de aplicativos](/docs/mobile-monitoring/mobile-monitoring-ui/network-pages/http-requests-page#details) da página de interface de solicitações HTTP móveis herdadas não está disponível.
  </Collapser>
</CollapserGroup>

## Habilitar distributed tracing [#enable]

Distributed tracing é habilitado por padrão. Para obter informações de configuração, consulte [opções de configuração distributed tracing ](/docs/distributed-tracing/concepts/quick-start)para começar.
