---
title: Descubrimiento de SNMP da como resultado la entidad 'Kentik Default'
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: SNMP monitoring discovery results in 'Kentik Default' entities in the New Relic UI.
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Después de ejecutar un descubrimiento, verás `Kentik Default` entidad en la New Relic UI.

## Solución [#solution]

Durante el descubrimiento, `ktranslate` recopila el [identificador de objetos del sistema](http://oid-info.com/get/1.3.6.1.2.1.1.2), como sysObjectID o sysOID, lo que proporciona una forma sencilla de identificar un dispositivo. Cada tipo de dispositivo que responde a SNMP tiene un sysObjectID y el valor de ese ID debe ser lo suficientemente único para que cualquiera pueda identificar qué tipo de dispositivo es.

<Callout variant="tip">
  Consulte la [lista CISCO-PRODUCTS-MIB](https://mibs.observium.org/mib/CISCO-PRODUCTS-MIB/), que describe los valores de sysObjectID para una gran cantidad de dispositivos que Cisco ha admitido a lo largo de los años.
</Callout>

Una vez que `ktranslate` conoce el sysObjectID de un dispositivo, ese valor se utiliza para compararlo con los perfiles conocidos disponibles en el repositorio de código abierto [snmp-profiles](https://github.com/kentik/snmp-profiles) que mantiene Kentik.

Si sysObjectID no puede coincidir, entonces el dispositivo se considera una entidad `Kentik Default` . El propósito de esto es proporcionar al usuario una visualización de los dispositivos que se están monitoreando, así como instrucciones sobre cómo ayudar a generar una mejor experiencia para sus dispositivos específicos.

### El tipo de dispositivo ya existe [#device-exists]

En muchas situaciones, existe un perfil preexistente que cubrirá su dispositivo al que simplemente necesitamos agregar el nuevo sysObjectID. El primer paso es echar un vistazo al repositorio [snmp-profiles](https://github.com/kentik/snmp-profiles/tree/main/profiles/kentik_snmp) para ver si hay un directorio para el proveedor de su dispositivo y un archivo de perfil asociado dentro del directorio.

Por ejemplo, si tiene un conmutador de la serie Cisco Catalyst que aparece como `Kentik Default`, pero sysObjectID no está en el [perfil del catalizador](https://github.com/kentik/snmp-profiles/blob/main/profiles/kentik_snmp/cisco/cisco-catalyst.yml), entonces puede crear una solicitud de extracción \[la] para agregarlo o abrir una problema en el repositorio y lo agregaremos en su nombre.

### Se necesita un nuevo tipo de dispositivo [#device-type-needed]

Si ningún perfil SNMP satisface sus necesidades, puede seguir los pasos descritos en la documentación [Creación y administración de perfiles SNMP](/docs/network-performance-monitoring/advanced/snmp-profiles) .
