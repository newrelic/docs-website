---
title: Instrumentación Java por XML
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: Use a custom XML file to monitor specific methods in your Java app without modifying code in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Para su aplicación Java New Relic-monitor, un método de instrumentación personalizada es utilizar un archivo XML para especificar los métodos de su aplicación que deben instrumentarse. El agente de Java leerá el archivo XML e interpretará las clases relevantes al inicio; Los archivos XML agregados al [directorio`extensions` ](#file-location)después del inicio no requieren un reinicio de JVM para ser detectados.

Consulte [agente de Java instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) para obtener una descripción de las opciones de instrumentación personalizada y los motivos para utilizarlas.

## Accediendo a su archivo XML [#ui-options]

Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Instrumentation**</DNT>. Desde aquí puedes:

* Descargue un archivo XML de muestra. (Puede hacerlo desde la ventana emergente que aparece al hacer clic en `Import an XML file`.)
* Seleccione un archivo XML existente para editar.
* Busque en el historial de instrumentación.

## Estructura de archivos XML [#file-structure]

Su paquete de descarga del agente New Relic (`newrelic_agent.zip`) contiene dos plantillas para usar instrumentación XML:

* La plantilla `extension.xsd` es la definición del esquema XML que deben seguir todas las extensiones personalizadas.
* La plantilla `extension-example.xml` es un ejemplo. Este archivo instrumentó algunos de los métodos básicos de JDK. Si edita y cambia el nombre de este archivo, asegúrese de modificar el atributo `name="extension-example"` para que coincida con el nuevo nombre de archivo.

Para obtener más información sobre las propiedades de la plantilla `extension.xsd` , consulte la [descripción general del formato de archivo XML](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format).

## Validación de archivos XML [#file-validation]

Antes de iniciar su aplicación, valide su archivo XML usando la herramienta de línea de comando de New Relic. La herramienta de línea de comando solo se puede usar cuando tus clases están en un jar. Hay dos formas de validar su instrumentación XML:

<CollapserGroup>
  <Collapser
    id="pre-java-10"
    title="Versiones de Java inferiores a Java 10"
  >
    La forma más sencilla de hacer esto para versiones de Java inferiores a Java 10 es con este comando:

    ```bash
    java -Djava.ext.dirs=/path/to/jarred/classes -jar newrelic.jar instrument -file /path/to/file.xml -debug true
    ```
  </Collapser>

  <Collapser
    id="all-java-versions"
    title="Todas las versiones de Java"
  >
    <Callout variant="tip">
      Para versiones de Java inferiores a Java 10, consulte el [procedimiento recomendado](#pre-java-10). Ese procedimiento no es posible con Java 10 o superior porque esas versiones ya no permiten configurar `java.ext.dirs` .
    </Callout>

    Para todas las versiones de Java, puede configurar `classpath` manualmente:

    ```bash
    java -cp /path/to/your-app.jar:/path/to/newrelic.jar com.newrelic.bootstrap.BootstrapAgent instrument -file /path/to/file.xml -debug true
    ```
  </Collapser>
</CollapserGroup>

La aplicación se ejecuta con el `newrelic.jar`. La llamada debe contener la palabra clave `instrument` seguida de la marca `-file` con la ruta a su archivo XML. La propiedad `-debug` es opcional y se puede establecer en `true` para proporcionar más información durante la validación.

La herramienta:

* Valide la sintaxis XML.
* Compruebe que cada clase a instrumentar esté presente en la ruta de clases.
* Compruebe que cada método esté contenido en la clase adecuada.

Si el archivo XML es válido, verá una declaración de aprobación impresa en la terminal:

```
PASS: The extension at file.txt was successfully validated.
```

Si el XML no supera la validación, verá un mensaje de error impreso en el terminal:

```
FAIL: reason
```

## Ubicación del archivo XML [#file-location]

El agente de Java lee los archivos XML en el directorio `extensions` al iniciar el proceso. El directorio `extensions` también se lee en cada [ciclo de recolección](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#harvest-cycle). Los archivos XML agregados a este directorio durante el tiempo de ejecución se leerán en unos minutos, por lo que no requieren reiniciar la JVM.

Hay dos formas de especificar la ubicación del archivo XML:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **XML file location options**
        </DNT>
      </th>

      <th>
        <DNT>
          **Procedure**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Crear un directorio de extensiones
      </td>

      <td>
        1. En el directorio donde se encuentran newrelic.jar y newrelic.yml, cree un directorio llamado `extensions`.
        2. Coloque el archivo XML en este directorio con una extensión `.xml` .
        3. En `newrelic.yml`, verifique que la propiedad `extensions.dir` no esté configurada.
      </td>
    </tr>

    <tr>
      <td>
        Especificar un directorio de extensiones existente
      </td>

      <td>
        1. En el archivo de configuración `newrelic.yml` en la sección común, utilice la propiedad `extensions.dir` para especificar el directorio donde se encuentra el archivo XML.
        2. Asegúrese de que el archivo esté en el directorio especificado y que tenga una extensión `.xml` .
      </td>
    </tr>
  </tbody>
</table>

## Verificar que el archivo fue leído [#verifying-read]

Para verificar que el agente lea el archivo XML, primero [configure la administración de registros en `finer`](/docs/java/java-kb-101):

1. Edite el archivo de configuración `newrelic.yml` y cambie la propiedad `log_level` :

   ```yml
   log_level: finer
   ```

2. Inicie o reinicie la aplicación.

Si la lectura fue exitosa, `logs/newrelic_agent.log` lo indicará en una declaración similar a:

```
Reading custom extension file /path/to/file.xml
```

Si no aparece ninguna declaración en `logs/newrelic_agent.log`, entonces no se encontró el archivo XML. Verifique la ubicación del archivo XML y asegúrese de que el proceso New Relic tenga acceso de lectura al archivo.

## Múltiples archivos XML [#multiplying-files]

Si bien se prefiere utilizar un único archivo XML, puede utilizar varios archivos XML personalizados. Todos estos archivos estarán instrumentados siempre que el nombre de la extensión en los archivos sea único.

* Si dos archivos XML personalizados contienen el mismo nombre de extensión, se implementará el que tenga la versión más alta y el otro se ignorará.
* Si los dos archivos tienen el mismo nombre y versión, se implementará el primer archivo leído por el agente y el otro se ignorará.

## XML y YAML

Antes de 2.10.0, Los archivos YAML se pueden utilizar para instrumentación personalizada. Estos archivos YAML legacy todavía son compatibles. Sin embargo, el nuevo usuario debe utilizar archivos XML para instrumentación personalizada.

<DNT>**Legacy users:**</DNT> Si existen archivos YAML y XML con el mismo nombre de extensión, solo se instrumentará el archivo XML. El archivo YAML será ignorado. Si desea instrumentar los archivos YAML y XML, asigne a cada archivo un nombre de extensión diferente.

## Archivo XML de ejemplo [#example]

Para ver un ejemplo de un archivo XML de instrumentación personalizada, consulte [Ejemplos de Java XML](/docs/java/custom-xml-examples).
