---
title: 'Datos escasos, métricas faltantes y lagunas en los datos'
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

Ha instalado la [integración Prometheus OpenMetrics](/docs/integrations/prometheus-integrations/install-configure-openmetrics/install-update-or-uninstall-your-prometheus-openmetrics-integration) para docker o Kubernetes, pero nota datos escasos, faltan métricas y lagunas de datos en New Relic de UI.

## Solución

Si algunas métricas no se recopilan regularmente, haga lo siguiente:

1. Compruebe si la CPU está siendo acelerada y si la memoria asignada al contenedor es suficiente.

   En caso de que el contenedor no tenga suficientes recursos disponibles, puede enviar datos con un intervalo más largo entre muestras. El límite de memoria bajo puede provocar que la integración se detenga y se reinicie. Los límites correctos y las solicitudes de recursos pueden variar según la cantidad de monitor objetivo y la cantidad de métricas expuestas por cada objetivo. Para obtener más información, consulte las [pautas en la documentación de configuración del entorno grande](/docs/integrations/prometheus-integrations/install-configure-openmetrics/configure-prometheus-openmetrics-integrations).

2. Verifique el siguiente mensaje de error en el registro de la integración:

   ```json
   {"err":"unexpected post response code: 413: Request Entity Too Large"}
   ```

   Este problema provoca que se elimine parte de la carga y actualmente está solucionado en nuevas versiones. Si está presente, actualice la imagen a la versión más reciente.

3. Si algunos `/metrics` extremos que están monitoreados por la integración se agotan o tardan varios segundos en responder, pueden ralentizar la extracción de datos. El rendimiento de la integración puede degradarse si varios extremos tardan mucho tiempo en responder. Esto conduce a datos intermitentes y faltantes.

   Para detectar esos extremos, ejecute:

   ```sql
   SELECT average(nr_stats_integration_fetch_target_duration_seconds) 
   FROM Metric where clusterName=’clustername' SINCE 30 MINUTES AGO FACET target LIMIT 30
   ```

   Esta consulta recupera los datos expuestos por la integración Prometheus OpenMetrics y muestra el tiempo necesario para recuperar cada extremo.

   Fijar los extremos con una latencia superior a `1s`, o excluirlos del monitoreo quitando la etiqueta scraping de Prometheus.

4. Si no es factible eliminar estos extremos y no se puede evitar la latencia en la respuesta, configure la integración para ejecutar más trabajadores en paralelo. Esto permite que la integración obtenga más extremos al mismo tiempo.

   Para hacerlo, actualice la integración a la versión más reciente y aplique la nueva opción de configuración `worker_threads`. Aconsejamos hacerlo gradualmente, desde 4, 6, 8 y hasta 16.

   Esta solución alternativa sólo minimiza el problema y, si varios extremos se comportan mal, el rendimiento seguirá degradándose. Además, el consumo de memoria y CPU aumentará con el número de trabajadores, por lo que la memoria y la CPU deben aumentarse en consecuencia.

5. En caso de que todos los monitores extremos tengan latencia baja y el contenedor no esté acelerado, ejecute la siguiente consulta. Esto le ayuda a verificar cuánto tiempo está tardando la integración en eliminar todo el objetivo y enviar los datos si excede el `scrape_duration` configurado.

   ```sql
   SELECT latest(nr_stats_integration_process_duration_seconds) FROM Metric
   where clusterName=’clustername' SINCE 30 MINUTES AGO TIMESERIES
   ```

   Primero, actualice la integración a la última imagen publicada. Luego, para reducir el tiempo necesario para eliminar todo el objetivo, aumente el número de trabajadores con la opción de configuración `worker_threads`. Lo que aconsejamos es hacerlo gradualmente, de 4 a 6, 8 y hasta 16 hasta que `r_stats_integration_process_duration_seconds` se acerque al `scrape_duration` definido. Tenga en cuenta que el consumo de memoria y el uso de CPU aumentarán.
