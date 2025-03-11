---
title: Recopilación de datos para resolución de problemas con la utilidad 'snmpwalk'
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: Gathering details on all supported OIDs for your device using the 'snmpwalk' utility.
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Tiene problemas para recopilar la métrica SNMP de su dispositivo o necesita ver qué identificador de objeto (OID) específico admite su dispositivo.

## Solución [#solution]

La utilidad [snmpwalk](https://helpmanual.io/help/snmpwalk/) es una herramienta útil para resolver varios problemas SNMP que pueda encontrar. Debido a que `ktranslate` se ejecuta en la red de host del host de Linux sobre el que se ejecuta docker , es una medida precisa de si sus dispositivos responden o no a las solicitudes SNMP y con qué responden específicamente.

<Callout variant="tip">
  La mayoría de los sistemas tendrán `snmpwalk` instalado, pero si es necesario, puede cargarlo usted mismo ejecutando `apt-get install snmp` o `yum install net-snmp-utils`.
</Callout>

### Pruebas de conectividad [#connectivity-testing]

Puede probar la conectividad de sus dispositivos SNMP con una prueba básica para recopilar el identificador de objeto del sistema (SysOID) del dispositivo. Si tiene éxito, la configuración de SNMP en el dispositivo y la conectividad de red entre el host docker y el dispositivo están funcionando bien. Si falla, deberá validar la configuración en su red interna.

Ejecute uno de los siguientes según la versión de su dispositivo SNMP:

<CollapserGroup>
  <Collapser
    id="snmp-v2c-example"
    title="Ejemplo de SNMP v2c"
  >
    ```bash
    snmpwalk -v 2c -On -c $COMMUNITY $IP_ADDRESS .1.3.6.1.2.1.1.2.0
    ```

    Donde `$COMMUNITY` es su cadena de comunidad SNMP y `$IP_ADDRESS` es la IP del dispositivo de destino.
  </Collapser>

  <Collapser
    id="snmp-v3-example"
    title="Ejemplo de SNMP v3"
  >
    ```bash
    snmpwalk -v 3 -l $LEVEL -u $USERNAME -a $AUTH_PROTOCOL -A $AUTH_PASSPHRASE -x $PRIV_PROTOCOL -X $PRIV_PASSPHRASE -ObentU -Cc $IP_ADDRESS .1.3.6.1.2.1.1.2.0
    ```

    Reemplazar las siguientes configuraciones según sea necesario:

    ```bash
    $LEVEL == noAuthNoPriv | authNoPriv | authPriv
    $USERNAME == SNMP v3 User
    $AUTH_PROTOCOL == MD5 | SHA
    $AUTH_PASSPHRASE == Authentication passphrase
    $PRIV_PROTOCOL == DES | AES
    $PRIV_PASSPHRASE == Privacy passphrase
    $IP_ADDRESS == target device IP
    ```
  </Collapser>
</CollapserGroup>

El siguiente es un ejemplo del resultado esperado después de ejecutar `snmpwalk`:

```bash
.1.3.6.1.2.1.1.2.0 = OID: .1.3.6.1.4.1.9.1.46
```

### Capturando recorrido SNMP completo [#capturing-snmpwalk]

Es posible que desee capturar el resultado de recorrer cada OID disponible en sus dispositivos. Este resultado se utiliza al crear nuevos perfiles SNMP para `ktranslate` y es un requisito para [abrir una solicitud de perfil en GitHub](https://github.com/kentik/snmp-profiles/issues/new/choose).

Las principales diferencias en su comando para esto son cambiar el objetivo a raíz `.` y redirigir la salida a un archivo del que pueda recopilar datos más adelante.

<DNT>
  **SNMP v2 example**
</DNT>

```bash
snmpwalk -v 2c -On -c $COMMUNITY $IP_ADDRESS . >> snmpwalk.out
```

<DNT>
  **SNMP v3 example**
</DNT>

```bash
snmpwalk -v 3 -l $LEVEL -u $USERNAME -a $AUTH_PROTOCOL -A $AUTH_PASSPHRASE -x $PRIV_PROTOCOL -X $PRIV_PASSPHRASE -ObentU -Cc $IP_ADDRESS . >> snmpwalk.out
```

El resultado de este comando será un archivo llamado `snmpwalk.out`, que enumera todos los OID a los que responde el dispositivo.

<Callout variant="tip">
  En dispositivos con una gran cantidad de interfaces, este recorrido SNMP puede tardar más de 10 minutos en completarse.
</Callout>
