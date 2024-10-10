---
title: Atualize o agente .NET se você usar o Microsoft Extensions Logging com encaminhamento de logs
tags:
  - Security
  - Security and Privacy
  - Security bulletin
metaDescription: New Relic advises updating .NET agent for customers employing Microsoft Extensions Logging with log forwarding enabled
releaseDate: '2022-12-03'
translationType: machine
---

## Resumo [#summary]

New Relic está recomendando que os clientes que implantarem o agente .NET em uma configuração utilizando Microsoft Extensions Logging (MEL) atualizem para a versão 10.1.0 ou posterior para resolver um [problema](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-10-1-0/) em que o agente New Relic .NET (v9.7.0 a 10.0.0) encaminhava qualquer nível de registro MEL, independentemente da configuração.

Esta orientação se aplica ao usuário do agente .NET versões 9.7.0 a 10.0.0 que usam a framework de criação de log MEL. O agente .NET que usa a estrutura de Log4net, Serilog e NLog não é afetado.

## Software afetado [#affected-software]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Versão do agente .NET
      </th>

      <th>
        Framework de Logging
      </th>

      <th>
        Condições necessárias
      </th>

      <th>
        Afetado/não afetado
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **.NET agent 9.7.0 through 10.0.0**
        </DNT>
      </td>

      <td>
        <DNT>
          **Microsoft Extensions Logging (MEL)**
        </DNT>
      </td>

      <td>
        <DNT>
          **Log forwarding enabled and log level set**
        </DNT>
      </td>

      <td>
        <DNT>
          **Affected**
        </DNT>
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET todas as versões
      </td>

      <td>
        Log4Net, Serilog ou NLog
      </td>

      <td/>

      <td>
        Não afetado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET 9.7.0
      </td>

      <td>
        Registro de extensões da Microsoft (MEL)
      </td>

      <td>
        Configuração padrão (encaminhamento de logs não habilitado)
      </td>

      <td>
        Não afetado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET 9.8.0 a 10.0.0
      </td>

      <td>
        Registro de extensões da Microsoft (MEL)
      </td>

      <td>
        Encaminhamento de logs desabilitado
      </td>

      <td>
        Não afetado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET 9.7.0 a 10.0.0
      </td>

      <td>
        Registro de extensões da Microsoft (MEL)
      </td>

      <td>
        Configurado para encaminhar todos os níveis de log de extensão da Microsoft
      </td>

      <td>
        Não afetado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET antes de 9.7.0
      </td>

      <td>
        n/a
      </td>

      <td/>

      <td>
        Não afetado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET 10.1.0 e depois
      </td>

      <td>
        Registro de extensões da Microsoft (MEL)
      </td>

      <td/>

      <td>
        Não afetado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET todas as versões
      </td>

      <td>
        n/a
      </td>

      <td>
        Implantar em Linux
      </td>

      <td>
        Não afetado
      </td>
    </tr>
  </tbody>
</table>

### Corrigido em:

* Agente New Relic .NET versões 10.1.0 e depois

### Ação recomendada: [#recommended]

* Os clientes que usam o Microsoft Extension Logging devem [atualizar para a versão 10.1.0 ou posterior](/docs/apm/agents/net-agent/installation/update-net-agent/)
* <DNT>**Technical Links**</DNT>: [Atualizando o agente .NET](/docs/apm/agents/net-agent/installation/update-net-agent/)
* <DNT>**Workarounds**</DNT>: Clientes afetados que não conseguem atualizar seu agente .NET para 10.1.0 ou mais tarde neste momento pode [desativar o encaminhamento de logs](/docs/logs/logs-context/disable-automatic-logging/).

## Detalhes técnicos: [#technical-details]

Versão 10.1.0 corrige um erro no tempo do ponto de instrumentação para que o Log de Extensões da Microsoft envie corretamente dados MEL após a filtragem interna em nível de log ocorrer.

## Detalhes da linha do tempo [#timeline]

Esse problema foi introduzido quando New Relic adicionou suporte para o recurso de encaminhamento de logs com a framework Microsoft Extensions Logging (MEL) no aplicativo ..NET Core no .NET agente v 9.7.0 (4 de abril de 2022) e no aplicativo .NET framework em v 10.0.0 (19 de julho de 2022). Na versão 9.7.0, o recurso de encaminhamento de logs estava desabilitado por padrão, portanto os clientes que utilizam a versão 9.7.0.0 só poderão ser afetados por este problema se tiverem configurado manualmente o encaminhamento de logs.

Na versão 9.8.0 (5 de maio de 2022), o recurso encaminhamento de logs estava habilitado por padrão.

O problema foi corrigido com o lançamento do agente .NET versão 10.1.0, lançado em 12 de setembro de 2022.

## Perguntas frequentes [#faq]

1. O que é um documento de orientação de segurança? New Relic emitiu este documento de Orientação de Segurança para notificar os clientes sobre a necessidade de atualizar seu software para resolver um bug de software que, embora não possa ser explorado por terceiros para obter acesso aos dados dos clientes, ainda possui recomendações acionáveis de segurança ou privacidade para os clientes. .
2. É possível que terceiros explorem esse problema para acessar dados de log que são encaminhados para a New Relic? Não, o problema não permite a exposição de dados a terceiros. Usamos um conjunto abrangente de controles técnicos para apoiar a segurança dos dados que recebemos. Para obter mais informações, consulte nossa documentação sobre [segurança de dados](/docs/security/security-privacy/data-privacy/security-controls-privacy/) e [criptografia de dados](/docs/security/security-privacy/compliance/data-encryption/).
3. Depois de implantar a versão 10.1.0 do agente .NET da New Relic, preciso fazer mais alguma coisa? Não, não são necessárias mais alterações de configuração após a atualização. Recomendamos que você verifique suas configurações definidas para ter certeza de que correspondem às configurações desejadas.
4. Estou usando o agente .NET, mas não usando o Microsoft Extensions Logging para encaminhamento de logs. Estou impactado? Não, esse problema afeta apenas aplicativos .NET que usam MEL para registro. O log MEL foi introduzido na versão 9.7.0 para aplicativo ..NET Core e 10.0.0 para aplicativo .NET framework .
5. Estou utilizando o agente .NET mas desabilitei o recurso de encaminhamento de logs. Estou impactado? Não, esse problema impacta apenas o aplicativo .NET utilizando o recurso encaminhamento de logs e o framework MEL.
