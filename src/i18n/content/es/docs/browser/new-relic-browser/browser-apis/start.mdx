---
title: comenzar
type: apiDoc
shortDescription: Un método utilizado para iniciar la característica del agente cuando se ejecuta en un estado diferido
tags:
  - Browser
  - Browser monitoring
  - Browser Agent
metaDescription: A method used to start agent features when running in a deferred state
freshnessValidatedDate: '2023-09-27T00:00:00.000Z'
translationType: machine
---

## Sintaxis

```js
newrelic.start(value: string[]|undefined)
```

API browser utilizada para iniciar la característica del agente cuando se ejecuta en un estado diferido.

## Requisitos

* Browser Lite, Pro o Pro+SPA agente (v1.239.0 o superior)

  <Callout variant="important">
    La configuración requerida para usar esta API no está conectada actualmente al sistema de despliegue más grande dentro de New Relic. Como tal, llamar a esta API solo tendrá efecto al copiar/pegar o en la instalación browser npm hasta que se realicen más cambios.
  </Callout>

## Descripción

La característica se puede cargar en un estado `deferred` , que se puede controlar estableciendo la propiedad `autoStart` de la característica apropiada en `false` en el bloque de configuración `NREUM.init.<feature>` utilizado por el agente. Este estado característico significa que el evento se observará y almacenará en el agente, pero _no se recopilará en NR1 hasta que se le indique que lo haga_ con el método API `.start()`. Consulte [Nombres de características](#feature-names) para obtener una lista de nombres de características. Consulte [Ejemplos](#examples) para ver ejemplos que muestran cómo configurar una característica en un estado diferido.

Al ejecutar esta función con un valor válido, el agente del navegador iniciará las características relevantes que hayan sido diferidas por la configuración `autoStart: false` . Si se llama sin argumentos, el método iniciará todas las características que se hayan aplazado. Si se llama con una lista de cadenas que representan los nombres de las características, se iniciarán los nombres de las características que coincidan con las cadenas. Consulte [Nombres de características](#feature-names) para obtener una lista de nombres de características.

## Parámetros

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `value`

        _cadena \[]_ O _indefinido_
      </td>

      <td>
        Opcional. Una matriz de cadenas relacionadas con una lista de características que se iniciarán.
      </td>
    </tr>
  </tbody>
</table>

## Nombres característicos

* ajax
* jserrors
* métrica
* generic_events
* page_view_event
* page_view_timing
* session_replay
* session_trace
* spa

## Casos de uso

* Quiere esperar para recopilar datos hasta que un usuario haya dado su consentimiento con un modal en su sitio
* Desea esperar para recopilar datos hasta que su sitio haya configurado un atributo personalizado

## Ejemplos

### Cargando todas las características en estado diferido (copiar/pegar, NPM)

```js
// Change the init portion of the configuration block to add `autoStart: false` to any features desired to load in a deferred state
NREUM.init = {
  // feature configurations
  ajax: {autoStart: false},
  jserrors: {autoStart: false},
  metrics: {autoStart: false},
  generic_events: {autoStart: false},
  page_view_event: {autoStart: false},
  page_view_timing: {autoStart: false},
  session_replay: {autoStart: false},
  session_trace: {autoStart: false},
  spa: {autoStart: false},
  // other configurations
  // ...
}
```

### "Iniciando" todas las características diferidas

```js
newrelic.start()
// all deferred features in the agent will now start harvesting
```
