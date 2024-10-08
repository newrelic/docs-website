---
title: 'Seguimiento infinito: configurar SSL para Java 7 y 8'
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: 'For New Relic Infinite Tracing, how to implement a special configuration of Java Cryptographic Extensions (JCE) for certain older versions of Java.'
freshnessValidatedDate: never
translationType: machine
---

Infinite Tracing requiere una configuración especial de Java Cryptographic Extensions (JCE) para ciertas versiones anteriores de Java. Este documento proporciona pautas sobre cómo configurar Java en este caso.

<Callout variant="tip">
  Por seguridad y rendimiento, New Relic recomienda encarecidamente actualizar a la última actualización de Java 8. Para las JVM basadas en HotSpot, ninguno de los pasos siguientes es necesario después de 8u251.
</Callout>

## Cuándo configurar la criptografía Java [#when-configure]

Debe seguir este proceso si cumple con TODOS los criterios a continuación:

* Estás implementando Infinite Tracing

* Su JVM no admite la negociación del protocolo de capa de aplicación (ALPN). New Relic ha identificado que estas JVM no son compatibles con ALPN y requieren configuración:

  * Oráculo Java 7

  * Oracle Java 8 antes de la actualización 251

  * OpenJDK Java 8 antes de la actualización 252

    <Callout variant="important">
      New Relic solo ha confirmado que las JVM mencionadas anteriormente carecen de soporte ALPN. Debe confirmar con su proveedor si el soporte ALPN está presente en su JVM.
    </Callout>

## Servidor de aplicaciones

Si utiliza Tomcat, WebSphere, Weblogic u otro servidor de aplicaciones, consulte la documentación de su servidor de aplicaciones sobre cómo agregar una extensión de criptografía Java (JCE) en su servidor de aplicaciones.

## Configurar la política de exportación para Oracle JVM [#export-policy]

Las JVM de Oracle más antiguas requieren una actualización adicional para permitir JCE. Consulte [esta nota técnica de Oracle](https://www.oracle.com/java/technologies/javase-jce-all-downloads.html) para descargas e instrucciones.

## Configuración de Conscrypt para JVM HotSpot [#conscrypt]

New Relic ha probado con éxito OpenJDK Java 8 con Conscrypt. Complete lo siguiente:

1. Descargue el [jar Conscrypt apropiado](https://github.com/google/conscrypt/#download) para su sistema operativo.

2. Copie el archivo jar de Conscrypt a `JAVA_HOME/jre/lib/ext`. Este directorio ya debería existir, pero si no es así, busque un directorio llamado `ext` en `JAVA_HOME`.

3. Edite el archivo `JAVA_HOME/jre/lib/security/java.security` .

4. Debajo de las líneas que comienzan con `security.provider`, incremente el último número y establezca el valor en `org.conscrypt.OpenSSLProvider`. Por ejemplo, si la última entrada fue `security.provider.10`, agregue esta línea:

   ```
   security.provider.11=org.conscrypt.OpenSSLProvider
   ```

## Terminar de configurar Infinite Tracing [#return-to-distributed-tracing]

Cuando termines esta configuración preliminar, regresa a [Agente de idioma: Habilitar rastreo distribuido](/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing) para terminar de configurar Infinite Tracing.
