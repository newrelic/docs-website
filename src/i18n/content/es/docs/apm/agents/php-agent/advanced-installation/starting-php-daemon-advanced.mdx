---
title: Iniciando el daemon PHP (avanzado)
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: 'Depending on your system, you can start New Relic''s PHP daemon in various agent or external startup modes.'
freshnessValidatedDate: never
translationType: machine
---

A menos que se indique lo contrario, la instalación estándar del agente PHP iniciará automáticamente el daemon si detecta que no se está ejecutando. La clave de licencia se configura para el agente en un archivo PHP INI y se puede modificar por directorio o por host virtual. El daemon también se configura mediante el archivo de configuración del agente (INI).

## Iniciando automáticamente newrelic-daemon (modo agente) [#daemon-autostart]

<Callout variant="tip">
  A menos que tenga motivos específicos para utilizar el modo de inicio externo, utilice este proceso de configuración automática. La mayoría de los usuarios consideran que esto es lo más fácil y menos propenso a errores, porque la configuración se realiza en un solo archivo y no es necesario iniciar el daemon.
</Callout>

Este modo utiliza la configuración de su archivo INI para configurar el daemon. También inicia automáticamente el daemon si el agente detecta que el daemon aún no se está ejecutando. A veces esto se denomina "modo agente".

En modo de inicio automático:

* La configuración daemon y todas las demás configuraciones globales están en su archivo ini global de PHP.
* El agente inicia automáticamente el daemon cada vez que se inicia (cada vez que se reinicia Apache/PHP-FPM o cuando inicia el agente en la línea de comando).
* Escribir permisos de acceso en el daemon archivo de log controla quién puede iniciar el daemon.
* El encabezado de inicio en el archivo `php-agent.log` incluye "agente" para indicar el modo de inicio automático.

Para utilizar el modo de inicio del agente:

1. Asegúrese de que el daemon no se esté ejecutando ejecutando `/etc/init.d/newrelic-daemon stop`.
2. Asegúrese de que `/etc/newrelic/newrelic.cfg` **no** exista. Si es así, muévalo a otro lugar o elimínelo.
3. Edite su archivo INI y configure las [opciones relacionadas con el daemon](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-daemon-settings). Estas opciones también están documentadas en el archivo de plantilla INI ubicado en `/usr/lib/newrelic-php5/scripts/newrelic.ini.template`.
4. Reinicie su servidor web o administrador de procesos PHP para retomar la nueva configuración.

## Selección del modo manual (externo) [#selecting-external]

En modo manual, debe iniciar el daemon y el servidor web para poder iniciar el agente. Esto también se conoce como modo "externo". A continuación se muestran ejemplos de por qué es posible que desee utilizar el modo manual en lugar del modo de inicio automático:

* Administra un sitio multiinquilino donde cada cliente tiene control sobre su propio servicio web. No querrá que todos los inquilinos ejecuten su propia copia privada del daemon, por lo que proporcionar una que se inicie en el momento del arranque del sistema y se comparta entre todos los inquilinos utiliza mejor los recursos del sistema. Cada cliente puede proporcionar su propia clave de licencia privada en sus archivos INI (o usted proporciona las claves de licencia en un host virtual).
* Desea conservar la capacidad de cerrar el daemon sin afectar el tiempo de actividad de su servidor web. Este modo garantiza que si necesita apagar el daemon , permanecerá cerrado hasta que reinicie el sistema o lo inicie nuevamente explícitamente.
* Quiere que el daemon se ejecute como root (o algún otro usuario con los permisos adecuados) para que el archivo de registro no tenga que estar expuesto a nadie excepto al root o a un usuario especial. El daemon archivo de log tiene el _potencial_, aunque sea bajo, de contener datos confidenciales.
* Se sentirá más cómodo si el daemon de servicio se inicia mediante un script de inicio tradicional.

## Iniciando manualmente `newrelic-daemon` (modo externo) [#daemon-external]

En modo de inicio manual (o externo):

* La configuración daemon está en `newrelic.cfg`.
* El daemon se inicia en el momento del inicio del sistema o ejecutando su script de inicio.
* El archivo de registro y los permisos del archivo de configuración controlan qué usuario puede iniciar y detener el daemon.
* El encabezado de inicio en el archivo `php-agent.log` incluye `init` para indicar el modo de inicio manual.

Si su archivo de configuración daemon está ubicado en `/etc/newrelic/newrelic.cfg`, el agente no intenta iniciar el daemon automáticamente. Si ha movido este archivo y aún desea utilizar este método de inicio, agregue lo siguiente a su archivo INI global: `newrelic.daemon.dont_launch = 3`.

Si desea utilizar este método de inicio externo:

1. Ir a:

   ```bash
   cp /etc/newrelic/newrelic.cfg.template /etc/newrelic/newrelic.cfg
   ```

2. Edite `/etc/newrelic/newrelic.cfg` y ajuste los valores necesarios.

3. Ejecute `/etc/init.d/newrelic-daemon restart`.

4. Reinicie su servidor web o administrador de procesos PHP para retomar la nueva configuración.

<InstallFeedback/>
