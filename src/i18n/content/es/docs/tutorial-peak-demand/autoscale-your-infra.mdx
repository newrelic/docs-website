---
title: Escala automáticamente tu infraestructura con Kubernetes
metaDescription: Automatically allocate and deallocate infrastructure resources to your pods with horizontal pod autoscaling.
freshnessValidatedDate: never
translationType: machine
---

Prepararse para un evento de demanda máxima requiere tiempo: debe establecer su línea de base, evaluar sus acuerdos de nivel de servicio y alinear a todos sus equipos en torno a los mismos datos. Escalar su infraestructura tiene consideraciones similares, pero también implica proyectar las necesidades del sistema frente al costo. ¿Cómo se equilibran los dos sin sacrificar el rendimiento? ¿Dónde está el umbral de lo suficientemente bueno?

Una solución es el escalado automático de pod horizontal (HPA), que se crea con nuestra integración de Kubernetes con Pixie. Una vez que haya configurado HPA, su clúster de Kubernetes asigna automáticamente más pods cuando la demanda alcanza su punto máximo y luego los desasigna cuando la demanda cae. Esto le permite evitar las preocupaciones de costos al anticipar la demanda.

<img
  title="Horizontal pod autoscaling"
  alt="Diagram demonstrating how HPA interacts with New Relic at a high level."
  src="/images/kubernetes_diagram_K8s-HPA.webp"
/>

El tutorial asume que estás usando clúster de Kubernetes. Para configurar HPA, necesitará:

* Un [clúster de Kubernetes que ejecuta una versión compatible](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-integration-compatibility-requirements).

* Tu usuario New Relic

  <InlinePopover type="licenseKey"/>

* Ningún otro adaptador métrico externo instalado en el cluster

## Objetivos [#objectives]

Este tutorial le guiará en la configuración de un entorno de demostración para HPA. Vas a:

* Instale la integración de New Relic Kubernetes
* Configurar un entorno de ejemplo para probar el escalado automático

## Reenviar métrica a Kubernetes [#k8s]

<Steps>
  <Step>
    ### Clona nuestro repositorio de laboratorio New Relic Pixie

    Clona el siguiente repositorio de Github:

    ```bash
    git clone https://github.com/newrelic-experimental/pixie-lab-materials
    ​​cd pixie-lab-materials/main
    ./setup.sh
    ```
  </Step>

  <Step>
    El script `setup.sh` activa un nuevo clúster de minikube utilizando el controlador de hiperkit compatible con Pixie. Luego configura la memoria de su red y la CPU para un rendimiento óptimo con Pixie y crea todos los pods y servicios que componen la aplicación de demostración.

    En una nueva ventana de terminal, abra un túnel minikube:

    ```bash
    minikube tunnel -p minikube-pixie-lab
    ```

    Deberías tener dos terminales:

    * Tu túnel, que permanece abierto para acceder a tu aplicación demo.
    * Un lugar para ejecutar comandos para el tutorial.
  </Step>

  <Step>
    ### Instale la integración de Kubernetes con Pixie

    Siga nuestra [instalación guiada](https://one.newrelic.com/nr1-core?account=2498654&state=d1aae74b-0ad6-b0f3-093d-cc89ecf89234) para instalar la integración de New Relic Kubernetes. Esto conecta New Relic a su clúster de Kubernetes. Asegurate que:

    * Marque <DNT>**Instant service-level insights**</DNT>, <DNT>**Full-body requests**</DNT> y <DNT>**Application profiles through Pixie**</DNT> para habilitar Pixie.

    * Mantener todos los demás elementos predeterminados marcados

      Una vez que haga clic en Continuar, copie y pegue ese comando en su entorno de desarrollo.
  </Step>

  <Step>
    ### Instale el adaptador métrico New Relic

    Para instalar el adaptador métrico New Relic, utilice la tabla de timón `newrelic-k8s-metrics-adapter` . Si ha utilizado `nri-bundle-chart` para implementar cualquier componente de New Relic Kubernetes, entonces tiene acceso a este gráfico de Helm.

    ```bash
    helm upgrade --install newrelic newrelic/nri-bundle \
      --namespace newrelic --create-namespace --reuse-values \
      --set metrics-adapter.enabled=true \
      --set newrelic-k8s-metrics-adapter.personalAPIKey=YOUR_NEW_RELIC_PERSONAL_API_KEY \
      --set newrelic-k8s-metrics-adapter.config.accountID=YOUR_NEW_RELIC_ACCOUNT_ID \
      --set newrelic-k8s-metrics-adapter.config.externalMetrics.manipulate_average_requests.query="FROM Metric SELECT average(http.server.duration) WHERE instrumentation.provider='pixie'"
    ```

    Esto es lo que hacen estas banderas:

    * `metrics-adapter.enabled`: Se establece en `true` para instalar la tabla de adaptadores métricos.

    * `newrelic-k8s-metrics-adapter.personalAPIKey`: establece su clave de API de New Relic.

    * `newrelic-k8s-metrics-adapter.accountID`: El ID de la cuenta que reenvía métrica.

    * `newrelic-k8s-metrics-adapter.config.externalMetrics.external_metric_name.query`: Agrega una nueva métrica externa con la siguiente información:

      * `external_metric_name`: el nombre de la métrica.
      * `query`: la consulta NRQL base para la métrica.
  </Step>

  <Step>
    ### Confirme que su consulta NRQL sea precisa

    Debes probar tu consulta antes de enviar métrica al escalador automático de New Relic. Vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com) > Query your Data**</DNT>, luego copie y pegue la siguiente consulta NRQL:

    ```sql
    FROM Metric SELECT average(http.server.duration) WHERE instrumentation.provider='pixie'
    ```
  </Step>

  <Step>
    ### Configura tu escalador automático

    Desde el directorio `pixie-lab-materials/main/kube` , cree un nuevo archivo llamado `hpa.yml`. El adaptador métrico New Relic envía datos al administrador del controlador, que está definido por la definición HPA en este archivo YAML.

    ```yml
    kind: HorizontalPodAutoscaler
    apiVersion: autoscaling/v2beta2
    metadata:
        name: manipulate-scaler
    spec:
        scaleTargetRef:
            apiVersion: apps/v1
            kind: Deployment
            name: manipulation-service
        minReplicas: 1
        maxReplicas: 10
        metrics:
            - type: External
                external:
                    metric:
                        name: manipulate_average_requests
                    target:
                        type: Value
                        value: 100
    ```

    Aplique el nuevo archivo YAML ejecutando:

    ```bash
    cd pixie-lab-materials/main/kube
    kubectl apply -f hpa.yaml
    ```
  </Step>
</Steps>

## Verifique su trabajo: agregue carga para activar el escalado automático [#check]

1. Navegue a su sitio implementando con `kubectl get services`.
2. Abra el `EXTERNAL-IP` desde su servicio frontend en su browser.
3. Instale `hey` y Go v1.17 con `brew install hey`.
4. Envía solicitud GET al `EXTERNAL-IP` con `hey -n 10 -c 2 -m GET http://<EXTERNAL-IP>`.
5. Mire sus llamadas automáticas de HPA con `watch kubnectl get hpa`.

Ha configurado HPA correctamente si el pod escala automáticamente la cantidad de réplicas a medida que aumenta el tiempo promedio de solicitud HTTP. Puede ajustar la configuración de sus propios servicios para que New Relic y HPA se escalen automáticamente según sea necesario.

<DocTiles numbered>
  <DocTile
    title="Get started"
    path="/docs/journey-demand/get-started"
  >
    Obtén datos sobre tu arquitectura con APM y agente de infraestructura
  </DocTile>

  <DocTile
    title="Create service levels for gameday"
    path="/docs/journey-demand/find-your-baseline/"
  >
    Cree un nivel de servicio informado por su línea de base
  </DocTile>
</DocTiles>

<DocTiles>
  <DocTile
    title="Reduce noise with quality alerts"
    number="3"
    path="/docs/journey-demand/create-quality-alerts/"
  >
    Evalúe su alerta con alerta gestión de calidad
  </DocTile>

  <DocTile
    title="Align your teams with workloads"
    number="4"
    path="/docs/journey-demand/organize-data-workloads/"
  >
    Alinee sus equipos en torno a los mismos datos
  </DocTile>

  <DocTile
    title="Autoscale your infrastructure with Kubernetes"
    number="5"
    path="/docs/journey-demand/autoscale-your-infra/"
    label={{text: "You are here", color: "orange"}}
  >
    Escale sus recursos a medida que la demanda alcance su punto máximo
  </DocTile>
</DocTiles>
