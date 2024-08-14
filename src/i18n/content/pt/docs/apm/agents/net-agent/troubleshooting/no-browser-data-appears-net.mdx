---
title: Nenhum dado do browser aparece (.NET)
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

Depois de gerar tráfego e esperar cinco minutos, você não verá nenhum dado <InlinePopover type="browser"/>do seu aplicativo .NET.

## Solução

Para solucionar problemas de dados ausentes:

1. Certifique-se de ter instalado a [versão mais recente](/docs/releases/dotnet) do agente .NET.

2. Siga os procedimentos de resolução de problemas para [dados faltantes,](/docs/agents/net-agent/troubleshooting/no-data-appears-net) conforme aplicável.

3. Verifique se suas páginas são renderizadas usando ASPs. Se você usar outra tecnologia de renderização, use [instrumentação manual](/docs/agents/net-agent/features/page-load-timing-net#manual_instrumentation).

4. Limpe seu cache .NET.

5. Defina a tag `<head>` das suas páginas para renderização no servidor.

6. Verifique se seu agente está configurado para páginas de instrumento automático. Edite `newrelic.config` e verifique se `autoInstrument` está definido como `true`:

   ```xml
   <browserMonitoring autoInstrument="true"/>
   ```

7. Verifique se a compactação de página do IIS está desabilitada. Se compactado antes do agente .NET tentar a instrumentação do browser, a tag `<HEAD>` necessária não será encontrada. Para obter instruções sobre como verificar isso, consulte [a documentação da Microsoft](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/httpcompression/).

8. Veja a origem de uma de suas páginas por meio de um browser. Procure um script com referências a `NREUMQ` na parte superior e inferior das suas páginas. Se você obtiver suporte em [support.newrelic.com](https://support.newrelic.com), mencione se você está vendo esse JavaScript no cabeçalho da página ou em algum outro local da página, ou se não o está vendo.

Aqui estão algumas dicas adicionais de resolução de problemas:

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
        Erro de exceção do IIS
      </td>

      <td>
        Com o IIS, você pode receber um `InvalidOperationException` que afirma:

        ```
        Post cache substitution is not compatible with modules in the IIS integrated pipeline that modify the response buffers.
        ```

        Para resolver esse problema, você deve implementar manualmente o agente browser: defina `browserMonitoring` como `false` em `newrelic.config` e siga os [procedimentos de instrumentação manual](/docs/agents/net-agent/features/page-load-timing-net#manual_instrumentation).
      </td>
    </tr>

    <tr>
      <td>
        Erro framework do Razor
      </td>

      <td>
        Com a framework Razor, você pode encontrar a seguinte mensagem:

        ```
        Parser Error Message: "").pop().split("" is not valid at the start of a code block. Only identifiers, keywords, comments, "(" and "{" are valid.
        ```

        Para resolver este problema, siga os [procedimentos de resolução de problemas do browser para o framework Razor](/docs/browser/new-relic-browser/troubleshooting/troubleshooting-browser-monitoring-installation#dotnet_razor).
      </td>
    </tr>
  </tbody>
</table>
