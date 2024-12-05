---
title: Atualizar a integração do Kubernetes
tags:
  - Integrations
  - Kubernetes integration
  - Upgrade
metaDescription: Learn how to upgrade the Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

Depois que uma nova versão do Kubernetes for lançada, será possível atualizar a versão do Kubernetes em execução nos nós do plano de controle e nos nós do trabalhador em um cluster.

## Atualize nossa integração com Kubernetes [#update]

Nossa integração Kubernetes está em desenvolvimento ativo e [lançamos atualizações](/docs/release-notes/infrastructure-release-notes/kubernetes-integration-release-notes/) regularmente, que incluem correções de bugs, novos recursos e suporte para versões mais recentes Kubernetes e provedores de nuvem. Recomendamos fortemente que você atualize regularmente sua integração do Kubernetes para obter a melhor experiência.

### Atualize usando a instalação guiada e o Helm [#upgrade-helm]

Para atualizar uma instalação que foi implantada utilizando o comando Helm fornecido pela [instalação guiada](https://one.newrelic.com/nr1-core?state=51fbbd48-c8ca-ead9-bb90-af96e18d82a7), siga o processo e execute o comando Helm novamente. Isso irá extrair a nova versão do gráfico e suas dependências e atualizá-lo para a versão mais recente.

Se você deseja atualizar manualmente sua integração do Kubernetes instalada via Helm:

1. Atualize o repositório de gráficos local:

   ```bash
   helm repo update
   ```

2. Atualize a versão executando o comando `helm upgrade --install ...` apropriado da seção acima:

   ```bash
   helm upgrade --install newrelic-bundle newrelic/nri-bundle \
   --namespace newrelic --create-namespace \
   -f values-newrelic.yaml
   ```

### Atualize usando a instalação guiada e os manifestos simples [#update-manifests]

<Callout variant="tip">
  Incentivamos você a implantar nossa integração usando Helm, pois ela fornece um caminho de atualização mais limpo em comparação ao uso direto de manifestos.
</Callout>

Se você usou manifestos personalizados em vez do Helm:

1. Primeiro, remova a instalação antiga:

   ```bash
   kubectl delete -f previous-manifest-file.yml
   ```

2. Continue com a instalação guiada novamente. Isso gerará um conjunto atualizado de manifestos que você pode implantar usando:

   ```bash
   kubectl apply -f manifest-file.yml
   ```

Não recomendamos aplicar uma nova versão do arquivo de manifesto sem primeiro remover a anterior, pois isso pode deixar alguns componentes restantes em seu cluster.

Se você precisar de uma maneira avançada de criar seu manifesto, crie um modelo usando Helm.

## Atualize a versão `nri-bundle` [#update-nri-bundle]

A seguir estão alguns problemas que você pode encontrar ao atualizar seu [`nri-bundle`](https://github.com/newrelic/helm-charts/blob/master/charts/nri-bundle/README.md) e como resolvê-los.

### Seletores de rótulo alterados [#changed-label-selectors]

Ao atualizar para a nova versão do `kube-state-metrics` (ou KSM), você poderá ver um erro como este:

```
v1.LabelSelector{MatchLabels:map[string]string{"app.kubernetes.io/instance":"newrelic", "app.kubernetes.io/name":"kube-state-metrics"}, MatchExpressions:[]v1.LabelSelectorRequirement(nil)}: field is immutable
```

O seletor de rótulo na nova versão do gráfico mudou, mas o nome da implantação não. Portanto, para fazer upgrade, você precisa remover a implantação `kube-state-metrics` antes de executar `helm upgrade` ou desinstalar completamente e depois reinstalar a integração.

### Valores obsoletos [#deprecated-values]

Se você encontrar o seguinte log:

```
warning: skipped value for nri-bundle.kube-state-metrics.collectors: Not a table.
Error: UPGRADE FAILED: template: nri-bundle/charts/kube-state-metrics/templates/role.yaml:18:6: executing "nri-bundle/charts/kube-state-metrics/templates/role.yaml" at <has "certificatesigningrequests" $.Values.collectors>: error calling has: Cannot find has on type map
```

Isso ocorre porque os valores do gráfico KSM foram alterados e o mapa do coletor foi alterado para uma lista de coletores. A lista coletora não é mais necessária e foi removida dos novos valores.

Se você ainda os tiver em seus valores estáticos do Helm ou se estiver usando o sinalizador `--reuse-values`, primeiro remova os seguintes valores:

```yml
kube-state-metrics:
  collectors:
    certificatesigningrequests: true
    ingresses: false
```

### Recursos não suportados do Kubernetes [#unsupported-k8s-resources]

Ao atualizar o `nri-bundle`, você poderá ver um erro sobre um determinado recurso que não é compatível com uma API específica do Kubernetes. Por exemplo,

```
Error: UPGRADE FAILED: unable to build kubernetes objects from current release manifest: resource mapping not found for name: "newrelic-bundle-nri-metadata-injection" namespace: "" from "": no matches for kind "MutatingWebhookConfiguration" in version "admissionregistration.k8s.io/v1beta1"
```

Isso significa que o recurso Kubernetes correspondente não é compatível com a API Kubernetes correspondente. Você pode seguir as instruções no [repositório do plug-in Helm mapkubeapis](https://github.com/helm/helm-mapkubeapis) para resolver o erro.
