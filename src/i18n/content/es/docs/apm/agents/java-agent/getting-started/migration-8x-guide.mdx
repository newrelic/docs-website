---
title: Agente de guía de migración de Java 7.x a 8.x
tags:
  - Agents
  - Java agent
  - Getting started
freshnessValidatedDate: never
translationType: machine
---

Esta guía cubre los principales cambios entre las series 7.x y 8.x del agente de Java. Cubre problemas que puede encontrar durante la actualización y cómo migrar exitosamente a la versión 8.x. Los principales cambios incluyen:

* [Se modificó y eliminó el atributo de transacción y span.](#changed_and_removed_attributes)
* [Instrumentación eliminada](#removed_instrumentation)

<Callout variant="important">
  Los atributos eliminados en las versiones 8.0 a 8.7 se reintroducen en 8.8.0. Esto brinda compatibilidad con versiones anteriores para los clientes que todavía usan esos atributos para <InlinePopover type="alerts"/>o el panel.
</Callout>

## Se modificó y eliminó el atributo de transacción y span. [#changed_and_removed_attributes]

Para brindar coherencia en nuestro agente APM y alinearnos mejor con los estándares de la industria, cambiamos los atributos de transacción y span en el agente de Java. A partir de agente de Java versión 7.6.0, Introdujimos el nuevo atributo estándar <DNT>**http.statusCode**</DNT> y <DNT>**http.statusText**</DNT> y marcamos <DNT>**httpResponseCode**</DNT>, <DNT>**response.status**</DNT> y <DNT>**response.statusMessage**</DNT> como obsoletos.

| Atributo obsoleto                     | Nuevo atributo                 | Cambio de tipo de datos      |
| ------------------------------------- | ------------------------------ | ---------------------------- |
| <DNT>**httpResponseCode**</DNT>       | <DNT>**http.statusCode**</DNT> | <DNT>**String to INT**</DNT> |
| <DNT>**response.status**</DNT>        | <DNT>**http.statusCode**</DNT> | <DNT>**String to INT**</DNT> |
| <DNT>**response.statusMessage**</DNT> | <DNT>**http.statusText**</DNT> | <DNT>**N/A**</DNT>           |

## Acciones recomendadas

* Si tiene alertas o panel que utiliza el atributo obsoleto y usa la versión del agente 8.0 - 8.7, debe actualizar su agente a 8.8 o actualizar las referencias al atributo eliminado. Si actualizó todas las alertas o el panel al nuevo atributo estándar, puede desactivar el indicador de compatibilidad para usar solo el nuevo atributo estándar. Para obtener más información sobre la configuración del indicador de compatibilidad, consulte la configuración `http_attribute_mode` .
* Actualice las alertas y el panel que utilizan atributos obsoletos.

### Encontrar consulta de alerta impactada

Para buscar y corregir alertas afectadas:

1. Utilice [NerdGraph Explorer](https://one.newrelic.com/nerdgraph-graphiql) y busque alertas utilizando el operador `queryLike` para cada atributo que esté buscando. Por ejemplo:

   ```
   {
     actor {
       user {
         name
       }
       account(id: <ACCOUNTID>) {
         alerts {
           nrqlConditionsSearch(searchCriteria: {queryLike: "httpResponseCode"}) {
             nrqlConditions {
               nrql {
                 query
               }
               id
               name
               policyId
             }
           }
         }
       }
     }
   }  
   ```

2. Para cada alerta devuelta, puede utilizar la identificación o el nombre en la UI <DNT>**Alerts & AI > [Alerts Conditions](https://one.newrelic.com/alerts-ai/condition-builder/condition-list)**</DNT> para encontrar la alerta.

3. Revise la condición de alerta y la cobertura de la señal para confirmar cualquier impacto en la alerta.

4. Utilice las instrucciones en [Reparación de alertas impactadas y declaraciones NRQL del panel](#fixing_nrql) para actualizar las declaraciones NRQL.

### Encontrar consulta dashboard afectado

Para encontrar la consulta afectada para un dashboard:

1. Usando NerdGraph Explorer y el guid de entidad ubicado en los metadatos de un dashboard, puede obtener todas las consultas NRQL para un dashboard.

   ```
    {
     actor {
       entity(guid: "[ENTITY GUID]") {
         ... on DashboardEntity {
           guid
           name
           pages {
             widgets {
               rawConfiguration
             }
           }
         }
       }
     }
   }
   ```

2. La consulta NRQL regresará en el elemento `rawConfiguration` . Puede utilizar la búsqueda de texto para encontrar el atributo eliminado.

3. Utilice las instrucciones en [Reparación de alertas impactadas y declaraciones NRQL del panel](#fixing_nrql) para actualizar las declaraciones NRQL.

También puede obtener la lista de guías de entidades para todos los paneles con la siguiente consulta:

```
 {
  actor {
    entitySearch(query: "domain IN ('VIZ')") {
      results {
        entities {
          guid
          accountId
        }
      }
    }
  }
}
```

### Corrección de alertas impactadas y declaraciones NRQL del panel [#fixing_nrql]

<DNT>**http.statusCode**</DNT> reemplazaría las referencias a <DNT>**httpResponseCode**</DNT> o <DNT>**response.status**</DNT>, que también tiene un tipo de datos diferente. Anteriormente habrías utilizado una referencia como:

`[...] WHERE (Numeric(response.status)\>399 [...]`

para convertir el tipo de datos de cadena a un número. Ya no necesita hacer esto y en su lugar puede utilizar operaciones numéricas simples como:

`[...] WHERE (http.statusCode \>399) [...]`

<DNT>**http.statusText**</DNT> reemplazaría las referencias a <DNT>**response.statusMessage**</DNT>. El tipo de datos para este atributo no ha cambiado.

## Instrumentación eliminada [#removed_instrumentation]

Eliminamos los siguientes modelos de instrumentación para las versiones de biblioteca que ya no son compatibles con sus respectivos mantenedores:

* cassandra-datastax-2.1.2
* httpclient-3.0
* jdbc-integrado-derby-10.2.1.6
* jdbc-integrado-derby-10.10.1.1
* jetty-7
* jetty-7.6
* jetty-9
* jetty-9.0.4
* jetty-9.1
* mongodb-2.12
* mongodb-2.14
* mongodb-3.0
* khttp-3.0.0
* khttp-3.4.0
* khttp-3.5.0

Si su aplicación utiliza una de las bibliotecas, ya no recibirá la métrica y la transacción producida por la instrumentación para esa biblioteca al actualizar a una versión de agente de Java v8.x.

## Acciones recomendadas

Si es posible, actualice la biblioteca afectada a una versión compatible con el mantenedor y New Relic y actualice su agente. Si actualizar la biblioteca EOLed no es una opción, aún puede actualizar su agente, pero le recomendamos que lo pruebe y revise para determinar si los datos eliminados causan lagunas en áreas críticas.
