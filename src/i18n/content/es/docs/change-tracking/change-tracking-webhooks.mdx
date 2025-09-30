---
title: Notifique a su equipo sobre el despliegue de la aplicación APM
tags:
  - APM
metaDescription: 'After you set up the changes you want to monitor, you can use a webhook to notify your colleagues about the impacts of those changes.'
freshnessValidatedDate: '2023-08-29T00:00:00.000Z'
translationType: machine
---

Después de registrar un despliegue para una entidad de aplicación APM, puede mantener a su equipo informado sobre esos cambios mediante el uso de un webhook. Estos están disponibles ya sea que registre su despliegue utilizando la característica de seguimiento de cambios o la [API REST](/docs/apm/apm-ui-pages/events/record-deployments/#api-instructions) anterior.

## Permisos requeridos [#requirements]

La configuración de notificación de seguimiento de cambios requiere [permisos](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions) específicos:

* Para `create` el webhook: `Modify` permisos para `Applied intelligence > Destinations` y `Applied intelligence > Channels`.
* Para `view` y `test` el webhook: `View` permisos para `Applied intelligence > Destinations` y `Applied intelligence > Channels`.
* Para `modify` el webhook: `View` permisos para `Applied intelligence > Destinations` y `Applied intelligence > Channels`, y `Modify` en `Applied intelligence > Destinations`.
* Para `delete` el webhook: `Delete` permisos para `Applied intelligence > Destinations` y `Applied intelligence > Channels`.

## Obtenga la URL de destino de su webhook [#get-webhook-url]

Puede enviar datos desplegables a una variedad de destinos de webhooks. Siga las instrucciones de la herramienta que está utilizando para obtener la URL del webhook. Una vez que tenga la URL, complete los pasos de la siguiente sección para configurar la notificación del webhook.

Si utilizas Slack, sigue las instrucciones que aparecen aquí para configurar la aplicación <InlinePopover type="alerts"/>legacy New Relic:

1. Log sesión en su cuenta de Slack como administrador y luego vaya a

   <DNT>
     **Apps**
   </DNT>

   .

2. Busque

   <DNT>
     **New Relic Alerts**
   </DNT>

   y haga clic en ese mosaico.

3. En la lista

   <DNT>
     **New Relic Alerts**
   </DNT>

   , haga clic en el botón

   <DNT>
     **Configuration**
   </DNT>

   debajo del icono New Relic .

4. Haga clic en la pestaña

   <DNT>
     **Configuration**
   </DNT>

   debajo del encabezado

   <DNT>
     **New Relic Alerts**
   </DNT>

   .

5. En la pestaña

   <DNT>
     **Configuration**
   </DNT>

   , haga clic en el icono de lápiz.

6. Desplácese hacia abajo hasta la sección

   <DNT>
     **Webhook URL**
   </DNT>

   y haga clic en

   <DNT>
     **Copy URL**
   </DNT>

   .

## Configurar notificación de webhook para cambios rastreados [#configure-webhook]

Inserte la URL del webhook en la UI de New Relic:

1. Vaya a la pantalla de configuración de notificación desplegable:

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/) > (user menu) > Administration > Integrations > Deploy notifications**
   </DNT>

   .

2. Pegue la URL de su webhook en el campo

   <DNT>
     **Webhook URL**
   </DNT>

   y haga clic en

   <DNT>
     **Save**
   </DNT>

   .

3. Haga clic en

   <DNT>
     **Send a test request**
   </DNT>

   para enviar una carga útil de ejemplo con datos artificiales a la URL de su webhook.

   <img
     style={{align: "left"}}
     title="A screenshot showing how to test the webhook"
     alt="A screenshot showing how to test the webhook"
     src="/images/tracking_screenshot-crop_webhook_test.webp"
   />

4. En

   <DNT>
     **Toggle this webhook**
   </DNT>

   , puedes desactivar o volver a activar la notificación de webhook deslizando el botón.

5. Para eliminar permanentemente la configuración de notificación del webhook, haga clic en

   <DNT>
     **Delete this webhook**
   </DNT>

   .

## Estructura de carga útil de notificación [#payload-structure]

Cuando su notificación de despliegue esté habilitada y comience a rastrear un cambio, su webhook recibirá una solicitud `POST` con una carga útil de tipo `application/x-www-form-urlencoded`. Las claves y los valores están codificados en tuplas de valor principal separadas por un `&`, con un símbolo `=` entre la clave y el valor. Los caracteres no alfanuméricos tanto en las claves como en los valores estarán codificados en URL.

Se enviarán las siguientes claves y valores, según el atributo del despliegue y de la entidad de la aplicación APM que se implementó.

<table>
  <thead>
    <tr>
      <th>
        Llave
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `created_at`
      </td>

      <td>
        La timestamp del despliegue en formato ISO 8601.
      </td>
    </tr>

    <tr>
      <td>
        `application_name`
      </td>

      <td>
        El nombre de la entidad de la aplicación APM.
      </td>
    </tr>

    <tr>
      <td>
        `account_name`
      </td>

      <td>
        El nombre de la cuenta propietaria de la entidad de aplicación APM.
      </td>
    </tr>

    <tr>
      <td>
        `changelog`
      </td>

      <td>
        Una lista de cambios incluidos en el despliegue.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        Una descripción del despliegue.
      </td>
    </tr>

    <tr>
      <td>
        `revision`
      </td>

      <td>
        La versión del software desplegar.
      </td>
    </tr>

    <tr>
      <td>
        `deployment_url`
      </td>

      <td>
        Un enlace a la UI desplegable para la entidad de aplicación APM
      </td>
    </tr>

    <tr>
      <td>
        `deployed_by`
      </td>

      <td>
        El usuario que implementa la aplicación.
      </td>
    </tr>
  </tbody>
</table>
