---
title: Redis Enterprise monitoreo integración
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic Redis Enterprise integration: how to install it, configure it, and understand the data it reports.'
freshnessValidatedDate: never
translationType: machine
---

Esta integración es para el clúster Redis Enterprise autohospedado y no para la nube alojada Redis ni para diversas ofertas Redis Enterprise del mercado.

## Arquitectura [#architecture]

La integración de Redis Enterprise se puede ejecutar en dos modos:

<CollapserGroup>
  <Collapser
    id="localhost-mode"
    title="Modo de host local"
  >
    Le recomendamos utilizar este modo, ya que también proporciona estadísticas del sistema operativo a nivel de host para una mejor correlación. Aquí hay un archivo de configuración de ejemplo:

    ```yaml
    instances:
    - name: redis-metrics
        command: metrics
        arguments:
        hostname: localhost
        port: 9443
        username: devops@example.com
        password: myPassword
    ```
  </Collapser>

  <Collapser
    id="cluster-mode"
    title="Modo de clúster"
  >
    El agente New Relic en un nodo fuera del clúster Redis Enterprise puede raspar múltiples clústeres para métrica. Aquí hay un archivo de configuración de ejemplo:

    ```yaml
    instances:
    - name: redis-metrics1
        command: metrics
        arguments:
        hostname: cluster1.fqdn
        port: 9443
        username: devops@example.com
        password: myPassword
    - name: redis-metrics2
        command: metrics
        arguments:
        hostname: cluster.fqdn
        port: 9443
        username: devops@example.com
        password: myPassword
    ```
  </Collapser>
</CollapserGroup>

## Requisitos previos [#prereqs]

Antes de continuar con la [instalación](#install), asegúrese de cumplir los siguientes requisitos previos.

### Cree una cuenta de monitoreo en Redis Enterprise [#monitoring-account]

1. Cree una cuenta de monitoreo en su cuenta de Redis Enterprise.

2. Log sesión en su instancia Redis Entprise y haga clic en

   <DNT>
     **Access Control**
   </DNT>

   .

   <Callout variant="tip">
     Recomendamos usar una cuenta interna, pero puede usar LDAP si tiene LDAP habilitado.
   </Callout>

3. Agregue una nueva cuenta de usuario con

   <DNT>
     **Cluster View Permissions**
   </DNT>

   .

### Asegúrese de haber instalado el agente de infraestructura New Relic [#NR-agent]

Para ver si instaló el agente New Relic Infrastructure, ejecute el siguiente comando:

```shell
sudo service newrelic-infra status -l
```

Dependiendo de su distribución de Linux, es posible que deba ejecutar el siguiente comando:

```shell
sudo /bin/systemctl status  -l newrelic-infra.service
```

Si no lo ha instalado, consulte [cómo instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent/).

## Instalar y configurar [#install]

1. Descargue el archivo TAR más reciente según su sistema operativo desde [Github](https://github.com/redis-field-engineering/newrelic-redis-enterprise/releases).

2. Descomprima el archivo TAR ejecutando:

   ```shell
   sudo su -
   mkdir -p /tmp/nr_install
   cd /tmp/nr_install
   wget $RELEASE_DOWNLOAD
   tar zxvf *.tar.gz 
   ```

3. Cree una carpeta y copie los archivos del archivo TAR en esta nueva carpeta ejecutando:

   ```shell
   mkdir -p /var/db/newrelic-infra/custom-integrations/bin
   cp newrelic-redis-enterprise /var/db/newrelic-infra/custom-integrations/bin
   cp conf/redis-redisenterprise-definition.yml /var/db/newrelic-infra/custom-integrations/
   cp conf/redis-redisenterprise-multi-config.yml.example conf/redis-redisenterprise-multi-config.yml
   ```

4. Configure la integración ejecutando:

   ```shell
   vi conf/redis-redisenterprise-multi-config.yml
   mv conf/redis-redisenterprise-multi-config.yml /etc/newrelic-infra/integrations.d/redis-redisenterprise-config.yaml
   ```

5. Pruebe su nombre de usuario y contraseña ejecutando:

   ```shell
   curl -vk -u devops@example.com:password https://CLUSTER.FQDN:9443/v1/cluster
   ```

6. Reinicie New Relic ejecutando:

   ```shell
   sudo service  newrelic-infra  restart
   ```

<InstallFeedback/>

### Parámetro de configuración [#config-parameters]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Parámetro
      </th>

      <th>
        Definición
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `hostname`
      </td>

      <td>
        Dominio del cluster Redis
      </td>

      <td>
        Si se ejecuta en modo localhost, use `localhost`
      </td>
    </tr>

    <tr>
      <td>
        `port`
      </td>

      <td>
        Puerto de la API empresarial de Redis
      </td>

      <td>
        El puerto predeterminado es `9443`
      </td>
    </tr>

    <tr>
      <td>
        `username`
      </td>

      <td>
        El usuario de Redis que creaste
      </td>

      <td>
        Dirección de correo electrónico como `devops@example.com`
      </td>
    </tr>

    <tr>
      <td>
        `password`
      </td>

      <td>
        Tu contraseña
      </td>
    </tr>
  </tbody>
</table>

## Instalar el tablero [#install-dashboards]

1. Vaya a <DNT>**[one.newrelic.com/marketplace](https://one.newrelic.com/marketplace)**</DNT>.

2. Haga clic en la pestaña <DNT>**Dashboards**</DNT> y, en el campo de búsqueda, escriba <DNT>**Redis Enterprise**</DNT>.<img title="Redis Enterprise dashboards" alt="A screenshot of the Redis Enterprise dashboards." src="/images/infrastructure_screenshot-crop_redis-enterprise-dashboard.webp"/>

   <Callout variant="tip">
     Si conoce el dashboard que desea agregar, haga clic en uno de los siguientes enlaces:

     * [Redis métrico de Enterprise clúster dashboard](https://one.newrelic.com/marketplace?state=51bb87db-0e38-0700-be7a-8fb16d608735)
     * [Redis CRDT de base de datos Enterprise dashboard](https://one.newrelic.com/marketplace?state=3dd588b8-ef40-85b6-17f5-49ca63ad25e3)
     * [Redis métrico Enterprise Database dashboard](https://one.newrelic.com/marketplace?state=8d596a92-8338-1657-4b08-3c520845fec6)
   </Callout>

3. Haga clic en uno de los paneles y seleccione una cuenta en el menú desplegable. Luego, haga clic en <DNT>**View dashboard**</DNT> para agregarlo a su cuenta.
