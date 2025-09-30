---
title: 'Instalación del agente PHP: ARM64'
tags:
  - Agents
  - PHP agent
  - Installation
  - Arm64
metaDescription: 'To install or update your New Relic PHP agent on ARM64, start here.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Si está compilando desde el código fuente, ARM64 solo es compatible con el agente PHP New Relic desde la versión 9.18.1 hasta la versión 10.9.0. Los archivos binarios ARM64 SÓLO se proporcionan a partir de la versión PHP 10.10.0 o posterior del agente New Relic.
</Callout>

## Instalación de tarball

Para instalar o actualizar el agente PHP New Relic en ARM64 con la versión PHP 10.10.0 o posterior del agente New Relic, siga las instrucciones de instalación desde un tarball que se encuentran en nuestros [documentos](/docs/apm/agents/php-agent/installation/php-agent-installation-overview/#install-tar) para obtener instrucciones de instalación.

## Construir desde la fuente

Para instalar o actualizar el agente PHP de New Relic en ARM64 con la versión 9.18.0 - 10.9.0 del agente PHP de New Relic, debe instalar la fuente del agente PHP de New Relic para la plataforma ARM64 <DNT>**[github.com/newrelic/newrelic-php-agent](https://github.com/newrelic/newrelic-php-agent)**</DNT>.

La creación del agente PHP New Relic para ARM64 desde el código fuente solo es compatible con Amazon Linux 2 y CentOS Linux 8 (incluido el uso con <DNT>**[AWS Graviton 2 processor](https://aws.amazon.com/ec2/graviton/)**</DNT>)

### Instalar dependencia

1. Ejecute el código apropiado:

   Para Amazon Linux 2:

   ```bash
   sudo yum update -y
   sudo yum install -y git 
   sudo yum install -y amazon-linux-extras
   sudo amazon-linux-extras install -y epel
   sudo amazon-linux-extras install -y golang1.11
   sudo yum -y groupinstall "Development Tools"
   sudo yum -y install \
      libcurl-devel \
      openssl-devel openssl-static \
      pcre-devel pcre-static \
      zlib-devel zlib-static
   sudo amazon-linux-extras install -y  php8.0
   sudo yum install -y php-devel
   ```

   Para CentOS 8 <DNT>**Ensure you have PHP 8.0 or 8.1 installed**</DNT>

   ```bash
   sudo yum update -y
   sudo yum -y install epel-release
   sudo yum -y groupinstall "Development Tools"
   sudo yum -y install dnf-plugins-core
   sudo yum config-manager --set-enabled powertools
   sudo yum -y install  libcurl-devel php-devel openssl-devel pcre-devel pcre-static zlib-devel zlib-static golang
   ```

### Clonar el agente [#clone]

<Callout variant="important">
  ARM64 solo es compatible a partir de la versión 9.18.1 o posterior.
</Callout>

Clonar de <DNT>**[github.com/newrelic/newrelic-php-agent](https://github.com/newrelic/newrelic-php-agent)**</DNT>. Aquí también puede sugerir un cambio y aprender cómo [contribuir](https://github.com/newrelic/newrelic-php-agent/issues) a nuestro repositorio de código abierto del agente PHP.

### Construir [#install]

<Callout variant="tip">
  El archivo <DNT>**[docs/development.md](https://github.com/newrelic/newrelic-php-agent/blob/main/docs/development.md)**</DNT> en el repositorio PHP de newrelic-agente tiene una guía detallada para la instalación.
</Callout>

Ejecute lo siguiente desde la parte superior del repositorio clonado:

1. `make all OPTIMIZE=1`
2. `sudo make agent-install`
3. `sudo mkdir /var/log/newrelic`
4. `sudo chmod 777 /var/log/newrelic`
5. `sudo cp bin/daemon /usr/bin/newrelic-daemon`

### Configurar el agente [#configure]

1. Copie el archivo `agent/scripts/newrelic.ini.template` al mismo directorio que `php.ini`. (Ejecute `php --ini` para obtener la ruta del archivo).

2. Una vez que haya creado `newrelic.ini` y lo haya colocado en la ubicación correcta, edite el archivo para agregar lo siguiente:

   * Agregue un

     <InlinePopover type="licenseKey"/>

     válido a la línea `newrelic.license = "INSERT_YOUR_LICENSE_KEY"`.

   * Cambie el nombre de la aplicación que se muestra en

     <DNT>
       **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
     </DNT>

     en la línea `newrelic.appname = "PHP Application"` (opcional).

<InstallFeedback/>
