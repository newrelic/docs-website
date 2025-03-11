---
title: Regras de normalização métrica
tags:
  - New Relic
  - Use New Relic
  - UI and data
metaDescription: How to create and manage rules in New Relic  to deal with noise from high cardinality metrics and prevent metric grouping issues (MGIs).
freshnessValidatedDate: never
translationType: machine
---

Pode haver casos em que uma aplicação envie muitas métricas individuais que poderiam ser melhor gerenciadas em grupos. A maioria deles ocorre com transações da web métrica nomeadas a partir de URLs. Para uma explicação desta questão, consulte [questões de agrupamento métrico](/docs/using-new-relic/cross-product-functions/troubleshooting/metric-grouping-issues) (MGIs).

Para reduzir a cardinalidade alta e evitar problemas de agrupamento métrico, o New Relic suporta regras para agrupar ou filtrar dados métricos de fração de tempo (normalização). Em alguns casos, quando são detectados problemas de agrupamento métrico com um número muito elevado de métricas, é criada automaticamente uma regra para proteger a plataforma da degradação do desempenho.

## Requisitos [#requirements]

Questões de agrupamento métrico e normalização métrica aplicam-se apenas a [dados métricos de fração de tempo](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data). <InlinePopover type="apm"/>agente, agente móvel e <InlinePopover type="browser"/>agente reportam e exibem dados métricos de fração de tempo.

## Gerenciamento de regras de normalização métrica [#create-rules]

Você pode criar e gerenciar novas regras que tratam do ruído produzido pelas métricas de cardinalidade alta usando a ferramenta de normalização métrica, que é acessível a partir de cada dashboard serviço no [explorador de entidade](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find). Uma vez lá, selecione <DNT>**Metric normalization**</DNT> na barra lateral esquerda.

Lá você pode ver as regras existentes ou criar novas. Clique em uma regra para modificá-la ou clique em <DNT>**Create a new rule**</DNT> para criar uma nova. Um novo painel para configurar a regra será exibido.

<img
  style={{ width: '324px', height: '352px'}}
  class="inline"
  title="create new rule.png"
  alt="Create New Rule"
  src="/images/solutions_screenshot-full_create-new-rule-window.webp"
/>

Os campos disponíveis são:

* <DNT>**Order**</DNT>: determina a precedência da regra. Um número menor significa maior precedência.

* <DNT>**Match expression**</DNT>: Insira a expressão regular para agrupar todas as métricas que deseja incluir na regra.

* <DNT>**Matches**</DNT>: Aqui você verá uma prévia da métrica correspondente à expressão regular acima.

* <DNT>**Action**</DNT>: A ação que você deseja realizar na métrica.

  * <DNT>
      **Replace**
    </DNT>

    : Substitua a métrica correspondente pela expressão regular pelo valor descrito no campo

    <DNT>
      **Replacement**
    </DNT>

    .

  * <DNT>
      **Ignore**
    </DNT>

    : ignore qualquer métrica que corresponda à expressão regular.

  * <DNT>
      **Deny new metrics**
    </DNT>

    : Escrever apenas métricas que já foram reportadas, e ignorar aquelas que correspondem à expressão regular.

* <DNT>**Replacement**</DNT>: ativo somente quando <DNT>**Replace**</DNT> está ativado. As métricas correspondentes são substituídas pelo valor do campo. Se a expressão regular estiver capturando grupos, você pode usar o espaço reservado para eles com `\1` ou `\2` para os grupos `1` e `2` respectivamente.

* <DNT>**Active**</DNT>: as regras não podem ser excluídas, mas podem ser desativadas. Clique no botão de alternância para ativar ou desativar a regra.

* <DNT>**Terminate**</DNT>: quando ativado, a cascata de regras é encerrada quando o padrão associado é correspondido.

* <DNT>**Notes**</DNT>: Notas internas sobre a regra. Não tem efeito na regra.

Depois de configurar os campos, clique em <DNT>**Create**</DNT> (ou <DNT>**Edit**</DNT> caso esteja editando uma regra existente) e a regra será aplicada imediatamente, desde que seja <DNT>**Active**</DNT>.
