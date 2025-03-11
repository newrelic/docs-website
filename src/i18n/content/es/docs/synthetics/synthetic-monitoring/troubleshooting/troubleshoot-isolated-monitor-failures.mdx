---
title: Solucionar fallas aisladas del monitor
type: troubleshooting
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
metaDescription: New Relic synthetic monitors may sometimes fail from a single location. Identify issues specific to a particular location to help troubleshoot.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Su monitor New Relic Synthetics informó una falla desde una única ubicación, pero la aplicación parece estar en funcionamiento, por lo que no puede identificar el problema.

## Solución

Un solo fallo del monitoreo sintético no es tan limitado como parece. Representa tres fallos consecutivos del mismo monitor. Cuando falla un monitor, New Relic inmediatamente pone en cola dos comprobaciones adicionales para el mismo monitor y ubicación. New Relic informa una falla solo cuando fallan los tres trabajos. (Solo la ejecución del tercer monitor es visible en la UI de Sintético).

No es necesario que los fallos sean del mismo tipo de error. Esto refuerza aún más las limitaciones al falso positivo.

En ocasiones, el monitor Sintético puede fallar desde una única ubicación cuando el sitio parece estar funcionando correctamente desde otras ubicaciones. Si bien estas fallas son aisladas, poder identificar problemas específicos de una ubicación en particular puede resultar muy valioso.

A continuación se presentan algunas técnicas para diagnosticar posibles problemas detrás de fallas aisladas del monitor.

<CollapserGroup>
  <Collapser
    id="network-path"
    title="Ruta de red"
  >
    El monitor que falló puede tener una ruta de red diferente a su sitio que otras ubicaciones de monitoreo sintético o desde las ubicaciones que está probando. Si hay un problema en la ubicación o en la red entre la ubicación y su sitio, es posible que una sola ubicación no devuelva un resultado. Esto indica que algunos usuarios en rutas de red similares pueden haber experimentado problemas.

    Si ve `Connect timed out` o `Read timed out`, normalmente indica que el sitio no estaba disponible o que respondía con tanta lentitud que el monitor no pudo recuperar ningún dato. Esto suele indicar un problema en la ruta de la red.
  </Collapser>

  <Collapser
    id="timeouts"
    title="Tiempos de espera"
  >
    Es posible que haya solicitudes que hayan agotado el tiempo de espera o que falten. Es posible que vea mensajes de tiempo de espera como

    ```
    TimeoutError: URL {YOUR_DOMAIN} was unable to finish all network requests before reaching the maximum time limit
    ```

    o

    ```
    TimeoutError: Page load timed-out (unable to finish all network requests on time)
    ```

    Estas solicitudes no se pudieron completar antes del tiempo de espera de carga de la página o del final del script.

    Para resolver el problema, intente profundizar en el recurso para ver cuándo y dónde responde mal. Algunos recursos pueden regresar lentamente de forma intermitente.
  </Collapser>

  <Collapser
    id="page-load"
    title="Carga de página lenta"
  >
    Si la página con frecuencia no puede cargarse completamente en 60 segundos y está utilizando un monitor de browser simple, pruebe con un script de monitor de browser y establezca un [tiempo de espera de carga de página](/docs/synthetics/new-relic-synthetics/scripting-monitors/synthetics-scripted-browser-reference#options-manage-timeouts-pageLoadTimeout) configurable.
  </Collapser>
</CollapserGroup>
