---
title: Falta .NET asíncrono métrico
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If you are missing .NET Web API transactions in New Relic and your app targets .NET Framework 4.0, follow these procedures to apply a framework bug fix.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

No ve [transacciones asíncronas](/docs/agents/net-agent/additional-installation/async-support-net) para `WebApi`, `HttpClient`, `SqlCommand`, `SqlDataReader`, `NpgsqlCommand` ni instrumentación personalizada. Este problema suele ocurrir con aplicaciones creadas con [el agente .NET de New Relic](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent#net-version) en .NET framework 4.0 o anterior y luego migradas a .NET framework 4.5 o superior.

## Solución

### Actualizar configuración de aplicación para pipeline [#appsetting]

Se requiere una configuración `appSetting` o `system.web` específica si está utilizando:

* WebApi1 o WebApi2
* Métodos asíncronos en `HttpClient`, `SqlCommand`, `SqlDataReader` o `NpgsqlCommand`
* Transacción personalizada relacionada con asíncrona o instrumentación personalizada
* New Relic .NET agente versión 5.11.53.0 o superior
* .NET framework 4.5 o superior como objetivo de su aplicación

Si se aplican estas condiciones, debe asegurarse de que su aplicación utilice el pipeline de procesamiento de solicitudes actualizada introducida en .NET 4.5.

Para utilizar el pipeline actualizado, asegúrese de que su `web.config` incluya una de las siguientes configuraciones. Si no aparece ninguna configuración, agregue una:

<CollapserGroup>
  <Collapser
    id="use-new-pipeline"
    title="Recomendado: dígale a .NET que use el nuevo pipeline"
  >
    Dígale a .NET que utilice el nuevo pipeline de procesamiento de solicitudes ASP:

    ```xml
    <configuration>
      <appSettings>
        <add key="aspnet:UseTaskFriendlySynchronizationContext" value="true" />
      </appSettings>
    <configuration>
    ```
  </Collapser>

  <Collapser
    id="specify-target-framework"
    title="Especifique la versión de su framework objetivo"
  >
    Si desea especificar la versión de .NET framework a la que apunta, tenga en cuenta que esto impone estrictas comprobaciones de tiempo de ejecución que pueden causar problemas de compatibilidad. <DNT>**Recommendation:**</DNT> Si es posible, [indique a .NET que utilice el nuevo pipeline](#use-new-pipeline) en lugar de utilizar esta opción.

    La versión especificada de .NET framework debe estar instalada en su máquina y debe ser la versión 4.5.2 o superior:

    ```xml
    <configuration>
      <system.web>
        <httpRuntime targetFramework="YOUR_TARGET_NET_VERSION" /> 
      </system.web>
    <configuration>
    ```
  </Collapser>
</CollapserGroup>

### Recomendado: Verificar la compatibilidad con el nuevo pipeline [#enforce-async]

Opcional: puede indicarle a .NET framework que realice comprobaciones adicionales de su código asíncrono en tiempo de ejecución. Estas comprobaciones detectan problemas comunes en el código asíncrono, que pueden estar enmascarados por el pipeline ASP legacy .

Si su aplicación pasa sin problemas, puede estar seguro de que manejará correctamente el nuevo pipeline. Para obtener más información, consulte [la documentación de configuración de Microsoft](https://msdn.microsoft.com/en-us/library/hh975440%28v=vs.120%29.aspx?f=255&MSPPError=-2147217396).

Para aplicar controles adicionales, agregue lo siguiente a `web.config`:

```xml
<configuration>
  <appSettings>
    <add key="aspnet:AllowAsyncDuringSyncStages" value="false" />
  </appSettings>
<configuration>
```

## Causa

La instrumentación asíncrona está deshabilitada si el pipeline integrado legacy está presente. Antes de .NET 4.5, el pipeline integrado podía provocar interbloqueos. Para obtener más información sobre este error de .NET framework , consulte:

* [¿Por qué `HttpContext.Current` es nulo después de esperar?](https://stackoverflow.com/questions/18383923/why-is-httpcontext-current-null-after-await)
* [Todo sobre `<httpRuntime targetFramework>`](https://devblogs.microsoft.com/dotnet/all-about-httpruntime-targetframework/)
