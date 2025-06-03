---
title: 'Tutorial: monitor Redis em execução no Kubernetes'
tags:
  - Integrations
  - Kubernetes integration
  - Link apps and services
metaDescription: An example of how to set up monitoring of a service running on Kubernetes.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este tutorial se aplica à [integração do Kubernetes v3](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/changes-since-v3) [instalada usando Helm](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm). Para obter instruções sobre como fazer isso na v2 usando o helm, verifique [esta seção](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#monitor-services). Para verificar como configurar serviços no manifesto simples, confira [esta outra página](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/monitor-services/monitor-services-running-kubernetes#config-details).
</Callout>

Se você tiver um serviço em execução no Kubernetes e for um [serviço que oferecemos suporte](/docs/monitor-service-running-kubernetes#integration-configs), você poderá ativar o monitoramento desse serviço adicionando uma seção de configuração para essa integração à configuração da integração do Kubernetes.

Este tutorial mostra como habilitar o monitoramento para um serviço Redis em execução no Kubernetes PHP Guestbook. Para obter o procedimento geral, consulte [Monitorar um serviço em execução do Kubernetes](/docs/monitor-service-running-kubernetes).

## O que você precisa [#requirements]

* Consulte os [requisitos gerais para este recurso](/docs/monitor-service-running-kubernetes#requirements), incluindo os serviços suportados.
* A ferramenta de linha de comando `kubectl` deve ser configurada para se comunicar com seu cluster. Se você não tiver um cluster, poderá criar um usando [Minikube](https://kubernetes.io/docs/setup/minikube).

## Etapa 1: configurar um exemplo de aplicativo Redis [#set-up-redis]

Este tutorial se baseia no tutorial do Kubernetes [para implantar um aplicativo PHP Guestbook com Redis](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/). Ignore o tutorial do Kubernetes e execute o seguinte comando para configurar o aplicativo necessário para nosso tutorial:

```shell
kubectl create -f https://raw.githubusercontent.com/kubernetes/examples/master/guestbook/all-in-one/guestbook-all-in-one.yaml
```

Se desejar concluir primeiro o [tutorial do Kubernetes](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/), siga as instruções do tutorial, mas **não** siga as instruções na seção <DNT>**Cleaning up**</DNT> .

## Passo 2: Habilitar monitoramento da instância Redis [#monitor-redis]

O aplicativo PHP Guestbook possui três instâncias Redis : uma instância mestre e duas instâncias de réplica. Cada instância é marcada com um rótulo onde `app=redis`. Neste exemplo, estamos usando nossa [integração de monitoramento Redis](/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration). Ele pode monitor a instância mestre e a réplica do Redis, portanto, não precisamos distinguir entre elas.

1. No arquivo YAML `values-newrelic.yaml` do nosso [gráfico do leme,](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm) você precisa atualizar a seção `newrelic-infrastructure.integrations` . Na [lista de configurações de integração](/docs/monitor-service-running-kubernetes#integration-configs), obtenha o YAML de integração do Redis e adicione-o à configuração do Kubernetes. A configuração específica do Redis está contida na chave `redis-config.yml:` :

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

2. Implantar o serviço atualizado:

   ```shell
   helm upgrade --install newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml \
   --devel
   ```

   Você poderá ver o seguinte no log do pod `nrk8s-kubelet` que está programado no mesmo nó do serviço que deseja monitor:

   ```shell
   kubectl logs -n newrelic newrelic-nrk8s-kubelet-xxxxx agent
   ```

   ```
   time="2019-12-23T17:37:07Z" level=info msg="Integration health check starting" instance=redis-metrics integration=com.newrelic.redis prefix=integration/com.newrelic.redis working-dir=/var/db/newrelic-infra/newrelic-integrations
   time="2019-12-23T17:37:07Z" level=info msg="Integration health check finished with success" instance=redis-metrics integration=com.newrelic.redis prefix=integration/com.newrelic.redis working-dir=/var/db/newrelic-infra/newrelic-integrations
   ```

Se não houver erros, você deverá ver os dados Redis na interface da infraestrutura. Para encontrar o painel Redis , acesse <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Third party services**</DNT> e selecione o dashboard <DNT>**Redis**</DNT> .

Para obter o procedimento geral de como monitor serviços em execução no Kubernetes, incluindo mais detalhes sobre como funciona a configuração, consulte [monitor um serviço em execução Kubernetes](/docs/monitor-service-running-kubernetes).
