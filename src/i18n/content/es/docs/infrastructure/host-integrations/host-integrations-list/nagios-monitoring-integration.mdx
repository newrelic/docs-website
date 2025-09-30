---
title: Integración de monitoreo de Nagios
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s Nagios integration: how to enable it, what data it reports, and how to configure.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra [integración](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) de Nagios le permite utilizar sus verificações de servicio directamente, sin la necesidad de ejecutar una instancia de Nagios.

Continúe leyendo para instalar la integración y ver qué datos recopilamos.

## Compatibilidad y requisitos [#comp-req]

Nuestra integración es compatible con cualquier servicio existente que se ajuste a la [APIdel complemento de Nagios](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/3/en/pluginapi.html).

Antes de instalar la integración, asegúrese de cumplir con los siguientes requisitos:

* [Instale el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic).
* Distribución Linux o versión del sistema operativo Windows [compatible con el agente de infraestructura de New Relic](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure).

## Inicio rápido [#quick]

Instrumenta tu instancia de Nagios rápidamente y envía tus telemetry data con instalación guiada. Nuestra instalación guiada crea un comando CLI personalizado para su entorno que descarga e instala la CLI de New Relic y el agente de infraestructura.

¿Listo para comenzar? Haga clic en uno de estos botones para probarlo.

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/marketplace/install-data-source?state=d161ac12-7cf0-7fd2-9e34-0960a71e9ccd"
    variant="primary"
  >
    Instalación
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.newrelic.com/marketplace/install-data-source?state=d161ac12-7cf0-7fd2-9e34-0960a71e9ccd"
    variant="primary"
  >
    Instalación de la UE
  </ButtonLink>
</ButtonGroup>

## Instalar y activar [#install]

Para instalar la integración de Nagios:

<CollapserGroup>
  <Collapser
    id="linux-install"
    title="Instalación de linux"
  >
    1. Instale [el agente de infraestructura](/docs/integrations/host-integrations/installation/install-infrastructure-host-integrations/#install) y reemplace la variable `INTEGRATION_FILE_NAME` con `nri-nagios`.

    2. Cambiar directorio a la carpeta de integración:

       ```
       cd /etc/newrelic-infra/integrations.d
       ```

    3. Copia del archivo de configuración de muestra:

       ```
       sudo cp nagios-config.yml.sample nagios-config.yml
       ```

    4. Cree una copia del archivo de verificações de servicio de muestra ejecutando:

       ```
       sudo cp nagios-service-checks.yml.sample nagios-service-checks.yml
       ```

    5. Edite el archivo `nagios-config.yml` como se describe en los [ajustes de configuración](#config).
  </Collapser>

  <Collapser
    id="windows-install"
    title="Instalación de Windows"
  >
    1. Descargue la imagen del instalador `nri-nagios` .MSI desde:

       [https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-nagios/nri-nagios-amd64.msi](https://download.newrelic.com/infrastructure_agent/windows/integrations/nri-nagios/nri-nagios-amd64.msi)

    2. Para instalar desde el símbolo del sistema de Windows, ejecute:

       ```
       msiexec.exe /qn /i PATH\TO\nri-nagios-amd64.msi
       ```

    3. En el directorio de integración, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`, cree una copia del archivo de configuración de muestra ejecutando:

       ```
       cp nagios-config.yml.sample nagios-config.yml
       ```

    4. Edite el archivo `nagios-config.yml` como se describe en los [ajustes de configuración](#config).

    5. En el directorio de integración, `C:\Program Files\New Relic\newrelic-infra\integrations.d\`, cree un archivo `nagios-service-checks.yml` que describa las verificações de servicio que ejecutará la integración.

       Para ver una configuración de ejemplo, consulte el [archivo de verificações de servicio de ejemplo](#example-service-checks-yml).
  </Collapser>
</CollapserGroup>

Notas adicionales:

* <DNT>
    **Advanced:**
  </DNT>

  También es posible [instalar la integración desde un archivo tarball](/docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic#tarball). Esto le brinda control total sobre el proceso de instalación y configuración.

* <DNT>
    **On-host integrations do not automatically update.**
  </DNT>

  Para obtener mejores resultados, [actualice periódicamente el paquete de integración](/docs/integrations/host-integrations/installation/update-infrastructure-host-integration-package) y [el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

<InstallFeedback/>

## Configurar la integración [#config]

La configuración de formato YAML de una integración es donde puede colocar las credenciales de inicio de sesión requeridas y configurar cómo se recopilan los datos. Las opciones que cambie dependen de su configuración y preferencia.

Para una configuración de ejemplo, consulte los [ejemplos de nagios-config.yml y nagios-service-checks.yml](#example-config).

Nuestros archivos de configuración tienen configuraciones comunes que se utilizan en toda nuestra integración, como `interval`, `timeout` y`inventory_source`, entre otras. Para obtener más información sobre estas configuraciones comunes, consulte esta [lista de propiedades de configuración](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-newer-configuration-format/#options-list).

Las configuraciones específicas relacionadas con Nagios se definen usando la sección `env` del archivo de configuración. Estas configuraciones controlan la conexión a su instancia de Nagios, así como otras configuraciones y características de seguridad.

## Configuración de instancia de Nagios [#instance-settings]

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
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **SERVICE_CHECKS_CONFIG**
        </DNT>
      </td>

      <td>
        Esto apunta a un [archivo yaml](#service-checks-yaml) que contiene definiciones de las verificações de servicio que ejecutará la integración. <DNT>**Required.**</DNT>
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CONCURRENCY**
        </DNT>
      </td>

      <td>
        El número de verificações de servicio que se ejecutarán simultáneamente.
      </td>

      <td>
        1
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **OUTPUT_TABLE_NAME**
        </DNT>
      </td>

      <td>
        El nombre de la tabla donde se guardan los resultados de la verificación del servicio.
      </td>

      <td>
        NagiosServiceCheckSample
      </td>
    </tr>
  </tbody>
</table>

## Archivo de configuración de verificações de servicio [#service-checks-yaml]

El archivo yaml `service_checks_config` contiene la matriz de nivel superior `service_checks`. Cada verificación de servicio debe contener un `name` y un `command`.

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Llave
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`
      </td>

      <td>
        La convención de nomenclatura no es específica y permite un fácil reconocimiento en nuestra UI de infraestructura.
      </td>
    </tr>

    <tr>
      <td>
        `command`
      </td>

      <td>
        El comando es una matriz de cadenas, donde la primera posición contiene la ruta al ejecutable y las posiciones restantes contienen los argumentos del ejecutable.
      </td>
    </tr>

    <tr>
      <td>
        `labels`
      </td>

      <td>
        Una colección de pares de valores principales que ayudan a identificar y agrupar controles de servicio en New Relic.
      </td>
    </tr>

    <tr>
      <td>
        `parse_output`
      </td>

      <td>
        Intenta analizar el resultado de las verificações de servicio que se ajustan a la [especificación API del complemento de Nagios](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/3/en/pluginapi.html). Predeterminado: `false`.
      </td>
    </tr>
  </tbody>
</table>

Estos valores de configuración se pueden definir de varias maneras:

* Agregue los valores directamente en el archivo de configuración.
* Reemplace los valores de las variables de entorno utilizando la notación `{{}}` . Esto requiere la versión 1.14.0 o superior del agente de infraestructura. Leer más [aquí](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough).
* Utilice la administración de secretos para proteger la información confidencial, como las contraseñas, de modo que no quede expuesta en texto sin formato en el archivo de configuración. Para obtener más información, consulte [gestión de secretos](/docs/integrations/host-integrations/installation/secrets-management).

### Etiquetas/atributo personalizado [#labels]

Las variables de entorno se pueden utilizar para controlar los ajustes de configuración, como su <InlinePopover type="licenseKey"/>, y luego se pasan al agente de infraestructura. Para obtener instrucciones sobre cómo utilizar la característica de transferencia, consulte [Configurar el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#passthrough).

También puedes decorar tu métrica usando etiquetas. Las etiquetas le permiten agregar valor par principal atributo a su métrica. Puedes utilizar estas etiquetas para consultar, filtrar o agrupar tu métrica.

Nuestro archivo de configuración de muestra predeterminado incluye ejemplos con etiquetas; puede eliminar, modificar o agregar nuevas de su elección.

```
 labels:
   env: production
   role: nagios
```

### Permisos

Los comandos no configurables los ejecuta el agente de infraestructura, que a su vez lo ejecuta el usuario root. Para que la integración se ejecute correctamente, asegúrese de que los permisos en el archivo yaml sean adecuadamente restrictivos, como se indica a continuación:

<CollapserGroup>
  <Collapser
    id="linux-permissions"
    title="Permisos de linux"
  >
    Establezca el indicador de permisos de usuario en `0600`, restringiendo los privilegios de lectura y escritura al propietario del archivo. Si los permisos no cumplen con este requisito, [se registrará un error](#config-parsing-failed) y la integración no se ejecutará.
  </Collapser>

  <Collapser
    id="windows-permissions"
    title="Permisos de Windows"
  >
    De forma predeterminada, el agente y cualquier comando del archivo yaml se ejecutan como administrador. Como la integración no puede verificar los permisos, depende del usuario restringir adecuadamente los permisos para el archivo.
  </Collapser>
</CollapserGroup>

## Configuración de ejemplo [#example-config]

Configuración de archivo de ejemplo:

<CollapserGroup>
  <Collapser
    id="example-config-yml"
    title={<>Ejemplo de configuración <InlineCode>nagios-config.yml</InlineCode></>}
  >
    ```
    integrations:
      - name: nri-nagios
        env:
          CONCURRENCY: "1"
          SERVICE_CHECKS_CONFIG: /etc/newrelic-infra/integrations.d/nagios-service-checks.yml
        interval: 15s
    ```
  </Collapser>

  <Collapser
    id="example-service-checks-yml"
    title={<>Ejemplo de configuración <InlineCode>nagios-service-checks.yml</InlineCode></>}
  >
    ```
    service_checks:
      - name: check_users
        command: ["/usr/local/nagios/libexec/check_users", "-w", "5", "-c", "10"]
        parse_output: true
        labels:
          env: staging
          key1: val1
      - name: check_yum
        command: ["/usr/local/nagios/libexec/check_yum"]
    ```
  </Collapser>
</CollapserGroup>

Para obtener más información sobre la estructura general de la configuración de integración en el host, consulte [Configuración](/docs/integrations/integrations-sdk/file-specifications/host-integration-configuration-overview).

## Buscar y utilizar datos [#find-and-use]

Para encontrar sus datos de integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Third-party services**</DNT> y seleccione uno de los enlaces de integración de Nagios.

Los datos de Nagios se adjuntan al [tipo de evento](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#event) `NagiosServiceCheckSample` .

Para obtener más información sobre cómo encontrar y utilizar sus datos, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

La integración de Nagios recopila los siguientes datos métricos del atributo.

### Muestra de check servicio nagios métrica [#nagios-service-check-sample]

Estos atributos se pueden encontrar consultando el tipo de evento `NagiosServiceCheckSample` .

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
        `serviceCheck.command`
      </td>

      <td>
        El comando utilizado para ejecutar la verificación del servicio.
      </td>
    </tr>

    <tr>
      <td>
        `serviceCheck.error`
      </td>

      <td>
        La salida del error estándar (stderr) de la verificación de servicio.
      </td>
    </tr>

    <tr>
      <td>
        `serviceCheck.longServiceOutput`
      </td>

      <td>
        La parte del mensaje que Nagios analiza como `$LONGSERVICEOUTPUT$`. Solo está habilitado si `parse_output` está configurado.
      </td>
    </tr>

    <tr>
      <td>
        `serviceCheck.message`
      </td>

      <td>
        La salida estándar (stdout) de la verificación de servicio.
      </td>
    </tr>

    <tr>
      <td>
        `serviceCheck.name`
      </td>

      <td>
        El nombre descriptivo de la verificación de servicio que se está realizando.
      </td>
    </tr>

    <tr>
      <td>
        `serviceCheck.serviceOutput`
      </td>

      <td>
        La parte del mensaje que Nagios analiza como `$SERVICEOUTPUT$`. Solo está habilitado si `parse_output` está configurado.
      </td>
    </tr>

    <tr>
      <td>
        `serviceCheck.status`
      </td>

      <td>
        El [código de retorno](https://nagios-plugins.org/doc/guidelines.html#AEN78) de la verificación de servicio. Opciones:

        * `0` = Está bien
        * `1` = Advertencia
        * `2` = Crítico
        * `3` = Desconocido
      </td>
    </tr>

    <tr>
      <td>
        `*`
      </td>

      <td>
        Cualquier métrica adicional definida e informada por la verificación del servicio. Solo está habilitado si se establece `parse_output` .
      </td>
    </tr>
  </tbody>
</table>

## Resolución de problemas

Consejos para la resolución de problemas:

<CollapserGroup>
  <Collapser
    id="config-parsing-failed"
    title="Error al analizar la configuración"
  >
    Aparece el siguiente error en el [archivo de registro](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generate-logs-troubleshooting-infrastructure):

    ```
    Config parsing failed: service checks file permissions are not restrictive enough. Required file permissions are 0600. See documentation for details
    ```

    ### Solución:

    Establezca el indicador de permisos de usuario en `0600`, restringiendo los privilegios de lectura y escritura al propietario del archivo.

    ### Causa:

    Si el archivo no es propiedad del usuario raíz o un usuario que no sea el usuario raíz puede escribir en el archivo, la integración permitirá al usuario ejecutar comandos arbitrarios como si fuera un usuario raíz. Si los permisos no cumplen con el requisito, se registrará un error y la integración no se ejecutará.
  </Collapser>
</CollapserGroup>

## Comprueba el código fuente [#source-code]

Esta integración es software de código abierto. Eso significa que puedes [explorar su código fuente](https://github.com/newrelic/nri-nagios) y enviar mejoras, o crear tu propia bifurcación y compilarla.
