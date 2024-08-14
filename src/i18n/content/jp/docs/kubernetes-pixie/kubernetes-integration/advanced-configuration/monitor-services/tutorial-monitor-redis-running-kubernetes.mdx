---
title: チュートリアルKubernetes上で動作するRedisの監視
tags:
  - Integrations
  - Kubernetes integration
  - Link apps and services
metaDescription: An example of how to set up monitoring of a service running on Kubernetes.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  このチュートリアルは 、[ Helm](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm)[Kubernetes を使用してインストールされた インテグレーション v3](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/changes-since-v3) に適用されます。helm を使用して v2 でこれを行う方法については、 [このセクションを](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#monitor-services)確認してください。 プレーン マニフェスト上でサービスを構成する方法を確認するには、 [この別のページ](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/monitor-services/monitor-services-running-kubernetes#config-details)を参照してください。
</Callout>

[Kubernetes上で動作しているサービスがあり、それが当社がサポートしている](/docs/monitor-service-running-kubernetes#integration-configs) のサービスである場合、Kubernetesインテグレーションのconfigにそのインテグレーション用の設定セクションを追加することで、そのサービスのモニタリングを有効にすることができます。

このチュートリアルでは、KubernetesのPHP Guestbook上で動作するRedisサービスのモニタリングを有効にする方法を紹介します。一般的な手順については、 [Monitor a Kubernetes-running service](/docs/monitor-service-running-kubernetes) を参照してください。

## 何が必要 [#requirements]

* この機能の [一般的な要件](/docs/monitor-service-running-kubernetes#requirements) 、サポートされているサービスなどを参照してください。
* クラスタと通信するには、 `kubectl`コマンドライン ツールを構成する必要があります。クラスターがない場合は、 [Minikube](https://kubernetes.io/docs/setup/minikube)を使用して作成できます。

## ステップ1：Redisアプリケーションの例を設定する [#set-up-redis]

このチュートリアルは、Kubernetesのチュートリアル [Deploying a PHP Guestbook application with Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/) をベースにしています。Kubernetesのチュートリアルを飛ばして、以下のコマンドを実行して、チュートリアルに必要なアプリケーションを設定します。

```shell
kubectl create -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook/all-in-one/guestbook-all-in-one.yaml
```

最初に[Kubernetes チュートリアル](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/)を完了したい場合は、そのチュートリアルの手順に従ってください。ただし、 <DNT>**Cleaning up**</DNT>セクションの手順には従わ**ない**でください。

## ステップ2：Redisインスタンスの監視を有効にする [#monitor-redis]

PHP ゲストブック アプリケーションには、1 つのマスター インスタンスと 2 つのレプリカ インスタンスの 3 つの Redis インスタンスがあります。各インスタンスは、 `app=redis`のラベルでタグ付けされます。この例では、 [Redis モニタリング統合](/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration)を使用しています。Redis のマスター インスタンスとレプリカ インスタンスの両方を監視できるため、それらを区別する必要はありません。

1. [Helm チャート](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm)の`values-newrelic.yaml` YAML ファイルで、 `newrelic-infrastructure.integrations`セクションを更新する必要があります。[統合構成のリスト](/docs/monitor-service-running-kubernetes#integration-configs)から、Redis 統合 YAML を取得し、それを Kubernetes 構成に追加します。Redis 固有の構成は、 `redis-config.yml:`キーの下に含まれています。

   ```yaml
   newrelic-infrastructure:
     integrations:
       redis-config.yml:
         # Run auto discovery to find pods with label "app=redis"
         # https://docs.newrelic.com/docs/integrations/host-integrations/installation/container-auto-discovery
         discovery:
           command:
             # Run discovery for Kubernetes. Use the following optional arguments:
             # --namespaces: Comma separated list of namespaces to discover pods on
             # --tls: Use secure (TLS) connection
             # --port: Port used to connect to the kubelet. Default is 10255
             exec: /var/db/newrelic-infra/nri-discovery-kubernetes --tls --port 10250
             match:
               label.app: redis
         integrations:
           - name: nri-redis
             env:
               # using the discovered IP as the hostname address
               HOSTNAME: ${discovery.ip}
               PORT: 6379
               KEYS: '{"0":["<KEY_1>"],"1":["<KEY_2>"]}'
               labels:
                 env: production
   ```

2. 更新したサービスをデプロイする。

   ```shell
   helm upgrade --install newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml \
   --devel
   ```

   監視するサービスと同じノードでスケジュールされている`nrk8s-kubelet` Pod のログで、次を確認できるはずです。

   ```shell
   kubectl logs -n newrelic newrelic-nrk8s-kubelet-xxxxx agent
   ```

   ```
   time="2019-12-23T17:37:07Z" level=info msg="Integration health check starting" instance=redis-metrics integration=com.newrelic.redis prefix=integration/com.newrelic.redis working-dir=/var/db/newrelic-infra/newrelic-integrations
   time="2019-12-23T17:37:07Z" level=info msg="Integration health check finished with success" instance=redis-metrics integration=com.newrelic.redis prefix=integration/com.newrelic.redis working-dir=/var/db/newrelic-infra/newrelic-integrations
   ```

エラーがなければ、インフラストラクチャ UI に Redis データが表示されます。 Redisダッシュボードを見つけるには、<DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Third party services**</DNT> に移動し、<DNT>**Redis**</DNT> ダッシュボードを選択します。

Kubernetes上で動作するサービスを監視する一般的な手順については、設定方法の詳細を含め、 [Monitor a Kubernetes-running service](/docs/monitor-service-running-kubernetes) を参照してください。
