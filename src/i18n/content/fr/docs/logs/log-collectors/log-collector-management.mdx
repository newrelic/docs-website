---
title: Gérez le cycle de vie de votre collecteur log
metaDescription: Learn how to manage the life cycle of log collectors in New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="Aperçu">
  Nous travaillons toujours sur cette fonctionnalité, mais nous aimerions que vous l&apos;essayiez !

  Cette fonctionnalité est actuellement fournie dans le cadre d&apos;un programme d&apos;aperçu conformément à nos [politiques de pré-sortie](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

## Présentation

La log solution de gestion du cycle de vie du collecteur de New Relic permet de gérer votre log de collecte infrastructure dans divers environnements. Avec cette solution, vous pouvez configurer et monitorer le cycle de vie de votre collecteur log .

Vous avez désormais la possibilité de gérer l&apos;intégralité du cycle de vie de votre collecteur log . Cela comprend monitoring de leur santé et la configuration ou le déploiement des modifications selon les besoins.

Cette solution est utile pour les DevOps équipes , les administrateurs système et les responsables des opérations informatiques qui ont besoin d&apos;une visibilité sur leur log de collecte infrastructure de . Vous avez accès à des outils qui améliorent vos capacités d’observabilité et maintiennent les performances dans les environnements conteneurisés et sur site.

### Des solutions pour des besoins divers

* **Monitoring de l&apos;état du collecteur de logs :** l&amp;apos;UI de l&amp;apos;entité Fluent Bit fournit des fonctionnalités de monitoring pour les collecteurs de logs.

* **Dépannage :** Vous pouvez dépanner et résoudre configuration les problèmes de votre log collecteur à l&amp;apos;aide de l&amp;apos;UI d&amp;apos;entité de Fluent Bit, qui permet d&amp;apos;identifier et de résoudre les problèmes.

  <img title="Fluent Bit entity dashboard" alt="Fluent Bit entity dashboard" src="/images/fluent-bit-dashboard.webp" />

/\* The following section will be brough back in when NR Control ships \*/ /\* ## Solutions for diverse needs - \*\*Log collector health monitoring:\*\* The Fluent Bit entity UI provides monitoring capabilities for log collectors, available with or without New Relic Control. - \*\*Troubleshooting:\*\* You can troubleshoot and fix configuration issues with your log collectors using the Fluent Bit entity UI, which helps identify and resolve problems. - \*\*Configuration and remote deployment:\*\* With New Relic Control, you can centrally manage Fluent Bit configurations, update them, and deploy changes remotely. \*/

## Gérez votre collecteur Fluent Bit pour le cluster Kubernetes

La solution de gestion du cycle de vie du collecteur log fournit actuellement un support pour les environnements Kubernetes . Il vous permet de :

* Collectez et traitez les logs de toutes vos applications conteneurisées.
* Ajoutez les métadonnées liées à Kubernetesà votre log.
* Utilisez la conception légère de Fluent Bit pour traiter de grands volumes de données sans consommer beaucoup de ressources.

### Prérequis

Avant d&apos;installer et de configurer Fluent Bit pour le logging avec New Relic, assurez-vous de disposer des conditions préalables suivantes :

* Accès à un cluster Kubernetes
* Les outils et autorisations nécessaires à l&apos;installation et à la configuration
* Paramètres réseau et politiques de sécurité pour permettre la communication avec le point de terminaison New Relic
* Un compte New Relic

/\* &lt;Callout variant=&quot;important&quot;&gt; You can also manage Fluent Bit via New Relic Control. For information, see \[Fleet Control]\(/docs/new-relic-control/fleet-control/overview). &lt;/Callout&gt; \*/

Pour plus d&apos;informations sur ces exigences, reportez-vous à [Transférer vos logs vers New Relic](/docs/logs/forward-logs/enable-log-management-new-relic).<br />

/\* Pour plus d&apos;informations sur la configuration de New Relic Control, consultez \[Prise en main de New Relic Control]\(/docs/new-relic-control/getting-started). \*/

### Installation

Pour installer l&apos;agent Fluent Bit dans le cluster Kubernetes:

* Installez l&apos;[intégration New Relic Kubernetes](/install/kubernetes/). Cette intégration inclut le plugin Kubernetes pour le log.
* Utilisez les options de configuration disponibles dans le [référentiel newrelic-logging](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#configuration) pendant l&amp;apos;[installation guidée](/install/kubernetes/).

Pour plus de détails, reportez-vous à [Activer Kubernetes pour la gestion des log](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/#enable-process).

/\* ## Install Fluent Bit with Fleet Control If you&apos;re starting with Fleet Control, you&apos;ll set up your agent control configuration first. This process includes installing the Fluent Bit agent and other essential components. To use Fluent Bit with Agent Control, enable log forwarding as part of the Agent Control installation, as shown in the sample configuration: &lt;CollapserGroup&gt; &lt;Collapser id=&quot;fluent-bit-config&quot; title=&quot;Sample config&quot; &gt; \`\`\`yaml global: cluster: &quot;YOUR\_CLUSTER\_NAME&quot; licenseKey: &quot;YOUR\_LICENSE\_KEY&quot; userKey: &quot;YOUR\_USER\_KEY&quot; # Values related to the agent control&apos;s Helm chart release. # \`https\://github.com/newrelic/helm-charts/blob/master/charts/agent-control/values.yaml\` agent-control-deployment: config: fleet\_control: # Optional: Specify a fleet\_id (entity guid) to automatically connect to an existing fleet. fleet\_id: &quot;&quot; auth: # New Relic organization ID where agent will connect to. organizationId: &quot;YOUR\_ORGANIZATION\_ID&quot; # List of managed agents that will be deployed. The key represents the name of the agent and the value holds the configuration. subAgents: infrastructure: type: newrelic/com.newrelic.infrastructure:0.1.0 content: # Ref: \`https\://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle\` # Recommended: check and define an explicit chart version (latest stable) chart\_version: &quot;\*&quot; # chart\_values: # newrelic-infrastructure: # enableProcessMetrics: true logs: type: newrelic/io.fluentbit:0.1.0 content: # Ref: \`https\://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging\` # Recommended: check and define an explicit chart version (latest stable) chart\_version: &quot;\*&quot; chart\_values: newrelic-logging: sendMetrics: true agent-operator: type: com.newrelic.k8s\_agent\_operator:0.1.0 content: chart\_version: &quot;\*&quot; \`\`\` &lt;/Collapser&gt; &lt;/CollapserGroup&gt; Remember to uncomment the necessary configurations and replace placeholders such as \`YOUR\_CLUSTER\_NAME\` and \`YOUR\_LICENSE\_KEY\` with your actual values. &lt;Callout variant=&quot;important&quot;&gt; Specify an explicit chart version to ensure consistency and reliability across deployments. &lt;/Callout&gt; \*/ /\* ## Manage and deploy configuration via Fleet Control To add a new or edit an existing Fluent Bit configuration, use \[Fleet Control]\(/docs/new-relic-control/fleet-control/overview). The high-level tasks to manage and deploy a configuration are: ### Create a configuration To create a Fluent Bit configuration, follow these steps: 1. In New Relic, go to All Capabilities, search for New Relic Control, and then pin it to the side. 2. In New Relic Control, open Configurations. 3. Click \*\*Create configuration\*\*. 4. To create a configuration from scratch, click \*\*New\*\* in the drop-down menu. If you have an existing Fluent Bit configuration and want to leverage it, clone it by clicking \*\*Clone\*\*. 5. In the Create configuration dialog box, ensure \*\*Kubernetes\*\* is selected as the environment, select \*\*Fluent Bit\*\* as the agent type, and enter a name for the configuration. Then, click \*\*Continue\*\*. 6. In the Configuration column, copy the configuration template and then customize it per your requirements. For details, see \[supported parameters]\(https\://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#supported-configuration-parameters). 7. Save your changes. Your configuration will be added to the list of configurations on the Configuration page. 8. To edit your configuration, select the three dots (…) next to it, click \*\*Edit configuration\*\*, and make your changes. Then, click \*\*Save\*\*. ### Create a deployment 1. In New Relic Control, open \*\*Fleets\*\*. 2. Select the fleet you want to create a Fluent Bit configuration for. 3. Click \*\*Create a deployment\*\*. 4. On the New deployment page, enter a deployment name and description, and then click \*\*Add a configuration\*\*. 5. Select \*\*Fluent Bit\*\* as the agent type, select the configuration you want to deploy, and then click \*\*Next\*\*. 6. Select the configuration version. &lt;Callout variant=&quot;important&quot;&gt; A configuration can have multiple versions. Choose the version you want to deploy. For a newly created configuration, you’ll have only one version. &lt;/Callout&gt; 7. Click \*\*Add to deployment\*\*. &lt;Callout variant=&quot;important&quot;&gt; Ensure the fleet has at least one managed entity. Or, add one. &lt;/Callout&gt; 8. Click \*\*Start deployment\*\*. ### View fleet In Fleets, select the specific fleet you want to work with. This opens the fleet detail page. The Summary tab shows the entities that are part of your fleet. To view agent or deployment details, use the Agents or the Deployments tab. \*/

### Monitorer la santé et les performances de votre collecteur log

monitoring efficace des performances de l&apos;agent Fluent Bit est essentielle pour la gestion des loget l&apos;optimisation au sein de vos environnements Kubernetes . En suivant les mesures clés, vous pouvez identifier les problèmes potentiels et faciliter le dépannage.

#### Indicateurs de performance clés à suivre

* **débit logarithmique :** mesure l&amp;apos;efficacité du flux log et met en évidence les perturbations. Il comprend une évaluation globale du débit, qui est ensuite décomposée par des plugins d&amp;apos;entrée et de sortie pour afficher le flux d&amp;apos;enregistrements et d&amp;apos;octets traités.
* **Utilisation de la mémoire tampon :** aide à identifier les contraintes de ressources affectant le traitement log . Il comprend l&amp;apos;utilisation de la mémoire tampon, l&amp;apos;instance de débordements, la longueur de la file d&amp;apos;attente et l&amp;apos;utilisation globale de la mémoire du processus et du conteneur.
* **événement de conteneur et backoffs de boucle de crash :** alertes sur des conditions anormales ou des échecs dans le pod log , y compris les erreurs, les enregistrements abandonnés et les nouvelles tentatives. Ces informations détaillées aident à identifier et à résoudre les problèmes susceptibles de perturber le traitement log .

Vous pouvez monitorer la santé et les performances de votre Fluent Bit agent sur le Fluent Bit de l&apos;entité dashboard. Voici comment vous pouvez y accéder :

#### Via l&apos;intégration et les agents

1. Ouvrez l’onglet **Installed** . Vous verrez la liste des agents et de l&amp;apos;intégration actuellement installés.
2. Utilisez le champ d&apos;entité de recherche ou le filtre Type pour affiner la liste aux agents Fluent Bit .
3. Sélectionnez l&apos;agent que vous souhaitez vérifier.

#### Via toute entité

1. Recherchez l’agent que vous souhaitez monitorer sous le groupe Fluent Bit - Kubernetes .
2. Sélectionnez l&apos;agent.

/\* ### Via Fleet 1. In New Relic Control, open \*\*Fleets\*\*. 2. Identify and select the fleet that has the Fluent Bit instrumentation. 3. On the Agents tab, select the Fluent Bit agent. \*/ /\* ## Example Use case: Log flow efficiency Imagine that the logs in your Kubernetes cluster are not arriving at New Relic at the usual rate. Your typical log flow might be around 150,000 logs per minute, but current observations suggest a noticeable drop. Here’s how you can address this situation, leveraging New Relic Control and Fluent Bit monitoring tools to diagnose and resolve the issue. ### Step 1: Monitor log throughput Begin by checking the rate at which logs are forwarded. Discrepancies can indicate disruptions in the log forwarding process. ### Step 2: Analyze container metrics and events Access the Kubernetes overview to identify any abnormal events or restarts in the logging pods. Frequent restarts or warning events, such as crash loop backoffs, can disrupt your log pipeline and indicate underlying issues. ### Step 3: Check memory usage Examine the memory consumption of your Fluent Bit agents. High or erratic memory usage can signal configuration errors or resource limitations that need addressing. ### Step 4: Utilize Fleet Control for troubleshooting Use Fleet Control to review recent configuration changes. Identifying and rectifying any erroneous settings, such as incorrect memory limits, can resolve bottlenecks and improve log throughput. ### Step 5: Redeploy and verify After making necessary configuration adjustments in Fleet Control, initiate a new deployment to apply changes. Use the Fluent Bit entity view to monitor real-time metrics and observe the impact of the new configurations. Look for recovery in log throughput and stability in memory usage, indicating that the issues have been resolved. \*/

### Mettez à niveau votre agent Fluent Bit

Mettez à niveau régulièrement votre agent Fluent Bit pour profiter des dernières fonctionnalités, des améliorations de performances et des correctifs de sécurité. Vous pouvez apprendre directement à partir de l&apos;UI de New Relic [lorsqu&apos;une version plus récente est disponible](/docs/release-notes/fluentbit-release-notes).

Avant la mise à niveau, assurez-vous que votre configuration actuelle est sauvegardée. Consultez toutes les notes de sortie ou la documentation pour comprendre les nouvelles fonctionnalités ou les modifications.

#### Étapes à suivre pour vérifier si vous êtes à jour

1. Dans votre compte New Relic, cliquez sur **Integrations &amp; Agents**, puis ouvrez l’onglet **Installed** .<br />Vous verrez la liste des agents et de l&amp;apos;intégration actuellement installés.
2. Utilisez le champ d&apos;entité de recherche ou le filtre Type pour affiner la liste aux agents Fluent Bit .
3. Identifiez l’agent qui nécessite une mise à niveau.
4. Cliquez sur **Update from vx.y.x to X.Y.Z**.
5. Dans le panneau latéral qui s’affiche, cliquez sur [Afficher les notes de sortie](/docs/release-notes/fluentbit-release-notes).
6. Sur la page des notes de sortie Fluent Bit , notez la dernière version du graphique Helm .

/\* 8. Back in New Relic, close the side panel and click the fleet that contains the agent. It opens the fleet summary in New Relic Control. 9. Select the Fluent Bit configuration. 10. Update the chart version in the configuration file per the chart version you noted earlier, and save your changes. 11. Deploy the configuration. \*/ /\* &lt;Callout variant=&quot;important&quot;&gt; If an agent isn&apos;t part of a fleet yet, \[add the agent to a fleet first]\(), and then perform the steps to upgrade. &lt;/Callout&gt; \*/

Après la mise à niveau, vérifiez la collecte et le traitement log pour confirmer que l&apos;agent fonctionne comme prévu. Utilisez les outils monitoring de New Relic pour vérifier que tout fonctionne.