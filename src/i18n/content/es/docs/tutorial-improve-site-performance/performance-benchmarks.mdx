---
title: Crear punto de referencia de rendimiento frontend
metaDescription: Learn how to create and define performance benchmarks with service levels.
freshnessValidatedDate: never
translationType: machine
---

La arquitectura de su sistema se compone de hosts, aplicaciones y servicios que se afectan y dependen unos de otros. Si una parte de su arquitectura tiene un rendimiento deficiente, más adelante puede provocar interrupciones críticas del sistema. nivel de servicio, sin embargo, le permite aplicar umbrales que facilitan el seguimiento de su sistema. Si el rendimiento de un servicio supera o cae por debajo de un umbral determinado, recibirá una alerta. Aquí están las capas para nivel de servicio:

* Un nivel de servicio se compone de objetivos de nivel de servicio (SLO). Los SLO son objetivos que representan cómo espera que se comporten sus servicios.
* Sus SLO están definidos por indicadores de nivel de servicio (SLI). Los SLI son medidas y métricas clave que determinan la disponibilidad del servicio.
* Además de estos objetivos se alertan indicadores. Estos le notifican cuando sus servicios no cumplen con sus SLO.

## Objetivos [#objectives]

Este tutorial le guiará en la creación de un punto de referencia de rendimiento con nivel de servicio. Al final del tutorial, habrá completado estas tareas:

* Comprender la relación entre los indicadores de nivel de servicio (SLI) y los objetivos de nivel de servicio (SLO).
* Cree y defina SLI y SLO para su experiencia frontend.
* Configure alerta para saber cuándo sus servicios tienen una caída en el rendimiento.

## Defina su nivel de servicio [#define]

Definir y administrar su nivel de servicio siguiendo los pasos a continuación brinda la capacidad de:

* Facilite la configuración futura: establezca automáticamente una línea de base de rendimiento y confiabilidad para cualquier servicio con una configuración con un solo clic.
* Defina la confiabilidad entre equipos: evite arduos procesos de alineación con recomendaciones de SLO y SLI que lo ayudan a determinar los límites del servicio. Establecer punto de referencia de confiabilidad automáticamente en función del rendimiento métrico reciente en cualquier entidad.
* Iterar y mejorar: con contexto destack completa y automatización a través de herramientas de infraestructura como código de código abierto como Terraform, los equipos tienen información valiosa sobre cómo nodos o servicios específicos impactan la confiabilidad del sistema y pueden tomar control rápidamente sobre su rendimiento. Las vistas personalizadas tanto para propietarios de servicios como para líderes empresariales impulsan la eficiencia operativa y conducen a mejores procesos de generación de informes, alertas y gestión de incidentes.
* Estandarizar la confiabilidad: los equipos interorganizacionales tienen una visión unificada y transparente de la confiabilidad del servicio y pueden cumplir mejor con los SLA de cara a los clientes. Las métricas de cumplimiento de SLO y los presupuestos de errores brindan a la organización una manera de informar sobre la confiabilidad e implementar cambios en las aplicaciones, la infraestructura y los equipos de manera coherente.

## Crea tu punto de referencia de actuación [#create]

<Steps>
  <Step>
    ## Seleccionar indicadores de nivel de servicio:

    Si bien hay una gran cantidad de SLI que puede utilizar para definir su experiencia frontend como punto de referencia, los siguientes son algunos que recomendamos específicamente. Cada colapsador tiene una explicación de cuándo debe elegir ese SLI y una consulta NRQL correspondiente (que usará en el paso 2).

    Por ahora, simplemente seleccione uno de los siguientes:

    <DNT>**SLIs for APM services instrumented with the New Relic agent**</DNT>: Según `Transaction` evento, estos SLI son los más comunes para servicios basados en solicitudes:

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="service-availability"
        title="Éxito del servicio"
      >
        El éxito del servicio es la relación entre el número de respuestas exitosas y el número de todas las solicitudes. Efectivamente, esta es una tasa de errores, pero puedes filtrarla, por ejemplo eliminando el error esperado.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}'
        ```

        Donde `{entityGuid}` es el GUID del servicio.

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: TransactionError
        WHERE: entityGuid = '{entityGuid}' AND error.expected IS FALSE
        ```

        Donde `{entityGuid}` es el GUID del servicio.
      </Collapser>

      <Collapser
        className="freq-link"
        id="service-latency"
        title="Latencia de servicio"
      >
        Un SLI de latencia mide la proporción de solicitudes válidas que se atendieron más rápido que el umbral establecido como buena experiencia.

        Para determinar ese umbral de duración, verifique cómo se ha desempeñado el servicio en las últimas semanas y utilice ese resultado como una línea de base realista y alcanzable. Luego, puede iterar sobre el umbral SLI y alinearlo con un rendimiento más ambicioso.

        Para seleccionar un valor apropiado para la condición de duración, una práctica típica es seleccionar la duración del percentil 95 de las respuestas de los últimos 7 o 15 días. Encuentre este umbral de duración usando el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder/) y utilícelo para determinar un buen evento para su SLI:

        ```sql
        SELECT percentile(duration, 95) FROM Transaction WHERE entityGuid = '{entityGuid}' since 7 days ago limit max
        ```

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web'
        ```

        Donde `{entityGuid}` es el GUID del servicio.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web' AND duration < {duration}
        ```

        * Donde `{entityGuid}` es el GUID del servicio.
        * Donde `{duration}` es el tiempo de respuesta que considera que brinda una buena experiencia para su servicio de atención al cliente o usuario final, en segundos.
      </Collapser>
    </CollapserGroup>

    <DNT>**SLIs for browser applications**</DNT>: Los siguientes SLI se basan en los principales web Métricas de Google.

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="browser-availability"
        title="éxito de la aplicación browser"
      >
        Es la proporción de páginas vistas que se publican sin errores.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageView
        WHERE: entityGuid = '{entityGuid}'
        ```

        Donde `{entityGuid}` es el GUID del servicio.

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: JavaScriptError
        WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
        ```

        Donde `{entityGuid}` es el GUID de la aplicación browser .
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-contentful-paint"
        title="Aplicación browser pintura con contenido más grande"
      >
        Es la proporción de visitas a páginas válidas en las que el elemento de contenido más grande visible en la ventana gráfica se representó más rápido que el umbral que se considera correspondiente a una buena experiencia.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint IS NOT NULL
        ```

        Donde `{entityGuid}` es el GUID del servicio.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint < '{largestContentfulPaint}'
        ```

        * Donde `{entityGuid}` es el GUID de la aplicación browser .
        * Donde `{largestContentfulPaint}` es la cantidad de tiempo (en milisegundos) para mostrar el elemento de contenido más grande visible en la ventana gráfica que considera que brinda una buena experiencia para el usuario final. Un estándar frecuente es 4000 ms.

        Para determinar un número realista a utilizar para `{largestContentfulPaint}` en su entorno, una práctica típica es seleccionar la duración del percentil 95 de las respuestas de los últimos 7 o 15 días. Encuéntrelo usando el generador de consultas:

        ```sql
        SELECT percentile(largestContentfulPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-first-delay"
        title="Interacción de la aplicación browser con la siguiente pintura"
      >
        Es la proporción de visitas a una página en la que el tiempo entre la primera interacción de un usuario con la página y el momento en que el browser responde a esa interacción es inferior a un cierto umbral.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint IS NOT NULL
        ```

        Donde `{entityGuid}` es el GUID del servicio.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint < {interactionToNextPaint}
        ```

        * Donde `{entityGuid}` es el GUID de la aplicación browser .
        * Donde `{interactionToNextPaint}` es la cantidad de tiempo (en milisegundos) que el browser debe responder para brindar una buena experiencia al usuario final. Un estándar frecuente es 300 ms.

        Para determinar un número realista a utilizar para `{interactionToNextPaint}` en su entorno, una práctica típica es seleccionar la duración del percentil 95 de las respuestas de los últimos 7 o 15 días. Encuéntrelo usando el generador de consultas:

        ```sql
        SELECT percentile(interactionToNextPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX FACET deviceType
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-cumulative-shift"
        title="Cambio de diseño acumulativo de la aplicación browser"
      >
        Es la proporción de páginas vistas con un buen cambio de diseño acumulativo (CLS). CLS se describe como la suma total de todas las puntuaciones de cambios de diseño individuales para cada cambio de diseño inesperado que ocurre durante toda la vida útil de la página. Un cambio de diseño ocurre cada vez que un elemento visible cambia su posición de un cuadro renderizado al siguiente.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift IS NOT NULL
        ```

        Donde `{entityGuid}` es el GUID del servicio.

        Si desea crear SLI independientes para realizar un seguimiento de CLS en dispositivos móviles y de escritorio por separado, agregue una de estas cláusulas al final del campo:

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift < {cumulativeLayoutShift}
        ```

        * Donde `{entityGuid}` es el GUID de la aplicación browser .
        * Donde `{cumulativeLayoutShift}` es un valor preestablecido. Para brindar una buena experiencia al usuario, su sitio debe esforzarse por tener una puntuación CLS de 0,1 o menos. Una puntuación CLS de 0,25 o más se considera una mala experiencia del usuario.

        Si decidió crear SLI independientes para realizar un seguimiento de CLS en dispositivos móviles y de escritorio por separado cuando definió la consulta de evento válida, agregue esta cláusula al final del campo:

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        Para determinar un número realista para seleccionar `{cumulativeLayoutShift}` en su entorno, una práctica típica es seleccionar el percentil 75 de cargas de página durante los últimos 7 o 15 días, segmentado entre dispositivos móviles y de escritorio. Encuéntrelo usando el generador de consultas:

        ```sql
        SELECT percentile(cumulativeLayoutShift, 95) FROM PageViewTiming WHERE  entityGuid = '{entityGuid}' since 7 days ago limit max facet deviceType
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="tip">
      Su organización debe definir SLO y SLI en función de sus necesidades específicas, las expectativas de su usuario y los recursos disponibles. Después de completar este tutorial, le recomendamos [aprender más sobre cómo definir un nivel de servicio personalizado granular](/docs/service-level-management/create-slm/#define-user-exp).
    </Callout>
  </Step>

  <Step>
    <img
      title="SLI ui"
      alt="An image of the service level maangement ui"
      src="/images/sonic_screenshot-full_sli-ui-overview.webp"
    />

    1. Navegue hasta

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com) > All capabilities > Service levels management**
       </DNT>

       . Esta UI muestra todos sus niveles de servicio y le permite definirlos, monitor y editarlos.

    2. Seleccione

       <DNT>
         **+ Add a service level**
       </DNT>

       en la parte superior derecha de la UI.
  </Step>

  <Step>
    Elija la entidad correspondiente para la que desea crear un nivel de servicio. Podría ser una carga de trabajo completa, un servicio específico, un monitor Sintético o incluso una transacción específica. Una vez que haya seleccionado su entidad, haga clic en <DNT>**Continue**</DNT> en el lado izquierdo del panel de la UI .
  </Step>

  <Step>
    Defina el SLI que eligió en el paso uno en este panel. Por ejemplo, si elige definir un SLI para el éxito de la aplicación browser , utilizaría la siguiente consulta:

    <DNT>**Query for valid events**</DNT>:

    ```sql
    FROM: PageView
    WHERE: entityGuid = '{entityGuid}'
    ```

    <DNT>**Query for bad events**</DNT>:

    ```sql
    FROM: JavaScriptError
    WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
    ```

    Seleccione <DNT>**Continue**</DNT> en el panel izquierdo una vez que haya confirmado que su consulta es correcta.
  </Step>
</Steps>

## ¿Que sigue? [#next]

¡Felicidades! ¡Has completado nuestro viaje sobre cómo usar New Relic para mejorar el rendimiento de tu sitio! En este tutorial, aprendió algunas cosas sobre cómo mejorar el rendimiento de su sitio. Aprendiste a:

* Desbloquee datos que pueden brindarle información valiosa sobre el rendimiento actual de su sitio al instrumentarlo.
* Evalúe sus principales web de Métricas para que pueda tomar las decisiones correctas para mejorar la experiencia del usuario final.
* Realice mejoras en su sitio corrigiendo la alta latencia y reduciendo los errores de JavaScript
* Crear un punto de referencia de desempeño para realizar un seguimiento del desempeño a lo largo del tiempo.

New Relic ofrece otras capacidades que pueden ayudarle a mejorar el rendimiento. Si bien este tutorial se centró en su sitio, puede consultar nuestros otros tutoriales:

* ¿Tu aplicación es lenta? Consulte [Mi aplicación tarda](/docs/tutorial-app-slow/root-causes) en solucionar problemas y solucionar problemas comunes con sus aplicaciones.
* ¿Su infraestructura está instrumentada, pero no sabe cómo asimilar los datos de su host? Consulte nuestro tutorial [sobre solución de problemas de hosts con datos de infraestructura](/docs/tutorial-troubleshoot-infra-hosts/diagnose-app-infra-data) .
* ¿Necesitas alerta, pero no sabes por dónde empezar? Consulte nuestro tutorial [Crear y administrar alertas](/docs/tutorial-create-alerts/create-new-relic-alerts) .
