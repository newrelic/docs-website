---
title: "Tutoriel NerdGraph\_: Exporter le dashboard sous forme de fichiers"
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to understand how entities are related.
freshnessValidatedDate: never
translationType: machine
---

Avez-vous besoin de planifier des rapports contenant des graphiques ou des dashboards ? Souhaitez-vous automatiser la manière dont vous partagez votre dashboard ? Vous pouvez obtenir vos <InlinePopover type="dashboards" />sous forme de fichiers PDF ou PNG par programmation avec une mutation [GraphQL](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) . Vous pouvez également [exporter le dashboard sous forme de fichiers PDF à l&apos;aide de l&apos;UI](/docs/dashboards/manage-your-dashboard/manage-your-dashboard#dash-export).

Par exemple, vous pouvez générer [des versions statiques et instantanées](/docs/apis/nerdgraph/examples/nerdgraph-dashboards/#other-operations) de votre dashboard New Relic et les envoyer à [Slack](/docs/alerts-applied-intelligence/notifications/notification-integrations/#slack) ou [les télécharger sous forme de fichiers](/docs/apis/nerdgraph/examples/export-dashboards-pdfpng-using-api/).

## Exporter les pages dashboard [#dash-multiple]

1. Obtenir le dashboard du GUID : Cliquez <Icon name="fe-more-horizontal" /> sur le icône dashboard à côté du nom du pour accéder au mémo widget et voir le dashboard du GUID.

2. Obtenez les GUID des pages individuelles à l&apos;aide de la requête ci-dessous :

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

3. Exécutez la mutation <DNT>**dashboardCreateSnapshotURL**</DNT> dans l’ [explorateur NerdGraphQL](https://api.newrelic.com/graphiql) autant de fois que de pages dashboard que vous souhaitez exporter. Il vous suffit de fournir le de la dashboard page de souhaitée GUID en tant que paramètre.

4. Obtenez le lien pour récupérer votre page dashboard au format PDF. Le lien ressemble à :

   ```
   https://gorgon.nr-assets.net/image/e0c22263-2d88-40bc-940a-b885dbc1d98d?format=PDF&width=2000&height=2000
   ```

5. [Configurez](#configure) le fichier exporté, si nécessaire.

## Configurer le fichier que vous récupérez [#configure]

Modifiez le lien renvoyé pour changer le format de votre export (PDF ou PNG), ou le redimensionner.

Par exemple, si vous obtenez le lien :

```
https://gorgon.nr-assets.net/image/e0c22263-2d88-40bc-940a-b885dbc1d98d?format=PDF&width=2000&height=2000
```

Vous pourriez :

* Remplacez `PDF` par `PNG` pour obtenir une image.
* Modifiez les champs de largeur et de hauteur pour ajuster la taille à vos besoins. La valeur maximale est `2000`.

## Dépannage [#troubleshooting]

Voici ce qu&apos;il faut faire si vous rencontrez l&apos;une des erreurs suivantes lorsque vous essayez d&apos;exporter un dashboard:

* Depuis New Relic UI: <DNT>**We ran into an error while creating the PDF. Please try again**</DNT>

* Extrait de New Relic NerdGraph : <DNT>**Operation on dashboard entity failed with guid:YOUR\_GUID with cause: Error 504 calling Gorgon with url [https://chart-image.service.newrelic.com/dashboard-url-from-guid/YOUR\_GUID](https://chart-image.service.newrelic.com/dashboard-url-from-guid/YOUR_GUID): upstream request timeout**</DNT>

Ces erreurs peuvent être provoquées si la génération du PDF dépasse le temps de réponse maximal de l&apos;API. Si vous rencontrez ces erreurs, vérifiez si l&apos;un des widgets de votre dashboard dispose d&apos;une grande fenêtre temporelle. Par exemple, vous pouvez comparer les données d’un mois entier avec celles des mois précédents. Si vous voyez une grande fenêtre temporelle, essayez de la réduire.

Une autre cause possible de ces erreurs est que votre dashboard peut avoir un grand nombre de widgets. Si vous avez un widget que vous n&apos;utilisez pas, vous pouvez essayer d&apos;en supprimer certains pour voir si cela résout l&apos;erreur.