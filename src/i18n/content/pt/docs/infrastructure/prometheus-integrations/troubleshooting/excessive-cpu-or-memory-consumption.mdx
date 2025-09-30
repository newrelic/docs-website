---
title: Consumo excessivo de CPU ou memória
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

Você instalou a [integração Prometheus OpenMetrics](/docs/integrations/prometheus-integrations/install-configure-openmetrics/install-update-or-uninstall-your-prometheus-openmetrics-integration) para Docker ou Kubernetes e ela consome muita memória ou CPU.

## Solução

Ao executar a integração em um cluster enorme que elimina centenas de destinos, o consumo de CPU e memória aumentará e o número de trabalhadores poderá afetar `scrape_duration`.

Por exemplo, uma integração Prometheus OpenMetrics consome 2,5 CPU e 700 MB de RAM porque:

* Ele raspa `800 targets`, expondo `1000 timeseries` cada um.
* Cada um tem latência de `150ms` com `scrape_duration` de 30 segundos.

Para reduzir o consumo de recursos:

1. Atualize a integração para a imagem disponível mais recente.

2. Reduza o tempo de colheita diminuindo `emitter_harvest_period`. (O valor padrão é `1s` e o intervalo não pode ser menor que `200ms`.) Como as métricas são enviadas com maior frequência, o consumo de memória é reduzido.

3. Colete métricas com menos frequência aumentando `scrape_duration` para reduzir o consumo de memória e o uso de CPU.

4. Reduza o número de trabalhadores para reduzir o consumo de memória e o uso da CPU. A raspagem ficará mais lenta e poderá exceder `scrape_duration.` . Para fazer isso:

   * Atualize a integração para a versão mais recente disponível da imagem.
   * Diminua `worker_threads` do valor padrão de `4` para seu valor preferido.
