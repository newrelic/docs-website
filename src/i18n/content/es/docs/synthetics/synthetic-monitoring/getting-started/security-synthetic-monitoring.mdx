---
title: Seguridad para monitoreo sintético
tags:
  - Synthetics
  - Synthetic monitoring
  - Getting started
metaDescription: 'What we do to ensure data privacy and security with synthetic monitoring in New Relic, and what you can do.'
freshnessValidatedDate: never
translationType: machine
---

El monitoreo sintético de New Relic utiliza [monitores](/docs/synthetics/new-relic-synthetics/getting-started/types-synthetics-monitors) distribuidos en los [centros de datos de todo el mundo](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips). Por diseño, captura lo que son esencialmente datos de rendimiento para tráfico simulado. No captura ni maneja ningún dato personal por defecto. Se espera que todos los datos manejados por Monitor Sintético sean de carácter no personal.

Este documento proporciona detalles adicionales sobre lo que hacemos para garantizar la privacidad y seguridad de los datos con el monitoreo sintético, además de opciones adicionales que puede utilizar. Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad](/docs/security/new-relic-security/data-privacy/data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Que hacemos [#security-measures]

Aquí hay un resumen de las medidas de seguridad y privacidad de datos que New Relic le brinda.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Privacidad y seguridad de datos
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Sin datos personales
      </td>

      <td>
        Por definición, todos los datos recopilados a través del monitoreo sintético son datos de prueba creados con el propósito de monitoreo. Ninguno de estos datos incluye datos personales de ningún individuo.
      </td>
    </tr>

    <tr>
      <td>
        TLS
      </td>

      <td>
        Se requiere [cifrado TLS](/docs/apm/new-relic-apm/getting-started/networks#tls) para todos los dominios. Esto se aplica a [la ubicación pública](/docs/apm/new-relic-apm/getting-started/networks#synthetics-public) y [a la ubicación privada](/docs/apm/new-relic-apm/getting-started/networks#synthetics-private).
      </td>
    </tr>

    <tr>
      <td>
        Autenticación
      </td>

      <td>
        El monitoreo sintético admite una variedad de mecanismos de autenticación, incluidos Basic, Digest, NTLM y NTLMv2. Las opciones disponibles dependen del [tipo de monitor](/docs/synthetics/new-relic-synthetics/getting-started/types-synthetics-monitors) que elija.
      </td>
    </tr>

    <tr>
      <td>
        Recopilación de datos
      </td>

      <td>
        Los datos cedidos al Sintético extremo incluyen:

        * Monitor los resultados de la ejecución, incluidos los encabezados completos de solicitud y respuesta de todas las solicitudes, un archivo HAR completo de la sesión y cualquier captura de pantalla capturada (en caso de falla o manualmente)

        * Sondeo de trabajos disponibles en la cola de la ubicación privada

        * Minion privado "latido del corazón" cada 30 segundos

          El [evento`SyntheticsPrivateMinion` ](/attribute-dictionary/?event=SyntheticsPrivateMinion)contiene el estado básico del minion, incluidos los recuentos de éxitos y errores del trabajo, el tamaño de la cola, la versión del minion, etc.
      </td>
    </tr>

    <tr>
      <td>
        Datos recividos
      </td>

      <td>
        Los datos recibidos del extremo de monitoreo sintético contienen los detalles de la verificación programada. Esto incluye la información necesaria para completar la verificación del minion:

        * URL objetivo
        * Texto de validación
        * Script completo (para Sintético monitor de browser con script)
      </td>
    </tr>

    <tr>
      <td>
        Ubicación de almacenamiento de datos
      </td>

      <td>
        Los datos recopilados mediante monitoreo sintético se almacenan en la región seleccionada por cada cliente para su cuenta ([EE. UU. o UE)](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers).

        Los detalles de configuración monitor (incluida la frecuencia, las ubicaciones de verificación, la URL de destino y el script completo para cualquier browser con script o monitores de prueba API) se almacenan por nuestra parte. También almacenamos todos los resultados de las comprobaciones de monitor para cada tipo de monitor.
      </td>
    </tr>

    <tr>
      <td>
        Almacenamiento de datos por tipo de monitor
      </td>

      <td>
        Para el monitor de ping, el almacenamiento de datos incluye el [archivo HAR](https://en.wikipedia.org/wiki/HAR_(file_format)), que incluye todas las solicitudes y respuestas realizadas durante la verificación.

        Para pruebas simples de browser, browser con secuencias de comandos y API, el almacenamiento de datos incluye lo siguiente:

        * El archivo HAR incluye encabezados completos de solicitud y respuesta para todas las solicitudes realizadas durante la verificación.
        * Cualquier captura de pantalla tomada durante la verificación se incluye automáticamente de forma sencilla y se monitorea el browser con script solo en caso de falla. Sin embargo, puede configurar esto manualmente con un script.
        * El browser log (consola JS) se incluye automáticamente para un browser simple y con script.
        * Cualquier salida de secuencia de comandos se incluye para el browser con secuencia de comandos y el monitor de prueba de API.
      </td>
    </tr>

    <tr>
      <td>
        Organismos de respuesta
      </td>

      <td>
        New Relic nunca almacena cuerpos de respuesta de solicitudes originadas por monitoreo sintético, a menos que haya configurado manualmente un script monitor para hacerlo.
      </td>
    </tr>

    <tr>
      <td>
        Direcciones IP
      </td>

      <td>
        Se espera que [Sintético minion público](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips) se active utilizando credenciales no personales. Sus direcciones IP no están definidas como datos personales según las leyes de privacidad y protección de datos.
      </td>
    </tr>
  </tbody>
</table>

## Lo que puedes hacer [#additional-security]

Para niveles adicionales de seguridad y privacidad de datos, considere utilizar estas opciones.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Medidas adicionales
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Acceso de usuario
      </td>

      <td>
        Para controlar cuál de sus usuarios puede acceder a su monitor y ubicación privada, configure [permisos de monitoreo sintético basados en roles y grupos de usuarios](/docs/synthetics/new-relic-synthetics/administration/user-roles-synthetics). Además, para realizar un seguimiento y recibir notificaciones sobre los cambios, utilice [registros de auditoría y notificaciones de alerta](/docs/synthetics/new-relic-synthetics/administration/synthetics-audit-log-track-changes-made-users).
      </td>
    </tr>

    <tr>
      <td>
        Contraseñas, clave de API, nombres de usuario, etc.
      </td>

      <td>
        Para almacenar información confidencial de forma segura, utilice [credenciales seguras](/docs/synthetics/new-relic-synthetics/using-monitors/store-secure-credentials-scripted-browsers-api-tests) para pruebas de API y browser con secuencias de comandos. Las credenciales se almacenan de forma segura mediante cifrado AES-GCM de 256 bits en reposo con claves administradas por AWS Key Management Service (KMS).
      </td>
    </tr>

    <tr>
      <td>
        Sitios detrás del firewall
      </td>

      <td>
        Para controlar qué sitios desea monitor detrás de su firewall, puede:

        * Agregue las direcciones IP públicas de Sintético minion a su lista de 'permitidos' o lista de denegación.
        * Utilice la ubicación privada para monitor sitios o extremos. Esto puede proporcionar una capa adicional de seguridad al monitorear sus sitios y servicios alojados internamente.
      </td>
    </tr>

    <tr>
      <td>
        Páginas web detrás de las páginas de inicio de sesión
      </td>

      <td>
        Si configura el monitoreo sintético para rastrear áreas del sitio web que se encuentran detrás de una página de inicio de sesión, asegúrese de crear un inicio de sesión no personal específicamente para este propósito. Este inicio de sesión único reducirá el riesgo de exposición involuntaria de datos personales.
      </td>
    </tr>

    <tr>
      <td>
        Configuración de proxy
      </td>

      <td>
        Además del seguimiento de URL objetivo de New Relic, Minion Privado enviará y recibirá datos periódicamente del extremo de seguimiento sintético. Para configurar un proxy para todo el tráfico hacia y desde este extremo, configure la [variable de entorno MINION_API_PROXY](/docs/synthetics/new-relic-synthetics/private-locations/containerized-private-minion-cpm-configuration#environment-variables) en el host minion .
      </td>
    </tr>

    <tr>
      <td>
        Minion seguridad privada
      </td>

      <td>
        Para asegurarse de que solo los scripts que desea ejecutar puedan ejecutarse en Minion Privado, utilice [la ejecución script verificada](/docs/synthetics/new-relic-synthetics/private-locations/verified-script-execution-private-locations).
      </td>
    </tr>
  </tbody>
</table>
