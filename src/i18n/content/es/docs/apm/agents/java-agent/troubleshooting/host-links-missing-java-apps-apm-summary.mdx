---
title: Faltan enlaces de host en el resumen de APM de la aplicación Java
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: How to control how the hostname is reported by the New Relic Java agent on Linux systems.
freshnessValidatedDate: never
translationType: machine
---

## Problema

<Callout variant="caution">
  Cambiar la configuración de su nombre de host, particularmente la configuración de FQDN, puede deshabilitar el acceso a la red de su servidor. Pruebe minuciosamente cualquier cambio antes de implementarlo en un entorno de producción.
</Callout>

No puede ver enlaces a sus hosts Linux desde la [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/applications-overview-dashboard)de su aplicación Java.

## Solución

Configure los ajustes del nombre de host para que el agente New Relic Infrastructure en un entorno de agente Linux devuelva exactamente la misma cadena de nombre que el agente New Relic de Java. <DNT>**Recommendation:**</DNT> Edite la configuración del nombre de dominio completo (FQDN). El agente lee su nombre de host en la configuración FQDN del sistema operativo, por lo que configurar el nombre de host allí garantizará que ambos agentes compartan un único nombre de host.

<Callout variant="caution">
  La interfaz de usuario de New Relic utiliza el nombre de host para vincular una aplicación a su servidor host. Cambiar el nombre de host hará que se informe un nombre diferente para el servidor de aplicaciones que el que informan las aplicaciones de monitorización. Si el enlace de la aplicación funciona actualmente, cambiar el nombre del host puede romper los enlaces del servidor-host.
</Callout>

<CollapserGroup>
  <Collapser
    id="fqdn-example"
    title="Ejemplo: edite su configuración de FQDN"
  >
    Este ejemplo configura el servidor para utilizar los siguientes valores FQDN:

    * Dirección IP: `1.2.3.4`

    * FQDN: `myhost.example.com`

    * Nombre corto del anfitrión: `myhost`

      La mayoría de las distribuciones de Linux almacenan la configuración del nombre de host en dos archivos, normalmente:

    * `/etc/hosts`

    * `/etc/sysconfig/network` (Es posible que esta ruta no exista en su distribución de Linux).

      Para configurar el nombre de host que desea que esté vigente la próxima vez que se inicie el host o servidor:

    1. Agregue la dirección IP, el FQDN y el nombre de host corto a los datos existentes en `/etc/hosts`; Por ejemplo:

       ```
       127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
       ::1 localhost localhost.localdomain localhost6 localhost6.localdomain6
       1.2.3.4 myhost.example.com myhost
       ```

    2. Si `/etc/sysconfig/network` está presente, agregue el FQDN a los datos existentes en `/etc/sysconfig/network`. Por ejemplo:

       ```
       NETWORKING=yes
       HOSTNAME=myhost.example.com
       ```

    3. Utilice la línea de comando para configurar el nombre de host actual, de modo que los cambios surtan efecto sin reiniciar el servidor:

       ```
       sudo hostname myhost.example.com
       ```

    4. Reinicie el agente de Java y el agente de infraestructura para registrar el nuevo nombre de host.
  </Collapser>

  <Collapser
    id="aws-example"
    title="Ejemplo: configuración del nombre de host del script en AWS Elastic Beanstalk"
  >
    También puede configurar el nombre de host para que sea un FQDN al inicio mediante un script de shell. En este ejemplo, [`cloud-init`](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) pasa un script de shell a [Amazon Machine Image](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html#launch-instance-console) (AMI) al inicio, utilizando la variable `UserData`. Se ejecuta un script `cloud-init` antes de que se inicien el agente de Java y el agente de infraestructura, por lo que los agentes heredan la configuración del nombre de host del script `cloud-init` .

    Este script de ejemplo configura todas las configuraciones del nombre de host. Dependiendo de su distribución de Linux, es posible que no sea necesario el comando `echo` para `/etc/sysconfig/network` .

    ```
    #!/bin/sh

    # Set the hostname so the infrastructure agent
    # and Java agent see the same names.

    SHORT_HOSTNAME=`hostname -s`
    IP=`hostname -I`
    DOMAIN="example.com"
    HOSTNAME="${SHORT_HOSTNAME}.${DOMAIN}"

    hostname "${HOSTNAME}"
    echo "${IP} ${HOSTNAME}" >> /etc/hosts
    echo "HOSTNAME=${HOSTNAME}" >> /etc/sysconfig/network
    ```
  </Collapser>
</CollapserGroup>

## Causa

New Relic vincula la aplicación y el host o servidor haciendo coincidir una cadena con el nombre de host informado por el agente de Java y nuestro agente de infraestructura para Linux. Si estas dos cadenas de nombre de host no son idénticas, New Relic no puede conectar la aplicación y el servidor en la [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/applications-overview-dashboard).

Hay varias razones por las que esto podría ocurrir. Por ejemplo:

* Es posible que la JVM esté informando la dirección IP y no el nombre de host.
* La JVM puede informar una dirección IPv6, mientras que el agente de Linux informa una dirección IPv4.
