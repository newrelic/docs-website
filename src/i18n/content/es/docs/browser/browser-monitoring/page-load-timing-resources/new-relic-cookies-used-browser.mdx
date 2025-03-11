---
title: Cookies del agente del navegador (en desuso)
tags:
  - Browser
  - Browser monitoring
  - Page load timing resources
metaDescription: 'Deprecated: Information on New Relic browser agent and its use of cookies for session and timing tracking.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Para la versión 1220 y posteriores del agente del browser, [el uso de cookies de sesión ha quedado obsoleto](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1220/#removed-3rd-party-cookies), por lo que esta información solo es relevante si está utilizando la versión 1216 y anteriores del agente del browser.

  Estas cookies estaban relacionadas con el monitoreo de la aplicación browser . Para obtener más información sobre la privacidad de los datos y cómo solicitar la eliminación de datos, consulte [Solicitudes de datos personales de New Relic](/docs/using-new-relic/new-relic-security/security/new-relic-personal-data-requests).
</Callout>

Este documento describe la privacidad de los datos relacionados con <InlinePopover type="browser"/>y las cookies, y detalles sobre las propias cookies. Antes de la versión 1220 del agente del navegador, se creaban las siguientes [cookies](/docs/browser/new-relic-browser/performance-quality/security-new-relic-browser#cookies) para [el seguimiento de la sesión](/docs/browser/new-relic-browser/page-load-timing-resources/session-tracking) en los navegadores finales del usuario.

## Privacidad de datos y cumplimiento legal [#gdpr]

La configuración predeterminada del agente del navegador no retiene ningún dato personal según lo definen las leyes de privacidad comunes, como el Reglamento General de Protección de Datos (GDPR) de la UE (GDPR) y la Ley de Privacidad del Consumidor de California (CCPA). New Relic ha tomado medidas para permitir que nuestros clientes que opten por procesar datos personales en nuestros productos lo hagan de acuerdo con las leyes de privacidad aplicables. Utilice la información adicional a continuación para ayudarle a cumplir con dichas leyes:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Datos
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Direcciones IP
      </td>

      <td>
        New Relic recopila y aprovecha brevemente la dirección IP del usuario final como parte del proceso de recopilación de datos. La IP se captura cuando se establece una conexión entre el browser del usuario final y el [recolector de datos de New Relic](/docs/using-new-relic/welcome-new-relic/getting-started/glossary). La dirección IP se incluye en la solicitud web, de forma muy parecida a un identificador de llamadas. New Relic usa la IP, de manera muy similar a como ves un número de teléfono cuando alguien te llama.

        La dirección IP se utiliza como valor de búsqueda que se asigna a detalles adicionales, lo que permite a los clientes de New Relic diagnosticar problemas de rendimiento.

        Los valores de búsqueda de direcciones IP incluyen:

        * [`countryCode`](/attribute-dictionary/?event=PageView&attribute=countryCode)

        * [`regionCode`](/attribute-dictionary/?event=PageView&attribute=regionCode)

        * [`city`](/attribute-dictionary/?event=PageView&attribute=city)

        * `asn (Autonomous System Number)`

        * `asnOrganization (ISP/Business/Institution)`

        * [`asnLatitude`](/attribute-dictionary/?event=PageView&attribute=asnLatitude)

        * [`asnLongitude`](/attribute-dictionary/?event=PageView&attribute=asnLongitude)

          El proceso de mapeo para el valor de búsqueda de la dirección IP normalmente se completa en cuestión de minutos, pero en algunos casos extremos puede tardar hasta 24 horas en procesarse. Una vez que se completa el proceso de mapeo, New Relic ya no conserva la dirección IP.
      </td>
    </tr>

    <tr>
      <td>
        Cookies predeterminadas (en desuso)
      </td>

      <td>
        En las versiones del agente del navegador v1217 e inferiores, el agente configura cookies de forma predeterminada. Para esos agentes, las cookies las coloca el agente del navegador y el recopilador de New Relic. El recolector New Relic coloca una cookie cuando el agente del navegador realiza una conexión y transmite datos.

        Se puede utilizar un administrador de consentimiento de cookies que utiliza un cargador script condicional que solo carga etiquetas/fragmentos cuando un visitante acepta un tipo específico de cookies. Al elegir esta opción, existe el riesgo de que el rendimiento de la página no se capture hasta que el visitante haya aceptado y el agente del navegador se esté ejecutando.

        Con el lanzamiento del [agente del navegador v1169](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1169), puede desactivar la recopilación de cookies ([`JSESSIONID`](#jsessionid) y [`NREUM`](#nreum)) para la aplicación de su navegador utilizando la página <DNT>**Application settings**</DNT> en la UI de New Relic. Una vez que este valor de configuración se establezca en falso (DESACTIVADO), ya no verá la información de la sesión en los datos de su evento.

        De forma predeterminada, el valor está establecido en verdadero (ON) para todas las aplicaciones browser existentes, así como para las recién creadas. Para obtener más información, consulte nuestros [documentos sobre recopilación de cookies y seguimiento de sesiones](/docs/browser/browser-monitoring/page-load-timing-resources/cookie-collection-session-tracking).
      </td>
    </tr>

    <tr>
      <td>
        Datos personales a través de la configuración personalizada browser
      </td>

      <td>
        New Relic ofrece la opción de configurar manualmente su agente a través de la [API de monitoreo de navegador](/docs/browser/new-relic-browser/browser-agent-spa-api). Esto podría usarse para capturar datos personales, sujeto a las restricciones establecidas en los Términos de servicio de New Relic. (Por ejemplo, no se permiten números de tarjetas de crédito ni categorías sensibles de datos personales, que están prohibidos por contrato). New Relic responde a las instrucciones especificadas por el agente, incluida la recopilación de datos personales que pueden configurarse de forma personalizada.

        Si usted (como controlador de datos) recibe una solicitud de uno de sus propios clientes y determina que los datos personales enviados a New Relic para su procesamiento deben eliminarse, consulte [Solicitudes de datos personales de New Relic](/docs/using-new-relic/new-relic-security/security/new-relic-personal-data-requests).
      </td>
    </tr>
  </tbody>
</table>

## Detalles sobre la recopilación de cookies obsoletas [#cookies]

<CollapserGroup>
  <Collapser
    id="jsessionid"
    title="JSESSIONID (en desuso)"
  >
    La cookie `JSESSIONID` está obsoleta para la versión 1220 y superiores del agente. El seguimiento de la sesión ya no se realiza mediante cookies.

    Solía almacenar un <DNT>**session identifier**</DNT> para que New Relic pueda monitor el recuento de sesiones de una aplicación. El valor de la cookie lo genera Jetty.

    <table>
      <thead>
        <tr>
          <th width={200}>
            Componentes
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Identificador de sesión
          </td>

          <td>
            New Relic lo utiliza para monitor el recuento de sesiones de una aplicación.
          </td>
        </tr>

        <tr>
          <td>
            Dominio
          </td>

          <td>
            La cookie `JSESSIONID` está asociada con el dominio New Relic.
          </td>
        </tr>

        <tr>
          <td>
            Vencimiento
          </td>

          <td>
            `JSESSIONID` Es una cookie de sesión que se elimina cuando se cierra el browser .
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="nreum-cookie"
    title="NREUM (en desuso)"
  >
    <Callout variant="important">
      Las cookies de sincronización de navegación están obsoletas para la versión del agente v1223 y superiores. Todos los navegadores compatibles con las versiones actuales del agente del navegador admiten [Navigation Timing API](/docs/browser/new-relic-browser/browser-agent-apis/navigation-timing-api).
    </Callout>

    Esta cookie solo se crea en navegadores que no admiten la [API de sincronización de navegación](/docs/browser/new-relic-browser/browser-agent-apis/navigation-timing-api). Cuando un browser admite la API de sincronización de navegación, se puede utilizar una interfaz nativa para determinar la hora de inicio de la navegación.

    Las versiones 7 o superiores de Mozilla Firefox admiten la API de sincronización de navegación. Sin embargo, existe un error en las primeras implementaciones de Firefox de la API de sincronización de navegación que el monitoreo del navegador soluciona mediante el uso de esta cookie.

    <table>
      <thead>
        <tr>
          <th width={200}>
            Componentes
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Hora de inicio de la navegación
          </td>

          <td>
            Se requiere la hora de inicio de la navegación para medir el tiempo de respuesta del usuario final. La cookie se escribe cuando se descarga la página actual (cuando comienza la siguiente navegación).
          </td>
        </tr>

        <tr>
          <td>
            Ubicación del documento
          </td>

          <td>
            Almacenado como hash. La ubicación del documento se utiliza con la URL de la página de referencia para validar que la hora de inicio se refiere a la página que se estaba viendo o actualizando anteriormente (para evitar utilizar una hora de inicio no válida desde una navegación diferente).
          </td>
        </tr>

        <tr>
          <td>
            URL de páginas de referencia
          </td>

          <td>
            Almacenado como hash. La URL de la página de referencia se utiliza con la ubicación del documento para validar que la hora de inicio se refiere a la página que se estaba viendo o actualizando anteriormente (para evitar utilizar una hora de inicio no válida desde una navegación diferente).
          </td>
        </tr>

        <tr>
          <td>
            Dominio
          </td>

          <td>
            La cookie NREUM está asociada a la ruta raíz del dominio en el que se ejecuta el agente New Relic.
          </td>
        </tr>

        <tr>
          <td>
            Vencimiento
          </td>

          <td>
            NREUM es una cookie de sesión que se elimina cuando se cierra el browser .
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="nragent"
    title="NRAGENT (en desuso)"
  >
    La cookie NRAGENT se configura solo si utiliza [la versión](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) agente del navegador v443 o inferior. Se crea cuando el recolector de New Relic entrega un token a un usuario final.

    Las métricas del usuario final se comunican al recolector de New Relic mediante una solicitud JSONP del browser (recuperación de script). El JavaScript devuelto contiene una llamada para configurar el identificador del token que se escribe en la cookie en la siguiente navegación (cuando se descarga la página). Esto logra una comunicación entre dominios entre el recolector de New Relic y el agente de New Relic.

    Esta cookie se utiliza para comunicarse entre el recopilador New Relic que agrega la métrica del usuario final y los agentes que se ejecutan en la aplicación web asociada. Un token identifica y correlaciona la traza de la transacción [del nivel](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#tier) de aplicación con las correspondientes trazas del navegador.

    <table>
      <thead>
        <tr>
          <th width={200}>
            Componentes
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Identificador de token
          </td>

          <td>
            El identificador de token de 16 caracteres ayuda con la comunicación entre dominios entre el recolector de New Relic y el agente de New Relic.
          </td>
        </tr>

        <tr>
          <td>
            Dominio
          </td>

          <td>
            La cookie NRAGENT está asociada con la ruta raíz del dominio en el que se ejecuta el agente New Relic.
          </td>
        </tr>

        <tr>
          <td>
            Vencimiento
          </td>

          <td>
            NRAGENT es una cookie de sesión que se elimina cuando se cierra el browser .
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
