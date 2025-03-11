---
title: Instale el complemento New Relic para aplicaciones instantáneas de Android
tags:
  - Mobile monitoring
  - New Relic Mobile Android
  - Install configure
metaDescription: Use New Relic to detect and instrument all feature modules for Android Instant Apps.
freshnessValidatedDate: never
translationType: machine
---

[Las aplicaciones instantáneas de Android](https://developer.android.com/topic/instant-apps/index.html) permiten al usuario utilizar rápidamente su aplicación sin instalación. Con la [versión 5.17.0](/docs/release-notes/mobile-release-notes/android-release-notes/android-5170) y superior del agente de Android, puede utilizar New Relic para detectar e instrumentar todos los módulos característicos de una aplicación instantánea.

Utilice esta documentación junto con los procedimientos estándar de New Relic para [instalar aplicaciones de Android con Gradle y Android Studio](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/install-android-apps-gradle-android-studio). Después de seguir los procedimientos de instalación estándar, siga estos pasos adicionales para aplicaciones instantáneas de Android.

## Terminología

Este procedimiento utiliza los siguientes términos que son específicos del complemento Android Instant Apps:

* <DNT>
    **Module**
  </DNT>

  : Cualquier clase empaquetada y/o colección de recursos.

* <DNT>
    **APK**
  </DNT>

  : Un módulo que empaqueta los recursos de las aplicaciones y las clases DEX

* <DNT>
    **Feature module**
  </DNT>

  : un módulo reducido que contiene solo un subconjunto del APK total

## Instalar el complemento [#install]

Para instalar el complemento New Relic para aplicaciones instantáneas de Android:

1. Primero siga los pasos de la documentación [Instalar aplicaciones de Android con Gradle y Android Studio](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/install-android-apps-gradle-android-studio) .

2. Aplique el complemento del agente en cada archivo de compilación de Gradle del proyecto.

3. Enumere el agente de Android como una dependencia.

4. Inicie el agente desde cada [clase de Actividad](https://developer.android.com/reference/android/app/Activity.html) en la característica que podría cargarse a través de una intención de Enlace de Activo Digital (por ejemplo, mobile.example.com/signin).

   <CollapserGroup>
     <Collapser
       id="build.gradle"
       title="Ejemplo mínimo de build.gradle"
     >
       ```gradle
       apply plugin: 'com.android.[application|library|feature|instantapp]'
       apply plugin: 'newrelic'

       dependencies {
           implementation "com.newrelic.agent.android:android-agent:${project.agentVersion}"
       }
       ```
     </Collapser>
   </CollapserGroup>

5. Revisar las consideraciones para [la instrumentación](#instrument).

<InstallFeedback/>

## Instrumentación [#instrument]

Al instrumentar una aplicación instantánea, tenga en cuenta las siguientes consideraciones con los APK:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Instant apps and APKs**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Instrumentación
      </td>

      <td>
        * La instrumentación de apps instantáneas se comporta igual que la instrumentación con un APK normal. El agente detectará cuando un APK sea una aplicación instantánea. Para los APK característicos, el agente inyectará una ID de compilación única que las aplicaciones instantáneas utilizarán cuando informen fallas.
        * La actividad de carga lateral (principal) de cada característica debe llamar a `NewRelic.start()` cuando se crea la actividad (según las instrucciones normales).
      </td>
    </tr>

    <tr>
      <td>
        Compatibilidad con ProGuard y Dexguard para APK de características y aplicaciones
      </td>

      <td>
        Coloque el archivo `newrelic.properties` en el directorio raíz (principal) del proyecto.
      </td>
    </tr>
  </tbody>
</table>

## Soporte ProGuard y Dexguard [#proguard]

El complemento Android Studio Gradle ofuscará cualquier configuración de compilación donde `minifyEnabled` esté establecido en `true`. En estas condiciones, el agente de New Relic reenviará el mapa ProGuard generado para la compilación al recolector de fallas, etiqueta con una ID de compilación única generada por el agente.

La ofuscación se configura mejor en la aplicación o proyecto de aplicación instantánea que incluye otros módulos como dependencia. Los módulos pueden configurar ProGuard según sea necesario.

<Callout variant="important">
  Cuando utilice ProGuard o DexGuard con aplicaciones de Android, siga los procedimientos para completar los pasos de configuración adicionales requeridos. Para obtener más información, consulte la documentación [de configuración de ProGuard y DexGuard](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-proguard-or-dexguard-android-apps) .
</Callout>

## Solucionar problemas de instrumentación automática [#troubleshooting]

Si no sabe si el agente está instrumentado automáticamente en un proyecto de aplicación instantánea, intente ejecutar estos pasos:

1. Compile la aplicación con la opción `debug` (`-d`, `--debug`) y capture el log de compilación.

2. Busque en el log evidencia de aplicaciones instantáneas buscando cualquiera de estos términos:

   * ```
     This appears to be an Instant App
     ```
   * ```
     BuildId[1a2b34c5-def6-7890-g123-h4567890a]
     ```

3. El agente agregará un atributo llamado `'instantApp'` a los atributos de sesión de la aplicación si la aplicación parece ser una aplicación instantánea.
