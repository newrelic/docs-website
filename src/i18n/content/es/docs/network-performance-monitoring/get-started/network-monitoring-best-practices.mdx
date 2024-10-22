---
title: Mejores prácticas para Monitoreo de red
tags:
  - Network monitoring
  - Best practices
metaDescription: Review best practices for network monitoring.
freshnessValidatedDate: '2024-01-18T00:00:00.000Z'
translationType: machine
---

En Monitoreo de red, New Relic utiliza agente para recopilar telemetry data de red, que pueden usarse para monitor el rendimiento de la red, identificar cuello de botella y solucionar problemas. Conozca las mejores prácticas para implementar el Monitoreo de red agente según la arquitectura y despliegue de su sistema.

## Consideraciones de despliegue [#deployment-considerations]

Esta guía hace referencia a una arquitectura de red común con los siguientes requisitos:

* Sondeo SNMP y recopilación de trampas SNMP.
* Colección Syslog de dispositivos de red.
* Colección de flujo de red en los protocolos NetFlow v5, NetFlow v9, IPFIX y sFlow.
* Soporte para múltiples sitios separados por una distancia geográficamente grande.

## Consideraciones arquitectónicas [#architectural-considerations]

### La tarea de un agente

Las tareas de cada agente determinarán el diseño del despliegue de su red. Aquí hay algunas reglas básicas a seguir:

* El agente que recopila datos SNMP también puede recibir capturas SNMP de forma predeterminada.
* El agente que recibe datos de Syslog debe ejecutarse por sí solo.
* Es posible que sea necesario aislar el agente que recibe datos de flujo de red según el tipo de plantilla de flujo que se recopila.

### Agente de Network Flow y Syslog [#network-flow-and-syslog-agents]

Cuando utiliza Network Flow y Syslog Agent, no necesita un archivo de configuración personalizado. La configuración predeterminada del agente funcionará bien porque todas las configuraciones del agente se pasan en tiempo de ejecución mediante indicadores.

Sin embargo, si no proporciona un archivo de configuración con entradas en la sección de dispositivos, los resultados enviados a las API de New Relic utilizarán un [`device_name`](/docs/network-performance-monitoring/advanced/advanced-config/#snmp-base-yml-template) resuelto a través de DNS desde la dirección IP en el paquete respectivo. Puede proporcionar una ubicación de servidor DNS personalizada en tiempo de ejecución, pero para un control total con la etiqueta, debe proporcionar sus propias entradas en la sección de dispositivos con la configuración [`flow_only`](/docs/network-performance-monitoring/advanced/advanced-config/#flow_only-attribute) establecida en `true`. Esto es lo que el administrador generalmente quiere hacer para que el nombre enviado a New Relic API se alinee con el nombre enviado desde el sondeo SNMP del mismo dispositivo.

### Geografía [#geography]

Debido a la degradación de su prioridad en las redes modernas, los protocolos SNMP e ICMP (ping) pueden verse afectados por una latencia extendida en tiempos de ida y vuelta. Para evitar escenarios de sondeo fallidos debido a tiempos de espera, el agente debe crearse cerca de sus dispositivos de destino.

### Calcular escala [#compute-scale]

Los agentes individuales generalmente están alojados en hosts muy pequeños y tienen requisitos mínimos como se describe en [los requisitos del contenedor de KTranslate](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-requirements). Sin embargo, en escenarios de sondeo intenso, es posible que necesite escalar la CPU del host. La razón principal para escalar a una mayor huella de CPU para un agente es la cantidad de carga que se presenta a la tarea. En estas situaciones, normalmente es mejor ejecutar varios agentes para equilibrar la carga en lugar de aumentar el tamaño total de su host, lo que tiene implicaciones de costos.

### Ejemplo de arquitectura común [#common-architecture]

<SideBySide>
  <Side>
    Este diagrama refleja una arquitectura de red de ejemplo con lo siguiente:

    * Cada ubicación geográfica tiene su propio agente local utilizado para recopilar y enviar datos a New Relic:

      * <DNT>
          **DC_01 (AMER)**
        </DNT>

        :

        * Tres agentes en un host que presta servicios en la ubicación DC_01 en la ciudad de Nueva York.

        * Proceso de contenedor sondeo SNMP, recopilación NetFlow v5 y recopilación Syslog

        * <DNT>
            **Consideration**
          </DNT>

          : Este host contiene una subred privada de Clase B (/16). Para garantizar que el trabajo tenga tiempo de completarse, el objetivo de descubrimiento debe dividirse en tamaños de subred manejables.

      * <DNT>
          **OFFICE_01 (APJ)**
        </DNT>

        :

        * Un agente en un host que presta servicios en la ubicación OFFICE_01 en Sydney, Australia.
        * El contenedor procesa el sondeo SNMP y la recopilación de capturas SNMP con descubrimiento en una subred /24.

      * <DNT>
          **DC_02 (EMEA)**
        </DNT>

        :

        * Tres agentes en un host que presta servicios en la ubicación de DC_02 en Dublín, Irlanda.

        * El contenedor procesa NetFlow v9, IPFIX y la colección sFlow, cada uno de los cuales apunta a un puerto de escucha diferente en el host.

        * <DNT>
            **Consideration**
          </DNT>

          : Este host tiene una subred privada Clase A aún mayor (/8), pero no es necesario escalar los trabajos ya que no es necesario realizar descubrimientos en esta ubicación. Dependiendo de los flujos por segundo, es posible que sea necesario ampliar la escala a agentes adicionales en el futuro.
  </Side>

  <Side>
    <img
      title="Common network architecture diagram"
      alt="Diagram to visualize common network architecture"
      src="/images/network_diagram_common-architecture.webp"
      width="80%"
      height="80%"
    />
  </Side>
</SideBySide>

## Manteniendo su despliegue [#maintaining-deployment]

Después de la instalación inicial, la huella del Monitoreo de red observabilidad se puede mantener utilizando varias técnicas. Estos incluyen la integración de cambios en los archivos de configuración con herramientas como Ansible y la creación de pipelines GitOps alrededor de la arquitectura para admitir versiones y opciones "invitadas" donde los equipos externos pueden enviar cambios para su revisión.

La necesidad más común de mantenimiento continuo es mantener precisa la lista de dispositivos objetivo. Esto se puede hacer utilizando tres métodos de descubrimiento principales:

<Tabs>
  <TabsBar>
    <TabsBarItem id="auto-discovery">
      Descubrimiento automático
    </TabsBarItem>

    <TabsBarItem id="man-discovery">
      Descubrimiento manual
    </TabsBarItem>

    <TabsBarItem id="man-device-add">
      Adición manual de dispositivos
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="auto-discovery">
      El descubrimiento automático es el proceso utilizado por el agente KTranslate para escanear una lista objetivo de direcciones y/o rangos IP, realizar una prueba de actividad y luego ejecutar un recorrido SNMP básico de la MIB del sistema MIB-2 para intentar hacer coincidir el dispositivo con una configuración conocida. Perfil SNMP.

      El agente tiene indicadores de tiempo de ejecución de agente incorporados (`-snmp_discovery_min` y `-snmp_discovery_on_start`) que le permiten crear una programación de eventos de descubrimiento SNMP recurrentes. Esto automatiza los trabajos de descubrimiento según el objetivo de la sección `discovery` en el archivo de configuración y luego actualiza automáticamente el archivo con nuevos dispositivos y actualiza el servicio para aceptar los cambios.

      ### Ventajas

      * Descubrimiento sin intervención de rangos de IP conocidos y cadenas de comunidad SNMP.

      * Correlación automatizada con el perfil SNMP adecuado para cada dispositivo.

      * Existen mecanismos de seguridad para evitar configuraciones inadecuadas que podrían dañar su archivo de configuración.

        ### Contras

      * Requiere una lista de objetivos preexistente de direcciones IP y cadenas de comunidad SNMP/autenticación V3 en la sección `discovery` del archivo de configuración.

      * Las subredes grandes corren el riesgo de sufrir tiempos de espera (recomendamos /16 y menores).

      * Los equipos que utilicen `user_tags` específico del dispositivo en sus archivos de configuración tendrán trabajo adicional para garantizar que los nuevos dispositivos tengan su etiqueta actualizada.

        ### Ejemplo

        Este es el patrón de configuración nativo que se encuentra si sigues la instalación guiada a través de la New Relic UI:

        ```yml
        devices: {}
        trap:
          listen: '0.0.0.0:1620'
        discovery:
          cidrs:
              - 192.168.0.0/24
          ignore_list: []
          debug: false
          ports:
              - 161
          default_communities:
              - public
          default_v3: null
          add_devices: true
          add_mibs: true
          threads: 4
          replace_devices: true
          check_all_ips: true
          use_snmp_v1: false
        global:
          poll_time_sec: 300
          mib_profile_dir: /etc/ktranslate/profiles
          mibs_enabled:
              - IF-MIB
          timeout_ms: 3000
          retries: 0
        ```

        Su comando de ejecución docker asociado se vería así, reemplazando `$UNIQUE_NAME`, `$YOUR_NR_LICENSE_KEY` y `$YOUR_NR_ACCOUNT_ID`:

        ```shell
        docker run -d --name ktranslate-$UNIQUE_NAME --restart unless-stopped --pull=always -p 162:1620/udp \
          -v `pwd`/snmp-base.yaml:/snmp-base.yaml \
          -e NEW_RELIC_API_KEY=$YOUR_NR_LICENSE_KEY \
        kentik/ktranslate:v2 \
          -snmp /snmp-base.yaml \
          -nr_account_id=$YOUR_NR_ACCOUNT_ID \
          -metrics=jchf \
          -tee_logs=true \
          -service_name=$UNIQUE_NAME \
          -snmp_discovery_on_start=true \
          -snmp_discovery_min=180 \
          nr1.snmp
        ```
    </TabsPageItem>

    <TabsPageItem id="man-discovery">
      El descubrimiento manual utiliza el mismo mecanismo que el descubrimiento automático, pero le brinda más control. Con el descubrimiento manual, puede ejecutar un agente personalizado ad hoc, lo que significa que puede ejecutarlo cuando lo desee y revisar y manipular los resultados según sea necesario. Este es el método preferido para entornos donde prevalecen las etiquetas o donde existe un buen control por parte de un equipo centralizado que agrega nuevos dispositivos a la red. Esto reduce la necesidad de realizar un análisis completo de la subred, lo que puede llevar mucho tiempo y resultar problemático.

      ### Ventajas

      * Control total sobre el objetivo y los resultados, incluida la decoración de etiquetas.

      * Ayuda a prevenir posibles dispositivos que no están dentro del alcance de su huella de monitoreo.

      * Correlación automatizada con el perfil SNMP adecuado para cada dispositivo.

      * Existen mecanismos de seguridad para evitar configuraciones inadecuadas que podrían dañar su archivo de configuración.

        ### Contras

      * Un administrador debe ejecutar el agente bajo demanda y desde el mismo host en el que se ejecuta su agente de producción para garantizar que la conectividad de red/SNMP se pruebe correctamente.

      * Mover los resultados del descubrimiento al archivo de configuración de producción es un proceso manual que requiere reiniciar el agente de producción para cargar la nueva configuración.

        ### Ejemplo

        Este método de descubrimiento sigue la opción de implementación original de KTranslate agente. En un nivel alto, el proceso de descubrimiento es:

      1. Extraiga la última versión de la imagen del agente a su máquina local.
      2. Copie el archivo de configuración de muestra `snmp-base.yaml` de la imagen a su máquina local.
      3. Edite el archivo de configuración para actualizar la sección `discovery` con la configuración que necesita para `cidrs` y `default_communities`.
      4. Lanzamiento un agente de corta duración que ejecuta un trabajo de descubrimiento ad hoc.
      5. Edite cualquier cambio necesario en los dispositivos resultantes en su archivo de configuración.
      6. Copie los nuevos dispositivos de su archivo de configuración de descubrimiento en el archivo de configuración del agente de producción.
      7. Reinicie su agente de producción para cargar la nueva configuración.

         Para utilizar este método, siga los pasos de [Configuración manual del contenedor](/docs/network-performance-monitoring/setup-performance-monitoring/snmp-performance-monitoring/#manual-container-setup).
    </TabsPageItem>

    <TabsPageItem id="man-device-add">
      La última opción es omitir todo el proceso de descubrimiento y agregar dispositivos manualmente directamente al archivo de configuración de producción. En la práctica, es bastante raro ver este patrón en uso, ya que las opciones de descubrimiento estándar hacen coincidir automáticamente los dispositivos con sus perfiles y garantizan que su archivo de configuración tenga el formato correcto.

      ### Ventajas

      * Control total sobre la configuración de los dispositivos y sus decoraciones de etiquetas.

        ### Contras

      * Riesgo medio de mala configuración en los ajustes. Este método requiere que conozca el identificador de objetos del sistema (SysOID) del dispositivo, así como que comprenda el perfil al que se dirigirá el dispositivo para que pueda identificar qué MIB desea habilitar (todo esto está automatizado en el descubrimiento).

      * Aún es necesario reiniciar el agente de producción para cargar la nueva configuración.

        ### Ejemplo

        A continuación se muestra un ejemplo de la configuración del dispositivo necesaria para monitor con éxito un UPS de APC:

        ```yml
        devices:
          ups_snmpv2c__10.10.0.201:
            device_name: ups_snmpv2c
            device_ip: 10.10.0.201
            snmp_comm: public
            oid: .1.3.6.1.4.1.318.1.3.27
            mib_profile: apc_ups.yml
            provider: kentik-ups
            user_tags:
              owning_team: dc_ops
        ...
        global:
        ...
          mibs_enabled:
            - IF-MIB
            - PowerNet-MIB_UPS
            - UPS-MIB
        ```

        <Callout variant="important">
          `global.mibs_enabled` debe actualizarse para comenzar a sondear una MIB. Al agregar dispositivos, debe asegurarse de que esta configuración se actualice con una lista de nombres MIB distintos que se encuentran en los [perfiles SNMP asociados](https://github.com/kentik/snmp-profiles/tree/main/profiles/kentik_snmp).
        </Callout>

        Las configuraciones requeridas se describen en detalle en nuestra documentación para [dispositivos](/docs/network-performance-monitoring/advanced/advanced-config/#devices) y [bloques globales](/docs/network-performance-monitoring/advanced/advanced-config/#global).
    </TabsPageItem>
  </TabsPages>
</Tabs>
