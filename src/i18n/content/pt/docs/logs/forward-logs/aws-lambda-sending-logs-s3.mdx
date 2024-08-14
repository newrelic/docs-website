---
title: AWS Lambda para envio de log do S3
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure New Relic logging for AWS Lambda with S3, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Você pode enviar seus [buckets do Amazon S3](https://aws.amazon.com/s3/) para New Relic usando nossa função do Lambda AWS , `NewRelic-log-ingestion-s3`. Isso pode ser facilmente implantado no AWS Serverless Application Repository.

O encaminhamento de registros do bucket do S3 para New Relic proporcionará recursos <InlinePopover type="logs"/>melhorados para coletar, processar, explorar, consultar e alertar sobre seus dados log .

## Instale a função do Lambda [#install-function]

Para instalar a função do Lambda para encaminhar seu log S3 para New Relic:

1. Certifique-se de ter um

   <InlinePopover type="licenseKey"/>

   .

2. Abra o [AWS Serverless Application Repository](https://serverlessrepo.aws.amazon.com/applications) em seu Browser.

3. Certifique-se de que o Lambda esteja instalado na mesma região que o bucket S3.

   <img
     title="AWS Lambda - Select region"
     alt="AWS Lambda - Select region"
     src="/images/serverless_screenshot-crop_AWS-Lambda-select-region.webp"
   />

4. Procure por `newrelic` e marque

   <DNT>
     **Show apps that create custom IAM roles or resource policies**
   </DNT>

   para encontrar `NewRelic-log-ingestion-s3`.

5. Clique nos detalhes `NewRelic-log-ingestion-s3` e clique em

   <DNT>
     **Deploy**
   </DNT>

   .

6. Role até

   <DNT>
     **Application settings**
   </DNT>

   e insira sua New Relic

   <InlinePopover type="licenseKey"/>

   .

7. Aproveite os recursos de análise de log do New Relic especificando `logtype` como uma variável de ambiente para a função do Lambda. Para obter mais informações, consulte [Conjuntos de regras de análise integrados](/docs/logs/new-relic-logs/ui-data/new-relic-logs-parsing-built-rules-custom-parsing#built-in-rules).

8. Confirme se o aplicativo cria funções personalizadas do IAM e clique em

   <DNT>
     **Deploy.**
   </DNT>

9. Uma vez implantada a função, [crie um trigger Lambda](#create-trigger).

### Instalação manual usando framework Serverless [#serverless-install]

Você pode instalar e configurar manualmente o Lambda a partir do terminal usando a [Serverless](https://www.npmjs.com/package/serverless) framework. Se você não estiver no Linux, instale primeiro [o Docker](https://docs.docker.com/get-docker/) e mantenha-o funcionando.

```bash
# Clone the repository
git clone https://github.com/newrelic/aws_s3_log_ingestion_lambda.git
# Install serverless package and the repo dependencies
npm install -g serverless
npm install
# Set the New Relic License Key env variable
export LICENSE_KEY=YOUR_NEWRELIC_LICENSE_KEY
# Set the logtype (optional)
export LOG_TYPE=YOUR_LOGTYPE
# Set the S3 bucket name
export S3_BUCKET_NAME=YOUR_S3_BUCKET_NAME
# The S3 subdirectory (optional)
export S3_PREFIX=YOUR_S3_SUBDIRECTORY
# Choose a name for your new Serverless Framework service
export SERVICE_NAME=YOUR_SERVICE_NAME
# Install the serverless-python-requirements plugin
serverless plugin install -n serverless-python-requirements
# Package the application files and dependencies into a deployment-ready file for deployment
serverless package
# Deploy the function, specifying the same region as your S3 bucket listed above
serverless deploy --region YOUR_AWS_REGION
```

## Crie um gatilho Lambda na AWS [#create-trigger]

Para fazer o streaming do seu log para o New Relic, anexe um gatilho ao Lambda:

1. No menu do lado esquerdo, clique em

   <DNT>
     **Functions**
   </DNT>

   .

2. Encontre e selecione a função `NewRelic-s3-log-ingestion` criada anteriormente.

3. Em

   <DNT>
     **Designer**
   </DNT>

   , clique em

   <DNT>
     **Add Triggers**
   </DNT>

   e selecione

   <DNT>
     **S3**
   </DNT>

   no dropdown.

4. Selecione o bucket S3 que contém o log que você deseja enviar para o New Relic.

5. Opcionalmente, configure um [prefixo e um sufixo](https://aws.amazon.com/blogs/compute/amazon-s3-adds-prefix-and-suffix-filters-for-lambda-function-triggering/). Isto é útil se o seu log estiver em um subdiretório.

6. Marque a caixa de seleção

   <DNT>
     **Enable trigger**
   </DNT>

   e depois

   <DNT>
     **Add**
   </DNT>

   o acionador.

Para testar a função do Lambda, faça upload de um novo arquivo de log para o bucket S3 que você configurou nas configurações da função e depois [visualize seus dados log ](#find-data).

<InstallFeedback/>

## Limitações [#limitations]

* O tamanho máximo do arquivo de log suportado é 35 MB descompactado.
* O tamanho máximo suportado da linha de log individual é 0,25 MB.
* Arquivos de log criptografados não são suportados.

## Ver dados log [#find-data]

Se tudo estiver configurado corretamente e seus dados estiverem sendo coletados, você deverá ver os dados de log em ambos os locais:

* Nossa [interface de registros](https://one.newrelic.com/launcher/logger.log-launcher)
* Nossas ferramentas para executar [a consultaNRQL ](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data).

Por exemplo, você pode executar uma consulta como esta:

```sql
SELECT * FROM Log
```

## Resolução de problemas [#troubleshooting]

Se você encontrar problemas ao configurar seu direcionador de logs, tente estas dicas de resolução de problemas.

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="config-overlap"
    title="Sobreposição de configuração"
  >
    Ao implantar a função do Lambda, pode ocorrer este erro:

    ```
    An error occurred when creating the trigger: Configurations overlap. Configurations on the same bucket cannot share a common event type.
    ```

    Para resolver esse problema, certifique-se de que o bucket não tenha outro evento do mesmo tipo. Seu bucket S3 não pode ter múltiplas instâncias de <DNT>**All object create events**</DNT>.
  </Collapser>

  <Collapser
    className="freq-link"
    id="cannot-connect"
    title="Não é possível conectar-se ao Docker daemon"
  >
    Ao utilizar Serverless para implantar a função do Lambda da sua máquina, pode ocorrer este erro:

    ```
    Error: docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
    ```

    Isso pode significar que Docker não está em execução ou que não foi configurado corretamente. Certifique-se de que Docker esteja rodando em sua máquina ao implantar a função do Lambda usando Serverless.
  </Collapser>

  <Collapser
    className="freq-link"
    id="no-data"
    title="Nenhum dado aparece"
  >
    Se nenhum dado aparecer após você ativar nossos recursos de gerenciamento de logs, siga nossos [procedimentos padrão de resolução de problemas de log](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).
  </Collapser>
</CollapserGroup>

## Qual é o próximo? [#what-next]

Explore [os dados de registro em sua plataforma](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenha visibilidade mais profunda dos dados de desempenho do seu aplicativo e da sua plataforma encaminhando seu log com nossos recursos [logs contextualizados](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configure [o alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [consulte seus dados](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) e [crie dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desativar encaminhamento de logs [#disable]

Para desabilitar os recursos de encaminhamento de logs, siga os procedimentos padrão na [documentação do Amazon S3](https://aws.amazon.com/s3/). Você não precisa fazer mais nada no New Relic.
