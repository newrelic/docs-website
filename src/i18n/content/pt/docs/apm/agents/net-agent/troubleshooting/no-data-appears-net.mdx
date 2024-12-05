---
title: Nenhum dado aparece (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting steps if data does not appear in your app after you installed the New Relic .NET agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Depois de gerar tráfego para seu aplicativo e esperar cinco minutos, nenhum dado do agente .NET aparece na interface do New Relic.

## Solução

A ausência de dados pode ocorrer por diversos motivos.

* <DNT>
    **Common causes**
  </DNT>

  para dados faltantes: Veja as [soluções básicas de resolução de problemas](#basic-solutions).

* <DNT>
    **Other situations:**
  </DNT>

  Se as soluções básicas não resolverem o problema, a falta de dados pode ser mais intrínseca ao seu sistema. Para mais informações, consulte as [soluções avançadas de resolução de problemas](#advanced-solutions).

* <DNT>
    **Microsoft Azure users:**
  </DNT>

  Consulte as [soluções de resolução de problemas do Azure](/docs/agents/net-agent/azure-troubleshooting).

* <DNT>
    **No browser data appears:**
  </DNT>

  Veja as [dicas de resolução de problemas ao usar o agente browser](/docs/agents/net-agent/troubleshooting/no-page-load-timing-data-appears-net).

### Soluções básicas

Para solucionar os motivos mais comuns de falta de dados, tente estas soluções conforme aplicável.

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Basic solutions**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Verifique a compatibilidade do aplicativo e framework com o agente
      </td>

      <td>
        [Compatibilidade e requisitos framework .NET](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent)

        ou

        [Compatibilidade e requisitos do .NET Core](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-20-agent)
      </td>
    </tr>

    <tr>
      <td>
        Saiba mais sobre problemas comuns de instalação
      </td>

      <td>
        Consulte [resolução de problemas para .NET Core e Linux](/docs/apm/agents/net-agent/troubleshooting/debugging-net-core-agent-linux) ou [resolução de problemas para Windows](/docs/apm/agents/net-agent/troubleshooting/debugging-net-windows)
      </td>
    </tr>

    <tr>
      <td>
        Configurar para processo .NET de curta duração
      </td>

      <td>
        Se você tiver um processo de curta duração (menos de 60 segundos), ele poderá não relatar dados. Para obter mais informações, consulte [Monitorar processos de curta duração](/docs/agents/net-agent/troubleshooting/monitor-short-lived-net-processes).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET Core:**</DNT> Verifique os requisitos do Kestrel.
      </td>

      <td>
        Certifique-se de estar usando um [aplicativo/servidor web Kestrel](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-20-agent#app-web-servers) compatível com New Relic. Caso contrário, talvez seja necessário garantir que seu agente .NET tenha [o suporte ao .NET Framework](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent#app-web-servers) habilitado.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET Core:**</DNT> Verifique as variáveis de ambiente.
      </td>

      <td>
        Certifique-se de ter configurado todas as [variáveis de ambiente necessárias](/docs/agents/net-agent/configuration/net-agent-configuration/#environment-variables) e reinicie o agente.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET Framework:**</DNT> Reinicie o IIS.
      </td>

      <td>
        Se o seu aplicativo não estiver recebendo tráfego, nenhum dado será informado à New Relic. Para reiniciar o IIS:

        1. Em uma linha de comando, execute `IISRESET`.
        2. Verifique se o tráfego está sendo enviado para seu aplicativo.
      </td>
    </tr>

    <tr>
      <td>
        Execute o diagnóstico New Relic .
      </td>

      <td>
        Para tentar identificar automaticamente o problema, use [o New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics).
      </td>
    </tr>

    <tr>
      <td>
        Verifique se há [conflitos no criador de perfil](/docs/agents/net-agent/troubleshooting/profiler-conflicts).
      </td>

      <td>
        Se você estiver usando o System Center Operations Manager (SCOM) da Microsoft, siga os procedimentos de resolução de problemas para [resolver conflitos de .NET e SCOM](/docs/dotnet/dotnet-kb-104).
      </td>
    </tr>

    <tr>
      <td>
        Revise o arquivo de log.
      </td>

      <td>
        Se existir [arquivo de log](/docs/agents/net-agent/troubleshooting/generate-logs-troubleshooting-net) , abra-os e verifique se há erros.
      </td>
    </tr>
  </tbody>
</table>

### Soluções avançadas

Para solucionar problemas mais complexos quando nenhum dado aparece, tente estas soluções conforme aplicável:

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Advanced solutions**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>**.NET Framework:**</DNT> Verifique as permissões do Registro.
      </td>

      <td>
        Verifique se há um [erro de permissão de chave de registro](/docs/agents/net-agent/troubleshooting/no-data-registry-key-permission-issues).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET Framework:**</DNT> Execute o Visualizador de eventos do Windows.
      </td>

      <td>
        Se aplicável:

        1. Execute o Visualizador de eventos do Windows e procure o evento do aplicativo no profiler.NET do New Relic.

        2. Pesquise mensagens cuja origem seja o profiler .NET da New Relic ou o agente .NET da New Relic.

        3. Se não houver mensagens de evento New Relic, procure mensagens do .NET Runtime.

           Para obter mais informações, consulte [Nenhum dado ou log de eventos: erros de CoCreate](/docs/dotnet/dotnet-kb-102).
      </td>
    </tr>

    <tr>
      <td>
        Obtenha o log de depuração.
      </td>

      <td>
        Se o seu registro não mostrou erros, aumente o nível de registro temporariamente para [coletar `debug` log](/docs/agents/net-agent/troubleshooting/generating-logs-troubleshooting#logs).
      </td>
    </tr>

    <tr>
      <td>
        Verifique as configurações de proxy.
      </td>

      <td>
        Certifique-se de que suas [configurações de proxy](/docs/dotnet/dotnet-agent-configuration#service) estejam corretas e que incluam um atributo de host.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET 8:**</DNT> Certifique-se de que os diagnósticos de tempo de execução estejam ativados
      </td>

      <td>
        A partir do .NET 8, definir a variável de ambiente `DOTNET_EnableDiagnostics=0` (ou `COMPlus_EnableDiagnostics=0`) desabilitará o perfil do CLR, impossibilitando o funcionamento do agente. Essa configuração é comumente recomendada em cenários de implantação de sistema de arquivos somente leitura, mas apenas para desabilitar a porta de diagnóstico. Consulte [a documentação da Microsoft](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-environment-variables#dotnet_enablediagnostics) sobre como desabilitar subcomponentes específicos do sistema de diagnóstico enquanto deixa o perfil habilitado.
      </td>
    </tr>

    <tr>
      <td>
        Obtenha ajuda adicional.
      </td>

      <td>
        Se os dados ainda não aparecerem, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).
      </td>
    </tr>
  </tbody>
</table>
