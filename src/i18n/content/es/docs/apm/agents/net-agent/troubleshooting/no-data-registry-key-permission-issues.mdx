---
title: Sin problemas de permisos de datos y claves de registro
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If your New Relic .NET app is not reporting data and you see permissions errors for registry keys, follow these troubleshooting procedures.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Después de generar tráfico para su aplicación .NET y esperar cinco minutos, los datos aún no aparecen en la UI de New Relic.

## Solución

<Callout variant="important">
  Consulte con el administrador de su sistema antes de cambiar los permisos.
</Callout>

1. Asegúrese de que la identidad del grupo de aplicaciones tenga `read` acceso a la clave de registro New Relic ubicada en:

   ```
   HKLM\SOFTWARE\New Relic\.NET Agent\
   ```

2. Otorgue a todos los usuarios del sistema acceso a esta clave de registro o permita que solo la identidad del grupo de aplicaciones acceda a la clave.

   <CollapserGroup>
     <Collapser
       id="grant-everyone"
       title="Para otorgar acceso a todos los usuarios a la clave de registro:"
     >
       1. Como administrador, abra el registro de Windows.

       2. Seleccione

          <DNT>
            **Computer > HKEY_LOCAL_MACHINE > Software > New Relic**
          </DNT>

          . Haga clic derecho en

          <DNT>
            **.NET Agent**
          </DNT>

          y luego seleccione

          <DNT>
            **Permissions**
          </DNT>

          .

       3. Si no ve un usuario

          <DNT>
            **Everyone**
          </DNT>

          en la lista

          <DNT>
            **Group or user names**
          </DNT>

          , cree el usuario: seleccione

          <DNT>
            **Add**
          </DNT>

          . Luego, desde

          <DNT>
            **Select Users or Groups**
          </DNT>

          : en el campo

          <DNT>
            **Enter the object name to select**
          </DNT>

          , escriba `Everyone`. Seleccione

          <DNT>
            **OK**
          </DNT>

          .

       4. En la lista

          <DNT>
            **Group or user names**
          </DNT>

          , seleccione

          <DNT>
            **Everyone**
          </DNT>

          . Luego, en la tabla

          <DNT>
            **Permissions for**
          </DNT>

          , seleccione la casilla de verificación

          <DNT>
            **Allow**
          </DNT>

          para permisos

          <DNT>
            **Read**
          </DNT>

          .
     </Collapser>

     <Collapser
       id="grant-app-pool"
       title="Para otorgar acceso a la clave de registro a las identidades de grupos de aplicaciones individuales:"
     >
       1. Determine la identidad de su grupo de aplicaciones, que utiliza este formato estándar:

          ```
          IIS AppPool\APP_POOL_NAME
          ```

       2. Como administrador, abra el registro de Windows.

       3. Seleccione <DNT>**Computer > HKEY_LOCAL_MACHINE > Software > New Relic**</DNT>. Haga clic derecho en <DNT>**.NET Agent**</DNT> y luego seleccione <DNT>**Permissions**</DNT>.

       4. En el cuadro de diálogo <DNT>**Permissions for .NET Agent**</DNT> , seleccione <DNT>**Add**</DNT>. Luego, desde <DNT>**Select Users or Groups**</DNT>: en el campo <DNT>**Enter the object name to select**</DNT> , escriba la identidad de su grupo de aplicaciones (por ejemplo, `IIS AppPool\APP_POOL_NAME`). Seleccione <DNT>**OK**</DNT>.

       5. En la lista <DNT>**Group or user names**</DNT> , seleccione su nueva identidad del grupo de aplicaciones. Luego, en la tabla <DNT>**Permissions for**</DNT> , seleccione la casilla de verificación <DNT>**Allow**</DNT> para permisos <DNT>**Read**</DNT> .
     </Collapser>
   </CollapserGroup>

3. Desde la línea de comando, realice un <DNT>**IISRESET**</DNT>.

4. Si la actualización de permisos no resuelve el problema, siga los procedimientos de resolución de problemas del agente .NET para [datos faltantes](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

<Callout variant="tip">
  Para evitar que este problema ocurra en instalaciones futuras, desinstale WSM 3.3.5.0. Si no desea realizar cambios en su registro, desinstale WSM y .NET y luego reinstale las últimas versiones.
</Callout>

## Causa

Una razón común por la que los datos no aparecen es porque el agente New Relic .NET no puede acceder a sus claves de registro. Es posible que vea errores de permisos de registro en el registro de su generador de perfiles en:

```
%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs\
```

Por ejemplo, puede ver:

```
[Info] ... Logger initialized
[Error] ... Unable to find New Relic Home directory in registry or environment.
[Error] ... An exception was thrown while initializing the profiler.
```
