---
title: 'New Relic Flex: crea tu propia integración'
tags:
  - Instrument everything
  - Develop your own integrations
metaDescription: Use New Relic's Flex integration tool to create a lightweight custom integration that reports event and metric data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

New Relic proporciona [integración e inicio rápido para muchos servicios y marcos populares](https://newrelic.com/instant-observability/). Si ya estás usando New Relic y quieres reportar datos de un servicio para el que no tenemos una integración, hay varias maneras de crear tu propia integración:

* Con monitoreo de infraestructura, puede utilizar nuestra herramienta Flex liviana (recomendada, documentada a continuación) o, para crear una [integración completa en el host](/docs/integrations/host-integrations/getting-started/introduction-host-integrations), consulte nuestro [SDK de integración](/docs/integrations/integrations-sdk/getting-started/introduction-infrastructure-integrations-sdk).
* Para soluciones de monitoreo de telemetría (métrica, traza), utilice nuestros [SDK de telemetría](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic).
* Cree una [aplicación New Relic ](/docs/new-relic-one/use-new-relic-one/build-new-relic-one/new-relic-one-build-your-own-custom-new-relic-one-application)personalizada que utilice su propia funcionalidad UI de JavaScript.

## ¿Qué es la flexión? [#what-is-it]

New Relic Flex es una herramienta completa e independiente de la aplicación que le permite recopilar datos métricos de una amplia variedad de servicios. Viene incluido con nuestro agente de infraestructura. Puede instrumentar cualquier aplicación que exponga métrica a través de un protocolo estándar (HTTP, archivo, shell) en un formato estándar (por ejemplo, JSON o texto sin formato): crea un archivo de configuración YAML, inicia el agente de infraestructura y sus datos son informó a New Relic.

Flex puede enviar datos de eventos y métricas a New Relic desde una amplia gama de fuentes. Con un archivo de configuración YAML simple, puede ejecutar solicitudes HTTP/HTTPS, ejecutar comandos de shell y analizar el contenido del archivo. También puede utilizar expresiones regulares estándar para personalizar y controlar los datos recopilados de esas entradas. Vea una [configuración de ejemplo](#example).

Después de recopilar y limpiar los datos, puede [consultar los datos de Flex](/docs/using-new-relic/data/understand-data/query-new-relic-data) en New Relic, crear gráficos personalizados para ellos y utilizar esos datos en su panel.

## Requisitos [#requirements]

Flex viene incluido con nuestro [agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent) versión 1.10.7 o superior ([actualizar](/docs/infrastructure/install-configure-manage-infrastructure/update-or-uninstall/update-infrastructure-agent) \| [verificar versión](/docs/infrastructure/install-configure-manage-infrastructure/update-or-uninstall/update-infrastructure-agent#check-version)) que se ejecuta en Linux, Windows o Kubernetes.

## ¿Cómo funciona Flex? [#how-does-it-work]

Flex utiliza [infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent) para ejecutar comandos que generan los datos que desea informar. A continuación se ofrece una breve descripción general de cómo funciona Flex para informar datos:

1. Usted define los datos que desea informar en un archivo de configuración YAML, ubicado en el paquete del agente de infraestructura. Vea una configuración de ejemplo:

   <CollapserGroup>
     <Collapser
       id="example"
       title="Configuración de ejemplo"
     >
       El siguiente es un ejemplo de una configuración Flex para monitorear el tiempo de actividad de un servidor Linux. Esta configuración se coloca en un archivo llamado `flex-uptime.yml`. Esto se colocaría en la sección de configuración de integración del agente de infraestructura, ubicada en `/etc/newrelic-infra/integrations.d/flex-uptime.yml`.

       ```
       integrations:
         - name: nri-flex    
           config:
             name: linuxUptimeIntegration
             apis:
               - name: Uptime
                 commands:
                   - run: 'cat /proc/uptime'
                     split: horizontal
                     split_by: \s+
                     set_header: [uptimeSeconds,idletimeSeconds]
       ```

       Algunas notas sobre lo que hace esta configuración:

       * `run` define el comando a ejecutar.
       * Al nombre indicado por `name: Uptime` se le añade `Sample` para generar un [evento](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data) llamado `UptimeSample`.
       * El nombre no debe comenzar con el prefijo ESX o PCF.
       * El `split_by: \s+` divide los campos según el carácter de espacio.
       * El comando genera [un atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) adjunto al evento `UptimeSample` . Los atributos se denominan `uptimeSeconds` y `idletimeSeconds`.
     </Collapser>
   </CollapserGroup>

2. El agente de infraestructura ejecuta Flex con una frecuencia basada en su propia configuración (predeterminada: cada 30 segundos) y envía los datos a New Relic.

3. Luego puede [consultar sus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data), crear gráficos personalizados con ellos y agregarlos al panel.

<InstallFeedback/>

## Aprende más [#get]

La integración Flex viene incluida con el agente de infraestructura y se puede configurar como cualquier otra integración en el host. Obtenga más información sobre [las opciones de configuración](/docs/infrastructure/host-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format).

Vea más documentación de Flex en GitHub:

* [LÉAME](https://github.com/newrelic/nri-flex)
* [Tutorial](https://github.com/newrelic/nri-flex/blob/master/docs/basic-tutorial.md)
