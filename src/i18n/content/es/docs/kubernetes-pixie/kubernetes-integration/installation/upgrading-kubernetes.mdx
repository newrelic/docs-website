---
title: Actualizar la integración de Kubernetes
tags:
  - Integrations
  - Kubernetes integration
  - Upgrade
metaDescription: Learn how to upgrade the Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

Después de que se haya lanzado una nueva versión de Kubernetes, puede actualizar la versión de Kubernetes que se ejecuta en los nodos del plano de control y los nodos trabajadores de un clúster.

## Actualice nuestra integración de Kubernetes [#update]

Nuestra integración Kubernetes está en desarrollo activo y [publicamos actualizaciones](/docs/release-notes/infrastructure-release-notes/kubernetes-integration-release-notes/) periódicamente, que incluyen correcciones de errores, nuevas características y compatibilidad con versiones más recientes Kubernetes y proveedores de nube. Le recomendamos encarecidamente que actualice periódicamente su integración de Kubernetes para obtener la mejor experiencia.

### Actualice usando la instalación guiada y Helm [#upgrade-helm]

Para actualizar una instalación que se implementó usando el comando Helm proporcionado por la [instalación guiada](https://one.newrelic.com/nr1-core?state=51fbbd48-c8ca-ead9-bb90-af96e18d82a7), siga el proceso y ejecute el comando Helm nuevamente. Esto extraerá la nueva versión del gráfico y su dependencia y la actualizará a la última versión.

Si desea actualizar manualmente su integración de Kubernetes instalada a través de Helm:

1. Actualice el repositorio de gráficos local:

   ```bash
   helm repo update
   ```

2. Actualice la versión ejecutando el comando `helm upgrade --install ...` apropiado de la sección anterior:

   ```bash
   helm upgrade --install newrelic-bundle newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml
   ```

### Actualice mediante la instalación guiada y los manifiestos simples [#update-manifests]

<Callout variant="tip">
  Le animamos a implementar nuestra integración utilizando Helm, ya que proporciona una ruta de actualización más limpia en comparación con el uso de manifiestos directamente.
</Callout>

Si usó manifiestos personalizados en lugar de Helm:

1. Primero, elimine la instalación anterior:

   ```bash
   kubectl delete -f previous-manifest-file.yml
   ```

2. Continúe nuevamente con la instalación guiada. Esto generará un conjunto actualizado de manifiestos que puedes desplegar usando:

   ```bash
   kubectl apply -f manifest-file.yml
   ```

No recomendamos aplicar una nueva versión del archivo de manifiesto sin eliminar primero la anterior, ya que podría dejar algunos componentes sobrantes en su clúster.

Si necesita una forma avanzada de crear su manifiesto, cree una plantilla con Helm.

## Actualice la versión `nri-bundle` [#update-nri-bundle]

A continuación se detallan algunos problemas que puede encontrar al actualizar su [`nri-bundle`](https://github.com/newrelic/helm-charts/blob/master/charts/nri-bundle/README.md), junto con cómo resolverlos.

### Selectores de etiquetas modificados [#changed-label-selectors]

Al actualizar a la nueva versión de `kube-state-metrics` (o KSM), es posible que vea un error como este:

```
v1.LabelSelector{MatchLabels:map[string]string{"app.kubernetes.io/instance":"newrelic", "app.kubernetes.io/name":"kube-state-metrics"}, MatchExpressions:[]v1.LabelSelectorRequirement(nil)}: field is immutable
```

El selector de etiquetas en la nueva versión del gráfico cambió, pero el nombre del despliegue no. Por lo tanto, para actualizar, debe eliminar `kube-state-metrics` desplegable antes de ejecutar `helm upgrade` o desinstalar completamente y luego reinstalar la integración.

### Valores obsoletos [#deprecated-values]

Si encuentra el siguiente log:

```
warning: skipped value for nri-bundle.kube-state-metrics.collectors: Not a table.
Error: UPGRADE FAILED: template: nri-bundle/charts/kube-state-metrics/templates/role.yaml:18:6: executing "nri-bundle/charts/kube-state-metrics/templates/role.yaml" at <has "certificatesigningrequests" $.Values.collectors>: error calling has: Cannot find has on type map
```

Esto se debe a que los valores del gráfico KSM cambiaron y el mapa del recolector se cambió a una lista de recolectores. La lista de recolectores ya no es necesaria y se ha eliminado de los nuevos valores.

Si todavía los tiene en sus valores estáticos de Helm, o si está usando el indicador `--reuse-values`, primero debe eliminar los siguientes valores:

```yml
kube-state-metrics:
  collectors:
    certificatesigningrequests: true
    ingresses: false
```

### Recursos de Kubernetes no compatibles [#unsupported-k8s-resources]

Al actualizar `nri-bundle`, es posible que vea un error acerca de que un determinado recurso no es compatible con una API de Kubernetes específica. Por ejemplo,

```
Error: UPGRADE FAILED: unable to build kubernetes objects from current release manifest: resource mapping not found for name: "newrelic-bundle-nri-metadata-injection" namespace: "" from "": no matches for kind "MutatingWebhookConfiguration" in version "admissionregistration.k8s.io/v1beta1"
```

Eso significa que el recurso de Kubernetes correspondiente no es compatible con la API de Kubernetes correspondiente. Puede seguir las instrucciones en el [repositorio del complemento Helm mapkubeapis](https://github.com/helm/helm-mapkubeapis) para resolver el error.
