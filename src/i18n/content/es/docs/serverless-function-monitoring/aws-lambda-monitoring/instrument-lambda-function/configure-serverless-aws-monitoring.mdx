---
title: Instalar y configurar el monitoreo Lambda en New Relic
metaDescription: Configure your AWS Lambda functions with New Relic
freshnessValidatedDate: never
translationType: machine
---

## Antes de que empieces [#begin]

* Si aún no lo hizo, puede que desee verificar que su función Lambda cumple con nuestros [requisitos y compatibilidad](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring).

## Instalar Lambda Monitoreo [#setup]

La monitorización Lambda incluye:

* Una integración AWS para ingerir métricas de CloudWatch y realizar síntesis de entidades dentro de New Relic.
* Un agente de New Relic incluido en nuestras [capas Lambda de New Relic](https://github.com/newrelic/newrelic-lambda-layers) o [como un SDK](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation).
* Un método para enviar carga y logs a New Relic a través de nuestra función [newrelic-log-ingestion](https://github.com/newrelic/aws-log-ingestion) o [extensión](https://github.com/newrelic/newrelic-lambda-extension). Si usa [New Relic Lambda Layers](https://github.com/newrelic/newrelic-lambda-layers), no tendrá que realizar ninguna configuración adicional para enviar datos.

<Steps>
  <Step>
    ## Vincule sus cuentas de AWS y New Relic [#link]

    <Callout variant="tip">
      Si emplea [newrelic-lambda-cli](https://github.com/newrelic/newrelic-lambda-cli) para instrumentar su función Lambda, el proceso de vinculación se automatiza, lo que le permite omitir este paso.
    </Callout>

    Al vincular cuentas, le otorga licencia a New Relic para crear un inventario de su cuenta AWS y recopilar automáticamente métricas de CloudWatch para su función Lambda. Una vez que vinculó las cuentas, los recursos en su cuenta AWS aparecerán como entidad en el [explorador de entidades](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts/#find). La función Lambda entidad se encontrará en la vista sin servidor de funciones.

    Puede vincular su cuenta de AWS y New Relic mediante uno de los siguientes métodos de integración.

    <Tabs>
      <TabsBar>
        <TabsBarItem id="2">Sondeo</TabsBarItem> <TabsBarItem id="1">de API de AWS Metric Streams (recomendado)</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="1">
          Para que New Relic monitoree su función Lambda, necesita configurar una integración entre New Relic y AWS. Recomendamos emplear [métrica Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream) para ayudar a reducir la latencia y evitar la limitación de nuestras solicitudes de sondeo.
        </TabsPageItem>

        <TabsPageItem id="2">
          Si no está empleando una integración de Métrica Streams, puede optar por configurar una integración [API Polling](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring) en su lugar. De forma predeterminada, una integración de sondeo de API con el servicio Lambda habilitado sondeará cada 5 minutos las métricas de CloudWatch.

          Puede emplear [newrelic-lambda-cli](https://github.com/newrelic/newrelic-lambda-cli) para configurar una integración API Polling, pero no una integración de métrica Streams.

          ```sh
          newrelic-lambda integrations install --nr-account-id YOUR_NR_ACCOUNT_ID \
          --nr-api-key YOUR_NEW_RELIC_USER_KEY
          ```

          Un paso en el [comando de instalación de integración](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#aws-lambda-integration) creará un secreto `NEW_RELIC_LICENSE_KEY` en [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) para mejorar la seguridad. Esto se puede configurar con un indicador `--disable-license-key-secret` , junto con otras opciones e indicadores.
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## instrumento tu función Lambda [#instrument]

    Para instrumentar su función Lambda, necesita un agente y una extensión. Estos componentes están agrupados en la [capa Lambda](https://github.com/newrelic/newrelic-lambda-layers) de New Relic. Si usar capas Lambda no es una opción para usted, puede incorporar manualmente el agente y la extensión a su función. Según los requisitos de su función Lambda, seleccione uno de los siguientes métodos de instrumentación:

    <Tabs>
      <TabsBar>
        <TabsBarItem id="layered-instrumentation">Instrumentación en capas</TabsBarItem> <TabsBarItem id="sdk-based-instrumentation">Instrumentación basada en SDK</TabsBarItem> <TabsBarItem id="containerized-instrumentation">Instrumentación en contenedores</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="layered-instrumentation">
          Emplee este método si su función Lambda está empaquetada como un archivo Zip y puede agregar capas. Las capas son un mecanismo de distribución para bibliotecas, tiempos de ejecución personalizados y otras dependencias. Para obtener más información, consulte la documentación [de instrumentación en capas](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/instrument-your-own/) .
        </TabsPageItem>

        <TabsPageItem id="sdk-based-instrumentation">
          Emplee este método si su función Lambda no puede emplear capas, garantizando una implementación rápida sin la necesidad de modificar capas. Para obtener más información, consulte la documentación [de instrumentación basada en SDK](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation/) .
        </TabsPageItem>

        <TabsPageItem id="containerized-instrumentation">
          Emplee este método si su función Lambda se ejecuta dentro de un contenedor. Contenedor proporciona un entorno de ejecución consistente y aislado para su aplicación. New Relic proporciona una imagen de Docker prediseñada que incluye la capa Lambda de New Relic, la extensión Lambda de New Relic y el agente de New Relic. Para obtener más información, consulte la documentación [de instrumentación en contenedores](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/containerized-images/) .
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Configurar variables de entorno [#environment]

    <Callout variant="tip">
      * Cuando instrumenta la capa Lambda de New Relic con la CLI de New Relic, sus variables de entorno obligatorias se configuran automáticamente. Sin embargo, es posible que desee cambiar algunas de las configuraciones predeterminadas y configurar su función Lambda con las variables de entorno que coincidan con sus necesidades de monitoreo.
      * Si está empleando la extensión Lambda de New Relic, deberá configurar las variables de entorno manualmente.
    </Callout>

    [Las variables de entorno](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/env-variables-lambda) se emplean para configurar el agente New Relic y la extensión Lambda. Es importante configurar estas variables correctamente para garantizar que sus funciones Lambda se monitoreen correctamente.
  </Step>
</Steps>

## Pruebe nuestras funciones de ejemplo

Luego de instrumentar la capa Lambda de New Relic, le recomendamos encarecidamente que pruebe nuestras funciones de ejemplo. Estos ejemplos de trabajo deben emplear como punto de partida para instrumentar su propia función serverless. El uso de estos ejemplos puede ayudarlo a familiarizar con la capa New Relic Lambda, probar el enlace de la cuenta y pueden usar como referencia para su propia instrumentación. Cada ejemplo demuestra cómo agregar licencias, técnicas específicas del tiempo de ejecución para empaquetar su controlador, gestionar la retención log de funciones en CloudWatch y más.

Si bien hay muchas formas de gestionar y desplegar la función Lambda, AWS CloudFormation es el mecanismo que empleamos para nuestros ejemplos.

Nuestros ejemplos se publican, junto con la extensión New Relic Lambda, en este [repositorio de GitHub](https://github.com/newrelic/newrelic-lambda-extension). Hay uno para cada tiempo de ejecución de Lambda que admite New Relic:

* [Node.js](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/node)
* [Python](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/python)
* [Go](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/go)
* [Java](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/java)
* [Ruby](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/ruby)
* [.NET](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/dotnet)

También puedes aprender a emplear el instrumento rastreo distribuido en una aplicación sin servidor no trivial en nuestro [ejemplo de rastreo distribuido](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/distributedtracing). Ilustra la propagación manual de trazas para SQS y SNS, dos de los servicios más populares que pueden invocar la función Lambda, con funciones de Node, Python, Ruby y Java.

<Callout variant="tip">
  Al realizar pruebas manualmente, telemetry data pueden retrasar. Recomendamos esperar siete segundos antes de volver a invocar la función, lo que permitirá que se entregue cualquier telemetría almacenada en el búfer.
</Callout>

<DocTiles>
  <DocTile title="Compatibility and requirement" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring">Obtenga más información sobre los tiempos de ejecución admitidos y los requisitos previos.</DocTile> <DocTile title="Data and UI" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/ui-data/understand-lambda-monitoring-ui/">Aprenda a emplear New Relic para monitorear su función Lambda AWS .</DocTile> <DocTile title="Troubleshooting" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/troubleshooting">Aprenda a solucionar problemas relacionados con la instalación.</DocTile>
</DocTiles>