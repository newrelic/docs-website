---
title: Observabilidade de custos Kubernetes com Kubecost
tags:
  - Integrations
  - Kubernetes integration
  - Kubecost
  - Cost observability
  - Opencost
metaDescription: Understand the costs associated with your Kubernetes resources
freshnessValidatedDate: '2023-08-12T00:00:00.000Z'
translationType: machine
---

<Callout title="visualização">
  Ainda estamos trabalhando nesse recurso, mas adoraríamos que você experimentasse!

  Atualmente, esse recurso é fornecido como parte de um programa de visualização de acordo com nossas [políticas de pré-lançamento](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

Com New Relic e [Kubecost](https://kubecost.github.io/cost-analyzer/), você pode entender os custos associados a cada um dos seus recursos do Kubernetes.

Insights acionáveis:

* Quais são os principais fatores de custo no meu cluster (CPU, armazenamento, saída, etc.)?
* Quais nós estão gerando aumentos recentes de custos em meu cluster?
* Quais são os detalhamentos de custos por namespace para a carga de trabalho do meu aplicativo?
* Como posso personalizar a estimativa de custos com base nos preços/descontos fornecidos pelos meus provedores de nuvem?

## Iniciar

Este guia pressupõe que você usará o servidor Prometheus incluído no Kubecost. É possível usar o seu próprio, embora esteja fora do escopo deste guia.

Você precisará criar um endpoint `Remote Write` no New Relic, o que pode ser feito clicando no botão verde "Adicionar dados do Prometheus" nesta página. Observe que o token ao portador será usado. [Gravação remota do Prometheus](/docs/infrastructure/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration/)

### Configurar a gravação remota do Prometheus

1. Selecione uma conta para receber os dados do Prometheus.
2. Nomeie a fonte de dados, por exemplo, `kubecost`.
3. Gere a URL e o token do portador para usar no próximo conjunto de etapas.

### Instale o agente Kubecost em seu cluster

Em seguida, instale o agente Kubecost via Helm.

1. Baixe o arquivo YAML de modelo para a instalação do agente Kubecost. Salve-o em `kubecost-values.yaml`.

   ```yaml
   prometheus:
     serverFiles:
       prometheus.yml:
         remote_write:
         - url: https://metric-api.newrelic.com/prometheus/v1/write?prometheus_server=YOUR_CLUSTER_NAME
           bearer_token: YOUR_BEARER_TOKEN
     server:
       global:
         external_labels:
           cluster_id: YOUR_CLUSTER_NAME
   kubecostProductConfigs:
     clusterName: YOUR_CLUSTER_NAME
   ```

2. Abra `kubecost-values.yaml` em um editor de sua preferência.

3. Copie e cole o endpoint remote_write da etapa anterior, substituindo as linhas 5 e 6.

4. Substitua ambas as entradas `YOUR_CLUSTER_NAME` pelo nome do seu cluster.

5. Execute o comando Helm abaixo para adicionar o agente Kubecost ao seu cluster e começar a enviar dados para o New Relic:

   ```shell
   helm upgrade --install kubecost \
   --repo https://kubecost.github.io/cost-analyzer/ cost-analyzer \
   --namespace kubecost --create-namespace \
   --values kubecost-values.yaml
   ```

6. Espere alguns minutos. Na guia anterior, onde você configurou a gravação remota, clique no botão <DNT>**See your data**</DNT> para ver se os dados foram recebidos.

7. Consulte seus dados:

   ```sql
   SELECT sum(`Total Cost($)`) AS 'Total Monthly Cost'
   FROM (FROM Metric SELECT (SELECT sum(`total_node_cost`)
   FROM (FROM Metric SELECT (average(kube_node_status_capacity_cpu_cores) * average(node_cpu_hourly_cost)
   * 730 + average(node_gpu_hourly_cost)
   * 730 + average(kube_node_status_capacity_memory_bytes) / 1024 / 1024 / 1024
   * average(node_ram_hourly_cost) * 730) AS 'total_node_cost' FACET node))
   + (SELECT (sum(acflb) / 1024 / 1024 / 1024 * 0.04) AS 'Container Cost($)'
   FROM (SELECT (average(container_fs_limit_bytes) * cardinality(container_fs_limit_bytes)) AS 'acflb'
   FROM Metric WHERE (NOT ((device = 'tmpfs')) AND (id = '/'))))
   + (SELECT sum(aphc * 730 * akpcb / 1024 / 1024 / 1024) AS 'Total Persistent Volume Cost($)'
   FROM (FROM Metric SELECT average(pv_hourly_cost)
   AS 'aphc', average(kube_persistentvolume_capacity_bytes) AS 'akpcb' FACET persistentvolume, instance))
   AS 'Total Cost($)')
   ```

Você pode seguir a documentação do Kubecost para [expor a interface do Kubecost com um ingress](https://docs.kubecost.com/install-and-configure/install/ingress-examples).
