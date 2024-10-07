---
title: 'Monitoreo sintético: informe SLA'
tags:
  - Synthetics
  - Synthetic monitoring
  - Pages
metaDescription: 'Use SLA reports to view summary performance metrics across all your monitors, and to compare your current performance to historical metrics.'
freshnessValidatedDate: never
translationType: machine
---

Utilice informes SLA para ver el resumen métrico del rendimiento a lo largo del tiempo o en varios monitores. Compare su desempeño actual con métricas históricas con informes diarios, semanales y mensuales.

## Ver informes de SLA de monitoreo sintético [#viewing]

Para ver el informe SLA de toda la cuenta: vaya a <DNT>**[one.newrelic.com > Synthetic monitoring > SLA Report](https://one.newrelic.com/synthetics-nerdlets/global-sla)**</DNT>. Elija entre informes agregados por día, semana o mes seleccionando <DNT>**Daily**</DNT>, <DNT>**Weekly**</DNT> o <DNT>**Monthly**</DNT> según corresponda.

También puede ver informes de SLA para monitores individuales: vaya a <DNT>**[one.newrelic.com > Synthetic monitoring > SLA](https://one.newrelic.com/synthetics-nerdlets/global-sla)**</DNT>.

<img
  title="screen-synthetics-sla-report.png"
  alt="screen-synthetics-sla-report.png"
  src="/images/synthetic_screenshot-full_SLA-report.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > Synthetic monitoring > SLA](https://one.newrelic.com/synthetics-nerdlets/global-sla)**</DNT>: utilice informes SLA para comprender el rendimiento de su monitor a lo largo del tiempo.
</figcaption>

## Comprender el informe SLA métrico [#understanding]

Utilice informes SLA para ver métricas de rendimiento agregadas para un solo monitor o para todos sus monitores desde la página <DNT>**SLA Reports**</DNT> de toda la cuenta. Los informes SLA incluyen las siguientes métricas:

* <DNT>**Duration**</DNT>: La duración promedio de todos los resultados del monitor.

* <DNT>**Uptime**</DNT>: El porcentaje de todos los resultados del monitor que finalizaron exitosamente. Por ejemplo, el monitor A podría comprobarlo 50 veces al día y el monitor B podría comprobarlo 150 veces al día. Si monitor A tiene 29 éxitos de 50 y monitor B tiene 148 éxitos de 150, el <DNT>**Uptime**</DNT> sería 88,5:

  (29+148)/(50+150)=88,5

  Para informes de SLA individuales, la puntuación de tiempo de actividad solo incluye el monitor seleccionado.

* <DNT>**Apdex**</DNT>: El [Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) promedio en todos los monitores. El monitor tiene un [Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t) predeterminado de 7 segundos que puede modificarse al crear o actualizar su monitor Sintético. [Apdex F](/docs/apm/new-relic-apm/getting-started/glossary#apdex_f), que define un resultado frustrante, es siempre cuatro veces Apdex T. Para obtener más información sobre Apdex, consulte [Apdex: Medición de la satisfacción del usuario](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction). Para ver las puntuaciones de Apdex para su monitor Sintético usando un valor de Apdex T diferente, utilice la [función Apdex de NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-apdex) y el [evento SyntheticCheck](/attribute-dictionary/?event=SyntheticCheck).

  Para informes SLA individuales, la puntuación Apdex solo incluye el monitor seleccionado.

* <DNT>**% Satisfied**</DNT>: El porcentaje de resultados del monitor que se completan en un [tiempo "satisfactorio"](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction#bullet-satisfied). Un tiempo satisfactorio se define como un resultado del monitor que se completa en [Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t) o menos.

* <DNT>**% Toleration**</DNT>: El porcentaje de resultados del monitor que se completan en un [tiempo "tolerable"](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction#bullet-tolerating). Un tiempo tolerable es mayor que [Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t), pero menor que [Apdex F](/docs/apm/new-relic-apm/getting-started/glossary#apdex_f) (cuatro veces [Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t)).

* <DNT>**% Frustrated**</DNT>: El porcentaje de resultados del monitor que se completan en un [tiempo "frustrante"](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction#bullet-tolerating). Un tiempo frustrante es mayor que [Apdex F](/docs/apm/new-relic-apm/getting-started/glossary#apdex_f) (cuatro veces [Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t)).

El informe SLA de toda la cuenta incluye todos los tipos monitor (ping, browser simple, browser con secuencias de comandos y prueba de API).

## Usar funciones de página [#using]

Los informes SLA admiten las siguientes características:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this...**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="download-report">
      <td>
        Ver el informe en Excel o un programa externo
      </td>

      <td>
        Seleccione <DNT>**Download this report as .csv**</DNT> para descargar una copia de sus datos de SLA. Abra el archivo en Excel, Google Drive u otro editor de hojas de cálculo para analizar sus datos.
      </td>
    </tr>

    <tr id="time-frame">
      <td>
        Cambiar el marco de tiempo
      </td>

      <td>
        Elija entre agregación diaria, semanal o mensual seleccionando la pestaña adecuada.
      </td>
    </tr>
  </tbody>
</table>

## Generar valores SLA [#generating_sla_in_insights]

Los valores en el informe SLA se generan a partir de la consulta NRQL contra los datos de monitoreo sintético disponibles. Puede recrear fácilmente estos valores y modificar la consulta para satisfacer sus necesidades.

Esta consulta devuelve la duración promedio, el apdex y el tiempo de actividad. Sustituya sus valores por las variables resaltadas y descritas a continuación.

```sql
SELECT average(duration), apdex(duration, t:), percentage(count(*), WHERE result='SUCCESS') FROM SyntheticCheck FACET timeperiod
```

<table>
  <thead>
    <tr>
      <th width={200}>
        Variable
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `t:`
      </td>

      <td>
        Proporcione el [Apdex T](/docs/site/apdex-measuring-user-satisfaction#what-is) con el que le gustaría calcular su Apdex. El atributo de duración en el evento `SyntheticCheck` se almacena en milisegundos, por lo que un valor Apdex T de 7 segundos debe incluirse como 7000.
      </td>
    </tr>

    <tr>
      <td>
        `timeperiod`
      </td>

      <td>
        Este es el período que le gustaría calcular. Para <DNT>**daily report**</DNT>, faceta en `dateOf(timestamp)`, para <DNT>**weekly report**</DNT> faceta en `weekOf(timestamp)` y para <DNT>**monthly report**</DNT> faceta en `monthOf(timestamp)`.
      </td>
    </tr>
  </tbody>
</table>

De forma predeterminada, [la consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) consulta la última hora de datos. Para ampliar el alcance de sus datos, deberá incluir una [cláusula`SINCE` ](/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since)al final de su consulta.

<DNT>
  **Example #1: Daily report for the last week**
</DNT>

Para generar un informe diario de la última semana, agregaría `SINCE 1 week ago`:

```sql
SELECT average(duration), apdex(duration, t:7), percentage(count(*), WHERE result='SUCCESS') 
FROM SyntheticCheck FACET dateOf(timestamp) SINCE 1 week ago
```

<DNT>
  **Example #2: Report for a particular monitor**
</DNT>

Para limitar los resultados a un monitor en particular, puede editar la siguiente consulta para incluir un nombre de monitor específico:

```sql
SELECT average(duration), apdex(duration, t:7), percentage(count(*), WHERE result='SUCCESS') 
FROM SyntheticCheck FACET dateOf(timestamp) WHERE monitorName = 'mymonitor1'
```

<DNT>
  **Example #3: Report for multiple monitors**
</DNT>

Para aplicar los resultados a una colección de monitores:

```sql
SELECT average(duration), apdex(duration, t:7), percentage(count(*), WHERE result='SUCCESS') 
FROM SyntheticCheck FACET dateOf(timestamp) WHERE monitorName IN ('mymonitor1', 'mymonitor2', 'mymonitor3')
```
