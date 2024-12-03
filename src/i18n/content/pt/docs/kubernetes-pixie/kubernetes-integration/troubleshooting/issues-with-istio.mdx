---
title: Problemas com o Istio
tags:
  - Integrations
  - Kubernetes integration
  - Istio
  - Troubleshooting
metaDescription: How to troubleshoot Istio issues when the New Relic integration is also installed.
freshnessValidatedDate: never
translationType: machine
---

Se você tiver o Istio e a integração do New Relic Kubernetes instalados e habilitados em seu ambiente, poderão surgir problemas. Esta página descreve esses problemas com o Istio quando a integração do New Relic Kubernetes é instalada.

## Métrica xds\_grpc do cluster Istio [#istio-cluster-grpc-metric]

### Problema

Quando o Istio está habilitado em seu cluster, os proxies Envoy do Istio-implantar têm um endpoint métrico do Prometheus que expõe a métrica do Prometheus.

Estas métricas estão associadas a um `cluster_name` dedicado como `xds-grpc`. Se você também ativar o agente Prometheus na integração New Relic Kubernetes , o agente coletará essas métricas relacionadas ao Envoy com `cluster_name` como `xds_grpc`, além da métrica com `cluster_name` definida por meio de `global.cluster`.

### Solução

Execute a seguinte consulta para obter uma lista completa das métricas do proxy Envoy:

```sql
FROM `Metric`
SELECT uniques(metricName)
WHERE cluster_name = 'xds-grpc' SINCE 1 week ago
```

## Desativar o Istio para o pod de injeção de metadados [#disable-istio]

### Problema

Quando o Istio é ativado no namespace `newrelic`, isso pode causar complicações para o pod de integração do New Relic Kubernetes situado nesse namespace. Esses problemas podem ser graves o suficiente para impedir a criação do pod.

Um exemplo desse problema pode ocorrer durante a instalação da integração do Kubernetes. Se você vir esta mensagem de erro:

```bash
W0518 02:00:14.984463       1 client_config.go:615] Neither --kubeconfig nor --master was specified.  Using the inClusterConfig.  This might not work.
{"err":"secrets \"newrelic-bundle-nri-metadata-injection-admission\" not found","level":"info","msg":"no secret found","source":"k8s/k8s.go:229","time":"2023-05-18T02:00:15Z"} {"level":"info","msg":"creating new secret","source":"cmd/create.go:28","time":"2023-05-18T02:00:15Z"} ...
```

Isso indica que o Istio pode estar ativo no namespace `newrelic` . Nesse caso, o proxy envoy não sai depois que a tarefa `newrelic-bundle-nri-metadata-injection-admission-create` criou o segredo com êxito. Como resultado, o trabalho do Kubernetes fica paralisado e não consegue ser concluído.

### Solução

Recomendamos que você desative a injeção do sidecar do Istio para o pod `nri-metadata-injection` dentro do namespace newrelic. Para fazer isso, inclua `--set-string nri-metadata-injection.labels."sidecar\.istio\.io/inject"=false` no seu comando `helm` ao instalar o `nri-bundle`.