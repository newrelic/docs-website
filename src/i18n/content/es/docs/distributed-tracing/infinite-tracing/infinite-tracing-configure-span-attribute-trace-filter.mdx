---
title: 'Infinite Tracing: Configurar el filtro de traza del atributo span'
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: Here is how to customize span attribute filters for a trace observer.
freshnessValidatedDate: never
translationType: machine
---

Además de los filtros de duración y aleatorios, los observadores de trazas utilizan un filtro de trazas de atributo de intervalo para encontrar trazas útiles. Puede personalizar las reglas de filtrado para mantener o descartar trazas que tengan tramos con atributos específicos.

## Descripción general

Las reglas de filtrado son pares de valores principales específicos de los observadores de trazas individuales. Utilice la aplicación de configuración Infinite Tracing para definirlos y verlos.

El filtro de traza del atributo span permite un total de tres reglas y, de forma predeterminada, se proporcionan dos reglas para capturar errores. Si bien puede eliminar las dos reglas de error predeterminadas, le recomendamos mantener las dos reglas de error predeterminadas y agregar una regla adicional, si la necesita.

## Agregar una regla personalizada [#add-custom-rule]

A continuación se muestra un ejemplo de cómo agregar una regla para mantener todas las trazas que tienen intervalos con atributo que contiene el usuario `sally@some_company.com`:

1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Apps > Your apps > Infinite Tracing settings**</DNT>.

2. Para el observador de traza que desea modificar, haga clic en el ícono de ajustes para abrir los filtros.

3. En <DNT>**Create new rule**</DNT>, ingrese `user` debajo <DNT>**Span key**</DNT> y luego, en el menú desplegable <DNT>**Key operator**</DNT> , seleccione el valor <DNT>**Equals**</DNT>:

   <img
     title="span_key.png"
     alt="Screenshot showing how to enter a span key."
     src="/images/distributed-tracing_screenshot-crop_update-span-key.webp"
   />

4. En <DNT>**Span value**</DNT>, ingrese `sally@some_company.com` y luego, en el menú desplegable <DNT>**Value operator**</DNT> , seleccione <DNT>**Equals**</DNT>.

   <img
     title="span_value.png"
     alt="Screenshot showing how to enter a span value."
     src="/images/distributed-tracing_screenshot-crop_update-span-value.webp"
   />

5. En el menú desplegable <DNT>**Observer action**</DNT> , seleccione <DNT>**Keep**</DNT>.

   <Callout variant="tip">
     Si tiene alguna traza que coincida con esta regla, la verá enumerada debajo de la regla.
   </Callout>

6. Haga clic en <DNT>**Add rule**</DNT> para guardar su regla personalizada.

Cuando agrega una regla personalizada, entra en vigor inmediatamente para ese observador de traza.

## Prioridad de regla

Cada regla se evalúa de forma independiente. Si alguna regla coincide, se lleva a cabo su acción de observador, <DNT>**Keep**</DNT> o <DNT>**Discard**</DNT>. Cuando una traza tiene tramos con atributos que coinciden con las reglas de filtro <DNT>**Keep**</DNT> y <DNT>**Discard**</DNT> , la traza se descarta.

Por ejemplo, supongamos que no desea guardar algún error esperado que tenga una frase determinada en el mensaje de error. Puede crear una regla de filtro <DNT>**Discard**</DNT> que apunte al mensaje de error y al mismo tiempo conserve todas las demás trazas con un error.
