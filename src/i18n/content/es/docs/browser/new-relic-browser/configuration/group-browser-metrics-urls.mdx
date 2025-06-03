---
title: Agrupar datos del navegador por URL
tags:
  - Browser
  - Browser monitoring
  - Configuration
metaDescription: 'To override the default URL patterns New Relic uses to group event data, add URLs to your allow list in browser monitoring settings.'
freshnessValidatedDate: never
translationType: machine
---

Nuestro <InlinePopover type="browser"/>utiliza patrones de URL para los datos de las [páginas<DNT>**Page views**</DNT> ](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity)y [<DNT>**AJAX**</DNT> ](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls). Los beneficios de utilizar patrones de URL incluyen:

* Presente tiempos para visitas a páginas y llamadas AJAX mediante útiles agrupaciones de páginas similares.
* Utilice un formato que sea intuitivo según las URL del sitio.

La agrupación de URL se puede realizar automáticamente según el análisis del browser del espacio de URL del sitio web. Esto da como resultado patrones de URL como `www.foo.com/users/*/profile`, que omiten el parámetro de ID de usuario variable y agrupan vistas de páginas de "perfil de usuario" similares.

Puede crear sus propios grupos de URL para capturar aquellas partes de la URL que son similares en muchas vistas de páginas individuales diferentes y para proporcionar información sobre la ruta del código que generó el contenido de la URL. También puedes crear condiciones para [agregar un dominio específico](/docs/browser/new-relic-browser/installation-configuration/monitor-or-block-specific-domains) a tu lista de 'permitidos' o lista de denegación.

## Entrada para lista de 'permitidos' [#whitelists]

Los grupos de URL se crean automáticamente cuando una aplicación informa datos por primera vez a New Relic. Las entradas a estos algoritmos de agrupación incluyen:

* Las URL a las que acceden los usuarios en su sitio.
* El extremo AJAX al que su sitio realiza llamadas (ya sea su propio extremo o el extremo de un tercero)

Cuando se carga una URL o se registra una llamada AJAX, la URL primero se filtra eliminando cualquier parámetro de consulta de la URL. Los fragmentos de hash también se eliminan [a menos que esté utilizando monitoreo SPA](/docs/browser/single-page-app-monitoring/use-spa-data/understand-spa-data-collection). Estos parámetros pueden contener información confidencial y, en muchos casos, varían demasiado como para crear agrupaciones útiles.

## Comportamiento de agrupación automática [#hierarchy]

Una vez filtrada la URL, New Relic analiza las solicitudes y divide las URL en segmentos con caracteres separadores (puntos para dominio, barras diagonales para rutas). Esta lógica también conserva términos útiles y los utiliza en la agrupación automatizada. La información del dominio se separa automáticamente por número de puerto, de modo que (por ejemplo) HTTP y HTTPS extremo se enumeran por separado.

## Agregar agrupaciones de URL [#adding]

Puedes modificar cómo browser agrupa tus datos agregando a la URL de tu aplicación una lista de 'permitidos'. Agregar segmentos hace que estos términos siempre aparezcan en sus grupos de URL para los nuevos datos reportados a New Relic. Nunca se acumularán en `*`.

El orden no es importante cuando se enumeran varios segmentos. Sin embargo, asegúrese de que los segmentos que agregue <DNT>**exactly match**</DNT> tal como aparecen en sus URL. Si un segmento de ruta URL termina en `.html` o `.jsp`, la extensión debe incluirse en el segmento. Los segmentos distinguen entre mayúsculas y minúsculas.

Para agregar nuevos segmentos de URL a la lista de 'permitidos' de su aplicación, puede agregarlos mediante programación usando [GraphQL](/docs/apis/nerdgraph/examples/browser-monitoring-config-nerdgraph#browser-segments), o puede usar la lista de segmentos de 'permitidos' en la UI de monitoreo de navegador de New Relic:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings > Application settings > Segment allow lists**
   </DNT>

   .

2. En

   <DNT>
     **Allow listed segments**
   </DNT>

   , seleccione el signo más

   <Icon name="fe-plus-circle"/>

   icono.

3. Escriba los [segmentos](#format) que desea que aparezcan en agrupaciones en las páginas

   <DNT>
     **Page views**
   </DNT>

   y

   <DNT>
     **AJAX**
   </DNT>

   .

4. Introduzca segmentos de dominio (elementos del dominio entre puntos) o segmentos de ruta (elementos de la ruta URL entre barras).

## Crear reglas [#format]

Siga estas pautas para crear su lista de URL de 'permitidos'.

<table>
  <thead>
    <tr id="segments">
      <th width={200}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this...**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Añade un segmento que no ves a la lista
      </td>

      <td>
        Ingrese al segmento. Por ejemplo, si ve `/users/*` y tiene una ruta `/users/edit` que no ve, ingrese `edit` en la lista.

        No puede enumerar números, GUID o segmentos extremadamente largos (100 o más caracteres).
      </td>
    </tr>

    <tr>
      <td>
        Listar un dominio
      </td>

      <td>
        Ingrese cada segmento del dominio. Por ejemplo, para agregar `www.newrelic.com` a su lista de 'permitidos', ingrese `www`, `newrelic` y `com`.
      </td>
    </tr>

    <tr>
      <td>
        Listar una ruta
      </td>

      <td>
        Agregue todos los términos para esa ruta. Por ejemplo, para ver `www.domain1.com/bar/foo` y ya ve `www.domain1.com`, ingrese `bar` y `foo` como segmentos.
      </td>
    </tr>
  </tbody>
</table>

## Mantener lista de URL de 'permitidos' [#maintaining]

Con el tiempo, las URL o el dominio de su aplicación pueden cambiar. Adaptamos automáticamente las agrupaciones de su aplicación en función de estos cambios, pero es posible que también desee realizar cambios que se adapten mejor a sus necesidades actuales. Siga [los procedimientos estándar](#adding) para agregar o eliminar segmentos de su lista de 'permitidos' para cambiar la forma en que se agrupan sus URL.

El algoritmo de agrupación automatizado de monitoreo de IA para agrupar URL es útil, pero ocasionalmente puede ver más agrupaciones diferentes de las que espera. Si ve demasiadas agrupaciones de URL o términos que no le resultan útiles, o si tiene problemas para agrupar sus URL de manera efectiva, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com).

## Nombres de controladores [#controller]

El monitoreo del navegador utiliza patrones de URL para agrupar datos en lugar de nombres de acciones del controlador del lado del servidor, como `ApplicationsController#show`. Incluye enlaces al evento backend <InlinePopover type="apm"/>relacionado, según corresponda. Sin embargo, esta no es la estrategia de agrupación principal para browser como servicio independiente.
