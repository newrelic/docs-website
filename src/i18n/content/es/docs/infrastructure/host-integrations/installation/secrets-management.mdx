---
title: Gestión de secretos
tags:
  - Integrations
  - On-host integrations
  - Installation
metaDescription: Use secrets variables in your New Relic infrastructure integration configuration to inject sensitive data that you don’t want in your configuration files.
freshnessValidatedDate: never
translationType: machine
---

Con la administración de secretos, puede configurar el agente y la integración en el host para usar datos confidenciales (como contraseñas) sin tener que escribirlos como texto sin formato en los archivos de configuración. Actualmente, se admiten Hashicorp Vault, AWS KMS, CyberArk, la ofuscación CLI de New Relic y los comandos personalizados.

Obtenga más información en este video de NerdBytes (5:12 minutos).

<Video
  id="8NAUi0H2sfU"
  type="youtube"
/>

## Definir secretos

Para usar secretos en un archivo YAML de configuración:

1. Defina una sección `variables`, donde cada entrada sea un nombre para un objeto secreto.
2. En cada entrada, incluya la fuente del secreto y la configuración adecuada para recuperar esos secretos.
3. En la sección de configuración general, establezca `${variable.property}` marcador de posición que será reemplazado automáticamente por las propiedades del objeto secreto. El objeto secreto se puede definir como una cadena simple o un objeto json.

<Callout variant="important">
  Si falla la recuperación de secretos, la integración no se ejecutará, ya que el agente de infraestructura no tiene todos los datos que necesita para ejecutarse.
</Callout>

Por ejemplo, la siguiente configuración recuperará un objeto llamado `creds` de Vault (puede definir el nombre del objeto para el secreto). Supongamos que el objeto almacenado es un JSON válido con una propiedad denominada `user` y otra propiedad denominada `password`. Queremos usarlos para configurar las credenciales HTTP básicas de la propiedad `status_url` desde una integración en el host de Nginx:

```
variables:
  creds:
    vault:
      http:
        url: http://my.vault.host/v1/newengine/data/secret
        headers:
          X-Vault-Token: my-vault-token
integrations:
  - name: nri-nginx
    env:
      METRICS: "true"
      STATUS_URL: http://${creds.user}:${creds.password}@example.com/status
      STATUS_MODULE: discover
      REMOTE_MONITORING: true
    interval: 30s
    labels:
      env: production
      role: load_balancer
```

<Callout variant="tip">
  A partir de variables se pueden recuperar cadenas simples y objetos JSON válidos.  
    Cuando utilice objetos JSON, asegúrese de que tanto las claves como los valores estén entre comillas dobles.
</Callout>

## Usando variables de entorno [#using-variables]

Las variables de entorno se pueden utilizar en la sección `variables` con la notación `{{MY_ENV_VAR}}` . Al hacerlo, las variables de entorno se expanden y su valor se reemplaza en tiempo de ejecución.

Utilice este método para evitar que se incluyan valores confidenciales como tokens o claves de ofuscación en el archivo de configuración.

Cuando se utilizan variables de entorno en archivos de configuración de integración en el host, se debe definir la configuración [passthrough_environment](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings#passthrough_-environment) .

## Variables secretas [#variables]

Defina secretos en cada configuración en una sección `variables` . Cada entrada es un nombre secreto definido por el usuario que almacenará las propiedades de los secretos recuperados. Cada variable puede contener las siguientes propiedades:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Clave YAML
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ttl`

        Tipo: String
      </td>

      <td>
        Cantidad de tiempo antes de que se actualice un secreto. Puede ser un número seguido de una unidad de tiempo (`s`, `m` o `h`).

        Ejemplos: `30s`, `10m`, `1h`

        Por defecto: `1h`
      </td>
    </tr>

    <tr>
      <td>
        `aws-kms`
      </td>

      <td>
        [Configuración de recuperación de secretos AWS KMS](#aws-kms-secrets)
      </td>
    </tr>

    <tr>
      <td>
        `vault`
      </td>

      <td>
        [Configuración de recuperación de secretos de Vault](#vault-secrets)
      </td>
    </tr>

    <tr>
      <td>
        `cyberark-cli`
      </td>

      <td>
        Configuración de la interfaz de línea de comando de CyberArk
      </td>
    </tr>

    <tr>
      <td>
        `cyberark-api`
      </td>

      <td>
        [Configuración API REST de CyberArk](#cyberark-api)
      </td>
    </tr>

    <tr>
      <td>
        `obfuscated`
      </td>

      <td>
        [Ofuscación CLI New Relic](#newrelic-cli-obfuscation)
      </td>
    </tr>
  </tbody>
</table>

## Secretos de AWS KMS

Para recuperar sus secretos de Amazon KMS, puede configurar las siguientes propiedades en su sección `aws-kms` . No todos los campos son obligatorios. Por ejemplo, necesitará `data`, `file` o `http` para proporcionar la cadena KMS codificada.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Clave YAML
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `data`

        Tipo: String
      </td>

      <td>
        Cadena KMS codificada en Base64 para descifrar
      </td>
    </tr>

    <tr>
      <td>
        `file`

        Tipo: String
      </td>

      <td>
        Ruta al archivo que contiene la cadena KMS codificada en Base64 para descifrar
      </td>
    </tr>

    <tr>
      <td>
        `http`

        Tipo: propiedades YAML
      </td>

      <td>
        Configuración HTTP que se utilizará para solicitar una cadena KMS codificada en Base64 para descifrarla. Para obtener más información, consulte [Bóveda `http`](#vault-secrets).
      </td>
    </tr>

    <tr>
      <td>
        `credential_file`

        Tipo: String
      </td>

      <td>
        Ruta al archivo de credenciales de AWS
      </td>
    </tr>

    <tr>
      <td>
        `config_file`

        Tipo: String
      </td>

      <td>
        Ruta al archivo de configuración de AWS
      </td>
    </tr>

    <tr>
      <td>
        `region`

        Tipo: String
      </td>

      <td>
        Región de AWS KMS
      </td>
    </tr>

    <tr>
      <td>
        `type`

        Tipo: Cadena (`plain`, `equal` o `json`)
      </td>

      <td>
        Formato de valor secreto:

        * `plain`: una cadena sin formato que se almacenará directamente en la variable de destino.

        * `equal`: una cadena de una línea `key=property` que se almacenará como propiedades del objeto en la variable de destino.

        * `json`: un objeto JSON que se almacenará como propiedades en la variable de destino.

          Los secretos de tipo `plain` o `json` utilizan notación de puntos; por ejemplo, `${mysecret.nestedkey}`.
      </td>
    </tr>
  </tbody>
</table>

El siguiente ejemplo permitirá recuperar una cadena de contraseña simple de AWS KMS. Debe descifrarse de la cadena codificada `data` proporcionada.

```
variables:
  myPassword:
    aws-kms:
      data: T0hBSStGTEVY
      region: ap-southeast-2
      credential_file: "./my-aws-credentials-file"
      config_file: "./my-aws-config-file"
      type: plain
```

## Secretos de la bóveda

Vault debe habilitar un campo `http` que contenga la configuración HTTP utilizada para conectarse a Vault. La entrada http puede contener las siguientes entradas:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Clave YAML
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `url`

        Tipo: String
      </td>

      <td>
        URL para solicitar datos
      </td>
    </tr>

    <tr>
      <td>
        `tls_config`

        Tipo: propiedades YAML
      </td>

      <td>
        Utilice las [propiedades de configuración de TLS](#tls-config-properties)
      </td>
    </tr>

    <tr>
      <td>
        `headers`

        Tipo: mapa YAML
      </td>

      <td>
        Solicitar encabezados
      </td>
    </tr>
  </tbody>
</table>

### Propiedades tls_config [#tls-config-properties]

<Callout variant="important">
  Los secretos deben utilizar notación de puntos, por ejemplo, `${mysecret.nestedkey}`.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Clave YAML
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `enable`

        Tipo: Booleano
      </td>

      <td>
        Habilitar TLS

        Por defecto: `false`
      </td>
    </tr>

    <tr>
      <td>
        `insecure_skip_verify`

        Tipo: Booleano
      </td>

      <td>
        Omitir la verificación de la cadena de certificados y el host del servidor

        Por defecto: `false`
      </td>
    </tr>

    <tr>
      <td>
        `min_version`

        Tipo: UInt16
      </td>

      <td>
        La versión mínima de SSL/TLS que es aceptable

        Valor predeterminado: `0` (que usa TLS versión 1.0)
      </td>
    </tr>

    <tr>
      <td>
        `max_version`

        Tipo: UInt16
      </td>

      <td>
        La versión máxima de SSL/TLS que es aceptable

        Valor predeterminado: `0` (que usa TLS versión 1.3)
      </td>
    </tr>

    <tr>
      <td>
        `ca`

        Tipo: String
      </td>

      <td>
        Certificado TLS

        `""`
      </td>
    </tr>
  </tbody>
</table>

El siguiente ejemplo recuperará un secreto utilizando un token de Vault de un servidor seguro y omitirá la verificación de los certificados del servidor:

```
variables:
  mydata:
    vault:
      http:
        url: https://my.vault.host/v1/newengine/data/secret
        headers:
          X-Vault-Token: my-vault-token
        tls_config:
          insecure_skip_verify: true
```

## Interfaz de línea de comando de CyberArk [#cyberark-cli]

Para recuperar secretos de la interfaz de línea de comando (CLI) de CyberArk utilice la siguiente configuración, se requieren todas las claves

<table>
  <thead>
    <tr>
      <th>
        Clave YAML
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        `cli`

        Tipo: String
      </td>

      <td>
        Ruta completa al ejecutable de la CLI de CyberArk

        Por defecto: ""
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `app`-identificación

        Tipo: String
      </td>

      <td>
        ID de la aplicación del poseedor del secreto

        Por defecto: ""
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `safe`

        Tipo: String
      </td>

      <td>
        Caja fuerte que contiene el secreto.

        Por defecto: ""
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `folder`

        Tipo: String
      </td>

      <td>
        Carpeta que contiene el secreto.

        Por defecto: ""
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        `object`

        Tipo: String
      </td>

      <td>
        El objeto con el que está asociado el secreto.

        Por defecto: ""
      </td>
    </tr>
  </tbody>
</table>

El siguiente ejemplo recuperará un secreto de CyberArk utilizando la interfaz de línea de comando:

```
variables:
  credentials:
    cyberark-cli:
      cli: /full/path/to/clipasswordsdk
      app-id: my-appid
      safe: my-safe
      folder: my-folder
      object: my-object
```

## API REST de CyberArk [#cyberark-api]

Para recuperar secretos utilizando la API REST de CyberArk, debe haber una clave `http` que contenga la configuración HTTP. La clave `http` contiene estas subclaves; solo se requiere `url` :

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Clave YAML
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `url`

        Tipo: String
      </td>

      <td>
        URL para solicitar datos, esta clave es obligatoria

        Predeterminado: ninguno
      </td>
    </tr>

    <tr>
      <td>
        `tls_config`

        Tipo: propiedades YAML
      </td>

      <td>
        Utilice las [propiedades de configuración de TLS](#tls-config-properties)
      </td>
    </tr>

    <tr>
      <td>
        `headers`

        Tipo: mapa YAML
      </td>

      <td>
        Solicitar encabezados
      </td>
    </tr>
  </tbody>
</table>

El siguiente ejemplo recuperará un secreto utilizando la API REST de CyberArk, omitiendo la verificación del certificado del servidor:

```
variables:
  credentials:
    cyberark-api:
      http:
        url: https://hostname/AIMWebService/api/Accounts?AppID=myAppID&Query=Safe=mySafe;Object=myObject
        tls_config:
          insecure_skip_verify: true
```

## Ofuscación CLI New Relic [#newrelic-cli-obfuscation]

<Callout variant="important">
  Recomendamos utilizar cualquiera de los proveedores de secretos admitidos en lugar de la simple ofuscación cuando sea posible.

  Consulte nuestras pautas a continuación para definir variables de entorno y evitar tener la clave de ofuscación en los archivos de configuración.

  Utilice Powershell en hosts de Windows, en lugar de la ventana del símbolo del sistema, ya que la ventana del símbolo del sistema puede manejar las comillas de formas inesperadas.
</Callout>

<Callout variant="tip">
  Se requiere el agente de infraestructura 1.14.0 o superior
</Callout>

Puede utilizar el comando ofuscate de la CLI de New Relic para ocultar información confidencial en el agente de infraestructura o en cualquier archivo de configuración de integración en el host.

Pasos:

* [Instale la CLI de New Relic](https://github.com/newrelic/newrelic-cli/blob/master/docs/GETTING_STARTED.md) en cualquier host (puede ser su host de desarrollo).
* Ejecute el [comando CLI ofuscate](https://github.com/newrelic/newrelic-cli/blob/master/docs/cli/newrelic_agent_config_obfuscate.md) para generar el valor ofuscado:

```
newrelic agent config obfuscate --value '<plain_text_config_value>' --key '<obfuscation_key>'
```

* Copie el resultado del comando cli en el argumento `text` en la sección `obfuscated` como se muestra en los ejemplos siguientes.
* Puede ofuscar bloques JSON si necesita hacer referencia a varios valores en su archivo YML de configuración. Tenga en cuenta que es posible que deba evitar las comillas `""` con barras invertidas en hosts de Windows. Por ejemplo: `'{\"attribute\":\"value\"...`. Además, utilice Powershell en hosts de Windows, en lugar de la ventana del símbolo del sistema, ya que la ventana del símbolo del sistema puede manejar las comillas de formas inesperadas.

```
newrelic agent config obfuscate --value '{"attribute":"value","attribute2":"value2"}' --key '<obfuscation_key>'
```

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Clave YAML
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        llave

        Tipo: String
      </td>

      <td>
        La cadena utilizada al ofuscar el valor de texto sin cifrar usando la CLI de New Relic

        Predeterminado: ninguno
      </td>
    </tr>

    <tr>
      <td>
        `secret`

        Tipo: String
      </td>

      <td>
        La salida del comando newrelic-cli

        Predeterminado: ninguno
      </td>
    </tr>
  </tbody>
</table>

<DNT>
  **Integrations configuration example**
</DNT>

El siguiente ejemplo permitirá recuperar el usuario y la contraseña de Nginx que se han ofuscado mediante la CLI de New Relic. Este ejemplo utiliza notación de puntos al recuperar las credenciales, ya que el valor ofuscado era un bloque JSON:

```
variables:
  creds:
    obfuscated:
      key: 'random_key_used_in_cli'
      secret: 'obscured_output_from_cli'
integrations:
  - name: nri-nginx
    env:
      METRICS: "true"
      STATUS_URL: http://${creds.user}:${creds.password}@example.com/status
      STATUS_MODULE: discover
      REMOTE_MONITORING: true
    interval: 30s
    labels:
      env: production
      role: load_balancer
```

Se recomienda utilizar variables de entorno para los argumentos de ofuscación, como se muestra en el siguiente ejemplo:

```
variables:
  creds:
    obfuscated:
      key: {{OBFUSCATION_KEY}}
      secret: {{OBFUSCATION_TEXT}}
integrations:
  - name: nri-nginx
    env:
      METRICS: "true"
      STATUS_URL: http://${creds.user}:${creds.password}@example.com/status
      STATUS_MODULE: discover
      REMOTE_MONITORING: true
    interval: 30s
    labels:
      env: production
      role: load_balancer
```

<DNT>
  **Agent configuration example**
</DNT>

Este ejemplo permite recuperar una cadena que contiene los detalles del proxy (usuario, contraseña y host):

```
variables:
  obfuscated_proxy:
    obfuscated:
      key: 'random_key_used_in_cli'
      secret: 'obscured_output_from_cli'

proxy: ${obfuscated_proxy}
```

## Comandos personalizados [#custom-commands]

<Callout variant="important">
  La configuración `command` requiere el agente de infraestructura `1.41.0` o superior. Asegúrese de que el agente tenga los permisos necesarios para ejecutar el `command` configurado según los requisitos de su entorno.
</Callout>

Puede cargar configuración de agente o integración desde comandos personalizados disponibles en el mismo host. El agente de infraestructura detectará cuándo se debe cargar inicialmente la configuración desde una salida `command` y mantendrá los valores actualizados en función de un tiempo de actualización `ttl` .

El formato de salida esperado para el comando es JSON o Cadena:

### JSON

Se espera la siguiente estructura JSON como salida principal (stdout) del `command` definido:

```
{
  "data": {
    "myKey": "myValue"
  }, 
  "ttl": "24h"
}
```

* Se requiere un campo `data` de nivel superior.
* Se requiere un campo `ttl` de nivel superior.

Luego se puede utilizar en cualquier archivo de configuración utilizando la notación `${myVariable.key}` . En el siguiente ejemplo, se ejecuta un comando `my-custom-auth` con un parámetro `domain` y luego se carga el `token` resultante como una configuración de agente:

```
variables:
  myToken:
    command:
      path: '/path/to/my-custom-auth-json'
      args: ["--domain", "myDomain", "--other_param", "otherValue"] 
      ttl: 24h
      
# my-custom-auth output example: {"data":{"token":"XXXXYYYYZZZZ"}, "ttl": "24h"}
# the `token` result can be included as ${myToken.token} in any configuration.
  
http:
  headers: 
    "Proxy-Authorization": ${myToken.token}
```

### Cadena (texto/sin formato)

Si el resultado del comando es una cadena simple, se puede hacer referencia a ella en la configuración utilizando la notación `${myVar}` .

Ejemplo:

```
variables:
  myToken:
    command:
      path: '/path/to/my-custom-auth-string'
      args: ["arg1", "arg2"] 
      ttl: 24h
      
# my-custom-auth output example: "XXXXYYYYZZZZ"
# the `token` result can be included as ${myToken} on any configuration.
  
http:
  headers: 
    "Proxy-Authorization": ${myToken}
```
