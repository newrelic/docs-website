---
title: Responder a problemas de API
metaDescription: Learn how to manage APIs and other external services
freshnessValidatedDate: '2023-09-02T00:00:00.000Z'
translationType: machine
---

Casi todas las aplicaciones y servicios realizan llamadas a API y otros servicios externos. Cuando algo tan simple como presionar el botón `buy` en un sitio puede generar docenas de llamadas API, es probable que surjan problemas. Una API de llamada problemática puede resultar en cualquier cosa, desde un pequeño percance en el inventario hasta una situación de código rojo en la que su sitio no puede comunicarse con su procesador de pagos.

Analizar estos errores lleva mucho tiempo. ¿Su sitio no puede procesar compras porque falla la llamada de transacción de compra? ¿O tal vez sea su llamada de autenticación a su procesador de pagos? Tal vez ni siquiera sea un problema de API externa, sino un problema con su API de inventario interno. ¿Es incluso un error de API o un error dentro de su propia aplicación? Con New Relic, puede resolver estos problemas en una fracción del tiempo que llevaría manualmente.

<img
  title="Maps overview"
  alt="Home maps overview"
  src="/images/apm_screenshot-crop_maps-home.webp"
/>

## Objetivos [#objective]

Esta serie de tutoriales le muestra cómo identificar interacciones API problemáticas y cómo resolverlas con la plataforma New Relic. Este documento cubre:

* Integrando New Relic con su aplicación para enviar datos a monitor
* Identificación de API problemáticas a través de la UIde servicios externos

## Integrar New Relic [#integrate]

Antes de poder monitor o resolver algo, debe instalar un agente para recopilar los datos que utilizará.

<Steps>
  <Step>
    ## Instalar un agente APM

    Para monitor el rendimiento de su aplicación, utilizará un agente creado específicamente para el idioma de su aplicación. Al hacer clic en un logotipo, accederá a la plataforma New Relic, donde se le guiará durante la instalación y configuración del agente.

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

    Una vez que haya instalado un agente, vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT> y seleccione su aplicación. Si todavía no ve muchos datos, aléjese por un momento y deje que el agente recopile datos en tiempo real mientras se ejecuta su aplicación.
  </Step>

  <Step>
    ## Configuración adicional

    Su configuración específica puede requerir una configuración adicional. Eche un vistazo a nuestro [documento de configuración de servicios externos](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-setup/) para obtener más información.

    Una vez que haya completado los pasos adicionales del documento anterior, vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT> > seleccione su aplicación > <DNT>**External services**</DNT>. Debería ver fluir información sobre sus API y servicios externos.
  </Step>
</Steps>

## Identificar API problemáticas

Ahora tiene la capacidad de realizar un seguimiento de cómo interactúa su aplicación con las API y otros servicios externos. Usemos esa información para identificar qué API o servicios externos están causando problemas:

<Steps>
  <Step>
    ## Piensa en la causa raíz

    Si está buscando API o servicios problemáticos, probablemente ya tenga un problema que esté listo para resolver. Quizás su usuario no pueda realizar compras o incluso log sesión en su sitio.

    Su aplicación puede realizar llamadas a docenas o cientos de API. Mientras continúa con los siguientes pasos, tenga en cuenta el problema raíz. Si sabe que tiene un problema con las compras, debe centrarse en las API relacionadas con compras y transacciones. Si se trata de un problema de log de sesión, puede centrarse en las llamadas a la base de datos de usuarios o a servicios de autenticación externos.
  </Step>

  <Step>
    ## Triaje con mapas

    Supongamos que tiene una tienda web y recibió correos electrónicos de su usuario quejándose de que no se le había notificado cuando llegó su paquete. Esto le parece extraño, ya que deberían haber recibido una notificación tanto por SMS como por correo electrónico.

    Ha instrumentado su servicio que maneja todo el proceso de entrega. Vaya a la página <DNT>**External services**</DNT> y luego haga clic en <DNT>**Maps**</DNT>.

    <img
      title="Map view"
      alt="The maps view"
      src="/images/apm_screenshot-crop_external-maps.webp"
    />

    Esto le muestra la relación entre todos sus propios servicios y cualquier servicio externo o API. En este caso, el servicio que le interesa clasificar es `Delivery`. Lo llama otro servicio llamado `Order-Composer` y llama a otros cuatro servicios y API, como puede ver a la derecha.
  </Step>

  <Step>
    ## Identificar anomalía

    La vista de mapa le muestra algunos gráficos útiles para realizar un seguimiento del rendimiento y el tiempo de respuesta, pero también representa visualmente esas métricas a través del grosor y el color de la línea entre su servicio y los servicios a los que llama.

    <img
      title="RPM"
      alt="Screenshot showing the hover view of map entities"
      src="/images/apm_screenshot-crop_maps-rpm.webp"
    />

    Las líneas entre el servicio `Delivery` y su dependencia parecen bastante similares excepto la que apunta a `Sms notification`. De hecho, cuando pasas el cursor sobre el servicio de SMS puedes ver que el rendimiento es mucho mayor que el del resto de la dependencia.
  </Step>
</Steps>

Ahora ha identificado `Sms notification` como la causa probable de la frustración de su usuario. Ahora que hemos identificado al posible sospechoso, puedes resolver la raíz del problema.

<UserJourneyControls nextStep={{"path":"/docs/tutorial-external-services/solve-external","title":"Próximo paso","body":"Utilice gráficos métricos, mapas de sistemas y trazas para solucionar sus problemas de API."}}/>
