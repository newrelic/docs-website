---
title: AWS Lambda Extensions telemetria API integração
tags:
  - Integrations
  - Amazon integrations
  - Lambda Extension
freshnessValidatedDate: never
translationType: machine
---

<DNT>
  **Work in progress**
</DNT>

A extensão de telemetria New Relic AWS Lambda permite ao usuário enviar dados de telemetria diretamente de sua função do Lambda para o New Relic, sem a necessidade de configurar gatilhos ou conectar o Amazon CloudWatch. Envie seu evento de log, métrica e trace adicionando a extensão como camada e obtenha insights de seus dados instantaneamente na plataforma New Relic .

## instalação

1. No Console AWS, vá para <DNT>**Lambda > Functions**</DNT> e escolha a função da qual você deseja ingerir dados.

2. Selecione <DNT>**Layers > Add Layer**</DNT>.

3. Em <DNT>**Choose a layer**</DNT> selecione a opção <DNT>**Specify a layer by providing the ARN**</DNT> .

4. Vá para [https://layers.newrelic-external.com/](https://layers.newrelic-external.com/), pesquise AwsLambdaExtension em sua região para encontrar o `ARN` com a versão da camada mais recente e cole-o no campo `ARN` novamente em seu console AWS. Se você não conseguir encontrar o AwsLambdaExtension, use o seguinte padrão para obter `arn`:

   `arn:aws:lambda:{your-region}:533243300146:layer:AwsLambdaExtension:{version}`

Para obter a versão mais recente da extensão, selecione Versão 1 e clique em <DNT>**Save**</DNT>. Em seguida, clique em <DNT>**Edit**</DNT> e selecione a versão mais recente disponível. 5. Vá para <DNT>**Configuration**</DNT>, selecione <DNT>**Environment variables**</DNT> e adicione `Key: NEW_RELIC_LICENSE_KEY Value: YOUR_LICENSE_KEY`. Observação: `Key: NEW_RELIC_ACCOUNT_ID` é um parâmetro opcional e deve ser definido como o ID da sua conta New Relic.

Para verificar se a configuração foi feita corretamente, clique no botão <DNT>**Test**</DNT> na seção <DNT>**code**</DNT> .

## Encontre seus dados

Você pode encontrar seus dados no New Relic navegando até <DNT>**[https://one.newrelic.com/](https://one.newrelic.com/)**</DNT> e uma destas categorias no menu à esquerda: <DNT>**Logs**</DNT> ou <DNT>**Metrics & events**</DNT> ou <DNT>**...Add More > Traces**</DNT>.

### Registro:

Log pode ser filtrado por conjunto de atributos específico. Clique em <DNT>**Attributes**</DNT> no menu esquerdo e escolha o atributo de seu interesse. Por exemplo:

```
NEWRELIC > SOURCE > api.logs
AWS > EXTENSION.NAME > AwsLambdaExtension
PLUGIN > TYPE > lambda extension
```

### Métrica:

As métricas enviadas pela extensão são prefixadas com `aws.telemetry.lambda_ext.`. Atualmente existem 6 métricas AWS Lambda :

```
'durationMs'
'billedDurationMs'
'initDurationMs'
'memorySizeMB'
'maxMemoryUsedMB'
'producedBytes'
```

### Evento

Para ver o evento enviado por esta extensão, na seção <DNT>**Custom events**</DNT> procure por `AwsLambdaExtension`. Atualmente existem doze tipos de eventos:

```
platform_initStart
platform_initRuntimeDone
platform_initReport
platform_start
platform_runtimeDone
platform_fault
platform_report
platform_extension
platform_telemetrySubscription
platform_logsDropped
function
extension
```

Você pode filtrar ainda mais os dados no menu `Dimensions` .

### Traces

Os dados trace são exibidos na guia <DNT>**Traces**</DNT>. Para ver o rastreamento enviado pela extensão, procure por \`AwsLambdaExtension'.
