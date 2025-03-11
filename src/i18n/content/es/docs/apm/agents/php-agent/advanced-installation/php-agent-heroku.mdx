---
title: Agente PHP y Heroku
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: 'How to install, configure, and troubleshoot the New Relic PHP agent on Heroku.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](//www.heroku.com/) es una solución de plataforma como servicio (PaaS) para alojar aplicaciones web en varios idiomas, incluido PHP. Con New Relic, puedes extender Heroku con métrica de [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm/getting-started/welcome-new-relic-apm)y [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/new-relic-browser).

## Prepara tu solicitud [#Preparing]

Antes de instalar el agente PHP, asegúrese de que su aplicación web PHP esté instalada y ejecutándose en Heroku. Para obtener más información, consulte [Introducción a PHP en Heroku](//devcenter.heroku.com/articles/getting-started-with-php).

## Instalar el agente PHP [#installing]

Después de implementar su aplicación PHP en Heroku, instale nuestro agente PHP:

<CollapserGroup>
  <Collapser
    id="via_heroku"
    title="A través del sitio web de Heroku"
  >
    Para instalar el complemento New Relic a través del sitio web de Heroku:

    1. Desde la [página del complemento New Relic](https://elements.heroku.com/addons/newrelic#pricing), seleccione un plan de suscripción.

    2. En el menú desplegable <DNT>**Select an app**</DNT> , seleccione su aplicación.

    3. Dale a tu aplicación un [nombre descriptivo](#naming) con este comando del cinturón de herramientas de Heroku:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='YOUR_APP_NAME'
       ```

    4. Inserte un cambio en Heroku (por ejemplo, `git commit --allow-empty`) para habilitar la extensión PHP durante la compilación.

    5. Genera algo de tráfico a tu aplicación.
  </Collapser>

  <Collapser
    id="via_toolbelt"
    title="A través del cinturón de herramientas Heroku"
  >
    Para instalar el complemento New Relic con el cinturón de herramientas Heroku:

    1. A través del cinturón de herramientas de Heroku, ejecute el siguiente comando y sustituya el [plan de suscripción apropiado](https://elements.heroku.com/addons/newrelic#pricing):

       ```bash
       heroku addons:create newrelic:YOUR_PLAN_LEVEL
       ```

    2. Dale a tu aplicación un [nombre descriptivo](#naming) con este comando del cinturón de herramientas de Heroku:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='YOUR_APP_NAME'
       ```

    3. Inserte un cambio en Heroku (por ejemplo, `git commit --allow-empty`) para habilitar la extensión PHP durante la compilación.

    4. Genera algo de tráfico a tu aplicación.
  </Collapser>
</CollapserGroup>

En unos minutos, los datos deberían empezar a aparecer en su [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page). Si no aparecen datos, consulte los procedimientos [de verificación](#verifying) y [resolución de problemas](#troubleshooting) en este documento.

## Configurar el agente en Heroku [#config]

Heroku configura automáticamente las variables de entorno predeterminadas para su aplicación. Para personalizar su configuración, cree y cargue un archivo <DNT>**newrelic.ini**</DNT> en Heroku:

1. Descargue una copia "limpia" de [`newrelic.ini_.heroku`](./files/newrelic.ini_.heroku) \[INI | 16KB].

2. Cambie el nombre del archivo de `newrelic.ini_.heroku` a `newrelic.ini`.

3. Copie `newrelic.ini` al directorio raíz del repositorio de su proyecto.

4. Personalice su configuración como se describe en [Configuración del agente PHP](/docs/agents/php-agent/configuration/php-agent-configuration).

   <Callout variant="caution">
     No cambie `newrelic.license`, `newrelic.loglevel` o `newrelic.appname`. Estas configuraciones están configuradas por el cinturón de herramientas Heroku.
   </Callout>

5. Confirme los cambios de su archivo de configuración en su repositorio y envíe sus cambios a Heroku.

6. Indique a Heroku que use su archivo de configuración personalizado a través de este comando del cinturón de herramientas de Heroku:

   ```bash
   heroku config:set NEW_RELIC_CONFIG_FILE=newrelic.ini
   ```

## Nombra tu aplicación [#naming]

Para garantizar que las métricas de cada aplicación se informen por separado, [asigne a cada aplicación un nombre descriptivo](/docs/apm/new-relic-apm/installation-configuration/naming-your-application#app-name). El nombre de su aplicación por defecto es <DNT>**PHP Application on Heroku**</DNT>.

New Relic usa el nombre de la aplicación para agregar datos. Si no cambia este nombre, New Relic agregará los datos de cada aplicación PHP adicional que instale con este mismo nombre.

1. Para nombrar su aplicación, ejecute este comando del cinturón de herramientas de Heroku:

   ```bash
   heroku config:set NEW_RELIC_APP_NAME='YOUR_APP_NAME'
   ```

2. Para verificar el cambio de nombre de su aplicación, ejecute:

   ```bash
   heroku run env | grep NEW_RELIC_APP_NAME
   ```

Verifique que el símbolo de confirmación devuelva el nuevo nombre de la aplicación:

```ini
NEW_RELIC_APP_NAME=YOUR_APP_NAME
```

## Verifica tu instalación [#verifying]

Para verificar que Heroku haya instalado el complemento New Relic, ejecute este comando del cinturón de herramientas de Heroku:

```bash
heroku run env | grep NEW_RELIC
```

Esto generará una lista de variables de entorno de New Relic en Heroku. El agente utiliza estas variables de entorno para determinar a qué cuenta informar los datos. Deberías ver al menos las siguientes variables:

```ini
NEW_RELIC_LICENSE_KEY="YOUR_LICENSE_KEY"
NEW_RELIC_LOG_LEVEL="warning"
NEW_RELIC_APP_NAME="YOUR_APP_NAME"
```

También puedes usar [<DNT>**phpinfo**</DNT> para verificar que tu aplicación se esté instrumentando](/docs/agents/php-agent/troubleshooting/using-phpinfo-verify-php).

## Resolución de problemas el agente en Heroku [#troubleshooting]

Para solucionar problemas del agente PHP en Heroku, examine su archivo de registro, que está almacenado en el log del servidor web de Heroku.

1. Para ver el log del servidor web, ejecute este comando del cinturón de herramientas de Heroku:

   ```bash
   heroku logs -t | tee newrelic.log
   ```

2. Utilice el archivo de registro para solucionar el problema.

3. Si necesita más ayuda, [obtenga asistencia en support.newrelic.com](https://support.newrelic.com).

El agente PHP tiene por defecto el [nivel de registros](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-loglevel) `warning` . El soporte de New Relic también puede solicitar el registro en el nivel `verbosedebug` de registros. Para cambiar el nivel de registros a `verbosedebug`, ejecute este comando del cinturón de herramientas de Heroku:

```bash
heroku config:set NEW_RELIC_LOG_LEVEL=verbosedebug
```

<Callout variant="caution">
  El nivel de registros `verbosedebug` genera rápidamente un gran volumen de datos. Utilice esta configuración solo si el soporte de New Relic lo solicita y elimínela tan pronto como recopile el resultado ejecutando este comando del cinturón de herramientas de Heroku:

  ```bash
  heroku config:unset NEW_RELIC_LOG_LEVEL
  ```
</Callout>

<InstallFeedback/>
