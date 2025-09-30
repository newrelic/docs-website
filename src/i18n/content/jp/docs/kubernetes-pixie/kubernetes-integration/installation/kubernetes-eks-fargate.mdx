---
title: AWS EKS Fargate へのインストレーション
tags:
  - Integrations
  - Kubernetes integration
  - Installation
  - EKS Fargate
metaDescription: 'New Relic''s Kubernetes integration: The installation of Kubernetes on AWS EKS Fargate'
freshnessValidatedDate: '2024-04-29T00:00:00.000Z'
translationType: machine
---

<Callout title="プレビュー">
  この機能はまだ開発中ですが、ぜひお試しください。

  この機能は現在、弊社の[プレリリース ポリシー](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy)に従ってプレビュー プログラムの一部として提供されています。
</Callout>

New Relicは、インフラストラクチャエージェントと監視が必要な各ポッドの`nri-kubernetes`統合を含むサイドカーを自動的に挿入することで、EKSFargateでのKubernetesワークロードの監視をサポートします。

同じKubernetesクラスターにEC2ノードも含まれている場合、ソリューションはそれらすべてに`DaemonSet`としてデプロイされます。EC2ノードでスケジュールされたポッドにサイドカーが注入されることはなく、Fargateノードに`DaemonSet`がデプロイされることもありません。FargateノードとEC2ノードの両方を備えたハイブリッドインスタンスの例を次に示します。

<img
  title="Diagram showing an EKS cluster with Fargat and EC2 nodes"
  alt="Diagram showing an EKS cluster with Fargat and EC2 nodes"
  src="/images/kubernetes_diagram_fargate-overview.svg"
/>

<figcaption>
  混合環境では、統合はFargateノードにサイドカーのみを使用します。
</figcaption>

New Relicは、FargateノードかEC2ノードかに関係なく、スケジュールされている場所に関係なく、すべてのKubernetesオブジェクトでサポートされているすべてのメトリックを収集します。Fargateによって課せられた制限により、NewRelic統合はFargateノードで[非特権](/docs/integrations/kubernetes-integration/installation/kubernetes-integration-install-configure/#unprivileged)モードで実行するように制限されていることに注意してください。つまり、実行中のプロセスのように、通常はホストから直接フェッチされるメトリックは、Fargateノードでは使用できません。

両方のシナリオのエージェントは、Kube State Metrics（KSM）、Kubelet、およびcAdvisorからデータを取得し、同じ形式でデータを送信します。

<Callout variant="important">
  他のKubernetesクラスタと同様に、このソリューションでは、Kube State Metrics（KSM）インスタンスをデプロイして監視する必要があります。ヘルムチャートやインストーラーはデフォルトで自動的にこれを行いますが、クラスターにすでにKSMのインスタンスが動作している場合は、この動作を無効にすることができます。このKSMインスタンスは、他のワークロードと同様に監視されます。ファーゲートノードでスケジュールされている場合はサイドカーを注入し、EC2ノードでスケジュールされている場合は`DaemonSet`のローカルインスタンスを注入します。
</Callout>

`nri-prometheus` 、 `nri-metadata-injection` 、 `nri-kube-events`などのKubernetes用のNew Relicソリューションの他のコンポーネントには特別なものはなく、Fargate以外の環境の場合と同様に、HelmChartによって通常どおりデプロイされます。

EKS FargateクラスターにNewRelicの完全な可観測性をインストールするには、次の2つの方法から選択できます。

* [自動注入（推奨）](#fargate-automatic)
* [手動注射](#fargate-manual)

どのアプローチを選択しても、インストール後のエクスペリエンスはまったく同じです。唯一の違いは、コンテナーの注入方法です。New Relic インフラストラクチャ監視オペレーターを使用して自動インジェクションを設定することをお勧めします。これにより、監視する各デプロイメントを手動で編集する必要がなくなるからです。

## 自動注入（推奨） [#fargate-automatic]

デフォルトでは、Fargateサポートが有効になっている場合、New Relicはオペレーターをクラスター（ `newrelic-infra-operator` ）にデプロイします。デプロイされると、このオペレーターは、監視サイドカーをFargateノードにスケジュールされているポッドに自動的に注入し、同時に`Secrets` 、 `ClusterRoleBindings` 、およびその他の関連リソースの作成と更新を管理します。

このオペレーターは、ポッドと名前空間の両方にラベルセレクターを使用することで、インジェクションの範囲を狭めたり広げたりするために使用できるさまざまな高度な構成オプションを受け入れます。

**オペレーターが行うこと**

舞台裏で、オペレーターは`MutatingWebhookConfiguration`を設定します。これにより、クラスターで作成されようとしているポッドオブジェクトを変更できます。このイベントで、作成中のポッドがユーザーの構成と一致すると、オペレーターは次のことを行います。

1. NewRelicKubernetes統合を含むポッドにサイドカーコンテナを追加します。

2. シークレットが存在しない場合は、サイドカーがデータを報告するために必要なNew Relic

   <InlinePopover type="licenseKey"/>

   を含む、ポッドと同じ名前空間にシークレットを作成します。

3. ポッドのサービスアカウントを、オペレーターチャートが以前作成した`ClusterRoleBinding`に追加します。これにより、このサイドカーにKubernetesメトリクスエンドポイントにアクセスするために必要な権限が付与されます。

`ClusterRoleBinding`は、注入されるポッドに次の権限を付与します。

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
  サイドカーが注入され、オペレーターがインストールされる前に展開されたポッドからメトリックを取得するには、影響を受ける展開のロールアウト（再起動）を手動で実行する必要があります。このようにして、ポッドが作成されると、オペレーターは監視サイドカーを注入できるようになります。New Relicは、予期しないサービスの中断やリソース使用量の急増を防ぐために、これを自動的に行わないことを選択しました。
</Callout>

<Callout variant="important">
  `newrelic` 名前空間 (またはインストール用に選択した名前空間) を宣言するセレクターを使用して Fargate プロファイルを作成してください。
</Callout>

インジェクションワークフローは次のとおりです。

<img
  title="Diagram showing the workflow of sidecar injection"
  alt="Diagram showing the workflow of sidecar injection"
  src="/images/kubernetes_diagram_fargate-workflow.svg"
/>

<Callout variant="tip">
  次の手順は、デフォルト設定用です。これらを完了する前に、以下の「[構成](#config-auto)」セクションを参照して、自動インジェクションのいずれかの側面を変更するかどうかを確認することをお勧めします。
</Callout>

<Steps>
  <Step>
    ### New Relic Helmリポジトリを追加する

    これまでに実行していない場合は、次のコマンドを実行して New Relic Helm リポジトリを追加します。

    ```shell
    helm repo add newrelic https://helm-charts.newrelic.com
    ```
  </Step>

  <Step>
    ### という名前のファイルを作成します `values.yaml`

    インフラストラクチャ サイドカーの挿入を担当するオペレーターをインストールするには、 `values.yaml`という名前のファイルを作成します。 このファイルは設定を定義します:

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
    ### デプロイ

    ファイルを作成して調整した後、次の Helm コマンドを使用してソリューションをデプロイできます。

    ```shell
    helm upgrade --install newrelic-bundle newrelic/nri-bundle -n newrelic --create-namespace -f values.yaml
    ```

    <Callout variant="important">
      ソリューションをハイブリッドクラスター（EC2ノードとFargateノードの両方）にデプロイする場合は、ソリューションがFargateプロファイルによって選択されていないことを確認してください。そうしないと、 `DaemonSet`インスタンスは保留状態のままになります。ファーゲートのみの環境では、 `DaemonSet`インスタンスが作成されないため、これは問題になりません。
    </Callout>
  </Step>
</Steps>

### 自動インジェクション: 既知の制限 [#known-limitations]

自動インジェクションを使用する際に注意すべきいくつかの問題があります。

1. 現在、クラスター全体を監視して、不要になったシークレットがガベージコレクションされていることを確認するコントローラーはありません。ただし、すべてのオブジェクトは、必要に応じてすべてのリソースを削除するために使用できる同じラベルを共有します。ラベル`newrelic/infra-operator-created: true`を挿入します。これを使用して、1つのコマンドでリソースを削除できます。
2. 現時点では、注入されたサイドカーを使用してポッドで実行されているサービスを監視することはできません。サイドカーはKubernetes自体のみを監視します。ただし、上級ユーザーは、これらのポッドを自動注入から除外し、それらを構成して適切な場所に構成をマウントすることにより、オンホスト統合が有効になっているカスタマイズされたバージョンのサイドカーを手動で注入したい場合があります。ヘルプについては、この[チュートリアル](/docs/integrations/kubernetes-integration/link-apps-services/tutorial-monitor-redis-running-kubernetes/)を参照してください。

### 自動インジェクション: 設定 [#automatic-configuration]

自動インジェクションのさまざまな側面を構成できます。デフォルトでは、オペレーターは、 `Job`または`BatchJob`の一部ではないFargateノードにデプロイされたすべてのポッドに監視サイドカーを注入します。

この動作は設定オプションを通じて変更できます。 たとえば、セレクターを定義して、挿入されるポッドの選択範囲を狭めたり広げたり、オペレーターにリソースを割り当てたり、サイドカーを調整したりできます。 また、他の属性、ラベル、環境変数を追加することもできます。 表[`README.md`](https://github.com/newrelic/helm-charts/blob/master/charts/newrelic-infra-operator/README.md)と[`values.yaml`](https://github.com/newrelic/helm-charts/blob/master/charts/newrelic-infra-operator/values.yaml)を参照してください。

<Callout variant="important">
  独自のカスタムインジェクションルールを指定すると、Fargateでスケジュールされていないポッドへのサイドカーインジェクションを防ぐデフォルトのルールセットが破棄されます。カスタムルールが同じ効果を持つことを確認してください。そうしないと、 `DaemonSet`もデプロイされているハイブリッドクラスターでは、EC2でスケジュールされたポッドが2回監視され、データが正しくないか重複することになります。
</Callout>

### 最新バージョンまたは新しい構成に更新します [#automatic-update]

EKS Fargate統合の最新バージョンに更新するには、 `helm repo update newrelic`を使用してHelmリポジトリーをアップグレードし、上記のコマンドを再度実行してバンドルを再インストールします。

注入されたインフラストラクチャエージェントまたはオペレーター自体の構成を更新するには、 `values-newrelic.yaml`を変更し、Helmリリースを新しい構成でアップグレードします。オペレーターはすぐに更新され、ワークロードは次回の再起動時に新しいバージョンで計測されます。それらをすぐにアップグレードしたい場合は、以下を実行してワークロードを強制的に再起動できます。

```shell
kubectl rollout restart deployment YOUR_APP
```

### 自動インジェクション: アンインストール [#automatic-uninstall]

自動インジェクションを実行しているサイドカーをアンインストールし、残りのNew Relicソリューションを保持するには、Helmを使用して、 `values.yaml`ファイルまたはコマンドラインで`infra-operator.enabled`を`false`に設定してインフラオペレーターを無効にします（ `--set` ）、上記のインストールコマンドを再実行します。

`--set global.fargate=true`フラグを保持することを強くお勧めします。これは、自動インジェクションを有効にしませんが、インストールの他のコンポーネントをFargate対応にし、望ましくない動作を防ぐためです。

ソリューション全体をアンインストールするには：

1. Helmリリースを完全にアンインストールします。

2. サイドカーを取り外すには、ポッドをロールアウトします。

   ```shell
   kubectl rollout restart deployment YOUR_APP
   ```

3. ガベージコレクションの秘密：

   ```shell
   kubectl delete secrets -n YOUR_NAMESPACE -l newrelic/infra-operator-created=true
   ```

## 手動注射 [#fargate-manual]

自動インジェクションについて懸念がある場合は、Fargate ノードでスケジュールされるワークロードのマニフェストを変更することで、サイドカーを手動で直接挿入できます。 EC2 ノードにスケジュールされたサイドカーを追加すると、特にそれらのノードがすでに`DaemonSet`で監視されている場合は、不正確なデータや重複したデータが発生する可能性があることに注意してください。

サイドカーがデータを正常に報告するには、次のオブジェクトが必要です。

* `ClusterRole`は、 `nri-kubernetes`インテグレーションに必要な権限を提供します。
* `ClusterRole`とポッドのサービス アカウントをリンクする`ClusterRoleBinding` 。
* 各 Fargate ネームスペースにNew Relic `licenseKey` を保存するシークレット。
* モニター ワークロードの特定のテンプレート内のサイドカー コンテナ。

<Callout variant="tip">
  これらの手動セットアップ手順は、一般的なインストール用です。 これらを完了する前に、以下の[設定](#manual-configuration)セクションを参照して、自動インジェクションのいずれかの側面を変更するかどうかを確認してください。
</Callout>

手動インジェクションを実行するには、次の手順を実行します。

<Steps>
  <Step>
    ### `ClusterRole` [#manual-clusterrole]

    `ClusterRole`が存在しない場合は作成し、メトリックス エージェントにアクセスするために必要な権限を付与します。 同じクラスター内の複数のアプリケーションを監視する場合でも、これを 1 回だけ実行する必要があります。 このスニペットは、変更せずに以下のように使用できます。

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
    ### インジェクションサイドカー [#manual-injected-sidecar]

    モニターする各トランザクションに対して、 `newrelic/infrastructure-k8s`イメージ用のサイドカー コンテナーを追加します。 次のスニペットの コンテナを取得し、モニターするワークロードに挿入します。その際、 `customAttributes`変数に`FargateProfile`の名前を指定します。 ボリュームは`emptyDir: {}`として定義できることに注意してください。

    <Callout variant="tip">
      KSMデプロイメントの特殊なケースでは、 `DISABLE_KUBE_STATE_METRICS`環境変数を削除し、リソース要求と制限を増やす必要もあります。
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

    サイドカーエージェントのマニフェストを手動で追加する場合は、任意のエージェント構成オプションを使用して、エージェントの動作を構成できます。ヘルプについては、 [インフラストラクチャエージェントの構成設定](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/)を参照してください。
  </Step>

  <Step>
    ### `ClusterRoleBinding` [#manual-cluster-role-binding]

    `ClusterRoleBinding`を作成するか、以前に作成したものに、監視対象のアプリケーションの`ServiceAccount`を追加します。すべてのワークロードが同じ`ClusterRoleBinding`を共有する場合がありますが、各ワークロードの`ServiceAccount`を追加する必要があります。

    監視するポッドのサービスアカウントをサブジェクトとして持つ次の`ClusterRoleBinding`を作成します。

    <Callout variant="tip">
      同じサービスアカウントを2回繰り返す必要はありません。まだ含まれていないサービスアカウントでポッドを監視するたびに、それをリストに追加するだけです。
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
    ### 秘密を含む [#secret-containing]

    New Relic <InlinePopover type="licenseKey"/>を含むシークレットを作成します。各名前空間には独自のシークレットが必要です。

    <InlinePopover type="licenseKey"/>のBase64エンコード値を含むライセンスを持つ次の`Secret`を作成します。監視するポッドが実行されている名前空間ごとに1つのシークレットが必要です。

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

### マニュアルインジェクション: 最新バージョンにアップデート [#manual-update-version]

いずれかのコンポーネントを更新するには、デプロイされたyamlを変更するだけです。 注入されたコンテナのいずれかのフィールドを更新すると、ポッドが再作成されます。

<Callout variant="important">
  エージェントはNew Relic <InlinePopover type="licenseKey"/>をホットロードできません。シークレットを更新した後、デプロイメントを再度ロールアウトする必要があります。
</Callout>

### 手動インジェクション: Fargateインテグレーションのアンインストール [#manual-uninstall]

注入されたコンテナと関連リソースを削除するには、次のものを削除する必要があります。

* もはや監視されるべきではないワークロードからのサイドカー。
* newrelicライセンスを含むすべての秘密。
* `ClusterRole` および`ClusterRoleBinding`オブジェクト。

サイドカーコンテナを削除すると、ポッドが再作成されることに注意してください。

## ロギング [#fargate-logging]

New Relic のログ記録は、AWS によって課されたセキュリティ制約のため、Fargate ノードでは利用できませんが、いくつかのログ記録オプションを次に示します。

* ログ記録に Fluentbit を使用している場合は、 [「ログ転送用の Kubernetes プラグイン」を](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/)参照してください。
* ログデータがすでに AWS FireLens によって監視されている場合は、 [「ログ転送用の AWS FireLens プラグイン」を](/docs/logs/forward-logs/aws-firelens-plugin-log-forwarding/)参照してください。
* ログデータがすでに Amazon CloudWatch Logs によって監視されている場合は、 [「Kinesis Data Firehose を使用したログのストリーミング」](/docs/logs/forward-logs/stream-logs-using-kinesis-data-firehose/)を参照してください。
* [CloudWatch ログの送信については、「AWS Lambda」](/docs/logs/forward-logs/aws-lambda-sending-cloudwatch-logs/)を参照してください。
* [「Amazon ECS から New Relic にログを転送する 3 つの方法」を](https://newrelic.com/blog/how-to-relic/forward-logs-from-amazon-ecs-to-new-relic)参照してください。

## トラブルシューティング [#troubleshooting]

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="daemonset"
    title="DaemonSet レプリカが Fargate ノードにデプロイされています"
  >
    FargateノードでInfra `DaemonSet`レプリカがスケジュールされていることに気付いた場合は、 `nodeAffinity`ルールが適切に構成されていないことが原因である可能性があります。

    コマンドライン ( `--set global.fargate=true` ) または`values.yaml`ファイルのいずれかで、ソリューションが`true`の`global.fargate`オプションを使用してインストールされていることを再確認してください。 インストレーション方法が Helm ではなかった場合、Fargate ノードを除外する`nodeAffinity`ルールを手動で追加する必要があります。
  </Collapser>

  <Collapser
    className="freq-link"
    id="event-untolerated"
    title={<>許容できない汚染によるイベント <InlineCode>FailedScheduling</InlineCode></>}
  >
    ポッドの作成中に次のイベントが発生した場合は、 [自動インジェクションのインストール](#auto-injection-install) で説明されている `tolerations` を `values.yaml` ファイルに忘れずに追加してください。

    ```yaml
    LAST SEEN | TYPE | REASON | OBJECT | MESSAGE
    :--|:--|:--|:--|:--
    3m9s (x2 over 8m10s) | Warning | FailedScheduling | Pod/no-fargate-deploy-cbddd6ccf-8f9x4 | 0/2 nodes are available: 2 node(s) had untolerated taint {eks.amazonaws.com/compute-type: fargate}. preemption: 0/2 nodes are available: 2 Preemption is not helpful for scheduling..
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="event-many-pods"
    title={<>ポッドが多すぎるためイベント <InlineCode>FailedScheduling</InlineCode></>}
  >
    ポッドの作成中に次のイベントが発生した場合は、インストールが行われる名前空間を指定するセレクターを含む Fargate プロファイルがあるかどうかを確認してください。

    ```yaml
    LAST SEEN | TYPE | REASON | OBJECT | MESSAGE
    :--|:--|:--|:--|:--
    61s | Warning | FailedScheduling | Pod/newrelic-bundle-newrelic-infra-operator-admission-create-d8ggt | 0/2 nodes are available: 2 Too many pods. preemption: 0/2 nodes are available: 2 No preemption victims found for incoming pod..
    ```
  </Collapser>
</CollapserGroup>

## EKSデータを表示する [#view-data]

NewRelicUIでFargateノードがどのように表示されるかの例を次に示します。

<img
  title="Screenshot showing the Kubernetes explorer with a Fargate node"
  alt="Screenshot showing the Kubernetes explorer with a Fargate node"
  src="/images/kubernetes_screenshot-crop_fargate-ui.webp"
/>

AWSデータを表示するには：

1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Kubernetes**</DNT>に移動し、次のうち1つを行います。

   * データを表示する統合名を選択します。
   * AWSデータを表示するには、\[データの探索]アイコンを選択します。

2. 2つのFargateタグを使用してデータをフィルタリングします。

   * `computeType=serverless`
   * `fargateProfile=[name of the Fargate profile to which the workload belongs]`
