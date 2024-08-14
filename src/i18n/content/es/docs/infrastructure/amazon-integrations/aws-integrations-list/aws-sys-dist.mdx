---
title: Distribuidor del administrador del sistema AWS
metaDescription: 'New Relic''s AWS System Manager Distributor monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: '2024-02-28T00:00:00.000Z'
translationType: machine
---

Instala el agente de infraestructura de New Relic en tus instancias EC2 AWS con un solo clic a través de nuestra integración para [AWS System Manager Distributor](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor.html). Este documento explica la característica de integración, cómo activarla y qué datos se pueden reportar.

## Característica [#features]

Recopile y envíe telemetry data a New Relic desde diversas instancias AWS con un solo clic. New Relic AWS La integración System Manager Distributor de instala nuestro agente de infraestructura en su AWS instancia y le permite rápidamente monitor sus servicios, consultar datos entrantes y crear un panel para que pueda observar su sistema de un vistazo.

## Requisitos previos [#prereqs]

Complete la configuración recomendada por AWS en [la documentación de AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html) para configurar roles, cuentas de usuario, permisos y recursos iniciales.

## Activar la integración [#integration]

Puede utilizar la consola de AWS Systems Manager para instalar o actualizar el paquete del distribuidor <DNT>**New Relic infrastructure agent**</DNT> una vez o puede establecer un cronograma de instalación.

* Cuando configura una instalación única,

  <DNT>
    **Distributor package**
  </DNT>

  utiliza el [comando de ejecución de AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html), una capacidad de AWS Systems Manager, para realizar la instalación.

* Cuando programa la instalación o actualización de un paquete, el Distribuidor utiliza [AWS Systems Manager State Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html) para instalarlo o actualizarlo.

New Relic también proporciona un proceso automatizado para el monitoreo de EC2 y se puede encontrar [aquí](/whats-new/2023/08/whats-new-08-08-automatic-ec2-monitoring-through-nr-agent/)

## Instalar o actualizar el agente [#install-update]

1. Abra la [consola](https://console.aws.amazon.com/systems-manager) de AWS Systems Manager. En el panel de navegación, elija <DNT>**Distributor**</DNT>, seleccione <DNT>**Third party**</DNT> y seleccione el mosaico <DNT>**New Relic infrastructure monitoring agent**</DNT> .

2. Seleccione el modo de instalación. Puede instalar o actualizar el paquete <DNT>**New Relic infrastructure monitoring agent**</DNT> una vez o programar la instalación. Para obtener información detallada sobre la instalación de <DNT>**Distributor packages**</DNT>, consulte [la documentación del distribuidor de AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/distributor-working-with-packages-deploy.html).

3. Para <DNT>**Action**</DNT>, elija <DNT>**Install**</DNT>.

4. Para <DNT>**Installation type**</DNT>, elija <DNT>**Uninstall and reinstall**</DNT>: el paquete se desinstala por completo y luego se reinstala. El agente New Relic no estará disponible hasta que se complete la reinstalación <DNT>**In-place update**</DNT>. La aplicación permanece disponible durante todo el proceso de actualización.

5. Para <DNT>**Additional Arguments**</DNT>, pegue el código que aparece a continuación. Asegúrese de reemplazar `YOUR_NEWRELIC_LICENSE_KEY` con su [clave de API de New Relic ](/docs/apis/intro-apis/new-relic-api-keys).

   ```
   {
     "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY"
   }
   ```

   Las variables de muestra también se pueden especificar en **Additional Arguments** como se muestra a continuación:

   ```
   { "SSM_NR_LICENSE_KEY" : "YOUR_NEWRELIC_LICENSE_KEY",
    "SSM_NRIA_METRICS_NETWORK_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_PROCESS_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_STORAGE_SAMPLE_RATE" : "SOME_INTEGER_VALUE",
    "SSM_NRIA_METRICS_SYSTEM_SAMPLE_RATE" : "SOME_INTEGER_VALUE", 
    "SSM_NRIA_METRICS_NFS_SAMPLE_RATE" : "SOME_INTEGER_VALUE" }
   ```

   Si no se especifican, tomarán los [valores predeterminados](https://github.com/newrelic/infrastructure-agent/blob/master/assets/examples/infrastructure/newrelic-infra-template.yml.example).

6. En la sección <DNT>**Targets**</DNT> , elija los nodos administrados en los que desea ejecutar esta operación especificando la etiqueta, seleccionando la instancia o los dispositivos manualmente o especificando un grupo de recursos. Si no ve un nodo administrado en la lista, consulte [estos documentos de AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/troubleshooting-managed-instances.html).

7. Para <DNT>**Rate Control**</DNT> para <DNT>**Concurrency**</DNT>, especifique un número o un porcentaje del objetivo sobre el cual ejecutar el comando al mismo tiempo.

   <Callout variant="tip">
     Si seleccionó el objetivo especificando etiquetas o grupos de recursos y no está seguro de cuántos nodos administrados son el objetivo, restrinja la cantidad de objetivos que pueden ejecutar el documento al mismo tiempo especificando un porcentaje.
   </Callout>

8. Para <DNT>**Error threshold**</DNT>, especifique cuándo dejar de ejecutar el comando en otro objetivo después de que falle en un número o porcentaje de nodos administrados. Por ejemplo, si especifica tres errores, Systems Manager deja de enviar el comando cuando se recibe el cuarto error. Los nodos administrados que aún procesan el comando también pueden enviar errores.

9. <DNT>**Verify the installation**</DNT>. Después de ejecutar la instalación, verifique el progreso en el área de estado del comando. Cuando vea el estado Éxito, significa que la instalación se realizó correctamente.

10. Explore los datos de su aplicación en [nuestra UI](one.newrelic.com).

## Configuración y sondeo [#configure-polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

[Información de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración AWS :

* New Relic intervalo de sondeo: 5 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto o 5 minutos

## Buscar y utilizar datos

Después de instalar el agente New Relic Infrastructure , [puede ajustar y sintonizar el flujo de datos proveniente de su instancia](/docs/infrastructure/infrastructure-monitoring/get-started/get-started-infrastructure-monitoring).

Para leer más sobre cómo encontrar sus datos, consulte nuestra [Introducción a la integración AWS ](/docs/infrastructure/amazon-integrations/get-started/introduction-aws-integrations/#insights).
