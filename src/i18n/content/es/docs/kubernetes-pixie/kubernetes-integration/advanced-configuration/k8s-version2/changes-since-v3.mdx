---
title: Cambios introducidos en la integración de Kubernetes versión 3
tags:
  - Integrations
  - Kubernetes integration
  - Changelog
metaDescription: Changes introduced in Kubernetes integration version 3
freshnessValidatedDate: never
translationType: machine
---

A partir de la versión 3, la característica de integración de New Relic Kubernetes es una [arquitectura](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#architecture) que monitoreo de IA será más modular y configurable, brindándole más poder para elegir cómo se desplegará y haciéndola compatible con más entornos.

Los datos informados por la versión 3 de integración de Kubernetes no han cambiado desde la versión 2. Para la versión 3, nos centramos en la capacidad de configuración, la estabilidad y la experiencia del usuario. Consulte las notas de la versión más recientes para la integración [aquí](/docs/release-notes/infrastructure-release-notes/kubernetes-integration-release-notes/).

<Callout variant="important">
  La integración de Kubernetes versión 3 (`appVersion`) se incluye en el [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) gráfico `version` 4.
</Callout>

## Guía de migración [#migration-guide]

Para que la migración desde versiones anteriores sea lo más sencilla posible, hemos desarrollado una capa de compatibilidad que traduce la mayoría de las opciones configurables del antiguo gráfico `newrelic-infrastructure` a sus nuevas contrapartes. Esta capa de compatibilidad es temporal y se eliminará en el futuro. Le recomendamos que lea atentamente esta guía y migre la configuración con supervisión humana. Puede leer más sobre el gráfico `newrelic-infrastructure` actualizado [aquí](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure#newrelic-infrastructure).

### Configuración de Kube State métrica (KSM) [#ksm-config]

<Callout variant="tip">
  El monitoreo KSM funciona de manera inmediata para la mayoría de las configuraciones; la mayoría de los usuarios no necesitarán cambiar esta configuración.
</Callout>

* `disableKubeStateMetrics` ha sido reemplazado por `ksm.enabled`. El valor predeterminado sigue siendo el mismo (raspado de KSM habilitado).
* `kubeStateMetricsScheme`, `kubeStateMetricsPort`, `kubeStateMetricsUrl`, `kubeStateMetricsPodLabel` y `kubeStateMetricsNamespace` han sido reemplazados por `ksm.config`, más completo y flexible.
* Tenga en cuenta que KSM v2+ desactiva las etiquetas métricas de forma predeterminada. Puedes habilitar el seguimiento de las etiquetas métricas objetivo empleando las `metric-labels-allowlist` opciones [aquí](https://github.com/kubernetes/kube-state-metrics/blob/main/docs/developer/cli-arguments.md) descritas en tu clúster de Kubernetes.

El objeto `ksm.config` tiene la siguiente estructura:

```yaml
ksm:
  config:
    # When autodiscovering KSM, force the following scheme. By default, `http` is used.
    scheme: "http"
    # Label selector to find kube-state-metrics endpoints. Defaults to `app.kubernetes.io/name=kube-state-metrics`.
    selector: "app.kubernetes.io/name=kube-state-metrics"
    # Restrict KSM discovery to this particular namespace. Defaults to all namespaces.
    namespace: ""
    # When autodiscovering, only consider endpoints that use this port. By default, all ports from the discovered `endpoint` are probed.
    # port: 8080
    # Override autodiscovery mechanism completely and specify the KSM url directly instead
    # staticUrl: "http://test.io:8080/metrics"
```

### Configuración del plano de control [#controlplane-configuration]

La configuración del plano de control ha cambiado sustancialmente. Si anteriormente habilitó el monitoreo del plano de control, le recomendamos que consulte nuestra documentación [Configurar el monitoreo del plano de control](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/configure-control-plane-monitoring) .

Las siguientes opciones han sido reemplazadas por una configuración más completa, cubierta en la sección vinculada anteriormente:

* `apiServerSecurePort`
* `etcdTlsSecretName`
* `etcdTlsSecretNamespace`
* `controllerManagerEndpointUrl`, `etcdEndpointUrl`, `apiServerEndpointUrl` y `schedulerEndpointUrl`

### Configuración del agente [#agent-configuration]

El archivo de configuración del agente, especificado anteriormente en `config`, se ha movido a `common.agentConfig`. El formato del archivo no ha cambiado y toda la gama de opciones que se pueden configurar se pueden encontrar [aquí](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/).

Las siguientes opciones del agente anteriormente tenían "alias" en la raíz del archivo `values.yml` y son <DNT>**no longer available**</DNT>:

* `logFile` ha sido reemplazado por `common.agentConfig.log_file`.
* `eventQueueDepth` ha sido reemplazado por `common.agentConfig.event_queue_depth`.
* `customAttributes` cambió de formato a un objeto yaml. El formato anterior, una cadena codificada manualmente en JSON, por ejemplo `{"team": "devops"}`, está en desuso.
* Anteriormente, `customAttributes` tenía una entrada `clusterName` predeterminada que podría tener consecuencias no deseadas si se eliminaba. Este ya no es el caso; El usuario ahora puede anular de forma segura `customAttributes` en su totalidad.
* `discoveryCacheTTL` se ha eliminado por completo, ya que el descubrimiento ahora se realiza utilizando informantes de Kubernetes, que tienen un caché incorporado.

### Configuración de integración [#integrations-configuration]

Integración se configuraron previamente en `integrations_config`, usando un formato matriz:

```yaml
integrations_config:
  - name: nri-redis.yaml
    data:
      discovery:  # ...
      integrations:  # ...
```

El mecanismo sigue siendo el mismo, pero hemos cambiado el formato para que sea más fácil de usar:

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:  # ...
    integrations:  # ...
```

Además, las marcas `--port` y `--tls` ahora son obligatorias en el comando de descubrimiento. En el pasado, lo siguiente funcionaría:

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:
      command:
        exec: /var/db/newrelic-infra/nri-discovery-kubernetes
```

A partir de la versión 3, debes especificar `--port` y `--tls`:

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:
      command:
        exec: /var/db/newrelic-infra/nri-discovery-kubernetes --tls --port 10250
```

Este cambio es necesario porque en la versión 2 y versiones anteriores, el componente `nrk8s-kubelet` (o su equivalente) se ejecutó con `hostNetwork: true`, por lo que `nri-discovery-kubernetes` podría conectarse al kubelet usando `localhost` y http simple. Por razones de seguridad, este ya no es el caso; de ahí la necesidad de especificar ambas banderas de ahora en adelante.

Para obtener más detalles sobre cómo configurar la integración en el host en Kubernetes, consulte nuestros [serviciosmonitor en la documentación Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/link-apps-services/monitor-services-running-kubernetes) .

### Valores de gráficos varios [#misc-chart-values]

Si bien no están relacionadas con la configuración de integración, las siguientes opciones diversas para el gráfico Helm también han cambiado:

* `runAsUser` ha sido reemplazado por `securityContext`, que tiene una plantilla directamente en el pod y es más configurable.

* `resources` Se ha eliminado, ya que ahora desplegaremos tres cargas de trabajo diferentes. Los recursos para cada uno se pueden configurar individualmente en:

  * `ksm.resources`
  * `kubelet.resources`
  * `controlPlane.resources`

* `tolerations` se ha dividido en tres y el anterior ya no es válido. Los tres toleran de forma predeterminada cualquier valor para `NoSchedule` y `NoExecute`:

  * `ksm.tolerations`
  * `kubelet.tolerations`
  * `controlPlane.tolerations`

* `image` y todas sus subclaves han sido reemplazadas por secciones individuales para cada una de las tres imágenes que ahora se muestran:

  * `images.forwarder.*` para configurar el reenviador del agente de infraestructura.
  * `images.agent.*` para configurar la imagen que agrupa el agente de infraestructura e integración en el host.
  * `images.integration.*` para configurar la imagen encargada de extraer datos de k8s.
