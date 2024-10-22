---
title: Nenhum dado aparece após desativar o TLS 1.0
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'Troubleshooting for New Relic .NET APM agent: How to configure your TLS protocol preferences for your .NET application and environment.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Nenhum dado aparece no New Relic após a desativação do TLS 1.0. Você verificou se o TLS 1.0 está desabilitado inspecionando a seguinte chave de registro:

```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.0\Client
```

O TLS 1.0 será desativado se `"Enabled"` estiver definido como `0` e `"DisabledByDefault"` estiver definido como `1`.

Além disso, você também deve ter notado uma mensagem de erro no log do agente New Relic devido a esse problema; por exemplo:

* ```
  NewRelic ERROR: Unable to connect to the New Relic service at collector.newrelic.com:443 : System.Net.WebException: 
  The request was aborted: Could not create SSL/TLS secure channel.
  ```
* ```
  NewRelic ERROR: Unable to connect to the New Relic service at collector.newrelic.com:443 : System.Net.WebException: 
  The underlying connection was closed: An unexpected error occurred on a send. ---> System.IO.IOException: 
  Received an unexpected EOF or 0 bytes from the transport stream.
  ```
* ```
  NewRelic ERROR: Unable to connect to the New Relic service at collector.newrelic.com:443 : System.Net.WebException: 
  The underlying connection was closed: An unexpected error occurred on a receive. ---> System.ComponentModel.Win32Exception: 
  The client and server cannot communicate, because they do not possess a common algorithm.
  ```

## Solução

O agente New Relic .NET requer uma versão mínima do TLS 1.2 ou superior. Para o TLS 1.2, também é necessário que o .NET esteja configurado para usá-lo.

A partir do agente .NET versão 10.6.0, na inicialização, o agente registra a versão TLS configurada no nível INFO.

<Callout variant="important">
  Se você definir uma versão TLS como padrão, ela será usada tanto pelo aplicativo quanto pelo agente New Relic. Você não pode usar uma versão TLS diferente para cada um.
</Callout>

Para ativar um protocolo de versão TLS específico:

<CollapserGroup>
  <Collapser
    id="windows-registry"
    title="Passo 1. Habilite os protocolos TLS no registro do Windows."
  >
    Versões mais antigas do Windows Server (2008/2012) podem não ter TLS 1.1/1.2 suporte habilitado por padrão.

    <Callout variant="caution">
      Siga estas etapas cuidadosamente. Podem ocorrer problemas sérios se você modificar o registro incorretamente. Recomendação: Antes de modificar o registro, faça um backup.
    </Callout>

    Aqui está um exemplo de como atualizar o registro do Windows para TLS 1.2. Isso requer que o TLS esteja ativado para a função <DNT>**Client**</DNT> , porque seu servidor está se conectando como cliente ao New Relic.

    1. Copie e cole o seguinte em um arquivo:

       ```ini
       Windows Registry Editor Version 5.00

       [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2]

       [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client]
       "DisabledByDefault"=dword:00000000
       "Enabled"=dword:00000001
       ```

    2. Salve o arquivo com uma extensão `.reg` .

    3. Execute o script.
  </Collapser>

  <Collapser
    id="windows-registry"
    title="Etapa 2. Ative os protocolos padrão do .NET"
  >
    O .NET framework 4.5 ou inferior usa os protocolos SSL v3 e TLS 1.0 por padrão.

    Depois de habilitar o TLS 1.1 ou 1.2 por meio do registro, você ainda precisará alterar os protocolos padrão usados pelo .NET.

    Escolha uma das seguintes opções:

    <CollapserGroup>
      <Collapser
        id="strongcrypto"
        title="Habilite propriedade criptográfica forte no registro do Windows"
      >
        <Callout variant="caution">
          Siga estas etapas cuidadosamente. Podem ocorrer problemas sérios se você modificar o registro incorretamente. Recomendação: Antes de modificar o registro, faça um backup.
        </Callout>

        Adicionar o valor `SchUseStrongCrypto` às chaves de registro do .NET framework permitirá que todos os aplicativos .NET usem o TLS 1.1 ou 1.2. Ambas as chaves de registro precisarão ser modificadas para garantir que os aplicativos .NET de 32 e 64 bits possam usar o TLS 1.1/1.2.

        1. Copie e cole o seguinte em um arquivo:

           ```ini
           Windows Registry Editor Version 5.00

           [HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\.NETFramework\v4.0.30319] 
           "SchUseStrongCrypto"=dword:00000001

           [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]
           "SchUseStrongCrypto"=dword:00000001
           ```

        2. Salve o arquivo com uma extensão `.reg` .

        3. Execute o script.
      </Collapser>

      <Collapser
        id="app-code"
        title="Incluir protocolo no código do seu aplicativo"
      >
        Você pode alterar os protocolos de segurança padrão do .NET modificando o código-fonte do seu aplicativo. O comando a seguir habilita TLS 1.2, 1.1 e 1.0 como protocolos padrão para seu aplicativo. É uma configuração global e deve ser definida no início da inicialização do seu aplicativo. Você pode modificá-lo para ativar os protocolos específicos desejados.

        ```cs
        System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls;
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>

## Causa

Se você precisar de uma versão específica do TLS para solicitações HTTP externas, deverá certificar-se de que seu aplicativo e servidor estejam configurados corretamente. Não ter a configuração adequada pode fazer com que o agente .NET do New Relic não consiga se conectar ao New Relic.

O agente .NET da New Relic se comunica com os servidores New Relic usando classes padrão disponíveis no .NET para fazer solicitações HTTP externas. Como o código do agente .NET é executado junto com o código do seu aplicativo, os protocolos de segurança usados para comunicação com os servidores New Relic dependem do ambiente e da configuração do seu aplicativo.

Para obter mais informações sobre como definir corretamente as configurações de TLS do seu sistema ou aplicativo, dependendo da sua versão do .NET Framework, consulte [a documentação da Microsoft sobre práticas recomendadas (TLS)](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls).
