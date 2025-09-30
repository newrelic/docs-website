---
title: Herramienta generadora de perfiles de hilo.
tags:
  - APM
  - APM UI pages
  - Events
metaDescription: 'New Relic Java, .NET, Python, Ruby agents: You can use the thread profiler in production to identify bottlenecks in an application.'
freshnessValidatedDate: never
translationType: machine
---

El generador de perfiles de hilo es una herramienta de creación de perfiles de bajo impacto que se puede utilizar en producción para identificar cuello de botella en una aplicación. Funciona capturando periódicamente (100 ms) el rastreo del stack de cada hilo durante un período específico. Al final de la duración especificada, el rastreo de la pila se agrega para construir un árbol. El recuento de llamadas en el árbol corresponde a la cantidad de veces que esa función estuvo presente en el rastreo del stack bajo el mismo contexto.

Aunque el árbol de llamadas no puede capturar toda la ejecución, una muestra lo suficientemente grande puede ser una buena representación del comportamiento de la aplicación. Esto proporciona información valiosa sobre las funciones "calientes" de la aplicación donde se pasa la mayor parte del tiempo. Con este alcance, se omiten las entradas muestreadas con menos del 0,05%.

## Agente apoyado [#agents]

Esta característica está disponible sólo para agentes y versiones específicas:

* Agente de Java versiones 1.2.004.6 o superiores

* .NET:

  * Framework: Versiones del agente 2.12.146.0 o superior
  * .NET Core 2.0: versiones del agente 8.3.360.0 o superior (solo Windows)
  * Linux: .NET Core 3.0 o superior y versiones del agente 8.23 o superior

* Python: versiones del agente 1.7.0 o superiores

* Ruby: versiones del agente 3.5.5 o superiores

## Poner en marcha el generador de perfiles [#starting]

El hilo generador de perfiles característica está habilitado por defecto. También puede activarlo o desactivarlo en el archivo de configuración de su agente:

* Java: `thread_profiler.enabled`

* NET:

  <DNT>
    **cannot**
  </DNT>

  deshabilita el generador de perfiles de subprocesos con aplicaciones .NET.

* Python: `thread_profiler.enabled`

* Ruby: `thread_profiler.enabled`

Cuando está habilitado, puede ver el hilo generador de perfiles desde nuestra interfaz de usuario:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler**
   </DNT>

   .

2. Seleccione el host en el que desea ejecutar el generador de perfiles.

3. Establezca la duración de la sesión de creación de perfiles.

4. Seleccione

   <DNT>
     **Start profiler**
   </DNT>

   .

Esto hace que el agente inicie el generador de perfiles de subprocesos durante el siguiente ciclo de recolección (cada minuto) y capture datos durante el período especificado. Registramos los rastreos de subprocesos independientemente de que se encuentren o no en un estado ejecutable en el momento en que se toma la muestra. Los subprocesos que están inactivos o bloqueados en IO pueden aparecer en el árbol de llamadas.

<img
  title="Thread profiler overview"
  alt="This is an image of the thread profiler."
  src="/images/apm_screenshot-full_thread-profiler-view.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler**</DNT>: Utilice esta página para definir la configuración de la duración del generador de perfiles del hilo y para ver los resultados.
</figcaption>

## Ver datos de perfil [#viewing]

Una vez que el generador de perfiles termine de ejecutarse, el agente informará los datos del perfil. El árbol de llamadas aparece automáticamente en la página <DNT>**Thread profiler**</DNT> . Los porcentajes en el árbol de llamadas representan el porcentaje de muestras de seguimiento de subprocesos en las que apareció cada ruta de llamada durante la sesión de creación de perfiles. La recopilación de datos comenzó a la hora de PERFIL RECOPILADO.

La página codifica por colores los resultados del árbol:

* Rojo: Porcentajes superiores al 30%
* Amarillo: Porcentajes superiores al 10%
* Negro: Porcentajes inferiores al 10%

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this...**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Cambiar cómo aparece la información del perfil del hilo
      </td>

      <td>
        Seleccione sus opciones de opciones disponibles en <DNT>**Tree settings**</DNT> y seleccione <DNT>**Refresh tree**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        Cambiar la cantidad de información que aparece
      </td>

      <td>
        Seleccione las opciones <DNT>**Expand**</DNT> o <DNT>**Collapse**</DNT> encima del árbol de llamadas, o seleccione el nombre o la flecha en cualquier línea del árbol de llamadas.
      </td>
    </tr>

    <tr>
      <td>
        Ver información resumida sobre cualquier línea en el árbol de llamadas
      </td>

      <td>
        Pase el mouse sobre la línea.
      </td>
    </tr>

    <tr>
      <td>
        Enviar por correo electrónico los resultados del perfil del hilo a otras personas.
      </td>

      <td>
        Seleccione <DNT>**Share this profile**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        Iniciar otra sesión o ver un perfil de hilo diferente
      </td>

      <td>
        Seleccione <DNT>**Back to all profiles**</DNT>.
      </td>
    </tr>
  </tbody>
</table>

## Consideraciones del agente [#agent-requirements]

Dependiendo del agente que utilice, la característica de perfilado de subprocesos tiene consideraciones adicionales.

<CollapserGroup>
  <Collapser
    id="java"
    title="Notas específicas de Java"
  >
    Cuando utilice la creación de perfiles de subprocesos con el agente de Java, tenga en cuenta lo siguiente.

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Java agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            La configuración del árbol muestra solo la categoría <DNT>**Other**</DNT>
          </td>

          <td>
            Todos los hilos se colocan en la categoría <DNT>**Other**</DNT> . Las categorías <DNT>**Web Request**</DNT> y <DNT>**Background**</DNT> no son compatibles.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="net"
    title="Notas específicas de .NET"
  >
    Al utilizar la creación de perfiles de subprocesos con el agente de .NET framework , tenga en cuenta lo siguiente.

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **.NET agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Apoyado en <DNT>**Linux**</DNT>
          </td>

          <td>
            La creación de perfiles de subprocesos en <DNT>**Linux**</DNT> se admite en la aplicación .NET Core 3.0 o posterior cuando se ejecuta el agente .NET versión 8.23 o posterior.
          </td>
        </tr>

        <tr>
          <td>
            Solo hilos administrados
          </td>

          <td>
            Para el agente .NET, el generador de perfiles de subprocesos solo captura el rastreo de la pila en subprocesos administrados. No captura el rastreo del stack en subprocesos no administrados. Si se produce una llamada a una función no administrada en un subproceso administrado, el generador de perfiles de subprocesos mostrará `Native:Function Call` en el árbol de llamadas.
          </td>
        </tr>

        <tr>
          <td>
            Sin números de línea
          </td>

          <td>
            Un perfil de subproceso .NET no incluye números de línea en el árbol de llamadas. La casilla de verificación <DNT>**Show line numbers**</DNT> en la configuración del árbol no tiene ningún efecto.
          </td>
        </tr>

        <tr>
          <td>
            Error con .NET CLR v4.0 de 64 bits
          </td>

          <td>
            Hay un error en la versión 4.0 de .NET Common Language Runtime (CLR) de 64 bits que interfiere con la capacidad del agente para recuperar el rastreo administrado de la pila. Si su aplicación experimenta este error, APM mostrará perfiles de subprocesos vacíos. Este error no afecta a la aplicación de 32 bits.

            El error se solucionó en las versiones de CLR para .NET 4.5. Para verificar si su aplicación de 64 bits tiene la versión fija, consulte la versión completa de `mscorlib.dll` en el directorio <DNT>**C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319**</DNT> . La solución está en las versiones 4.0.30319.17379 o superiores.
          </td>
        </tr>

        <tr>
          <td>
            <DNT>**Other**</DNT> solo categoría
          </td>

          <td>
            Todos los hilos se colocan en la categoría <DNT>**Other**</DNT> . Las categorías <DNT>**Web Request**</DNT> y <DNT>**Background**</DNT> no son compatibles.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="agent-thread-profiling"
    title="Notas específicas de Python"
  >
    Cuando utilice la creación de perfiles de subprocesos con el agente Python, tenga en cuenta lo siguiente.

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Python agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Sistemas basados en rutinas
          </td>

          <td>
            Existen límites para capturar detalles cuando se utiliza un sistema basado en rutinas, como los modos gevent o eventlet de gunicorn. Si se crea un nuevo hilo, el agente Python en realidad creará un greenlet en lugar de un hilo de fondo generador de perfiles de hilo. Por lo tanto, el hilo generador de perfiles no capturará ninguna solicitud web ni transacción en segundo plano en la página del hilo generador de perfiles.
          </td>
        </tr>

        <tr>
          <td>
            Greenlets
          </td>

          <td>
            Un greenlet puede ejecutarse solo cuando otros greenlets ceden explícitamente el control, como cuando bloquean. Por ejemplo, si el muestreador de subprocesos se ejecuta, solo muestreará la stack en busca de otros greenlets en un punto donde estén bloqueados. No los probará cuando estén ejecutando código arbitrario. Puede perder por completo la ejecución dentro de un greenlet si nunca bloqueó o cedió a otro greenlet.
          </td>
        </tr>

        <tr>
          <td>
            Tiempo en código Python
          </td>

          <td>
            El tiempo dedicado a código Python puro que no bloquea solicitudes no se recuperará y no se registrará ni reportará ninguna información. Esto se debe a que los resultados son engañosos cuando se utilizan rutinas conjuntas.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="ruby"
    title="Notas específicas de Ruby"
  >
    Cuando utilice la creación de perfiles de subprocesos con el agente Ruby, tenga en cuenta lo siguiente.

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Ruby agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Rastreos
          </td>

          <td>
            El generador de perfiles de subprocesos depende de la capacidad de capturar rastros de subprocesos desde su aplicación Ruby. Por este motivo, requiere <DNT>**CRuby 1.9.2 or higher**</DNT> (para el método `Thread#backtrace` ).
          </td>
        </tr>

        <tr>
          <td>
            Resque
          </td>

          <td>
            Actualmente, el agente Ruby no admite perfiles de subprocesos con trabajos en segundo plano de Resque. Una sesión de creación de perfiles de subprocesos iniciada en Resque solo capturará la traza del proceso principal, no de los procesos de trabajo.
          </td>
        </tr>

        <tr>
          <td>
            JRuby
          </td>

          <td>
            El soporte de JRuby se considera experimental en este momento. Hay problemas conocidos con la implementación `Thread#backtrace` de JRuby que afectarán la precisión y confiabilidad de los rastreos recopilados bajo JRuby.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
