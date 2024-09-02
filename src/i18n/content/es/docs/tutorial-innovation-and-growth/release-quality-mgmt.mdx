---
title: Mejora la calidad de tus lanzamientos
tags:
  - Observability maturity
  - Innovation and growth
  - Release quality
  - Implementation guide
metaDescription: Our release quality guide helps you use New Relic to improve and optimize the quality and cadence of your code deployments.
freshnessValidatedDate: never
translationType: machine
---

El éxito de un equipo de desarrollo depende de la frecuencia y el éxito de sus lanzamientos. Los equipos que lanzan demasiado lentamente no podrán seguir el ritmo de las demandas y la innovación del negocio, y los equipos que crean demasiados lanzamientos fallidos tendrán un impacto negativo en la satisfacción de los clientes, los ingresos y la estabilidad general del sistema.

El equipo [de Investigación y Evaluación DevOps](https://www.devops-research.com/research.html) (DORA) de Google ha identificado cuatro métricas clave que indican el rendimiento de una organización de desarrollo de software. Nuestro impulsor de valor <DNT>**Innovation and Growth**</DNT> utiliza esas métricas para crear un programa general que cree equipos de desarrollo más eficientes y receptivos, junto con una aplicación más confiable. Esta guía de calidad de lanzamiento lo ayuda a mejorar la frecuencia de implementación, el rendimiento de la aplicación y la confiabilidad de la aplicación.

## Conceptos clave [#key-concepts]

Los conceptos de Kep incluyen:

### Comunicar, remediar, innovar [#communicate]

Uno de los temas centrales de la práctica de madurez de observabilidad de New Relic es "Comunicar, remediar, innovar". Apoyamos ese tema permitiéndole comunicar el estado actual de sus prácticas de desarrollo a las partes interesadas utilizando KPI específicos. Luego, utilizará esos KPI para ajustar sus prácticas de desarrollo e identificar componentes de aplicaciones lentos y poco confiables para poder corregirlos en sprints de desarrollo posteriores. Finalmente, utilizará esos KPI para hacer que sus prácticas de desarrollo sean más eficientes y agregar tiempo adicional para que sus equipos innoven.

### Desarrollo basado en troncales [#trunk]

El desarrollo basado en troncales se define como "un modelo de ramificación de control de fuente, donde los desarrolladores colaboran en el código en una única rama llamada <DNT>**trunk**</DNT>, resisten cualquier presión para crear otras ramas de desarrollo de larga duración mediante el empleo de técnicas documentadas". En resumen, divide el trabajo de desarrollo en pequeños lotes realizados contra ramas de un único tronco. Tan pronto como se completa un lote de trabajo, la rama se fusiona nuevamente con el tronco. Cada rama tiene una vida útil corta, lo que simplifica las fusiones con el tronco y garantiza que todos los desarrolladores estén trabajando a partir de versiones recientes de la base de código.

Esta práctica ha sido identificada por la organización DevOps Research and Assessment (DORA) como una capacidad clave que impulsa una entrega más rápida y un mayor rendimiento organizacional. Es una práctica obligatoria para CI/CD.

### Límite del servicio de TI [#it-boundary]

La mejora de la calidad de la versión funciona a nivel del límite del servicio de TI. Al medir el servicio en el límite, se puede obtener una idea de lo que sucede aguas arriba.

La [guía de administración a nivel de servicio](/docs/new-relic-solutions/observability-maturity/uptime-performance-reliability/slm-implementation-guide) utiliza el concepto de límite de servicio para medir el tiempo de respuesta y la tasa de errores de un servicio determinado. En esta guía, utilizará el mismo concepto para medir el impacto que sus prácticas de desarrollo tienen en el servicio y luego mejorar la capacidad de respuesta, la capacidad de innovar y la estabilidad de la aplicación de su equipo de desarrollo.

## Indicadores de rendimiento clave [#key-perf-indicators]

Utilizará el proceso de calidad del desarrollo para recopilar y medir los siguientes KPI:

<CollapserGroup>
  <Collapser
    id="kpi-release-rate"
    title="KPI de tasa de liberación"
  >
    La tasa de liberación mide el número de liberaciones a lo largo del tiempo. El evento de lanzamiento debe incluir el siguiente atributo:

    * El nombre de la aplicación.

    * El identificador único de la versión (firma SHA, número de versión, etc.)

    * El número de líneas de código agregadas.

    * El número de líneas de código eliminadas.

    * La fecha y hora en que ocurrió la liberación.

    * El usuario o proceso que desplegará el lanzamiento.

    * La URL que apunta a esta versión en el repositorio de código fuente.

    * Un indicador que muestra si esta versión es nueva o una reversión.

      <DNT>**Goal:**</DNT> Incrementar el ritmo de emisiones.

      <DNT>
        **Best practices:**
      </DNT>

    * Utilice procesos de mejora continua para impulsar una mayor tasa de lanzamiento.

    * Minimice la cantidad de cambios en cada versión para reducir el impacto de las fallas de la versión.

    * Asigne este KPI al impacto empresarial e infórmelo a las partes interesadas.
  </Collapser>

  <Collapser
    id="kpi-release-size-scope"
    title="KPI de tamaño/alcance de la versión"
  >
    El tamaño/alcance de la versión mide la cantidad de líneas de código agregadas o eliminadas. Como alternativa, puede medir el porcentaje de la base de código modificada.

    Debe incluir este KPI como atributo de un evento de lanzamiento según lo definido por el KPI de tasa de lanzamiento.

    <DNT>**Goal:**</DNT> Reducir el tamaño/alcance de cada versión.

    <DNT>
      **Best practices:**
    </DNT>

    * Minimice la cantidad de cambios en cada versión para reducir el impacto de las fallas de la versión.
    * Asigne este KPI al impacto empresarial e infórmelo a las partes interesadas.
  </Collapser>

  <Collapser
    id="kpi-app-resp-errors"
    title="KPI de capacidad de respuesta y errores de transacciones de aplicaciones"
  >
    El KPI de capacidad de respuesta y errores de la aplicación mide el percentil 95 del tiempo de respuesta y el volumen de errores de la versión.

    Debe utilizar instrumentación de observabilidad para recopilar este KPI para cada transacción en el límite de servicio de la aplicación. El atributo del KPI debe incluir, como mínimo, lo siguiente:

    * Nombre de la transacción y/o URI

    * Inicio de la transacción tiempo de reloj

    * La duración de la transacción.

    * El recurso de calcular que atendió la solicitud.

      <DNT>**Goal:**</DNT> Mejore el tiempo de respuesta y reduzca errores.

      <DNT>
        **Best practices:**
      </DNT>

    * Utilice técnicas de administración a nivel de servicio para crear aplicaciones más receptivas con menos errores de cara al usuario.

    * Utilice este KPI para priorizar los esfuerzos de mejora del rendimiento de ingeniería.

    * Utilice su solución de observabilidad para enviar información sobre el cuello de botella y culpar a los componentes de sus equipos de desarrollo para que puedan solucionarlos.
  </Collapser>

  <Collapser
    id="kpi-production-impact"
    title="KPI de impacto en la producción"
  >
    El impacto en la producción mide la cantidad de versiones fallidas (como versiones que se revirtieron o que no se implementaron).

    Debe incluir este KPI como atributo de un evento de lanzamiento según lo definido por el KPI de tasa de lanzamiento.

    <DNT>**Goal:**</DNT> Reducir el número de lanzamientos fallidos.

    <DNT>
      **Best practices:**
    </DNT>

    * Asegúrese de probar de manera realista su implementación en un entorno de no producción antes de pasarlos a producción.
    * Realice retrospectivas en profundidad sobre el despliegue fallido para que pueda descubrir y corregir lagunas en sus procesos de prueba y despliegue.
  </Collapser>

  <Collapser
    id="kpi-observability-coverage"
    title="KPI de cobertura de observabilidad"
  >
    Este KPI mide el porcentaje de la aplicación que cuenta con instrumentación de observabilidad.

    <DNT>**Goal:**</DNT> 100% cobertura

    <DNT>
      **Best practices:**
    </DNT>

    * Agregue instrumentación de diagnóstico a los componentes principales de la aplicación.
    * Utilice las fallas en el logro de SLO para impulsar procesos de diagnóstico para identificar y llenar brechas de observabilidad.
    * Utilice retrospectivas de incidentes para identificar y llenar vacíos de observabilidad.
  </Collapser>

  <Collapser
    id="kpi-support-ticket-volume"
    title="KPI de volumen ticket de soporte (opcional)"
  >
    El volumen ticket de soporte mide la cantidad de tickets de soporte abiertos para esta versión. Este es un KPI opcional.

    Debe recopilar este KPI como una métrica horaria o diaria que tenga el siguiente atributo:

    * Nombre de la aplicación y versión

    * Timestamp

    * Número de ticket abierto por gravedad

    * Tiempo medio para cerrar por gravedad

      <DNT>**Goal:**</DNT> Reducir el número de billetes.

      <DNT>
        **Best practices:**
      </DNT>

    * Asegúrese de poder correlacionar el ticket de soporte con versiones específicas.

    * Analice los tickets de soporte para comprender los tipos de problemas encontrados y utilice esa información para impulsar la mejora continua.
  </Collapser>

  <Collapser
    id="kpi-infra-costs"
    title="KPI de costo de infraestructura (opcional)"
  >
    Este KPI mide los costos de alojamiento de la aplicación. Es un KPI opcional.

    <DNT>**Goal:**</DNT> Cree un modelo de costos predecible y estable.

    <DNT>
      **Best practices:**
    </DNT>

    * Mida los costos de la infraestructura de alojamiento de cada aplicación.
    * Revisar periódicamente la métrica de rendimiento versus costo de la aplicación para garantizar que la aplicación tenga recursos adecuados a su función e importancia comercial.
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### Identificar la aplicación [#identify-application]

    El primer paso es identificar las aplicaciones que están dentro del alcance de las primeras iteraciones del proceso de mejora. Las aplicaciones que son buenas candidatas para su inclusión son aquellas que:

    * Están en desarrollo activo.
    * Son un servicio operativo clave
    * Tener ciclos de desarrollo lentos.
    * Tener un historial de implementación fallida.
  </Step>

  <Step>
    ### Reúna los KPI necesarios [#gather-kpis]

    A continuación, debe recopilar los KPI definidos a partir de fuentes como su plataforma CI/CD, repositorio de origen, solución de observabilidad, etc. Una vez que identifique las fuentes de sus KPI, deberá identificar métodos para extraerlos e importarlos a la plataforma New Relic.

    Puede ver los KPI y el atributo mínimo requerido en la sección [de indicadores de rendimiento clave](#key-perf-indicators) anterior. Normalmente, utilizará las API de su cadena de herramientas de desarrollo para extraer los KPI y sus atributos, y luego los enviará a New Relic mediante la [API de evento personalizado](/docs/data-apis/ingest-apis/introduction-event-api/).

    Antes de comenzar cualquier trabajo de integración personalizada, debe determinar si existe alguna integración lista para usar que cumpla con sus objetivos.
  </Step>

  <Step>
    ### Implementar panel [#implement-dashboards]

    Nuestros <InlinePopover type="dashboards"/>son los principales impulsores del proceso de mejora de la calidad. Mostrarán KPI y tendencias para que pueda identificar y priorizar sus esfuerzos de mejora. Puede [encontrar un panel de muestra en nuestro centro de recursos de madurez de observabilidad en GitHub](https://github.com/newrelic/oma-resource-center).

    La información que se muestra en el panel depende de su cadena de herramientas de desarrollo, por lo que deberá [personalizar su dashboard](https://developer.newrelic.com/collect-data/monitor-your-application/query-custom-data/) según sus especificaciones exactas.
  </Step>

  <Step>
    ### Establece tu lanzamiento línea de base [#establish-baseline]

    Debido a que necesita suficientes datos para formar una línea de base antes de poder [realizar la habilitación inicial](#perform-enablement-one), debe establecer su línea de base que consista en una muestra de actividad de desarrollo. Normalmente, esto será un mínimo de dos semanas, pero puede ser hasta seis semanas dependiendo de su ritmo de desarrollo actual. Una forma sencilla de hacerlo es alinear su ciclo de evaluación y recopilación de línea de base con sus sprints ágiles, si corresponde.

    Debes asegurarte periódicamente de que los datos del evento se acumulen como se espera en New Relic mientras estableces tu línea de base.
  </Step>

  <Step>
    ### Reúnete con tu equipo [#meet-with-team]

    Después de establecer su línea de base, presentará a los equipos de desarrollo y otras partes interesadas los datos recopilados y el proceso de mejora continua que seguirá.

    El proceso consta de cuatro actividades:

    1. <DNT>
         **Introduce the concepts of trunk-based development**
       </DNT>

       : Usted y las partes interesadas revisarán los conceptos centrales del desarrollo basado en camiones, identificarán dónde difieren sus prácticas actuales y luego crearán estrategias para implementarlas.

    2. <DNT>
         **Review your release KPIs and trends**
       </DNT>

       : Revisará los KPI de tasa de lanzamiento, tamaño y alcance de lanzamiento para asegurarse de que está avanzando hacia la implementación del desarrollo basado en troncales. Su objetivo es aumentar su tasa de lanzamiento mientras reduce el tamaño y el alcance de los nuevos lanzamientos.

    3. <DNT>
         **Review your application KPIs and trends**
       </DNT>

       : Aquí revisará el rendimiento de su aplicación y los KPI de error para identificar y priorizar sus esfuerzos para mejorar la confiabilidad y el rendimiento de la aplicación.

    4. <DNT>
         **Make technical recommendations**
       </DNT>

       : Aquí, usted y las partes interesadas relevantes identificarán y revisarán recomendaciones técnicas, como realizar cambios en su flujo de trabajo de liberación o estrategias de observabilidad.
  </Step>

  <Step>
    ### Iniciar el proceso de mejora [#improvement-process]

    Este último paso es un proceso de mejora continua. Durante esta fase, se [reunirá con su equipo](#meet-with-team) para revisar su progreso con respecto a su línea de base y ajustar sus estrategias para lograr las mejoras deseadas. Cada ciclo del proceso de mejora debe ocurrir después de varias iteraciones de su proceso de desarrollo. Por lo general, estos ocurren en el punto medio y al final de cada sprint ágil.

    Durante esta fase debes:

    * Informe sus KPI cada semana a las partes interesadas para garantizar que los equipos prioricen adecuadamente el trabajo y muestren el progreso realizado hacia los resultados comerciales prometidos.
    * Registre y conserve sus KPI semanales a lo largo del tiempo para establecer una nueva línea de base y mostrar la tasa de mejora.
  </Step>
</Steps>

<UserJourneyControls previousStep={{"path":"/docs/tutorial-innovation-and-growth/development-quality-mgmt/","title":"Paso anterior","body":"Aprenda a utilizar New Relic para mejorar la calidad de sus ciclos de desarrollo"}}/>
