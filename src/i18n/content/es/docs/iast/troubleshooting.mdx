---
title: IAST resolución de problemas
tags:
  - IAST
  - New Relic IAST
  - Troubleshooting
metaDescription: Find out how to solve your New Relic IAST issues.
freshnessValidatedDate: never
translationType: machine
---

Este es el primer paso para diagnosticar usted mismo su problema IAST de New Relic; utilice esta guía para resolver los problemas rápidamente.

Si no encuentra su problema en la lista aquí, siempre puede comunicarse con [el soporte de New Relic](https://support.newrelic.com).

<CollapserGroup>
  <Collapser
    id="iast-results"
    title="¿Dónde encuentro los resultados del IAST?"
  >
    Vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com) > All capabilities > IAST > Tests**</DNT>. Haga clic en una aplicación para verificar la eficiencia de las pruebas de la aplicación, las vulnerabilidades, las API cubiertas y las llamadas a métodos, entre otros datos.
  </Collapser>

  <Collapser
    id="security-agent-working"
    title="No estoy seguro de que el agente de seguridad esté funcionando."
  >
    IAST requiere reiniciar la aplicación después de habilitarla.
  </Collapser>

  <Collapser
    id="see-vulnerabilities"
    title="No veo vulnerabilidades en IAST"
  >
    Si se trata de una aplicación nueva, el firewall podría impedir que se comunique con la plataforma NR. Consulte la sección de estadísticas del servicio en el archivo con la última timestamp en `nr-security-home/logs/snapshots`. Los 6 elementos de esa lista deberían decir OK. Si no es así, revise el registro para obtener información adicional o comuníquese con [el soporte de New Relic](https://support.newrelic.com). También puede consultar la [documentación estándar del firewall](/docs/new-relic-solutions/get-started/networks/).

    Si puede ver su aplicación en la UI de New Relic y el agente de seguridad inició IAST correctamente, pero no ve vulnerabilidades en la UI, verifique lo siguiente:

    * El nivel de eficiencia de su aplicación: vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com) > All capabilities > IAST > Tests**</DNT>. Busque su aplicación y consulte la sección de resumen. Si la cobertura IAST es baja para su aplicación, agregue casos de prueba adicionales a su aplicación para obtener un mayor nivel de eficiencia de prueba.

    * La cobertura de IAST: vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com) > All capabilities > IAST > Tests**</DNT>. Busque su aplicación y haga clic en ella. En la sección de resumen, verifique si la cobertura del análisis IAST es alta y no se detectan vulnerabilidades, eso significa que su aplicación es segura.

    * Framework de su aplicación o la categoría de vulnerabilidades no son compatibles.

      Si después de verificar esto, aún no ve vulnerabilidades en IAST, comuníquese con [el soporte de New Relic](https://support.newrelic.com/s/).
  </Collapser>

  <Collapser
    id="see-my-application"
    title="No veo mi aplicación en IAST"
  >
    Si no ve su aplicación en <DNT>**[one.newrelic.com](https://one.newrelic.com) > All capabilities > IAST > Tests**</DNT>, verifique lo siguiente:

    * Su aplicación está en funcionamiento: consulte el proceso de aplicación o la [página APM y servicios](/docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/advanced-techniques/view-events-their-products#products).
    * El registro de la aplicación para saber si hay algún problema.
    * La versión de su agente APM y actualícela si es necesario.
    * El archivo de configuración `newrelic.yml` incluye la modificación del parámetro como se indica en la [página de instalación](/docs/iast/install).
    * Vaya al directorio `nr-security-home/logs` y busque la línea `[SETP-8]` en el archivo `LANGUAGE-security-collector-init.log` . Verifique si hay un error inesperado y sepa qué falló.
    * La aplicación tiene tráfico. Genere algo de tráfico para permitir que IAST pruebe su aplicación.
    * El certificado TLS es correcto.
    * Se admite framework o la categoría de vulnerabilidades de su aplicación.
  </Collapser>

  <Collapser
    id="agent-working"
    title="No estoy seguro si el agente de seguridad funciona."
  >
    <Callout variant="important">
      Si está utilizando [el modo de alta seguridad de APM](/docs/apm/agents/manage-apm-agents/configuration/high-security-mode/), el agente no funcionará.

      Para desactivarlo, debe comunicarse con [el soporte de New Relic](https://support.newrelic.com/s/).
    </Callout>

    Cuando el agente de seguridad está funcionando correctamente:

    * Verá su aplicación en <DNT>**[one.newrelic.com](https://one.newrelic.com) > All capabilities > IAST > Tests**</DNT>. La aplicación se inicia y se genera tráfico.

    * En el directorio `nr-security-home/logs` , busque el archivo `LANGUAGE-security-collector-init.log` . Reemplace `LANGUAGE` en el nombre del archivo con el que está utilizando. Busque estos pasos para ver dónde está el problema:

      * \[PASO-1]: El agente de seguridad se está iniciando.
      * \[PASO-2]: El agente de seguridad genera un identificador único. Para la conexión de socket web, verá los encabezados de autenticación de nodo.
      * \[PASO-3]: El agente de seguridad recopila información sobre su aplicación.
      * \[PASO-4]: La conexión del socket web al validador SaaS se establece correctamente.
      * \[PASO-5]: Se iniciaron los subprocesos del agente de seguridad.
      * \[PASO-6]: La instrumentación de la aplicación es exitosa.
      * \[PASO-7]: La aplicación recibe y aplica sus políticas y configuración.
      * \[PASO-8]: Ve un primer evento enviado para validación, lo que significa que el agente de seguridad se inició correctamente.

      A continuación se muestra un extracto del archivo de registro `LANGUAGE-security-collector-init.log` del agente de seguridad:

      ```
      Init Log File initiated.
      Init Logger configured successfully with level: INFO and rollover on max size 52428800.
      2023-05-26 10:45:02 :  [8] [New Relic RPM Connection Service] INFO : com.newrelic.api.agent.security.Agent - [STEP-1] => Security agent is starting
      2023-05-26 10:45:02 :  [8] [New Relic RPM Connection Service] INFO : com.newrelic.agent.security.AgentInfo - [STEP-2] => Generating unique identifier: 8a6d79c3-ad67-35d6-b811-17f7515b7f29
      2023-05-26 10:45:02 :  [8] [New Relic RPM Connection Service] INFO : com.newrelic.api.agent.security.Agent - [STEP-3] => Gathering information about the application
      ```
  </Collapser>

  <Collapser
    id="be-sure-iast-working"
    title="No estoy seguro de que IAST esté funcionando"
  >
    Puede comprobar si IAST está funcionando, incluso si ve su aplicación en la UI de IAST y el agente de seguridad se inició correctamente. Siga estos pasos para comprobarlo:

    1. Vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com) > All capabilities > IAST > Tests**</DNT>.

    2. Busque su aplicación en la pestaña <DNT>**Application tests**</DNT> y haga clic en ella.

    3. Vea los detalles de la prueba, incluidos <DNT>**APIs covered**</DNT>, <DNT>**methods calls**</DNT> y <DNT>**application testing efficiency**</DNT>.

       Además, si establece el nivel de registros en <DNT>**debug/finest**</DNT>, puede buscar <DNT>**Fuzz request received**</DNT> en el archivo `nr-security-home/logs/java-security-collector.log` . Esto muestra que el análisis IAST está en progreso.
  </Collapser>

  <Collapser
    id="looking-for-vulns"
    title="No estoy seguro de que IAST esté buscando vulnerabilidades"
  >
    IAST comienza a realizar pruebas cuando detecta que hay tráfico, así que verifique si su aplicación funciona o tiene tráfico dirigido a ella. Realice la UI de la aplicación o los extremos de API.
  </Collapser>

  <Collapser
    id="tested-app"
    title="Probé una aplicación con vulnerabilidades conocidas, pero IAST no la encontró"
  >
    Estas pueden ser las razones por las que IAST no detecta vulnerabilidades conocidas:

    * IAST no es compatible con framework de la aplicación.
    * No hay instrumentación para el módulo.
  </Collapser>

  <Collapser
    id="stability-issues"
    title="Tengo problemas de estabilidad de la aplicación"
  >
    Es posible que su aplicación muestre mucho tráfico y latencia durante algún tiempo como parte de IAST. Esto debería resolverse en unos minutos cuando finalice la prueba IAST.

    También puede consultar el archivo de registro instantáneo en la carpeta `nr-security-home/logs/snapshots` . El archivo de registro le muestra el estado del agente de seguridad, el uso de recursos y los últimos cinco errores.
  </Collapser>

  <Collapser
    id="unknown-files"
    title="Veo archivos y directorios desconocidos en el directorio de mi aplicación"
  >
    Si su aplicación tiene la funcionalidad para crear archivos y directorios como parte de atender una solicitud HTTP, IAST intentará probar la ruta del código y, por lo tanto, creará dichos archivos y directorios. El código de la aplicación, bajo la influencia de las solicitudes HTTP entrantes, crea estos archivos. El agente no puede eliminarlos.

    Si está seguro de que ninguna de sus API puede crear archivos y directorios, comparta la configuración de su aplicación e inicie sesión con [New Relic Support](https://support.newrelic.com).
  </Collapser>

  <Collapser
    id="not-responding"
    title="Mi aplicación no responde o falla"
  >
    Como parte de IAST, el agente de seguridad envía nuevas solicitudes a la aplicación que aumentan la carga, lo que resulta en un aumento de la utilización de recursos. Este análisis IAST también puede exponer errores o excepciones no detectados en su aplicación.

    Si la aplicación falló debido a la falta de recursos, aumente los recursos, reinicie la aplicación y realice IAST nuevamente.
  </Collapser>

  <Collapser
    id="query-vulns-nrdb"
    title="¿Puedo consultar todas las vulnerabilidades de la aplicación desde NRDB?"
  >
    Puede actualizar el `appId` en la consulta siguiente y ejecutarlo en el generador de consultas para encontrar todas las vulnerabilidades reportadas para su aplicación.

    ```sql
    SELECT * FROM Vulnerability WHERE issueType = 'Application Vulnerability' AND appId = '{your application's appId}'
    ```
  </Collapser>

  <Collapser
    id="false-positive"
    title="Veo una vulnerabilidad que no es una vulnerabilidad real (falso positivo)"
  >
    Actualice el estado de sus vulnerabilidades si cree que IAST ha informado un falso positivo. Sigue estos pasos:

    * Busque su aplicación: Vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com) > All capabilities > IAST > Tests**</DNT>.

    * Haga clic en la pestaña de todas las aplicaciones y seleccione las vulnerabilidades que no sean vulnerabilidades reales.

    * En la sección de detalles de vulnerabilidades, puede actualizar el estado de las vulnerabilidades reportadas. Puede actualizar su estado a:

      * Falso positivo
      * Resuelto
      * Irresoluto

    * Si desea enumerar las vulnerabilidades para las que actualizó el estado, puede aplicar el filtro en la lista de vulnerabilidades explotables detectadas.
  </Collapser>

  <Collapser
    id="golang-vuln"
    title="No se detectaron vulnerabilidades para mi aplicación Golang"
  >
    * Para Golang, asegúrese de haber importado los paquetes de instrumentación necesarios para la biblioteca y el marco que utiliza su aplicación.

      Por ejemplo, supongamos que su aplicación utiliza la biblioteca para [Mongo DB](http://go.mongodb.org/mongo-driver/mongo). Para esta biblioteca específica, necesita importar este [paquete de instrumentación](https://github.com/newrelic/csec-go-agent/tree/main/instrumentation/csec_mongodb_mongo) desde newrelic:

      ```
      import (
          "github.com/newrelic/go-agent/v3/integrations/nrsecurityagent"
          "github.com/newrelic/go-agent/v3/newrelic"
          "github.com/newrelic/csec-go-agent/instrumentation/csec_mongodb_mongo"
          "go.mongodb.org/mongo-driver/mongo"               
      )
      ```

      Dependiendo de los requisitos de su aplicación, es posible que deba importar otros paquetes. Consulte [aquí](https://github.com/newrelic/csec-go-agent#instrumentation-packages) la lista de paquetes compatibles.

      Asegúrese de importar el [paquete<InlinePopover type="apm"/>](https://github.com/newrelic/go-agent?tab=readme-ov-file#service-frameworks) correspondiente para cada módulo.

    * Si está abriendo un extremo del protocolo HTTP, coloque la función `newrelic.WrapListen` alrededor del nombre del extremo para habilitar el escaneo de vulnerabilidades contra ese extremo:

      ```
      http.ListenAndServe(newrelic.WrapListen(":<YOUR PORT NUMBER>"), nil)
      ```

      <Callout variant="important">
        Puedes omitir este paso si estás en un entorno Linux.
      </Callout>

    * Para un caso específico de <DNT>**Outbound HTTP Request**</DNT> o llamadas a servicios externos, necesitas [actualizar el método de tu aplicación](/docs/apm/agents/go-agent/instrumentation/instrument-go-segments/#go-external-segments).
  </Collapser>

  <Collapser
    id="iast-windows"
    title="¿IAST es compatible con el entorno Windows?"
  >
    IAST es compatible con el entorno Windows. Sin embargo, para algunas aplicaciones Java, es posible que se encuentre con `classCirculatoryError` y necesite deshabilitar la instrumentación de baja prioridad en la configuración del agente de la siguiente manera:

    * Deshabilite la instrumentación de baja prioridad desde la configuración de seguridad:

      ```
      low-priority-instrumentation:
          enabled: false
      ```

    * Excluir la clase de instrumentación de baja prioridad del transformador de clase. Para hacer esto, agregue las líneas proporcionadas en la sección `class_transformer` del archivo de configuración:

      ```
      com.newrelic.instrumentation.security.low-priority-instrumentation:
          enabled: false
      ```
  </Collapser>

  <Collapser
    id="apis-available"
    title="¿Hay API disponibles para descargar los resultados de IAST?"
  >
    No, no tenemos ninguna API para descargar los resultados de IAST.
  </Collapser>

  <Collapser
    id="iast-not-prod"
    title="¿Por qué no debería utilizarse IAST en producción?"
  >
    IAST envía nuevas solicitudes a la aplicación en función de lo que observa durante las pruebas. El objetivo es determinar si son posibles comportamientos maliciosos que impliquen invocar API adicionales y llamadas a métodos utilizando una carga útil de explotación. Esto puede resultar en una manipulación no deseada de los datos de los clientes y la activación de servicios de protección en tiempo de ejecución.
  </Collapser>
</CollapserGroup>
