---
title: 'Migración a la nube: Crear aplicación línea de base'
tags:
  - New Relic solutions
  - New Relic solutions
  - Cloud adoption
metaDescription: Use New Relic to establish a baseline to use for comparison during your cloud adoption process.
freshnessValidatedDate: never
translationType: machine
---

La migración a la nube puede tomar muchas formas. Algunas empresas optan por trasladar su aplicación directamente desde su centro de datos a la nube (una migración de “Lift and Shift”), mientras que otras se centran en rediseñar completamente su aplicación para aprovechar los beneficios disponibles sólo en la nube. Independientemente de su enfoque, hay tres preguntas principales que desea responder después de su migración:

* ¿Mi aplicación se ha vuelto más lenta?
* ¿Mi aplicación es menos estable que antes?
* ¿Estoy perdiendo clientes por alguna de las preguntas anteriores?

Para responder a estas preguntas, comience realizando algunas pruebas básicas para establecer una línea de base para el rendimiento y la disponibilidad de sus sistemas. Una línea de base es una medición del rendimiento y la disponibilidad actuales de su aplicación, que luego utiliza como comparación después de la migración para validar su caso de negocio. En algunos casos, puede cambiar una línea de base cuando [realiza pruebas de aceptación de migración](/docs/new-relic-solutions/new-relic-solutions/optimize-cloud-architecture-spend-continuously-improve-your-modern-cloud-environment). También puede utilizar una línea de base como punto de comparación durante su migración para asegurarse de que va por buen camino.

## 1. Identificar componentes [#identify-components]

Antes de comenzar una migración a la nube, identifique todo el nivel de toda su stack de aplicaciones. Enumere todos los componentes (aplicación, servicios, etc.) que desea migrar. Segmente la stack de aplicaciones de la siguiente manera:

* Aplicación (backend/microservicios/trabajos cron)
* Servicios de dependencia, como la cola de mensajes.
* Base de datos
* Sitio web
* Servidor e infraestructura subyacentes

<Callout variant="tip">
  Asegúrese de tener acceso a la aplicación y la instancia antes de comenzar a crear la aplicación línea de base. Involucre a los propietarios de su aplicación, al ingeniero de DevOps y al gerente de productos para obtener acceso.
</Callout>

<CollapserGroup>
  <Collapser
    id="components-list"
    title="Ejemplo: lista de componentes"
  >
    A continuación se muestra un ejemplo de la lista de componentes en una stack de aplicaciones:

    <table>
      <thead>
        <tr>
          <th>
            Nombre del componente
          </th>

          <th>
            Dueño
          </th>

          <th>
            Stack de idiomas
          </th>

          <th>
            Accesibilidad (Internet, Intranet)
          </th>

          <th>
            Sistema operativo
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Servicio 1
          </td>

          <td>
            Juan Pérez
          </td>

          <td>
            Java
          </td>

          <td>
            Internet
          </td>

          <td>
            RHEL 6
          </td>
        </tr>

        <tr>
          <td>
            Servicio 2
          </td>

          <td>
            maya wiz
          </td>

          <td>
            .NET
          </td>

          <td>
            Intranet
          </td>

          <td>
            Win2003 R2
          </td>
        </tr>

        <tr>
          <td>
            RabbitMQ
          </td>

          <td>
            Juan Pérez
          </td>

          <td>
            Java
          </td>

          <td>
            Intranet
          </td>

          <td>
            AIX
          </td>
        </tr>

        <tr>
          <td>
            Sitio web
          </td>

          <td>
            maya wiz
          </td>

          <td>
            ASP clásico
          </td>

          <td>
            Internet
          </td>

          <td>
            Win2000
          </td>
        </tr>

        <tr>
          <td>
            Microsoft SQL
          </td>

          <td>
            David Z.
          </td>

          <td>
            N / A
          </td>

          <td>
            Intranet
          </td>

          <td>
            Win2003 R2
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## 2. Determinar la compatibilidad [#determine-compatibility]

Una vez que identifiques la aplicación que deseas migrar, es momento de verificar qué nivel de aplicación monitor con la plataforma New Relic. Trabaje con las partes interesadas de su organización para determinar la cantidad de instrumentación que es posible (o permitida) dentro de su organización. Este es un paso importante y que dará sus frutos, ya que cuanto más pueda instrumentar, mejor será su línea de base.

Estos son los productos New Relic que se pueden utilizar para la línea de base, según los componentes que haya identificado:

* [<DNT>**APM**</DNT>](/docs/apm): monitor tus aplicaciones web con APM. Consulte [Compatibilidad y requisitos para el agente y los productos New Relic](/docs/agents/manage-apm-agents/installation/compatibility-requirements-new-relic-agents) para conocer detalles precisos de compatibilidad para cada idioma admitido.
* [<DNT>**Infrastructure**</DNT>](/docs/infrastructure): monitor tus hosts con infraestructura. Consulte [Compatibilidad y requisitos de infraestructura](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure) para sistemas operativos y entornos compatibles. También puedes instrumentar otros productos y servicios con [integración en el host](/docs/integrations/host-integrations/host-integrations-list).
* [<DNT>**Synthetic monitoring**</DNT>](/docs/synthetics): monitor interfaces web y API con [monitoreo sintético](/docs/synthetics). A veces, es posible que no pueda instrumentar su entorno local con <InlinePopover type="apm"/>o infraestructura. Por ejemplo, tal vez la política de su organización prohíba instalar un agente detrás de un firewall. En estos casos, si la aplicación tiene una interfaz web, utilice el monitoreo sintético, ya que ofrece monitoreo sin agente y al mismo tiempo brinda la capacidad de establecer una línea de base.

<CollapserGroup>
  <Collapser
    id="connect-migration-example"
    title="Ejemplo: componentes coincidentes con productos New Relic"
  >
    Relaciona los componentes que identificaste con sus correspondientes productos:

    <table>
      <thead>
        <tr>
          <th>
            Nombre del componente
          </th>

          <th>
            Propietario del nivel
          </th>

          <th>
            Stack de idiomas
          </th>

          <th>
            Accesibilidad (Internet/Intranet)
          </th>

          <th>
            Sistema operativo
          </th>

          <th>
            New Relic
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Servicio 1
          </td>

          <td>
            Juan Pérez
          </td>

          <td>
            Java
          </td>

          <td>
            Internet
          </td>

          <td>
            RHEL 6
          </td>

          <td>
            APM, monitoreo de infraestructura, monitoreo sintético
          </td>
        </tr>

        <tr>
          <td>
            Servicio 2
          </td>

          <td>
            maya wiz
          </td>

          <td>
            .NET
          </td>

          <td>
            Intranet
          </td>

          <td>
            Win2003 R2
          </td>

          <td>
            APM, infraestructura
          </td>
        </tr>

        <tr>
          <td>
            <DNT>
              ActiveMQ
            </DNT>
          </td>

          <td>
            Juan Pérez
          </td>

          <td>
            Java
          </td>

          <td>
            Intranet
          </td>

          <td>
            AIX
          </td>

          <td>
            APM
          </td>
        </tr>

        <tr>
          <td>
            Sitio web
          </td>

          <td>
            maya wiz
          </td>

          <td>
            ASP clásico
          </td>

          <td>
            Internet
          </td>

          <td>
            Win2000
          </td>

          <td>
            Sintético
          </td>
        </tr>

        <tr>
          <td>
            Microsoft SQL
          </td>

          <td>
            David Z.
          </td>

          <td>
            n/a
          </td>

          <td>
            Intranet
          </td>

          <td>
            Win2003 R2
          </td>

          <td>
            Infraestructura, Integración en el host
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## 3. implementar el monitoreo [#deploy-monitoring]

Según las coincidencias entre componente y producto que haya realizado, despliegue agente o monitoree en su arquitectura:

<CollapserGroup>
  <Collapser
    id="deploy-apm"
    title="Desplegar APM"
  >
    [Instale el agente APM](/docs/agents/manage-apm-agents/installation/install-agent) en su stack de aplicaciones. Los pasos para instalar el agente <InlinePopover type="apm"/>son diferentes según el idioma.
  </Collapser>

  <Collapser
    id="deploy-infrastructure"
    title="Desplegar infraestructura"
  >
    Después de revisar los requisitos de infraestructura, siga las instrucciones para instalar el agente de infraestructura en sus hosts:

    * [Instalar para Linux](/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-linux)
    * [Instalar para servidor de Windows](/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-windows-server)
    * [Instalar en AWS Elastic Beanstalk](/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-agent-aws-elastic-beanstalk)
    * [Instalar con una herramienta de gestión de configuración](/docs/infrastructure/new-relic-infrastructure/config-management-tools)
  </Collapser>

  <Collapser
    id="deploy-infrastructure-on-host"
    title="Implementar infraestructura integrada en el host"
  >
    Para obtener una mayor visibilidad de la aplicación de la que depende su código, implemente [la integración en el host](/docs/infrastructure/host-integrations/host-integrations-list). Las integraciones disponibles incluyen Apache, MySQL, NGINX y otras.
  </Collapser>

  <Collapser
    id="create-synthetics-monitor"
    title="Crear monitor Sintético"
  >
    El monitoreo sintético es un conjunto de herramientas automatizadas y programables para monitor sus sitios web, transacciones comerciales críticas y extremos de API. Para comenzar [, agregue un monitor](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#adding-monitors).

    <Callout variant="tip">
      Asegúrese de verificar que la URL de su sitio web sea accesible desde la red pública. Es posible que también necesites [agregar IP de New Relic a tu lista de 'permitidos'](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips).
    </Callout>
  </Collapser>
</CollapserGroup>

## 4. Reunir métrica [#gather-metrics]

Después de desplegar el agente y monitorear, identifique qué métricas son las más importantes para su negocio y utilícelas para definir sus KPI. Algunas recomendaciones incluyen:

* <DNT>**Response time:**</DNT> Tiempo necesario para responder a una solicitud.
* <DNT>**Throughput:**</DNT> Número de solicitudes que llegaron a través de la aplicación.
* <DNT>**Requesting queuing (Apache, IIS, NGINX):**</DNT> Duración del tiempo que tarda una solicitud en llegar a su aplicación.
* <DNT>**Database call duration:**</DNT> Duración del tiempo necesario para completar una llamada a la base de datos.
* <DNT>**DB call counts:**</DNT> Número de llamadas realizadas por código de aplicación a la base de datos.
* <DNT>**Error rate:**</DNT> Porcentaje de errores reportados.
* <DNT>**Apdex score:**</DNT> Un estándar de la industria para medir la satisfacción del usuario con el tiempo de respuesta de las aplicaciones y servicios web.
* <DNT>**DNS setup timing:**</DNT> El tiempo que lleva conectarse y recibir datos de DNS.
* <DNT>**SSL setup timing:**</DNT> El tiempo que lleva establecer una conexión SSL.

Puede encontrar algunas de estas métricas en [mapas de servicios](/docs/using-new-relic/service-maps/get-started/introduction-service-maps), así como en [APM](/docs/apm/applications-menu/monitoring/apm-overview-page) y páginas [del navegador](/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring) <DNT>**summary**</DNT> .

Para obtener información más detallada sobre cómo navegar, interpretar y usar APM, consulte estos tutoriales de New Relic University:

* [Descripción general del recorrido dashboard](https://newrelic.wistia.com/medias/nywjt50h8u)
* [Dashboard transacciones](https://newrelic.wistia.com/medias/hf694w8ew2)
* [Entendiendo Apdex](https://newrelic.wistia.com/medias/ed0sc5053k)

## 5. Configurar el panel [#dashboards]

Después de definir sus KPI, es fácil visualizarlos en [el panel](/docs/dashboards). El panel de control ofrece una ubicación única para ver todos los datos que recopilan los productos New Relic. Los datos del tablero constan de [eventos](/docs/using-new-relic/welcome-new-relic/get-started/glossary#event), y cada evento tiene un tipo de evento, una timestamp y [un atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) de valor principal.

Para obtener más información sobre el evento, consulte [Recopilación de datos](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data) y [Evento predeterminado para productos New Relic](/docs/insights/insights-data-sources/default-data/insights-default-data-other-new-relic-products).

Puede ubicar sus KPI y datos métricos comerciales en New Relic usando [métrica y evento](/docs/query-your-data/explore-query-data/browse-data/introduction-data-explorer/) y el [lenguaje de consulta NRQL](/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql). También puede [crear un panel](/docs/dashboards/new-relic-one-dashboards/get-started/introduction-new-relic-one-dashboards) para realizar un seguimiento del rendimiento de esos KPI:

<CollapserGroup>
  <Collapser
    id="baseline-maturity-example"
    title="Ejemplo: Rendimiento de componentes comparado con línea de base"
  >
    Continuando con los ejemplos de este documento, la siguiente tabla ilustra la madurez de su rendimiento de la aplicación durante un período de tiempo basado en hitos desplegables. Cada hito servirá como una nueva línea de base para su aplicación:

    <table>
      <thead>
        <tr>
          <th colSpan={2}>
            Componente
          </th>

          <th colSpan={3}>
            Hito 1
          </th>

          <th colSpan={3}>
            Hito 2
          </th>

          <th>
            Hito N
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={{ width: "250px" }}>
            <DNT>
              **Environment**
            </DNT>
          </td>

          <td style={{ width: "250px" }}>
            <DNT>
              **Component Name**
            </DNT>
          </td>

          <td>
            <DNT>
              **Response Time**
            </DNT>
          </td>

          <td>
            <DNT>
              **SLA**
            </DNT>
          </td>

          <td>
            <DNT>
              **Apdex**
            </DNT>
          </td>

          <td>
            <DNT>
              **Response Time**
            </DNT>
          </td>

          <td>
            <DNT>
              **SLA**
            </DNT>
          </td>

          <td>
            <DNT>
              **Apdex**
            </DNT>
          </td>

          <td>
            <DNT>
              **Response**
            </DNT>
          </td>
        </tr>

        <tr>
          <td>
            Local
          </td>

          <td>
            Servicio 1
          </td>

          <td>
            1,5 segundos
          </td>

          <td>
            80%
          </td>

          <td>
            70%
          </td>

          <td>
            1,5 segundos
          </td>

          <td>
            68%
          </td>

          <td>
            0,65
          </td>

          <td>
            1,4 segundos
          </td>
        </tr>

        <tr>
          <td>
            Nube
          </td>

          <td>
            Servicio 1
          </td>

          <td>
            0,9 segundos
          </td>

          <td>
            96,8%
          </td>

          <td>
            95%
          </td>

          <td>
            0,9 segundos
          </td>

          <td>
            98%
          </td>

          <td>
            0,99
          </td>

          <td>
            0,7 segundos
          </td>
        </tr>

        <tr>
          <td>
            Local
          </td>

          <td>
            Servicio 2
          </td>

          <td>
            0,7 segundos
          </td>

          <td>
            73%
          </td>

          <td>
            68%
          </td>

          <td>
            0,7 segundos
          </td>

          <td>
            80%
          </td>

          <td>
            0,78
          </td>

          <td>
            0,85 segundos
          </td>
        </tr>

        <tr>
          <td>
            Nube
          </td>

          <td>
            Servicio 2
          </td>

          <td>
            0,6 segundos
          </td>

          <td>
            90%
          </td>

          <td>
            92%
          </td>

          <td>
            0,6 segundos
          </td>

          <td>
            89%
          </td>

          <td>
            0,90
          </td>

          <td>
            0,5 segundos
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

Después de su migración, compare estas línea de base con su [prueba de aceptación de migración](/docs/perform-migration-acceptance-testing) línea de base.

## Consejos de expertos [#expert-tips]

Si descubre que necesita datos que no se capturan mediante la instrumentación predeterminada, le facilitamos la captura de datos personalizados:

* [Instrumentación APM personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/)
* [Datos personalizados browser](/docs/insights/insights-data-sources/custom-data/insert-data-via-new-relic-browser)
* [Atributo de infraestructura personalizado](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#conf-custom_attributes)
* [Datos del evento personalizado](/docs/insights/insights-data-sources/custom-data/send-custom-data-insights)
* [Datos personalizados móviles](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile)
* [Aparato sintético personalizado](/docs/synthetics/new-relic-synthetics/scripting-monitors/add-custom-attributes-new-relic-synthetics-data)

También puede obtener más información sobre la instrumentación personalizada de APM con la [serie de tutoriales de datos personalizados](https://learn.newrelic.com/custom-data-with-apm) de New Relic University.
