---
title: No ver datos del plano de control
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data control plane data for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## Problemas

Completó el [procedimiento de instalación de Kubernetes](/install/kubernetes/) y está viendo datos de Kubernetes en su cuenta de New Relic, pero no hay datos de ninguno de los componentes del plano de control.

## Solución

<CollapserGroup>
  <Collapser id="control-plane-sample-missing" title="Falta una muestra del plano de control">
    En caso de que falten los datos del plano de control, por ejemplo `K8sSchedulerSample`, lo primero que hay que hacer es comprobar el registro detallado de los componentes del plano de control. Lea cómo [habilitar el logging detallado](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging).

    * Una posibilidad es que el autodescubrimiento intente encontrar el pod del plano de control en el clúster usando las etiquetas más comunes; si no se encuentra ningún pod para un solo componente, no falla para evitar perder más datos. Verá un registro similar al siguiente:

      ```bash
      time="2022-06-21T12:21:25Z" level=debug msg="Autodiscovering pods for \"scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"tier=control-plane,component=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"tier=control-plane,component=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"k8s-app=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"k8s-app=kube-scheduler\""
      time="2022-06-21T12:21:25Z" level=debug msg="0 pods found with labels \"app=openshift-kube-scheduler,scheduler=true\""
      time="2022-06-21T12:21:25Z" level=debug msg="No pod found for \"scheduler\" with labels \"app=openshift-kube-scheduler,scheduler=true\""
      time="2022-06-21T12:21:25Z" level=debug msg="No \"scheduler\" pod has been discovered"
      ```

      En este caso, puede cambiar el comportamiento de descubrimiento con la configuración `controlplane.config.[component].autodiscover[].selector` de los [valores del gráfico de Helm](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml). Obtenga más información sobre el [componente del plano de control](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#nrk8s-controlplane).

    * También es posible que se encuentre el componente del plano de control, pero que la autenticación con extremo falle. Verá un log similar al siguiente:

      ```bash
      time="2022-06-21T15:54:52Z" level=debug msg="Endpoint \"https://localhost:10257\" probe failed, skipping: http request failed with status: 403 Forbidden"
      ```

      En este caso, puede cambiar el comportamiento de autenticación para cada extremo con la configuración `controlplane.config.[component].autodiscover[].endpoints[].auth` de [los valores del gráfico de](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) timón.

    * También es posible que el componente del plano de control de la integración no se esté ejecutando en todos los nodos del plano de control. Puedes comprobarlo ejecutando este comando:

      ```bash
      kubectl get pod -n <NEWRELIC_NAMESPACE> -l app.kubernetes.io/component=controlplane -o wide
      ```

      Si hay algún pod del plano de control que desea monitor ejecutar en un nodo sin una instancia de monitoreo New Relic , puede cambiar según sea necesario `controlplane.affinity`, `controlplane.nodeSelector` y `controlplane.tolerations` de los [valores del gráfico de Helm](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml).
  </Collapser>

  <Collapser
    id="control-plane-CrashLoopBackOff"
    title={<>El componente del plano de control está en <InlineCode>
      CrashLoopBackOff
    </InlineCode></>
    }
  >
    En caso de que los componentes del plano de control no descubran automáticamente o raspen con éxito cualquier pod del plano de control al que ingresen en `CrashLoopBackOff`.

    Puede cambiar el comportamiento del descubrimiento automático y los métodos de autenticación para satisfacer sus necesidades.

    Por otro lado, si no estás interesado en esos datos, puedes simplemente deshabilitar el componente del plano de control configurando `controlplane.enabled=false` en los [valores del gráfico de Helm](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml).
  </Collapser>
</CollapserGroup>