---
title: Crear un plan de optimización
metaDescription: Taking your ingested and reported ingest data and optimizing it.
freshnessValidatedDate: '2023-08-11T00:00:00.000Z'
translationType: machine
---

Con sus datos de ingesta registrados correctamente, tiene la capacidad de comenzar a optimizar su telemetría para reducir sus datos de ingesta redundantes y disminuir sus costos de ingesta. El primer paso es crear un plan de optimización y luego [utilizar técnicas de optimización de datos](/docs/tutorial-optimize-telemetry/data-optimize-techniques) para poner ese plan en acción.

## Comprenda sus objetivos de observabilidad [#prioritize-objectives]

Una de las partes más importantes del framework de gobernanza de la ingesta de datos es crear impulsores de valor de observabilidad. Estos le ayudan a alinear sus datos con métricas concretas que puede utilizar para medir qué tan importantes (o redundantes) son para sus objetivos.

También le ayudan a comprender sus objetivos cuando necesite configurar nueva telemetría en el futuro. Cuando lo haga, querrá comprender qué ofrece a sus sistemas generales de observabilidad para evitar superposiciones innecesarias. Si se encuentra creando nuevos telemetry data que no se alinean con ninguno de los objetivos siguientes, puede ser una buena señal de que los datos no son necesarios y que puede evitar su creación para ayudar a reducir costos:

* Cumplir con un SLA interno
* Cumplir con un SLA externo
* Apoyar la innovación característica (pruebas de adopción y rendimiento A/B)
* Monitoreo de la experiencia de los clientes
* Mantener a los proveedores y proveedores de servicios internos en su SLA
* Monitoreo del proceso de salud empresarial
* Otros requisitos de cumplimiento

La alineación con estos objetivos le permite tomar las decisiones correctas sobre la priorización de valores y ayuda a guiar a los equipos a saber por dónde empezar cuando instrumentan una nueva plataforma y servicios.

## Desarrollar un plan de optimización. [#develop-plan]

Una vez que comprenda sus objetivos, es hora de implementar un plan de optimización. Este plan le ayudará a medir el valor de sus datos de ingesta y le ayudará a encontrar qué datos puede excluir de forma segura para ayudar a mantener bajos los costos.

Para esta sección, haremos dos suposiciones principales:

* Tiene las herramientas y técnicas de la [línea de base de su documento de ingesta de datos](/docs/new-relic-solutions/observability-maturity/operational-efficiency/dg-baselining) para realizar un seguimiento adecuado de dónde provienen sus datos.
* Tiene una buena comprensión de los [impulsores del valor de madurez de la observabilidad](/docs/new-relic-solutions/observability-maturity/introduction), que son cruciales para establecer un valor y una prioridad para los grupos de telemetría.

Tenemos tres ejemplos a continuación de cómo puede evaluar su propia ingesta de telemetría y tomar las decisiones correctas para las necesidades de su organización. Aunque cada uno de estos ejemplos se centra en un impulsor de valor, la mayor parte de la instrumentación proporciona datos sobre muchas áreas de valor.

<CollapserGroup>
  <Collapser
    id="case-study-1"
    title="Ejemplo 1: centrarse en el tiempo de actividad y la confiabilidad"
  >
    Una cuenta está ingiriendo alrededor de un 20% más de lo presupuestado. Un gerente les ha pedido que encuentren alguna forma de reducir el consumo. Su impulsor de valor más importante es <DNT>**Uptime, performance, and reliability**</DNT>.

    Su patrimonio incluye:

    * <InlinePopover type="apm"/>(dev, de prueba, prod)

    * rastreo distribuido

    * Browser

    * Monitoreo de infraestructura de 100 hosts

    * Monitoreo de Kubernetes (dev, de prueba, prod)

    * Log (dev, de prueba, prod - incluyendo depuración)

      <Callout
        variant="IMPORTANT"
        title="Plan de optimización"
      >
        * Omita el registro de depuración (sabiendo que se pueden activar si hay un problema), ahorrando un 5 %.
        * Omita varias métricas de estado de Kubernetes que no son necesarias para mostrar el explorador del clúster de Kubernetes, ahorrando un 10%.
        * Coloque algunos eventos browser personalizados que estaban recopilando cuando probaron la nueva característica, ahorrando un 10%.
      </Callout>

      Después de ejecutar esos cambios, el equipo está un 5% por debajo de su presupuesto y ha liberado algo de espacio para realizar un piloto de NPM, completando la tarea que les asignó su gerente.

      <Callout
        variant="IMPORTANT"
        title="Resultado final"
      >
        * 5% por debajo de su presupuesto original
        * Espacio libre creado para un piloto de NPM que cumple objetivos de tiempo de actividad, rendimiento y confiabilidad
        * Pérdida mínima de tiempo de actividad y observabilidad de confiabilidad
      </Callout>
  </Collapser>

  <Collapser
    id="case-study-2"
    title="Ejemplo 2: centrarse en la experiencia del cliente"
  >
    Un equipo responsable de una nueva plataforma orientada al usuario con énfasis en <InlinePopover type="mobile"/>y monitoreo del navegador está superando el presupuesto en un 50 %. Tendrán que ajustar el tamaño de su ingesta, pero se mantienen firmes en no sacrificar ninguna <DNT>**Customer experience**</DNT> observabilidad.

    Su patrimonio incluye:

    * Móvil
    * Browser
    * APM
    * rastreo distribuido
    * Infraestructura en 30 hosts, incluyendo muestras de procesos
    * Monitoreo sin servidor para algunos procesos asincrónicos backend
    * Logs desde su función serverless
    * Varias integraciones en la nube.

      <Callout
        variant="IMPORTANT"
        title="Plan de optimización"
      >
        * Omita el registro serverless, que es redundante para sus necesidades debido a la integración de Lambda.
        * Reduzca la frecuencia de muestreo del proceso en sus hosts a cada minuto.
        * Suelte datos de muestra de procesos en entornos de desarrollo.
        * Desactive la integración de EC2, que es altamente redundante con otros monitoreos de infraestructura proporcionados por el agente de infraestructura New Relic.
      </Callout>

      <Callout
        variant="IMPORTANT"
        title="Resultado final"
      >
        * 5% sobre su presupuesto original
        * Suficiente para pasar la temporada alta.
        * Observabilidad de la experiencia sin pérdida de clientes
      </Callout>

      Después de ejecutar los cambios, ahora están solo un 5% por encima de su presupuesto original y concluyen que esto es suficiente para aguantar la temporada alta.
  </Collapser>

  <Collapser
    id="case-study-3"
    title="Ejemplo 3: centrarse en la innovación"
  >
    Un equipo está en el proceso de refactorizar un gran monolito de Python en cuatro microservicios. El monolito comparte infraestructura con la nueva arquitectura, incluida una base de datos de clientes y una capa de caché. Están 70% por encima del presupuesto y tienen dos meses antes de poder desmantelar oficialmente el monolito.

    Su patrimonio incluye:

    * Monitoreo de Kubernetes (microservicios)

    * Monitoreo del host New Relic (monolito)

    * APM (microservicios y monitoreo de host)

    * Rastreo distribuido (microservicios y monitorización de host)

    * Postgresql (compartido)

    * Redis (compartido)

    * MSSQL (futura base de datos para la arquitectura de microservicios)

    * Registro del balanceador de carga (microservicios y monitoreo de host)

      <Callout
        variant="IMPORTANT"
        title="Plan de optimización"
      >
        * Configure el registro del balanceador de carga para monitor solo `5xx` códigos de respuesta.
        * Establezca la frecuencia de muestreo personalizada en `ProcessSample`, `StorageSample` y `NetworkSample` en 60 s para los hosts que ejecutan el monolito.
        * Deshabilite el monitoreo MSSQL ya que la nueva arquitectura no lo utiliza.
        * Deshabilite rastreo distribuido para el monolito ya que es mucho menos útil que para la arquitectura de microservicios.
      </Callout>

      <Callout
        variant="IMPORTANT"
        title="Resultado final"
      >
        * 1% por debajo de su presupuesto original

        * Sin pérdida de

          <DNT>
            **Innovation and growth**
          </DNT>

          observabilidad
      </Callout>
  </Collapser>
</CollapserGroup>

<Callout variant="tip">
  Le recomendamos realizar un seguimiento del plan en una herramienta de gestión de tareas para ayudar a gestionar el plan de optimización y comprender el efecto que tiene cada tarea de optimización. Puede utilizar esta [plantilla de plan de optimización de datos](https://docs.google.com/spreadsheets/d/1CimLpALwl1Z9f41vzbNWx00bGcED9XPV3s4ROqVEnr0/copy) como ayuda.
</Callout>

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-optimize-telemetry/data-optimize-techniques/","title":"Próximo paso","body":"Aprenda a utilizar varias técnicas para optimizar su ingesta general"}}
  previousStep={{"path":"/docs/tutorial-optimize-telemetry/detect-anomalies/","title":"Paso anterior","body":"Aprenda a utilizar su informe de línea de base para ayudarle a encontrar anomalías en su telemetría"}}
/>
