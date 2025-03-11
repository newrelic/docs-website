---
title: Recursos de instalação do agente .NET
tags:
  - Agents
  - NET agent
  - Other installation
freshnessValidatedDate: never
translationType: machine
---

Este documento contém descrições detalhadas de recursos e procedimentos mencionados nos [procedimentos de instalação do agente .NET](/docs/agents/net-agent/installation/new-relic-net-agent-install-introduction).

<Callout variant="important">
  Este documento **não** deve ser lido como um documento independente. Para obter instruções de instalação, consulte [Instalação do agente .NET](/install/dotnet).
</Callout>

## Profiler .NET da Microsoft [#profiler]

O agente .NET da New Relic depende da [API de criação de perfil da Microsoft](https://docs.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/profiling-overview) para relatar dados do seu aplicativo .NET.

Soluções de monitoramento .NET diferentes da New Relic podem usar esta API de criação de perfil. Mas apenas um serviço pode usar o profiler por vez. Isso significa que se você usou um serviço de monitoramento .NET no passado e não o desabilitou/removeu completamente, o profiler ainda pode estar em uso, o que causará [conflitosprofiler ](/docs/agents/net-agent/troubleshooting/profiler-conflicts)quando você tentar habilitar o agente .NET.

## Biblioteca de download do agente .NET [#download-library]

A [biblioteca de download](https://download.newrelic.com/dot_net_agent/latest_release/) do agente .NET da New Relic contém pacotes de arquivos de instalação que são referenciados em [procedimentos de instalação](/install/dotnet#common-installs) específicos. Para obter mais informações sobre esses arquivos, consulte o [arquivo ReadMe](https://download.newrelic.com/dot_net_agent/latest_release/Readme.txt) da biblioteca de download.

## Arquivos zip para instalação manual do agente .NET (Windows) [#install-zip-file]

Para instalar manualmente o agente usando um arquivo ZIP, escolha o arquivo correto para o aplicativo que deseja monitor:

1. Acesse o [site de download do agente .NET](https://download.newrelic.com/dot_net_agent/latest_release/) e obtenha o arquivo correspondente à arquitetura do seu aplicativo (64 ou 32 bits):

   * Framework .NET ou .NET Core/.NET 5+ (32 bits): `NewRelicDotNetAgent_VERSION_x86.zip`
   * Framework .NET ou .NET Core/.NET 5+ (64 bits): `NewRelicDotNetAgent_VERSION_x64.zip`

2. Descompacte a pasta do agente no local desejado.

3. Defina variáveis de ambiente para o processo que você deseja monitor.

   <Callout variant="caution">
     Não recomendamos definir essas variáveis de ambiente globalmente. Definir essas variáveis de ambiente globalmente pode fazer com que todos os processos .NET em execução no sistema sejam instrumentados e reportados ao New Relic. Se você estiver instalando o agente manualmente, esperamos que você tenha meios para definir essas variáveis de ambiente apenas para os processos que deseja monitor.
   </Callout>

   <CollapserGroup>
     <Collapser
       id="net-framework-env-variables"
       title="Variáveis de ambiente do .NET framework para instalação manual"
     >
       Para o .NET framework, as seguintes variáveis são necessárias:

       ```ini
       COR_ENABLE_PROFILING=1
       COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
       NEWRELIC_HOME=path\to\agent\directory\netframework
       COR_PROFILER_PATH=path\to\agent\directory\netframework\NewRelic.Profiler.dll
       ```
     </Collapser>

     <Collapser
       id="net-core-env-variables"
       title="Variáveis de ambiente .NET Core/.NET 5+ para instalação manual"
     >
       Para .NET Core/.NET 5+, as seguintes variáveis são necessárias:

       ```ini
       CORECLR_ENABLE_PROFILING=1
       CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
       CORECLR_NEWRELIC_HOME=path\to\agent\directory\netcore
       CORECLR_PROFILER_PATH=path\to\agent\directory\netcore\NewRelic.Profiler.dll
       ```
     </Collapser>
   </CollapserGroup>

4. Reinicie seu aplicativo. Se estiver usando o IIS, reinicie o IIS.

Se seu aplicativo estiver recebendo tráfego, os dados deverão aparecer em alguns minutos. Caso contrário, consulte [Nenhum dado aparece](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

## Necessidade de instrumentação personalizada [#custom-instrumentation]

Depois de instalar um agente .NET, a maioria dos aplicativos .NET framework reportará automaticamente os dados para sua conta New Relic. (Consulte compatibilidade de estrutura de aplicativo: [.NET framework](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent) \| [.NET Core](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent).)

Se o seu aplicativo .NET usa uma framework de aplicativo que **não** é instrumentada automaticamente ou se o aplicativo não possui nenhuma framework (como um aplicativo de console), após a instalação você precisará configurar manualmente a instrumentação do seu aplicativo. Aqui estão as etapas para fazer isso:

1. Siga as [instruções de instalação](/docs/agents/net-agent/installation/new-relic-net-agent-install-introduction#install-instructions) relevantes para seu aplicativo e framework.
2. [Instrumento personalizado](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation) em seu aplicativo para definir qual atividade será reportada ao New Relic.

## Variáveis de ambiente relacionadas à instalação [#env-variables]

A instalação de um agente .NET requer a configuração de variáveis de ambiente. Para alguns procedimentos de instalação (como aplicativos .NET hospedados no IIS), essas variáveis de ambiente são definidas automaticamente. Para outros procedimentos de instalação, você terá que configurá-los manualmente. Para ver as variáveis de ambiente necessárias para o aplicativo .NET framework e .NET Core, consulte [Variáveis de ambiente](/docs/agents/net-agent/configuration/net-agent-configuration#environment-variables).

Para instalações que exigem a definição manual de variáveis de ambiente, você também pode definir outras [opções de configuração](/docs/agents/net-agent/configuration/net-agent-configuration) por meio de variáveis de ambiente. Aqui está uma olhada em dois que são comumente definidos:

* <DNT>**License key**</DNT>. A variável de ambiente para definir <InlinePopover type="licenseKey"/>é:

  ```ini
  NEW_RELIC_LICENSE_KEY = YOUR_LICENSE_KEY
  ```

  Você também pode definir isso no [arquivo newrelic.config](/docs/agents/net-agent/configuration/net-agent-configuration#service) ou no [arquivo de configuração do aplicativo](/docs/agents/net-agent/configuration/net-agent-configuration#app-cfg-license-key).

* <DNT>**App name**</DNT>. É recomendado definir um [nome de aplicativo significativo](/docs/agents/manage-apm-agents/app-naming/name-your-application#app-name) , mas você também pode definir isso após a instalação. A variável de ambiente é:

  ```ini
  NEW_RELIC_APP_NAME = YOUR_APP_NAME
  ```

  Você também pode [definir isso por meio do newrelic.config, do arquivo de configuração do aplicativo ou da API](/docs/agents/net-agent/configuration/name-your-net-application).

## Instalador programável (somente Windows) [#scriptable-installer]

O instalador programável são arquivos ZIP que contêm um script do PowerShell para instalação do agente .NET. Há um arquivo zip separado para .NET framework versus .NET Core.

<Callout variant="important">
  Recomendamos usar o instalador MSI em vez do instalador programável. Se você deseja automatizar sua instalação, considere executar o instalador MSI na linha de comando.
</Callout>

<Callout variant="important">
  A partir da versão 10.0.0 do agente .NET, o instalador programável não está mais disponível. Esta documentação permanece para clientes que desejam usar o instalador programável para uma versão mais antiga.
</Callout>

<CollapserGroup>
  <Collapser
    id="framework-installer-options"
    title="Instalador programável para .NET framework"
  >
    Para usar o instalador programável para instalar o agente .NET para um aplicativo .NET framework :

    1. Certifique-se de ter direitos de administrador para o seu grupo de administração do Windows. Para obter mais detalhes sobre isso, consulte a [documentação de permissões](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent#user-rights).

    2. Baixe o pacote do instalador programável para o .NET framework no [site de download](https://download.newrelic.com/dot_net_agent/latest_release/). Ao baixar ou usar um desses pacotes, você concorda e aceita os [termos de licença](/docs/licenses/license-information/agent-licenses/net-agent-licenses).

    3. Descompacte o pacote.

    4. Abra um shell de comando e navegue até a pasta do pacote descompactado.

    5. Para uma instalação simples sem opções, use este comando:

       ```bash
       .\install.cmd -LicenseKey YOUR_LICENSE_KEY
       ```

       Para instalar com uma ou mais opções adicionais, utilize o formato abaixo. Consulte a tabela abaixo para obter uma descrição das opções de instalação.

       ```bash
       install.cmd -LicenseKey YOUR_LICENSE_KEY [-NoIISReset] [-InstrumentAll] [-InstallPath PATH_TO_INSTALL]
       ```

       Se seu aplicativo estiver recebendo tráfego, os dados deverão aparecer em alguns minutos. Caso contrário, consulte [Nenhum dado aparece](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

       <table>
         <thead>
           <tr>
             <th width={150}>
               Opções de instalação
             </th>

             <th>
               Descrição
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `LicenseKey`
             </td>

             <td>
               <DNT>**Required**</DNT>. Seu <InlinePopover type="licenseKey"/>.
             </td>
           </tr>

           <tr>
             <td>
               `NoIISReset`
             </td>

             <td>
               Opcional. Use esta opção para evitar que o instalador inicie uma redefinição do IIS.

               <Callout variant="important">
                 Se você usar esta opção, será necessário redefinir o IIS manualmente antes que o New Relic inicie a instrumentação de qualquer aplicativo hospedado no IIS.
               </Callout>
             </td>
           </tr>

           <tr>
             <td>
               `InstrumentAll`
             </td>

             <td>
               Opcional. Por padrão, o agente .NET irá instrumentar todos os aplicativos hospedados no IIS. Use esta opção para ativar a instrumentação de outros tipos de aplicativos .NET.
             </td>
           </tr>

           <tr>
             <td>
               `InstallPath`
             </td>

             <td>
               Opcional. Use esta opção para escolher um local de instalação diferente. O local de instalação padrão é `C:\Program Files\New Relic`.
             </td>
           </tr>
         </tbody>
       </table>

       Desinstalando o agente com o desinstalador programável:

       <Callout variant="tip">
         Você pode adicionar a opção `Force` ao script de desinstalação para forçar uma desinstalação sem solicitar a reinicialização do IIS.
       </Callout>

       Execute o seguinte comando para desinstalar o agente .NET:

       ```bash
       .\uninstall.cmd
       ```
  </Collapser>

  <Collapser
    id="core-installer-options"
    title="Instalador programável para .NET Core"
  >
    <Callout variant="important">
      Antes de instalar o agente:

      * Entenda os [requisitos do agente](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent), incluindo os [requisitos de permissões](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent#user-rights).
      * Observe que são necessários direitos de administrador em um shell elevado (especificamente para selecionar um diretório de log personalizado e executar um IISReset).
    </Callout>

    <Callout variant="caution">
      Por motivos de segurança, é necessário executar o script `installAgent.ps1` conforme mostrado abaixo, acrescentando `./` ao nome do arquivo do script, em vez de acrescentar `powershell` ao script. Se você executar o script acrescentando `powershell` antes e qualquer um dos argumentos fornecidos (como o caminho de instalação ou o caminho de log personalizado) contiver espaços, esses argumentos serão corrompidos, o que levaria à instalação do agente em um local diferente do local pretendido, que pode ser inseguro.
    </Callout>

    Para usar o instalador programável para instalar o agente .NET para um aplicativo .NET Core:

    1. Certifique-se de ter direitos de administrador para o seu grupo de administração do Windows. Para mais detalhes sobre isso, consulte a [documentação de permissões](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent#user-rights)

    2. Baixe o pacote do instalador programável do agente .NET no [site de download do agente .NET](https://download.newrelic.com/dot_net_agent/latest_release/) . Ao baixar ou usar um desses pacotes, você concorda e aceita os [termos de licença](/docs/licenses/license-information/agent-licenses/net-agent-licenses).

    3. Descompacte o pacote no local desejado.

    4. Abra um shell de comando e navegue até a pasta do pacote descompactado.

    5. Você pode instalar o agente local ou globalmente:

       <CollapserGroup>
         <Collapser
           id="installer-local"
           title="Instalação local"
         >
           Para uma instalação simples, sem opções, use este comando:

           ```bash
           ./installAgent.ps1 -destination PATH -installType global -licenseKey YOUR_LICENSE_KEY \
           	[-appName "YOUR_APPLICATION_NAME" -logDir "PATH_TO_CUSTOM_LOG_LOCATION"]
           ```

           Para instalar com uma ou mais opções adicionais, use o mesmo comando com as opções desejadas. Para descrições das opções, consulte a tabela abaixo.

           ```bash
           ./installAgent.ps1 -destination PATH -installType local -licenseKey YOUR_LICENSE_KEY \
           	[-appName "YOUR_APPLICATION_NAME" -logDir "PATH_TO_CUSTOM_LOG_LOCATION" -X86 -ResetIIS -Force]
           ```
         </Collapser>

         <Collapser
           id="installer-global"
           title="Instalação global"
         >
           <Callout variant="important">
             A instalação global irá instrumentar todos os processos do .NET Core em seu sistema. Escolha a instalação global apenas se desejar monitorar todos os processos do .NET Core.
           </Callout>

           Para uma instalação simples sem opções, use este comando:

           ```bash
           ./installAgent.ps1 -destination PATH -installType global -licenseKey YOUR_LICENSE_KEY \
           	[-appName "YOUR_APPLICATION_NAME" -logDir "PATH_TO_CUSTOM_LOG_LOCATION"]
           ```

           Para instalar com uma ou mais opções adicionais, use o mesmo comando com as opções desejadas. Para descrições das opções, consulte a tabela abaixo.

           ```bash
           ./installAgent.ps1 -destination PATH -installType local -licenseKey YOUR_LICENSE_KEY \
           	[-appName "YOUR_APPLICATION_NAME" -logDir "PATH_TO_CUSTOM_LOG_LOCATION" -X86 -ResetIIS -Force]
           ```
         </Collapser>
       </CollapserGroup>

       Se seu aplicativo estiver recebendo tráfego, os dados deverão aparecer em alguns minutos. Caso contrário, consulte [Nenhum dado aparece](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

       <table>
         <thead>
           <tr>
             <th width={150}>
               Opções de instalação
             </th>

             <th>
               Descrição
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `Destination`
             </td>

             <td>
               <DNT>**Required**</DNT>. O local onde o agente está instalado. Este pode ser um caminho absoluto ou relativo. As cotações são obrigatórias.
             </td>
           </tr>

           <tr>
             <td>
               `InstallType`
             </td>

             <td>
               <DNT>**Required**</DNT>. Determina se esta é uma instalação local (específica do aplicativo) ou global (em todo o sistema).
             </td>
           </tr>

           <tr>
             <td>
               `LicenseKey`
             </td>

             <td>
               <DNT>**Required**</DNT>. Seu <InlinePopover type="licenseKey"/>.
             </td>
           </tr>

           <tr>
             <td>
               `AppName`
             </td>

             <td>
               Opcional. Define o [nome do aplicativo](/docs/agents/net-agent/installation-and-configuration/naming-your-net-application) padrão associado à instalação do agente.
             </td>
           </tr>

           <tr>
             <td>
               `LogDir`
             </td>

             <td>
               Opcional. Define um local de registro personalizado para o agente. Por padrão, o agente coloca o diretório de log no diretório de instalação.
             </td>
           </tr>

           <tr>
             <td>
               `X86`
             </td>

             <td>
               Opcional. Instala a versão de 32 bits do agente em vez da versão de 64 bits. New Relic <DNT>**does not recommend**</DNT> instalando a versão de 32 bits do agente globalmente.
             </td>
           </tr>

           <tr>
             <td>
               `ResetIIS`
             </td>

             <td>
               Opcional. Executa um `iisreset` após a instalação.

               <Callout variant="important">
                 Use isso apenas se seu aplicativo .NET Core estiver hospedado por meio de um proxy reverso do IIS.
               </Callout>
             </td>
           </tr>

           <tr>
             <td>
               `Force`
             </td>

             <td>
               Opcional. Força o processo de instalação a substituir uma instalação anterior ou a instalar em uma pasta existente.

               <Callout variant="caution">
                 Isso substitui quaisquer personalizações de configuração. A New Relic recomenda fazer backup do seu arquivo de configuração e de quaisquer arquivos de instrumentação personalizados antes de forçar uma instalação excessiva.
               </Callout>
             </td>
           </tr>

           <tr>
             <td>
               `Help`
             </td>

             <td>
               Opcional. Exibe informações de uso deste script.
             </td>
           </tr>
         </tbody>
       </table>
  </Collapser>
</CollapserGroup>
