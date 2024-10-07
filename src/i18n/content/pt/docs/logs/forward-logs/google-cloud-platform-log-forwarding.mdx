---
title: Encaminhar registro do Google Cloud Platform
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - GCP
  - Dataflow
metaDescription: 'Configure New Relic logging for a Google Cloud Platform Pub/Sub topic, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Oferecemos suporte a dois métodos diferentes para encaminhar seu registro de um tópico Google Cloud Platform Pub/Sub para New Relic.

## Selecione uma opção [#gcp-options]

O seguinte pode ajudá-lo a decidir qual opção é melhor para suas necessidades de negócios.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Opções de encaminhamento de logs do GCP
      </th>

      <th>
        Considerações
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        API sem cabeçalho
      </td>

      <td>
        * Mais adequado para volumes de log baixos, pois executa uma chamada de API para cada registro de log enviado.
        * Não acarreta nenhum custo extra para sua assinatura do GCP.
        * Se o volume de log aumentar, esta solução poderá atingir os limites de cota da sua conta New Relic.
      </td>
    </tr>

    <tr>
      <td>
        Trabalho de fluxo de dados
      </td>

      <td>
        * Mais adequado para volumes de log maiores, pois agrupa registros de log em lotes antes de enviá-los para o New Relic.
        * Reduz o número de chamadas de API e permite reduzir o uso da sua cota.
        * Pode haver custos extras na sua assinatura do GCP devido à execução de um job do Dataflow em suas instalações.
      </td>
    </tr>
  </tbody>
</table>

## Use API sem cabeçalho [#gcp-headerless-api]

Para enviar seu log do GCP para New Relic usando nossa API sem cabeçalho:

<CollapserGroup>
  <Collapser
    id="ingest-url"
    title="1. Gere um URL de ingestão do GCP Pub/Sub."
  >
    Comece criando um URL de ingestão para seu tópico Pub/Sub do GCP:

    1. Vá para a [interface<DNT>**Integrations & Agents**</DNT> ](https://one.newrelic.com/marketplace), clique em <DNT>**Logging**</DNT> e clique em <DNT>**Google Cloud Platform**</DNT>.

    2. Selecione a conta New Relic para a qual deseja encaminhar o registro e clique em <DNT>**Continue**</DNT>.

    3. Opcional: Configure metadados (pares de attribute-value) a serem incluídos em cada evento de log enviado para a URL de ingestão que você gerará na próxima etapa.

    4. Clique em <DNT>**Generate URL**</DNT>.

    5. Copie o <DNT>**ingest URL**</DNT> recém-gerado e guarde-o em um local seguro.

       Você usará seu novo URL de ingestão para configurar um tópico do Pub/Sub que envia log para New Relic.
  </Collapser>

  <Collapser
    id="create-gcp-topic"
    title="2. Crie um tópico Pub/Sub do GCP."
  >
    Em seguida, você criará o tópico Pub/Sub do GCP que seu URL de ingestão usará.

    <img
      title="Create GCP topic"
      alt="Create GCP topic"
      src="/images/logs_screenshot-full_GCP-logs-create-topic.webp"
    />

    1. Navegue até o [console Pub/Sub do GCP](https://console.cloud.google.com/cloudpubsub/topic/list).

    2. Clique em

       <DNT>
         **Create Topic**
       </DNT>

       .

    3. Insira um

       <DNT>
         **Topic ID**
       </DNT>

       significativo e configure outras opções conforme necessário.

    4. Clique em

       <DNT>
         **Create Topic**
       </DNT>

       .
  </Collapser>

  <Collapser
    id="configure-gcp-log-forwarding"
    title="3. Prepare o tópico Pub/Sub do GCP para encaminhar o log para New Relic."
  >
    Depois de criar seu tópico do Pub/Sub, crie uma assinatura para ele.

    <img
      title="Create GCP Pub/Sub topic subscription"
      alt="Create GCP Pub/Sub topic subscription"
      src="/images/logs_screenshot-crop_GCP-create-subscription.webp"
    />

    1. Retorne ao [console do Pub/Sub do GCP](https://console.cloud.google.com/cloudpubsub/topic/list).

    2. Clique no [tópico do Pub/Sub](#create-gcp-topic) que você criou anteriormente.

    3. Role para baixo e selecione a guia <DNT>**Subscriptions**</DNT> , clique em <DNT>**Create Subscription**</DNT> e selecione <DNT>**Create a simple subscription**</DNT>.

       <img
         title="Select GCP Pub/Sub topic subscription type"
         alt="Select GCP Pub/Sub topic subscription type"
         src="/images/logs_screenshot-crop_GCP-create-subscription-type.webp"
       />

    4. Insira um <DNT>**Subscription ID**</DNT>. Em seguida, em <DNT>**Delivery Type**</DNT>, selecione <DNT>**Push**</DNT>.

    5. No campo <DNT>**Endpoint URL**</DNT> , cole o [URL de ingestão](#ingest-url) gerado anteriormente.

    6. Defina as configurações restantes conforme necessário e clique em <DNT>**Create**</DNT>.
  </Collapser>

  <Collapser
    id="forward-logs"
    title="4. Crie um coletor de roteamento para encaminhar o log para New Relic."
  >
    Para concluir a configuração, crie um coletor de roteamento para seu tópico Pub/Sub do GCP que encaminhará seu log para o New Relic.

    <img
      title="Create GCP Pub/Sub logs router sink"
      alt="Create GCP Pub/Sub logs router sink"
      src="/images/logs_screenshot-crop_GCP-create-sink.webp"
    />

    1. Navegue até o [console do roteador de log do GCP](https://console.cloud.google.com/logs/router).

    2. Clique em

       <DNT>
         **Create Sink**
       </DNT>

       .

    3. Insira

       <DNT>
         **Sink name**
       </DNT>

       e

       <DNT>
         **Sink description**
       </DNT>

       e clique em

       <DNT>
         **Next**
       </DNT>

       .

    4. Em

       <DNT>
         **Select sink service**
       </DNT>

       , selecione

       <DNT>
         **Cloud Pub/Sub topic**
       </DNT>

       e selecione o [tópico do Pub/Sub](#create-gcp-topic) que você criou anteriormente.

    5. Configure os filtros restantes conforme necessário e clique em

       <DNT>
         **Create sink**
       </DNT>

       para concluir a configuração.
  </Collapser>
</CollapserGroup>

## Usar o job do Dataflow [#gcp-dataflow]

Para enviar seu log do GCP para o New Relic usando um job do Dataflow, você usará nosso modelo do Dataflow. Antes de começar, certifique-se de ter as seguintes ferramentas em seu computador local:

* Um terminal Unix para Linux ou macOS
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [JavaJDK8](https://adoptopenjdk.net/index.html)
* [Apache Maven 3.2 ou superior](https://maven.apache.org/). Vimos versões anteriores falharem durante o processo de compilação.
* O [SDK do Google Cloud](https://cloud.google.com/sdk/docs/install), que inclui ferramentas de linha de comando `gcloud` e `gsutil`

<CollapserGroup>
  <Collapser
    id="dataflow-login-gcp"
    title="1. log em sua conta Google Cloud Platform ."
  >
    Execute o seguinte comando e siga o prompt para log no GCP e selecionar seu projeto de nuvem:

    ```bash
    gcloud init
    ```

    Usando o assistente, você selecionará um projeto de nuvem para usar e poderá, opcionalmente, selecionar uma região e zona de computador padrão para os recursos criados usando `gcloud` ou `gsutil`. Não presumiremos um projeto, local ou região padrão para os comandos a seguir.
  </Collapser>

  <Collapser
    id="dataflow-repo"
    title="2. Clone o repositório DataflowTemplates GitHub."
  >
    1. Clone o repositório DataflowTemplates GitHub usando o seguinte comando:

       ```bash
       git clone https://github.com/newrelic-forks/DataflowTemplates.git
       ```

    2. Digite o diretório que você acabou de criar:

       ```bash
       cd DataflowTemplates
       ```

       Em seguida, continue com a próxima seção para executar comandos adicionais.
  </Collapser>

  <Collapser
    id="dataflow-configuration"
    title="3. Compile e execute o encaminhador do Dataflow."
  >
    Para definir a configuração necessária para compilar e executar o encaminhador do Dataflow, execute os comandos a seguir no diretório `DataflowTemplates` . Os únicos valores obrigatórios são:

    * `PROJECT_ID`

    * `BUCKET_NAME`

    * `NR_LICENSE_KEY`

    * `INPUT_SUBSCRIPTION_NAME`

      Você pode deixar os outros valores padrão como estão.

      ```ini
      # The Google Cloud Platform project id where your logs are and where the Dataflow log forwarder will run
      PROJECT_ID=<your_project_id>
      # Temporary bucket that will store intermediary files as a result of compiling the Dataflow template. Its name must be unique.
      BUCKET_NAME=<a_nonexisting_gcs_bucket_name>
      # New Relic license key
      NR_LICENSE_KEY=<your_newrelic_license_key>
      # Input PubSub subscription to read logs from
      INPUT_SUBSCRIPTION_NAME=<your_pubsub_input_subscription_name>

      # Region where the created resources will be placed
      REGION=us-west1
      # Service account used to execute the Dataflow template
      SERVICE_ACCOUNT_NAME=nr-dataflow-forwarder-sa
      # File name where the service account credentials will be stored
      SERVICE_ACCOUNT_KEY_FILENAME=service-account-key.json
      # The name your Dataflow log forwarder job will have
      JOB_NAME=nr-log-forwarder
      ```
  </Collapser>

  <Collapser
    id="dataflow-bucket"
    title="4. Crie um bucket do GCP para o modelo do Dataflow."
  >
    Crie um bucket no GCP para armazenar o modelo do Dataflow gerado executando o seguinte comando:

    ```bash
    gsutil mb -p ${PROJECT_ID} -l ${REGION} gs://${BUCKET_NAME}
    ```
  </Collapser>

  <Collapser
    id="dataflow-account"
    title="5. Crie uma conta de serviço."
  >
    Execute os seguintes comandos:

    1. Crie a conta de serviço:

       ```bash
       gcloud iam service-accounts create ${SERVICE_ACCOUNT_NAME}
       ```

    2. Conceda permissões à conta de serviço:

       ```bash
       gcloud projects add-iam-policy-binding ${PROJECT_ID} --member="serviceAccount:${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" --role="roles/owner"
       ```

    3. Gere o arquivo de chave da conta de serviço:

       ```bash
       gcloud iam service-accounts keys create ${SERVICE_ACCOUNT_KEY_FILENAME} --iam-account=${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com
       ```

    4. Faça referência ao arquivo de chave da sua conta de serviço usando a variável de ambiente `GOOGLE_APPLICATION_CREDENTIALS` , pois ela será usada pelos comandos subsequentes:

       ```bash
       export GOOGLE_APPLICATION_CREDENTIALS=${SERVICE_ACCOUNT_KEY_FILENAME}
       ```
  </Collapser>

  <Collapser
    id="dataflow-compile"
    title="6. Compile e publique o modelo PubsubToNewRelic."
  >
    Execute o seguinte comando:

    ```bash
    mvn compile exec:java \
        -Dexec.mainClass=com.google.cloud.teleport.templates.PubsubToNewRelic \
        -Dexec.cleanupDaemonThreads=false \
        -Dexec.args=" \
            --project=${PROJECT_ID} \
            --region=${REGION} \
            --enableStreamingEngine \
            --stagingLocation=gs://${BUCKET_NAME}/staging/ \
            --gcpTempLocation=gs://${BUCKET_NAME}/temp/ \
            --templateLocation=gs://${BUCKET_NAME}/template/PubsubToNewRelic \
            --runner=DataflowRunner \
        "
    ```
  </Collapser>

  <Collapser
    id="dataflow-job"
    title="7. Execute o modelo como um job do Dataflow."
  >
    Execute o seguinte comando para iniciar o envio do log usando um job do Dataflow que lê seu tópico do Pub/Sub:

    ```bash
    gcloud dataflow jobs run ${JOB_NAME} \
        --gcs-location=gs://${BUCKET_NAME}/template/PubsubToNewRelic \
        --region=${REGION} \
        --parameters "inputSubscription=projects/${PROJECT_ID}/subscriptions/${INPUT_SUBSCRIPTION_NAME},licenseKey=${NR_LICENSE_KEY}"
    ```

    Este comando requer apenas estes dois valores:

    * A entrada PubSub assinatura usada para ler a mensagem do log

    * A New Relic

      <InlinePopover type="licenseKey"/>

      usada para enviar seu registro

    <CollapserGroup>
      <Collapser
        id="eu-customers-gcp-dataflow"
        title="Contas da Região Europeia"
      >
        As contas europeias também devem adicionar o parâmetro `logsApiUrl` com `https://log-api.eu.newrelic.com/log/v1` como valor.

        ```bash
        gcloud dataflow jobs run ${JOB_NAME} \
            --gcs-location=gs://${BUCKET_NAME}/template/PubsubToNewRelic \
            --region=${REGION} \
            --parameters "inputSubscription=projects/${PROJECT_ID}/subscriptions/${INPUT_SUBSCRIPTION_NAME},licenseKey=${NR_LICENSE_KEY},logsApiUrl=https://log-api.eu.newrelic.com/log/v1"
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="tip">
      Para outros valores, o comando usa definições de configuração padrão que você pode [personalizar ainda mais conforme necessário](#dataflow-config).
    </Callout>
  </Collapser>

  <Collapser
    id="dataflow-config"
    title="8. Opcional: ajuste seu trabalho de direcionamento de logs do Dataflow."
  >
    Aqui está uma referência das opções disponíveis que você pode usar para ajustar ainda mais a execução do job de direcionamento de logs do Dataflow.

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Parâmetro de configuração
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `licenseKey` <DNT>**Required.**</DNT>
          </td>

          <td>
            New Relic <InlinePopover type="licenseKey"/>.
          </td>
        </tr>

        <tr>
          <td>
            `inputSubscription` <DNT>**Required.**</DNT>
          </td>

          <td>
            A assinatura do Cloud Pub/Sub usada para consumir o log. Use este formato:

            ```
            projects/<project-id>/subscriptions/<subscription-name>
            ```
          </td>
        </tr>

        <tr>
          <td>
            `logsApiUrl`
          </td>

          <td>
            New RelicURL da para a log API. Isso roteia a partir da VPC onde o pipeline do Dataflow é executado.

            Padrão:

            ```
            https://log-api.newrelic.com/log/v1
            ```

            Região da Europa:

            ```
            https://log-api.eu.newrelic.com/log/v1
            ```
          </td>
        </tr>

        <tr>
          <td>
            `batchCount`
          </td>

          <td>
            Número máximo de registros de log a serem agregados em um lote antes de enviá-los para a New Relic em uma única solicitação HTTP POST.

            Padrão: `100`
          </td>
        </tr>

        <tr>
          <td>
            `flushDelay`
          </td>

          <td>
            Número de segundos para aguardar por log adicional (até `batchCount`) desde o recebimento do último registro log em lote não completo, antes de liberá-los para o New Relic.

            Padrão: `2`
          </td>
        </tr>

        <tr>
          <td>
            `parallelism`
          </td>

          <td>
            Número máximo de solicitações paralelas.

            Padrão: `1`
          </td>
        </tr>

        <tr>
          <td>
            `disableCertificateValidation`
          </td>

          <td>
            Desative a validação do certificado SSL.

            Padrão: `false`
          </td>
        </tr>

        <tr>
          <td>
            `useCompression`
          </td>

          <td>
            Comprimir (em GZIP) a carga enviada para New Relic de log do API.

            Padrão: `true`
          </td>
        </tr>

        <tr>
          <td>
            `tokenKMSEncryptionKey`
          </td>

          <td>
            Chave de criptografia KMS para o token. Use este formato:

            ```
            projects/{gcp_project}/locations/{key_region}/keyRings/{key_ring}/cryptoKeys/{kms_key_name}
            ```

            Padrão: `null`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Qual é o próximo? [#what-next]

Explore os dados de registro em sua plataforma com nossa [interface de registros](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenha visibilidade mais profunda dos dados de desempenho do seu aplicativo e da sua plataforma encaminhando seu log com nossos recursos [logs contextualizados](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configure [o alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [consulte seus dados](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) e [crie dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desativar encaminhamento de logs [#disable]

Para desativar os recursos de encaminhamento de logs, siga os procedimentos padrão na [documentação Google Cloud Platform ](https://cloud.google.com/sdk/docs/). Você não precisa fazer mais nada no New Relic.
