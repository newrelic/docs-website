---
title: Ejecute la CLI de diagnóstico (nrdiag)
tags:
  - Using New Relic
  - Cross-product functions
  - Diagnostics CLI (nrdiag)
metaDescription: How to run the New Relic Diagnostics CLI (nrdiag) and upload results to a support ticket.
freshnessValidatedDate: never
translationType: machine
---

<ButtonLink
  role="button"
  to="https://one.newrelic.com/launcher/diagnostics?pane=eyJuZXJkbGV0SWQiOiJkaWFnbm9zdGljcy5jbGktb3V0cHV0IiwgInNob3dJbnN0YWxsUnVuTW9kYWwiOiB0cnVlfQ=="
  variant="primary"
>
  Ejecute la CLI
</ButtonLink>

## Instale y ejecute la CLI de diagnóstico

La CLI de diagnóstico se puede instalar y ejecutar con un solo comando en Linux y Windows. Este método de instalación descargará el binario de la CLI de diagnóstico al directorio de trabajo actual. La CLI de diagnóstico busca automáticamente en su directorio raíz y subdirectorios archivos de configuración del agente y otros datos relevantes.

<CollapserGroup>
  <Collapser
    id="linux-install-run"
    title="Linux"
  >
    1. Cambie el directorio al directorio raíz de la aplicación.

    2. Ejecute lo siguiente:

       ```
       curl -Ls https://download.newrelic.com/nrdiag/scripts/install.sh | bash && sudo ./nrdiag CLI_OPTIONS
       ```

       <DNT>
         **Recommendation:**
       </DNT>

       Alcance su resolución de problemas con un [conjunto de tareas](#suites) (`-suites`) y cargue archivos relevantes a su cuenta de New Relic con la [marca de archivo adjunto](#automatic) (`-attach`).
  </Collapser>

  <Collapser
    id="windows-install-run"
    title="Windows"
  >
    1. Cambie el directorio al directorio raíz de la aplicación.

    2. Ejecute lo siguiente:

       ```
       [Net.ServicePointManager]::SecurityProtocol = 'tls12, tls'; (New-Object System.Net.WebClient).DownloadFile("https://download.newrelic.com/nrdiag/scripts/install.ps1", "$env:TEMP\install.ps1"); & PowerShell.exe -ExecutionPolicy Bypass -File $env:TEMP\install.ps1; & '.\nrdiag.exe' CLI_OPTIONS
       ```

       <DNT>
         **Recommendation:**
       </DNT>

       Alcance su resolución de problemas con un [conjunto de tareas](#suites) (`-suites`) y cargue archivos relevantes a su cuenta de New Relic con la [marca de archivo adjunto](#automatic) (`-attach`).
  </Collapser>
</CollapserGroup>

## Procedimientos de instalación manual específicos de la plataforma [#platform]

Para instalar y ejecutar manualmente la CLI de diagnóstico, siga los procedimientos para su plataforma:

<CollapserGroup>
  <Collapser
    id="linux-run"
    title="Linux"
  >
    1. Asegúrese de tener la CLI de diagnóstico:

       * Desde la línea de comando, cambie el directorio al directorio raíz de su aplicación y asegúrese de que el archivo `nrdiag.zip` esté presente.

         O

       * [Descargue manualmente la última versión](https://download.newrelic.com/nrdiag/nrdiag_latest.zip).

    2. Descomprima `nrdiag.zip` si es necesario.

    3. Desde el directorio `nrdiag_1.2.3/linux` , mueva `nrdiag` al directorio raíz de la aplicación.

    4. Ejecute `nrdiag` (junto con cualquier [opción CLI](/docs/using-new-relic/cross-product-functions/diagnostics-cli-nrdiag/pass-command-line-options-nrdiag)

       ```
       ./nrdiag CLI_OPTIONS
       ```

       La CLI de diagnóstico genera cualquier problema que descubre y carga archivos relevantes a su cuenta de New Relic si incluye la marca `-attach` .
  </Collapser>

  <Collapser
    id="windows-run"
    title="Windows"
  >
    1. Asegúrese de tener la CLI de diagnóstico:

       * Desde la línea de comando, cambie el directorio al directorio raíz de la aplicación y asegúrese de que el archivo `nrdiag.zip` esté presente.

         O

       * [Descargue manualmente la última versión](https://download.newrelic.com/nrdiag/nrdiag_latest.zip).

    2. Descomprima `nrdiag.zip` si es necesario.

    3. Desde el directorio `nrdiag_1.2.3/win` , mueva `nrdiag.exe` o `nrdiag_x64.exe` al directorio raíz de la aplicación.

    4. Para la resolución de problemas de la aplicación web, asegúrese de ejecutar el ejecutable desde el directorio <DNT>**parent**</DNT> de su proyecto o especifique la ubicación del archivo de configuración con la opción `-c` .

    5. Ejecute el ejecutable (junto con las [opciones CLI](/docs/using-new-relic/cross-product-functions/diagnostics-cli-nrdiag/pass-command-line-options-nrdiag) del directorio donde colocó el archivo binario). Dado que algunas comprobaciones requieren permisos elevados, para obtener mejores resultados, ejecútelas desde un shell de administración.

       Ejecute a través de PowerShell si agrega algún `CLI_OPTIONS`:

       ```
       ./nrdiag.exe CLI_OPTIONS
       ```

       <DNT>**OR**</DNT>, para sistemas x64:

       ```
       ./nrdiag_x64.exe CLI_OPTIONS
       ```

       La CLI de diagnóstico genera cualquier problema que descubre y carga archivos relevantes a la cuenta de New Relic si incluye la marca `-attach` .
  </Collapser>

  <Collapser
    id="macos-run"
    title="Mac OS"
  >
    1. Asegúrese de tener la CLI de diagnóstico:

       * Desde la línea de comando, cambie el directorio al directorio raíz de la aplicación y asegúrese de que el archivo `nrdiag.zip` esté presente.

         O

       * [Descargue manualmente la última versión](https://download.newrelic.com/nrdiag/nrdiag_latest.zip).

    2. Descomprima `nrdiag.zip` si es necesario.

    3. Desde el directorio `nrdiag_1.2.3/mac` , mueva `nrdiag` al directorio raíz de la aplicación.

    4. Ejecute `nrdiag` (junto con cualquier [opción CLI](/docs/using-new-relic/cross-product-functions/diagnostics-cli-nrdiag/pass-command-line-options-nrdiag)

       ```
       ./nrdiag CLI_OPTIONS
       ```

       La CLI de diagnóstico genera cualquier problema que descubre y carga archivos relevantes a su cuenta de New Relic si incluye la marca `-attach` .
  </Collapser>

  <Collapser
    id="browser-run"
    title="monitoreo del navegador"
  >
    1. Asegúrese de tener la última versión de la CLI de diagnóstico. Si es necesario, [descargue manualmente la última versión](https://download.newrelic.com/nrdiag/nrdiag_latest.zip).

    2. Descomprima `nrdiag.zip` si es necesario.

    3. Desde el directorio del sistema operativo `nrdiag_1.2.3/` , ejecute `nrdiag` (junto con las [opciones de CLI](/docs/using-new-relic/cross-product-functions/diagnostics-cli-nrdiag/pass-command-line-options-nrdiag):

       ```
       ./nrdiag -browser-url WEBSITE_URL CLI_OPTIONS
       ```

       La CLI de diagnóstico genera cualquier problema que descubre y carga archivos relevantes a su cuenta de New Relic si incluye la marca `-attach` .
  </Collapser>

  <Collapser
    id="docker"
    title="Contenedor docker"
  >
    Para solucionar problemas de su aplicación instrumentada New Relic que se ejecuta en un contenedor docker , use el comando `docker exec`:

    1. [Descargue](https://download.newrelic.com/nrdiag/nrdiag_latest.zip) y descomprima el archivo `nrdiag_latest.zip` .

    2. Copie el binario al contenedor. Reemplace `IMAGE_NAME` con el nombre de su contenedor docker :

       ```
       docker cp nrdiag/linux/nrdiag IMAGE_NAME:/bin
       ```

    3. Ejecute el comando `nrdiag` en el contenedor de la docker . Reemplace `IMAGE_NAME` como arriba y reemplace `APPLICATION_ROOT` con el directorio raíz de su aplicación, donde instaló el agente New Relic:

       ```
       docker exec -it -w APPLICATION_ROOT IMAGE_NAME nrdiag
       ```

    4. (Opcional) Elimine el binario `nrdiag` cuando haya terminado:

       ```
       docker exec IMAGE_NAME rm /bin/nrdiag
       ```
  </Collapser>
</CollapserGroup>

## Bandera de Suites (opción CLI muy recomendada) [#suites]

Una suite es una colección de controles de salud que apuntan a productos o problemas específicos. El uso de una suite puede ayudar a limitar el alcance de la resolución de problemas y reducir la aparición de falsos positivos.

Para revisar una lista de suites disponibles, ejecute la CLI de diagnóstico con la opción `-help suites` :

```
./nrdiag -help suites
```

Para ejecutar conjuntos con `nrdiag`, proporcione la marca `-suites` y uno o más nombres de conjuntos (por ejemplo, `java`) para ejecutar como argumentos.

<DNT>
  **Linux and macOS:**
</DNT>

* Para sistemas de 64 bits:

  ```
  ./nrdiag_x64 -suites SUITE NAMES
  ```

* Para sistemas ARM64:

  ```
  ./nrdiag_arm64 -suites SUITE NAMES
  ```

<DNT>
  **Windows:**
</DNT>

Para ejecutar desde PowerShell, agregue `./` al inicio de `cmd`.

* Para sistemas de 32 bits:

  ```
  nrdiag.exe -suites SUITE NAMES
  ```

* Para sistemas de 64 bits:

  ```
  nrdiag_x64.exe -suites SUITE NAMES
  ```

* Para sistemas ARM64:

  ```
  nrdiag_arm64.exe -suites SUITE NAMES
  ```

## Scripts [#scripts]

El script proporciona una fuente de datos adicional para información que no se recopila mediante una tarea. El catálogo de scripts disponibles se puede encontrar en [el repositorio github de la CLI de diagnóstico](https://github.com/newrelic/newrelic-diagnostics-cli/tree/main/scriptcatalog).

### Salida script

La salida del script se imprime en la pantalla y se guarda en un archivo según el nombre del script (por ejemplo, `name-of-script.out`). Esto se guarda en el directorio especificado por `-output-path`, de forma predeterminada es el directorio actual.

El script también puede generar archivos, ya sea en el directorio de trabajo actual o en el directorio especificado por `-output-path`. Todos los archivos de salida se incluyen en el zip de resultados en el directorio `ScriptOutput/` .

### Resultados script

Los resultados de ejecutar un script se pueden encontrar en el archivo `nrdiag-output.json` con el siguiente esquema:

```json
"Script": {
    "Name": "example",
    "Description": "Example Description",
    "Output": "example output",
    "OutputFiles": [
        "/path/to/example.out",
        "/path/to/another-file.out"
    ],
    "OutputTruncated": false
}
```

El campo `Output` contiene la salida estándar. Si tiene más de 20.000 caracteres, se trunca y el campo `OutputTruncated` se establece en `true`. Incluso si se trunca, el resultado completo todavía está disponible en el directorio `ScriptOutput/` del archivo zip.

Puede encontrar una lista de archivos que creó el script en el campo `Outputfiles` .

### Enumerar, ver y ejecutar un script [#list-view-run-script]

<CollapserGroup>
  <Collapser
    id="list-available-scripts"
    title="Listar script disponible"
  >
    Para ver una lista de los scripts disponibles para ejecutar, utilice `-list-scripts`:

    ```
    ./nrdiag -list-scripts
    ```
  </Collapser>

  <Collapser
    id="view-script"
    title="Ver un script"
  >
    Para ver un script sin ejecutarlo:

    ```
    ./nrdiag -script SCRIPT_NAME
    ```
  </Collapser>

  <Collapser
    id="run-script"
    title="Ejecutar un script"
  >
    Para ejecutar un script:

    ```
    ./nrdiag -script SCRIPT_NAME -run
    ```
  </Collapser>

  <Collapser
    id="run-script-with-args"
    title="Ejecutar un script con argumentos"
  >
    Para ejecutar un script con argumentos:

    ```
    ./nrdiag -script SCRIPT_NAME -run -script-flags "-foo bar"
    ```
  </Collapser>

  <Collapser
    id="run-script-and-suites"
    title="Ejecute un script junto con suites"
  >
    Para ejecutar un script y suites al mismo tiempo:

    ```
    ./nrdiag -script SCRIPT_NAME -run -s SUITE NAMES"
    ```
  </Collapser>
</CollapserGroup>

## Incluir archivos adicionales en el zip [#include-additional-files]

Si tiene archivos adicionales que le gustaría compartir con el soporte, puede incluirlos en el archivo `nrdiag-output.zip` usando la marca de línea de comando `-include` . Esto se puede utilizar con un solo archivo o un directorio. Si se proporciona un directorio, se incluyen todos sus subdirectorios. El límite de tamaño total de los archivos incluidos es de 4 GB.

Utilízalo en combinación con `-attach` para [cargar los archivos](#attach-account-results) en tu cuenta de New Relic.

<DNT>
  **Linux and macOS:**
</DNT>

* Para sistemas de 64 bits:

  ```
  ./nrdiag_x64 -include /entire/directory/ -attach
  ```

* Para sistemas ARM64:

  ```
  ./nrdiag_arm64 -include /entire/directory/ -attach
  ```

<DNT>
  **Windows:**
</DNT>

Para ejecutar desde PowerShell, agregue `./` al inicio de `cmd`.

* Para sistemas de 32 bits:

  ```
  nrdiag.exe -include Path\To\File -attach
  ```

* Para sistemas de 64 bits:

  ```
  nrdiag_x64.exe -include \Entire\Directory\ -attach
  ```

* Para sistemas ARM64:

  ```
  nrdiag_arm64.exe -include \Entire\Directory\ -attach
  ```

## Cargar resultados a una cuenta New Relic [#attach-account-results]

<Callout variant="important">
  Si su sistema **no** está configurado para conectarse a direcciones IP externas, este método no funcionará. En su lugar, adjunte los [archivos de salida](/docs/using-new-relic/cross-product-functions/diagnostics-cli-nrdiag/interpret-nrdiag-output) en un correo electrónico al soporte de New Relic.
</Callout>

### Carga automática de cuenta [#automatic]

Para cargar sus resultados automáticamente a una cuenta de New Relic cuando se ejecuta la CLI de Diagnóstico, utilice los indicadores de línea de comando `-attach` o `-api-key` . La bandera `-attach` validará cualquier clave de licencia de New Relic que se encuentre en su entorno y cargará la ejecución en la cuenta asociada con la clave de licencia. Alternativamente, la bandera `-api-key` utilizará el <InlinePopover type="userKey"/>proporcionado para cargar la ejecución, independientemente de la presencia de una clave de licencia válida.

Al cargar sus resultados en una cuenta, se cargarán automáticamente los contenidos de `nrdiag-output.json` y `nrdiag-output.zip`.

<CollapserGroup>
  <Collapser
    id="linux-attach-examples"
    title="Linux y macOS"
  >
    * Para sistemas de 64 bits:

      ```
      ./nrdiag_x64 -attach
      ```

      O

      ```
      ./nrdiag_x64 -api-key ${API_KEY}
      ```

    * Para sistemas ARM64:

      ```
      ./nrdiag_arm64 -attach
      ```

      O

      ```
      ./nrdiag_arm64 -api-key ${API_KEY}
      ```
  </Collapser>

  <Collapser
    id="windows-attach-examples"
    title="Windows"
  >
    Para ejecutar desde PowerShell, agregue `./` al inicio de `cmd`.

    * Para sistemas de 32 bits:

      ```
      nrdiag.exe -attach
      ```

      O

      ```
      nrdiag.exe -api-key ${API_KEY}
      ```

    * Para sistemas de 64 bits:

      ```
      nrdiag_x64.exe -attach
      ```

      O

      ```
      nrdiag_x64.exe -api-key ${API_KEY}
      ```

    * Para sistemas ARM64:

      ```
      nrdiag_arm64.exe -attach
      ```

      O

      ```
      nrdiag_arm64.exe -api-key ${API_KEY}
      ```
  </Collapser>
</CollapserGroup>

### Selección de región [#region]

De forma predeterminada, la CLI de Diagnóstico carga los resultados en las cuentas de New Relic alojadas en el centro de datos de EE. UU. Si su cuenta está alojada en el centro de datos de la UE, asegúrese de agregar `-region eu` al comando.

```
./nrdiag -region eu ...
```
