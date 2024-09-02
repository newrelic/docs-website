---
title: Métrica assíncrona .NET ausente
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

Você não vê [transação assíncrona](/docs/agents/net-agent/additional-installation/async-support-net) para `WebApi`, `HttpClient`, `SqlCommand`, `SqlDataReader`, `NpgsqlCommand` ou instrumentação personalizada. Esse problema normalmente ocorre para aplicativos criados com [o agente .NET da New Relic](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent#net-version) no .NET framework 4.0 ou anterior e depois migrados para o .NET framework 4.5 ou superior.

## Solução

### Atualizar appSetting para pipeline [#appsetting]

Uma configuração `appSetting` ou `system.web` específica será necessária se você estiver usando:

* WebApi1 ou WebApi2
* Métodos assíncronos em `HttpClient`, `SqlCommand`, `SqlDataReader` ou `NpgsqlCommand`
* Transação personalizada relacionada a assíncrona ou instrumentação personalizada
* Agente New Relic .NET versão 5.11.53.0 ou superior
* .NET framework 4.5 ou superior como destino para seu aplicativo

Se essas condições se aplicarem, você deverá garantir que seu aplicativo use o pipeline de processamento de solicitação atualizado introduzido no .NET 4.5.

Para usar o pipeline atualizado, certifique-se de que seu `web.config` inclua uma das configurações a seguir. Se nenhuma configuração aparecer, adicione uma:

<CollapserGroup>
  <Collapser
    id="use-new-pipeline"
    title="Recomendado: diga ao .NET para usar o novo pipeline"
  >
    Diga ao .NET para usar o novo pipeline de processamento de solicitações ASP:

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
    title="Especifique a versão framework de destino"
  >
    Se você deseja especificar a versão do .NET framework que deseja, esteja ciente de que isso impõe verificações rigorosas de tempo de execução que podem causar problemas de compatibilidade. Recomendação: Se possível, [diga ao .NET para usar o novo pipeline](#use-new-pipeline) em vez de usar esta opção.

    A versão especificada do .NET framework deve estar instalada em sua máquina e deve ser a versão 4.5.2 ou superior:

    ```xml
    <configuration>
      <system.web>
        <httpRuntime targetFramework="YOUR_TARGET_NET_VERSION" /> 
      </system.web>
    <configuration>
    ```
  </Collapser>
</CollapserGroup>

### Recomendado: verifique a compatibilidade com o novo pipeline [#enforce-async]

Opcional: você pode instruir o .NET framework para realizar verificações adicionais do seu código assíncrono em tempo de execução. Essas verificações detectam problemas comuns no código assíncrono, que podem ser mascarados pelo pipeline ASP legado.

Se seu aplicativo for aprovado sem problemas, você pode ter certeza de que ele lidará corretamente com o novo pipeline. Para obter mais informações, consulte [a documentação de configuração da Microsoft](https://msdn.microsoft.com/en-us/library/hh975440%28v=vs.120%29.aspx?f=255&MSPPError=-2147217396).

Para impor verificações adicionais, adicione o seguinte a `web.config`:

```xml
<configuration>
  <appSettings>
    <add key="aspnet:AllowAsyncDuringSyncStages" value="false" />
  </appSettings>
<configuration>
```

## Causa

A instrumentação assíncrona será desabilitada se o pipeline integrado legado estiver presente. Antes do .NET 4.5, o pipeline integrado poderia causar conflitos. Para obter mais informações sobre esse bug do .NET framework , consulte:

* [Por que `HttpContext.Current` é nulo após aguardar?](https://stackoverflow.com/questions/18383923/why-is-httpcontext-current-null-after-await)
* [Tudo sobre `<httpRuntime targetFramework>`](https://devblogs.microsoft.com/dotnet/all-about-httpruntime-targetframework/)
