---
title: Analizar el fondo de los embudos
tags:
  - Observability maturity
  - Customer experience
  - Digital customer experience
  - Implementation guide
  - Conversions
  - Funnel
  - Bottom of the funnel
metaDescription: 'New Relic observability maturity series: Bottom-of-the-funnel analysis shows New Relic users how to improve end-user conversions.'
freshnessValidatedDate: never
translationType: machine
---

Aunque [mejorar la experiencia de sus clientes](/docs/tutorial-customer-experience/improve-customer-experience/) a menudo se hace de manera integral, centrar sus esfuerzos en mejorar la conversión también aumenta la calidad de la experiencia de sus clientes. Esto es lo que se conoce como análisis de la parte inferior del embudo y se trata de mejorar la conversión centrándose en el rendimiento al final del recorrido del usuario en lugar de en la experiencia del cliente en su conjunto. Esta guía le explica cómo hacer esto correctamente usando New Relic, y al final de la guía habrá analizado su parte inferior de los embudos y tendrá la información necesaria para hacerlo continuamente.

<img
  title="User journey funnel"
  alt="User journey funnel"
  src="/images/cx_diagram_botfa-funnel.webp"
/>

La mayoría de los sitios y aplicaciones se crean con uno o más propósitos en mente, y donde hay un propósito, es probable que también haya un recorrido del usuario. Por ejemplo:

| Objetivo                                            | Viaje del usuario                                                    |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| Conocimiento de la marca                            | Descargar un documento técnico                                       |
| Soporte al cliente                                  | Generar un ticket de soporte                                         |
| Servicios a clientes (registro, formularios, pagos) | Realizar un pago                                                     |
| Entretenimiento                                     | Transmitir una película                                              |
| Bienes                                              | Comprar ropa y complementos.                                         |
| Fines informativos                                  | Encuentre un programa de apoyo en su estado                          |
| Generación líder                                    | Únase a la lista de distribución para obtener promociones y cupones. |
| Superar a                                           | Obtén información sobre eventos en tu ciudad                         |
| Servicios (viajes, alquileres, reservas)            | Reservar un vuelo                                                    |
| Medios de comunicación social                       | Compartir una selfie                                                 |

Cuando un usuario completa un recorrido, se denomina conversión. Todas las conversiones tienen un valor y la mejor manera de mejorar la tasa de conversión es comenzar en la parte inferior de los embudos, cuando la intención de completar el recorrido del usuario es clara.

Siempre debes abordar cualquier problema evidente con tu aplicación o sitio, sin importar dónde ocurran. Cuando se trata de optimizar la conversión, es mejor comenzar desde la parte inferior de los embudos por dos razones:

* Mayor retorno de la inversión al centrarse en la etapa en la que los usuarios ya tienen más probabilidades de realizar una conversión. Abordar los problemas de rendimiento aquí tendrá un impacto inmediato en sus resultados.
* Si tiene problemas en la parte inferior de los embudos, es posible que la optimización de las etapas anteriores no tenga mucho impacto en su tasa de conversión.

Optimizar la parte superior o media de los embudos sin centrarse primero en la parte inferior puede dejar un gran vacío en la experiencia de sus clientes. Una vez que haya optimizado la parte inferior de los embudos, puede utilizar las mismas técnicas para optimizar las etapas anteriores del recorrido del usuario.

## Indicadores de rendimiento clave [#kpis]

El análisis de la parte inferior del embudos mide los siguientes KPI:

<CollapserGroup>
  <Collapser
    id="conversion-rate"
    title="Éxito del fondo del embudo/tasa de conversión"
  >
    La tasa de conversión una vez que un usuario ha ido lo suficientemente lejos como para demostrar su intención de completar una acción hasta su finalización real. Ejemplos de esto son tasas de:

    * Pagar -> envío de pedido
    * Revisión del formulario de seguro -> envío
    * Completando detalles de registro -> envío

      Aumente la tasa de conversión abordando los errores y la latencia en la parte inferior de los embudos.
  </Collapser>

  <Collapser
    id="latency-risk"
    title="Ingresos en riesgo debido a la latencia"
  >
    Valor de una conversión multiplicado por el número de páginas o interacciones en la parte inferior de los embudos que son más lentas que el umbral de la industria. Concéntrese en reducir este valor mejorando los KPI de la página.
  </Collapser>

  <Collapser
    id="Error risk"
    title="Ingresos en riesgo por errores"
  >
    Valor de una conversión multiplicado por el número de errores de backend en la parte inferior de la interacción de embudos. Ajuste este valor para que sea significativo filtrando los errores que no son visibles para el usuario final y luego concéntrese en reducirlo. Cree una alerta para notificarle si de repente tiene una tendencia alcista.
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### Identificar donde comienza la parte inferior de los embudos. [#id-funnel]

    La parte inferior de los embudos se centra en los pasos finales del recorrido del usuario, en los que un usuario ha ido lo suficientemente lejos como para mostrar su intención de completar el recorrido. Aquí hay unos ejemplos:

    <CollapserGroup>
      <Collapser
        id="ecommerce-journey"
        title="Viaje del usuario de comercio electrónico"
      >
        <img
          title="Ecommerce bottom of the funnel"
          alt="Ecommerce bottom of the funnel"
          src="/images/cx_diagram_botfa-ecommerce.webp"
        />

        El recorrido del usuario se simplifica para que pueda concentrarse en dónde comienza la parte inferior de los embudos: al finalizar la compra. La mayoría de los usuarios que ingresan a la fase de pago planean comprar algo. Es más probable que reducir los errores y la latencia a partir de este momento mejore las conversiones que centrarse en cualquier otra parte de los embudos.
      </Collapser>

      <Collapser
        id="insurance-journey"
        title="Viaje del usuario de compra de seguro de automóvil"
      >
        <img
          title="Car insurance bottom of the funnel"
          alt="Car insurance bottom of the funnel"
          src="/images/cx_diagram_botfa-car-insurance.webp"
        />

        En el ejemplo anterior, usted tiene el interés del usuario en el seguro de automóvil a medida que ingresa información, pero no conoce su intención hasta que ve la cotización y continúa.
      </Collapser>
    </CollapserGroup>
  </Step>

  <Step>
    ### Distinguir entre páginas y acciones. [#distinguish-actions]

    Es probable que los pasos finales del viaje de un usuario sean una combinación de cargas de página completa y llamadas AJAX. Necesitará conocer todas las páginas y solicitudes AJAX para el siguiente paso. Si no está seguro de qué solicitudes se ejecutan desde la página en cuestión, puede ejecutar:

    ```
    SELECT count(*) FROM AjaxRequest WHERE pageUrl like '%FILTER%' FACET groupedRequestUrl SINCE 1 DAY AGO
    ```

    <img
      title="Distinguish between pages and actions"
      alt="Distinguish between pages and actions"
      src="/images/cx_diagram_pages-actions.webp"
    />

    Una vez que haya hecho esto, puede crear un monitor con script para sus embudos en la parte inferior.
  </Step>

  <Step>
    ### Cree un monitor con script para la parte inferior de los embudos [#create-monitor]

    Asegúrese de tener un [monitor con script](/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/) para cada ruta a través de la parte inferior de los embudos. El objetivo es asegurarse de que sus servicios de fondo de embudos funcionen las 24 horas del día.

    Por ejemplo, es posible que tenga un flujo de pago que llame a una API de pago diferente según las preferencias de pago de los clientes.
  </Step>

  <Step>
    ### Importar el dashboard de la parte inferior del embudos

    Siga las instrucciones [del inicio rápido del análisis de embudos](https://newrelic.com/instant-observability/customer-experience-bottom-funnel-analysis/8d339aa7-69e3-4efa-abc2-9eba600db91c) para instalar el dashboard y configurarlo.
  </Step>

  <Step>
    ### Capture el rendimiento actual [#capture-performance]

    <img
      title="Bottom-of-the-funnel KPI tracking"
      alt="Bottom-of-the-funnel KPI tracking"
      src="/images/cx_diagram_botfa-kpi-tracking.webp"
    />

    1. Siga las instrucciones en nuestro [archivo README de análisis de la parte inferior de los embudos en GitHub](https://github.com/newrelic/oma-resource-center/blob/main/src/content/docs/oma/value-drivers/customer-experience/use-cases/bottom-of-the-funnel-analysis/README.md), que lo guiará a través del dashboard análisis de la parte inferior de los embudos y los KPI relevantes.
    2. Utilice el dashboard del paso anterior para comprender el rendimiento de la parte inferior del embudo.
    3. Cree un plan para mejorar los KPI que no cumplan con los valores objetivo, así como para reducir los ingresos en riesgo.
  </Step>

  <Step>
    ### Proceso de mejora

    Ya sea que tenga una iniciativa dedicada a mejorar el rendimiento o la haya clasificado como mantenimiento continuo, necesita realizar un seguimiento de su progreso al final de cada sprint. Para obtener información detallada, consulte:

    * [Mejorar el tiempo de actividad](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-web-uptime)
    * [Mejorar el rendimiento de carga de la página](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-page-load)
    * [Mejorar el rendimiento de AJAX](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls)
  </Step>
</Steps>

<Callout variant="tip">
  Una pregunta común es: ¿Debería aplicar la segmentación dividiendo el rendimiento en cohortes, como región y tipo de dispositivo? Depende de tus necesidades, pero la segmentación es una buena idea si:

  * Su organización quiere dirigirse a un público objetivo de un grupo particular que puede segmentar utilizando un atributo personalizado o datos que ya están disponibles en New Relic.
  * Ya está familiarizado con el análisis de la parte inferior de los embudos y existe una diferencia lo suficientemente significativa en el rendimiento entre diferentes cohortes como para justificar el seguimiento y/o la atención de los desarrolladores.
</Callout>

### Mejores prácticas en el futuro [#best-practices]

Mantener una alta calidad de sus embudos es un proceso continuo y es una buena idea realizar análisis y ajustes de rutina para garantizar que su tasa de conversión sea óptima. Sus necesidades serán exclusivas de su organización y el procedimiento que utilice lo reflejará. El procedimiento también puede cambiar a medida que sus necesidades cambien con el tiempo. Sin embargo, puedes tener en cuenta las siguientes sugerencias:

* Revisar la métrica de rendimiento al final de cada sprint.
* Cada vez que cambie el recorrido del usuario, vuelva a consultar si los pasos inferiores del embudos son los mismos. Incorpore cambios en los sprints de los desarrolladores según sea necesario.
* Comparte abiertamente métrica con las líneas de negocio que apoyas así como con otros stakeholders internos.
* Revise los SLO de la experiencia de sus clientes. ¿Es necesario definir SLO más ambiciosos para el fin de los embudos?
* [Cree alertas](/docs/tutorial-create-alerts/create-new-relic-alerts/) para caídas críticas para el negocio en los KPI básicos de calidad.
