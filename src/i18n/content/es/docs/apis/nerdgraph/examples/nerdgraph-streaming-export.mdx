---
title: 'exportación de streaming de datos: envíe sus datos a un AWS Kinesis Firehose o Azure evento Hub'
tags:
  - APIs
  - NerdGraph
metaDescription: 'With the New Relic streaming export feature, you can send your data as it''s ingested to New Relic to an AWS Kinesis Firehose or Azure Event Hub.'
freshnessValidatedDate: never
translationType: machine
---

Con nuestra característica de exportación de streaming, disponible con [Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing/#data-plus), puede enviar sus datos a AWS Kinesis Firehose o Azure Event Hub a medida que New Relic los ingiere. Explicaremos cómo crear y actualizar una regla de transmisión usando [NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) y cómo ver las reglas existentes. Puede utilizar [el explorador NerdGraph](/docs/apis/nerdgraph/get-started/nerdgraph-explorer) para realizar estas llamadas.

## ¿Qué es la exportación por streaming? [#definition]

A medida que su organización New Relic ingiere los datos, nuestra característica de exportación de streaming envía esos datos a un AWS Kinesis Firehose o Azure Event Hub. Puede configurar reglas personalizadas, que se definen mediante [NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language), para controlar qué tipos de datos de New Relic exportará. También puede optar por comprimir estos datos antes de exportarlos, utilizando nuestra nueva característica [Exportar compresión](#compression) .

Algunos ejemplos de cosas para las que puede utilizar la exportación de streaming:

* Para llenar un lago de datos
* Mejorar la formación en IA/ML
* Retención a largo plazo por motivos de cumplimiento, legales o de seguridad

Puede deshabilitar o habilitar las reglas de exportación de transmisión cuando lo desee. Pero tenga en cuenta que la exportación de streaming solo envía datos ingeridos actualmente, lo que significa que si la desactiva y la vuelve a habilitar, los datos ingeridos cuando estaba desactivada no se enviarán con esta característica. Para exportar datos pasados, puede utilizar [la exportación de datos históricos](/docs/apis/nerdgraph/examples/nerdgraph-historical-data-export).

## Requisitos y límites [#requirements]

Límites de datos transmitidos: la cantidad de datos que puede transmitir por mes está limitada por el total [de datos ingeridos](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing/#usage-calculation) por mes. Si su cantidad de transmisión de datos excede la cantidad de datos ingeridos, podemos suspender su acceso y uso de la exportación de transmisión.

Requisitos relacionados con los permisos:

* Pro o edición Enterprise con opción [Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing/#data-plus)
* Tipo de usuario: [usuario principal o usuario de plataforma completa](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type)
* El [permiso de streaming de datos](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions#data-platform)

Debe tener un AWS Kinesis Firehose o Azure evento Hub configurado para recibir datos de New Relic. Si aún no lo ha hecho, puede seguir nuestros pasos a continuación para [AWS](#firehose-setup) o [Azure](#event-hub-setup).

Requisitos NRQL:

* Debe ser consulta plana, sin agregación. Por ejemplo, se admiten los formularios `SELECT *` o `SELECT column1, column2` .
* Aplicable a cualquier contenido de la cláusula `WHERE` , excepto a las subconsultas.
* La consulta no puede tener una cláusula `FACET` , `COMPARE WITH` o `LOOKUP`.
* No se admiten consultas anidadas.
* Admite [tipos de datos almacenados en NRDB](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data), y no [datos de intervalo de tiempo de métrica](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data).

## Configurar una AWS Kinesis Firehose [#firehose-setup]

Para configurar la exportación de transmisión de datos a AWS, primero debe configurar Amazon Kinesis Firehose. Lo guiaremos a través de ese procedimiento en los siguientes tres pasos.

### Paso 1. Cree un Firehose para exportar en streaming [#create-firehose]

Cree un Firehose dedicado para transmitir sus datos de New Relic a:

1. Vaya a Amazon Kineses Data Firehose.

2. Cree un flujo de entrega.

3. Asigne un nombre a la secuencia (usará este nombre más adelante en el registro de la regla).

4. Utilice

   <DNT>
     **Direct PUT or other sources**
   </DNT>

   y especifique un destino compatible con el formato de evento JSON de New Relic (por ejemplo, S3, Redshift u OpenSearch).

### Paso 2. Crear una política de acceso de escritura de IAM Firehose [#create-policy]

1. Vaya al IAM y seleccione

   <DNT>
     **Policies**
   </DNT>

   .

2. Cree una política.

3. Seleccione el servicio Firehose y luego seleccione `PutRecord` y `PutRecordBatch`.

4. Para `Resources`, seleccione la transmisión de entrega, agregue ARN y seleccione la región de su transmisión.

5. Ingrese su número de cuenta de AWS y luego ingrese el nombre del flujo de entrega que desee en el cuadro de nombre.

6. Cree la política.

### Paso 3. Cree una función de IAM para otorgar acceso de escritura a New Relic [#iam-role]

Para configurar la función de IAM:

1. Navegue hasta IAM y haga clic en

   <DNT>
     **Roles**
   </DNT>

   .

2. Cree un rol para una cuenta de AWS y luego seleccione

   <DNT>
     **for another AWS account**
   </DNT>

   .

3. Ingrese el ID de la cuenta de exportación de New Relic: `888632727556`.

4. Seleccione

   <DNT>
     **Require external ID**
   </DNT>

   e ingrese el [ID](/docs/accounts/accounts-billing/account-structure/account-id) de la cuenta New Relic desde la que desea exportar.

5. Haga clic en

   <DNT>
     **Permissions**
   </DNT>

   y luego seleccione la política que creó anteriormente.

6. Agregue un nombre de función (esto se usará en el registro de exportación) y una descripción.

7. Crea el rol.

Una vez hecho esto, puede trabajar en la configuración de sus reglas de exportación usando NerdGraph. Para más información sobre eso, sigue leyendo.

## Configurar un centro de eventos de Azure [#event-hub-setup]

Para configurar la exportación de transmisión de datos a Azure, primero debe configurar un centro de eventos. Lo guiaremos a través de ese procedimiento en los siguientes tres pasos.

Alternativamente, puede seguir la guía de Azure [aquí](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-create).

### Paso 1. Crear un namespacede eventos Hubs [#create-event-hubs-namespace]

1. Navegue hasta Event Hubs dentro de su cuenta de Microsoft Azure.

2. Siga los pasos para crear un namespace de eventos Hubs. Recomendamos habilitar la inflación automática para garantizar que reciba todos sus datos.

3. Asegúrese de que el acceso público esté habilitado; usaremos una Política de acceso compartido para autenticarse de forma segura con su evento Hub.

4. Una vez que namespace de tu evento Hubs esté implementado, haz clic en

   <DNT>
     **Go to resource**
   </DNT>

   .

### Paso 2. Crea un centro de eventos [#create-event-hub]

1. En la columna de la izquierda, haga clic en

   <DNT>
     **Event Hubs**
   </DNT>

   .

2. Luego haga clic en

   <DNT>
     **+Event Hub**
   </DNT>

   para crear un centro de eventos.

3. Ingrese el nombre del centro de eventos deseado. Guárdelo, ya que lo necesitará más adelante para crear la regla de exportación de streaming.

4. Una vez creado el centro de eventos, haga clic en el centro de eventos.

### Paso 3. Cree y adjunte una política de acceso compartido [#event-hub-policy]

1. En la columna de la izquierda, vaya a

   <DNT>
     **Shared access policies**
   </DNT>

   .

2. Haga clic en

   <DNT>
     **+Add**
   </DNT>

   cerca de la parte superior de la página.

3. Elija un nombre para su política de acceso compartido.

4. Marque

   <DNT>
     **Send**
   </DNT>

   y haga clic en

   <DNT>
     **Create**
   </DNT>

   .

5. Haga clic en la política creada y copie el

   <DNT>
     **Connection string–primary key**
   </DNT>

   . Guarde esto, ya que lo usaremos para autenticar y enviar datos a su centro de eventos.

Una vez hecho esto, puede trabajar en la configuración de sus reglas de exportación usando NerdGraph. Para más información sobre eso, sigue leyendo.

## Campos importantes [#fields]

La mayoría de las llamadas NerdGraph de exportación de streaming de datos que cubriremos utilizan algunos campos relacionados con su cuenta:

Para AWS Kinesis Firehose:

* `awsAccountId`: El [ID de la cuenta de AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html). Por ejemplo: `10000000000`
* `deliveryStreamName`: El [nombre de la transmisión de Kinesis](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html). Por ejemplo: `firehose-test-stream`.
* `region`: La [región de AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html). Por ejemplo: `us-east-1`.
* `role`: La [función de AWS IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) para Kinesis Firehose. Este siempre será `firehose-role`.

Para centros de eventos de Azure:

* `eventHubConnectionString`: [Cadena de conexión de Azure Event Hub](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string). Se parece a: `Endpoint=sb://<NamespaceName>.servicebus.windows.net/;SharedAccessKeyName=<KeyName>;SharedAccessKey=<KeyValue>;EntityPath=<EventHubName>`
* `eventHubName`: El nombre del centro de eventos. Por ejemplo: `my-event-hub`.

## Cómo crear una regla de exportación de streaming [#create-stream]

Primero, decida qué datos desea exportar. Luego, con una llamada a NerdGraph, crearás las reglas de transmisión que deseas usando NRQL. Daremos algunos ejemplos.

### Crear una secuencia [#create-stream]

Cuando crea una nueva regla de transmisión, necesitará todos los siguientes campos. A continuación se muestra un ejemplo de creación de una regla de transmisión que se exporta a AWS Kinesis Firehose:

```graphql
mutation {
  streamingExportCreateRule(
    accountId: YOUR_NR_ACCOUNT_ID,
    ruleParameters: {
      description: "ADD_RULE_DESCRIPTION",
      name: "PROVIDE_RULE_NAME",
      nrql: "SELECT * FROM NodeStatus",
      payloadCompression: DISABLED
    },
    awsParameters: {
      awsAccountId: "YOUR_AWS_ACCOUNT_ID",
      deliveryStreamName: "FIREHOSE_STREAM_NAME",
      region: "SPECIFY_AWS_REGION",
      role: "firehose-role"
    }
  ) {
    id
    status
  }
}
```

A continuación se muestra un ejemplo de creación de una regla de transmisión que se exporta a un centro de eventos de Azure:

```graphql
mutation {
  streamingExportCreateRule(
    accountId: YOUR_NR_ACCOUNT_ID,
    ruleParameters: {
      description: "ADD_RULE_DESCRIPTION",
      name: "PROVIDE_RULE_NAME",
      nrql: "SELECT * FROM NodeStatus",
      payloadCompression: DISABLED
    },
    azureParameters: {
      eventHubConnectionString: "YOUR_EVENT_HUB_SAS_CONNECTION_STRING",
      eventHubName: "YOUR_EVENT_HUB_NAME"
    }
  ) {
    id
    status
  }
}
```

Obtendrá un resultado inmediatamente con un ID de regla y un estado. El estado se mostrará como `CREATION_IN_PROGRESS`. Puede utilizar la identificación de la regla para verificar si la regla se creó correctamente.

La regla puede tardar hasta seis minutos en completar su creación debido a que la validación de la política lleva algún tiempo.

Antes de que la regla termine de registrarse, no puede iniciar otra acción de mutación (como `Enable`, `Disable` o `Update`) porque la regla está bloqueada para el proceso de creación. Si intenta otra acción de mutación antes de que la regla complete el proceso de registro, recibirá un mensaje como: "La regla de exportación se está actualizando actualmente mediante otra solicitud. Espere y vuelva a intentarlo más tarde".

Puedes utilizar `Delete` en cualquier momento.

La creación puede finalizar y cambiar el estado en cualquier momento dentro de los aproximadamente seis minutos necesarios para la creación de la regla. El estado cambiará a `ENABLED`, `DISABLED` o `CREATION_FAILED`.

Vea estos detalles sobre los valores:

* `ENABLED` significa que la regla se creó correctamente y los datos comenzaron a transmitirse.
* `CREATION_FAILED` significa que la regla falló en la creación. Esto puede suceder por varios motivos, pero a menudo se debe a un error en la política de AWS o en la validación de SAS de Azure.
* `DISABLED` significa que la regla se creó pero aún no está habilitada debido a motivos como que se alcanzó el límite de flujo de filtro o que falló la creación de la regla de flujo de filtro. Si el estado sigue siendo `CREATION_IN_PROGRESS` después de seis minutos, eso significa que la creación de la regla falló debido a un error del sistema en nuestro servicio. Puede eliminar la regla e intentar crear una nueva nuevamente.

Una vez que se crea una regla de transmisión, puede [verla](#view-stream).

### Actualizar una transmisión [#update-stream]

Cuando actualice una nueva regla de transmisión, necesitará todos los siguientes campos. A continuación se muestra un ejemplo de cómo actualizar una regla de transmisión:

Manguera contra incendios AWS Kinesis:

```graphql
mutation {
  streamingExportUpdateRule(
    id: RULE_ID,
    ruleParameters: {
      description: "ADD_RULE_DESCRIPTION",
      name: "PROVIDE_RULE_NAME",
      nrql: "YOUR_NRQL_QUERY",
      payloadCompression: DISABLED
    },
    awsParameters: {
      awsAccountId: "YOUR_AWS_ACCOUNT_ID",
      deliveryStreamName: "FIREHOSE_STREAM_NAME",
      region: "SPECIFY_AWS_REGION",
      role: "firehose-role"
    }
  ) {
    id
    status
  }
}
```

Centro de eventos de Azure:

```graphql
mutation {
  streamingExportUpdateRule(
    id: RULE_ID,
    ruleParameters: {
      description: "ADD_RULE_DESCRIPTION",
      name: "PROVIDE_RULE_NAME",
      nrql: "YOUR_NRQL_QUERY",
      payloadCompression: DISABLED
    },
    azureParameters: {
      eventHubConnectionString: "YOUR_EVENT_HUB_SAS_CONNECTION_STRING",
      eventHubName: "YOUR_EVENT_HUB_NAME"
    }
  ) {
    id
    status
  }
}
```

Al actualizar, recibirá un mensaje en el campo de mensaje: “La regla de exportación se está actualizando y el proceso puede tardar unos minutos en completarse. Por favor, vuelve a comprobarlo más tarde”. La actualización completa puede tardar hasta seis minutos.

Puede comprobar si la regla está actualizada llamando a `streamingRule` para recuperar la regla. Durante el período en que la regla se actualiza, la regla está bloqueada y ninguna otra acción de mutación puede actuar sobre la regla. Si está intentando realizar otra acción de mutación en la misma regla, recibirá un mensaje que dice: "La regla de exportación se está actualizando actualmente mediante otra solicitud. Espere y vuelva a intentarlo más tarde". Un usuario puede actualizar una regla de cualquier estado excepto una regla eliminada.

### Deshabilitar una transmisión [#disable-stream]

Para deshabilitar una regla, solo necesita proporcionar el ID de la regla. Aquí hay un ejemplo de cómo deshabilitar una transmisión:

```graphql
mutation {
  streamingExportDisableRule(id: RULE_ID) {
    id
    status
    message
  }
}
```

Solo puede deshabilitar la regla cuando la regla tiene un estado de `ENABLED`. Si intenta deshabilitar una regla que se encuentra en otro estado, se devuelve el mensaje de error "La regla de exportación no se puede habilitar o deshabilitar debido a que el estado no está permitido". No puede desactivar la regla si está bloqueada debido a que se está realizando otra mutación.

### Habilitar una transmisión [#enable-stream]

Si desea habilitar una regla, solo necesita proporcionar el ID de la regla. A continuación se muestra un ejemplo de cómo habilitar una transmisión:

```graphql
mutation {
  streamingExportEnableRule(id: RULE_ID) {
    id
    status
    message
  }
}
```

Solo puedes habilitar la regla cuando tiene un estado de `DISABLED`. Si intenta habilitar una regla que se encuentra en otro estado, se devuelve un mensaje de error como "La regla de exportación no se puede habilitar o deshabilitar debido a que el estado no está permitido". No puede habilitar la regla si está bloqueada debido a que se está realizando otra mutación.

### Eliminar una secuencia [#delete-stream]

Deberá proporcionar un ID de regla para eliminar una transmisión. He aquí un ejemplo:

```graphql
mutation {
  streamingExportDeleteRule(id: RULE_ID) {
    id
    ...
  }
}
```

La eliminación se puede realizar en una regla de cualquier estado a menos que ya esté eliminada. Una vez que se elimina una regla, no se puede reactivar nuevamente. La regla aún se puede ver dentro de las primeras 24 horas después de la eliminación llamando a la API `steamingRule` con el ID de la regla. Después de 24 horas, la regla ya no se podrá buscar a través de NerdGraph.

## Ver transmisiones [#view-stream]

Puede consultar información sobre una regla de transmisión específica consultando el ID de la cuenta y el ID de la regla. He aquí un ejemplo:

Manguera contra incendios AWS Kinesis:

```graphql
{
  actor {
    account(id: YOUR_NR_ACCOUNT_ID) {
      streamingExport {
        streamingRule(id: "RULE_ID") {
          aws {
            awsAccountId
            deliveryStreamName
            region
            role
          }
          createdAt
          description
          id
          message
          name
          nrql
          status
          updatedAt
          payloadCompression
        }
      }
    }
  }
}
```

Centro de eventos de Azure:

```graphql
{
  actor {
    account(id: YOUR_NR_ACCOUNT_ID) {
      streamingExport {
        streamingRule(id: "RULE_ID") {
          azure {
            eventHubConnectionString
            eventHubName
          }
          createdAt
          description
          id
          message
          name
          nrql
          status
          updatedAt
          payloadCompression
        }
      }
    }
  }
}
```

También puede consultar todas las transmisiones existentes. He aquí un ejemplo:

```graphql
{
  actor {
    account(id: YOUR_NR_ACCOUNT_ID) {
      streamingExport {
        streamingRules {
          aws {
            awsAccountId
            region
            deliveryStreamName
            role
          }
          azure {
            eventHubConnectionString
            eventHubName
          }
          createdAt
          description
          id
          message
          name
          nrql
          status
          updatedAt
          payloadCompression
        }
      }
    }
  }
}
```

## Exportar compresión [#compression]

Opcionalmente, podemos comprimir carga antes de exportarla, aunque esto está deshabilitado por defecto. Esto puede ayudar a evitar alcanzar el límite de datos ingeridos y ahorrar dinero en costos de ingreso.

Puede habilitar la compresión utilizando el campo `payloadCompression` debajo de `ruleParameters`. Este campo puede tener cualquiera de los siguientes valores:

* `DISABLED`: la carga no se comprimirá antes de exportarse. Si no se especifica, `payloadCompression` adoptará de forma predeterminada este valor.
* `GZIP`: Comprimir carga con el formato GZIP antes de exportar

GZIP es el único formato de compresión disponible actualmente, aunque es posible que optemos por ofrecer más formatos en el futuro.

Cuando la compresión está habilitada en una regla de exportación de AWS existente, el siguiente mensaje de Kinesis Firehose puede contener datos comprimidos y sin comprimir. Esto se debe al almacenamiento en búfer dentro de Kinesis Firehose. Para evitar esto, puede deshabilitar temporalmente la regla de exportación antes de habilitar la compresión o crear una nueva secuencia de Kinesis Firehose para que fluyan solo los datos comprimidos.

Si encuentra este problema y está exportando a S3 u otro sistema de almacenamiento de archivos, puede ver la parte comprimida de los datos siguiendo estos pasos:

1. Descargue manualmente el objeto.
2. Separe el objeto en dos archivos separados copiando los datos comprimidos en un archivo nuevo.
3. Descomprima el nuevo archivo de datos solo comprimido.

Una vez que tenga los datos comprimidos, puede volver a cargarlos en S3 (o cualquier otro servicio que esté utilizando) y eliminar el archivo antiguo.

Tenga en cuenta que en S3 u otro sistema de almacenamiento de archivos, los objetos pueden constar de varias cargas codificadas en GZIP que se añaden consecutivamente. Por lo tanto, su biblioteca de descompresión debería tener la capacidad de manejar dicha carga GZIP concatenada.

### Descompresión automática en AWS

Una vez que sus datos hayan llegado a AWS, es posible que desee opciones para descomprimirlos automáticamente. Si está transmitiendo esos datos a un depósito S3, hay dos formas de habilitar la descompresión automática:

<CollapserGroup>
  <Collapser
    id="collapser-1"
    title="Objeto punto de acceso Lambda"
  >
    Los puntos de acceso funcionan como métodos separados mediante los cuales se puede acceder y descargar objetos en depósitos de S3. AWS proporciona una característica llamada [Puntos de acceso de objetos Lambda](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingMetadata.html), que realizan una función Lambda en cada objeto S3 al que se accede a través del punto de acceso. Siga estos pasos para habilitar dicho punto de acceso:

    1. Navegue a [esta página](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-examples.html#olap-examples-3) y haga clic en el enlace al repositorio sin servidor.

    2. Haga clic en el botón

       <DNT>
         **Deploy**
       </DNT>

       en la parte inferior de la página.

    3. [Configure un punto de acceso en su depósito S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-access-points.html).

    4. [Cree un punto de acceso de Object Lambda](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html). Este punto de acceso debe tener estas configuraciones:

       * El

         <DNT>
           **Supporting Access Point**
         </DNT>

         de este punto de acceso Lambda deberá configurarse en el punto de acceso que configuró en el depósito S3.

       * Bajo

         <DNT>
           **Transformation Configuration**
         </DNT>

         :

       * La casilla

         <DNT>
           **GetObject**
         </DNT>

         debe estar marcada.

       * Se debe especificar la función Lambda DecompressGZFunction (o cualquier otra función que sea necesaria, si se utiliza un formato de compresión diferente).
  </Collapser>

  <Collapser
    id="collapser-2"
    title="Función Lambda de configuración de metadatos"
  >
    AWS descomprimirá automáticamente los objetos descargados de S3, si esos objetos tienen los metadatos correctos configurados. Hemos escrito una función que aplica automáticamente estos metadatos a cada nuevo objeto descargado a un objeto S3 establecido. Aquí se explica cómo configurarlo:

    1. Navegue [aquí](https://github.com/newrelic/metadata-setting-lambda-function), clone el repositorio localmente y siga los pasos proporcionados en el archivo README para generar un archivo ZIP que contenga la función Lambda.
    2. Cree un [rol de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) para la función.

    * Al [crear el rol](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-service.html#roles-creatingrole-service-console), asegúrese de configurar el tipo de entidad confiable como "servicios de AWS", con "Lambda" como su caso de uso.
    * Este rol debe tener una política con estos permisos: `s3:PutObject` y `s3:GetObject`.

    3. En AWS, navegue hasta la [página de función Lambda](https://console.aws.amazon.com/lambda/home#/functions).

    4. Haga clic en <DNT>**Create function**</DNT>.

    5. Seleccione el entorno de ejecución de Java 11.

    6. Haga clic en <DNT>**Change default execution role > Use an existing role**</DNT>. Ingrese aquí el rol que creó en el paso 2.

    7. Desplácese hacia abajo y haga clic en <DNT>**Create function**</DNT>.

    8. Una vez creada la función, haga clic en <DNT>**Upload from**</DNT> y seleccione <DNT>**.zip or .jar file**</DNT> en el menú desplegable.

    9. Haga clic en <DNT>**Upload**</DNT> en el cuadro que aparece y seleccione el archivo ZIP creado en el paso 1.

    10. Una vez que haya finalizado la carga, haga clic en <DNT>**Save**</DNT> para salir del cuadro emergente.

    11. Edite <DNT>**Runtime settings**</DNT> agregando el controlador. En nuestra función proporcionada, el controlador es <DNT>`metadatasetter.App::handleRequest`</DNT>.

    12. Todo lo que queda por hacer ahora es habilitar esta función Lambda para que se active al crear objetos S3. Haga clic en <DNT>**Add trigger**</DNT> para comenzar a configurarlo.

    13. En el menú desplegable, seleccione <DNT>**S3**</DNT> como fuente.

    14. Ingrese el nombre del depósito de S3 al que desea aplicar los metadatos en el campo <DNT>**Bucket**</DNT> .

    15. Elimine el <DNT>**All object create events**</DNT> predeterminado de los tipos de eventos. En el menú desplegable de tipos de eventos, seleccione <DNT>**PUT**</DNT>.

    16. Marque la casilla <DNT>**Recursive invocation**</DNT> y luego haga clic en <DNT>**Add**</DNT> en la parte inferior derecha.

        La función Lambda ahora comenzará a agregar automáticamente los metadatos de compresión a todos los objetos S3 recién agregados.
  </Collapser>
</CollapserGroup>

### Descompresión automática en Azure

Si exporta datos a Azure, es posible ver versiones descomprimidas de los objetos almacenados en su centro de eventos mediante un [trabajo de Stream Analytics](https://learn.microsoft.com/en-us/azure/event-hubs/process-data-azure-stream-analytics). Para hacerlo, siga estos pasos:

1. Siga [esta guía](https://learn.microsoft.com/en-us/azure/event-hubs/process-data-azure-stream-analytics) hasta el paso 16.

* En el paso 13, puede optar por utilizar el mismo centro de eventos como salida sin romper nada, aunque no recomendamos esto si tiene la intención de continuar con el paso 17 y comenzar el trabajo, ya que no se ha probado.

2. En el panel izquierdo de su trabajo de análisis de transmisión, haga clic en

   <DNT>
     **Inputs**
   </DNT>

   y luego haga clic en la entrada que configuró.

3. Desplácese hacia abajo hasta la parte inferior del panel que aparece a la derecha y configure la entrada con estas configuraciones:

* formato de serialización de eventos: JSON
* Codificación: UTF-8
* tipo de compresión de eventos: GZip

4. Haga clic en

   <DNT>
     **Save**
   </DNT>

   en la parte inferior del panel.

5. Haga clic en

   <DNT>
     **Query**
   </DNT>

   en el costado de la pantalla. Usando la pestaña

   <DNT>
     **Input preview**
   </DNT>

   , ahora debería poder consultar el centro de eventos desde esta pantalla.
