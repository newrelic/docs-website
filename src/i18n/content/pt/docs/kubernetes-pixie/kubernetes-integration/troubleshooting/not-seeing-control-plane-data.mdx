---
title: Não vendo dados do plano de controle
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data control plane data for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## Problemas

Você concluiu o [procedimento de instalação do Kubernetes](/install/kubernetes/) e está vendo dados do Kubernetes na sua conta do New Relic, mas não há dados de nenhum dos componentes do plano de controle.

## Solução

<CollapserGroup>
  <Collapser id="control-plane-sample-missing" title="Uma amostra do plano de controle está faltando">
    Caso os dados do plano de controle estejam faltando, por exemplo `K8sSchedulerSample`, a primeira coisa a fazer é verificar o log detalhado dos componentes do plano de controle. Leia como [habilitar o logging detalhado](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging).

    * Uma possibilidade é que a descoberta automática tente encontrar o pod do plano de controle no cluster usando os rótulos mais comuns; se nenhum pod for encontrado para um único componente, ele não deixará de evitar a perda de mais dados. Você verá um log semelhante ao seguinte:

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

      Nesse caso, você pode alterar o comportamento de descoberta com a configuração `controlplane.config.[component].autodiscover[].selector` dos [valores do gráfico do Helm](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml). Leia mais sobre o [componente do plano de controle](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#nrk8s-controlplane).

    * Também é possível que o componente do plano de controle seja encontrado, mas a autenticação com o endpoint falhe. Você verá um log semelhante ao seguinte:

      ```bash
      time="2022-06-21T15:54:52Z" level=debug msg="Endpoint \"https://localhost:10257\" probe failed, skipping: http request failed with status: 403 Forbidden"
      ```

      Nesse caso, você pode alterar o comportamento de autenticação para cada endpoint com a configuração `controlplane.config.[component].autodiscover[].endpoints[].auth` dos [valores do gráfico](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) do helm.

    * Também é possível que o componente do plano de controle da integração não esteja em execução em todos os nós do plano de controle. Você pode verificar novamente executando este comando:

      ```bash
      kubectl get pod -n <NEWRELIC_NAMESPACE> -l app.kubernetes.io/component=controlplane -o wide
      ```

      Se houver algum pod de plano de controle que você deseja monitor em execução em um nó sem uma instância de monitoramento New Relic , você pode alterar conforme necessário `controlplane.affinity`, `controlplane.nodeSelector` e `controlplane.tolerations` dos [valores do gráfico do Helm](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml).
  </Collapser>

  <Collapser
    id="control-plane-CrashLoopBackOff"
    title={<>O componente do plano de controle está em <InlineCode>
      CrashLoopBackOff
    </InlineCode></>
    }
  >
    Caso os componentes do plano de controle não descubram automaticamente ou não coletem com sucesso nenhum pod do plano de controle em que ele entra em `CrashLoopBackOff`.

    Você pode alterar o comportamento da descoberta automática e os métodos de autenticação para atender às suas necessidades.

    Por outro lado, se você não estiver interessado nesses dados, você pode simplesmente desabilitar o componente do plano de controle definindo `controlplane.enabled=false` nos [valores do gráfico do Helm](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml).
  </Collapser>
</CollapserGroup>