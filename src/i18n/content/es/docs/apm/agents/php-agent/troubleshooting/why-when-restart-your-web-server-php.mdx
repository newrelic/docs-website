---
title: Por qué y cuándo reiniciar su servidor web (PHP)
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'Why and when you must restart your web server when using the New Relic PHP agent, with links to detailed procedures and troubleshooting steps.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

No estás seguro de por qué o cuándo debes reiniciar tu servidor web (Apache, PHP-FPM, Nginx, etc.) después de:

* [Instalación](/docs/agents/php-agent/installation/php-agent-installation-overview) o [actualización](/docs/agents/php-agent/installation/upgrading-php-agent) del agente PHP
* [Actualización de PHP](/docs/agents/php-agent/troubleshooting/agent-stops-working-after-updating-php) a una versión principal
* Cambiar cualquier [configuración](/docs/agents/php-agent/configuration/php-agent-configuration) de agente en los archivos `newrelic.ini` o `newrelic.cfg`
* Utilizando [el modo de inicio externo](/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced#selecting-external) para el daemon

## Causa

El agente PHP es una extensión de PHP. Cuando su servidor web se inicia y carga PHP, también carga el agente PHP y analiza su archivo de configuración `newrelic.ini` . El servidor web utiliza esa configuración hasta que se le indica que vuelva a cargar y analizar los archivos de configuración. Reiniciando el símbolo del servidor web para hacerlo.

Debe reiniciar su servidor web cuando:

<CollapserGroup>
  <Collapser
    id="config"
    title="Modificas tu archivo de configuración."
  >
    Los cambios de configuración en los archivos `newrelic.ini` o <DNT>**`newrelic.cfg`**</DNT> [no surten efecto](/docs/agents/php-agent/troubleshooting/ini-settings-not-taking-effect-immediately) (por ejemplo, nombrar su aplicación, generar un registro, cambiar su clave de licencia) hasta que reinicie el servidor web.
  </Collapser>

  <Collapser
    id="package-manager-auto-update"
    title="Su administrador de paquetes actualiza automáticamente el agente sin reiniciar el servidor web."
  >
    <Callout variant="tip">
      Para evitar esta situación, establezca una exclusión para `newrelic-php5*` en su administrador de paquetes.
    </Callout>

    Si su administrador de paquetes [actualiza automáticamente el agente](/docs/agents/php-agent/installation/upgrading-php-agent), debe reiniciar su servidor web. Actualizar el agente sin reiniciar puede hacer que el agente deje de generar informes.

    Este problema ocurre cuando la actualización automática está habilitada y el daemon se actualiza a una nueva versión. El nuevo daemon entonces no puede comunicarse con el agente, que todavía ejecuta la versión anterior.

    Para evitar esto, se debe iniciar el nuevo agente después de la actualización. Este proceso es complicado porque un reinicio completo del agente también requiere que reinicie el software de su servidor web.
  </Collapser>

  <Collapser
    id="daemon-external-mode"
    title="El daemon está configurado para iniciarse en modo externo."
  >
    Si tiene el agente en [modo de inicio externo](/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced#selecting-external), debe [iniciar manualmente el daemon](/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced#daemon-external) y reiniciar el agente para que el agente informe.
  </Collapser>

  <Collapser
    id="full-restart"
    title={<>Apache no se reinicia completamente con el comando <InlineCode>apachectl restart</InlineCode> .</>}
  >
    El uso del comando `apachectl restart` no siempre reinicia completamente el servidor web, por lo que no vuelve a analizar los archivos de configuración del agente. New Relic recomienda usar:

    ```
    apachectl stop
    apachectl start
    ```
  </Collapser>
</CollapserGroup>
