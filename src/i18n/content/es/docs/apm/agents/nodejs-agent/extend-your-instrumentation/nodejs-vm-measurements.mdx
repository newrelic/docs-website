---
title: Mediciones de máquina virtual (VM) de Node.js
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: A description of the metric timeslice data that the New Relic Node.js agent collects for the Node.js VM.
freshnessValidatedDate: never
translationType: machine
---

El agente Node.js de New Relic recopila [datos clave de intervalo de tiempo de métrica](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data) de la máquina virtual Node.js (V8). Estas métricas le brindan información valiosa sobre el comportamiento de la máquina virtual (VM) de Node.js y lo ayudan a mejorar el rendimiento de su aplicación. El agente también recopila CPU métrica, que a menudo se analiza junto con la recolección de basura (GC) métrica.

## Que necesitas [#requirements]

New Relic requiere un [módulo nativo adicional](https://www.npmjs.com/package/@newrelic/native-metrics) para recopilar datos de intervalo de tiempo de métrica de máquina virtual (VM) de Node.js relacionados con la recolección de basura, la memoria y la CPU. A partir de Node.js v6.1.0 No es necesario que el módulo nativo recopile métricas de CPU, ya que el agente New Relic Node.js las recopila con `process.cpuUsage()`.

El módulo nativo se puede utilizar con:

* New Relic Node.js versión 1.35.1 o superior
* Node.js v4 o superior
* npm v2.0.0 o superior

Para compilar el módulo nativo en su plataforma de despliegue, siga los procedimientos [del paquete`node-gyp` ](https://www.npmjs.com/package/node-gyp). Los requisitos previos para instalar módulos nativos de Node.js incluyen:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Plataforma
      </th>

      <th>
        Requisitos previos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Unix/Linux
      </td>

      <td>
        Python (se recomienda v2.7, no se admite v3.xx), make, compilador C/C++ (como GCC)
      </td>
    </tr>

    <tr>
      <td>
        Mac OS
      </td>

      <td>
        Python (se recomienda v2.7, no se admite v3.xx), Xcode
      </td>
    </tr>

    <tr>
      <td>
        Windows
      </td>

      <td>
        Python (se recomienda v2.7, no se admite v3.xx), entorno de compilación de Visual C++
      </td>
    </tr>
  </tbody>
</table>

Si tiene problemas al instalar nuestro agente Node.js, siga los procedimientos [de resolución de problemas de instalación](/docs/agents/nodejs-agent/troubleshooting/troubleshooting-your-nodejs-installation) .

## Instalar el módulo nativo [#install-modules]

A partir de la versión 2.0.0 del agente New Relic Node.js, el módulo nativo se ha convertido en una dependencia opcional que intenta instalarse automáticamente.

Durante la instalación, el módulo nativo primero intenta compilar desde el código fuente en la máquina de destino. Si la compilación falla, Node.js genera un rastreo del stack en la consola que normalmente puedes ignorar. Para entornos Linux que ejecutan versiones compatibles de Node, el agente intenta descargar e instalar un binario prediseñado.

Es posible evitar que el agente intente descargar e instalar un binario prediseñado. En cambio, solo intentará construir el módulo nativo. Haga esto configurando la variable de entorno `NR_NATIVE_METRICS_NO_DOWNLOAD` en `true` antes de la instalación con npm o Yarn.

```bash
export NR_NATIVE_METRICS_NO_DOWNLOAD=true
```

```bash
npm install @newrelic/native-metrics
```

```bash
yarn add @newrelic/native-metrics
```

Alternativamente, use el indicador `--no-download` que funciona con npm.

```bash
npm install @newrelic/native-metrics --no-download
```

Si la compilación falla con `NR_NATIVE_METRICS_NO_DOWNLOAD=true` o el indicador `--no-download` configurado, no se instalará el módulo nativo opcional.

Si se establecen ambas variables de entorno, `NR_NATIVE_METRICS_NO_BUILD` anulará `NR_NATIVE_METRICS_NO_DOWNLOAD`.

Si está utilizando una versión anterior, [actualice a la última versión del agente](/docs/agents/nodejs-agent/installation-configuration/upgrade-nodejs-agent) o instale el módulo nativo manualmente:

1. Asegúrese de que esté instalada una versión compatible de Node.js. <DNT>**Recommendation:**</DNT> Utilice la última versión LTS. No utilice versiones inferiores a la versión mínima admitida para el módulo `@newrelic/native-metrics` (v4 o superior).

2. Para obtener todas las métricas disponibles actualmente, asegúrese de ejecutar el módulo `newrelic` para el agente 1.37.0 o superior.

3. <DNT>**Windows users:**</DNT> Ejecute el siguiente comando:

   ```bash
   npm install --global windows-build-tools
   ```

   Si este paso no funciona, siga la Opción 2 en el [módulo node-gyp en GitHub](https://github.com/nodejs/node-gyp#option-2) para obtener instrucciones de instalación manual.

4. Para instalar el módulo métrico nativo, utilice cualquiera de estos métodos:

   * Ejecute el comando `npm install @newrelic/native-metrics --save` .

     O

   * Agregue el módulo al archivo `package.json` de su aplicación.

5. Reinicia tu aplicación.

El agente de Node.js detecta automáticamente si el módulo nativo métrica está instalado y comienza a utilizarlo. Si desea evitar por completo la instalación del módulo nativo, puede utilizar los siguientes argumentos npm o Yarn.

```bash
npm install newrelic --no-optional
```

```bash
yarn add newrelic --ignore-optional
```

## Binarios prediseñados [#prebuilt-binaries]

Para omitir el paso de compilación e intentar descargar solo un binario prediseñado y evitar ver errores de compilación en la consola, configure la variable de entorno `NR_NATIVE_METRICS_NO_BUILD` en `true` antes de la instalación.

```bash
export NR_NATIVE_METRICS_NO_BUILD=true
```

Si trabaja detrás de un firewall, puede almacenar en caché los archivos binarios prediseñados configurando las variables de entorno `NR_NATIVE_METRICS_DOWNLOAD_HOST` y `NR_NATIVE_METRICS_REMOTE_PATH` antes de la instalación.

```bash
export NR_NATIVE_METRICS_DOWNLOAD_HOST=http://your-internal-cache/
```

```bash
export NR_NATIVE_METRICS_REMOTE_PATH=path/to/download/folder/
```

Una vez que haya configurado las variables de entorno, la instalación puede continuar.

```bash
npm install @newrelic/native-metrics
```

```bash
yarn add @newrelic/native-metrics
```

## Ver datos de la máquina virtual (VM) de Node.js [#view-data]

Para ver gráficos seleccionados con datos de máquina virtual (VM) de Node.js, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Node VMs**</DNT>. Para obtener más información, consulte la [página de estadísticas de la máquina virtual (VM) de Node.js.](/docs/agents/nodejs-agent/supported-features/node-vms-statistics-page)

Los datos también están disponibles en [métrica y evento](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer).

## Detalles de medición [#garbage]

<Callout variant="tip">
  No todos los datos se pueden recopilar en todas las versiones de Node.js. En general, obtendrá los datos más completos si tiene la versión LTS más reciente de Node.
</Callout>

<CollapserGroup>
  <Collapser
    id="time-in-garbage-collection"
    title="Tiempo en recolección de basura"
  >
    Disponible en:

    * Agente Node.js v1.35.1 o superior

    * Node.js v4 o superior

    * New Relic Node.js `@newrelic/native-metrics` v1.0.0 o superior

      La cantidad de tiempo dedicado a la recolección de basura (todos los tipos utilizados por V8) por su proceso Node.js. El tiempo se mide como métrica acumulativa, como `GC/System/Pauses`, y se agrupa por tipo de recolección de basura como `GC/<type>`.

      Los posibles tipos de recolección de basura incluyen:

      <table>
        <thead>
          <tr>
            <th style={{ width: "250px" }}>
              <DNT>
                **GC type**
              </DNT>
            </th>

            <th>
              <DNT>
                **Description**
              </DNT>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              `Scavenge`
            </td>

            <td>
              El método de recolección de basura más común. Normalmente, Node.js activará uno de estos cada vez que la máquina virtual (VM) esté inactiva.
            </td>
          </tr>

          <tr>
            <td>
              `MarkSweepCompact`
            </td>

            <td>
              El tipo más pesado de recolección de basura V8 puede ser suficiente. Si ve que suceden muchos de estos, necesitará mantener menos objetos en su proceso o aumentar el límite de almacenamiento dinámico de V8.
            </td>
          </tr>

          <tr>
            <td>
              `IncrementalMarking`
            </td>

            <td>
              Una recolección de basura por fases que intercala la recolección con la lógica de la aplicación para reducir la cantidad de tiempo que la aplicación está en pausa. Sólo en Node.js v6 o superior.
            </td>
          </tr>

          <tr>
            <td>
              `ProcessWeakCallbacks`
            </td>

            <td>
              Después de que se produzca una recolección de basura, V8 llamará a cualquier devolución de llamada de referencia débil registrada para los objetos que hayan sido liberados. Esta medida es desde el inicio de la primera devolución de llamada débil hasta el final de la última para una recolección de basura determinada. Sólo en Node.js v6 o superior.
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>

  <Collapser
    id="memory"
    title="Memoria"
  >
    Disponible en:

    * Agente Node.js v1.36.0 o superior

    * Node.js v4 o superior

      El agente New Relic Node.js recopila las siguientes métricas relacionadas con el uso de memoria:

      <table>
        <thead>
          <tr>
            <th style={{ width: "250px" }}>
              <DNT>
                **Metric**
              </DNT>
            </th>

            <th>
              <DNT>
                **Description**
              </DNT>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              `Memory/Physical`
            </td>

            <td>
              La memoria física total (en MB) utilizada por el proceso Node.js. Se registra utilizando la API `process.memoryUsage().rss` Node.js.
            </td>
          </tr>

          <tr>
            <td>
              `Memory/Heap/Max`
            </td>

            <td>
              El montón total (en MB) asignado por V8 para almacenar objetos Javascript. Se registra utilizando la API `process.memoryUsage().heapTotal` Node.js.
            </td>
          </tr>

          <tr>
            <td>
              `Memory/Heap/Used`
            </td>

            <td>
              La cantidad de montón V8 (en MB) que utiliza actualmente la aplicación. Se registra utilizando la API `process.memoryUsage().heapUsed` Node.js.
            </td>
          </tr>

          <tr>
            <td>
              `Memory/Heap/Free`
            </td>

            <td>
              La cantidad de memoria V8 (en MB) que se asigna pero no se utiliza. Esta es una métrica derivada (`heapTotal` - `heapUsed`).
            </td>
          </tr>

          <tr>
            <td>
              `Memory/NonHeap/Used`
            </td>

            <td>
              La cantidad de memoria distinta del montón V8 (en MB). Esta es una métrica derivada (`rss` - `heapTotal`). Esta métrica es útil para encontrar pérdidas de memoria fuera del montón V8; por ejemplo, con buffers o flujos.
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>

  <Collapser
    id="cpu"
    title="UPC"
  >
    Disponible en:

    * Nodo.js >= v6.1.0, agente v1.34.0 o superior

    * Node.js v4 - v6.0.0, agente v1.35.2 con `@newrelic/native-metrics` v1.0.0 o superior

      Las métricas de CPU se recogen en Node.js v6.1.0 o superior usando la API `process.cpuUsage()` Node.js. Para versiones anteriores de Node, [se debe instalar el módulo nativo adicional](/docs/agents/nodejs-agent/supported-features/node-vm-measurements#h2-Installation).

      El agente recopila las siguientes métricas relacionadas con la CPU:

      <table>
        <thead>
          <tr>
            <th style={{ width: "250px" }}>
              <DNT>
                **Metric**
              </DNT>
            </th>

            <th>
              <DNT>
                **Description**
              </DNT>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              `CPU/User Time`
            </td>

            <td>
              El tiempo que dedica la CPU a ejecutar el código de usuario. Se graba en segundos.
            </td>
          </tr>

          <tr>
            <td>
              `CPU/User/Utilization`
            </td>

            <td>
              El tiempo dedicado a ejecutar el código de usuario (`CPU/User Time`) dividido por el tiempo de reloj y el número de procesadores lógicos. Debido a que el tiempo de ejecución de Node.js siempre usa solo un núcleo, el valor máximo informado por esta métrica será 100 dividido por la cantidad de núcleos.
            </td>
          </tr>

          <tr>
            <td>
              `CPU/System Time`
            </td>

            <td>
              El tiempo que pasa la CPU en el kernel del sistema en relación con el proceso de Node.js.
            </td>
          </tr>

          <tr>
            <td>
              `CPU/System/Utilization`
            </td>

            <td>
              El tiempo transcurrido en el kernel del sistema (`CPU/System Time`) dividido por el tiempo de reloj y la cantidad de procesadores lógicos. Debido a que el tiempo de ejecución de Node.js siempre usa solo un núcleo, el valor máximo informado por esta métrica será 100 dividido por la cantidad de núcleos.
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>

  <Collapser
    id="event-loop"
    title="Bucle de eventos"
  >
    Disponible en:

    * Agente Node.js v1.37.0 o superior

    * `@newrelic/native-metrics` v2.1.0 o mas alto

    * Node.js v4 o superior

      Métrica de rendimiento para el bucle de eventos de Node.js. La colección de eventos loop métrica requiere [la instalación de un módulo nativo adicional](/docs/agents/nodejs-agent/supported-features/node-vm-measurements#h2-Installation).

      El agente recoge el siguiente evento loop métrico:

      <table>
        <thead>
          <tr>
            <th style={{ width: "250px" }}>
              <DNT>
                **Metric**
              </DNT>
            </th>

            <th>
              <DNT>
                **Description**
              </DNT>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              `Nodejs/EventLoop/CPU/Usage`
            </td>

            <td>
              El tiempo total de CPU dedicado a la ejecución activa en cada tic del bucle de eventos. Esto incluye ejecutar la devolución de llamada de su aplicación, pero también el tiempo de ejecución en sí. Reportado en unidades de segundos.

              Un tic de bucle de evento anormalmente largo indica una ejecución sincrónica ininterrumpida que puede ser un objetivo de optimización; por ejemplo, llamadas recursivas `process.nextTick` ).
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>
</CollapserGroup>
