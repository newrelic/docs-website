---
title: Node.js métrica personalizada
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: An overview of custom metrics for New Relic's Node.js agent and how to implement them for your application.
freshnessValidatedDate: never
translationType: machine
---

Registre datos de rendimiento arbitrarios a través de una llamada API, por ejemplo, datos de tiempo o recursos informáticos. Utilice [métrica y evento](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer) para buscar su métrica personalizada, crear gráficos personalizables y agregar esos gráficos al panel de New Relic. El uso de métrica personalizada unifica su seguimiento dentro de New Relic.

<Callout variant="caution">
  Recopilar demasiadas métricas puede afectar el rendimiento de su aplicación y de su agente New Relic. Para evitar problemas de datos, mantenga el número total de métricas únicas personalizadas por debajo de 2000.
</Callout>

## Nombra tu métrica [#metric_names]

Los nombres métricos son caminos delimitados por el carácter `/` . Para métrica personalizada utilice este patrón:

```
<category>/<class>/<method>
```

Para nombres métricos personalizados, utilice `<class>/<method>` o `<category>/<name>`. Por ejemplo, utilice `MyCategory/My_method`).

<Callout variant="important">
  Para versiones anteriores al agente Node.js v5, debe anteponer su métrica con `Custom/`. El agente no antepondrá automáticamente métrica personalizada a esto para evitar colisiones con la métrica interna.
</Callout>

## Registro métrico personalizado [#recording-custom-metrics]

La API pública para registrar datos métricos consta de dos métodos en `newrelic`:

* [`recordMetric`](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#record_metric): se utiliza para crear una nueva métrica personalizada.
* [`incrementMetric`](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#increment_metric): se utiliza para actualizar el valor de una métrica personalizada.

## Ejemplo de métrica personalizada [#example]

A continuación se muestra un ejemplo que muestra cómo se puede utilizar métrica para realizar un seguimiento del flujo de divisas a través de un sitio:

```js
app.post('/cart/checkout', function(req, res) {
  var total = computeCartTotal(req.user);
  newrelic.recordMetric('Cart/ChargeAmount', total);
  // ...
});
```

## Ver métrica personalizada [#viewing-custom]

Para ver métricas personalizadas, consulte [visualizar su métrica personalizada después de crearla](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer#visualize-metric) y [métrica e incluso](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer) buscar métricas, crear gráficos personalizables y agregar esos gráficos al panel de New Relic.
