---
title: Mejora tu base de código
metaDescription: Our development quality guide helps increase stability by using New Relic to ensure that fewer defects are introduced into the code base.
freshnessValidatedDate: never
translationType: machine
---

En general, las operaciones digitales de una empresa son tan estables como su código. Sin una base de código estable, la ingeniería nunca tendrá tiempo para satisfacer ni siquiera la demanda básica de nuevas características, y mucho menos avanzar al ritmo necesario para innovar características nuevas y emocionantes para sus clientes. El ingeniero dedicará su tiempo a resolver problemas y corregir códigos de mala calidad para evitar experiencias negativas de los clientes. La implementación de código de alta calidad es clave para la capacidad de una organización para innovar y crecer.

Esta guía identifica indicadores de rendimiento clave específicos y procesos que ayudan a mejorar la calidad del código. Le sigue la [guía de calidad de la versión](/docs/new-relic-solutions/observability-maturity/innovation-growth/release-quality-implementation-guide), que solo se puede realizar después de completar los pasos descritos en ésta.

Eres un buen candidato para utilizar esta guía si:

* Actualmente no estás midiendo la calidad del código.
* La calidad de su código se percibe como mala.
* No sabes dónde pasan el tiempo tus desarrolladores.
* Su organización sufre demasiadas interrupciones debido a defectos de aplicación.

## Indicadores de rendimiento clave [#key-perf-indicators]

Estos KPI lo ayudan a identificar las fuentes de defectos de código y las áreas que requieren el mayor esfuerzo del desarrollador para que sus desarrolladores puedan usar su tiempo de manera más eficiente. Los KPI también le ayudan a comprender si la velocidad de desarrollo tiene algún impacto en la calidad del código.

### Estabilidad [#kpi-stability]

<CollapserGroup>
  <Collapser
    id="kpi-build-success"
    title="Construya KPI de éxito"
  >
    El éxito de la compilación mide la cantidad de veces que el código nuevo se compila o integra exitosamente en la aplicación general.

    <DNT>**Goal:**</DNT> Aumente la tasa de éxito de la construcción a casi el 100%

    <DNT>**Best practices:**</DNT> El evento de compilación de código debe incluir el siguiente atributo:

    * ID de compilación
    * Nombre de compilación
    * Resultado de la construcción (éxito/fracaso)
    * Duración de la construcción
  </Collapser>

  <Collapser
    id="kpi-unit-test-success"
    title="KPI de éxito de la prueba unitaria"
  >
    El éxito de la prueba unitaria mide el porcentaje de pruebas unitarias que se aprueba el nuevo código.

    <DNT>**Goal:**</DNT> Incrementar la tasa de éxito de la prueba.

    <DNT>
      **Best practices:**
    </DNT>

    Las pruebas unitarias deben:

    * Pruebe un caso de uso.

    * Completa rápidamente.

    * Ser confiable.

    * No tener dependencia inter o externa.

    * Tener un código simple y fácil de mantener.

      El evento de prueba unitaria debe incluir el siguiente atributo:

    * Nombre de la prueba

    * Comprometerse a ser probado

    * Duración del exámen

    * Resultado de la prueba (éxito/fracaso)
  </Collapser>

  <Collapser
    id="kpi-code-coverage"
    title="KPI de cobertura de código"
  >
    La cobertura de código mide la cantidad de base de código de una aplicación que está sujeta a al menos una prueba unitaria.

    <DNT>**Goal:**</DNT> Incrementar la cobertura del código al 100%.

    <DNT>**Best practices:**</DNT> Siga las mejores prácticas [de pruebas unitarias](#kpi-unit-test-success) para garantizar que la cobertura de la prueba de código alcance el objetivo del 100 %.
  </Collapser>

  <Collapser
    id="kpi-defect-volume"
    title="KPI del volumen de defectos"
  >
    El volumen de defectos mide la cantidad de defectos introducidos en una aplicación por un módulo de código específico.

    <DNT>**Goal:**</DNT> Reducir el número de nuevos defectos. <DNT>**Best practices:**</DNT> Identifique las fuentes de nuevos defectos relacionándolas con servicios y módulos de código específicos.

    El evento de defecto de código debe incluir el siguiente atributo:

    * Timestamp
    * Aplicación
    * Módulo de código
    * Referencia al defecto
  </Collapser>
</CollapserGroup>

### Velocidad [#kpi-velocity]

<CollapserGroup>
  <Collapser
    id="kpi-commit-volume"
    title="KPI de volumen de confirmación de código"
  >
    La tasa de confirmación de código mide la cantidad de confirmaciones de código nuevo a lo largo del tiempo.

    <DNT>**Goal:**</DNT> La tasa de confirmación de código debe correlacionarse con el volumen de defectos para identificar el equilibrio óptimo entre velocidad y estabilidad.

    <DNT>**Best practices:**</DNT> El evento de confirmación de código debe incluir el siguiente atributo:

    * Timestamp
    * Usuario
    * Proyecto
    * Repositorio
    * Rama
    * Confirmar ID o hash
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### Reúna los KPI necesarios [#gather-kpis]

    El mejor lugar para comenzar es reuniendo su clave de indicadores de rendimiento. Para hacer esto, necesita conocer la plataforma tecnológica específica que respalda sus procesos de desarrollo, como el repositorio de código fuente y la plataforma de automatización de compilación/prueba. Luego, deberá identificar métodos para extraer el atributo de cada KPI e importarlos a New Relic.

    Puede encontrar los KPI y el atributo mínimo requerido para este caso de uso en la sección [clave de indicadores de rendimiento](#key-perf-indicators) anterior. Normalmente, utilizará las API de su cadena de herramientas de desarrollo para extraer los KPI y sus atributos, y luego los enviará a New Relic mediante la [API de evento personalizado](/docs/data-apis/ingest-apis/introduction-event-api/).

    Antes de comenzar cualquier trabajo de integración personalizada, debe averiguar si existe alguna integración lista para usar aplicable.
  </Step>

  <Step>
    ### Implementar panel [#implement-dashboards]

    Nuestros <InlinePopover type="dashboards"/>son el método principal que utiliza este proceso de mejora. Muestran sus KPI actuales y lo ayudan a identificar las áreas que requieren mejora. Puede encontrar un panel de muestra [en el centro de recursos de New Relic OMA en GitHub](https://github.com/newrelic/oma-resource-center).

    La información que se muestra en el panel depende de su cadena de herramientas de desarrollo, por lo que deberá [personalizar su dashboard](https://developer.newrelic.com/collect-data/monitor-your-application/query-custom-data/) según sus especificaciones exactas.
  </Step>

  <Step>
    ### Establecer una línea de base de desarrollo [#establish-baseline]

    Debido a que necesita suficientes datos para formar una línea de base antes de poder [realizar la habilitación inicial](#perform-enablement-one), debe establecer su línea de base que consista en una muestra de actividad de desarrollo. Normalmente, esto será un mínimo de dos semanas, pero puede ser hasta seis semanas dependiendo de su ritmo de desarrollo actual. Una forma sencilla de hacerlo es alinear su ciclo de evaluación y recopilación de línea de base con sus sprints ágiles, si corresponde.

    Debes asegurarte periódicamente de que los datos del evento se acumulen como se espera en New Relic mientras estableces tu línea de base.
  </Step>

  <Step>
    ### Reúnete con tu equipo [#meet-with-team]

    Después de establecer su línea de base, presentará a los equipos de desarrollo y otras partes interesadas los datos recopilados y el proceso de mejora continua que seguirá.

    El proceso consta de tres actividades:

    1. <DNT>
         **Review the KPIs and trends**
       </DNT>

       : Usted y las partes interesadas observarán los KPI e identificarán tendencias.

    2. <DNT>
         **Identfy achievements, challenges, and opportunities**
       </DNT>

       : En esta fase, identificará áreas donde los KPI están mejorando (logros) y áreas donde no mejoran (desafíos). Luego, identificará estrategias y tácticas para mejorar los KPI (oportunidades) y la mejor manera de implementarlos.

    3. <DNT>
         **Make technical recommendations**
       </DNT>

       : Aquí, usted y las partes interesadas relevantes identificarán y revisarán recomendaciones técnicas, como realizar cambios en su cadena de herramientas de desarrollo o estrategias de observabilidad.
  </Step>

  <Step>
    ### Iniciar el proceso de mejora [#improvement-process]

    Este último paso es un proceso de mejora continua. Durante esta fase, se [reunirá con su equipo](#meet-with-team) para revisar su progreso con respecto a su línea de base y ajustar sus estrategias para lograr las mejoras deseadas. Cada ciclo del proceso de mejora debe ocurrir después de varias iteraciones de su proceso de desarrollo. Por lo general, estos ocurren en el punto medio y al final de cada sprint ágil.

    Durante esta fase debes:

    * Informe sus KPI cada semana a las partes interesadas para garantizar que los equipos prioricen adecuadamente el trabajo y muestren el progreso realizado hacia los resultados comerciales prometidos.
    * Registre y conserve sus KPI semanales a lo largo del tiempo para establecer una nueva línea de base y mostrar la tasa de mejora.
  </Step>
</Steps>

Una vez que haya completado el proceso anterior, puede continuar usando New Relic para mejorar la calidad de su lanzamiento.

<UserJourneyControls nextStep={{"path":"/docs/tutorial-innovation-and-growth/release-quality-mgmt/","title":"Próximo paso","body":"Aprende a usar New Relic para mejorar la calidad de tus lanzamientos"}}/>
