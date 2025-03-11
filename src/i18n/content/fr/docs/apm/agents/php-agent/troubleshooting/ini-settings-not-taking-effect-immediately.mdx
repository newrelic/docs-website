---
title: Les paramètres INI ne prennent pas effet immédiatement
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'If you change INI settings for your New Relic PHP agent, restart your web server to ensure the new settings take effect properly.'
freshnessValidatedDate: never
translationType: machine
---

## Problème

Les modifications apportées au fichier `newrelic.ini` ne prennent pas effet immédiatement.

## Solution

Redémarrez votre serveur Web (Apache, Nginx, PHP-FPM, etc.) après avoir apporté des modifications à vos paramètres INI.

## Cause

Lorsque votre serveur Web (Apache, Nginx, PHP-FPM, etc.) démarre pour la première fois et initialise PHP, il lit tous les paramètres INI. Il définit également les valeurs par défaut globales pour tous les paramètres manquants.

Apache crée ensuite un pool de processus « workers » pour traiter requests. Ces processus de travail héritent des paramètres définis lors de l’initialisation. Vous n’avez aucun moyen de savoir exactement quel processus de travail traitera une demande donnée. Lorsque vous apportez des modifications au fichier INI, il peut encore rester des centaines de processus de travail avec les anciens paramètres, et le processus Apache principal lui-même (qui tuera périodiquement les processus de travail existants et en générera de nouveaux) possède également les paramètres INI d&apos;origine.

Tant que vous n’aurez pas redémarré votre serveur Apache, la plupart des modifications apportées à vos fichiers INI resteront inaperçues. La seule exception est si vous utilisez le mécanisme de configuration « par répertoire » de PHP en utilisant des fichiers `.htaccess` . De tels paramètres sont rares.