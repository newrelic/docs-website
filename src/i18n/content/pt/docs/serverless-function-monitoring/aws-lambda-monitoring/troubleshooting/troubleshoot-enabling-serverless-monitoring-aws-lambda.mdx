---
title: Solucionar problemas de habilitação do monitoramento Serverless do AWS Lambda
type: troubleshooting
tags:
  - Serverless function monitoring
  - AWS Lambda monitoring
  - Troubleshooting
metaDescription: Troubleshooting options for enabling/installing Serverless monitoring for AWS Lambda.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você está tentando habilitar [o monitoramento Serverless para AWS Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda) e está tendo um problema ou erro.

## Solução

Existem dois problemas comuns relacionados à não conclusão de todos os [procedimentos de habilitação](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda):

* Não estou vendo dados na página da interface do usuário

  <DNT>
    **CloudWatch metrics**
  </DNT>

  . Isso significa que a [etapa de integração da AWS](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#connect-aws) não foi concluída.

* Não vejo dados em

  <DNT>
    **Troubleshooting**
  </DNT>

  páginas de interface de categoria. Se você não estiver vendo dados nas guias de interface

  <DNT>
    **Distributed tracing**
  </DNT>

  ,

  <DNT>
    **Errors**
  </DNT>

  e

  <DNT>
    **Invocations**
  </DNT>

  , isso significa que a [etapa de instrumentação de agente do APM](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#instrument-lambda) não foi concluída.

Além desses problemas básicos de ativação, existem alguns problemas adicionais que podem causar problemas:

* Erro do CloudWatch "Erro HTTP 401: não autorizado." Isso ocorre devido a uma chave de API incorreta. O argumento `--nr-api-key`na [etapa Configurar AWS enable](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#connect-aws) leva seu <InlinePopover type="userKey"/>, que é diferente da chave de API REST.

* Faltam métricas personalizadas. A monitorização lambda não é compatível com a nossa [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/collect-custom-metrics). Use [atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) para adicionar metadados.

* Faltam invocações. Para ver os detalhes do detalhamento da invocação, distributed tracing deve ser habilitado como parte da [etapa de instrumentação do Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#instrument-lambda). distributed tracing é necessário para que os detalhes do intervalo possam ser exibidos no painel de detalhes da chamada.

* Você concluiu as etapas de instalação, integração e instrumentação corretamente e sua função está enviando log para o CloudWatch, mas você não está vendo rastreamento de dependência específica (ou qualquer rastreamento) na interface. Isso pode resultar da ordem de fusão das camadas (se você estiver usando nossas camadas Lambda) ou da ordem de importação (se você estiver usando o instrumento manualmente):

  * Se você usa camadas: certifique-se na configuração da sua função que a camada New Relic seja mesclada antes de outras camadas (embora se sua função usar webpack, a camada New Relic deva ser mesclada após a camada webpack).

  * Se você usar uma função Node.js manualmente, certifique-se de que [o registro esteja ativado](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#logging_config) e que sua função importe

    <DNT>
      **newrelic**
    </DNT>

    antes de importar qualquer dependência que você espera monitor.

  * Se você estiver usando módulos ES com uma função Node.js, certifique-se de que a variável de ambiente `NEW_RELIC_USE_ESM` esteja definida como `true`. Além disso, certifique-se de usar async/await ou promessas para lidar com comportamento assíncrono em sua função, pois funções baseadas em retorno de chamada não são suportadas ao usar módulos ES.

Se nenhuma dessas soluções ajudar você, entre em contato com nossa [equipe de suporte](https://support.newrelic.com/). As informações a seguir irão ajudá-lo quando você falar com técnicos de suporte:

* A função do Lambda já apareceu na interface antes? Se sim, qual é o nome da função?
* Se alguns dados da função do Lambda estão aparecendo na interface, quais dados específicos estão aparecendo?
* Qual agente de linguagem APM você está usando para instrumentalizar a função?

<CollapserGroup>
  <Collapser
    id="attach-logs"
    title="Recomendado: anexe seu log do CloudWatch ao ticket"
  >
    Para fornecer informações de registro à nossa equipe de suporte ao abrir um ticket:

    1. Invoque a função no AWS Lambda.

    2. Clique no link <DNT>**logs**</DNT> após a execução da função.

    3. Isso o levará ao log do CloudWatch na AWS. Na barra lateral esquerda da AWS, em <DNT>**Logs**</DNT>, clique em <DNT>**Insights.**</DNT>

    4. Selecione seu <DNT>**function**</DNT> e também o stream <DNT>**newrelic-log-ingestion**</DNT> .

    5. Aplique um <DNT>**Time Filter**</DNT> apropriado e uma entrada log <DNT>**limit**</DNT> (o padrão de 20 pode não ser suficiente).

    6. Em <DNT>**Actions**</DNT> selecione <DNT>**Copy query results (ASCII)**</DNT>.

    7. Cole o texto copiado em um novo arquivo de texto e <DNT>**save and upload the text file to the ticket.**</DNT>

       <Callout variant="important">
         A carga útil NR_LAMBDA_MONITORING contém todas as informações que o agente tenta enviar, incluindo métricas, eventos, alguns metadados da conta AWS, invocações e dados de erros. Observe que alguns desses dados (por exemplo, nosso legado métrico) não chegarão à nossa interface porque nosso pipeline de ingestão não os consome.
       </Callout>
  </Collapser>
</CollapserGroup>
