---
title: Optimice sus datos de ingesta
metaDescription: Taking your ingested and reported ingest data and optimizing it.
freshnessValidatedDate: never
translationType: machine
---

En el paso anterior, creó y perfeccionó su plan de optimización de datos comparando su informe de línea de base con los objetivos de su organización. Una vez que haya alineado sus datos y los haya medido con sus impulsores de valor, puede comenzar a optimizar y potencialmente reducir sus datos de ingesta. Hay dos formas principales de hacer esto:

* Optimice la eficiencia de los datos
* Optimizar usando reglas de caída

Cubriremos ambos métodos a continuación, así como todas las configuraciones posibles que proporciona cada opción.

## Optimice la eficiencia de los datos [#optimize-efficiency]

Esta sección incluye varias formas de configurar la característica New Relic para optimizar los informes de datos y la ingesta:

<CollapserGroup>
  <Collapser
    id="apm-agent"
    title="Agente APM"
  >
    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      * Monitorear transacciones
      * Actividad de error
      * Evento personalizado
    </Callout>

    El volumen de datos generado por el agente APM vendrá determinado por varios factores:

    * La cantidad de tráfico orgánico generado por la aplicación (por ejemplo, en igualdad de condiciones, una aplicación que se llama un millón de veces al día generará más datos que una que se llama mil veces al día)

    * Algunas de las características de los datos de la transacción subyacentes (longitud y complejidad de las URL)

    * Si la solicitud informa consulta de la base de datos

    * Si la aplicación tiene transacción con muchos (o cualquier) atributo personalizado

    * El volumen de errores de la aplicación.

    * Si el agente de aplicación está configurado para rastreo distribuido

      ### Gestionar el volumen

      Si bien se puede asumir que todas las llamadas a una aplicación son necesarias, es posible hacer que la arquitectura general sea más eficiente. Podrá tener un perfil de usuario de microservicios llamado cada 10 segundos por sus clientes. Esto ayuda a reducir la latencia si otros clientes actualizan alguna información del usuario. Sin embargo, tienes la opción de reducir la frecuencia de las llamadas a este servicio a cada minuto, por ejemplo.

      ### Atributo personalizado

      Cualquier [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/) agregado mediante una llamada a una API de APM [`addCustomParameter`](https://developer.newrelic.com/collect-data/custom-attributes/) agregará un atributo adicional a la carga útil de la transacción. Suelen ser útiles, pero a medida que las cosas cambian, los datos pueden volverse menos valiosos o incluso obsoletos.

      El agente de Java captura el siguiente `request.headers` de forma predeterminada:

    * `request.headers.referer`

    * `request.headers.accept`

    * `request.headers.contentLength`

    * `request.headers.host`

    * `request.headers.userAgent`

      Los desarrolladores también pueden utilizar `addCustomParameter` para capturar más información mediante encabezados más detallados.

      Para ver un ejemplo de la configuración enriquecida que está disponible en relación con APM, consulte nuestra [documentación de agente de Java.](/docs/apm/agents/java-agent/attributes/java-agent-attributes/#requestparams)

      ### Evento de error

      Es posible reducir el volumen de datos descubriendo cómo APM manejará los errores. Por ejemplo, puede haber un error inofensivo pero de gran volumen que no puedes eliminar en este momento.

      Para hacer esto, puede usar `collect`, `ignore` o `mark as expected` para errores. Para obtener más información, consulte [Administrar errores de APM](/docs/apm/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected).

      ### Consulta de la base de datos

      Un aspecto muy variable de la instancia de APM es la cantidad de llamadas a la base de datos y la configuración establecida. Para ayudar con esto, puede controlar qué tan detallada es la monitorización de la consulta de la base de datos. Estas consultas aparecerán en la página <DNT>**Transaction traces**</DNT> .

      Los cambios comunes en la configuración de la consulta de la base de datos incluyen:

    * [Recopilar datos de consultas sin procesar en lugar de ofuscarlos o desactivar la recopilación de consultas](/docs/apm/transactions/transaction-traces/configure-transaction-traces#record-sql).

    * Cambiando el umbral del rastreo del stack.

    * Activar la consulta para explicar la recopilación del plan.

      Para obtener más detalles, consulte [la página de traza de la transacción consulta de la base de datos](/docs/apm/transactions/transaction-traces/transaction-traces-database-queries-page/#settings).

      ### Establecer límites de eventos

      Nuestro APM y nuestro agente móvil tienen límites sobre cuántos eventos pueden reportar por ciclo de cosecha. Si no hubiera límite, una cantidad suficientemente grande de eventos enviados podría afectar el rendimiento de su aplicación o de New Relic. Al alcanzar el límite, el agente comienza a muestrear el evento para brindar una representación del evento a lo largo del ciclo de recolección. Diferentes agentes tienen diferentes límites.

      Evento que con límites y sujeto a muestreo incluya:

    * Evento personalizado reportado a través de la API del agente (por ejemplo, el `RecordCustomEvent` del agente .NET)

    * `Mobile`

    * `MobileCrash`

    * `MobileHandledException`

    * `MobileRequest`

    * `Span` (ver muestreo rastreo distribuido)

    * `Transaction`

    * `TransactionError`

      La mayoría de los agentes tienen opciones de configuración para cambiar el límite de eventos en la transacción muestreada. Por ejemplo, el agente de Java usa [`max_samples_stored`](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#ae-max_samples_stored). El valor predeterminado para `max_samples_stored` es `2000` y el máximo es `10000`. Este valor rige cuántos eventos muestreados pueden informar cada 60 segundos desde una instancia de agente. Para obtener una explicación completa de los límites de muestreo de eventos, consulte [límites de eventos](/docs/using-new-relic/data/understand-data/new-relic-event-limits-sampling).

      Puede compensar el evento muestreado mediante el [operador NRQL`EXTRAPOLATE` ](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#extrapolate).

      Antes de intentar cambiar la forma en que se realiza el muestreo, tenga en cuenta lo siguiente:

    * Cuanto más eventos reportes, más memoria utilizará tu agente.

    * Por lo general, puede obtener los datos que necesita sin aumentar el límite de informes de eventos de un agente.

    * El límite de tamaño de carga útil es 1 MB (10^6 bytes) (comprimido), por lo que el número de eventos aún puede verse afectado por ese límite. Para saber si se están eliminando eventos, consulte el log del agente para ver un mensaje de estado `413 HTTP`.

      ### Tasa de muestreo log

      Las versiones más recientes del agente de lenguaje New Relic APM pueden reenviar logs directamente a New Relic. A veces, es posible que desee controlar algunos límites de cuán grandes pueden ser los picos de logging de cada instancia del agente APM.

      Para obtener detalles sobre el muestreo de logs del agente APM, consulte [reenviador de logs](#log-forwarders).

      ### Traza de la transaccion

      <Callout
        variant="IMPORTANT"
        title="Controladores de crecimiento"
      >
        * Número de servicios conectados
        * Número de llamadas al método de monitoreo por servicios conectados
      </Callout>

      En APM, [la traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces) registra detalles detallados sobre la transacción de su aplicación y las llamadas a la base de datos. Puede editar la configuración predeterminada para la traza de la transacción.

      Esto también es altamente configurable mediante [la configuración de traza de la transacción](/docs/apm/transactions/transaction-traces/configure-transaction-traces). El nivel y el modo de configurabilidad serán específicos del idioma.

      Las configuraciones de traza de la transacción disponibles usando la configuración del lado del servidor diferirán según el agente de New Relic que utilice. La UI incluye descripciones de cada uno. Las configuraciones en la UI pueden incluir:

    * Seguimiento y umbral de transacciones.

    * Grabar SQL, incluido el nivel de grabación y los campos de entrada

    * Log SQL y rastreo del umbral de pila

    * Planes de consulta SQL y umbral

    * Colección de errores, incluido el código HTTP y la clase de error

    * Consulta lenta rastreo

    * Hilo generador de perfiles

      ### rastreo distribuido

      La configuración de rastreo distribuido tiene algunas diferencias específicas del idioma. Puede desactivar rastreo distribuido según sea necesario. Este es un ejemplo para el agente de Java `newrelic.yml`:

      ```yml
      distributed_tracing:
          enabled: false
      ```

      Este es un ejemplo de node.js para `newrelic.js`

      ```js
      distributed_tracing: {
        enabled: false
      }
      ```

      El volumen de datos también varía según si está utilizando [Infinite Tracing](/docs/distributed-tracing/infinite-tracing/introduction-infinite-tracing). El rastreo estándar distribuido para el agente APM (arriba) captura hasta el 10% de su traza, pero si desea analizar todos sus datos y encontrar la traza más relevante, puede configurar Infinite Tracing. Esta alternativa al rastreo distribuido estándar está disponible para todos los agentes de lenguaje APM. Los principales parámetros que podrían impulsar un pequeño aumento en la ingesta mensual son:

    * Configurar monitoreo de observador de trazas

    * Configurar filtro de traza de atributo span

    * Configurar filtro de traza aleatorio
  </Collapser>

  <Collapser
    id="browser-agent"
    title="Agente del navegador"
  >
    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      * Cargas de página
      * Llamadas Ajax
      * Actividad de error
    </Callout>

    Para [la versión 1211 o superior del agente del navegador](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) , todas las solicitudes de red realizadas por una página se registran como `AjaxRequest` evento. Puede utilizar las opciones de configuración de la lista de denegación en la página de configuración UI de la aplicación para filtrar qué eventos de registro de solicitudes. Independientemente de este filtro, todas las solicitudes de red se capturan como métricas y están disponibles en la página AJAX.

    ### Usando la lista de denegación

    Puede bloquear solicitudes de tres maneras:

    * Para bloquear la grabación de todos los eventos `AjaxRequest` , agregue un asterisco `*` como comodín.
    * Para bloquear la grabación del evento `AjaxRequest` en un dominio, ingrese solo el nombre del dominio. Ejemplo: `example.com`
    * Para bloquear la grabación del evento `AjaxRequest` en un dominio y ruta específicos, ingrese el dominio y la ruta. Ejemplo: `example.com/path`
    * La lista de denegación ignora el protocolo, el puerto, la búsqueda y el hash de una URL.

      Para validar si los filtros que ha agregado funcionan como se esperaba, ejecute una consulta NRQL para `AjaxRequest` evento que coincida con su filtro.

      ### Accediendo a la lista de denegados

      Para actualizar la lista de URL denegadas que su aplicación filtrará para la creación de eventos, vaya a la página de configuración UI de la aplicación:

    1. Vaya a

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
       </DNT>

       y haga clic en

       <DNT>
         **Browser**
       </DNT>

       .

    2. Seleccione una aplicación.

    3. En la navegación izquierda, haga clic en

       <DNT>
         **App settings**
       </DNT>

       .

    4. En

       <DNT>
         **Ajax request deny list**
       </DNT>

       , agregue los filtros que desea aplicar.

    5. Seleccione

       <DNT>
         **Save application settings**
       </DNT>

       para actualizar la configuración del agente.

    6. Vuelva a implementar el agente del navegador reiniciando el agente APM asociado o actualizando la instalación browser copiando y pegando.

       ### Validando

       ```sql
       FROM AjaxRequest SELECT * WHERE requestUrl LIKE `%example.com%`
       ```
  </Collapser>

  <Collapser
    id="mobile-agent"
    title="Agente móvil"
  >
    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      * Usuarios activos mensuales
      * Evento de accidente
      * Número de eventos por usuario
    </Callout>

    ### Android

    Todas las configuraciones, incluida la llamada para invocar al agente, se llaman en el método `onCreate` de la clase `MainActivity` . Para cambiar la configuración, llame a la configuración de una de dos maneras (si la configuración lo admite):

    ```java
    NewRelic.disableFeature(FeatureFlag.DefaultInteractions);
    NewRelic.enableFeature(FeatureFlag.CrashReporting);
    NewRelic.withApplicationToken(NEW_RELIC_TOKEN).start(this.getApplication());
    ```

    [La configuración de análisis](/docs/mobile-monitoring/new-relic-mobile-android/android-sdk-api/android-agent-configuration-feature-flags#analytics-settings) habilita o deshabilita la recopilación de datos de eventos. Estos eventos se informan y se utilizan en la página <DNT>**Crash analysis**</DNT> .

    También es posible configurar [el logging del agente](/docs/mobile-monitoring/new-relic-mobile-android/android-sdk-api/android-agent-configuration-feature-flags#logging-settings-logging) para que sea más o menos detallado.

    ### iOS

    Al igual que ocurre con Android, la configuración de iOS de New Relic permite habilitar y deshabilitar [banderas de características](/docs/mobile-monitoring/new-relic-mobile-android/android-sdk-api/android-agent-configuration-feature-flags).

    Puede configurar los siguientes indicadores de características:

    #### Informes de fallos y errores

    * `NRFeatureFlag_CrashReporting`
    * `NRFeatureFlag_HandleExceptionEvents`
    * `NRFeatureFlag_CrashReporting`

    #### rastreo distribuido

    * `NRFeatureFlag_DistributedTracing`

    #### Interacción

    * `NRFeatureFlag_DefaultInteractions`
    * `NRFeatureFlag_InteractionTracing`
    * `NRFeatureFlag_SwiftInteractionTracing`

    #### Banderas características de red

    * `NRFeatureFlag_ExperimentalNetworkInstrumentation`
    * `NRFeatureFlag_NSURLSessionInstrumentation`
    * `NRFeatureFlag_NetworkRequestEvents`
    * `NRFeatureFlag_RequestErrorEvents`
    * `NRFeatureFlag_HttpResponseBodyCapture`

    Para obtener más detalles, consulte [banderas de características](/docs/mobile-monitoring/new-relic-mobile-ios/ios-sdk-api/ios-agent-configuration-feature-flags).
  </Collapser>

  <Collapser
    id="infrastructure-agent"
    title="Agente de infraestructura"
  >
    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      * Monitor de hosts y contenedores
      * Tasas de muestreo para eventos principales
      * Configuración de muestra de proceso
      * Atributo personalizado
      * Número y tipo de integración en el host instalado
      * Configuración de reenvío de logs
    </Callout>

    El [archivo de configuración del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings) contiene dos formas de controlar el volumen de ingesta. El control de ingesta más importante es la configuración de las tasas de muestreo. Hay varias configuraciones de frecuencia de muestreo distintas que puede ajustar. También es posible crear expresiones regulares para controlar lo que se recopila de determinado recolector, como `ProcessSample` y `NetworkSample`.

    ### Tasas de muestreo configurables

    Hay varias frecuencias de muestreo que puede configurar en la infraestructura, pero estas son las más utilizadas.

    | Parámetro                     | Por defecto | Desactivar |
    | ----------------------------- | ----------- | ---------- |
    | `metrics_storage_sample_rate` | 5           | -1         |
    | `metrics_process_sample_rate` | 20          | -1         |
    | `metrics_network_sample_rate` | 10          | -1         |
    | `metrics_system_sample_rate`  | 5           | -1         |
    | `metrics_nfs_sample_rate`     | 5           | -1         |

    ### Muestras de proceso

    Las muestras de procesos suelen ser la fuente de datos de mayor volumen del agente de infraestructura porque envía información sobre cualquier proceso en ejecución en un host. Están deshabilitados de forma predeterminada, pero puedes habilitarlos de la siguiente manera:

    ```yaml
    enable_process_metrics: true
    ```

    Esto tiene el mismo efecto que configurar `metrics_process_sample_rate` en `-1`. De forma predeterminada, los procesos que utilizan poca memoria están excluidos del muestreo. Para obtener más información, consulte `disable-zero-mem-process-filter`.

    Puedes controlar la cantidad de datos que envías configurando `include_matching_metrics`, que te permite restringir la transmisión de datos métricos en función de los valores del [atributo](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/query-infrastructure-dimensional-metrics-nrql#naming-conventions) métrico. Puedes incluir datos métricos definiendo valores literales o parciales para cualquiera de los atributos de la métrica. Por ejemplo, puede optar por enviar el `host.process.cpuPercent` de todos los procesos cuyo `process.name` coincida con la expresión regular `^java` .

    En este ejemplo, incluimos el proceso métrica usando archivos ejecutables y nombres:

    ```yaml
      include_matching_metrics:             # You can combine attributes from different metrics
        process.name:
          - regex "^java"                   # Include all processes starting with "java"
        process.executable:
          - "/usr/bin/python2"              # Include the Python 2.x executable
          - regex "\\System32\\svchost"     # Include all svchost executables
    ```

    También puedes utilizar este filtro para la integración de Kubernetes:

    ```yaml
      env:
        - name: NRIA_INCLUDE_MATCHING_METRICS
          value: |
            process.name:
              - regex "^java"
            process.executable:
              - "/usr/bin/python2"
              - regex "\\System32\\svchost"
    ```

    ### Filtro de interfaz de red

    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      * Monitor de número de interfaces de red
    </Callout>

    La configuración utiliza un mecanismo simple de coincidencia de patrones que puede buscar interfaces que comiencen con una secuencia específica de letras o números siguiendo cualquiera de los patrones:

    * `{name}[other characters]`
    * `[number]{name}[other characters]`, donde especificas el nombre usando la opción `index-1`

    ```yaml
    network_interface_filters:
      prefix:
        - dummy
        - lo
      index-1:
        - tun
    ```

    Filtros de interfaz de red predeterminados para Linux:

    * Interfaces de red que comienzan con `dummy`, `lo`, `vmnet`, `sit`, `tun`, `tap` o `veth`
    * Interfaces de red que contienen `tun` o `tap`

    Filtros de interfaz de red predeterminados para Windows:

    * Interfaces de red que comienzan con `Loop`, `isatap` o `Local`

    Para anular los valores predeterminados, incluya su propio filtro en el archivo de configuración:

    ```yaml
    network_interface_filters:
      prefix:
        - dummy
        - lo
      index-1:
        - tun
    ```

    ### Atributo personalizado

    [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes) son pares de valores principales similares a las etiquetas en otras herramientas utilizadas para anotar los datos del agente de infraestructura. Puede utilizar estos metadatos para crear conjuntos de filtros, agrupar sus resultados y anotar sus datos. Por ejemplo, puede indicar el entorno de una máquina (de prueba o producción), el servicio que aloja una máquina (servicio de inicio de sesión, por ejemplo) o el equipo responsable de esa máquina.

    Ejemplo de atributo personalizado de `newrelic.yml`

    ```yaml
    custom_attributes:
      environment: production
      service: billing
      team: alpha-team
    ```

    <Callout variant="tip">
      Si los datos no están bien organizados o se han vuelto obsoletos de alguna manera, debería considerar optimizarlos.
    </Callout>
  </Collapser>

  <Collapser
    id="k8s-integration"
    title="Integración de Kubernetes"
  >
    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      * Número de monitores `pods` y `containers`
      * Frecuencia y número de estados métricos de kube recopilados
      * Log generado por cluster
    </Callout>

    Los sistemas complejos y descentralizados como Kubernetes tienen el potencial de generar mucha telemetría en poco tiempo. Existen algunos buenos enfoques para gestionar la ingesta de datos en Kubernetes. Estos serán muy sencillos si utilizas la observabilidad como código en el despliegue de tu K8.

    Le recomendamos encarecidamente que instale este dashboard de análisis de ingesta de datos de Kubernetes antes de tomar cualquier decisión sobre la reducción de la ingesta. Para obtener este dashboard, consulte el [inicio rápido de integración de infraestructura](https://newrelic.com/instant-observability/infrastructure-integrations-data-analysis/8e31a0ae-81c0-4df0-a119-a0ada9ec16fa).

    ### Intervalo de raspado

    Dependiendo de sus objetivos de observabilidad, puede considerar ajustar el intervalo de raspado, que tiene un tiempo predeterminado de 15 segundos. El explorador del clúster de Kubernetes solo se actualiza cada 45 segundos. Si su uso principal de los datos de Kubernetes es respaldar las visualizaciones de KCE, puede considerar cambiar su intervalo de extracción a 20 segundos. Cambiar de 15 a 20 puede tener un impacto sustancial.

    Para obtener más detalles sobre cómo administrar esto, consulte nuestros [documentos sobre el intervalo de raspado de integración de Helm](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#scrape-interval).

    ### Filtrado de espacio de nombres

    La integración de Kubernetes versión 3 y superiores permite filtrar qué espacios de nombres se eliminan etiquetándolos. De forma predeterminada, se eliminan todos los espacios de nombres.

    Usamos `namespaceSelector` de la misma manera que lo hace Kubernetes. Para incluir solo el espacio de nombres que coincida con una etiqueta, cambie `namespaceSelector` agregando lo siguiente a su `values-newrelic.yaml`, en la sección `newrelic-infrastructure` :

    ```yaml
    common:
      config:
        namespaceSelector:
          matchLabels:
            key1 : "value1"
    ```

    En este ejemplo, solo se eliminará el espacio de nombres con la etiqueta `newrelic.com/scrape` establecida en `true` :

    ```yaml
    global:
      licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
      cluster: _K8S_CLUSTER_NAME_

    # ... Other settings as shown above

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
      # ... Other settings as shown above
      common:
        config:
          namespaceSelector:
            matchLabels:
              newrelic.com/scrape: "true"
    ```

    También puede utilizar expresiones de coincidencia de Kubernetes para incluir o excluir espacios de nombres. Los operadores válidos son:

    * En
    * No en
    * Existe
    * No existe

    La estructura general de la sección `matchExpressions` es una o más de las siguientes líneas:

    ```yaml
    {key: VALUE, operator: OPERATOR, values: LIST_OF_VALUES}
    ```

    Aquí tienes un ejemplo completo:

    ```yaml
    common:
      config:
        namespaceSelector:
          matchExpressions:
          - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
    ```

    <Callout variant="tip">
      Puede incluir más de una línea en la sección `matchExpresions` y las expresiones se concatenan. Todo debe ser cierto para que se aplique el filtro. Las etiquetas y las expresiones de coincidencia se explican con más detalle [aquí](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
    </Callout>

    En este ejemplo, se excluirá el espacio de nombres con la etiqueta `newrelic.com/scrape` establecida en `false` :

    ```yaml
    global:
      licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
      cluster: _K8S_CLUSTER_NAME_

    # ... Other settings as shown above

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
      # ... Other settings as shown above
      common:
        config:
          namespaceSelector:
            matchExpressions:
            - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
    ```

    Vea una lista completa de las configuraciones que puede realizar en el [archivo README del gráfico](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure).

    #### ¿Cómo puedo saber qué espacios de nombres están excluidos? [#excluded-namespaces]

    Todo el espacio de nombres dentro del clúster se enumera gracias al ejemplo `K8sNamespace` . El atributo `nrFiltered` determina si los datos relacionados con el namespace se eliminarán.

    Utilice esta consulta para saber qué espacio de nombres se está supervisando:

    ```sql
    FROM K8sNamespaceSample SELECT displayName, nrFiltered
    WHERE clusterName = INSERT_NAME_OF_CLUSTER SINCE
    2 MINUTES AGO
    ```

    #### ¿Qué datos se descartan del espacio de nombres excluido? [#namespaces-discarded-data]

    Los siguientes ejemplos no estarán disponibles para el espacio de nombres excluido:

    * `K8sContainerSample`
    * `K8sDaemonsetSample`
    * `K8sDeploymentSample`
    * `K8sEndpointSample`
    * `K8sHpaSample`
    * `K8sPodSample`
    * `K8sReplicasetSample`
    * `K8sServiceSample`
    * `K8sStatefulsetSample`
    * `K8sVolumeSample`

    ### Estado de Kubernetes métrica

    El explorador del clúster de Kubernetes requiere únicamente el siguiente estado métrico de kube (KSM):

    * Datos del contenedor

    * Datos del clúster

    * Datos de nodo

    * Datos del pod

    * Datos de volumen

    * Datos del servidor API

      <sup>
        1
      </sup>

    * Datos del administrador del controlador

      <sup>
        1
      </sup>

    * Datos ETCD

      <sup>
        1
      </sup>

    * Datos del programador

      <sup>
        1
      </sup>

    <sup>1</sup> No recopilado en un entorno de Kubernetes administrado (EKS, GKE, AKS, etc.)

    Puede considerar desactivar algunos de los siguientes:

    * Datos del DaemonSet

    * Desplegar datos

    * Datos extremos

    * Datos namespace

    * Datos del conjunto de réplicas

      <sup>
        2
      </sup>

    * Datos de servicio

    * Datos de StatefulSet

    <sup>2</sup> Usado en la alerta predeterminada: "ReplicaSet no tiene la cantidad deseada de pod"

    #### Ejemplo de actualización de estado métrica en manifiesto (despliegue)

    ```shell
    [spec]
      [template]
        [spec]
          [containers]
            [name=kube-state-metrics]
            [args]
            #- --collectors=daemonsets
            #- --collectors=deployments
            #- --collectors=endpoints
            #- --collectors=namespaces
            #- --collectors=replicasets
            #- --collectors=services
            #- --collectors=statefulsets
    ```

    _Ejemplo de actualización de estado métrica en manifiesto (ClusterRole)_

    ```shell
    [rules]
    # - apiGroups: ["extensions", "apps"]
    #   resources:
    #   - daemonsets
    #   verbs: ["list", "watch"]

    # - apiGroups: ["extensions", "apps"]
    #   resources:
    #   - deployments
    #   verbs: ["list", "watch"]

    # - apiGroups: [""]
    #   resources:
    #   - endpoints
    #   verbs: ["list", "watch"]

    # - apiGroups: [""]
    #   resources:
    #   - namespaces
    #   verbs: ["list", "watch"]

    # - apiGroups: ["extensions", "apps"]
    #   resources:
    #   - replicasets
    #   verbs: ["list", "watch"]

    # - apiGroups: [""]
    #   resources:
    #   - services
    #   verbs: ["list", "watch"]

    # - apiGroups: ["apps"]
    #   resources:
    #   - statefulsets
    #   verbs: ["list", "watch"]
    ```

    ### Configurar `lowDataMode` en `nri-bundle` gráfico

    Nuestros gráficos Helm admiten la opción de reducir la cantidad de datos ingeridos a costa de eliminar información detallada. Para habilitarlo, establezca `global.lowDataMode` en `true` en el gráfico `nri-bundle` .

    `lowDataMode` afecta a tres componentes específicos del gráfico `nri-bundle` :

    1. Aumente el intervalo del agente de infraestructura de `15` a `30` segundos.
    2. La integración de Prometheus OpenMetrics excluirá algunas métricas como se indica en el documento Helm a continuación.
    3. Los detalles de las etiquetas y anotaciones se eliminarán del log.

    Puede encontrar más detalles sobre esta configuración en nuestro [documento Helm](/docs/kubernetes-pixie/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#reducedataingest).
  </Collapser>

  <Collapser
    id="on-host-integrations"
    title="Integracion on-host"
  >
    La integración en el host de New Relic representa un conjunto diverso de integración para servicios de terceros como Postgresql, MySQL, Kafka, RabbitMQ, etc. Es imposible proporcionar todas las técnicas de optimización en el alcance de este documento, pero estas técnicas generalmente se aplican:

    * Administrar la frecuencia de muestreo

    * Gestionar aquellas partes de la configuración que pueden aumentar o disminuir la amplitud de la colección.

    * Gestionar aquellas partes de la configuración que permiten una consulta personalizada.

    * Administre el atributo personalizado del agente de infraestructura para aplicarlo a todos los datos de integración en el host.

      Usaremos algunos ejemplos para demostrarlo.

      ### [Integración PostgreSQL](/docs/infrastructure/host-integrations/host-integrations-list/postgresql-monitoring-integration/#example-postgresSQL-collection-config)

      <Callout
        variant="IMPORTANT"
        title="Controladores de crecimiento"
      >
        * Monitor de número de mesas
        * Monitor de número de índices
      </Callout>

      La configuración de integración en el host de PostgreSQL proporciona estas configuraciones ajustables que pueden ayudar a administrar el volumen de datos:

    * `interval`: El valor predeterminado es 15s

    * `COLLECTION_LIST`: lista de tablas para monitor (use TODOS para monitor TODOS)

    * `COLLECT_DB_LOCK_METRICS`: Recoge `dblock` métrica

    * `PGBOUNCER`: Recoge `pgbouncer` métrica

    * `COLLECT_BLOAT_METRICS`: Recoger hinchazón métrica

    * `METRICS`: Establezca en `true` para recopilar solo métrica

    * `INVENTORY`: Establezca en `true` para habilitar solo la recopilación de inventario

    * `CUSTOM_METRICS_CONFIG`: Archivo de configuración que contiene consulta de colección personalizada

      <DNT>
        **Sample config:**
      </DNT>

      ```yaml
      integrations:
        - name: nri-postgresql
          env:
            USERNAME: postgres
            PASSWORD: pass
            HOSTNAME: psql-sample.localnet
            PORT: 6432
            DATABASE: postgres
            COLLECT_DB_LOCK_METRICS: false
            COLLECTION_LIST: '{"postgres":{"public":{"pg_table1":["pg_index1","pg_index2"],"pg_table2":[]}}}'
            TIMEOUT:  10
          interval: 15s
          labels:
            env: production
            role: postgresql
          inventory_source: config/postgresql
      ```

      ### [Integración de kafka](/docs/infrastructure/host-integrations/host-integrations-list/kafka-monitoring-integration/)

      <Callout
        variant="IMPORTANT"
        title="Controladores de crecimiento"
      >
        * Número de corredores en el clúster
        * Número de temas en clúster
      </Callout>

      La configuración de integración en el host de Kafka proporciona estas configuraciones ajustables que pueden ayudar a administrar el volumen de datos:

    * `interval`: El valor predeterminado es 15s

    * `TOPIC_MODE`: Determina cuántos temas recopilamos. Las opciones son `all`, `none`, `list` o `regex`.

    * `METRICS`: Establezca en `true` para recopilar solo métrica

    * `INVENTORY`: Establezca en `true` para habilitar solo la recopilación de inventario

    * `TOPIC_LIST`: Matriz JSON de nombres de temas a monitor. Solo tiene efecto si topic_mode está configurado en lista.

    * `COLLECT_TOPIC_SIZE`: recopile la métrica Tamaño del tema. Las opciones son `true` o `false`, el valor predeterminado es `false`.

    * `COLLECT_TOPIC_OFFSET`:Recopila la métrica de desplazamiento del tema. Las opciones son `true` o `false`, el valor predeterminado es `false`.

      La recopilación de métricas a nivel de tema, especialmente las compensaciones, puede requerir muchos recursos y puede tener un impacto en el volumen de datos. La ingesta de un clúster puede aumentar en un orden de magnitud simplemente agregando nuevos temas de Kafka al clúster.

      ### [Integración de MongoDB](/docs/infrastructure/host-integrations/host-integrations-list/mongodb-monitoring-integration)

      <Callout
        variant="IMPORTANT"
        title="Controladores de crecimiento"
      >
        * Número de monitor de base de datos
      </Callout>

      La integración de MongoDB proporciona estas configuraciones ajustables que pueden ayudar a administrar el volumen de datos:

    * `interval`: El valor predeterminado es 15s

    * `METRICS`: Establezca en `true` para recopilar solo métrica

    * `INVENTORY`: Establezca en `true` para habilitar solo la recopilación de inventario

    * `FILTERS`: un mapa JSON de nombres de bases de datos a una matriz de nombres de colecciones. Si está vacío, el valor predeterminado es toda la base de datos y colecciones.

      Para cualquier integración en el host que utilice, es importante tener en cuenta parámetros como `FILTERS` donde el valor predeterminado es recopilar métricas de toda la base de datos. Esta es un área donde puede utilizar sus prioridades de monitoreo para optimizar los datos recopilados.

      <DNT>
        **Example configuration with different intervals for METRIC and INVENTORY:**
      </DNT>

      ```yaml
      integrations:
        - name: nri-mongodb
          env:
            METRICS: true
            CLUSTER_NAME: my_cluster
            HOST: localhost
            PORT: 27017
            USERNAME: mongodb_user
            PASSWORD: mongodb_password
          interval: 15s
          labels:
            environment: production

        - name: nri-mongodb
          env:
            INVENTORY: true
            CLUSTER_NAME: my_cluster
            HOST: localhost
            PORT: 27017
            USERNAME: mongodb_user
            PASSWORD: mongodb_password
          interval: 60s
          labels:
            environment: production
          inventory_source: config/mongodb
      ```

      ### [Integración de búsqueda elástica](/docs/infrastructure/host-integrations/host-integrations-list/elasticsearch-monitoring-integration)

      <Callout
        variant="IMPORTANT"
        title="Controladores de crecimiento"
      >
        * Número de nodos en el clúster
        * Número de índices en clúster
      </Callout>

      La integración de Elasticsearch proporciona estas configuraciones ajustables que pueden ayudar a administrar el volumen de datos:

    * `interval`: El valor predeterminado es 15s

    * `METRICS`: Establezca en `true` para recopilar solo métrica

    * `INVENTORY`: Establezca en `true` para habilitar solo la recopilación de inventario

    * `COLLECT_INDICES`: Señala si se deben recoger índices métricos o no.

    * `COLLECT_PRIMARIES`: Señala si se debe recoger métrica primaria o no.

    * `INDICES_REGEX`: filtra qué índices se recopilan.

    * `MASTER_ONLY`: Recoge el grupo métrico únicamente en el maestro elegido.

      <DNT>
        **Example configuration with different intervals for `METRICS` and `INVENTORY`:**
      </DNT>

      ```yaml
      integrations:
        - name: nri-elasticsearch
          env:
            METRICS: true
            HOSTNAME: localhost
            PORT: 9200
            USERNAME: elasticsearch_user
            PASSWORD: elasticsearch_password
            REMOTE_MONITORING: true
          interval: 15s
          labels:
            environment: production

        - name: nri-elasticsearch
          env:
            INVENTORY: true
            HOSTNAME: localhost
            PORT: 9200
            USERNAME: elasticsearch_user
            PASSWORD: elasticsearch_password
            CONFIG_PATH: /etc/elasticsearch/elasticsearch.yml
          interval: 60s
          labels:
            environment: production
          inventory_source: config/elasticsearch
      ```

      ### [Integración JMX](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-integration)

      <Callout
        variant="IMPORTANT"
        title="Controladores de crecimiento"
      >
        * Métrica listada en `COLLECTION_CONFIG`
      </Callout>

      La integración JMX es inherentemente genérica. Le permite extraer métrica de cualquier instancia de JMX. Usted tiene control sobre lo que se recopila mediante esta integración. En algunas empresas, los entornos JMX métrica de New Relic representan una proporción relativamente alta de todos los datos recopilados.

      La integración JMX proporciona estas configuraciones ajustables que pueden ayudar a administrar el volumen de datos:

    * `interval`: El valor predeterminado es 15s

    * `METRICS`: Establezca en `true` para recopilar solo métrica

    * `INVENTORY`: Establezca en `true` para habilitar solo la recopilación de inventario

    * `METRIC_LIMIT`: Número de métricas que se pueden recolectar por entidad. Si se excede este límite la entidad no será reportada. Un límite de 0 implica que no hay límite.

    * `LOCAL_ENTITY`: Recoge todas las métricas de la entidad local. Sólo se utiliza cuando se monitorea localhost.

    * `COLLECTION_FILES`: una lista separada por comas de rutas de archivo completas a los archivos de definición de la colección métrica. Para la instalación en el host, el archivo de colección métrica JVM predeterminado está en `/etc/newrelic-infra/integrations.d/jvm-metrics.yml`.

    * `COLLECTION_CONFIG`: configuración de la colección métrica como JSON.

      Son las `COLLECTION_CONFIG` entradas las que más controlan la cantidad de datos ingeridos. Comprender el modelo JMX que está extrayendo le ayudará a optimizar.

      _`COLLECTION_CONFIG` ejemplo para JVM métrica_

      ```java
      COLLECTION_CONFIG='{"collect":[{"domain":"java.lang","event_type":"JVMSample","beans":[{"query":"type=GarbageCollector,name=*","attributes":["CollectionCount","CollectionTime"]},{"query":"type=Memory","attributes":["HeapMemoryUsage.Committed","HeapMemoryUsage.Init","HeapMemoryUsage.Max","HeapMemoryUsage.Used","NonHeapMemoryUsage.Committed","NonHeapMemoryUsage.Init","NonHeapMemoryUsage.Max","NonHeapMemoryUsage.Used"]},{"query":"type=Threading","attributes":["ThreadCount","TotalStartedThreadCount"]},{"query":"type=ClassLoading","attributes":["LoadedClassCount"]},{"query":"type=Compilation","attributes":["TotalCompilationTime"]}]}]}'
      ```

      Omitir cualquier entrada de esa configuración, como `NonHeapMemoryUsage.Init` , tendrá un impacto tangible en el volumen general de datos recopilados.

      _`COLLECTION_CONFIG` ejemplo para Tomcat métrica_

      ```java
      COLLECTION_CONFIG={"collect":[{"domain":"Catalina","event_type":"TomcatSample","beans":[{"query":"type=UtilityExecutor","attributes":["completedTaskCount"]}]}]}
      ```

      ### Otra integración en el host

      Hay muchas otras integraciones en el host con opciones de configuración que te ayudarán a optimizar la recopilación. Algunos de uso común son:

    * [NGINX](/docs/infrastructure/host-integrations/host-integrations-list/nginx/nginx-integration/)

    * [MySQL](/docs/infrastructure/host-integrations/host-integrations-list/mySQL/mysql-integration)

    * [Redis](/docs/infrastructure/host-integrations/host-integrations-list/redis-monitoring-integration)

    * [Apache](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration)

    * [RabbitMQ](/docs/infrastructure/host-integrations/host-integrations-list/rabbitmq-monitoring-integration)

      Este es un buen [punto de partida](/docs/infrastructure/infrastructure-integrations/get-started/introduction-infrastructure-integrations#on-host) para aprender más.
  </Collapser>

  <Collapser
    id="network-performance-monitoring"
    title="Monitoreo del desempeño de la red (NPM)"
  >
    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      Monitorear dispositivos impulsados por:

      * dispositivos configurados duro
      * Alcance de CIDR en la sección de descubrimiento
      * trampas configuradas
    </Callout>

    Esta sección se centra en el monitoreo del rendimiento de la red de New Relic que depende del agente `ktranslate` de Kentik. Este agente es bastante sofisticado y es importante comprender completamente los [documentos de configuración avanzada](/docs/network-performance-monitoring/advanced/advanced-config) antes de realizar esfuerzos importantes de optimización. Las opciones de configuración incluyen:

    * `mibs_enabled`: matriz de todas las MIB activas que sondeará la imagen docker de KTranslate. Esta lista se genera automáticamente durante el descubrimiento si el atributo `discovery_add_mibs` es `true`. Las MIB que no figuran aquí no serán sondeadas en ningún dispositivo en el archivo de configuración. Puede especificar una tabla SNMP directamente en un archivo MIB usando la sintaxis `MIB-NAME.tableName` . Ej: `HOST-RESOURCES-MIB.hrProcessorTable`.

    * `user_tags`: valor principal atributo del par para darle más contexto al dispositivo. La etiqueta en este nivel se aplicará a todos los dispositivos en el archivo de configuración.

    * `devices`: Sección que enumera los dispositivos que se monitorearán para determinar el flujo

    * `traps`: configura IP y puertos para ser monitoreados con capturas SNMP (el valor predeterminado es `127.0.0.1:1162`)

    * `discovery`: configura cómo se puede descubrir el extremo. En esta sección, el siguiente parámetro hará más para aumentar o disminuir el alcance:

      * `cidrs`: matriz de rangos de IP objetivo en [notación CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation).
      * `ports`: matriz de puertos de destino para escanear durante el sondeo SNMP.
      * `debug`: Indica si se debe habilitar el logging de nivel de depuración durante el descubrimiento. De forma predeterminada, está configurado en `false`
      * `default_communities`: matriz de cadenas de comunidad SNMPv1/v2c para escanear durante el sondeo SNMP. Esta matriz se evalúa en orden y el descubrimiento acepta la primera comunidad que pasa.

      Para admitir el filtrado de datos que no crean valor para sus necesidades de observabilidad, puede configurar el mapa de atributos `global.match_attributes.{}` y/o `devices.<deviceName>.match_attributes.{}` .

      Esto proporcionará filtrado a nivel de KTranslate, antes de enviar datos a New Relic, brindándole un control granular sobre el monitoreo de cosas como interfaces.

      Para obtener más detalles, consulte [Configuración de monitoreo del rendimiento de la red](/docs/network-performance-monitoring/advanced/advanced-config/#match_attributes-attribute).
  </Collapser>

  <Collapser
    id="log-forwarders"
    title="Reenviador de log"
  >
    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      * Log reenviado
      * Tamaño promedio de los log de avance
    </Callout>

    Log representa una de las fuentes de telemetría más flexibles, ya que normalmente enrutamos el log a través de una capa de reenvío dedicada con sus propias reglas de enrutamiento y transformación. Debido a que existe una variedad de reenviadores, nos centraremos en los más utilizados:

    * APM language agente (versiones recientes)

    * Fluentd

    * Fluentbit

    * Agente New Relic Infrastructure (Fluentbit integrado)

    * Logstash

      ### Muestreo log del agente APM

      Las versiones recientes del agente de lenguaje de New Relic pueden reenviar logs directamente a New Relic. Es posible que desee controlar algunos límites de cuán grandes pueden ser los picos de logging de cada instancia del agente APM.

      Puede habilitar el muestreo con la variable de entorno `NEW_RELIC_APPLICATION_LOGGING_FORWARDING_MAX_SAMPLES_STORED` y configurarlo proporcionando la cantidad máxima de logs que almacenará la cola de logging del agente APM. Opera en base a una cola de prioridad personalizada y otorga prioridad a todos los mensajes de log. Los logs que ocurren dentro de una transacción obtienen la prioridad de la transacción.

      La cola de log se ordena según la prioridad y cuándo llega el log . La prioridad más alta va primero y, si es necesario, el log más reciente tiene prioridad. Los logs se agregan individualmente a la cola (los pares en una transacción) y, al alcanzar el límite, el log al final de la cola se elimina a favor del log más nuevo.

      En la sección de recursos a continuación, hay un [dashboard de inicio rápido](https://onenr.io/0Bj3BlEZkRX) que le ayuda a realizar un seguimiento del volumen log de una manera sencilla. El seguimiento del volumen log le permitirá ajustar o desactivar la frecuencia de muestreo para satisfacer sus necesidades de observabilidad.

      ### Configurando filtros en Fluentd o Fluentbit

      La mayoría de los reenviadores generales proporcionan un [flujo de trabajo de enrutamiento](https://docs.fluentd.org/configuration/routing-examples) bastante completo que incluye filtrado y transformación. Nuestro agente de infraestructura proporciona patrones muy simples para filtrar logs no deseados.

      Expresión regular para filtrar registros. Solo se admite para las fuentes `tail`, `systemd`, `syslog` y `tcp` (solo con formato `none`). Este campo funciona de forma similar a `grep -E` en sistemas Unix. Por ejemplo, para un archivo determinado que se está capturando, puede filtrar los registros que contengan `WARN` o `ERROR` usando:

      ```yaml
        - name: only-records-with-warn-and-error
          file: /var/log/logFile.log
          pattern: WARN|ERROR
      ```

      Si tiene configuraciones de Fluentd preescritas para Fluentbit que realizan filtrado o análisis valiosos, puede importarlas a nuestra configuración de logging. Para hacer esto, use el parámetro `config_file` y `parsers` en cualquier archivo `.yaml` en su carpeta `logging.d` :

    * `config_file`: ruta a un archivo de configuración de Fluent Bit existente. Cualquier fuente superpuesta da como resultado mensajes duplicados en

      <InlinePopover type="logs"/>

      de New Relic.

    * `parsers_file`: ruta a un archivo de analizadores Fluent Bit existente.

      Los siguientes nombres de analizadores están reservados: `rfc3164`, `rfc3164-local` y `rfc5424`.

      Aprender cómo inyectar un atributo o etiqueta en su log en su canal de datos y realizar transformaciones puede ayudar con la eliminación de características posteriores utilizando las reglas de eliminación de New Relic. Al aumentar su log con metadatos sobre la fuente, podemos tomar decisiones centralizadas y reversibles sobre qué colocar en el backend. Como mínimo, asegúrese de que el siguiente atributo esté presente en su log de alguna forma:

    * Equipo

    * Entorno (desarrollo/etapa/producción)

    * Aplicación

    * Centro de datos

    * Nivel de Log

      A continuación se muestran algunos recursos detallados de enrutamiento y filtrado:

    * [Patrones comunes de filtrado y enrutamiento en Fluentd](https://docs.fluentd.org/configuration/routing-examples)

    * [Tubería de datos de Fluentbit](https://docs.fluentbit.io/manual/concepts/data-pipeline)

    * [Reenvío de logs con el agente New Relic Infrastructure](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/)

      ### Ajustar el conjunto de atributos predeterminado del agente de infraestructura

      El agente de infraestructura agrega algún atributo de forma predeterminada, incluida cualquier etiqueta personalizada agregada al host. Es posible que su configuración incluya muchas más que eso, incluida una gran cantidad de etiquetas de AWS, que aparecen en New Relic con el formulario `aws.[attributename]`. Estos atributos son importantes, por lo que se recomienda encarecidamente que evalúe sus necesidades de visualización, análisis y alertas en relación con cualquier cambio de configuración planificado. Por ejemplo, el log de un clúster de Kubernetes probablemente no será útil sin metadatos como:

    * `cluster_name`

    * `pod_name`

    * `container_name`

    * `node_name`
  </Collapser>

  <Collapser
    id="prometheus-metrics-sources"
    title="Fuentes métricas de Prometheus"
  >
    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      * Número de métricas exportadas desde aplicaciones
      * Número de métricas transferidas vía escritura remota o POMI
    </Callout>

    New Relic ofrece dos opciones principales para enviar Prometheus métrica a New Relic. Las mejores prácticas para gestionar la ingesta métrica se centran principalmente en la segunda opción, la integración de Prometheus OpenMetrics (POMI), porque este componente fue creado por New Relic.

    ### Opción 1: [integración de escritura remota de Prometheus](/docs/integrations/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration)

    Para conocer las opciones de configuración de extracción del servidor Prometheus, consulte [los documentos de configuración de Prometheus](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config). Estas configuraciones de scrape determinan qué métricas recopila el servidor Prometheus. Al configurar el parámetro [`remote_write`](/docs/integrations/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration) , puede escribir la métrica recopilada en la base de datos de New Relic (NRDB) a través de la API de métrica de New Relic.

    ### Opción 2: [integración de Prometheus OpenMetrics (POMI)](/docs/integrations/prometheus-integrations/install-configure-openmetrics/install-update-or-uninstall-your-prometheus-openmetrics-integration)

    POMI es una integración independiente que extrae métrica del extremo Prometheus tanto dinámico como estático. Luego, POMI envía estos datos a NRDB a través de la API métrica de New Relic. Esta integración es ideal para clientes que actualmente no ejecutan el servidor Prometheus.

    #### POMI: etiqueta raspada

    POMI descubrirá cualquier extremo de Prometheus que contenga la etiqueta o anotación `prometheus.io/scrape=true` de forma predeterminada. Esto puede ser una gran cantidad de extremos y, por lo tanto, una gran cantidad de métricas ingeridas, dependiendo de lo que se despliegue en el grupo.

    Se sugiere modificar el parámetro `scrape_enabled_label` a algo personalizado (p. ej. `newrelic/scrape`), y que etiquete selectivamente el extremo de Prometheus cuando la ingesta de datos sea de suma preocupación.

    Para obtener la configuración de referencia más reciente, consulte [nri-prometheus-latest.yaml](https://download.newrelic.com/infrastructure_agent/integrations/kubernetes/nri-prometheus-latest.yaml).

    <DNT>
      **POMI config parameter:**
    </DNT>

    ```yaml
    # Label used to identify scrapable targets. 
    # Defaults to "prometheus.io/scrape"
      scrape_enabled_label: "prometheus.io/scrape"
    ```

    POMI descubrirá cualquier extremo de Prometheus expuesto a nivel de nodo de forma predeterminada. Esto generalmente incluye métricas provenientes de Kubelet y cAdvisor. Si está ejecutando New Relic Kubernetes Daemonset, es importante que configure `require_scrape_enabled_label_for_nodes: true` para que POMI no recopile métricas duplicadas.

    Para conocer el objetivo final de New Relic Kubernetes Daemonset, consulte [nuestro README de Kubernetes en GitHub](https://github.com/newrelic/nri-kubernetes/blob/main/README.md).

    #### POMI: etiqueta raspada para nodos

    POMI descubrirá cualquier extremo de Prometheus expuesto a nivel de nodo de forma predeterminada. Esto generalmente incluye métricas provenientes de Kubelet y cAdvisor. Si está ejecutando New Relic Kubernetes Daemonset, es importante que configure `require_scrape_enabled_label_for_nodes: true` para que POMI no recopile métricas duplicadas.

    Para conocer el objetivo final de New Relic Kubernetes Daemonset, consulte [nuestro README de Kubernetes en GitHub](https://github.com/newrelic/nri-kubernetes/blob/main/README.md).

    _Parámetro de configuración POMI_

    ```yaml
    # Whether k8s nodes need to be labeled to be scraped or not. 
    # Defaults to false.
      require_scrape_enabled_label_for_nodes: false
    ```

    #### POMI: coexistiendo con `nri-kubernetes`

    [La integración de Kubernetes](/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration) de New Relic recopila una [cantidad de métricas](/docs/integrations/kubernetes-integration/understand-use-data/find-use-your-kubernetes-data#metrics) listas para usar. Sin embargo, no recopila todas las métricas posibles disponibles de un clúster de Kubernetes.

    En la configuración de POMI, verá una sección similar a esta que recopilará <DNT>**disable**</DNT> métricas para un subconjunto de métricas que la integración de New Relic Kubernetes ya está recopilando de <DNT>**Kube State Metrics**</DNT>.

    También es muy importante configurar `require_scrape_enabled_label_for_node: true` para que Kubelet y cAdvisor métrica no se dupliquen.

    <DNT>
      **POMI config parameters:**
    </DNT>

    ```yaml
      transformations:
        - description: "Uncomment if running New Relic Kubernetes integration"
          ignore_metrics:
            - prefixes:
              - kube_daemonset_
              - kube_deployment_
              - kube_endpoint_
              - kube_namespace_
              - kube_node_
              - kube_persistentvolume_
              - kube_persistentvolumeclaim_
              - kube_pod_
              - kube_replicaset_
              - kube_service_
              - kube_statefulset_

    ```

    #### POMI: configuración de solicitud/límite

    Al ejecutar POMI, se recomienda aplicar los siguientes [límites de recursos](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/) para el clúster que genera aproximadamente 500k DPM:

    * Límite de CPU: 1 núcleo (1000 m)
    * Límite de memoria: 1Gb 1024 (1G)

    Debe configurar la solicitud de recursos para CPU y memoria para proporcionar a POMI suficientes recursos del clúster. Establecer esto en algo extremadamente bajo (p. ej. CPU: 50 m) puede provocar que los "vecinos ruidosos" consuman los recursos del clúster.

    <DNT>
      **POMI config parameter:**
    </DNT>

    ```yaml
    spec:
      serviceAccountName: nri-prometheus
      containers:
      - name: nri-prometheus
        image: newrelic/nri-prometheus:2.2.0
        resources:
          requests:
            memory: 512Mi
            cpu: 500m
          limits:
            memory: 1G
            cpu: 1000m
    ```

    ### POMI: estimación de DPM y cardinalidad

    Aunque la cardinalidad no está asociada directamente con la facturación por ingesta de GB, New Relic mantiene ciertos límites de velocidad en cardinalidad y puntos de datos por minuto. Poder visualizar la cardinalidad y el DPM de un clúster de Prometheus puede ser muy importante.

    <Callout variant="tip">
      Las cuentas New Relic tienen un límite de 1 millón de DPM y 1 millón de cardinalidad, pero puedes solicitar hasta 15 millones de DPM y 15 millones de cardinalidad. Para solicitar cambios, comuníquese con su representante de cuenta de New Relic. Para obtener más información, consulte [Límites API métricos](/docs/data-apis/ingest-apis/metric-api/metric-api-limits-restricted-attributes).
    </Callout>

    Si ya está ejecutando Prometheus Server, puede ejecutar estimaciones de cardinalidad y DPM antes de habilitar POMI o `remote_write`.

    <DNT>
      **Data points per minute (DPM):**
    </DNT>

    ```promql
    rate(prometheus_tsdb_head_samples_appended_total[10m]) * 60
    ```

    <DNT>
      **Top 20 metrics (highest cardinality):**
    </DNT>

    ```promql
    topk(20, count by (<DNT>**name**</DNT>, job)({__name__=~".+"}))
    ```
  </Collapser>

  <Collapser
    id="cloud-integration"
    title="Integracion en la nube"
  >
    <Callout
      variant="IMPORTANT"
      title="Controladores de crecimiento"
    >
      * Número de métricas exportadas por integración
      * Frecuencia de sondeo (para integración basada en sondeo)
    </Callout>

    Algunas integraciones de New Relic en la nube obtienen datos de las API de los proveedores de la nube. Con esta implementación, los datos se recopilan de las API de monitoreo como AWS CloudWatch, el monitoreo de Azure y GCP Stackdriver, y los metadatos del inventario se recopilan de las API de los servicios específicos.

    Otras integraciones en la nube obtienen sus datos de streaming métrico (o métrico "empujado") que se envían a través de un servicio de streaming como AWS Kinesis.

    ### Integración basada en API de sondeo

    Si desea reportar más o menos datos de su integración en la nube, o si necesita controlar el uso de las API de los proveedores de la nube para evitar alcanzar la tasa límite y los límites de aceleración en su cuenta de la nube, puede cambiar los ajustes de configuración. modificar la cantidad de datos que reportan. Los dos controles principales son:

    * [Cambiar la frecuencia de las encuestas](/docs/infrastructure/infrastructure-integrations/cloud-integrations/configure-polling-frequency-data-collection-cloud-integrations/#polling)

    * [Cambiar los datos que se informan](/docs/infrastructure/infrastructure-integrations/cloud-integrations/configure-polling-frequency-data-collection-cloud-integrations/#filter-data)

      Ejemplos de razones comerciales para querer cambiar la frecuencia de las encuestas incluyen:

    * <DNT>
        **Billing**
      </DNT>

      : Si necesita administrar su factura de AWS CloudWatch, es posible que desee disminuir la frecuencia de sondeo. Antes de hacer esto, asegúrese de que cualquier condición de alerta establecida para su integración en la nube no se vea afectada por esta reducción.

    * <DNT>
        **New services**
      </DNT>

      : Si está implementando un nuevo servicio o configuración y desea recopilar datos con más frecuencia, es posible que desee aumentar la frecuencia de sondeo temporalmente.

      <Callout variant="caution">
        Cambiar los ajustes de configuración de su integración puede afectar la condición de alerta y las tendencias de los gráficos.
      </Callout>

      Para obtener más detalles, consulte [Configurar el sondeo](/docs/infrastructure/infrastructure-integrations/cloud-integrations/configure-polling-frequency-data-collection-cloud-integrations).

      ### "Streaming" o "empujado" métrica

      Cada vez más integración en la nube ofrecen la opción de enviar datos a través de un [servicio de streaming](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream) en lugar de utilizar el sondeo API, lo que reduce drásticamente la latencia. Un problema que algunos usuarios han observado es que no es tan fácil controlar el volumen porque no se puede configurar la frecuencia de muestreo.

      Las reglas de New Relic para eliminar datos son la forma principal de filtrar la transmisión métrica con un volumen demasiado alto. Sin embargo, hay algunas cosas que puede hacer por parte del proveedor de la nube para ayudar a limitar el volumen de transmisión.

      Por ejemplo, en AWS es posible utilizar claves de condición para [limitar el acceso a los espacios de nombres de CloudWatch\*](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-namespace.html).

      La siguiente política limita al usuario a publicar métricas únicamente en el namespace denominado `MyCustomNamespace`:

      ```json
      {
          "Version": "2012-10-17",
          "Statement": {
              "Effect": "Allow",
              "Resource": "*",
              "Action": "cloudwatch:PutMetricData",
              "Condition": {
                  "StringEquals": {
                      "cloudwatch:namespace": "MyCustomNamespace"
                  }
              }
          }
      }
      ```

      La siguiente política permite al usuario publicar métricas en cualquier namespace excepto `CustomNamespace2`:

      ```json
      {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Effect": "Allow",
                  "Resource": "*",
                  "Action": "cloudwatch:PutMetricData"
              },
              {
                  "Effect": "Deny",
                  "Resource": "*",
                  "Action": "cloudwatch:PutMetricData",
                  "Condition": {
                      "StringEquals": {
                          "cloudwatch:namespace": "CustomNamespace2"
                      }
                  }
              }
          ]
      }
      ```
  </Collapser>
</CollapserGroup>

## Optimizar con reglas de eliminación [#optimize-with-drop-rules]

Una regla sencilla para comprender lo que puede hacer con las reglas de eliminación es: <DNT>**If you can query it you can drop it.**</DNT> Las reglas de filtro de eliminación le ayudan a lograr varios objetivos importantes:

* Reduzca los costos almacenando solo el log relevante para su cuenta.
* Proteja la privacidad y la seguridad eliminando la información de identificación personal (PII).
* Reduzca el ruido eliminando eventos y atributos irrelevantes.

<Callout variant="tip">
  Al crear reglas de eliminación, usted es responsable de garantizar que las reglas identifiquen y descarten con precisión los datos que cumplan con las condiciones que haya establecido. También eres responsable de monitorear la regla, así como los datos que revelas a New Relic. Siempre pruebe y vuelva a probar su consulta y, después de instalar la regla de caída, asegúrese de que funcione según lo previsto. Será útil crear un dashboard para monitor sus datos antes y después de la caída.
</Callout>

A continuación se ofrecen algunas pautas para utilizar reglas de eliminación para optimizar la ingesta de datos para herramientas específicas:

<CollapserGroup>
  <Collapser
    id="logs"
    title="Logs"
  >
    Todas las reglas de caída de New Relic se implementan mediante el mismo modelo de datos de backend y API. Nuestra administración de logs proporciona una potente UI que facilita la creación y monitor de reglas de eliminación.

    Anteriormente, en esta serie de tutoriales, cubrimos la priorización de la telemetría ejecutando algunos ejercicios para mostrar formas en las que podríamos desaprobar ciertos datos. Revisemos este ejemplo:

    ```
    Omit debug logs (knowing they can be turned on if there is an issue) (saves 5%)
    ```

    #### Método 1: [log UI](/docs/logs/ui-data/drop-data-drop-filter-rules)

    * Identifique el log que nos interesa mediante un filtro en la log UI: `level: DEBUG`.

    * Asegúrese de que encuentre el log que queremos eliminar.

    * Verifique alguna sintaxis alternativa como `level:debug` y `log_level:Debug`. Estas variaciones son comunes.

    * En

      <DNT>
        **Manage data**
      </DNT>

      , haga clic en

      <DNT>
        **Drop filters**
      </DNT>

      y cree y habilite un filtro denominado "Eliminar log de depuración".

    * Verifique que la regla funcione.

    #### Método 2: [nuestra API NerdGraph](/docs/data-apis/manage-data/drop-data-using-nerdgraph/)

    * Cree la consulta NRQL relevante:

      ```sql
      SELECT count(*) FROM Log WHERE `level` = 'DEBUG'
      ```

    * Asegúrese de que encuentre el log que desea eliminar.

    * Verifique las variaciones en el nombre y el valor del atributo (`Debug` vs `DEBUG`).

    * Ejecute la siguiente declaración NerdGraph y asegúrese de que funcione:

    ```graphql
    mutation {
        nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
            {
                action: DROP_DATA
                nrql: "SELECT * FROM Log WHERE `level` = 'DEBUG'"
                description: "Drops DEBUG logs.  Disable if needed for troubleshooting."
            }
        ])
        {
            successes { id }
            failures {
                submitted { nrql }
                error { reason description }
            }
        }
    }
    ```
  </Collapser>

  <Collapser
    id="process-samples"
    title="Muestras de proceso"
  >
    Implementemos la recomendación: `Drop process sample data in DEV environments`.

    * Cree la consulta relevante:

      ```sql
      SELECT * FROM ProcessSample WHERE `env` = 'DEV'
      ```

    * Asegúrese de que encuentre las muestras de proceso que queremos eliminar.

    * Busque otras variaciones de `env` , como `ENV` y `Environment`.

    * Busque varios de `DEV` como `Dev` y `Development`.

    * Utilice nuestra API NerdGraph para ejecutar la siguiente declaración y asegúrese de que funcione:

      ```graphql
      mutation {
          nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
              {
                  action: DROP_DATA
                  nrql: "SELECT * FROM ProcessSample WHERE `env` = 'DEV'"
                  description: "Drops ProcessSample from development environments"
              }
          ])
          {
              successes { id }
              failures {
                  submitted { nrql }
                  error { reason description }
              }
          }
      }
      ```
  </Collapser>

  <Collapser
    id="cloud-metrics"
    title="Nube métrica"
  >
    A menudo puedes reducir el uso de datos reduciendo los datos con cobertura redundante. Por ejemplo: en un entorno donde tiene la integración de AWS RDS ejecutándose, así como una de las integraciones de New Relic en el host que monitor la base de datos SQL como `nri-mysql` o `nri-postgresql`, es posible que pueda descartar algunas superposiciones. métrica.

    Por ejemplo, puede ejecutar una consulta como esta:

    ```sql
    FROM Metric select count(*) where metricName like 'aws.rds%' facet metricName limit max
    ```

    Eso mostrará todos los `metricName` valores que coinciden con el patrón.

    Puedes ver en los resultados que hay un gran volumen de métrica del patrón `aws.rds.cpu%`. Puedes eliminarlos porque tienes otra instrumentación para ellos:

    * Cree la consulta relevante:

      ```sql
      FROM Metric select * where metricName like 'aws.rds.cpu%' facet metricName limit max since 1 day ago
      ```

    * Asegúrese de que encuentre las muestras de proceso que desea descartar.

    * Utilice la API NerdGraph para ejecutar la siguiente declaración y asegúrese de que funcione:

      ```graphql
      mutation {
          nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
              {
                  action: DROP_DATA
                  nrql: "FROM Metric select * where metricName like 'aws.rds.cpu%' facet metricName limit max since 1 day ago"
                  description: "Drops rds cpu related metrics"
              }
          ])
          {
              successes { id }
              failures {
                  submitted { nrql }
                  error { reason description }
              }
          }
      }
      ```
  </Collapser>

  <Collapser
    id="drop-specific-attributes"
    title="Soltar atributo específico"
  >
    Una cosa importante acerca de las reglas de eliminación es que puede configurar una regla que elimine un atributo específico pero mantenga la integridad del resto de los datos. Úselo para eliminar datos privados de NRDB o para eliminar atributos excesivamente grandes, como rastreo del stack o grandes fragmentos de JSON en registros de log excesivamente grandes.

    Para establecer estas reglas de eliminación, cambie el campo `action` a `DROP_ATTRIBUTES` en lugar de `DROP_DATA`.

    ```graphql
    mutation {
        nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
            {
                action: DROP_ATTRIBUTES
                nrql: "SELECT stack_trace, json_data FROM Log where appName='myApp'"
                description: "Drops large fields from logs for myApp"
            }
        ])
        {
            successes { id }
            failures {
                submitted { nrql }
                error { reason description }
            }
        }
    }
    ```
  </Collapser>

  <Collapser
    id="drop-random-sample-of-events"
    title="Soltar muestra aleatoria de evento"
  >
    <Callout variant="caution">
      Utilice este enfoque con cuidado y sólo en situaciones en las que no haya otras opciones, ya que puede alterar las conclusiones de sus datos. Sin embargo, para eventos con un tamaño de muestra enorme, es posible que esté satisfecho con solo una parte de sus datos siempre que comprenda las consecuencias.
    </Callout>

    En este ejemplo, puede aprovechar la distribución relativa de ciertos ID de traza para aproximar el muestreo aleatorio. Puede utilizar el operador `rlike` para comprobar los valores principales del atributo `trace.id` de un intervalo. El siguiente ejemplo podría reducir aproximadamente el 25 % de los intervalos:

    ```sql
    SELECT * FROM Span WHERE trace.id rlike r'.*[0-3]' and appName = 'myApp'
    ```

    Las expresiones útiles incluyen:

    * `r'.*0'` se aproxima al 6,25%

    * `r'.*[0-1]'` se aproxima al 12,5%

    * `r'.*[0-2]'` se aproxima al 18,75%

    * `r'.*[0-3]'` se aproxima al 25,0%

      Después de quedarte sin dígitos, puedes usar letras, por ejemplo:

    * `r'.*[a0-9]'` se aproxima al 68,75%

    * `r'.*[a-b0-9]'` aproximadamente 75,0%

      Aquí hay un ejemplo de una mutación completa:

      ```graphql
      mutation {
          nrqlDropRulesCreate(accountId: YOUR_ACCOUNT_ID, rules: [
              {
                  action: DROP_DATA
                  nrql: "SELECT * FROM Span WHERE trace.id rlike r'.*[0-3]' and appName = 'myApp'"
                  description: "Drops approximately 25% of spans for myApp"
              }
          ])
          {
              successes { id }
              failures {
                  submitted { nrql }
                  error { reason description }
              }
          }
      }
      ```

      <Callout variant="tip">
        Dado que los `trace.id`son números hexadecimales, cada carácter de `trace.id` es un valor de `0123456789abcdef`. Cada carácter que agregue al patrón `RLIKE` coincidirá con 1/16 adicional de las filas en el evento de extensión, suponiendo que los caracteres finales tengan una distribución uniforme. Si agrega letras más allá de la F que no se usan en hexadecimal, los dígitos agregados no afectarán el porcentaje coincidente.
      </Callout>
  </Collapser>

  <Collapser
    id="other-events-and-metrics"
    title="Otros eventos y métricas"
  >
    Los ejemplos anteriores deberían mostrarle todo lo que necesita saber para utilizar estas técnicas en cualquier otro evento o métrica en NRDB. Recuerda: si puedes consultarlo puedes dejarlo. Comuníquese con nosotros si tiene preguntas sobre la forma precisa de estructurar una consulta para una regla de eliminación.
  </Collapser>
</CollapserGroup>

### ¿Que sigue? [#whats-next]

Una vez completado el paso de optimización, ¡ha terminado el tutorial de optimización telemetry data ! Si su cuenta tiene un ejecutivo de cuenta, puede comunicarse con él para obtener más orientación sobre dónde ir a continuación y asegurarse de que esté optimizado.

Si es nuevo en la plataforma New Relic, puede visitar nuestra otra serie de tutoriales para obtener más información sobre cómo optimizar su sistema usando nuestra plataforma:

* [Responder a cortes de servicio](/docs/tutorial-errors/respond-outages/)
* [Gestionar grandes cantidades de logs](/docs/tutorial-large-logs/get-started-managing-large-logs/)
* [Preparándose para la demanda máxima](/docs/tutorial-peak-demand/get-started/)
* [Crear y gestionar alerta](/docs/tutorial-create-alerts/create-new-relic-alerts/)
