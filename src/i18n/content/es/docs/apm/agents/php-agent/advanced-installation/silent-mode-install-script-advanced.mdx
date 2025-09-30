---
title: Modo silencioso para el script de instalación (avanzado)
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: Instructions for advanced PHP system administrators who will be deploying New Relic via systems such as Puppet or Chef.
freshnessValidatedDate: never
translationType: machine
---

Para instalar New Relic a través de sistemas como Puppet o Chef, el script [`newrelic-install`](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) puede ejecutarse en modo <DNT>**silent**</DNT> y controlarse mediante una serie de variables de entorno. Este documento proporciona información para configurar manualmente las variables de entorno para permitir que el [script de instalación PHP](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) se ejecute en modo silencioso.

## Elige un instalador [#install-choose]

Hay dos opciones disponibles al desplegar New Relic a través de sistemas como Puppet o Chef:

* Utilice Puppet para instalar los archivos utilizando el administrador de paquetes nativo (

  <DNT>
    **rpm**
  </DNT>

  o

  <DNT>
    **dpkg**
  </DNT>

  ).

* Distribuya el contenido de la distribución tarball y coloque los archivos en la ubicación seleccionada.

Si realiza la instalación a través de los sistemas de paquetes, el script de instalación del paquete coloca los archivos. Los sistemas basados en Ubuntu son una excepción, donde el script posterior a la instalación creará enlaces simbólicos para la extensión New Relic si tiene instalado el PHP estándar. Sin embargo, no intenta ejecutar `newrelic-install`, ya que eso depende de su script Puppet o Chef.

Para instalar New Relic a través de sistemas como Puppet o Chef, el script [`newrelic-install`](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) se puede ejecutar en modo <DNT>**silent**</DNT> y controlarse mediante una serie de variables de entorno.

## Establecer variables de entorno [#install-environment]

Esta es la lista de variables de entorno que puede configurar antes de invocar [`newrelic-install`](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) para controlar cómo se comporta. Además de utilizar estas variables de entorno, asegúrese de definir también su [clave de licencia](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-license) y [el nombre de la aplicación](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-appname) en su archivo `newrelic.ini` durante la instalación.

<Callout variant="important">
  `NR_INSTALL_SILENT` Determina si la instalación se ejecuta en modo silencioso. Cuando está configurado, toda la información para el script debe proporcionarse a través de estas variables de entorno.
</Callout>

<CollapserGroup>
  <Collapser
    id="NR_INSTALL_SILENT"
    title="NR_INSTALL_SILENT"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            flag
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Establezca cualquier valor para establecer el indicador en verdadero.
          </td>
        </tr>
      </tbody>
    </table>

    Si se configura, el [script](/docs/agents/php-agent/advanced-installation/using-newrelic-install-script) se ejecutará en modo silencioso. Esto sofocará la visualización de la mayoría de los mensajes de estado y no se detendrá para la entrada del usuario.

    Cuando se ejecuta en modo silencioso, toda la información del script debe proporcionarse a través de estas variables de entorno.

    Cuando esté configurado, debe invocar el script con la opción de línea de comando `install` o `uninstall` para configurar el modo de ejecución.
  </Collapser>

  <Collapser
    id="NR_INSTALL_NOKSH"
    title="NR_INSTALL_NOKSH"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            flag
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Establezca cualquier valor para establecer el indicador en verdadero.
          </td>
        </tr>
      </tbody>
    </table>

    Si está configurado, el script no intentará volver a ejecutarse con Bourne Again Shell (bash) o Korn Shell (ksh).

    El script utiliza características que no se encuentran en algunas implementaciones tradicionales de shell Bourne y, de forma predeterminada, intenta volver a ejecutarse con un shell que se sabe que implementa esas características.

    Si sabe que su `/bin/sh` es ksh o bash, puede evitar esta nueva ejecución estableciendo esta variable en cualquier valor.
  </Collapser>

  <Collapser
    id="NR_INSTALL_SHELL"
    title="NR_INSTALL_SHELL"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            camino
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Apunte el script a un shell compatible.
          </td>
        </tr>
      </tbody>
    </table>

    El script de instalación se basa en ciertas características que no están presentes en algunas implementaciones de shell Bourne muy antiguas. Si está implementando en un sistema de este tipo, configure esta variable para que apunte a un shell de reemplazo con el que el script se volverá a ejecutar.

    Esta variable se ignorará si se establece `NR_INSTALL_NOKSH` .

    Si su versión de `/bin/sh` es realmente un enlace anterior a las versiones 3.x de Zsh, es posible que deba configurarlo en un shell más compatible con Korn, como Bash.
  </Collapser>

  <Collapser
    id="NR_INSTALL_PATH"
    title="NR_INSTALL_PATH"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            lista de directorios separados por dos puntos
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Listar directorios para agregar a `$PATH`.
          </td>
        </tr>
      </tbody>
    </table>

    Contiene una lista de directorios separados por dos puntos para agregar al `$PATH` actual en el que buscar la instalación de PHP.

    Si tiene una instalación de PHP en una ubicación no estándar que no está en `$PATH` en el momento en que invoca el script desde Puppet o Chef, puede configurar esta variable. También puede editar el `PATH` directamente para que contenga esos directorios.
  </Collapser>

  <Collapser
    id="NR_INSTALL_PHPLIST"
    title="NR_INSTALL_PHPLIST"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            lista de directorios separados por dos puntos
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Lista de directorios en los que instalar New Relic.
          </td>
        </tr>
      </tbody>
    </table>

    Contiene una lista de directorios separados por dos puntos en los que instalar New Relic.

    Si se establece, contiene la lista exclusiva y se ignorará cualquier versión encontrada en `PATH` o en los directorios especificados en `NR_INSTALL_PATH` .
  </Collapser>

  <Collapser
    id="NR_INSTALL_ARCH"
    title="NR_INSTALL_ARCH"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Configúrelo en <DNT>**x86**</DNT> o <DNT>**x64**</DNT> para anular la detección basada en script .
          </td>
        </tr>
      </tbody>
    </table>

    Esto anulará el intento de determinar la arquitectura automáticamente.

    Si está ejecutando un sistema de 64 bits y configura esto en <DNT>**x86**</DNT>, forzará al script a instalar el daemon de 32 bits (si está instalando desde archivos tarball) y el agente.

    Configurarlo en <DNT>**x64**</DNT> instalará el daemon de 64 bits y permitirá que el script detecte si su versión de PHP es de 64 o 32 bits.

    No debería ser necesario configurar esto. Se proporciona para que esté completo.
  </Collapser>

  <Collapser
    id="NR_INSTALL_KEY"
    title="NR_INSTALL_KEY"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Establezca su New Relic <InlinePopover type="licenseKey"/>en nuevas instalaciones.
          </td>
        </tr>
      </tbody>
    </table>

    Si se trata de una instalación nueva y es necesario crear un nuevo archivo <DNT>**newrelic.ini**</DNT> , establezca este valor en la clave de licencia.
  </Collapser>

  <Collapser
    id="NR_INSTALL_INITSCRIPT"
    title="NR_INSTALL_INITSCRIPT"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            cadena
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Especifique el nombre del daemon de inicio objetivo.
          </td>
        </tr>
      </tbody>
    </table>

    Contiene el nombre del script de inicio daemon .

    Utilícelo si no desea utilizar el nombre predeterminado.
  </Collapser>

  <Collapser
    id="NR_INSTALL_DAEMONPATH"
    title="NR_INSTALL_DAEMONPATH"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            camino
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Especifique la ruta de instalación completa del daemon proxy New Relic.
          </td>
        </tr>
      </tbody>
    </table>

    Contiene la ruta completa de instalación del daemon proxy New Relic.

    Para todos los sistemas excepto Solaris, el valor predeterminado es `/usr/bin/newrelic-daemon`. Para Solaris, el valor predeterminado es `/opt/newrelic/bin/newrelic-daemon`.

    Si cambia esto, es posible que necesite editar el script <DNT>**init**</DNT> o sus archivos de configuración.
  </Collapser>

  <Collapser
    id="NR_INSTALL_USE_CP_NOT_LN"
    title="NR_INSTALL_USE_CP_NOT_LN"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            flag
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>

        <tr>
          <th>
            Usar:
          </th>

          <td>
            Establezca cualquier valor para establecer el indicador en verdadero.
          </td>
        </tr>
      </tbody>
    </table>

    Indica al script de instalación que copie el agente en su lugar en lugar de utilizar enlaces simbólicos. Esto es útil si ha extraído el agente en alguna ubicación (como el directorio de inicio del usuario raíz) a la que no puede acceder el proceso PHP.
  </Collapser>
</CollapserGroup>

<InstallFeedback/>
