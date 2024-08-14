---
title: Alta contención de bloqueo AppDomain.GetData() (.NET framework)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Instructions and information about reducing AppDomain.GetData() lock contention for impacted .NET Framework applications
freshnessValidatedDate: never
translationType: machine
---

## Problema

Cuando el agente .NET está conectado a la aplicación <DNT>**.NET Framework**</DNT> de alto rendimiento, algunos clientes informaron haber observado una alta contención de subprocesos. Al revisar los volcados del proceso y el rastreo del stack, es posible que muchos hilos estén bloqueados por llamadas a `AppDomain.GetData()`.

## Solución posible

En [la versión 9.7 del agente .NET](/docs/release-notes/agent-release-notes/net-release-notes), se introdujo una nueva variable de entorno que deshabilita el uso del almacenamiento `AppDomain` por parte del agente .NET:

```ini
NEW_RELIC_DISABLE_APPDOMAIN_CACHING=true
```

<Callout variant="caution">
  Si bien esta variable de entorno elimina la contención de bloqueo de las llamadas del agente a `AppDomain.GetData()`, la sobrecarga total del agente .NET aumenta cuando esta variable de entorno está habilitada. En nuestras pruebas, esto resultó en un menor bloqueo, pero un menor rendimiento máximo de la aplicación con el agente .NET conectado a una aplicación de prueba.
</Callout>

Estamos muy interesados en cualquier comentario de los clientes que experimenten este problema y prueben esta nueva opción de configuración. Si prueba esta opción de configuración, cree un problema en nuestro [repositorio de GitHub para .NET](https://github.com/newrelic/newrelic-dotnet-agent) que describa su experiencia.

## Causa

El agente .NET necesita acceso a la información de firma del método para los métodos de instrumento. De forma predeterminada, para la aplicación .NET framework , el agente carga la información de este método mediante reflexión y la almacena en caché en `AppDomain` para uso futuro. Esto pretende ser una optimización general, pero varios clientes han experimentado un alto conflicto de bloqueo de subprocesos en torno a este comportamiento y creen que es la causa principal de que los servicios se vuelvan lentos o no respondan.

Después de inspeccionar el código fuente de Microsoft, las llamadas a `AppDomain.GetData()` de hecho dan como resultado un bloqueo global.

Dado que el agente .NET no utiliza ningún esquema de almacenamiento en caché de información de métodos para la aplicación .NET Core, y ningún cliente ha informado problemas similares de contención de bloqueo de subprocesos, decidimos exponer una variable de entorno para que el agente funcione de la misma manera en .NET. aplicación framework .
