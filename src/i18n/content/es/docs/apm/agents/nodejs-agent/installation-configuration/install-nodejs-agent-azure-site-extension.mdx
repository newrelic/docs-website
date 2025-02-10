---
title: Instalar el agente Node.js con nuestra extensión de sitio de Azure
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
  - Azure Site Extension
metaDescription: Procedures and resources to install New Relic's Node.js agent for Azure web apps using the New Relic Azure Site Extension for Node.
freshnessValidatedDate: never
translationType: machine
---

Puede instalar el agente Node.js en sus aplicaciones sitio web gestionadas por Azure con la extensión de sitio de Azure de New Relic para Node. Este documento lo guía a través de la compatibilidad, instalación y configuración para incorporar los datos de su aplicación sitio web de Azure en New Relic.

## Compatibilidad y requisitos [#compatibility-requirements]

Las extensiones de sitio de Azure solo están disponibles para aplicaciones de App Service basadas en Windows que se implementan como código. Para aplicaciones que se ejecutan en Windows 32, la compatibilidad completa con un nivel de código métrico (ruta de archivo, línea, columna) no está disponible. La creación de perfiles se limita únicamente al nombre de la función.

## Instalar el agente Node.js con la extensión del sitio de Azure [#install-azure-site-extension]

Para instalar la extensión de sitio de Azure de New Relic, agregue la extensión de sitio `NewRelic.Azure.WebSites.Extension.NodeAgent` desde la página de inicio de Azure. Siga estos pasos:

1. Desde la página de inicio de Azure, haga clic en el mosaico App Services y, a continuación, seleccione la aplicación objetivo en la lista que se muestra.
2. Desplazar hacia abajo hasta <DNT>**Extensions**</DNT> en las opciones que aparecen a la izquierda, bajo la categoría <DNT>**Development Tools**</DNT> .
3. Haga clic en <DNT>**+ Add**</DNT> en la parte superior de la página para alternar el menú desplegable de extensiones, luego seleccione <DNT>**New Relic Node Agent**</DNT>. Marque la casilla para aceptar los términos legales
4. Haga clic en <DNT>**Add**</DNT> en la parte inferior de la página para comenzar a instalar la extensión.

Una vez instalada, la extensión crea los siguientes artefactos:

* Carpeta: `C:\home\SiteExtensions\NewRelic.Azure.Websites.Extension.NodeAgent`
* Transformación de documento XML (XDT): `applicationHost.xdt` que agregará la variable de entorno `NODE_OPTIONS` necesaria al iniciar la aplicación
* El agente y la dependencia del nodo New Relic se instalarán en `C:\home\site\wwwroot\node_modules`

Luego de una instalación exitosa del agente con el logging habilitado, el agente agregará su registro a un archivo en `C:\home\site\wwwroot\newrelic_agent.log`. Si la extensión no se puede instalar, se crea un archivo de log en `C:\home\SiteExtensions\NewRelic.Azure.Websites.Extension.NodeAgent\install.log`.

## Configurar el agente Node.js [#configure-agent]

El agente Node.js se configura con el archivo `newrelic.js` o mediante variables de entorno. [Consulte nuestra documentación para una configuración más detallada](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/).

Una vez instalada la extensión del sitio, deberá ingresar manualmente un elemento de configuración antes de resetear su aplicación. En las opciones que aparecen a la izquierda, busque **Settings** y desplazar hacia abajo hasta **Environment variables**. Agregue la variable `NEW_RELIC_LICENSE_KEY` con el valor de su clave de licencia.

Nuestra extensión de sitio agrega automáticamente la variable de entorno `NODE_OPTIONS` con un valor de `-r newrelic`. Esto inyecta el agente cuando se inicia Node. Cualquier `NODE_OPTIONS` definido previamente se eliminará y se restablecerá con `-r newrelic`.

<Callout variant="important">
  Recomendamos instalar o eliminar esta extensión del sitio de Azure mientras su aplicación sitio web esté detenida.
</Callout>