---
title: Recuperar dSYM para aplicaciones Bitcode
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: How to retrieve dSYMs for crash reports from Bitcode-enabled iOS apps that are monitored with the New Relic agent.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Con Xcode 14 y versiones posteriores, la App Store ya no acepta envíos de códigos de bits desde Xcode 14. Si un proyecto habilita explícitamente el código de bits, Xcode generará un mensaje de advertencia que dice: "La compilación con código de bits está obsoleta. Actualice la configuración de su proyecto y/o objetivo para deshabilitar el código de bits”. Las [notas de la versión de Xcode 14](https://developer.apple.com/documentation/xcode-release-notes/xcode-14-release-notes) continúan diciendo que "la capacidad de crear aplicaciones con código de bits se eliminará en una actualización futura".

  Si usa Xcode 14 o posterior, en lugar de usar código de bits para capturar la pila de fallas simbolizadas de sus compilaciones de lanzamiento, le recomendamos usar el [script de carga automática de símbolos](/docs/mobile-monitoring/new-relic-mobile-ios/installation/spm-installation#configure-using-swift-package-manager) para cargar los símbolos de su compilación.
</Callout>

Bitcode es una característica que le da a Apple la capacidad de volver a compilar aplicaciones iOS y tvOS para el hardware de un usuario específico. Esto proporciona un tamaño de descarga más pequeño para el usuario final. Para obtener más información sobre este proceso, consulte [la documentación de Bitcode y reducción de aplicaciones](https://developer.apple.com/library/watchos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html) de Apple. Cuando Apple compila una aplicación, los archivos dSYM también se compilan. Para que New Relic pueda simbolizar fallas de su aplicación habilitada para Bitcode, estos archivos dSYM deben descargarse de Apple y luego cargarse en New Relic.

## Identificar dSYM faltantes [#IdentifyingMissingdSYMs]

Cuando se carga una aplicación habilitada para Bitcode en Apple para su revisión en la App Store o distribución ad hoc, los dSYM deben descargarse manualmente desde Apple y cargarse en New Relic para permitir que los [informes de fallas móviles](/docs/mobile-monitoring/new-relic-mobile/getting-started/ios-agent-crash-reporting) se simbolicen adecuadamente. Estos dSYM se pueden descargar a través del organizador de archivos en Xcode a los pocos minutos de cargar la aplicación. En esta situación, siga los procedimientos para [encontrar el archivo y descargar dSYM](#Archive).

Si a una aplicación le falta un archivo dSYM, verá tres indicadores en la UI de monitoreo de móviles:

* <DNT>**Banner notification**</DNT>: Aparece un banner de advertencia en la [página<DNT>**Crash report**</DNT> ](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-apps-crash-report-dashboard). La advertencia dice:

  ```
  We were unable to locate your dsym.
  ```

* <DNT>**Upload prompt**</DNT>: desde la página <DNT>**Crash type summary**</DNT> se le indicará automáticamente que [cargue un archivo dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps#mobile-ui) si falta.

* <DNT>**Machine code**</DNT>: El rastreo del bloqueo de la pila en la página <DNT>**Crash report**</DNT> muestra código de máquina y no un mensaje de error legible por humanos.

## Descargue archivos dSYM usando iTunes Connect [#iTunes]

Para descargar los archivos dSYM que necesita para su aplicación:

1. log sesión en Apple [App Store Connect](https://appstoreconnect.apple.com/login).

2. Seleccione

   <DNT>
     **Apps > (select an app) > TestFlight**
   </DNT>

   .

3. De la lista de compilaciones para su aplicación, seleccione el número de compilación que necesita para dSYM.

4. En la pestaña

   <DNT>
     **Build Metadata**
   </DNT>

   , seleccione

   <DNT>
     **Download dSYM**
   </DNT>

   .

Luego, para cargar el archivo zip resultante directamente en New Relic:

1. Siga las instrucciones para [cargar dSYM manualmente](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps#manual-dsym) y omita el paso 1.
2. Descomprima un dSYM contenido en este archivo zip para recuperar un UUID de compilación que pueda cargar. (Siga el último paso de las instrucciones de carga manual).

Una vez que New Relic reciba el archivo zip, se identificarán los UUID de compilación para todos los demás dSYM contenidos en ese archivo zip.

## Descargue archivos dSYM usando el archivo de aplicaciones de Xcode [#Archive]

Utilice la [versión de la aplicación y el número de compilación](#identifyingAppVersion) para identificar el archivo de la aplicación correspondiente en Xcode <DNT>**Organizer**</DNT> y descargue los dSYM.

<img
  title="Download dSYMs for mobile app version/build"
  alt="Download dSYMs for mobile app version/build"
  src="/images/mobile_screenshot-full_download-dsym-file.webp"
/>

<figcaption>
  <DNT>**Using Xcode to download dSYMs:**</DNT> En la pestaña <DNT>**Archives**</DNT> , seleccione la aplicación y la versión/compilación y luego seleccione <DNT>**Download dSYMs**</DNT>.
</figcaption>

1. Abra Xcode

   <DNT>
     **Organizer**
   </DNT>

   : en el menú

   <DNT>
     **Xcode**
   </DNT>

   , seleccione

   <DNT>
     **Window > Organizer > Archives > (select a mobile app)**
   </DNT>

   .

2. En

   <DNT>
     **Version**
   </DNT>

   , seleccione el archivo que coincida con la versión de la aplicación (enumerada primero) y el número de compilación (después de la versión de la aplicación entre paréntesis).

3. Seleccione

   <DNT>
     **Download dSYMs**
   </DNT>

   .

Los dSYM se descargarán de Apple si están disponibles y si los nombres de los archivos contienen una serie de letras y números. Si los archivos dSYM llevan el nombre de la dependencia de su proyecto, la descarga no se realizará correctamente.

## Subir dSYM [#Upload-dSYMs]

Una vez que haya localizado los dSYM, siga las instrucciones para [cargar un dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps) para cada dSYM comprimido.
