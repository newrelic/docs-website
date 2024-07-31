---
title: Faltan datos en la recopilación de flujo de red
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: Troubleshooting collection issues for network flows.
freshnessValidatedDate: '2023-11-02T00:00:00.000Z'
translationType: machine
---

## Problema [#problem]

Después de la instalación del `ktranslate` Monitoreo de red agente, tienes problemas para recopilar la telemetría del flujo de red.

## Fondo [#background]

`ktranslate` devuelve la telemetría de flujo sin procesar recopilada, sin editar ninguna carga útil del paquete. Hay [varios tipos de flujo](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#supported-network-flow-data-types) admitidos de fábrica, siendo los más destacados [NetFlow v5](https://www.cisco.com/c/en/us/td/docs/net_mgmt/netflow_collection_engine/3-6/user/guide/format.html), [NetFlow v9](https://datatracker.ietf.org/doc/html/rfc3954), [sFlow](https://sflow.org/sflow_version_5.txt) e [IPFIX](https://datatracker.ietf.org/doc/html/rfc7011).

<SideBySide>
  <Side>
    Toda la telemetría del flujo de red se almacena en el [tipo de evento KFlow](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#find-your-metrics). Puedes consultar esto directamente en NRQL. Si este tipo de evento está ausente, eso indica que su cuenta no está recibiendo los datos.
  </Side>

  <Side>
    ```sql
    FROM KFlow 
    SELECT *
    ```
  </Side>
</SideBySide>

## Solución [#solution]

<CollapserGroup>
  <Collapser
    id="ktranslate-configuration"
    title="Configuración de flujo en tu Monitoreo de red agente"
  >
    El agente `ktranslate` solo puede recopilar un tipo de plantilla de flujo configurada por el argumento [-nf.source](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options) en tiempo de ejecución, cuyo valor predeterminado es `auto`. Esto le indica `ktranslate` que espere cualquier plantilla de `NetFlow v5` \| `NetFlow v9` \| `sFlow` \| `IPFIX` para que pueda traducir los paquetes. Un problema común es configurar `ktranslate` para que escuche un tipo específico de plantilla de flujo y luego exportar otro tipo al agente. Debe ejecutar un contenedor separado para cualquier plantilla que no esté cubierta por `auto`.

    Otro error común aquí es exportar su telemetría de flujo a un agente `ktranslate` , mientras apunta a múltiples puertos como destino. En este escenario, necesita ejecutar varios agentes `ktranslate` , cada uno configurado con un valor diferente para [-nf.port](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options) en tiempo de ejecución (el valor predeterminado es `9995`). Es posible que también necesite actualizar la configuración del exportador de flujo en sus dispositivos de red de origen para apuntar a su puerto específico.
  </Collapser>

  <Collapser
    id="device-configuration"
    title="Configuración de flujo en su dispositivo de red"
  >
    Cada proveedor tendrá su propia documentación sobre cómo configurar correctamente sus dispositivos para la exportación de flujos de red. Las versiones más avanzadas como `NetFlow v9`, `IPFIX` y `sFlow` tienen opciones que permiten al administrador personalizar los campos que se recopilan y exportan. Editarlos puede deshabilitar efectivamente la capacidad de procesar correctamente los registros de flujo por parte de `ktranslate`.

    Los siguientes campos son <DNT>**required**</DNT>:

    <CollapserGroup>
      <Collapser
        id="required-record-group"
        title="Requerido para todos los registros"
      >
        * Protocolo (Número de tipo de campo: `4`): protocolo de capa 4
        * Dirección de origen (número de tipo de campo: `8`, `27`): dirección IPv4 o IPv6 de origen
        * Puerto de origen (número de tipo de campo: `7`): puerto TCP/UDP de origen
        * Dirección de destino (Número de tipo de campo: `12`, `28`): dirección IPv4 o IPv6 de destino
        * Puerto de destino (Número de tipo de campo: `11`): puerto TCP/UDP de destino
      </Collapser>

      <Collapser
        id="required-interfaces-group"
        title="Campos de interfaz obligatorios (al menos uno)"
      >
        * Recepción de interfaz (número de tipo de campo: `10`): índice SNMP para la interfaz de ingreso
        * Transmisión de interfaz (número de tipo de campo: `14`): índice SNMP para la interfaz de salida
      </Collapser>

      <Collapser
        id="required-bytes-group"
        title="Campos de bytes requeridos (al menos uno)"
      >
        * Bytes delta (número de tipo de campo: `1`) - Bytes delta
        * Bytes totales (número de tipo de campo: `85`) - Bytes totales
        * Bytes de salida (Número de tipo de campo: `23`) - Bytes de salida
        * Octetos del iniciador (número de tipo de campo: `231`): bytes del iniciador
        * Octetos de respuesta (número de tipo de campo: `232`): bytes de respuesta
      </Collapser>

      <Collapser
        id="required-packets-group"
        title="Campos de paquetes obligatorios (al menos uno)"
      >
        * Paquetes delta (número de tipo de campo: `2`): paquetes delta
        * Paquetes totales (Número de tipo de campo: `86`) - Paquetes totales
        * Paquetes de salida (Número de tipo de campo: `24`) - Paquetes de salida
        * Paquetes iniciadores (número de tipo de campo: `298`): paquetes iniciadores
        * Paquetes de respuesta (número de tipo de campo: `299`): paquetes de respuesta
      </Collapser>

      <Collapser
        id="required-routing-group"
        title="Campos de enrutamiento obligatorios (al menos uno)"
      >
        * ToS (Número de tipo de campo: `5`) - Tipo de servicio
        * AS de origen (Número de tipo de campo: `16`): número del sistema autónomo BGP de origen
        * AS de destino (Número de tipo de campo: `17`): número del sistema autónomo BGP de destino
        * AS de origen del mismo nivel (Número de tipo de campo: `129`): número del sistema autónomo BGP de origen del mismo nivel
        * AS de destino del mismo nivel (Número de tipo de campo: `128`): número del sistema autónomo BGP de destino del mismo nivel
      </Collapser>

      <Callout variant="tip">
        `ktranslate` De forma predeterminada, todos los registros de flujo son `Direction: ingress` a menos que el registro utilice explícitamente un valor de `egress`. Esto cubre varias situaciones en las que los registros de flujo se envían sin el campo `Direction` .
      </Callout>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="tcpdump-confirmation"
    title="Confirmación de recepción de flujo"
  >
    Cada proveedor tendrá su propia documentación sobre cómo observar los contadores de exportación de flujo a través de la CLI/UI de su dispositivo. La falta de crecimiento del contador en el dispositivo indica que la exportación de flujo no está configurada correctamente en el dispositivo.

    Tanto el contenedor docker como las opciones de implementación del servicio Linux para `ktranslate` utilizan la red del host para recibir datos en el puerto asignado. Para validar que el host reciba los registros de flujo, puede usar la utilidad [tcpdump](https://www.tcpdump.org) para crear un archivo de captura de paquetes (`.pcap`) que luego puede investigar en [Wireshark](https://www.wireshark.org/).

    La ejecución de este comando configurará `tcpdump` para capturar cada paquete entrante en todas las interfaces del host y escribirá el resultado en un archivo en el directorio actual:

    ```shell
    sudo tcpdump -s 0 -i any -w dump_capture.pcap
    ```

    Tenga en cuenta que puede agregar varios argumentos a [tcpdump](https://www.tcpdump.org/manpages/tcpdump.1.html); el elemento más importante aquí es el archivo de salida que puede usar para analizarlo más adelante. Generar los resultados en `STDOUT` crea un valor limitado para los propósitos actuales.

    Una vez que tenga este archivo, la siguiente sección le mostrará cómo analizar los resultados.

    <Callout variant="tip">
      Uno de los problemas más comunes encontrados es una regla de configuración de red/firewall que bloquea los paquetes desde los dispositivos de red de origen al host de destino `ktranslate`. Si no obtiene ningún resultado con la utilidad `tcpdump` , el mejor lugar para comenzar a resolver los problemas es confirmar las reglas de su red y la configuración de `iptables` .
    </Callout>
  </Collapser>

  <Collapser
    id="improperly-formatted-flow-records"
    title="Identificación de plantillas de registros de flujo con Wireshark"
  >
    Siga estos pasos para utilizar [Wireshark](https://www.wireshark.org/) para inspeccionar el archivo de captura de paquetes.

    <Steps>
      <Step>
        Inicie la aplicación Wireshark y abra el archivo de captura de paquetes
      </Step>

      <Step>
        La vista inicial muestra todos los paquetes capturados, pero para el análisis de flujo deberá configurar la aplicación para que los decodifique correctamente. Usando el menú, navegue hasta `Analyze > Decode As...`, lo que abre una nueva ventana emergente.
      </Step>

      <Step>
        En la ventana emergente, haga clic en el ícono más (`+`) en la parte inferior izquierda, lo que agregará una nueva fila al panel. La opción inicial en la columna `Current` es `(none)`. Haga clic aquí para abrir un menú desplegable y luego seleccione `CFLOW` para `NetFlow` y `IPFIX`, o `sFlow` para `sFlow` paquetes. Haga clic en `OK` en la parte inferior derecha para volver a la UI principal.

        <Callout variant="tip">
          Este menú está ordenado alfabéticamente con distinción entre mayúsculas y minúsculas. La opción `sFlow` se encuentra al final de la lista.
        </Callout>
      </Step>

      <Step>
        En la UI principal, debería poder ver `CFLOW` \| `sFlow` paquetes ahora identificándolos en la columna `Protocol`. La aplicación del filtro de visualización `(cflow or sflow)` aislará automáticamente los paquetes que necesita de cualquier otra cosa que pueda estar en el archivo de captura.

        Las siguientes secciones describen cómo inspeccionar cada tipo de paquete.

        <CollapserGroup>
          <Collapser
            id="netflow-ipfix-analysis"
            title="Análisis de paquetes NetFlow e IPFIX"
          >
            `NetFlow` y los protocolos `IPFIX` utilizan un enfoque de plantilla donde el administrador puede identificar qué campos recopilar, de una lista de opciones estándar. El análisis de estos paquetes se realiza para garantizar que se capturen los [campos obligatorios](#device-configuration) para `ktranslate` .

            En la UI principal de Wireshark, haga clic para seleccionar un único paquete `CFLOW` y luego expanda la sección titulada `FlowSet n`, donde `n` es un número entero que identifica un registro de flujo singular en un paquete. Luego expandirá el subgrupo `Flow n` para analizar los campos de este registro de flujo.

            <Callout variant="tip">
              También puede hacer clic en el enlace `Template Frame` del paquete para acceder a un paquete capturado que contiene la plantilla para todos los flujos desde este dispositivo.
            </Callout>
          </Collapser>

          <Collapser
            id="sflow-analysis"
            title="Analizando paquetes sFlow"
          >
            Debido a las diferencias de protocolo entre `sFlow` y los protocolos más tradicionales `NetFlow/IPFIX` , existen diferentes campos para analizar.

            En la UI principal de Wireshark, haga clic para seleccionar un único paquete `sFlow` y luego expanda la sección titulada `InMon sFlow`. Los siguientes campos deben estar presentes:

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    Campo
                  </th>

                  <th>
                    Descripción
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Versión de datagrama
                  </td>

                  <td>
                    La versión de este paquete sFlow.
                  </td>
                </tr>

                <tr>
                  <td>
                    Tipo de dirección del agente
                  </td>

                  <td>
                    IPv4 (1) o IPv6 (2)
                  </td>
                </tr>

                <tr>
                  <td>
                    Dirección del agente
                  </td>

                  <td>
                    Dirección IP desde la que se exportan los flujos. Aquí es donde tienes configurado tu exportador de flujo.
                  </td>
                </tr>

                <tr>
                  <td>
                    ID de subagente
                  </td>

                  <td>
                    En sFlow v5, puede ejecutar múltiples procesos de exportación. Este es su identificador único.
                  </td>
                </tr>

                <tr>
                  <td>
                    Secuencia de números
                  </td>

                  <td>
                    La cantidad de paquetes sFlow enviados por el dispositivo agente.
                  </td>
                </tr>

                <tr>
                  <td>
                    SysUptime
                  </td>

                  <td>
                    Tiempo desde la última vez que se reinició el dispositivo del agente.
                  </td>
                </tr>

                <tr>
                  <td>
                    NúmMuestras
                  </td>

                  <td>
                    El recuento de muestras de sFlow contenidas en el paquete actual.
                  </td>
                </tr>
              </tbody>
            </table>

            Al expandir un subgrupo titulado `Flow sample` se mostrarán estos campos adicionales:

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    Campo
                  </th>

                  <th>
                    Descripción
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Empresa
                  </td>

                  <td>
                    Este campo anota la configuración empresarial de sFlow personalizada que el administrador puede habilitar opcionalmente al configurar sus exportaciones de sFlow. (`0` por defecto)
                  </td>
                </tr>

                <tr>
                  <td>
                    Tipo de muestra de sFlow
                  </td>

                  <td>
                    Esta es la designación del tipo de muestra que se utiliza cuando una empresa personaliza sus exportaciones de sFlow. Puede encontrar definiciones en [la documentación de sFlow](http://www.sflow.org/developers/diagrams/sFlowV5Sample.pdf).
                  </td>
                </tr>

                <tr>
                  <td>
                    Longitud de la muestra
                  </td>

                  <td>
                    Longitud de la muestra, en bytes.
                  </td>
                </tr>

                <tr>
                  <td>
                    Secuencia de números
                  </td>

                  <td>
                    El valor del contador aumenta cada vez que el agente toma una muestra.
                  </td>
                </tr>

                <tr>
                  <td>
                    Tasa de muestreo
                  </td>

                  <td>
                    Se muestrean 1 de cada `X` paquetes.
                  </td>
                </tr>

                <tr>
                  <td>
                    Conjunto de muestras
                  </td>

                  <td>
                    Total de paquetes posibles que podrían haberse muestreado, incluidos los paquetes muestreados reales.
                  </td>
                </tr>

                <tr>
                  <td>
                    Paquetes caídos
                  </td>

                  <td>
                    Número de paquetes que se descartaron debido a limitaciones de recursos.
                  </td>
                </tr>

                <tr>
                  <td>
                    Interfaz de entrada
                  </td>

                  <td>
                    SNMP ifIndex de la interfaz desde la que llegó el paquete.
                  </td>
                </tr>

                <tr>
                  <td>
                    Registro de flujo
                  </td>

                  <td>
                    Número de registros muestreados contenidos en esta muestra.
                  </td>
                </tr>
              </tbody>
            </table>
          </Collapser>
        </CollapserGroup>
      </Step>
    </Steps>

    <Callout variant="tip">
      Este mismo patrón, sin el paso `Decode as...` , se puede aplicar para validar la recepción de datos de captura syslog y SNMP.
    </Callout>
  </Collapser>
</CollapserGroup>
