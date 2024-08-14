---
title: Escale automaticamente sua infraestrutura com Kubernetes
metaDescription: Automatically allocate and deallocate infrastructure resources to your pods with horizontal pod autoscaling.
freshnessValidatedDate: never
translationType: machine
---

A preparação para um evento de pico de demanda requer tempo: você precisa estabelecer sua linha de base, avaliar seus acordos de nível de serviço e alinhar todas as suas equipes em torno dos mesmos dados. O dimensionamento da sua infraestrutura tem considerações semelhantes, mas também envolve a projeção das necessidades do sistema em relação aos custos. Como você equilibra os dois sem sacrificar o desempenho? Onde está o limite para ser bom o suficiente?

Uma solução é o escalonamento automático de pod horizontal (HPA), que é construído com nossa integração do Kubernetes com o Pixie. Depois de configurar o HPA, seu cluster do Kubernetes aloca automaticamente mais pod quando a demanda atinge o pico e, em seguida, desaloca quando a demanda cai. Isso permite que você evite preocupações com custos ao antecipar a demanda.

<img
  title="Horizontal pod autoscaling"
  alt="Diagram demonstrating how HPA interacts with New Relic at a high level."
  src="/images/kubernetes_diagram_K8s-HPA.webp"
/>

O tutorial pressupõe que você esteja usando cluster do Kubernetes. Para configurar o HPA, você precisará de:

* Um [cluster do Kubernetes executando uma versão suportada](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-integration-compatibility-requirements).

* Seu usuário do New Relic

  <InlinePopover type="licenseKey"/>

* Nenhum outro adaptador métrico externo instalado no cluster

## Objetivos [#objectives]

Este tutorial orienta você na configuração de um ambiente de demonstração para HPA. Você irá:

* Instale a integração do New Relic Kubernetes
* Configure um ambiente de exemplo para testar o escalonamento automático

## Encaminhar métrica para Kubernetes [#k8s]

<Steps>
  <Step>
    ### Clone nosso repositório de laboratório New Relic Pixie

    Clone o seguinte repositório do Github:

    ```bash
    git clone https://github.com/newrelic-experimental/pixie-lab-materials
    ​​cd pixie-lab-materials/main
    ./setup.sh
    ```
  </Step>

  <Step>
    O script `setup.sh` gera um novo cluster minikube usando o driver de hiperkit compatível com Pixie. Em seguida, ele configura a memória da rede e a CPU para desempenho ideal com o Pixie e cria todos os pods e serviços que compõem o aplicativo de demonstração.

    Em uma nova janela do terminal, abra um túnel minikube:

    ```bash
    minikube tunnel -p minikube-pixie-lab
    ```

    Você deve ter dois terminais:

    * Seu túnel, que permanece aberto para acessar seu aplicativo de demonstração.
    * Um lugar para executar comandos para o tutorial.
  </Step>

  <Step>
    ### Instale a integração do Kubernetes com Pixie

    Siga nossa [instalação guiada](https://one.newrelic.com/nr1-core?account=2498654&state=d1aae74b-0ad6-b0f3-093d-cc89ecf89234) para instalar a integração do New Relic Kubernetes. Isso conecta o New Relic ao seu cluster do Kubernetes. Tenha certeza de:

    * Marque <DNT>**Instant service-level insights**</DNT>, <DNT>**Full-body requests**</DNT> e <DNT>**Application profiles through Pixie**</DNT> para ativar o Pixie.

    * Mantenha todos os outros itens marcados por padrão

      Depois de clicar em continuar, copie e cole esse comando em seu ambiente de desenvolvimento.
  </Step>

  <Step>
    ### Instale New Relic Metrics Adapter

    Para instalar o adaptador métrico New Relic, use o gráfico do Helm `newrelic-k8s-metrics-adapter` . Se você usou o `nri-bundle-chart` para implantar qualquer componente do New Relic Kubernetes, você terá acesso a este gráfico do Helm.

    ```bash
    helm upgrade --install newrelic newrelic/nri-bundle \
      --namespace newrelic --create-namespace --reuse-values \
      --set metrics-adapter.enabled=true \
      --set newrelic-k8s-metrics-adapter.personalAPIKey=YOUR_NEW_RELIC_PERSONAL_API_KEY \
      --set newrelic-k8s-metrics-adapter.config.accountID=YOUR_NEW_RELIC_ACCOUNT_ID \
      --set newrelic-k8s-metrics-adapter.config.externalMetrics.manipulate_average_requests.query="FROM Metric SELECT average(http.server.duration) WHERE instrumentation.provider='pixie'"
    ```

    Aqui está o que esses sinalizadores fazem:

    * `metrics-adapter.enabled`: Define como `true` para instalar o gráfico do adaptador métrico

    * `newrelic-k8s-metrics-adapter.personalAPIKey`: define sua chave de API do New Relic.

    * `newrelic-k8s-metrics-adapter.accountID`: O ID da conta que encaminha a métrica.

    * `newrelic-k8s-metrics-adapter.config.externalMetrics.external_metric_name.query`: adiciona uma nova métrica externa com as seguintes informações:

      * `external_metric_name`: o nome da métrica.
      * `query`: a consulta NRQL base da métrica.
  </Step>

  <Step>
    ### Confirme se sua consulta NRQL está correta

    Você deve testar sua consulta antes de enviar a métrica para o escalonador automático da New Relic. Vá para <DNT>**[one.newrelic.com](https://one.newrelic.com) > Query your Data**</DNT> e copie e cole a seguinte consulta NRQL:

    ```sql
    FROM Metric SELECT average(http.server.duration) WHERE instrumentation.provider='pixie'
    ```
  </Step>

  <Step>
    ### Configure seu escalonador automático

    No diretório `pixie-lab-materials/main/kube` , crie um novo arquivo chamado `hpa.yml`. O adaptador métrico New Relic envia dados para o gerenciador do controlador, que é definido pela definição HPA neste arquivo YAML.

    ```yml
    kind: HorizontalPodAutoscaler
    apiVersion: autoscaling/v2beta2
    metadata:
        name: manipulate-scaler
    spec:
        scaleTargetRef:
            apiVersion: apps/v1
            kind: Deployment
            name: manipulation-service
        minReplicas: 1
        maxReplicas: 10
        metrics:
            - type: External
                external:
                    metric:
                        name: manipulate_average_requests
                    target:
                        type: Value
                        value: 100
    ```

    Aplique o novo arquivo YAML executando:

    ```bash
    cd pixie-lab-materials/main/kube
    kubectl apply -f hpa.yaml
    ```
  </Step>
</Steps>

## Verifique seu trabalho: adicione carga para acionar o escalonamento automático [#check]

1. Navegue até a implantação do seu site com `kubectl get services`.
2. Abra o `EXTERNAL-IP` do seu serviço de front-end no seu browser.
3. Instale `hey` e Go v1.17 com `brew install hey`.
4. Envie a solicitação GET para `EXTERNAL-IP` com `hey -n 10 -c 2 -m GET http://<EXTERNAL-IP>`.
5. Observe o escalonamento automático do HPA com `watch kubnectl get hpa`.

Você configurou o HPA com êxito se o pod dimensionar automaticamente o número de réplicas à medida que o tempo médio de solicitação HTTP aumenta. Você pode ajustar a configuração de seus próprios serviços para que o New Relic e o HPA sejam dimensionados automaticamente conforme necessário.

<DocTiles numbered>
  <DocTile
    title="Get started"
    path="/docs/journey-demand/get-started"
  >
    Obtenha dados sobre sua arquitetura com APM e agente de infraestrutura
  </DocTile>

  <DocTile
    title="Create service levels for gameday"
    path="/docs/journey-demand/find-your-baseline/"
  >
    Crie um nível de serviço informado pela sua baseline
  </DocTile>
</DocTiles>

<DocTiles>
  <DocTile
    title="Reduce noise with quality alerts"
    number="3"
    path="/docs/journey-demand/create-quality-alerts/"
  >
    Avalie seu alerta com gerenciamento de qualidade de alerta
  </DocTile>

  <DocTile
    title="Align your teams with workloads"
    number="4"
    path="/docs/journey-demand/organize-data-workloads/"
  >
    Alinhe suas equipes em torno dos mesmos dados
  </DocTile>

  <DocTile
    title="Autoscale your infrastructure with Kubernetes"
    number="5"
    path="/docs/journey-demand/autoscale-your-infra/"
    label={{text: "You are here", color: "orange"}}
  >
    Dimensione seus recursos conforme os picos de demanda
  </DocTile>
</DocTiles>
