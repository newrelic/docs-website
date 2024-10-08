---
title: 'Tutorial de NerdGraph: ver y agregar etiquetas'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph (our GraphQL API) to manage tags attached to your entities.
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar nuestra [API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) para agregar [etiquetas](/docs/new-relic-one/use-new-relic-one/core-concepts/tagging-use-tags-organize-group-what-you-monitor) a sus datos para ayudar a mejorar la organización y la capacidad de búsqueda de los datos.

## Descripción general [#overview]

Este documento explica cómo utilizar nuestra API NerdGraph para agregar y administrar etiquetas. Tenga en cuenta que esta es sólo una forma de agregar etiquetas. Para conocer otros métodos, consulte [Cómo se agregan las etiquetas](/docs/new-relic-one/use-new-relic-one/core-concepts/use-tags-help-organize-find-your-data/#tag-sources). Para saber cómo automatizar etiquetas usando nuestra herramienta CLI, consulte nuestro [sitio para desarrolladores](https://developer.newrelic.com/automate-workflows/5-mins-tag-resources/).

## Leer etiqueta para una entidad [#read-tags]

Para construir estas consultas y ver respuestas:

1. Vaya al explorador NerdGraph GraphiQL en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).
2. Utilice [`entitySearch()`](/docs/apis/graphql-api/tutorials/use-new-relic-graphql-api-query-entities#search-entity) para encontrar la entidad y luego buscar su etiqueta.
3. Utilice la API de etiquetas de NerdGraph para leer la etiqueta existente y sus valores.

En este ejemplo, nuestra entidad es una aplicación browser llamada `Cookie Checkout`:

```
{
  actor {
    entitySearch(query: "name like 'Cookie Checkout'") {
      results {
        entities {
          tags {
            key
            values
          }
        }
      }
    }
  }
}
```

Los valores reales varían dependiendo de sus datos. Utilice el [explorador New Relic GraphiQL](https://api.newrelic.com/graphiql) para experimentar con consulta.

## Agregar etiqueta para una entidad [#add-tags]

Para agregar una nueva etiqueta para una entidad:

1. Vaya al explorador NerdGraph GraphiQL en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).

2. Utilice [`entitySearch()`](/docs/apis/graphql-api/tutorials/use-new-relic-graphql-api-query-entities#search-entity) para localizar el GUID de la entidad que desea etiquetar.

3. Utilice la mutación `taggingAddTagsToEntity` para agregar una etiqueta con un valor a la entidad.

4. Para

   <InlinePopover type="apm"/>

   agente, se requiere reiniciar después de agregar una nueva etiqueta.

En este ejemplo, tenemos una aplicación browser llamada `Cookie Checkout` propiedad de un equipo de UI. Queremos agregar una etiqueta `team` con un valor `ui` a esta instancia. Una vez agregada la etiqueta, podemos filtrar por la etiqueta `team:ui` y encontrar la aplicación `Cookie Checkout` en la UI de New Relic.

```
mutation {
    taggingAddTagsToEntity(
        guid: "ENTITY_GUID",
        tags: { key: "team", values: ["ui"]}) {
            errors {
                message
            }
        }
}
```

## Eliminar una etiqueta de una entidad [#delete-entity-tag]

Para eliminar una etiqueta y todos sus valores asociados de una entidad:

1. Vaya al explorador NerdGraph GraphiQL en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).

2. Utilice [`entitySearch()`](/docs/apis/graphql-api/tutorials/use-new-relic-graphql-api-query-entities#search-entity) para localizar el GUID de la entidad con la etiqueta que desea eliminar.

3. Utilice la mutación `taggingDeleteTagFromEntity` .

4. Para

   <InlinePopover type="apm"/>

   agente, se requiere reiniciar después de cambiar la etiqueta.

La siguiente mutación de ejemplo elimina la etiqueta `team` de una entidad:

```
mutation {
    taggingDeleteTagFromEntity(
        guid: "ENTITY_GUID",
        tagKeys: ["team"]) {
            errors {
                message
            }
        }
}
```

## Eliminar valores de etiqueta específicos para una entidad [#delete-specific-tag]

En lugar de eliminar una etiqueta completa y todos sus valores, puede eliminar un solo valor de etiqueta.

1. Vaya al explorador NerdGraph GraphiQL en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).
2. Utilice [`entitySearch()`](/docs/apis/graphql-api/tutorials/use-new-relic-graphql-api-query-entities#search-entity) para localizar el GUID de la entidad con la etiqueta que desea eliminar.
3. Utilice la mutación `taggingDeleteTagValuesFromEntity` .

La siguiente mutación de ejemplo elimina el valor `ui` de la clave `tag` :

```
mutation {
    taggingDeleteTagValuesFromEntity(
        guid: "ENTITY_GUID",
        tagValues: [{key: "team" value: "ui"}]) {
            errors {
                message
            }
        }
}
```

Como `tagValues` es una matriz, puedes eliminar varios valores específicos de una sola entidad en una mutación.

## Reemplazar todos los valores de etiqueta para una entidad [#replace-tag-values]

Para reemplazar todo el conjunto de etiquetas de la entidad con el conjunto de etiquetas proporcionado:

1. Vaya al explorador NerdGraph GraphiQL en [api.newrelic.com/graphiql](https://api.newrelic.com/graphiql).
2. Utilice [`entitySearch()`](/docs/apis/graphql-api/tutorials/use-new-relic-graphql-api-query-entities#search-entity) para localizar el GUID de la entidad con la etiqueta que desea eliminar.
3. Utilice la mutación `taggingReplaceTagsOnEntity` .

En este ejemplo, la aplicación browser `Cookie Checkout` se transfirió del equipo `ui` al equipo `cookie-dev`. Puede reemplazar los valores de etiqueta para `team` con la siguiente mutación:

```
mutation {
    taggingReplaceTagsOnEntity(
        guid: "ENTITY_GUID",
        tags: {key: "team" values: ["cookie-dev"]}) {
            errors {
                message
            }
        }
}
```
