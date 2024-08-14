---
title: Reduza a ingestão de dados
tags:
  - Integrations
  - Kubernetes integration
  - Understand and use data
metaDescription: 'New Relic''s Kubernetes integration: How to reduce the data ingested.'
freshnessValidatedDate: '2024-07-09T00:00:00.000Z'
translationType: machine
---

Se você revisou sua [ingestão de dados](/docs/data-apis/manage-data/manage-data-coming-new-relic/) e deseja enviar menos dados e reduzir os dados ingeridos, temos estas soluções para você:

* Definir `global.lowDataMode`
* Alterar o intervalo de raspagem
* Filtrar namespace

Vamos explicar cada opção.

## Reduza os dados ingeridos configurando `global.lowDataMode` [#reduce-data-ingest]

Se quiser reduzir custos, você pode modificar o valor do parâmetro `global.lowDataMode` . This will cut down on the number of metrics you send. A modificação deste parâmetro dependerá do método usado para instalar o Kubernetes:

* **Instalação guiada** (New Relic CLI, Helm, manifesto). O comando de instalação inclui `lowDataMode` por padrão porque possui estes parâmetros: `NRI_CLI_LOW_DATA_MODE`, `NRI_CLI_PROMETHEUS_AGENT_LOW_DATA_MODE` e `NRI_CLI_LOGGING_LOW_DATA_MODE`.
* **Helm**. Defina o parâmetro `global.lowDataMode` no [gráfico `nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) como verdadeiro.
* **Manifest**. `LowDataMode` é apenas para gráficos do Helm, e os gráficos do Helms são modelos aplicados a manifestos. Quando alguém aplica `LowDataMode` no gráfico do Helm, ele faz algumas pequenas alterações no manifesto final. As alterações nos manifestos referem-se a configurações específicas, mas não a um parâmetro chamado `LowDataMode`.

O parâmetro `lowDataMode` afeta estes componentes específicos do gráfico [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) :

<CollapserGroup>
  <Collapser
    id="nr-infra"
    title="New Relic Infrastructure"
  >
    Se `lowDataMode` estiver ativado, o intervalo de coleta padrão muda de `15s` para `30s`. Você também pode especificar um valor personalizado para ele usando `config.interval`, que terá preferência sobre `lowDataMode`.
  </Collapser>

  <Collapser
    id="prometheus-agent"
    title="Prometheus agente integração"
  >
    Se você ativar `lowDataMode`, excluirá as métricas que começam com estes prefixos por padrão: `kube_`, `container_`, `machine_` ou `cadvisor_`. Isso ocorre porque a integração do New Relic Kubernetes já os coletou e utilizou.
  </Collapser>

  <Collapser
    id="nr-logging"
    title="Registro New Relic"
  >
    Se você ativar `lowDataMode`, rótulos e anotações serão excluídos do registro encaminhado para New Relic. Isso reduz a ingestão geral de dados no New Relic. Mantemos estes campos: `cluster_name`, `container_name`, `namespace_name`, `pod_name`, `stream`, `message` e `log`.

    Este registro log mostra todos os atributos que o [plug-inNew Relic Kubernetes ](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/)costuma capturar em seu log:

    ```json
    [
    {
        "cluster_name": "api-test",
        "kubernetes": {
        "annotations": {
            "kubernetes.io/psp": "eks.privileged"
        },
        "container_hash": "fryckbos/test@sha256:5b098eaf3c7d5b3585eb10cebee63665b6208bea31ef31a3f0856c5ffdda644b",
        "container_image": "fryckbos/test:latest",
        "container_name": "newrelic-logging",
        "docker_id": "134e1daf63761baa15e035b08b7aea04518a0f0e50af4215131a50c6a379a072",
        "host": "ip-192-168-17-123.ec2.internal",
        "labels": {
            "app": "newrelic-logging",
            "app.kubernetes.io/name": "newrelic-logging",
            "controller-revision-hash": "84db95db86",
            "pod-template-generation": "1",
            "release": "nri-bundle"
        },
        "namespace_name": "nrlogs",
        "pod_id": "54556e3e-719c-46b5-af69-020b75d69bf1",
        "pod_name": "nri-bundle-newrelic-logging-jxnbj"
        },
        "message": "[2021/09/14 12:30:49] [ info] [engine] started (pid=1)\n",
        "plugin": {
        "source": "kubernetes",
        "type": "fluent-bit",
        "version": "1.8.1"
        },
        "stream": "stderr",
        "time": "2021-09-14T12:30:49.138824971Z",
        "timestamp": 1631622649138
    }
    ]
    ```

    Esta é a aparência do registro de log anterior após a ativação de `lowDataMode`:

    ```json
    [
    {
        "cluster_name": "api-test",
        "container_name": "newrelic-logging",
        "namespace_name": "nrlogs",
        "pod_name": "nri-bundle-newrelic-logging-jxnbj",
        "message": "[2021/09/14 12:30:49] [ info] [engine] started (pid=1)\n",
        "stream": "stderr",
        "timestamp": 1631622649138
    }
    ]
    ```
  </Collapser>

  <Collapser
    id="nr-pixie-integration"
    title="New Relic Pixie integração"
  >
    Se você ativar `lowDataMode`, a integração `newrelic-pixie` realizará amostragem mais pesada em intervalos Pixie e coletará dados com menos frequência (de 10 a 15 segundos). Estas são as configurações de `lowDataMode` :

    ```
    HTTP_SPAN_LIMIT: 750
    DB_SPAN_LIMIT: 250
    COLLECT_INTERVAL_SEC: 15
    ```

    Você pode encontrar as configurações padrão para esses parâmetros e outros no repositório [newrelic-pixie-integration](https://github.com/newrelic/newrelic-pixie-integration) do Github.
  </Collapser>
</CollapserGroup>

## Reduza os dados ingeridos alterando o intervalo de raspagem [#scrape-interval]

A integração do New Relic Kubernetes permite alterar o intervalo de raspagem quando as métricas são coletadas do cluster. Isso permite que você escolha o equilíbrio certo entre resolução e uso de dados. Sugerimos escolher um intervalo de raspagem entre 15 e 30 segundos para obter a melhor experiência.

<Callout variant="tip">
  O parâmetro `lowDataMode` já define o intervalo de raspagem para 30 segundos.
</Callout>

A maneira como você modifica o intervalo de raspagem depende do método usado para instalar o Kubernetes:

* **Instalação guiada** (New Relic CLI, Helm, manifest): Você não pode modificar esse valor seguindo nosso fluxo de instalação guiada.
* **Helm**: defina o intervalo de raspagem no [gráfico `nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) com o valor desejado.
* **Manifest**: defina o intervalo de raspagem no arquivo YAML de configuração do manifesto para o valor desejado. Se você seguiu nossas [instruções de instalação](/install/kubernetes/?dropdown1=manifest), o arquivo foi chamado `newrelic-manifest.yaml`.

Se você estiver usando o Helm ou o manifesto e quiser alterar o intervalo de raspagem, basta adicionar o valor do intervalo na seção `newrelic-infrastructure` . Dê uma olhada neste exemplo do arquivo `values-newrelic.yaml` para ver como ele fica no Helm:

```yaml
global:
  licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
  cluster: _K8S_CLUSTER_NAME_

# ... Other settings

# Configuration for newrelic-infrastructure
newrelic-infrastructure:
  # ... Other settings
  common:
    config:
      interval: 25s
```

<Callout variant="important">
  Observe que se você estiver usando o [cluster explorer](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#cluster-explorer-use) em vez do [navegador Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#navigator-preview), não será permitido definir `interval` com valores maiores que `40s`.
</Callout>

## Reduza os dados ingeridos filtrando o namespace [#filter-namespace]

Você pode rotular o namespace para filtrar quais deles a integração Kubernetes elimina. Todos os namespaces são raspados por padrão.

Usamos `namespaceSelector` da mesma forma que o Kubernetes. Para incluir apenas o namespace que corresponde a um rótulo, basta alterar o `namespaceSelector`. Adicione o seguinte ao seu arquivo `values-newrelic.yaml` , na seção `newrelic-infrastructure` :

```yaml
common:
  config:
    namespaceSelector:
      matchLabels:
        key1 : "value1"
```

### Exemplos com namespace [#include-namespaces]

<CollapserGroup>
  <Collapser
    id="namespaces-label-true"
    title={<>Raspe namespace com namespace com o rótulo <InlineCode>newrelic.com/scrape</InlineCode> definido como <InlineCode>true</InlineCode></>}
  >
    ```yaml
    global:
    licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
    cluster: _K8S_CLUSTER_NAME_

    # ... Other settings 

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
    # ... Other settings 
    common:
        config:
        namespaceSelector:
            matchLabels:
            newrelic.com/scrape: "true"
    ```
  </Collapser>

  <Collapser
    id="k8s-expressions"
    title="Use expressões Kubernetes para incluir ou excluir namespace"
  >
    Você também pode usar expressões Kubernetes para incluir ou excluir namespace usando esta sintaxe:

    ```yaml
    common:
    config:
        namespaceSelector:
        matchExpressions:
        - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
        - {key: key1, operator: In, values: ["value1"]}
    ```

    <Callout variant="tip">
      As expressões em `matchExpressions` são concatenadas.
    </Callout>
  </Collapser>

  <Collapser
    id="exclude-namespaces"
    title={<>Exclua o namespace com o rótulo <InlineCode>newrelic.com/scrape</InlineCode> definido como <InlineCode>false</InlineCode></>}
  >
    ```yaml
    global:
    licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
    cluster: _K8S_CLUSTER_NAME_

    # ... Other settings 

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
    # ... Other settings
    common:
        config:
        namespaceSelector:
            matchExpressions:
            - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
    ```
  </Collapser>
</CollapserGroup>

Você pode ver uma lista completa de configurações que podem ser modificadas no [arquivo README do gráfico](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure).

### Como posso descobrir quais namespaces estão excluídos? [#excluded-namespaces]

A amostra `K8sNamespace` mostra todo o namespace dentro do cluster. O atributo `nrFiltered` determina se iremos extrair os dados relacionados ao namespace. Esta consulta mostra quais namespaces estão sendo monitorados:

```sql
FROM K8sNamespaceSample SELECT displayName, nrFiltered WHERE clusterName = <clusterName> SINCE 2 MINUTES AGO
```

### Quais dados estão sendo descartados do namespace excluído? [#namespaces-discarded-data]

Estas amostras não estarão disponíveis para o namespace excluído:

* `K8sContainerSample`
* `K8sDaemonsetSample`
* `K8sDeploymentSample`
* `K8sEndpointSample`
* `K8sHpaSample`
* `K8sPodSample`
* `K8sReplicasetSample`
* `K8sServiceSample`
* `K8sStatefulsetSample`
* `K8sVolumeSample`
