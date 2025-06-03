---
title: No aparecen datos del navegador (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If your New Relic .NET application isn''t reporting browser data, follow these troubleshooting procedures.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Después de generar tráfico y esperar cinco minutos, no ve ningún dato <InlinePopover type="browser"/>para su aplicación .NET.

## Solución

Para solucionar problemas de datos faltantes:

1. Asegúrese de haber instalado la [última versión](/docs/releases/dotnet) del agente .NET.

2. Siga los procedimientos de resolución de problemas para [datos faltantes](/docs/agents/net-agent/troubleshooting/no-data-appears-net) según corresponda.

3. Verifique si sus páginas se representan mediante ASP. Si utiliza otra tecnología de renderizado, utilice [instrumentación manual](/docs/agents/net-agent/features/page-load-timing-net#manual_instrumentation).

4. Vacíe su caché .NET.

5. Configure la etiqueta `<head>` de sus páginas para que se muestren en el servidor.

6. Verifique que su agente esté configurado para páginas de instrumento automático. Edite `newrelic.config` y verifique que `autoInstrument` esté configurado en `true`:

   ```xml
   <browserMonitoring autoInstrument="true"/>
   ```

7. Compruebe si la compresión de páginas IIS está deshabilitada. Si se comprime antes de que el agente .NET intente la instrumentación browser , no se encontrará la etiqueta `<HEAD>` necesaria. Para obtener instrucciones sobre cómo comprobarlo, consulte [la documentación de Microsoft](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/httpcompression/).

8. Mire la fuente de una de sus páginas a través de un browser. Busque una script con referencias a `NREUMQ` en la parte superior e inferior de sus páginas. Si obtiene soporte en [support.newrelic.com](https://support.newrelic.com), mencione si está viendo este JavaScript en el encabezado de la página o en alguna otra ubicación de la página, o si no lo está viendo en absoluto.

Aquí hay algunos consejos adicionales para la resolución de problemas:

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Browser problems**
        </DNT>
      </th>

      <th>
        <DNT>
          **Additional troubleshooting tips for .NET agent**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Error de excepción de IIS
      </td>

      <td>
        Con IIS, es posible que reciba un `InvalidOperationException` que indique:

        ```
        Post cache substitution is not compatible with modules in the IIS integrated pipeline that modify the response buffers.
        ```

        Para resolver este problema, debe implementar manualmente el agente del navegador: establezca `browserMonitoring` en `false` en `newrelic.config` y siga los [procedimientos de instrumentación manual](/docs/agents/net-agent/features/page-load-timing-net#manual_instrumentation).
      </td>
    </tr>

    <tr>
      <td>
        Error framework de Razor
      </td>

      <td>
        Con el framework Razor, puede encontrar el siguiente mensaje:

        ```
        Parser Error Message: "").pop().split("" is not valid at the start of a code block. Only identifiers, keywords, comments, "(" and "{" are valid.
        ```

        Para resolver este problema, siga los [procedimientos de resolución de problemas del navegador para Razor framework](/docs/browser/new-relic-browser/troubleshooting/troubleshooting-browser-monitoring-installation#dotnet_razor).
      </td>
    </tr>
  </tbody>
</table>
