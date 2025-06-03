---
title: Mudanças introduzidas na integração do Kubernetes versão 3
tags:
  - Integrations
  - Kubernetes integration
  - Changelog
metaDescription: Changes introduced in Kubernetes integration version 3
freshnessValidatedDate: never
translationType: machine
---

A partir da versão 3, o New Relic Kubernetes integração recurso e [arquitetura](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#architecture) torna o AI Monitoring mais modular e configurável, dando mais poder de escolha como será implantado e tornando-o compatível com mais ambientes.

Os dados relatados pela versão 3 da integração do Kubernetes não mudaram desde a versão 2. Para a versão 3, nos concentramos na configurabilidade, estabilidade e experiência do usuário. Veja as últimas notas de versão da integração [aqui](/docs/release-notes/infrastructure-release-notes/kubernetes-integration-release-notes/).

<Callout variant="important">
  A versão 3 da integração do Kubernetes (`appVersion`) está incluída no [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) gráfico `version` 4.
</Callout>

## Guia de migração [#migration-guide]

Para facilitar ao máximo a migração de versões anteriores, desenvolvemos uma camada de compatibilidade que traduz a maioria das opções configuráveis do antigo gráfico `newrelic-infrastructure` para suas novas contrapartes. Esta camada de compatibilidade é temporária e será removida no futuro. Recomendamos que você leia este guia com atenção e migre a configuração com supervisão humana. Você pode ler mais sobre o gráfico `newrelic-infrastructure` atualizado [aqui](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure#newrelic-infrastructure).

### Configuração da métrica do estado Kube (KSM) [#ksm-config]

<Callout variant="tip">
  O monitoramento KSM funciona imediatamente para a maioria das configurações; a maioria dos usuários não precisará alterar esta configuração.
</Callout>

* `disableKubeStateMetrics` foi substituído por `ksm.enabled`. O padrão ainda é o mesmo (raspagem KSM habilitada).
* `kubeStateMetricsScheme`, `kubeStateMetricsPort`, `kubeStateMetricsUrl`, `kubeStateMetricsPodLabel` e `kubeStateMetricsNamespace` foram substituídos pelo mais abrangente e flexível `ksm.config`.
* Observe que o KSM v2+ desativa os rótulos métricos por padrão. Você pode ativar o monitoramento da métrica dos rótulos de destino usando as `metric-labels-allowlist` opções descritas [aqui](https://github.com/kubernetes/kube-state-metrics/blob/main/docs/developer/cli-arguments.md) em seu cluster do Kubernetes.

O objeto `ksm.config` tem a seguinte estrutura:

```yaml
ksm:
  config:
    # When autodiscovering KSM, force the following scheme. By default, `http` is used.
    scheme: "http"
    # Label selector to find kube-state-metrics endpoints. Defaults to `app.kubernetes.io/name=kube-state-metrics`.
    selector: "app.kubernetes.io/name=kube-state-metrics"
    # Restrict KSM discovery to this particular namespace. Defaults to all namespaces.
    namespace: ""
    # When autodiscovering, only consider endpoints that use this port. By default, all ports from the discovered `endpoint` are probed.
    # port: 8080
    # Override autodiscovery mechanism completely and specify the KSM url directly instead
    # staticUrl: "http://test.io:8080/metrics"
```

### Configuração do plano de controle [#controlplane-configuration]

A configuração do plano de controle mudou substancialmente. Se você ativou anteriormente o monitoramento do plano de controle, recomendamos que você dê uma olhada em nossa documentação [Configurar monitoramento do plano de controle](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/configure-control-plane-monitoring) .

As seguintes opções foram substituídas por uma configuração mais abrangente, abordada na seção vinculada acima:

* `apiServerSecurePort`
* `etcdTlsSecretName`
* `etcdTlsSecretNamespace`
* `controllerManagerEndpointUrl`, `etcdEndpointUrl`, `apiServerEndpointUrl` e `schedulerEndpointUrl`

### Configuração do agente [#agent-configuration]

O arquivo de configuração do agente, especificado anteriormente em `config`, foi movido para `common.agentConfig`. O formato do arquivo não mudou e toda a gama de opções que podem ser configuradas pode ser encontrada [aqui](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/).

As seguintes opções de agente foram previamente "aliadas" na raiz do arquivo `values.yml` e são <DNT>**no longer available**</DNT>:

* `logFile` foi substituído por `common.agentConfig.log_file`.
* `eventQueueDepth` foi substituído por `common.agentConfig.event_queue_depth`.
* `customAttributes` mudou de formato para um objeto yaml. O formato anterior, uma string codificada manualmente em JSON, por exemplo `{"team": "devops"}`, está obsoleto.
* Anteriormente, `customAttributes` tinha uma entrada `clusterName` padrão que poderia ter consequências indesejadas se fosse removida. Este não é mais o caso; o usuário agora pode substituir `customAttributes` por completo com segurança.
* `discoveryCacheTTL` foi completamente removido, pois a descoberta agora é realizada usando informantes Kubernetes, que possuem um cache integrado.

### Integração configuração [#integrations-configuration]

Integração foram previamente configuradas em `integrations_config`, utilizando um formato de matriz:

```yaml
integrations_config:
  - name: nri-redis.yaml
    data:
      discovery:  # ...
      integrations:  # ...
```

O mecanismo permanece o mesmo, mas alteramos o formato para ser mais amigável ao usuário:

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:  # ...
    integrations:  # ...
```

Além disso, os sinalizadores `--port` e `--tls` agora são obrigatórios no comando de descoberta. No passado, o seguinte funcionaria:

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:
      command:
        exec: /var/db/newrelic-infra/nri-discovery-kubernetes
```

Da v3 em diante, você deve especificar `--port` e `--tls`:

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:
      command:
        exec: /var/db/newrelic-infra/nri-discovery-kubernetes --tls --port 10250
```

Essa alteração é necessária porque na v2 e abaixo, o componente `nrk8s-kubelet` (ou seu equivalente) era executado com `hostNetwork: true`, então `nri-discovery-kubernetes` poderia se conectar ao kubelet usando `localhost` e http simples. Por razões de segurança, este não é mais o caso; daí a necessidade de especificar ambos os sinalizadores de agora em diante.

Para mais detalhes sobre como configurar integração no host no Kubernetes, consulte nossos [serviçosmonitor na documentação Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/link-apps-services/monitor-services-running-kubernetes) .

### Valores diversos do gráfico [#misc-chart-values]

Embora não estejam relacionadas à configuração de integração, as seguintes opções diversas para o gráfico do Helm também foram alteradas:

* `runAsUser` foi substituído por `securityContext`, que é modelado diretamente no pod e mais configurável.

* `resources` foi removido, pois agora implantamos três cargas de trabalho diferentes. Os recursos de cada um podem ser configurados individualmente em:

  * `ksm.resources`
  * `kubelet.resources`
  * `controlPlane.resources`

* `tolerations` foi dividido em três e o anterior não é mais válido. Todos os três são padronizados para tolerar qualquer valor para `NoSchedule` e `NoExecute`:

  * `ksm.tolerations`
  * `kubelet.tolerations`
  * `controlPlane.tolerations`

* `image` e todas as suas subchaves foram substituídas por seções individuais para cada uma das três imagens que agora estão implantadas:

  * `images.forwarder.*` para configurar o encaminhador do agente de infraestrutura.
  * `images.agent.*` para configurar o pacote de imagens do agente de infraestrutura e integração no host.
  * `images.integration.*` para configurar a imagem responsável pela coleta de dados do k8s.
