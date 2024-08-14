---
title: APM agente seguridad de los datos
tags:
  - APM
  - Getting started
metaDescription: Learn about the default security settings for data reported by the APM agents and how you can change them.
freshnessValidatedDate: never
translationType: machine
---

El [agente](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#agent) APM que instaló [recibe datos](#received) de su aplicación. La [retención de datos](/docs/telemetry-data-platform/get-data-new-relic/manage-data/manage-retention-stored-data) predeterminada se basa en su edición de precios.

[La configuración de seguridad predeterminada](#default) de New Relic funciona automáticamente para garantizar la privacidad de los datos y limitar el tipo de información que recibe New Relic. También puede cambiar esta configuración.

## Divulgación y auditoría [#Disclosure_and_Audit]

Nuestro agente APM es un complemento de acceso público para aplicaciones web. El agente no genera ningún código dinámico mientras se comunica con su aplicación, por lo que el uso del agente no introducirá ningún código en su aplicación sin su conocimiento.

La mayoría de nuestros agentes son de código abierto, así que puedes ver lo que hace nuestro código:

* [Go](https://github.com/newrelic/go-agent)
* [.NET](https://github.com/newrelic/newrelic-dotnet-agent)
* [Node.js](https://github.com/newrelic/node-newrelic)
* [Python](https://github.com/newrelic/newrelic-python-agent)
* [Ruby](https://github.com/newrelic/newrelic-ruby-agent)

## Recopilación de datos [#data_collection]

Usando un formato de mensaje JSON, los datos que el agente recibe de su aplicación se publican una vez por minuto en la interfaz de usuario de New Relic. El sitio web devuelve una respuesta JSON al agente, indicando si los datos se recibieron correctamente o si hubo algún error.

New Relic recopila los siguientes datos métricos agregados:

* Actividad de la base de datos
* Llamadas a servicios web externos
* Actividad de controlador y despacho.
* Ver actividad
* Excepciones y recuentos no detectados
* Memoria de proceso y uso de CPU

Estos datos métricos agregados resumen las llamadas a métodos específicos en su aplicación: cuántas veces se llamó a cada uno y varias estadísticas de tiempo de respuesta (promedio, mínimo, máximo y desviación estándar). En New Relic, verá los nombres de clases y métodos junto con sus números agregados.

New Relic recopila opcionalmente:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Data collection**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Errores no detectados
      </td>

      <td>
        New Relic captura el error así como un rastreo de la pila en tiempo de ejecución del código infractor.
      </td>
    </tr>

    <tr>
      <td>
        Traza de la transaccion
      </td>

      <td>
        Estas son instantáneas de una sola transacción. Como opción, el agente también puede recopilar las declaraciones de consulta llamadas dentro de la transacción. La colección predeterminada utiliza ofuscación para ocultar cadenas o números de la consulta.

        Para transacciones más lentas que el umbral que usted establezca, New Relic también recopila datos de SQL `EXPLAIN`. Para llamadas a base de datos más lentas que un umbral configurado, New Relic opcionalmente recopila el rastreo del tiempo de ejecución de la pila, que son útiles para identificar en qué parte del código se realiza una llamada a base de datos.
      </td>
    </tr>

    <tr>
      <td>
        Parámetro personalizado
      </td>

      <td>
        Puede agregar parámetros personalizados al código de su aplicación y registrarlos con la traza de la transacción para proporcionar contexto adicional mientras examina la información del perfil.
      </td>
    </tr>
  </tbody>
</table>

Opcional: Tanto para errores como para traza de la transacción, también se puede registrar el parámetro de solicitud HTTP.

## Configuraciones de seguridad [#security-modes]

Si desea restringir la información que recibe New Relic, puede habilitar [el modo de alta seguridad](#high-security). Si el modo de alta seguridad o la configuración predeterminada no funcionan para las necesidades de su negocio, puede aplicar configuraciones [personalizadas](#custom) .

<CollapserGroup>
  <Collapser
    id="default"
    title="Configuración de seguridad predeterminada"
  >
    Dependiendo del agente, la configuración predeterminada brinda seguridad para el parámetro de solicitud, el uso de HTTPS y SQL:

    * [Configuración de seguridad predeterminada Go](/docs/agents/go-agent/get-started/apm-agent-security-go#default)
    * [Configuración de seguridad predeterminada de Java](/docs/agents/java-agent/getting-started/apm-agent-security-java#default)
    * [Configuración de seguridad predeterminada de .NET](/docs/agents/net-agent/getting-started/apm-agent-security-net#default)
    * [Configuración de seguridad predeterminada de Node.js](/docs/agents/nodejs-agent/getting-started/apm-agent-security-nodejs#default)
    * [Configuración de seguridad predeterminada de PHP](/docs/agents/php-agent/getting-started/apm-agent-security-php#default)
    * [Configuración de seguridad predeterminada de Python](/docs/agents/python-agent/getting-started/apm-agent-security-python#default)
    * [Configuración de seguridad predeterminada de Ruby](/docs/agents/ruby-agent/getting-started/apm-agent-security-ruby#default)
  </Collapser>

  <Collapser
    id="high-security"
    title="Modo de alta seguridad"
  >
    Cuando el agente está en [modo de alta seguridad](/docs/agents/manage-apm-agents/configuration/high-security-mode), [la configuración predeterminada](#default) está bloqueada para que el usuario no pueda cambiarla.

    Además, el modo de alta seguridad aplica restricciones a eventos personalizados, instrumentación personalizada, atributos de usuario, mensajes de excepción o parámetros de cola de mensajes, según el agente:

    * [Configuración del modo de alta seguridad Go](/docs/agents/go-agent/get-started/apm-agent-security-go#restricted)
    * [Configuración del modo de alta seguridad de Java](/docs/agents/java-agent/getting-started/apm-agent-security-java#restricted)
    * [Configuración del modo de alta seguridad .NET](/docs/agents/net-agent/getting-started/apm-agent-security-net#restricted)
    * [Configuración del modo de alta seguridad de Node.js](/docs/agents/nodejs-agent/getting-started/apm-agent-security-nodejs#restricted)
    * [Configuración del modo de alta seguridad de PHP](/docs/agents/php-agent/getting-started/apm-agent-security-php#restricted)
    * [Configuración del modo de alta seguridad de Python](/docs/agents/python-agent/getting-started/apm-agent-security-python#restricted)
    * [Configuración del modo de alta seguridad de Ruby](/docs/agents/ruby-agent/getting-started/apm-agent-security-ruby#restricted)
  </Collapser>

  <Collapser
    id="custom"
    title="Configuraciones de seguridad personalizadas"
  >
    Si desea configuraciones de seguridad personalizadas, puede personalizar el archivo de configuración, cambiar la configuración del atributo personalizado o usar la API, según su agente:

    * [Configuración de seguridad personalizada Go](/docs/agents/go-agent/get-started/apm-agent-security-go#custom)
    * [Configuración de seguridad personalizada de Java](/docs/agents/java-agent/getting-started/apm-agent-security-java#custom)
    * [Configuración del modo de seguridad personalizado de .NET](/docs/agents/net-agent/getting-started/apm-agent-security-net#custom)
    * [Configuración de seguridad personalizada de Node.js](/docs/agents/nodejs-agent/getting-started/apm-agent-security-nodejs#custom)
    * [Configuración de seguridad personalizada de PHP](/docs/agents/php-agent/getting-started/apm-agent-security-php#custom)
    * [Configuración de seguridad personalizada de Python](/docs/agents/python-agent/getting-started/apm-agent-security-python#custom)
    * [Configuración de seguridad personalizada de Ruby](/docs/agents/ruby-agent/getting-started/apm-agent-security-ruby#custom)
  </Collapser>
</CollapserGroup>

## Datos recibidos por New Relic [#received]

Esta información se aplica a todos los agentes APM sin importar la configuración de seguridad que haya aplicado.

<Callout variant="important">
  Otros datos que recibe New Relic son específicos de la [configuración de seguridad de cada agente](#security-modes).
</Callout>

<table>
  <thead>
    <tr>
      <th width="450px">
        Datos
      </th>

      <th>
        <DNT>
          **Captured?**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Versión de idioma del agente APM
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Tipo y versión del sistema operativo
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Propiedades del sistema
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Tiempo de respuesta promedio de transacción en tu aplicación
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Visitas de URL
      </td>

      <td>
        <Icon name="fe-check"/>
      </td>
    </tr>

    <tr>
      <td>
        Dirección IP del cliente
      </td>

      <td>
        No capturado
      </td>
    </tr>
  </tbody>
</table>

## TLS y SSL [#ssl]

[Nuestro protocolo preferido para todos los dominios](/docs/apm/new-relic-apm/getting-started/networks#tls) es TLS 1.2. El agente APM habilita SSL de forma predeterminada. Para verificar qué versión incluye SSL de forma predeterminada y asegurarse de tener la versión más actualizada, consulte las notas de la versión de su agente:

* [Go](/docs/release-notes/agent-release-notes/go-release-notes)
* [Java](/docs/release-notes/agent-release-notes/java-release-notes)
* [.NET](/docs/release-notes/agent-release-notes/net-release-notes)
* [Node.js](/docs/release-notes/agent-release-notes/nodejs-release-notes)
* [PHP](/docs/release-notes/agent-release-notes/php-release-notes)
* [Python](/docs/release-notes/agent-release-notes/python-release-notes)
* [Ruby](/docs/release-notes/agent-release-notes/ruby-release-notes)

El archivo de configuración también incluye un indicador opcional (`ssl`) para habilitar o deshabilitar SSL mediante HTTPS. New Relic no realiza autenticación de host con HTTPS, solo cifrado de comunicación.

New Relic requiere HTTPS para todo el tráfico hacia APM y la API REST. Esto incluye tanto el tráfico entrante como el saliente. Si su [API de llamada REST usa HTTP](/docs/apis/rest-api-v2/troubleshooting/301-response-rest-api-calls), o si ha deshabilitado SSL en su archivo de configuración, cambie su script o programa a HTTPS.

## Transmisión de datos [#data_transmission]

En Java, .NET y PHP, New Relic utiliza JSON para serializar datos. El agente Ruby utiliza la clasificación de Ruby o la serialización JSON para enviar datos a New Relic, dependiendo de si hay un codificador JSON nativo disponible en la versión de Ruby en la que se ejecuta el agente.

Para conocer los cambios necesarios cuando desee crear reglas de firewall para permitir que el agente se comunique, consulte [Redes](/docs/apm/new-relic-apm/getting-started/networks). Para obtener más información sobre las medidas de seguridad para sus datos en tránsito a New Relic o en reposo en nuestro almacenamiento, consulte [Cifrado de datos](/docs/security/new-relic-security/compliance/data-encryption).

## Apoderados

Hay configuraciones opcionales disponibles para que pueda configurar el agente para que se comunique a través de un proxy. Para definir la configuración del proxy para host, puerto, dominio, usuario o contraseña, consulte la documentación del archivo de configuración de su agente:

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        <DNT>
          **Agent**
        </DNT>
      </th>

      <th>
        <DNT>
          **Proxy settings**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        [`transport`](/docs/agents/go-agent/instrumentation/go-agent-configuration#transport)
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        Utilice `proxy` configuración, que incluye:

        * [`proxy_host`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_host)
        * [`proxy_password`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_password)
        * [`proxy_port`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_port)
        * [`proxy_user`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_user)
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        [`proxy`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#proxy) elemento
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        [`proxy`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#proxy)
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        [`newrelic.daemon.proxy`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-proxy) o la configuración [`proxy`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-proxy) del daemon
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        [`proxy` ajustes](/docs/agents/python-agent/installation-configuration/python-agent-configuration#proxy)
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Utilice `proxy` configuración, que incluye:

        * [`proxy_host`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#proxy_host)
        * [`proxy_port`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#proxy_port)
        * [`proxy_user`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#proxy_user)
        * [`proxy_pass`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#proxy_pass)
      </td>
    </tr>
  </tbody>
</table>
