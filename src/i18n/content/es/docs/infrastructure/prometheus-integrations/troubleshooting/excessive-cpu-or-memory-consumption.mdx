---
title: Consumo excesivo de CPU o memoria
type: troubleshooting
tags:
  - Integrations
  - Prometheus integrations
  - Troubleshooting
metaDescription: Troubleshooting tips for the Prometheus OpenMetrics integration for Docker or Kubernetes if no data appears in New Relic's UI.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Has instalado la [integración Prometheus OpenMetrics](/docs/integrations/prometheus-integrations/install-configure-openmetrics/install-update-or-uninstall-your-prometheus-openmetrics-integration) para docker o Kubernetes y consume demasiada memoria o CPU.

## Solución

Al ejecutar la integración en un clúster enorme con cientos de objetivos, el consumo de CPU y memoria aumentará, y el número de trabajadores podría afectar `scrape_duration`.

Por ejemplo, una integración de Prometheus OpenMetrics consume 2,5 CPU y 700 Mb de RAM porque:

* Elimina `800 targets`, exponiendo `1000 timeseries` cada uno.
* Cada uno tiene una latencia de `150ms` con un `scrape_duration` de 30 segundos.

Para reducir el consumo de recursos:

1. Actualice la integración a la última imagen disponible.

2. Reduzca el tiempo de cosecha bajando `emitter_harvest_period`. (El valor predeterminado es `1s` y el intervalo no puede ser menor que `200ms`). Dado que las métricas se envían con más frecuencia, el consumo de memoria se reduce.

3. Recopile métricas con menos frecuencia aumentando `scrape_duration` para reducir tanto el consumo de memoria como el uso de CPU.

4. Reduzca la cantidad de trabajadores para reducir tanto el consumo de memoria como el uso de CPU. El raspado se ralentizará y podría exceder `scrape_duration.` Para hacerlo:

   * Actualice la integración a la última versión disponible de la imagen.
   * Disminuya `worker_threads` del valor predeterminado de `4` a su valor preferido.
