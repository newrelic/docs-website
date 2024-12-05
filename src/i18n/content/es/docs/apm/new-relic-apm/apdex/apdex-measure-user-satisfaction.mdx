---
title: 'Apdex: Medir la satisfacción del usuario'
tags:
  - APM
  - Apdex
metaDescription: 'New Relic uses Apdex to measure whether users are satisfied, tolerating, or dissatisfied with your app''s response time.'
freshnessValidatedDate: never
translationType: machine
---

[Apdex](https://www.apdex.org/) es un estándar de la industria para medir la satisfacción del usuario con el tiempo de respuesta de aplicaciones y servicios web. Es una solución de Acuerdo de Nivel de Servicio (SLA) simplificada que le ayuda a ver qué tan satisfechos están los usuarios con su aplicación a través de métricas como la puntuación Apdex y el porcentaje de insatisfacción en lugar de métricas tradicionales fácilmente sesgadas como el tiempo de respuesta promedio.

Establecer un umbral útil para sus niveles de Apdex le ayudará a:

* Vea de un vistazo la satisfacción general de su usuario final con su aplicación.
* Obtenga la cantidad adecuada de traza para solucionar problemas y mejorar el rendimiento de la aplicación.

¿Listo para comenzar? Regístrese para obtener una cuenta si aún no lo ha hecho, luego haga clic en un logotipo para instalar un agente APM y comenzar a medir la satisfacción del usuario. ¡Solo toma unos minutos!

<InlineSignup/>

<TechTileGrid>
  <TechTile
    name="Go agent"
    icon="logo-go"
    to="https://one.newrelic.com/nr1-core?state=985d4005-ba90-a8c7-1da1-2af34539b03b"
  />

  <TechTile
    name="Java agent"
    icon="logo-java"
    to="https://one.newrelic.com/nr1-core?state=80d18bcb-4919-1fcb-2b77-9406838eb916"
  />

  <TechTile
    name=".NET agent"
    icon="logo-dotnet"
    to="https://one.newrelic.com/nr1-core?state=30e93090-6dfa-6b70-8e75-472f54414355"
  />

  <TechTile
    name="Node.js agent"
    icon="logo-nodejs"
    to="https://one.newrelic.com/marketplace/install-data-source?state=be2e62fa-cc3b-c428-27c4-8d662c9e80a1"
  />

  <TechTile
    name="PHP agent"
    icon="logo-php"
    to="https://one.newrelic.com/nr1-core?state=aa633b41-72d4-009c-3abf-55dcf64894fe"
  />

  <TechTile
    name="Python agent"
    icon="logo-python"
    to="https://one.newrelic.com/nr1-core?state=20fda75b-58fb-a92a-f9e1-7b052035c6e8"
  />

  <TechTile
    name="Ruby agent"
    icon="logo-ruby"
    to="https://one.newrelic.com/nr1-core?state=d69143ab-605c-579b-25bf-cc6e5fee5b80"
  />
</TechTileGrid>

Para obtener más información, mire este breve vídeo de YouTube (aprox. 3:50 minutos).

<Video
  id="VqOLmXxpkTw"
  type="youtube"
/>

## 

## Cómo utilizar Apdex [#what-is]

La puntuación Apdex es un valor de relación entre el número de solicitudes satisfechas y tolerantes y el total de solicitudes realizadas. Cada solicitud satisfecha cuenta como una solicitud, mientras que cada solicitud tolerante cuenta como la mitad de una solicitud satisfecha.

Una puntuación Apdex varía de 0 a 1, siendo 0 la peor puntuación posible (el 100% del tiempo de respuesta fue Frustrado) y 1 la mejor puntuación posible (el 100% del tiempo de respuesta fue Satisfecho).

<DNT>
  **Example Apdex score:**
</DNT>

Durante un período de 2 minutos, un anfitrión maneja 200 solicitudes. El umbral de Apdex T = 0,5 segundos (500 ms). Este valor es arbitrario y lo selecciona el usuario.

* 170 de las solicitudes se gestionaron en 500 ms, por lo que se clasifican como Satisfechas.
* 20 de las solicitudes se manejaron entre 500 ms y 2 segundos (2000 ms), por lo que se clasifican como Tolerantes.
* Los 10 restantes no se manejaron adecuadamente o tardaron más de 2 segundos, por lo que se clasifican como Frustrados.

La puntuación Apdex resultante es 0,9: `(170 + (20/2))/200 = 0.9`.

<Callout variant="important">
  La fórmula utilizada para calcular la puntuación Apdex está diseñada para aplicaciones de alto rendimiento. Si el rendimiento de su aplicación es inferior a 100 RPM, no se recopilan datos suficientes para determinar una puntuación estable. La inestabilidad puede provocar que Apdex condición de alerta se comporte inesperadamente.
</Callout>

## Recuentos de Apdex

Apdex rastrea tres recuentos de respuestas:

* <DNT>
    **Satisfied:**
  </DNT>

  El tiempo de respuesta es menor o igual a T.

* <DNT>
    **Tolerating:**
  </DNT>

  El tiempo de respuesta es mayor que T y menor o igual a 4T. En este ejemplo, 4 x 1,2 = 4,8 segundos es el tiempo de respuesta máximo tolerable.

* <DNT>
    **Frustrated:**
  </DNT>

  El tiempo de respuesta es superior a 4T o la solicitud devuelve un error del lado del servidor. Una [tasa de errores alta](/docs/apm/applications-menu/error-analytics/introduction-error-analytics) puede hacer que tenga un tiempo de respuesta promedio satisfactorio, pero una puntuación Apdex baja.

El valor `apdex_f` de su archivo de configuración es cuatro veces el valor Apdex T de su servidor de aplicaciones. Este umbral es útil, por ejemplo, con [la traza de la transacción](/docs/traces/configuring-transaction-traces). Para obtener más información, consulte la [documentación del archivo de configuración](/docs/agents/manage-apm-agents/configuration/configure-agent) de su agente New Relic.

El cálculo del tiempo cambiará según la configuración T de su propia aplicación. En el siguiente ejemplo, T = 1,2 segundos.

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Level**
        </DNT>
      </th>

      <th>
        <DNT>
          **Multiplier**
        </DNT>
      </th>

      <th>
        <DNT>
          **Time (T Example = 1.2)**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Satisfecho
      </td>

      <td>
        T o menos
      </td>

      <td>
        &lt;= 1,2 segundos
      </td>
    </tr>

    <tr>
      <td>
        Tolerado
      </td>

      <td>
        \>T, &lt;= 4T
      </td>

      <td>
        Entre 1,2 y 4,8 segundos
      </td>
    </tr>

    <tr>
      <td>
        Frustrado
      </td>

      <td>
        \> 4T
      </td>

      <td>
        Más de 4,8 segundos
      </td>
    </tr>
  </tbody>
</table>

Después de definir sus niveles de Apdex, utilice cualquiera de [los recursos de New Relic para ayudar a identificar y solucionar cambios](/docs/apm/new-relic-apm/apdex/view-your-apdex-score) que indiquen malas experiencias de los clientes con su aplicación.

Puede definir múltiples valores de Apdex T para cada uno de estos:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Medidas del ápice
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Aplicaciones APM
      </td>

      <td>
        APM monitorea el rendimiento de estas aplicaciones. Para [definir su configuración de Apdex](/docs/apm/new-relic-apm/apdex/change-your-apdex-settings), utilice la UI de APM. Puede encontrar <DNT>**Apdex**</DNT> en la página [Resumen de APM](/docs/apm/applications-menu/monitoring/apm-overview-page) .
      </td>
    </tr>

    <tr>
      <td>
        Aplicaciones browser
      </td>

      <td>
        Browser monitorea la experiencia del usuario final para estas aplicaciones. En lugar de utilizar Apdex para monitor a tu usuario, te recomendamos [Métricas web principales](/docs/journey-performance/guide-to-monitoring-core-web-vitals).
      </td>
    </tr>

    <tr>
      <td>
        Clave de transacción
      </td>

      <td>
        Estas son [transacciones importantes para su negocio](/docs/apm/transactions/key-transactions/introduction-key-transactions) que usted elige monitor. Puede [definir la configuración de Apdex para la clave de transacción](/docs/apm/transactions/key-transactions/create-update-key-transactions) en la página <DNT>**Key transactions**</DNT> .

        <Callout variant="important">
          La configuración de Apdex de transacción clave anula el valor T de esa aplicación. Para más detalles, ver [transacción clave Apdex](/docs/apm/transactions/key-transactions/create-update-key-transactions#apdex).
        </Callout>
      </td>
    </tr>
  </tbody>
</table>

## Alerta Apdex [#apdex-alerts]

También puede [configurar la condición de alerta](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-alert-conditions) para Apdex. Cuando la puntuación de Apdex supera el [umbral](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-thresholds-trigger-alert) que usted define, New Relic envía una alerta al mecanismo de notificación (canal).

## Páginas de errores [#error]

Cualquier solicitud que devuelva un error del lado del servidor como `500: Application Error` es una respuesta frustrante, independientemente de su velocidad de devolución. Puede utilizar Apdex para visualizar el impacto de estos errores y luego identificarlos y resolverlos con las herramientas integradas [de análisis de errores](/docs/apm/applications-menu/error-analytics/introduction-error-analytics) y [perfil de errores](/docs/apm/applications-menu/error-analytics/apm-error-profiles-troubleshoot-trends) de New Relic.

## Porcentaje de insatisfacción [#dissatisfaction]

El <DNT>**dissatisfaction percentage**</DNT> es el porcentaje de la insatisfacción total experimentada por el usuario de la aplicación que aporta una transacción.

<DNT>
  **Example Apdex dissatisfaction calculation:**
</DNT>

Frustraciones(transacción) + Tolerancias(transacción)/2

Frustraciones(Aplicación) + Tolerancias(Aplicación)/2

Para [visualizar el porcentaje de insatisfacción](/docs/apm/new-relic-apm/apdex/view-your-apdex-score#apdex-dissat), puede ordenar su transacción por la más insatisfactoria.

Si una transacción es siempre frustrantemente lenta pero rara vez visitada, no contribuirá mucho a la insatisfacción total de la aplicación. Por el contrario, si una transacción normalmente es rápida, pero tiene un alto rendimiento, esto puede contribuir en gran medida a la insatisfacción de la aplicación simplemente porque contribuye con una gran proporción del tráfico de su aplicación.

## Personaliza las visualizaciones de Apdex [#insights]

Utilice el generador de consultas para personalizar la forma en que visualiza Apdex:

* [Cree un panel](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para analizar y compartir sus datos de Apdex.
* [Analice sus datos de Apdex](/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-apdex) con NRQL consulta.

## Cambiar la configuración de Apdex

Puede definir valores de Apdex T para cada aplicación. También puede definir el umbral de Apdex T individual para [la clave de transacción](/docs/apm/transactions/key-transactions/introduction-key-transactions).

Para obtener una descripción general rápida de por qué son importantes las mediciones de Apdex y cómo saber qué umbral es el adecuado para su aplicación, mire este breve vídeo de YouTube (aprox. 3:40 minutos).

<Video
  id="RoLIBfEpYZg"
  type="youtube"
/>

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="apm-apdex"
    title="Cambiar la configuración de APM Apdex"
  >
    Solo puede cambiar el umbral de Apdex para aplicaciones que informan datos activamente. Por ejemplo, si una de sus aplicaciones no informa, no verá sus opciones de configuración de Apdex.

    El umbral Apdex T predeterminado para un servidor de aplicaciones es 0,5 segundos. Para cambiar el umbral predeterminado del servidor de aplicaciones para transacciones web:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > (select an app) > Settings > Application > Application settings**
       </DNT>

       .

    2. En la sección

       <DNT>
         **Application server**
       </DNT>

       , establezca el valor

       <DNT>
         **Apdex T**
       </DNT>

       (en segundos) para esta aplicación.

    3. Seleccione

       <DNT>
         **Save application settings**
       </DNT>

       .

       Después de cambiar la configuración de Apdex, aparece una barra vertical negra en el gráfico principal de la [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page).
  </Collapser>
</CollapserGroup>
