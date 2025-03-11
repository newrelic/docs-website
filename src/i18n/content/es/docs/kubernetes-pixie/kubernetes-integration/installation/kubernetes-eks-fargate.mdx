---
title: instalación en AWS EKS Fargate
tags:
  - Integrations
  - Kubernetes integration
  - Installation
  - EKS Fargate
metaDescription: 'New Relic''s Kubernetes integration: The installation of Kubernetes on AWS EKS Fargate'
freshnessValidatedDate: '2024-04-29T00:00:00.000Z'
translationType: machine
---

<Callout title="Avance">
  Esta característica se encuentra actualmente en versión preliminar.
</Callout>

New Relic admite el monitoreo de carga de trabajo Kubernetes en EKS Fargate al inyectar automáticamente un sidecar que contiene el agente de infraestructura y la integración `nri-kubernetes` en cada pod que necesita ser monitoreado.

Si el mismo clúster de Kubernetes también contiene nodos EC2, nuestra solución también será desplegar como `DaemonSet` en todos ellos. No se inyectará ningún sidecar en el módulo programado en los nodos EC2 y no se desplegará ningún `DaemonSet` en los nodos Fargate. A continuación se muestra un ejemplo de una instancia híbrida con nodos Fargate y EC2:

<img
  title="Diagram showing an EKS cluster with Fargat and EC2 nodes"
  alt="Diagram showing an EKS cluster with Fargat and EC2 nodes"
  src="/images/kubernetes_diagram_fargate-overview.svg"
/>

<figcaption>
  En un entorno mixto, la integración solo utiliza un sidecar para los nodos Fargate.
</figcaption>

New Relic recopila todas las métricas admitidas para todos los objetos Kubernetes independientemente de dónde estén programados, ya sean nodos Fargate o EC2. Tenga en cuenta que, debido a las limitaciones impuestas por Fargate, la integración de New Relic se limita a ejecutarse en modo [sin privilegios](/docs/integrations/kubernetes-integration/installation/kubernetes-integration-install-configure/#unprivileged) en los nodos de Fargate. Esto significa que las métricas que generalmente se obtienen directamente del host, como los procesos en ejecución, no estarán disponibles para los nodos Fargate.

El agente en ambos escenarios extraerá datos de Kube State métrica (KSM), Kubelet y cAdvisor y los enviará en el mismo formato.

<Callout variant="important">
  Al igual que con cualquier otro clúster de Kubernetes, nuestra solución aún requiere que despliegue y monitor una instancia de Kube State métrica (KSM). Nuestro Helm Chart y/o nuestro instalador lo harán automáticamente de forma predeterminada, aunque este comportamiento se puede desactivar si su clúster ya tiene una instancia funcional de KSM. Esta instancia de KSM se monitoreará como cualquier otra carga de trabajo: inyectando un sidecar si se programa en un nodo Fargate o con la instancia local del `DaemonSet` si se programa en un nodo EC2.
</Callout>

Otros componentes de la solución New Relic para Kubernetes, como `nri-prometheus`, `nri-metadata-injection` y `nri-kube-events`, no tienen ninguna particularidad y se desplegarán mediante nuestro Helm Chart normalmente como lo harían en entornos que no son de Fargate.

Puede elegir entre dos alternativas para instalar la observabilidad total de New Relic en su clúster EKS Fargate:

* [Inyección automática (recomendado)](#fargate-automatic)
* [Inyección manual](#fargate-manual)

Independientemente del enfoque que elija, la experiencia es exactamente la misma después de su instalación. La única diferencia es cómo se inyecta el contenedor. Recomendamos configurar la inyección automática con el operador de monitoreo de infraestructura New Relic porque eliminará la necesidad de editar manualmente cada despliegue que desee monitor.

## Inyección automática (recomendado) [#fargate-automatic]

De forma predeterminada, cuando el soporte de Fargate está habilitado, New Relic desplegará un operador en el clúster (`newrelic-infra-operator`). Una vez implementado, este operador inyectará automáticamente el sidecar de monitoreo en los pods que están programados en los nodos de Fargate, mientras también administra la creación y actualización de `Secrets`, `ClusterRoleBindings` y cualquier otro recurso relacionado.

Este operador acepta una variedad de opciones de configuración avanzadas que se pueden usar para limitar o ampliar el alcance de la inyección, mediante el uso de selectores de etiquetas tanto para el pod como para el espacio de nombres.

**Que hace el operador**

Detrás de escena, el operador configura un `MutatingWebhookConfiguration`, que le permite modificar los objetos del pod que están a punto de crearse en el clúster. En este evento, y cuando el pod que se está creando coincida con la configuración del usuario, el operador:

1. Agregue un contenedor sidecar al pod que contiene la integración de New Relic Kubernetes.

2. Si no existe un secreto, cree uno en el mismo namespace que el pod que contiene la New Relic

   <InlinePopover type="licenseKey"/>

   , que es necesaria para que el sidecar informe datos.

3. Agregue la cuenta de servicio del pod a un `ClusterRoleBinding` creado previamente por el gráfico del operador, lo que otorgará a este sidecar los permisos necesarios para alcanzar el extremo métrico Kubernetes .

El `ClusterRoleBinding` otorga los siguientes permisos al pod que se inyecta:

```yml
- apiGroups: [""]
  resources:
    - "nodes"
    - "nodes/metrics"
    - "nodes/stats"
    - "nodes/proxy"
    - "pods"
    - "services"
    - "namespaces"
  verbs: ["get", "list"]
- nonResourceURLs: ["/metrics"]
  verbs: ["get"]
```

<Callout variant="tip">
  Para que el sidecar pueda inyectarse y, por tanto, obtener la métrica del pod desplegar antes de que se haya instalado el operador, es necesario realizar manualmente un despliegue (reinicio) del despliegue afectado. De esta manera, cuando se creen los pod, el operador podrá inyectar el sidecar de monitoreo. New Relic ha optado por no hacer esto automáticamente para evitar interrupciones inesperadas del servicio y picos de uso de recursos.
</Callout>

<Callout variant="important">
  Recuerda crear un perfil de Fargate con un selector que declare el namespace `newrelic` (o el namespace que elijas para la instalación).
</Callout>

Aquí está el flujo de trabajo de inyección:

<img
  title="Diagram showing the workflow of sidecar injection"
  alt="Diagram showing the workflow of sidecar injection"
  src="/images/kubernetes_diagram_fargate-workflow.svg"
/>

<Callout variant="tip">
  Los siguientes pasos son para una configuración predeterminada. Antes de completarlos, le sugerimos que eche un vistazo a la sección [de configuración](#config-auto) a continuación para ver si desea modificar algún aspecto de la inyección automática.
</Callout>

<Steps>
  <Step>
    ### Agregar el repositorio New Relic Helm

    Si no lo hizo antes, ejecute este comando para agregar el repositorio New Relic Helm:

    ```shell
    helm repo add newrelic https://helm-charts.newrelic.com
    ```
  </Step>

  <Step>
    ### Crea un archivo llamado `values.yaml`

    Para instalar el operador encargado de inyectar el sidecar de infraestructura, cree un archivo llamado `values.yaml`. Este archivo definirá su configuración:

    ```yaml
    ## Global values

    global:
    # -- The cluster name for the Kubernetes cluster.
    cluster: "_YOUR_K8S_CLUSTER_NAME_"

    # -- The license key for your New Relic Account. This will be preferred configuration option if both `licenseKey` and `customSecret` are specified.
    licenseKey: "_YOUR_NEW_RELIC_LICENSE_KEY_"

    # -- (bool) In each integration it has different behavior. Enables operating system metric collection on each EC2 K8s node. Not applicable to Fargate nodes.
    # @default -- false
    privileged: true

    # -- (bool) Must be set to `true` when deploying in an EKS Fargate environment
    # @default -- false
    fargate: true

    ## Enable nri-bundle sub-charts

    newrelic-infra-operator:
    # Deploys the infrastructure operator, which injects the monitoring sidecar into Fargate pods
    enabled: true
    tolerations: 
        - key: "eks.amazonaws.com/compute-type"
        operator: "Equal"
        value: "fargate"
        effect: "NoSchedule"
    config:
        ignoreMutationErrors: true
        infraAgentInjection:
        # Injection policies can be defined here.  See [values file](https://github.com/newrelic/newrelic-infra-operator/blob/main/charts/newrelic-infra-operator/values.yaml#L114-L125) for more detail.
        policies:
        - namespaceName: namespace-a
        - namespaceName: namespace-b

    newrelic-infrastructure:
    # Deploys the Infrastructure Daemonset to EC2 nodes.  Disable for Fargate-only clusters.
    enabled: true

    nri-metadata-injection:
    # Deploy our mutating admission webhook to link APM and Kubernetes entities
    enabled: true

    kube-state-metrics:
    # Deploys Kube State Metrics.  Disable if you are already running KSM in your cluster.
    enabled: true

    nri-kube-events:
    # Deploy the Kubernetes events integration.
    enabled: true

    newrelic-logging:
    # Deploys the New Relic's Fluent Bit daemonset to EC2 nodes.  Disable for Fargate-only clusters.
    enabled: true

    newrelic-prometheus-agent:
    # Deploys the Prometheus agent for scraping Prometheus endpoints.
    enabled: true
    config:
        kubernetes:
        integrations_filter:
            enabled: true
            source_labels: ["app.kubernetes.io/name", "app.newrelic.io/name", "k8s-app"]
            app_values: ["redis", "traefik", "calico", "nginx", "coredns", "kube-dns", "etcd", "cockroachdb", "velero", "harbor", "argocd", "istio"]
    ```
  </Step>

  <Step>
    ### Desplegar

    Luego de crear y modificar el archivo, puede implementar la solución usando este comando de Helm:

    ```shell
    helm upgrade --install newrelic-bundle newrelic/nri-bundle -n newrelic --create-namespace -f values.yaml
    ```

    <Callout variant="important">
      Cuando implemente la solución en un clúster híbrido (con nodos EC2 y Fargate), asegúrese de que la solución no esté seleccionada por ningún perfil de Fargate; de lo contrario, la instancia `DaemonSet` quedará bloqueada en un estado pendiente. Para entornos exclusivos de Fargate, esto no es una preocupación porque no se crea ninguna instancia `DaemonSet` .
    </Callout>
  </Step>
</Steps>

### Inyección automática: limitaciones conocidas [#known-limitations]

A continuación se detallan algunas cuestiones que debe tener en cuenta al utilizar la inyección automática:

1. Actualmente no existe ningún controlador que vigile todo el clúster para asegurarse de que los secretos que ya no son necesarios se recopilen como basura. Sin embargo, todos los objetos comparten la misma etiqueta que puedes usar para eliminar todos los recursos, si es necesario. Inyectamos la etiqueta `newrelic/infra-operator-created: true`, que puedes usar para eliminar recursos con un solo comando.
2. Por el momento, no es posible utilizar el sidecar inyectado para monitor los servicios que se ejecutan en el pod. El sidecar solo monitor el propio Kubernetes . Sin embargo, es posible que el usuario avanzado desee excluir estos pods de la inyección automática e inyectar manualmente una versión personalizada del sidecar con la integración en el host habilitada configurándolos y montando su configuración en el lugar adecuado. Para obtener ayuda, consulte este [tutorial](/docs/integrations/kubernetes-integration/link-apps-services/tutorial-monitor-redis-running-kubernetes/).

### Inyección automática: configuración [#automatic-configuration]

Puedes configurar diferentes aspectos de la inyección automática. De forma predeterminada, el operador inyectará el sidecar de monitoreo en todos los pods desplegar en los nodos de Fargate que no formen parte de un `Job` o un `BatchJob`.

Este comportamiento se puede cambiar a través de las opciones de configuración. Por ejemplo, puede definir selectores para limitar o ampliar la selección de pods que se inyectan, asignar recursos al operador y ajustar el sidecar. Además, puedes agregar otros atributos, etiquetas y variables de entorno. Consulte el gráfico [`README.md`](https://github.com/newrelic/helm-charts/blob/master/charts/newrelic-infra-operator/README.md) y [`values.yaml`](https://github.com/newrelic/helm-charts/blob/master/charts/newrelic-infra-operator/values.yaml).

<Callout variant="important">
  Al especificar sus propias reglas de inyección personalizadas, se descartará el conjunto de reglas predeterminado que impide la inyección de sidecar en pods que no están programados en Fargate. Asegúrese de que sus reglas personalizadas tengan el mismo efecto; de lo contrario, en el clúster híbrido que también tiene `DaemonSet` desplegar, el pod programado en EC2 se monitoreará dos veces, lo que generará datos incorrectos o duplicados.
</Callout>

### Actualizar a la última versión o a una nueva configuración [#automatic-update]

Para actualizar a la última versión de la integración EKS Fargate, actualice el repositorio Helm usando `helm repo update newrelic` y reinstale el paquete simplemente ejecutando nuevamente el comando anterior.

Para actualizar la configuración del agente de infraestructura inyectado o del propio operador, modifique `values-newrelic.yaml` y actualice la versión de Helm con la nueva configuración. El operador se actualiza inmediatamente y su carga de trabajo quedará instrumentada con la nueva versión en su próximo reinicio. Si deseas actualizarlos inmediatamente, puedes forzar un reinicio de tu carga de trabajo ejecutando:

```shell
kubectl rollout restart deployment YOUR_APP
```

### Inyección automática: Desinstalar [#automatic-uninstall]

Para desinstalar el sidecar que realiza la inyección automática pero conservar el resto de la solución New Relic, usando Helm, desactive el infraoperador configurando `infra-operator.enabled` en `false`, ya sea en el archivo `values.yaml` o en la línea de comando (`--set`) y vuelva a ejecutar el comando de instalación anterior.

Recomendamos encarecidamente mantener el indicador `--set global.fargate=true` , ya que no habilita la inyección automática pero hace que otros componentes de la instalación sean compatibles con Fargate, evitando comportamientos no deseados.

Para desinstalar toda la solución:

1. Desinstale completamente la versión Helm.

2. Despliegue la cápsula para quitar el sidecar:

   ```shell
   kubectl rollout restart deployment YOUR_APP
   ```

3. Basura recoge los secretos:

   ```shell
   kubectl delete secrets -n YOUR_NAMESPACE -l newrelic/infra-operator-created=true
   ```

## Inyección manual [#fargate-manual]

Si tiene alguna inquietud sobre la inyección automática, puede inyectar el sidecar manualmente directamente modificando los manifiestos de la carga de trabajo programada que se programarán en los nodos de Fargate. Tenga en cuenta que agregar el sidecar al despliegue programado en los nodos EC2 puede generar datos incorrectos o duplicados, especialmente si esos nodos ya se están monitoreando con `DaemonSet`.

Estos objetos son necesarios para que el sidecar informe datos correctamente:

* El `ClusterRole` proporciona la licencia necesaria para la integración `nri-kubernetes` .
* Un `ClusterRoleBinding` que vincula el `ClusterRole` y la cuenta de servicio del pod.
* El secreto que almacena la New Relic `licenseKey` en cada namespace de Fargate.
* El contenedor sidecar en la plantilla específica del monitor carga de trabajo.

<Callout variant="tip">
  Estos pasos de configuración manual son para una instalación genérica. Antes de completarlos, eche un vistazo a la sección [de configuración](#manual-configuration) a continuación para ver si desea modificar algún aspecto de la inyección automática.
</Callout>

Complete estos pasos para la inyección manual:

<Steps>
  <Step>
    ### `ClusterRole` [#manual-clusterrole]

    Si el `ClusterRole` no existe, créelo y otorgue las licencias necesarias para alcanzar el extremo métrico. Sólo necesita hacer esto una vez, incluso para monitorear múltiples aplicaciones en el mismo clúster. Puede emplear este fragmento tal como aparece a continuación, sin ningún cambio:

    ```yml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
        labels:
        app: newrelic-infrastructure
        name: newrelic-newrelic-infrastructure-infra-agent
    rules:
        - apiGroups:
            - ""
        resources:
            - nodes
            - nodes/metrics
            - nodes/stats
            - nodes/proxy
            - pods
            - services
        verbs:
            - get
            - list
        - nonResourceURLs:
            - /metrics
        verbs:
            - get
    ```
  </Step>

  <Step>
    ### Sidecar inyectado [#manual-injected-sidecar]

    Para cada carga de trabajo que desee monitor, agregue un contenedor adicional para la imagen `newrelic/infrastructure-k8s`. Toma el contenedor del siguiente fragmento e inyéctalo en la carga de trabajo que deseas monitor, especificando el nombre de tu `FargateProfile` en la variable `customAttributes`. Tenga en cuenta que los volúmenes se pueden definir como `emptyDir: {}`.

    <Callout variant="tip">
      En el caso especial de un KSM implementado, también debe eliminar la variable de entorno `DISABLE_KUBE_STATE_METRICS` y aumentar las solicitudes y límites de recursos.
    </Callout>

    ```yml
    apiVersion: apps/v1
    kind: Deployment
    spec:
        template:
        spec:
            containers:
            - name: newrelic-infrastructure
            env:
            - name: NRIA_LICENSE_KEY
                valueFrom:
                secretKeyRef:
                    key: license
                    name: newrelic-newrelic-infrastructure-config
            - name: NRIA_VERBOSE
                value: "1"
            - name: DISABLE_KUBE_STATE_METRICS
                value: "true"
            - name: CLUSTER_NAME
                value: testing-injection
            - name: COMPUTE_TYPE
                value: serverless
            - name: NRK8S_NODE_NAME
                valueFrom:
                fieldRef:
                    apiVersion: v1
                    fieldPath: spec.nodeName
            - name: NRIA_DISPLAY_NAME
                valueFrom:
                fieldRef:
                    apiVersion: v1
                    fieldPath: spec.nodeName
            - name: NRIA_CUSTOM_ATTRIBUTES
                value: '{"clusterName":"$(CLUSTER_NAME)", "computeType":"$(COMPUTE_TYPE)", "fargateProfile":"[YOUR FARGATE PROFILE]"}'
            - name: NRIA_PASSTHROUGH_ENVIRONMENT
                value: KUBERNETES_SERVICE_HOST,KUBERNETES_SERVICE_PORT,CLUSTER_NAME,CADVISOR_PORT,NRK8S_NODE_NAME,KUBE_STATE_METRICS_URL,KUBE_STATE_METRICS_POD_LABEL,TIMEOUT,ETCD_TLS_SECRET_NAME,ETCD_TLS_SECRET_NAMESPACE,API_SERVER_SECURE_PORT,KUBE_STATE_METRICS_SCHEME,KUBE_STATE_METRICS_PORT,SCHEDULER_ENDPOINT_URL,ETCD_ENDPOINT_URL,CONTROLLER_MANAGER_ENDPOINT_URL,API_SERVER_ENDPOINT_URL,DISABLE_KUBE_STATE_METRICS,DISCOVERY_CACHE_TTL
            image: newrelic/infrastructure-k8s:2.4.0-unprivileged
            imagePullPolicy: IfNotPresent
            resources:
                limits:
                memory: 100M
                cpu: 200m
                requests:
                cpu: 100m
                memory: 50M
            securityContext:
                allowPrivilegeEscalation: false
                readOnlyRootFilesystem: true
                runAsUser: 1000
            terminationMessagePath: /dev/termination-log
            terminationMessagePolicy: File
            volumeMounts:
            - mountPath: /var/db/newrelic-infra/data
                name: tmpfs-data
            - mountPath: /var/db/newrelic-infra/user_data
                name: tmpfs-user-data
            - mountPath: /tmp
                name: tmpfs-tmp
            - mountPath: /var/cache/nr-kubernetes
                name: tmpfs-cache
    [...]
    ```

    Al agregar manualmente el manifiesto del agente complementario, puede utilizar cualquier opción de configuración del agente para configurar el comportamiento del agente. Para obtener ayuda, consulte [Valores de configuración del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/).
  </Step>

  <Step>
    ### `ClusterRoleBinding` [#manual-cluster-role-binding]

    Cree un `ClusterRoleBinding`, o agregue a uno creado previamente el `ServiceAccount` de la aplicación que se va a monitorear. Todas las cargas de trabajo pueden compartir el mismo `ClusterRoleBinding`, pero a él se le deben sumar los `ServiceAccount` de cada una.

    Crea el siguiente `ClusterRoleBinding` que tenga como asunto la cuenta de servicio del pod que deseas monitor.

    <Callout variant="tip">
      No es necesario repetir la misma cuenta de servicio dos veces. Cada vez que desee monitor un pod con una cuenta de servicio que aún no está incluida, simplemente agréguelo a la lista.
    </Callout>

    ```yml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
        name: newrelic-newrelic-infrastructure-infra-agent
    roleRef:
        apiGroup: rbac.authorization.k8s.io
        kind: ClusterRole
        name: newrelic-newrelic-infrastructure-infra-agent
    subjects:
        - kind: ServiceAccount
        name: [INSERT_SERVICE_ACCOUNT_NAME_OF_WORKLOAD]
        namespace: [INSERT_SERVICE_ACCOUNT_NAMESPACE_OF_WORKLOAD]
    ```
  </Step>

  <Step>
    ### secreto que contiene [#secret-containing]

    Crea un secreto que contenga la New Relic <InlinePopover type="licenseKey"/>. Cada namespace necesita su propio secreto.

    Cree el siguiente `Secret` que tenga una licencia con el valor codificado en Base64 de su <InlinePopover type="licenseKey"/>. Se necesita un secreto en cada namespace donde se ejecuta un pod que desea monitor .

    ```yml
    apiVersion: v1
    data:
        license: INSERT_YOUR_NEW_RELIC_LICENSE_ENCODED_IN_BASE64
    kind: Secret
    metadata:
        name: newrelic-newrelic-infrastructure-config
        namespace: [INSERT_NAMESPACE_OF_WORKLOAD]
    type: Opaque
    ```
  </Step>
</Steps>

### Inyección manual: Actualización a la última versión [#manual-update-version]

Para actualizar cualquiera de los componentes, solo necesitas modificar desplegar yaml. La actualización de cualquiera de los campos del contenedor inyectado hará que se vuelva a crear el pod.

<Callout variant="important">
  El agente no puede cargar en caliente la New Relic <InlinePopover type="licenseKey"/>. Después de actualizar el secreto, debes implementar el despliegue nuevamente.
</Callout>

### Inyección manual: Desinstalar la integración Fargate [#manual-uninstall]

Para eliminar el contenedor inyectado y los recursos relacionados, sólo tienes que eliminar lo siguiente:

* El sidecar de la carga de trabajo que ya no debería ser monitoreado.
* Todos los secretos que contiene la licencia newrelic.
* `ClusterRole` y `ClusterRoleBinding` objetos.

Tenga en cuenta que eliminar el contenedor sidecar hará que se vuelva a crear el pod .

## Logging [#fargate-logging]

El registro de New Relic no está disponible en los nodos de Fargate debido a restricciones de seguridad impuestas por AWS, pero aquí hay algunas opciones de registro:

* Si estás utilizando Fluentbit para iniciar sesión, consulta [el complementoKubernetes para reenvío de registros](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/).
* Si FireLens log ya supervisa sus datos AWS , consulte [AWS el complemento FireLens para obtener información sobre el reenvío de](/docs/logs/forward-logs/aws-firelens-plugin-log-forwarding/) registros .
* Si sus datos log ya están siendo monitoreados por el registro de Amazon CloudWatch, consulte [Transmitir registro mediante Kinesis Data Firehose](/docs/logs/forward-logs/stream-logs-using-kinesis-data-firehose/).
* Consulte [AWS Lambda para enviar registros de CloudWatch](/docs/logs/forward-logs/aws-lambda-sending-cloudwatch-logs/).
* Consulte [Tres formas de reenviar registros de Amazon ECS a New Relic](https://newrelic.com/blog/how-to-relic/forward-logs-from-amazon-ecs-to-new-relic).

## Resolución de problemas [#troubleshooting]

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="daemonset"
    title="Se están implementando réplicas de DaemonSet en nodos de Fargate"
  >
    Si observa que se están programando réplicas de Infra `DaemonSet` en nodos de Fargate, es posible que se deba a que las reglas `nodeAffinity` no están configuradas correctamente.

    Vuelva a verificar que la solución se instaló con la opción `global.fargate` para `true`, ya sea a través de la línea de comando (`--set global.fargate=true`) o en el archivo `values.yaml` . Si el método de instalación no fue Helm, deberá agregar manualmente `nodeAffinity` reglas para excluir los nodos de Fargate.
  </Collapser>

  <Collapser
    className="freq-link"
    id="event-untolerated"
    title={<>Evento <InlineCode>FailedScheduling</InlineCode> debido a contaminación no tolerada</>}
  >
    Recuerda agregar en el archivo `values.yaml` el `tolerations` descrito en [Instalación de inyección automática](#auto-injection-install) si obtienes el siguiente evento al intentar crear un pod:

    ```yaml
    LAST SEEN | TYPE | REASON | OBJECT | MESSAGE
    :--|:--|:--|:--|:--
    3m9s (x2 over 8m10s) | Warning | FailedScheduling | Pod/no-fargate-deploy-cbddd6ccf-8f9x4 | 0/2 nodes are available: 2 node(s) had untolerated taint {eks.amazonaws.com/compute-type: fargate}. preemption: 0/2 nodes are available: 2 Preemption is not helpful for scheduling..
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="event-many-pods"
    title={<>Evento <InlineCode>FailedScheduling</InlineCode> debido a demasiados pods</>}
  >
    Verifique si hay un perfil de Fargate con un selector que nombre el namespace donde se realiza la instalación si obtiene el siguiente evento al intentar crear un pod:

    ```yaml
    LAST SEEN | TYPE | REASON | OBJECT | MESSAGE
    :--|:--|:--|:--|:--
    61s | Warning | FailedScheduling | Pod/newrelic-bundle-newrelic-infra-operator-admission-create-d8ggt | 0/2 nodes are available: 2 Too many pods. preemption: 0/2 nodes are available: 2 No preemption victims found for incoming pod..
    ```
  </Collapser>
</CollapserGroup>

## Ver sus datos EKS [#view-data]

A continuación se muestra un ejemplo de cómo se ve un nodo Fargate en la New Relic UI:

<img
  title="Screenshot showing the Kubernetes explorer with a Fargate node"
  alt="Screenshot showing the Kubernetes explorer with a Fargate node"
  src="/images/kubernetes_screenshot-crop_fargate-ui.webp"
/>

Para ver sus datos de AWS:

1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Kubernetes**</DNT> y realice una de las siguientes acciones:

   * Seleccione un nombre de integración para ver los datos.
   * Seleccione el icono Explorar datos para ver los datos de AWS.

2. Filtra tus datos usando dos etiquetas Fargate:

   * `computeType=serverless`
   * `fargateProfile=[name of the Fargate profile to which the workload belongs]`
