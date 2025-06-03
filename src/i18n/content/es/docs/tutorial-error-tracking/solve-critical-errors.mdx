---
title: Resuelve tus errores críticos
metaDescription: Learn how to manage a high number of errors in your app.
freshnessValidatedDate: '2023-07-18T00:00:00.000Z'
translationType: machine
---

En la primera parte de este tutorial, elegimos un grupo de errores para investigar más a fondo. En la segunda parte, investigaremos una nueva página que muestra el atributo, el registro y la traza sobre el error.

Esta parte del tutorial lo guía a través de dos vías recomendadas para analizar un error: su registro y el rastreo del stack.

## Objetivos [#objectives]

Este documento se basa en el problema abordado en el documento [Responder a interrupciones del servicio](/docs/tutorial-errors/respond-outages) de esta serie de tutoriales. En este documento, podrás:

* Localice el código de error asociado con una API defectuosa con registro
* Utilice rastreo del stack para encontrar en qué parte de su código se produce el error

## Localizar el origen de un error con log y rastreo del stack [#analyze]

El resumen de errores cuenta la historia detrás de sus grupos de errores. Dependiendo de cómo haya configurado New Relic, cada servicio puede mostrar diferentes tipos de información sobre un error. Por ejemplo, si has desactivado rastreo distribuido, no verás tantos detalles sobre los servicios externos en tu traza.

<Steps>
  <Step>
    ## Abra la ventana de detalles log

    Mirando nuestro ejemplo, el agente APM ha extraído el registro relacionado con `api-gateway`, dándonos datos del evento sobre nuestro error:

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-logs.webp"
    />

    Nuestra capacidad de contexto de inicio de sesión formatea su información de registro, aunque también tiene la opción de investigar el log sin formato.
  </Step>

  <Step>
    ## Encuentre el punto de falla en su sistema

    Dependiendo de la naturaleza del log, es posible que tenga más o menos detalles de registro para clasificar. Debido a que dedicó tiempo a seleccionar el servicio más cercano al error y a elegir el grupo de error probable, tiene tiempo para leer su registro.

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-logs-zoomed.webp"
    />

    Según su registro, su problema es:

    * Un error de tiempo de espera: `error.error.code: ETIMEDOUT`
    * Relacionado con la API de sus clientes: `error.endpoint: customers-api-internal`
    * Agnóstico al tipo de solicitud enviada a la API del cliente: `error.request: /api/customers/search/Kirlin/-/`

      Tienes suficiente contexto para unirlo. Concluye que hay un error de dependencia: todas las llamadas a la API de clientes están agotando el tiempo de espera y provocan que las solicitudes ascendentes de `api-gateway` fallen.
  </Step>

  <Step>
    ## Encuentra el punto de falla en tu código con rastreo del stack

    Cuando ejecuta su código, New Relic captura sus excepciones o errores de tiempo de ejecución y los organiza en una vista en cascada. Estos son tu rastreo del stack. Dependiendo del idioma utilizado, estos rastreo del stack proporcionan mensajes detallados y las ubicaciones de los puntos de falla.

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-stack-traces.webp"
    />

    Mientras su registro le indica qué está causando el error, su rastreo del stack identifica el dónde. Puede utilizar estos rastreo del stack para encontrar exactamente en qué parte de su código se produce un error y luego conectar esos errores al equipo propietario.
  </Step>

  <Step>
    ## Abre en tu IDE desde New Relic

    Para abrir su código desde New Relic, necesita [instalar CodeStream](/docs/codestream/start-here/install-codestream). Esta es una característica opcional pero muy recomendada que te permite abrir tu IDE directamente desde el rastreo del stack:

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-IDE.webp"
    />
  </Step>
</Steps>

## ¿Que sigue? [#next]

Reaccionar ante un error y encontrar la causa directa de una interrupción es solo una parte de cómo abordar los errores en su aplicación. Ahora que hemos cubierto cómo describir, diagnosticar y encontrar el origen de una interrupción, puede enviar errores a los equipos pertinentes.

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-errors/route-teams","title":"Próximo paso","body":"Ahora que sabe dónde falla su código, aprenda a enrutar los errores a los equipos correctos."}}
  previousStep={{"path":"/docs/tutorial-errors/respond-outages","title":"Paso anterior","body":"Aprenda a elegir servicios y grupos de errores que estén más cerca del punto de falla."}}
/>
