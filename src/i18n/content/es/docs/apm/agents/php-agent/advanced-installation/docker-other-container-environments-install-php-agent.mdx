---
title: 'Docker y otros entornos de contenedores: instale el agente PHP'
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: How to install New Relic's PHP agent inside a Docker container or other container to monitor your PHP apps.
freshnessValidatedDate: never
translationType: machine
---

Puede instalar el agente PHP en un contenedor Docker u otro contenedor para monitor una o más de sus aplicaciones PHP. Esto es compatible con contenedores que cumplen con los [requisitos y la compatibilidad del agente PHP](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements) estándar.

<Callout variant="important">
  El daemon del agente PHP transmite datos a New Relic periódicamente durante el [ciclo de recolección](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#harvest-cycle) de un minuto de duración. Si inicia y derriba contenedores con frecuencia, asegúrese de dejar el contenedor daemon ejecutándose el tiempo suficiente para transmitir los datos restantes.
</Callout>

## Opciones de contenedor [#overview]

El agente PHP requiere dos componentes para funcionar: el agente PHP (uno para cada aplicación) y un [daemon](/docs/agents/php-agent/getting-started/new-relic-daemon-processes), que agrega datos enviados desde uno o más agentes y los envía a New Relic. Por este motivo, existen dos opciones para habilitar el agente PHP para entornos contenedor:

* [Instale el agente y daemon en contenedores diferentes.](#install-diff-containers) Esta es la configuración recomendada.
* [Instale el agente y daemon en el mismo contenedor.](#install-same-container) Esto puede resultar útil si desea reducir el número de contenedores.

## Instale el agente y daemon en contenedores diferentes [#install-diff-containers]

La instalación del agente y daemon en contenedores diferentes se admite en las versiones PHP Agnet 9.2 y superiores.

Para ver una aplicación de ejemplo, vaya al [Foro de soporte de New Relic](https://discuss.newrelic.com/t/relic-solution-php-agent-and-daemon-containers/84841). Si está utilizando contenedores de aplicaciones de corta duración, le recomendamos que utilice un contenedor separado para el daemon del agente PHP.

<Callout variant="caution">
  Los datos transmitidos desde el agente al daemon **no** están cifrados. La única excepción a esto es la [ofuscación de SQL](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-sql) que ocurre antes de enviar datos al daemon. Si el agente y daemon se ejecutan en hosts diferentes, le recomendamos que utilice una conexión de red privada entre el agente y daemon.
</Callout>

### Configurar el contenedor daemon [#daemon-container]

Si usa Docker, puede extraer nuestra imagen de daemon desde [docker Hub](https://hub.docker.com/r/newrelic/php-daemon):

1. Ejecute este comando: `docker pull newrelic/php-daemon`.
2. Para personalizar la imagen, siga los pasos en [Docker Hub](https://hub.docker.com/r/newrelic/php-daemon).

También puedes crear tu propia imagen daemon :

1. Para instalar el daemon, descargue el paquete del agente PHP desde [el sitio de descarga de archivos tar](/docs/agents/php-agent/installation/php-agent-installation-tar-file) de New Relic y ejecute el script `newrelic-install` con el argumento `install_daemon`.
2. Inicie el daemon usando los argumentos `--address` y `--watchdog-foreground`.

El argumento `--address` establece un puerto para que el daemon acepte conexiones. El argumento `--watchdog-foreground` garantiza que el daemon se ejecute en primer plano.

### Configurar el contenedor del agente PHP [#agent-container]

Para configurar el contenedor del agente PHP para Docker:

1. Asegúrese de que haya una instalación de PHP disponible en el contenedor. Por ejemplo, utilice una imagen Docker publicada como `php:7.1`.

2. Para instalar el agente, descargue el paquete del agente PHP desde [el sitio de descarga de archivos tar](/docs/agents/php-agent/installation/php-agent-installation-tar-file) de New Relic y ejecute el script `newrelic-install` con el argumento `install` .

3. En el archivo `newrelic.ini` , configure el nombre de la aplicación y

   <InlinePopover type="licenseKey"/>

   con las entradas `newrelic.appname` y `newrelic.license` .

4. Dirija al agente al daemon configurando la opción `newrelic.daemon.address` en el archivo `newrelic.ini`. Asegúrese de que el valor de esta opción sea `HOST:PORT`, donde `HOST` es el nombre o la dirección IP del host donde se ejecuta el daemon y `PORT` es el número de puerto donde el daemon está escuchando.

## Instalar agente y daemon en el mismo contenedor [#install-same-container]

<Callout variant="caution">
  De forma predeterminada, la primera transacción hace que el agente active el inicio daemon y la inicialización de la conexión de la aplicación. Por motivos de rendimiento, el agente no espera a que se completen esas operaciones antes de inicializar la conexión. Esto puede resultar en la pérdida de las primeras transacciones después del inicio de un contenedor. Para evitar esta pérdida, establezca las entradas `newrelic.daemon.start_timeout` y `newrelic.daemon.app_connect_timeout` en el archivo `newrelic.ini` con nuestros [valores recomendados](https://discuss.newrelic.com/t/php-troubleshooting-framework-configuration/119980) de 5 y 15 respectivamente.
</Callout>

Para configurar el agente PHP y daemon en el mismo contenedor Docker :

1. Asegúrese de que haya una instalación de PHP disponible en el contenedor. Por ejemplo: podrías usar una imagen Docker publicada como `php:7.1`.

2. Para instalar el agente, descargue el paquete del agente PHP desde [el sitio de descarga de archivos tar](/docs/agents/php-agent/installation/php-agent-installation-tar-file) de New Relic y ejecute el script `newrelic-install` con el argumento `install` .

3. Establezca el nombre de la aplicación y

   <InlinePopover type="licenseKey"/>

   mediante las entradas `newrelic.license` y `newrelic.appname` en el archivo `newrelic.ini` .

<CollapserGroup>
  <Collapser
    id="dockerfile-example"
    title="Ejemplo de archivo Docker"
  >
    ```dockerfile
    FROM php:7.1

    RUN \
      curl -L PHP_AGENT_URL | tar -C /tmp -zx && \
      export NR_INSTALL_USE_CP_NOT_LN=1 && \
      export NR_INSTALL_SILENT=1 && \
      /tmp/newrelic-php5-*/newrelic-install install && \
      rm -rf /tmp/newrelic-php5-* /tmp/nrinstall* && \
      sed -i \
          -e 's/"REPLACE_WITH_REAL_KEY"/"YOUR_LICENSE_KEY"/' \
          -e 's/newrelic.appname = "PHP Application"/newrelic.appname = "YOUR_APPLICATION_NAME"/' \
          -e 's/;newrelic.daemon.app_connect_timeout =.*/newrelic.daemon.app_connect_timeout=15s/' \
          -e 's/;newrelic.daemon.start_timeout =.*/newrelic.daemon.start_timeout=5s/' \
          /usr/local/etc/php/conf.d/newrelic.ini
    ```

    Debes editar tres partes de este Dockerfile de ejemplo:

    * `PHP_AGENT_URL`: La URL de descarga para la versión de su agente PHP. Para encontrar la versión más reciente del agente, vaya a

      <DNT>
        **[download.newrelic.com/php_agent/release/](https://download.newrelic.com/php_agent/release/)**
      </DNT>

      .

    * `YOUR_LICENSE_KEY`: Reemplace esto con su

      <InlinePopover type="licenseKey"/>

      . Tenga en cuenta que `"REPLACE_WITH_REAL_KEY"` es una cadena real en el archivo

      <DNT>
        **newrelic.ini**
      </DNT>

      predeterminado para el agente PHP. No edites esa cadena. El comando `sed` reemplaza esa cadena predeterminada con la clave real de 40 caracteres, entre comillas.

    * `YOUR_APPLICATION_NAME`: Reemplace con el nombre de su aplicación, entre comillas.
  </Collapser>
</CollapserGroup>

<Callout variant="tip">
  Aquí hay algunos recursos de resolución de problemas Docker :

  * [Monitoreo de contenedores que ejecutan un único script PHP](https://discuss.newrelic.com/t/relic-solution-single-php-script-docker-containers/80386)
  * [Consejos de resolución de problemas para el agente PHP.](https://discuss.newrelic.com/t/php-troubleshooting-framework-configuration/119980)
</Callout>

<InstallFeedback/>
