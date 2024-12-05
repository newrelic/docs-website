---
title: Envíe datos de New Relic a través de AWS PrivateLink
metaDescription: Send telemetry from your VPC to New Relic via AWS PrivateLink
freshnessValidatedDate: '2023-06-30T00:00:00.000Z'
translationType: machine
---

Puede enviar telemetry data desde su nube privada virtual (VPC) de AWS a New Relic a través de [AWS PrivateLink](https://aws.amazon.com/privatelink).

## Descripción general [#overview]

Enviar sus datos de New Relic a través de AWS PrivateLink puede:

* Reduzca sus costos de salida de AWS
* Mejore la seguridad manteniendo sus datos dentro de la red de Amazon

PrivateLink funciona para enviar [telemetry data](/docs/data-apis/understand-data/new-relic-data-types) a una variedad de [extremos](#endpoints) de New Relic. No se puede utilizar para nuestra [APINerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) ni para otras API que no sean de ingesta.

Para utilizar esta característica, deberá configurar un [extremo de interfaz](#create) en su VPC que su agente e integración local de New Relic utilizarán para enrutar datos a New Relic a través de AWS PrivateLink.

## Requisitos [#requirements]

PrivateLink requiere la opción [New Relic Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing/#data-plus) . Si intenta enviar datos sin Data Plus, el tráfico enviado a través de PrivateLink será rechazado y devuelto con un error 402.

## Regiones y zonas admitidas [#regions-zones]

New Relic expone el extremo AWS PrivateLink por lo siguiente:

<table>
  <thead>
    <tr>
      <th>
        Región
      </th>

      <th>
        Zona
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        us-east-2 (Ohio)
      </td>

      <td>
        * `use2-az1`
        * `use2-az2`
        * `use2-az3`
      </td>
    </tr>

    <tr>
      <td>
        eu-central-1
      </td>

      <td>
        * `euc1-az1`
        * `euc1-az2`
        * `euc1-az3`
      </td>
    </tr>
  </tbody>
</table>

Un servicio extremo está disponible solo en la región donde se creó ([consulte los documentos de Amazon](https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html)), pero se puede acceder a él desde otras regiones mediante el emparejamiento entre regiones.

Esto significa que si su VPC está en `us-east-2`, lo único que debe hacer es crear el extremo de VPC interno necesario, como se describe a continuación. Pero si se encuentra en otra región, también deberá [configurar una conexión de intercambio de tráfico](#peering) después de ese paso.

## El extremo [#endpoints]

Estos son los servicios extremos de New Relic disponibles a través de AWS PrivateLink:

<Tabs>
  <TabsBar>
    <TabsBarItem id="us-endpoints">
      A NOSOTROS
    </TabsBarItem>

    <TabsBarItem id="eu-endpoints">
      UE
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="us-endpoints">
      <table>
        <thead>
          <tr>
            <th>
              Fuente de datos
            </th>

            <th>
              Nombre de anfitrión(es)
            </th>

            <th>
              Nombre del servicio extremo
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              APM
            </td>

            <td>
              `collector.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-00e75af63239fbdc8`
            </td>
          </tr>

          <tr>
            <td>
              API de eventos
            </td>

            <td>
              `insights-collector.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-030074dde03e5f7f1`
            </td>
          </tr>

          <tr>
            <td>
              API métrica (incluido Prometheus y otras integraciones)
            </td>

            <td>
              `metric-api.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-0b48963952181a468`
            </td>
          </tr>

          <tr>
            <td>
              Inicio sesión
            </td>

            <td>
              `log-api.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-070f8190492d268ec`
            </td>
          </tr>

          <tr>
            <td>
              rastreo distribuido
            </td>

            <td>
              `trace-api.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-0cc5a5c85730683db`
            </td>
          </tr>

          <tr>
            <td>
              Monitoreo de registros de AWS Lambda y Cloudwatch
            </td>

            <td>
              `cloud-collector.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-0c4032e13941b3e9d`
            </td>
          </tr>

          <tr>
            <td>
              Monitoreo de infraestructura e integración en el host
            </td>

            <td>
              `infra-api.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-0df10112dc8c0f0b0`
            </td>
          </tr>

          <tr>
            <td/>

            <td>
              `identity-api.newrelic.com` `infrastructure-command-api.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-09230bb8d16a9171e`
            </td>
          </tr>

          <tr>
            <td>
              OpenTelemetry
            </td>

            <td>
              `otlp.nr-data.net`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-0bf91fb637cf37b4f`
            </td>
          </tr>

          <tr>
            <td>
              Responsable de trabajo Sintético
            </td>

            <td>
              `synthetics-horde.nr-data.net`
            </td>

            <td>
              `com.amazonaws.vpce.us-east-2.vpce-svc-09230bb8d16a9171e`
            </td>
          </tr>
        </tbody>
      </table>

      <Callout variant="important">
        Revise las siguientes restricciones al configurar el nombre de host `identity-api.newrelic.com`, `infrastructure-command-api.newrelic.com` o `synthetics-horde.nr-data.net` :

        * Estos solo están expuestos en la región `us-east-2` (Ohio).
        * El servicio extremo no tiene un nombre privado DNS asociado. Cree un PrivateLink conectado a este extremo de servicio y cree la Zona Privada Alojada (PHZ) para cada nombre de host.
      </Callout>
    </TabsPageItem>

    <TabsPageItem id="eu-endpoints">
      <table>
        <thead>
          <tr>
            <th>
              Fuente de datos
            </th>

            <th>
              Nombre de anfitrión(es)
            </th>

            <th>
              Nombre del servicio extremo
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              APM
            </td>

            <td>
              `collector.eu.newrelic.com` y `collector.eu01.nr-data.net`
            </td>

            <td>
              `com.amazonaws.vpce.eu-central-1.vpce-svc-080da8c256534bc15` y `com.amazonaws.vpce.eu-central-1.vpce-svc-09677bc6c976d9d9e`, respectivamente
            </td>
          </tr>

          <tr>
            <td>
              API de eventos
            </td>

            <td>
              `insights-collector.eu01.nr-data.net`
            </td>

            <td>
              `com.amazonaws.vpce.eu-central-1.vpce-svc-02a22c14c11af33eb`
            </td>
          </tr>

          <tr>
            <td>
              API métrica (incluido Prometheus y otras integraciones)
            </td>

            <td>
              `metric-api.eu.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.eu-central-1.vpce-svc-046613de75b465eb5`
            </td>
          </tr>

          <tr>
            <td>
              Inicio sesión
            </td>

            <td>
              `log-api.eu.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.eu-central-1.vpce-svc-042ba37fec695fcde`
            </td>
          </tr>

          <tr>
            <td>
              rastreo distribuido
            </td>

            <td>
              `trace-api.eu.newrelic.com`
            </td>

            <td>
              `com.amazonaws.vpce.eu-central-1.vpce-svc-07ae0a14716c59a2d`
            </td>
          </tr>

          <tr>
            <td>
              Monitoreo de registros de AWS Lambda y Cloudwatch
            </td>

            <td>
              `cloud-collector.eu01.nr-data.net`
            </td>

            <td>
              `com.amazonaws.vpce.eu-central-1.vpce-svc-0cf7eae9d784a86a8`
            </td>
          </tr>

          <tr>
            <td>
              Monitoreo de infraestructura e integración en el host
            </td>

            <td>
              `infra-api.eu01.nr-data.net`
            </td>

            <td>
              `com.amazonaws.vpce.eu-central-1.vpce-svc-06d5b2d7e79ddd78e`
            </td>
          </tr>

          <tr>
            <td>
              OpenTelemetry
            </td>

            <td>
              `otlp.eu01.nr-data.net`
            </td>

            <td>
              `com.amazonaws.vpce.eu-central-1.vpce-svc-04308d96cf1012913`
            </td>
          </tr>
        </tbody>
      </table>
    </TabsPageItem>
  </TabsPages>
</Tabs>

<Callout variant="tip">
  extremo aún **no** están disponibles para:

  * Datos FedRAMP
  * New Relic
  * Tráfico TCP de Syslog
  * CloudWatch Metric Streams
</Callout>

## Crear extremo de VPC [#create]

Para cada uno de los servicios extremos de New Relic que esté utilizando de la tabla anterior, [cree y adjunte un extremo VPC](https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html) dentro de su VPC. Al crear estos extremos, deberá configurar las subredes de VPC y los grupos de seguridad correspondientes a las zonas de disponibilidad que New Relic ha configurado con el servicio extremo.

Utilice la tabla y la captura de pantalla a continuación como guía para crear y adjuntar el VPC extremo:

<table>
  <thead>
    <tr>
      <th>
        Campo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Name tag**
        </DNT>
      </td>

      <td>
        Opcional.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Service category**
        </DNT>
      </td>

      <td>
        Seleccione <DNT>**Other endpoint services**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Service settings**
        </DNT>
      </td>

      <td>
        Para <DNT>**Service name**</DNT>, busque el valor en la tabla y haga clic en <DNT>**Verify**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **VPC**
        </DNT>
      </td>

      <td>
        Seleccione la VPC en el menú desplegable.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Additional settings**
        </DNT>
      </td>

      <td>
        Seleccione lo siguiente:

        * <DNT>
            **Enable DNS name**
          </DNT>
        * <DNT>
            **IPv4**
          </DNT>

          Al marcar la opción <DNT>**Enable DNS name**</DNT> para el extremo de la VPC, la ruta PrivateLink reemplazará la ruta pública dentro de esa VPC. También es posible que desee [controlar el acceso a los servicios utilizando políticas extremas](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html#vpc-endpoint-policies) para limitar el acceso dentro de su VPC.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Subnets**
        </DNT>
      </td>

      <td>
        Seleccione las zonas. Para <DNT>**IP address type**</DNT>, seleccione <DNT>**IPv4**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Security groups**
        </DNT>
      </td>

      <td>
        Seleccione el <DNT>**Group ID**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Tags**
        </DNT>
      </td>

      <td>
        Inserte pares de valores principales opcionales.
      </td>
    </tr>
  </tbody>
</table>

Aquí hay una captura de pantalla de algunas configuraciones de muestra:

<CollapserGroup>
  <Collapser
    id="aws-vpc-endpoint-ui"
    title="Crear extremo"
  >
    <img
      title="Screenshot of where to start an on-demand session"
      alt="Screenshot of where to start an on-demand session"
      src="/images/accounts_screenshot-full_aws-create-vpc-endpoint-ui.webp"
    />
  </Collapser>
</CollapserGroup>

## Configurar una conexión de peering [#peering]

Esto solo es necesario si estás utilizando una región distinta de `us-east-2` (Ohio).

### Emparejamiento de VPC [#vpc-peering]

Siga [las instrucciones para crear interconexiones de VPC entre regiones](https://docs.aws.amazon.com/vpc/latest/peering/create-vpc-peering-connection.html), especificando el ID de VPC de las conexiones extremas que creó.

### Emparejamiento de puerta de enlace de tránsito [#transit-gateway-peering]

Siga [las instrucciones para crear un PHZ de Ruta 53 y compartirlo entre VPC](https://aws.amazon.com/blogs/networking-and-content-delivery/integrating-aws-transit-gateway-with-aws-privatelink-and-amazon-route-53-resolver), especificando el ID de VPC de las conexiones extremas que creó.
