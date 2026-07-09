---
title: Ne pas voir les données control plane
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data control plane data for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## Problèmes

Vous avez terminé la [procédure d’installation Kubernetes ](/install/kubernetes/)et vous voyez les données Kubernetes dans votre compte New Relic, mais il n’y a aucune donnée provenant d’aucun des composants control plane .

## Solution

<CollapserGroup>
  <Collapser id="control-plane-sample-missing" title="Il manque un échantillon control plane">
    Si les données control plane sont manquantes, par exemple `K8sSchedulerSample`, la première chose à faire est de vérifier le log détaillé des composants du control plane . Découvrez comment [activer le logging détaillé](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging).

    * Une possibilité est que la découverte automatique essaie de trouver le pod control plane dans le cluster en utilisant les étiquettes les plus courantes ; si aucun pod n&apos;est trouvé pour un seul composant, elle ne manque pas d&apos;éviter de manquer davantage de données. Vous verrez un log similaire au suivant :

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

      Dans ce cas, vous pouvez modifier le comportement de découverte avec la configuration `controlplane.config.[component].autodiscover[].selector` des [valeurs du graphique Helm](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml). En savoir plus sur le [composantcontrol plane ](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#nrk8s-controlplane).

    * Il est également possible que le composant du plan de contrôle soit trouvé, mais que l&apos;authentification avec le point de terminaison échoue. Vous verrez un log similaire au suivant :

      ```bash
      time="2022-06-21T15:54:52Z" level=debug msg="Endpoint \"https://localhost:10257\" probe failed, skipping: http request failed with status: 403 Forbidden"
      ```

      Dans ce cas, vous pouvez modifier le comportement d&apos;authentification pour chaque point de terminaison avec la configuration `controlplane.config.[component].autodiscover[].endpoints[].auth` [des valeurs du graphique](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) Helm.

    * Il est également possible que le composant du plan de contrôle de l&apos;intégration ne s&apos;exécute pas sur tous les nœuds control plane . Vous pouvez vérifier cela en exécutant cette commande :

      ```bash
      kubectl get pod -n <NEWRELIC_NAMESPACE> -l app.kubernetes.io/component=controlplane -o wide
      ```

      control plane pod Si monitoring instance vous souhaitez monitorer un `controlplane.affinity` `controlplane.nodeSelector` `controlplane.tolerations` [Helm exécuté sur un nœud sans New](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) Relic, vous pouvez modifier selon vos besoins, et des valeurs du graphique .
  </Collapser>

  <Collapser
    id="control-plane-CrashLoopBackOff"
    title={<>le composant du plan de contrôle est dans <InlineCode>
      CrashLoopBackOff
    </InlineCode></>
    }
  >
    Dans le cas où les control plane composants ne détectent pas automatiquement ou ne récupèrent pas avec succès control plane pod un dans lequel ils entrent `CrashLoopBackOff` dans.

    Vous pouvez modifier le comportement de la découverte automatique et les méthodes d’authentification pour répondre à vos besoins.

    D&apos;autre part, si vous n&apos;êtes pas intéressé par ces données, vous pouvez simplement désactiver le composant control plane en définissant `controlplane.enabled=false` dans les [valeurs du graphiqueHelm ](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml).
  </Collapser>
</CollapserGroup>