---
title: 'Erros de CoCreateInstance: nenhum log profiler'
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If your New Relic .NET app is not reporting data, follow these troubleshooting steps to check for CoCreateInstance errors related to permissions.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Depois de gerar tráfego e esperar alguns minutos, seu aplicativo .NET não reporta dados ao New Relic. Além disso, não há log profiler do New Relic para seu aplicativo .NET.

<Callout variant="important">
  Se você tiver erros de experiência do usuário `CoCreateInstance` nos Sites do Azure, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).
</Callout>

## Solução

Para verificar se o New Relic possui as permissões necessárias e resolver o problema, siga estas etapas de resolução de problemas.

<CollapserGroup>
  <Collapser
    id="clsid-errors"
    title="Verifique se há erros de CLSID profiler ."
  >
    Para verificar se o erro de permissão é devido a erros profiler :

    1. Verifique o log de eventos do seu aplicativo em busca de erros como este:

       ```
       NET Runtime version 4.0.30319.296 - Loading profiler failed during CoCreateInstance. Profiler CLSID: '{71DA0A04-7777-4EC6-9643-7D28B46A8A41}'
       ```

    2. Compare o CLSID no erro com os CLSIDs da New Relic:

       ```
       {71DA0A04-7777-4EC6-9643-7D28B46A8A41} (agent for .NET Framework)
       {36032161-FFC0-4B61-B559-F6C5D41BAE5A} (agent for .NET Core)
       ```

    3. Faça um dos seguintes:

       * Se o CLSID não corresponder, [desinstale o outro profiler](/docs/agents/net-agent/troubleshooting/cocreate-errors-no-event-log).
       * Se o CLSID corresponder, continue com este procedimento para verificar se há `CoCreateInstance` erros de permissão no log profiler .
  </Collapser>

  <Collapser
    id="mscorlib"
    title="Verifique as montagens da New Relic."
  >
    Para verificar se os assemblies New Relic estão anexados ao processo `w3wp.exe` :

    1. No servidor onde seu aplicativo está instalado, [faça download do Microsoft Windows <DNT>**Sysinternals Process Explorer**</DNT>](https://technet.microsoft.com/en-us/sysinternals/bb896653.aspx).

    2. Descompacte o arquivo e execute `procexp.exe` como administrador.

    3. Selecione <DNT>**View > Show Lower Pane**</DNT> e depois selecione <DNT>**View > Lower Pane View > DLLs**</DNT>.

    4. Gere algum tráfego para seu aplicativo.

    5. Para atualizar a lista de processos, selecione <DNT>**View > Refresh Now**</DNT>.

    6. No painel superior, selecione seu serviço ou instância `w3wp` (normalmente aninhada em um processo `svchost.exe` ).

    7. No painel inferior, procure assemblies cujos nomes começam com `NewRelic`, incluindo:

       ```
       NewRelic.Agent.Core.dll
       NewRelic.Profiler.dll
       NewRelic.Agent.IL.dll
       NewRelic.ICSharpCode.SharpZipLib.dll
       NewRelic.Json.dll
       NewRelic.Log.dll
       ```

    8. Se você não encontrar nenhum assembly, obtenha suporte em [support.newrelic.com](https://support.newrelic.com)
  </Collapser>

  <Collapser
    id="w3wp"
    title="Verifique os detalhes do ambiente w3wp.exe."
  >
    Verifique se os detalhes do ambiente `w3wp.exe` são estes:

    ```ini
    COR_ENABLE_PROFILING=1
    COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
    NEWRELIC_INSTALL_PATH=C:\Program Files\New Relic\.NET Agent\
    ```
  </Collapser>

  <Collapser
    id="allusersprofile"
    title="Verifique o log do profiler ."
  >
    Verifique o login do profiler em `%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs`.

    * Certifique-se de que haja

      <DNT>
        **no**
      </DNT>

      log profiler para o aplicativo da web em que você está solucionando problemas.

    * Se você tiver uma instalação de site simples ou padrão, ignore qualquer log profiler para outros aplicativos da web.
  </Collapser>

  <Collapser
    id="everyone-group"
    title="Resolva o erro de permissões."
  >
    Se todas as condições acima estiverem presentes, você terá um erro de permissão. Use qualquer uma destas opções para resolver o erro de permissão, conforme aplicável:

    <table>
      <thead>
        <tr>
          <th>
            <DNT>
              **Available options**
            </DNT>
          </th>

          <th>
            <DNT>
              **Resolve permissions errors**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Defina permissões para o grupo <DNT>**Everyone**</DNT> .
          </td>

          <td>
            Ajuste as permissões nas seguintes pastas do grupo <DNT>**Everyone**</DNT> para conceder ao grupo todas as permissões <DNT>**except**</DNT> `Full Control`:

            ```
            C:\Program Files\New Relic\.NET Agent\
            ```

            ```
            C:\Program Files (x86)\New Relic\.NET Agent\
            ```
          </td>
        </tr>

        <tr>
          <td>
            Defina permissões para usuários individuais.
          </td>

          <td>
            Se suas políticas de segurança não permitirem o ajuste de permissões para o grupo <DNT>**Everyone**</DNT> , ajuste as permissões para usuários individuais. Registre o usuário sob o qual seu aplicativo é executado e ajuste as permissões para cada um desses usuários.
          </td>
        </tr>

        <tr>
          <td>
            Defina permissões usando o script do PowerShell.
          </td>

          <td>
            Para adicionar permissões a `HKLM\SOFTWARE\New Relic` usando o script do PowerShell:

            ```shell
            $key = "HKLM:\SOFTWARE\New Relic"
            $acl = Get-Acl $key
            $AddACL = New-Object System.Security.AccessControl.RegistryAccessRule ("Everyone","FullControl","ObjectInherit,ContainerInherit","None","Allow")
            $acl.SetAccessRule($AddACL)
            $acl |Set-Acl -Path $key
            ```

            Para aplicativos de 32 bits, o caminho seria `HKLM:\SOFTWARE\Wow6432Node\New Relic`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
