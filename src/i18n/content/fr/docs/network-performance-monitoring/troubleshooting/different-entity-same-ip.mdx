---
title: Même IP pour plusieurs entités
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'You see multiple entities in the entity explorer with the same IP, but different names.'
freshnessValidatedDate: never
translationType: machine
---

## Problème [#problem]

Vous voyez plusieurs entités dans l&apos;[interface utilisateur de l&apos;explorateur d&apos;entités](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find) avec la même IP, mais des noms différents.

Cela peut se produire lorsque l&apos;appareil utilisant cette IP a été renommé ou que l&apos;IP a été déplacée vers un autre appareil. Votre fichier `ktranslate snmp-base.yaml` contiendra des entrées pour chaque combinaison de `device_name__ip` qu&amp;apos;il a déjà découverte. Cela est courant lorsqu&amp;apos;une adresse IP est utilisée pour la redondance comme avec HSRP, la pile de commutateurs ou les basculements primaires/secondaires.

Lorsqu&apos;une tâche de découverte s&apos;exécute, chaque fois qu&apos;elle découvre une adresse IP, elle essaie de déterminer le `device_name` connecté à l&amp;apos;adresse IP. S&amp;apos;il n&amp;apos;existe pas déjà d&amp;apos;entrée dans la liste des périphériques correspondant à cette combinaison spécifique de `device_name__ip` , une nouvelle entrée avec un `device_name` codé en dur sera ajoutée. Il n&amp;apos;écrase pas ou ne supprime pas automatiquement les entrées précédentes qui ont utilisé cette adresse IP.

Lorsque `ktranslate` effectue son interrogation, il utilise uniquement l&amp;apos;IP lorsqu&amp;apos;il s&amp;apos;exécute. Ainsi, si votre liste d&amp;apos;appareils contient plusieurs entrées avec la même adresse IP, il collectera et enverra des métriques à New Relic comme s&amp;apos;il s&amp;apos;agissait d&amp;apos;entités distinctes, mais en réalité, il s&amp;apos;agit simplement des mêmes données provenant de l&amp;apos;appareil ayant répondu aux requests IP à l&amp;apos;intervalle d&amp;apos;interrogation actuel. Le `device_name` n’est pas collecté ni mis à jour dans le cadre du cycle d’interrogation.

## Solution [#solution]

Si le `device_name` a changé en raison d&amp;apos;un changement ponctuel, comme le remplacement d&amp;apos;un élément matériel ou la mise à jour de vos conventions de dénomination, vous devez alors modifier le `snmb-base.yaml` et supprimer l&amp;apos;entrée avec l&amp;apos;ancien nom de périphérique. L&amp;apos;ancienne entité apparaîtra toujours dans le menu <DNT>**Explorer**</DNT> mais n&amp;apos;aura plus de nouvelles données associées et finira par disparaître du système. Dans la plupart des cas, cela se produit 8 jours après l’arrêt de la réception des données.

Toute adresse IP faisant partie d&apos;un groupe de redondance ou qui sera déplacée entre différents périphériques doit être ajoutée à la [liste ignore\_list](/docs/network-performance-monitoring/advanced/advanced-config/#discovery) dans le fichier snmp-base.yaml. Ces appareils doivent être monitorés individuellement avec une adresse IP unique qui se connectera de manière fiable à un appareil spécifique.

Si vous souhaitez confirmer que l&apos;adresse IP virtuelle est active, vous pouvez l&apos;ajouter manuellement en tant que périphérique [ping\_only](/docs/network-performance-monitoring/advanced/advanced-config/#response_time-attribute) .