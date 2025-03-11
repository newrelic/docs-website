---
title: Instale el complemento EKS del mercado de AWS
tags:
  - Infrastructure
  - Install the EKS Add-on
  - NewRelic Operator
  - AWS EKS Add-on
metaDescription: New Relic's EKS add-on for EKS monitoring.
freshnessValidatedDate: never
translationType: machine
---

Amazon Elastic Kubernetes Service (Amazon EKS) es un servicio de Kubernetes administrado que le facilita la ejecución de Kubernetes tanto en AWS como en las instalaciones. Kubernetes es un sistema de código abierto para automatizar el despliegue, escalado y gestión de aplicaciones en contenedores. Este documento le guía por los pasos necesarios para utilizar el complemento EKS de AWS Marketplace.

## Requisitos previos [#prereq]

* Un clúster [de Amazon Elastic Kubernetes Service (EKS)](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html) . Para obtener más información, consulte nuestra [integración de Kubernetes: compatibilidad y requisitos](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-integration-compatibility-requirements/) y [la guía del usuario de Amazon](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html).
* Una cuenta New Relic válida. Puede suscribirse a New Relic de forma gratuita [desde el mercado de AWS](https://aws.amazon.com/marketplace/pp/prodview-ov56chowabeb4?sr=0-3&ref_=beagle&applicationId=AWS-Marketplace-Console).
* Suscríbase a la [integración de New Relic Kubernetes](https://aws.amazon.com/marketplace/pp/prodview-gcywa6keq2ajy?applicationId=AWS-Marketplace-Console&ref_=beagle&sr=0-5), también disponible de forma gratuita.
* Inicie sesión en [New Relic](https://one.newrelic.com/) y genere una [clave de licencia](https://one.newrelic.com/api-keys).

<Callout variant="important">
  Actualmente, este complemento solo es compatible con x86 tipo de instancia, y pronto se admitirá ARM64.
</Callout>

## Aprovisione el complemento EKS a través de la consola de AWS [#provision-k8s]

1. Navegue hasta <DNT>**EKS Cluster > Add-Ons > Get More add-ons**</DNT>.

   <img
     title="eksAddOnTab.png"
     alt="EKS Add On Tab."
     src="/images/EKS-Add-On-Screenshot-1.webp"
   />

2. En el complemento AWS Marketplace, busque, explore o navegue hasta la integración New Relic Kubernetes , seleccione la casilla de verificación y haga clic en <DNT>**Next**</DNT>.

   <img
     title="eksAddOnMarketplace.png"
     alt="EKS Add On Marketplace."
     src="/images/EKS-Add-On-Screenshot-2.webp"
   />

3. Seleccione la última versión predeterminada o elija una versión alternativa, si es necesario, y haga clic en <DNT>**Next**</DNT>.

   <img
     title="eksAddOnMarketplaceConfig.png"
     alt="EKS Add On Marketplace Config"
     src="/images/EKS-Add-On-Screenshot-3.webp"
   />

4. Haga clic en <DNT>**Create**</DNT>.

En unos minutos, el operador Kubernetes de New Relic debería activarse y comenzar a ejecutarse. Consulte los pasos de configuración a continuación para recopilar y enviar datos de observabilidad desde su clúster EKS a New Relic.

## Aprovisione el complemento EKS a través de la CLI de AWS [#provision-cli]

Ejecute el siguiente comando para instalar el complemento NewRelic, con `--cluster-name` como nombre de su clúster EKS.

```bash
   aws eks create-addon --cluster-name REPLACE_ME --addon-name new-relic_kubernetes-operator
```

Recibirá un resultado similar al siguiente:

```bash
    {
        "addon": {
            "addonName": "new-relic_kubernetes-operator",
            "clusterName": "newrelic-test",
            "status": "CREATING",
            "addonVersion": "v0.1.8-eksbuild.1",
            "health": {
                "issues": []
            },
            "addonArn": "arn:aws:eks:ap-northeast-2:###############:addon/kubecon2023-127/new-relic_kubernetes-operator/6cc5e7b7-d8f1-5fa0-c668-2bc9727e16b3",
            "createdAt": "2023-07-27T11:47:57.023000-07:00",
            "modifiedAt": "2023-07-27T11:47:57.044000-07:00",
            "tags": {}
        }
    }
```

## Configurar el operador de Kubernetes [#configure-k8s]

Puede confirmar que el operador de Kubernetes funciona ejecutando `kubectl get all -n newrelic` en la CLI. Para comenzar a recolectar métrica y enviar a New Relic, use la siguiente definición de recurso personalizado (CRD) de ejemplo:

1. Cree un archivo `crd.yml` utilizando las definiciones siguientes, con `spec.global.cluster` como nombre de su clúster EKS y `spec.global.licensekey` como su clave de licencia de New Relic.

   ```yml
   apiVersion: newrelic.com/v1alpha1
   kind: NRIBundle
   metadata:
     name: nribundle-sample
   spec:
     global:
       cluster: "<cluster>"
       licenseKey: "<licenseKey>"
       lowDataMode: true
     newrelic-infrastructure:
       enabled: true
       privileged: true
     kube-state-metrics:
       image:
         tag: "v2.10.0"
       enabled: true
     kubeEvents:
       enabled: true
     newrelic-prometheus-agent:
       enabled: true
       lowDataMode: true
       config:
         kubernetes:
           integrations_filter:
             enabled: false
   ```

2. Una vez que haya actualizado la configuración deseada, actualice la solución con el siguiente comando:

   ```
   kubectl apply -f crd.yml -n newrelic
   ```
