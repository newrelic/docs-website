---
title: instalação no AWS EKS Fargate
tags:
  - Integrations
  - Kubernetes integration
  - Installation
  - EKS Fargate
metaDescription: 'New Relic''s Kubernetes integration: The installation of Kubernetes on AWS EKS Fargate'
freshnessValidatedDate: '2024-04-29T00:00:00.000Z'
translationType: machine
---

<Callout title="visualização">
  Ainda estamos trabalhando nesse recurso, mas adoraríamos que você experimentasse!

  Atualmente, esse recurso é fornecido como parte de um programa de visualização de acordo com nossas [políticas de pré-lançamento](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

New Relic suporta monitoramento de carga de trabalho Kubernetes no EKS Fargate injetando automaticamente um sidecar contendo o agente de infraestrutura e a `nri-kubernetes` integração em cada pod que precisa ser monitorado.

Caso o mesmo cluster do Kubernetes também contenha nós EC2, nossa solução também será implantada como `DaemonSet` em todos eles. Nenhum sidecar será injetado em pods programados em nós EC2 e nenhum `DaemonSet` será implantado em nós Fargate. Aqui está um exemplo de instância híbrida com nós Fargate e EC2:

<img
  title="Diagram showing an EKS cluster with Fargat and EC2 nodes"
  alt="Diagram showing an EKS cluster with Fargat and EC2 nodes"
  src="/images/kubernetes_diagram_fargate-overview.svg"
/>

<figcaption>
  Em um ambiente misto, a integração usa apenas um arquivo secundário para nós do Fargate.
</figcaption>

New Relic coleta todas as métricas suportadas para todos os objetos Kubernetes , independentemente de onde eles estão agendados, sejam nós Fargate ou EC2. Observe que, devido às limitações impostas pelo Fargate, a integração do New Relic está limitada à execução em modo [sem privilégios](/docs/integrations/kubernetes-integration/installation/kubernetes-integration-install-configure/#unprivileged) nos nós do Fargate. Isso significa que as métricas que geralmente são buscadas diretamente do host, como processos em execução, não estarão disponíveis para nós Fargate.

O agente em ambos os cenários extrairá dados da Kube State métrica (KSM), Kubelet e cAdvisor e enviará os dados no mesmo formato.

<Callout variant="important">
  Assim como para qualquer outro cluster do Kubernetes, nossa solução ainda requer que você implante e monitor uma instância Kube State métrica (KSM). Nosso Helm Chart e/ou instalador fará isso automaticamente por padrão, embora esse comportamento possa ser desabilitado se o seu cluster já tiver uma instância funcional do KSM. Esta instância KSM será monitorada como qualquer outra workload: injetando um arquivo secundário se for agendado em um nó Fargate ou com a instância local do `DaemonSet` se for agendado em um nó EC2.
</Callout>

Outros componentes da solução New Relic para Kubernetes, como `nri-prometheus`, `nri-metadata-injection` e `nri-kube-events`, não possuem particularidades e serão implantados pelo nosso Helm Chart normalmente como seriam em ambientes não Fargate.

Você pode escolher entre duas alternativas para instalar a observabilidade completa do New Relic em seu cluster EKS Fargate:

* [Injeção automática (recomendada)](#fargate-automatic)
* [Injeção manual](#fargate-manual)

Independentemente da abordagem escolhida, a experiência é exatamente a mesma depois de instalada. A única diferença é como o contêiner é injetado. Recomendamos configurar a injeção automática com o operador de monitoramento de infraestrutura New Relic porque isso eliminará a necessidade de editar manualmente cada implantação que você deseja monitor.

## Injeção automática (recomendada) [#fargate-automatic]

Por padrão, quando o suporte do Fargate estiver ativado, o New Relic implantará um operador no cluster (`newrelic-infra-operator`). Uma vez implantado, este operador injetará automaticamente o sidecar de monitoramento nos pods que estão programados nos nós Fargate, ao mesmo tempo que gerencia a criação e a atualização de `Secrets`, `ClusterRoleBindings`, e quaisquer outros recursos relacionados.

Este operador aceita uma variedade de opções avançadas de configuração que podem ser usadas para restringir ou ampliar o escopo da injeção, através do uso de seletores de rótulos para pod e namespace.

**O que a operadora faz**

Nos bastidores, o operador configura um `MutatingWebhookConfiguration`, que permite modificar os objetos pod que estão prestes a ser criados no cluster. Neste evento, e quando o pod que está sendo criado corresponder à configuração do usuário, o operador irá:

1. Adicione um contêiner secundário ao pod que contém a integração do New Relic Kubernetes.

2. Se um segredo não existir, crie um no mesmo namespace do pod que contém a New Relic

   <InlinePopover type="licenseKey"/>

   , que é necessário para que o arquivo secundário relate dados.

3. Adicione a conta de serviço do pod a um `ClusterRoleBinding` previamente criado pelo gráfico do operador, que concederá a este sidecar as permissões necessárias para atingir o endpoint métrico Kubernetes .

O `ClusterRoleBinding` concede as seguintes permissões ao pod que está sendo injetado:

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
  Para que o sidecar seja injetado e, portanto, obtenha a métrica do pod implantado antes da instalação do operador, é necessário realizar manualmente um rollout (restart) da implantação afetada. Desta forma, quando o pod for criado, o operador poderá injetar o sidecar de monitoramento. A New Relic optou por não fazer isso automaticamente para evitar interrupções inesperadas de serviço e picos de uso de recursos.
</Callout>

<Callout variant="important">
  Lembre-se de criar um perfil do Fargate com um seletor que declare o namespace `newrelic` (ou o namespace que você escolher para a instalação).
</Callout>

Aqui está o fluxo de trabalho de injeção:

<img
  title="Diagram showing the workflow of sidecar injection"
  alt="Diagram showing the workflow of sidecar injection"
  src="/images/kubernetes_diagram_fargate-workflow.svg"
/>

<Callout variant="tip">
  As etapas a seguir são para uma configuração padrão. Antes de concluí-los, sugerimos que você dê uma olhada na seção [de configuração](#config-auto) abaixo para ver se deseja modificar algum aspecto da injeção automática.
</Callout>

<Steps>
  <Step>
    ### Adicione o repositório New Relic Helm

    Caso ainda não tenha feito isso, execute este comando para adicionar o repositório do New Relic Helm:

    ```shell
    helm repo add newrelic https://helm-charts.newrelic.com
    ```
  </Step>

  <Step>
    ### Crie um arquivo chamado `values.yaml`

    Para instalar o operador responsável por injetar o sidecar da infraestrutura, crie um arquivo chamado `values.yaml`. Este arquivo definirá sua configuração:

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
    ### Implantar

    Depois de criar e ajustar o arquivo, você pode implantar a solução usando este comando do Helm:

    ```shell
    helm upgrade --install newrelic-bundle newrelic/nri-bundle -n newrelic --create-namespace -f values.yaml
    ```

    <Callout variant="important">
      Ao implantar a solução em um cluster híbrido (com nós EC2 e Fargate), certifique-se de que a solução não esteja selecionada por nenhum perfil Fargate; caso contrário, a instância `DaemonSet` ficará presa em um estado pendente. Para ambientes somente fargate, isso não é uma preocupação porque nenhuma instância `DaemonSet` é criada.
    </Callout>
  </Step>
</Steps>

### Injeção automática: Limitações conhecidas [#known-limitations]

Aqui estão alguns problemas que você deve estar ciente ao usar a injeção automática:

1. Atualmente não há nenhum controlador que monitore todo o cluster para garantir que os segredos que não são mais necessários sejam coletados como lixo. No entanto, todos os objetos compartilham o mesmo rótulo que pode ser usado para remover todos os recursos, se necessário. Injetamos o rótulo `newrelic/infra-operator-created: true`, que você pode usar para excluir recursos com um único comando.
2. No momento, não é possível usar o sidecar injetado para monitor serviços em execução no pod. O sidecar monitor apenas o próprio Kubernetes . Porém, o usuário avançado pode querer excluir esses pods da injeção automática e injetar manualmente uma versão customizada do sidecar com integração no host habilitada, configurando-os e montando sua configuração no local apropriado. Para obter ajuda, consulte este [tutorial](/docs/integrations/kubernetes-integration/link-apps-services/tutorial-monitor-redis-running-kubernetes/).

### Injeção automática: configuração [#automatic-configuration]

Você pode configurar diferentes aspectos da injeção automática. Por padrão, o operador injetará o sidecar de monitoramento em todos os pods implantados em nós Fargate que não fazem parte de um `Job` ou de um `BatchJob`.

Este comportamento pode ser alterado através de opções de configuração. Por exemplo, você pode definir seletores para restringir ou ampliar a seleção de pods injetados, atribuir recursos ao operador e ajustar o arquivo secundário. Além disso, você pode adicionar outros atributos, rótulos e variáveis de ambiente. Consulte o gráfico [`README.md`](https://github.com/newrelic/helm-charts/blob/master/charts/newrelic-infra-operator/README.md) e [`values.yaml`](https://github.com/newrelic/helm-charts/blob/master/charts/newrelic-infra-operator/values.yaml).

<Callout variant="important">
  Especificar suas próprias regras de injeção personalizadas descartará o conjunto de regras padrão que impede a injeção de sidecar em pods que não estão programados no Fargate. Certifique-se de que suas regras personalizadas tenham o mesmo efeito; caso contrário, no cluster híbrido que também possui o `DaemonSet` implantado, o pod programado no EC2 será monitorado duas vezes, levando a dados incorretos ou duplicados.
</Callout>

### Atualize para a versão mais recente ou para uma nova configuração [#automatic-update]

Para atualizar para a versão mais recente da integração do EKS Fargate, atualize o repositório Helm usando `helm repo update newrelic` e reinstale o pacote simplesmente executando novamente o comando acima.

Para atualizar a configuração do agente de infraestrutura injetado ou do próprio operador, modifique o `values-newrelic.yaml` e faça upgrade da versão do Helm com a nova configuração. O operador é atualizado imediatamente e sua carga de trabalho será instrumentada com a nova versão na próxima reinicialização. Se desejar atualizá-los imediatamente, você pode forçar a reinicialização da sua carga de trabalho executando:

```shell
kubectl rollout restart deployment YOUR_APP
```

### Injeção automática: Desinstalar [#automatic-uninstall]

Para desinstalar o sidecar realizando a injeção automática, mas manter o restante da solução New Relic, usando Helm, desative o infra-operador configurando `infra-operator.enabled` como `false`, no arquivo `values.yaml` ou na linha de comando (`--set`) e execute novamente o comando de instalação acima.

É altamente recomendável manter o sinalizador `--set global.fargate=true` , pois ele não permite a injeção automática, mas torna outros componentes da instalação cientes do Fargate, evitando comportamentos indesejados.

Para desinstalar toda a solução:

1. Desinstale completamente a versão do Helm.

2. Abra o pod para remover o sidecar:

   ```shell
   kubectl rollout restart deployment YOUR_APP
   ```

3. Lixo colete os segredos:

   ```shell
   kubectl delete secrets -n YOUR_NAMESPACE -l newrelic/infra-operator-created=true
   ```

## Injeção manual [#fargate-manual]

Se você tiver alguma dúvida sobre a injeção automática, poderá injetar o sidecar manualmente diretamente, modificando os manifestos da carga de trabalho agendada que será agendada nos nós do Fargate. Observe que adicionar o sidecar à implantação agendada em nós EC2 pode levar a dados incorretos ou duplicados, especialmente se esses nós já estiverem sendo monitorados com o `DaemonSet`.

Estes objetos são necessários para que o arquivo secundário relate dados com êxito:

* O `ClusterRole` fornece a permissão necessária para a integração `nri-kubernetes` .
* Um `ClusterRoleBinding` vinculando o `ClusterRole` e a conta de serviço do pod.
* O segredo que armazena a New Relic `licenseKey` em cada namespace Fargate.
* O contêiner sidecar no template específico da workload do monitor.

<Callout variant="tip">
  Estas etapas de configuração manual são para uma instalação genérica. Antes de concluí-los, dê uma olhada na seção [de configuração](#manual-configuration) abaixo para ver se deseja modificar algum aspecto da injeção automática.
</Callout>

Conclua estas etapas para injeção manual:

<Steps>
  <Step>
    ### `ClusterRole` [#manual-clusterrole]

    Se `ClusterRole` não existir, crie-o e conceda as permissões necessárias para atingir o endpoint métrico. Você só precisa fazer isso uma vez, mesmo para monitoramento de vários aplicativos no mesmo cluster. Você pode usar este trecho conforme aparece abaixo, sem nenhuma alteração:

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
    ### Carro lateral injetado [#manual-injected-sidecar]

    Para cada workload que você deseja monitor, adicione um contêiner secundário adicional para a imagem `newrelic/infrastructure-k8s`. Pegue o contêiner do trecho a seguir e injete-o na workload que deseja monitor, especificando o nome do seu `FargateProfile` na variável `customAttributes`. Observe que os volumes podem ser definidos como `emptyDir: {}`.

    <Callout variant="tip">
      No caso especial de uma implantação KSM, você também precisa remover a variável de ambiente `DISABLE_KUBE_STATE_METRICS` e aumentar as solicitações e limites de recursos.
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

    Ao adicionar manualmente o manifesto do agente secundário, você pode usar qualquer opção de configuração do agente para configurar o comportamento do agente. Para obter ajuda, consulte [Definições de configuração do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/).
  </Step>

  <Step>
    ### `ClusterRoleBinding` [#manual-cluster-role-binding]

    Crie um `ClusterRoleBinding`, ou adicione a um já criado o `ServiceAccount` do aplicativo que será monitorado. Toda a carga de trabalho pode compartilhar o mesmo `ClusterRoleBinding`, mas o `ServiceAccount` de cada uma deve ser adicionado a ela.

    Crie o seguinte `ClusterRoleBinding` que tenha como assuntos a conta de serviço do pod que você deseja monitor.

    <Callout variant="tip">
      Você não precisa repetir a mesma conta de serviço duas vezes. Cada vez que você quiser monitor um pod com uma conta de serviço que ainda não esteja incluída, basta adicioná-lo à lista.
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
    ### Segredo contendo [#secret-containing]

    Crie um segredo contendo a New Relic <InlinePopover type="licenseKey"/>. Cada namespace precisa de seu próprio segredo.

    Crie o seguinte `Secret` que tenha uma licença com o valor codificado em Base64 do seu <InlinePopover type="licenseKey"/>. É necessário um segredo em cada namespace onde um pod que você deseja monitor está em execução.

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

### Injeção manual: atualize para a versão mais recente [#manual-update-version]

Para atualizar qualquer um dos componentes, basta modificar o yaml implantar. Atualizar qualquer um dos campos do contêiner injetado fará com que o pod seja recriado.

<Callout variant="important">
  O agente não pode carregar a quente a New Relic <InlinePopover type="licenseKey"/>. Após atualizar o segredo, é necessário implantar novamente a implantação.
</Callout>

### Injeção manual: Desinstale a integração Fargate [#manual-uninstall]

Para remover o contêiner injetado e os recursos relacionados, basta remover o seguinte:

* O sidecar da carga de trabalho que não deve mais ser monitorado.
* Todos os segredos que contêm a licença newrelic.
* `ClusterRole` e `ClusterRoleBinding` objetos.

Observe que a remoção do contêiner secundário fará com que o pod seja recriado.

## Exploração madeireira [#fargate-logging]

O registro em log do New Relic não está disponível em nós do Fargate devido a restrições de segurança impostas pela AWS, mas aqui estão algumas opções de registro:

* Se você estiver usando o Fluentbit para registro, consulte [Plug-inKubernetes para encaminhamento de logs](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/).
* Se seus dados log já estiverem sendo monitorados pelo AWS FireLens, consulte [Plug-in AWS FireLens para encaminhamento de logs](/docs/logs/forward-logs/aws-firelens-plugin-log-forwarding/).
* Se os dados log já estiverem sendo monitorados pelo log do Amazon CloudWatch, consulte [Transmitir log usando o Kinesis Data Firehose](/docs/logs/forward-logs/stream-logs-using-kinesis-data-firehose/).
* Consulte [AWS Lambda para enviar log do CloudWatch](/docs/logs/forward-logs/aws-lambda-sending-cloudwatch-logs/).
* Consulte [Três maneiras de encaminhar log do Amazon ECS para New Relic](https://newrelic.com/blog/how-to-relic/forward-logs-from-amazon-ecs-to-new-relic).

## Resolução de problemas [#troubleshooting]

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="daemonset"
    title="Réplicas do DaemonSet estão sendo implantadas em nós Fargate"
  >
    Se você notar que alguma réplica do Infra `DaemonSet` está sendo programada em nós do Fargate, pode ser porque as regras `nodeAffinity` não estão configuradas corretamente.

    Verifique novamente se a solução foi instalada com a opção `global.fargate` para `true`, por meio da linha de comando (`--set global.fargate=true`) ou no arquivo `values.yaml` . Se o método de instalação não for Helm, você precisará adicionar manualmente `nodeAffinity` regras para excluir nós do Fargate.
  </Collapser>

  <Collapser
    className="freq-link"
    id="event-untolerated"
    title={<>Evento <InlineCode>FailedScheduling</InlineCode> devido a contaminação não tolerada</>}
  >
    Lembre-se de adicionar no arquivo `values.yaml` o `tolerations` descrito em [Instalação de injeção automática](#auto-injection-install) se você receber o seguinte evento ao tentar criar um pod:

    ```yaml
    LAST SEEN | TYPE | REASON | OBJECT | MESSAGE
    :--|:--|:--|:--|:--
    3m9s (x2 over 8m10s) | Warning | FailedScheduling | Pod/no-fargate-deploy-cbddd6ccf-8f9x4 | 0/2 nodes are available: 2 node(s) had untolerated taint {eks.amazonaws.com/compute-type: fargate}. preemption: 0/2 nodes are available: 2 Preemption is not helpful for scheduling..
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="event-many-pods"
    title={<>Evento <InlineCode>FailedScheduling</InlineCode> devido a muitos pods</>}
  >
    Verifique se há um perfil do Fargate com um seletor que nomeie o namespace onde a instalação está ocorrendo se você receber o seguinte evento ao tentar criar um pod:

    ```yaml
    LAST SEEN | TYPE | REASON | OBJECT | MESSAGE
    :--|:--|:--|:--|:--
    61s | Warning | FailedScheduling | Pod/newrelic-bundle-newrelic-infra-operator-admission-create-d8ggt | 0/2 nodes are available: 2 Too many pods. preemption: 0/2 nodes are available: 2 No preemption victims found for incoming pod..
    ```
  </Collapser>
</CollapserGroup>

## Veja seus dados EKS [#view-data]

Aqui está um exemplo da aparência de um nó Fargate na interface New Relic :

<img
  title="Screenshot showing the Kubernetes explorer with a Fargate node"
  alt="Screenshot showing the Kubernetes explorer with a Fargate node"
  src="/images/kubernetes_screenshot-crop_fargate-ui.webp"
/>

Para visualizar seus dados da AWS:

1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Kubernetes**</DNT> e siga um destes procedimentos:

   * Selecione um nome de integração para visualizar os dados.
   * Selecione o ícone Explorar dados para visualizar os dados da AWS.

2. Filtre seus dados usando duas tags Fargate:

   * `computeType=serverless`
   * `fargateProfile=[name of the Fargate profile to which the workload belongs]`
