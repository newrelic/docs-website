---
title: Solucionar problemas al habilitar el monitoreo serverless de AWS Lambda
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

Está intentando habilitar [el monitoreo serverless para AWS Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda) y tiene un problema o error.

## Solución

Hay dos problemas comunes relacionados con no completar todos los [procedimientos de habilitación](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda):

* No veo datos en la página UI

  <DNT>
    **CloudWatch metrics**
  </DNT>

  . Esto significa que el [paso de integración de AWS](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#connect-aws) no se completó.

* No veo datos en

  <DNT>
    **Troubleshooting**
  </DNT>

  páginas UI de categoría. Si no ve datos en las pestañas UI

  <DNT>
    **Distributed tracing**
  </DNT>

  ,

  <DNT>
    **Errors**
  </DNT>

  y

  <DNT>
    **Invocations**
  </DNT>

  , esto significa que el [paso de instrumentación del agente APM](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#instrument-lambda) no se completó.

Además de estos problemas de habilitación básicos, existen algunos problemas adicionales que pueden causar un problema:

* Error de CloudWatch "Error HTTP 401: no autorizado". Esto se debe a una clave de API incorrecta. El argumento `--nr-api-key`en el [paso Configurar la habilitación de AWS](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#connect-aws) toma su <InlinePopover type="userKey"/>, que es diferente de la clave de API REST.

* Faltan métricas personalizadas. El monitoreo lambda no es compatible con nuestra [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/collect-custom-metrics). Utilice [un atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) para agregar metadatos.

* Faltan invocaciones. Para ver los detalles del desglose de la invocación, se debe habilitar rastreo distribuido como parte del [paso de instrumentación de Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#instrument-lambda). Se requiere rastreo distribuido para que los detalles del tramo se puedan mostrar en el panel de detalles de la invocación.

* Ha completado correctamente los pasos de instalación, integración e instrumentación y su función es enviar el registro a CloudWatch, pero no ve la traza para una dependencia específica (o ninguna traza) en la UI. Esto puede resultar del orden de fusión de capas (si está utilizando nuestras capas Lambda) o del orden de importación (si está instrumentado manualmente):

  * Si está instrumentado con capas: asegúrese en la configuración de su función de que la capa New Relic se fusione antes que otras capas (aunque si su función usa un paquete web, la capa New Relic debe fusionarse después de la capa del paquete web).

  * Si está instrumentando una función de Node.js manualmente, asegúrese de que [el registro esté habilitado](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#logging_config) y de que su función importe

    <DNT>
      **newrelic**
    </DNT>

    antes de importar cualquier dependencia que espere monitor.

  * Si está utilizando módulos ES con una función de Node.js, asegúrese de que la variable de entorno `NEW_RELIC_USE_ESM` esté configurada en `true`. Además, asegúrese de utilizar async/await o promesas para manejar el comportamiento asincrónico en su función, ya que las funciones basadas en devolución de llamada no son compatibles cuando se utilizan módulos ES.

Si ninguna de estas soluciones le ayuda, póngase en contacto con nuestro [equipo de soporte](https://support.newrelic.com/). La siguiente información le ayudará cuando hable con los técnicos de soporte:

* ¿Ha aparecido antes la función Lambda en la UI ? Si es así, ¿cuál es el nombre de la función?
* Si aparecen algunos datos para la función Lambda en la UI, ¿qué datos específicos aparecen?
* ¿Qué agente de lenguaje APM estás utilizando para instrumentar la función?

<CollapserGroup>
  <Collapser
    id="attach-logs"
    title="Recomendado: Adjunte su registro de CloudWatch al ticket"
  >
    Para proporcionar a nuestro equipo de soporte información de registro al abrir un ticket:

    1. Invoque la función en AWS Lambda.

    2. Haga clic en el enlace <DNT>**logs**</DNT> después de que se ejecute su función.

    3. Esto lo llevará al registro de CloudWatch en AWS. En la barra lateral izquierda de AWS, en <DNT>**Logs**</DNT>, haga clic en <DNT>**Insights.**</DNT>

    4. Selecciona tu transmisión <DNT>**function**</DNT> y también la <DNT>**newrelic-log-ingestion**</DNT> .

    5. Aplique un <DNT>**Time Filter**</DNT> apropiado y una entrada log <DNT>**limit**</DNT> (el valor predeterminado de 20 puede no ser suficiente).

    6. En <DNT>**Actions**</DNT> seleccione <DNT>**Copy query results (ASCII)**</DNT>.

    7. Pegue el texto copiado en un nuevo archivo de texto, luego <DNT>**save and upload the text file to the ticket.**</DNT>

       <Callout variant="important">
         La carga útil NR_LAMBDA_MONITORING contiene toda la información que el agente intenta enviar, incluida métrica, evento, algunos metadatos de la cuenta de AWS, invocaciones y datos de errores. Tenga en cuenta que algunos de esos datos (por ejemplo, nuestra métrica legacy ) no llegarán a nuestra UI porque nuestra canalización de ingesta no los consume.
       </Callout>
  </Collapser>
</CollapserGroup>
