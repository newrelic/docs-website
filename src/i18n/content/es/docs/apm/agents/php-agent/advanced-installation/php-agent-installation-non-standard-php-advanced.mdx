---
title: 'Instalación del agente PHP: PHP no estándar (avanzado)'
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: 'Non-standard PHP installations: To install your New Relic PHP agent with the newrelic-install script, or to install manually, start here.'
freshnessValidatedDate: never
translationType: machine
---

Si está utilizando una instalación PHP no estándar, siga este procedimiento para instalar New Relic correctamente. Esto es común en instancias donde el instalador predeterminado no encuentra su instalación de PHP (por ejemplo, si tiene PHP autocompilado o una stack de PHP independiente).

<Callout variant="important">
  Como parte del proceso de instalación, cambie el [nombre de la aplicación](/docs/site/naming-your-application) predeterminada por un nombre significativo.
</Callout>

## Requisitos [#prep]

Utilice la versión de línea de comando de PHP (`php -i`) o mire el resultado de `phpinfo()` para determinar:

* La versión de la extensión PHP (`20090626`, `20100525`, `20121212`, `20131226`, `20151012` o `20160303`)
* El directorio de instalación de la extensión o módulo.
* Si su versión de PHP ha sido compilada o no con soporte ZTS (Zend Thread Safety)

Las opciones de ZTS se aplican sólo a [las versiones del agente PHP 9.17 y anteriores](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9170300/). ZTS no está disponible para las versiones PHP 9.18 o superiores.

## Utilice el script newrelic-install de la línea de comando (recomendado) [#script]

1. Apunte New Relic al directorio correcto usando cualquiera de estas opciones:

   <CollapserGroup>
     <Collapser
       id="add-php-to-path"
       title="Agregue su ubicación PHP a su RUTA"
     >
       El script de instalación debe poder encontrar la línea de comando `php` o `php-config`. Puede agregar el directorio que contiene esos programas a su `PATH` actual.
     </Collapser>

     <Collapser
       id="nr-install-path"
       title="Establecer NR_INSTALL_PATH"
     >
       Puede ser una lista de directorios separados por dos puntos para la instalación de PHP, además de los de su `PATH`. Asegúrese de que estos directorios contengan `php` o `php-config`. Por ejemplo:

       ```bash
       NR_INSTALL_PATH=/u/php/5.3/bin; export NR_INSTALL_PATH
       newrelic-install
       ```
     </Collapser>

     <Collapser
       id="nr-install-phplist"
       title="Establecer el NR_INSTALL_PHPLIST"
     >
       Opcional: utilice una lista separada por dos puntos para establecer las ubicaciones exactas (directorios) donde buscar. Esta opción ignorará `PATH` y `NR_INSTALL_PATH`. Por ejemplo:

       ```bash
       NR_INSTALL_PHPLIST=/usr/local/bin:u/php/5.3/bin; export NR_INSTALL_PHPLIST
       newrelic-install
       ```
     </Collapser>
   </CollapserGroup>

2. Invoque el script `newrelic-install` desde su directorio. Dependiendo de su servidor y sus rutas, el script de instalación puede encontrar otras versiones de PHP en su sistema. Seleccione su versión específica de la lista.

Para obtener más información, consulte [Script de instalación de PHP](/docs/agents/php-agent/installation/newrelic-install-script).

## Instalar New Relic manualmente [#manual]

Si no desea utilizar el script de instalación, puede realizar una instalación completamente manual. Asegúrese de recopilar [información sobre su instalación de PHP](/docs/agents/php-agent/advanced-installation/php-agent-installation-non-standard-php-advanced/#prep). Puede revisar y obtener los valores adecuados de su `phpinfo()`. Luego cree y vincule o copie los archivos en su lugar manualmente.

### Obtener el parámetro de instalación de phpinfo()

Si este proceso no funciona para usted, puede obtener la información correcta de su `phpinfo()` y pasar la configuración adecuada a su sistema como variables de entorno.

<table>
  <thead>
    <tr>
      <th width={125}>
        phpinfo()
      </th>

      <th>
        Notas
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `PHPAPI`
      </td>

      <td>
        Esto está etiquetado como `PHP Extension` en el encabezado `phpinfo()` .
      </td>
    </tr>

    <tr>
      <td>
        `ARCH`
      </td>

      <td>
        Esto se puede determinar ejecutando `file /path/to/php`.

        * Si ve una referencia a `ELF-32`, entonces `ARCH` es `x86`.
        * Si ve una referencia a `ELF-64`, entonces `ARCH` es `x64`.
      </td>
    </tr>

    <tr>
      <td>
        `MODULEDIR`
      </td>

      <td>
        Esto está etiquetado como `extension_dir` en la sección PHP Core.
      </td>
    </tr>

    <tr>
      <td>
        `PHPZTS`
      </td>

      <td>
        Las opciones de ZTS se aplican sólo a [las versiones del agente PHP 9.19.0.309 y anteriores](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9200310/). ZTS no está disponible para las versiones del agente PHP 9.20.0.310 o superiores.

        Para determinar si ZTS está compilado, busque la configuración `Thread Safety` en la parte superior de la salida `phpinfo()` .

        * Si esto está deshabilitado, entonces `PHPZTS` está vacío.
        * Si esto está habilitado, entonces `PHPZTS` es la cadena `-zts`, que incluye un guión inicial como se indica.
      </td>
    </tr>

    <tr>
      <td>
        `NRBASEDIR`
      </td>

      <td>
        Este es el directorio base del directorio de instalación del agente New Relic; por ejemplo, `/usr/lib/newrelic-php5` o el directorio donde extrajo el archivo tar para instalaciones tarball.
      </td>
    </tr>
  </tbody>
</table>

Utilice esta información para ejecutar los siguientes comandos para instalar el módulo PHP. Asegúrese de ajustar los valores del ejemplo a su configuración real.

```bash
NRBASEDIR=/usr/lib/newrelic-php5; export NRBASEDIR
    MODULEDIR=/usr/lib/php/modules; export MODULEDIR
    ARCH=x64; export ARCH
    PHPAPI=20090626; export PHPAPI
    PHPZTS="-zts"; export PHPZTS
    rm -f $MODULEDIR/newrelic.so
    ln -s $NRBASEDIR/agent/$ARCH/newrelic-${PHPAPI}${PHPZTS}.so \
      $MODULEDIR/newrelic.so
```

### Configuración manual

El siguiente paso es la configuración.

1. Copie el `$NRBASEDIR/scripts/newrelic.ini.template` al directorio desde donde su instalación de PHP lee archivos de configuración adicionales y cámbiele el nombre a `newrelic.ini`.

   Para determinar el destino, mire el resultado `phpinfo()` del elemento, llamado `Scan this dir for additional .ini files`. Si el directorio listado es `(none)`, agregue configuraciones de este archivo a sus archivos de configuración PHP listados (generalmente `php.ini`).

2. Reemplace la configuración de la clave de licencia en su archivo `newrelic.ini` con su <InlinePopover type="licenseKey"/>. Cambie también cualquier otra sesión según sea necesario (por ejemplo, `newrelic.appname`).

3. Copie `$NRBASEDIR/daemon/newrelic-daemon.$architecture` a `/usr/bin/newrelic-daemon`.

   Dependiendo de su sistema, la arquitectura $ será x86 o x64.

4. Reinicie su despachador/servidor web.

5. Verifique que su sitio esté funcionando correctamente. Si no es así, elimine `newrelic.ini` o el `newrelic.so` que creó y reinicie su despachador/servidor web nuevamente para restaurar la operación anterior.

6. Examine los archivos de registro de su servidor web/dispatcher (**no** `newrelic`) para ayudar a determinar el problema. Si aún necesita ayuda, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com).

### Verificar la instalación

Compruebe que el agente esté instalado después del reinicio, investigando la página `phpinfo()` para ver una sección `newrelic` . Si parece que el agente se instaló correctamente, verifique su sistema para verificar que se estén ejecutando dos procesos `newrelic-daemon` :

* Para sistemas basados en RedHat:

  ```bash
  ps -aef | grep newrelic-daemon
  ```

* Para sistemas basados en Debian:

  ```bash
  ps aux | grep newrelic-daemon
  ```

Genere algo de tráfico en su aplicación y luego espere de tres a cinco minutos para que lleguen los resultados a su [página APM <DNT>**Summary**</DNT> ](/docs/apm/apm-ui-pages/monitoring/apm-summary-page-view-transaction-apdex-usage-data/).

<InstallFeedback/>
