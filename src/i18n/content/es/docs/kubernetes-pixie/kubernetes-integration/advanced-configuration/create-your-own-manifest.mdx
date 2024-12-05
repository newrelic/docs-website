---
title: Crea tu propio archivo de manifiesto
tags:
  - Integrations
  - Kubernetes integration
  - Installation
metaDescription: How to create a manifest using Helm as a templating system
freshnessValidatedDate: never
translationType: machine
---

Puede crear su propio archivo de manifiesto usando Helm para cubrir todas sus necesidades, como configurar el proxy que desea usar. Para comprender todo el poder de Helm, le recomendamos leer [cómo instalar la integración de Kubernetes usando Helm](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm) antes de leer este documento.

## Compatibilidad y requisitos [#compatibility]

* Asegúrese de que [Helm](https://github.com/helm/helm#install) coincida con su versión de integración de Kubernetes. Por ejemplo, la versión 3 de la integración de Kubernetes requiere la versión 3 de Helm.

* Una cuenta New Relic . ¿No tienes uno? [¡Registrate gratis!](https://newrelic.com/signup) No se requiere tarjeta de crédito.

* Tu New Relic

  <InlinePopover type="licenseKey"/>

  .

* El nombre de su clúster de Kubernetes.

  * Si necesita un nombre para mostrar para su clúster, puede utilizar el resultado del siguiente comando:

    ```shell
    kubectl config current-context
    ```

## Plantillas de integración de Kubernetes con Helm [#install-k8-helm]

<Callout variant="important">
  La instalación y actualización mediante un manifiesto no es compatible y es propensa a errores. Esté completamente seguro de que este es el enfoque que necesita para su entorno.
</Callout>

1. Agregue el repositorio de gráficos New Relic Helm ejecutando:

   ```shell
   helm repo add newrelic https://helm-charts.newrelic.com
   ```

2. Cree un archivo llamado `values-newrelic.yaml`, que se utilizará para definir su configuración, que sigue esta estructura:

   <Callout variant="important">
     Consulte nuestra documentación de instalación de Helm para saber [cómo configurarlo](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#configure).
   </Callout>

   ```yaml
   global:
     licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
     cluster: _K8S_CLUSTER_NAME_

   newrelic-prometheus-agent:
     # Automatically scrape prometheus metrics for annotated services in the cluster
     enabled: true
   nri-metadata-injection:
     # Deploy our webhook to link APM and Kubernetes entities
     enabled: true
   nri-kube-events:
     # Report Kubernetes events
     enabled: true
   newrelic-logging:
     # Report logs for containers running in the cluster
     enabled: true
   kube-state-metrics:
     # Deploy kube-state-metrics in the cluster.
     # Set this to true unless it is already deployed.
     enabled: true
   ```

3. Asegúrese de que todo esté configurado correctamente en el gráfico ejecutando el siguiente comando. Tenga en cuenta que estamos especificando `--dry-run` y `--debug`, por lo que no se instala nada en este paso:

   ```shell
   helm upgrade --install newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml \
   --dry-run \
   --debug
   ```

   Tenga en cuenta y modifique los siguientes valores:

   Tenga en cuenta y ajuste las siguientes banderas:

   * `global.licenseKey=YOUR_NEW_RELIC_LICENSE_KEY`: Debe configurarse en un <InlinePopover type="licenseKey"/>válido para su cuenta.
   * `global.cluster=K8S_CLUSTER_NAME`: Se emplea para identificar el clúster en la New Relic UI, por lo que debe ser un valor descriptivo no empleado por ningún otro clúster de Kubernetes configurado en su New Relic cuenta .
   * `kube-state-metrics.enabled=true`: Establezca esto en `true` para instalar automáticamente Kube State métrica (KSM). Esto es necesario para que se ejecute nuestra integración. Puede establecer esto en falso si KSM ya está presente en su clúster, incluso si está en un namespace diferente.
   * `newrelic-prometheus-agent.enabled=true`: Configure esto para desplegar nuestro agente Prometheus, que recopila automáticamente datos del extremo Prometheus presente en el clúster.
   * `nri-metadata-injection.enabled=true`: Configure esto para instalar nuestro webhook mínimo, que agrega variables de entorno que, a su vez, permiten [vincular la aplicación instrumentada con New Relic APM a Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/link-your-applications/link-your-applications-kubernetes).

   <Callout variant="tip">
     Nuestros gráficos de Kubernetes tienen un conjunto completo de indicadores y configuraciones que puede editar para satisfacer mejor sus necesidades específicas. Consulta cómo [configurar la integración](#configure) a continuación para ver qué puedes modificar.
   </Callout>

4. Cree una plantilla para la integración de Kubernetes ejecutando:

   ```shell
   helm template newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml > templated-nri-bundle.yaml
   ```

5. Aplicar el manifiesto generado ejecutando:

   ```shell
   kubectl -n newrelic apply -f templated-nri-bundle.yaml
   ```

## Actualizar usando Manifiesto [#upgrade]

<Callout variant="important">
  La instalación y actualización mediante un manifiesto no es compatible y es propensa a errores. Esté completamente seguro de que este es el enfoque que necesita para su entorno.
</Callout>

1. Actualice el repositorio de gráficos local ejecutando:

   ```shell
   helm repo update
   ```

2. Plantilla el archivo ejecutando:

   ```shell
   helm template newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml > new-templated-nri-bundle.yaml
   ```

3. Desinstale la versión anterior de la integración de Kubernetes, que utiliza el manifiesto anterior, y aplique la nueva ejecutando:

   ```shell
   kubectl -n newrelic delete -f templated-nri-bundle.yaml
   kubectl -n newrelic apply -f new-templated-nri-bundle.yaml
   ```

## Desinstalar la integración de Kubernetes [#uninstall]

Para desinstalar la integración de Kubernetes usando Helm, ejecute:

```shell
kubectl -n newrelic delete -f templated-nri-bundle.yaml
```
