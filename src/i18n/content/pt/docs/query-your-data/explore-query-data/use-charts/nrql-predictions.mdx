---
title: Previsões NRQL
tags:
  - Prediction on a chart
  - Forecasting on a chart
  - NRQL Predictions
  - Forecasting
metaDescription: Use NRQL Predictions to predict future trends and potential performance issues.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="visualização">
  Ainda estamos trabalhando nesse recurso, mas adoraríamos que você experimentasse!

  Atualmente, esse recurso é fornecido como parte de um programa de visualização de acordo com nossas [políticas de pré-lançamento](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

<DNT>**NRQL Predictions**</DNT> O New Relic usa dados históricos para prever tendências futuras, fornecendo insights sobre como a métrica pode se comportar no futuro. Essa abordagem proativa ajuda você a visualizar tendências e antecipar possíveis problemas, permitindo intervenções oportunas para manter o desempenho ideal do sistema. Embora <DNT>**NRQL Predictions**</DNT> em si não identifique problemas potenciais, ele fornece as informações necessárias para avaliar tendências e planejar desafios futuros.

Para identificação automática de possíveis problemas, você pode se inscrever no recurso <DNT>**[Predictive Alerts](/docs/query-your-data/explore-query-data/use-charts/nrql-predictions)**</DNT> , atualmente disponível em versão prévia pública. <DNT>**Predictive Alerts**</DNT> trabalhe junto com <DNT>**NRQL Predictions**</DNT> para disparar alertas automaticamente quando tendências projetadas indicarem um problema potencial, permitindo o gerenciamento proativo de seus sistemas.

<Callout variant="tip">
  Atualmente, a New Relic usa o [modelo Holt-Winters](https://en.wikipedia.org/wiki/Exponential_smoothing#Triple_exponential_smoothing_\(Holt_Winters\)) para previsões, que oferece suporte a padrões e tendências sazonais horários, diários e semanais em seus dados.
</Callout>

## Preços [#pricing]

O uso de <DNT>**NRQL Predictions**</DNT> é faturável durante a visualização, de acordo com seu Pedido, conforme aplicável ao modelo de preços associado à sua Conta. A consulta de idioma New Relic (NRQLS) relacionada ao uso deste recurso é faturável como o Produto de computação principal. Se esse recurso estiver disponível para o público em geral, seu uso será cobrado de acordo com seu Pedido.

Para mais detalhes sobre preços, entre em contato com nossa equipe de vendas ou consulte seu pedido.

## Inscrição [#enrollment]

Para se inscrever no recurso <DNT>**NRQL Predictions**</DNT> , navegue até <DNT>**[one.newrelic.com &gt; Administration](https://one.newrelic.com//admin-portal) &amp;gt; Preview &amp;amp; Trials**</DNT> e ative <DNT>**NRQL predictions**</DNT>.

## Adicionar previsão em um gráfico de linha ou área [#add-prediction]

Para adicionar previsão em um gráfico de linha ou área, siga estas etapas:

<Steps>
  <Step>
    ### Acessar um gráfico de linha ou área [#access-a-chart]

    1. Acesse [one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities).
    2. Para adicionar previsão a um gráfico de linha ou área, selecione-o em <DNT>**Dashboards**</DNT> ou abra-o em <DNT>**Metrics and events**</DNT>.
  </Step>

  <Step>
    ### Adicionar previsão [#add-prediction]

    Para adicionar previsão, a partir do <Icon name="fe-more-horizontal" /> menu, selecione <DNT>**Predict trend**</DNT>. No **Data Explorer**, a tendência de previsão aparece no gráfico, projetando tendências futuras. O intervalo de previsão é definido automaticamente para 20% da janela de consulta e destacado em cinza. O gráfico aparece em linhas pontilhadas dentro do intervalo previsto.

    A palavra-chave `PREDICT` é anexada à consulta do gráfico. Você pode [refinar a consulta](#customize-prediction-range) de acordo com suas necessidades e executá-la para obter a tendência atualizada.

    <Callout variant="tip">
      Quando você adiciona previsão a um gráfico de área, o tipo de gráfico muda para um gráfico de linhas com previsão.
    </Callout>
  </Step>

  <Step>
    ### Adicionar ao dashboard [#add-to-dashboard]

    1. Para adicionar o gráfico com previsão a um dashboard, clique em <DNT>**Add to dashboard**</DNT>.
    2. Insira um nome para o widget.
    3. Selecione um dashboard no qual você deseja adicionar o widget ou crie um novo dashboard para ele.

    Agora você pode visualizar o gráfico com previsão no dashboard selecionado.
  </Step>
</Steps>

## Intervalo de previsão padrão [#default-prediction-range]

Quando você adiciona uma previsão a um gráfico, a função `PREDICT` é anexada à consulta do gráfico existente com os seguintes comportamentos padrão.

* **Intervalo de previsão**: projeta 20% do tempo total especificado na janela de consulta, permitindo que você veja uma projeção de curto prazo com base nas tendências atuais.
* **Dados históricos**: Processa dados históricos da janela de consulta atual e das duas anteriores para gerar previsões.
* **Intervalo de tempo**: corresponde ao intervalo do ponto de dados da previsão na janela de consulta, garantindo consistência na projeção de dados.

Exemplo:

```sql
FROM Transaction SELECT count(*) WHERE error IS TRUE TIMESERIES PREDICT
```

A previsão padrão no gráfico aparece da seguinte forma:

<img title="default prediction" alt="default prediction" src="/images/nrql-predictions-default.webp" />

<figcaption>
  <DNT>**[one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities) &amp;gt; dashboards**</DNT>: previsão padrão.
</figcaption>

## Personalize o intervalo de previsão [#customize-prediction-range]

Você pode personalizar a previsão das seguintes maneiras. Para se familiarizar com o NRQL, consulte a [documentação do NRQL](/docs/nrql/get-started/introduction-nrql-new-relics-query-language).

<CollapserGroup>
  <Collapser id="hyperparameters" title="Personalize a consulta usando hiperparâmetros e seus níveis de suavização">
    Como <DNT>**Holt-Winters**</DNT> é o único modelo de previsão que oferecemos suporte atualmente, você pode ajustar o modelo de previsão ao seu caso de uso ajustando os hiperparâmetros e seus fatores de suavização com `holtwinters`.

    Use os seguintes hiperparâmetros para personalizar a previsão:

    * **`seasonality`**: Representa a duração do padrão sazonal na série temporal.

      * **`seasonality: <time range>`**: Representa a sazonalidade da série temporal para o intervalo de tempo especificado.
      * **`seasonality: AUTO`**: Detecta automaticamente a sazonalidade da série temporal.
      * **`seasonality: NONE`**: Desativa a sazonalidade da série temporal.

    * **`alpha`**: Representa o nível ou valor médio da série temporal.

    * **`beta`**: Representa a tendência ou inclinação da série temporal, indicando movimentos ascendentes ou descendentes.

    * **`gamma`**: Representa os padrões sazonais ou repetidos da série temporal.

    * **`phi`**: Representa o fator de amortecimento da tendência da série temporal.

    Você pode definir os fatores de suavização para **`alpha`**, **`beta`**, **`gamma`** e **`phi`**, de 0 a 1. Valores mais altos indicam mais peso em dados recentes, enquanto valores mais baixos dão mais peso a dados históricos.
  </Collapser>

  <Collapser id="prediction-range" title="Personalize a consulta por intervalo de previsão">
    Você pode personalizar a consulta projetando a previsão até um intervalo de tempo especificado. Use a palavra-chave `BY` para projetar a previsão até o intervalo de tempo especificado. Por exemplo, `PREDICT BY 3 hours`.
  </Collapser>

  <Collapser id="historical-data-range" title="Personalize a consulta processando dados históricos para um intervalo de tempo especificado">
    Você pode personalizar a consulta processando dados históricos do intervalo de tempo definido para projetar a previsão. Use a palavra-chave `USING` para processar dados históricos. Por exemplo, `PREDICT USING 1 day`.
  </Collapser>
</CollapserGroup>

Exemplo:

```sql
FROM Transaction SELECT count(*) WHERE error IS TRUE TIMESERIES PREDICT holtwinters(beta: 0.5) BY 3 hours USING 1 day
```

A previsão personalizada no gráfico aparece da seguinte forma:

<img title="Refined prediction" alt="Refined prediction" src="/images/nrql-predictions-refined.webp" />

<figcaption>
  <DNT>**[one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities) &amp;gt; dashboards**</DNT>: previsão personalizada.
</figcaption>