---
title: Reducir los datos ingeridos
tags:
  - Integrations
  - Kubernetes integration
  - Understand and use data
metaDescription: 'New Relic''s Kubernetes integration: How to reduce the data ingested.'
freshnessValidatedDate: '2024-07-09T00:00:00.000Z'
translationType: machine
---

Si revisó su [ingesta de datos](/docs/data-apis/manage-data/manage-data-coming-new-relic/) y desea enviar menos datos y reducir los datos ingeridos, tenemos estas soluciones para usted:

* Colocar `global.lowDataMode`
* Cambiar el intervalo de raspado
* Filtrar espacio de nombres

Expliquemos cada opción.

## Reducir los datos ingeridos configurando `global.lowDataMode` [#reduce-data-ingest]

Si busca reducir costos, puede modificar el valor del parámetro `global.lowDataMode` . Esto reducirá la cantidad de métricas que envíe. La modificación de este parámetro dependerá del método que empleaste para instalar Kubernetes:

* **Instalación guiada** (New Relic CLI, Helm, manifest). El comando de instalación incluye `lowDataMode` por defecto porque tiene estos parámetros: `NRI_CLI_LOW_DATA_MODE`, `NRI_CLI_PROMETHEUS_AGENT_LOW_DATA_MODE` y `NRI_CLI_LOGGING_LOW_DATA_MODE`.
* **Helm**. Establezca el parámetro `global.lowDataMode` en el [gráfico `nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) en verdadero.
* **Manifiest**. `LowDataMode` es solo para gráficos de Helm y los gráficos de Helm son plantillas que se aplican a los manifiestos. Cuando alguien aplica `LowDataMode` en el gráfico de Helm, realiza algunos pequeños cambios en el manifiesto final. Los cambios en los manifiestos se refieren a configuraciones específicas, pero no a un parámetro denominado `LowDataMode`.

El parámetro `lowDataMode` afecta a estos componentes específicos del gráfico [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) :

<CollapserGroup>
  <Collapser
    id="nr-infra"
    title="New Relic Infrastructure"
  >
    Si `lowDataMode` está habilitado, el intervalo de raspado predeterminado cambia de `15s` a `30s`. También puede especificar un valor personalizado usando `config.interval`, que tendrá preferencia sobre `lowDataMode`.
  </Collapser>

  <Collapser
    id="prometheus-agent"
    title="Prometheus agente integrador"
  >
    Si habilita `lowDataMode`, excluirá las métricas que comienzan con estos prefijos de forma predeterminada: `kube_`, `container_`, `machine_` o `cadvisor_`. Esto se debe a que la integración de New Relic Kubernetes ya los recopiló y empleó.
  </Collapser>

  <Collapser
    id="nr-logging"
    title="Registro New Relic"
  >
    Si habilita `lowDataMode`, excluirá etiquetas y anotaciones en el registro reenviado a New Relic. Esto reduce la ingesta general de datos en New Relic. Mantendremos estos campos: `cluster_name`, `container_name`, `namespace_name`, `pod_name`, `stream`, `message` y `log`.

    Este log muestra todos los atributos que el [complementoNew Relic Kubernetes ](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/)suele capturar en su registro:

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

    Así es como se vería el log anterior después de habilitar `lowDataMode`:

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
    title="New Relic Pixie integración"
  >
    Si habilita `lowDataMode`, la integración `newrelic-pixie` realiza una ejemplificación más intenso en los tramos de Pixie y recopila datos con menos frecuencia (de 10 a 15 segundos). Estas son las `lowDataMode` configuraciones:

    ```
    HTTP_SPAN_LIMIT: 750
    DB_SPAN_LIMIT: 250
    COLLECT_INTERVAL_SEC: 15
    ```

    Puede encontrar la configuración predeterminada para estos parámetros y otros en el repositorio Github de [newrelic-pixie-integration](https://github.com/newrelic/newrelic-pixie-integration) .
  </Collapser>
</CollapserGroup>

## Reduzca los datos ingeridos cambiando el intervalo de raspado [#scrape-interval]

La integración New Relic Kubernetes le permite cambiar el intervalo de raspado cuando se recopilan métricas del clúster. Esto le permite elegir el equilibrio adecuado entre resolución y uso de datos. Sugerimos elegir un intervalo de raspado entre 15 y 30 segundos para obtener la mejor experiencia.

<Callout variant="tip">
  El parámetro `lowDataMode` ya establece el intervalo de raspado en 30 segundos.
</Callout>

La forma de modificar el intervalo de raspado depende del método que empleó para instalar Kubernetes:

* **Instalación guiada** (New Relic CLI, Helm, manifest): No puede modificar este valor siguiendo nuestro flujo de instalación guiada.
* **Helm**: establezca el intervalo de raspado en el [gráfico `nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) en el valor que desee.
* **Manifiest**: establezca el intervalo de raspado en el archivo YAML de configuración del manifiesto en el valor que desee. Si siguió nuestras [instrucciones de instalación](/install/kubernetes/?dropdown1=manifest), el archivo se llamó `newrelic-manifest.yaml`.

Si está empleando Helm o manifest y desea cambiar el intervalo de extracción, simplemente agregue el valor del intervalo en la sección `newrelic-infrastructure` . Eche un vistazo a este ejemplo del archivo `values-newrelic.yaml` para ver cómo se ve para Helm:

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
  Tenga en cuenta que si emplea el [explorador de clústeres](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#cluster-explorer-use) en lugar del [navegadorKubernetes ](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#navigator-preview), no podrá establecer `interval` en valores mayores que `40s`.
</Callout>

## Reducir los datos ingeridos filtrando el espacio de nombres [#filter-namespace]

Puede etiquetar el espacio de nombres para filtrar cuáles elimina la integración Kubernetes . Todos los espacios de nombres se eliminan de forma predeterminada.

Usamos `namespaceSelector` de la misma manera que lo hace Kubernetes. Para incluir solo el espacio de nombres que coincida con una etiqueta, simplemente cambie `namespaceSelector`. Agregue lo siguiente a su archivo `values-newrelic.yaml` , en la sección `newrelic-infrastructure` :

```yaml
common:
  config:
    namespaceSelector:
      matchLabels:
        key1 : "value1"
```

### Ejemplos con espacio de nombres [#include-namespaces]

<CollapserGroup>
  <Collapser
    id="namespaces-label-true"
    title={<>Extraiga el espacio de nombres con el espacio de nombres con la etiqueta <InlineCode>newrelic.com/scrape</InlineCode> configurada en <InlineCode>true</InlineCode></>}
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
    title="Emplee expresiones Kubernetes para incluir o excluir espacios de nombres"
  >
    También puedes usar expresiones Kubernetes para incluir o excluir espacios de nombres usando esta sintaxis:

    ```yaml
    common:
    config:
        namespaceSelector:
        matchExpressions:
        - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
        - {key: key1, operator: In, values: ["value1"]}
    ```

    <Callout variant="tip">
      Las expresiones bajo `matchExpressions` están concatenadas.
    </Callout>
  </Collapser>

  <Collapser
    id="exclude-namespaces"
    title={<>Excluir el espacio de nombres con la etiqueta <InlineCode>newrelic.com/scrape</InlineCode> configurada en <InlineCode>false</InlineCode></>}
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

Puede ver una lista completa de configuraciones que puede modificar en el [archivo README del gráfico](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure).

### ¿Cómo puedo saber qué espacios de nombres están excluidos? [#excluded-namespaces]

El ejemplo `K8sNamespace` muestra todo el espacio de nombres dentro del clúster. El atributo `nrFiltered` determina si vamos a extraer los datos relacionados con el namespace. Esta consulta le muestra qué espacios de nombres se están monitoreando:

```sql
FROM K8sNamespaceSample SELECT displayName, nrFiltered WHERE clusterName = <clusterName> SINCE 2 MINUTES AGO
```

### ¿Qué datos se descartan del espacio de nombres excluido? [#namespaces-discarded-data]

Estos ejemplos no estarán disponibles para el espacio de nombres excluido:

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
