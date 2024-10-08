---
title: 'Resolución de problemas de Azure Web Apps: Problema con Always On'
tags:
  - Agents
  - NET agent
  - Azure troubleshooting
metaDescription: Workarounds if you have problems after installing New Relic's .NET agent on a Windows Azure Web App.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Instaló el agente .NET de New Relic a través de [Microsoft Azure Web Apps](/docs/agents/net-agent/azure-installation/install-app-azure-web-apps) y está utilizando la configuración `Always On` de Azure. Después de generar algo de tráfico y esperar unos minutos para que comience la recopilación de datos para su aplicación, los datos aún no aparecen en la interfaz de usuario de APM.

## Solución

A partir de la versión [8.22.181.0](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-8221810) del agente .NET, La configuración `Always On` de Azure se puede habilitar sin interferir con el agente. Si desea utilizar `Always On`, simplemente [actualice el agente](/docs/agents/net-agent/azure-installation/install-net-agent-azure-web-apps).

## Soluciones alternativas para .NET framework 4.0 o inferior [#4-0-framework]

Si su aplicación tiene como objetivo [.NET Framework 4.0 o inferior](/docs/agents/net-agent/troubleshooting/technical-support-net-framework-40-or-lower), [la configuración`Always On` ](https://azure.microsoft.com/en-us/documentation/articles/web-sites-create-web-jobs/)de Azure interferirá con el agente. Esta característica solo está disponible en los modos <DNT>**Basic**</DNT> y <DNT>**Standard**</DNT> de Azure.

La configuración `Always On` impide que se establezca la variable de entorno `APP_POOL_ID` . El agente .NET de New Relic necesita esta variable de entorno para obtener el nombre de la aplicación. Si el agente no puede determinar el nombre de una aplicación, no se iniciará.

Si todavía utiliza .NET framework 4.0 o inferior, pruebe las siguientes soluciones:

Si está utilizando el nivel <DNT>**Standard**</DNT> o <DNT>**Basic**</DNT> de Microsoft con Azure Portal, asegúrese de que la configuración `Always On` esté deshabilitada.

1. En Azure Portal, seleccione

   <DNT>
     **(your app) > Settings > Application Settings**
   </DNT>

   .

2. Establezca el interruptor `Always On` en `Off`.

Aquí hay algunas otras opciones que puedes probar. Si no funcionan, <DNT>**must**</DNT> [desactiva la configuración `Always On` ](#4-0-framework).

<CollapserGroup>
  <Collapser
    id="name-app"
    title="Utilice Kudu para nombrar su aplicación."
  >
    Para nombrar su aplicación en el <DNT>**`newrelic.config`**</DNT> local usando Kudu:

    1. Desde el Portal de Microsoft Azure, seleccione <DNT>**(your app) > Tools > Kudu**</DNT> y luego seleccione <DNT>**Go**</DNT>.

    2. Seleccione <DNT>**Debug Console > CMD**</DNT>.

    3. Seleccione <DNT>**Site > wwwroot > newrelic**</DNT>.

    4. Seleccione la edición <Icon name="fe-edit-2"/> icono para `newrelic.config` y agregue:

       ```xml
       <application>
         <name>Your app's name</name>
       </application>
       ```

    5. Guarde y reinicie su aplicación.
  </Collapser>

  <Collapser
    id="name-app-web-config"
    title="Utilice app/web.config para nombrar su aplicación."
  >
    <Callout variant="important">
      Se ha descubierto que esta opción es solo una solución temporal. El agente .NET puede dejar de informar de forma intermitente.
    </Callout>

    Para nombrar su aplicación en su archivo `app/web.config` :

    1. Agregue la siguiente clave a `appSettings`:

       ```xml
       <appSettings>
         <add key="NewRelic.AppName" value="Your app's name" />
       </appSettings>
       ```

    2. Reinicie su instancia.
  </Collapser>

  <Collapser
    id="pinger"
    title="Utilice el monitoreo sintético para monitor su sitio web."
  >
    Dependiendo de su uso de `Always On`, puede intentar utilizar [el monitoreo sintético](/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics) para mantener su sitio web activo.

    * Si

      <DNT>
        **are not**
      </DNT>

      usa la configuración `Always On`, puede intentar usar nuestro [monitorpinger ](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#monitor-type-ping)gratuito de monitoreo sintético.

    * Si

      <DNT>
        **are**
      </DNT>

      utiliza la configuración `Always On` , el monitoreo sintético debe poder alcanzar un extremo para sus roles de trabajador. Si no es posible, puede intentar utilizar un [monitor con script de Sintético](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers) para ejecutarlo en su sitio.
  </Collapser>
</CollapserGroup>
