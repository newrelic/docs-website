---
title: Monitoreo del navegador y del agente PHP
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: Instrumentation for your New Relic PHP agent to set up browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

De forma predeterminada, el agente PHP agrega automáticamente [monitoreo de navegador](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) a las páginas web de su aplicación. En este proceso automatizado, el agente PHP inyecta el fragmento de JavaScript del agente del navegador en sus páginas web. Esto significa que obtienes monitoreo del rendimiento browser frontend sin necesidad de insertar manualmente el fragmento de JavaScript en el elemento principal de tu página.

Puede habilitar o deshabilitar la instrumentación automática en el archivo de configuración de su agente PHP, o puede usar la API del agente PHP para configurar manualmente el monitoreo del navegador.

## Usar o desactivar la instrumentación automática [#auto_instrumentation]

De forma predeterminada, el agente PHP inyecta automáticamente el fragmento de JavaScript del monitoreo del navegador en sus páginas. Para cambiar esta configuración, edite la configuración [`newrelic.browser_monitoring.auto_instrument`](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#inivar-autorum) en su archivo INI.

```ini
newrelic.browser_monitoring.auto_instrument=1
```

La instrumentación automática no funciona cuando se establece el campo de encabezado HTTP `Content-Length` . Para utilizar el monitoreo del navegador en esta situación, desactive la instrumentación automática e [inserte manualmente](#manual_instrumentation) el encabezado y pie de página de JavaScript en sus plantillas.

## Instrumento manual a través de la API del agente [#manual_instrumentation]

Para configurar manualmente el monitoreo del navegador, incluya el script apropiado en sus páginas. El agente PHP de New Relic tiene una API para generar automáticamente el encabezado y pie de página de JavaScript requeridos.

<Callout variant="important">
  Las llamadas a la API del agente PHP están condicionadas a que se cargue la extensión `newrelic` para que el agente PHP se esté ejecutando. Si el agente no se está ejecutando, las llamadas para generar el encabezado y pie de página de JavaScript generarán errores, ya que las funciones no estarán definidas.
</Callout>

Para más información, ver:

* [`auto_instrument` configuración del agente](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum)
* `newrelic_get_browser_timing_header()`
* `newrelic_get_browser_timing_footer()`

## Instrumento manual para varios marcos. [#manual_generic]

Este documento no proporciona procedimientos detallados para insertar manualmente el agente del navegador a través de la API del agente. Esto se debe a que existen demasiadas formas posibles de construir un framework.

Los [ejemplos de instrumentación manual](#manual_examples) muestran cómo agregar instrumentación a un marco que ya admite la instrumentación automática. Si está utilizando otro framework o versiones modificadas de Drupal o WordPress, asegúrese de llamar a las funciones API para instrumentación en el lugar correcto.

1. Inserte el valor de retorno de `newrelic_get_browser_timing_header()` como parte de la etiqueta `<head>` de la página de salida, preferiblemente como lo primero.
2. Como último elemento antes de la etiqueta de cierre `</body>` en el documento, o lo más cerca posible de ella, inserte el valor de retorno de `newrelic_get_browser_timing_footer()`.

A continuación se muestran algunos ejemplos básicos.

<CollapserGroup>
  <Collapser
    id="manual_wp"
    title="WordPress"
  >
    Este ejemplo muestra cómo llamar a la API del agente PHP para generar encabezados y pies de página para una instalación de WordPress utilizando el tema predeterminado `twentyten` .

    1. Inserte una llamada para generar el encabezado de JavaScript en `website home dir/wordpress/wp-content/themes/twentyten/header.php`.

       ```php
       <body <?php body_class(); ?>>
       <div id="wrapper" class="hfeed">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="masthead">
           ...
       ```

    2. Inserte una llamada para generar el pie de página de monitoreo del usuario final en `website home dir/wordpress/wp-content/themes/twentyten/footer.php`.

       ```php
       ...
           </div><!-- #site-generator -->
         </div><!-- #colophon -->
         <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
       </div><!-- #footer -->
       ```
  </Collapser>

  <Collapser
    id="manual_drupal"
    title="Drupal"
  >
    Este ejemplo muestra cómo llamar a la API del agente PHP para generar encabezados y pies de página para una instalación de Drupal utilizando el tema predeterminado `garland` .

    1. Inserte una llamada para generar el encabezado de JavaScript justo después de la etiqueta del encabezado de apertura en `website home dir/drupal/themes/garland/page.tpl.php`.

       ```php
       <div id="container" class="clear-block">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="logo-floater">
           ...
       ```

    2. Inserte una llamada para generar el pie de página justo antes de la última etiqueta de diseño de cierre:

       ```php
       ...
           </div>
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
             <!-- /layout -->
           <?php print $closure ?>
         </body>
       </html>
       ```

       <Callout variant="important">
         En Drupal 7.15, <DNT>**Compress cached pages**</DNT> está activado de forma predeterminada. Si también selecciona <DNT>**Cache pages for anonymous users**</DNT>, JavaScript (newrelic.js) no se inserta en las páginas servidas para usuarios anónimos. Esto se debe a que las páginas de Drupal se comprimen directamente desde la base de datos antes de almacenarlas en el caché (con gzip), por lo que el agente PHP de New Relic no tiene la posibilidad de analizar ningún HTML. En esta situación, la instrumentación manual brinda una mejor oportunidad de capturar datos para usuarios anónimos.
       </Callout>
  </Collapser>
</CollapserGroup>

## Ver datos del navegador [#viewing]

Una vez que habilite el monitoreo del navegador y genere tráfico para su aplicación, los datos aparecerán en [la página <DNT>**Summary**</DNT> del navegador](/docs/browser/new-relic-browser/getting-started/browser-overview-page-website-performance-summary) de su aplicación. Hay un breve retraso la primera vez que inicia el daemon (o cuando el agente PHP encuentra una nueva aplicación) mientras el daemon verifica la configuración. Después de eso, el fragmento de JavaScript de New Relic estará disponible.

## Desactivar la instrumentación automática [#disable]

Para saber cómo deshabilitar el monitoreo del navegador con la configuración del agente PHP, consulte [la opción de configuración del monitoreo del navegador](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum).

Para saber cómo utilizar la API para desactivar el monitoreo del navegador, consulte [`newrelic_disable_autorum()`](/docs/agents/php-agent/php-agent-api/newrelic_disable_autorum).
