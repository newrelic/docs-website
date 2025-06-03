---
title: Crear métrica personalizada en Go
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: 'With New Relic Go monitoring, you can create custom metrics to time a component of your app that may not captured by default.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Recomendamos utilizar la [API de métrica](/docs/data-apis/ingest-apis/metric-api/introduction-metric-api/) para enviar tu métrica personalizada a la plataforma New Relic.
</Callout>

[Las métricas personalizadas](/docs/agents/manage-apm-agents/agent-data/collect-custom-metrics) te permiten reportar cualquier métrica que pase por tu código. Por ejemplo, con [el monitoreo Go](/docs/agents/go-agent/get-started/get-new-relic-go) de New Relic, puede crear métricas personalizadas para cronometrar un componente de su aplicación que puede no capturarse de forma predeterminada. Una vez que capture una métrica personalizada, podrá:

* Unifica tu seguimiento dentro de New Relic a través del [explorador de métricas y eventos](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer).
* Utilice nuestra [API REST](/docs/apis/rest-api-v2/requirements/new-relic-rest-api-v2-getting-started) para recuperar y utilizar mediante programación datos métricos personalizados fuera de la UI.
* [Cree una condición de alerta de métrica personalizada](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) para notificarle a usted o a su equipo cuando su métrica personalizada exceda valores específicos.

## Crear una métrica personalizada [#create]

1. Cree una instancia de su aplicación ejecutando lo siguiente:

   ```go
   app, err := newrelic.NewApplication(
     newrelic.ConfigAppName("Your Application Name"),
     newrelic.ConfigLicense("NEW_RELIC_LICENSE_KEY"),
     newrelic.ConfigDebugLogger(os.Stdout),
   )
   ```

2. Después de crear una instancia de su aplicación, cree una métrica personalizada con el siguiente código:

   ```go
   app.RecordCustomMetric(
       "CustomMetricName",         //name of your metric
       132,                         //time in ms
   );
   ```

   * `RecordCustomMetric`El primer parámetro es una cadena que nombra su métrica personalizada.

   * El método `RecordCustomMetric` antepondrá automáticamente la cadena `Custom/` al nombre de su métrica. Esto significa que el código anterior generará una métrica llamada `Custom/CustomMetricName`.

   * `RecordCustomMetric`El segundo parámetro es el tiempo, en milisegundos, que desea registrar para su transacción personalizada. Esto significa que el código anterior producirá una métrica de .132 segundos en los sistemas de New Relic.

   * Para utilizar una métrica personalizada como contador, se puede incrementar realizando la llamada como se describe anteriormente y el valor `count` para esa métrica se incrementará en 1. El valor que use para el segundo parámetro (tiempo en ms) es irrelevante si solo usa la métrica como contador y, por lo tanto, puede usar un número estático, como 0 o 1.

     * Para incrementar un contador en un número mayor que 1, llame a `app.RecordCustomMetric` varias veces; cada llamada solo incrementará la métrica en 1, sin importar cuál sea el valor del segundo parámetro.

## Nombra una métrica personalizada [#name]

Considere cuidadosamente cómo nombra su métrica personalizada. Si su programa crea demasiadas métricas con nombres únicos, puede terminar con un [problema de agrupación de métricas (MGI)](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues).

Los MGI ocurren cuando la granularidad de los nombres métricos es demasiado fina, lo que da como resultado cientos o miles de nombres métricos diferentes. Una causa común de MGI es confiar en el nombre completo de la URL para la denominación métrica en transacciones web. Algunas rutas de código importantes pueden generar muchas rutas URL completas diferentes a documentos, artículos, páginas, etc. únicos.

Si el elemento único de la ruta URL se incluye en el nombre de la métrica, cada una de estas rutas comunes tendrá su propio nombre de métrica único. Si ocurren problemas de agrupación métrica, siga los [procedimientos de resolución de problemas](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues).
