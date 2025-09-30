---
title: Resolver conflitos .NET e SCOM
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If you are running SCOM and New Relic''s .NET agent, enable SCOM APM and repair the installation to resolve conflicts.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

O agente .NET da New Relic relata com sucesso e para após um curto período de tempo ou um evento de manutenção, como uma redefinição do IIS ou reinicialização do sistema. Se esses sintomas ocorrerem e você estiver usando o System Center Operations Manager (SCOM) da Microsoft, você está enfrentando um conflito profiler do SCOM.

## Solução

<Callout variant="important">
  Não mantenha a parte de monitoramento de desempenho de aplicativos (APM) (`APM`) do SCOM instalada, mas desativada. Isto não é suficiente para evitar interferências. Você deve sinalizá-lo para **não** ser instalado.
</Callout>

Para resolver conflitos profiler SCOM:

1. Remova o profiler do SCOM: desinstale o SCOM ou reinstale o SCOM e desative a parte `APM` no assistente de instalação.

2. Para resolver o conflito SCOM, restaure as configurações do registro usando o PowerShell:

   ```powershell
   $HKLM = 2147483650 #HKEY_LOCAL_MACHINE
   $reg = [wmiclass]"\\.\root\default:StdRegprov"
   $key = "SYSTEM\CurrentControlSet\Services\W3SVC"
   $name = "Environment"
   $value = "COR_ENABLE_PROFILING=1","COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}","NEWRELIC_INSTALL_PATH=C:\Program Files\New Relic\.NET Agent\","CORECLR_ENABLE_PROFILING=1","CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}","CORECLR_NEWRELIC_HOME=C:\ProgramData\New Relic\.NET Agent\"
   $reg.SetMultiStringValue($HKLM, $key, $name, $value)
   $key = "SYSTEM\CurrentControlSet\Services\WAS"
   $name = "Environment"
   $value = "COR_ENABLE_PROFILING=1","COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}","NEWRELIC_INSTALL_PATH=C:\Program Files\New Relic\.NET Agent\","CORECLR_ENABLE_PROFILING=1","CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}","CORECLR_NEWRELIC_HOME=C:\ProgramData\New Relic\.NET Agent\"
   $reg.SetMultiStringValue($HKLM, $key, $name, $value)
   iisreset
   ```

3. Execute estes comandos <DNT>**each**</DNT> sempre que reiniciar o servidor ou crie um script de inicialização para restaurar essas configurações.

4. Recicle seu pool de aplicativos ou, em um prompt de comando, execute <DNT>**`IISRESET`**</DNT>.

Para obter mais detalhes sobre as configurações de variáveis de ambiente acima no registro, consulte [Noções básicas sobre variáveis de ambiente do agente .NET](/docs/apm/agents/net-agent/other-installation/understanding-net-agent-environment-variables/).

<Callout variant="important">
  Você deve reparar sua instalação sempre que reiniciar seu servidor.
</Callout>

## Causa

O System Center Operations Manager (SCOM) da Microsoft inclui um recurso de monitoramento de desempenho de aplicativos (APM) (`APM`) que entra em conflito com o agente .NET da New Relic. Ambos empregam a interface profiler .NET e apenas um profiler pode ser usado por vez.

Se você tiver o SCOM e o agente .NET New Relic instalados no mesmo servidor Windows, desabilitar ou desligar `APM` no SCOM removerá algumas configurações de registro do Windows necessárias para o funcionamento do agente .NET. O agente .NET não poderá monitor aplicativos da web nesse servidor.
