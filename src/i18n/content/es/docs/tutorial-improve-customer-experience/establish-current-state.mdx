---
title: Establece tu estado actual
metaDescription: 'New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application''s performance to improve your customer experience.'
freshnessValidatedDate: '2023-08-16T00:00:00.000Z'
translationType: machine
---

Quieres mejorar tu experiencia digital, pero ¿cómo sabes si la has mejorado o no? Primero, necesita conocer el rendimiento de su línea de base para tener algo con qué comparar sus datos futuros. Una vez que verifique que todo lo que necesita se informa correctamente en nuestra plataforma, puede validar su información y utilizar nuestro dashboard base de calidad para medir la experiencia de sus clientes.

<Steps>
  <Step>
    ### Revisar páginas instrumentadas [#review-instrument]

    Nuestras <InlinePopover type="browser"/>herramientas son una excelente manera de monitor los datos de tu aplicación, por lo que el mejor lugar para comenzar a mejorar tu experiencia digital es revisar el panel de tu browser . Primero, deberá revisar las aplicaciones y páginas de su browser para asegurarse de que todo lo que espera informar a New Relic realmente lo esté haciendo. Puede hacer esto revisando la pestaña <DNT>**Page Views**</DNT> en la UI de monitoreo de navegador para cada aplicación que está ingiriendo o ejecutando la siguiente consulta NRQL:

    ```
    SELECT uniques(pageUrl) from PageView LIMIT MAX
    ```

    <Callout variant="tip">
      ¿Nuevo en NRQL? Consulte nuestra [introducción a NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/) para aprender cómo utilizar nuestro lenguaje de consulta personalizado para ayudar a maximizar sus datos.
    </Callout>
  </Step>

  <Step>
    ### Validar agrupación de URL browser [#validate-grouping]

    Una vez que se haya asegurado de que sus páginas instrumentadas informen sus datos correctamente en el paso anterior, es hora de asegurarse de que los segmentos browser se capturen correctamente para que pueda analizar mejor los datos que está utilizando para mejorar la experiencia de sus clientes. Si no está familiarizado con los segmentos, son simplemente el texto entre dos `/`en una URL o los `.`de un nombre de dominio.

    Cuando tiene muchas URL con muchos segmentos, puede abreviarlas para que `website.com/product/widget-name` se convierta en `website.com/` o `website.com/product/`. Si bien la primera versión funciona, la segunda versión es una forma más útil de agrupar datos de experiencias de clientes para el producto porque permite más segmentos en los datos.

    <Callout variant="tip">
      ¿No estás seguro de si necesitas ajustar tu configuración? Importe el [dashboard de investigación de la lista de 'permitidos' del segmento](https://newrelic.com/instant-observability/browser-segment-investigation/eb24e234-90aa-4908-972d-64d6d56b557e) para ayudar.
    </Callout>

    <img
      title="Segment allow-list (aka white-list) investigation"
      alt="Segment allow-list (aka white-list) investigation"
      src="/images/cx_screenshot-full_segment-whitelist-investigation.webp"
    />

    Una vez que haya identificado todos sus segmentos, use la [lista de segmentos 'permitidos' en el navegador](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding) para agregarlos, lo que le permitirá crear segmentos más fáciles de entender.
  </Step>

  <Step>
    ### Comprenda cómo segmentar sus datos [#understand-segment]

    Ahora que ha validado la agrupación de URL de su browser , puede hacer que los datos de la experiencia de sus clientes sean más fáciles de entender dividiéndolos en diferentes segmentos. A diferencia del paso anterior, los segmentos aquí no se refieren a secciones de URL (como en el [segmento lista de 'permitidos'](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls/#adding)), sino que se refieren a grupos de datos.

    Puede utilizar segmentos para agrupar sus datos de diferentes maneras. Por ejemplo:

    * La mayoría de los usuarios en EE. UU., Canadá y EMEA experimentan 2 segundos o más para interactuar con la siguiente pintura, mientras que los usuarios de Malasia e Indonesia experimentan 4 segundos. Agrupar sus segmentos por ubicación geográfica le brindará esta información valiosa.
    * Los clientes que compran un seguro de automóvil generalmente ven 1 segundo de pintura con contenido más grande. Para el seguro de hogar, son 4 segundos.
    * En una semana, puede haber 700.000 páginas vistas en aplicaciones browser móviles en comparación con 300.000 en computadoras de escritorio.

      A continuación se muestran categorías populares y útiles para segmentar sus datos:

      <CollapserGroup>
        <Collapser
          id="Region"
          title="Región y ubicación"
        >
          <DNT>**Basic:**</DNT> Grupo por país. El evento browser contiene automáticamente el código de país de las solicitudes, por lo que no es necesario hacer nada para desglosarlo más.

          <DNT>**Advanced:**</DNT> Haga que la agrupación regional coincida con los grupos SLO regionales creando su propio atributo de región utilizando [el atributo personalizado](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes/) en el monitoreo del navegador.

          Faceta por `countryCode`.

          Atributo relacionado:

          * `regionCode`
          * `city`
          * `asnLatitude`
          * `asnLongitude`
        </Collapser>

        <Collapser
          id="Device"
          title="Dispositivo"
        >
          Desglose el tipo de dispositivo de rendimiento y participación para que pueda comprender:

          * Desglose típico entre usuarios browser de escritorio y móviles

          * Experiencia del usuario browser de escritorio versus móvil

            Faceta por `deviceType`.

            Atributo relacionado:

          * `userAgentName`

          * `userAgentOS`

          * `userAgentVersion`
        </Collapser>

        <Collapser
          id="Product"
          title="Producto o línea de negocio"
        >
          Cuando un producto es una línea de negocio o servicio independiente proporcionado por una organización. Algunos ejemplos de industrias y respectivos productos:

          * Una compañía de seguros que vende seguros tanto para automóviles como para viviendas.

          * Una empresa de medios que tiene múltiples servicios o canales de transmisión.

          * Una empresa de viajes que ofrece alquiler de coches y reservas de hotel.

            <DNT>**Basic:**</DNT> Desglose el rendimiento por producto por:

          * Facetado en `pageUrl`: utilice este enfoque cuando agrupe varios productos en una aplicación browser en New Relic.

          * Facetado por `appName`: utilice este enfoque cuando instrumente cada producto como una aplicación web independiente.

          * Agrupar por `appName` y luego por faceta: utilice este enfoque cuando busque varias aplicaciones en browser que admita un producto.

            <DNT>**Advanced:**</DNT> Agregue ofertas de productos como atributo personalizado a las páginas del navegador utilizando [el atributo personalizado](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes).
        </Collapser>

        <Collapser
          id="Environment"
          title="Ambiente"
        >
          Una convención de nomenclatura que especifica el entorno de las aplicaciones browser durante o después de la instrumentación. Las aplicaciones browser bien nombradas especifican productos y/o funciones, así como el entorno. Ejemplos:

          * `account-management.prod`
          * `hotels-book.prod`
          * `car-insurance.uat`

            Utilice convenciones de nomenclatura de aplicaciones para tener en cuenta que el entorno admite el filtrado de datos tanto en la UI como en el panel. Para obtener más información, consulte nuestros documentos sobre [cómo cambiar el nombre de las aplicaciones del navegador](/docs/browser/new-relic-browser/configuration/rename-browser-apps/).
        </Collapser>

        <Collapser
          id="Team"
          title="Equipo"
        >
          En algunas organizaciones, un solo equipo admite múltiples productos, mientras que en otras, un producto es lo suficientemente grande como para ser respaldado por múltiples equipos. Informe sobre el rendimiento del equipo en comparación con la experiencia o el compromiso de los clientes agregando el nombre del equipo al nombre de la aplicación del navegador en New Relic (por ejemplo, `account-management.prod.unicorn-squad`) o usando [un atributo personalizado](/docs/telemetry-data-platform/custom-data/custom-events/report-browser-monitoring-custom-events-attributes).
        </Collapser>
      </CollapserGroup>
  </Step>

  <Step>
    ### Importar el dashboard de base de calidad [#import-dashboard]

    <img
      title="Customer experience quality foundation dashboard"
      alt="Customer experience quality foundation dashboard"
      src="/images/cx_screenshot-full_qf-dashboard.webp"
    />

    El siguiente paso es crear un dashboard que pueda utilizar para medir y mejorar la experiencia de su cliente en comparación con su rendimiento de línea de base. Para hacer esto:

    1. Vaya al [inicio rápido de Quality Foundation](https://newrelic.com/instant-observability/customer-experience-quality-foundation/7a5739bf-30ee-4be9-9705-14871cafd7f4).
    2. Siga las instrucciones del inicio rápido para instalar el dashboard.
    3. Utilice la [guía proporcionada](https://github.com/newrelic/newrelic-quickstarts/tree/main/quickstarts/oma-qf#readme) para personalizarla y adaptarla a cómo planea segmentar los datos.

       <Callout variant="tip">
         ¡Asegúrese de alinear el dashboard con las líneas de negocio o las ofertas orientadas a los clientes en lugar de con los equipos para maximizar el impacto de su optimización!
       </Callout>
  </Step>

  <Step>
    ### Capture el rendimiento actual de cada página dashboard [#capture-performance]

    <img
      title="Capture current performance for each dashboard page"
      alt="Capture current performance for each dashboard page"
      src="/images/cx_diagram_qf_kpi_progress.webp"
    />

    El último paso para establecer su estado actual es capturar su rendimiento actual desde las páginas dashboard . Para hacer esto:

    1. Siga las instrucciones en nuestro [GitHub README de Quality Foundation](https://github.com/newrelic/oma-resource-center/tree/main/src/content/docs/oma/value-drivers/customer-experience/use-cases/quality-foundation), que lo guiará a través de la lista de segmentos de 'permitidos' y dashboard Quality Foundation.

    2. Utilice el dashboard del paso anterior para comprender el rendimiento general de cada línea de negocio. Si es relevante, aplique filtros para ver el rendimiento en toda la región o dispositivo. Si los valores caen por debajo del objetivo y es importante, agréguelo a la hoja como candidato a mejorar. Ejemplos de valor de seguimiento:

       * No vale la pena seguirlo: una empresa que vende seguros en EE. UU. sólo nota un rendimiento deficiente en Malasia.
       * Vale la pena seguirlo: una empresa que vende seguros en EE. UU. solo nota un rendimiento deficiente con respecto al usuario móvil en EE. UU.
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-customer-experience/improve-customer-experience/","title":"Próximo paso","body":"Aprenda a utilizar los datos de su estado actual para realizar mejoras"}}/>
