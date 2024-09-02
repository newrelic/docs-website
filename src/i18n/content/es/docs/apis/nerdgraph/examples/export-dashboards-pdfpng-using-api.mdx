---
title: 'Tutorial de NerdGraph: exportar el panel como archivos'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to understand how entities are related.
freshnessValidatedDate: never
translationType: machine
---

¿Necesita programar informes que contengan gráficos o paneles? ¿Quieres automatizar la forma en que compartes el panel? Puede obtener su <InlinePopover type="dashboards"/>como archivos PDF o PNG mediante programación con una mutación [GraphQL](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) . También puede [exportar paneles como archivos PDF mediante la UI](/docs/dashboards/manage-your-dashboard/manage-your-dashboard#dash-export).

Por ejemplo, puede generar [versiones instantáneas](/docs/apis/nerdgraph/examples/nerdgraph-dashboards/#other-operations) estáticas de su panel de New Relic y enviarlas a [Slack](/docs/alerts-applied-intelligence/notifications/notification-integrations/#slack) o [descargarlas como archivos](/docs/apis/nerdgraph/examples/export-dashboards-pdfpng-using-api/).

## Exportar páginas dashboard [#dash-multiple]

1. Obtenga el GUID del dashboard: haga clic en <Icon name="fe-more-horizontal"/> icono junto al nombre del dashboard para acceder al widget de metadatos y ver el GUID del dashboard.

2. Obtenga los GUID de las páginas individuales mediante la siguiente consulta:

   ```graphql
   {
    actor {
       entitySearch(query: "id ='YOUR_PAGE_GUID' OR parentId ='YOUR_PAGE_GUID' AND tags.isDashboardPage = 'true'" ) {
         results {
           entities {
             guid
             name
             ... on DashboardEntityOutline {
               guid
               name
               dashboardParentGuid
             }
           }
         }
       }
     }
   }
   ```

3. Ejecute la mutación <DNT>**dashboardCreateSnapshotURL**</DNT> en el [explorador NerdGraphQL](https://api.newrelic.com/graphiql) tantas veces como páginas dashboard desee exportar. Solo necesita proporcionar el GUID de la página dashboard deseado como parámetro.

4. Obtenga el enlace para recuperar la página dashboard como PDF. El enlace es similar a:

   ```
   https://gorgon.nr-assets.net/image/e0c22263-2d88-40bc-940a-b885dbc1d98d?format=PDF&width=2000&height=2000
   ```

5. [Configure](#configure) el archivo exportado, si es necesario.

## Configura el archivo que recuperas [#configure]

Edite el enlace devuelto para cambiar el formato de su exportación (PDF o PNG) o cambie su tamaño.

Por ejemplo, si obtiene el enlace:

```
https://gorgon.nr-assets.net/image/e0c22263-2d88-40bc-940a-b885dbc1d98d?format=PDF&width=2000&height=2000
```

Tú podrías:

* Sustituya `PDF` por `PNG` para obtener una imagen.
* Modifica los campos ancho y alto para ajustar el tamaño a tus necesidades. El valor máximo es `2000`.

## Resolución de problemas [#troubleshooting]

Esto es lo que debe hacer si experimenta alguno de los siguientes errores al intentar exportar un dashboard:

* Desde UI de New Relic: <DNT>**We ran into an error while creating the PDF. Please try again**</DNT>
* De New Relic NerdGraph: <DNT>**Operation on dashboard entity failed with guid:YOUR_GUID with cause: Error 504 calling Gorgon with url [https://chart-image.service.newrelic.com/dashboard-url-from-guid/YOUR_GUID](https://chart-image.service.newrelic.com/dashboard-url-from-guid/YOUR_GUID): upstream request timeout**</DNT>

Estos errores pueden ocurrir si la generación del PDF excede el tiempo de respuesta máximo de API. Si encuentra estos errores, verifique si alguno de los widgets en su dashboard tiene una ventana de tiempo grande. Por ejemplo, puede comparar datos de un mes completo con los de meses anteriores. Si ve una ventana de tiempo grande, intente disminuirla.

Otra posible causa de estos errores es que su dashboard puede tener una gran cantidad de widgets. Si tiene un widget que no utiliza, puede intentar eliminar alguno para ver si esto resuelve el error.
