---
title: Misma IP para múltiples entidades
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'You see multiple entities in the entity explorer with the same IP, but different names.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Verá varias entidades en la [UI del explorador de entidades](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find) con la misma IP, pero con nombres diferentes.

Esto puede suceder cuando se ha cambiado el nombre del dispositivo que utiliza esa IP o la IP se ha movido a un dispositivo diferente. Su archivo `ktranslate snmp-base.yaml` tendrá entradas para cada combinación de `device_name__ip` que haya descubierto. Esto es común cuando se utiliza una IP para redundancia, como con HSRP, pila de conmutadores o conmutación por error primaria/secundaria.

Cuando se ejecuta un trabajo de descubrimiento, cada vez que descubre una IP, intenta determinar el `device_name` conectado a la dirección IP. Si aún no hay una entrada en la lista de dispositivos que coincida con esa combinación específica de `device_name__ip` , agregará una nueva entrada con un `device_name` codificado. No sobrescribe ni elimina automáticamente las entradas anteriores que utilizaron esa IP.

Cuando `ktranslate` realiza su sondeo, solo usa la IP cuando se ejecuta, por lo que si su lista de dispositivos contiene varias entradas con la misma dirección IP, recopilará y enviará métrica a New Relic como si fueran entidades separadas, pero en realidad Son los mismos datos que provienen de cualquier dispositivo que respondió a las solicitudes de IP en el intervalo de sondeo actual. El `device_name` no se recopila ni actualiza como parte del ciclo de sondeo.

## Solución [#solution]

Si el `device_name` ha cambiado debido a un cambio único, como reemplazar una pieza de hardware o actualizar sus convenciones de nomenclatura, entonces debe editar el `snmb-base.yaml` y eliminar la entrada con el nombre del dispositivo anterior. La entidad antigua seguirá apareciendo en el menú <DNT>**Explorer**</DNT> pero dejará de tener nuevos datos asociados y eventualmente desaparecerá del sistema. En la mayoría de los casos, esto sucederá 8 días después de que dejen de llegar datos.

Cualquier IP que forme parte de un grupo de redundancia o que se mueva entre diferentes dispositivos debe agregarse a [ignore_list](/docs/network-performance-monitoring/advanced/advanced-config/#discovery) en snmp-base.yaml. Estos dispositivos deben monitorearse individualmente con una dirección IP única que se conectará de manera confiable a un dispositivo específico.

Si desea confirmar que la IP virtual está activa, puede agregarla manualmente como un dispositivo [solo ping](/docs/network-performance-monitoring/advanced/advanced-config/#response_time-attribute) .
