---
title: exemples d'attributs
tags:
  - Agents
  - PHP agent
  - Attributes
metaDescription: Examples of using attributes for the New Relic PHP agent.
freshnessValidatedDate: never
translationType: machine
---

Voici quelques exemples d&apos;utilisation d&apos;attribut avec l&apos;agent PHP New Relic. Pour utiliser ces paramètres :

1. Modifiez votre fichier `newrelic.ini` selon le cas.
2. Redémarrez l&apos;agent et son daemon pour que les modifications prennent effet.

## Paramètre de demande de capture [#ex\_req\_params][#ex_req_params]

Par défaut, l&apos; agent ne capture pas les paramètres de la demande.

Vous pouvez utiliser la configuration suivante pour activer la capture de paramètres pour ces destinations par défaut : `transaction_tracer`, `transaction_events` et `error_collector`. Si vous souhaitez limiter les destinations pour lesquelles vous capturez des paramètres, voir [Sélection de destinations spécifiques](#example2).

<DNT>
  **Configuration:**
</DNT>

```ini
newrelic.attributes.include = request.parameters.*
```

## Capturer uniquement les paramètres de requête spécifiques [#ex\_req\_params\_exclude][#ex_req_params_exclude]

Pour capturer uniquement un paramètre de requête spécifique, vous pouvez transmettre une liste à `attributes.include`:

<DNT>**Configuration**</DNT>:

```ini
newrelic.attributes.include = request.parameters.user_id request.parameters.product_id
```

## Désactiver tous les attributs [#example1]

Dans cet exemple, les attributs sont désactivés, donc les listes d&apos;inclusion et d&apos;exclusion seront ignorées et tous les attributs seront filtrés.

<DNT>
  **Configuration:**
</DNT>

```ini
newrelic.attributes.enabled = false
newrelic.attributes.include = request.parameters.*
```

<DNT>
  **Input keys:**
</DNT>

```
foo, bar, request.parameters.foo, request.parameters.bar
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: none
error_collector: none
transaction_events: none
browser_monitoring: none
```

## Sélection de destinations spécifiques [#example2]

Dans cet exemple :

* les attributs sont désactivés pour le suivi de la transaction. Les listes d&apos;inclusion et d&apos;exclusion seront ignorées et tous les attributs seront filtrés pour cette destination.
* les attributs sont également désactivés pour <InlinePopover type="browser" />par défaut.
* Les paramètres de demande (préfixés par `request.parameters.`) sont désactivés par défaut pour toutes les destinations.

Par conséquent, seul `bar` est envoyé dans les erreurs de trace et les événements de transaction.

<DNT>
  **Configuration:**
</DNT>

```ini
newrelic.attributes.enabled = true
newrelic.transaction_tracer.attributes.enabled = false
newrelic.attributes.exclude = foo
```

<DNT>
  **Input keys:**
</DNT>

```
foo, bar, request.parameters.foo, request.parameters.bar
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: none
error_collector: bar
transaction_events: bar
browser_monitoring: none
```

## Sélection des valeurs et des destinations [#example3]

Dans cet exemple, des clés d’entrée spécifiques sont sélectionnées pour certaines destinations de sortie et exclues d’autres.

* La clé `food.fruit.banana` sera exclue uniquement de la trace de transaction.
* Les clés `food` et `food.bread` seront exclues de toutes les destinations.

<DNT>
  **Configuration:**
</DNT>

```ini
newrelic.browser_monitoring.attributes.enabled = true
newrelic.attributes.exclude = food*
newrelic.attributes.include = food.fruit.*
newrelic.transaction_tracer.attributes.exclude = food.fruit.banana
```

<DNT>
  **Input keys:**
</DNT>

```
food, food.bread, food.fruit.banana, food.fruit.apple
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: food.fruit.apple
error_collector: food.fruit.banana, food.fruit.apple
transaction_events: food.fruit.banana, food.fruit.apple
browser_monitoring: food.fruit.banana, food.fruit.apple
```