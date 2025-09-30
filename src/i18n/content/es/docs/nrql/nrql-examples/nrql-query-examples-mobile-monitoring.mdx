---
title: Ejemplos de consulta NRQL para monitoreo de móviles
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: Examples of NRQL queries of mobile data.
freshnessValidatedDate: never
translationType: machine
---

Hay varias formas de [consultar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data). Este documento le mostrará algunos ejemplos de consultas [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) a partir de <InlinePopover type="mobile"/>datos. Para ver descripciones de los eventos y atributos disponibles reportados por dispositivos móviles, consulte [Evento móvil](/docs/insights/insights-data-sources/default-data/mobile-default-event-attributes-insights).

## Ejemplos de consultas de eventos Mobile, MobileSession y MobileCrash [#mobile-examples]

La consulta móvil le permite comprender y comparar una amplia variedad de datos móviles, incluida la interacción, la ubicación, el perfil del dispositivo, la versión de la aplicación, los fallos y el rendimiento.

Estos ejemplos utilizan consultas realizadas en los tipos de eventos `Mobile`, `MobileSession` y `MobileCrash` :

<CollapserGroup>
  <Collapser
    id="mobilex-interactions"
    title={<><strong>interacción</strong>: ¿Qué interacciones son más populares entre mis usuarios?</>}
  >
    ```sql
    SELECT uniqueCount(uuid) FROM Mobile SINCE 1 day ago FACET name
    ```
  </Collapser>

  <Collapser
    id="china-regions"
    title={<><strong>Ubicación</strong>: ¿Qué regiones de China tienen más usuarios?</>}
  >
    ```sql
    SELECT uniqueCount(uuid) FROM MobileSession WHERE countryCode='CN' FACET regionCode SINCE 7 days ago
    ```
  </Collapser>

  <Collapser
    id="mobilex-deviceprofile"
    title={<><strong>Perfil del dispositivo</strong>: ¿Cuántos usuarios utilizan las últimas versiones del sistema operativo?</>}
  >
    ```sql
    SELECT uniqueCount(uuid) FROM MobileSession FACET osVersion SINCE 7 days ago
    ```
  </Collapser>

  <Collapser
    id="mobilex-appversion"
    title={<><strong>Versión de la aplicación</strong>: ¿Hemos visto un aumento en la duración de la sesión desde el lanzamiento de ayer?</>}
  >
    ```sql
    SELECT percentile(sessionDuration, 90) FROM MobileSession since 1 day ago compare with 2 days ago
    ```
  </Collapser>

  <Collapser
    id="memusage-example"
    title={<><strong>rendimiento</strong>: ¿Cuánta memoria usa mi aplicación para sesiones de más de 5 segundos?</>}
  >
    ```sql
    SELECT histogram(memUsageMb) FROM MobileSession WHERE sessionDuration > 5
    ```
  </Collapser>

  <Collapser
    id="mobilex-crashes"
    title={<><strong>Fallos</strong>: ¿Cuáles son los fallos más comunes de mi aplicación?</>}
  >
    ```sql
    SELECT count(*) FROM MobileCrash FACET crashException
    ```
  </Collapser>

  <Collapser
    id="mobilex-crashrate"
    title={<><strong>tasa de fallas</strong>: ¿Cuál es la tasa de fallas para las diferentes versiones de mi aplicación?</>}
  >
    ```sql
    SELECT percentage(uniqueCount(sessionId), WHERE category = 'Crash') AS `Crash rate` 
    FROM MobileSession, MobileCrash FACET appVersion SINCE 90 days ago
    ```
  </Collapser>
</CollapserGroup>

## Ejemplos de evento consulta MobileRequest [#mobilerequest-examples]

Esta característica requiere monitoreo de móviles agente versión 5.14.0 o superior. `MobileRequest` datos están habilitados de forma predeterminada para:

* [Versión de Android 5.15.2](/docs/release-notes/mobile-release-notes/android-release-notes/android-5152) o superior
* [iOS versión 6.0.0](/docs/release-notes/mobile-release-notes/ios-release-notes/ios-agent-600) o superior

Para versiones anteriores, a partir de la versión 5.14.0 de Android o la versión 5.14.0 de iOS, debes habilitar la característica. Actualice a la última versión [de Android](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/upgrade-android-agent) o [iOS](/docs/mobile-monitoring/new-relic-mobile-ios/installation/upgrade-ios-agent) , o agregue el [indicador de característica](/docs/mobile-monitoring/mobile-monitoring-ui/network-pages/analyze-network-requests-using-mobilerequest-event-data) requerido a su aplicación.

A continuación se muestran algunas consultas NRQL que abordan casos de uso comunes. Utilice el [atributo`MobileRequest` ](/docs/insights/insights-data-sources/default-data/mobile-default-event-attributes-insights#mobilerequest-attributes)para crear su propia consulta NRQL . Los dos últimos ejemplos utilizan [`MobileRequestError`](#mobilerequesterror-examples) evento además de `MobileRequest` para obtener una tasa de errores.

<CollapserGroup>
  <Collapser
    id="error_rate_request_domain"
    title="Tasa de errores por solicitud dominio"
  >
    ¿Qué dominios son propensos al fracaso y al error?

    ```sql
    SELECT percentage(count(*), where errorType = 'NetworkFailure' OR errorType = 'HTTPError') 
    AS 'Error Rate %', count(*) AS '# of Requests', 
    filter(count(*), WHERE errorType='NetworkFailure' OR errorType='HTTPError' AS '# of Errors') 
    FROM MobileRequestError, MobileRequest FACET requestDomain
    ```
  </Collapser>

  <Collapser
    id="error_rate_business_api"
    title="Tasa de errores para APIcríticas para el negocio"
  >
    ¿Cuál es la tasa de errores que ven nuestras aplicaciones móviles para la API más crítica para el negocio?

    ```sql
    SELECT percentage(count(*), WHERE errorType = 'NetworkFailure' OR errorType = 'HTTPError') 
    AS 'Error Rate %', count(*) AS '# of Requests',
    filter(count(*), where errorType='NetworkFailure' OR errorType='HTTPError' as '# of Errors') 
    FROM MobileRequestError, MobileRequest FACET requestPath WHERE requestPath = '{MY_API_PATH}'
    ```
  </Collapser>

  <Collapser
    id="response_time_percentile"
    title="Percentil de tiempo de respuesta de APIimportante"
  >
    Para solicitudes importantes en el percentil 90, ¿cuál es el tiempo de respuesta por URL?

    ```sql
    SELECT percentile(responseTime, 90), latest(requestUrl) AS 'Latest URL' FROM MobileRequest 
    FACET cases(where requestUrl LIKE '%{YOUR_CORE_API}%' as 'Core API', 
    WHERE requestUrl LIKE '%{YOUR_FEATURE_API}%' AS 'New Feature API')
    ```
  </Collapser>

  <Collapser
    id="volume_network"
    title="Volumen de solicitudes de red"
  >
    ¿Cuánto tráfico de red de las aplicaciones reciben los servicios backend?

    ```sql
    SELECT count(*) FROM MobileRequest FACET requestDomain SINCE 3 days ago
    ```
  </Collapser>

  <Collapser
    id="slow_response_user_impact"
    title="Impacto del usuario de respuesta lenta"
  >
    ¿Qué porcentaje de usuarios se ven afectados por un tiempo de respuesta http superior a 3 segundos?

    ```sql
    SELECT filter(uniqueCount(MobileRequest.uuid), 
    WHERE responseTime > 3) / uniqueCount(MobileSession.uuid) * 100 AS '% Users Impacted' 
    FROM MobileRequest, MobileSession SINCE 1 day ago TIMESERIES compare with 2 days ago
    ```
  </Collapser>

  <Collapser
    id="response_time_distribution_by"
    title="Distribución del tiempo de respuesta por dominio, operador, propietario de ASN, país, etc."
  >
    ¿Cuál es la distribución del tiempo de respuesta y el recuento de solicitudes entre dominio, país, operador o propietario de ASN?

    ```sql
    SELECT histogram(responseTime, 20, 20) FROM MobileRequest SINCE 3 days ago FACET asnOwner
    ```
  </Collapser>

  <Collapser
    id="percentile_response_time"
    title="Percentil de tiempo de respuesta"
  >
    ¿Cuál es el desglose del tiempo de respuesta por diferentes percentiles?

    ```sql
    SELECT percentile(responseTime, 98) AS '98 percentile (sec)', percentile(responseTime, 90) 
    AS '90 percentile (sec)',  percentile(responseTime, 50) AS '50 percentile (sec)' 
    FROM MobileRequest SINCE 3 days ago
    ```
  </Collapser>

  <Collapser
    id="req_per_session"
    title="Solicitudes por sesión"
  >
    ¿Cómo se comparan las solicitudes por sesión entre diferentes aplicaciones o compilaciones posteriores de esas aplicaciones?

    ```sql
    SELECT count(*)/uniqueCount(sessionId) FROM MobileRequest, MobileSession FACET appName TIMESERIES
    ```
  </Collapser>
</CollapserGroup>

## Ejemplos de eventos de consulta MobileRequestError [#mobilerequesterror-examples]

A continuación se muestran algunas consultas NRQL que abordan casos de uso comunes. Utilice el [atributo`MobileRequestError` ](/docs/insights/insights-data-sources/default-data/mobile-default-event-attributes-insights#mobilerequesterror-attributes)para crear su propia consulta NRQL .

<CollapserGroup>
  <Collapser
    id="http-errors"
    title="Errores HTTP"
  >
    ¿Qué consulta está provocando más errores?

    ```sql
    SELECT count(*) FROM MobileRequestError WHERE errorType = 'HTTPError' FACET requestUrl
    ```
  </Collapser>

  <Collapser
    id="network-failures"
    title="Fallos de red"
  >
    ¿Qué fallas de red son más comunes para mi aplicación?

    ```sql
    SELECT count(*) FROM MobileRequestError WHERE errorType = 'NetworkFailure' FACET networkError
    ```
  </Collapser>

  <Collapser
    id="error_rate_request_domain"
    title="Tasa de errores por solicitud dominio"
  >
    ¿Qué dominios son propensos al fracaso y al error?

    ```sql
    SELECT percentage(count(*), WHERE errorType = 'NetworkFailure' OR errorType = 'HTTPError')
    AS 'Error Rate %', count(*) AS '# of Requests', filter(count(*), 
    WHERE errorType='NetworkFailure' OR errorType='HTTPError' AS '# of Errors') 
    FROM MobileRequestError, MobileRequest FACET requestDomain
    ```
  </Collapser>

  <Collapser
    id="error_rate_business_api"
    title="Tasa de errores para APIcríticas para el negocio"
  >
    ¿Cuál es la tasa de errores en nuestras aplicaciones móviles para la API más crítica para el negocio?

    ```sql
    SELECT percentage(count(*), WHERE errorType = 'NetworkFailure' OR errorType = 'HTTPError') 
    AS 'Error Rate %', count(*) AS '# of Requests', filter(count(*), 
    WHERE errorType='NetworkFailure' OR errorType='HTTPError' AS '# of Errors') 
    FROM MobileRequestError, MobileRequest FACET requestPath WHERE requestPath = '{MY_API_PATH}'
    ```
  </Collapser>

  <Collapser
    id="error-users"
    title="Tasa de errores: Porcentaje de usuario impactado"
  >
    ¿Cuántos usuarios están experimentando errores en comparación con mi recuento total de usuarios?

    ```sql
    SELECT filter(uniqueCount(MobileRequestError.uuid), 
    WHERE errorType = 'HTTPError') / uniqueCount(MobileSession.uuid) * 100 
    AS '% Users Impacted by Errors' FROM MobileRequestError, MobileSession COMPARE WITH 7 days AGO
    ```
  </Collapser>

  <Collapser
    id="versions"
    title="Errores por versión"
  >
    ¿Qué versiones de mi aplicación causan más errores?

    ```sql
    SELECT count(*) FROM MobileRequestError FACET appVersion
    ```
  </Collapser>

  <Collapser
    id="uuid"
    title="Dispositivos únicos (por UUID)"
  >
    ¿Qué dispositivos únicos (por UUID) tienen más problemas con mi aplicación?

    ```sql
    SELECT count(*), latest(device), latest(carrier), latest(asnOwner), latest(countryCode) 
    FROM MobileRequestError FACET deviceUuid LIMIT 100 SINCE 1 days ago
    ```
  </Collapser>

  <Collapser
    id="history-http"
    title="Recuentos históricos de errores HTTP"
  >
    ¿Cómo se ve mi recuento histórico de errores HTTP (por dominio)?

    ```sql
    SELECT count(*) FROM MobileRequestError WHERE errorType = 'HTTPError' FACET requestDomain TIMESERIES
    ```
  </Collapser>
</CollapserGroup>

## Ejemplos de eventos de consulta MobileHandledException [#mobilehandledexception-examples]

A continuación se muestran algunas consultas NRQL para casos de uso [de excepciones manejadas](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/introduction-mobile-handled-exceptions) comunes. Utilice el [atributo`MobileHandledException` ](/docs/insights/insights-data-sources/default-data/mobile-default-event-attributes-insights#mobilehandledexception-attributes)para crear su propia consulta NRQL .

<CollapserGroup>
  <Collapser
    id="app-exceptions"
    title="Excepciones de aplicaciones"
  >
    ¿Qué aplicaciones han informado la mayor cantidad de excepciones manejadas?

    ```sql
    SELECT count(*) FROM MobileHandledException FACET appName SINCE 3 days ago
    ```
  </Collapser>

  <Collapser
    id="exception-locations"
    title="Principales ubicaciones de excepción"
  >
    ¿Cuáles son las ubicaciones de excepción más comunes para mi aplicación? ¿Cuántas excepciones tenemos y dónde ocurren?

    ```sql
    SELECT count(*) FROM MobileHandledException FACET exceptionLocation SINCE 3 days ago
    ```
  </Collapser>

  <Collapser
    id="exception-last-interaction"
    title="Interacciones más comunes que generan excepciones"
  >
    ¿Qué interacción produce más excepciones?

    ```sql
    SELECT count(*) FROM MobileHandledException FACET lastInteraction SINCE 3 days ago
    ```
  </Collapser>

  <Collapser
    id="exception-message"
    title="Mensaje de excepción más común"
  >
    ¿Cuáles son los mensajes de excepción reportados más comunes?

    ```sql
    SELECT count(*) FROM MobileHandledException FACET exceptionMessage SINCE 3 days ago
    ```
  </Collapser>

  <Collapser
    id="exception-methods-users"
    title="Método más común para informar excepciones"
  >
    ¿Cuáles son los métodos más comunes para informar excepciones?

    ```sql
    SELECT count(*) FROM MobileHandledException FACET exceptionLocationMethod SINCE 3 days ago
    ```
  </Collapser>

  <Collapser
    id="handled-exceptions-rate"
    title="Tasa de excepción manejada"
  >
    ¿Con qué frecuencia se manejan las excepciones encontradas por nuestro usuario?

    ```sql
    SELECT percentage(uniqueCount(sessionId), WHERE exceptionLocation IS NOT NULL) 
    FROM MobileSession,MobileHandledException SINCE 3 days ago
    ```
  </Collapser>
</CollapserGroup>
