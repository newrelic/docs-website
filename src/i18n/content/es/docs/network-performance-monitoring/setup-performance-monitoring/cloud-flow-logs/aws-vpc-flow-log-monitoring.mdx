---
title: Configurar el monitoreo del registro de flujo de Amazon VPC
tags:
  - Integrations
  - Network monitoring
  - Installation
  - Setup
  - AWS
metaDescription: Set up Amazon VPC Flow Logs monitoring.
freshnessValidatedDate: never
translationType: machine
---

<Video
  type="youtube"
  id="ao_8izubBFw"
/>

El registro de Amazon Virtual Private Cloud Flow (VPC) a través de Amazon Kinesis Data Firehose le ayuda a reducir la fricción al enviar registros a New Relic. Con el registro de flujo de VPC de todos sus activos AWS , puede comprender rápidamente información clave y valiosa para el análisis de rendimiento y la resolución de problemas de conectividad de red.

<img
  title="Amazon VPC Flow Logs overview"
  alt="Amazon VPC Flow Logs overview"
  src="/images/network_screenshot-crop_cloud-flow-logs-overview.webp"
/>

<figcaption>
  <DNT>**Add [Amazon VPC Flow Logs to your New Relic account](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>.
</figcaption>

Amazon Virtual Private Cloud (VPC) le permite lanzar recursos AWS en una red virtual aislada y segura con los beneficios de utilizar una infraestructura AWS escalable.

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
    variant="primary"
  >
    Agregar registro de flujo de Amazon VPC
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
    variant="primary"
  >
    Instalación guiada, región de la UE
  </ButtonLink>
</ButtonGroup>

## Requisitos previos [#prerequisites]

### Requisitos previos New Relic [#prerequisites-NR]

* Una cuenta New Relic . ¿No tienes uno? [¡Registrate gratis!](https://newrelic.com/signup) No se requiere tarjeta de crédito.

### Requisitos previos de AWS [#prerequisites-aws]

<Callout variant="important">
  El registro de flujo de Amazon VPC a través de Kinesis Data Firehose aún no es compatible con los clientes de FedRAMP. Mientras tanto, puede utilizar [nuestras API de ingesta de FedRAMP](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints#data-ingest-apis).
</Callout>

* Ambiente:

  * [AWS CLI (v 1.9.15+) instalado](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
  * Una lista de regiones AWS donde recopila el registro de flujo de Amazon VPC.
  * [ID de VPC](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-vpcs.html) que se configurarán para enviar el registro de flujo de VPC. Si desea un control más granular, especifique los [ID de subred](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-subnets.html) en lugar de los ID de VPC.

* Permisos:

  * Un usuario AWS con [permisos para crear registros de flujo de VPC](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-iam).
  * Permisos de registro de archivo de Amazon S3 para [lectura y escritura para el propietario de la entrega log ](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-file-permissions).
  * Permitir que [Kinesis Data Firehose asuma una función de IAM](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#firehose-assume-role).

* [Nombres de recursos de Amazon (ARN)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html):

  * ARN de un depósito S3 con permisos para [almacenar mensajes de registro de flujo no entregado](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-permissions).

  * Si desea habilitar el muestreo, necesitará el ARN para la función IAM de Lambda.

  * ARN para [Kinesis Data Firehose con acceso al depósito S3](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3).

    <Callout variant="tip">
      Le recomendamos crear una nueva manguera de datos con nuestra instalación guiada la primera vez que configure el registro de flujo de VPC para una región específica. Para VPC y subredes posteriores en la misma región, puede reutilizar la manguera de datos existente.
    </Callout>

### Funciones de IAM [#iam-roles]

Si configura la integración del registro de flujo mediante la CLI AWS , debe proporcionar uno o dos roles de IAM para diferentes componentes de infraestructura. Si utiliza CloudFormation, puede proporcionar sus propios roles o dejar que la plantilla defina nuevos roles.

Los roles necesarios deben tener al menos los siguientes permisos:

<CollapserGroup>
  <Collapser
    id="kinesis-firehose"
    title="Manguera de fuego Kinesis"
  >
    Este permiso es necesario.

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "",
                "Effect": "Allow",
                "Action": [
                    "s3:AbortMultipartUpload",
                    "s3:GetBucketLocation",
                    "s3:GetObject",
                    "s3:ListBucket",
                    "s3:ListBucketMultipartUploads",
                    "s3:PutObject"
                ],
                "Resource": [
                    "arn:aws:s3:::<FIREHOSE_ERRORS_BUCKET>",
                    "arn:aws:s3:::<FIREHOSE_ERRORS_BUCKET>/*"
                ]
            },
            {
                "Sid": "",
                "Effect": "Allow",
                "Action": [
                    "lambda:InvokeFunction",
                    "lambda:GetFunctionConfiguration"
                ],
                "Resource": [
                    "arn:aws:lambda:us-west-2:<YOUR_ACCOUNT>:function:NewRelic-Flow-Sampling-Lambda",
                    "arn:aws:lambda:us-west-2:<YOUR_ACCOUNT>:function:NewRelic-Flow-Sampling-Lambda:*"
                ]
            }
        ]
    }
    ```
  </Collapser>

  <Collapser
    id="aws-sampling-lambda"
    title="Lambda de muestreo de AWS"
  >
    Solo necesita este permiso si utiliza muestreo.

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": "logs:CreateLogGroup",
                "Resource": "arn:aws:logs:us-west-2:<YOUR_ACCOUNT>:*",
                "Effect": "Allow"
            },
            {
                "Action": [
                    "logs:CreateLogStream",
                    "logs:PutLogEvents"
                ],
                "Resource": [
                    "arn:aws:logs:us-west-2:<YOUR_ACCOUNT>:log-group:/aws/lambda/NewRelic-Flow-Sampling-Lambda:*"
                ],
                "Effect": "Allow"
            }
        ]
    }
    ```
  </Collapser>
</CollapserGroup>

## Formateando su inicio de sesión en New Relic [#NR-logs-format]

Para utilizar la exploración log flujo seleccionado y el enlace de entidades, debe seguir este formato para el registro de flujo de VPC:

```shell
${version} ${account-id} ${region} ${az-id} ${sublocation-type} ${vpc-id} ${subnet-id} ${instance-id} ${interface-id} ${srcaddr} ${pkt-srcaddr} ${pkt-src-aws-service} ${dstaddr} ${pkt-dstaddr} ${pkt-dst-aws-service} ${srcport} ${dstport} ${protocol} ${packets} ${bytes} ${flow-direction} ${traffic-path} ${start} ${end} ${action} ${log-status}
```

<Callout variant="tip">
  Si desea obtener más información sobre los campos log , consulte los campos disponibles en la [documentación de VPC Amazon](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-logs-fields).
</Callout>

Debe utilizar una [partición log ](/docs/logs/ui-data/data-partitions)para el registro de flujo de VPC denominada `Log_VPC_Flows_AWS`. Si utiliza la [instalación guiada](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9), esto se maneja automáticamente.

## Configurar el monitoreo del registro de flujo de Amazon VPC en New Relic [#setup-aws-vpc-flow-logs]

Siga el asistente guiado para instalar el registro de flujo de Amazon VPC:

1. Inicie el

   <DNT>
     **[guided install process](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**
   </DNT>

   .

2. En el

   <DNT>
     **Select an account**
   </DNT>

   desplegable, elija la cuenta New Relic a la que desea enviar el registro de flujo de Amazon VPC y haga clic en

   <DNT>
     **Continue**
   </DNT>

   .

3. En la sección

   <DNT>
     **Select your data**
   </DNT>

   , elija

   <DNT>
     **Amazon VPC Flow Logs**
   </DNT>

   y haga clic en

   <DNT>
     **Continue**
   </DNT>

   .

4. En la sección

   <DNT>
     **Select your install method**
   </DNT>

   , continúe con

   <DNT>
     **CLI**
   </DNT>

   y haga clic en

   <DNT>
     **Continue**
   </DNT>

   .

Después de estos pasos, aparece un nuevo asistente para ayudarlo a configurar el envío del registro de flujo de Amazon VPC a New Relic a través del servicio AWS Kinesis Firehose.

1. En la sección <DNT>**Choose Setup Options**</DNT> :

   * Verifique que su método de configuración sea correcto.

   * Seleccione la región AWS que enviará el registro de flujo de VPC a New Relic.

   * Opcionalmente, si está reutilizando Kinesis Data Firehose, seleccione la casilla de verificación

     <DNT>
       **I already have a Kinesis Firehose to New Relic**
     </DNT>

     y continúe con la sección

     <DNT>
       **Define flow logs**
     </DNT>

     .

   * Haga clic en

     <DNT>
       **Continue**
     </DNT>

     .

2. En la sección <DNT>**Define Kinesis Firehose**</DNT> :

   * En el campo

     <DNT>
       **Kinesis Firehose Name**
     </DNT>

     , asegúrese de que el nombre generado sea correcto.

   * En el campo

     <DNT>
       **Firehose Backup Bucket**
     </DNT>

     , ingrese el [ARN del depósito de S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html) que se utilizará para almacenar los mensajes que no se entregan. El ARN debe seguir este formato: `arn:my_string`.

   * En el campo

     <DNT>
       **Firehose IAM Role**
     </DNT>

     , ingrese el [ARN de la función de IAM](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#firehose-assume-role) que utilizará Kinesis Data Firehose. El ARN debe seguir este formato: `arn:my_string`.

   * Haga clic en

     <DNT>
       **Continue**
     </DNT>

     .

   * Opcionalmente, si desea obtener una muestra del registro de flujo de VPC, seleccione la casilla de verificación

     <DNT>
       **Use Sampling**
     </DNT>

     y:

   <CollapserGroup>
     <Collapser
       id="sampling-lambda"
       title="Utilice Lambda de muestreo"
     >
       * Primero, en la sección <DNT>**Define Sampling Lambda**</DNT> , haga lo siguiente:

         * En el campo

           <DNT>
             **Lambda Name**
           </DNT>

           , asegúrese de que el nombre generado para la función Lambda sea correcto. Si tiene estándares de nomenclatura Lambda específicos, edite el nombre.

         * En el campo

           <DNT>
             **Sample Rate**
           </DNT>

           , especifique la frecuencia de muestreo que se aplicará. De forma predeterminada está configurado en `1:10`.

       * Luego, en la sección <DNT>**Create Sampling Lambda**</DNT> , haga clic en <DNT>**Generate CLI Command**</DNT> y:

         * Copie el contenido del bloque de código para

           <DNT>
             **Create your sampling Lambda**
           </DNT>

           y ejecútelo en la AWS CLI.

         * Para comprobar si se creó su Lambda, ejecute el comando del segundo paso en la CLI de AWS.

         * Copie el ARN devuelto para la función Lambda y péguelo en el campo

           <DNT>
             **Sampling Lambda ARN**
           </DNT>

           en el formato `arn:my_string`. Luego, haga clic en

           <DNT>
             **Continue**
           </DNT>

           .

         <Callout variant="tip">
           El muestreo es una función de conteo simple pero reducirá el volumen del registro de flujo enviado a New Relic. Los datos muestreados mediante esta función Lambda pueden perder una conversación específica en New Relic. Esté atento a las leyendas que indican datos de muestra en la UI del Monitoreo de red de New Relic.
         </Callout>
     </Collapser>
   </CollapserGroup>

3. En la sección <DNT>**Generate Kinesis Firehose**</DNT> , haga clic en <DNT>**Generate CLI Command**</DNT> y:

   <Callout variant="tip">
     Generamos automáticamente un nuevo <InlinePopover type="licenseKey"/>que se utilizará para esta ingesta de datos. Para regenerar una clave, haga clic en <DNT>**Generate and use a new key**</DNT>.

     Si desea reutilizar una clave existente, actualice el valor `AccessKey` en el primer paso.
   </Callout>

   * Copie el contenido del bloque de código para

     <DNT>
       **Create your Kinesis Data Firehose**
     </DNT>

     y péguelo, ejecútelo en la CLI de AWS.

   * Para comprobar si se ha creado Kinesis Firehose, ejecute el comando del segundo paso en la CLI de AWS. Si no se devuelve ningún ARN, espere 30 segundos y vuelva a intentarlo.

   * Copie el ARN devuelto para Kinesis Firehose y péguelo en el campo

     <DNT>
       **Kinesis Data Firehose ARN**
     </DNT>

     en el formato `arn:my_string`. Luego, haga clic en

     <DNT>
       **Continue**
     </DNT>

     .

   <img
     title="Generate Kinesis Firehose"
     alt="Generate Kinesis Firehose"
     src="/images/network_screenshot-crop_kinesis-forehose-aws-vpc-flow-logs.webp"
   />

   <figcaption>
     Genere el paso Kinesis Firehose en la instalación guiada.
   </figcaption>

4. En la sección <DNT>**Define Flow Logs**</DNT> , haga lo siguiente:

   * Desde el

     <DNT>
       **Traffic Type**
     </DNT>

     desplegable, seleccione si desea enviar solo las entradas aceptadas, solo rechazadas o todas las entradas log flujo.

   * En el campo

     <DNT>
       **Flow Source ID**
     </DNT>

     , ingrese el ID de VPC (`vpc-MY_STRING`) o el ID de subred (`subnet-MY_STRING`) para el cual se debe crear el registro de flujo de Amazon VPC.

   * El campo

     <DNT>
       **Flow Source Type**
     </DNT>

     se completará automáticamente, así que haga clic en

     <DNT>
       **Continue**
     </DNT>

     .

5. En la sección <DNT>**Create Flow Logs**</DNT> , haga clic en <DNT>**Generate CLI Command**</DNT> y copie el contenido del bloque de sintaxis. Luego, ejecútelo en la AWS CLI para comenzar a generar registros de flujo para los recursos especificados.

6. Haga clic en <DNT>**Continue**</DNT> para comenzar a explorar el registro de flujo de Amazon VPC en la sección Monitoreo de red de New Relic.

7. [Visualice los datos de rendimiento de su red en New Relic](/docs/network-performance-monitoring/monitoring-network-data/visualize-network-data).

<InstallFeedback/>
