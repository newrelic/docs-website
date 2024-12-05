---
title: Noções básicas sobre variáveis de ambiente necessárias do agente .NET
tags:
  - Agents
  - NET agent
  - Other installation
freshnessValidatedDate: never
translationType: machine
---

Nosso agente .NET é um profiler CLR .NET e depende das variáveis de ambiente do seu aplicativo para conectar seu aplicativo .NET ao New Relic. Para saber mais sobre quais variáveis de ambiente o agente .NET usa, consulte as seções abaixo.

## Visão geral dos termos [#terms-overview]

Aqui estão algumas dicas para entender os termos usados nesta página:

* ".NET Core" refere-se às versões .NET (e aplicativos desenvolvidos com e para versões .NET) 5.0 e superiores (apenas ".NET"), bem como ..NET Core 2.0 a 3.1.
* "Profiler" refere-se ao componente do agente que implementa a API de criação de perfil .NET. Quando tudo está configurado corretamente, o CLR anexa o profiler ao seu aplicativo .NET. O profiler então carrega o restante do agente no aplicativo.

## Como as variáveis de ambiente são usadas pelo agente .NET [#env-variables]

Nosso agente .NET é um [profilerCLR .NET](https://learn.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/profiling-overview) e implementa um subconjunto da API de criação de perfil .NET. [Certas variáveis de ambiente](https://learn.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/setting-up-a-profiling-environment) devem estar presentes no ambiente de um processo .NET para informar ao tempo de execução do .NET que o perfil do processo deve ser criado e por qual profiler. Variáveis de ambiente adicionais são usadas pelo próprio agente .NET para que ele saiba onde e como está instalado.

Para usar o agente .NET, precisamos de variáveis de ambiente para:

* [Ativando a criação de perfil e identificando o profilercorreto](#enable)
* [Dizer ao profiler onde está o resto do agente](#agent)

### Variáveis para ativar a criação de perfil e identificar o profilercorreto [#enable]

Há um conjunto de três variáveis de ambiente usadas para informar ao tempo de execução do .NET se a criação de perfil deve ou não ser habilitada e qual profiler usar: `COR_ENABLE_PROFILING`, `COR_PROFILER` e `COR_PROFILER_PATH`. Os nomes dessas variáveis e o valor correto de cada uma dependem se seu aplicativo foi criado para .NET framework ou .NET Core.

#### Para aplicativo .NET framework :

`COR_ENABLE_PROFILING` informa ao tempo de execução se deve ou não ativar a criação de perfil para um aplicativo. Defina como 1 para ativar o perfil, defina como 0 para desativá-lo.

`COR_PROFILER` informa ao tempo de execução qual profiler usar. O valor é um GUID exclusivo para um determinado profiler. Para profiler da New Relic para .NET framework, o valor correto é `{71DA0A04-7777-4EC6-9643-7D28B46A8A41}`.

`COR_PROFILER_PATH` informa ao tempo de execução onde encontrar o profiler no sistema e depende do tipo de instalação e da plataforma. Observe que isso pode não ser necessário se o agente tiver sido instalado com o instalador MSI, que registra a DLL do profiler no sistema com base no GUID definido em `COR_PROFILER`. No entanto, é seguro defini-lo de qualquer maneira, desde que o valor esteja definido no caminho correto.

Valores tipicos:

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="C:\Program Files\New Relic\.NET Agent\netframework\NewRelic.Profiler.dll"
```

#### Para aplicativo .NET Core:

`CORECLR_ENABLE_PROFILING` informa ao tempo de execução se deve ou não ativar a criação de perfil para um aplicativo. Defina como 1 para ativar o perfil, defina como 0 para desativá-lo.

`CORECLR_PROFILER` informa ao tempo de execução qual profiler usar. O valor é um GUID exclusivo para um determinado profiler. Para profiler da New Relic para .NET Core, o valor correto é `{36032161-FFC0-4B61-B559-F6C5D41BAE5A}`.

`CORECLR_PROFILER_PATH` informa ao tempo de execução onde encontrar o profiler no sistema.

Valores tipicos:

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="C:\Program Files\New Relic\.NET Agent\netcore\NewRelic.Profiler.dll"
```

Observação: o comportamento do profiler do agente .NET difere um pouco entre o .NET framework e o .NET Core. Para o .NET framework, mesmo quando a criação de perfil estiver habilitada no ambiente de um processo do .NET framework , ela só será instrumentada pelo agente se uma das seguintes condições for atendida:

* O aplicativo está hospedado no IIS (a) os pools de aplicativos são configurados para serem instrumentados por padrão ou (b) o pool de aplicativos que hospeda o aplicativo está configurado para ser instrumentado explicitamente.
* O aplicativo está explicitamente configurado para ser instrumentado no arquivo `newrelic.config` de todo o sistema
* `AgentEnabled="true"` é definido em um arquivo `newrelic.config` local do aplicativo

No entanto, para o agente .NET, qualquer processo em que `CORECLR_ENABLE_PROFILING` esteja definido como 1 em seu ambiente será instrumentado pelo agente. Portanto, não recomendamos definir essa variável de ambiente para `1` em todo o sistema, pois isso pode resultar no consumo excessivo de recursos do sistema e/ou no envio de mais dados para o New Relic do que o esperado. Em vez disso, defina esta variável apenas como `1` no ambiente dos processos que você deseja instrumentar.

### Variáveis para informar ao profiler onde está o restante do agente .NET [#agent]

Agora que o tempo de execução do .NET sabe como localizar o profiler e anexá-lo ao seu aplicativo, outras variáveis de ambiente serão necessárias para localizar o restante dos ativos do agente, que incluem componentes binários (DLL) e de configuração (XML). Essas variáveis também são usadas por partes do restante do agente.

Nota: Dependendo do seu cenário de instalação, apenas algumas destas variáveis são necessárias.

#### `NEWRELIC_HOME`

Esta variável:

* é usado apenas na versão .NET framework do agente
* é usado para localizar os ativos de configuração do agente (`newrelic.config` e os arquivos XML de instrumentação na subpasta `extensions` )
* pode ser usado para localizar os ativos binários do agente, se eles estiverem instalados no mesmo local que os ativos de configuração

Nota: Quando o agente é instalado com o instalador MSI, essa variável pode não precisar ser configurada, pois o MSI também configura uma chave de registro (`HKEY_LOCAL_MACHINE\Software\New Relic\.NET Agent\NewRelicHome`) com o valor correto. A variável de ambiente tem precedência se definida.

#### `CORECLR_NEWRELIC_HOME`

Esta variável é:

* Usado apenas na versão .NET Core do agente
* Usado para localizar os ativos de configuração do agente (`newrelic.config` e os arquivos XML de instrumentação na subpasta `extensions` )
* Pode ser usado para localizar os ativos binários do agente, se eles estiverem instalados no mesmo local que os ativos de configuração

Observação: essa variável sempre precisa ser definida para a versão .NET Core do agente.

#### `NEWRELIC_INSTALL_PATH`

Esta variável é usada principalmente:

* Quando as versões .NET e .NET Core do agente são instaladas lado a lado no sistema
* Quando os componentes binários do agente são instalados em um local diferente no sistema dos ativos de configuração
* Quando o agente é instalado com o instalador MSI no Windows (que faz as duas opções acima)

Esta variável é definida como um diretório/pasta e é usada pelo profiler para localizar o agente `Core.dll`. Se o caminho especificado nesta variável contiver o arquivo `NewRelic.Agent.Core.dll` , ele será usado. Se o `Core.dll` não for encontrado, o profiler anexa `netframework` ou `netcore` ao caminho especificado e procura o `Core.dll` nesse local. Se `Core.dll` ainda não for encontrado, o profiler voltará a pesquisar em `NEWRELIC_HOME` (.NET framework) ou `CORECLR_NEWRELIC_HOME` (.NET Core).

Essa variável também é usada pelo agente para carregar os binários de extensão de instrumentação da subpasta `extensions` . O agente sempre anexa `netframework` ou `netcore` ao valor desta variável quando ela é definida. Se não estiver definido, o agente volta a pesquisar em `NEWRELIC_HOME\extensions` (.NET framework) ou `CORECLR_NEWRELIC_HOME\extensions` (.NET Core).

### Valores para cenários típicos de instalação

#### Instalado MSI (Windows)

O MSI é fácil de usar porque faz quase tudo automaticamente, mas o que ele faz nos bastidores é complicado. O instalador MSI coloca diferentes partes do agente em locais diferentes do sistema. Por padrão, ele coloca os ativos do agente binário em `C:\Program Files\New Relic\.NET Agent` e os ativos de configuração em `C:\ProgramData\New Relic\.NET Agent`. Isso é para oferecer suporte a cenários em que usuários não privilegiados podem acessar/editar arquivos em `ProgramData` mas não em `Program Files`. O instalador MSI instala as versões framework e Core do agente lado a lado. O instalador MSI também define uma série de chaves de registro que tornam desnecessária a configuração explícita de algumas das variáveis de ambiente necessárias, conforme explicado acima.

Supondo que você não especifique um caminho de instalação personalizado ao usar o instalador MSI, estes são os valores corretos das variáveis de ambiente:

##### Para aplicativo .NET framework :

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="C:\Program Files\New Relic\.NET Agent\netframework\NewRelic.Profiler.dll" # may not be necessary due to profiler being registered with the system
NEWRELIC_INSTALL_PATH="C:\Program Files\New Relic\.NET Agent"
NEWRELIC_HOME="C:\ProgramData\New Relic\.NET Agent" # may not be necessary due to registry key being set
```

##### Para aplicativo .NET Core:

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="C:\Program Files\New Relic\.NET Agent\netcore\NewRelic.Profiler.dll"
NEWRELIC_INSTALL_PATH="C:\Program Files\New Relic\.NET Agent"
CORECLR_NEWRELIC_HOME="C:\ProgramData\New Relic\.NET Agent"
```

#### Arquivo ZIP (Windows)

O arquivo ZIP do agente para Windows contém as versões framework e Core do agente em diretórios lado a lado. Substitua `CUSTOM_AGENT_PATH` pelo caminho onde você descompacta o arquivo em seu sistema.

##### Para aplicativo .NET framework :

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="CUSTOM_AGENT_PATH\netframework\NewRelic.Profiler.dll"
NEWRELIC_HOME="CUSTOM_AGENT_PATH\netframework"
```

##### Para aplicativo .NET Core:

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="CUSTOM_AGENT_PATH\netcore\NewRelic.Profiler.dll"
CORECLR_NEWRELIC_HOME="CUSTOM_AGENT_PATH\netcore"
```

#### Pacotes Linux

O pacote de instalação do Linux (.deb ou .rpm, conforme apropriado para sua distribuição Linux) instala o agente .NET para .NET Core. Por padrão, ele instala tudo em `/usr/local/newrelic-dotnet-agent`.

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="/usr/local/newrelic-dotnet-agent/libNewRelicProfiler.so"
CORECLR_NEWRELIC_HOME="/usr/local/newrelic-dotnet-agent"
```

Há também um arquivo `.tar.gz` do agente para instalação manual no Linux. Nesse caso, substitua `/usr/local/newrelic-dotnet-agent` por onde quer que você descompacte o arquivo em seu sistema nas variáveis acima.

#### Pacote NuGet NewRelic.Agent

Quando adicionado ao projeto do seu aplicativo, o pacote NewRelic.Agent NuGet adiciona o agente a um subdiretório `newrelic` do seu aplicativo. A versão correta do agente é adicionada para .NET framework ou .NET Core dependendo do tipo de seu aplicativo. O criador de perfil para Windows e Linux foi adicionado, incluindo versões de 64 e 32 bits do profiler do Windows e versões x64 e arm64 do profiler do Linux. Usando `<YOUR_APPLICATION_PATH>` como espaço reservado para onde quer que seu aplicativo seja implantado no sistema, esses são os valores corretos da variável de ambiente.

##### Para aplicativo .NET framework (64 bits):

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="<YOUR_APPLICATION_PATH>\newrelic\NewRelic.Profiler.dll"
NEWRELIC_HOME="<YOUR_APPLICATION_PATH>\newrelic"
```

##### Para aplicativo .NET framework (32 bits):

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="<YOUR_APPLICATION_PATH>\newrelic\x86\NewRelic.Profiler.dll"
NEWRELIC_HOME="<YOUR_APPLICATION_PATH>\newrelic"
```

##### Para aplicativo .NET Core (Windows):

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="<YOUR_APPLICATION_PATH>\newrelic\NewRelic.Profiler.dll"
CORECLR_NEWRELIC_HOME="<YOUR_APPLICATION_PATH>\newrelic"
```

##### Para aplicativo .NET Core (Linux, x64):

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="<YOUR_APPLICATION_PATH>/newrelic/libNewRelicProfiler.so"
CORECLR_NEWRELIC_HOME="<YOUR_APPLICATION_PATH>/newrelic"
```

##### Para aplicativo .NET Core (Linux, arm64):

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="<YOUR_APPLICATION_PATH>/newrelic/linux-arm64/libNewRelicProfiler.so"
CORECLR_NEWRELIC_HOME="<YOUR_APPLICATION_PATH>/newrelic"
```
