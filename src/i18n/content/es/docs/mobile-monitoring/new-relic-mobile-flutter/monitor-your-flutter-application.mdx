---
title: Monitor tu aplicación móvil Flutter
tags:
  - Flutter
  - Mobile monitoring
  - New Relic Mobile Flutter
  - Get started
metaDescription: 'New Relic''s Flutter agent for Android and iOS: Features, compatibility, requirements, installation, and upgrade procedures.'
isTutorial: true
freshnessValidatedDate: never
translationType: machine
---

Nuestro agente New Relic Flutter monitorea su aplicación móvil Flutter y proporciona información profunda y valiosa sobre el rendimiento, los errores y la experiencia del usuario de su aplicación. Una vez que instales y configures el agente Flutter, podrás:

* <DNT>
    **Capture Dart errors:**
  </DNT>

  Identifique y solucione problemas rápidamente.

* <DNT>
    **Track network requests:**
  </DNT>

  Vea cómo interactúa su aplicación con el backend.

* <DNT>
    **Use distributed tracing:**
  </DNT>

  Profundice en las excepciones manejadas y encuentre la causa raíz.

* <DNT>
    **Create custom events and metrics:**
  </DNT>

  Comprenda cómo interactúa su usuario con su aplicación.

<img
  title="Flutter summary view in the UI"
  alt="Summary view of a flutter app in New Relic"
  src="/images/mobile_screenshot-full_hybrid-summary.webp"
  style={{ maxWidth: '70%' }}
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Summary**</DNT>: vea datos de Flutter, realice un seguimiento de las solicitudes y errores HTTP y monitor el rendimiento de su aplicación a lo largo del tiempo.
</figcaption>

## (Recomendado) Instalación guiada [#guided-install]

Para instalar el agente Flutter, sigue nuestra [instalación guiada](https://onenr.io/0qQagg4AGR1), ubicada directamente en la UI.

## Instalación manual [#manual-install]

Si necesita instalar el agente manualmente, siga estos pasos:

<Steps>
  <Step>
    ### Revisa los requisitos [#requirements]

    Antes de instalar el agente Flutter, asegúrese de que su aplicación Flutter cumpla con estos requisitos de versión:

    * Flutter 2.5.0 o superior

    * Versiones de Dart 2.16.2 o superiores, hasta la 3.0.0 (pero sin incluirla)

    * Para aplicaciones nativas de Android:

      * API de Android 24 o superior
      * Ver [los requisitos nativos de Android](/docs/mobile-monitoring/new-relic-mobile-android/get-started/new-relic-android-compatibility-requirements)

    * Para aplicaciones nativas de iOS:

      * Ver [requisitos nativos de iOS](/docs/mobile-monitoring/new-relic-mobile-ios/get-started/new-relic-ios-compatibility-requirements)
  </Step>

  <Step>
    ### Agrega el agente Flutter a tu proyecto [#add-agent]

    Primero, deberás agregar el agente Flutter a tu proyecto de dardos. En su `pubspec.yaml`, agregue lo siguiente a `dependencies`:

    ```dart
    dependencies:
        newrelic_mobile: 0.0.1
    ```
  </Step>

  <Step>
    ### Copie el token de su aplicación [#app-token]

    El token de la aplicación se utiliza para que New Relic autentique los datos de su aplicación Flutter. Para ver y copiar el token de su aplicación en la UI de New Relic:

    1. Vaya a

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
       </DNT>

       , haga clic en

       <DNT>
         **Integrations & Agents**
       </DNT>

       y luego haga clic en

       <DNT>
         **Mobile**
       </DNT>

       .

    2. Selecciona tu aplicación Flutter.

    3. Vaya a

       <DNT>
         **Settings > Application**
       </DNT>

       y copie el

       <DNT>
         **Application token**
       </DNT>

       mostrado.

       Agregará este token de aplicación en el siguiente paso.
  </Step>

  <Step>
    ### Configura tu proyecto Flutter [#configure]

    En tu proyecto Flutter, abre `main.dart` y agrega el siguiente código:

    ```dart
    import 'package:newrelic_mobile/newrelic_mobile.dart';
        var appToken = "";
        if (Platform.isAndroid) {
            appToken = "<android app token>"; // Replace with your application token copied from the New Relic UI.
        } else if (Platform.isIOS) {
            appToken = "<ios app token>"; // Replace with your application token copied from the New Relic UI.
        }
        Config config =
            Config(accessToken: appToken,
            //Android Specific
            // Optional: Enable or disable collection of event data.
            analyticsEventEnabled: true,
            // Optional: Enable or disable reporting successful HTTP requests to the MobileRequest event type.
            networkErrorRequestEnabled: true,
            // Optional: Enable or disable reporting network and HTTP request errors to the MobileRequestError event type.
            networkRequestEnabled: true,
            // Optional: Enable or disable crash reporting.
            crashReportingEnabled: true,
            // Optional: Enable or disable interaction tracing. Trace instrumentation still occurs, but no traces are harvested. This will disable default and custom interactions.
            interactionTracingEnabled: true,
            // Optional: Enable or disable capture of HTTP response bodies for HTTP error traces and MobileRequestError events.
            httpResponseBodyCaptureEnabled: true,
            // Optional: Enable or disable agent logging.
            loggingEnabled: true,
            // iOS specific
            // Optional: Enable or disable automatic instrumentation of WebViews
            webViewInstrumentation: true,
            //Optional: Enable or disable Print Statements as Analytics Events
            printStatementAsEventsEnabled : true,
            // Optional: Enable or disable automatic instrumentation of HTTP Request
            httpInstrumentationEnabled:true,
            // Optional: Enable or disable reporting data using different endpoints for US government clients
            fedRampEnabled: false,
             // Optional: Enable or disable offline data storage when no internet connection is available.
            offlineStorageEnabled: true,
            // iOS Specific
            // Optional: Enable or disable background reporting functionality.
             backgroundReportingEnabled: true,
            // iOS Specific
            // Optional: Enable or disable to use our new, more stable, event system for iOS agent.
             newEventSystemEnabled: true

            );
        NewrelicMobile.instance.start(config, () {
            runApp(MyApp());
        });
        class MyApp extends StatelessWidget {
        ....
    ```

    Asegúrese de pegar token de su aplicación en `appToken = ""` en el código anterior. Si implementa su aplicación híbrida en la plataforma iOS y Android, deberá agregar dos tokens separados: uno para iOS y otro para Android.
  </Step>

  <Step>
    ### (Solo para Android) Configura tu aplicación de Android [#configure-android]

    Si tiene una aplicación nativa de Android, deberá realizar los siguientes cambios en su aplicación de Android:

    1. Agregue los siguientes cambios al archivo `android/build.gradle` de su aplicación:

       ```dart
       buildscript {
               ...
               repositories {
                   ...
                   mavenCentral()
               }
               dependencies {
                   ...
                   classpath "com.newrelic.agent.android:agent-gradle-plugin:${latest_android_version}"
               }
           }
       ```

    2. Aplique el complemento `newrelic` en la parte superior de su archivo `android/app/build.gradle` :

       ```dart
       apply plugin: "com.android.application"
       apply plugin: 'newrelic' // <-- add this
       ```

    3. Agregue permisos `INTERNET` y `ACCESS_NETWORK_STATE` en su archivo `AndroidManifest.xml` :

       ```dart
       <uses-permission android:name="android.permission.INTERNET" />
       <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
       ```

       ¡Y tu estas listo! Deberías empezar a ver datos en New Relic en 5 minutos.
  </Step>
</Steps>

## Personalizar la instrumentación del agente. [#mobile-sdk]

¿Necesitas personalizar tu instrumentación del agente? Nuestros métodos públicos de API de SDK móvil le permiten recopilar datos personalizados, configurar ajustes predeterminados y más.

Las siguientes personalizaciones están disponibles para el agente Flutter.

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Si quieres...
      </th>

      <th>
        Utilice este método
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td id="crash-analysis">
        Registre la ruta de navegación para rastrear la actividad de la aplicación que puede ser útil para resolver problemas.
      </td>

      <td>
        [Registro de ruta de navegación](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-breadcrumb)
      </td>
    </tr>

    <tr>
      <td id="creating">
        Seguimiento de un método como una interacción.
      </td>

      <td>
        [Iniciar interacción](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/start-interaction)

        [Detener la interacción](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/stop-interaction)
      </td>
    </tr>

    <tr>
      <td id="create-custom">
        Registro métrico personalizado.
      </td>

      <td>
        [Registro métrico personalizado](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-custom-metrics/)
      </td>
    </tr>

    <tr>
      <td id="create-custom">
        Errores de registro.
      </td>

      <td>
        [Errores de registro](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-errors)
      </td>
    </tr>

    <tr>
      <td id="attributes-events-insights">
        Grabar atributo personalizado y evento.
      </td>

      <td>
        Hay varias formas de reportar atributo personalizado y evento:

        * [Grabar atributo personalizado](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/create-attribute)

        * [Incrementar el recuento de atributos de sesión](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/increment-session-attribute-count)

        * [Eliminar un atributo](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/remove-attribute)

        * [Eliminar todos los atributos](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/remove-all-attributes)

        * [Grabar evento personalizado](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-custom-events)

        * [Establecer el tamaño máximo de un grupo de eventos](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-max-event-pool-size)

        * [Establecer el tiempo máximo que el agente almacena el evento en la memoria](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-max-event-buffer-time)

        * [Obtener el ID de una sesión actual](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/current-session-id)

        * [Establezca una ID de usuario personalizada para asociar con evento y atributo](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-custom-user-id)

          Para obtener más información sobre cuál sería el mejor método a utilizar y por qué, consulte [Informe monitoreo de móviles evento personalizado y atributo](/docs/data-apis/custom-data/custom-events/report-mobile-monitoring-custom-events-attributes/).
      </td>
    </tr>

    <tr>
      <td id="track-custom">
        Realice un seguimiento de las solicitudes y fallas de la red personalizada.
      </td>

      <td>
        [Seguimiento de solicitudes HTTP](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/network-request-success)

        [Seguimiento de solicitudes HTTP fallidas](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/network-request-failures)
      </td>
    </tr>

    <tr>
      <td>
        Apague el agente.
      </td>

      <td>
        [Cerrar el agente](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/shut-down-agent)
      </td>
    </tr>

    <tr>
      <td>
        Activa/desactiva la configuración predeterminada de monitoreo de móviles.
      </td>

      <td>
        [Activar/desactivar la característica de monitoreo](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/configure-settings)
      </td>
    </tr>
  </tbody>
</table>

## Solucionar errores HTTP [#http-errors]

¿Faltan datos HTTP en la UI?

Después de instalar el agente Flutter, espere al menos 5 minutos. Si no aparecen datos HTTP en las páginas de UI de errores HTTP y solicitudes HTTP, asegúrese de no anular `HttpOverrides.global` dentro de su aplicación Flutter.

## Consultar datos log de Flutter [#logs]

New Relic almacena tu log de Flutter como evento personalizado. Puede consultar estos logs y crear paneles para ellos utilizando esta consulta NRQL:

```
 SELECT * FROM `Mobile Dart Console Events` SINCE 30 MINUTES AGO
```

Para obtener más información sobre la consulta NRQL, consulte [Introducción a NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/#where).
