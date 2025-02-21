---
title: Exemples d'attributs .NET
tags:
  - Agents
  - NET agent
  - Attributes
metaDescription: Examples of using attributes with the New Relic .NET agent.
freshnessValidatedDate: never
translationType: machine
---

Voici quelques exemples d’utilisation d’attributs avec l’agent .NET de New Relic.

## Désactiver tous les attributs [#example1]

Dans cet exemple, les attributs sont désactivés. Les listes `include` et `exclude` seront ignorées et tous les attributs seront filtrés.

<DNT>
  **Configuration:**
</DNT>

```xml
<attributes enabled="false" />
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

```yml
transaction_tracer: none
error_collector: none
transaction_events: none
browser_monitoring: none
```

## Sélectionnez des destinations spécifiques [#example2]

Dans cet exemple :

* les attributs sont désactivés pour le suivi de la transaction. Les listes `include` et `exclude` seront ignorées et tous les attributs seront filtrés pour cette destination.
* les attributs sont désactivés pour <InlinePopover type="browser" />par défaut.
* Les paramètres de demande (préfixés par `request.parameters.`) sont désactivés par défaut pour toutes les destinations.

Par conséquent, seul `bar` est envoyé dans les erreurs de trace et les événements de transaction.

<DNT>
  **Configuration:**
</DNT>

```xml
<attributes enabled="true">
  <exclude>foo</exclude>
</attributes>
<transactionTracer>
  <attributes enabled="false" />
</transactionTracer>
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

```yml
transaction_tracer: none
error_collector: bar
transaction_events: bar
browser_monitoring: none
```

## Sélectionner les valeurs et les destinations [#example3]

Dans cet exemple, des clés d’entrée spécifiques sont sélectionnées pour certaines destinations de sortie et exclues d’autres.

* La clé `food.fruit.banana` sera exclue uniquement de la trace de transaction.
* Les clés `food` et `food.bread` seront exclues de toutes les destinations.

<DNT>
  **Configuration:**
</DNT>

```xml
<attributes enabled="true">
  <exclude>food*</exclude>
  <include>food.fruit.*</include>
</attributes>
<transactionTracer>
  <attributes enabled="true">
    <exclude>food.fruit.banana</exclude>
  </attributes>
</transactionTracer>
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

```yml
transaction_tracer: food.fruit.apple
error_collector: food.fruit.banana, food.fruit.apple
transaction_events: food.fruit.banana, food.fruit.apple
browser_monitoring: food.fruit.banana, food.fruit.apple
```

## Émulation du comportement des attributs legacy côté serveur [#emulating]

Dans cet exemple, l&apos;agent collecte les paramètres de la demande et les enregistre dans les destinations du traceur de transaction et du collecteur d&apos;erreurs. Cela émule l&apos;activation des paramètres de configuration legacy [configuration serveur](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) pour les options `Capture attributes` ou `Capture parameters`. Personnalisez les [`<attributes>`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#agent-attributes) éléments suivants dans votre fichier de configuration d’agent .NET :

```xml
<transactionTracer>
  <attributes>
    <include>request.parameters*</include>
  </attributes>
</transactionTracer>

<errorCollector>
  <attributes>
    <include>request.parameters*</include>
  </attributes>
</errorCollector>
```