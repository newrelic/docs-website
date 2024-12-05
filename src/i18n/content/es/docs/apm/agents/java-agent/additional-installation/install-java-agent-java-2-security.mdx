---
title: Instalación de seguridad Java 2 para WebLogic y WebSphere
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: 'For WebLogic and WebSphere users with Java 2 Security or Administrative Security: Additional install steps for the New Relic Java agent.'
freshnessValidatedDate: '2023-06-02T00:00:00.000Z'
translationType: machine
---

Si es usuario de WebLogic o WebSphere y utiliza el modelo de seguridad Java 2, nuestro agente de Java requiere configuración además de la [instalación del agente de Java](/install/java).

## WebLogic: Seguridad Java 2 [#weblogic-java-2]

Si utiliza la seguridad de Java 2, agregue la siguiente entrada a `weblogic.policy` para completar la instalación:

```
grant codeBase "file:YOUR_FULL_PATH_TO_FILE/newrelic/-" {
    permission java.security.AllPermission;
  };
```

Especifique el directorio que contiene `newrelic.jar` en `/full/path/to/newrelic`. La ubicación predeterminada del archivo de política es `weblogic_root/server/lib/weblogic.policy`.

## WebSphere: Seguridad Java 2 o Seguridad Administrativa [#websphere-java-2]

Si está utilizando Java 2 Security o WebSphere Admin Security, debe otorgar los permisos adecuados a todos los archivos jar dentro de la carpeta de instalación de New Relic.

Para habilitar New Relic para todos los servidores de aplicaciones, edite el archivo `java.policy` :

1. Abra su archivo `java.policy` , ubicado dentro de su directorio de instalación de WebSphere en:

   ```
   YOUR_WEBSPHERE_INSTALL_DIRECTORY/java/jre/lib/security/java.policy
   ```

2. Agregue el siguiente texto a su archivo de política, personalizando la ruta `file:` para que apunte a la carpeta que contiene `newrelic.jar`. Asegúrese de conservar el guión `-` al final de la ruta, lo que otorga a todos los archivos jar en la carpeta de destino los permisos necesarios.

   ```
   grant codeBase "file:/YOUR_FULL_PATH_TO_NEW_RELIC_FOLDER/-" {
         permission java.security.AllPermission;
         permission java.net.NetPermission "specifyStreamHandler";
         permission java.net.SocketPermission "*.newrelic.com", "connect,accept,resolve";
   };
   ```

   <Callout variant="important">
     El valor `codeBase` debe utilizar barras diagonales, no barras invertidas, como separador de directorio, incluso en sistemas Windows.
   </Callout>

3. Reinicie su servidor de aplicaciones.

<Callout variant="tip">
  Para cada aplicación, los permisos de seguridad de Java están determinados por la unión de `java.policy` y `server.policy`. No coloque la misma configuración de permisos en varios archivos.
</Callout>

Para obtener más información sobre la sintaxis del archivo de políticas, consulte [Implementación de políticas predeterminada y sintaxis del archivo de políticas](http://docs.oracle.com/javase/8/docs/technotes/guides/security/PolicyFiles.html).
