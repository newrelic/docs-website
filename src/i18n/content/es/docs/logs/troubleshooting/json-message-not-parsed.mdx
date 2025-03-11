---
title: El mensaje JSON no se analiza
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: Troubleshooting tips if the JSON message for your log isn't being parsed in New Relic.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Cuando se envía contenido JSON en el campo de mensaje del log, no se analiza automáticamente y no se almacena como atributo (valor principal pares). En cambio, el contenido permanece en el mensaje. También puede truncarse si el mensaje excede el [límite de caracteres](/docs/logs/troubleshooting/log-message-truncated/).

## Solución

Razones por las que esto puede estar sucediendo:

* Si el contenido no es JSON válido, no se analizará. En cambio, se almacenará como una cadena y se truncará si excede el límite de caracteres.
* Si el contenido es JSON válido, es posible que se haya "encadenado" con caracteres de escape. Si ese es el caso, primero se evaluará como una cadena, lo que significa que se truncará a 4096 caracteres antes de evaluarse como JSON. El resultado del truncamiento será un JSON no válido y los datos se almacenarán como una cadena.

Para resolver este problema, envíe mensajes que contengan JSON que no se hayan convertido en una cadena. Este contenido se analizará incluso si la longitud total excede el límite de caracteres. Si el JSON contiene una matriz, se aplanarán y almacenarán como cadenas no analizadas.
