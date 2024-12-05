---
title: Tiempo no instrumentado en traza
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Two known causes of uninstrumented time with detail=1 in transaction traces with New Relic's PHP agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Verás bloques rojos de tiempo no instrumentado en la traza de la transacción con `transaction_tracer.detail=1` configurado.

## Causa

Hay dos razones por las que puedes ver bloques rojos de tiempo no instrumentado en una traza de la transacción.

La primera razón es cuando tienes una función que se llama con frecuencia y es muy rápida (por debajo del umbral predeterminado de 2 ms para la lista de los 100 principales).

La segunda razón, y la más común, es cuando una función:

* Tarda mucho en ejecutarse
* Esta escrito en C
* Es una función interna o es una función proporcionada por un módulo externo

En esta situación, los culpables más frecuentes son las funciones que envían grandes bloques de datos o archivos de gran tamaño al usuario. Si el usuario tiene una conexión lenta, el envío de archivos pequeños (imágenes pequeñas, por ejemplo) podría tardar mucho tiempo debido a la simple latencia de la red. Dado que no se instrumentan funciones internas o de extensión de C, el agente PHP no tiene a quién "culpar" por el tiempo invertido, y esto aparece en una traza de la transacción como tiempo no instrumentado.
