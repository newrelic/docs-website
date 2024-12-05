---
title: Configurar los ajustes de solicitud de red móvil
tags:
  - Mobile monitoring settings
  - Network requests
metaDescription: 'Block or allow hostnames, create rules for status codes, and create aliases for hostnames.'
freshnessValidatedDate: never
translationType: machine
---

La página de configuración de solicitud de red móvil puede ayudarle a personalizar cómo se informan las métricas y los eventos de la red. Puede [bloquear o permitir el nombre de host](#blockallow-hostnames), [ignorar los códigos de estado HTTP de ciertos hosts](#ignore-status-codes) y [crear alias para cambiar el nombre de hosts o agrupar subdominios](#group-into-alias).

Para configurar estos ajustes, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select a mobile app) > Settings > Network settings**</DNT>.

## Bloquear/permitir nombre de host [#blockallow-hostnames]

Puede permitir o bloquear cierto nombre de host para que no sea monitoreado. Por ejemplo, si desea permitir solo subdominios de `ecommerce.com`:

1. En

   <DNT>
     **Network settings page**
   </DNT>

   , seleccione la pestaña

   <DNT>
     **Show only hostnames**
   </DNT>

   .

2. Haga clic en

   <DNT>
     **Add a hostname**
   </DNT>

   .

3. Introduzca el nombre de host `*.ecommerce.com` y haga clic en

   <DNT>
     **Add to list**
   </DNT>

   .

<img
  title="Allow a hostname"
  alt="Allow a hostname"
  src="/images/mobile_screenshot-full_show-hostname.webp"
/>

Espere hasta 2 horas para que se aplique la regla.

## Ignorar códigos de estado HTTP [#ignore-status-codes]

Puede ignorar un código de estado de error HTTP específico en un nombre de host. Por ejemplo, si desea ignorar los errores `401`, `403` y `404` de todos los `ecommerce.com` subdominios:

1. En

   <DNT>
     **Network settings page**
   </DNT>

   , seleccione la pestaña

   <DNT>
     **Status codes**
   </DNT>

   .

2. Haga clic en

   <DNT>
     **Create a status code rule**
   </DNT>

   .

3. Ingrese el host `*.ecommerce.com`.

4. Introduzca los códigos de estado `401`, `403` y `404` y haga clic en

   <DNT>
     **Add to list**
   </DNT>

   .

<img
  title="Create a status code rule"
  alt="Create a status code rule in the UI"
  src="/images/mobile_screenshot-full_new-status-rule.webp"
/>

Espere hasta 2 horas para que se aplique la regla.

## Crear alias para el nombre de host [#group-into-alias]

Puede crear alias para cambiar el nombre o agrupar el nombre de host que tenga más sentido para usted. Por ejemplo, si desea crear un alias que agrupe todos los subdominios de `ecommerce.com`:

1. En la página

   <DNT>
     **Network settings**
   </DNT>

   , seleccione la pestaña

   <DNT>
     **Aliases and groups**
   </DNT>

   .

2. Haga clic en

   <DNT>
     **Create an alias**
   </DNT>

   .

3. Ingrese `*.ecommerce.com` para agrupar todos los subdominios de `ecommerce.com`.

4. Introduzca el alias `ecommerce.com` y haga clic en

   <DNT>
     **Save alias**
   </DNT>

   .

<img
  title="Create an alias"
  alt="create an alias"
  src="/images/mobile_screenshot-full_create-alias.webp"
/>

Espere hasta 2 horas para que se aplique la regla.

### Recomendaciones para usar comodines [#about-wildcards]

Cuando se utiliza `*` (un comodín), las reglas de expresiones regulares son ligeramente diferentes. El comodín se utiliza para un segmento completo, o los valores entre dos puntos en un nombre de host (es decir, el segmento completo para `hostname.1219.com` es `1219`).

A continuación se muestran algunos ejemplos del uso exitoso de comodines para crear un alias:

<table>
  <thead>
    <tr>
      <th>
        Hospedadores
      </th>

      <th>
        Alias
      </th>

      <th>
        Dominio de ejemplo
      </th>

      <th>
        Resultado
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `192.168.*.100`
      </td>

      <td>
        LOCAL
      </td>

      <td>
        `192.168.10.100`
      </td>

      <td>
        LOCAL
      </td>
    </tr>

    <tr>
      <td>
        `tbr.*.something.com`
      </td>

      <td>
        tbr.\*.something.com
      </td>

      <td>
        `tbr.gh99898.something.com`
      </td>

      <td>
        tbr.\*.something.com
      </td>
    </tr>

    <tr>
      <td>
        `api1.mydomain.co.uk`
      </td>

      <td>
        API
      </td>

      <td>
        `api1.mydomain.co.uk`
      </td>

      <td>
        API
      </td>
    </tr>

    <tr>
      <td>
        `api2.mydomain.co.uk`
      </td>

      <td>
        API
      </td>

      <td>
        `api2.mydomain.co.uk`
      </td>

      <td>
        API
      </td>
    </tr>
  </tbody>
</table>

Ahora que ha visto algún ejemplo de cómo funciona esto, veamos algunos ejemplos de _lo que no funcionará_.

<table>
  <thead>
    <tr>
      <th>
        Hospedadores
      </th>

      <th>
        Alias
      </th>

      <th>
        Dominio de ejemplo
      </th>

      <th>
        Resultado
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `tbr.gh*.something.com`
      </td>

      <td>
        tbr.gh\*.something.com
      </td>

      <td>
        `tbr.gh99898.something.com`
      </td>

      <td>
        tbr.gh99898.something.com
      </td>
    </tr>

    <tr>
      <td>
        `cs-*.company.jp`
      </td>

      <td>
        cs-\*.company.jp
      </td>

      <td>
        `cs-23.company.jp`
      </td>

      <td>
        cs-23.company.jp
      </td>
    </tr>

    <tr>
      <td>
        `cs-*.company.jp`
      </td>

      <td>
        customer_survey
      </td>

      <td>
        `cs-*.company.jp`
      </td>

      <td>
        customer_survey
      </td>
    </tr>
  </tbody>
</table>

Recuerde, un comodín sólo afectará a un segmento completo. Dado que `*` solo se puede utilizar para un segmento completo, `*` aquí se tomará literalmente y no como un comodín.
