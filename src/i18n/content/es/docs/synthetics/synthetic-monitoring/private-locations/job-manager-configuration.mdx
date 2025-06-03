---
title: Configuración del gestor de trabajos sintético
tags:
  - synthetics
  - Synthetic monitoring
  - Private locations
metaDescription: Customize your New Relic synthetics job manager.
freshnessValidatedDate: never
translationType: machine
---

Este documento lo guiará a través de la configuración de su [administrador de trabajos Sintético](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager) mostrándole cómo:

* Configure [módulos personalizados](#custom-modules) para [API con script](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests/) o monitor [browser con script](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers) .
* Proporcione [variables definidas por el usuario](#user-defined-vars) en su configuración.
* Actualice otras [variables de entorno](#environment-variables) al iniciar su administrador de trabajos Sintético.

## Variables definidas por el usuario para monitor con script [#user-defined-vars]

Los administradores de trabajos de Private Sintético le permiten configurar variables de entorno para el monitor con script. Estas variables se administran localmente en SJM y se puede acceder a ellas a través de `$env.USER_DEFINED_VARIABLES`. Puede configurar variables definidas por el usuario de dos maneras. Puede montar un archivo JSON o puede proporcionar una variable de entorno al SJM en el lanzamiento. Si se proporcionan ambos, el SJM solo utilizará valores proporcionados por el entorno.

<CollapserGroup>
  <Collapser
    id="user-file-example"
    title="Montaje del archivo JSON"
  >
    El usuario puede crear un archivo con formato JSON y montar el volumen donde se encuentra el archivo en una ruta de destino especificada en el contenedor SJM.

    El archivo debe tener permisos de lectura y contener un mapa con formato JSON. Ejemplo de archivo de variables definidas por el usuario:

    ```
    {
    		      "KEY": "VALUE",
    		      "user_name": "MINION",
    		      "my_password": "PASSW0RD123",
    		      "my_URL": "https://newrelic.com/",
    		      "ETC": "ETC"
    		    }
    ```

    Coloque el archivo en el directorio de origen del host. El SJM espera que el nombre del archivo sea user_defined_variables.json

    Ejemplo Docker:

    El directorio objetivo esperado es: `/var/lib/newrelic/synthetics/variables/`

    ```
    docker run ... -v /variables:/var/lib/newrelic/synthetics/variables:rw ...
    ```

    Ejemplo de Kubernetes:

    El usuario tiene dos opciones al proporcionar un archivo al pod SJM en Kubernetes. Que puede:

    1. pasar en un archivo local.
    2. proporcione un PersistentVolume que incluya user_defined_variables.json.

    ### Pasar en un archivo local

    Esta opción crea un recurso ConfigMap Kubernetes y lo monta en el pod SJM.

    helm install newrelic/synthetics-job-manager ... --set-file "synthetics.userDefinedVariables.userDefinedFile=\[local-path]/user_defined_variables.json" ...

    ```

     ### Mount a PersistentVolume
    This option requires the user to provide a PersistentVolume that includes the user_defined_variables.json file or a PersistentVolumeClaim to the same. For more details on helm chart installation using a PersistentVolume, follow the instructions at [permanent data storage](/docs/synthetics/synthetic-monitoring/private-locations/job-manager-configuration#permanent-data-storage).
	
    Once the user has prepared a PersistentVolume as described below, launch the SJM, setting the path where the user_defined_variables.json file is located and setting any other `synthetics.persistence` variables as necessary.

    ```

    helm install newrelic/synthetics-job-manger ... --set synthetics.userDefinedVariables.userDefinedPath="variables"

    ```

    ```
  </Collapser>

  <Collapser
    id="passing-env-var"
    title="Pasando como una variable de entorno"
  >
    Las variables se pueden pasar a su respectivo sistema contenedor a través de una variable de entorno. ejemplo docker :

    Utilice la bandera `-e` para configurar una variable de entorno denominada `USER_DEFINED_VARIABLES` y asígnele el valor de una cadena de mapa con formato JSON.

    ```
    docker run ... -e USER_DEFINED_VARIABLES='{"key":"value","name":"sjm"}' ...
    ```

    Ejemplo de Kubernetes: utilice el indicador `--set-literal` para pasar la cadena con formato JSON.

    ```
    helm install newrelic/synthetics-job-manager ... --set-literal synthetics.userDefinedVariables.userDefinedJson='{"key":"value","name":"sjm"}' ...
    ```
  </Collapser>
</CollapserGroup>

### Acceder a variables de entorno definidas por el usuario desde un script [#env-vars-scripts]

Para hacer referencia a una variable de entorno configurada definida por el usuario, utilice el `$env.USER_DEFINED_VARIABLES` reservado seguido del nombre de una variable determinada con notación de puntos.

Por ejemplo, `$env.USER_DEFINED_VARIABLES.MY_VARIABLE`

<Callout variant="caution">
  Las variables de entorno definidas por el usuario no se desinfectan del registro. Considere utilizar la característica [de credenciales seguras](/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers) para información confidencial.
</Callout>

## Módulos de nodo personalizados [#custom-modules]

Se proporcionan módulos de nodo personalizados tanto en llamadas por minuto como en SJM. Le permiten crear un conjunto personalizado de [módulos de nodo](https://docs.npmjs.com/about-packages-and-modules) y usarlos en un monitor con script ( API con script y browser con script) para monitoreo sintético.

Para configurar los módulos:

1. Cree un directorio con un archivo `package.json` siguiendo [las pautas oficiales de npm](https://docs.npmjs.com/files/package.json) en la carpeta raíz. El SJM instalará cualquier dependencia enumerada en el paquete.json. campo `dependencies` . Estas dependencias estarán disponibles cuando se ejecute el monitor en el administrador de trabajos privado de Sintético. Vea un ejemplo de esto a continuación.

<CollapserGroup>
  <Collapser
    id="example-module-directory"
    title="Directorio de módulos personalizados"
  >
    En este ejemplo, se utiliza un directorio de módulo personalizado con la siguiente estructura:

    ```
    /example-custom-modules-dir/
          ├── counter
          │   ├── index.js
          │   └── package.json
          └── package.json            ⇦ the only mandatory file
    ```

    `package.json` define `dependencies` como un módulo local (por ejemplo, `counter`) y cualquier módulo alojado (por ejemplo, `smallest` versión `1.0.1`):

    ```
    {
          "name": "custom-modules",
          "version": "1.0.0",           ⇦ optional
          "description": "example custom modules directory", ⇦ optional
          "dependencies": {
            "smallest": "1.0.1",          ⇦ hosted module
            "counter": "file:./counter" ⇦ local module
          }
        }
    ```
  </Collapser>
</CollapserGroup>

2. Una vez que haya creado el directorio de módulos personalizados y el `package.json`, aplíquelo a su SJM para docker y Kubernetes.

   <CollapserGroup>
     <Collapser
       id="docker"
       title="Docker"
     >
       Para docker, lanza SJM montando el directorio en `/var/lib/newrelic/synthetics/modules`. Por ejemplo:

       ```
       docker run ... -v /example-custom-modules-dir:/var/lib/newrelic/synthetics/modules:rw ...
       ```
     </Collapser>

     <Collapser
       id="kubernetes"
       title="Kubernetes"
     >
       Complete lo siguiente:

       1. lance el SJM, estableciendo un valor para el valor de configuración `persistence.customModules` ya sea en la línea de comando o en un archivo YAML durante la instalación. El valor debe especificar la subruta en el volumen persistente de su administrador de trabajos Sintético donde existen sus archivos de módulos personalizados. Por ejemplo:

          ```
          helm install ... --set persistence.customModules=<custom-modules-subpath> ...
          ```

       2. Asegúrese de que su directorio de módulos personalizados esté disponible en el minion pod. Puede utilizar `kubectl cp` como método para copiar el directorio de su host al minion. Por ejemplo:

          ```
          kubectl cp /example-custom-modules-dir <namespace>/<pod_name>:/var/lib/newrelic/synthetics/modules
          ```
     </Collapser>
   </CollapserGroup>

3. Para comprobar si los módulos se instalaron correctamente o si se produjo algún error, revise el [registro de SJM](/docs/synthetics/new-relic-synthetics/private-locations/job-manager-maintenance-monitoring#monitor-docker-logs) para la sección titulada `"... Initialization of Custom Modules ..."`. Estos registros incluirán el registro de instalación de npm, proporcionando información sobre el proceso de instalación y cualquier posible error encontrado.

Ahora puede agregar `"require('smallest');"` al [script](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers) del monitor que envía a esta ubicación privada.

### Cambiar `package.json` para módulos personalizados [#change-package-json]

Además de los módulos locales y alojados, también puede utilizar [módulos de Node.js.](/docs/synthetics/new-relic-synthetics/scripting-monitors/import-nodejs-modules) Para actualizar los módulos personalizados utilizados por su SJM, realice cambios en el archivo `package.json` y reinicie SJM. Durante el proceso de reinicio, el SJM reconocerá el cambio de configuración y realizará automáticamente operaciones de limpieza y reinstalación para garantizar que se apliquen los módulos actualizados.

<Callout variant="caution">
  Módulos locales: si bien su `package.json` puede incluir cualquier módulo local, estos módulos deben residir dentro del árbol debajo de su directorio de módulos personalizados. Si se almacena fuera del árbol, el proceso de inicialización fallará y verá un mensaje de error en el [log docker ](/docs/synthetics/new-relic-synthetics/private-locations/job-manager-maintenance-monitoring#monitor-docker-logs)después de iniciar SJM.
</Callout>

## Almacenamiento permanente de datos [#permanent-data-storage]

Es posible que el usuario desee utilizar el almacenamiento de datos permanente para proporcionar el archivo `user_defined_variables.json` o admitir módulos de nodo personalizados (aún no disponibles para los administradores de trabajos privados de Sintético).

### Docker

Para configurar el almacenamiento permanente de datos en Docker:

1. Cree un directorio en el host donde está iniciando Job Manager. Este es su directorio de origen.
2. Inicie el Administrador de trabajos, montando el directorio de origen en el directorio de destino `/var/lib/newrelic/synthetics`.

Ejemplo:

```
		docker run ... -v /sjm-volume:/var/lib/newrelic/synthetics:rw ...
```

### Kubernetes

Para configurar el almacenamiento permanente de datos en Kubernetes, el usuario tiene dos opciones:

1. Proporcione un PersistentVolumeClaim (PVC) existente para un PersistentVolume (PV) existente, estableciendo el valor de configuración `synthetics.persistence.existingClaimName` .

Ejemplo:

```
		helm install ... --set synthetics.persistence.existingClaimName=sjm-claim ...
```

2. Proporcione un nombre de PersistentVolume (PV) existente y establezca el valor de configuración `synthetics.persistence.existingVolumeName` . Helm generará un PVC para el usuario.

Opcionalmente, el usuario también puede establecer los siguientes valores:

* `synthetics.persistence.storageClass`: la clase de almacenamiento del fotovoltaico existente. Si no se proporciona, Kubernetes utilizará la clase de almacenamiento predeterminada.
* `synthetics.persistence.size`: el tamaño del reclamo. Si no se establece, el valor predeterminado es actualmente 2Gi.

```
		helm install ... --set synthetics.persistence.existingVolumeName=sjm-volume --set synthetics.persistence.storageClass=standard ...
```

## Variables de entorno [#environment-variables]

Las variables ambientales le permiten ajustar la configuración del administrador de trabajos de Sintético para satisfacer sus necesidades ambientales y funcionales específicas.

<CollapserGroup>
  <Collapser
    id="docker-env-config"
    title="Configuración del entorno Docker"
  >
    Las variables se proporcionan al inicio utilizando el argumento `-e, --env` .

    La siguiente tabla muestra todas las variables de entorno que soporta Sintético job manager. `PRIVATE_LOCATION_KEY` es obligatorio y todas las demás variables son opcionales.

    <table>
      <thead>
        <tr>
          <th>
            Nombre
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `PRIVATE_LOCATION_KEY`
          </td>

          <td>
            <DNT>**REQUIRED.**</DNT> Clave de ubicación privada, como se encuentra en la lista de entidades de Ubicación Privada.
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_API_VERSION`
          </td>

          <td>
            Formato: `"vX.Y"` versión de API que se utilizará con el servicio Docker determinado.

            Por defecto: `v1.35.`
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_HOST`
          </td>

          <td>
            Apunta al administrador de trabajos de Sintético a un `DOCKER_HOST` determinado. Si está ausente, el valor predeterminado es `/var/run/docker.sock.`
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_ENDPOINT`
          </td>

          <td>
            Para cuentas con sede en EE. UU., el extremo es: `https://synthetics-horde.nr-data.net.`

            Para cuentas [basadas en la UE](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center#partner-hierarchy) , el extremo es: `https://synthetics-horde.eu01.nr-data.net/`

            Asegúrese de que su administrador de trabajo de Sintético pueda conectarse al extremo apropiado para atender su monitor.
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_REGISTRY`
          </td>

          <td>
            El dominio del Registro Docker donde se alojan las imágenes en tiempo de ejecución. Utilice esto para anular `docker.io` como valor predeterminado.
          </td>
        </tr>

        <tr>
          <td>
            `DOCKER_REPOSITORY`
          </td>

          <td>
            El repositorio/organización Docker donde se alojan las imágenes en tiempo de ejecución. Utilice esto para anular `newrelic` como valor predeterminado.
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_HOST`
          </td>

          <td>
            Host de servidor proxy utilizado para la comunicación de la Horda. Formato: `"localhost"`.
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_PORT`
          </td>

          <td>
            Puerto del servidor proxy utilizado para la comunicación de la Horda. Formato: `8888`.
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_USERNAME`
          </td>

          <td>
            Nombre de usuario del servidor proxy utilizado para la comunicación de la Horda. Formato: `"username"`.
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_PW`
          </td>

          <td>
            Contraseña del servidor proxy utilizada para la comunicación de la Horda. Formato: `"password"`.
          </td>
        </tr>

        <tr>
          <td>
            `HORDE_API_PROXY_ACCEPT_SELF_SIGNED_CERT`
          </td>

          <td>
            ¿Aceptar certificados de proxy autofirmados para la conexión del servidor proxy utilizado para la comunicación de la Horda? Valores aceptables: `true`
          </td>
        </tr>

        <tr>
          <td>
            `CHECK_TIMEOUT`
          </td>

          <td>
            La cantidad máxima de segundos que se permite que se ejecuten las comprobaciones de su monitor. Este valor debe ser un número entero entre 0 segundos (excluido) y 900 segundos (incluido) (por ejemplo, de 1 segundo a 15 minutos).

            Predeterminado: 180 segundos
          </td>
        </tr>

        <tr>
          <td>
            `LOG_LEVEL`
          </td>

          <td>
            Por defecto: `INFO.`

            Opciones adicionales: `WARN`, `ERROR`, `DEBUG`
          </td>
        </tr>

        <tr>
          <td>
            `HEAVYWEIGHT_WORKERS`
          </td>

          <td>
            El número de trabajos pesados simultáneos (browser/ browser con secuencias de comandos y API con secuencias de comandos) que se pueden ejecutar al mismo tiempo.

            Valor predeterminado: CPU disponibles - 1.
          </td>
        </tr>

        <tr>
          <td>
            `DESIRED_RUNTIMES`
          </td>

          <td>
            Una matriz que se puede utilizar para ejecutar imágenes en tiempo de ejecución específicas. Formato: \['newrelic/Sintético-ping-runtime:latest','newrelic/Sintético-node-API-runtime:latest','newrelic/Sintético-node-browser-runtime:latest']

            Valor predeterminado: todos los tiempos de ejecución más recientes.
          </td>
        </tr>

        <tr>
          <td>
            `VSE_PASSPHRASE`
          </td>

          <td>
            Si se establece, habilita <DNT>**verified script execution**</DNT> y utiliza este valor como <DNT>**passphrase**</DNT>.
          </td>
        </tr>

        <tr>
          <td>
            `USER_DEFINED_VARIABLES`
          </td>

          <td>
            Un conjunto alojado localmente de pares de valores principales definidos por el usuario.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="kubernetes-env-config"
    title="Configuración del entorno de Kubernetes"
  >
    Las variables se proporcionan al inicio utilizando el argumento `--set` .

    La siguiente lista muestra todas las variables de entorno que admite Sintético job manager. `synthetics.privateLocationKey` es obligatorio y todas las demás variables son opcionales.

    Una serie de configuraciones avanzadas adicionales están disponibles y completamente documentadas en [nuestro archivo README del gráfico Helm.](https://github.com/newrelic/helm-charts/blob/master/charts/synthetics-job-manager/README.md)

    <table>
      <thead>
        <tr>
          <th>
            Nombre
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `synthetics.privateLocationKey`
          </td>

          <td>
            <DNT>**REQUIRED if `synthetics.privateLocationKeySecretName` is not set**</DNT>. [ubicación privada clave](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager/#private-location-key) de la ubicación privada, tal como se encuentra en la página web de la ubicación privada.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.privateLocationKeySecretName`
          </td>

          <td>
            <DNT>**REQUIRED if `synthetics.privateLocationKey` is not set**</DNT>. Nombre del secreto de Kubernetes que contiene la clave `privateLocationKey`, que contiene la clave de autenticación asociada a tu ubicación privada de Sintético.
          </td>
        </tr>

        <tr>
          <td>
            `replicaCount`
          </td>

          <td>
            Número de réplicas a mantener con su instalación

            Por defecto: `1.`
          </td>
        </tr>

        <tr>
          <td>
            `imagePullSecrets`
          </td>

          <td>
            El nombre del objeto secreto utilizado para extraer una imagen de un registro de contenedor específico.
          </td>
        </tr>

        <tr>
          <td>
            `fullnameOverride`
          </td>

          <td>
            Anulación del nombre utilizado para su implementación, reemplazando el predeterminado.
          </td>
        </tr>

        <tr>
          <td>
            `appVersionOverride`
          </td>

          <td>
            Versión de lanzamiento de Sintético-job-manager para usar en lugar de la versión especificada en [chart.yml](https://github.com/newrelic/helm-charts/blob/master/charts/synthetics-job-manager/Chart.yaml).
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.logLevel`
          </td>

          <td>
            Por defecto: `INFO.`

            Opciones adicionales: `WARN`, `ERROR`
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiEndpoint`
          </td>

          <td>
            Para cuentas con sede en EE. UU., el extremo es: `https://synthetics-horde.nr-data.net.`

            Para cuentas [basadas en la UE](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center#partner-hierarchy) , el extremo es: `https://synthetics-horde.eu01.nr-data.net/`

            Asegúrese de que su administrador de trabajo de Sintético pueda conectarse al extremo apropiado para atender su monitor.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.minionDockerRunnerRegistryEndpoint`
          </td>

          <td>
            El registro y la organización Docker donde se aloja la imagen minion Runner. Utilice esto para anular `quay.io/newrelic` como valor predeterminado (por ejemplo, `docker.io/newrelic`).
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.vsePassphrase`
          </td>

          <td>
            Si se establece, habilita <DNT>**verified script execution**</DNT> y utiliza este valor como <DNT>**passphrase**</DNT>.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.vsePassphraseSecretName`
          </td>

          <td>
            Si se establece, habilita la ejecución de script verificada y utiliza este valor para recuperar la frase de contraseña de un secreto de Kubernetes con una clave llamada `vsePassphrase`.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.apiProxyHost`
          </td>

          <td>
            Servidor proxy utilizado para la comunicación de la Horda. Formato: `"host"`.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.apiProxyPort`
          </td>

          <td>
            Puerto del servidor proxy utilizado para la comunicación de la Horda. Formato: `port`.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiProxySelfSignedCert`
          </td>

          <td>
            Acepte certificados autofirmados cuando utilice un servidor proxy para la comunicación de la Horda. Valores aceptables: `true`.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiProxyUsername`
          </td>

          <td>
            Nombre de usuario del servidor proxy para la comunicación de la Horda. Formato: `"username"`
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.hordeApiProxyPw`
          </td>

          <td>
            Contraseña del servidor proxy para la comunicación de la Horda. Formato: `"password"`.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.userDefinedVariables.userDefinedJson`
          </td>

          <td>
            Una cadena JSON de variables definidas por el usuario. El usuario puede acceder a estas variables en su script. Formato: `'{"key":"value","key2":"value2"}'`.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.userDefinedVariables.userDefinedFile`
          </td>

          <td>
            Una ruta local para el usuario a un archivo JSON que contiene variables definidas por el usuario. Esto se pasa a través de `--set-file` y no se puede configurar en el archivo de valores.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.userDefinedVariables.userDefinedPath`
          </td>

          <td>
            Una ruta en el PersistentVolume proporcionado por el usuario al archivo user_defined_variables.json. El usuario debe proporcionar un PersistentVolume o PersistentVolumeClaim si esta variable está completa.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.existingClaimName`
          </td>

          <td>
            Si monta un volumen, el usuario puede proporcionar un nombre para un PersistentVolumeClaim que ya existe en el clúster. Presume la existencia de un PersistentVolume correspondiente.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.existingVolumeName`
          </td>

          <td>
            Si monta un volumen y no proporciona un PersistentVolumeClaim, el usuario debe, como mínimo, proporcionar un nombre de PersistentVolume. Helm generará un PersistentVolumeClaim.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.storageClass`
          </td>

          <td>
            El nombre de StorageClass para el PersistentVolumeClaim generado. Esto debe coincidir con StorageClassName en el PV existente. Si no son proveedores, Kubernetes utilizará la clase de almacenamiento predeterminada, si está presente.
          </td>
        </tr>

        <tr>
          <td>
            `synthetics.persistence.size`
          </td>

          <td>
            El tamaño del volumen para el PersistentVolumeClaim generado. Formato: `10Gi`. 2Gi predeterminado.
          </td>
        </tr>

        <tr>
          <td>
            `global.checkTimeout`
          </td>

          <td>
            La cantidad máxima de segundos que se permite que se ejecuten las comprobaciones de su monitor. Este valor debe ser un número entero entre 0 segundos (excluido) y 900 segundos (incluido) (por ejemplo, de 1 segundo a 15 minutos).

            Predeterminado: 180 segundos
          </td>
        </tr>

        <tr>
          <td>
            `image.repository`
          </td>

          <td>
            El contenedor para tirar.

            Por defecto: `docker.io/newrelic/synthetics-job-runner`
          </td>
        </tr>

        <tr>
          <td>
            `image.pullPolicy`
          </td>

          <td>
            La política de atracción.

            Por defecto: `IfNotPresent`
          </td>
        </tr>

        <tr>
          <td>
            `podSecurityContext`
          </td>

          <td>
            Establezca un contexto de seguridad personalizado para el pod Sintético-job-manager.
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.enabled`
          </td>

          <td>
            Si se debe implementar o no el tiempo de ejecución del ping persistente. Esto se puede desactivar si no utiliza el monitor de ping.

            Por defecto: `true`
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.replicaCount`
          </td>

          <td>
            El número de contenedores de tiempo de ejecución de ping a desplegar. Aumente el replicaCount para escalar el despliegue según sus necesidades de monitoreo de ping.

            Por defecto: `1`
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.image.repository`
          </td>

          <td>
            La imagen del contenedor que se extraerá para el tiempo de ejecución de ping.

            Por defecto: `docker.io/newrelic/synthetics-ping-runtime`
          </td>
        </tr>

        <tr>
          <td>
            `ping-runtime.image.pullPolicy`
          </td>

          <td>
            La política de extracción para el contenedor de tiempo de ejecución de ping.

            Por defecto: `IfNotPresent`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.enabled`
          </td>

          <td>
            Si se debe implementar o no el tiempo de ejecución de la API de Node.js. Esto se puede desactivar si no utiliza el monitor API con script.

            Por defecto: `true`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.parallelism`
          </td>

          <td>
            La cantidad de tiempo de ejecución de API de Node.js `CronJobs` para implementar. La cantidad máxima de trabajos simultáneos de la API de Node.js que se ejecutarán en cualquier momento. [Detalles adicionales](#kubernetes-sizing).

            Por defecto: `1`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.completions`
          </td>

          <td>
            La cantidad de tiempos de ejecución de API de Node.js `CronJobs` que se deben completar por minuto. Aumente esta configuración junto con el paralelismo para mejorar el rendimiento. Esto debe aumentarse cada vez que se aumenta el paralelismo y las terminaciones siempre deben ser al menos mayores o iguales que el paralelismo. . Aumente esta configuración si observa períodos de tiempo sin trabajos de ejecución de API en ejecución. [Detalles adicionales](#kubernetes-sizing).

            Por defecto: `6`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.image.repository`
          </td>

          <td>
            La imagen del contenedor que se extraerá para el tiempo de ejecución de la API de Node.js.

            Por defecto: `docker.io/newrelic/synthetics-node-api-runtime`
          </td>
        </tr>

        <tr>
          <td>
            `node-api-runtime.image.pullPolicy`
          </td>

          <td>
            La política de extracción para el contenedor de tiempo de ejecución de la API de Node.js.

            Por defecto: `IfNotPresent`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.enabled`
          </td>

          <td>
            Si se debe desplegar o no el tiempo de ejecución browser Node.js. Esto se puede desactivar si no utiliza el script simple o monitor del browser.

            Por defecto: `true`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.parallelism`
          </td>

          <td>
            El número de tiempo de ejecución browser Chrome `CronJobs` para desplegar. La cantidad máxima de trabajos simultáneos browser Chrome que se ejecutarán en cualquier momento. [Detalles adicionales](#kubernetes-sizing).

            Por defecto: `1`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.completions`
          </td>

          <td>
            El número de tiempos de ejecución browser Chrome `CronJobs` que se deben completar por minuto. Aumente esta configuración junto con el paralelismo para mejorar el rendimiento. Esto debe aumentarse cada vez que se aumenta el paralelismo y las terminaciones siempre deben ser al menos mayores o iguales que el paralelismo. Aumente esta configuración si observa períodos de tiempo sin que se ejecuten trabajos de tiempo de ejecución browser . [Detalles adicionales](#kubernetes-sizing).

            Por defecto: `6`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.image.repository`
          </td>

          <td>
            La imagen del contenedor que se extraerá para el tiempo de ejecución browser Node.js.

            Por defecto: `docker.io/newrelic/synthetics-node-browser-runtime`
          </td>
        </tr>

        <tr>
          <td>
            `node-browser-runtime.image.pullPolicy`
          </td>

          <td>
            La política de extracción para el contenedor de tiempo de ejecución browser Node.js.

            Por defecto: `IfNotPresent`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Consideraciones de tamaño para Kubernetes y Docker [#kubernetes-sizing]

<Callout variant="tip">
  Las consideraciones de tamaño específicas Docker estarán disponibles pronto.
</Callout>

Si está trabajando en entornos más grandes, es posible que necesite personalizar la configuración del administrador de trabajos para cumplir con los requisitos mínimos para ejecutar el monitor Sintético de manera eficiente. Muchos factores pueden afectar los requisitos de tamaño para el despliegue de un administrador de trabajos de Sintético, entre ellos:

* Si se requieren todos los tiempos de ejecución según el uso esperado
* El número de trabajos por minuto por tipo de monitor (ping, browser simple o con secuencias de comandos y API con secuencias de comandos)
* Duración del trabajo, incluidos los trabajos cuyo tiempo de espera es de aproximadamente 3 minutos
* El número de fracasos laborales. En el caso de errores de trabajo, se programan reintentos automáticos cuando un monitor comienza a fallar para proporcionar una lógica de reintento 3/3 incorporada. Estos trabajos adicionales se suman a los requisitos de rendimiento del administrador de trabajos de Sintético.

Además de los ajustes de configuración de tamaño que se enumeran a continuación, se pueden implementar administradores de trabajos de Sintético adicionales con la misma clave de ubicación privada para equilibrar la carga de trabajos en múltiples entornos.

## Kubernetes [#k8s]

Cada tiempo de ejecución utilizado por el administrador de trabajos de Kubernetes Sintético se puede dimensionar de forma independiente estableciendo valores en el [gráfico de timón](https://github.com/newrelic/helm-charts/tree/master/charts/synthetics-job-manager).

Se pueden iniciar tiempos de ejecución de ping adicionales para ayudar a ejecutar la carga del monitor de ping aumentando la configuración `ping-runtime.replicaCount` del valor predeterminado de `1`.

La API de Node.js y los tiempos de ejecución browser Node.js se dimensionan de forma independiente mediante una combinación de las configuraciones `parallelism` y `completions`. La configuración ideal para estas configuraciones variará según los requisitos del cliente.

La configuración `parallelism` controla cuántos pods de un tiempo de ejecución particular se ejecutan simultáneamente. La configuración `parallelism` es el equivalente a la configuración `synthetics.heavyWorkers` en el minion privado en contenedor (llamadas por minuto). Asegúrese de que su clúster de Kubernetes tenga suficientes recursos disponibles para ejecutar esta cantidad de pods según su [solicitud de recursos y sus valores límite](/docs/synthetics/synthetic-monitoring/private-locations/install-job-manager/#kubernetes-requirements).

La configuración `completions` controla cuántos pods de un tiempo de ejecución particular deben completarse antes de que `CronJob` pueda iniciar otro trabajo de Kubernetes para ese tiempo de ejecución. Tenga en cuenta la diferencia entre un trabajo de Kubernetes (J mayúscula) y un trabajo de monitor Sintético. Para mejorar la eficiencia, `completions` debe establecerse entre 6 y 10 veces el valor `parallelism` . Esto puede ayudar a minimizar la ineficiencia de "cerca del final de las finalizaciones", donde menos del grupo de `parallelism` podrían terminar ejecutándose mientras el trabajo de Kubernetes espera a que finalicen los `completions` .

Cuando `completions` es mayor que 1, el pod con estado "Completado" permanecerá visible en la salida de `kubectl get pods -n YOUR_NAMESPACE` hasta que se hayan cumplido todas las finalizaciones definidas en el trabajo de Kubernetes, por ejemplo, 6/6 finalizaciones. Los recursos se liberan del nodo cuando un pod tiene el estado Completado o Fallido.

Una duración del trabajo de Kubernetes de 5 minutos (`kubectl get jobs -n YOUR_NAMESPACE`) es un objetivo conservador para tener en cuenta la variabilidad en el tiempo que tarda el pod en completarse y cuántos trabajos de Sintético deben ejecutarse por minuto (tasa de trabajos). Las siguientes ecuaciones se pueden utilizar como punto de partida para `completions` y `parallelism` para cada tiempo de ejecución. Es posible que sea necesario realizar ajustes en función de las observaciones del crecimiento de la cola de ubicación privada.

```m
completions = 300 / avg job duration (s)
parallelism = synthetics jobs per 5 minutes / completions
```

Es probable que diferentes tiempos de ejecución tengan diferentes duraciones y tarifas de trabajo de Sintético. La siguiente consulta se puede utilizar para obtener la duración y la tarifa promedio para una ubicación privada.

```sql
# non-ping average job duration by runtime type
FROM SyntheticCheck SELECT average(duration) AS 'avg job duration' WHERE type != 'SIMPLE' AND location = 'YOUR_PRIVATE_LOCATION' FACET type SINCE 1 hour ago

# non-ping jobs per minute by runtime type
FROM SyntheticCheck SELECT rate(uniqueCount(id), 5 minutes) AS 'jobs per 5 minutes' WHERE type != 'SIMPLE' AND location = 'YOUR_PRIVATE_LOCATION' FACET type SINCE 1 hour ago
```

<Callout variant="tip">
  Las consultas anteriores se basan en resultados actuales. Si su ubicación privada no tiene ningún resultado o el administrador de trabajos no está funcionando al máximo, es posible que los resultados de la consulta no sean precisos. En ese caso, pruebe con algunos valores diferentes para `completions` y `parallelism` hasta que vea una duración de `kubectl get jobs -n YOUR_NAMESPACE` de al menos 5 minutos (suficientes finalizaciones) y la cola no crezca (suficiente paralelismo).
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Ejemplo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `parallelism=1`

        `completions=1`
      </td>

      <td>
        El tiempo de ejecución ejecutará 1 trabajo Sintético por minuto. Después de que se complete 1 trabajo, la configuración `CronJob` comenzará un nuevo trabajo en el siguiente minuto. <DNT>**Throughput will be extremely limited with this configuration.**</DNT>
      </td>
    </tr>

    <tr>
      <td>
        `parallelism=1`

        `completions=6`
      </td>

      <td>
        El tiempo de ejecución ejecutará 1 trabajo de Sintético a la vez. Una vez finalizado el trabajo, se iniciará un nuevo trabajo inmediatamente. Una vez que se complete el número de trabajos de configuración `completions` , la configuración `CronJob` iniciará un nuevo trabajo de Kubernetes y restablecerá el contador de finalización. <DNT>**Throughput will be limited, but slightly better.**</DNT> Un único trabajo de Sintético de larga duración bloqueará el procesamiento de cualquier otro trabajo de Sintético de este tipo.
      </td>
    </tr>

    <tr>
      <td>
        `parallelism=3`

        `completions=24`
      </td>

      <td>
        El tiempo de ejecución ejecutará 3 trabajos de Sintético a la vez. Una vez completado cualquiera de estos trabajos, se iniciará un nuevo trabajo inmediatamente. Una vez que se complete el número de trabajos de configuración `completions` , la configuración `CronJob` iniciará un nuevo trabajo de Kubernetes y restablecerá el contador de finalización. <DNT>**Throughput is much better with this or similar configurations.**</DNT> Un único trabajo de Sintético de larga duración tendrá un impacto limitado en el procesamiento de otros trabajos de Sintético de este tipo.
      </td>
    </tr>
  </tbody>
</table>

Si los trabajos de Sintético tardan más en completarse, se necesitarán menos terminaciones para llenar 5 minutos con trabajos, pero se necesitarán más módulos paralelos. De manera similar, si es necesario procesar más trabajos de Sintético por minuto, se necesitarán más pods paralelos. La configuración `parallelism` afecta directamente la cantidad de trabajos de Sintético por minuto que se pueden ejecutar. Un valor demasiado pequeño y la cola puede crecer. Un valor demasiado grande y los nodos pueden verse limitados en recursos.

Si su configuración `parallelism` funciona bien para mantener la cola en cero, establecer un valor más alto para `completions` que el calculado a partir de `300 / avg job duration` puede ayudar a mejorar la eficiencia de dos maneras:

* Adáptese a la variabilidad en la duración de los trabajos de modo que al menos 1 minuto esté ocupado con trabajos de Sintético, que es la duración mínima de CronJob.
* Reduzca el número de ciclos de terminación para minimizar la ineficiencia de "acercarse al final de las terminaciones", donde el siguiente conjunto de terminaciones no puede comenzar hasta que se complete el trabajo final.

Es importante tener en cuenta que el valor `completions` no debe ser demasiado grande o CronJob experimentará un evento de advertencia como el siguiente:

```
8m40s       Warning   TooManyMissedTimes     cronjob/synthetics-node-browser-runtime                  too many missed start times: 101. Set or decrease .spec.startingDeadlineSeconds or check clock skew
```

<Callout variant="tip">
  Tenga en cuenta que New Relic no es responsable de las modificaciones que realice en los archivos del administrador de trabajos de Sintético.
</Callout>
