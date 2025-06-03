---
title: Kafka monitoreo integración
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s Kafka integration: how to install it and configure it, and what data it reports.'
freshnessValidatedDate: never
translationType: machine
---

La integración New Relic Kafka [en el host](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) informa datos métricos y de configuración de su servicio Kafka. Instrumentamos todos los elementos clave de su clúster, incluidos los corredores (tanto ZooKeeper como Bootstrap), productores, consumidores y temas.

Para instalar la integración de monitoreo de Kafka, debe seguir los siguientes pasos:

1. [Prepárese para la instalación](#prepare).
2. [Instalar y activar la integración](#install).
3. [Configurar la integración](#config).
4. [Buscar y utilizar datos](#find-and-use).
5. Opcionalmente, consulte [los ajustes de configuración de Kafka](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config).

<Callout variant="tip">
  Para leer sobre las mejores prácticas al monitorear Kafka, consulte [esta publicación de blog](https://newrelic.com/blog/best-practices/new-relic-kafkapocalypse).
</Callout>

## Compatibilidad y requisitos [#req]

### Versiones Kafka [#kafka-versions]

Nuestra integración es compatible con Kafka versión 3 o inferior.

Tenga en cuenta [la política EOL de Apache Kafka](https://cwiki.apache.org/confluence/display/KAFKA/Time+Based+Release+Plan#TimeBasedReleasePlan-WhatIsOurEOLPolicy), ya que puede experimentar resultados inesperados si utiliza una versión [de End of Life](https://docs.confluent.io/platform/current/installation/versions-interoperability.html#cp-and-apache-ak-compatibility) Kafka.

### Sistema operativo soportado [#supported-os]

* Windows

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="Windows"
    alt="Windows"
    src="/images/os_icon_windows.webp"
  />

* linux

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="Linux"
    alt="Linux"
    src="/images/os_icon_linux.webp"
  />

Para obtener una lista completa de versiones específicas de Windows y Linux, consulte la tabla de [sistemas operativos compatibles](/docs/infrastructure/install-infrastructure-agent/get-started/requirements-infrastructure-agent/#operating-systems).

### Requisito del sistema [#system-reqs]

* Una cuenta New Relic . ¿No tienes uno? [¡Registrate gratis!](https://newrelic.com/signup) No se requiere tarjeta de crédito.

* Si Kafka no se ejecuta en Kubernetes o Amazon ECS, puede [instalar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) en un host con sistema operativo Linux o Windows o en un host capaz de acceder de forma remota al lugar donde está instalado Kafka. De lo contrario:

  * Si está funcionando

    <img
      style={{ width: '32px', height: '32px'}}
      class="inline"
      title="Kubernetes"
      alt="Kubernetes"
      src="/images/os_icon_k8.webp"
    >
      Kubernetes, consulte [estos requisitos](/docs/monitor-service-running-kubernetes#requirements).
    </img>

  * Si está funcionando

    <img
      style={{ width: '32px', height: '32px'}}
      class="inline"
      title="ECS"
      alt="ECS"
      src="/images/os_icon_ecs.webp"
    >
      Amazon ECS, consulte [estos requisitos](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
    </img>

* Java versión 8 o superior.

* JMX habilitado en todos los corredores.

* Solo consumidores y productores basados en Java y con JMX habilitado.

* El número total de temas de monitorización debe ser inferior a 10.000.

### Requisitos de conectividad [#connectivity-requirements]

La integración debe configurarse y permitirse conectarse a:

* Hosts enumerados en `zookeeper_hosts` a través del protocolo Zookeeper, utilizando el mecanismo de autenticación de Zookeeper, si `autodiscover_strategy` está configurado en `zookeeper`.
* Hosts definidos en `bootstrap_broker_host` a través del protocolo Kafka, utilizando los mecanismos de autenticación/transporte del intermediario Kafka, si `autodiscover_strategy` está configurado en `bootstrap`.
* Todos los intermediarios del clúster a través del protocolo y puerto de Kafka, utilizando los mecanismos de autenticación/transporte de los intermediarios de Kafka.
* Todos los intermediarios del clúster a través del protocolo y puerto JMX, utilizando los mecanismos de autenticación/transporte especificados en la configuración JMX de los intermediarios.
* Todos los productores/consumidor especificados en productores y consumidor sobre el protocolo y puerto JMX, si desea monitoreo de productor/consumidor. La configuración de JMX para el consumidor debe ser la misma que para los corredores.

<Callout variant="important">
  De forma predeterminada, los grupos de seguridad y sus equivalentes en otros proveedores de nube en AWS no tienen los puertos requeridos abiertos de forma predeterminada. JMX requiere dos puertos para funcionar: el puerto JMX y el puerto RMI. Estos se pueden establecer en el mismo valor al configurar la JVM para habilitar JMX y deben estar abiertos para que la integración pueda conectarse y recopilar métrica de los corredores.
</Callout>

## Prepárese para la instalación [#prepare]

Kafka es una pieza compleja de software que se construye como un sistema distribuido. Por este motivo, debe asegurarse de que la integración pueda contactar con todos los hosts y servicios necesarios para que los datos se recopilen correctamente.

<CollapserGroup>
  <Collapser
    id="autodiscovery"
    title="Descubrimiento automático"
  >
    Dada la naturaleza distribuida de Kafka, la configuración no suele fijar el número real y la lista de intermediarios, sino que es bastante dinámico. Por este motivo, la integración Kafka ofrece dos mecanismos para realizar el descubrimiento automático de la lista de brokers en el clúster: Bootstrap y Zookeeper. El mecanismo que utilice depende de la configuración del clúster Kafka que se está monitoreando.

    ### Bootstrap

    Con el [mecanismo de arranque](#bootstrap), la integración utiliza un intermediario de arranque para realizar el descubrimiento automático. Se trata de un corredor cuya dirección es bien conocida y al que se le preguntará por cualquier otro corredor del que tenga conocimiento. La integración debe poder comunicarse con este corredor en la dirección proporcionada en el parámetro bootstrap_broker_host para que funcione el descubrimiento de arranque.

    ### Zookeeper

    Alternativamente, la integración de Kafka también puede comunicarse con un [servidor de Zookeeper](#zookeeper) para obtener la lista de corredores. Para hacer esto, la integración debe contar con lo siguiente:

    * La lista de hosts de Zookeeper, `zookeeper_hosts`, con los que contactar.

    * Los secretos de autenticación adecuados para conectarse con los hosts.

      Junto con la lista de corredores que conoce, Zookeeper también anunciará qué mecanismos de conexión admite cada corredor.

      Puede configurar la integración de Kafka para probar directamente con uno de estos mecanismos con el parámetro `preferred_listener` . Si no se proporciona este parámetro, la integración intentará contactar a los brokers con todas las configuraciones anunciadas hasta que uno de ellos lo consiga.

      <Callout variant="tip">
        La integración utilizará Zookeeper solo para descubrir corredores y no recuperará métricas de él.
      </Callout>
  </Collapser>

  <Collapser
    id="topic-listing"
    title="Listado de temas"
  >
    Para enumerar correctamente los temas procesados por los corredores, la integración debe comunicarse con los corredores a través del protocolo Kafka. Dependiendo de cómo estén configurados los intermediarios, esto podría requerir configurar SSL y/o SASL para que coincida con la configuración del intermediario. Los temas deben tener acceso DESCRIBIR.
  </Collapser>

  <Collapser
    id="broker-monitoring"
    title="Monitoreo de corredores (JMX)"
  >
    Kafka integración consulta JMX, una extensión estándar de Java para el intercambio de métricas en una aplicación Java. JMX no está habilitado de forma predeterminada en los brokers Kafka y es necesario habilitarlo para que la colección métrica funcione correctamente. JMX requiere que RMI esté habilitado y el puerto RMI debe configurarse en el mismo puerto que JMX.

    Puede configurar JMX para utilizar autenticación de nombre de usuario/contraseña, así como SSL. Si dicha característica se ha habilitado en la configuración JMX del corredor, deberá configurar la integración en consecuencia.

    Si el descubrimiento automático está configurado en arrancar, la configuración JMX definida para el corredor arrancar se aplicará a todos los demás corredores descubiertos, por lo que el puerto y otras configuraciones deben ser las mismas en todos los corredores. <Callout variant="important">No recomendamos habilitar el acceso JMX/RMI anónimo y/o sin cifrar en segmentos de red públicos o que no sean de confianza porque esto representa un gran riesgo de seguridad.</Callout>
  </Collapser>

  <Collapser
    id="consumer-offset"
    title="Compensación del consumidor"
  >
    El desplazamiento de los grupos de consumidores y consumidores de los temas, así como el retraso, se puede recuperar como [KafkaOffsetSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#KafkaOffsetSample-collection) con el indicador `CONSUMER_OFFSET=true`, pero debe estar en una instancia separada porque cuando este indicador se activa, la instancia no recopilará otras muestras.
  </Collapser>

  <Collapser
    id="producer"
    title="Monitoreo de productores y consumidores (JMX)"
  >
    Los productores y consumidores escritos en Java también pueden ser monitoreados para obtener metadatos más específicos a través del mismo mecanismo (JMX). Esto generará [KafkaConsumerSamples y KafkaProducerSamples](#KafkaConsumerSample-collection). JMX debe habilitarse y configurarse en aquellas aplicaciones donde no está habilitado de forma predeterminada.

    Los productores y consumidores que no son Java no son compatibles con JMX y, por lo tanto, no son compatibles con la integración de Kafka.
  </Collapser>
</CollapserGroup>

## Instalar y activar la integración. [#install]

Para instalar la integración de Kafka, siga las instrucciones para su entorno:

### Instalación de linux [#linux-install]

1. Siga las instrucciones para [instalar una integración](/docs/install-integrations-package) y reemplace la variable `INTEGRATION_FILE_NAME` con `nri-kafka`.

2. Cambie el directorio a la carpeta de configuración de integración ejecutando:

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

3. Copie el archivo de configuración de muestra ejecutando:

   ```shell
   sudo cp kafka-config.yml.sample kafka-config.yml
   ```

4. Edite el archivo de configuración `kafka-config.yml` con su editor favorito. Vea algunos [ejemplos de archivos de configuración.](#examples).

### Otros ambientes [#other-env]

<CollapserGroup>
  <Collapser
    id="windows-install"
    title={<><img src="/images/os_icon_windows.webp" title="Windows installation" alt="Windows installation" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>instalación de Windows</img></>}
  >
    1. [Descargue la imagen del instalador .MSI para la integración Kafka de New Relic](https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-kafka/nri-kafka-amd64.msi).

    2. Instale la integración Kafka de New Relic abriendo el símbolo del sistema y ejecutando:

       ```shell
       msiexec.exe /qn /i $PATH_TO\nri-kafka-amd64.msi
       ```

    3. En el directorio de integración, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`, cree una copia del archivo de configuración de muestra ejecutando:

       ```shell
       cp kafka-config.yml.sample kafka-config.yml
       ```

    4. Edite el archivo `kafka-config.yml` utilizando uno de los [archivos de muestra`kafka-config.yml` ](#examples).
  </Collapser>

  <Collapser
    id="ecs-install"
    title={<><img src="/images/os_icon_ecs.webp" title="Amazon ECS installation" alt="Amazon ECS installation" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>' ' Instalación de Amazon ECS</img></>}
  >
    Consulte [Servicio de monitorización ejecutándose en ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
  </Collapser>

  <Collapser
    id="k8s-install"
    title={<><img src="/images/os_icon_k8.webp" title="Kubernetes installation" alt="Kubernetes installation" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }}>Kubernetes Instalación</img></>}
  >
    Consulte [Supervisar el servicio que se ejecuta en Kubernetes](/docs/monitor-service-running-kubernetes).
  </Collapser>
</CollapserGroup>

Notas adicionales:

* <DNT>
    **Advanced:**
  </DNT>

  integración también están disponibles en [formato tarball](/docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic#tarball) para permitir la instalación fuera de un administrador de paquetes.

* <DNT>
    **On-host integrations do not automatically update.**
  </DNT>

  Para obtener mejores resultados, [actualice periódicamente el paquete de integración](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package) y [el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

<InstallFeedback/>

## Configurar la integración [#config]

Hay varias formas de configurar la integración, dependiendo de cómo se instaló:

* Si se habilita a través de

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="Kubernetes"
    alt="Kubernetes"
    src="/images/os_icon_k8.webp"
  >
    Kubernetes, consulte [Supervisar los servicios que se ejecutan en Kubernetes](/docs/monitor-service-running-kubernetes).
  </img>

* Si se habilita a través de

  <img
    style={{ width: '32px', height: '32px'}}
    class="inline"
    title="ECS"
    alt="ECS"
    src="/images/os_icon_ecs.webp"
  >
    Amazon ECS, consulte [Monitorear servicios que se ejecutan en ECS](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).
  </img>

* Si está instalado en el host, edite la configuración en el archivo de configuración YAML de la integración, `kafka-config.yml`. La configuración de formato YAML de una integración es donde puede colocar las credenciales de inicio de sesión requeridas y configurar cómo se recopilan los datos. Las opciones que cambie dependen de su configuración y preferencia. El archivo de configuración tiene configuraciones comunes aplicables a todas las integraciones como `interval`, `timeout`, `inventory_source`. Para leer todo sobre estas configuraciones comunes, consulte nuestro documento [Formato de configuración](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-newer-configuration-format/#configuration-basics) .

<Callout variant="important">
  Si todavía utiliza nuestros archivos de configuración y definición legacy, consulte este [documento](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format/) para obtener ayuda.
</Callout>

Al igual que con otras integraciones, un archivo de configuración `kafka-config.yml` puede tener muchas instancias de la integración recopilando diferentes corredores, consumidores y productores métricos. Puede ver ejemplos de configuración con una o varias instancias en los [archivos de muestra`kafka-config.yml`](#examples)

Las configuraciones específicas relacionadas con Kafka se definen usando la sección `env` de cada instancia en el archivo de configuración `kafka-config.yml` . Estas configuraciones controlan la conexión a sus Brokers, Zookeeper y JMX, así como otras configuraciones y características de seguridad. La lista de configuraciones válidas se describe en [la configuración de Kafka](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config).

La integración tiene dos modos de operación en cada instancia, que son mutuamente excluyentes, que puedes configurar con el parámetro `CONSUMER_OFFSET` :

* Colección de compensación del consumidor: establezca `CONSUMER_OFFSET = true` para recopilar [KafkaOffsetSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#KafkaOffsetSample-collection).
* Modo de recopilación principal: establezca `CONSUMER_OFFSET = false` para recopilar el resto de las muestras: [KafkaBrokerSample, KafkaTopicSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#broker-collection), [KafkaProducerSample, KafkaConsumerSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#KafkaConsumerSample-collection).

<Callout variant="important">
  Estos modos son mutuamente excluyentes porque la recopilación de compensación del consumidor tarda mucho en ejecutarse y tiene requisitos de alto rendimiento. Para recopilar ambos grupos de muestras, configure dos instancias, una con cada modo.
</Callout>

Los valores para estas configuraciones se pueden definir de varias maneras:

* Agregando el valor directamente en el archivo de configuración. Esta es la forma más común.
* Reemplazar los valores de las variables de entorno usando la notación `{{ }}` . Lea más sobre [el uso de transferencias de variables de entorno con integración en el host](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough) o vea el ejemplo para [el reemplazo de variables de entorno](/docs/infrastructure/host-integrations/host-integrations-list/elasticsearch/elasticsearch-integration#envvar-replacement).
* Utilizando la gestión de secretos. Utilícelo para proteger información confidencial, como contraseñas que quedarían expuestas en texto sin formato en el archivo de configuración. Para obtener más información, consulte [gestión de secretos](/docs/integrations/host-integrations/installation/secrets-management).

### Monitoreo de compensación

Al configurar `CONSUMER_OFFSET = true`, de forma predeterminada, solo se recopilarán las métricas de los grupos de consumidores con consumidor activo (y consumidor métrica). Para recopilar también la métrica de grupos de consumidores con consumidor inactivo debes configurar `INACTIVE_CONSUMER_GROUP_OFFSET` en `true`.

Cuando un grupo de consumidores está monitoreando más de un tema, es valioso tener el grupo de consumidores métrica separado por temas, especialmente si uno de los temas tiene un consumidor inactivo, porque entonces es posible detectar en qué tema el grupo de consumidores está teniendo rezago y si hay son consumidores activos para ese grupo de consumidores y tema.

Para obtener la métrica del grupo de consumidores separada por tema, debe establecer `CONSUMER_GROUP_OFFSET_BY_TOPIC` en `true` (el valor predeterminado es `false`).

Para obtener más información sobre cómo configurar el monitoreo de compensación, consulte [Configurar la colección KafkaOffsetSample](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config/#KafkaOffsetSample-collection).

## Archivos de muestra kafka-config.yml [#examples]

<CollapserGroup>
  <Collapser
    id="zookeeper"
    title="Descubrimiento de Zookeeper"
  >
    Esta configuración recopila métrica e inventario, incluidos todos los temas que descubren los corredores de dos hosts JMX diferentes:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          CLUSTER_NAME: testcluster1
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "localhost", "port": 2181}, {"host": "localhost2", "port": 2181}]'
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password
          TOPIC_MODE: all
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="zookeeper-ssl"
    title="Descubrimiento SSL de Zookeeper"
  >
    Esta configuración recopila métrica e Inventario descubriendo los brokers desde un host JMX con SSL:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          CLUSTER_NAME: testcluster1
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "localhost", "port": 2181}]'
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password

          KEY_STORE: "/path/to/your/keystore"
          KEY_STORE_PASSWORD: keystore_password
          TRUST_STORE: "/path/to/your/truststore"
          TRUST_STORE_PASSWORD: truststore_password

          TIMEOUT: 10000  #The timeout for individual JMX queries in milliseconds.
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="bootstrap"
    title="Descubrimiento de Bootstrap"
  >
    Esta configuración recopila métrica e inventario, incluidos todos los temas para descubrir los corredores de un corredor de arranque:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          CLUSTER_NAME: testcluster1
          AUTODISCOVER_STRATEGY: bootstrap
          BOOTSTRAP_BROKER_HOST: localhost
          BOOTSTRAP_BROKER_KAFKA_PORT: 9092
          BOOTSTRAP_BROKER_KAFKA_PROTOCOL: PLAINTEXT
          BOOTSTRAP_BROKER_JMX_PORT: 9999  # This same port will be used to connect to all discover broker JMX
          BOOTSTRAP_BROKER_JMX_USER: admin
          BOOTSTRAP_BROKER_JMX_PASSWORD: password

          LOCAL_ONLY_COLLECTION: false

          COLLECT_BROKER_TOPIC_DATA: true
          TOPIC_MODE: "all"
          COLLECT_TOPIC_SIZE: false
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="bootstrap-tls"
    title="Bootstrap descubrimiento TLS"
  >
    Esta configuración recopila solo métricas para descubrir los corredores de un corredor de arranque que escucha con protocolo TLS:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster1
          AUTODISCOVER_STRATEGY: bootstrap
          BOOTSTRAP_BROKER_HOST: localhost
          BOOTSTRAP_BROKER_KAFKA_PORT: 9092
          BOOTSTRAP_BROKER_KAFKA_PROTOCOL: SSL
          BOOTSTRAP_BROKER_JMX_PORT: 9999
          BOOTSTRAP_BROKER_JMX_USER: admin
          BOOTSTRAP_BROKER_JMX_PASSWORD: password

          # Kerberos authentication arguments
          TLS_CA_FILE: "/path/to/CA.pem"
          TLS_CERT_FILE: "/path/to/cert.pem"
          TLS_KEY_FILE: "/path/to/key.pem"
          TLS_INSECURE_SKIP_VERIFY: false
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="boostrap-kerberos"
    title="Bootstrap descubrimiento de autenticación kerberos"
  >
    Esta configuración recoge sólo métricas para descubrir los brokers de un broker arrancar en un clúster Kerberos Auth:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster1
          AUTODISCOVER_STRATEGY: bootstrap
          BOOTSTRAP_BROKER_HOST: localhost
          BOOTSTRAP_BROKER_KAFKA_PORT: 9092
          BOOTSTRAP_BROKER_KAFKA_PROTOCOL: PLAINTEXT # Currently support PLAINTEXT and SSL
          BOOTSTRAP_BROKER_JMX_PORT: 9999
          BOOTSTRAP_BROKER_JMX_USER: admin
          BOOTSTRAP_BROKER_JMX_PASSWORD: password

          # Kerberos authentication arguments
          SASL_MECHANISM: GSSAPI
          SASL_GSSAPI_REALM: SOMECORP.COM
          SASL_GSSAPI_SERVICE_NAME: Kafka
          SASL_GSSAPI_USERNAME: kafka
          SASL_GSSAPI_KEY_TAB_PATH: /etc/newrelic-infra/kafka.keytab
          SASL_GSSAPI_KERBEROS_CONFIG_PATH: /etc/krb5.conf
          SASL_GSSAPI_DISABLE_FAST_NEGOTIATION: false
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="zookeeper-topic-bucket"
    title="Grupo de temas de descubrimiento de Zookeeper"
  >
    Esta configuración recopila la colección de temas divididos métrica entre 3 instancias diferentes:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster1
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "host1", "port": 2181}]'
          ZOOKEEPER_AUTH_SECRET: "username:password"
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password
          TOPIC_MODE: regex
          TOPIC_REGEX: 'topic\d+'
          TOPIC_BUCKET: '1/3'
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster2
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "host2", "port": 2181}]'
          ZOOKEEPER_AUTH_SECRET: "username:password"
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password
          TOPIC_MODE: regex
          TOPIC_REGEX: 'topic\d+'
          TOPIC_BUCKET: '2/3'
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
      - name: nri-kafka
        env:
          METRICS: true
          CLUSTER_NAME: testcluster3
          KAFKA_VERSION: "1.0.0"
          AUTODISCOVER_STRATEGY: zookeeper
          ZOOKEEPER_HOSTS: '[{"host": "host3", "port": 2181}]'
          ZOOKEEPER_AUTH_SECRET: "username:password"
          ZOOKEEPER_PATH: "/kafka-root"
          DEFAULT_JMX_USER: username
          DEFAULT_JMX_PASSWORD: password
          TOPIC_MODE: regex
          TOPIC_REGEX: 'topic\d+'
          TOPIC_BUCKET: '3/3'
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="java-consumer-producer"
    title="Consumidor y productor de Java"
  >
    Esto da un ejemplo para recolectar métrica JMX de consumidores y productores de Java:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          METRICS: "true"
          CLUSTER_NAME: "testcluster3"
          PRODUCERS: '[{"host": "localhost", "port": 24, "username": "me", "password": "secret"}]'
          CONSUMERS: '[{"host": "localhost", "port": 24, "username": "me", "password": "secret"}]'
          DEFAULT_JMX_HOST: "localhost"
          DEFAULT_JMX_PORT: "9999"
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>

  <Collapser
    id="consumer-offset"
    title="Compensación del consumidor"
  >
    Esta configuración recopila el desplazamiento métrico del consumidor y el Inventario para el clúster:

    ```yml
    integrations:
      - name: nri-kafka
        env:
          CONSUMER_OFFSET: true
          CLUSTER_NAME: testcluster3
          AUTODISCOVER_STRATEGY: bootstrap
          BOOTSTRAP_BROKER_HOST: localhost
          BOOTSTRAP_BROKER_KAFKA_PORT: 9092
          BOOTSTRAP_BROKER_KAFKA_PROTOCOL: PLAINTEXT
          # A regex pattern that matches the consumer groups to collect metrics from
          CONSUMER_GROUP_REGEX: '.*'
        interval: 15s
        labels:
          env: production
          role: kafka
        inventory_source: config/kafka
    ```
  </Collapser>
</CollapserGroup>

## Opciones de configuración para la integración. [#config-options]

Para obtener más información sobre cómo encontrar y utilizar sus datos, consulte [los ajustes de configuración de Kafka](/docs/infrastructure/host-integrations/host-integrations-list/kafka/kafka-config).

## Buscar y utilizar datos [#find-and-use]

Los datos de este servicio se informan a un [dashboard de integración](/docs/integrations/new-relic-integrations/getting-started/infrastructure-integration-dashboards-charts).

Los datos de Kafka se adjuntan a los siguientes [tipos de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic):

* [`KafkaBrokerSample`](#broker-sample)
* [`KafkaTopicSample`](#topic-sample)
* [`KafkaProducerSample`](#producer-sample)
* [`KafkaConsumerSample`](#consumer-sample)
* [`KafkaOffsetSample`](#offset-sample)

Puede [consultar estos datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) para fines de resolución de problemas o para crear gráficos y paneles.

Para obtener más información sobre cómo encontrar y utilizar sus datos, consulte cómo [entender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Métrica recogida por la integración [#metrics]

La integración Kafka recoge la siguiente métrica. Cada nombre de métrica tiene como prefijo un indicador de categoría y un punto, como `broker.` o `consumer.`.

<CollapserGroup>
  <Collapser
    id="broker-sample"
    title="Evento KafkaBrokerSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            Métrica
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `broker.bytesWrittenToTopicPerSecond`
          </td>

          <td>
            Número de bytes escritos en un tema por el corredor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `broker.IOInPerSecond`
          </td>

          <td>
            Red de E/S en intermediarios en el clúster en bytes por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `broker.IOOutPerSecond`
          </td>

          <td>
            E/S de red de los intermediarios del clúster en bytes por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `broker.logFlushPerSecond`
          </td>

          <td>
            Log la tasa de descarga.
          </td>
        </tr>

        <tr>
          <td>
            `broker.messagesInPerSecond`
          </td>

          <td>
            Mensajes entrantes por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `follower.requestExpirationPerSecond`
          </td>

          <td>
            Tasa de vencimiento de solicitudes de seguidores en desalojos por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `net.bytesRejectedPerSecond`
          </td>

          <td>
            Bytes rechazados por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `replication.isrExpandsPerSecond`
          </td>

          <td>
            Tasa de réplicas que se unen al grupo ISR.
          </td>
        </tr>

        <tr>
          <td>
            `replication.isrShrinksPerSecond`
          </td>

          <td>
            Tasa de réplicas que salen del grupo ISR.
          </td>
        </tr>

        <tr>
          <td>
            `replication.leaderElectionPerSecond`
          </td>

          <td>
            Tasa de elección de líder.
          </td>
        </tr>

        <tr>
          <td>
            `replication.uncleanLeaderElectionPerSecond`
          </td>

          <td>
            Tasa de elección de líderes impuros.
          </td>
        </tr>

        <tr>
          <td>
            `replication.unreplicatedPartitions`
          </td>

          <td>
            Número de particiones no replicadas.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeFetch`
          </td>

          <td>
            Tiempo promedio por solicitud de recuperación en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeMetadata`
          </td>

          <td>
            Tiempo promedio de solicitud de metadatos en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeMetadata99Percentile`
          </td>

          <td>
            Tiempo para solicitudes de metadatos para el percentil 99 en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeOffset`
          </td>

          <td>
            Tiempo promedio para una solicitud de compensación en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeOffset99Percentile`
          </td>

          <td>
            Tiempo para solicitudes de compensación del percentil 99 en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeProduceRequest`
          </td>

          <td>
            Tiempo promedio para una solicitud de producto en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeUpdateMetadata`
          </td>

          <td>
            Tiempo promedio para que una solicitud actualice metadatos en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.avgTimeUpdateMetadata99Percentile`
          </td>

          <td>
            Tiempo para solicitudes de actualización de metadatos para el percentil 99 en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.clientFetchesFailedPerSecond`
          </td>

          <td>
            Errores de solicitud de recuperación del cliente por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `request.fetchTime99Percentile`
          </td>

          <td>
            Tiempo para solicitudes de recuperación del percentil 99 en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `request.handlerIdle`
          </td>

          <td>
            Fracción promedio de tiempo que los subprocesos del controlador de solicitudes están inactivos.
          </td>
        </tr>

        <tr>
          <td>
            `request.produceRequestsFailedPerSecond`
          </td>

          <td>
            Solicitudes de producción fallidas por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `request.produceTime99Percentile`
          </td>

          <td>
            Tiempo para solicitudes de productos agrícolas para el percentil 99.
          </td>
        </tr>

        <tr>
          <td>
            `topic.diskSize`
          </td>

          <td>
            Tamaño del disco de temas por agente y por tema. Sólo está presente si `COLLECT_TOPIC_SIZE` está habilitado.
          </td>
        </tr>

        <tr>
          <td>
            `topic.offset`
          </td>

          <td>
            Compensación de temas por corredor y por tema. Sólo está presente si `COLLECT_TOPIC_OFFSET` está habilitado.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="consumer-sample"
    title="Evento KafkaConsumerSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            Métrica
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `consumer.avgFetchSizeInBytes`
          </td>

          <td>
            Número promedio de bytes recuperados por solicitud para un tema específico.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.avgRecordConsumedPerTopic`
          </td>

          <td>
            Número promedio de registros en cada solicitud para un tema específico.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.avgRecordConsumedPerTopicPerSecond`
          </td>

          <td>
            Número promedio de registros consumidos por segundo para un tema específico en registros por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.bytesInPerSecond`
          </td>

          <td>
            Bytes del consumidor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.fetchPerSecond`
          </td>

          <td>
            La velocidad mínima a la que el consumidor envía solicitudes de recuperación por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.maxFetchSizeInBytes`
          </td>

          <td>
            Número máximo de bytes recuperados por solicitud para un tema específico.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.maxLag`
          </td>

          <td>
            Retraso máximo del consumidor.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.messageConsumptionPerSecond`
          </td>

          <td>
            Tasa de consumo de mensajes del consumidor en mensajes por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.offsetKafkaCommitsPerSecond`
          </td>

          <td>
            Tasa de compromisos de compensación con Kafka en compromisos por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.offsetZooKeeperCommitsPerSecond`
          </td>

          <td>
            Tasa de compromisos de compensación con ZooKeeper en escrituras por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.requestsExpiredPerSecond`
          </td>

          <td>
            Tasa de vencimiento retrasado de la solicitud del consumidor en desalojos por segundo.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="producer-sample"
    title="Evento KafkaProducerSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            Métrica
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `producer.ageMetadataUsedInMilliseconds`
          </td>

          <td>
            Antigüedad en segundos desde que se utilizan los metadatos del productor actual.
          </td>
        </tr>

        <tr>
          <td>
            `producer.availableBufferInBytes`
          </td>

          <td>
            Cantidad total de memoria intermedia que no se utiliza en bytes.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgBytesSentPerRequestInBytes`
          </td>

          <td>
            Número promedio de bytes enviados por partición y por solicitud.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgCompressionRateRecordBatches`
          </td>

          <td>
            Tasa de compresión promedio de lotes de registros.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgRecordAccumulatorsInMilliseconds`
          </td>

          <td>
            Tiempo promedio en lotes de registros en ms transcurridos en el acumulador de registros.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgRecordSizeInBytes`
          </td>

          <td>
            Tamaño promedio de registro en bytes.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgRecordsSentPerSecond`
          </td>

          <td>
            Número promedio de registros enviados por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgRecordsSentPerTopicPerSecond`
          </td>

          <td>
            Número promedio de registros enviados por segundo para un tema.
          </td>
        </tr>

        <tr>
          <td>
            `producer.AvgRequestLatencyPerSecond`
          </td>

          <td>
            Latencia de solicitud promedio del productor.
          </td>
        </tr>

        <tr>
          <td>
            `producer.avgThrottleTime`
          </td>

          <td>
            Tiempo promedio que un corredor limitó una solicitud en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `producer.bufferMemoryAvailableInBytes`
          </td>

          <td>
            Cantidad máxima de memoria intermedia que el cliente puede utilizar en bytes.
          </td>
        </tr>

        <tr>
          <td>
            `producer.bufferpoolWaitTime`
          </td>

          <td>
            Facción de tiempo que un agregado espera para la asignación de espacio.
          </td>
        </tr>

        <tr>
          <td>
            `producer.bytesOutPerSecond`
          </td>

          <td>
            Bytes del productor por segundo de salida.
          </td>
        </tr>

        <tr>
          <td>
            `producer.compressionRateRecordBatches`
          </td>

          <td>
            Tasa de compresión promedio de lotes de registros para un tema.
          </td>
        </tr>

        <tr>
          <td>
            `producer.iOWaitTime`
          </td>

          <td>
            Tiempo de espera de I/O del productor en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `producer.maxBytesSentPerRequestInBytes`
          </td>

          <td>
            Número máximo de bytes enviados por partición y por solicitud.
          </td>
        </tr>

        <tr>
          <td>
            `producer.maxRecordSizeInBytes`
          </td>

          <td>
            Tamaño máximo de registro en bytes.
          </td>
        </tr>

        <tr>
          <td>
            `producer.maxRequestLatencyInMilliseconds`
          </td>

          <td>
            Latencia máxima de solicitud en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `producer.maxThrottleTime`
          </td>

          <td>
            Tiempo máximo que un corredor limitó una solicitud en milisegundos.
          </td>
        </tr>

        <tr>
          <td>
            `producer.messageRatePerSecond`
          </td>

          <td>
            Mensajes del productor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `producer.responsePerSecond`
          </td>

          <td>
            Número de respuestas del productor por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `producer.requestPerSecond`
          </td>

          <td>
            Número de solicitudes de productores por segundo.
          </td>
        </tr>

        <tr>
          <td>
            `producer.requestsWaitingResponse`
          </td>

          <td>
            Número actual de solicitudes en vuelo en espera de respuesta.
          </td>
        </tr>

        <tr>
          <td>
            `producer.threadsWaiting`
          </td>

          <td>
            Número de subprocesos de usuario bloqueados esperando que la memoria intermedia ponga en cola sus registros.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="topic-sample"
    title="Evento KafkaTopicSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            Métrica
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `topic.partitionsWithNonPreferredLeader`
          </td>

          <td>
            Número de particiones por tema que no están dirigidas por su réplica preferida.
          </td>
        </tr>

        <tr>
          <td>
            `topic.respondMetaData`
          </td>

          <td>
            Número de temas que responden a solicitudes de metadatos.
          </td>
        </tr>

        <tr>
          <td>
            `topic.retentionSizeOrTime`
          </td>

          <td>
            Si una partición se conserva por tamaño o por tamaño y tiempo. Un valor de 0 = tiempo y un valor de 1 = tamaño y tiempo.
          </td>
        </tr>

        <tr>
          <td>
            `topic.underReplicatedPartitions`
          </td>

          <td>
            Número de particiones por tema que no se replican lo suficiente.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="offset-sample"
    title="Evento KafkaOffsetSample"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "350px" }}>
            Métrica
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `consumer.offset`
          </td>

          <td>
            El último consumo consumido compensado en una partición por el grupo de consumidores.
          </td>
        </tr>

        <tr>
          <td>
            `consumer.lag`
          </td>

          <td>
            La diferencia entre la marca máxima de un corredor y la compensación del consumidor (`consumer.hwm` - `consumer.offset`).
          </td>
        </tr>

        <tr>
          <td>
            `consumer.hwm`
          </td>

          <td>
            El desplazamiento del último mensaje escrito en una partición (marca de límite superior).
          </td>
        </tr>

        <tr>
          <td>
            `consumer.totalLag`
          </td>

          <td>
            La suma de los retrasos entre las particiones consumidas por un consumidor.
          </td>
        </tr>

        <tr>
          <td>
            `consumerGroup.totalLag`
          </td>

          <td>
            La suma de los retrasos en todas las particiones consumidas por un `consumerGroup`.
          </td>
        </tr>

        <tr>
          <td>
            `consumerGroup.maxLag`
          </td>

          <td>
            El retraso máximo en todas las particiones consumidas por un `consumerGroup`.
          </td>
        </tr>

        <tr>
          <td>
            `consumerGroup.activeConsumers`
          </td>

          <td>
            El número de consumidores activos en este `consumerGroup`.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
