---
title: Configurar el nivel de servicio a través de la API NerdGraph
tags:
  - Full-Stack Observability
  - Observe everything
  - Service level management
  - SLI/SLO
  - Configure
  - Consume
  - NerdGraph
metaDescription: Our new offer to create and consume SLI/SLOs using the NerdGraph API.
freshnessValidatedDate: never
translationType: machine
---

Con New Relic puede implementar [nivel de servicio](/docs/service-level-management/create-slm) para su aplicación, [consumir](/docs/service-level-management/consume-slm) los resultados fácilmente desde la UI durante sus sesiones de planificación y respuesta a incidentes, e iterar progresivamente en la configuración para ajustar sus objetivos a la experiencia del usuario deseada.

Además de la UI, también puede utilizar nuestro [Explorador de API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) para crear y editar SLI y sus SLO. Alternativamente, puede automatizar esta configuración utilizando el [recurso nivel de servicio de Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs/resources/service_level).

<Callout variant="important">
  Para crear un nivel de servicio, un usuario requiere [permiso para modificar y eliminar reglas de evento-a-métrica](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions#insights).
</Callout>

## Crear un SLI con un SLO [#create-sli-slo]

Consulte [Crear y editar SLI y SLO](/docs/service-level-management/create-slm#sli-entity) para conocer los conceptos básicos de la configuración de SLI y SLO, como la entidad a la que está asociado un SLI. Además, puede consultar esa documentación para encontrar ejemplos de los indicadores más comunes para <InlinePopover type="apm"/>servicios y <InlinePopover type="browser"/>aplicación.

El siguiente es un ejemplo de llamada a NerdGraph que crea un SLI utilizando la consulta de mutación `serviceLevelCreate` :

```graphql
mutation {
  serviceLevelCreate(
    entityGuid: "entityGuid"
    indicator: {
      name: "Latency below 0.25 seconds"
      description: "The proportion of valid requests that were served faster than 0.25s, which is considered to correspond to a good experience."
      events: {
        validEvents: { 
          from: "Transaction", 
          where: "entityGuid = 'entityGuid'" 
        }
        goodEvents: {
          from: "Transaction"
          where: "entityGuid = 'entityGuid' and duration < 0.25"
        }
        accountId: accountId
      }
      objectives: {
        target: 99.5
        timeWindow: { 
          rolling: { 
            count: 7, 
            unit: DAY 
          } 
        }
      }
    }
  ) {
    id
    description
  }
}
```

Contiene estos campos:

* <DNT>
    **`entityGuid`**
  </DNT>

  : el GUID de la [entidad](https://docs-preview.newrelic.com/docs/service-level-management/create-slm#sli-entity) (por ejemplo,

  <InlinePopover type="apm"/>

  servicio, aplicación browser , etc.) con la que desea relacionar este SLI. En la UI, puede encontrar este GUID en la página de la entidad, en

  <DNT>
    **See metadata and manage tags**
  </DNT>

  .

* <DNT>
    **`description`**
  </DNT>

  : Utilice descripciones detalladas, incluido el umbral seleccionado que determina un buen evento.

  * Por ejemplo, para un SLI de disponibilidad, incluya algo como "La proporción de solicitudes válidas que se atendieron sin errores".
  * O, para un SLI de latencia, incluya una descripción como "La proporción de solicitudes válidas que se atendieron más rápido que 0,25 segundos, lo que se considera que corresponde a una buena experiencia".

* <DNT>
    **`accountId`**
  </DNT>

  : el ID de la cuenta a la que pertenece el

  <InlinePopover type="apm"/>

  servicio o aplicación browser , que contiene los datos NRDB para los cálculos de SLI/SLO.

* <DNT>
    **`badEvents.from`**
  </DNT>

  ,

  <DNT>
    **`badEvents.where`**
  </DNT>

  * La consulta NRQL que define un evento incorrecto, `SELECT count(*) FROM badEvents.from WHERE badEvents.where`, requiere estas cláusulas `FROM` y `WHERE` .
  * Si definió un SLI a partir de un evento válido y malo, deje el objeto `goodEvents` vacío.

* <DNT>
    **`goodEvents.from`**
  </DNT>

  ,

  <DNT>
    **`goodEvents.where`**
  </DNT>

  * La consulta NRQL que define un buen evento, `SELECT count(*) FROM goodEvents.from WHERE goodEvents.where`, requiere estas cláusulas `FROM` y `WHERE` .
  * Si definiste un SLI a partir de un evento válido y bueno, deja el objeto `badEvents` vacío.

* <DNT>
    **`validEvents.from`**
  </DNT>

  ,

  <DNT>
    **`validEvents.where`**
  </DNT>

  * Estas son las cláusulas `FROM` y `WHERE` para la consulta NRQL que define un evento válido, que dará como resultado `SELECT count(*) FROM validEvents.from WHERE validEvents.where`.

* <DNT>
    **`name`**
  </DNT>

  : un nombre de categoría breve para su SLI para ayudar a comprender de qué se trata el nivel de servicio. Sugerimos incluir cualquier parámetro y filtro específico involucrado en la definición de SLI. Ejemplos:

  * Disponibilidad
  * latencia inferior a 4 segundos
  * CLS para escritorios por debajo de 0.1

* <DNT>
    **`objectives`**
  </DNT>

  : Una matriz de objetivos (SLO) para el SLI.

  * `target`: El objetivo de su SLO, hasta 100,00. El campo admite hasta 5 decimales.

    * Si su usuario está satisfecho con la experiencia actual, establezca el porcentaje de SLO para que coincida con la línea de base actual. Por ejemplo, el percentil utilizado para determinar el buen evento del SLI.

  * `timeWindow.rolling.count`: La duración del período tomado en consideración para calcular el SLO. Los valores admitidos son `1`, `7`, `14`, `28` y `30`.

  * `timeWindow.rolling.unit`: `DAY`es el valor admitido.

### Usando `SELECT` funciones y comodines [#select-functions]

Tenemos un atributo `SELECT` opcional, establecido en `count(*)` de forma predeterminada. Si tiene un escenario más complejo, puede usar `select` para ser explícito sobre la Métrica o la propiedad del Evento que desea consultar. Para `SELECT` también se admite la función `SUM` , así como el comodín (`%`). Veamos un ejemplo de una configuración `SELECT` más compleja.

```graphql
mutation {
  serviceLevelCreate(
    entityGuid: "entityGuid"
    indicator: {
      name: "Success request"
      description: "The proportion of success requests count is 99% that the total count"
      events: { 
        validEvents: { 
          select: {
            function: SUM
            attribute: "http.request.status.%.count"
          },
          from: "Metric"
        }
        goodEvents: {
          select: {
            function: SUM
            attribute: "http.request.status.2%.count"
          },
          from: "Metric"
        }
        accountId: accountId
      }
      objectives: {
        target: 99.5
        timeWindow: { 
          rolling: { 
            count: 7, 
            unit: DAY 
          } 
        }
      }
    }
  ) {
    id
    description
  }
}
```

Observe que las propiedades `validEvents` y `goodEvents` de `events` ahora incluyen un `select`. En el select, puedes configurar la función:

* `COUNT`: función predeterminada, contará el número de resultados;
* `SUM`: suma todos los valores para el evento/métrica seleccionado.

Otra diferencia importante en este ejemplo es el uso del comodín (`%`) para consultar valores de todas las métricas con el mismo formato. Imagine que su aplicación informa el recuento de solicitudes por estado (por ejemplo, `http.request.status.200.count`, `http.request.status.201.count`, `http.request.status.400.count`, etc.), la consulta sumará todos los nombres de métricas coincidentes utilizando el comodín.

## Recuperar la configuración de un SLI para un servicio APM [#retrieve-config]

Utilice esta consulta para recuperar la configuración de un SLI, incluido su `id`.

```graphql
{
  actor {
    entity(guid: "entityGuid") {
      guid
      name
      serviceLevel {
        indicators {
          createdAt
          createdBy {
            email
          }
          description
          entityGuid
          id
          name
          objectives {
            target
            timeWindow {
              rolling {
                count
                unit
              }
            }
          }
        }
      }
    }
  }
}
```

## Actualizar los SLO de un SLI [#update-slo]

Utilice la mutación `serviceLevelUpdate` para definir uno o más SLO para cada uno de los SLI. Para obtener el `id` del SLI, utilice la consulta anterior.

```graphql
mutation {
  serviceLevelUpdate(
    id: "indicators.id"
    indicator: {
      objectives: {
        target: 99.00
        timeWindow: { 
          rolling: { 
            count: 7, 
            unit: DAY 
          }
        }
      }
    }
  ) {
    id
  }
}
```
