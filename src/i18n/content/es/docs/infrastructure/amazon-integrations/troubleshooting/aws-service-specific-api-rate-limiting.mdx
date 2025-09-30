---
title: Servicios de limitación de tasa API específica de AWS
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: Troubleshooting procedures if you encountered a rate limit for service-specific APIs with your New Relic infrastructure integration for AWS.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Después de habilitar la integración de Amazon con el monitoreo de infraestructura New Relic , encontrará un límite de velocidad para API específica del servicio. Es posible que vea este mensaje en su software de monitoreo de AWS, a menudo con un error `503` :

`AWS::EC2::Errors::RequestLimitExceeded Request limit exceeded.`

## Solución

<CollapserGroup>
  <Collapser
    id="arn"
    title="Verifique el ARN de su cuenta de infraestructura"
  >
    Asegúrese de no recopilar información de inventario para la cuenta ARN incorrecta. Verifique que el ARN asociado con su cuenta New Relic sea correcto.
  </Collapser>

  <Collapser
    id="polling-frequency"
    title="Cambiar la frecuencia de sondeo"
  >
    La [frecuencia de las encuestas](/docs/integrations/amazon-integrations/get-started/polling-intervals-aws-integrations) determina la frecuencia con la que New Relic recopila datos de su proveedor de nube. De forma predeterminada, la frecuencia de sondeo se establece en la frecuencia máxima disponible para cada servicio. Si alcanza su límite de tasa API, es posible que desee [disminuir la frecuencia de sondeo.](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations#polling)
  </Collapser>

  <Collapser
    id="data-collection"
    title="Filtra tus datos"
  >
    Puede configurar filtros para cada integración para especificar qué información desea capturar. Si alcanza su límite de tasa API, es posible que desee [filtrar sus datos](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations#filter-data).
  </Collapser>

  <Collapser
    id="usage"
    title="Revisar el uso de API"
  >
    Para revisar el uso API para nuestra integración AWS :

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS > Account status dashboard**</DNT>.

    2. Revisa el dashboard.

       El dashboard incluye un gráfico con el recuento de API de llamadas AWS de su cuenta durante el último mes, así como la API de llamadas de CloudWatch (por recurso AWS ) del último día. Esta información es el uso de API solo para New Relic. No incluye otros usos de la API de AWS o de CloudWatch que puedan ocurrir.
  </Collapser>
</CollapserGroup>

Para obtener ayuda para determinar qué servicios pueden causar un aumento en la facturación, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com/). o comuníquese con su representante de cuenta de New Relic.

## Causa

Infraestructura Amazon integración aprovecha la AWS API de monitoreo para recopilar datos de inventario. AWS impone límites estrictos de velocidad a muchos de los servicios de API específicos de AWS consumidos por la integración New Relic . Agregar la integración New Relic Amazon aumentará el uso de la API específica del servicio y podría afectar la rapidez con la que alcanza su límite de tarifa.

Esto puede ser causado por cualquiera de los siguientes:

* Habilitar la integración de Amazon en varios complementos para el mismo servicio
* Agregar el [ARN de rol](http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) incorrecto a su integración AWS
