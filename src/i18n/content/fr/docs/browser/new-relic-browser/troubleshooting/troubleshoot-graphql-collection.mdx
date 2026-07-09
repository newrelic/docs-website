---
title: Les métadonnées GraphQL ne sont pas trouvées sur AjaxRequests
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing GraphQL metadata on AjaxRequest events for your browser app.
freshnessValidatedDate: '2023-10-19T00:00:00.000Z'
translationType: machine
---

## Problème

Vous voyez l&apos;événement AjaxRequest, mais ils ne contiennent pas les propriétés GraphQL métadonnées suivantes pour votre application de navigateur.

* [Framework opérationnel](/attribute-dictionary/?event=AjaxRequest&attribute=operationFramework)
* [Nom de l&apos;opération](/attribute-dictionary/?event=AjaxRequest&attribute=operationName)
* [Type d&apos;opération](/attribute-dictionary/?event=AjaxRequest&attribute=operationType)

## Cause

L&apos;agent du navigateur analyse chaque corps de requête et requête AJAX et tente d&apos;identifier les modèles GraphQL courants. Lors de la détection de ces modèles, il ajoutera des propriétés de métadonnées supplémentaires à l&apos;événement AjaxRequest sortant en cours de récolte. Si l’agent ne parvient pas à détecter ces modèles, il n’ajoutera pas les propriétés d’événement supplémentaires.

## Solution

Si votre application est [équipée de la dernière version de monitoring des navigateurs](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation) et collecte des données pour toutes [les fonctionnalités Pro](/docs/browser/new-relic-browser/browser-pro-features), assurez-vous que vos requests AJAX sont envoyées en utilisant le formatage GraphQL standard.

Pour vérifier le format de votre requête AJAX, utilisez la console de développement de votre navigateur pour afficher les requests et les comparer à la syntaxe ci-dessous.

<CollapserGroup>
  <Collapser id="post" title="Requêtes POST GraphQL">
    Pour les requêtes POST GraphQL, les mutations et les abonnements, l&apos;agent du navigateur analyse le corps de la requête pour les données formatées comme suit :

    ```js
    {
        "query": ...,
        "operationName": ...,
        "variables": ... 
      }
    ```
  </Collapser>

  <Collapser id="get" title="GraphQL Requête GET">
    Pour la requête GET GraphQL, l&apos;agent du navigateur analyse les paramètres de requête pour les données formatées comme suit :

    ```js
    ?query=...&operationName=...&variables=...
    ```
  </Collapser>

  <Collapser id="batch" title="Requêtes POST par lots GraphQL">
    Pour les opérations GraphQL par lots, l&apos;agent du navigateur analyse le corps de la requête pour les données formatées comme suit :

    ```js
    [
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        ...etc
      ]
    ```
  </Collapser>
</CollapserGroup>

Consultez [la documentation de GraphQL](https://graphql.org/learn/serving-over-http/#post-request) pour une description détaillée de ces normes.

L&apos;agent utilise le contenu de cette charge utile pour détecter les modèles GraphQL et créer les propriétés des métadonnées. Tout corps de requête ou requête manquant la section `query` ne sera pas du tout traité comme des données GraphQL.

Si vous constatez que votre charge GraphQL ne suit pas ce modèle, l&apos;agent ne pourra pas détecter de manière fiable le fichier GraphQL mémorisé.

Si l&apos;une de ces étapes de dépannage échoue ou si vous rencontrez toujours des problèmes avec les propriétés de données AJAX manquantes, obtenez de l&apos;aide sur [support.newrelic.com](https://support.newrelic.com).