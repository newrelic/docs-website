---
title: Crie seu próprio arquivo de manifesto
tags:
  - Integrations
  - Kubernetes integration
  - Installation
metaDescription: How to create a manifest using Helm as a templating system
freshnessValidatedDate: never
translationType: machine
---

Você pode criar seu próprio arquivo de manifesto usando Helm para atender a todas as suas necessidades, como definir o proxy que deseja usar. Para entender todo o poder do Helm, recomendamos que você leia [como instalar a integração do Kubernetes usando o Helm](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm) antes de ler este documento.

## Compatibilidade e requisitos [#compatibility]

* Certifique-se de que [o Helm](https://github.com/helm/helm#install) corresponda à sua versão de integração do Kubernetes. Por exemplo, a versão 3 da integração do Kubernetes requer a versão 3 do Helm.

* Uma conta New Relic . Não tem um? [Cadastre-se gratuitamente!](https://newrelic.com/signup) Não é necessário cartão de crédito.

* Sua New Relic

  <InlinePopover type="licenseKey"/>

  .

* Seu cluster faz o nome do Kubernetes.

  * Se precisar de um nome de exibição para seu cluster, você poderá usar a saída do seguinte comando:

    ```shell
    kubectl config current-context
    ```

## Modelagem de integração do Kubernetes com Helm [#install-k8-helm]

<Callout variant="important">
  A instalação e a atualização usando um manifesto não são suportadas e estão sujeitas a erros. Tenha certeza absoluta de que esta é a abordagem necessária para o seu ambiente.
</Callout>

1. Adicione o repositório de gráficos do New Relic Helm executando:

   ```shell
   helm repo add newrelic https://helm-charts.newrelic.com
   ```

2. Crie um arquivo chamado `values-newrelic.yaml`, que será utilizado para definir sua configuração, que segue esta estrutura:

   <Callout variant="important">
     Consulte nossa documentação de instalação do Helm para saber [como configurá-lo](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#configure).
   </Callout>

   ```yaml
   global:
     licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
     cluster: _K8S_CLUSTER_NAME_

   newrelic-prometheus-agent:
     # Automatically scrape prometheus metrics for annotated services in the cluster
     enabled: true
   nri-metadata-injection:
     # Deploy our webhook to link APM and Kubernetes entities
     enabled: true
   nri-kube-events:
     # Report Kubernetes events
     enabled: true
   newrelic-logging:
     # Report logs for containers running in the cluster
     enabled: true
   kube-state-metrics:
     # Deploy kube-state-metrics in the cluster.
     # Set this to true unless it is already deployed.
     enabled: true
   ```

3. Certifique-se de que tudo esteja configurado corretamente no gráfico executando o seguinte comando. Observe que estamos especificando `--dry-run` e `--debug`, portanto nada é instalado nesta etapa:

   ```shell
   helm upgrade --install newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml \
   --dry-run \
   --debug
   ```

   Observe e modifique os seguintes valores:

   Observe e ajuste os seguintes sinalizadores:

   * `global.licenseKey=YOUR_NEW_RELIC_LICENSE_KEY`: deve ser definido como um <InlinePopover type="licenseKey"/>válido para sua conta.
   * `global.cluster=K8S_CLUSTER_NAME`: Usado para identificar o cluster na interface New Relic , portanto deve ser um valor descritivo não usado por nenhum outro cluster do Kubernetes configurado em sua conta New Relic .
   * `kube-state-metrics.enabled=true`: defina como `true` para instalar automaticamente a métrica do estado do Kube (KSM). Isso é necessário para que nossa integração seja executada. Você pode definir isso como falso se o KSM já estiver presente em seu cluster, mesmo que esteja em um namespace diferente.
   * `newrelic-prometheus-agent.enabled=true`: Defina isto para implantar nosso agente Prometheus, que coleta automaticamente dados do endpoint Prometheus presente no cluster.
   * `nri-metadata-injection.enabled=true`: Defina isto para instalar nosso webhook mínimo, que adiciona variáveis de ambiente que, por sua vez, permitem [vincular o aplicativo instrumentado com New Relic APM ao Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/link-your-applications/link-your-applications-kubernetes).

   <Callout variant="tip">
     Nossos gráficos do Kubernetes possuem um conjunto abrangente de sinalizadores e configurações que você pode editar para melhor atender às suas necessidades específicas. Confira abaixo como [configurar a integração](#configure) para ver o que você pode modificar.
   </Callout>

4. Modele a integração do Kubernetes executando:

   ```shell
   helm template newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml > templated-nri-bundle.yaml
   ```

5. Aplique o manifesto gerado executando:

   ```shell
   kubectl -n newrelic apply -f templated-nri-bundle.yaml
   ```

## Atualizar usando manifesto [#upgrade]

<Callout variant="important">
  A instalação e a atualização usando um manifesto não são suportadas e estão sujeitas a erros. Tenha certeza absoluta de que esta é a abordagem necessária para o seu ambiente.
</Callout>

1. Atualize o repositório de gráficos local executando:

   ```shell
   helm repo update
   ```

2. Modele o arquivo executando:

   ```shell
   helm template newrelic newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml > new-templated-nri-bundle.yaml
   ```

3. Desinstale a versão anterior da integração do Kubernetes, que usa o manifesto anterior, e aplique a nova executando:

   ```shell
   kubectl -n newrelic delete -f templated-nri-bundle.yaml
   kubectl -n newrelic apply -f new-templated-nri-bundle.yaml
   ```

## Desinstalar a integração do Kubernetes [#uninstall]

Para desinstalar a integração do Kubernetes usando Helm, execute:

```shell
kubectl -n newrelic delete -f templated-nri-bundle.yaml
```
