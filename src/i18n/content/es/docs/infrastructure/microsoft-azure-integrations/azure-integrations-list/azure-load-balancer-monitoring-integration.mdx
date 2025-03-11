---
title: Integración de monitoreo de Azure Load Balancer
tags:
  - Integrations
  - Microsoft Azure integrations
  - Azure integrations list
metaDescription: 'New Relic''s Microsoft Azure Load Balancer integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

[New Relic monitoreo de infraestructura](/docs/infrastructure) proporciona una integración para [Microsoft Azure Load Balancer](https://docs.microsoft.com/en-us/azure/load-balancer/) que reporta datos de su servicio Azure Load Balancer a New Relic. Este documento explica cómo activar esta integración y describe los datos que se pueden capturar.

## Característica

La integración de New Relic para Azure Load Balancer reporta datos métricos sobre los balanceadores de carga TCP y UDP que distribuyen el tráfico entre instancias de servicios definidos en un conjunto de carga equilibrada. Los datos métricos incluyen disponibilidad de IP virtual e IP dinámica, y recuentos de paquetes y bytes procesados. También recopila datos sobre el estado y configuración del servicio.

Usando New Relic, puedes:

* Vea los datos de Azure Load Balancer en un panel prediseñado.
* [Ejecute consultas personalizadas y visualice los datos](/docs/using-new-relic/data/understand-data/query-new-relic-data).
* Cree condición de alerta para notificarle sobre cambios en los datos.

## Requisitos

Las métricas de Load Balancer se recopilan solo si utiliza el SKU estándar de Microsoft Load Balancer.

## Activar la integración [#activate]

Para habilitar la integración:

1. Asegúrese de estar utilizando el [SKU estándar de Microsoft Load Balancer](#requirements).
2. Siga los procedimientos estándar para [activar su servicio Azure en New Relic](/docs/infrastructure/microsoft-azure-integrations/getting-started/activate-azure-integrations).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

New Relic consulta sus servicios de Azure Load Balancer según un intervalo [de sondeo](/docs/integrations/microsoft-azure-integrations/getting-started/azure-integration-polling) predeterminado, que varía según la integración. Frecuencia de sondeo para la integración de Azure Load Balancer:

* Intervalo de sonda: 5 minutos
* Resolución: 1 minuto

## Buscar y utilizar datos [#find-and-use]

Para [explorar sus datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure > (select an integration)**</DNT>.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `AzureLoadBalancerSample` , con un valor `provider` de `AzureLoadBalancer`.

## Datos métricos [#metrics]

Para ver las métricas reportadas por la integración de Azure Load Balancer, consulte el tipo de evento `AzureLoadBalancerSample` . Utilice los metadatos asociados con cada métrica para [filtrar y facetar](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric) los datos que se informan. Para obtener información métrica detallada, consulte la documentación [métrica admitida por Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/metrics-supported#microsoftnetworkloadbalancers) .

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Métrica
      </th>

      <th>
        Descripción
      </th>

      <th>
        Metadatos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `vipAvailability`
      </td>

      <td>
        Disponibilidad promedio de la ruta de datos del Load Balancer por duración.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`
      </td>
    </tr>

    <tr>
      <td>
        `dipAvailability`
      </td>

      <td>
        Estado promedio de la sonda de estado del balanceador de carga por duración.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`

        `backendIPAddress`

        `backendPort`

        `protocolType`
      </td>
    </tr>

    <tr>
      <td>
        `byteCount`
      </td>

      <td>
        Número total de Bytes transmitidos dentro del período de tiempo.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`

        `direction`
      </td>
    </tr>

    <tr>
      <td>
        `packetCount`
      </td>

      <td>
        Número total de paquetes transmitidos dentro del período de tiempo.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`

        `direction`
      </td>
    </tr>

    <tr>
      <td>
        `synCount`
      </td>

      <td>
        Número total de paquetes SYN transmitidos dentro del período de tiempo.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`

        `direction`
      </td>
    </tr>

    <tr>
      <td>
        `snatConnectionCount`
      </td>

      <td>
        Número total de nuevas conexiones SNAT, es decir, conexiones salientes creadas dentro del período de tiempo.
      </td>

      <td>
        `frontendIPAddress`

        `backendIPAddress`

        `connectionState`
      </td>
    </tr>

    <tr>
      <td>
        `allocatedSnatPorts`
      </td>

      <td>
        Número total de puertos SNAT asignados dentro del período de tiempo.
      </td>

      <td>
        `frontendIPAddress`

        `backendIPAddress`

        `protocolType`
      </td>
    </tr>

    <tr>
      <td>
        `usedSnatPorts`
      </td>

      <td>
        Número total de puertos SNAT utilizados dentro del período de tiempo.
      </td>

      <td>
        `frontendIPAddress`

        `backendIPAddress`

        `protocolType`
      </td>
    </tr>
  </tbody>
</table>
