---
title: Soporte técnico para .NET framework 4.0 o inferior
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: New Relic provides limited technical support for customers using .NET framework 4.0 or earlier.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  New Relic proporciona <DNT>**limited technical support**</DNT> para clientes que utilizan .NET framework 4.0 o inferior.
</Callout>

Este nivel de soporte incluye garantizar que las siguientes áreas estén configuradas como se espera:

* Configuración del agente
* Ajustes del sistema
* Acceso a la red
* Configuración de permisos

Puede realizar la mayoría de las comprobaciones de resolución de problemas utilizando [New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics), con la excepción de algunas comprobaciones que deben realizarse manualmente. Si una verificación de New Relic Diagnostics encuentra un problema, aparecerá información sobre resolución de problemas adicional y posibles soluciones en su terminal.

## Requisitos de la versión del agente [#agent-version]

Para aprovechar al máximo su agente framework New Relic .NET, asegúrese de seguir las pautas [de requisitos y compatibilidad](/docs/agents/net-agent/getting-started/compatibility-requirements-net-agent) de New Relic.

<Callout variant="important">
  La aplicación que se ejecuta en .NET framework versión 4.0 o inferior requiere una versión del agente New Relic .NET <DNT>**lower than 7.0**</DNT>.
</Callout>

Descargue y ejecute el paquete de instalación apropiado para su [arquitectura](/docs/agents/net-agent/getting-started/compatibility-requirements-net-agent#architecture):

* [Instalador de 32 bits](https://download.newrelic.com/dot_net_agent/6.x_release/NewRelicDotNetAgent_x86.msi)
* [Instalador de 64 bits](https://download.newrelic.com/dot_net_agent/6.x_release/NewRelicDotNetAgent_x64.msi)

## Configuración del agente [#config]

El soporte técnico limitado para solucionar problemas de instalación y configuración básica incluye:

1. Compruebe si el agente .NET está presente y tiene archivos de configuración válidos.
2. Si el agente está instalado, verifique el núcleo del agente `.dll`.
3. Si el archivo de configuración es válido, verifique los elementos esperados. Por ejemplo, incluya una verificación manual de que cumple con los estándares establecidos en `.xsd`.

## Instrumentación

El soporte técnico limitado para solucionar problemas si es posible implementar instrumentación incluye:

1. Compruebe si las claves de registro WAS y los valores requeridos están presentes y son válidos.
2. Verifique que las claves de registro W3SVC y los valores requeridos estén presentes y sean válidos.
3. Verifique que las claves de registro ENV (variables de entorno globales/no IIS) y los valores requeridos estén presentes y sean válidos.
4. Verifique si es posible implementar instrumentación mediante estas comprobaciones clave para determinar qué tipos de aplicaciones se pueden monitorear.
5. Confirme que el proceso tenga cargadas las variables de entorno necesarias. Por ejemplo, utilice una herramienta como [Microsoft Sysinternals Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer).

## Aplicación Web [#web-apps]

Algunas comprobaciones requieren permisos elevados. Para obtener mejores resultados, ejecute [New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics) desde un shell de administración.

El soporte técnico limitado para solucionar problemas al ejecutar aplicaciones web con el agente .NET instalado incluye:

1. Verifique si hay procesos W3WP en ejecución y obtenga su `pid`.
2. Verifique la clave `.dll` requerida para la instrumentación. Por ejemplo, si hay algún proceso W3WP, verifique si el generador de perfiles New Relic `.dll` y `mscorelib.dll` están cargados en el proceso.

## Aplicación no alojada en IIS [#non-IIS-apps]

El soporte técnico limitado para solucionar problemas de aplicaciones no alojadas en IIS incluye:

1. Cuando utilice MSI, asegúrese de que la opción `Instrument all` esté habilitada.
2. Comprobar que el fichero de instrumentación personalizada ha sido creado, se encuentra en el lugar adecuado y es exacto. Si corresponde, incluya una verificación manual de que cumple con los estándares establecidos en `.xsd`.

## Acceso a la red y permisos [#access]

El soporte técnico limitado para solucionar problemas de permisos y acceso a la red del sistema se aplica a cualquier versión del agente e incluye:

1. Verifique el acceso y los permisos de la red del sistema.
2. Ejecute pruebas de recolector. Por ejemplo, compruebe si la URL `https://collector.newrelic.com/status/mongrel` está activa y el servidor puede conectarse a ella.
3. Compruebe si el archivo de configuración contiene alguna configuración de proxy, si la información del proxy se ha pasado a New Relic Diagnostics y si estas configuraciones permiten la conexión al recolector de New Relic.
4. Compruebe si New Relic Diagnostics se está ejecutando como `admin`.

New Relic Diagnostics debe ejecutarse como `admin` para ayudar a garantizar la precisión de algunas otras pruebas. Además, se requieren derechos `admin` para instalar el agente .NET.

## Registro de agente [#logs]

El soporte técnico limitado para solucionar problemas de la información disponible en el registro del agente .NET incluye:

1. Reúna cualquier registro de agente disponible.
2. Verifique el nivel de logs.
3. Verifique los problemas conocidos anotados en el registro.

Los archivos log de resolución de problemas pueden requerir que trabaje directamente con [el soporte de New Relic](https://support.newrelic.com/).

## Versión framework

El soporte técnico limitado depende de la versión del agente .NET que esté utilizando. New Relic Support comprobará qué versiones de framework del agente .NET están instaladas en el sistema.

## URL completa en solicitudes de OpenRasta [#openrasta]

Cuando se utiliza la instrumentación de OpenRasta, la URL completa puede capturarse en solicitudes instrumentadas. Esto puede dar como resultado que se recopilen cadenas de consulta que pueden contener información confidencial. Ver boletín de seguridad [NR19-01](/docs/using-new-relic/new-relic-security/security-bulletins/security-bulletin-nr19-01).
