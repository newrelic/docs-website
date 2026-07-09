---
title: Observabilité des coûts Kubernetes avec Kubecost
tags:
  - Integrations
  - Kubernetes integration
  - Kubecost
  - Cost observability
  - Opencost
metaDescription: Understand the costs associated with your Kubernetes resources
freshnessValidatedDate: '2023-08-12T00:00:00.000Z'
translationType: machine
---

<Callout title="Aperçu">
  Nous travaillons toujours sur cette fonctionnalité, mais nous aimerions que vous l&apos;essayiez !

  Cette fonctionnalité est actuellement fournie dans le cadre d&apos;un programme d&apos;aperçu conformément à nos [politiques de pré-sortie](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

Avec New Relic et [Kubecost](https://kubecost.github.io/cost-analyzer/), vous pouvez comprendre les coûts associés à chacune de vos ressources Kubernetes.

Informations exploitables détaillées :

* Quels sont les principaux facteurs de coût de mon cluster (CPU, stockage, sortie, etc.) ?
* Quels nœuds sont à l’origine des récentes augmentations de coûts dans mon cluster ?
* Quelles sont les répartitions de coûts par espace de nommage pour ma charge de travail applicative ?
* Comment puis-je personnaliser l’estimation des coûts en fonction des prix/remises qui me sont proposés par mes fournisseurs de cloud ?

## Démarrer

Ce guide suppose que vous utiliserez le serveur Prometheus fourni avec Kubecost. Il est possible d&apos;utiliser le vôtre, même si cela sort du cadre de ce guide.

Vous devrez créer un point de terminaison `Remote Write` dans New Relic, ce que vous pouvez faire en cliquant sur le bouton vert « Ajouter des données Prometheus » sur cette page. Notez que le jeton porteur sera utilisé. [Écriture à distance Prometheus](/docs/infrastructure/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration/)

### Configurer l&apos;écriture à distance Prometheus

1. Sélectionnez un compte pour recevoir les données Prometheus.
2. Nommez la source de données, par exemple, `kubecost`.
3. Générez l’URL et le jeton porteur à utiliser dans la prochaine série d’étapes.

### Installez l&apos;agent Kubecost sur votre cluster

Ensuite, installez l’agent Kubecost via Helm.

1. Téléchargez le fichier YAML modèle pour l&apos;installation de l&apos;agent Kubecost. Enregistrez-le dans `kubecost-values.yaml`.

   ```yaml
   prometheus:
     serverFiles:
       prometheus.yml:
         remote_write:
         - url: https://metric-api.newrelic.com/prometheus/v1/write?prometheus_server=YOUR_CLUSTER_NAME
           bearer_token: YOUR_BEARER_TOKEN
     server:
       global:
         external_labels:
           cluster_id: YOUR_CLUSTER_NAME
   kubecostProductConfigs:
     clusterName: YOUR_CLUSTER_NAME
   ```

2. Ouvrez `kubecost-values.yaml` dans un éditeur de votre choix.

3. Copiez et collez le point de terminaison remote\_write de l’étape précédente, en remplaçant les lignes 5 et 6.

4. Remplacez les deux entrées `YOUR_CLUSTER_NAME` par le nom de votre cluster.

5. Exécutez la commande Helm ci-dessous pour ajouter l&apos;agent Kubecost à votre cluster et commencer à envoyer des données à New Relic :

   ```shell
   helm upgrade --install kubecost \
   --repo https://kubecost.github.io/cost-analyzer/ cost-analyzer \
   --namespace kubecost --create-namespace \
   --values kubecost-values.yaml
   ```

6. Attendez quelques minutes. Dans l’onglet précédent où vous avez configuré l’écriture à distance, cliquez sur le bouton <DNT>**See your data**</DNT> pour voir si les données ont été reçues.

7. Interrogez vos données :

   ```sql
   SELECT sum(`Total Cost($)`) AS 'Total Monthly Cost'
   FROM (FROM Metric SELECT (SELECT sum(`total_node_cost`)
   FROM (FROM Metric SELECT (average(kube_node_status_capacity_cpu_cores) * average(node_cpu_hourly_cost)
   * 730 + average(node_gpu_hourly_cost)
   * 730 + average(kube_node_status_capacity_memory_bytes) / 1024 / 1024 / 1024
   * average(node_ram_hourly_cost) * 730) AS 'total_node_cost' FACET node))
   + (SELECT (sum(acflb) / 1024 / 1024 / 1024 * 0.04) AS 'Container Cost($)'
   FROM (SELECT (average(container_fs_limit_bytes) * cardinality(container_fs_limit_bytes)) AS 'acflb'
   FROM Metric WHERE (NOT ((device = 'tmpfs')) AND (id = '/'))))
   + (SELECT sum(aphc * 730 * akpcb / 1024 / 1024 / 1024) AS 'Total Persistent Volume Cost($)'
   FROM (FROM Metric SELECT average(pv_hourly_cost)
   AS 'aphc', average(kube_persistentvolume_capacity_bytes) AS 'akpcb' FACET persistentvolume, instance))
   AS 'Total Cost($)')
   ```

Vous pouvez suivre la documentation Kubecost pour [exposer l&apos;interface utilisateur Kubecost avec une entrée](https://docs.kubecost.com/install-and-configure/install/ingress-examples).