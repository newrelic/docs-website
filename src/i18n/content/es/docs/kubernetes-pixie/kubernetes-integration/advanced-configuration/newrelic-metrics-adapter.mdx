---
title: Adaptador New Relic métrica
tags:
  - Integrations
  - Kubernetes integration
  - Link apps and services
metaDescription: New Relic Metrics Adapter
freshnessValidatedDate: never
translationType: machine
---

<Callout title="VISTA PREVIA PÚBLICA">
  Esta característica aún se encuentra en versión preliminar pública, ¡pero te animamos a que la pruebes!
</Callout>

Puede usar métrica desde su cuenta New Relic para escalar automáticamente aplicaciones y servicios en su clúster de Kubernetes implementando el [Adaptador métrico New Relic ](https://github.com/newrelic/newrelic-k8s-metrics-adapter). Este adaptador obtiene los valores métricos de New Relic y los pone a disposición de los [Autoscalers pod horizontal](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/).

El [newrelic-k8s-metrics-adapter](https://github.com/newrelic/newrelic-k8s-metrics-adapter) implementa la API `external.metrics.k8s.io` para admitir el uso de resultados de consulta New Relic NRQL basados en métricas externas. Una vez implementado, el valor de cada métrica configurada se obtiene utilizando la [API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) según la consulta [NRQL](/docs/query-your-data/nrql-new-relic-query-language/) configurada.

El adaptador métrico expone la métrica sobre un extremo asegurado con TLS.

<img
  title="Diagram showing the newrelic metrics adapter in a cluster"
  alt="Diagram showing the New Relic metrics adapter in a cluster"
  src="/images/kubernetes_diagram_adapter-diagram.svg"
/>

<figcaption>
  New Relic métrica en clúster.
</figcaption>

## Requisitos [#requirements]

* Un [clúster de Kubernetes que ejecuta una versión compatible](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-integration-compatibility-requirements).\* La [integración de New Relic Kubernetes](/docs/integrations/kubernetes-integration/installation/kubernetes-integration-install-configure).
* La [integración de New Relic Kubernetes](/docs/integrations/kubernetes-integration/installation/kubernetes-integration-install-configure).
* New Relic [Clave de usuario API de](/docs/apis/intro-apis/new-relic-api-keys/#user-api-key).
* No hay ningún otro Adaptador métrico externo instalado en el clúster.

## Instalacion [#installation]

Para instalar el adaptador métrico New Relic , proporcionamos el `newrelic-k8s-metrics-adapter` gráfico de Helm, que también se incluye en el gráfico `nri-bundle` utilizado para desplegar todos los componentes New Relic Kubernetes .

1. Si aún no está instalado, [instale nuestra integración de Kubernetes](/install/kubernetes).

2. Actualice la instalación para incluir el Adaptador métrico New Relic con el siguiente comando:

   ```
   helm upgrade --install newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace --reuse-values \
   --set metrics-adapter.enabled=true \
   --set newrelic-k8s-metrics-adapter.personalAPIKey=YOUR_NEW_RELIC_PERSONAL_API_KEY \
   --set newrelic-k8s-metrics-adapter.config.accountID=YOUR_NEW_RELIC_ACCOUNT_ID \
   --set newrelic-k8s-metrics-adapter.config.externalMetrics.external_metric_name.query=NRQL query
   ```

Tenga en cuenta y ajuste las siguientes banderas:

* `metrics-adapter.enabled`: Debe configurarse en `true` para que se instale la tabla de adaptadores métricos.

* `newrelic-k8s-metrics-adapter.personalAPIKey`: Debe New Relic [configurarse en una clave de API personal de](/docs/apis/intro-apis/new-relic-api-keys/#user-api-key) válida.

* `newrelic-k8s-metrics-adapter.config.accountID`: Debe configurarse en una cuenta New Relic válida de donde se obtendrán las métricas.

* `newrelic-k8s-metrics-adapter.config.externalMetrics.external_metric_name.query`: Agrega una nueva métrica externa donde:

  * `external_metric_name`: el nombre de la métrica.
  * `query`: la consulta NRQL base que se utiliza para obtener el valor de la métrica.

<Callout variant="tip">
  Alternativamente, puede usar un archivo `values.yaml` que se puede pasar al comando helm con el indicador `--values` . Los archivos de valores pueden contener todos los parámetros necesarios para configurar la métrica explicada en la sección [de configuración](#configuration) .
</Callout>

## Configuración [#configuration]

Puedes configurar múltiples métricas en el adaptador de métricas y cambiar algún parámetro para modificar el comportamiento del caché y filtrado de métricas. Para ver la lista completa y las descripciones de todos los parámetros que se pueden modificar, consulte el gráfico de los archivos [README.md](https://github.com/newrelic/newrelic-k8s-metrics-adapter/blob/main/charts/newrelic-k8s-metrics-adapter/README.md) y [value.yaml](https://github.com/newrelic/newrelic-k8s-metrics-adapter/blob/main/charts/newrelic-k8s-metrics-adapter/values.yaml) .

## Cómo funciona [#how-it-works]

El siguiente ejemplo es un archivo de valores Helm que habilita el adaptador métrico en la instalación del gráfico `nri-bundle` y configura la métrica `nginx_average_requests` :

```yaml
metrics-adapter:
  enabled: true
newrelic-k8s-metrics-adapter:
  personalAPIKey: <Personal API Key>
  config:
    accountID: <Account ID>
    externalMetrics:
      nginx_average_requests:
        query: "FROM Metric SELECT average(nginx.server.net.requestsPerSecond) SINCE 2 MINUTES AGO"
```

<Callout variant="caution">
  El lapso de tiempo predeterminado para métrica es 1h. Por lo tanto, debes definir consulta con la cláusula `SINCE` para ajustar el lapso de tiempo según tu entorno y necesidades.
</Callout>

Hay un HPA que consume la métrica externa de la siguiente manera:

```yaml
kind: HorizontalPodAutoscaler
apiVersion: autoscaling/v2beta2
metadata:
  name: nginx-scaler
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx
  minReplicas: 1
  maxReplicas: 10
  metrics:
    - type: External
      external:
        metric:
          name: nginx_average_requests
          selector:
            matchLabels:
              k8s.namespaceName: nginx
        target:
          type: Value
          value: 10000
```

Según la definición de HPA, el administrador del controlador obtiene la métrica de la API métrica externa que es atendida por el adaptador métrico New Relic .

El adaptador métrico New Relic recibe la consulta incluyendo el nombre métrico `nginx_average_requests` y todos los selectores, y busca un nombre métrico coincidente en la memoria interna en función de la métrica configurada. Luego, agrega los selectores a la consulta para formar una consulta final que se ejecuta usando NerdGraph para obtener el valor de New Relic. El ejemplo anterior generará una consulta como la siguiente:

```sql
FROM Metric SELECT average(nginx.server.net.requestsPerSecond) WHERE clusterName=<clusterName> AND `k8s.namespaceName`='nginx' SINCE 2 MINUTES AGO
```

Observe que se ha agregado automáticamente un filtro `clusterName` a la consulta para excluir métrica de otros clústeres en la misma cuenta. Puede eliminarlo utilizando el parámetro de configuración `removeClusterFilter` . Además, el valor se almacena en caché durante un período de tiempo definido por el parámetro de configuración `cacheTTLSeconds` , cuyo valor predeterminado es 30 segundos.

## Resolución de problemas [#troubleshooting]

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="verbose-helm"
    title="Obtener un registro detallado"
  >
    Los errores más comunes se muestran en el registro estándar (no detallado). Si está realizando una investigación más profunda por su cuenta o con el soporte de New Relic, puede habilitar el modo detallado.

    Para obtener detalles de registro detallados para una integración usando Helm:

    1. Habilite el registro detallado:

       ```shell
       helm upgrade -n newrelic --reuse-values newrelic-bundle --set newrelic-k8s-metrics-adapter.verboseLog=true newrelic/nri-bundle
       ```

    2. Déjelo en modo detallado durante unos minutos o hasta que se haya producido suficiente actividad.

    3. Cuando tenga la información que necesita, deshabilite el registro detallado:

       ```shell
       helm upgrade --reuse-values newrelic-bundle --set newrelic-k8s-metrics-adapter.verboseLog=false newrelic/nri-bundle
       ```

       <Callout variant="caution">
         El modo detallado aumenta significativamente la cantidad de información enviada al archivo de registro. Habilite este modo temporalmente, solo para propósitos de resolución de problemas, y restablezca el nivel de registros cuando termine.
       </Callout>
  </Collapser>

  <Collapser
    className="freq-link"
    id="verbose-helm"
    title="Obtener crudo métrico"
  >
    A veces es útil obtener la lista de métricas disponibles y también obtener el valor actual de una métrica específica.

    Para obtener la lista de métricas disponibles, ejecute:

    ```shell
    kubectl get --raw "/apis/external.metrics.k8s.io/v1beta1/"
    ```

    Para obtener el valor de una métrica específica con un selector, ejecute:

    ```shell
    kubectl get --raw "/apis/external.metrics.k8s.io/v1beta1/namespaces/*/__METRIC_NAME__?labelSelector=_SELECTOR_KEY_=_SELECTOR_VALUE_"
    ```

    <Callout variant="tip">
      Debe reemplazar `<metric_name>`, `<selector_key>` y `<selector_value>` con sus valores.
    </Callout>
  </Collapser>

  <Collapser
    className="freq-link"
    id="verbose-helm"
    title="Métrica no funciona"
  >
    Existen algunos errores habituales que podrían provocar que una métrica no recupere el valor. Estos errores se muestran en el estado de la métrica cuando describe el HPA o se imprimen cuando obtiene la métrica sin procesar directamente.

    * `executing query: NRQL Syntax Error: Error at line...`: La consulta que se está ejecutando tiene errores de sintaxis. El mismo mensaje de error le brinda la consulta ejecutada y la posición del error. Puede probar esta consulta dentro del generador de consultas New Relic y corregir la configuración desde el adaptador.
    * `extracting return value: expected first value to be of type "float64", got %!q(<nil>)`: La consulta no devuelve ningún valor. El mismo mensaje de error le brinda la consulta ejecutada para que pueda probar esta consulta dentro del generador de consultas New Relic y corregir la configuración desde el adaptador o los selectores de coincidencias en el HPA.
  </Collapser>
</CollapserGroup>
