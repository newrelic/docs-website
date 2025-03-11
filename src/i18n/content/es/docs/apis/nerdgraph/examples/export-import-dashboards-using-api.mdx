---
title: 'Tutorial de NerdGraph: mover el panel a otras cuentas'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to export and import dashboards.
freshnessValidatedDate: never
translationType: machine
---

Puede exportar su [panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) e importarlo a una nueva cuenta mediante consulta y mutaciones en [NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph).

<Callout variant="tip">
  También puedes exportar tu <InlinePopover type="dashboards"/>[como imagen](/docs/apis/nerdgraph/examples/export-dashboards-pdfpng-using-api).
</Callout>

Para hacerlo:

1. Vaya al [explorador GraphiQL](https://api.newrelic.com/graphiql).
2. Descubra [qué paneles están disponibles](#list).
3. [Exporte el dashboard deseado](#export).
4. [Importe el dashboard seleccionado](#import) a una nueva cuenta.

## Enumere su panel de control [#list]

Utilice la siguiente consulta para recuperar una lista de su panel existente:

```
{
  actor {
    entitySearch(queryBuilder: {type: DASHBOARD}) {
      results {
        entities {
          ... on DashboardEntityOutline {
            guid
            name
            accountId
          }
        }
      }
    }
  }
}
```

## Exportar un dashboard [#export]

Utilice la siguiente consulta para exportar y luego extraiga la información de la entidad del dashboard del resultado:

```
{
  actor {
    entity(guid: "your_guid_xxxxxxx") {
      ... on DashboardEntity {
        name
        permissions
        pages {
          name
          widgets {
            visualization { id }
            title
            layout { row width height column }
            rawConfiguration
          }
        }
      }
    }
  }
}
```

Información de entidad de ejemplo en la salida de GraphiQL:

<img
  title="dashboards_api_entity_section.png"
  alt="dashboards_api_entity_section.png"
  src="/images/apis-and-data_screenshot-full_NerdGraph-dashboard-entity.webp"
/>

## Importar un dashboard a una nueva cuenta [#import]

Utilice la siguiente mutación para importar el dashboard a otra cuenta:

```
mutation create($dashboard: DashboardInput!) {
  dashboardCreate(accountId: your_new_AccountID, dashboard: $dashboard) {
    entityResult {
      guid
      name
    }
    errors {
      description
    }
  }
}
```

Sigue estos pasos:

1. En la sección <DNT>**Query variables**</DNT> , nombre la entidad `dashboard` (ya que declaramos la variable de entrada como `$dashboard`).

2. Copie y pegue el [resultado de la entidad](#export) en la nueva cuenta. Se copiará como una entidad.

3. Cambie `entity` a `dashboard`.

   <img
     title="dashboards_api_paste_entity.png"
     alt="dashboards_api_paste_entity.png"
     src="/images/apis-and-data_screenshot-full_NerdGraph-dashboard-paste.webp"
   />
