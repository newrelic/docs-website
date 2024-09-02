---
title: Establecer un SLI de rendimiento de salida
metaDescription: 'New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders.'
freshnessValidatedDate: never
translationType: machine
---

La capacidad de gestionar y consultar grandes cantidades de datos de forma eficiente es una de las capacidades básicas de New Relic. Medimos el estado de los resultados de la consulta de la misma manera que usted podría medir sus capacidades de cara al cliente: por la rapidez y la ausencia de errores de las solicitudes de consulta HTTP que reciben respuestas. A esto nos referimos como rendimiento de producción y se pueden medir los SLI para realizar un seguimiento de esto. Una vez que haya configurado un SLI de rendimiento de salida mediante el siguiente procedimiento, podrá realizar un seguimiento tanto del tiempo de respuesta como de la tasa de errores de su aplicación.

<Steps>
  <Step>
    ## Encuentra tu aplicación

    Primero, deberá asegurarse de haber configurado la aplicación para la que desea crear el SLI. Si no puede encontrarlo o aún no lo ha configurado, asegúrese de hacer lo siguiente antes de continuar:

    * Instrumente su aplicación principal con [el agente New Relic APM ](/docs/apm/new-relic-apm/getting-started/introduction-apm).
    * Asigne un nombre a su aplicación con una convención de nomenclatura familiar para que sea fácil de encontrar.
    * Ubica tu aplicación en [one.newrelic.com > All entities](https://one.newrelic.com/nr1-core).

      En **All entities**, busque su aplicación (tipo de entidad `Services - APM`) y selecciónela. Debería ver la pantalla de descripción general a continuación, pero **no haga clic en `Service levels` todavía.**

      <img
        alt="APM Overview screenshot"
        src="/images/apm_screenshot-full_overview-screen.webp"
      />
  </Step>

  <Step>
    ## Identifique los límites de su servicio [#identifying-service-boundary]

    A continuación, querrá asegurarse de medir el resultado de su servicio. Si bien la dependencia de una aplicación influye en el tiempo de respuesta y las tasas de éxito, puede medir el tiempo de respuesta final y total y las tasas de éxito en el punto en que se recibe y responde la solicitud.

    Puede utilizar [mapas de servicios](/docs/new-relic-one/ui-data/service-maps/how-use-service-maps/) y [mapas automáticos](/docs/new-relic-one/ui-data/automaps) para ayudar a determinar si la aplicación que está viendo es una dependencia o ejecuta la API extrema.

    En el ejemplo de captura de pantalla siguiente, puede ver todas las aplicaciones que admiten el procesamiento de pedidos. Comenzamos seleccionando el n.° 2 (Orden-Compositor). Luego, hacemos clic en **Service maps** y descubrimos que **Order-Composer** es realmente una dependencia. Deberá seleccionar el n.º 1 (Procesamiento de pedidos) para establecer un verdadero nivel de servicio de salud.

    <img
      alt="Service map example"
      src="/images/apm_screenshot-crop_service-boundary.webp"
    />

    <Callout variant="tip">
      Es posible que su equipo solo sea responsable de la dependencia de **Order-Composer** . Si es así, entonces su propio nivel de servicio en **Order-Composer** puedemonitor el rendimiento. Asegúrese de etiquetar a sus propios no clientes que enfrentan el nivel de servicio como `customer-facing:false` para permitir un mejor filtrado en los informes de salud. Además, considere trabajar con el extremo de cara al cliente (procesamiento de pedidos número 1) durante la observabilidad para crear un rendimiento de salida real, un nivel de servicio de conectividad de entrada y niveles de servicio al cliente.
    </Callout>
  </Step>

  <Step>
    ## Crea tu línea de base

    Cuando crea un nivel de servicio, primero debe observar el rendimiento de salida de su aplicación como una línea de base, que debe establecer para implementar el nivel de servicio. Crear una línea de base le permite medir el rendimiento de un servicio como punto de referencia y luego utilizar informes de nivel de servicio para averiguar si está alcanzando esa línea de base o no. Puedes crear una línea de base para casi cualquier conjunto de datos; sin embargo, utiliza diferentes fórmulas y recomendaciones en diferentes casos de uso.

    Puede utilizar el tiempo de respuesta (latencia) y el porcentaje de no errores (éxito) como línea de base inicial. Cuando haces esto, creas una métrica de estado de confiabilidad.

    Recomendamos un historial de una o dos semanas de datos de rendimiento para establecer una buena línea de base. La estacionalidad y el uso máximo no deberían perjudicar su rendimiento, y cuanto más historial incluya en su medición, más probable será que incluya una base de código diferente de las versiones. El despliegue previo, por pequeño que sea, podría sesgar los resultados.

    A continuación se muestra un ejemplo de consulta NRQL para el objetivo recomendado de siete días de objetivos de nivel de servicio para latencia:

    ```
    FROM Transaction SELECT percentile(duration, 95) AS 'Latency Baseline SLI' WHERE appName='Order-Processing' SINCE 1 WEEK AGO
    ```

    <img
      alt="Latency Baseline"
      src="/images/apm_screenshot-full_latency-baseline.webp"
    />

    Para obtener una línea de base exitosa (sin errores), intente la siguiente consulta. Recuerde sustituir `Order-Processing` por el nombre de su propia aplicación.

    ```
    FROM Transaction SELECT percentage(count(*), WHERE error is false) AS 'Success Baseline SLI' SINCE 1 WEEK AGO WHERE appName='Order-Processing'
    ```
  </Step>

  <Step>
    ## Crea tu nivel de servicio

    **Nota:** Si no ve el botón **Add a service level** , consulte con su administrador de New Relic acerca de sus permisos.

    Nuestra plataforma calcula automáticamente la <InlinePopover type="apm"/>línea de base del browser recomendada para usted. Busque los datos APM de su aplicación que eligió en el Paso 2 y haga clic en **Service levels**, y debería ver la siguiente vista:

    <img
      alt="Service levels start from APM"
      src="/images/apm_screenshot-full_sl-start-from-apm.webp"
    />

    Haga clic en **Add baseline service level objectives** para crear tanto su SLI de latencia como su SLI de éxito, así como sus respectivos objetivos. Puede ver y cambiar todas las configuraciones haciendo clic en el ícono de elipses en la esquina superior derecha de cada cuadro de mando de SLO.

    <Callout variant="tip">
      Los datos tardan aproximadamente 10 minutos en completar las puntuaciones de SLO porque utilizamos el [servicio evento-to-métrica](/docs/data-apis/convert-to-metrics/create-metrics-other-data-types/) para la longevidad de los datos y el rendimiento de la consulta. Se necesita un momento para que se realice la conversión y comience a completar los datos.
    </Callout>
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-service-level-mgmt/establish-input-sli/","title":"Próximo paso","body":"Aprenda a crear indicadores y objetivos de entrada"}}/>
