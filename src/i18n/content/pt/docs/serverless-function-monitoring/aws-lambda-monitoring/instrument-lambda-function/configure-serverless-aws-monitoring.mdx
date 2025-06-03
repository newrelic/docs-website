---
title: Instalar e configurar o monitoramento Lambda no New Relic
metaDescription: Configure your AWS Lambda functions with New Relic
freshnessValidatedDate: never
translationType: machine
---

## Antes de você começar [#begin]

* Caso ainda não tenha feito isso, talvez você queira verificar se sua função do Lambda atende à nossa [compatibilidade e requisitos](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring).

## Instalar monitoramento Lambda [#setup]

O monitoramento Lambda inclui:

* Uma integração AWS para ingerir métricas do CloudWatch e realizar síntese de entidades dentro New Relic.
* Um agente New Relic incluído em nossas [Camadas Lambda New Relic](https://github.com/newrelic/newrelic-lambda-layers) ou [como um SDK](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation).
* Um método de envio de carga e logs para o New Relic por meio da nossa função [newrelic-log-ingestion](https://github.com/newrelic/aws-log-ingestion) ou [extensão](https://github.com/newrelic/newrelic-lambda-extension). Se você usar [o New Relic Lambda Layers](https://github.com/newrelic/newrelic-lambda-layers), não precisará fazer nenhuma configuração extra para enviar dados.

<Steps>
  <Step>
    ## Vincule suas contas AWS e New Relic [#link]

    <Callout variant="tip">
      Se você usar o [newrelic-lambda-cli](https://github.com/newrelic/newrelic-lambda-cli) para instrumentar sua função do Lambda, o processo de vinculação será automatizado, permitindo que você ignore esta etapa.
    </Callout>

    Ao vincular contas, você concede à New Relic permissão para criar um inventário da sua conta AWS e coletar automaticamente métricas do CloudWatch para sua função do Lambda. Depois de vincular contas, os recursos na sua conta AWS aparecem como entidade no [explorador de entidades](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts/#find). A função do Lambda entidade será encontrada na visualização sem servidor.

    Você pode vincular sua conta da AWS e da New Relic por um dos seguintes métodos de integração.

    <Tabs>
      <TabsBar>
        <TabsBarItem id="1">AWS Metric Streams (recomendado)</TabsBarItem> <TabsBarItem id="2">API Polling</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="1">
          Para que o New Relic monitore sua função do Lambda, você precisa configurar uma integração entre o New Relic e AWS. Recomendamos usar [o Metrica Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream) para ajudar a reduzir a latência e evitar a limitação de nossas solicitações de pesquisa.
        </TabsPageItem>

        <TabsPageItem id="2">
          Se você não estiver usando uma integração do Métrica Streams, você pode optar por configurar uma integração [API Polling](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring) . Por padrão, uma integração de API Polling com o serviço Lambda habilitado pesquisará métricas do CloudWatch a cada 5 minutos.

          Você pode usar o [newrelic-lambda-cli](https://github.com/newrelic/newrelic-lambda-cli) para configurar uma integração API Polling, mas não uma integração métrica de Streams.

          ```sh
          newrelic-lambda integrations install --nr-account-id YOUR_NR_ACCOUNT_ID \
          --nr-api-key YOUR_NEW_RELIC_USER_KEY
          ```

          Uma etapa no [comando integração install](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#aws-lambda-integration) criará um segredo `NEW_RELIC_LICENSE_KEY` no [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) para maior segurança. Isso é configurável com um sinalizador `--disable-license-key-secret` , juntamente com outras opções e sinalizadores.
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Instrumente sua função Lambda [#instrument]

    Para instrumentalizar sua função do Lambda, você precisa de um agente e de uma extensão. Esses componentes são agrupados na [camada Lambda](https://github.com/newrelic/newrelic-lambda-layers) do New Relic. Se usar camadas Lambda não for uma opção para você, você pode incorporar manualmente o agente e a extensão em sua função. Com base no requisito da sua função do Lambda, selecione um dos seguintes métodos de instrumentação:

    <Tabs>
      <TabsBar>
        <TabsBarItem id="layered-instrumentation">Instrumentação em camadas</TabsBarItem> <TabsBarItem id="sdk-based-instrumentation">Instrumentação baseada em SDK</TabsBarItem> <TabsBarItem id="containerized-instrumentation">Instrumentação em contêiner</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="layered-instrumentation">
          Use este método se sua função do Lambda estiver empacotada como um arquivo Zip e você puder adicionar camadas. Camadas são mecanismos de distribuição para biblioteca, tempos de execução personalizados e outras dependências. Para obter mais informações, consulte a documentação [de instrumentação em camadas](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/instrument-your-own/) .
        </TabsPageItem>

        <TabsPageItem id="sdk-based-instrumentation">
          Utilize este método caso sua função do Lambda não possa utilizar camadas, garantindo uma implantação rápida sem a necessidade de modificar camadas. Para obter mais informações, consulte a documentação [de instrumentação baseada em SDK](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation/) .
        </TabsPageItem>

        <TabsPageItem id="containerized-instrumentation">
          Use este método se sua função do Lambda for executada dentro de um contêiner. contêiner fornece um ambiente de execução consistente e isolado para seu aplicativo. O New Relic fornece uma imagem Docker pré-criada que inclui a camada New Relic Lambda, a extensão New Relic Lambda e o agente New Relic. Para obter mais informações, consulte a documentação [de instrumentação em contêiner](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/containerized-images/) .
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Configurar variáveis de ambiente [#environment]

    <Callout variant="tip">
      * Quando você instrumenta a camada Lambda do New Relic com o New Relic CLI, suas variáveis de ambiente obrigatórias são configuradas automaticamente. No entanto, você pode querer alterar algumas das configurações padrão e configurar sua função do Lambda com as variáveis de ambiente que correspondem às suas necessidades de monitoramento.
      * Se estiver usando a extensão Lambda do New Relic, você precisará configurar as variáveis de ambiente manualmente.
    </Callout>

    [Variáveis de ambiente](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/env-variables-lambda) são usadas para configurar o agente New Relic e a extensão Lambda. É importante definir essas variáveis corretamente para garantir que sua função do Lambda seja monitorada corretamente.
  </Step>
</Steps>

## Experimente nossas funções de exemplo

Depois de instrumentar a camada Lambda do New Relic, recomendamos fortemente experimentar nossas funções de exemplo. Esses exemplos de trabalho devem ser usados como ponto de partida para instrumentar sua própria função serverless. O uso desses exemplos pode ajudá-lo a se familiarizar com a camada New Relic Lambda, testando o link da conta, e eles podem ser usados como referência para sua própria instrumentação. Each example demonstrates adding permissions, runtime-specific techniques for wrapping your handler, managing function log retention in CloudWatch, and more.

Embora existam muitas maneiras de gerenciar e implantar a função do Lambda, AWS CloudFormation é o mecanismo que usamos em nossos exemplos.

Nossos exemplos são publicados, juntamente com a extensão New Relic Lambda, neste [repositório GitHub](https://github.com/newrelic/newrelic-lambda-extension). Há um para cada tempo de execução do Lambda que o New Relic suporta:

* [Node.js](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/node)
* [Python](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/python)
* [Go](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/go)
* [Java](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/java)
* [Ruby](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/ruby)
* [.NET](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/dotnet)

Você também pode aprender como transformar distributed tracing em um aplicativo sem servidor não trivial em nosso [exemplodistributed tracing ](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/distributedtracing). Ele ilustra a propagação manual trace para SQS e SNS, dois dos serviços mais populares que podem invocar a função do Lambda, com funções Node, Python, Ruby e Java.

<Callout variant="tip">
  Ao testar manualmente, os dados de telemetria podem ser atrasados. Recomendamos aguardar sete segundos antes de invocar a função novamente, permitindo que qualquer telemetria armazenada em buffer seja entregue.
</Callout>

<DocTiles>
  <DocTile title="Compatibility and requirement" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring">Saiba mais sobre os tempos de execução e pré-requisitos suportados.</DocTile> <DocTile title="Data and UI" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/ui-data/understand-lambda-monitoring-ui/">Aprenda a usar o New Relic para monitorar sua função do Lambda AWS .</DocTile> <DocTile title="Troubleshooting" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/troubleshooting">Aprenda a solucionar problemas relacionados à instalação.</DocTile>
</DocTiles>