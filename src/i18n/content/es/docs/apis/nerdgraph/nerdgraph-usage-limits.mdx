---
title: Límites de uso de NerdGraph
tags:
  - APIs
  - GraphQL API
  - NerdGraph
  - Rate Limit
  - Concurrency Limit
metaDescription: New Relic NerdGraph limits the number of concurrent connections users make.
freshnessValidatedDate: '2023-08-08T00:00:00.000Z'
translationType: machine
---

Nuestra API NerdGraph impone un límite de solicitudes simultáneas por usuario.

## Limitar detalles [#limit-enforcement]

NerdGraph impone un límite de <DNT>**25 concurrent requests per user**</DNT>.

La tasa de solicitudes que realiza no está limitada, solo la cantidad de <DNT>**concurrent**</DNT> solicitudes.

La simultaneidad se rastrea y se aplica por usuario, **no** por clave de usuario. Las solicitudes realizadas por el mismo usuario utilizando varias claves de usuario contribuirán al total de solicitudes simultáneas de ese usuario.

Podemos permitir más de 25 solicitudes simultáneas por usuario, según el estado del sistema, pero <DNT>**only 25 concurrent requests are guaranteed.**</DNT>

Si las solicitudes son limitadas, se rechazarán con el código de estado HTTP `429`. A medida que se completen sus solicitudes en vuelo y su simultaneidad total disminuya, las nuevas solicitudes comenzarán a tener éxito automáticamente nuevamente.

## Evite llegar al límite [#avoid-limit]

Si realiza solicitudes simultáneas a NerdGraph en su código, es importante que limite la concurrencia total del lado del cliente. Por ejemplo, si necesita realizar 100 solicitudes, podría:

* Implemente una solución de agrupación para garantizar que las solicitudes solo se realicen cuando se detecte que hay una conexión simultánea disponible.
* Envíe las solicitudes en lotes de 25 llamadas simultáneas.
* Reemplace el código concurrente con código secuencial y solo realice una solicitud después de que se haya completado la solicitud anterior.

Para ver ejemplos de código relacionados con la implementación de algunas de estas recomendaciones, consulte [el Tutorial de concurrencia de NerdGraph.](/docs/apis/nerdgraph/examples/nerdgraph-concurrency-tutorial)

Tenga en cuenta el código que se ejecuta en varios lugares a la vez. Incluso el código no concurrente creará simultaneidad si se ejecuta en varios lugares.
