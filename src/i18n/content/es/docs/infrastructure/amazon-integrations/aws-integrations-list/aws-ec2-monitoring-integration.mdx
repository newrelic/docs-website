---
title: Integración de monitoreo Amazon EC2
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon EC2 integration: how to enable it, and what data it reports.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[New Relic monitoreo de infraestructura integración](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations) incluye una integración Amazon Elastic calcular Cloud (EC2) para informar sus metadatos EC2 a New Relic. Este documento explica la característica de la integración, cómo activarla y qué datos se pueden reportar.

## Característica [#about]

[El EC2 de Amazon](https://aws.amazon.com/ec2/) es una parte central de la plataforma de computación en la nube de Amazon. Todo usuario de monitoreo de infraestructura New Relic , independientemente del [nivel de suscripción](https://newrelic.com/infrastructure/pricing), puede utilizar el agente New Relic Infrastructure para obtener una visión integral y en tiempo real del rendimiento y estado de su host. La integración EC2 de New Relic utiliza la [política`ec2Describe*` ](/docs/infrastructure/infrastructure-integrations/getting-started/integrations-managed-policies)para agregar datos sobre sus instancias EC2 a sus datos de monitoreo de infraestructura estándar. También importamos [la etiqueta personalizada Amazon EC2 ](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html)y la agregamos a sus datos.

También puedes crear [un atributo personalizado](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#attributes) para ser analizado en New Relic.

## Activar la integración EC2 [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

<Callout variant="important">
  Debe instalar el agente de infraestructura en cada host EC2 para ver la métrica de ese host. Conectar su cuenta EC2 permite New Relic acceder a los metadatos de EC2, como región, tipo y etiqueta.
</Callout>

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de Amazon EC2:

* New Relic intervalo de sondeo: 5 minutos
* Intervalo de datos de Amazon CloudWatch: [1 minuto o 5 minutos](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ebs-metricscollected.html), según el plan de CloudWatch

### Nota sobre el formato de etiqueta legacy [#legacy-tag-format]

A partir del 27 de octubre de 2021, las instancias EC2 que comiencen a ser monitoreadas por New Relic tendrán solo los siguientes formatos [de etiquetas](/docs/new-relic-one/use-new-relic-one/core-concepts/use-tags-help-organize-find-your-data) de metadatos:

* Formato de etiqueta en UI: `tag.tagName`
* Formato de etiqueta como [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary/#attribute): `provider.attributeName`. Ejemplos: `provider.ec2InstanceId`, `provider.ec2State`, `provider.ec2AmiId`.

Para su monitor EC2 de instancias de New Relic antes de esa fecha, tiene la opción de conservar nuestros formatos de etiquetas legacy . Para conservar estos formatos, acceda a la de New Relic configuración UI para su host EC2 y seleccione <DNT>**Keep legacy metadata format**</DNT>. Esto le permite acceder a etiquetas que tienen formatos actuales y legacy . Deshabilitar el formato legacy significa que solo puedes usar el formato actual. Si desactiva el formato legacy , considere verificar si tiene un panel o condición de alerta usando ese formato.

El formato de etiqueta de metadatos legacy :

* Formato de etiqueta legacy en UI:

  * `provider.ec2Tag_tagName`
  * `ec2Tag_tagName`

* formato de etiqueta legacy como [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary/#attribute):

  * `attributeName`. Ejemplos: `ec2InstanceId`, `ec2State`, `ec2AmiId`.

## Usar datos en New Relic UI [#view-ec2]

Esta tabla describe las ubicaciones donde puede encontrar y utilizar sus datos EC2:

<table>
  <thead>
    <tr>
      <th style={{ width: "210px" }}>
        Página UI
      </th>

      <th>
        Puede...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [<DNT>**System**</DNT> página](/docs/infrastructure/infrastructure-ui-pages/infra-hosts-ui-page#system)
      </td>

      <td>
        Examine el uso general de recursos por CPU, carga y memoria.
      </td>
    </tr>

    <tr>
      <td>
        [<DNT>**Processes**</DNT> página](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-processes-page-inspect-process-performance)
      </td>

      <td>
        Monitor procesos de lectura o escritura de CPU, memoria y E/S.
      </td>
    </tr>

    <tr>
      <td>
        [<DNT>**Network**</DNT> página](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-network-page-measure-compare-capacity)
      </td>

      <td>
        Vea datos de error y ancho de banda para examinar los niveles de saturación, comparar equilibrios de carga e identificar otros posibles problemas de rendimiento.
      </td>
    </tr>

    <tr>
      <td>
        [<DNT>**Storage**</DNT> página](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-storage-page-evaluate-disk-usage-efficiency)
      </td>

      <td>
        Monitor la capacidad y eficiencia de la utilización general, el uso del disco o las operaciones de E/S.
      </td>
    </tr>

    <tr>
      <td>
        [<DNT>**Integrations**</DNT> página](/docs/integrations/new-relic-integrations/getting-started/infrastructure-integration-dashboards-charts)
      </td>

      <td>
        Encuentre enlaces a varias ubicaciones de productos donde puede encontrar y utilizar datos de integración EC2, incluidos enlaces a [la creación de condición de alerta](/docs/infrastructure/new-relic-infrastructure/configuration/infrastructure-alerts-add-edit-or-view-host-alert-information) y [visualización de sus datos en New Relic](/docs/insights/new-relic-insights/using-insights-interface/viewing-your-insights-dashboards).
      </td>
    </tr>
  </tbody>
</table>

Infraestructura también importa su [etiqueta personalizada Amazon EC2 ](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html), normalmente precedida por `label.<tag_key>`.

Para obtener más información sobre cómo buscar y utilizar datos de integración, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Ver y usar datos [#insights-ec2]

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `ComputeSample` , con un valor `provider` de `Ec2Instance`.

La integración EC2 recopila el siguiente subconjunto de instancia métrica de AWS CloudWatch.

<table style={{ fontSize: "12pt" }}>
  <thead>
    <tr>
      <th style={{ width: "230px" }}>
        Nombre
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `statusCheckFailedInstance`
      </td>

      <td>
        Informa si la instancia ha pasado la verificación de estado de la instancia en un período de un minuto. El resultado de la verificación puede ser `0` (aprobado) o `1` (reprobado).
      </td>
    </tr>

    <tr>
      <td>
        `statusCheckFailedSystem`
      </td>

      <td>
        Informa si la instancia pasó la verificación del estado del sistema en un período de un minuto. El resultado de la verificación puede ser `0` (aprobado) o `1` (reprobado).
      </td>
    </tr>

    <tr>
      <td>
        `statusCheckFailed`
      </td>

      <td>
        Informa si la instancia ha pasado tanto la verificación de estado de la instancia como la verificación de estado del sistema en un período de un minuto. El resultado de la verificación puede ser `0` (aprobado) o `1` (reprobado).
      </td>
    </tr>
  </tbody>
</table>

Para obtener más información sobre los datos específicos que se pueden informar, consulte [EC2 integración atributo](/docs/infrastructure/new-relic-infrastructure/data-instrumentation/default-infrastructure-attributes-events#aws-ec2-attributes). Para obtener descripciones completas, consulte la [documentación de Amazon EC2](https://aws.amazon.com/documentation/ec2/).
