---
title: Los datos dejan de informar mientras se usa SELinux
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'If your New Relic PHP agent stops reporting data and you are using SELinux, consider these troubleshooting options.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Su agente deja de informar datos cuando utiliza el agente PHP de New Relic. El sistema operativo incluye SELinux de forma predeterminada o se ha agregado al entorno por motivos de seguridad.

## Solución

Para resolver este problema, utilice cualquiera de estas opciones:

<CollapserGroup>
  <Collapser
    id="config-selinux-allow"
    title="Configure SELinux para permitir que New Relic se comunique"
  >
    Con SELinux, puede seguir sus propias políticas de seguridad para configurar una política personalizada que permita la comunicación. Este proceso está fuera del alcance del soporte de New Relic y no podemos hacer recomendaciones específicas con respecto a su configuración de seguridad. Sin embargo, los siguientes enlaces proporcionan puntos de partida útiles para aprender sobre la creación y modificación de políticas de SELinux:

    * [Documentación de CentOS SELinux](https://wiki.centos.org/HowTos/SELinux)
    * [Documentación de RHEL SELinux](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/5/html/deployment_guide/sec-sel-policy-customizing)
  </Collapser>

  <Collapser
    id="disable-selinux-permissive"
    title="Configure SELinux en modo permisivo"
  >
    <Callout variant="tip">
      Esto puede usarse como medida temporal para verificar que SELinux es responsable de los datos que no se reportan.
    </Callout>

    Configurar SELinux en modo permisivo permite que sus servicios funcionen sin restricciones. La configuración predeterminada se restaura si reinicia el servidor.

    Para configurar el modo permisivo, use el comando:

    ```
    setenforce Permissive
    ```
  </Collapser>

  <Collapser
    id="disable-selinux"
    title="Deshabilitar SELinux"
  >
    <Callout variant="important">
      New Relic no le recomienda activamente que desactive el software de seguridad. Sin embargo, para obtener mejores resultados, configure SELinux para permitir que New Relic funcione completamente.
    </Callout>

    Si decide que deshabilitar SELinux es la decisión correcta para su servidor, siga los siguientes pasos para deshabilitar SELinux permanentemente:

    1. Edite el archivo SELinux `sysconfig` usando este comando:

       ```
       vi /etc/sysconfig/selinux
       ```

    2. Busque la configuración `SELINUX=` y cámbiela a:

       ```
       SELINUX=disabled
       ```

    3. Reinicie su servidor para que la configuración surta efecto.
  </Collapser>
</CollapserGroup>

## Causa

La extensión PHP y daemon del agente se comunican de forma predeterminada a través de `/tmp/.newrelic.sock` (socket Unix). Si SELinux no está configurado para permitir que la extensión PHP y daemon se comuniquen, esto evitará que estos dos componentes del agente se comuniquen entre sí cuando SELinux esté configurado en el modo `enforcing`.

En algunos casos, SELinux puede impedir que el daemon se inicie por completo. [Verificar el daemon PHP](/docs/agents/php-agent/troubleshooting/verifying-php-daemon) puede ser un paso necesario para la resolución de problemas al diagnosticar problemas de SELinux.

SELinux es un software de seguridad diseñado para limitar la comunicación de procesos en su entorno. SELinux es una poderosa herramienta en seguridad de servidores. Como tal, debe implementarlo y configurarlo para que se adapte a su propio entorno de servidor.

New Relic no influye en las decisiones sobre cómo configurar la seguridad de su servidor o los procesos que permite ejecutar. No somos responsables de las decisiones de seguridad de su software. Debe revisar sus ajustes de configuración para asegurarse de que cumplan con sus propias políticas de seguridad antes de implementarlos.
