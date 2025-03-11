---
title: 'Nerdgraph: crear y administrar el panel'
tags:
  - Dashboards
  - Dashboards API
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar [nuestra API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) para crear y administrar <InlinePopover type="dashboards"/>.

## Descripción general [#starting-out]

Para obtener una introducción a nuestra característica personalizada del tablero, consulte [los documentos del tablero](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Al usar NerdGraph para configurar el panel, es útil comprender que nuestro panel se considera [entidad](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic), que tiene sus propios ID de entidad, similar a otras cosas que consideramos entidad, como aplicaciones de monitoreo, hosts y servicios.

Para saber cómo agregar y configurar widgets y gráficos en un dashboard, consulte [Configurar gráficos y otros widgets](/docs/apis/nerdgraph/examples/create-widgets-dashboards-api).

## Operaciones [#operations]

Hemos definido una API GraphQL granular que le permite ejecutar diferentes operaciones dashboard según su objetivo y alcance.

### Operaciones CRUD dashboard [#crud-operations]

Aquí se muestran operaciones relacionadas con la creación, lectura, actualización y eliminación (CRUD).

| Operación                 | Tipo de operación GraphQL | Notas                                                                                                                                                                                                                                          |
| ------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actor > entity()`        | consulta                  | Obtener el funcionamiento dashboard . Puede obtener todos los datos dashboard y del widget para un GUID de entidad dashboard determinado.                                                                                                      |
| `dashboardCreate()`       | mutación                  | Crear operación dashboard . Puede crear un dashboard adjunto a una cuenta específica especificando todos sus elementos, desde los metadatos hasta la configuración del widget.                                                                 |
| `dashboardUpdate()`       | mutación                  | Actualizar el funcionamiento dashboard . Puede actualizar un dashboard existente con un GUID de entidad dashboard . Debe especificar los elementos completos y actualizados dashboard , desde los metadatos hasta la configuración del widget. |
| `dashboardDelete()`       | mutación                  | Eliminar operación dashboard . Puede eliminar un dashboard existente dado un GUID de entidad dashboard . Esta operación ejecuta una eliminación lógica que le permite recuperar su dashboard.                                                  |
| `dashboardUndelete()`     | mutación                  | Recuperar la operación dashboard . Puede recuperar un dashboard previamente eliminado con un GUID de entidad dashboard . La etiqueta personalizada no se puede recuperar.                                                                      |

### Operaciones de la página dashboard [#page-operations]

| Operación                        | Tipo de operación GraphQL | Notas                                                                                                                                                                                                                                                                                      |
| -------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dashboardUpdatePage()`          | mutación                  | Actualizar el funcionamiento de la página dashboard . Puede actualizar una página de un dashboard existente dado un GUID de entidad de página dashboard . Debe especificar el elemento de página completo y actualizado dashboard , desde los metadatos hasta la configuración del widget. |
| `dashboardUpdateWidgetsInPage()` | mutación                  | Actualizar el funcionamiento del widget. Puede actualizar un conjunto de widgets existentes de una página dashboard dado un GUID de entidad de página dashboard . Debe especificar el conjunto de widgets que se actualizarán y su configuración completa.                                 |
| `dashboardAddWidgetsToPage()`    | mutación                  | Agregar operación de widget. Puede agregar un conjunto de nuevos widgets a una página dashboard dado un GUID de entidad de página dashboard . Debe especificar el conjunto de nuevos widgets y su configuración completa.                                                                  |

### Otras operaciones [#other-operations]

| Operación                        | Tipo de operación GraphQL | Notas                                                                                                                                                                                                                                                        |
| -------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dashboardCreateSnapshotUrl()`   | mutación                  | Crear operación de instantánea de la página dashboard . Puede crear una URL pública para un GUID de entidad de página dashboard determinado. Luego se puede acceder a la página dashboard en forma de una instantánea estática en la URL pública resultante. |
| `actor > dashboard > liveUrls()` | consulta                  | Enumere todas las operaciones de URL activas. Puede obtener la lista completa de URL activas a las que tiene acceso. Una URL activa es un mecanismo que le permite compartir páginas dashboard y widgets públicamente con datos actualizados o en vivo.      |
| `dashboardWidgetRevokeLiveUrl()` | mutación                  | Revocar la operación de URL activa del widget. Puede revocar una URL activa creada previamente de un widget. Como resultado, la URL activa dejará de estar disponible para el público.                                                                       |

## Panel de control entre cuentas [#cross-account]

Con NerdGraph, puedes [crear consultas de datos desde más de una cuenta New Relic](/docs/apis/nerdgraph/examples/nerdgraph-nrql-tutorial#cross-account-query). También puede crear un dashboard utilizando datos de varias cuentas agregando ID de cuenta a la matriz `accountIds`.

A continuación se muestra un ejemplo de creación de un dashboard entre cuentas:

<CollapserGroup>
  <Collapser
    id="cross-account-dashboard"
    title="Dashboard con consulta entre cuentas"
  >
    ```graphql
    mutation {
      dashboardCreate(
        accountId: 1
        dashboard: {
          name: "Cross account queries - NerdGraph API - Cross Account Test1"
          description: null
          permissions: PUBLIC_READ_WRITE
          pages: [
            {
              name: "Page 1"
              description: null
              widgets: [
                {
                  visualization: { id: "viz.billboard" }
                  layout: { column: 1, row: 1, height: 3, width: 4 }
                  title: "Cross Account Total Transaction Count"
                  rawConfiguration: {
                    legend: { enabled: true }
                    nrqlQueries: [
                      {
                        <var>accountIds: [1, 1606862, 2212585]</var>
                        query: "SELECT count(*) FROM Transaction"
                      }
                    ]
                    yAxisLeft: { zero: true }
                  }
                  linkedEntityGuids: null
                }
                {
                  visualization: { id: "viz.pie" }
                  layout: { column: 5, row: 1, height: 3, width: 4 }
                  title: "Cross Account Pie"
                  rawConfiguration: {
                    legend: { enabled: true }
                    nrqlQueries: [
                      {
                        <var>accountIds: [1, 1606862, 2212585]</var>
                        query: "SELECT count(*) FROM Transaction FACET accountId()"
                      }
                    ]
                    yAxisLeft: { zero: true }
                  }
                  linkedEntityGuids: null
                }
                {
                  visualization: { id: "viz.line" }
                  layout: { column: 9, row: 1, height: 3, width: 4 }
                  title: "Cross Account Line"
                  rawConfiguration: {
                    legend: { enabled: true }
                    nrqlQueries: [
                      {
                        <var>accountIds: [1, 1606862, 2212585]</var>
                        query: "SELECT count(*) FROM Transaction FACET accountId() TIMESERIES"
                      }
                    ]
                    yAxisLeft: { zero: true }
                  }
                  linkedEntityGuids: null
                }
              ]
            }
          ]
        }
      ) {
        errors {
          description
          type
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Límites [#limits]

Hemos limitado los valores que puede establecer para algunas de las propiedades dashboard . Esto nos permite mantener el panel en buen estado y al mismo tiempo mejorar su usabilidad.

### Límites dashboard [#dashboard-limits]

| Límite                                       | Valor |
| -------------------------------------------- | ----- |
| Número máximo de páginas en un dashboard     | 25    |
| Longitud máxima del nombre de un dashboard   | 255   |
| Longitud máxima de una descripción dashboard | 1024  |

### Límites de la página dashboard [#page-limits]

| Límite                                                    | Valor |
| --------------------------------------------------------- | ----- |
| Número máximo de widgets en una página dashboard          | 150   |
| Longitud máxima del nombre de una página dashboard        | 255   |
| Longitud máxima de la descripción de una página dashboard | 1024  |

### Límites widget [#widget-limits]

| Límite                                            | Valor |
| ------------------------------------------------- | ----- |
| Longitud máxima del título de un widget           | 255   |
| Número máximo de entidades vinculadas a un widget | 1     |
| Número máximo de consultas en un widget           | 20    |
| Columna de diseño máxima de un widget             | 12    |
| Columna de diseño mínimo de un widget             | 1     |
| Fila de diseño mínima de un widget                | 1     |
| Ancho máximo de diseño de un widget               | 12    |
| Ancho mínimo de diseño de un widget               | 1     |
| Altura máxima de diseño de un widget              | 32    |
| Altura mínima de diseño de un widget              | 1     |

## Errores como ciudadanos de primera [#errors-first-class]

Todas las mutaciones dashboard ofrecen una forma de solicitar errores al ejecutarse. Esto significa que puede realizar mutaciones dashboard y verificar la respuesta para detectar problemas potenciales esperados. Cada error tiene un tipo y una descripción para ayudarle a identificar cuál es el origen del problema.

<CollapserGroup>
  <Collapser
    id="errors-first-class"
    title="Errores como parte de cada respuesta a una mutación."
  >
    ```
    mutation {
        dashboardMutation(guid: "<var>MY_EXISTING_DASHBOARD_GUID</var>") {
          mutationResult {
            result
          }
          errors {
            description
            type
          }
        }
      }
    ```
  </Collapser>
</CollapserGroup>

Tenga en cuenta que se trata de errores esperados de los que conocemos de antemano. También debe verificar si hay errores inesperados que se devolverán en el [campo de errores estándar de GraphQL](https://graphql.org/learn/serving-over-http/#response).
