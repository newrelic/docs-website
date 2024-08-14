---
title: 'Dados esparsos, métricas ausentes e lacunas de dados'
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

Você instalou a [integração Prometheus OpenMetrics](/docs/integrations/prometheus-integrations/install-configure-openmetrics/install-update-or-uninstall-your-prometheus-openmetrics-integration) para Docker ou Kubernetes, mas percebe dados esparsos, métricas ausentes e lacunas de dados na interface do New Relic.

## Solução

Se alguma métrica não estiver sendo coletada regularmente, faça o seguinte:

1. Verifique se a CPU está sendo acelerada e se a memória alocada para o contêiner é suficiente.

   Caso o contêiner não possua recursos suficientes disponíveis, poderá enviar dados com maior intervalo entre amostras. O limite baixo de memória pode fazer com que a integração seja encerrada e reiniciada. Os limites corretos e solicitações de recursos podem variar de acordo com o número de monitores de destino, e o número de métricas expostas por cada destino. Para mais informações, consulte as [orientações na documentação de configuração de ambientes grandes](/docs/integrations/prometheus-integrations/install-configure-openmetrics/configure-prometheus-openmetrics-integrations).

2. Verifique a seguinte mensagem de erro no log da integração:

   ```json
   {"err":"unexpected post response code: 413: Request Entity Too Large"}
   ```

   Esse problema faz com que alguma carga caia e atualmente está corrigido em novas versões. Se presente, atualize a imagem para a versão mais recente.

3. Se alguns endpoints `/metrics` monitorados pela integração atingirem o tempo limite ou levarem vários segundos para responder, eles poderão retardar a extração de dados. O desempenho da integração pode ser prejudicado se vários endpoints levarem muito tempo para responder. Isso leva a dados intermitentes e ausentes.

   Para detectar esses endpoints, execute:

   ```sql
   SELECT average(nr_stats_integration_fetch_target_duration_seconds) 
   FROM Metric where clusterName=’clustername' SINCE 30 MINUTES AGO FACET target LIMIT 30
   ```

   Esta consulta recupera os dados expostos pela integração do Prometheus OpenMetrics e mostra o tempo necessário para buscar cada endpoint.

   Corrija o endpoint com latência acima de `1s`, ou exclua-os do monitoramento removendo o rótulo de raspagem do Prometheus.

4. Caso não seja viável remover esses endpoints e a latência na resposta não possa ser evitada, configure a integração para executar mais trabalhadores em paralelo. Isso permite que a integração busque mais endpoints ao mesmo tempo.

   Para isso, atualize a integração para a versão mais recente e aplique a nova opção de configuração `worker_threads`. Aconselhamos fazê-lo gradualmente, de 4, 6, 8 e até 16.

   Essa solução alternativa apenas minimiza o problema e, se vários endpoints estiverem se comportando mal, o desempenho ainda será prejudicado. Além disso, o consumo de memória e CPU aumentará com o número de trabalhadores, portanto, a memória e a CPU devem ser aumentadas de acordo.

5. Caso todos os monitores do endpoint tenham baixa latência e o contêiner não esteja sendo estrangulado, execute a seguinte consulta. Isso ajuda a verificar quanto tempo a integração está demorando para raspar todos os destinos e enviar os dados se estiver excedendo o `scrape_duration` configurado.

   ```sql
   SELECT latest(nr_stats_integration_process_duration_seconds) FROM Metric
   where clusterName=’clustername' SINCE 30 MINUTES AGO TIMESERIES
   ```

   Primeiro, atualize a integração para a última imagem publicada. Então, para reduzir o tempo necessário para raspar todo o destino, aumente o número de trabalhadores com a opção de configuração `worker_threads`. Aconselhamos fazê-lo gradualmente, de 4 a 6, 8 e até 16 até que `r_stats_integration_process_duration_seconds` se aproxime do definido `scrape_duration`. Observe que o consumo de memória e o uso da CPU aumentarão.
