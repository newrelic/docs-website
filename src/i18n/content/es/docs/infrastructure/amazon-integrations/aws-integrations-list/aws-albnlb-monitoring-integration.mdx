---
title: Integración de monitoreo AWS ALB/NLB
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s ALB/NLB monitoring integration: the data it reports and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[El equilibrio de carga de aplicaciones (ALB) de Amazon](http://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html) distribuye el tráfico entrante de la aplicación entre múltiples objetivos, como instancias EC2, en múltiples zonas de disponibilidad. [Amazon Network Load Balancer](http://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html) (NLB) distribuye el tráfico entrante entre múltiples objetivos, como instancias de Amazon EC2.

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar sus datos AWS ALB/NLB a los productos New Relic . Este documento explica cómo activar esta integración y describe los datos que se pueden capturar.

New Relic también ofrece una [integración para el servicio Elastic Load Balancing (ELB) de Amazon](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-elb-monitoring-integration).

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de AWS ALB/NLB:

* New Relic intervalo de sondeo: 5 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto

## Ver y usar datos [#find-data]

Para [ver y utilizar sus datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de AWS ALB.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) usando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `LoadBalancerSample` dentro de cuatro categorías de datos:

* ALB: Aparece en New Relic con `provider` valor `Alb`.
* NLB: Aparece en New Relic con `provider` valor `Nlb`.
* [Grupo objetivo de ALB](http://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html): aparece en New Relic con `provider` valor `AlbTargetGroup`.
* [Grupo objetivo de NLB](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html): aparece en New Relic con `provider` valor`NlbTargetGroup`.

## Datos métricos

Hay dos categorías de datos de integración de ALB: ALB y grupo objetivo de ALB.

### ALB métrica [#metric-alb]

La integración de New Relic Amazon recopila los siguientes datos de Amazon ALB para el proveedor `Alb`.

<table>
  <thead>
    <tr>
      <th style={{ width: "275px" }}>
        Métrica
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `activeConnectionCount`
      </td>

      <td>
        El número total de conexiones TCP simultáneas activas desde los clientes al balanceador de carga y desde el balanceador de carga al objetivo.
      </td>
    </tr>

    <tr>
      <td>
        `newConnectionCount`
      </td>

      <td>
        El número total de nuevas conexiones TCP establecidas desde los clientes al balanceador de carga y desde el balanceador de carga al objetivo.
      </td>
    </tr>

    <tr>
      <td>
        `rejectedConnectionCount`
      </td>

      <td>
        La cantidad de conexiones que se rechazaron porque el balanceador de carga había alcanzado su cantidad máxima de conexiones.
      </td>
    </tr>

    <tr>
      <td>
        `processedBytes`
      </td>

      <td>
        El número total de bytes procesados por el equilibrador de carga a través de IPv4 e IPv6.
      </td>
    </tr>

    <tr>
      <td>
        `requestCount`
      </td>

      <td>
        El recuento de solicitudes procesadas a través de IPv4 e IPv6. Las solicitudes solo incrementan esta métrica cuando el nodo del equilibrador de carga pudo seleccionar un objetivo. Si se rechaza una solicitud antes de elegir un objetivo, no se refleja.

        Estadísticas: la suma proporciona el mayor valor.
      </td>
    </tr>

    <tr>
      <td>
        `rulesEvaluated`
      </td>

      <td>
        La cantidad de reglas procesadas por el balanceador de carga dada una tasa de solicitudes promediada durante una hora.
      </td>
    </tr>

    <tr>
      <td>
        `clientTlsNegotiationErrorCount`
      </td>

      <td>
        La cantidad de conexiones TLS iniciadas por el cliente que no estableció una sesión con el equilibrador de carga. Las posibles causas incluyen una falta de coincidencia de cifrados o protocolos.
      </td>
    </tr>

    <tr>
      <td>
        `httpCodeElb5XXCount`
      </td>

      <td>
        La cantidad de códigos de error del servidor HTTP 5XX que se originan en el equilibrador de carga. Este recuento no incluye ningún código de respuesta generado por el objetivo.
      </td>
    </tr>

    <tr>
      <td>
        `httpCodeElb4XXCount`
      </td>

      <td>
        La cantidad de códigos de error del cliente HTTP 4XX que se originan en el balanceador de carga. Los errores del cliente se generan cuando las solicitudes tienen formato incorrecto o están incompletas. Estas solicitudes no han sido recibidas por el objetivo.
      </td>
    </tr>

    <tr>
      <td>
        `IpV6ProcessedBytes`
      </td>

      <td>
        El número total de bytes procesados por el equilibrador de carga a través de IPv6.
      </td>
    </tr>

    <tr>
      <td>
        `IpV6RequestCount`
      </td>

      <td>
        La cantidad de solicitudes de IPv6 recibidas por el equilibrador de carga.
      </td>
    </tr>

    <tr>
      <td>
        `lambdaTargetProcessedBytes`
      </td>

      <td>
        El número total de bytes procesados por el equilibrador de carga para solicitudes y respuestas de una función Lambda.
      </td>
    </tr>
  </tbody>
</table>

### ALB grupo objetivo métrica [#metric-target]

Los datos del grupo objetivo se almacenan en New Relic en el proveedor `AlbTargetGroup`. Por ejemplo, puede utilizar estos datos para facetar el error métrico por grupo objetivo.

<table>
  <thead>
    <tr>
      <th style={{ width: "275px" }}>
        Métrica
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `requestCount`
      </td>

      <td>
        El recuento promedio de solicitudes que recibe cada objetivo de un grupo objetivo.

        Estadísticas: solo es válida la suma, que representa el promedio en lugar de la suma.
      </td>
    </tr>

    <tr>
      <td>
        `healthyHostCount`
      </td>

      <td>
        El número de objetivos que se consideran saludables.
      </td>
    </tr>

    <tr>
      <td>
        `unHealthyHostCount`
      </td>

      <td>
        El número de objetivos que se consideran no saludables.
      </td>
    </tr>

    <tr>
      <td>
        `targetResponseTime`
      </td>

      <td>
        El tiempo transcurrido, en segundos, desde que la solicitud sale del balanceador de carga hasta que se recibe una respuesta del objetivo.

        Estadísticas disponibles:

        * aws.applicationelb.target_response_time.p90
        * aws.applicationelb.target_response_time.p95
        * aws.applicationelb.target_response_time.p99
      </td>
    </tr>

    <tr>
      <td>
        `httpCodeTarget2XXCount`
      </td>

      <td>
        El número de códigos de respuesta HTTP `2XX` generados por el objetivo. Esto no incluye ningún código de respuesta generado por el balanceador de carga.
      </td>
    </tr>

    <tr>
      <td>
        `httpCodeTarget3XXCount`
      </td>

      <td>
        El número de códigos de respuesta HTTP `3XX` generados por el objetivo. Esto no incluye ningún código de respuesta generado por el balanceador de carga.
      </td>
    </tr>

    <tr>
      <td>
        `httpCodeTarget4XXCount`
      </td>

      <td>
        El número de códigos de respuesta HTTP `4XX` generados por el objetivo. Esto no incluye ningún código de respuesta generado por el balanceador de carga.
      </td>
    </tr>

    <tr>
      <td>
        `httpCodeTarget5XXCount`
      </td>

      <td>
        El número de códigos de respuesta HTTP `5XX` generados por el objetivo. Esto no incluye ningún código de respuesta generado por el balanceador de carga.
      </td>
    </tr>

    <tr>
      <td>
        `lambdaInternalError`
      </td>

      <td>
        La cantidad de solicitudes a una función Lambda que fallaron debido a un problema interno del balanceador de carga o AWS Lambda.
      </td>
    </tr>

    <tr>
      <td>
        `lambdaUserError`
      </td>

      <td>
        La cantidad de solicitudes a una función Lambda que fallaron debido a un problema con la función Lambda.
      </td>
    </tr>
  </tbody>
</table>

Hay dos categorías de datos de integración de NLB: NLB y grupo objetivo de NLB.

### NLB métrica [#metric-alb]

La integración de New Relic Amazon recopila los siguientes datos de Amazon NLB para el proveedor `Nlb`.

<table>
  <thead>
    <tr>
      <th style={{ width: "275px" }}>
        Métrica
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `activeFlowCount`
      </td>

      <td>
        El número total de flujos (o conexiones) simultáneos desde los clientes hasta el objetivo. Esta métrica incluye conexiones en los estados `SYN_SENT` y `ESTABLISHED` .

        Las conexiones TCP no terminan en el balanceador de carga, por lo que un cliente que abre una conexión TCP con un objetivo cuenta como un flujo único.
      </td>
    </tr>

    <tr>
      <td>
        `activeFlowCountTls`
      </td>

      <td>
        El número total de flujos (o conexiones) TLS simultáneos desde los clientes hasta el objetivo. Esta métrica incluye solo conexiones en los `ESTABLISHED` estados.
      </td>
    </tr>

    <tr>
      <td>
        `clientTlsNegotiationErrorCount`
      </td>

      <td>
        El número total de apretones de manos TLS que fallaron durante la negociación entre un cliente y un oyente TLS.
      </td>
    </tr>

    <tr>
      <td>
        `consumedLcus`
      </td>

      <td>
        La cantidad de unidades de capacidad del balanceador de carga (LCU) utilizadas por su balanceador de carga. Paga por la cantidad de LCU que usa por hora.
      </td>
    </tr>

    <tr>
      <td>
        `newFlowCount`
      </td>

      <td>
        El número total de nuevos flujos (o conexiones) establecidos desde los clientes hasta el objetivo en el período de tiempo.
      </td>
    </tr>

    <tr>
      <td>
        `newFlowCountTls`
      </td>

      <td>
        El número total de nuevos flujos (o conexiones) de TLS establecidos desde los clientes hasta el objetivo en el período de tiempo.
      </td>
    </tr>

    <tr>
      <td>
        `processedBytes`
      </td>

      <td>
        El número total de bytes procesados por el equilibrador de carga, incluidos los encabezados TCP/IP.
      </td>
    </tr>

    <tr>
      <td>
        `processedBytesTls`
      </td>

      <td>
        El número total de bytes procesados por los oyentes TLS.
      </td>
    </tr>

    <tr>
      <td>
        `targetTlsNegotiationErrorCount`
      </td>

      <td>
        El número total de apretones de manos TLS que fallaron durante la negociación entre un oyente TLS y un objetivo.
      </td>
    </tr>

    <tr>
      <td>
        `tcpClientResetCount`
      </td>

      <td>
        El número total de paquetes de reinicio (RST) enviados desde un cliente a un objetivo. Estos restablecimientos son generados por el cliente y reenviados por el balanceador de carga.
      </td>
    </tr>

    <tr>
      <td>
        `tcpElbResetCount`
      </td>

      <td>
        El número total de paquetes de reinicio (RST) generados por el equilibrador de carga.
      </td>
    </tr>

    <tr>
      <td>
        `tcpTargetResetCount`
      </td>

      <td>
        El número total de paquetes de reinicio (RST) enviados desde un objetivo a un cliente. Estos reinicios son generados por el objetivo y reenviados por el balanceador de carga.
      </td>
    </tr>
  </tbody>
</table>

### NLB grupo objetivo métrica [#metric-target]

Los datos del grupo objetivo se almacenan en New Relic en el proveedor `NlbTargetGroup`. Por ejemplo, puede utilizar estos datos para facetar el error métrico por grupo objetivo.

<table>
  <thead>
    <tr>
      <th style={{ width: "275px" }}>
        Métrica
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `healthyHostCount`
      </td>

      <td>
        El número de objetivos que se consideran saludables.
      </td>
    </tr>

    <tr>
      <td>
        `unHealthyHostCount`
      </td>

      <td>
        El número de objetivos que se consideran no saludables.
      </td>
    </tr>
  </tbody>
</table>
