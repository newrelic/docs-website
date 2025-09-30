---
title: Integración de Amazon Security Lake
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'The New Relic Amazon Security Lake integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para AWS Security Lake, lo que le permite enviar sus datos log de seguridad a New Relic.

Recopile y envíe telemetry data a New Relic desde [Security Lake](https://aws.amazon.com/security-lake/) utilizando nuestra integración. Puede utilizar esta integración para monitor sus servicios, consultar datos entrantes y crear un panel para observar todo de un vistazo.

## Activar la integración [#activate]

Para habilitar esta integración, configure un reenviador de registros S3. Le sugerimos utilizar nuestra aplicación de reenvío Serverless para mayor facilidad y conveniencia, pero también puede configurar la suya propia.

<Callout variant="tip">
  Tiene dos opciones para la configuración de monitoreo de Security Lake. Puede consolidar varias regiones para evitar repetir pasos, o puede configurarlo por región. Para obtener más detalles, consulte [administrar varias regiones](https://docs.aws.amazon.com/security-lake/latest/userguide/manage-regions.html).
</Callout>

## Requisitos previos [#prerequisites]

Antes de habilitar esta integración, primero asegúrese de completar estos pasos para Security Lake:

1. Complete los pasos mencionados en la [guía de introducción a](https://docs.aws.amazon.com/security-lake/latest/userguide/getting-started.html) Amazon Security Lake.
2. Complete los requisitos previos para configurar un suscriptor con acceso a datos siguiendo los pasos de la [guía para suscriptores de Security Lake](https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-data-access.html#prereqs-creating-subscriber).

## Pasos de configuración [#steps]

A continuación se ofrece una descripción general de los pasos que seguirá:

1. [Cree un suscriptor de Security Lake](#create-subscriber).
2. [Instale nuestro reenviador de registros dedicado de Amazon Security Lake](#install-log-forwarder).
3. [Encuentre y utilice sus datos log ](#logs).

## Crear un suscriptor de Security Lake [#create-subscriber]

1. Navegue hasta la característica Security Lake en su [consola AWS ](console.aws.amazon.com/securitylake).
2. Seleccione <DNT>**Subscribers**</DNT> y seleccione <DNT>**Create Subscriber**</DNT>.
3. Asigne un nombre al suscriptor y seleccione una región.
4. Seleccione qué fuentes log y eventos desea enviar a New Relic.
5. Complete los detalles restantes como se describe a continuación:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Data access method`
      </td>

      <td>
        T3
      </td>
    </tr>

    <tr>
      <td>
        `Account ID`
      </td>

      <td>
        Inserte el AWS

        `account ID`

        donde planea instalar la aplicación Serverless proporcionada por New Relic.
      </td>
    </tr>

    <tr>
      <td>
        `External ID`
      </td>

      <td>
        Inserta tu New Relic

        `AccountID`

        . Para obtener más información, consulte

        [ID externo](https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-data-access.html#subscriber-external-id)
      </td>
    </tr>

    <tr>
      <td>
        `Notification details`
      </td>

      <td>
        Cola SQS
      </td>
    </tr>
  </tbody>
</table>

6. Seleccione <DNT>**Create**</DNT>.
7. Desde la página <DNT>**Subscriber details**</DNT> , copie sus ARN de <DNT>**AWS role ID**</DNT> y <DNT>**Subscription endpoint**</DNT> . Los necesitarás para el siguiente paso.

## Instale nuestro reenviador de registros de Amazon Security Lake [#install-log-forwarder]

Para instalar el reenviador de registros:

1. Abra el [AWS Serverless Application Repository](https://serverlessrepo.aws.amazon.com/applications) en su browser.

   <img
     title="AWS Lambda - Select region"
     alt="AWS Lambda - Select region"
     src="/images/serverless_screenshot-crop_AWS-Lambda-select-region.webp"
   />

2. Busque `newrelic` y marque

   <DNT>
     **Show apps that create custom IAM roles or resource policies**
   </DNT>

   para encontrar el `newrelic-securitylake-s3-processor-LogForwarder`.

3. Haga clic en los detalles `newrelic-securitylake-s3-processor-LogForwarder` y haga clic en

   <DNT>
     **Deploy**
   </DNT>

   .

4. Copie y pegue el ARN `AWS role ID` del paso anterior en el campo `SecurityLakeSubscriberRoleArn` .

5. Copie y pegue el ARN `Subscription endpoint` del paso anterior en el campo `SecurityLakeSubscriberRoleArn` .

6. Ingrese el `ExternalID` que agregó en el paso anterior.

7. Ingrese su

   <InlinePopover type="licenseKey"/>

   en el campo `NRLicenseKey` .

8. Confirme y seleccione

   <DNT>
     **Deploy**
   </DNT>

   .

Para obtener más detalles sobre esto, consulte [nuestros documentos sobre el reenviador de registros de Amazon Security Lake](/docs/logs/forward-logs/aws-lambda-sending-security-logs-s3).

## Buscar y utilizar datos log [#logs]

Para encontrar su registro en New Relic, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> y establezca <DNT>**Attributes**</DNT> en `product.name`, y luego elija la fuente log que desee.

Actualmente se admiten las siguientes fuentes log :

* [RUTA 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/logging-monitoring.html)
* [FLUJO DE VPC](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)
* [RUTA DE LA NUBE](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-getting-started.html)
* [CENTRO DE SEGURIDAD](https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html)

<Callout variant="tip">
  Amazon Security Lake utiliza el [esquema OCSF](https://schema.ocsf.io/) para su registro.
</Callout>

Estos son los atributos que puede encontrar en el registro de Security Lake:

<CollapserGroup>
  <Collapser
    id="vpcflowlogs"
    title="Registro de flujo de VPC"
  >
    Consulta `Amazon VPC` log para ver los datos del siguiente atributo:

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Nombre
          </th>

          <th>
            Descripción
          </th>

          <th>
            Tipo de datos
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `activity_id`
          </td>

          <td>
            ID de actividad
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `activity_name`
          </td>

          <td>
            nombre de la actividad
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.invoked_function_arn`
          </td>

          <td>
            ARN de la función de reenvío log invocada
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.s3_bucket_name`
          </td>

          <td>
            nombre del depósito de S3 desde donde se reenvió el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.s3_key`
          </td>

          <td>
            registro clave del evento de seguridad del logde flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `category_name`
          </td>

          <td>
            nombre de la categoría del log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `category_uid`
          </td>

          <td>
            ID única de la categoría
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `class_name`
          </td>

          <td>
            nombre de la clase log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `class_uid`
          </td>

          <td>
            ID única de la clase
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `cloud.account_uid`
          </td>

          <td>
            Cuenta AWS donde se originó el log de flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `cloud.provider`
          </td>

          <td>
            muestra el nombre del proveedor de la nube, en este caso `AWS`
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `cloud.region`
          </td>

          <td>
            Región AWS donde se originó el log de flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `cloud.zone`
          </td>

          <td>
            Zona AWS donde se originó el log de flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.boundary`
          </td>

          <td>
            límite del logde flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.boundary_id`
          </td>

          <td>
            ID del límite
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.direction`
          </td>

          <td>
            muestra si la conexión fue entrante o saliente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.direction_id`
          </td>

          <td>
            ID de la dirección
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.protocol_num`
          </td>

          <td>
            número de protocolo del flujo
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.protocol_ver`
          </td>

          <td>
            versión del protocolo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.tcp_flags`
          </td>

          <td>
            Banderas TCP
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.instance_uid`
          </td>

          <td>
            ID de la instancia del destino
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.interface_uid`
          </td>

          <td>
            ID de interfaz del destino
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.intermediate_ips`
          </td>

          <td>
            direcciones IP intermedias del destino
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.ip`
          </td>

          <td>
            Dirección IP del destino
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.port`
          </td>

          <td>
            puerto de destino
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.subnet_uid`
          </td>

          <td>
            ID de subred del destino
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.svc_name`
          </td>

          <td>
            nombre del servicio del destino
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.vpc_uid`
          </td>

          <td>
            ID de VPC del destino
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `end_time`
          </td>

          <td>
            hora de finalización del flujo
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `logtype`
          </td>

          <td>
            define el tipo de registro
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.feature.name`
          </td>

          <td>
            nombre de la característica donde se originó el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.name`
          </td>

          <td>
            nombre del producto donde se originó el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.vendor_name`
          </td>

          <td>
            nombre del proveedor del log; en este caso `AWS`
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.version`
          </td>

          <td>
            nombre de la versión del producto
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.profiles`
          </td>

          <td>
            nombres de los perfiles
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.version`
          </td>

          <td>
            versión de metadatos
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `newrelic.source`
          </td>

          <td>
            fuente del log en New Relic
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `plugin.type`
          </td>

          <td>
            tipo de complemento utilizado
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `plugin.version`
          </td>

          <td>
            versión del complemento utilizado
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `severity`
          </td>

          <td>
            nivel de gravedad del hallazgo del log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `severity_id`
          </td>

          <td>
            ID del nivel de gravedad
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.instance_uid`
          </td>

          <td>
            ID de la instancia de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.interface_uid`
          </td>

          <td>
            ID de interfaz de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.intermediate_ips`
          </td>

          <td>
            direcciones IP intermedias de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.ip`
          </td>

          <td>
            Dirección IP de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.port`
          </td>

          <td>
            puerto de origen
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.subnet_uid`
          </td>

          <td>
            ID de subred de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.svc_name`
          </td>

          <td>
            nombre del servicio de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.vpc_uid`
          </td>

          <td>
            ID de VPC de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `start_time`
          </td>

          <td>
            hora de inicio
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `time`
          </td>

          <td>
            hora de inicio
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `timestamp`
          </td>

          <td>
            Hora en que el log llega a New Relic
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `traffic.bytes`
          </td>

          <td>
            cantidad de bytes que se envían o reciben
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `traffic.packets`
          </td>

          <td>
            cantidad de paquetes que se envían o reciben
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `type_name`
          </td>

          <td>
            nombre del tipo de evento
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `type_uid`
          </td>

          <td>
            ID del tipo de evento
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `unmapped`
          </td>

          <td>
            no hay datos analizados no asignados a un campo
          </td>

          <td>
            cadena
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="cloudtrail"
    title="NubeTrail"
  >
    Consulta `CloudTrail` log para ver los datos del siguiente atributo:

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Nombre
          </th>

          <th>
            Descripción
          </th>

          <th>
            Tipo de datos
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `activity_id`
          </td>

          <td>
            ID de actividad
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `activity_name`
          </td>

          <td>
            nombre de la actividad
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `api.operation`
          </td>

          <td>
            funcionamiento de la actividad API
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `api.request.uid`
          </td>

          <td>
            ID única de la solicitud API
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `api.response.error`
          </td>

          <td>
            respuesta de error de la solicitud de API
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `api.response.message`
          </td>

          <td>
            mensaje de la respuesta API
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `api.service.name`
          </td>

          <td>
            nombre del servicio donde se originó la solicitud
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `api.version`
          </td>

          <td>
            Versión API
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.invoked_function_arn`
          </td>

          <td>
            ARN de la función de reenvío log invocada
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.s3_bucket_name`
          </td>

          <td>
            nombre del depósito de S3 desde donde se reenvió el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.s3_key`
          </td>

          <td>
            registro clave del evento de seguridad del logde flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `category_name`
          </td>

          <td>
            nombre de la categoría del log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `category_uid`
          </td>

          <td>
            ID única de la categoría
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `class_name`
          </td>

          <td>
            nombre de la clase log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `class_uid`
          </td>

          <td>
            ID única de la clase
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `cloud.provider`
          </td>

          <td>
            muestra el nombre del proveedor de la nube, en este caso `AWS`
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `cloud.region`
          </td>

          <td>
            Región AWS donde se originó el log de flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `http_request.user_agent`
          </td>

          <td>
            agente de usuario de la solicitud HTTP
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `identity.idp.name`
          </td>

          <td>
            Nombre de IDP del solicitante
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `identity.invoked_by`
          </td>

          <td>
            nombre de la característica que invoca la solicitud
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `identity.session.created_time`
          </td>

          <td>
            tiempo de creación de sesión
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `identity.session.issuer`
          </td>

          <td>
            ARN del emisor
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `identity.session.mfa`
          </td>

          <td>
            MFA habilitado
          </td>

          <td>
            booleano
          </td>
        </tr>

        <tr>
          <td>
            `identity.user.account_uid`
          </td>

          <td>
            Cuenta AWS del usuario
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `identity.user.credential_uid`
          </td>

          <td>
            identificación de credencial del usuario
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `identity.user.name`
          </td>

          <td>
            nombre del usuario
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `identity.user.type`
          </td>

          <td>
            tipo de usuario
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `identity.user.uid`
          </td>

          <td>
            ID del usuario
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `identity.user.uuid`
          </td>

          <td>
            ARN del usuario
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `logtype`
          </td>

          <td>
            define el tipo de registro
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.feature.name`
          </td>

          <td>
            nombre de la característica donde se originó el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.name`
          </td>

          <td>
            nombre del producto donde se originó el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.vendor_name`
          </td>

          <td>
            nombre del proveedor del log; en este caso `AWS`
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.version`
          </td>

          <td>
            nombre de la versión del producto
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.profiles`
          </td>

          <td>
            nombres de los perfiles
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.version`
          </td>

          <td>
            versión de metadatos
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `newrelic.source`
          </td>

          <td>
            fuente del log en New Relic
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `plugin.type`
          </td>

          <td>
            tipo de complemento utilizado
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `plugin.version`
          </td>

          <td>
            versión del complemento utilizado
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `ref_event_uid`
          </td>

          <td>
            ID única para evento de referencia
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `resources`
          </td>

          <td>
            recursos
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `severity`
          </td>

          <td>
            nivel de gravedad del hallazgo del log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `severity_id`
          </td>

          <td>
            ID del nivel de gravedad
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.domain`
          </td>

          <td>
            dominio de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.ip`
          </td>

          <td>
            Dirección IP de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.uid`
          </td>

          <td>
            ID única de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `time`
          </td>

          <td>
            hora de inicio
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `timestamp`
          </td>

          <td>
            Hora en que el log llega a New Relic
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `type_name`
          </td>

          <td>
            nombre del tipo de evento
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `type_uid`
          </td>

          <td>
            ID del tipo de evento
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `unmapped`
          </td>

          <td>
            no hay datos analizados no asignados a un campo
          </td>

          <td>
            cadena
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="securityhub"
    title="Registro del centro de seguridad"
  >
    Consulta `Security Hub` log para ver los datos del siguiente atributo:

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Nombre
          </th>

          <th>
            Descripción
          </th>

          <th>
            Tipo de datos
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `activity_id`
          </td>

          <td>
            ID de actividad
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `activity_name`
          </td>

          <td>
            nombre de la actividad
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `answers`
          </td>

          <td>
            respuestas
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.invoked_function_arn`
          </td>

          <td>
            ARN de la función de reenvío log invocada
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.s3_bucket_name`
          </td>

          <td>
            nombre del depósito de S3 desde donde se reenvió el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.s3_key`
          </td>

          <td>
            registro clave del evento de seguridad del logde flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `category_name`
          </td>

          <td>
            nombre de la categoría del log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `category_uid`
          </td>

          <td>
            ID única de la categoría
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `class_name`
          </td>

          <td>
            nombre de la clase log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `class_uid`
          </td>

          <td>
            ID única de la clase
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `cloud.account_uid`
          </td>

          <td>
            ID de la cuenta de AWS
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `cloud.provider`
          </td>

          <td>
            muestra el nombre del proveedor de la nube, en este caso `AWS`
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `cloud.region`
          </td>

          <td>
            Región AWS donde se originó el log de flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.direction`
          </td>

          <td>
            dirección de la conexión
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.direction_id`
          </td>

          <td>
            ID de la dirección de la conexión
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `connection_info.protocol_name`
          </td>

          <td>
            protocolo de conexión
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.instance_uid`
          </td>

          <td>
            ID de destino de la instancia
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `dst_endpoint.interface_uid`
          </td>

          <td>
            ID de interfaz de destino
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `logtype`
          </td>

          <td>
            define el tipo de registro
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.feature.name`
          </td>

          <td>
            nombre de la característica donde se originó el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.name`
          </td>

          <td>
            nombre del producto donde se originó el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.vendor_name`
          </td>

          <td>
            nombre del proveedor del log; en este caso `AWS`
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.version`
          </td>

          <td>
            nombre de la versión del producto
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.profiles`
          </td>

          <td>
            nombres de los perfiles
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.version`
          </td>

          <td>
            versión de metadatos
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `newrelic.source`
          </td>

          <td>
            fuente del log en New Relic
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `plugin.type`
          </td>

          <td>
            tipo de complemento utilizado
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `plugin.version`
          </td>

          <td>
            versión del complemento utilizado
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `query.class`
          </td>

          <td>
            clase de consulta
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `query.hostname`
          </td>

          <td>
            consultar nombre de host
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `query.type`
          </td>

          <td>
            Tipo de consulta
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `rcode`
          </td>

          <td>
            código de respuesta
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `rcode`
          </td>

          <td>
            ID del código de respuesta
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `severity`
          </td>

          <td>
            nivel de gravedad del hallazgo del log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `severity_id`
          </td>

          <td>
            ID del nivel de gravedad
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.instance_uid`
          </td>

          <td>
            ID de la instancia de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.ip`
          </td>

          <td>
            Dirección IP de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.port`
          </td>

          <td>
            puerto de origen
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `src_endpoint.vpc_uid`
          </td>

          <td>
            ID de VPC de la fuente
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `time`
          </td>

          <td>
            hora de inicio
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `timestamp`
          </td>

          <td>
            Hora en que el log llega a New Relic
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `type_name`
          </td>

          <td>
            nombre del tipo de evento
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `type_uid`
          </td>

          <td>
            ID del tipo de evento
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `unmapped`
          </td>

          <td>
            no hay datos analizados no asignados a un campo
          </td>

          <td>
            cadena
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="route53"
    title="Registro de consultas de resolución de ruta 53"
  >
    Consulta `Route 53` log para ver los datos del siguiente atributo:

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Nombre
          </th>

          <th>
            Descripción
          </th>

          <th>
            Tipo de datos
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `activity_id`
          </td>

          <td>
            ID de actividad
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `activity_name`
          </td>

          <td>
            nombre de la actividad
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.invoked_function_arn`
          </td>

          <td>
            ARN de la función de reenvío log invocada
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.s3_bucket_name`
          </td>

          <td>
            nombre del depósito de S3 desde donde se reenvió el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `aws.s3_key`
          </td>

          <td>
            registro clave del evento de seguridad del logde flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `category_name`
          </td>

          <td>
            nombre de la categoría del log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `category_uid`
          </td>

          <td>
            ID única de la categoría
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `class_name`
          </td>

          <td>
            nombre de la clase log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `class_uid`
          </td>

          <td>
            ID única de la clase
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `cloud.account_uid`
          </td>

          <td>
            ID de la cuenta de AWS
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `cloud.provider`
          </td>

          <td>
            muestra el nombre del proveedor de la nube, en este caso `AWS`
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `cloud.region`
          </td>

          <td>
            Región AWS donde se originó el log de flujo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `compliance.requirements`
          </td>

          <td>
            requisitos de conformidad
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `compliance.status`
          </td>

          <td>
            estado de cumplimiento
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `compliance.status_detail`
          </td>

          <td>
            detalles sobre el estado de cumplimiento
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `confidence`
          </td>

          <td>
            confianza
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `finding.created_time`
          </td>

          <td>
            momento de creación del hallazgo
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `finding.desc`
          </td>

          <td>
            descripción del hallazgo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `finding.first_seen_time`
          </td>

          <td>
            momento en que se vio el hallazgo por primera vez
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `finding.last_seen_time`
          </td>

          <td>
            Hora en la que se vio el hallazgo por última vez.
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `finding.first_seen_time`
          </td>

          <td>
            momento en que se vio el hallazgo por primera vez
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `finding.modified_time`
          </td>

          <td>
            momento en que se modificó el hallazgo
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `finding.related_events`
          </td>

          <td>
            evento relacionado con el hallazgo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `finding.remediation.desc`
          </td>

          <td>
            información sobre la remediación del hallazgo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `finding.remediation.kb_articles`
          </td>

          <td>
            Artículos de la base de conocimientos sobre la corrección de los hallazgos.
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `finding.src_url`
          </td>

          <td>
            URL de la fuente del hallazgo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `finding.title`
          </td>

          <td>
            título del hallazgo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `finding.types`
          </td>

          <td>
            lista de tipos relacionados con el hallazgo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `finding.uid`
          </td>

          <td>
            ARN del hallazgo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `logtype`
          </td>

          <td>
            define el tipo de registro
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `malware`
          </td>

          <td>
            malware
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.feature.name`
          </td>

          <td>
            nombre de la característica donde se originó el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.name`
          </td>

          <td>
            nombre del producto donde se originó el log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.vendor_name`
          </td>

          <td>
            nombre del proveedor del log; en este caso `AWS`
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.product.version`
          </td>

          <td>
            nombre de la versión del producto
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.profiles`
          </td>

          <td>
            nombres de los perfiles
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `metadata.version`
          </td>

          <td>
            versión de metadatos
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `newrelic.source`
          </td>

          <td>
            fuente del log en New Relic
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `plugin.type`
          </td>

          <td>
            tipo de complemento utilizado
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `plugin.version`
          </td>

          <td>
            versión del complemento utilizado
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `process.created_time`
          </td>

          <td>
            tiempo de creación del proceso
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `process.file.name`
          </td>

          <td>
            nombre del archivo del proceso
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `process.file.path`
          </td>

          <td>
            ruta del archivo de proceso
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `process.file.type_id`
          </td>

          <td>
            ID de tipo de archivo de proceso
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `process.name`
          </td>

          <td>
            nombre del proceso
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `process.parent_process.pid`
          </td>

          <td>
            ID de proceso del proceso padre
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `process.pid`
          </td>

          <td>
            identificacion de proceso
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `process.terminated_time`
          </td>

          <td>
            tiempo de terminación del proceso
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `resources`
          </td>

          <td>
            recursos
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `severity`
          </td>

          <td>
            nivel de gravedad del hallazgo del log
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `severity_id`
          </td>

          <td>
            ID del nivel de gravedad
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `state`
          </td>

          <td>
            estado del hallazgo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `state_id`
          </td>

          <td>
            identificación estatal del hallazgo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `time`
          </td>

          <td>
            hora de inicio
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `timestamp`
          </td>

          <td>
            Hora en que el log llega a New Relic
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `type_name`
          </td>

          <td>
            nombre del tipo de evento
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `type_uid`
          </td>

          <td>
            ID del tipo de evento
          </td>

          <td>
            entero
          </td>
        </tr>

        <tr>
          <td>
            `unmapped`
          </td>

          <td>
            no hay datos analizados no asignados a un campo
          </td>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <td>
            `vulnerabilities`
          </td>

          <td>
            vulnerabilidades
          </td>

          <td>
            cadena
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Cómo utilizar tus datos

Para saber más sobre cómo utilizar sus datos, consulte [comprender los datos de integración](/docs/infrastructure/infrastructure-integrations/get-started/understand-use-data-infrastructure-integrations/).

## Alerta

Puede configurar <InlinePopover type="alerts"/>para que le notifique los cambios importantes. Por ejemplo, se puede configurar una alerta para notificar a las partes relevantes sobre errores críticos o fatales.

Obtenga más información sobre [cómo crear alertas](/docs/alerts-applied-intelligence/new-relic-alerts/learn-alerts/introduction-alerts/).

## Otra integración AWS

Lea más sobre la integración New Relic AWS :

* [Monitoreo Ruta 53](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-route-53-monitoring-integration/)
* [Monitoreo de registros de flujo de VPC](/docs/network-performance-monitoring/setup-performance-monitoring/cloud-flow-logs/aws-vpc-flow-log-monitoring/)
* [Monitoreo de CloudTrail](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-cloudtrail-monitoring-integration/)
* [Ingerir registro de S3](/docs/logs/forward-logs/aws-lambda-sending-logs-s3/)
