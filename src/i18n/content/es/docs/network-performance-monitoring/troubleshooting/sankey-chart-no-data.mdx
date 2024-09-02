---
title: El gráfico de Sankey muestra el error "no se encontraron datos"
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: The sankey chart for flow analysis is showing a 'no data found' error in your UI.
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Al analizar la telemetría de flujo, agregar filtros y/o facetas al diagrama de Sankey genera un error que indica que no se pudieron encontrar datos.

<img
  title="Sankey No Data Found Error"
  alt="Sankey No Data Found Error"
  src="/images/network_screenshot-crop_sankey-no-data.webp"
/>

<figcaption>
  Error encontrado al analizar la telemetría de flujo.
</figcaption>

Este error ocurre cuando la consulta NRQL subyacente generada por los filtros y/o facetas aplicadas al diagrama de Sankey no contiene la telemetría necesaria para representar el gráfico.

## Solución [#solution]

Al representar el gráfico sankey, se crea dinámicamente una consulta NRQL subyacente que tiene una dependencia específica basada en las selecciones del usuario. Como mínimo, existe el requisito de que los registros de flujo encontrados contengan los siguientes campos:

* `sample_rate`

* `provider = 'kentik-flow-device'`

* `in_bytes` o `in_pkts`, dependiendo de si ha seleccionado la opción

  <DNT>
    **Byte traffic**
  </DNT>

  o

  <DNT>
    **Packet traffic**
  </DNT>

  para el gráfico

También será necesaria la selección de facetas por parte del usuario. Por ejemplo, en la captura de pantalla anterior, los campos `CustomBytes1` y `CustomBytes2` no existen en los registros de flujo de la conversación que utiliza las direcciones IP de origen y destino en el filtro.

Para resolver este problema, primero investigue la consulta NRQL subyacente para su gráfico sankey seleccionando la acción <DNT>**View query**</DNT> en el icono superior derecho del gráfico e identifique cualquier campo que devuelva valores nulos o vacíos de su consulta. El siguiente paso sería actualizar la plantilla de flujo en su exportador de flujo para garantizar que todos los campos necesarios se envíen al agente de KTranslate como se esperaba.
