---
title: El descubrimiento de SNMP se asigna a un perfil inesperado
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: SNMP monitoring discovery maps your device to an unexpected profile.
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Después de ejecutar un descubrimiento SNMP, su dispositivo se asigna a un perfil inesperado en la clave `mib_profile` de la configuración del dispositivo.

## Fondo [#background]

El proceso de descubrimiento SNMP intentará asignar automáticamente dispositivos a un perfil existente desde el repositorio [kentik/snmp-profiles](https://github.com/kentik/snmp-profiles) utilizando el siguiente proceso:

* En primer lugar, se intenta hacer coincidir el valor del [sysObjectID](http://oid-info.com/get/1.3.6.1.2.1.1.2) del dispositivo con una coincidencia literal o comodín para los valores de la clave `systemobjectid` de un perfil.
* En los casos en los que el sysObjectID de un dispositivo es uno de los [OID del agente Net-SNMP](http://oid-info.com/get/1.3.6.1.4.1.8072.3.2), existe un intento de aislar aún más el perfil del dispositivo mediante una coincidencia de expresiones regulares con el valor [sysDescr](http://oid-info.com/get/1.3.6.1.2.1.1.1) del dispositivo. Puede ver las opciones actuales en la clave `matches` del [perfil net-snmp.yml](https://github.com/kentik/snmp-profiles/blob/main/profiles/kentik_snmp/_general/net-snmp.yml).

Hay dos escenarios distintos que pueden existir después de este proceso:

1. El dispositivo se adapta al perfil esperado y recoge métrica sin problemas.
2. El dispositivo inesperadamente coincide con el perfil incorrecto y está recopilando la métrica incorrecta o le falta una métrica.

## Solución [#solution]

### Dispositivos Kentik predeterminados [#kentik-default]

Para el segundo escenario, la situación más común es que su dispositivo se asigne a lo siguiente:

```yaml
# Snippet from device config
  mib_profile: base.yml
  provider: kentik-default
```

Siga los pasos de [los resultados del descubrimiento SNMP en la guía de resolución de problemas de entidad 'Kentik Default'](/docs/network-performance-monitoring/troubleshooting/snmp-discovery-kentik-default) para resolver este problema.

### Dispositivos Net-SNMP [#net-snmp]

También puede ver situaciones en las que la comparación de mejor esfuerzo con el valor `sysDescr` de un dispositivo no funciona o no está disponible debido a la falta de información de identificación única disponible en el valor.

En este caso, puede anular manualmente la coincidencia del trabajo de descubrimiento usando la sintaxis <DNT>**bang (!)**</DNT> : `"!profile-name.yml"`, que le permite forzar cualquier perfil que desee:

```yaml
# Snippet from device config
  mib_profile: "!sonicwall-sma.yml"
  provider: kentik-firewall
```

Como se menciona en la [documentación de configuración del dispositivo](/docs/network-performance-monitoring/advanced/advanced-config/#devices), el valor de la clave `provider` también debe configurarse para garantizar una experiencia UI adecuada en New Relic.

Asegúrese de agregar cualquier MIB nuevo para su archivo de configuración en la clave global `mibs_enabled` . Esto le dice al contenedor en ejecución que recopile activamente métricas para esos MIB.

Aquí hay un ejemplo de firewall de Sonicwall:

```yaml
# Snippet from global config
  mibs_enabled:
  - HOST-RESOURCES-MIB
  - IF-MIB
  - SONICWALL-SMA-APPLIANCE-SYSTEM-HEALTH-MIB
  - SONICWALL-SMA-APPLIANCE-SERVICE-HEALTH-MIB
  - SONICWALL-SMA-APPLIANCE-SECURITY-HISTORY-MIB
  - SONICWALL-SMA-APPLIANCE-TUNNEL-SERVER-MIB
```

<Callout variant="tip">
  También debe establecer la clave de configuración de descubrimiento: "[replace_devices](/docs/network-performance-monitoring/advanced/advanced-config/#discovery)" en `false` para evitar sobrescribir accidentalmente estas ediciones en un trabajo de descubrimiento futuro.
</Callout>
