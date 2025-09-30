---
title: Utilice el script newrelic-install para PHP
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: The New Relic PHP agent's newrelic-install script is useful for multiple PHP installations as well as installations in non-standard locations.
freshnessValidatedDate: never
translationType: machine
---

El script interactivo `newrelic-install` simplifica la instalación de la aplicación PHP en New Relic. Funciona con múltiples instalaciones de PHP, así como con instalaciones en ubicaciones no estándar. Ejecutarlo hará:

* Copie los módulos PHP correctos en su lugar.
* Instale archivos `ini` de muestra.
* Configure el daemon proxy New Relic.

<Callout variant="important">
  Asegúrese de revisar la información sobre [cómo trabajar con múltiples instalaciones y ubicaciones no estándar](#install-multiple) antes de ejecutar el script.
</Callout>

## Encuentra el script del instalador [#location]

La ubicación del script del instalador depende de cómo instaló el agente PHP de New Relic.

* A través del administrador de paquetes del sistema: el script de instalación se encuentra en el directorio `/usr/bin` .
* A través de un tarball: el script de instalación se encuentra en el directorio donde extrajo el archivo `tar` . El script en la distribución `tar` incluye pasos de instalación que de otro modo serían manejados por el administrador de paquetes.

## Trabajar con múltiples instalaciones de PHP [#install-multiple]

Para que `newrelic-install` detecte correctamente varias instalaciones, asegúrese de que su variable de entorno `PATH` esté configurada correctamente. El script `newrelic-install` solo puede instalar el agente para las versiones que puede encontrar.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
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
        Especificar directorios adicionales
      </td>

      <td>
        Utilice la variable de entorno `NR_INSTALL_PATH` con una lista separada por dos puntos.
      </td>
    </tr>

    <tr>
      <td>
        Anular `NR_INSTALL_PATH` y `PATH`
      </td>

      <td>
        Especifique un conjunto de directorios en la variable de entorno `NR_INSTALL_PHPLIST` como una lista separada por dos puntos. Estos directorios deben contener la versión de línea de comando de PHP o el script `php-config` .
      </td>
    </tr>
  </tbody>
</table>

## Invocar el script del instalador [#invocation]

El script tiene dos modos: [instalar](#install-install) y [desinstalar](#install-uninstall). Si lo invocas sin argumentos, se te mostrará el símbolo para seleccionar un modo.

Desde la línea de comando, ejecute [el script](https://github.com/newrelic/newrelic-php-agent/blob/main/agent/newrelic-install.sh) en su ubicación:

* A través del administrador de paquetes del sistema: `/usr/bin/newrelic-install`
* A través de un directorio de archivo `tar` : `./newrelic-install`

## Utilice el modo de instalación [#install-install]

Siga este proceso para instalar New Relic.

<CollapserGroup>
  <Collapser
    id="invoke"
    title="1. Invoque el modo de instalación."
  >
    Invoque el modo de instalación utilizando <DNT>**one**</DNT> de estos métodos:

    * Ejecute `newrelic-install` con la opción de línea de comando `install` .
    * Ejecute `newrelic-install` sin opciones y seleccione la opción de instalación en el menú principal al invocar el script.
  </Collapser>

  <Collapser
    id="license-key"
    title="2. Proporcione su clave de licencia de New Relic."
  >
    En el símbolo, ingresa tu New Relic <InlinePopover type="licenseKey"/>. Esta clave se insertará en cualquier archivo INI creado durante el resto del proceso de instalación.
  </Collapser>

  <Collapser
    id="select-version"
    title="3. Seleccione qué versión de PHP usar si corresponde."
  >
    Si `newrelic-install` encuentra más de una versión de PHP, seleccione qué versión de PHP usar. No verá esta pantalla si el script solo encuentra una única versión de PHP.

    <DNT>**Example:**</DNT> El menú muestra siete opciones:

    ```
    1)   /usr/bin
    2)   /usr/local/php/5.2.16/bin
    3)   /usr/local/php/5.2.16-zts/bin
    4)   /usr/local/php/5.3.4/bin
    5)   /usr/local/php/5.3.4-zts/bin
    6)   /usr/local/php/5.4.19-zts/bin
    7)   /usr/local/php/5.5.4-zts/bin

    0)   Exit

    Select (1-7, 0 to exit, or all):
    ```

    Las opciones de ZTS se aplican sólo a [las versiones del agente PHP 9.17 y anteriores](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9170300/). ZTS no está disponible para las versiones PHP 9.18 o superiores.

    En el menú, utilice cualquiera de estas opciones:

    * Para seleccionar solo una versión, ingrese el número que indica la versión que desea utilizar.
    * Para seleccionar varias versiones, ingrese una lista de números separados por comas o espacios.
    * Para seleccionar todas las versiones enumeradas, ingrese la palabra clave `all`.
    * Para salir del proceso de instalación, ingrese `0`.

    Para cada directorio seleccionado, el script intentará instalar el agente en el lugar adecuado e informará sobre cada intento.

    <Callout variant="important">
      Para instalaciones PHP que permiten múltiples archivos `.ini` , el script de instalación copiará un archivo de plantilla en su lugar, si aún no hay uno modificado instalado. Tome nota de los `.ini` archivos que deberá modificar manualmente.
    </Callout>

    A partir de [la versión 4.0 del agente PHP](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-40518), el instalador no funcionará correctamente si detecta una única versión de PHP 5.1, que está en desuso (2013). Si debe ejecutar PHP 5.1, utilice [la versión 3.9.5.13 del agente PHP](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-39513). Si necesita ayuda, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com).
  </Collapser>

  <Collapser
    id="daemon"
    title="4. Instale el daemon si corresponde."
  >
    Si el administrador de paquetes no instaló el daemon , daemon.

    Si se trata de una actualización o reinstalación, el script proporciona un símbolo de confirmación antes de sobrescribir la copia anterior del daemon.

    Si la instalación se realiza correctamente, el script mostrará este mensaje final:

    ```
    New Relic is now installed on your system. Congratulations!
    ```
  </Collapser>

  <Collapser
    id="restart-web-server"
    title="5. Reinicie su servidor web."
  >
    Para activar el agente PHP, reinicie su servidor web.

    Si está ejecutando PHP-FPM, es posible que también necesite reiniciar PHP-FPM por separado antes de que el agente esté activo.
  </Collapser>

  <Collapser
    id="archive-file"
    title="6. Tenga en cuenta su archivo de almacenamiento."
  >
    Anote el nombre y la ubicación del archivo de instalación. Este archivo estará ubicado en `/tmp/nrinstall-nnnn.tar` y contendrá tanto el log de instalación como información útil del sistema para ayudar al soporte técnico de New Relic con la resolución de problemas.
  </Collapser>

  <Collapser
    id="configuration"
    title="7. Ajuste su configuración."
  >
    Después de instalar New Relic con éxito y reiniciar su servidor web, puede comenzar a recopilar datos sobre su aplicación. Después de unos minutos, los datos comenzarán a aparecer en su [página APM <DNT>**Summary**</DNT> ](/docs/apm/apm-ui-pages/monitoring/apm-summary-page-view-transaction-apdex-usage-data/).

    Para ajustar el funcionamiento tanto del agente PHP como daemon, revise las [opciones de configuración de PHP](/docs/agents/php-agent/configuration/php-agent-configuration).
  </Collapser>
</CollapserGroup>

## Utilice el modo install_daemon [#install-daemon-mode]

Para instalar el daemon sin el agente, utilice el agente PHP 9.2 o superior. Ejecute `newrelic-install` con la opción de línea de comando `install_daemon` .

Esto es útil si el daemon se ejecuta en un host diferente o en un contenedor diferente al de la aplicación PHP. Por ejemplo, esto puede suceder con [la instalación del agente en el contenedor](/docs/agents/php-agent/advanced-installation/install-php-agent-docker).

<InstallFeedback/>

## Solucionar problemas de instalación de PHP [#troubleshoot]

Si hubo problemas con el proceso de instalación, revise [No aparecen datos](/docs/agents/php-agent/troubleshooting/no-data-appears-php) y otros documentos de resolución de problemas antes de comunicarse con New Relic para obtener soporte. Asegúrese de adjuntar su [archivo comprimido](#archive-file) a cualquier informe de error, así como al resultado de la función [`phpinfo()`](/docs/agents/php-agent/troubleshooting/submitting-troubleshooting-results-php) producida por su servidor web.

## Modo de desinstalación [#install-uninstall]

Puede desinstalar New Relic pero conservar valiosos archivos de configuración (útiles al actualizar) o desinstalar permanentemente New Relic de su sistema.

<CollapserGroup>
  <Collapser
    id="uninstall-keep"
    title="Desinstale y conserve los archivos de configuración."
  >
    Este método es útil cuando desea desinstalar y actualizar. La desinstalación no elimina archivos de configuración importantes, como el archivo de configuración de su daemon . Además, no elimina ningún archivo `newrelic.ini` que haya modificado.

    Para desinstalar New Relic usando el script de instalación, use cualquiera de estas opciones:

    * Invocar `newrelic-install` con la opción `uninstall` .
    * Ejecute `newrelic-install` sin opciones y seleccione la opción de desinstalación en el menú principal al invocar el script.
  </Collapser>

  <Collapser
    id="uninstall-permanent"
    title="Desinstalar permanentemente New Relic."
  >
    Para desinstalar permanentemente New Relic de su sistema: invoque `newrelic-install` con la opción `purge` .

    Esto eliminará todos los archivos de configuración y cualquier enlace creado en el momento de la instalación. Esto **no** afectará ningún parámetro de configuración colocado en archivos como `php.in`. Además, esto **no** eliminará los paquetes de software instalados en el sistema.

    Para eliminar los paquetes de software New Relic instalados con un administrador de paquetes, consulte [Desinstalación de RedHat y CentOS](/docs/php/php-agent-installation-redhat-and-centos#uninstalling) o [Desinstalación de Ubuntu y Debian](/docs/php/php-agent-installation-ubuntu-and-debian#uninstalling).
  </Collapser>
</CollapserGroup>
