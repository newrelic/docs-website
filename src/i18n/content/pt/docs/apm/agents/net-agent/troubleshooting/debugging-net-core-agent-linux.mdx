---
title: Depuração para .NET Core no Linux
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting tips to determine why your .NET Core application running on Linux isn't reporting to New Relic.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Depois de instalar o agente .NET da New Relic no Linux, você não vê nenhum dado, percebe dados ausentes ou não vê nenhum log.

## Solução

<Callout variant="important">
  * Certifique-se de ter privilégios de administrador em seu host para continuar
  * Certifique-se de que as etapas de instalação e execução foram seguidas ([guia de instalação](/docs/agents/net-agent/installation/install-net-agent-linux))
</Callout>

## Etapa 1: verificar o log do agente do aplicativo [#step-one]

<Callout variant="tip">
  * Se você instalou nosso agente para .NET Core ou instalou qualquer agente com o pacote NuGet `NewRelic.Agent` , encontrará uma pasta `logs` no diretório onde o agente foi extraído em seu sistema.
  * Em alguns métodos de instalação no Linux, o padrão é `/usr/local/newrelic-dotnet-agent` (agente versões 10.0.0 ou superior) ou `/usr/local/newrelic-netcore20-agent` (agente versões 9.9.0 ou inferior).
</Callout>

1. Certifique-se de estar analisando os dados atuais. Exclua ou mova quaisquer arquivos existentes no diretório de log para ter certeza de que o log gerado reflete o estado atual do seu sistema.
2. Reinicie seu aplicativo.
3. Exercite seu aplicativo por pelo menos um minuto de uma forma que gere o tráfego que você espera ver em sua conta New Relic.
4. Anote o ID do processo (PID) em que seu aplicativo está sendo executado para poder verificar se um log está sendo criado para esse processo. Você pode encontrar o PID usando um dos seguintes comandos na linha de comando: `pidof dotnet` ou `pidof the_process_name`.
5. Volte para o diretório de log do agente e procure um arquivo de log com um nome contendo o ID do processo do seu aplicativo, por exemplo `NewRelic.Profiler.[PID].log`.
6. Se você vir esse arquivo `profiler log` no diretório de logs, verifique também se há um log de agente correspondente.
7. Procure outro arquivo com o prefixo `newrelic_agent`. Pode haver mais de um deles se você estiver executando vários aplicativos .NET em seu host. Se você vir um ou mais, deverá determinar qual corresponde ao aplicativo que está tentando monitor.
8. Procure no log do agente a sequência `(pid [your PID])`, por exemplo `(pid 1573)`. Se você encontrar essa string no arquivo de log, saberá que é o log do agente associado ao seu aplicativo.

## Etapa 2: verifique se o agente profiler está carregado no processo do aplicativo [#step-two]

No console, execute o seguinte, substituindo `pid` pelo ID do processo:

```bash
sudo cat /proc/PID/maps | grep "libNewRelicProfiler.so"
```

Com base na saída, aqui está o que você precisa fazer:

* Se você não obtiver nenhum resultado desse comando, passe para a próxima etapa.
* Se você obtiver resultados, vá para a [Etapa 4](#step-four) (permissões).

## Etapa 3: verifique as variáveis de ambiente necessárias: [#step-three]

Execute o seguinte, substituindo `PID` pelo ID do seu processo.

```bash
xargs --null --max-args=1 < /proc/PID/environ | grep "CORECLR_"
```

Com base na saída, aqui está o que você precisa fazer:

* Se não obtiver resultados, defina suas [variáveis de ambiente](https://discuss.newrelic.com/t/relic-solution-net-core-agent-required-environment-variables/68972), reinicie seu aplicativo e volte para a Etapa 1.

* Se você obtiver resultados, certifique-se de que todas as quatro variáveis obrigatórias estejam definidas e tenham valores válidos:

  * `CORECLR_ENABLE_PROFILING`: Deve sempre ser definido como 1.
  * `CORECLR_PROFILER`: deve sempre ser definido como `{36032161-FFC0-4B61-B559-F6C5D41BAE5A}`.
  * `CORECLR_NEWRELIC_HOME`: deve ser definido como o caminho completo para o diretório do agente para .NET Core (o diretório onde `newrelic.config`, `libNewRelicProfiler.so` e o diretório de extensões estão localizados).
  * `CORECLR_PROFILER_PATH`: deve ser configurado como o caminho completo para o arquivo `libNewRelicProfiler.so`. Quase sempre é igual a `CORECLR_NEWRELIC_HOME` + `/libNewRelicProfiler.so`.

* Se você fez alguma alteração nas variáveis de ambiente, reinicie o aplicativo e volte para a [Etapa 1](#step-one).

Para obter mais detalhes sobre essas variáveis, consulte [Noções básicas sobre variáveis de ambiente do agente .NET](/docs/apm/agents/net-agent/other-installation/understanding-net-agent-environment-variables/).

## Etapa 4: verifique as permissões [#step-four]

Verifique as seguintes tarefas de permissões:

* Certifique-se de que o usuário sob o qual o processo do seu aplicativo está sendo executado tenha permissões de leitura/gravação/execução para o diretório onde o agente .NET para .NET Core foi extraído em seu sistema (`CORECLR_NEWRELIC_HOME`) e todos os seus subdiretórios.
* Se você fez alguma alteração, reinicie seu aplicativo e volte para a [Etapa 1](#step-one).

Se as etapas acima não resolverem o problema, recomendamos que você entre em contato com o suporte para pedir ajuda no [Fórum de suporte](https://discuss.newrelic.com/).
