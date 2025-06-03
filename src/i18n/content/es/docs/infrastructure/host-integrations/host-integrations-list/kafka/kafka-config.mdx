---
title: Ajustes de configuración de integración de Kafka
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
  - Advanced configuration
metaDescription: Advanced configuration New Relic's Kafka integration.
freshnessValidatedDate: never
translationType: machine
---

Esta integración es software de código abierto. Eso significa que puedes [explorar su código fuente](https://github.com/newrelic/nri-kafka) y enviar mejoras o crear tu propia bifurcación y compilarla.

## Etiquetas y atributos personalizados [#labels]

Las variables de entorno se pueden utilizar para controlar los ajustes de configuración, como su <InlinePopover type="licenseKey"/>, y luego se pasan al agente de infraestructura. Para obtener instrucciones sobre cómo utilizar esta característica, consulte [Configurar el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#passthrough).

Puedes decorar aún más tu métrica usando etiquetas. Las etiquetas le permiten agregar valor de pares principales de atributos a su métrica que luego puede usar para consultar, filtrar o agrupar su métrica.<br/> Nuestro archivo de configuración de muestra predeterminado incluye ejemplos de etiquetas pero, como no son obligatorias, puede eliminar, modificar o agregar nuevas de su elección.

```yaml
  labels:
    env: production
    role: kafka
```

Para obtener más información sobre la estructura general de la configuración de integración en el host, consulte la [configuración](/docs/integrations/integrations-sdk/file-specifications/host-integration-configuration-overview).

## Datos de inventario [#inventory]

La integración de Kafka captura el agente no predeterminado y el parámetro de configuración de temas, y recopila los esquemas de partición de temas según lo informado por ZooKeeper. Los datos están disponibles en la [página UI de usuario del inventario](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure) en la fuente `config/kafka`.

## Configurar la colección KafkaBrokerSample y KafkaTopicSample [#broker-collection]

La integración Kafka recopila información tanto métrica como de inventario. Consulte la columna <DNT>**Applies To**</DNT> a continuación para ver la configuración disponible para cada colección:

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **CLUSTER_NAME**
        </DNT>
      </td>

      <td>
        Nombre definido por el usuario para identificar de forma única el clúster que se está monitoreando. <DNT>**Required**</DNT>.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KAFKA_VERSION**
        </DNT>
      </td>

      <td>
        La versión del broker Kafka al que te estás conectando, utilizada para configurar las versiones óptimas de API. Debe coincidir (o ser inferior) a la versión del broker.

        Es posible que a las versiones anteriores a 1.0.0 les falte alguna característica.

        <DNT>**Note that if the broker binary name is kafka_2.12-2.7.0 the Kafka api version to be used is 2.7.0, the preceding 2.12 is the Scala language version**</DNT>.
      </td>

      <td>
        1.0.0
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **AUTODISCOVER_STRATEGY**
        </DNT>
      </td>

      <td>
        el método de descubrimiento de corredores. Las opciones son `zookeeper` o `bootstrap`.
      </td>

      <td>
        zookeeper
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        Establezca en `true` para habilitar la recopilación solo métrica.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    <tr>
      <td>
        <DNT>
          **INVENTORY**
        </DNT>
      </td>

      <td>
        Configúrelo en `true` para habilitar la recopilación solo de inventario.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

## Argumentos de descubrimiento automático de Zookeeper [#zookeeper-discovery]

Estos solo son relevantes cuando la opción `autodiscover_strategy` está configurada en `zookeeper`.

' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_HOSTS**
        </DNT>
      </td>

      <td>
        La lista de hosts de Apache ZooKeeper (en formato JSON) que deben conectarse.

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SCHEME**
        </DNT>
      </td>

      <td>
        El esquema de autenticación de ZooKeeper que se utiliza para conectarse. Actualmente, el único valor admitido es `digest`. Si se omite, no se utiliza ninguna autenticación.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SECRET**
        </DNT>
      </td>

      <td>
        El secreto de autenticación de ZooKeeper que se utiliza para conectarse. Debe tener el formato `username:password`. Solo es necesario si se especifica `zookeeper_auth_scheme` .
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_PATH**
        </DNT>
      </td>

      <td>
        El nodo Zookeeper bajo el cual reside la configuración de Kafka. El valor predeterminado es `/`.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **PREFERRED_LISTENER**
        </DNT>
      </td>

      <td>
        Utilice un oyente específico para conectarse a un corredor. Si no está configurado, se utiliza el primer oyente que pasa una conexión de prueba exitosa. Los valores admitidos son `PLAINTEXT`, `SASL_PLAINTEXT`, `SSL` y `SASL_SSL`.

        **Tenga en cuenta que los protocolos `SASL_*` solo admiten la autenticación Kerberos (GSSAPI).**
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## Argumentos de descubrimiento del corredor Bootstrap [#bootstrap-discovery]

Estos solo son relevantes cuando la opción `autodiscover_strategy` está configurada en`bootstrap`

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_HOST**
        </DNT>
      </td>

      <td>
        El anfitrión del corredor arrancar.

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PORT**
        </DNT>
      </td>

      <td>
        El puerto de Kafka para el corredor de Arrancar.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PROTOCOL**
        </DNT>
      </td>

      <td>
        El protocolo que se utilizará para conectarse al corredor de arrancar. Los valores admitidos son `PLAINTEXT`, `SASL_PLAINTEXT`, `SSL` y `SASL_SSL`.

        **Tenga en cuenta que los protocolos `SASL_*` solo admiten la autenticación Kerberos (GSSAPI).**
      </td>

      <td>
        PLAINTEXT
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PORT**
        </DNT>
      </td>

      <td>
        El puerto JMX que se utilizará para la recopilación en cada intermediario del clúster.

        <DNT>
          **Note that all discovered brokers should have JMX active on this port**
        </DNT>
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_USER**
        </DNT>
      </td>

      <td>
        El usuario JMX que se utilizará para la recopilación en cada intermediario del clúster.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña JMX que se utilizará para la recopilación en cada intermediario del clúster.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## Opciones JMX [#jmx]

Estas opciones se aplican a todas las conexiones JMX de la instancia.

' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **KEY_STORE**
        </DNT>
      </td>

      <td>
        La ruta del archivo del almacén de claves que contiene el certificado SSL del cliente JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEY_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña para el almacén de claves SSL JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE**
        </DNT>
      </td>

      <td>
        La ruta del archivo del almacén de claves de confianza que contiene el certificado SSL del servidor JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña para el almacén de confianza JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_USER**
        </DNT>
      </td>

      <td>
        El usuario predeterminado que se conecta al host JMX para recolectar métrica. Si se omite el campo de nombre de usuario para un host JMX, se utilizará este valor.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña predeterminada para conectarse al host JMX. Si se omite el campo de contraseña para un host JMX, se utilizará este valor.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        El tiempo de espera de la consulta JMX individual en milisegundos.
      </td>

      <td>
        10000
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## Opciones de conexión TLS del corredor [#broker-tls]

Necesita estas opciones si el protocolo del corredor es `SSL` o `SASL_SSL`.

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **TLS_CA_FILE**
        </DNT>
      </td>

      <td>
        El archivo de autoridad de certificación para escuchas SSL y SASL_SSL, en formato PEM.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TLS_CERT_FILE**
        </DNT>
      </td>

      <td>
        El archivo de certificado de cliente para escuchas SSL y SASL_SSL, en formato PEM.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TLS_KEY_FILE**
        </DNT>
      </td>

      <td>
        El archivo de clave de cliente para los oyentes SSL y SASL_SSL, en formato PEM.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TLS_INSECURE_SKIP_VERIFY**
        </DNT>
      </td>

      <td>
        Omita la verificación de la cadena de certificados y el nombre de host del servidor.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## Opciones de conexión de Broker SASL y Kerberos [#broker-sasl-kerberos]

Necesita estas opciones si el protocolo del corredor es `SASL_PLAINTEXT` o `SASL_SSL`.

' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **SASL_MECHANISM**
        </DNT>
      </td>

      <td>
        El tipo de autenticación SASL que se utilizará. Las opciones admitidas son `SCRAM-SHA-512`, `SCRAM-SHA-256`, `PLAIN` y `GSSAPI`.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_USERNAME**
        </DNT>
      </td>

      <td>
        Se requiere nombre de usuario SASL con los mecanismos PLAIN y SCRAM.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_PASSWORD**
        </DNT>
      </td>

      <td>
        Se requiere contraseña SASL con los mecanismos PLAIN y SCRAM.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_REALM**
        </DNT>
      </td>

      <td>
        Se requiere dominio Kerberos con el mecanismo GSSAPI.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_SERVICE_NAME**
        </DNT>
      </td>

      <td>
        Nombre del servicio Kerberos requerido con el mecanismo GSSAPI.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_USERNAME**
        </DNT>
      </td>

      <td>
        Se requiere el nombre de usuario de Kerberos con el mecanismo GSSAPI.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_KEY_TAB_PATH**
        </DNT>
      </td>

      <td>
        Ruta de la pestaña de claves Kerberos requerida con el mecanismo GSSAPI.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_KERBEROS_CONFIG_PATH**
        </DNT>
      </td>

      <td>
        Ruta de configuración de Kerberos requerida con el mecanismo GSSAPI.
      </td>

      <td>
        /etc/krb5.conf
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **SASL_GSSAPI_DISABLE_FAST_NEGOTIATION**
        </DNT>
      </td>

      <td>
        Deshabilite la negociación RÁPIDA.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## Filtrado de colección de corredores [#broker-filteri]

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **LOCAL_ONLY_COLLECTION**
        </DNT>
      </td>

      <td>
        Recoge sólo la métrica relacionada con el broker arrancar configurado. Solo se usa si `autodiscover_strategy` es `bootstrap`.

        <DNT>
          **Environments that use discovery (such as Kubernetes) must be set to true because othwerwise brokers will be discovered twice: By the integration, and by the discovery mechanism, leading to duplicate data.**
        </DNT>

        <DNT>
          **Note that activating this flag will skip KafkaTopicSample collection**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_MODE**
        </DNT>
      </td>

      <td>
        Determina cuántos temas recopilamos. Las opciones son `all`, `none`, `list` o `regex`.
      </td>

      <td>
        ninguno
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_LIST**
        </DNT>
      </td>

      <td>
        Matriz JSON de nombres de temas a monitor. Solo tiene efecto si `topic_mode` se establece en `list`.
      </td>

      <td>
        \[]
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_REGEX**
        </DNT>
      </td>

      <td>
        Patrón de expresiones regulares que coincide con los nombres de los temas a monitor. Solo tiene efecto si `topic_mode` se establece en `regex`.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TOPIC_BUCKET**
        </DNT>
      </td>

      <td>
        Se utiliza para dividir la colección de temas en varias instancias. Debe tener el formato `<bucket number>/<number of buckets>`.
      </td>

      <td>
        1/1
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **COLLECT_TOPIC_SIZE**
        </DNT>
      </td>

      <td>
        Recopile la métrica Tamaño del tema. Las opciones son `true` o `false`, el valor predeterminado es `false`.

        <DNT>
          **This is a resource-intensive metric to collect, especially against many topics.**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **COLLECT_TOPIC_OFFSET**
        </DNT>
      </td>

      <td>
        Recopile la métrica Desplazamiento del tema. Las opciones son `true` o `false`, el valor predeterminado es `false`.

        <DNT>
          **This is a resource-intensive metric to collect, especially against many topics.**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## Configurar la colección KafkaConsumerSample y KafkaProducerSample [#KafkaConsumerSample-collection]

La integración de Kafka recopila información tanto métrica (<strong>M</strong>) como de Inventario (<strong>I</strong>). Consulte la columna <DNT>**Applies To**</DNT> a continuación para encontrar qué configuraciones se pueden usar para cada colección específica:

' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **CLUSTER_NAME**
        </DNT>
      </td>

      <td>
        Nombre definido por el usuario para identificar de forma única el clúster que se está monitoreando. <DNT>**Required**</DNT>.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **PRODUCERS**
        </DNT>
      </td>

      <td>
        Productores para cobrar. Para cada productor se pueden especificar `name`, `hostname`, `port`, `username` y `password` en formato JSON. `name` es el nombre del productor tal como aparece en Kafka. Si no se establece, se recopilará la métrica de todos los productores en el host:port. `host`, `port`, `username` y `password` son las configuraciones JMX opcionales y usan la predeterminada si no se especifica. También es posible establecer el valor `default` para dejar que `name` no esté definido y usar los valores predeterminados para `host`, `port`, `username` y `password`. Requerido para producir KafkaProducerSample.

        <DNT>
          **Examples:**
        </DNT>

        `[{"host": "localhost", "port": 24, "username": "me", "password": "secret"}]`

        `[{"name": "myProducer", "host": "localhost", "port": 24, "username": "me", "password": "secret"}]`
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMERS**
        </DNT>
      </td>

      <td>
        Consumidor para cobrar. Para cada consumidor se pueden especificar `name`, `hostname`, `port`, `username` y `password` en formato JSON. `name` es el nombre del consumidor tal como aparece en Kafka. Si no se establece, se recopilará la métrica de todos los consumidores en el host:port. `host`, `port`, `username` y `password` son las configuraciones JMX opcionales y usan la predeterminada si no se especifica. También es posible establecer el valor `default` para dejar que `name` no esté definido y usar los valores predeterminados para `host`, `port`, `username` y `password`. Requerido para producir KafkaConsumerSample.

        <DNT>
          **Examples:**
        </DNT>

        `[{"host": "localhost", "port": 24, "username": "me", "password": "secret"}]`

        `[{"name": "myConsumer", "host": "localhost", "port": 24, "username": "me", "password": "secret"}]`
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_HOST**
        </DNT>
      </td>

      <td>
        El host predeterminado para recopilar JMX métrica. Si el campo host se omite en una configuración de productor o consumidor, se utilizará este valor.
      </td>

      <td>
        host local
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PORT**
        </DNT>
      </td>

      <td>
        El puerto predeterminado para recolectar JMX métrica. Si el campo de puerto se omite en una configuración de productor o consumidor, se utilizará este valor.
      </td>

      <td>
        9999
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_USER**
        </DNT>
      </td>

      <td>
        El usuario predeterminado que se conecta al host JMX para recolectar métrica. Si el campo de nombre de usuario se omite en una configuración de productor o consumidor, se utilizará este valor.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña predeterminada para conectarse al host JMX. Si el campo de contraseña se omite en una configuración de productor o consumidor, se utilizará este valor.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        Establezca en `true` para habilitar la recopilación solo métrica.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    <tr>
      <td>
        <DNT>
          **INVENTORY**
        </DNT>
      </td>

      <td>
        Configúrelo en `true` para habilitar la recopilación solo de inventario.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

#### JMX SSL y opciones de tiempo de espera

Estas opciones se aplican a todas las conexiones JMX de la instancia.

' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **KEY_STORE**
        </DNT>
      </td>

      <td>
        La ruta del archivo del almacén de claves que contiene el certificado SSL del cliente JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEY_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña para el almacén de claves SSL JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE**
        </DNT>
      </td>

      <td>
        La ruta del archivo del almacén de claves de confianza que contiene el certificado SSL del servidor JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña para el almacén de confianza JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        El tiempo de espera de la consulta JMX individual en milisegundos.
      </td>

      <td>
        10000
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## Configurar la colección KafkaOffsetSample [#KafkaOffsetSample-collection]

La integración Kafka recopila información tanto métrica como de inventario. Consulte la columna <DNT>**Applies To**</DNT> a continuación para encontrar qué configuraciones se pueden usar para cada colección específica:

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **CLUSTER_NAME**
        </DNT>
      </td>

      <td>
        Nombre definido por el usuario para identificar de forma única el clúster que se está monitoreando. <DNT>**Required**</DNT>.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KAFKA_VERSION**
        </DNT>
      </td>

      <td>
        La versión del broker Kafka al que te estás conectando, utilizada para configurar las versiones óptimas de API. Debe coincidir (o ser inferior) a la versión del broker.

        Es posible que a las versiones anteriores a 1.0.0 les falte alguna característica.

        <DNT>**Note that if the broker binary name is kafka_2.12-2.7.0 the Kafka api version to be used is 2.7.0, the preceding 2.12 is the Scala language version**</DNT>.
      </td>

      <td>
        1.0.0
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **AUTODISCOVER_STRATEGY**
        </DNT>
      </td>

      <td>
        el método de descubrimiento de corredores. Las opciones son `zookeeper` o `bootstrap`.
      </td>

      <td>
        zookeeper
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMER_OFFSET**
        </DNT>
      </td>

      <td>
        Complete los datos de compensación del consumidor en KafkaOffsetSample si está configurado en verdadero.

        <DNT>
          **Note that this option will skip Broker/Consumer/Producer collection and only collect KafkaOffsetSample**
        </DNT>
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMER_GROUP_REGEX**
        </DNT>
      </td>

      <td>
        Patrón de expresión regular que coincide con los grupos de consumidores para los que recopilar estadísticas de compensación. Esto se limita a recopilar estadísticas para 300 grupos de consumidores.

        Nota: Esta opción debe configurarse cuando CONSUMER_OFFSET es verdadero.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **INACTIVE_CONSUMER_GROUP_OFFSET**
        </DNT>
      </td>

      <td>
        Recopila métricas compensadas de grupos de consumidores sin ningún CONSUMER_OFFSET activo, requiere que el consumidor esté configurado en verdadero.
      </td>

      <td>
        false
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONSUMER_GROUP_OFFSET_BY_TOPIC**
        </DNT>
      </td>

      <td>
        Activa una agregación extra métrica para consumerGroup por tema. requiere que el CONSUMER_OFFSET esté configurado en verdadero.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **METRICS**
        </DNT>
      </td>

      <td>
        Establezca en `true` para habilitar la recopilación solo métrica.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    <tr>
      <td>
        <DNT>
          **INVENTORY**
        </DNT>
      </td>

      <td>
        Configúrelo en `true` para habilitar la recopilación solo de inventario.
      </td>

      <td>
        false
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

## Argumentos de descubrimiento automático de Zookeeper [#zookeeper-autodiscovery]

Esto solo es relevante cuando la opción `autodiscover_strategy` está configurada en `zookeeper`.

' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_HOSTS**
        </DNT>
      </td>

      <td>
        La lista de hosts de Apache ZooKeeper (en formato JSON) que deben conectarse.

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        \[]
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SCHEME**
        </DNT>
      </td>

      <td>
        El esquema de autenticación de ZooKeeper que se utiliza para conectarse. Actualmente, el único valor admitido es `digest`. Si se omite, no se utiliza ninguna autenticación.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_AUTH_SECRET**
        </DNT>
      </td>

      <td>
        El secreto de autenticación de ZooKeeper que se utiliza para conectarse. Debe tener el formato `username:password`. Solo es necesario si se especifica `zookeeper_auth_scheme` .
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **ZOOKEEPER_PATH**
        </DNT>
      </td>

      <td>
        El nodo Zookeeper bajo el cual reside la configuración de Kafka. El valor predeterminado es `/`.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **PREFERRED_LISTENER**
        </DNT>
      </td>

      <td>
        Utilice un oyente específico para conectarse a un corredor. Si no está configurado, se utiliza el primer oyente que pasa una conexión de prueba exitosa. Los valores admitidos son `PLAINTEXT`, `SASL_PLAINTEXT`, `SSL` y `SASL_SSL`.

        **Tenga en cuenta que los protocolos `SASL_*` solo admiten la autenticación Kerberos (GSSAPI).**
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## Argumentos de descubrimiento del corredor Bootstrap [#bootstrap-broker]

Esto solo es relevante cuando la opción `autodiscover_strategy` está configurada en `bootstrap`.

' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_HOST**
        </DNT>
      </td>

      <td>
        El anfitrión del corredor arrancar.

        <DNT>
          **If `CONSUMER_OFFSET` is set to `false` `KafkaBrokerSamples` and `KafkaTopicSamples` will be collected.**
        </DNT>
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PORT**
        </DNT>
      </td>

      <td>
        El puerto de Kafka para el corredor de Arrancar.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_KAFKA_PROTOCOL**
        </DNT>
      </td>

      <td>
        El protocolo que se utilizará para conectarse al corredor de arrancar. Los valores admitidos son `PLAINTEXT`, `SASL_PLAINTEXT`, `SSL` y `SASL_SSL`.

        **Tenga en cuenta que los protocolos `SASL_*` solo admiten la autenticación Kerberos (GSSAPI).**
      </td>

      <td>
        PLAINTEXT
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PORT**
        </DNT>
      </td>

      <td>
        El puerto JMX que se utilizará para la recopilación en cada intermediario del clúster.

        <DNT>
          **Note that all discovered brokers should have JMX active on this port**
        </DNT>
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_USER**
        </DNT>
      </td>

      <td>
        El usuario JMX que se utilizará para la recopilación en cada intermediario del clúster.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **BOOTSTRAP_BROKER_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña JMX que se utilizará para la recopilación en cada intermediario del clúster.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## JMX SSL y opciones de tiempo de espera [#jmx-ssl-timeout]

Estos se aplican a todas las conexiones JMX en una instancia.

' ' ' ' ' ' ' ' ' ' ' '

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>

      <th>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **KEY_STORE**
        </DNT>
      </td>

      <td>
        La ruta del archivo del almacén de claves que contiene el certificado SSL del cliente JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **KEY_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña para el almacén de claves SSL JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE**
        </DNT>
      </td>

      <td>
        La ruta del archivo del almacén de claves de confianza que contiene el certificado SSL del servidor JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TRUST_STORE_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña para el almacén de confianza JMX.
      </td>

      <td>
        N/A
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_USER**
        </DNT>
      </td>

      <td>
        El usuario predeterminado que se conecta al host JMX para recolectar métrica. Si se omite el campo de nombre de usuario para un host JMX, se utilizará este valor.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **DEFAULT_JMX_PASSWORD**
        </DNT>
      </td>

      <td>
        La contraseña predeterminada para conectarse al host JMX. Si se omite el campo de contraseña para un host JMX, se utilizará este valor.
      </td>

      <td>
        admin
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **TIMEOUT**
        </DNT>
      </td>

      <td>
        El tiempo de espera de la consulta JMX individual en milisegundos.
      </td>

      <td>
        10000
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>
  </tbody>
</table>

## Resolución de problemas [#troubleshooting]

<CollapserGroup>
  <Collapser
    id="duplicate-info"
    title="Se reportan datos duplicados"
  >
    Para agentes monitoreo productores y/o consumidores, y que tienen `Topic mode` configurado en `All`:, puede haber un problema de que se reporten datos duplicados. Para detener los datos duplicados: asegúrese de que la [opción de configuración](#config) `Collect topic size` esté establecida en falso.
  </Collapser>

  ' '

  <Collapser
    id="zookeeper-node-not-found"
    title="La integración está registrando errores 'zk: nodo no encontrado'"
  >
    Asegúrese de que `zookeeper_path` esté configurado correctamente en el [archivo de configuración](#config).
  </Collapser>

  <Collapser
    id="jmx-connection-errors"
    title="Errores de conexión JMX"
  >
    La integración de Kafka utiliza una herramienta auxiliar JMX llamada `nrjmx` para recuperar la métrica JMX de los corredores, consumidores y productores. JMX debe habilitarse y configurarse en todos los intermediarios del clúster. Además, es necesario ajustar el firewall para permitir conexiones desde el host que ejecuta la integración a los brokers a través del puerto JMX.

    Para verificar si JMX está configurado correctamente, ejecute el siguiente comando para cada corredor desde la máquina que ejecuta la integración de Kafka. Reemplace las variables `PORT`, `USERNAME` y `PASSWORD` con la configuración JMX correspondiente para los intermediarios:

    ```shell
    echo "*:*" | nrjmx -hostname MY_HOSTNAME -port MY_PORT -v -username MY_USERNAME -password MY_PASSWORD
    ```

    El comando debería generar la salida mostrando una larga serie de métricas sin ningún error.
  </Collapser>

  <Collapser
    id="kerberos-authentication"
    title="Falla la autenticación Kerberos"
  >
    La integración podría mostrar un error como el siguiente:

    ```shell
    KRB Error: (6) KDC_ERR_C_PRINCIPAL_UNKNOWN Client not found in Kerberos database
    ```

    Verifique la tabla de claves con el comando kinit. Reemplace los campos resaltados con sus valores:

    ```shell
    $ kinit -k -t KEY_TAB_PATH USERNAME
    ```

    Si la combinación de nombre de usuario/tabla de claves es correcta, el comando anterior debería finalizar sin imprimir ningún error.

    Verifique el reino usando el comando klist:

    ```shell
    $ klist |grep "Default principal:"
    ```

    Debería ver algo como esto:

    ```shell
    Default principal: johndoe@a_realm_name
    ```

    Verifique que el nombre de usuario impreso y el dominio coincidan con los parámetros `sasl_gssapi_realm` y `sasl_gssapi_username` en la configuración de integración.
  </Collapser>
</CollapserGroup>
