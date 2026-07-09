---
title: Temps non instrumenté en trace
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Two known causes of uninstrumented time with detail=1 in transaction traces with New Relic's PHP agent.
freshnessValidatedDate: never
translationType: machine
---

## Problème

Vous voyez des blocs rouges de temps non instrumenté dans la trace de transaction avec `transaction_tracer.detail=1` défini.

## Cause

Il y a deux raisons pour lesquelles vous pouvez voir des blocs rouges de temps non instrumenté dans une trace de transaction.

La première raison est lorsque vous avez une fonction qui est appelée fréquemment et qui est très rapide (en dessous du seuil par défaut de 2 ms pour la liste des 100 premières).

La deuxième raison, et la plus courante, est lorsqu&apos;une fonction :

* Prend beaucoup de temps à exécuter
* Est écrit en C
* Il s&apos;agit soit d&apos;une fonction interne, soit d&apos;une fonction fournie par un module externe

Dans cette situation, les coupables les plus fréquents sont des fonctions qui envoient de gros blocs de données ou de gros fichiers à l&apos;utilisateur. Si l&apos;utilisateur dispose d&apos;une connexion lente, l&apos;envoi de petits fichiers (de petites images par exemple) peut prendre beaucoup de temps en raison d&apos;une simple latence du réseau. Étant donné qu&apos;aucune fonction interne ou d&apos;extension C n&apos;est instrumentée, l&apos;agent PHP n&apos;a personne sur qui « blâmer » le temps passé, et cela apparaît dans une trace de transaction comme du temps non instrumenté.