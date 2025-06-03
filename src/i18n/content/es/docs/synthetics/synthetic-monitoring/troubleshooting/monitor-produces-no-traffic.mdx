---
title: El monitor no produce tráfico
type: troubleshooting
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
metaDescription: Synthetic monitors will fail with a network traffic error if you do not use the built-in objects for your script.
freshnessValidatedDate: never
translationType: machine
---

## Problema

La prueba de API de monitoreo sintético de New Relic o el script de monitor de browser con parecen estar ejecutándose como usted desea, pero siempre devuelve este error:

`NetworkError: Monitor produced no traffic`

## Solución

Si bien el monitoreo sintético permite la importación de módulos de red Node.js, requiere el uso de objetos integrados para capturar el tráfico de red para [monitorear el script del browser](/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers) (`$browser`) y [las pruebas API](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-api-tests) (`$http`). Esto permite a New Relic rastrear las solicitudes de red e informar sobre los tiempos de carga de recursos, códigos de estado y otros detalles.

Si ha requerido manualmente una biblioteca como `request` y está utilizando ese módulo exclusivamente dentro de sus pasos script , Sintético no podrá capturar el tráfico de la red. Es por eso que ves el error de red.

Para resolver este problema, no importe la biblioteca manualmente. En su lugar, utilice los objetos integrados, que proporcionan la misma funcionalidad.

Es posible que haya algunas funciones que no estén disponibles con los objetos integrados. En estos casos, es posible que desee realizar una solicitud única o de marcador de posición utilizando el objeto integrado y completar el resto de los pasos del monitor con un módulo importado. Esta no es una solución recomendada porque los resultados del tráfico de red no reflejarán la totalidad de lo que está haciendo el monitor. Sin embargo, resolverá este error y permitirá que el monitor se ejecute correctamente.
