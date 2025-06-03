---
title: Probando el agente Python
type: troubleshooting
tags:
  - Agents
  - Python agent
  - Troubleshooting
metaDescription: How to test your Python agent by running the newrelic-admin validate-config (config file location) command.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Si tiene problemas al instalar o ejecutar el agente Python en un nuevo host, pruebe que el paquete esté instalado correctamente y que pueda comunicarse con nuestro servicio de recolección de datos. Si no se puede acceder al servicio de recolección de datos, puede deberse a un firewall bloqueado. Realice estas pruebas de conectividad de red para delimitar la causa del problema.

## Solución

### Conexión de prueba [#connectivity-test]

El agente Python incluye una aplicación de prueba incorporada que puede verificar su conexión con nuestro [recolector](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector). Para verificar con la aplicación de prueba, ejecute este comando con la ruta a su archivo de configuración de New Relic:

```
newrelic-admin validate-config LOCATION_OF_NEWRELIC.INI
```

Esto ejecuta una prueba utilizando el agente Python. El agente informará los datos de muestra a la cuenta que corresponde al archivo de configuración del agente y aparecerá una aplicación de prueba denominada `Python Agent Test` para los datos de muestra informados en la UI de APM.

Una vez completada la prueba, la UI mostrará la aplicación como inactiva. Siga los procedimientos estándar para [eliminar la aplicación de prueba](/docs/apm/new-relic-apm/maintenance/remove-applications-servers) del índice APM.

### Comprobar log en busca de errores [#check-for-errors]

Si no se transfieren datos a la UI después de cinco minutos, verifique los mensajes generados por la prueba, así como el archivo de registro generado. Si encuentra algún problema que sugiera un problema para poder comunicarse con nuestro servicio de recolección de datos, intente estos procedimientos de resolución de problemas:

* Verifique la [configuración de la red](/docs/agents/python-agent/installation-configuration/testing-python-agent#network-configuration).
* Verifique la [búsqueda de nombres de host](/docs/agents/python-agent/installation-configuration/testing-python-agent#host-name-lookup).
* Enrutar el [tráfico de la red](/docs/agents/python-agent/installation-configuration/testing-python-agent#network-traffic-routing).

A continuación se muestran ejemplos de mensajes de error que puede encontrar.

<CollapserGroup>
  <Collapser
    id="license-key-not-added"
    title="No se agregó una clave de licencia al archivo de configuración del agente."
  >
    <DNT>
      **ERROR - No license key was set in agent configuration.**
    </DNT>

    Asegúrese de que <InlinePopover type="licenseKey"/>se haya especificado en el archivo de configuración del agente o mediante la variable de entorno `NEW_RELIC_LICENSE_KEY` . Corrija el problema con la clave de licencia u obtenga asistencia en [support.newrelic.com](https://support.newrelic.com).
  </Collapser>

  <Collapser
    id="invalid-license-key"
    title="Se agregó una clave de licencia no válida al archivo de configuración del agente."
  >
    <DNT>
      **ERROR - Data collector indicates that an incorrect license key has been supplied by the agent.**
    </DNT>

    El valor utilizado por el agente es `...`. Corrija el problema con <InlinePopover type="licenseKey"/>u obtenga asistencia en [support.newrelic.com](https://support.newrelic.com).
  </Collapser>

  <Collapser
    id="collector-not-contacted"
    title="No se puede contactar con el servicio de recogida de datos."
  >
    <DNT>
      **ERROR - Unable to register application for test, connection could not be established within 30.0 seconds.**
    </DNT>

    Este es un mensaje alternativo cuando no se puede establecer una conexión. Indica que no se puede acceder al servicio de recolección de datos o que hay un problema al resolver el nombre de host para el host de recolección de datos.
  </Collapser>

  <Collapser
    id="collector-unavailable"
    title="El servicio de recopilación de datos no está disponible actualmente."
  >
    * <DNT>
        **WARNING - Data collector is not contactable.**
      </DNT>

      Esto se debe a un problema de red o al reinicio del recolector de datos. Si no se puede establecer contacto después de un período de tiempo, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com).

    * <DNT>
        **ERROR - ConnectionError(MaxRetryError('Max retries exceeded for url: ...,),)**
      </DNT>

      Esto generalmente ocurre cuando nuestro servicio de recopilación de datos no está disponible temporalmente. Vuelva a intentar la prueba.
  </Collapser>
</CollapserGroup>

### Verificar la configuración de la red [#network-configuration]

Para verificar la conexión de red, ejecute lo siguiente:

```
newrelic-admin network-config newrelic.ini
```

Busque resultados similares a este:

```
host = 'collector.newrelic.com'
port = 0
proxy_host = None
proxy_port = None
proxy_user = None
proxy_pass = None
ssl = True
```

* <DNT>
    **Port:**
  </DNT>

  Un valor de `0` para la configuración del puerto indica que se utilizará el puerto apropiado, como

  <DNT>
    **80**
  </DNT>

  o

  <DNT>
    **443**
  </DNT>

  , dependiendo de si SSL está habilitado o no.

* <DNT>
    **Proxy:**
  </DNT>

  Si ha configurado el agente para usar un proxy, asegúrese de que la configuración del proxy refleje esto. Si no se especifica ninguna configuración de proxy pero es necesaria alguna conexión HTTP a Internet, asegúrese de que aparezca la configuración de proxy adecuada en el archivo de configuración del agente.

### Verificar la búsqueda de nombre de host [#host-name-lookup]

Si el recolector de datos parece inalcanzable:

1. Compruebe que el nombre de host del host del recolector de datos principal se pueda resolver con herramientas del sistema UNIX como

   <DNT>
     **dig**
   </DNT>

   o

   <DNT>
     **nslookup.**
   </DNT>

2. Si esto no funciona, verifique la configuración de los archivos de resolución de nombres de dominio para su host.

Aquí hay un ejemplo:

```
$ dig collector.newrelic.com

; <<>> DiG 9.8.3-P1 <<>> collector.newrelic.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 62183
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 4, ADDITIONAL: 4

;; QUESTION SECTION:
;collector.newrelic.com.                IN      A

;; ANSWER SECTION:
collector.newrelic.com. 2453    IN      A       50.31.164.140

;; AUTHORITY SECTION:
newrelic.com.           1163    IN      NS      ns2.p21.dynect.net.
newrelic.com.           1163    IN      NS      ns1.p21.dynect.net.
newrelic.com.           1163    IN      NS      ns4.p21.dynect.net.
newrelic.com.           1163    IN      NS      ns3.p21.dynect.net.

;; ADDITIONAL SECTION:
ns1.p21.dynect.net.     3198    IN      A       208.78.70.21
ns2.p21.dynect.net.     8576    IN      A       204.13.250.21
ns3.p21.dynect.net.     7364    IN      A       208.78.71.21
ns4.p21.dynect.net.     8576    IN      A       204.13.251.21

;; Query time: 22 msec
;; SERVER: 192.168.178.1#53(192.168.178.1)
;; WHEN: Tue Jun 11 18:58:23 2013
;; MSG SIZE  rcvd: 206
```

### Verifique el enrutamiento del tráfico de la red [#route-network-traffic]

<Callout variant="important">
  Nuestro agente requiere que su firewall permita una conexión saliente a nuestra [red](/docs/apm/new-relic-apm/getting-started/networks):

  * Puerto TCP

    <DNT>
      **443**
    </DNT>

    si usa HTTPS a través de una conexión SSL

  * Puerto TCP

    <DNT>
      **80**
    </DNT>

    si utiliza una conexión HTTP simple
</Callout>

Si se puede resolver el nombre de host del host del recolector de datos, utilice herramientas del sistema UNIX como <DNT>**ping**</DNT> y <DNT>**traceroute**</DNT> para determinar si el tráfico de red se puede enrutar a él. La ruta del tráfico de la red variará. Siempre que la ruta llegue al host final previsto, la longitud de la ruta y sus hosts no son importantes.

Si no puede comunicarse con el host del recolector de datos, configure el agente para usar cualquier proxy HTTP del firewall o abra los puertos de salida requeridos en el firewall para permitir conexiones al recolector de datos.

<CollapserGroup>
  <Collapser
    id="ping"
    title="Silbido"
  >
    ```
    $ ping collector.newrelic.com
    PING collector.newrelic.com (50.31.164.140): 56 data bytes
    64 bytes from 50.31.164.140: icmp_seq=0 ttl=239 time=234.204 ms
    64 bytes from 50.31.164.140: icmp_seq=1 ttl=239 time=230.095 ms
    ...
    ```
  </Collapser>

  <Collapser
    id="traceroute"
    title="Traceroute"
  >
    Cuando use <DNT>**traceroute**</DNT>, dígale que use los puertos <DNT>**80**</DNT> y <DNT>**443**</DNT>.

    ```
    $ traceroute -p 80 collector.newrelic.com
    traceroute to collector.newrelic.com (50.31.164.140), 64 hops max, 52 byte packets
     1  ...
     2  ...
     3  ...
     4  * * *
     5  collector.newrelic.com (50.31.164.140)  232.590 ms  231.000 ms  232.041 ms

    $ traceroute -p 443 collector.newrelic.com
    traceroute to collector.newrelic.com (50.31.164.140), 64 hops max, 52 byte packets
     1  ...
     2  ...
     3  ...
     4  * * *
     5  collector.newrelic.com (50.31.164.140)  253.513 ms  231.134 ms  232.511 ms
    ```
  </Collapser>
</CollapserGroup>
