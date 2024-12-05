---
title: Integración de monitoreo AWS ELB (Classic)
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon Classic ELB monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración de equilibrio de carga clásico (ELB) de Amazon Elastic para informar datos de ELB clásico a New Relic. Este documento explica la característica de la integración, cómo activarla y qué datos se pueden reportar.

## Característica [#features]

La integración de New Relic para [Amazon Elastic Classic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) (ELB) informa datos de ELB, incluidos recuentos de mensajes de código HTTP, recuentos de hosts en buen estado y en mal estado, tiempos de latencia y estados de configuración de ELB. Los datos de integración de AWS también están disponibles [para consultas y creación de gráficos](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure#insights).

Amazon ofrece tres tipos de balanceadores de carga: [Classic Load Balancer](https://aws.amazon.com/elasticloadbalancing/classicloadbalancer/), [aplicación Load Balancer](https://aws.amazon.com/elasticloadbalancing/) (ALB) y [Network Load Balancer](https://aws.amazon.com/elasticloadbalancing/) (NLB). New Relic también ofrece una [integración ALB/NLB](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-alb-monitoring-integration) para monitor los dos últimos tipos de balanceadores de carga.

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de AWS ELB:

* New Relic intervalo de sondeo: 5 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto

## Ver y usar datos [#find-data]

Para [ver y utilizar los datos de esta integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de ELB.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `LoadBalancerSample` , con un valor `provider` de `Elb`.

## Datos métricos [#metrics]

La integración recoge la siguiente métrica. Para obtener detalles adicionales sobre estas métricas, consulte [la documentación métrica del ELB Classic Load Balancer de Amazon](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/elb-metricscollected.html#loadbalancing-metrics-clb).

<table>
  <thead>
    <tr>
      <th style={{ width: "275px" }}>
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
        `backendConnectionErrors.Sum`
      </td>

      <td>
        Tasa del número de conexiones por segundo que no se establecieron exitosamente entre el balanceador de carga y la instancia registrada.

        El equilibrador de carga vuelve a intentar la conexión cuando hay errores, por lo que este recuento puede exceder la tasa de solicitudes. Este recuento también incluye cualquier error de conexión relacionado con las verificações de estado.
      </td>
    </tr>

    <tr>
      <td>
        `healthyHostCount`

        `unHealthyHostCount`
      </td>

      <td>
        La cantidad de instancias en buen estado o en mal estado registradas con su balanceador de carga. Una instancia recién registrada se considera saludable después de pasar la primera verificación de estado.

        Si el equilibrio de carga entre zonas está habilitado, la cantidad de instancias en buen estado para la dimensión `LoadBalancerName` se calcula en todas las zonas de disponibilidad. En caso contrario, se calcula por zona de disponibilidad.
      </td>
    </tr>

    <tr>
      <td>
        `httpCodeBackend2XX`

        `httpCodeBackend3XX`

        `httpCodeBackend4XX`

        `httpCodeBackend5XX`
      </td>

      <td>
        \[HTTP listener] El número de códigos de respuesta HTTP generados por segundo por instancia registrada. Este recuento no incluye ningún código de respuesta generado por el equilibrador de carga.
      </td>
    </tr>

    <tr>
      <td>
        `httpCodeElb4XX`
      </td>

      <td>
        \[HTTP listener] La cantidad de códigos de error de cliente HTTP `4XX` generados por el balanceador de carga por minuto. Los errores del cliente se generan cuando una solicitud tiene un formato incorrecto o está incompleta.
      </td>
    </tr>

    <tr>
      <td>
        `httpCodeElb5XX`
      </td>

      <td>
        \[HTTP listener] La cantidad de códigos de error del servidor HTTP `5XX` generados por el equilibrador de carga por minuto. Este recuento no incluye ningún código de respuesta generado por la instancia registrada. La métrica se informa si no hay ninguna instancia en buen estado registrada en el balanceador de carga, o si la tasa de solicitudes excede la capacidad de la instancia (derramamiento) o del balanceador de carga.
      </td>
    </tr>

    <tr>
      <td>
        `latency.Average`

        `latency.Maximum`
      </td>

      <td>
        \[HTTP listener] El tiempo total transcurrido, en segundos, desde el momento en que el balanceador de carga envió la solicitud a una instancia registrada hasta que la instancia comenzó a enviar los encabezados de respuesta.

        \[TCP listener] El tiempo total transcurrido, en segundos, para que el equilibrador de carga establezca correctamente una conexión a una instancia registrada.

        Estadísticas disponibles:

        * aws.elb.latency.p90
        * aws.elb.latency.p95
        * aws.elb.latency.p99
      </td>
    </tr>

    <tr>
      <td>
        `requestCount`
      </td>

      <td>
        El número de solicitudes completadas o conexiones realizadas por segundo durante el intervalo especificado (1 o 5 minutos).
      </td>
    </tr>

    <tr>
      <td>
        `spilloverCount`
      </td>

      <td>
        El número total de solicitudes que se rechazaron por segundo debido a que la cola de aumento estaba llena.
      </td>
    </tr>

    <tr>
      <td>
        `surgeQueueLength.Average, Maximum, Minimum`
      </td>

      <td>
        El número total de solicitudes que están pendientes de enrutamiento. El equilibrador de carga pone en cola una solicitud si no puede establecer una conexión con una instancia en buen estado para enrutar la solicitud.

        El tamaño máximo de la cola es 1.024. Las solicitudes adicionales se rechazan cuando la cola está llena. Para obtener más información, consulte `SpilloverCount`.
      </td>
    </tr>

    <tr>
      <td>
        `estimatedAlbActiveConnectionCount.Average, Maximum, Minimum`
      </td>

      <td>
        El número estimado de conexiones TCP simultáneas activas desde los clientes al balanceador de carga y desde el balanceador de carga al objetivo.
      </td>
    </tr>

    <tr>
      <td>
        `estimatedAlbConsumedLcus.Average, Maximum, Minimum`
      </td>

      <td>
        El número estimado de unidades de capacidad del balanceador de carga (LCU) utilizadas por un balanceador de carga de aplicación.
      </td>
    </tr>

    <tr>
      <td>
        `estimatedAlbNewConnectionCount.Average, Maximum, Minimum`
      </td>

      <td>
        El número estimado de nuevas conexiones TCP establecidas desde los clientes al balanceador de carga y desde el balanceador de carga al objetivo.
      </td>
    </tr>

    <tr>
      <td>
        `estimatedProcessedBytes.Average, Maximum, Minimum`
      </td>

      <td>
        El número estimado de bytes procesados por un balanceador de carga de aplicaciones.
      </td>
    </tr>
  </tbody>
</table>
