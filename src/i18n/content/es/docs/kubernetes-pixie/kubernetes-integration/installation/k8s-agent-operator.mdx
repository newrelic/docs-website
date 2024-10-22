---
title: Operador de agente de Kubernetes
tags:
  - Integrations
  - Kubernetes integration
  - Agent Operator
metaDescription: Learn how to use the Kubernetes agent operator to automatically manage your APM agents.
freshnessValidatedDate: '2024-06-28T00:00:00.000Z'
translationType: machine
---

<Callout title="avance">
  Todavía estamos trabajando en esta característica, ¡pero nos encantaría que la probaras!
</Callout>

El operador de agente Kubernetes agiliza la observabilidad de todo el stack para entornos Kubernetes al automatizar la instrumentación APM junto con el despliegue del agente Kubernetes . Al habilitar la instrumentación automática APM , los desarrolladores ya no necesitan gestionar manualmente [el agente APM](/docs/apm/new-relic-apm/getting-started/introduction-apm/). El operador del agente Kubernetes instalará, actualizará y eliminará automáticamente el agente APM.

Actualmente es [compatible con](#k8s-supported-versions) Java, .NET, Node.js, Python y Ruby con lenguajes adicionales (PHP y Go) en camino. Se probó en EKS y en un clúster local que ejecuta nodos AMD.

## Antes de que empieces [#before-begin]

Antes de instalar el operador, verifique lo siguiente:

* [Helm](https://helm.sh/): Debes instalarlo para emplear los gráficos. Consulte la [documentación de Helm](https://helm.sh/docs/) si necesita ayuda para comenzar.
* [Kubectl](https://kubernetes.io/docs/tasks/tools/): Tienes que configurarlo para comunicar con tu clúster.
* [Administrador de certificados](https://cert-manager.io/): debe instalarlo en el clúster.

### instalación de la `cert-manager` dependencia [#install-cert-manager]

Para instalar la dependencia del administrador de certificados, ejecute estos comandos:

```shell
helm repo add jetstack https://charts.jetstack.io
helm install cert-manager jetstack/cert-manager \
    --namespace cert-manager \
    --create-namespace \
    --set crds.enabled=true
```

## instalación del operador agente Kubernetes [#install-k8s-operator]

Dependiendo de lo que necesites, puedes optar por instalar el agente operador de forma independiente o junto con nuestra integración K8s.

Recomendamos encarecidamente instalarlo junto con la integración Kubernetes para aprovechar toda nuestra experiencia [de observabilidad de todo el stack](/docs/apm/apm-ui-pages/monitoring/kubernetes-summary-page/) .

### Instalación del paquete además de la integración Kubernetes (recomendado) [#bundle-installation]

El gráfico del operador del agente de Kubernetes está integrado como parte del gráfico [nri-bundle](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) , que gestiona la instalación de todos los componentes necesarios para permitir una observabilidad completa de Kubernetes.

Agregue el parámetro `k8s-agents-operator.enabled=true` a su comando de timón o inclúyalo en un archivo [`values.yaml`](https://github.com/newrelic/helm-charts/blob/master/charts/nri-bundle/values.yaml) .

Consulte la página [Instalar la integración de Kubernetes](/install/kubernetes/?dropdown1=helm) para obtener más información sobre el uso de Helm o consulte el gráfico [de nri-bundle](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) .

Vea este ejemplo del comando Helm usando el parámetro:

```shell
helm repo add newrelic https://helm-charts.newrelic.com

helm upgrade --install newrelic-bundle newrelic/nri-bundle \
    --set global.licenseKey=<NEW RELIC INGEST LICENSE KEY> \
    --set global.cluster=<CLUSTER_NAME> \
    --namespace=newrelic \
    --set newrelic-infrastructure.privileged=true \
    --set global.lowDataMode=true \
    --set kube-state-metrics.image.tag=${KSM_IMAGE_VERSION} \
    --set kube-state-metrics.enabled=true \
    --set kubeEvents.enabled=true \
    --set k8s-agents-operator.enabled=true \
    --create-namespace
```

### Instalación independiente [#standalone-installation]

Para instalar el operador del agente de Kubernetes con la configuración predeterminada, ejecute estos comandos:

```shell
helm repo add newrelic-k8s https://newrelic.github.io/k8s-agents-operator
helm upgrade --install k8s-agents-operator newrelic-k8s/k8s-agents-operator \
    --namespace newrelic \
    --create-namespace \
    --set licenseKey=<YOUR_NEW_RELIC_INGEST_LICENSE_KEY>
```

Para obtener una lista completa de opciones de configuración, consulte el cuadro [LÉAME](https://github.com/newrelic/k8s-agents-operator/tree/main/charts/k8s-agents-operator#values) .

## Configurar un namespace para habilitar al operador [#configuring-namespace]

Cada namespace requiere un proceso de dos pasos para permitir la instrumentación automática de la aplicación desplegar dentro de él.

1. Cree un secreto que contenga una [clave de licencia de ingesta de New Relic ](/docs/apis/intro-apis/new-relic-api-keys/#license-key)válida para cada namespace que desee que el operador instrumente.

   ```shell
       kubectl create secret generic newrelic-key-secret \
           --namespace <NAMESPACE_TO_MONITOR> \
           --from-literal=new_relic_license_key=<YOUR_NEW_RELIC_INGEST_LICENSE_KEY>
   ```

   Cerciorar de reemplazar `<YOUR_NEW_RELIC_INGEST_LICENSE_KEY>` con su clave de licencia válida de New Relic.

2. Aplique el siguiente CRD a cada namespace que desee autoinstrumento. Ejecute este comando:

   ```shell
   kubectl apply -f <YOUR_YAML_FILE> -n <NAMESPACE_TO_MONITOR>
   ```

   Archivo YAML para aplicar:

   ```yaml
   apiVersion: newrelic.com/v1alpha1
   kind: Instrumentation
   metadata:
       labels:
           app.kubernetes.io/name: instrumentation
           app.kubernetes.io/created-by: k8s-agents-operator
       name: newrelic-instrumentation
   spec:
       java:
           image: newrelic/newrelic-java-init:latest
           # env:
           # Example New Relic agent supported environment variables
           # - name: NEW_RELIC_LABELS
           #   value: "environment:auto-injection"
           # Example overriding the appName configuration
           # - name: NEW_RELIC_POD_NAME
           #   valueFrom:
           #     fieldRef:
           #       fieldPath: metadata.name
           # - name: NEW_RELIC_APP_NAME
           #   value: "$(NEW_RELIC_LABELS)-$(NEW_RELIC_POD_NAME)"
       nodejs:
           image: newrelic/newrelic-node-init:latest
       python:
           image: newrelic/newrelic-python-init:latest
       dotnet:
           image: newrelic/newrelic-dotnet-init:latest
       ruby:
           image: newrelic/newrelic-ruby-init:latest
   ```

## Habilitar instrumentación APM automática en la aplicación [#enable-apm-instrumentation]

El operador agente Kubernetes busca anotaciones específicas del idioma al programar su pod para saber qué aplicación monitor.

Vea las anotaciones actualmente admitidas:

```shell
instrumentation.newrelic.com/inject-java: "true"
instrumentation.newrelic.com/inject-nodejs: "true"
instrumentation.newrelic.com/inject-python: "true"
instrumentation.newrelic.com/inject-dotnet: "true"
instrumentation.newrelic.com/inject-ruby: "true"
```

Vea este ejemplo de implementación con anotación para instrumento el agente de Java:

```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: spring-petclinic
    spec:
      selector:
        matchLabels:
          app: spring-petclinic
      replicas: 1
      template:
        metadata:
          labels:
            app: spring-petclinic
          annotations:
            instrumentation.newrelic.com/inject-java: "true"
        spec:
          containers:
            - name: spring-petclinic
              image: ghcr.io/pavolloffay/spring-petclinic:latest
              ports:
                - containerPort: 8080
              env:
              - name: NEW_RELIC_APP_NAME
                value: spring-petclinic-demo
```

## Actualizar instrumentación APM en la aplicación [#upgrade-apm-instrumention]

De forma predeterminada, el operador del agente de Kubernetes instala automáticamente las últimas versiones disponibles del [agente APM](/docs/apm/new-relic-apm/getting-started/introduction-apm/) correspondiente.

Una vez que se monitorea una aplicación, no se actualiza automáticamente a una versión más nueva a menos que el usuario elija actualizar. Puede actualizar la aplicación sin problemas a una versión más nueva simplemente volviendo a implementar el pod o resetear su despliegue.

## Eliminar instrumentación APM en la aplicación [#remove-apm-instrumentation]

Para eliminar la instrumentación de APM en una aplicación, debe eliminar las anotaciones empleadas por el operador del agente de Kubernetes. En unos segundos verás que el agente APM se eliminó automáticamente.

## Actualización del operador del agente de Kubernetes [#upgrading-k8s-operator]

### instalación del paquete

Ejecute una actualización del gráfico nri-bundle con el siguiente parámetro:

```shell
 k8s-agents-operator.enabled=true
```

### Instalación independiente

Ejecute el comando `helm upgrade` para actualizar a una versión más reciente del operador del agente de Kubernetes.

```shell
    helm upgrade k8s-agents-operator newrelic/k8s-agents-operator -n newrelic
```

## Desinstalación del operador del agente de Kubernetes [#uninstall-k8s-operator]

### instalación del paquete

Desinstale el gráfico nri-bundle o, si solo desea eliminar el operador, ejecute una actualización de helm con el siguiente parámetro:

```shell
 k8s-agents-operator.enabled=false
```

### Instalación independiente

Para desinstalar y eliminar el operador del agente de Kubernetes, ejecute este comando:

```shell
    helm uninstall k8s-agents-operator -n newrelic
```

## Buscar y utilizar datos [#find-data]

* Obtenga información valiosa de su aplicación y resuelva el incidente empleando la página [de resumen APM](/docs/apm/agents/manage-apm-agents/agent-data/triage-run-diagnostics/).
* Consulte la página [de resumen de Kubernetes](/docs/apm/apm-ui-pages/monitoring/kubernetes-summary-page/) . Proporciona Kubernetes información valiosa en el contexto de su aplicación de monitor.

## Preguntas frecuentes [#faq]

<CollapserGroup>
  <Collapser
    id="route-apps-telemetry"
    title="¿Puedo enrutar mi aplicación telemetría a diferentes cuentas?"
  >
    Sí, solo necesitas cambiar tu [clave de licencia](/docs/apis/intro-apis/new-relic-api-keys/#license-key) inyectada en el secreto en el namespace apropiado.

    <Callout variant="important">
      La [experiencia K8s APM ](/docs/apm/apm-ui-pages/monitoring/kubernetes-summary-page/)solo está disponible en la cuenta donde están disponibles los datos de la aplicación y del clúster K8s.
    </Callout>
  </Collapser>

  <Collapser
    id="setup-operator"
    title="¿Puedo configurar el operador para que inyecte una versión específica de un agente APM?"
  >
    Durante la versión preliminar, solo admitimos la última versión de cada [agente APM](/docs/apm/new-relic-apm/getting-started/introduction-apm/). Luego de GA, permitiremos al usuario cambiar la versión del agente APM.
  </Collapser>

  <Collapser
    id="modify-conf-apm"
    title="¿Puedo instalar el agente operador K8s si mi aplicación ya está instrumentada?"
  >
    La instalación de dos agentes APM en la misma aplicación puede provocar problemas inesperados. Por lo tanto, recomendamos encarecidamente retirar cualquier instrumentación existente antes de instalar el operador.
  </Collapser>
</CollapserGroup>

## Resolución de problemas [#troubleshooting]

Si tu aplicación no está instrumentada, debes verificar lo siguiente:

* Cerciorar de volver a implementar o implementar una nueva aplicación después de que se instaló el operador. Tenga en cuenta que el operador solo auto-instrumentado nueva aplicación desplegará en el clúster.

* Comprueba que el secreto y la instrumentación CRD estén instalados en el namespace de la aplicación.

  ```shell
  kubectl get secrets -n <NAMESPACE>
  kubectl get instrumentation -n <NAMESPACE>
  ```

* Compruebe que el pod tenga las anotaciones que permitan la instrumentación automática.

  ```shell
      kubectl get pod <POD> -n <NAMESPACE>  -o jsonpath='{.metadata.annotations}'
  ```

* Obtenga el registro del pod del operador agente.

  ```shell
      kubectl logs <AGENT_OPERATOR_POD> -n newrelic
  ```

* Cerciorar de que el contenedor `init` se inyectó y ejecutado correctamente dentro del pod de la aplicación.

  ```shell
      kubectl describe pod <POD> -n <NAMESPACE>
  ```

## Apoyo [#support]

El operador agente Kubernetes actualmente admite la última versión de estos agentes APM: Java, .NET, Node.js, Pitón y Ruby.

Una vez que el operador esté en disponibilidad general, se admitirán las 3 versiones más recientes de cada uno de los agentes APM .

Para problemas con el operador del agente de Kubernetes:

* Revise la [sección de problemas en GitHub](https://github.com/newrelic/k8s-agents-operator/issues) para detectar problemas similares o considere abrir un nuevo problema.
* Puede comunicar con el equipo [de soporte de New Relic](https://support.newrelic.com/) para obtener ayuda.
