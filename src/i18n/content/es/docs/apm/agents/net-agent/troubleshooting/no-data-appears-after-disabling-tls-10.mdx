---
title: No aparecen datos después de deshabilitar TLS 1.0
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'Troubleshooting for New Relic .NET APM agent: How to configure your TLS protocol preferences for your .NET application and environment.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

No aparecen datos en New Relic después de deshabilitar TLS 1.0. Verificó si TLS 1.0 está deshabilitado inspeccionando la siguiente clave de registro:

```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.0\Client
```

TLS 1.0 está deshabilitado si `"Enabled"` está configurado en `0` y `"DisabledByDefault"` está configurado en `1`.

Además, es posible que hayas notado un mensaje de error en el registro del agente de New Relic debido a este problema; Por ejemplo:

* ```
  NewRelic ERROR: Unable to connect to the New Relic service at collector.newrelic.com:443 : System.Net.WebException: 
  The request was aborted: Could not create SSL/TLS secure channel.
  ```
* ```
  NewRelic ERROR: Unable to connect to the New Relic service at collector.newrelic.com:443 : System.Net.WebException: 
  The underlying connection was closed: An unexpected error occurred on a send. ---> System.IO.IOException: 
  Received an unexpected EOF or 0 bytes from the transport stream.
  ```
* ```
  NewRelic ERROR: Unable to connect to the New Relic service at collector.newrelic.com:443 : System.Net.WebException: 
  The underlying connection was closed: An unexpected error occurred on a receive. ---> System.ComponentModel.Win32Exception: 
  The client and server cannot communicate, because they do not possess a common algorithm.
  ```

## Solución

El agente New Relic .NET requiere una versión mínima de TLS 1.2 o superior. Para TLS 1.2, también requiere que .NET esté configurado para usarlo.

A partir de la versión 10.6.0 del agente .NET, al iniciarse, el agente registra la versión TLS configurada en el nivel INFO.

<Callout variant="important">
  Si configura una versión TLS como predeterminada, será utilizada tanto por la aplicación como por el agente New Relic. No puede utilizar una versión de TLS diferente para cada uno.
</Callout>

Para habilitar una versión de protocolo TLS específica:

<CollapserGroup>
  <Collapser
    id="windows-registry"
    title="Paso 1. Habilite los protocolos TLS en el registro de Windows."
  >
    Es posible que las versiones anteriores de Windows Server (2008/2012) no tengan TLS 1.1/1.2 soporte habilitado de forma predeterminada.

    <Callout variant="caution">
      Siga estos pasos cuidadosamente. Pueden ocurrir problemas graves si modifica el registro incorrectamente. <DNT>**Recommendation:**</DNT> Antes de modificar el registro, haga una copia de seguridad.
    </Callout>

    A continuación se muestra un ejemplo de cómo actualizar el registro de Windows a TLS 1.2. Esto requiere que TLS esté habilitado para la función <DNT>**Client**</DNT> , porque su servidor se está conectando como cliente a New Relic.

    1. Copie y pegue lo siguiente en un archivo:

       ```ini
       Windows Registry Editor Version 5.00

       [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2]

       [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client]
       "DisabledByDefault"=dword:00000000
       "Enabled"=dword:00000001
       ```

    2. Guarde el archivo con una extensión `.reg` .

    3. Ejecute el script.
  </Collapser>

  <Collapser
    id="windows-registry"
    title="Paso 2. Active los protocolos predeterminados de .NET"
  >
    .NET framework 4.5 o versiones anteriores utilizan los protocolos SSL v3 y TLS 1.0 de forma predeterminada.

    Después de habilitar TLS 1.1 o 1.2 a través del registro, aún necesita cambiar los protocolos predeterminados utilizados por .NET.

    Elige una de las siguientes opciones:

    <CollapserGroup>
      <Collapser
        id="strongcrypto"
        title="Habilite la propiedad criptográfica sólida en el registro de Windows"
      >
        <Callout variant="caution">
          Siga estos pasos cuidadosamente. Pueden ocurrir problemas graves si modifica el registro incorrectamente. <DNT>**Recommendation:**</DNT> Antes de modificar el registro, haga una copia de seguridad.
        </Callout>

        Agregar el valor `SchUseStrongCrypto` a las claves de registro de .NET framework permitirá que todas las aplicaciones .NET utilicen TLS 1.1 o 1.2. Será necesario modificar ambas claves de registro para garantizar que tanto la aplicación .NET de 32 bits como la de 64 bits puedan utilizar TLS 1.1/1.2.

        1. Copie y pegue lo siguiente en un archivo:

           ```ini
           Windows Registry Editor Version 5.00

           [HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\.NETFramework\v4.0.30319] 
           "SchUseStrongCrypto"=dword:00000001

           [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]
           "SchUseStrongCrypto"=dword:00000001
           ```

        2. Guarde el archivo con una extensión `.reg` .

        3. Ejecute el script.
      </Collapser>

      <Collapser
        id="app-code"
        title="Incluye protocolo en el código de tu aplicación"
      >
        Puede cambiar los protocolos de seguridad predeterminados de .NET modificando el código fuente de su aplicación. El siguiente comando habilita TLS 1.2, 1.1 y 1.0 como protocolos predeterminados para su aplicación. Es una configuración global y debe configurarse temprano en el inicio de su aplicación. Puede modificarlo para habilitar los protocolos específicos que desee.

        ```cs
        System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>

## Causa

Si necesita una versión específica de TLS para solicitudes HTTP externas, debe asegurarse de que su aplicación y servidor estén configurados correctamente. No tener la configuración adecuada puede provocar que el agente New Relic .NET no pueda conectarse a New Relic.

El agente .NET de New Relic se comunica con los servidores de New Relic utilizando clases estándar disponibles con .NET para realizar solicitudes HTTP externas. Debido a que el código del agente .NET se ejecuta junto con el código de su aplicación, los protocolos de seguridad utilizados para comunicarse con los servidores de New Relic dependen del entorno y la configuración de su aplicación.

Para obtener más información sobre cómo configurar correctamente los ajustes TLS de su sistema o aplicación según su versión de .NET Framework, revise [la documentación de Microsoft sobre las mejores prácticas (TLS)](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls).
