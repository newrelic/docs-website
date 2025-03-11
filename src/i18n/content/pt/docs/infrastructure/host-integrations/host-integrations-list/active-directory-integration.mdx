---
title: Integração do Active Directory
tags:
  - Active Directory integration
  - New Relic integrations
metaDescription: Install our Active Directory integration to monitor the health of your environment.
freshnessValidatedDate: never
translationType: machine
---

Com nossa <DNT>Active Directory</DNT> integração, você pode monitor facilmente a integridade do seu ambiente de serviços de diretório e alertar proativamente sobre possíveis problemas.

Construída com nosso agente de infraestrutura, a integração <DNT>Active Directory</DNT> oferece um conjunto de <InlinePopover type="dashboards"/>e <InlinePopover type="alerts"/>pré-construídos que permitem visualizar seus dados de desempenho mais críticos, em local completo.

<img
  src="/images/infrastructure_screenshot_full_active-directory-dashboard.webp"
  title="Active Directory dashboard"
  alt="A screenshot of a dashboard with Active Directory performance metrics."
/>

<figcaption>
  Depois de configurar a <DNT>Active Directory</DNT> integração com New Relic, veja seus dados em um dashboard como este, pronto para uso.
</figcaption>

Para aproveitar ao máximo esta página, selecione o método de instalação adequado ao seu ambiente. Você precisa de uma [conta New Relic](https://newrelic.com/signup) antes de iniciar o processo de instalação.

<Callout variant="tip">
  **Use a instalação guiada para ver rapidamente seus dados na interface**

  A instalação guiada é um comando CLI único que você pode executar para monitor seus serviços <DNT>Active Directory</DNT>. É uma boa opção para pequenas organizações, ou para quem quer testar New Relic.

  <ButtonGroup>
    <ButtonLink
      role="button"
      to="https://one.newrelic.com/marketplace?state=8f14e646-461e-b010-4675-3a0658bb3d20"
      variant="primary"
    >
      Instalação guiada
    </ButtonLink>
  </ButtonGroup>

  Para uma solução mais permanente e escalável, recomendamos a instalação manual padrão da integração: continue lendo para saber como fazer isso.
</Callout>

<Steps>
  <Step>
    ## Instalar o agente de infraestrutura [#infra]

    Para usar a integração <DNT>Active Directory</DNT> , primeiro é necessário [instalar o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/) no mesmo host. O agente de infraestrutura monitora o próprio host, enquanto a integração que você instalará na próxima etapa amplia seu monitoramento com dados específicos <DNT>Active Directory</DNT>.
  </Step>

  <Step>
    ## Clone o repositório de integração do Active Directory [#clone]

    Execute o seguinte comando em sua CLI para clonar o repositório de integração <DNT>Active Directory</DNT> do New Relic:

    ```bash
    git clone https://github.com/newrelic/newrelic-active-directory-integration.git
    ```
  </Step>

  <Step>
    ## Copiar arquivos de configuração [#copy-config]

    Copie os arquivos de configuração relevantes do repositório para o agente, substituindo `$ROOT_PATH` pelo caminho onde você clonou o repositório:

    ```powershell
    # integrations.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\integrations.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\integrations.d" -Recurse

    # logging.d
    Copy-Item -Path "$ROOT_PATH\newrelic-active-directory-integration\logging.d\*"     -Destination "C:\Program Files\New Relic\newrelic-infra\logging.d" -Recurse
    ```
  </Step>

  <Step>
    ## Instale a integração [#install-io]

    Instale o [<DNT>Active Directory</DNT> início rápido](https://newrelic.com/instant-observability/active-directory) do catálogo do New Relic I/O para adicionar o dashboard e alertas relevantes.
  </Step>

  <Step>
    ## Encontre e use dados [#find-date]

    A coleta de telemetria de <DNT>Active Directory</DNT> depende de vários arquivos de configuração e de script localizados na estrutura de diretório do agente de infraestrutura como esta:

    ```
    C:\Program Files\New Relic\newrelic-infra\
        ├── integrations.d
        │   ├── windows-active-directory-performance-counters.ps1
        │   ├── windows-active-directory-performance-counters.yml
        │   ├── windows-active-directory-replication-checks.yml
        │   ├── windows-active-directory-replication-failures.ps1
        │   ├── windows-active-directory-replication-partners.ps1
        │   └── windows-active-directory-services.yml
        └── logging.d
            └── windows-active-directory.yml
    ```

    Cada um desses arquivos funciona em conjunto para apresentar uma pegada de observabilidade completa. A telemetria resultante no New Relic consiste em dados métricos, de eventos e log .
  </Step>
</Steps>

## Detalhes do evento

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **COUNTER NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `addressBookClientSessions`
      </td>

      <td>
        `\NTDS\AB Client Sessions`
      </td>

      <td>
        Número de sessões de cliente do catálogo de endereços conectadas
      </td>
    </tr>

    <tr>
      <td>
        `inboundFullSyncObjectsRemaining`
      </td>

      <td>
        `\NTDS\DRA Inbound Full Sync Objects Remaining`
      </td>

      <td>
        O número de objetos restantes até que a sincronização completa seja concluída
      </td>
    </tr>

    <tr>
      <td>
        `draInbound`
      </td>

      <td>
        `\NTDS\DRA Inbound Values (DNs only)/sec`
      </td>

      <td>
        O número de valores de propriedades de objetos recebidos de parceiros de replicação de entrada que são DNs que fazem referência a outros objetos
      </td>
    </tr>

    <tr>
      <td>
        `draOutbound`
      </td>

      <td>
        `\NTDS\DRA Outbound Values (DNs only)/sec`
      </td>

      <td>
        O número de valores de propriedade de objeto contendo DNs enviados para parceiros de replicação de saída
      </td>
    </tr>

    <tr>
      <td>
        `draPendingReplicationSync`
      </td>

      <td>
        `\NTDS\DRA Pending Replication Synchronizations`
      </td>

      <td>
        O número de sincronizações de diretório que estão na fila para este servidor, mas ainda não processadas
      </td>
    </tr>

    <tr>
      <td>
        `directoryReadsPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Reads/sec`
      </td>

      <td>
        O número de leituras de diretório por segundo
      </td>
    </tr>

    <tr>
      <td>
        `directoryWritesPerSec`
      </td>

      <td>
        `\NTDS\DS Directory Writes/sec`
      </td>

      <td>
        O número de gravações de diretório por segundo
      </td>
    </tr>

    <tr>
      <td>
        `directoryNotifyQueueSize`
      </td>

      <td>
        `\NTDS\DS Notify Queue Size`
      </td>

      <td>
        O número de notificações de atualização pendentes que estão na fila, mas ainda não foram transmitidas aos clientes
      </td>
    </tr>

    <tr>
      <td>
        `directoryThreadsInUse`
      </td>

      <td>
        `\NTDS\DS Threads in Use`
      </td>

      <td>
        O número atual de threads que o serviço de diretório está usando
      </td>
    </tr>

    <tr>
      <td>
        `ldapActiveThreads`
      </td>

      <td>
        `\NTDS\LDAP Active Threads`
      </td>

      <td>
        O número atual de encadeamentos que o subsistema LDAP do serviço de diretório local usa
      </td>
    </tr>

    <tr>
      <td>
        `ldapBindTime`
      </td>

      <td>
        `\NTDS\LDAP Bind Time`
      </td>

      <td>
        O tempo (em milissegundos) necessário para concluir a última ligação LDAP
      </td>
    </tr>

    <tr>
      <td>
        `ldapClientSessions`
      </td>

      <td>
        `\NTDS\LDAP Client Sessions`
      </td>

      <td>
        O número de sessões de cliente LDAP atualmente conectadas
      </td>
    </tr>

    <tr>
      <td>
        `ldapSearchesPerSec`
      </td>

      <td>
        `\NTDS\LDAP Searches/sec`
      </td>

      <td>
        A taxa na qual os clientes LDAP executam operações de pesquisa
      </td>
    </tr>

    <tr>
      <td>
        `ldapSuccessfulBindsPerSec`
      </td>

      <td>
        `\NTDS\LDAP Successful Binds/sec`
      </td>

      <td>
        O número de ligações LDAP por segundo
      </td>
    </tr>

    <tr>
      <td>
        `contextSwitchesPerSec`
      </td>

      <td>
        `\System\Context Switches/sec`
      </td>

      <td>
        A taxa combinada na qual todos os processadores do computador são trocados de um thread para outro
      </td>
    </tr>

    <tr>
      <td>
        `processorQueueLength`
      </td>

      <td>
        `\System\Processor Queue Length`
      </td>

      <td>
        O número de threads aguardando para serem executados na fila
      </td>
    </tr>
  </tbody>
</table>

## Serviços do Windows [#windows-services]

A coleta de <DNT>Active Directory</DNT> serviços do Windows é realizada por meio da integração nativa dos serviços do Windows usando este arquivo de configuração:

```
windows-active-directory-services.yml
```

Os resultados desta coleta são armazenados como métricas dimensionais com o rótulo decorado: `label.primary_app = 'active_directory'`.

## Detalhes da métrica

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **SERVICE NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ADWS`
      </td>

      <td>
        <DNT>
          Active Directory
        </DNT>

        Serviços web
      </td>
    </tr>

    <tr>
      <td>
        `DFS`
      </td>

      <td>
        Sistema de arquivos distribuído
      </td>
    </tr>

    <tr>
      <td>
        `DFSR`
      </td>

      <td>
        Replicação DFS
      </td>
    </tr>

    <tr>
      <td>
        `DNS`
      </td>

      <td>
        Servidor dns
      </td>
    </tr>

    <tr>
      <td>
        `Dnscache`
      </td>

      <td>
        Cliente DNS
      </td>
    </tr>

    <tr>
      <td>
        `IsmServ`
      </td>

      <td>
        Mensagens entre sites
      </td>
    </tr>

    <tr>
      <td>
        `kdc`
      </td>

      <td>
        Centro de distribuição de chaves Kerberos
      </td>
    </tr>

    <tr>
      <td>
        `lanmanserver`
      </td>

      <td>
        Servidor
      </td>
    </tr>

    <tr>
      <td>
        `lanmanworkstation`
      </td>

      <td>
        Posto de trabalho
      </td>
    </tr>

    <tr>
      <td>
        `Netlogon`
      </td>

      <td>
        Logon na Net
      </td>
    </tr>

    <tr>
      <td>
        `NTDS`
      </td>

      <td>
        Serviços de domínio do Active Directory
      </td>
    </tr>

    <tr>
      <td>
        `RpcSs`
      </td>

      <td>
        Chamada de Procedimento Remoto (RPC)
      </td>
    </tr>

    <tr>
      <td>
        `SamSs`
      </td>

      <td>
        Gerente de contas de segurança
      </td>
    </tr>

    <tr>
      <td>
        `W32Time`
      </td>

      <td>
        Hora do Windows
      </td>
    </tr>
  </tbody>
</table>

## Detalhes do evento

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **EVENT NAME**
        </DNT>
      </th>

      <th>
        <DNT>
          **ATTRIBUTE**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureCount`
      </td>

      <td>
        Inteiro que indica a contagem total de falhas de replicação que ocorreram no controlador de domínio especificado.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `failureType`
      </td>

      <td>
        Representação de cadeia de caracteres do último tipo de falha de replicação experimentada pelo controlador de domínio especificado.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `firstFailureTime`
      </td>

      <td>
        String timestamp (

        `MM/dd/yyyy h:mm:ss tt`

        ) indicando a primeira falha observada no controlador de domínio especificado.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `lastError`
      </td>

      <td>
        Inteiro que indica o último código de erro recebido devido a uma falha de replicação no controlador de domínio especificado.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationFailures`
      </td>

      <td>
        `server`
      </td>

      <td>
        Nome da string do controlador de domínio onde ocorreu a falha de replicação.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationAttempt`
      </td>

      <td>
        String timestamp (

        `MM/dd/yyyy h:mm:ss tt`

        ) que indica a última tentativa de replicação entre o servidor e o parceiro.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `lastReplicationSuccess`
      </td>

      <td>
        String timestamp (

        `MM/dd/yyyy h:mm:ss tt`

        ) que indica a última replicação bem-sucedida entre o servidor e o parceiro.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `partner`
      </td>

      <td>
        Nome abreviado do parceiro remoto para replicação.
      </td>
    </tr>

    <tr>
      <td>
        `activeDirectoryReplicationPartners`
      </td>

      <td>
        `server`
      </td>

      <td>
        Nome abreviado do servidor local para
      </td>
    </tr>
  </tbody>
</table>

## Logs de eventos do Windows [#event-logs]

A coleta de <DNT>Active Directory</DNT> eventos do Windows é realizada com o roteamento de logintegrado no agente de infraestrutura usando este arquivo de configuração:

```
windows-active-directory.yml
```

Os resultados desta coleta são armazenados como log com o rótulo decorado: `logtype = 'active_directory'`.

## Detalhes log

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **CHANNEL**
        </DNT>
      </th>

      <th>
        <DNT>
          **EVENT ID**
        </DNT>
      </th>

      <th>
        <DNT>
          **DESCRIPTION**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4609`
      </td>

      <td>
        O Windows está desligando
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4616`
      </td>

      <td>
        A hora do sistema foi alterada
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4625`
      </td>

      <td>
        Uma conta não conseguiu fazer log
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4648`
      </td>

      <td>
        Foi feita uma tentativa de logon usando credenciais explícitas
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4649`
      </td>

      <td>
        Um anexo de repetição foi detectado
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4950`
      </td>

      <td>
        Uma associação de segurança do modo principal IPsec foi estabelecida
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4697`
      </td>

      <td>
        Um serviço foi instalado no sistema
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4713`
      </td>

      <td>
        A política Kerberos foi alterada
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4714`
      </td>

      <td>
        A política de recuperação de dados criptografados foi alterada
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4719`
      </td>

      <td>
        A política de auditoria do sistema foi alterada
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4720`
      </td>

      <td>
        Uma conta de usuário foi criada
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4723`
      </td>

      <td>
        Foi feita uma tentativa de alterar a senha de uma conta
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4724`
      </td>

      <td>
        Foi feita uma tentativa de redefinir a senha de uma conta
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4725`
      </td>

      <td>
        Uma conta de usuário foi desativada
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4726`
      </td>

      <td>
        Uma conta de usuário foi excluída
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4738`
      </td>

      <td>
        Uma conta de usuário foi alterada
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4739`
      </td>

      <td>
        A política de domínio foi alterada
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4740`
      </td>

      <td>
        Uma conta de usuário foi bloqueada
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        `4781`
      </td>

      <td>
        Uma conta de computador foi criada
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1083`
      </td>

      <td>
        Não foi possível determinar o número da versão do descritor de segurança
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1202`
      </td>

      <td>
        As políticas de segurança foram propagadas com aviso. 0x534: Nenhum mapeamento entre nomes de contas e IDs de segurança foi feito
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1265`
      </td>

      <td>
        A tentativa de estabelecer um link de replicação para a seguinte partição de diretório gravável falhou
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1311`
      </td>

      <td>
        O Knowledge Consistency Checker (KCC) detectou problemas com a seguinte partição de diretório
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1388`
      </td>

      <td>
        Durante os últimos [número] dias; erros de replicação em uma ou mais partições de diretório fizeram com que a replicação fosse desativada para o contexto de nomenclatura especificado no controlador de domínio atual
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `1645`
      </td>

      <td>
        <DNT>
          Active Directory
        </DNT>

        Os serviços de domínio detectaram que o domínio ainda usa a senha padrão da conta 'administrador'
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `5805`
      </td>

      <td>
        A configuração da sessão do computador [nome do computador] falhou na autenticação
      </td>
    </tr>

    <tr>
      <td>
        Sistema
      </td>

      <td>
        `5807`
      </td>

      <td>
        Durante os últimos [número] dias; houve alguns erros de replicação na floresta. Pode haver problemas de rede ou conectividade na floresta
      </td>
    </tr>
  </tbody>
</table>

## Verifique o código-fonte [#source-code]

Esta integração é um software de código aberto. Isso significa que você pode [navegar pelo código-fonte](https://github.com/newrelic/newrelic-active-directory-integration) e enviar melhorias, ou criar seu próprio fork e construí-lo.
