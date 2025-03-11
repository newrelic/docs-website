---
title: Mejora la experiencia de tus clientes
metaDescription: 'New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application''s performance to improve your customer experience.'
freshnessValidatedDate: '2023-08-16T00:00:00.000Z'
translationType: machine
---

Una vez que haya [establecido el estado actual del rendimiento de su experiencia digital](/docs/tutorial-customer-experience/establish-current-state/), es hora de tomar la información que ha recopilado y utilizarla para comenzar a mejorar la experiencia de sus clientes. Dado que sus necesidades pueden variar, solo usted puede saber qué áreas necesita mejorar. Los siguientes pasos son un orden sugerido para mejorar la experiencia de sus clientes, y usted puede centrar su atención en lo que es más relevante para usted y omitir lo que no lo es. Como se trata de un proceso continuo, le recomendamos que marque esta página como favorita para poder consultarla en el futuro a medida que cambien sus KPI.

Después de [establecer su estado actual](/docs/tutorial-customer-experience/establish-current-state/), sabrá cómo es su experiencia del usuario en todo su sistema. A partir de ahí, es necesario determinar cuáles de las siguientes áreas deben mejorar:

1. <DNT>
     **Start with business priorities:**
   </DNT>

   Si tiene directivas comerciales claras, debe concentrarse en lo que más le importa a su organización. Por ejemplo, si su empresa lanzó recientemente una nueva iniciativa en torno a una línea de negocio pero los KPI asociados con la UI están por debajo del objetivo, este es un excelente lugar para concentrar sus esfuerzos.

2. <DNT>
     **Align your data to your KPIs:**
   </DNT>

   Sus indicadores de rendimiento clave brindan información valiosa sobre los diversos aspectos de su sistema que actúan como puntos débiles para sus clientes. Tome esos datos y compárelos con sus KPI para que pueda ver dónde necesita mejorar.

3. <DNT>
     **Filter each segment:**
   </DNT>

   Tome cada uno de los segmentos que creó en el documento anterior y agrúpelos para ver si necesita centrarse más en regiones, dispositivos o cualquier otra agrupación útil específica.

### Mejorar los KPI objetivos [#improve-kpi]

Para realizar un seguimiento de su progreso, cree un nuevo dashboard (o agregue una nueva página al dashboard existente) y asígnele el nombre `Quality Foundation KPI Improvement`. Para obtener más información, consulte [Mejorar el tiempo de actividad web](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-web-uptime).

### Mejorar el rendimiento de carga de la página [#improve-performance]

Una vez que haya creado el dashboard básico de calidad, es hora de limitar su enfoque a las páginas específicas que no cumplen con los valores de KPI objetivo.

Para cada resultado de KPI de carga de página que se informe como deficiente en el dashboard de control de calidad, elimine la cláusula `COMPARE WITH` y agregue `FACET pageUrl/targetGroupedUrl LIMIT MAX` para encontrar qué páginas tienen un rendimiento deficiente. Utilice `targetGroupedUrl` cuando haya muchos resultados, como cuando el ID del cliente sea parte de la URL. De lo contrario, utilice `pageUrl`.

Consulta dashboard original:

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' SINCE 1 week AGO COMPARE WITH 1 week AGO 
```

Nueva consulta para identificar páginas problemáticas:

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' FACET targetGroupedUrl LIMIT MAX
```

Una vez que haya identificado las páginas que desea mejorar, consulte la guía en [Mejorar el rendimiento de carga de la página](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-page-load).

### Mejorar el tiempo de respuesta de AJAX [#improve-ajax-response]

Después de localizar y corregir cualquier tiempo de carga de la página insuficiente, el tiempo de respuesta AJAX es un excelente lugar para pasar al siguiente. Para encontrar el tiempo de respuesta AJAX lento:

1. Vaya al widget de duración de AJAX en el dashboard.

2. Seleccione

   <DNT>
     **View query**
   </DNT>

   y luego ábralo en el generador de consultas.

3. Agregue `facet requestUrl LIMIT MAX` al final de la consulta.

4. Ejecute la consulta.

5. Vea los resultados como una tabla y guárdelos en su dashboard de mejora de KPI como `LOB - AjaxResponseTimes`.

6. Concéntrese en mejorar las solicitudes con un `timeToSettle` > 2,5 s.

Para obtener más información sobre cómo mejorar sus solicitudes de AJAX, consulte nuestros [consejos de resolución de problemas de AJAX](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls/).

### Mejorar la tasa de errores AJAX [#improve-ajax-error]

Después de identificar y mejorar su tiempo de respuesta de AJAX, también debe pasar a mejorar la tasa de errores, ya que ya está trabajando con AJAX. Para encontrar las solicitudes fallidas:

1. Ir a

   <InlinePopover type="dashboards"/>

   \> generador de consultas.

2. Ingrese y ejecute la siguiente consulta:

   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND <Ajax Request filter>
   SINCE 1 week AGO facet pageUrl, appName
   ```

3. Vea los resultados como una tabla y guárdelos en su dashboard de mejora de KPI como `LOB - Pages with AjaxErrors`.

4. Ejecute la consulta nuevamente para las páginas más problemáticas para encontrar las solicitudes que fallan:

   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND pageUrl=PROBLEMATIC_PAGE AND appName = YOUR_APP_NAME <Ajax Request filter> 
   SINCE 1 week AGO facet requestUrl
   ```

   Una vez que haya identificado con éxito cualquier tasa de errores AJAX insuficiente, consulte nuestros [consejos de resolución de problemas AJAX](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls) para obtener más información sobre cómo puede mejorar su tiempo de respuesta.

### Mejorar errores de JavaScript [#improve-java]

Para concluir su proceso de mejora, debe concentrarse en corregir errores excesivos de JavaScript. Para encontrar las fallas más comunes:

1. Ir a

   <InlinePopover type="dashboards"/>

   \> generador de consultas

2. Ingrese y ejecute la siguiente consulta:

   ```
   FROM JavaScriptError 
   SELECT count(errorClass) 
   SINCE 1 week AGO WHERE <PageView filter>  
   FACET transactionName, errorClass, errorMessage, domain
   ```

3. Vea los resultados como una tabla y guárdelos en su dashboard de mejora de KPI como `LOB - Javascript Errors`.

4. Utilice esta información para determinar qué errores deben corregirse. Consulte nuestra [página de errores de JavaScript: documento Detectar y analizar errores](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors/) para obtener más información.

5. Elimina errores de terceros que no aportan valor.

<Callout variant="tip">
  Es posible que esté utilizando un JavaScript de terceros que es ruidoso pero funciona como se esperaba. Puede adoptar un par de enfoques:

  * Elimine el nombre de dominio del widget de proporción de error de JavaScript/página vista y agréguelo como su propio widget para que pueda ver cambios inesperados. Puede alertar sobre esto usando la alerta [Anomaly NRQL](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-baseline-alert-conditions/) .
  * Elimine el error de JavaScript utilizando [filtros de eliminación](/docs/logs/log-management/ui-data/drop-data-drop-filter-rules). Utilice esta opción únicamente si el volumen de errores está afectando su ingesta de datos de manera significativa. Sea lo más específico que pueda en el filtro de caída.
</Callout>

## Avanzando [#movingforward]

Después de haber seguido el procedimiento anterior, es una buena idea revisar sus KPI periódicamente para asegurarse de que la experiencia de sus clientes sea siempre de la calidad adecuada. Cada organización tendrá necesidades diferentes, por lo que los procedimientos que utilice serán exclusivos de su organización. Sin embargo, puedes tener en cuenta las siguientes sugerencias:

* Revisar la métrica de rendimiento al final de cada sprint.
* Incorpore mejoras de rendimiento en los sprints de los desarrolladores.
* Comparte abiertamente métrica con las líneas de negocio que apoyas así como con otros stakeholders internos.
* Definir los SLO de la experiencia de los clientes.
* [Cree alertas](/docs/tutorial-create-alerts/create-new-relic-alerts/) para caídas críticas para el negocio en los KPI básicos de calidad.

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-customer-experience/bottom-funnel-analysis/","title":"Próximo paso","body":"Aprenda a analizar el final de la experiencia de un cliente para mejorar sus conversiones"}}
  previousStep={{"path":"/docs/tutorial-customer-experience/establish-current-state/","title":"Paso anterior","body":"Aprende cómo establecer tu estado actual para crear tu línea de base"}}
/>
