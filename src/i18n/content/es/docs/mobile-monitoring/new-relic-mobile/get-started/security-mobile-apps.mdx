---
title: Seguridad para aplicaciones móviles
tags:
  - Mobile monitoring
  - New Relic Mobile
  - Get started
metaDescription: 'For an overview of New Relic''s security measures for mobile applications, start here.'
freshnessValidatedDate: never
translationType: machine
---

Para proteger la seguridad de su aplicación móvil y la privacidad de los datos de su usuario, New Relic solo registra datos de rendimiento, como se describe en este documento. No recopilamos ningún dato utilizado o almacenado por la aplicación de monitor. Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad de datos](/docs/security/new-relic-security/data-privacy/data-privacy-new-relic), o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Recopilación de datos [#collection]

Cuando instala New Relic, nuestras capacidades <InlinePopover type="mobile"/>pasan a formar parte de su aplicación iOS o Android. Estas capacidades se encuentran dentro del "sandbox" de su aplicación, por lo que no pueden acceder a nada más que a los datos de rendimiento desde su aplicación móvil. No recopilamos datos de rendimiento sobre el dispositivo en sí, como el nivel de la batería.

Nuestro agente de SDK móvil recopila y envía datos específicos al [recolector](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#collector) de New Relic, que incluyen:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Datos móviles recopilados
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Dispositivos
      </td>

      <td>
        * Duración de la sesión de aplicación
        * Nombre del proveedor de servicios inalámbricos
        * El nombre del modelo y el fabricante del dispositivo, y la versión del sistema operativo.
        * Ciertos nombres de paquetes, clases, métodos y subprocesos
        * Un [identificador de instancia](#identifiers)único
      </td>
    </tr>

    <tr>
      <td>
        Solicitudes y respuestas
      </td>

      <td>
        * URL de solicitudes HTTP, junto con el código de estado HTTP, el tiempo de respuesta y el tamaño de la solicitud y el cuerpo de la respuesta.
        * Código de error del sistema operativo para fallas de red (solicitudes HTTP que no se completan)
        * Los primeros 2 KB del cuerpo de la respuesta cuando la solicitud HTTP recibe un código de estado de respuesta `4xx` o `5xx`
        * Solo Android: un rastreo del stack cuando la solicitud HTTP recibe un código de estado de respuesta `4xx` o `5xx`
      </td>
    </tr>
  </tbody>
</table>

El agente envía todos los datos mediante cifrado HTTPS y valida el certificado SSL del recopilador. Esto evita ataques comunes de rastreo de datos y suplantación de servidores. El agente también elimina la cadena de consulta, el identificador de fragmento, el nombre de usuario y la contraseña de cada URL antes de enviar los datos.

## Extremo de datos seguros [#endpoints]

Nuestro agente SDK móvil envía los datos recopilados al recopilador para su procesamiento. Puede redirigir esas publicaciones de datos a servidores proxy o delegados para un manejo seguro de los datos.

* <DNT>
    **Android:**
  </DNT>

  Puede utilizar API para especificar la autoridad URI del extremo de datos del recopilador de fallos y recolección. Para obtener más información, consulte la [documentación sobre la configuración del agente de Android y los indicadores de características](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/configure-settings/).

* <DNT>
    **iOS:**
  </DNT>

  Para obtener más información, consulte [la documentación sobre la configuración del agente iOS y los indicadores de características](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/configure-settings/).

## Identificador único [#identifiers]

Nuestro agente de SDK móvil asigna un identificador único a cada instancia de aplicación instalada para realizar un seguimiento de instalaciones discretas, identificar sesiones recurrentes y correlacionar el rendimiento a lo largo del tiempo.

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Agente móvil
      </th>

      <th>
        Identificador
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Android
      </td>

      <td>
        Nuestro agente de Android genera un UUID criptográficamente seguro y lo almacena en el `SharedPreferences` de la aplicación. Para obtener más información, consulte nuestra [documentación de requisitos y compatibilidad de Android](/docs/mobile-monitoring/new-relic-mobile-android/get-started/new-relic-android-compatibility-requirements).
      </td>
    </tr>

    <tr>
      <td>
        iOS
      </td>

      <td>
        Las medidas de seguridad utilizadas para iOS dependen de la versión del agente.

        * En las versiones 5.3.5 o superiores, el agente de iOS utiliza la propiedad `IdentifierForVendor` para proporcionar un ID de dispositivo único.

        * En las versiones 5.3.4 o inferiores, el agente de iOS utilizó la biblioteca de código abierto SecureUDID. SecureUDID es utilizado por muchas bibliotecas de terceros y es un estándar aceptado en la industria que no infringe las pautas de la tienda de aplicaciones de Apple. SecureUDID no utiliza identificadores de hardware del dispositivo como IMEI.

          Tenga en cuenta que nuestro SDK móvil no recopila IDFA (Identidad para anunciantes). Para obtener más información, consulte nuestra [documentación de requisitos y compatibilidad con iOS](/docs/mobile-monitoring/new-relic-mobile-ios/get-started/new-relic-ios-compatibility-requirements).
      </td>
    </tr>
  </tbody>
</table>

## Sin actualizaciones remotas [#updates]

New Relic no tiene la capacidad de actualizar el agente móvil de forma remota. El uso del agente no introducirá ningún código en su aplicación móvil sin su conocimiento.

## Almacenamiento de datos [#storage]

Nuestro agente de SDK móvil almacena información de configuración utilizando las preferencias normales de su aplicación o la API de configuración en el dispositivo móvil. Esta configuración incluye su:

* Token de aplicación
* Número de versión de la aplicación
* Número de versión del agente SDK de Android o iOS
* Configuraciones como la cantidad máxima de solicitudes HTTP para rastrear por minuto

Los datos de rendimiento se almacenan en la memoria. Nunca se escribe en el almacenamiento del dispositivo.

New Relic maneja el almacenamiento de datos del lado del servidor para aplicaciones móviles de la misma manera que todos los demás monitores de aplicaciones. Para obtener más información, consulte nuestra documentación de seguridad sobre [hosting y almacenamiento de datos](/docs/security/new-relic-security/data-privacy/security-controls-privacy#Hosting_and_Data_Storage).

En general, conservamos los datos de rendimiento según el período de tiempo más generoso de su suscripción web o móvil. También conservamos registros agregados del número de instancias activas de su aplicación.

## Instrumentación agregada a su código [#instrumentation]

Nuestro agente de SDK móvil inyecta código en ciertas llamadas a métodos dentro de su aplicación para recopilar datos de rendimiento. Esto puede tener el efecto de agregar marcos stack al gráfico de llamadas de su aplicación donde se ejecuta nuestro código. Esto nos permite cronometrar y monitor las entradas y salidas de varias API.

Este código agregado ha sido revisado y probado para detectar fallas relacionadas con la seguridad e incorpora las mejores prácticas relacionadas con la codificación segura. Debido a que nuestro código se ejecuta dentro del proceso de su aplicación, está sujeto a los mismos derechos y restricciones que su propio código.

Además, nuestro agente de iOS registra un controlador NSURLProtocol para rastrear la actividad de red basada en NSURLConnection. Esta instrumentación es compatible con otros controladores NSURLProtocol personalizados que su aplicación pueda registrar. El controlador está registrado dentro de un proceso de aplicación único, por lo que no puede monitor las solicitudes de red que se originan en otras aplicaciones o el sistema operativo subyacente.

## Dirección IP del usuario [#ip-address]

Nuestro agente SDK móvil captura la dirección IP del usuario para enriquecer los datos y obtener información adicional del usuario. La dirección IP se utiliza como valor de búsqueda que se asigna a detalles adicionales y permite a nuestros clientes diagnosticar problemas de rendimiento. Los valores de búsqueda de direcciones IP incluyen:

* Nombre de la aplicación
* Código de país
* Región
* Código Postal
* Latitud
* Longitud
* Codigo de AREA

Para más información sobre eventos y atributos para monitoreo de móviles, consulte nuestro [diccionario de datos](/attribute-dictionary?attribute_name=&field_data_source_tid%5B%5D=8342).

New Relic no retiene la dirección IP del usuario después de que se haya asignado el atributo. El valor de la dirección IP se almacena en caché en la memoria durante hasta seis horas antes de descartarse. Si tiene preguntas o inquietudes sobre este uso de direcciones IP con respecto a sus propias obligaciones regulatorias de notificación y consentimiento, comuníquese con sus equipos legales o de privacidad.
