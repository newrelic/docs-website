---
title: Monitor los servicios que se ejecutan en Amazon ECS
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'Enable infrastructure monitoring of services running on Amazon ECS (like NGINX, Redis, MySQL, others) in New Relic.'
freshnessValidatedDate: never
translationType: machine
---

Si tiene servicios que se ejecutan en el contenedor docker en Amazon ECS y son [compatibles](#requirements), puede habilitar esa integración a través de nuestra integración ECS. Esto informa datos de sus servicios de monitor, del host y del contenedor.

## Requisitos [#requirements]

Para monitor los servicios que se ejecutan en ECS, debe cumplir con estos requisitos:

* Un servicio compatible que se ejecuta en ECS y que cumple con nuestros requisitos. Los servicios compatibles incluyen:

  * [Apache](/docs/integrations/host-integrations/host-integrations-list/apache-monitoring-integration)
  * [Casandra](/docs/integrations/host-integrations/host-integrations-list/cassandra-monitoring-integration)
  * [Base del sofá](/docs/integrations/host-integrations/host-integrations-list/couchbase-monitoring-integration)
  * [Elasticsearch](/docs/integrations/host-integrations/host-integrations-list/elasticsearch-monitoring-integration)
  * [HAProxy](/docs/integrations/host-integrations/host-integrations-list/haproxy-monitoring-integration)
  * [Cónsul de HashiCorp](/docs/integrations/host-integrations/host-integrations-list/hashicorp-consul-monitoring-integration)
  * [JMX](/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration)
  * [kafka](/docs/integrations/host-integrations/host-integrations-list/kafka-monitoring-integration)
  * [Memcached](/docs/integrations/host-integrations/host-integrations-list/memcached-monitoring-integration)
  * [MongoDB](/docs/integrations/host-integrations/host-integrations-list/mongodb-monitoring-integration)
  * [MySQL](/docs/integrations/host-integrations/host-integrations-list/mysql-monitoring-integration)
  * [NGINX](/docs/integrations/host-integrations/host-integrations-list/nginx-monitoring-integration)
  * [PostgreSQL](/docs/integrations/host-integrations/host-integrations-list/postgresql-monitoring-integration)
  * [RabbitMQ](/docs/integrations/host-integrations/host-integrations-list/rabbitmq-monitoring-integration)
  * [Redis](/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration)

* Un clúster ECS [de escalamiento automático](https://aws.amazon.com/autoscaling) que ejecuta Amazon Linux, CentOS o RHEL que cumple con los [requisitos y la compatibilidad del agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure).

* Las tareas de ECS deben tener [el modo de red](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#network_mode) configurado en `none` o `bridge` (`awsvpc` y `host` no son compatibles).

Limitaciones:

* Para este método de instalación, nuestra integración RabbitMQ y Apache no reportan datos de inventario.
* AWS Fargate no es compatible.

## Cómo habilitar [#enable-overview]

Antes de explicar cómo habilitar el monitoreo de los servicios que se ejecutan en ECS, aquí hay una descripción general del proceso:

1. [Habilite Amazon EC2](#enable-ec2) para instalar nuestro agente de infraestructura en su clúster ECS.
2. [Habilite el monitoreo de servicios](#enable-services) utilizando un archivo de configuración específico del servicio.

## Paso 1: Habilite EC2 para instalar el agente de infraestructura [#enable-ec2]

Primero, debe habilitar Amazon EC2 para instalar nuestro agente de infraestructura en el clúster ECS. Para hacer esto, primero deberá actualizar sus datos de usuario para instalar el agente de infraestructura en el lanzamiento.

Aquí hay instrucciones para cambiar la configuración de lanzamiento de EC2 (tomada de [la documentaciónAmazon EC2 ](https://docs.aws.amazon.com/autoscaling/ec2/userguide/change-launch-config.html)):

1. Abra la [consola de Amazon EC2](https://console.aws.amazon.com/ec2).

2. En el panel de navegación, en <DNT>**Auto scaling**</DNT>, elija <DNT>**Launch configurations**</DNT>.

3. En la página siguiente, seleccione la configuración de lanzamiento que desea actualizar.

4. Haga clic derecho y seleccione <DNT>**Copy launch configuration**</DNT>.

5. En la pestaña <DNT>**Launch configuration details**</DNT>, haga clic en <DNT>**Edit details**</DNT>.

6. Reemplace los datos del usuario con uno de los siguientes fragmentos:

   <CollapserGroup>
     <Collapser
       id="os-1"
       title="Para CentOS 6, RHEL 6, Amazon Linux 1"
     >
       Reemplace los campos resaltados con valores relevantes:

       ```
       Content-Type: multipart/mixed; boundary="MIMEBOUNDARY"
       MIME-Version: 1.0

       --MIMEBOUNDARY
       Content-Disposition: attachment; filename="init.cfg"
       Content-Transfer-Encoding: 7bit
       Content-Type: text/cloud-config
       Mime-Version: 1.0

       yum_repos:
           newrelic-infra:
               baseurl: https://download.newrelic.com/infrastructure_agent/linux/yum/el/6/x86_64
               gpgkey: https://download.newrelic.com/infrastructure_agent/gpg/newrelic-infra.gpg
               gpgcheck: 1
               repo_gpgcheck: 1
               enabled: true
               name: New Relic Infrastructure
       write_files:
       -   content: |
               ---
               # New Relic config file
               license_key: <a href="/docs/accounts/install-new-relic/account-setup/license-key">YOUR_LICENSE_KEY</a>
           path: /etc/newrelic-infra.yml
       packages:
         - newrelic-infra
         - nri-*
       runcmd:
         - [ yum, install, newrelic-infra, -y ]
         - [ systemctl, daemon-reload ]
         - [ systemctl, enable, newrelic-infra.service ]
         - [ systemctl, start, --no-block, newrelic-infra.service ]

       --MIMEBOUNDARY
       Content-Transfer-Encoding: 7bit
       Content-Type: text/x-shellscript
       Mime-Version: 1.0

       #!/bin/bash

       # ECS config
       {
         echo "ECS_CLUSTER=YOUR_CLUSTER_NAME"
       } >> /etc/ecs/ecs.config

       start ecs

       echo "Done"
       --MIMEBOUNDARY--
       ```
     </Collapser>

     <Collapser
       id="os-2"
       title="CentOS 7, RHEL 7"
     >
       Reemplace los campos resaltados con valores relevantes:

       ```
       Content-Type: multipart/mixed; boundary="MIMEBOUNDARY"
       MIME-Version: 1.0

       --MIMEBOUNDARY
       Content-Disposition: attachment; filename="init.cfg"
       Content-Transfer-Encoding: 7bit
       Content-Type: text/cloud-config
       Mime-Version: 1.0

       yum_repos:
           newrelic-infra:
               baseurl: https://download.newrelic.com/infrastructure_agent/linux/yum/el/7/x86_64
               gpgkey: https://download.newrelic.com/infrastructure_agent/gpg/newrelic-infra.gpg
               gpgcheck: 1
               repo_gpgcheck: 1
               enabled: true
               name: New Relic Infrastructure
       write_files:
       -   content: |
               ---
               # New Relic config file
               license_key: <a href="/docs/accounts/install-new-relic/account-setup/license-key">YOUR_LICENSE_KEY</a>
           path: /etc/newrelic-infra.yml
       packages:
         - newrelic-infra
         - nri-*
       runcmd:
         - [ yum, install, newrelic-infra, -y ]
         - [ systemctl, daemon-reload ]
         - [ systemctl, enable, newrelic-infra.service ]
         - [ systemctl, start, --no-block, newrelic-infra.service ]

       --MIMEBOUNDARY
       Content-Transfer-Encoding: 7bit
       Content-Type: text/x-shellscript
       Mime-Version: 1.0

       #!/bin/bash

       # ECS config
       {
         echo "ECS_CLUSTER=YOUR_ECS_CLUSTER_NAME"
       } >> /etc/ecs/ecs.config

       start ecs

       echo "Done"
       --MIMEBOUNDARY--
       ```
     </Collapser>

     <Collapser
       id="os-2"
       title="Amazon Linux 2"
     >
       Reemplace los campos resaltados con valores relevantes:

       ```
       Content-Type: multipart/mixed; boundary="MIMEBOUNDARY"
       MIME-Version: 1.0

       --MIMEBOUNDARY
       Content-Disposition: attachment; filename="init.cfg"
       Content-Transfer-Encoding: 7bit
       Content-Type: text/cloud-config
       Mime-Version: 1.0

       yum_repos:
           newrelic-infra:
               baseurl: https://download.newrelic.com/infrastructure_agent/linux/yum/amazonlinux/2/x86_64
               gpgkey: https://download.newrelic.com/infrastructure_agent/gpg/newrelic-infra.gpg
               gpgcheck: 1
               repo_gpgcheck: 1
               enabled: true
               name: New Relic Infrastructure
       write_files:
       -   content: |
               ---
               # New Relic config file
               license_key: <a href="/docs/accounts/install-new-relic/account-setup/license-key">YOUR_LICENSE_KEY</a>
           path: /etc/newrelic-infra.yml
       packages:
         - newrelic-infra
         - nri-*
       runcmd:
         - [ yum, install, newrelic-infra, -y ]
         - [ systemctl, daemon-reload ]
         - [ systemctl, enable, newrelic-infra.service ]
         - [ systemctl, start, --no-block, newrelic-infra.service ]

       --MIMEBOUNDARY
       Content-Transfer-Encoding: 7bit
       Content-Type: text/x-shellscript
       Mime-Version: 1.0

       #!/bin/bash

       # ECS config
       {
         echo "ECS_CLUSTER=YOUR_ECS_CLUSTER_NAME"
       } >> /etc/ecs/ecs.config

       start ecs

       echo "Done"
       --MIMEBOUNDARY--
       ```
     </Collapser>
   </CollapserGroup>

7. Elija <DNT>**Skip to review**</DNT>.

8. Elija <DNT>**Create launch configuration**</DNT>.

A continuación, actualice el grupo de escalado automático:

1. Abra la [consola de Amazon EC2](https://console.aws.amazon.com/ec2).

2. En el panel de navegación, en

   <DNT>
     **Auto scaling**
   </DNT>

   , elija

   <DNT>
     **Auto scaling groups**
   </DNT>

   .

3. Seleccione el grupo de escalado automático que desea actualizar.

4. En el menú

   <DNT>
     **Actions**
   </DNT>

   , elija

   <DNT>
     **Edit**
   </DNT>

   .

5. En el menú desplegable de

   <DNT>
     **Launch configuration**
   </DNT>

   , seleccione la nueva configuración de lanzamiento creada.

6. Haga clic en

   <DNT>
     **Save**
   </DNT>

   .

Para probar si el agente detecta automáticamente la instancia, [finalice una instancia EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html) en el grupo de escalado automático: la instancia de reemplazo ahora se lanzará con los datos del nuevo usuario. Después de cinco minutos, deberías ver los datos del nuevo host en la [página Hosts](/docs/infrastructure/infrastructure-ui-pages/hosts-new-view).

A continuación se pasa a habilitar el monitoreo de servicios.

## Paso 2: Habilitar el monitoreo de servicios [#enable-services]

Una vez que haya [habilitado EC2 para ejecutar el agente de infraestructura](#enable-ec2), el agente comienza a monitorear el contenedor que se ejecuta en ese host.

A continuación, explicaremos cómo monitor el despliegue de servicios en ECS. Por ejemplo, puede monitor una tarea ECS que contenga una instancia NGINX que se encuentra frente a su servidor de aplicaciones.

Aquí hay una breve descripción general de cómo monitor el despliegue de un [servicio compatible](#requirements) en ECS:

1. Cree un archivo de configuración YAML para el servicio que desea monitor. Eventualmente, esto se colocará en la sección de datos del usuario de EC2 a través de la consola de AWS. Pero antes de hacer eso, puede probar que la configuración funciona colocando ese archivo en la carpeta del agente de infraestructura (`etc/newrelic-infra/integrations.d`) en EC2. Ese archivo de configuración debe usar nuestro formato [de descubrimiento automático de contenedores](/docs/integrations/host-integrations/installation/container-auto-discovery), que le permite encontrar el contenedor automáticamente. Las opciones de configuración exactas dependerán de la [integración](/docs/integrations/host-integrations/host-integrations-list) específica.
2. Verifique que los datos del servicio se informen a New Relic.
3. Si está satisfecho con los datos que ve, puede usar la consola EC2 para agregar esa configuración a la configuración de lanzamiento adecuada, en la sección `write_files`, y luego actualizar el grupo de escalado automático.
4. En la sección `runcmd`, agregue el comando `yum` para instalar la integración en la configuración de lanzamiento adecuada.

A continuación se muestra un ejemplo detallado de cómo realizar el procedimiento anterior para NGINX:

1. Asegúrese de tener acceso SSH al servidor o acceso a [AWS Systems Manager Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html). log sesión en el host que ejecuta el agente de infraestructura.

2. A través de la línea de comando, cambie el directorio a la carpeta de configuración de integración:

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

3. Cree un archivo llamado `nginx-config.yml` y agregue el siguiente fragmento:

   ```yml
   ---
   discovery:
     docker:
       match:
         image: /nginx/
   integrations:
     - name: nri-nginx
       env:
         STATUS_URL: http://${'${discovery.ip}'}:/status
         REMOTE_MONITORING: true
         METRICS: 1
   ```

   Esta configuración hace que el agente de infraestructura busque un contenedor en ECS que contenga `nginx`. Una vez que un contenedor coincide, se conecta a la página de estado de NGINX. Para obtener detalles sobre cómo funciona el fragmento `discovery.ip`, consulte [descubrimiento automático](/docs/integrations/host-integrations/installation/container-auto-discovery). Para obtener detalles sobre la configuración general de NGINX, consulte la [integración de NGINX](/docs/integrations/host-integrations/host-integrations-list/nginx-monitoring-integration#config).

4. Si su página de estado de NGINX está configurada para atender solicitudes del `STATUS_URL` en el puerto 80, el agente de infraestructura comienza a monitorearla. Después de cinco minutos, verifique que los datos de NGINX aparezcan en nuestra UI de infraestructura (ya sea: <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Third party services**</DNT> o <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Third-party services**</DNT>).

5. Si la configuración funciona, colóquela en la configuración de lanzamiento de EC2:

   1. Abra la [consola de Amazon EC2](https://console.aws.amazon.com/ec2).

   2. En el panel de navegación, en <DNT>**Auto scaling**</DNT>, elija <DNT>**Launch configurations**</DNT>.

   3. En la página siguiente, seleccione la configuración de lanzamiento que desea actualizar.

   4. Haga clic derecho y seleccione <DNT>**Copy launch configuration**</DNT>.

   5. En la pestaña <DNT>**Launch configuration details**</DNT>, haga clic en <DNT>**Edit details**</DNT>.

   6. En la sección <DNT>**User data**</DNT>, edite la sección `write_files` (en la parte marcada como `text/cloud-config`).

   7. Agregue una nueva entrada de archivo/contenido:

      ```yml
      -   content: |
          ---
          discovery:
            docker:
              match:
                image: /nginx/
          integrations:
            - name: nri-nginx
              env:
                STATUS_URL: http://${'${discovery.ip}'}:/status
                REMOTE_MONITORING: true
                METRICS: 1
          path: /etc/newrelic-infra/integrations.d/nginx-config.yml
      ```

   8. Edite también la sección `runcmd` para incluir el comando `yum` para instalar `nri-nginx`:

      ```yml
      runcmd:
        - [ yum, install, newrelic-infra, -y ]
        - [ yum, install, nri-nginx, -y ]
        - [ systemctl, daemon-reload ]
        - [ systemctl, enable, newrelic-infra.service ]
        - [ systemctl, start, --no-block, newrelic-infra.service ]
      ```

6. Elija <DNT>**Skip to review**</DNT>.

7. Elija <DNT>**Create launch configuration**</DNT>.

8. A continuación, actualice el grupo de escalado automático:

   1. Abra la [consola de Amazon EC2](https://console.aws.amazon.com/ec2/).

   2. En el panel de navegación, en

      <DNT>
        **Auto scaling**
      </DNT>

      , elija

      <DNT>
        **Auto scaling groups**
      </DNT>

      .

   3. Seleccione el grupo de escalado automático que desea actualizar.

   4. En el menú

      <DNT>
        **Actions**
      </DNT>

      , elija

      <DNT>
        **Edit**
      </DNT>

      .

   5. En el menú desplegable de

      <DNT>
        **Launch configuration**
      </DNT>

      , seleccione la nueva configuración de lanzamiento creada.

   6. Haga clic en

      <DNT>
        **Save**
      </DNT>

      .

Cuando se finaliza una instancia EC2, se reemplaza por una nueva que busca automáticamente un nuevo contenedor NGINX.

<InstallFeedback/>
