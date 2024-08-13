---
title: Resuelva su problema de servicio externo
metaDescription: Resolve the root cause of your API or external service problems
freshnessValidatedDate: '2023-09-02T00:00:00.000Z'
translationType: machine
---

Ahora ha identificado la API o el servicio externo que requiere atención. Este tutorial lo guía a través de los pasos necesarios para solucionar los problemas.

Tenga en cuenta que no existe una solución única para los problemas con las API y los servicios externos. Tome las ideas de este tutorial como punto de partida y profundice cada vez que descubra algo.

## Objetivos

Este documento utiliza `Sms notification`, el servicio externo que identificamos [en el documento del tutorial anterior](/docs/tutorial-external-services/respond-external), como ejemplo de API o servicio externo problemático. Este documento cubre:

* Buscando anomalías en cartas métricas
* Usando traza para encontrar la causa raíz

## Identificar y resolver la causa raíz.

Ya has utilizado la vista de mapa para identificar el servicio externo problemático, pero podemos utilizarla para profundizar aún más:

<Steps>
  <Step>
    ## Identificar anomalía con métrica

    En la vista del mapa, coloque el cursor sobre la API o el servicio externo problemático y seleccione <DNT>**Show entity preview**</DNT>.

    <img
      title="The preview pane for an external service"
      alt="The preview pane for an external service"
      src="/images/apm_screenshot-crop_maps-preview.webp"
    />

    Esto abre un panel donde obtiene una descripción general del estado general del servicio. Ya usaste algunas de estas métricas para identificarlo como el problema, pero es útil echar un vistazo más profundo aquí. Échale un ojo a:

    * Picos en las listas.
    * Obviamente alta tasa de respuesta o rendimiento.
    * Las tasas de respuesta y el rendimiento alcanzan altibajos aproximadamente al mismo tiempo.

      Si identifica una anomalía, utilice el selector de tiempo en la parte superior derecha para expandir el rango de tiempo que está viendo. Esto es útil para identificar una anomalía en lugar de un patrón.

      Puedes ver en la captura de pantalla anterior que nada destaca excepto que el rendimiento es un poco mayor de lo que esperabas. No hay nada de qué preocuparse de inmediato.
  </Step>

  <Step>
    ### Encuentre un problema a nivel de código con traza

    Pase el cursor sobre el servicio externo problemático nuevamente y esta vez haga clic en <DNT>**View traces**</DNT>.

    <img
      title="The trace pane for an external service"
      alt="The trace pane for an external service"
      src="/images/apm_screenshot-crop_maps-trace.webp"
    />

    Esto muestra varios gráficos sobre la traza involucrada con ese servicio. En este caso, hay una única traza llamada `Controller/Sinatra//purchase` que le permite seguir los datos creados desde que su usuario hace clic en el botón comprar hasta la llamada API que envía una notificación por SMS.

    Haga clic tan profundamente como le resulte útil, pero concéntrese nuevamente en encontrar anomalías o errores en el gráfico. Por ejemplo, puede seguir la traza hasta la llamada API que descifra el número de teléfono almacenado de un usuario. Un error aquí podría descubrir todo el problema. Si la llamada de descifrado falla y nunca devuelve un número de teléfono válido, su usuario nunca recibirá una notificación telefónica.

    Esto también explicaría por qué no vio errores en los gráficos `Sms notification` . Esa API funcionaba correctamente, pero una API más arriba le proporcionaba datos que en realidad no servían para ningún propósito.
  </Step>

  <Step>
    ## Utilice los datos para identificar errores lógicos.

    No todas las soluciones provienen directamente de errores o anomalías. La causa fundamental puede ser mucho más mundana.

    Por ejemplo, supongamos que ha explorado todos los gráficos relacionados con la API `Sms notification` . También revisó cada traza y no identificó errores o anomalías extrañas. Todo parece funcionar bien, pero sus clientes aún no reciben la notificación.

    Recuerda haber mirado el gráfico de rendimiento de `Sms notification` y de repente se da cuenta de que es posible que haya alcanzado el límite de compras que le proporciona su procesador de pagos. Su API recibió su llamada, pero como había alcanzado su cuota, simplemente no hizo nada con la solicitud que recibió. Ni siquiera te arrojó un error.
  </Step>
</Steps>

## ¿Que sigue? [#next]

Ahora que ha solucionado sus problemas de API y ha trazado todo el mapa de su sistema, está listo para explorar un poco más nuestra plataforma:

* ¿Tu aplicación funciona lenta? Aprenda a clasificar y diagnosticar la latencia en su aplicación con nuestro tutorial [Mi aplicación es lenta](/docs/tutorial-app-slow/root-causes) .
* Si se acerca un día de máxima demanda, conozca cómo New Relic puede ayudarle con [la planificación de la capacidad](/docs/tutorial-peak-demand/get-started).
* ¿Quieres crear alertas de alta calidad? Nuestro [tutorial alerta](/docs/tutorial-create-alerts/create-new-relic-alerts/) puede ayudarle a configurar un sistema de alerta.

<UserJourneyControls previousStep={{"path":"/docs/tutorial-external-services/respond-external","title":"Paso anterior","body":"Responda a los problemas de API y configure New Relic para su aplicación."}}/>
