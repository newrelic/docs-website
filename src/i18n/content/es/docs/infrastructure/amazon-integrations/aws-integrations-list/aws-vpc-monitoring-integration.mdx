---
title: Integración de monitoreo de Amazon VPC
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon VPC monitoring integration: how to enable it, and the data it reports.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar sus datos de Amazon VPC a New Relic. Este documento explica cómo activar la integración y describe los datos reportados.

## Característica [#features]

Amazon [Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc/) es una red virtual que utiliza la infraestructura escalable de Amazon Web Services (AWS). Con la integración VPC de New Relic, puede obtener visibilidad de los cambios de configuración de eventos que se superponen en sus servicios de Amazon.

Los datos de VPC están disponibles en un panel prediseñado y puede crear [consultas y gráficos personalizados](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights). También puede crear una condición de alerta para notificarle sobre cambios en la VPC.

Además, [el registro de flujo de Amazon VPC mejorado](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/flow-logs.html) le permite capturar información sobre el tráfico IP hacia y desde las interfaces de red en su VPC.

## Activar [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) predeterminada para la integración de Amazon VPC:

* Intervalo de sonido predeterminado New Relic : 15 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto

## Buscar y utilizar datos [#find-data]

Para encontrar sus datos de integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de VPC.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) usando el `PrivateNetworkSample` [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data), con `provider` valores de:

* [Puerta de enlace VpcNat](#vpc-nat-gateway)
* [VpcVpnTúnel](#vpc-vpn-tunnel)

<Callout variant="important">
  De forma predeterminada, la recopilación de datos de VpcNatGateway, VpcVpnTunnel y VpcVpnConnection está deshabilitada.
</Callout>

Esto se debe a que si tiene muchas puertas de enlace NAT o muchas VPN (conexiones y túneles), podría generar un aumento en su factura de CloudWatch. Por este motivo, la integración proporciona ajustes de configuración para establecer si desea recuperar esos datos.

Para obtener más información sobre cómo utilizar sus datos, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

### Datos de la puerta de enlace NAT de VPC [#vpc-nat-gateway]

Esta integración recopila los siguientes datos de `PrivateNetworkSample` con un valor de proveedor de `VpcNatGateway`:

<Callout variant="tip">
  Para obtener descripciones completas, consulte [Dimensiones y métricas de Amazon VPC NAT Gateway](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/nat-gateway-metricscollected.html).
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "285px" }}>
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
        `activeConnectionCount`
      </td>

      <td>
        El número total de conexiones TCP activas simultáneas a través de la puerta de enlace NAT.
      </td>
    </tr>

    <tr>
      <td>
        `bytesInFromDestination`
      </td>

      <td>
        El número de bytes recibidos por la puerta de enlace NAT desde el destino.
      </td>
    </tr>

    <tr>
      <td>
        `bytesInFromSource`
      </td>

      <td>
        La cantidad de bytes recibidos por la puerta de enlace NAT de los clientes en su VPC.
      </td>
    </tr>

    <tr>
      <td>
        `bytesOutToDestination`
      </td>

      <td>
        La cantidad de bytes enviados a través de la puerta de enlace NAT al destino.
      </td>
    </tr>

    <tr>
      <td>
        `bytesOutToSource`
      </td>

      <td>
        La cantidad de bytes enviados a través de la puerta de enlace NAT a los clientes en su VPC.
      </td>
    </tr>

    <tr>
      <td>
        `connectionAttemptCount`
      </td>

      <td>
        La cantidad de intentos de conexión realizados a través de la puerta de enlace NAT.
      </td>
    </tr>

    <tr>
      <td>
        `connectionEstablishedCount`
      </td>

      <td>
        El número de conexiones establecidas a través de la puerta de enlace NAT.
      </td>
    </tr>

    <tr>
      <td>
        `errorPortAllocation`
      </td>

      <td>
        La cantidad de veces que la puerta de enlace NAT no pudo asignar un puerto de origen.
      </td>
    </tr>

    <tr>
      <td>
        `idleTimeoutCount`
      </td>

      <td>
        El número de conexiones que pasaron del estado activo al estado inactivo. Una conexión activa pasa a estar inactiva si no se cerró correctamente y no hubo actividad durante los últimos 350 segundos.
      </td>
    </tr>

    <tr>
      <td>
        `packetsDropCount`
      </td>

      <td>
        La cantidad de paquetes descartados por la puerta de enlace NAT.
      </td>
    </tr>

    <tr>
      <td>
        `packetsInFromDestination`
      </td>

      <td>
        La cantidad de paquetes recibidos por la puerta de enlace NAT desde el destino.
      </td>
    </tr>

    <tr>
      <td>
        `packetsInFromSource`
      </td>

      <td>
        La cantidad de paquetes recibidos por la puerta de enlace NAT de los clientes en su VPC.
      </td>
    </tr>

    <tr>
      <td>
        `packetsOutToDestination`
      </td>

      <td>
        La cantidad de paquetes enviados a través de la puerta de enlace NAT al destino.
      </td>
    </tr>

    <tr>
      <td>
        `packetsOutToSource`
      </td>

      <td>
        La cantidad de paquetes enviados a través de la puerta de enlace NAT a los clientes en su VPC.
      </td>
    </tr>
  </tbody>
</table>

### Túnel VPN VPC

Esta integración recopila los siguientes datos de `PrivateNetworkSample` con un valor de proveedor de `VpcVpnTunnel`:

<Callout variant="tip">
  Para obtener descripciones completas, consulte [Amazon VPC VPN métrica y Dimensiones](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/vpn-metricscollected.html).
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "285px" }}>
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
        `tunnelState`
      </td>

      <td>
        El estado del túnel. 0 indica ABAJO y 1 indica ARRIBA.
      </td>
    </tr>

    <tr>
      <td>
        `tunnelDataIn`
      </td>

      <td>
        Los bytes recibidos a través del túnel VPN. Cada punto de datos métrico representa el número de bytes recibidos después del punto de datos anterior. Utilice la estadística Suma para mostrar el número total de bytes recibidos durante el período.
      </td>
    </tr>

    <tr>
      <td>
        `tunnelDataOut`
      </td>

      <td>
        Los bytes enviados a través del túnel VPN. Cada punto de datos métrico representa el número de bytes enviados después del punto de datos anterior. Utilice la estadística Suma para mostrar el número total de bytes enviados durante el período.
      </td>
    </tr>
  </tbody>
</table>
