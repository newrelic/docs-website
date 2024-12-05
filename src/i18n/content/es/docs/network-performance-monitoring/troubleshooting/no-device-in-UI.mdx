---
title: Recopilando datos pero ninguna entidad visible
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'You''re collecting metrics from an SNMP device, but no entity is being created in New Relic.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Tienes un nuevo tipo de dispositivo que tiene un perfil pero no se ha agregado ninguna entidad en la [lista de entidades](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find).

Esto sucede cuando un dispositivo tiene un [perfil SNMP](https://github.com/kentik/snmp-profiles) que le indica a `ktranslate` qué métrica recopilar, pero aún está en progreso una nueva [definición de entidad](https://github.com/newrelic/entity-definitions) sobre cómo mostrar esa colección de métricas en New Relic.

## Solución [#solution]

Al crear un nuevo tipo de entidad, debemos revisar los datos que ingresan del perfil. Esos datos se utilizan para crear una definición que incluye información como las métricas doradas para este tipo de entidad, y se utilizan para crear un dashboard. Esto puede llevar algún tiempo y, a veces, requiere hablar con el usuario que envió la solicitud de perfil para asegurarse de que la definición de entidad se ajuste a sus necesidades.

Una vez que se complete la definición de la entidad, la nueva entidad aparecerá automáticamente en su cuenta e incluirá todos los datos recopilados previamente para ese dispositivo.

La forma más sencilla de comprobar esta parte del proceso es realizar una consulta NRQL similar a:

```sql
SELECT latest(instrumentation.name) as Profile, latest(provider), latest(entity.type) as EntityType FROM Metric WHERE instrumentation.name not in ('heartbeat','ktranslate') AND device_name = 'myDevice'
```

Verás qué perfil SNMP está asociado a tu dispositivo, ya que en cada perfil definimos un proveedor que es el atributo que utiliza Syntesis. El `entity.type` estará en blanco hasta que se complete una definición y se completará inmediatamente después de que esa definición entre en funcionamiento.
