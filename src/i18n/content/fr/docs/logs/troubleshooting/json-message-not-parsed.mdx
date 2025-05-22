---
title: Le message JSON n'est pas analysé
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: Troubleshooting tips if the JSON message for your log isn't being parsed in New Relic.
freshnessValidatedDate: never
translationType: machine
---

## Problème

Lorsque le contenu JSON est envoyé dans le champ de message du log, il n&apos;est pas automatiquement analysé et n&apos;est pas stocké sous forme de paires d&apos;attributs (valeur clé). Au lieu de cela, le contenu reste dans le message. Il peut également être tronqué si le message dépasse la [limite de caractères](/docs/logs/troubleshooting/log-message-truncated/).

## Solution

Raisons pour lesquelles cela peut se produire :

* Si le contenu n&apos;est pas un JSON valide, il ne sera pas analysé. Au lieu de cela, il sera stocké sous forme de chaîne et tronqué s&apos;il dépasse la limite de caractères.
* Si le contenu est un JSON valide, il a peut-être été « stringifié » avec des caractères d&apos;échappement. Si tel est le cas, il sera d’abord évalué comme une chaîne, ce qui signifie qu’il sera tronqué à 4 096 caractères avant d’être évalué comme JSON. Le résultat de la troncature sera un JSON non valide et les données seront stockées sous forme de chaîne.

Pour résoudre ce problème, envoyez des messages contenant du JSON qui n’ont pas été convertis en chaîne. Ce contenu sera analysé même si la longueur totale dépasse la limite de caractères. Si le JSON contient un éventail, ils seront aplatis et stockés sous forme de chaînes non analysées.