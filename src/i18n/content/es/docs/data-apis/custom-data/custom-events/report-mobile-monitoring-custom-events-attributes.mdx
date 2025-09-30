---
title: Informe monitoreo de móviles evento personalizado y atributo
tags:
  - Event data sources
  - Custom events
metaDescription: 'How to query your mobile events and attributes in New Relic, and how to create custom events and attributes.'
freshnessValidatedDate: never
translationType: machine
---

De forma predeterminada, New Relic recopila algunos [datos de eventos](/docs/insights/insights-data-sources/default-data/mobile-default-events-insights) de su aplicación móvil a New Relic, como interacción, sesiones, fallas y errores de solicitud. Sin embargo, también puede crear su propio atributo personalizado y evento para consultas y análisis más detallados.

## Crear atributo personalizado y evento [#custom-attributes-instructions]

Puede crear un atributo personalizado a nivel de sesión para el evento <InlinePopover type="mobile"/>predeterminado utilizando el SDK del agente móvil. Por ejemplo, para registrar un atributo `username` para alguna parte de su aplicación iOS o Android, usaría la [API`setAttribute` ](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/create-attribute). Estos atributos son información relacionada con la sesión y son compartidos por múltiples tipos de eventos móviles.

También puedes crear tipos de eventos personalizados completamente nuevos y asignarles su propio atributo personalizado, utilizando la [API`recordCustomEvent` ](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-custom-events).

Para ayudar con el análisis de fallos, puede utilizar el SDK para crear eventos `MobileBreadcrumb` y `MobileHandledException` . Estos eventos están disponibles para consulta y también se muestran en la [UIde la traza de evento](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-crash-event-trail).

Para obtener más información sobre la creación de atributos personalizados y eventos personalizados, consulte:

* [Guía de SDK móvil](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/mobile-sdk-api-guide)
* [Ejemplos de consultas NRQL](#examples)
* [`MobileRequestError` ejemplos](/docs/insights/nrql-new-relic-query-language/nrql-query-examples/mobile-request-failures-query-examples-mobilerequesterror)
* [`MobileRequest` ejemplos](/docs/insights/insights-data-sources/default-attributes/mobile-request-query-examples-mobilerequest)
* [Límites y personajes restringidos](#limits)

## Ejemplos de eventos móviles y consultas de atributos [#examples]

Aquí hay algunos ejemplos del uso [de NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) para consultar el evento y atributo de su aplicación móvil:

<CollapserGroup>
  <Collapser
    id="record-purchase"
    title="Ejemplo de evento personalizado: seguimiento de compras"
  >
    Para realizar un seguimiento de las compras en su aplicación, use `recordCustomEvent` para crear un tipo de evento (como "UserAction") y asociar un atributo como "nombre" (con valor "Compra"), precio, cantidad y SKU.

    <Callout variant="tip">
      Por motivos de rendimiento, debe limitar el número total de tipos de eventos a uno o dos. El parámetro `recordCustomEvent` `eventType` está diseñado para usarse en categorías de alto nivel. Por ejemplo, puede crear un tipo de evento`Gestures` y luego crear muchos nombres de eventos personalizados diferentes bajo el tipo de evento `Gesture` .
    </Callout>

    <DNT>
      **Create an event on iOS:**
    </DNT>

    ```
    BOOL purchaseRecorded = [NewRelic <a href="/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-custom-events">recordCustomEvent</a>:@"UserAction" attributes:@{@"name": @"Purchase", @"sku": @"12345LPD", @"quantity": @1, @"unitPrice": @99.99, @"total": @99.99}];
    ```

    <DNT>
      **Create an event on Android:**
    </DNT>

    ```
    Map<String, Object> userActionAttributes = new HashMap<String, Object>();

    userActionAttributes.put("name", "Purchase"); 

    userActionAttributes.put("sku", "12345LPD");

    userActionAttributes.put("quantity", 1);

    userActionAttributes.put("unitPrice", 99.99);

    userActionAttributes.put("total", 99.99);

    boolean userActionRecorded = NewRelic.<a href="/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-custom-events">recordCustomEvent</a>("UserAction", userActionAttributes);
    ```

    New Relic reporta un evento personalizado de tipo `UserAction` y nombre `Purchase`, que te permite consultar todas las compras realizadas en tu aplicación en el último día:

    ```
    SELECT * from UserAction where name = 'Purchase' since 1 day ago
    ```

    <DNT>
      **Replace deprecated `recordEvent` method:**
    </DNT>

    A partir de [la versión 5.12.0 del agente Android](/docs/release-notes/mobile-release-notes/android-release-notes) y [la versión 5.12.0 del agente iOS](/docs/release-notes/mobile-release-notes/ios-release-notes), utilice el método `recordCustomEvent` para crear estos eventos personalizados. Si ha reemplazado el método `recordEvent` obsoleto para su evento personalizado, asegúrese de reemplazar también su consulta NRQL correspondiente con el nuevo formato.

    Busque consulta utilizada con el método `recordEvent` , como por ejemplo:

    ```
    SELECT * from Mobile where category = 'Custom' and name = 'Purchase' since 1 day ago
    ```

    Reemplácelos con el formato de consulta utilizado con `recordCustomEvent`:

    ```
    SELECT * from UserAction where name = 'Purchase' since 1 day ago
    ```
  </Collapser>

  <Collapser
    id="track-user"
    title="Ejemplo de atributo: seguimiento de un usuario específico"
  >
    Puede crear un atributo personalizado para rastrear un identificador de usuario personalizado a lo largo de la sesión y luego consultar toda la interacción de ese usuario. Para agregar un atributo para `userId`, llame al método `setUserId` :

    <DNT>
      **Set the `userId` on iOS:**
    </DNT>

    ```
    BOOL userIdWasSet = [NewRelic setUserId:@"jsmith"];
    ```

    <DNT>
      **Set the `userId` on Android:**
    </DNT>

    ```
    boolean userIdWasSet = NewRelic.setUserId("jsmith");
    ```

    Con este atributo, puedes usar una cláusula [`WHERE`](/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-where) para ver todas las acciones realizadas por ese `username` en el último día:

    ```
    SELECT * from Mobile WHERE userId = 'jsmith' since 1 day ago
    ```
  </Collapser>

  <Collapser
    id="track-store"
    title="Ejemplo de atributo: realizar un seguimiento de una identificación de tienda específica"
  >
    Puede crear un atributo personalizado para rastrear la identificación de una tienda durante la sesión y luego consultar toda la interacción de esa tienda. Para agregar un atributo para `storeId`, llame al método `setAttribute` :

    <DNT>
      **Set the `storeId` on iOS:**
    </DNT>

    ```
    BOOL attributeSet = [NewRelic <a href="/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/create-attribute/">setAttribute</a>:@"storeId" value:@"NY0531"];
    ```

    <DNT>
      **Set the `storeId` on Android:**
    </DNT>

    ```
    boolean attributeSet = NewRelic.<a href="/docs/mobile-monitoring/mobile-sdk-api/new-relic-mobile-sdk-api/working-android-sdk-api#setAttribute">setAttribute</a>("storeId", "NY0531");
    ```

    Con este atributo, puedes usar una cláusula [`WHERE`](/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-where) para ver todas las acciones realizadas por ese `storeId` en el último día:

    ```
    SELECT * from Mobile WHERE storeId = 'NY0531' since 1 day ago
    ```
  </Collapser>

  <Collapser
    id="track-actions"
    title="Ejemplo de atributo personalizado: realizar un seguimiento de una acción específica"
  >
    Puede utilizar el atributo personalizado para realizar un seguimiento de la cantidad de veces que ocurre una acción específica en su aplicación. Por ejemplo, puedes realizar un seguimiento de la cantidad de veces que se hizo clic en un botón o de la cantidad de veces que se completó un nivel en un juego.

    Para realizar un seguimiento de la finalización de un nivel de juego, llame a `incrementAttribute` sin especificar ningún valor. Esto crea un atributo con un valor predeterminado de `1`:

    <DNT>
      **Create a counter on iOS:**
    </DNT>

    ```
    BOOL levelIncremented = [NewRelic <a href="/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/increment-session-attribute-count/">incrementAttribute</a>@"level"];
    ```

    <DNT>
      **Create a counter on Android:**
    </DNT>

    ```
    boolean levelIncremented = NewRelic.<a href="/docs/mobile-monitoring/mobile-sdk-api/new-relic-mobile-sdk-api/working-android-sdk-api#incrementAttribute">incrementAttribute</a>("level");
    ```

    Cada llamada posterior a `incrementAttribute` agrega 1 al atributo `level`:

    <DNT>
      **Increment a counter on iOS:**
    </DNT>

    ```
    levelIncremented = [NewRelic <a href="/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/increment-session-attribute-count/">incrementAttribute</a>@"level"];
    ```

    <DNT>
      **Increment a counter on Android:**
    </DNT>

    ```
    levelIncremented = NewRelic.<a href="/docs/mobile-monitoring/mobile-sdk-api/new-relic-mobile-sdk-api/working-android-sdk-api#incrementAttribute">incrementAttribute</a>("level");
    ```

    <Callout variant="important">
      Asegúrese de restablecer el valor a 0 cuando comience de nuevo.
    </Callout>

    Para restablecer el nivel a `1` o `0`, llame a `setAttribute`:

    <DNT>
      **Reset a counter on iOS:**
    </DNT>

    ```
    levelReset = [NewRelic <a href="/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/create-attribute/">setAttribute</a>:@"level" value:@1];
    ```

    <DNT>
      **Reset a counter on Android:**
    </DNT>

    ```
    levelReset = NewRelic.<a href="/docs/mobile-monitoring/mobile-sdk-api/new-relic-mobile-sdk-api/working-android-sdk-api#setAttribute">setAttribute</a>("level", 1);
    ```

    Al realizar consultas, utilice este atributo `level` para filtrar sus datos. Por ejemplo, si tiene un atributo `username` y `level` , use la función [`max()`](/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-max) para encontrar el nivel más alto que alcanzó el usuario:

    ```
    SELECT max(level) from Mobile where username = 'jsmith'
    ```
  </Collapser>
</CollapserGroup>

## Límites de tamaño y caracteres restringidos [#limits]

Límites para [el atributo personalizado agregado al evento móvil predeterminado](#event-definition):

* Atributo: 128 máximo
* Atributo de cadena: 4 KB de longitud máxima (no se aceptan valores de cadena vacíos)

Límites para evento personalizado:

* atributo: 254 máximo por evento (el número incluye [el atributo de sesión](/docs/insights/insights-data-sources/default-data/mobile-default-event-attributes-insights#session-list) predeterminado)
* Atributo de cadena: 4 KB de longitud máxima (no se aceptan valores de cadena vacíos)

Sintaxis y reglas de nomenclatura: consulte [Reglas para datos personalizados](/docs/insights/insights-data-sources/custom-data/data-requirements#general).

## Establecer la hora para enviar datos [#data-timing]

De forma predeterminada, New Relic transmite datos de eventos en cualquiera de estas situaciones:

* Una sesión ha estado en curso durante 600 segundos.
* La sesión de la aplicación finaliza con el fondo.
* La aplicación falla.

Si la aplicación falla, New Relic recopila el atributo y evento para esa sesión. (En iOS, esto sucede la próxima vez que se lanza la aplicación). Luego puede usar NRQL para consultar y analizar los datos de eventos y atributos.

Para establecer el tiempo máximo (en segundos) que el agente almacenará el evento en la memoria, consulte [Establecer el tiempo máximo de búfer](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-max-event-buffer-time).

## Consideraciones de privacidad [#data-privacy]

Si desea recopilar datos personales a través de un atributo personalizado, consulte con su equipo legal o de privacidad. Asegúrese de cumplir con las obligaciones de su organización en cuanto a avisos y regulaciones de consentimiento.
