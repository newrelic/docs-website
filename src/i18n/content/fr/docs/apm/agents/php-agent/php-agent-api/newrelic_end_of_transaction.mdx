---
title: newrelic_end_of_transaction (API d'agent PHP)
type: apiDoc
shortDescription: 'Arrêtez de chronométrer la transaction en cours, mais continuez à l''instrumenter.'
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to stop timing a transaction (but continue instrumenting it). Useful for streamed data.
freshnessValidatedDate: never
translationType: machine
---

## Syntaxe

```php
newrelic_end_of_transaction()
```

Arrêtez de chronométrer la transaction en cours, mais continuez à l&apos;instrumenter.

## Exigences

Compatible avec toutes les versions d&apos;agent.

## Description

Arrêtez immédiatement de chronométrer les transactions sur le Web. Utile lorsqu&apos;une page a terminé avec le code de l&apos;application et est sur le point de diffuser des données (téléchargement de fichiers, streaming audio ou vidéo, etc.) et que vous ne souhaitez pas que le temps de diffusion soit comptabilisé comme faisant partie des temps d&apos;exécution de la transaction. L&apos;agent envoie des données au daemon à la fin de la transaction.

Cela est particulièrement pertinent lorsque le temps nécessaire pour terminer l’opération est complètement en dehors des limites de votre application. Par exemple, un utilisateur disposant d&apos;une connexion très lente peut mettre beaucoup de temps à télécharger même de petits fichiers, et vous ne voudriez pas que ce temps de téléchargement fausse le temps de transaction réel.

<Callout variant="tip">
  Comparez [`newrelic_end_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_end_transaction), qui met fin complètement à l’instrumentation.
</Callout>

## Paramètres

Cet appel n&apos;accepte aucun paramètre.

## Exemples

### Arrêter le timing après les données de streaming [#streaming example]

```php
function example() { 
    // computational logic
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_end_of_transaction(); // Used to stop recording the transaction after computing for the transaction is complete, typically when streaming data 
    }
    //streaming data
}
```