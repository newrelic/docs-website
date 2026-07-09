---
title: Gestion des versions de conteneur KTranslate
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: How to run a specific version of the container.
freshnessValidatedDate: never
translationType: machine
---

## Problème [#problem]

Les commandes Docker par défaut fournies par l&apos;installation guidée vous mettront à jour vers la dernière sortie à chaque démarrage. Il existe une variété de scénarios dans lesquels vous souhaiterez peut-être exécuter une sortie plus ancienne ou épingler votre environnement sur une version spécifique.

## Solution [#solution]

Vous pouvez trouver une ancienne version du conteneur sur [Docker Hub](https://hub.docker.com/r/kentik/ktranslate/tags).

La même image de conteneur peut être disponible sous plusieurs tags. Par exemple, la dernière version stable est disponible à partir des balises `v2` et `latest` .

Pour contrôler la sortie que vous exécutez, prenez l&apos;exemple `docker run` suivant :

```shell
docker run -d --name ktranslate-SNMP --restart unless-stopped --pull=always -p 162:1620/udp \
-v `pwd`/snmp-base.yaml:/snmp-base.yaml \
-e NEW_RELIC_API_KEY=$YOUR_LICENSE_KEY \
kentik/ktranslate:v2 \
  -snmp /snmp-base.yaml \
  -nr_account_id=$YOUR_ACCOUNT_ID \
  -metrics=jchf \
  -tee_logs=true \
  -service_name=SNMP \
  -snmp_discovery_on_start=true \
  -snmp_discovery_min=180 \
  nr1.snmp
```

Supprimez `--pull=always` et remplacez la tag conteneur de `v2` par la tag de sortie que vous souhaitez utiliser. Cela donnera :

```shell
docker run -d --name ktranslate-SNMP --restart unless-stopped -p 162:1620/udp \
-v `pwd`/snmp-base.yaml:/snmp-base.yaml \
-e NEW_RELIC_API_KEY=$YOUR_LICENSE_KEY \
kentik/ktranslate:kt-2023-02-28-4294815650 \
  -snmp /snmp-base.yaml \
  -nr_account_id=$YOUR_ACCOUNT_ID \
  -metrics=jchf \
  -tee_logs=true \
  -service_name=SNMP \
  -snmp_discovery_on_start=true \
  -snmp_discovery_min=180 \
  nr1.snmp
```