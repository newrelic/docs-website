---
title: 'Seguimiento infinito: configurar la compatibilidad con proxy'
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: Infinite Tracing proxy configuration.
freshnessValidatedDate: never
translationType: machine
---

Para Infinite Tracing, puede proporcionar una configuración de proxy opcional si el tráfico saliente necesita fluir a través de un proxy antes de llegar a un observador de traza. Los agentes de idiomas que admiten esto se enumeran a continuación.

<Callout variant="important">
  Para que un proxy funcione con Infinite Tracing, debe admitir el protocolo HTTP/2 en lugar del estándar HTTP/1.1. Consulte la documentación de su proxy para determinar si este soporte está disponible.
</Callout>

## Go

Especifique la dirección de proxy con las variables de entorno `HTTP_PROXY`, `HTTPS_PROXY` y `NO_PROXY` (o sus correspondientes versiones en minúscula).

## Java

La implementación del agente de Java gRPC utiliza automáticamente las propiedades de proxy JVM estándar como se indica en la documentación de Propiedades de red de Java. Un ejemplo de configuración de propiedades del sistema puede verse así:

```
-Dhttps.proxyHost=<proxy-host> -Dhttps.proxyPort=443
```

Si su aplicación ya utiliza un proxy, es posible que estas propiedades ya estén configuradas, en cuyo caso gRPC debería enrutar automáticamente los datos de Infinite Tracing a través del proxy.

## .NET [#dot-net]

La dirección del proxy se puede especificar mediante la variable de entorno `https_proxy` . (La versión 10.6.0 y anteriores del agente .NET también admiten el uso de la variable de entorno `grpc_proxy` .) El nombre de la variable de entorno puede estar en mayúsculas o minúsculas cuando se ejecuta en Windows, pero debe estar en minúsculas en Linux.

## Node.js, PHP, Python y Ruby [#node-php-python-ruby]

La dirección del proxy se puede especificar mediante las variables de entorno `GRPC_PROXY`, `HTTPS_PROXY` y `HTTP_PROXY`. Estas variables se verifican en orden y se usa la primera que tenga un valor.
