---
title: Configuración avanzada del agente Prometheus
tags:
  - Integrations
  - Prometheus integrations
  - Install and configure Prometheus agent
  - Advanced configuration
metaDescription: Advanced configuration for the Prometheus agent
freshnessValidatedDate: never
translationType: machine
---

## Evitar aumentos de facturación [#rate-limits]

Evite enviar datos de Prometheus que no sean relevantes para sus necesidades de monitoreo. En su lugar, utilice filtros para ignorar o incluir métricas específicas, que le ayudarán a controlar la cantidad de datos que envía a New Relic y evitar cargos de facturación adicionales.

Como se explica en la [guía de configuración](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/setup-prometheus-agent), algunos objetivos se eliminan de forma predeterminada y se envían todos los datos expuestos de esos objetivos descubiertos. Por lo tanto, puede exceder los límites de la plataforma de New Relic y aumentar sus cargos de facturación.

Para reducir la cantidad de datos que se configuran, puede personalizar la configuración del agente Prometheus:

* Estableciendo [qué objetivos se están eliminando](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/setup-prometheus-agent#scrape-prometheus-integrations).
* Ajustando el [intervalo de raspado](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/setup-prometheus-agent#target-scrape-interval).
* Aplicando [filtros métricos](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/setup-prometheus-agent#drop-keep-metrics).
* Al configurar [qué integración de Prometheus están habilitadas](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/advanced-configuration#enable-disable-integrations).

Consulte también nuestros [consejos para la resolución de problemas](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/troubleshooting-guide).

## Activar o desactivar la integración de Prometheus [#enable-disable-integrations]

El agente prometheus utiliza los campos `app_values` y `source_labels` para extraer métrica de Prometheus integración, que puede personalizar. Puede consultar los valores predeterminados en [el gráfico del repositorio de GitHub](https://github.com/newrelic/newrelic-prometheus-configurator/blob/main/charts/newrelic-prometheus-agent/values.yaml).

* `source_labels` define los nombres de las etiquetas que se utilizarán para filtrar métricas de los recursos correspondientes.
* `app_values` define los valores de los nombres de etiquetas que se filtran.

Para instancia, con los siguientes valores:

```yaml
# (...)
kubernetes:
  source_labels: ["app.kubernetes.io/name", "app.newrelic.io/name"]
  app_values: ["redis"]
# (...)
```

Todos los trabajos con `integrations_filter.enabled: true` incluirían solo la métrica incluyendo las etiquetas correspondientes a `"app.kubernetes.io/name"` y `"app.newrelic.io/name"`, cuyo valor es `"redis"`.

Puede ampliar los valores predeterminados para incluir etiquetas o valores de aplicación adicionales. También puedes eliminar los valores cuyos servicios hacen referencia en la aplicación predeterminada que no te interesan.

## Aplicar la configuración nativa de Prometheus [#native-config]

Si tiene algún tipo de requisito que actualmente no es compatible con la capa de configuración que proporciona el agente de Prometheus, puede configurar una configuración de extracción adicional en formato Prometheus. Para hacerlo, utilice los campos `extra_` que incluyen la configuración válida de Prometheus que no se analizará de ninguna manera.

<Callout variant="important">
  `extra_` Los campos deben incluir la configuración sin formato de Prometheus.
</Callout>

Por lo tanto, la métrica recopilada no tendrá por defecto los metadatos como `pod` o `service`, agregados por el agente para los trabajos de objetivo estático o Kubernetes . Utilice esta configuración solo como solución alternativa cuando los campos admitidos no cubran sus necesidades. Vea más detalles en la [documentación del gráfico de timón](https://github.com/newrelic/newrelic-prometheus-configurator/blob/main/charts/newrelic-prometheus-agent/README.md).
