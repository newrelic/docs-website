---
title: Traza tu función .NET Lambda con New Relic y OpenTelemetry
metaDescription: How to instrument .NET applications on AWS Lambda with OpenTelemetry in New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="tip"
  title="AVANCE"
>
  AWS Lambda con OpenTelemetry para .NET aún está en desarrollo.

  Disponemos de documentación similar para [Java](/docs/serverless-function-monitoring/aws-lambda-monitoring/opentelemetry/lambda-opentelemetry-java), pero si utiliza Python, Go, JavaScript, Ruby o PHP para AWS Lambda con OpenTelemetry, puede utilizar nuestra documentación de Java o .NET como guía general para la configuración. Para obtener información adicional, consulte [Distribución de AWS para OpenTelemetry](https://aws-otel.github.io/docs/introduction).
</Callout>

Esta guía cubrirá cómo puede utilizar [OpenTelemetry Lambda](https://github.com/open-telemetry/opentelemetry-lambda) para trazar su función Lambda .NET utilizando [las capas OpenTelemetry Lambda](https://aws-otel.github.io/docs/getting-started/lambda/lambda-dotnet) administradas de AWS. OpenTelemetry facilita la instrumentación de sus funciones, incluida la instrumentación automática para muchas bibliotecas populares.

## Requisitos previos [#prerequisites]

Esta guía asume que usted tiene lo siguiente:

* Una cuenta New Relic . Si no tienes uno, [crea uno gratis](https://newrelic.com/signup).
* Una cuenta de AWS. Si no tienes uno, [crea uno gratis](https://aws.amazon.com/).
* Una función Lambda .NET. Si aún no tienes uno, [crea uno ahora](https://docs.aws.amazon.com/lambda/latest/dg/lambda-csharp.html).

<Callout variant="important">
  Ya no es necesario habilitar X-Ray porque `DisableAwsXRayContextExtraction` está configurado en `true` en AWS OTel .NET SDK para Lambda. Puede encontrar más detalles en [AWS OTel .NET SDK para Lambda Readme](https://github.com/open-telemetry/opentelemetry-dotnet-contrib/blob/main/src/OpenTelemetry.Instrumentation.AWSLambda/README.md#instrumentation).
</Callout>

<Steps>
  <Step>
    ## Instalar la capa [#install]

    AWS publica una capa administrada que incluye el [recolector OpenTelemetry Lambda](https://github.com/open-telemetry/opentelemetry-lambda).

    Para instalarlo:

    1. Abra su función en [Lambda Console](https://console.aws.amazon.com/lambda).

    2. En <DNT>**Layers**</DNT> en la sección <DNT>**Designer**</DNT> , elija <DNT>**Add a layer**</DNT>.

    3. En <DNT>**Specify an ARN**</DNT>, pegue uno de los ARN de capa para la arquitectura de su función de la lista siguiente. Reemplace `{region}`con su región de AWS, como `us-east-1`.

    4. Elija <DNT>**Add**</DNT>.

       * AMD64/X86_64: `arn:aws:lambda:{region}:901920570463:layer:aws-otel-collector-amd64-ver-0-90-1:1`
       * ARM64: `arn:aws:lambda:\<region>:901920570463:layer:aws-otel-collector-arm64-ver-0-90-1:1`

       Para las plantillas SAM y CloudFormation, agregue lo siguiente a las propiedades de su función:

       ```yaml
         yourFunctionHere:
           Type: AWS::Serverless::Function
           Properties:
             ...
             Layers:
               # Use this if using x86_64 architecture
               - !Sub arn:${AWS::Partition}:lambda:${AWS::Region}:901920570463:layer:aws-otel-collector-amd64-ver-0-90-1:1
               # Use this if using arm64 architecture
               - !Sub arn:${AWS::Partition}:lambda:${AWS::Region}:901920570463:layer:aws-otel-collector-arm64-ver-0-90-1:1
       ```

       <Callout variant="important">
         Consulte los [ARN más recientes publicados por AWS](https://aws-otel.github.io/docs/getting-started/lambda/lambda-dotnet) para verificar que los ARN de capa anteriores estén actualizados.
       </Callout>
  </Step>

  <Step>
    ## Agregar variables de entorno de New Relic [#env-variables]

    Para enviar los datos de OpenTelemetry que esta capa recopila a New Relic, necesitamos configurar el recolector OpenTelemetry Lambda que está empaquetado con la capa para exportar la telemetría que recibe al [extremo New Relic OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/opentelemetry-quick-start). Antes de hacer eso, primero debemos establecer algunas variables de entorno de las que dependerá.

    1. Genera y copia una New Relic

       <InlinePopover type="licenseKey"/>

       desde tu cuenta New Relic.

    2. Abra su función en [Lambda Console](https://console.aws.amazon.com/lambda).

    3. Elija

       <DNT>
         **Configuration**
       </DNT>

       y luego

       <DNT>
         **Environment variables**
       </DNT>

       .

    4. En

       <DNT>
         **Environment variables**
       </DNT>

       , elija

       <DNT>
         **Edit**
       </DNT>

       .

    5. Elija

       <DNT>
         **Add environment variable**
       </DNT>

       .

    6. Para

       <DNT>
         **Key**
       </DNT>

       configúrelo en `NEW_RELIC_LICENSE_KEY` y establezca

       <DNT>
         **Value**
       </DNT>

       en el valor de la clave de licencia que generó en el paso 1. Luego elija

       <DNT>
         **Save**
       </DNT>

       .

    7. Elija

       <DNT>
         **Add environment variable**
       </DNT>

       nuevamente.

    8. Para

       <DNT>
         **Key**
       </DNT>

       configúrelo en `NEW_RELIC_OPENTELEMETRY_ENDPOINT` y configure

       <DNT>
         **Value**
       </DNT>

       en una de las siguientes opciones (depende de su región de New Relic). Luego elija

       <DNT>
         **Save**
       </DNT>

       .

    9. Elija

       <DNT>
         **Add environment variable**
       </DNT>

       nuevamente.

    10. Para

        <DNT>
          **Key**
        </DNT>

        configúrelo en `OTEL_SERVICE_NAME` y establezca

        <DNT>
          **Value**
        </DNT>

        en el nombre de su función. Luego elija

        <DNT>
          **Save**
        </DNT>

        .

    * `otlp.nr-data.net:4317`: Si su cuenta New Relic está en la región de EE. UU.
    * `otlp.eu01.nr-data.net:4317`: Si su cuenta New Relic está en la región de la UE

      Para las plantillas SAM y CloudFormation, agregue lo siguiente a las propiedades de su función. Asegúrese de reemplazar `your-license-key-here` con su <InlinePopover type="licenseKey"/>y `otlp.nr-data.net:4317` con el extremo New Relic OpenTelemetry para su región.

      ```yaml
        yourFunctionHere:
          Type: AWS::Serverless::Function
          Properties:
            ...
            Environment:
              Variables:
                ...
                NEW_RELIC_LICENSE_KEY: your-license-key-here
                NEW_RELIC_OPENTELEMETRY_ENDPOINT: otlp.nr-data.net:4317
                OTEL_SERVICE_NAME: your-function-name-here
      ```

      <Callout variant="important">
        Reemplace `your-license-key-here` con su New Relic <InlinePopover type="licenseKey"/>y `otlp.nr-data.net:4317` con el extremo apropiado para su región de New Relic (consulte la lista anterior).
      </Callout>
  </Step>

  <Step>
    ## Configurar el recolector [#collector]

    Ahora anularemos la configuración predeterminada del recolector OpenTelemetry Lambda con una que exporte telemetría al extremo New Relic OpenTelemetry. Para hacer esto debemos incluir un archivo de configuración `collector.yaml` con nuestra función.

    Cree un archivo `collector.yaml` en el directorio raíz de su función con el siguiente contenido:

    ```yaml
    receivers:
      otlp:
        protocols:
          grpc:
          http:

    exporters:
      otlp:
        endpoint: ${NEW_RELIC_OPENTELEMETRY_ENDPOINT}
        headers:
          api-key: ${NEW_RELIC_LICENSE_KEY}

    service:
      pipelines:
        traces:
          receivers: [otlp]
          exporters: [otlp]
        metrics:
          receivers: [otlp]
          exporters: [otlp]
        logs:
          receivers: [otlp]
          exporters: [otlp]
    ```

    Empaquete este archivo `collector.yaml` en el directorio raíz del paquete zip de su función.

    Un ejemplo de configuración `*.csproj` podría verse así:

    ```xml
    <ItemGroup>
      <Content Include="collector.yaml">
        <CopyToOutputDirectory>Always</CopyToOutputDirectory>
      </Content>  
    </ItemGroup>
    ```

    Luego vuelve a desplegar tu función.

    1. Abra su función en [Lambda Console](https://console.aws.amazon.com/lambda).

    2. Elija

       <DNT>
         **Configuration**
       </DNT>

       y luego

       <DNT>
         **Environment variables**
       </DNT>

       .

    3. En

       <DNT>
         **Environment variables**
       </DNT>

       , elija

       <DNT>
         **Edit**
       </DNT>

       .

    4. Elija

       <DNT>
         **Add environment variable**
       </DNT>

       .

    5. Para

       <DNT>
         **Key**
       </DNT>

       establezca `OPENTELEMETRY_COLLECTOR_CONFIG_FILE` y establezca

       <DNT>
         **Value**
       </DNT>

       en `/var/task/collector.yaml`.

    6. Luego elija

       <DNT>
         **Save**
       </DNT>

       .

    Para las plantillas SAM y CloudFormation, agregue esto a las propiedades de su función:

    ```yaml
      yourFunctionHere:
        Type: AWS::Serverless::Function
        Properties:
          ...
          Environment:
            Variables:
              ...
              OPENTELEMETRY_COLLECTOR_CONFIG_FILE: /var/task/collector.yaml
    ```

    <Callout variant="important">
      Esto supone que agrupaste tu `collector.yaml` en el directorio raíz de tu función. Si lo agrupaste en otro lugar, reemplaza `/var/task/collector.yaml` con la ruta a tu `collector.yaml`.
    </Callout>
  </Step>

  <Step>
    ## Instrumentado Tu Función [#instrument]

    Primero agregue el [SDK de OpenTelemetry para AWS Lambda](https://www.nuget.org/packages/OpenTelemetry.Instrumentation.AWSLambda/), así como el [paquete exportador OTLP](https://www.nuget.org/packages/OpenTelemetry.Exporter.OpenTelemetryProtocol). Puede agregar más paquetes de instrumentación de OpenTelemetry, como [OpenTelemetry.instrumentación.AWS](https://www.nuget.org/packages/OpenTelemetry.Instrumentation.AWS) y [OpenTelemetry.instrumentación.Http](https://www.nuget.org/packages/OpenTelemetry.Instrumentation.Http), para obtener visibilidad adicional del comportamiento de su función.

    ```bash
    dotnet add package OpenTelemetry.Instrumentation.AWSLambda
    dotnet add package OpenTelemetry.Exporter.OpenTelemetryProtocol
    dotnet add package OpenTelemetry.Instrumentation.AWS
    dotnet add package OpenTelemetry.Instrumentation.Http
    ```

    Agregue llamadas a `AddAWSLambdaConfigurations()` y `AddOtlpExporter()` desde `TracerProvider` en el constructor estático de su función.

    <Callout variant="important">
      El constructor de su función debe ser estático, porque `TracerProvider` solo debe inicializarse una vez por arranque en frío de Lambda.
    </Callout>

    ```csharp
    TracerProvider tracerProvider = Sdk.CreateTracerProviderBuilder()
        // add other instrumentations here
        .AddAWSLambdaConfigurations(options => options.DisableAwsXRayContextExtraction = true)
        .AddOtlpExporter()
        .Build();
    ```

    <Callout variant="important">
      Asegúrese de establecer la propiedad `DisableAwsXRayContextExtraction` en `true` si no habilita X-Ray. En caso contrario, la traza no será instrumentada.
    </Callout>

    Cree una función contenedora con la misma firma que la función del controlador Lambda original. Llame a la API `AWSLambdaWrapper.Trace()` y pase `TracerProvider`, la función Lambda original y sus entradas como parámetro.

    ```csharp
    // new Lambda function handler passed in
    public string TracingFunctionHandler(JObject input, ILambdaContext context) =>
        AWSLambdaWrapper.Trace(tracerProvider, OriginalFunctionHandler, input, context);

    public string OriginalFunctionHandler(JObject input, ILambdaContext context) {
        return input?.ToString();
    }
    ```

    Si su controlador original es una función asíncrona, utilice la API `TraceAsync()` en lugar de `Trace()`.

    ```csharp
    public Task<APIGatewayProxyResponse> TracingFunctionHandler(APIGatewayProxyRequest request,
        ILambdaContext context)
        => AWSLambdaWrapper.TraceAsync(tracerProvider, OriginalFunctionHandler, request, context);

    public async Task<APIGatewayProxyResponse> OriginalFunctionHandler(APIGatewayProxyRequest apigProxyEvent, ILambdaContext context)
    {
        //your function here.
    }
    ```

    Por ejemplo, una función Lambda básica de API Gateway se vería así:

    ```csharp
    using System;
    using Amazon.Lambda.APIGatewayEvents;
    using Amazon.Lambda.Core;
    using OpenTelemetry;
    using OpenTelemetry.Instrumentation.AWSLambda;
    using OpenTelemetry.Trace;

    namespace Example
    {
        public class Function
        {
            public static TracerProvider tracerProvider;

            static Function()
            {
                tracerProvider = Sdk.CreateTracerProviderBuilder()
                    .AddAWSLambdaConfigurations(options => options.DisableAwsXRayContextExtraction = true)
                    .AddOtlpExporter()
                    .Build();

                // use AwsSdkSample::AwsSdkSample.Function::TracingFunctionHandler as input Lambda handler instead
                public APIGatewayProxyResponse TracingFunctionHandler(APIGatewayProxyRequest request, ILambdaContext context)
                {
                    return AWSLambdaWrapper.Trace(tracerProvider, FunctionHandler, request, context);
                }

                /// <summary>
                /// A simple function that takes a APIGatewayProxyRequest and returns a APIGatewayProxyResponse
                /// </summary>
                /// <param name="input"></param>
                /// <param name="context"></param>
                /// <returns></returns>
                public APIGatewayProxyResponse FunctionHandler(APIGatewayProxyRequest request, ILambdaContext context)
                {
                    return new APIGatewayProxyResponse() {
                        StatusCode = 200,
                        Body = Environment.GetEnvironmentVariable("_X_AMZN_TRACE_ID")
                    };
                }
            }
        }
    }
    ```

    Luego configure la función contenedora como controlador de la función Lambda. Para la clase anterior, el controlador sería `function::Example.Function::TracingFunctionHandler`.

    Para ver un ejemplo práctico, incluido el seguimiento del SDK de AWS, consulte [esta aplicación de muestra](https://github.com/open-telemetry/opentelemetry-lambda/blob/main/dotnet/sample-apps/aws-sdk/wrapper/SampleApps/AwsSdkSample/Function.cs).

    Lo anterior es solo un ejemplo básico; para instrumentación más avanzada, consulte la [documentación de OpenTelemetry .NET SDK](https://github.com/open-telemetry/opentelemetry-dotnet).
  </Step>

  <Step>
    ## Vea sus datos en la UI de New Relic [#view-data]

    Primero querrás [invocar tu función Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html) varias veces para comenzar a generar telemetría. Desde allí, dirígete a New Relic para encontrar tu [traza](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gU3BhbiBTRUxFQ1QgY291bnQoKikgd2hlcmUgbmV3cmVsaWMuc291cmNlPSclb3RscCUnIFRJTUVTRVJJRVMifV0sImluaXRpYWxDaGFydFNldHRpbmdzIjp7ImNoYXJ0VHlwZSI6IkNIQVJUX0xJTkUiLCJsaW1pdCI6NzU0MiwibGlua2VkRW50aXR5R3VpZCI6bnVsbCwibGlua2VkRGFzaGJvYXJkSWQiOm51bGwsInlTY2FsZSI6eyJzdGF0aWMiOmZhbHNlLCJkb21haW4iOltudWxsLG51bGxdfSwieVplcm8iOnRydWV9fQo=), [métrica](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTWV0cmljIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2UgTElLRSAnJW90bHAlJyBUSU1FU0VSSUVTIn1dLCJpbml0aWFsQ2hhcnRTZXR0aW5ncyI6eyJjaGFydFR5cGUiOiJDSEFSVF9MSU5FIiwibGltaXQiOjc1NDIsImxpbmtlZEVudGl0eUd1aWQiOm51bGwsImxpbmtlZERhc2hib2FyZElkIjpudWxsLCJ5U2NhbGUiOnsic3RhdGljIjpmYWxzZSwiZG9tYWluIjpbbnVsbCxudWxsXX0sInlaZXJvIjp0cnVlfX0K) y [registro](https://one.newrelic.com/launcher/nr1-core.explorer?overlay=eyJuZXJkbGV0SWQiOiJkYXRhLWV4cGxvcmF0aW9uLnF1ZXJ5LWJ1aWxkZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoibnJxbEVkaXRvciIsImluaXRpYWxOcnFsVmFsdWUiOiIiLCJpbml0aWFsUXVlcmllcyI6W3sibnJxbCI6IkZST00gTG9nIFNFTEVDVCBjb3VudCgqKSB3aGVyZSBuZXdyZWxpYy5zb3VyY2U9JyVvdGxwJScgVElNRVNFUklFUyJ9XSwiaW5pdGlhbENoYXJ0U2V0dGluZ3MiOnsiY2hhcnRUeXBlIjoiQ0hBUlRfTElORSIsImxpbWl0Ijo3NTQyLCJsaW5rZWRFbnRpdHlHdWlkIjpudWxsLCJsaW5rZWREYXNoYm9hcmRJZCI6bnVsbCwieVNjYWxlIjp7InN0YXRpYyI6ZmFsc2UsImRvbWFpbiI6W251bGwsbnVsbF19LCJ5WmVybyI6dHJ1ZX19Cg==).

    Su telemetría no aparecerá en New Relic Serverless. En su lugar, encontrará sus telemetry data en New Relic OpenTelemetry Nerdlets.
  </Step>
</Steps>

## Rastreo distribuido [#distributed-tracing]

En algunos casos es posible que veas un rastreo fragmentado distribuido dentro de New Relic con esta configuración. Esto ocurre cuando una traza inicia o involucra un servicio que está fuera del contexto ADOT (por ejemplo, un servicio administrado de AWS). Los tramos de ese servicio son creados por X-Ray, no por OpenTelemetry, y ADOT no los reenvía a New Relic. Aunque la traza parece fragmentada, aún proporciona información completa y valiosa sobre el desempeño dentro de la función Lambda, así como otros servicios cuyos tramos fueron enviados a New Relic.

## Más información [#more-info]

Para obtener más información, consulte el [inicio rápido de New Relic OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/opentelemetry-quick-start).
