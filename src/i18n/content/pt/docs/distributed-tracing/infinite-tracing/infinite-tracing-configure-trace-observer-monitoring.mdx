---
title: 'Rastreamento infinito: configurar o monitoramento do observador trace'
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: The trace observer monitoring feature allows you to see if New Relic is handling your traces as you expect.
freshnessValidatedDate: never
translationType: machine
---

O Infinite Tracing (anteriormente chamado de "New Relic Edge") oferece monitoramento do observador trace para que você possa obter insights adicionais sobre o comportamento de amostragem do observador trace . Este recurso opcional mostra a quantidade de rastreamento visto e mantido pelo observador trace . As métricas do observador trace são gravadas na conta que você escolher e ficam disponíveis para visualização nas configurações do Infinite Tracing ou em nosso criador de consulta.

Ao ativar o monitoramento, a métrica do observador trace pode ser gravada em qualquer conta na hierarquia de contas do New Relic. Isto permite controlar a visibilidade da métrica. Antes de ativá-lo, você precisa decidir qual conta deverá receber a métrica do trace Observer.

<Callout variant="tip">
  Se você ativar esse recurso, verá uma pequena cobrança mensal adicional. Para ter uma ideia de quais cobranças você pode incorrer, no modelo de preços atual, você poderá ver uma cobrança mensal adicional de 1,6 centavos com base no seguinte:

  * Número de métricas: 2
  * Taxa: a cada 10 segundos
  * Contagem de atributos: 2-5
</Callout>

## Habilitar monitoramento do observador trace [#enable-monitoring]

Você pode ativar o monitoramento do observador trace clicando em um botão na interface do New Relic. Assim que você habilita o monitoramento trace Observer, as métricas trace Observer são capturadas e exibidas no aplicativo ou você pode visualizá-las no criador de consulta. As métricas trace Observer não são retroativas e são capturadas apenas quando o monitoramento trace Observer está habilitado.

Para ativar o monitoramento do observador trace :

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**
   </DNT>

   .

2. Confirme se você está na conta onde deseja registrar a métrica do observador trace .

3. Clique no botão de alternância

   <DNT>
     **Trace observer monitoring**
   </DNT>

   .

## Alternar contas de monitoramento do observador trace [#switch-accounts]

Se você decidir em algum momento que deseja alterar qual conta recebe a métrica do observador trace , poderá fazer isso nas configurações do Rastreamento Infinito.

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**
   </DNT>

   .

2. Use o seletor de contas para mudar para a conta onde deseja gravar a métrica do observador trace .

3. Clique no botão de alternância para desativar o monitoramento do observador trace .

4. Clique no botão de alternância para reativar o monitoramento do observador trace na conta atual.

<Callout variant="tip">
  Quando o monitoramento do observador trace está ativado ou desativado, um `NrAuditEvent` é gravado na conta onde a alteração ocorreu. Este evento ajuda você a acompanhar quaisquer alterações feitas no observador trace .
</Callout>

## Ver métrica do observador trace [#view-metrics]

Qualquer pessoa com acesso à conta de monitoramento pode visualizar a métrica do observador trace nas configurações do Infinite Tracing ou em nosso criador de consulta.

Se você não tiver acesso à conta de monitoramento, não poderá ver nenhuma métrica do observador trace nas configurações do Infinite Tracing ou executar consulta NRQL nessas métricas. Aqui está o que você verá se não tiver acesso:

<img
  title="Screenshot showing what appears in Infinite Tracing settings if you don't have access to the monitoring account that is receiving metrics."
  alt="Screenshot showing what appears in Infinite Tracing if you don't have access to the monitoring account that is receiving metrics."
  src="/images/distributed-tracing_screenshot-full_trace-monitoring-toggle.webp"
/>

### Visualizar métricas nas configurações de rastreamento infinito [#view-in-edge]

Quando você ativa o monitoramento do observador trace , as métricas do observador trace são exibidas nas configurações do Rastreamento Infinito:

* Duas colunas são adicionadas à listagem principal do observador trace :

  * <DNT>
      **Traces Seen**
    </DNT>

    : Quantos traços foram vistos pelo observador trace nos últimos 60 minutos.

  * <DNT>
      **Traces Kept**
    </DNT>

    : o número e a porcentagem de rastreamento que foram retidos.

* Um novo painel é adicionado no lado direito da tela:

  * <DNT>**Monitoring account**</DNT>: No topo do painel direito, esta é a conta onde estão escritas as métricas do observador trace .

  * <DNT>**How many traces were kept?**</DNT> (gráfico superior): mostra as mesmas informações que <DNT>**Traces Kept**</DNT>, mas mostra como fica ao longo do tempo. Você pode ver a magnitude da amostragem e quaisquer tendências.

  * <DNT>**Which traces were kept?**</DNT> (gráfico inferior): Mostra quais categorias de rastreamento foram mantidas. O gráfico mostra se o rastreamento foi capturado por diferentes tipos de filtros de rastreamento infinito:

    * Duração (rastreamento lento)
    * Aleatório
    * Filtros de atributo Span (rastreamento com erros ou outro atributo que você especificar)

    <img
      title="Screenshot of graph showing which traces were kept."
      alt="Screenshot of graph showing which traces were kept."
      src="/images/distributed-tracing_screenshot-crop_how-many-traces-kept.webp"
    />

### Ver em criador de consulta

Se preferir uma forma programática de visualização da métrica, aqui estão alguns exemplos de consulta NRQL. Estes exemplos replicam os dois gráficos das configurações do Infinite Tracing:

<DNT>**How many traces were kept?**</DNT> (topo nas paradas):

```sql
FROM Metric SELECT sum(monitoring.trace.opened.session.count) AS 'Traces seen', sum(monitoring.trace.sampled.count) AS 'Traces kept' WHERE account = INSERT_THE_MONITORING_ACCOUNT_ID TIMESERIES
```

<DNT>**Which traces were kept?**</DNT> (gráfico inferior):

```sql
FROM Metric SELECT sum(monitoring.trace.sampled.count) WHERE account = INSERT_THE_MONITORING_ACCOUNT_ID AND newRelic.traceFilter.type IS NOT NULL FACET newRelic.traceFilter.type LIMIT 3 TIMESERIES
```
