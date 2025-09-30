---
title: 'Coletando dados, mas nenhuma entidade visível'
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'You''re collecting metrics from an SNMP device, but no entity is being created in New Relic.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Você tem um novo tipo de dispositivo que possui um perfil, mas nenhuma entidade foi adicionada à [lista de entidades](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find).

Isso acontece quando um dispositivo tem um [perfil SNMP](https://github.com/kentik/snmp-profiles) informando `ktranslate` qual métrica coletar, mas uma nova [definição de entidade](https://github.com/newrelic/entity-definitions) ainda está em andamento sobre como exibir essa coleção de métrica no New Relic.

## Solução [#solution]

Ao criar um novo tipo de entidade, devemos revisar os dados provenientes do perfil. Esses dados são usados para criar uma definição que inclui informações como as métricas clássicas para este tipo de entidade, e usados para criar um dashboard. Isso pode levar algum tempo e às vezes requer conversar com o usuário que enviou a solicitação de perfil para garantir que a definição da entidade atenda às suas necessidades.

Assim que a definição da entidade for concluída, a nova entidade aparecerá automaticamente na sua conta e incluirá todos os dados coletados anteriormente para aquele dispositivo.

A maneira mais simples de verificar esta parte do processo é realizar uma consulta NRQL semelhante a:

```sql
SELECT latest(instrumentation.name) as Profile, latest(provider), latest(entity.type) as EntityType FROM Metric WHERE instrumentation.name not in ('heartbeat','ktranslate') AND device_name = 'myDevice'
```

Você verá qual perfil SNMP está associado ao seu dispositivo, pois em cada perfil definimos um provedor que é o atributo utilizado pela síntese da entidade. O `entity.type` ficará em branco até que uma definição seja concluída e será preenchido imediatamente após a definição ser ativada.
