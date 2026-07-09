---
title: Charge mémoire élevée sur les tâches PHP de longue durée
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Using the PHP Agent with an application that has long running tasks can cause high memory usage.
freshnessValidatedDate: never
translationType: machine
---

## Problème

L&apos;utilisation de l&apos;agent PHP avec une application comportant des tâches longues entraîne une utilisation élevée de la mémoire.

## Solution

Pour prendre en charge le tracing distribué, l&apos; agent PHP doit conserver une quantité importante de données d&apos;appel de fonction au moment de l&apos;exécution afin que les étendues puissent être échantillonnées aussi précisément que possible. Pour les transactions Web et les transactions d&apos;arrière-plan plus courtes, cela est généralement imperceptible, à la fois en termes de surcharge CPU et mémoire. Cependant, pour les transactions d&apos;arrière-plan plus longues, l&apos;augmentation de la charge de mémoire peut devenir perceptible, au point même d&apos;entraîner une condition de manque de mémoire.

Si la transaction concernée est une transaction qui exécute une série de processus répétitifs, comme un fichier d&apos;attente de messages consommateur ou une boucle avec plusieurs appels externes, vous souhaiterez peut-être instrumenter manuellement chaque itération comme une transaction distincte. En faisant cela, la mémoire utilisée sera libérée après chaque transaction.

Le démarrage et l’arrêt manuel des transactions présentent les avantages suivants :

* Permet à toutes les fonctionnalités agent PHP de rester activées.
* Fournit des données plus précises sur le fonctionnement du processus.

Pour implémenter cela, ignorez d’abord la transaction automatique initiale avec [`newrelic_end_transaction()`](/docs/apm/agents/php-agent/php-agent-api/newrelic_end_transaction/), puis utilisez [`newrelic_start_transaction()`](/docs/apm/agents/php-agent/php-agent-api/newrelic_start_transaction/) et [`newrelic_end_transaction()`](/docs/apm/agents/php-agent/php-agent-api/newrelic_end_transaction/) pour instrumenter chaque transaction à tour de rôle.

L’exemple de code suivant montre comment procéder. Dans le code réel, vous remplaceriez la structure `while()` par une instruction de boucle PHP appropriée et inséreriez la logique de la fonction à la place des points de suspension.

```php
function example_long_task() {
    // Ensure PHP agent is available and
    // stop recording the current transaction
    if (extension_loaded('newrelic')) { 
        newrelic_end_transaction(); 
    }

    // replace next while statement with actual loop
    while (<condition>) {
        if (extension_loaded('newrelic')) { 
            // start recording a new transaction
            newrelic_start_transaction(ini_get("newrelic.appname")); transaction
        }

        // your function logic starts
        ...
        ...
        // your function logic stops

        // end transaction for current loop
        if (extension_loaded('newrelic')) { 
            newrelic_end_transaction(); 
        }
    }
}
```