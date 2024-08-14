---
title: 'Instalación del agente PHP: Ubuntu y Debian'
tags:
  - Agents
  - PHP agent
  - Installation
metaDescription: 'Ubuntu and Debian users: To install, upgrade, or uninstall your New Relic PHP agent, start here.'
freshnessValidatedDate: never
translationType: machine
---

Nuestro [agente PHP](/docs/agents/php-agent/getting-started/new-relic-php#configuration) auto-instrumentado su código para que pueda iniciar la aplicación de monitoreo. Estos son los procedimientos estándar para instalar nuestro agente PHP en Ubuntu o Debian. (Esto no es lo mismo que los procedimientos de Ubuntu y Debian para el [agente de monitoreo de infraestructura](/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-linux#apt-based)). Para otras situaciones, consulte los [procedimientos del agente PHP para instalación de PHP no estándar](/docs/php/php-agent-installation-non-standard-php).

## Versiones PHP [#php7]

El nombre del paquete para el agente PHP de New Relic es `newrelic-php5`. Aunque el nombre del paquete hace referencia a PHP 5, este paquete funciona para todas [las versiones de PHP compatibles](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#php-release).

## Uso recomendado `apt` [#use-apt]

Este es el método recomendado para la instalación y mantenimiento de New Relic.

<Callout variant="important">
  Ejecute los comandos de este procedimiento como root.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "75px" }}>
        Paso
      </th>

      <th>
        Notas
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **1.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Configure the New Relic apt repository.**
        </DNT>

        ```bash
        echo 'deb http://apt.newrelic.com/debian/ newrelic non-free' | sudo tee /etc/apt/sources.list.d/newrelic.list
        ```

        Este comando agrega `deb http://apt.newrelic.com/debian/ newrelic non-free` a `/etc/apt/sources.list.d/newrelic.list`. Crea el archivo si no existe.

        Este paso solo es necesario una vez por sistema.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **2.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Trust the New Relic GPG key.**
        </DNT>

        Este paso es necesario para registrar New Relic como una fuente autenticada donde apt-get buscará nuevos paquetes. Para obtener la clave apt pública de New Relic de los servidores de claves globales, ejecute el siguiente comando como root:

        ```bash
        wget -O- https://download.newrelic.com/548C16BF.gpg | sudo apt-key add -
        ```

        Si no ejecuta este comando como root, es posible que vea un mensaje de error sobre la clave pública.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **3.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Update the local package list.**
        </DNT>

        Ejecute el siguiente comando como root:

        ```bash
        sudo apt-get update
        ```
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **4.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Install the PHP agent.**
        </DNT>

        Ejecute el siguiente comando para instalar directamente desde el repositorio de New Relic:

        ```bash
        sudo apt-get install newrelic-php5
        ```
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **5.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Non-standard installations: Complete installation manually.**
        </DNT>

        Si no está utilizando los paquetes PHP predeterminados de Ubuntu o Debian, es posible que el paquete `newrelic-php5` no pueda configurar PHP automáticamente. Es posible que vea este error:

        ```
        Please run newrelic-install as root to complete installation.
        ```

        Si es así, ejecute el siguiente comando:

        ```bash
        sudo newrelic-install install
        ```
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **6.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Configure your application name and New Relic license key.**
        </DNT>

        El símbolo del proceso de instalación para el nombre de su aplicación y la clave de licencia. Su <InlinePopover type="licenseKey"/>aparece en la sección de información de la cuenta de <DNT>**Account settings**</DNT>. Para la instalación sin cabeza, también puede [preconfigurar su clave de licencia y el nombre de la aplicación usando `debconf`](#preseeding).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **7.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Restart your web server or FastCGI Process Manager (FPM).**
        </DNT>

        Genere tráfico para su aplicación y espere unos minutos hasta que su aplicación envíe datos a New Relic. Luego, [verifique el rendimiento de su aplicación en la UIde New Relic](/docs/apm/applications-menu/monitoring/apm-overview-page).
      </td>
    </tr>
  </tbody>
</table>

## Opcional: instalación desatendida [#unattended]

Para ejecutar una instalación desatendida, puede utilizar el modo no interactivo. Incluya la bandera `-y` para responder automáticamente `yes` a cualquier símbolo durante la instalación del paquete. Por ejemplo:

```bash
DEBIAN_FRONTEND=noninteractive apt-get -y install newrelic-php5
```

## Manual: Uso `dpkg` [#use-dpkg]

<Callout variant="important">
  Si usa `dpkg`, debe instalar las actualizaciones manualmente. Es por eso que New Relic recomienda el [método`apt` ](#use-apt)para instalación y mantenimiento. Ejecute los comandos de este procedimiento como root.
</Callout>

Para instalar el agente PHP manualmente usando `dpkg`:

<table>
  <thead>
    <tr>
      <th style={{ width: "75px" }}>
        Paso
      </th>

      <th>
        Notas
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **1.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Copy the URL for the package download.**
        </DNT>

        Navegue hasta la URL adecuada para su arquitectura y copie la URL completa de los paquetes `newrelic-daemon`, `newrelic-php5-common` y `newrelic-php5` más recientes:

        * [arquitectura de 32 bits](https://download.newrelic.com/debian/dists/newrelic/non-free/binary-i386/)
        * [arquitectura de 64 bits](https://download.newrelic.com/debian/dists/newrelic/non-free/binary-amd64/)
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **2.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Download the package.**
        </DNT>

        Ejecute el siguiente comando `wget` , reemplazando `https://LINK_TO_PACKAGE` con la URL completa del paquete:

        ```bash
        wget -L https://LINK_TO_PACKAGE
        ```
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **3.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Install the PHP agent.**
        </DNT>

        Ejecute el comando apropiado como root, reemplazando `X.X.X.X` con la versión actual:

        <DNT>
          **32-bit:**
        </DNT>

        ```bash
        dpkg -i newrelic-php5-common_X.X.X.X_all.deb newrelic-daemon_X.X.X.X_i386.deb newrelic-php5_X.X.X.X_i386.deb
        ```

        <DNT>
          **64-bit:**
        </DNT>

        ```bash
        dpkg -i newrelic-php5-common_X.X.X.X_all.deb newrelic-daemon_X.X.X.X_amd64.deb newrelic-php5_X.X.X.X_amd64.deb
        ```
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **4.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Configure your application name and New Relic license key.**
        </DNT>

        El símbolo del proceso de instalación para el nombre de su aplicación y la clave de licencia. Su <InlinePopover type="licenseKey"/>aparece en la sección de información de la cuenta de <DNT>**Account settings**</DNT>. Para la instalación sin cabeza, también puede [preconfigurar su clave de licencia y el nombre de la aplicación usando `debconf`](#preseeding).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **5.**
        </DNT>
      </td>

      <td>
        <DNT>
          **Restart your web server or FastCGI Process Manager (FPM).**
        </DNT>

        Genere tráfico para su aplicación y espere unos minutos hasta que su aplicación envíe datos a New Relic. Luego, [verifique el rendimiento de su aplicación en la UIde New Relic](/docs/apm/applications-menu/monitoring/apm-overview-page).
      </td>
    </tr>
  </tbody>
</table>

<InstallFeedback/>

## Sin cabeza: clave de licencia preestablecida y nombre de la aplicación [#preseeding]

Para la instalación sin cabeza, puede preconfigurar su <InlinePopover type="licenseKey"/>y [el nombre de la aplicación](/docs/site/naming-your-application). Debe utilizar los paquetes php5 predeterminados proporcionados por su distribución. Para preconfigurar, establezca valores en su base de datos `debconf` usando [`debconf-set-selections`](http://manpages.ubuntu.com/manpages/trusty/en/man1/debconf-set-selections.1.html).

<Callout variant="important">
  Estas configuraciones se ignorarán si no estás utilizando un PHP empaquetado. Serás símbolo para ejecutar `newrelic-install`.
</Callout>

Estas claves se encuentran en el paquete `newrelic-php5` :

<table>
  <thead>
    <tr>
      <th>
        Nombre
      </th>

      <th width="100px">
        Tipo
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        ```
        newrelic-php5/application-name
        ```

        El nombre de tu aplicación. Esta cadena establece [`newrelic.appname`](/docs/php/php-agent-phpini-settings#inivar-appname) en su `newrelic.ini`.
      </td>

      <td>
        cadena
      </td>
    </tr>

    <tr>
      <td>
        ```
        newrelic-php5/license-key
        ```

        Tu <InlinePopover type="licenseKey"/>. Esta cadena establece [`newrelic.license`](/docs/php/php-agent-phpini-settings#inivar-license) en su `newrelic.ini`.
      </td>

      <td>
        cadena
      </td>
    </tr>
  </tbody>
</table>

Por ejemplo, puede ejecutar estos comandos para preconfigurar el nombre de su aplicación y la clave de licencia:

```bash
echo newrelic-php5 newrelic-php5/application-name string "My App Name" | debconf-set-selections
echo newrelic-php5 newrelic-php5/license-key string "YOUR_LICENSE_KEY" | debconf-set-selections
```

<InstallFeedback/>
