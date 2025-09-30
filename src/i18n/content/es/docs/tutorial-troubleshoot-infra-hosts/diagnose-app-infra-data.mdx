---
title: Diagnosticar fallas de la aplicación con datos del host
metaDescription: Learn how to identify failing hosts and apps using infrastructure data.
freshnessValidatedDate: '2023-08-24T00:00:00.000Z'
translationType: machine
---

Cuando su sistema esté completamente instrumentado, podrá correlacionar datos entre la infraestructura de su sistema y las aplicaciones que admite su infraestructura. Sin embargo, es probable que tengas miles de hosts sin rostro asignando recursos a varias aplicaciones. Es posible que no tenga el contexto completo de lo que está sucediendo y dónde, lo que hace que encontrar datos relevantes sea abrumador. ¿Cómo clasifica todos sus datos para encontrar causas relacionadas con la infraestructura de aplicaciones fallidas?

## Objetivos [#objectives]

Este documento le guiará en la búsqueda de datos relevantes dentro de la UI de la infraestructura. Vas a:

* Filtra los datos de tu infraestructura por atributo
* Identifique hosts y aplicaciones específicos sin contexto adicional
* Utilice el selector de tiempo para encontrar cuándo ocurrió un cambio

## Explore los datos de su host para encontrar la causa de una interrupción [#explore]

<Steps>
  <Step>
    ## Identificar hosts defectuosos

    <Tabs>
      <TabsBar>
        <TabsBarItem id="hosts-via-alerts">
          Encuentra hosts con alerta
        </TabsBarItem>

        <TabsBarItem id="hosts-no-alerts">
          Encuentra hosts sin alerta
        </TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="hosts-via-alerts">
          Si no está seguro de cómo comenzar, le recomendamos que inicialmente determine el alcance de sus hosts según la gravedad de las alertas. Usando la descripción general de la página de resumen, puede ver que hay tres incidentes de alerta críticos sucediendo en su sistema.

          Puedes usar la barra de filtro para ver datos solo sobre esas tres alerta crítica. En este caso, su consulta sería `alertSeverity = 'CRITICAL'`, que limita sus datos agregados de 83 hosts a tres.

          <img
            title="Add a query to the filter bar to sort by alert severity"
            alt="A screenshot identifying the two areas in the UI that indicate alert severity. An arrow points to the Alerts tile and a second arrow points to the filter bar."
            src="/images/infrastructure_screenshot-full_hosts-alert-critical.webp"
          />
        </TabsPageItem>

        <TabsPageItem id="hosts-no-alerts">
          Si aún no has configurado <InlinePopover type="alerts"/>, siempre puedes ordenar la tabla de resumen por hosts métrica. Por ejemplo, digamos que no tiene indicios de que los hosts estén fallando pero aún así se le notificó sobre un problema.

          <img
            title="Sort your summary table data"
            alt="A screenshot that shows the summary table sorted by descending CPU usage. An arrow points to the column title where you can toggle the sort action by ascending or descending."
            src="/images/infrastructure_screenshot-full_table-ordered.webp"
          />

          1. Haga clic en la columna de nombre en la tabla de resumen. Puede ordenar en orden ascendente o descendente.
          2. En la captura de pantalla, ordenamos los hosts por uso de CPU, lo que colocó `host-tower-portland` en la parte superior con un 99,84 % de CPU.
          3. Repita el mismo proceso para el uso de la memoria, el uso del almacenamiento, etc., si es necesario. Repita hasta que haya encontrado un patrón de comportamiento anómalo.
          4. Cuando tenga tiempo, considere crear alertas para cualquier umbral crítico.
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Filtrar por nombre de la aplicación

    Una vez que haya identificado un host relacionado con el incidente, puede hacer clic para ver datos solo sobre ese host. En este escenario, hemos elegido `apache-svr01`. Dado que estamos intentando resolver un problema relacionado con la aplicación, comenzamos en el mapa de servicios en la página del host. Este mapa le muestra qué aplicaciones dependen del host elegido.

    <SideBySide>
      <Side>
        <img
          title="Open your host-scoped summary page"
          alt="A screenshot displaying a summary page with data scoped to the individual host, named apache-svr01. An arrow points to the service map on the right side of the UI."
          src="/images/infrastructure_screenshot-service-maps-app.webp"
        />

        Desde la vista de ámbito `apache-svr01` , podemos ver que dos aplicaciones dependen de este host. Uno está alerta.
      </Side>

      <Side>
        <img
          title="Open the service map to view dependencies"
          alt="A screenshot displaying a service map. This service map shows two apps. One app named 'Orders team' is alerting in the critical."
          src="/images/infrastructure_screenshot-find-app.webp"
        />

        En este caso, la aplicación `Orders team` es la aplicación que falla.
      </Side>
    </SideBySide>
  </Step>

  <Step>
    Regrese a la página de resumen de infraestructura para que pueda actualizar su consulta. Queremos evaluar todos los hosts relacionados con esta aplicación incluso si aún no están alertando. Ver el host problemático en el contexto de su conjunto de socios mejora su comprensión de la causa del error de la aplicación. Por ejemplo, tal vez los otros hosts se estén acercando a un umbral, o tal vez no haya creado una alerta para esos otros hosts.

    Ajuste la barra de filtro para mostrar los hosts relacionados con la aplicación `Orders team` . Su consulta ahora debería leer `apmApplicationNames = Orders team`.

    <img
      title="Update your filter query to show all hosts related to the failing app"
      alt="A screenshot with an updated view of the hosts page. Instead of showing a table of alerting hosts, it now displays host data that serves the app Orders team"
      src="/images/infrastructure_screenshot-full_hosts-filtered-app.webp"
    />

    Este filtro amplió el radio del incidente más allá de su host `apache_svr01` inicial, pero aún mantuvo el alcance de sus datos en un conjunto relevante. Desde aquí, puede comenzar a profundizar en qué limitación de recursos está afectando el rendimiento.

    * Dado que solo un par de estos hosts están alertando, puede descartar un posible problema con la base de datos, que afectaría a todos los hosts.
    * En su lugar, puede optar por profundizar en las pestañas Sistema, Red, Procesos, Almacenamiento o contenedor Docker. El siguiente documento de esta serie cubre cómo comparar y correlacionar el comportamiento de los datos.
  </Step>

  <Step>
    ## Ajuste el selector de tiempo para encontrar cuándo ocurrió un cambio por primera vez

    Ajustar el selector de tiempo le permite ver cómo han cambiado sus datos con el tiempo. Esta acción le permite realizar un seguimiento de cuándo se produjo un cambio por primera vez. Miremos estos gráficos métricos alternados entre hace 3 horas y hace 6 horas.

    <SideBySide>
      <Side>
        <img
          title="Tiles and graphs set to a 3 hour time parameter"
          alt="A screenshot displaying two metrics graphs and tiles from the past 6 hours."
          src="/images/infrastructure_screenshot-full_metrics-time1.webp"
        />
      </Side>

      <Side>
        <img
          title="Tiles and graphs set to a 6 hour time parameter"
          alt="A screenshot displaying two metrics graphs and tiles from the past 6 hours."
          src="/images/infrastructure_screenshot-full_metrics-time2.webp"
        />
      </Side>
    </SideBySide>

    * Su serie temporal a las 6 horas no muestra un aumento obvio en la utilización del disco. Cambiado a un parámetro de 3 horas, puede ver aproximadamente cuándo el comportamiento comenzó a cambiar. Tus gráficos métricos te dan una pista visual cuando ocurre un pico o una caída.

    * Si ha habido un aumento inesperado en la carga, el mosaico

      <DNT>
        **Events**
      </DNT>

      mostrará muchos o muy pocos eventos esperados.

    * El mosaico

      <DNT>
        **Alerts**
      </DNT>

      muestra la cantidad de hosts que actualmente están alertando con un umbral crítico o de advertencia. Un aumento constante de la alerta a lo largo del tiempo podría indicar cuándo un cambio intensificó el comportamiento del incidente.

      Los mosaicos y gráficas métricas pueden ayudarte a triangular el tiempo aproximado de un incidente. Esto es especialmente útil si la causa de un incidente se debe a una actualización de un proveedor externo o a un despliegue de otro equipo. Si ese es el caso, su próximo paso para profundizar más cambiaría.
  </Step>
</Steps>

## ¿Que sigue? [#next]

Hemos presentado cómo localizar aplicaciones defectuosas mediante la evaluación de los datos de su infraestructura. Al comenzar con la página de resumen, puede obtener una descripción general del rendimiento de sus hosts a lo largo del tiempo e identificar qué hosts admiten aplicaciones defectuosas.

Pero, ¿cómo utiliza los datos de su infraestructura para tomar una decisión sobre la asignación de recursos? El siguiente documento cubre cómo puede profundizar en un incidente más específico, como la resolución de problemas de CPU alta.

<UserJourneyControls
  previousStep={{"path":"/docs/tutorial-troubleshoot-infra-hosts/collect-your-data","title":"Paso anterior","body":"Instale el agente de infraestructura."}}
  nextStep={{"path":"/docs/tutorial-troubleshoot-infra-hosts/investigate-your-resources","title":"Próximo paso","body":"Tome decisiones sobre recursos con sus datos"}}
/>
