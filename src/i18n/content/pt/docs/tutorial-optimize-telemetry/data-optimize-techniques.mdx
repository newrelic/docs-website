---
title: Otimize seus dados de ingestão
metaDescription: Taking your ingested and reported ingest data and optimizing it.
freshnessValidatedDate: never
translationType: machine
---

Na etapa anterior, você criou e refinou seu plano de otimização de dados, comparando seu relatório baseline com os objetivos da sua organização. Depois de alinhar seus dados e medi-los em relação aos seus direcionadores de valor, você pode começar a otimizar e, potencialmente, reduzir seus dados de ingestão. Existem duas maneiras principais de fazer isso:

* Otimize para eficiência de dados
* Otimize usando regras de descarte

Abordaremos ambos os métodos abaixo, bem como todas as configurações possíveis que cada opção oferece.

## Otimize para eficiência de dados [#optimize-efficiency]

Esta seção inclui várias maneiras de configurar o recurso New Relic para otimizar relatório de dados e ingestão:

<CollapserGroup>
  <Collapser
    id="apm-agent"
    title="Agente APM"
  >
    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      * Monitorar transação
      * Atividade de erro
      * Evento personalizado
    </Callout>

    O volume de dados gerado pelo agente APM será determinado por diversos fatores:

    * A quantidade de tráfego orgânico gerado pelo aplicativo (por exemplo, se todas as coisas forem iguais, um aplicativo sendo chamado um milhão de vezes por dia gerará mais dados do que um sendo chamado mil vezes por dia)

    * Algumas das características dos próprios dados de transação subjacentes (comprimento e complexidade dos URLs)

    * Se a aplicação está reportando consulta ao banco de dados

    * Se o aplicativo possui transação com muitos (ou algum) atributo personalizado

    * O volume de erros do aplicativo

    * Se o agente aplicativo está configurado para distributed tracing

      ### Gerenciando volume

      Embora você possa presumir que todas as chamadas para um aplicativo sejam necessárias, é possível tornar sua arquitetura geral mais eficiente. Poderá ter um perfil de usuário de microsserviços chamado a cada 10 segundos pelos seus clientes. Isso ajuda a reduzir a latência se algumas informações do usuário forem atualizadas por outros clientes. Porém, você tem a opção de reduzir a frequência das chamadas para este serviço para cada minuto, por exemplo.

      ### Atributo personalizado

      Qualquer [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/) adicionado usando uma chamada para uma API APM [`addCustomParameter`](https://developer.newrelic.com/collect-data/custom-attributes/) adicionará um atributo adicional à carga útil da transação. Muitas vezes são úteis, mas à medida que as coisas mudam, os dados podem tornar-se menos valiosos ou até obsoletos.

      O agente Java captura o seguinte `request.headers` por padrão:

    * `request.headers.referer`

    * `request.headers.accept`

    * `request.headers.contentLength`

    * `request.headers.host`

    * `request.headers.userAgent`

      Os desenvolvedores também podem usar `addCustomParameter` para capturar mais informações usando cabeçalhos mais detalhados.

      Para obter um exemplo da configuração avançada disponível em relação ao APM, consulte nossa [documentação do agente Java](/docs/apm/agents/java-agent/attributes/java-agent-attributes/#requestparams)

      ### Evento de erro

      É possível reduzir o volume de dados descobrindo como o APM tratará os erros. Por exemplo, pode haver um erro inofensivo, mas de grande volume, que você não pode remover no momento.

      Para fazer isso, você pode usar `collect`, `ignore` ou `mark as expected` para erros. Para obter mais informações, consulte [Gerenciar erros de APM](/docs/apm/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected).

      ### Consulta ao banco de dados

      Um aspecto altamente variável da instância do APM é o número de chamadas de banco de dados e configuração de conjuntos. Para ajudar com isso, você pode controlar o quão detalhado é o monitoramento da consulta ao banco de dados. Essas consultas aparecerão na página <DNT>**Transaction traces**</DNT> .

      As alterações comuns nas configurações da consulta ao banco de dados incluem:

    * [Coletar dados brutos de consulta em vez de ofuscar ou desativar a coleta de consulta](/docs/apm/transactions/transaction-traces/configure-transaction-traces#record-sql).

    * Alterando o limite stack trace .

    * Ativando a coleta de plano de explicação de consulta.

      Para mais detalhes, consulte [a página trace da consulta ao banco de dados](/docs/apm/transactions/transaction-traces/transaction-traces-database-queries-page/#settings).

      ### Configurando limites de eventos

      Nosso APM e agente móvel têm limites de quantos eventos podem reportar por ciclo de coleta. Se não houvesse limite, um número grande o suficiente de eventos enviados poderia impactar o desempenho da sua aplicação ou do New Relic. Ao atingir o limite, o agente inicia a amostragem do evento para fornecer uma representação do evento ao longo do ciclo de coleta. Agentes diferentes têm limites diferentes.

      Eventos que com limites e sujeitos a amostragem incluem:

    * Evento personalizado relatado via API do agente (por exemplo, o `RecordCustomEvent` do agente .NET)

    * `Mobile`

    * `MobileCrash`

    * `MobileHandledException`

    * `MobileRequest`

    * `Span` (veja amostragem distributed tracing )

    * `Transaction`

    * `TransactionError`

      A maioria dos agentes possui opções de configuração para alterar o limite de eventos na transação amostrada. Por exemplo, o agente Java usa [`max_samples_stored`](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#ae-max_samples_stored). O valor padrão para `max_samples_stored` é `2000` e o máximo é `10000`. Este valor controla quantos eventos amostrados podem ser relatados a cada 60 segundos a partir de uma instância do agente. Para obter uma explicação completa dos limites de amostragem de eventos, consulte [limites de eventos](/docs/using-new-relic/data/understand-data/new-relic-event-limits-sampling).

      Você pode compensar o evento amostrado por meio do [operador NRQL`EXTRAPOLATE` ](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#extrapolate).

      Antes de tentar alterar a forma como a amostragem ocorre, tenha em mente o seguinte:

    * Quanto mais eventos você relatar, mais memória seu agente usará.

    * Geralmente, você pode obter os dados necessários sem aumentar o limite de relatórios de eventos do agente.

    * O limite de tamanho da carga útil é de 1 MB (10 ^ 6 bytes) (compactado), portanto, o número de eventos ainda pode ser afetado por esse limite. Para descobrir se o evento está sendo descartado, consulte o log do agente para obter uma mensagem de status `413 HTTP`.

      ### Taxa de amostragem log

      Versões mais recentes do agente de linguagem New Relic APM podem encaminhar o log diretamente para o New Relic. Às vezes, você pode querer controlar alguns limites de quão grandes podem ser os picos de registro de cada instância do agente APM.

      Para obter detalhes sobre a amostragem de log do agente APM, consulte [encaminhador de logs](#log-forwarders).

      ### Rastreamento da transação

      <Callout
        variant="IMPORTANT"
        title="Motores de crescimento"
      >
        * Número de serviços conectados
        * Número de chamadas de método de monitor por serviços conectados
      </Callout>

      No APM, [o rastreamento da transação](/docs/apm/transactions/transaction-traces/transaction-traces) registra detalhes detalhados sobre a transação da sua aplicação e chamadas de banco de dados. Você pode editar as configurações padrão para rastreamento de transação.

      Isso também é altamente configurável através da [configuração do rastreamento da transação](/docs/apm/transactions/transaction-traces/configure-transaction-traces). O nível e o modo de configurabilidade serão específicos do idioma.

      As configurações de rastreamento da transação disponíveis usando a configuração no lado do servidor serão diferentes dependendo do agente New Relic que você usar. A interface inclui descrições de cada um. As configurações na interface podem incluir:

    * Rastreamento e limite de transação

    * Registre SQL, incluindo nível de gravação e campos de entrada

    * Log SQL e limite stack trace

    * Planos e limites de consulta SQL

    * Coleta de erros, incluindo código HTTP e classe de erro

    * Consulta lenta rastreamento

    * Profiler de thread

      ### Distributed tracing

      A configuração distributed tracing tem algumas diferenças específicas do idioma. Você pode desabilitar distributed tracing conforme necessário. Este é um exemplo para o agente Java `newrelic.yml`:

      ```yml
      distributed_tracing:
          enabled: false
      ```

      Este é um exemplo de node.js para `newrelic.js`

      ```js
      distributed_tracing: {
        enabled: false
      }
      ```

      O volume de dados também varia dependendo se você está usando [o Infinite Tracing](/docs/distributed-tracing/infinite-tracing/introduction-infinite-tracing). distributed tracing padrão para o agente APM (acima) captura até 10% do seu rastreamento, mas se quiser analisar todos os seus dados e encontrar o rastreamento mais relevante, você pode configurar o Rastreamento Infinito. Esta alternativa ao distributed tracing padrão está disponível para todos os agentes de linguagem APM. Os principais parâmetros que podem gerar um pequeno aumento na ingestão mensal são:

    * Configurar o monitoramento do observador trace

    * Configurar filtro trace de atributo span

    * Configurar filtro trace aleatório
  </Collapser>

  <Collapser
    id="browser-agent"
    title="agente browser"
  >
    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      * Carregamento de página
      * Chamadas Ajax
      * Atividade de erro
    </Callout>

    Para [o Browser agente versão 1211](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) ou superior, todas as solicitações de rede feitas por uma página são registradas como evento `AjaxRequest` . Você pode usar as opções de configuração da lista de negações na página de interface de configurações do aplicativo para filtrar quais solicitações registram evento. Independentemente deste filtro, todas as solicitações da rede são capturadas como métricas e disponibilizadas na página AJAX.

    ### Usando a lista de negações

    Você pode bloquear solicitações de três maneiras:

    * Para bloquear a gravação de todos os eventos `AjaxRequest` , adicione um asterisco `*` como curinga.
    * Para bloquear a gravação do evento `AjaxRequest` em um domínio, insira apenas o nome do domínio. Exemplo: `example.com`
    * Para bloquear a gravação do evento `AjaxRequest` em um domínio e caminho específicos, insira o domínio e o caminho. Exemplo: `example.com/path`
    * O protocolo, a porta, a pesquisa e o hash de aplicação de uma URL são ignorados pela lista de negações.

      Para validar se os filtros adicionados funcionam conforme o esperado, execute uma consulta NRQL para `AjaxRequest` evento correspondente ao seu filtro.

      ### Acessando a lista de negações

      Para atualizar a lista de URLs negados que seu aplicativo filtrará na criação do evento, acesse a página da interface de configurações do aplicativo:

    1. Vá para

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
       </DNT>

       e clique em

       <DNT>
         **Browser**
       </DNT>

       .

    2. Selecione um aplicativo.

    3. Na navegação esquerda, clique em

       <DNT>
         **App settings**
       </DNT>

       .

    4. Em

       <DNT>
         **Ajax request deny list**
       </DNT>

       , adicione os filtros que deseja aplicar.

    5. Selecione

       <DNT>
         **Save application settings**
       </DNT>

       para atualizar a configuração do agente.

    6. Reimplante o agente browser reiniciando o APM do agente associado ou atualizando a instalação do browser copiar/colar.

       ### Validando

       ```sql
       FROM AjaxRequest SELECT * WHERE requestUrl LIKE `%example.com%`
       ```
  </Collapser>

  <Collapser
    id="mobile-agent"
    title="Agente móvel"
  >
    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      * Usuários ativos mensais
      * Evento de falha
      * Número de eventos por usuário
    </Callout>

    ### Android

    Todas as configurações, incluindo a chamada para invocar o agente, são chamadas no método `onCreate` da classe `MainActivity` . Para alterar as configurações, chame a configuração de uma das duas maneiras (se a configuração suportar):

    ```java
    NewRelic.disableFeature(FeatureFlag.DefaultInteractions);
    NewRelic.enableFeature(FeatureFlag.CrashReporting);
    NewRelic.withApplicationToken(NEW_RELIC_TOKEN).start(this.getApplication());
    ```

    [As configurações de análise](/docs/mobile-monitoring/new-relic-mobile-android/android-sdk-api/android-agent-configuration-feature-flags#analytics-settings) ativam ou desativam a coleta de dados de eventos. Esses eventos são relatados e usados na página <DNT>**Crash analysis**</DNT> .

    Também é possível configurar [o log do agente](/docs/mobile-monitoring/new-relic-mobile-android/android-sdk-api/android-agent-configuration-feature-flags#logging-settings-logging) para ser mais ou menos detalhado.

    ### iOS

    Assim como no Android, a configuração do iOS da New Relic permite ativar e desativar [flags de recurso](/docs/mobile-monitoring/new-relic-mobile-android/android-sdk-api/android-agent-configuration-feature-flags).

    Você pode configurar os seguintes sinalizadores de recurso:

    #### Relatório de falhas e erros

    * `NRFeatureFlag_CrashReporting`
    * `NRFeatureFlag_HandleExceptionEvents`
    * `NRFeatureFlag_CrashReporting`

    #### Distributed tracing

    * `NRFeatureFlag_DistributedTracing`

    #### O que é isso?

    * `NRFeatureFlag_DefaultInteractions`
    * `NRFeatureFlag_InteractionTracing`
    * `NRFeatureFlag_SwiftInteractionTracing`

    #### Sinalizadores de recursos de rede

    * `NRFeatureFlag_ExperimentalNetworkInstrumentation`
    * `NRFeatureFlag_NSURLSessionInstrumentation`
    * `NRFeatureFlag_NetworkRequestEvents`
    * `NRFeatureFlag_RequestErrorEvents`
    * `NRFeatureFlag_HttpResponseBodyCapture`

    Para mais detalhes, veja [flags de recurso](/docs/mobile-monitoring/new-relic-mobile-ios/ios-sdk-api/ios-agent-configuration-feature-flags).
  </Collapser>

  <Collapser
    id="infrastructure-agent"
    title="Agente de infraestrutura"
  >
    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      * Monitor de hosts e contêineres
      * Taxas de amostragem para evento principal
      * Configuração de amostra de processo
      * Atributo personalizado
      * Número e tipo de integração sem host instalado
      * Encaminhamento de configuração de logs
    </Callout>

    O [arquivo de configuração do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings) contém duas maneiras de controlar o volume de ingestão. O controle de ingestão mais importante é configurar taxas de amostragem. Existem várias configurações de taxas de amostragem distintas que você pode ajustar. Também é possível criar expressões regulares para controlar o que é coletado de determinado coletor, como `ProcessSample` e `NetworkSample`.

    ### Taxas de amostragem configuráveis

    Há diversas taxas de amostragem que você pode configurar na infraestrutura, mas essas são as mais comumente usadas.

    | Parâmetro                     | Padrão | Desativar |
    | ----------------------------- | ------ | --------- |
    | `metrics_storage_sample_rate` | 5      | -1        |
    | `metrics_process_sample_rate` | 20     | -1        |
    | `metrics_network_sample_rate` | 10     | -1        |
    | `metrics_system_sample_rate`  | 5      | -1        |
    | `metrics_nfs_sample_rate`     | 5      | -1        |

    ### Amostras de processo

    As amostras de processos costumam ser a fonte de dados de maior volume do agente de infraestrutura porque enviam informações sobre qualquer processo em execução em um host. Eles estão desativados por padrão, mas você pode ativá-los da seguinte maneira:

    ```yaml
    enable_process_metrics: true
    ```

    Isso tem o mesmo efeito que definir `metrics_process_sample_rate` como `-1`. Por padrão, os processos que usam pouca memória são excluídos da amostragem. Para obter mais informações, consulte `disable-zero-mem-process-filter`.

    Você pode controlar a quantidade de dados que envia configurando `include_matching_metrics`, que permite restringir a transmissão de dados métricos com base nos valores de métrica [atributo](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/query-infrastructure-dimensional-metrics-nrql#naming-conventions). Você inclui dados de métrica definindo valores literais ou parciais para qualquer atributo da métrica. Por exemplo, você pode optar por enviar o `host.process.cpuPercent` de todos os processos cujo `process.name` corresponde à expressão regular `^java` .

    Neste exemplo, incluímos métricas de processo usando nomes e arquivos executáveis:

    ```yaml
      include_matching_metrics:             # You can combine attributes from different metrics
        process.name:
          - regex "^java"                   # Include all processes starting with "java"
        process.executable:
          - "/usr/bin/python2"              # Include the Python 2.x executable
          - regex "\\System32\\svchost"     # Include all svchost executables
    ```

    Você também pode usar este filtro para a integração do Kubernetes:

    ```yaml
      env:
        - name: NRIA_INCLUDE_MATCHING_METRICS
          value: |
            process.name:
              - regex "^java"
            process.executable:
              - "/usr/bin/python2"
              - regex "\\System32\\svchost"
    ```

    ### Filtro de interface de rede

    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      * Monitor de número de interfaces de rede
    </Callout>

    A configuração usa um mecanismo simples de correspondência de padrões que pode procurar interfaces que começam com uma sequência específica de letras ou números seguindo qualquer um dos padrões:

    * `{name}[other characters]`
    * `[number]{name}[other characters]`, onde você especifica o nome usando a opção `index-1`

    ```yaml
    network_interface_filters:
      prefix:
        - dummy
        - lo
      index-1:
        - tun
    ```

    Filtros de interface de rede padrão para Linux:

    * Interfaces de rede que começam com `dummy`, `lo`, `vmnet`, `sit`, `tun`, `tap` ou `veth`
    * Interfaces de rede que contêm `tun` ou `tap`

    Filtros de interface de rede padrão para Windows:

    * Interfaces de rede que começam com `Loop`, `isatap` ou `Local`

    Para substituir os padrões, inclua seu próprio filtro no arquivo de configuração:

    ```yaml
    network_interface_filters:
      prefix:
        - dummy
        - lo
      index-1:
        - tun
    ```

    ### Atributo personalizado

    [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes) são pares de valores principais semelhantes aos tags de outras ferramentas utilizadas para anotar os dados do agente de infraestrutura. Você pode usar esses metadados para criar conjuntos de filtros, agrupar seus resultados e anotar seus dados. Por exemplo, você pode indicar o ambiente de uma máquina (preparação ou produção), o serviço que uma máquina hospeda (serviço de login, por exemplo) ou a equipe responsável por essa máquina.

    Exemplo de atributo personalizado de `newrelic.yml`

    ```yaml
    custom_attributes:
      environment: production
      service: billing
      team: alpha-team
    ```

    <Callout variant="tip">
      Se os dados não estiverem bem organizados ou se tornarem obsoletos de alguma forma, você deve considerar simplificá-los.
    </Callout>
  </Collapser>

  <Collapser
    id="k8s-integration"
    title="Integração Kubernetes"
  >
    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      * Número de monitores `pods` e `containers`
      * Frequência e número de métricas do estado do Kube coletadas
      * Log gerado por cluster
    </Callout>

    Sistemas complexos e descentralizados como o Kubernetes têm o potencial de gerar muita telemetria em um curto espaço de tempo. Existem algumas boas abordagens para gerenciar a ingestão de dados no Kubernetes. Isso será muito simples se você estiver usando observabilidade como código em sua implantação K8s.

    É altamente recomendável que você instale este dashboard de análise de ingestão de dados do Kubernetes antes de tomar qualquer decisão sobre a redução da ingestão. Para obter esse dashboard, consulte o [início rápido de integração de infraestrutura](https://newrelic.com/instant-observability/infrastructure-integrations-data-analysis/8e31a0ae-81c0-4df0-a119-a0ada9ec16fa).

    ### Intervalo de raspagem

    Dependendo dos seus objetivos de observabilidade, você pode considerar ajustar o intervalo de raspagem, que tem um tempo padrão de 15 segundos. O cluster do Kubernetes Explorer é atualizado apenas a cada 45 segundos. Se o seu uso principal dos dados do Kubernetes for para dar suporte às visualizações KCE, você pode considerar alterar o intervalo de coleta para 20s. Mudar dos 15 para os 20 anos pode ter um impacto substancial.

    Para obter mais detalhes sobre como gerenciar isso, consulte nossos [documentos de intervalo de raspagem de integração do Helm](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#scrape-interval).

    ### Filtrando namespace

    A integração do Kubernetes versão 3 e superior permite filtrar quais namespaces são eliminados, rotulando-os. Por padrão, todos os namespaces são eliminados.

    Usamos o `namespaceSelector` da mesma forma que o Kubernetes. Para incluir apenas o namespace que corresponde a um rótulo, altere o `namespaceSelector` adicionando o seguinte ao seu `values-newrelic.yaml`, na seção `newrelic-infrastructure` :

    ```yaml
    common:
      config:
        namespaceSelector:
          matchLabels:
            key1 : "value1"
    ```

    Neste exemplo, apenas o namespace com o rótulo `newrelic.com/scrape` definido como `true` será copiado:

    ```yaml
    global:
      licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
      cluster: _K8S_CLUSTER_NAME_

    # ... Other settings as shown above

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
      # ... Other settings as shown above
      common:
        config:
          namespaceSelector:
            matchLabels:
              newrelic.com/scrape: "true"
    ```

    Você também pode usar expressões de correspondência do Kubernetes para incluir ou excluir namespace. Os operadores válidos são:

    * Em
    * Não em
    * Existe
    * Não existe

    A estrutura geral da seção `matchExpressions` é uma ou mais das seguintes linhas:

    ```yaml
    {key: VALUE, operator: OPERATOR, values: LIST_OF_VALUES}
    ```

    Aqui está um exemplo completo:

    ```yaml
    common:
      config:
        namespaceSelector:
          matchExpressions:
          - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
    ```

    <Callout variant="tip">
      Você pode incluir mais de uma linha na seção `matchExpresions` e as expressões serão concatenadas. Tudo deve ser verdadeiro para que o filtro seja aplicado. Rótulos e expressões de correspondência são explicados com mais detalhes [aqui](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
    </Callout>

    Neste exemplo, o namespace com o rótulo `newrelic.com/scrape` definido como `false` será excluído:

    ```yaml
    global:
      licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
      cluster: _K8S_CLUSTER_NAME_

    # ... Other settings as shown above

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
      # ... Other settings as shown above
      common:
        config:
          namespaceSelector:
            matchExpressions:
            - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
    ```

    Veja uma lista completa das configurações disponíveis no [arquivo README do gráfico](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure).

    #### Como posso saber quais namespaces estão excluídos? [#excluded-namespaces]

    Todos os namespaces dentro do cluster são listados graças à amostra `K8sNamespace` . O atributo `nrFiltered` determina se os dados relacionados ao namespace serão copiados.

    Use esta consulta para saber qual namespace está sendo monitorado:

    ```sql
    FROM K8sNamespaceSample SELECT displayName, nrFiltered
    WHERE clusterName = INSERT_NAME_OF_CLUSTER SINCE
    2 MINUTES AGO
    ```

    #### Quais dados estão sendo descartados do namespace excluído? [#namespaces-discarded-data]

    Os exemplos a seguir não estarão disponíveis para o namespace excluído:

    * `K8sContainerSample`
    * `K8sDaemonsetSample`
    * `K8sDeploymentSample`
    * `K8sEndpointSample`
    * `K8sHpaSample`
    * `K8sPodSample`
    * `K8sReplicasetSample`
    * `K8sServiceSample`
    * `K8sStatefulsetSample`
    * `K8sVolumeSample`

    ### Métrica de estado do Kubernetes

    O cluster do Kubernetes Explorer requer apenas a seguinte métrica de estado do kube (KSM):

    * Dados do contêiner

    * Dados de cluster

    * Dados do nó

    * Dados do pod

    * Dados de volume

    * Dados do servidor API

      <sup>
        1
      </sup>

    * Dados do gerenciador do controlador

      <sup>
        1
      </sup>

    * Dados ETCD

      <sup>
        1
      </sup>

    * Dados do agendador

      <sup>
        1
      </sup>

    <sup>1</sup> Não coletado em um ambiente Kubernetes gerenciado (EKS, GKE, AKS etc.)

    Você pode considerar desabilitar alguns dos seguintes:

    * Dados do DaemonSet

    * Dados de implantação

    * Dados de endpoint

    * Dados de namespace

    * Dados do ReplicaSet

      <sup>
        2
      </sup>

    * Dados de serviço

    * Dados StatefulSet

    <sup>2</sup> Usado no alerta padrão: “ReplicaSet não possui a quantidade desejada de pod”

    #### Exemplo de atualização de métrica de estado em manifesto (Deployment)

    ```shell
    [spec]
      [template]
        [spec]
          [containers]
            [name=kube-state-metrics]
            [args]
            #- --collectors=daemonsets
            #- --collectors=deployments
            #- --collectors=endpoints
            #- --collectors=namespaces
            #- --collectors=replicasets
            #- --collectors=services
            #- --collectors=statefulsets
    ```

    _Exemplo de atualização de métrica de estado em manifesto (ClusterRole)_

    ```shell
    [rules]
    # - apiGroups: ["extensions", "apps"]
    #   resources:
    #   - daemonsets
    #   verbs: ["list", "watch"]

    # - apiGroups: ["extensions", "apps"]
    #   resources:
    #   - deployments
    #   verbs: ["list", "watch"]

    # - apiGroups: [""]
    #   resources:
    #   - endpoints
    #   verbs: ["list", "watch"]

    # - apiGroups: [""]
    #   resources:
    #   - namespaces
    #   verbs: ["list", "watch"]

    # - apiGroups: ["extensions", "apps"]
    #   resources:
    #   - replicasets
    #   verbs: ["list", "watch"]

    # - apiGroups: [""]
    #   resources:
    #   - services
    #   verbs: ["list", "watch"]

    # - apiGroups: ["apps"]
    #   resources:
    #   - statefulsets
    #   verbs: ["list", "watch"]
    ```

    ### Configurar `lowDataMode` no gráfico `nri-bundle`

    Nossos gráficos Helm oferecem suporte à opção de reduzir a quantidade de dados ingeridos ao custo de descartar informações detalhadas. Para ativá-lo, defina `global.lowDataMode` como `true` no gráfico `nri-bundle` .

    `lowDataMode` afeta três componentes específicos do gráfico `nri-bundle` :

    1. Aumente o intervalo do agente de infraestrutura de `15` para `30` segundos.
    2. A integração do Prometheus OpenMetrics excluirá algumas métricas conforme indicado no documento Helm abaixo.
    3. Os detalhes dos rótulos e anotações serão eliminados do log.

    Você pode encontrar mais detalhes sobre essa configuração em nosso [documento do Helm](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#reducedataingest).
  </Collapser>

  <Collapser
    id="on-host-integrations"
    title="Integração sem host"
  >
    A integração no host da New Relic representa um conjunto diversificado de integração para serviços de terceiros, como Postgresql, MySQL, Kafka, RabbitMQ, etc. É impossível fornecer todas as técnicas de otimização no escopo deste documento, mas estas técnicas geralmente se aplicam:

    * Gerenciar taxa de amostragem

    * Gerencie as partes da configuração que podem aumentar ou diminuir a amplitude da coleção

    * Gerencie as partes da configuração que permitem consultas personalizadas

    * Gerencie o atributo personalizado do agente de infraestrutura para aplicar a todos os dados de integração no host.

      Usaremos alguns exemplos para demonstrar.

      ### [Integração PostgreSQL](/docs/infrastructure/host-integrations/host-integrations-list/postgresql-monitoring-integration/#example-postgresSQL-collection-config)

      <Callout
        variant="IMPORTANT"
        title="Motores de crescimento"
      >
        * Monitor de número de tabelas
        * Monitor de número de índices
      </Callout>

      A configuração de integração no host do PostgreSQL fornece estas configurações ajustáveis que podem ajudar a gerenciar o volume de dados:

    * `interval`: O padrão é 15s

    * `COLLECTION_LIST`: lista de tabelas a serem monitor (use ALL para monitor ALL)

    * `COLLECT_DB_LOCK_METRICS`: Colete `dblock` métrica

    * `PGBOUNCER`: Colete `pgbouncer` métrica

    * `COLLECT_BLOAT_METRICS`: Colete métricas de inchaço

    * `METRICS`: Defina como `true` para coletar apenas métricas

    * `INVENTORY`: defina como `true` para ativar apenas a coleta de inventário

    * `CUSTOM_METRICS_CONFIG`: Arquivo de configuração contendo consulta de coleção personalizada

      <DNT>
        **Sample config:**
      </DNT>

      ```yaml
      integrations:
        - name: nri-postgresql
          env:
            USERNAME: postgres
            PASSWORD: pass
            HOSTNAME: psql-sample.localnet
            PORT: 6432
            DATABASE: postgres
            COLLECT_DB_LOCK_METRICS: false
            COLLECTION_LIST: '{"postgres":{"public":{"pg_table1":["pg_index1","pg_index2"],"pg_table2":[]}}}'
            TIMEOUT:  10
          interval: 15s
          labels:
            env: production
            role: postgresql
          inventory_source: config/postgresql
      ```

      ### [Kafka integração](/docs/infrastructure/host-integrations/host-integrations-list/kafka-monitoring-integration/)

      <Callout
        variant="IMPORTANT"
        title="Motores de crescimento"
      >
        * Número de corretores no cluster
        * Número de tópicos no cluster
      </Callout>

      A configuração de integração no host do Kafka fornece estas configurações ajustáveis que podem ajudar a gerenciar o volume de dados:

    * `interval`: O padrão é 15s

    * `TOPIC_MODE`: determina quantos tópicos coletamos. As opções são `all`, `none`, `list` ou `regex`.

    * `METRICS`: Defina como `true` para coletar apenas métricas

    * `INVENTORY`: defina como `true` para ativar apenas a coleta de inventário

    * `TOPIC_LIST`: matriz JSON de nomes de tópicos a serem monitor. Somente terá efeito se topic_mode estiver definido como list.

    * `COLLECT_TOPIC_SIZE`: Colete a métrica Tamanho do tópico. As opções são `true` ou `false`, o padrão é `false`.

    * `COLLECT_TOPIC_OFFSET`:Coleta o deslocamento do tópico métrico. As opções são `true` ou `false`, o padrão é `false`.

      A coleta de métricas em nível de tópico, especialmente compensações, pode exigir muitos recursos para ser coletada e pode ter um impacto no volume de dados. A ingestão de um cluster pode aumentar em uma ordem de magnitude simplesmente pela adição de novos tópicos Kafka ao cluster.

      ### [Integração MongoDB](/docs/infrastructure/host-integrations/host-integrations-list/mongodb-monitoring-integration)

      <Callout
        variant="IMPORTANT"
        title="Motores de crescimento"
      >
        * Número de monitor do banco de dados
      </Callout>

      A integração do MongoDB fornece estas configurações ajustáveis que podem ajudar a gerenciar o volume de dados:

    * `interval`: O padrão é 15s

    * `METRICS`: Defina como `true` para coletar apenas métricas

    * `INVENTORY`: defina como `true` para ativar apenas a coleta de inventário

    * `FILTERS`: um mapa JSON de nomes de bancos de dados para uma matriz de nomes de coleções. Se estiver vazio, o padrão é todos os bancos de dados e coleções.

      Para qualquer integração on-host que você usar, é importante estar ciente de parâmetros como `FILTERS` onde o padrão é coletar métricas de todo o banco de dados. Esta é uma área onde você pode usar suas prioridades de monitoramento para agilizar os dados coletados.

      <DNT>
        **Example configuration with different intervals for METRIC and INVENTORY:**
      </DNT>

      ```yaml
      integrations:
        - name: nri-mongodb
          env:
            METRICS: true
            CLUSTER_NAME: my_cluster
            HOST: localhost
            PORT: 27017
            USERNAME: mongodb_user
            PASSWORD: mongodb_password
          interval: 15s
          labels:
            environment: production

        - name: nri-mongodb
          env:
            INVENTORY: true
            CLUSTER_NAME: my_cluster
            HOST: localhost
            PORT: 27017
            USERNAME: mongodb_user
            PASSWORD: mongodb_password
          interval: 60s
          labels:
            environment: production
          inventory_source: config/mongodb
      ```

      ### [Integração Elasticsearch](/docs/infrastructure/host-integrations/host-integrations-list/elasticsearch-monitoring-integration)

      <Callout
        variant="IMPORTANT"
        title="Motores de crescimento"
      >
        * Número de nós no cluster
        * Número de índices no cluster
      </Callout>

      A integração do Elasticsearch fornece estas configurações ajustáveis que podem ajudar a gerenciar o volume de dados:

    * `interval`: O padrão é 15s

    * `METRICS`: Defina como `true` para coletar apenas métricas

    * `INVENTORY`: defina como `true` para ativar apenas a coleta de inventário

    * `COLLECT_INDICES`: Sinaliza se deve ou não coletar índices métricos.

    * `COLLECT_PRIMARIES`: Sinaliza se deve ou não coletar métrica primária.

    * `INDICES_REGEX`: Filtre quais índices são coletados.

    * `MASTER_ONLY`: Colete métricas de cluster apenas no mestre eleito.

      <DNT>
        **Example configuration with different intervals for `METRICS` and `INVENTORY`:**
      </DNT>

      ```yaml
      integrations:
        - name: nri-elasticsearch
          env:
            METRICS: true
            HOSTNAME: localhost
            PORT: 9200
            USERNAME: elasticsearch_user
            PASSWORD: elasticsearch_password
            REMOTE_MONITORING: true
          interval: 15s
          labels:
            environment: production

        - name: nri-elasticsearch
          env:
            INVENTORY: true
            HOSTNAME: localhost
            PORT: 9200
            USERNAME: elasticsearch_user
            PASSWORD: elasticsearch_password
            CONFIG_PATH: /etc/elasticsearch/elasticsearch.yml
          interval: 60s
          labels:
            environment: production
          inventory_source: config/elasticsearch
      ```

      ### [JMX integração](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-integration)

      <Callout
        variant="IMPORTANT"
        title="Motores de crescimento"
      >
        * Métrica listada em `COLLECTION_CONFIG`
      </Callout>

      A integração JMX é inerentemente genérica. Ele permite que você extraia métricas de qualquer instância JMX. Você tem controle sobre o que é coletado por essa integração. Em algumas empresas, as métricas JMX dos ambientes New Relic representam uma proporção relativamente alta de todos os dados coletados.

      A integração JMX fornece estas configurações ajustáveis que podem ajudar a gerenciar o volume de dados:

    * `interval`: O padrão é 15s

    * `METRICS`: Defina como `true` para coletar apenas métricas

    * `INVENTORY`: defina como `true` para ativar apenas a coleta de inventário

    * `METRIC_LIMIT`: Número de métricas que podem ser recolhidas por entidade. Se este limite for ultrapassado a entidade não será reportada. Um limite de 0 não implica nenhum limite.

    * `LOCAL_ENTITY`: Coleta todas as métricas da entidade local. Usado somente quando monitoramento localhost.

    * `COLLECTION_FILES`: uma lista separada por vírgulas de caminhos completos para os arquivos de definição da coleção métrica. Para instalação no host, o arquivo de coleta de métricas JVM padrão está em `/etc/newrelic-infra/integrations.d/jvm-metrics.yml`.

    * `COLLECTION_CONFIG`: configuração da coleção métrica como JSON.

      São as entradas `COLLECTION_CONFIG` que mais controlam a quantidade de dados ingeridos. Compreender o modelo JMX que você está copiando o ajudará a otimizar.

      _`COLLECTION_CONFIG` exemplo para métrica JVM_

      ```java
      COLLECTION_CONFIG='{"collect":[{"domain":"java.lang","event_type":"JVMSample","beans":[{"query":"type=GarbageCollector,name=*","attributes":["CollectionCount","CollectionTime"]},{"query":"type=Memory","attributes":["HeapMemoryUsage.Committed","HeapMemoryUsage.Init","HeapMemoryUsage.Max","HeapMemoryUsage.Used","NonHeapMemoryUsage.Committed","NonHeapMemoryUsage.Init","NonHeapMemoryUsage.Max","NonHeapMemoryUsage.Used"]},{"query":"type=Threading","attributes":["ThreadCount","TotalStartedThreadCount"]},{"query":"type=ClassLoading","attributes":["LoadedClassCount"]},{"query":"type=Compilation","attributes":["TotalCompilationTime"]}]}]}'
      ```

      A omissão de qualquer entrada dessa configuração, como `NonHeapMemoryUsage.Init` , terá um impacto tangível no volume geral de dados coletados.

      _`COLLECTION_CONFIG` exemplo para métrica do Tomcat_

      ```java
      COLLECTION_CONFIG={"collect":[{"domain":"Catalina","event_type":"TomcatSample","beans":[{"query":"type=UtilityExecutor","attributes":["completedTaskCount"]}]}]}
      ```

      ### Outra integração sem host

      Existem muitas outras integrações no host com opções de configuração que irão ajudá-lo a otimizar a coleta. Alguns comumente usados são:

    * [NGINX](/docs/infrastructure/host-integrations/host-integrations-list/nginx/nginx-integration/)

    * [MySQL](/docs/infrastructure/host-integrations/host-integrations-list/mySQL/mysql-integration)

    * [Redis](/docs/infrastructure/host-integrations/host-integrations-list/redis-monitoring-integration)

    * [Apache](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration)

    * [RabbitMQ](/docs/infrastructure/host-integrations/host-integrations-list/rabbitmq-monitoring-integration)

      Este é um bom [ponto de partida](/docs/infrastructure/infrastructure-integrations/get-started/introduction-infrastructure-integrations#on-host) para aprender mais.
  </Collapser>

  <Collapser
    id="network-performance-monitoring"
    title="Monitoramento de desempenho de rede (NPM)"
  >
    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      Monitorar dispositivos acionados por:

      * dispositivos configurados fisicamente
      * Escopo CIDR na seção de descoberta
      * armadilhas configuradas
    </Callout>

    Esta seção se concentra no monitoramento de desempenho de rede da New Relic, que depende do agente `ktranslate` da Kentik. Este agente é bastante sofisticado e é importante compreender totalmente os [documentos de configuração avançada](/docs/network-performance-monitoring/advanced/advanced-config) antes de grandes esforços de otimização. As opções de configuração incluem:

    * `mibs_enabled`: matriz de todos os MIBs ativos que a imagem docker do KTranslate irá pesquisar. Esta lista será gerada automaticamente durante a descoberta se o atributo `discovery_add_mibs` for `true`. Os MIBs não listados aqui não serão pesquisados em nenhum dispositivo no arquivo de configuração. Você pode especificar uma tabela SNMP diretamente em um arquivo MIB usando a sintaxe `MIB-NAME.tableName` . Exemplo: `HOST-RESOURCES-MIB.hrProcessorTable`.

    * `user_tags`: valor par principal atributo para dar mais contexto ao dispositivo. tag neste nível será aplicada a todos os dispositivos no arquivo de configuração.

    * `devices`: Seção listando dispositivos a serem monitorados quanto ao fluxo

    * `traps`: configura IP e portas para serem monitorados com traps SNMP (o padrão é `127.0.0.1:1162`)

    * `discovery`: configura como o endpoint pode ser descoberto. Nesta seção, o seguinte parâmetro fará o máximo para aumentar ou diminuir o escopo:

      * `cidrs`: matriz de intervalos IP alvo em [notação CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation).
      * `ports`: matriz de portas de destino a serem verificadas durante a pesquisa SNMP.
      * `debug`: indica se o log de nível de depuração deve ser ativado durante a descoberta. Por padrão, está definido como `false`
      * `default_communities`: matriz de cadeias de caracteres da comunidade SNMPv1/v2c a serem verificadas durante a pesquisa SNMP. Essa matriz é avaliada em ordem e a descoberta aceita a primeira comunidade que passa.

      Para oferecer suporte à filtragem de dados que não criam valor para suas necessidades de observabilidade, você pode definir o mapa de atributos `global.match_attributes.{}` e/ou `devices.<deviceName>.match_attributes.{}` .

      Isso fornecerá filtragem no nível do KTranslate, antes de enviar dados para o New Relic, proporcionando controle granular sobre o monitoramento de coisas como interfaces.

      Para obter mais detalhes, consulte [Configuração de monitoramento de desempenho de rede](/docs/network-performance-monitoring/advanced/advanced-config/#match_attributes-attribute).
  </Collapser>

  <Collapser
    id="log-forwarders"
    title="Transportador de logs"
  >
    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      * Registro encaminhado
      * Tamanho médio dos registros de log de encaminhamento
    </Callout>

    Log representam uma das fontes mais flexíveis de telemetria, pois normalmente roteamos o log por meio de uma camada de encaminhamento dedicada com suas próprias regras de roteamento e transformação. Como há uma variedade de forwarders, vamos nos concentrar nos mais usados:

    * Agente de linguagem APM (versões recentes)

    * Fluentd

    * Fluentbit

    * Agente New Relic Infrastructure (Fluentbit integrado)

    * Logstash

      ### Amostragem de log do agente APM

      Versões recentes do agente de idiomas da New Relic podem encaminhar log diretamente para a New Relic. Talvez você queira controlar alguns limites de quão grandes podem ser os picos de registro de cada instância do agente APM.

      É possível ativar a amostragem com a variável de ambiente `NEW_RELIC_APPLICATION_LOGGING_FORWARDING_MAX_SAMPLES_STORED` e configurá-la fornecendo o número máximo de logs que a fila de criação de log do APM do agente armazenará. Ele opera com base em uma fila de prioridade personalizada e dá prioridade a todas as mensagens do log. log que ocorrem dentro de uma transação obtém a prioridade da transação.

      A fila de logs é classificada com base na prioridade e na chegada do log . A prioridade mais alta vai primeiro e, se necessário, o log mais recente tem prioridade. Os logs são adicionados individualmente à fila (mesmo aqueles em uma transação) e, ao atingir o limite, o log no final da fila é empurrado para fora em favor do log mais recente.

      Na seção de recursos abaixo, há um [dashboard de início rápido](https://onenr.io/0Bj3BlEZkRX) que ajuda a rastrear o volume de log de maneira simples. O volume log de rastreamento permitirá que você ajuste ou desative a taxa de amostragem para atender às suas necessidades de observabilidade.

      ### Configurando filtros no Fluentd ou Fluentbit

      A maioria dos encaminhadores gerais fornece um [fluxo de trabalho de roteamento](https://docs.fluentd.org/configuration/routing-examples) bastante completo que inclui filtragem e transformação. Nosso agente de infraestrutura fornece padrões muito simples para filtrar logs indesejados.

      Expressão regular para filtragem de registros. Compatível apenas com as fontes `tail`, `systemd`, `syslog` e `tcp` (somente com formato `none`). Este campo funciona de forma semelhante a `grep -E` em sistemas Unix. Por exemplo, para um determinado arquivo que está sendo capturado, você pode filtrar registros contendo `WARN` ou `ERROR` usando:

      ```yaml
        - name: only-records-with-warn-and-error
          file: /var/log/logFile.log
          pattern: WARN|ERROR
      ```

      Se você tiver configurações pré-escritas do Fluentd para Fluentbit que fazem filtragem ou análise valiosa, você pode importá-las para nossa configuração de registro. Para fazer isso, use os parâmetros `config_file` e `parsers` em qualquer arquivo `.yaml` na sua pasta `logging.d` :

    * `config_file`: caminho para um arquivo de configuração existente do Fluent Bit. Qualquer fonte sobreposta resulta em mensagens duplicadas no

      <InlinePopover type="logs"/>

      da New Relic.

    * `parsers_file`: caminho para um arquivo de analisadores Fluent Bit existente.

      Os seguintes nomes de analisadores são reservados: `rfc3164`, `rfc3164-local` e `rfc5424`.

      Aprender como injetar atributo, ou tag, em seu log em seu pipeline de dados e realizar transformações pode ajudar na eliminação de recursos downstream usando as regras de eliminação do New Relic. Ao aumentar seu log com metadados sobre a origem, podemos tomar decisões centralizadas e reversíveis sobre o que colocar no backend. No mínimo, certifique-se de que os seguintes atributos estejam presentes em seu log de alguma forma:

    * Equipe

    * Ambiente (desenvolvimento/estágio/produção)

    * Aplicativo

    * Data center

    * Nível de registro

      Abaixo estão alguns recursos detalhados de roteamento e filtragem:

    * [Filtros comuns e padrões de roteamento no Fluentd](https://docs.fluentd.org/configuration/routing-examples)

    * [Pipeline de dados Fluentbit](https://docs.fluentbit.io/manual/concepts/data-pipeline)

    * [Encaminhando log com o agente New Relic Infrastructure](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/)

      ### Ajustando o conjunto de atributos padrão do agente de infraestrutura

      O agente de infraestrutura adiciona alguns atributos por padrão, incluindo qualquer tag personalizada adicionada ao host. É possível que sua configuração traga muito mais do que isso, incluindo um grande número de tags AWS, que aparecem no New Relic com o formato `aws.[attributename]`. Esses atributos são importantes, por isso é altamente recomendável que você avalie suas necessidades de visualização, análise e alertas em relação a quaisquer alterações planejadas na configuração. Por exemplo, o log de um cluster do Kubernetes provavelmente não será útil sem metadados como:

    * `cluster_name`

    * `pod_name`

    * `container_name`

    * `node_name`
  </Collapser>

  <Collapser
    id="prometheus-metrics-sources"
    title="Fontes métricas do Prometheus"
  >
    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      * Número de métricas exportadas de apps
      * Número de métricas transferidas via gravação remota ou POMI
    </Callout>

    A New Relic oferece duas opções principais para enviar métricas do Prometheus para a New Relic. As melhores práticas para gerenciar a ingestão métrica concentram-se principalmente na segunda opção - a integração Prometheus OpenMetrics (POMI) - porque este componente foi criado pela New Relic.

    ### Opção 1: [integração de gravação remota do Prometheus](/docs/integrations/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration)

    Para opções de configuração de raspagem do servidor Prometheus, consulte [os documentos de configuração do Prometheus](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config). Essas configurações de raspagem determinam quais métricas são coletadas pelo servidor Prometheus. Ao configurar o parâmetro [`remote_write`](/docs/integrations/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration) , você pode gravar a métrica coletada no banco de dados New Relic (NRDB) por meio da API métrica New Relic.

    ### Opção 2: [integração Prometheus OpenMetrics (POMI)](/docs/integrations/prometheus-integrations/install-configure-openmetrics/install-update-or-uninstall-your-prometheus-openmetrics-integration)

    POMI é uma integração autônoma que extrai métricas de endpoints Prometheus descobertos dinamicamente e estáticos. O POMI então envia esses dados para o NRDB por meio da API métrica New Relic. Essa integração é ideal para clientes que não executam atualmente o servidor Prometheus.

    #### POMI: etiqueta de raspar

    O POMI descobrirá qualquer endpoint do Prometheus contendo o rótulo ou anotação `prometheus.io/scrape=true` por padrão. Este pode ser um grande número de endpoints e portanto, um grande número de métricas ingeridas, dependendo do que está implantado no cluster.

    É sugerido que você modifique o parâmetro `scrape_enabled_label` para algo personalizado (por exemplo, `newrelic/scrape`) e que você rotule seletivamente o endpoint do Prometheus quando a ingestão de dados for de extrema preocupação.

    Para obter a configuração de referência mais recente, consulte [nri-prometheus-latest.yaml](https://download.newrelic.com/infrastructure_agent/integrations/kubernetes/nri-prometheus-latest.yaml).

    <DNT>
      **POMI config parameter:**
    </DNT>

    ```yaml
    # Label used to identify scrapable targets. 
    # Defaults to "prometheus.io/scrape"
      scrape_enabled_label: "prometheus.io/scrape"
    ```

    O POMI descobrirá qualquer endpoint do Prometheus exposto no nível do nó por padrão. Isso normalmente inclui métricas provenientes do Kubelet e do cAdvisor. Se você estiver executando o New Relic Kubernetes Daemonset, é importante definir `require_scrape_enabled_label_for_nodes: true` para que o POMI não colete métricas duplicadas.

    Para o destino do endpoint pelo New Relic Kubernetes Daemonset, consulte [nosso README do Kubernetes no GitHub](https://github.com/newrelic/nri-kubernetes/blob/main/README.md).

    #### POMI: etiqueta de raspagem para nós

    O POMI descobrirá qualquer endpoint do Prometheus exposto no nível do nó por padrão. Isso normalmente inclui métricas provenientes do Kubelet e do cAdvisor. Se você estiver executando o New Relic Kubernetes Daemonset, é importante definir `require_scrape_enabled_label_for_nodes: true` para que o POMI não colete métricas duplicadas.

    Para o destino do endpoint pelo New Relic Kubernetes Daemonset, consulte [nosso README do Kubernetes no GitHub](https://github.com/newrelic/nri-kubernetes/blob/main/README.md).

    _Parâmetro de configuração POMI_

    ```yaml
    # Whether k8s nodes need to be labeled to be scraped or not. 
    # Defaults to false.
      require_scrape_enabled_label_for_nodes: false
    ```

    #### POMI: coexistindo com `nri-kubernetes`

    [A integração do Kubernetes](/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration) da New Relic coleta uma [série de métricas](/docs/integrations/kubernetes-integration/understand-use-data/find-use-your-kubernetes-data#metrics) prontas para uso. Porém, não coleta todas as métricas possíveis disponíveis de um cluster do Kubernetes.

    Na configuração do POMI, você verá uma seção semelhante a esta que irá <DNT>**disable**</DNT> coleta de métricas para um subconjunto de métricas que a integração do New Relic Kubernetes já está coletando de <DNT>**Kube State Metrics**</DNT>.

    Também é muito importante definir `require_scrape_enabled_label_for_node: true` para que as métricas do Kubelet e do cAdvisor não sejam duplicadas.

    <DNT>
      **POMI config parameters:**
    </DNT>

    ```yaml
      transformations:
        - description: "Uncomment if running New Relic Kubernetes integration"
          ignore_metrics:
            - prefixes:
              - kube_daemonset_
              - kube_deployment_
              - kube_endpoint_
              - kube_namespace_
              - kube_node_
              - kube_persistentvolume_
              - kube_persistentvolumeclaim_
              - kube_pod_
              - kube_replicaset_
              - kube_service_
              - kube_statefulset_

    ```

    #### POMI: configurações de solicitação/limite

    Ao executar o POMI, é recomendado aplicar os seguintes [limites de recursos](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/) para cluster que gera aproximadamente 500 mil DPM:

    * Limite de CPU: 1 núcleo (1000m)
    * Limite de memória: 1Gb 1024 (1G)

    Você deve definir a solicitação de recursos para CPU e memória para fornecer ao POMI recursos suficientes do cluster. Definir isso para algo extremamente baixo (por exemplo cpu: 50m) pode resultar no consumo de recursos do cluster por "vizinhos barulhentos".

    <DNT>
      **POMI config parameter:**
    </DNT>

    ```yaml
    spec:
      serviceAccountName: nri-prometheus
      containers:
      - name: nri-prometheus
        image: newrelic/nri-prometheus:2.2.0
        resources:
          requests:
            memory: 512Mi
            cpu: 500m
          limits:
            memory: 1G
            cpu: 1000m
    ```

    ### POMI: estimando DPM e cardinalidade

    Embora a cardinalidade não esteja associada diretamente à ingestão faturável por GB, a New Relic mantém certos limites de taxa de cardinalidade e pontos de dados por minuto. Ser capaz de visualizar a cardinalidade e o DPM de um cluster Prometheus pode ser muito importante.

    <Callout variant="tip">
      As contas New Relic têm um limite de 1 milhão de DPM e 1 milhão de cardinalidade, mas você pode solicitar até 15 milhões de DPM e 15 milhões de cardinalidade. Para solicitar alterações, entre em contato com seu representante de conta New Relic. Para mais informações, consulte [limites da API métrica](/docs/data-apis/ingest-apis/metric-api/metric-api-limits-restricted-attributes).
    </Callout>

    Se você já estiver executando o Prometheus Server, poderá executar estimativas de DPM e cardinalidade antes de ativar o POMI ou `remote_write`.

    <DNT>
      **Data points per minute (DPM):**
    </DNT>

    ```promql
    rate(prometheus_tsdb_head_samples_appended_total[10m]) * 60
    ```

    <DNT>
      **Top 20 metrics (highest cardinality):**
    </DNT>

    ```promql
    topk(20, count by (<DNT>**name**</DNT>, job)({__name__=~".+"}))
    ```
  </Collapser>

  <Collapser
    id="cloud-integration"
    title="Integração na nuvem"
  >
    <Callout
      variant="IMPORTANT"
      title="Motores de crescimento"
    >
      * Quantidade de métricas exportadas por integração
      * Frequência de sondagem (para integração baseada em sondagem)
    </Callout>

    Algumas integrações na nuvem da New Relic obtêm dados da API dos provedores de nuvem. Com esta implementação, os dados são coletados da API de monitoramento, como AWS CloudWatch, Azure Monitor e GCP Stackdriver, e os metadados de inventário são coletados da API dos serviços específicos.

    Outras integrações na nuvem obtêm seus dados de métricas de streaming (ou métricas "pushed") que são enviadas por meio de um serviço de streaming como o AWS Kinesis.

    ### Polling integração baseada em API

    Se você deseja reportar mais ou menos dados da sua integração na nuvem, ou se precisa controlar o uso da API dos provedores de nuvem para evitar atingir a taxa limite e os limites de otimização em sua conta de nuvem, você pode alterar as configurações para modificar a quantidade de dados que eles relatam. Os dois controles principais são:

    * [Alterar frequência de votação](/docs/infrastructure/infrastructure-integrations/cloud-integrations/configure-polling-frequency-data-collection-cloud-integrations/#polling)

    * [Alterar quais dados são relatados](/docs/infrastructure/infrastructure-integrations/cloud-integrations/configure-polling-frequency-data-collection-cloud-integrations/#filter-data)

      Exemplos de motivos comerciais para querer alterar a frequência das pesquisas incluem:

    * <DNT>
        **Billing**
      </DNT>

      : se precisar gerenciar sua fatura do AWS CloudWatch, talvez você queira diminuir a frequência de pesquisa. Antes de fazer isso, certifique-se de que quaisquer condições de alerta definidas para sua integração na nuvem não sejam afetadas por esta redução.

    * <DNT>
        **New services**
      </DNT>

      : se você estiver implantando um novo serviço ou configuração e quiser coletar dados com mais frequência, poderá aumentar temporariamente a frequência de pesquisa.

      <Callout variant="caution">
        Alterar as definições de configuração da sua integração pode afetar a condição do alerta e as tendências do gráfico.
      </Callout>

      Para obter mais detalhes, consulte [Configurar sondagem](/docs/infrastructure/infrastructure-integrations/cloud-integrations/configure-polling-frequency-data-collection-cloud-integrations).

      ### Métrica de "streaming" ou "push"

      Cada vez mais a integração na nuvem está oferecendo a opção de enviar dados por meio de um [serviço de streaming](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream) em vez de usar a pesquisa de API, o que reduz drasticamente a latência. Um problema que alguns usuários observaram é que não é tão fácil controlar o volume porque não é possível configurar a taxa de amostragem.

      As regras da New Relic para descartar dados são a principal forma de filtrar métricas de streaming com volume muito alto. No entanto, há algumas coisas que você pode fazer por parte do provedor de nuvem para ajudar a limitar o volume do fluxo.

      Por exemplo, na AWS é possível usar chaves de condição para [limitar o acesso a namespaces CloudWatch\*](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-namespace.html).

      A política a seguir limita o usuário a publicar métricas apenas no namespace denominado `MyCustomNamespace`:

      ```json
      {
          "Version": "2012-10-17",
          "Statement": {
              "Effect": "Allow",
              "Resource": "*",
              "Action": "cloudwatch:PutMetricData",
              "Condition": {
                  "StringEquals": {
                      "cloudwatch:namespace": "MyCustomNamespace"
                  }
              }
          }
      }
      ```

      A política a seguir permite ao usuário publicar métricas em qualquer namespace, exceto `CustomNamespace2`:

      ```json
      {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Effect": "Allow",
                  "Resource": "*",
                  "Action": "cloudwatch:PutMetricData"
              },
              {
                  "Effect": "Deny",
                  "Resource": "*",
                  "Action": "cloudwatch:PutMetricData",
                  "Condition": {
                      "StringEquals": {
                          "cloudwatch:namespace": "CustomNamespace2"
                      }
                  }
              }
          ]
      }
      ```
  </Collapser>
</CollapserGroup>

## Otimize com regras de descarte [#optimize-with-drop-rules]

Uma regra simples para entender o que você pode fazer com regras de descarte é: <DNT>**If you can query it you can drop it.**</DNT> As regras de filtro de descarte ajudam você a atingir vários objetivos importantes:

* Reduza custos armazenando apenas o log relevante para sua conta.
* Proteja a privacidade e a segurança removendo informações de identificação pessoal (PII).
* Reduza o ruído removendo eventos e atributos irrelevantes.

<Callout variant="tip">
  Ao criar regras de descarte, você é responsável por garantir que as regras identifiquem e descartem com precisão os dados que atendem às condições que você estabeleceu. Você também é responsável por monitorar a regra, bem como pelos dados que você divulgar à New Relic. Sempre teste e reteste sua consulta e, após instalar a regra de drop, certifique-se de que ela funciona conforme o esperado. Criar um dashboard para monitor seus dados antes e depois da queda ajudará.
</Callout>

Aqui estão algumas orientações para usar regras de descarte para otimizar a ingestão de dados para ferramentas específicas:

<CollapserGroup>
  <Collapser
    id="logs"
    title="Registro"
  >
    Todas as regras de descarte do New Relic são implementadas pelo mesmo modelo de dados backend e API. Nosso gerenciamento de logs fornece uma UI poderosa que facilita muito a criação e monitor de regras de descarte.

    Anteriormente nesta série de tutoriais, abordamos a priorização da telemetria executando alguns exercícios para mostrar maneiras pelas quais poderíamos descontinuar determinados dados. Vamos revisitar este exemplo:

    ```
    Omit debug logs (knowing they can be turned on if there is an issue) (saves 5%)
    ```

    #### Método 1: [interfacelog](/docs/logs/ui-data/drop-data-drop-filter-rules)

    * Identifique o log de nosso interesse usando um filtro na interface log : `level: DEBUG`.

    * Certifique-se de encontrar o log que queremos descartar.

    * Verifique algumas sintaxes alternativas, como `level:debug` e `log_level:Debug`. Essas variações são comuns.

    * Em

      <DNT>
        **Manage data**
      </DNT>

      , clique em

      <DNT>
        **Drop filters**
      </DNT>

      e crie e ative um filtro chamado 'Descartar registro de depuração'.

    * Verifique se a regra funciona.

    #### Método 2: [Nossa API NerdGraph](/docs/data-apis/manage-data/drop-data-using-nerdgraph/)

    * Crie a consulta NRQL relevante:

      ```sql
      SELECT count(*) FROM Log WHERE `level` = 'DEBUG'
      ```

    * Certifique-se de encontrar o log que você deseja descartar.

    * Verifique variações no nome e valor do atributo (`Debug` vs `DEBUG`).

    * Execute a seguinte instrução NerdGraph e certifique-se de que funciona:

    ```graphql
    mutation {
        nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
            {
                action: DROP_DATA
                nrql: "SELECT * FROM Log WHERE `level` = 'DEBUG'"
                description: "Drops DEBUG logs.  Disable if needed for troubleshooting."
            }
        ])
        {
            successes { id }
            failures {
                submitted { nrql }
                error { reason description }
            }
        }
    }
    ```
  </Collapser>

  <Collapser
    id="process-samples"
    title="Amostras de processo"
  >
    Vamos implementar a recomendação: `Drop process sample data in DEV environments`.

    * Crie a consulta relevante:

      ```sql
      SELECT * FROM ProcessSample WHERE `env` = 'DEV'
      ```

    * Certifique-se de encontrar as amostras de processo que queremos descartar.

    * Verifique outras variações de `env` como `ENV` e `Environment`.

    * Verifique vários `DEV` como `Dev` e `Development`.

    * Use nossa API NerdGraph para executar a seguinte instrução e certifique-se de que funciona:

      ```graphql
      mutation {
          nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
              {
                  action: DROP_DATA
                  nrql: "SELECT * FROM ProcessSample WHERE `env` = 'DEV'"
                  description: "Drops ProcessSample from development environments"
              }
          ])
          {
              successes { id }
              failures {
                  submitted { nrql }
                  error { reason description }
              }
          }
      }
      ```
  </Collapser>

  <Collapser
    id="cloud-metrics"
    title="Métrica de nuvem"
  >
    Muitas vezes você pode reduzir o uso de dados reduzindo os dados com cobertura redundante. Por exemplo: em um ambiente onde você tem a integração AWS RDS em execução, bem como uma das integrações New Relic no host que monitor SQL banco de dados como `nri-mysql` ou `nri-postgresql`, você pode descartar algumas métricas sobrepostas .

    Por exemplo, você pode executar uma consulta como esta:

    ```sql
    FROM Metric select count(*) where metricName like 'aws.rds%' facet metricName limit max
    ```

    Isso mostrará todos os valores `metricName` que correspondem ao padrão.

    Você pode ver pelos resultados que há um grande volume de métricas do padrão `aws.rds.cpu%`. Você pode abandoná-los porque tem outra instrumentação para eles:

    * Crie a consulta relevante:

      ```sql
      FROM Metric select * where metricName like 'aws.rds.cpu%' facet metricName limit max since 1 day ago
      ```

    * Certifique-se de encontrar as amostras de processo que você deseja descartar.

    * Use a API NerdGraph para executar a seguinte instrução e certifique-se de que funciona:

      ```graphql
      mutation {
          nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
              {
                  action: DROP_DATA
                  nrql: "FROM Metric select * where metricName like 'aws.rds.cpu%' facet metricName limit max since 1 day ago"
                  description: "Drops rds cpu related metrics"
              }
          ])
          {
              successes { id }
              failures {
                  submitted { nrql }
                  error { reason description }
              }
          }
      }
      ```
  </Collapser>

  <Collapser
    id="drop-specific-attributes"
    title="Soltar atributo específico"
  >
    Uma coisa importante sobre regras de descarte é que você pode configurar uma regra que descarte um atributo específico, mas mantenha a integridade do restante dos dados. Use isso para remover dados privados do NRDB ou para descartar atributos excessivamente grandes, como rastreamento de pilha ou grandes pedaços de JSON em registros de log excessivamente grandes.

    Para definir essas regras de descarte, altere o campo `action` para `DROP_ATTRIBUTES` em vez de `DROP_DATA`.

    ```graphql
    mutation {
        nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
            {
                action: DROP_ATTRIBUTES
                nrql: "SELECT stack_trace, json_data FROM Log where appName='myApp'"
                description: "Drops large fields from logs for myApp"
            }
        ])
        {
            successes { id }
            failures {
                submitted { nrql }
                error { reason description }
            }
        }
    }
    ```
  </Collapser>

  <Collapser
    id="drop-random-sample-of-events"
    title="Soltar amostra aleatória do evento"
  >
    <Callout variant="caution">
      Use essa abordagem com cuidado e somente em situações em que não haja outras opções, pois ela pode alterar os resultados dos seus dados. No entanto, para eventos com um tamanho de amostra enorme, você poderá ficar satisfeito com apenas uma parte dos seus dados, desde que entenda as consequências.
    </Callout>

    Neste exemplo, você pode aproveitar a distribuição relativa de determinados IDs trace para aproximar a amostragem aleatória. Você pode usar o operador `rlike` para verificar os valores iniciais do atributo `trace.id` de um intervalo. O exemplo a seguir poderia eliminar cerca de 25% dos períodos:

    ```sql
    SELECT * FROM Span WHERE trace.id rlike r'.*[0-3]' and appName = 'myApp'
    ```

    Expressões úteis incluem:

    * `r'.*0'` aproxima 6,25%

    * `r'.*[0-1]'` aproxima 12,5%

    * `r'.*[0-2]'` aproxima 18,75%

    * `r'.*[0-3]'` aproxima 25,0%

      Depois de ficar sem dígitos, você pode usar letras, por exemplo:

    * `r'.*[a0-9]'` aproxima 68,75%

    * `r'.*[a-b0-9]'` aproxima 75,0%

      Aqui está um exemplo de uma mutação completa:

      ```graphql
      mutation {
          nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
              {
                  action: DROP_DATA
                  nrql: "SELECT * FROM Span WHERE trace.id rlike r'.*[0-3]' and appName = 'myApp'"
                  description: "Drops approximately 25% of spans for myApp"
              }
          ])
          {
              successes { id }
              failures {
                  submitted { nrql }
                  error { reason description }
              }
          }
      }
      ```

      <Callout variant="tip">
        Como `trace.id`s são números hexadecimais, cada caractere de `trace.id` é um valor de `0123456789abcdef`. Cada caractere adicionado ao padrão `RLIKE` corresponderá a 1/16 adicional das linhas no evento span, assumindo que os caracteres finais tenham distribuição uniforme. Se você adicionar letras além de F que não sejam usadas em hexadecimal, os dígitos adicionados não afetarão a porcentagem correspondente.
      </Callout>
  </Collapser>

  <Collapser
    id="other-events-and-metrics"
    title="Outros eventos e métricas"
  >
    Os exemplos anteriores devem mostrar tudo o que você precisa saber para usar essas técnicas em qualquer outro evento ou métrica no NRDB. Lembre-se: se você puder consultá-lo, poderá abandoná-lo. Entre em contato conosco se tiver dúvidas sobre a maneira precisa de estruturar uma consulta para uma regra de eliminação.
  </Collapser>
</CollapserGroup>

### Qual é o próximo? [#whats-next]

Com a etapa de otimização concluída, você concluiu o tutorial de otimização de dados de telemetria! Se sua conta tiver um executivo de contas, você poderá contatá-lo para obter mais orientações sobre o próximo passo e garantir que você esteja otimizado.

Se você é novo na plataforma New Relic, pode visitar nossa outra série de tutoriais para saber mais sobre como otimizar seu sistema usando nossa plataforma:

* [Respondendo a interrupções de serviço](/docs/tutorial-errors/respond-outages/)
* [Gerenciando grandes quantidades de log](/docs/tutorial-large-logs/get-started-managing-large-logs/)
* [Preparando-se para o pico de demanda](/docs/tutorial-peak-demand/get-started/)
* [Criação e gerenciamento de alerta](/docs/tutorial-create-alerts/create-new-relic-alerts/)
