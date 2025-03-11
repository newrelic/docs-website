---
title: Informe de fallas del agente de Android
tags:
  - Mobile monitoring
  - New Relic Mobile Android
  - Install configure
metaDescription: How to use Proguard with Android mobile monitoring to automatically process and de-obfuscate crash details.
freshnessValidatedDate: never
translationType: machine
---

De forma predeterminada, <InlinePopover type="mobile"/>habilita los informes de fallos para su aplicación móvil para ayudar a rastrear y diagnosticar fallos. Cuando una aplicación de Android falla, el agente carga un informe de fallas en el [recopilador](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector) de New Relic. Los detalles del fallo se procesarán y eliminarán automáticamente si utiliza ProGuard o DexGuard.

Puede ver información detallada sobre fallas en la [UI<DNT>**Crash analysis**</DNT> ](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/crash-analysis-group-filter-your-crashes)o recibir una notificación de falla por [correo electrónico](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/receive-crash-notifications-email). También puede [integrarse con sistemas de tickets](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/file-tickets-mobile-app-crashes) para una mayor investigación.

## Cargue el archivo ProGuard o DexGuard [#upload-proguard]

El agente de Android es compatible con ProGuard y DexGuard. DexGuard es una extensión de ProGuard y se comporta igual que ProGuard cuando se trata de simbolización de fallas y mapas de código ofuscados.

ProGuard ofusca su código cambiando el nombre de clases, campos y métodos con etiquetas semánticamente oscuras. DexGuard agrega otra capa adicional de ofuscación y seguridad, pero por lo demás se comporta de manera idéntica a ProGuard. Si ProGuard o DexGuard están habilitados, el rastreo del stack producido por un bloqueo consta únicamente de estas etiquetas ofuscadas, que no son legibles por humanos.

Siga las instrucciones de instalación o actualización del SDK para [configurar ProGuard o DexGuard](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-proguard-or-dexguard-android-apps) y habilitar los informes de fallos. Asegúrese de crear el archivo `newrelic.properties` que contiene su token de aplicación.

## Utilice el archivo mapping.txt [#mapping-file]

El agente utiliza el archivo `mapping.txt` producido durante una compilación habilitada para ProGuard/DexGuard. Este archivo consta de nombres de etiquetas ofuscados y proporciona mapeo inverso entre etiquetas de texto sin formato y ofuscadas. Debe utilizar la copia de `mapping.txt` generada durante la compilación que produjo su aplicación final. El ID de compilación de la aplicación cambia cada vez que se genera un APK y el ID de compilación en el archivo de mapeo debe coincidir con el ID contenido en cada informe de fallas cargado.

Después de crear un archivo `newrelic.properties` que contiene el token de la aplicación New Relic en su proyecto, el archivo ProGuard o DexGuard `mapping.txt` se cargará automáticamente después de cada compilación.

### Excepción [#exception]

Si se produce alguna de las siguientes situaciones, debe [cargar manualmente](#manual-proguard) el archivo de reemplazo `mapping.txt` :

* Si se cambia el nombre del archivo `mapping.txt` usando la opción DexGuard `-printmapping` , el agente de Android no podrá localizar ni cargar los nombres eliminados.

* Si ve informes de fallos ofuscados en la [página](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-apps-crashes-dashboard)

  <DNT>
    [**Crashes**](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-apps-crashes-dashboard)
  </DNT>

  [](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-apps-crashes-dashboard), es posible que no haya subido ningún archivo `mapping.txt` .

### Procesamiento de mapas [#map-processing]

<Callout variant="important">
  [La versión 5.27.0 del agente](/docs/release-notes/mobile-release-notes/android-release-notes/android-5270) introduce cambios en la forma en que el proceso del complemento del agente se asigna durante las compilaciones.
</Callout>

#### Los mapas se informan para compilaciones de variantes seleccionadas [#variant-builds]

El agente etiquetará e informará solo aquellos `mapping.txt` archivos generados por `Release` variantes de tipo de compilación. Este comportamiento se puede configurar o deshabilitar a través de la extensión [del complemento New Relic Gradle](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-agent-gradle-plugin-extension) .

#### A las variantes se les asignan ID de compilación únicos [#build-ids]

Durante la ejecución de una compilación de Gradle, se generó una única ID única (ID de compilación) para representar todas las variantes de la aplicación creada durante esa invocación. Esto a menudo generaba informes de fallas no coincidentes para los clientes que usaban variantes para personalizar una base de código de aplicación común.

Cada variante ahora se identifica por su propia ID única, que se utiliza al informar el mapa ProGuard de la variante a New Relic. Puede desactivar este comportamiento a través de la extensión [del complemento New Relic Gradle](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-agent-gradle-plugin-extension) .

#### Comprimir mapas antes de cargarlos [#compress]

A medida que las aplicaciones crecen, también lo hacen sus mapas asociados, lo que resulta en tiempos de carga más largos al informar el mapa. Si el tiempo de informe del mapa es excesivamente largo, el agente puede comprimir el mapa antes de transferirlo.

Para habilitar las cargas de mapas comprimidos, agregue lo siguiente al archivo `newrelic.properties` de su aplicación:

```properties
com.newrelic.compressed_uploads=true
```

#### Configurar el host de carga de mapeo

Agregue lo siguiente al archivo `newrelic.properties` de su aplicación para enviar mapas en un servidor redirigido:

```properties
# Please only provide the host name as the value without https:// at the beginning or / at the end, for example: xyz.api.com
com.newrelic.mapping_upload_host=xyz.api.com
```

### Informes de fallos diferidos

<Callout variant="important">
  [La versión 6.0.0 del agente](/docs/release-notes/mobile-release-notes/android-release-notes/android-600) introduce cambios en la forma en que el complemento del agente procesa fallas en tiempo de ejecución.
</Callout>

En un intento por abordar la duplicación de informes de fallos, los informes de fallos diferidos son ahora el comportamiento predeterminado para los informes de fallos. En este caso, los informes de fallos se registran cuando ocurren, pero no se cargan hasta el siguiente lanzamiento de la aplicación.

El comportamiento anterior de informe de fallas todavía está disponible: cargar la falla tan pronto como ocurre antes de que finalice el proceso de la aplicación. Puede utilizar el método API `NewRelic.withCrashReportingEnabled(boolean)` . Por ejemplo:

```java
NewRelic
      .withApplicationToken("<appToken>")
      .withCrashReportingEnabled(true)
      .start(this.getApplication());
```

## Desactivar informes de fallos [#disable]

Si desea utilizar otra herramienta de informes de fallos, puede desactivar los informes de fallos llamando `NewRelic.disableFeature(FeatureFlag.CrashReporting)` antes de la inicialización del agente. Por ejemplo:

```java
NewRelic.disableFeature(FeatureFlag.CrashReporting);
NewRelic
      .withApplicationToken("<appToken>")
      .start(this.getApplication());
```

## Depurar el reportero de fallas [#debug]

Los informes de fallos para Android están diseñados para funcionar con otros marcos de informes de fallos mediante la cadena del controlador de excepciones no detectadas si ya está registrado.

* Si no se ha encontrado ningún otro framework (o si New Relic es el primer framework registrado), el log de depuración incluirá:

  ```
  Installing New Relic crash handler.
  ```

* Si ya hay otro controlador registrado, el log de depuración incluirá:

  ```
  Installing New Relic crash handler and chaining previous exception handler.
  ```

Cada vez que New Relic detecta una excepción, se [registra en el nivel `DEBUG` ](/docs/mobile-monitoring/new-relic-mobile-android/api-guides/android-agent-configuration-feature-flags#logging). Por ejemplo:

```
A crash has been detected in <className>.
```

Si New Relic detecta una excepción pero el informe de fallos se ha desactivado por algún motivo, se registra este mensaje:

```
A crash has been detected but crash reporting is disabled.
```

Si no ve informes de fallos, consulte el log de depuración para ver mensajes como este.

## Cargar manualmente un archivo de mapa ProGuard o DexGuard [#manual-proguard]

En algunas circunstancias inusuales, es posible que no sea posible cargar automáticamente el archivo de mapeo ProGuard o DexGuard. Esto suele deberse a la creación incorrecta de un archivo `newrelic.properties` que contiene el token de su aplicación. Esto dará lugar a errores de compilación o advertencias con mensajes de log detallados.

Para cargar manualmente un archivo de mapa ProGuard o DexGuard:

1. Busque los archivos `mapping.txt` en el directorio de compilación del proyecto. Por ejemplo, el archivo se encuentra en el directorio `<PROJECT_ROOT>/app/build/outputs/mapping/<BUILD_VARIANT>` para proyectos que usan Android Studio. Generalmente, se utiliza una variante `release` al crear la versión final de la aplicación. El siguiente comando es útil para buscar archivos de mapas:

   ```bash
   find <project_root> -name mapping.txt
   ```

2. Usando una terminal de comando, cargue el archivo de mapeo ProGuard o DexGuard:

   * Para un <DNT>**US account**</DNT>:

     ```bash
     curl -v -F upload=@"<mapping.txt>" -H "X-APP-LICENSE-KEY:<APPLICATION_TOKEN>" https://mobile-symbol-upload.newrelic.com/symbol
     ```

   * Para un <DNT>**EU account**</DNT>:

     ```bash
     curl -v -F upload=@"<mapping.txt>" -H "X-APP-LICENSE-KEY:<APPLICATION_TOKEN>" https://mobile-symbol-upload.eu.newrelic.com/symbol
     ```

   Reemplace lo siguiente en su comando:

   * `<mapping.txt>` es la ruta completa al archivo ProGuard o DexGuard `mapping.txt` .
   * `<APPLICATION_TOKEN>` es su [token de aplicación de](/docs/mobile-monitoring/new-relic-mobile/maintenance/viewing-your-application-token) monitoreo de móviles.

## Informes de fallos nativos de Android [#native-crash-reporting]

A partir de [la versión 6.7.0 del agente Android New Relic](/docs/release-notes/mobile-release-notes/android-release-notes/android-670), para ayudar a rastrear y diagnosticar fallas nativas, los informes y análisis se han mejorado para incluir señales de infracción y otras fallas que ocurren en el nivel de código nativo durante el tiempo de ejecución.

Obtenga más información sobre los informes de fallos nativos de Android [aquí](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/android-agent-native-crash-reporting).
