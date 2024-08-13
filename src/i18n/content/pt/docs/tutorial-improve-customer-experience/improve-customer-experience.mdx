---
title: Melhore a experiência dos seus clientes
metaDescription: 'New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application''s performance to improve your customer experience.'
freshnessValidatedDate: '2023-08-16T00:00:00.000Z'
translationType: machine
---

Depois de [estabelecer o estado atual do desempenho da sua experiência digital](/docs/tutorial-customer-experience/establish-current-state/), é hora de pegar as informações coletadas e usá-las para começar a melhorar a experiência dos seus clientes. Como suas necessidades podem variar, só você pode saber quais áreas precisa melhorar. As etapas a seguir são uma ordem sugerida para melhorar a experiência de seus clientes, e você pode concentrar sua atenção no que é mais relevante para você e ignorar o que não é. Como este é um processo contínuo, recomendamos que você adicione esta página aos favoritos para que possa consultá-la no futuro, à medida que seus KPIs mudarem.

Depois de [estabelecer seu estado atual](/docs/tutorial-customer-experience/establish-current-state/), você saberá como será a experiência do usuário em todo o sistema. A partir daí, você precisa determinar quais das seguintes áreas precisam melhorar:

1. <DNT>
     **Start with business priorities:**
   </DNT>

   Se você tiver diretrizes comerciais claras, deverá se concentrar no que é mais importante para sua organização. Por exemplo, se sua empresa lançou recentemente uma nova iniciativa em torno de uma linha de negócios, mas os KPIs associados à interface estão abaixo do destino, este é um ótimo lugar para concentrar seus esforços.

2. <DNT>
     **Align your data to your KPIs:**
   </DNT>

   Seus principais indicadores de desempenho fornecem insights sobre os vários aspectos do seu sistema que atuam como pontos problemáticos para seus clientes. Pegue esses dados e compare-os com seus KPIs para ver onde precisa melhorar.

3. <DNT>
     **Filter each segment:**
   </DNT>

   Pegue cada um dos segmentos criados no documento anterior e agrupe-os para ver se você precisa se concentrar mais em regiões, dispositivos específicos ou qualquer outro agrupamento útil.

### Melhore os KPIs de destino [#improve-kpi]

Para acompanhar seu progresso, crie um novo dashboard (ou adicione uma nova página ao dashboard existente) e nomeie-o como `Quality Foundation KPI Improvement`. Para obter mais informações, consulte [Melhorar o tempo de operação da web](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-web-uptime).

### Melhore o desempenho de carregamento da página [#improve-performance]

Depois de criar o dashboard de base de qualidade, é hora de restringir seu foco às páginas específicas que não atendem aos valores de KPI de destino.

Para cada resultado de KPI de carregamento de página relatado como ruim no dashboard de base de qualidade , remova a cláusula `COMPARE WITH` e adicione `FACET pageUrl/targetGroupedUrl LIMIT MAX` para descobrir quais páginas apresentam desempenho insatisfatório. Use `targetGroupedUrl` quando houver muitos resultados, como quando o ID do cliente faz parte da URL. Caso contrário, use `pageUrl`.

Consulta dashboard original:

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' SINCE 1 week AGO COMPARE WITH 1 week AGO 
```

Nova consulta para identificar páginas problemáticas:

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' FACET targetGroupedUrl LIMIT MAX
```

Depois de identificar as páginas que precisam ser melhoradas, consulte as orientações em [Melhorar o desempenho do carregamento da página](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-page-load).

### Melhorar o tempo de resposta do AJAX [#improve-ajax-response]

Depois de localizar e corrigir qualquer tempo de carregamento da página insuficiente, o tempo de resposta AJAX é um ótimo lugar para prosseguir. Para encontrar o ritmo de resposta lento do AJAX:

1. Vá para o widget de duração AJAX no dashboard.

2. Selecione

   <DNT>
     **View query**
   </DNT>

   e abra no criador de consulta.

3. Adicione `facet requestUrl LIMIT MAX` ao final da consulta.

4. Execute a consulta.

5. Visualize os resultados como uma tabela e salve no dashboard de melhoria de KPI como `LOB - AjaxResponseTimes`.

6. Concentre-se na melhoria das solicitações com `timeToSettle` > 2,5s.

Para obter mais informações sobre como melhorar suas solicitações AJAX, confira nossas [dicas de resolução de problemas AJAX](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls/).

### Melhorar a taxa de erros do AJAX [#improve-ajax-error]

Depois de identificar e melhorar seu tempo de resposta AJAX, você também deve melhorar a taxa de erro, pois já está lidando com AJAX. Para encontrar as solicitações com falha:

1. Acesse

   <InlinePopover type="dashboards"/>

   \> criador de consulta.

2. Insira e execute a seguinte consulta:

   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND <Ajax Request filter>
   SINCE 1 week AGO facet pageUrl, appName
   ```

3. Visualize os resultados como uma tabela e salve no dashboard de melhoria de KPI como `LOB - Pages with AjaxErrors`.

4. Execute a consulta novamente nas páginas mais problemáticas para encontrar as solicitações que estão falhando:

   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND pageUrl=PROBLEMATIC_PAGE AND appName = YOUR_APP_NAME <Ajax Request filter> 
   SINCE 1 week AGO facet requestUrl
   ```

   Depois de identificar com sucesso quaisquer taxas de erros AJAX insuficientes, consulte nossas [dicas de resolução de problemas AJAX](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls) para obter mais informações sobre como você pode melhorar seu tempo de resposta.

### Melhore os erros de JavaScript [#improve-java]

Para encerrar seu processo de melhoria, você deve se concentrar na correção de erros excessivos de JavaScript. Para encontrar as falhas mais comuns:

1. Vá para

   <InlinePopover type="dashboards"/>

   \> criador de consulta

2. Insira e execute a seguinte consulta:

   ```
   FROM JavaScriptError 
   SELECT count(errorClass) 
   SINCE 1 week AGO WHERE <PageView filter>  
   FACET transactionName, errorClass, errorMessage, domain
   ```

3. Visualize os resultados como uma tabela e salve no dashboard de melhoria de KPI como `LOB - Javascript Errors`.

4. Use essas informações para descobrir quais erros precisam ser resolvidos. Consulte nossa [página de erros de JavaScript: documento Detectar e analisar erros](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors/) para obter mais informações.

5. Remova erros de terceiros que não agregam valor.

<Callout variant="tip">
  Você pode estar usando um JavaScript de terceiros que é barulhento, mas funciona conforme o esperado. Você pode adotar algumas abordagens:

  * Remova o nome de domínio do widget de proporção de erros de JavaScript/visualização de página e adicione-o como seu próprio widget para que você possa ver alterações inesperadas. Você pode alertar sobre isso usando o alerta [NRQL de anomalia](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-baseline-alert-conditions/) .
  * Elimine o erro de JavaScript usando [filtros de eliminação](/docs/logs/log-management/ui-data/drop-data-drop-filter-rules). Utilize esta opção apenas se o volume de erros estiver a afetar significativamente a sua ingestão de dados. Seja o mais específico possível no filtro de queda.
</Callout>

## Seguindo em frente [#movingforward]

Depois de seguir o procedimento acima, é uma boa ideia revisar seus KPIs regularmente para garantir que a experiência de seus clientes seja sempre de qualidade adequada. Cada organização terá necessidades diferentes e, portanto, os procedimentos usados serão exclusivos da sua organização. No entanto, você pode manter as seguintes sugestões em mente:

* Revisite a métrica de desempenho ao final de cada sprint.
* Incorpore melhorias de desempenho nos sprints dos desenvolvedores.
* Compartilhe abertamente as métricas com as linhas de negócio que você apoia, bem como com outros stakeholders internos.
* Definir SLOs de experiência dos clientes.
* [Crie alertas](/docs/tutorial-create-alerts/create-new-relic-alerts/) para quedas críticas de negócios nos KPIs básicos de qualidade.

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-customer-experience/bottom-funnel-analysis/","title":"Próxima Etapa","body":"Aprenda como analisar o final da experiência de um cliente para melhorar suas conversões"}}
  previousStep={{"path":"/docs/tutorial-customer-experience/establish-current-state/","title":"Passo anterior","body":"Aprenda como estabelecer seu estado atual para criar sua linha de base"}}
/>
