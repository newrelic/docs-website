---
title: Establecer un agente de usuario personalizado
tags:
  - APIs
  - REST API v2
  - Basic functions
metaDescription: Using custom user agent strings for custom user agents that interact with the New Relic API is a recommended best practice.
freshnessValidatedDate: never
translationType: machine
---

Para garantizar que New Relic identifique correctamente a los editores de integración de API, cada integración necesita una cadena de agente de usuario personalizada única.

Si solo utiliza su integración internamente y no planea compartirla con nadie fuera de su organización, no necesita establecer una cadena de agente personalizada única.

## Requisitos previos [#h2_prereqs]

Este documento supone que planea distribuir públicamente una integración que utiliza cualquiera de las API RESTful públicas de New Relic. Ejemplos de distribución pública incluyen:

* Publicar su código de integración en Github.
* Empaquetar su integración en un complemento, extensión u otro paquete y distribuirla a través de un directorio como [el complemento de WordPress](https://wordpress.org/plugins/).
* Ofrecer una integración "como servicio" entre su producto y New Relic, sin distribuir realmente su código de integración, como [la integración de Runscope](https://www.runscope.com/docs/api-testing/newrelic#connecting).

## Agente de usuario [#h2_user_agents]

Al escribir aplicaciones para que funcionen con las API RESTful de New Relic (denominadas <DNT>**integration**</DNT> en este documento), está creando un agente HTTP para administrar el intercambio de información entre su aplicación y New Relic. Una integración se identifica a sí misma enviando una cadena de identificación estándar. En HTTP, esta cadena se incluye en el campo de encabezado <DNT>**User-Agent**</DNT>.

Cuando utilice las API RESTful de New Relic, establezca un encabezado <DNT>**User-Agent**</DNT> que identifique su integración en la API de llamada. Esta cadena <DNT>**User-Agent**</DNT> personalizada permite a New Relic identificar la integración que realiza solicitudes a las API de New Relic.

Al configurar un agente de usuario personalizado, New Relic puede rastrear:

* Estadísticas de uso para tu integración.
* Uso de API potencialmente defectuoso o abusivo.

## Establecer un agente de usuario [#h2_setting]

Para configurar un agente de usuario personalizado, incluya una cadena de agente en el encabezado HTTP <DNT>**User-Agent**</DNT>.

Ejemplos:

<table>
  <thead>
    <tr>
      <th width={125}>
        <DNT>
          **Language**
        </DNT>
      </th>

      <th>
        <DNT>
          **Example**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        cURL
      </td>

      <td>
        ```
        curl -H 'User-Agent: my-integration/1.2.3'
        ```
      </td>
    </tr>

    <tr>
      <td>
        Java  
                (usando OBTENER)
      </td>

      <td>
        ```
        get.setHeader("User-Agent", "my-integration/1.2.3");
        ```
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        ```
        header('User-Agent: my-integration/1.2.3');
        ```
      </td>
    </tr>
  </tbody>
</table>

La cadena mínima del agente de usuario es el nombre y la versión de la integración: `name/version`. Puede encadenar varios valores en una lista separada por espacios. La sintaxis completa es:

```
name/version [(comments)] [name/version [(comments)]] [...]​
```

Para el nombre de la integración, utilice una cadena que identifique de forma clara y significativa su integración.

* <Icon name="fe-x"/>

  Nombre ambiguo: integración New Relic

* <Icon name="fe-check"/>

  Nombre claro y significativo: integración de SaaS XYZTools con New Relic

Para la versión de integración, utilice un ID de compilación, un hash de confirmación u otro identificador que se actualice cuando publique nuevas versiones de integración.

Envuelva los comentarios entre paréntesis `()` como una lista separada por punto y coma;

Comentarios útiles para incluir:

* La URL de acceso público de su integración. Por ejemplo, una URL de Github o una página en su sitio de documentos que describa la integración.
* Información de contacto para que New Relic pueda comunicarse fácilmente con el editor de integración.

<Callout variant="tip">
  New Relic nunca compartirá ni utilizará la información de la cadena del agente de usuario para ningún otro propósito que no sea discutir la integración con su editor.
</Callout>

<CollapserGroup>
  <Collapser title="Configure un agente de usuario personalizado para su integración">
    Tienes una integración con la siguiente información identificativa:

    * Nombre: Medidor métrico

    * Versión: 3.2

    * URL: meter.me/info

    * Contacto: [help@meter.me](mailto:help@meter.me)

      La cadena de agente de usuario personalizada sería:

      ```
      MetricMeter for New Relic/3.2 (meter.me/info; help​@​meter.me)
      ```
  </Collapser>
</CollapserGroup>

## Cadenas de agentes de usuario y New Relic [#h2_user_agent_usage]

New Relic captura cadenas de agentes de usuario de la API de llamadas para identificar su fuente.

Una de las mejores prácticas recomendadas es el uso de cadenas de agentes de usuario personalizadas para la integración disponible públicamente. Dependiendo de su relación comercial con New Relic, es posible que sea necesario. Etiquetar su integración con una cadena de agente de usuario personalizada no afecta su interacción con las API de New Relic.
