---
title: 'La aplicación no responde: realice un seguimiento y analice los errores ANR'
tags:
  - Mobile monitoring
  - Mobile monitoring UI
  - Application not responding
  - Errors
metaDescription: Use New Relic's Application Not Monitoring UI page to track and analyze ANR errors.
freshnessValidatedDate: '2024-06-24T00:00:00.000Z'
translationType: machine
---

En las aplicaciones móviles de Android, [los errores de aplicación que no responde (ANR)](https://developer.android.com/topic/performance/vitals/anr) se activan cuando el hilo principal UI de una aplicación se bloquea durante más de cinco segundos. Los errores de ANR pueden deber a varios factores, como llamadas de red, cálculos complejos o contención de recursos. Al monitorear su frecuencia y patrones de ocurrencia, obtiene información valiosa sobre la estabilidad general de su aplicación y la experiencia del usuario.

## Cómo se informan los errores ANR a New Relic [#anr-reporting]

De forma predeterminada, el agente de Android informa los errores ANR como [`MobileApplicationExit`](/attribute-dictionary/?event=MobileApplicationExit) evento, que aprovecha [API`ApplicationExitInfo` ](https://developer.android.com/reference/android/app/ApplicationExitInfo)de Android para monitor e informar sobre las diferentes causas de la terminación de la aplicación. El agente lee la API `ApplicationExitInfo` en el siguiente lanzamiento de la aplicación y envía asincrónicamente el evento `MobileApplicationExit` a New Relic para cada salida de la aplicación en el historial.

### Comprender las discrepancias ANR entre New Relic y Google Play Console [#new-relic-vs-google-play]

Es posible que encuentres variaciones en los recuentos y tasas de ANR entre New Relic y Google Play Console. Esto se debe a diferencias en los métodos de recopilación de datos:

* Cobertura de la versión de Android:

  * New Relic se centra en los ANR de dispositivos con Android 11 o superior.
  * Google Play Console captura ANR en todas las versiones de Android.

* Alcance del dispositivo y la aplicación:

  * New Relic informa desde dispositivos con el agente New Relic instalado, independientemente de la fuente de la aplicación.
  * Google Play Console informa exclusivamente desde dispositivos certificados con aplicaciones descargadas a través de Play Store.

Para obtener más información, consulta la [documentación de Google Play](https://developer.android.com/topic/performance/vitals).

## Ver ANRs en New Relic [#view-anr-in-new-relic]

De forma predeterminada, nuestro agente de Android recopila e informa errores ANR a New Relic. Puede encontrar datos ANR en dos lugares:

* En la página Summary, hay un widget llamado

  <DNT>
    **ANR rate**
  </DNT>

  que muestra el porcentaje de errores.

* En la página de ANR, donde puede ver un desglose de la tasa de errores, los grupos de usuarios afectados y los detalles de los atributos.

<img
  title="ANR UI page"
  alt="screenshot of ANR UI page"
  src="/images/mobile_screenshot-full_anr-ui-page.webp"
  style="float: left;"
/>

Para ver la página ANR:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities)**
   </DNT>

   .

2. Haga clic en

   <DNT>
     **Mobile**
   </DNT>

   .

3. Seleccione una aplicación de Android.

4. En el panel izquierdo, haga clic en

   <DNT>
     **ANR**
   </DNT>

   .

### Filtrar por grupos ANR [#filter]

El widget de la página ANR se basa en grupos de ANR. De forma predeterminada, los ANR se agrupan por el atributo `description` .

<img
  title="top occurences chart"
  width="50%"
  alt="screenshot of top occurences chart"
  src="/images/mobile_screenshot-crop_group-by.webp"
  style="float: left;"
/>

Para cambiar la forma en que se agrupan los ANR (como el tipo de dispositivo, la versión de la aplicación o un [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/)), haga clic en <DNT>**Group by**</DNT> y seleccione un atributo de la lista. La página ANR se actualizará para mostrar datos del nuevo grupo ANR.

### Monitora la tasa ANR [#anr-rate-chart]

El gráfico <DNT>**ANR rate**</DNT> para ver de un vistazo si hay picos, caídas o patrones inesperados con los ANR en general.

Por ejemplo, si lanzó una versión reciente de la aplicación, el gráfico de tasas de ANR muestra el porcentaje de sesiones que experimentaron errores a lo largo del tiempo como porcentaje de todas las sesiones, desglosado por versión de la aplicación. El porcentaje promedio de sesión ANR se muestra en la parte superior derecha.

<img
  title="anr rate chart"
  alt="screenshot of anr rate chart"
  src="/images/mobile_screenshot-crop_anr-rate-chart.webp"
  style="float: left;"
  width="60%"
/>

El gráfico <DNT>**ANR rate by day**</DNT> muestra el porcentaje de usuarios únicos que experimentaron un ANR a lo largo del tiempo como porcentaje de todos los usuarios únicos.

Nota: Independientemente del tiempo seleccionado, este gráfico mostrará la tasa ANR promedio de los últimos 28 días.

### Ver ocurrencias de ANR por importancia [#anr-occurences]

El gráfico <DNT>**ANR occurrences by importance**</DNT> muestra la distribución de ANR por importancia relativa del proceso de la aplicación antes de la terminación debido a un ANR. Puede encontrar más información sobre la importancia del proceso de una aplicación [aquí](https://developer.android.com/reference/android/app/ApplicationExitInfo#getImportance).

<img
  title="anr occurrences by importance"
  alt="screenshot of anrs by importance"
  src="/images/mobile_screenshot-crop_anr-occurences-by-importance.webp"
  style="float: left;"
/>

### Profundice con los perfiles ANR [#anr-profiles]

Los perfiles ANR muestran la distribución de atributos en todas sus apariciones de ANR, lo que lo ayuda a identificar patrones para limitar y solucionar rápidamente la causa raíz.

<img
  title="anr profiles"
  alt="screenshot of anr profiles"
  src="/images/mobile_screenshot-crop_anr-profiles.webp"
  style="float: left;"
/>

## Deshabilitar el monitoreo ANR [#disable-anr-monitoring]

<Callout variant="important">
  La configuración del lado del servidor siempre tiene prioridad sobre la configuración del agente local. Para aplicaciones móviles con menos de 100.000 dispositivos activos simultáneamente, puede llevar hasta 10 minutos aplicar los cambios a los dispositivos finales del usuario. Para aplicaciones con más de 100.000 dispositivos activos, puede tardar varias horas.
</Callout>

Si necesita desactivar el monitoreo ANR:

1. En New Relic, navega hasta tu aplicación móvil.

2. En el panel izquierdo debajo de

   <DNT>
     **Settings**
   </DNT>

   , haga clic en

   <DNT>
     **Application**
   </DNT>

   .

3. Desactive el **Application Not Responding (ANR)** .

4. Clic en **Save**.

<img
  title="ANR setting toggle"
  alt="Screenshot of the ANR setting"
  src="/images/mobile_screenshot-crop_anr-setting-toggle.webp"
  style="float: left;"
/>
