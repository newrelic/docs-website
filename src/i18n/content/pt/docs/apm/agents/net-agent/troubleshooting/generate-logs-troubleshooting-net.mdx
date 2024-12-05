---
title: Gerar log para resolução de problemas (.NET)
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'Generating New Relic for .NET log files, changing your log file settings, and collecting Microsoft System Information files.'
freshnessValidatedDate: never
translationType: machine
---

O agente .NET da New Relic armazena por padrão dois tipos de arquivo de log no diretório `Logs` em `%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs` para Windows e em `/usr/local/newrelic-dotnet-agent/logs` para Linux. Se você estiver usando uma instalação de pacote NuGet, eles estarão localizados na pasta `newrelic` no diretório raiz do seu aplicativo. Ambos são necessários para a resolução de problemas; por exemplo, se [nenhum dado aparecer](/docs/agents/net-agent/troubleshooting/no-data-appears-net) na interface do New Relic do seu aplicativo. Se algum tipo de log estiver faltando, algum componente do agente .NET não foi iniciado.

* Log do agente: esses nomes de arquivo começam com `newrelic_agent_`.
* Log profiler : esses nomes de arquivo começam com `NewRelic.Profiler`.

## Gerar arquivo de log no Windows [#logs-windows]

<Callout variant="important">
  Quando resolver problemas com seu agente .NET do New Relic, certifique-se de que ele tenha sido configurado para gerar arquivos de log de nível `debug` e monitor de perto o tamanho do seu arquivo de log. O registro em `debug` gera muitos dados muito rapidamente. Após reproduzir seu problema, retorne o nível de log para `info`.
</Callout>

Se o seu `C:\ProgramData\New Relic\.NET Agent` estiver em uma pasta oculta, atualize as configurações do Windows para que você possa vê-lo. Para gerar o arquivo de log do New Relic for .NET:

1. Abra `newrelic.config`, geralmente localizado em `C:\ProgramData\New Relic\.NET Agent` (ou `%ALLUSERSPROFILE%\New Relic\.NET Agent`).
2. Altere a configuração `<log level="info" />` para `<log level="debug" />`.
3. Salve e feche o arquivo e aguarde alguns minutos para que o agente leia as novas configurações.
4. Gere alguns minutos de tráfego para seu aplicativo.
5. Se estiver enviando seu arquivo de log para o suporte da New Relic: Em seu ticket de suporte da New Relic, anexe o arquivo `newrelic.config` (não o texto do arquivo) e anexe toda a pasta `Logs` de `C:\ProgramData\New Relic\.NET Agent\Logs` ou de `%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs`.
6. Em `newrelic.config`, altere `<log level="debug" />` para `<log level="info" />`.

## Gerar arquivo de log no Linux [#logs-linux]

<Callout variant="important">
  Quando resolver problemas com seu agente .NET do New Relic, certifique-se de que ele tenha sido configurado para gerar arquivos de log de nível `debug` e monitor de perto o tamanho do seu arquivo de log. O registro em `debug` gera muitos dados muito rapidamente. Após reproduzir seu problema, retorne o nível de log para `info`.
</Callout>

1. Abra `newrelic.config`, geralmente localizado em `/usr/local/newrelic-dotnet-agent`
2. Altere a configuração `<log level="info" />` para `<log level="debug" />`.
3. Salve e feche o arquivo e aguarde alguns minutos para que o agente leia as novas configurações.
4. Gere alguns minutos de tráfego para seu aplicativo.
5. Se estiver enviando seu arquivo de log para o suporte da New Relic: Em seu ticket de suporte da New Relic, anexe o arquivo `newrelic.config` (não o texto do arquivo) e anexe toda a pasta `Logs` de `/usr/local/newrelic-dotnet-agent/logs`.
6. Em `newrelic.config`, altere `<log level="debug" />` para `<log level="info" />`.

## Gerar arquivo de log do Azure Web App [#azure_logs]

O Console Kudu gerencia relatórios de log do Microsoft Azure Web App. Para usar o Console Kudu, primeiro log no Azure.

1. Navegue até a URL do seu aplicativo Web do Azure; por exemplo:

   ```
   https://example.azurewebsites.net
   ```

2. Insira o URL do console Kudu `scm`trecho no URL; por exemplo:

   ```
   https://example.scm.azurewebsites.net
   ```

3. Verifique o logotipo do Kudu com uma barra de navegação preta no canto superior esquerdo da página e seu nome de usuário do Azure no canto superior direito da página.

Em seguida, para alterar o nível de log no console Kudu:

1. Na barra de navegação do console Kudu, selecione o menu

   <DNT>
     **Debug console**
   </DNT>

   e selecione

   <DNT>
     **CMD**
   </DNT>

   ou

   <DNT>
     **PowerShell**
   </DNT>

   .

2. Navegue até `D:\home\site\wwwroot\newrelic`.

3. Para editar `newrelic.config`, selecione o lápis

   <Icon name="fe-edit-2"/>

   ícone.

4. Altere `<log level="info">` para `<log level="debug">`

5. Salve a alteração em `newrelic.config`.

6. Aguarde alguns minutos para que o log de depuração seja gerado.

7. Use as mesmas etapas para mudar `log level` de volta para `info`.

## Coletar informações do sistema [#msinfo]

Além do log do agente, um arquivo de informações do sistema Microsoft também é útil para resolução de problemas:

1. Na barra de tarefas do Windows, selecione

   <DNT>
     **Start > Run**
   </DNT>

   e insira `msinfo32`. Selecione

   <DNT>
     **OK**
   </DNT>

   .

2. Depois que a página de informações do sistema for carregada, selecione

   <DNT>
     **File > Save**
   </DNT>

   .

3. Aguarde alguns minutos para que o servidor salve o arquivo.

4. Anexe o arquivo ao seu [ticket de suporte da New Relic](/docs/accounts-partnerships/education/getting-started-new-relic/find-help-or-file-support-ticket).

## Verifique as permissões [#permissions]

Às vezes o agente .NET irá iniciar mas não conseguirá gravar em seus logs porque não possui as [permissões necessárias para criar o diretório log e arquivo de log](/docs/agents/net-agent/troubleshooting/no-data-registry-key-permission-issues). O gerenciamento de permissões varia de acordo com o ambiente, portanto você precisará trabalhar com o administrador do sistema para verificar se isso não é um problema.
