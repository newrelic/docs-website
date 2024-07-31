---
title: Guía de transición del gerente de empleo de Sintético
tags:
  - Synthetics
  - Synthetic monitoring
  - Private locations
metaDescription: Upgrade your private locations from containerized private minion (CPM) to the synthetics job manager
freshnessValidatedDate: never
translationType: machine
---

A principios de 2022, lanzamos un [nuevo tiempo de ejecución](/docs/synthetics/synthetic-monitoring/using-monitors/new-runtime) para ubicación pública que simplificó la creación script , brindó acceso de monitor mediante script a Chrome 100 y Node.js 16 e introdujo la administración automatizada monitor con nuestra [API NerdGraph](/docs/apis/nerdgraph/examples/nerdgraph-synthetics-tutorial).

El administrador de trabajos Sintético lleva el monitor en el tiempo de ejecución más reciente a su ubicación privada, lo que permite que su monitor se acerque más a la experiencia de un usuario real.

## Imágenes de contenedores más pequeños para tu Sintético [#docker]

Los administradores de trabajos ejecutan su Sintético desde imágenes de contenedor específicas del tiempo de ejecución adaptadas a los trabajos que desea ejecutar. Mientras que llamadas por minuto agrupaba artefactos y tiempos de ejecución legacy en un archivo creciente, nuestro administrador de trabajos separa nuestro trabajo de Chrome, Node y administración de trabajos en imágenes separadas y más pequeñas.

Con más control sobre la configuración de trabajos para su ubicación privada, los administradores de trabajos también le permiten:

* Opte por no ejecutar un subconjunto de imágenes en tiempo de ejecución si no son necesarias para su monitor.
* Actualice sus imágenes en tiempo de ejecución (ping, API y browser) independientemente de las actualizaciones del administrador de trabajos de Sintético.
* Configura y dimensiona tu despliegue como quieras.

## Despliegue simplificado con gestores de trabajo [#deploy]

A diferencia de las llamadas por minuto, que utilizaban el intercambio de archivos para coordinar trabajos en la ubicación privada, los administradores de trabajos [se comunican vía HTTP](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager) con servicios web. Esto elimina ciertos requisitos de implementación, como especificar un volumen montado en su configuración Docker o volúmenes persistentes en su configuración de Kubernetes.

Simplificando el despliegue, el gestor de trabajos:

* Reduce la posibilidad de errores relacionados con permisos en entornos de alta seguridad.
* Reduce el riesgo de errores internos del motor al no crear más redes Docker únicas para trabajos monitor sin ping.
* Brinda un mejor soporte en la implementación de etiquetas, anotaciones, selectores de nodos, tolerancias y afinidad de Kubernetes en todos los componentes.

## Instala y configura tu monitor de ubicación privada [#monitorMigration]

¿Listo para descargar el administrador de trabajos? Tiene algunas opciones para comenzar. Consulte nuestro [documento de instalación](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager) para conocer los procedimientos de instalación o lea nuestro [documento de configuración](/docs/synthetics/synthetic-monitoring/private-locations/job-manager-configuration) para trabajar con [una ubicación privada](/docs/synthetics/synthetic-monitoring/private-locations/private-locations-overview-monitor-internal-sites-add-new-locations) nueva o existente.

Puede configurar tanto las llamadas por minuto como los administradores de trabajos con la misma clave de ubicación privada, pero llamadas por minuto ejecutará el monitor que usa el tiempo de ejecución legacy , los administradores de trabajos ejecutarán el monitor que usa el tiempo de ejecución más nuevo y el monitor de ping tendrá equilibrio de carga y ejecutado tanto por las llamadas por minuto como por los responsables de trabajo.

Si está ejecutando más de un contenedor de ubicación privada Docker en el mismo host, tendrá conflictos de puertos. Para evitar esta contención de puertos, asegúrese de hacer lo siguiente cuando comience a configurar administradores de trabajos:

* Ejecute administradores de trabajos y llamadas por minuto en diferentes hosts.
* Ejecute cada administrador de trabajos en un host independiente.
* Ejecute cada llamada por minuto en un host diferente.

¿Quieres un nuevo comienzo? Cree una nueva ubicación privada para el administrador de trabajos. La configuración de su ubicación privada y la ruta de migración dependen de sus preferencias personales.

## Actualiza tu monitor [#upgrade]

El administrador de trabajos de Sintético no es compatible con el tiempo de ejecución legacy . Las llamadas por minuto, por otro lado, no son compatibles con el tiempo de ejecución más reciente. Si sus administradores de trabajos y llamadas por minuto comparten una clave, entonces sus llamadas por minuto manejarán cualquier monitor en el tiempo de ejecución legacy , mientras que el administrador de trabajos manejará cualquier monitor en el tiempo de ejecución más nuevo. En otras palabras, las llamadas por minuto no pueden implementar monitores con script que utilicen Chrome 100 o Node.js 16.

Si desea actualizar su monitor:

1. Vaya a

   <DNT>
     **[one.newrelic.com > Synthetic monitoring](https://one.newrelic.com/synthetics-nerdlets)**
   </DNT>

   y luego seleccione el monitor que desea editar.

2. En la pestaña

   <DNT>
     **Settings**
   </DNT>

   , haga clic en

   <DNT>
     **General**
   </DNT>

   .

3. Cambie a la vista de tiempo de ejecución más reciente a través del menú desplegable. Para el monitor API con script, elija Node.js 16. Para monitorear el script del browser, elija Chrome 100+.

4. Si utiliza una ubicación privada separada para minion privado en contenedores y administradores de trabajos Sintético, actualice la selección de ubicación.

5. Haga clic en

   <DNT>
     **Validate**
   </DNT>

   para comprobar que su monitor funciona en el nuevo tiempo de ejecución. Realice modificaciones en el script si es necesario.

6. Ahorrar.

<Callout variant="tip">
  Consulte [nuestra guía de resolución de problemas de actualización en tiempo de ejecución](/docs/synthetics/synthetic-monitoring/troubleshooting/runtime-upgrade-troubleshooting) para conocer errores y soluciones de actualización comunes.
</Callout>

¿Decidió actualizar al nuevo tiempo de ejecución? Consulte nuestras [API de NerdGraph](/docs/apis/nerdgraph/examples/nerdgraph-synthetics-tutorial/#update-monitors) para actualizar el monitor mediante programación.

## Requisitos de versión [#requirements]

Algunas capacidades requieren una versión mínima del administrador de trabajos y de las imágenes del contenedor de tiempo de ejecución.

<table id="min-versions">
  <thead>
    <tr>
      <th>
        Capacidad
      </th>

      <th>
        Versión del administrador de trabajos
      </th>

      <th>
        Versiones de tiempo de ejecución
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        monitor de pasos
      </td>

      <td>
        release-332
      </td>

      <td>
        Tiempo de ejecución browser de nodo v2.2.22
      </td>
    </tr>

    <tr>
      <td>
        Monitor de enlaces rotos
      </td>

      <td>
        release-341
      </td>

      <td>
        Tiempo de ejecución de API de nodo v1.2.54
      </td>
    </tr>

    <tr>
      <td>
        Monitor de verificación de certificados
      </td>

      <td>
        release-341
      </td>

      <td>
        Tiempo de ejecución de API de nodo v1.2.54
      </td>
    </tr>

    <tr>
      <td>
        Soporte VSE
      </td>

      <td>
        release-345
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        Variables definidas por el usuario
      </td>

      <td>
        release-347
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        Módulos de nodo personalizados
      </td>

      <td>
        lanzamiento-360
      </td>

      <td>
        Tiempo de ejecución browser de nodo v2.2.49 Tiempo de ejecución de API de nodo v1.2.63
      </td>
    </tr>
  </tbody>
</table>
