---
title: Boletim de Segurança NR17-04
tags:
  - Security
  - Security and Privacy
  - Security bulletins
metaDescription: Security vulnerability update for New Relic Node.js agent.
releaseDate: '2020-12-10'
translationType: machine
---

## Resumo

Uma atualização de segurança para o agente .NET da New Relic corrige vulnerabilidades em que o agente poderia capturar involuntariamente o parâmetro de solicitação de serviço do aplicativo WCF.

<DNT>**Release date:**</DNT> 4 de maio de 2017

<DNT>**Vulnerability identifier:**</DNT> NR17-04

<DNT>**Priority:**</DNT> Médio

## Software afetado [#affected]

As seguintes versões do agente New Relic são afetadas:

<table>
  <tbody>
    <tr>
      <th>
        <DNT>
          **Name**
        </DNT>
      </th>

      <th>
        <DNT>
          **Affected version**
        </DNT>
      </th>

      <th>
        <DNT>
          **Notes**
        </DNT>
      </th>

      <th>
        <DNT>
          **Remediated version**
        </DNT>
      </th>
    </tr>

    <tr>
      <td>
        Agente .NET
      </td>

      <td>
        6.8.172.0 (e superior)
      </td>

      <td>
        Com WCF
      </td>

      <td>
        [6.11.613.0](/docs/release-notes/agent-release-notes/net-release-notes)
      </td>
    </tr>
  </tbody>
</table>

## Informações sobre vulnerabilidades [#vuln-info]

A versão do agente .NET da New Relic <DNT>**6.8.172.0**</DNT> adicionou visibilidade ao Error Analytics. Por padrão o agente irá capturar o evento de erro, e com o aplicativo WCF isso é capturado como tipo de evento <DNT>**TransactionError**</DNT>. New Relic descobriu que o atributo <DNT>\*\*service.request.\*\*</DNT>\* pode conter informações confidenciais que não devem ser enviadas à New Relic. Foi feita uma correção para desabilitar a coleta destes parâmetros durante a coleta de erros. Os clientes são incentivados a atualizar para a versão mais recente do agente .NET.

### Fatores mitigantes [#factors]

* Somente o agente .NET com Error Analytics e o aplicativo WCF são afetados.
* Todos os atributos de solicitação de serviço ficam desabilitados no modo de alta segurança.

## Soluções alternativas

O usuário afetado e incapaz de atualizar pode optar por configurar manualmente o agente .NET para não capturar o parâmetro de solicitação de serviço. o usuário pode excluir <DNT>\*\*service.request.\*\*</DNT>\* atributo da sub-rotina <DNT>**errorCollector**</DNT> em seu arquivo newrelic.config.

```
<attributes enabled="true">
     <exclude > service.request.*</exclude>
 </attributes>
```

Para obter detalhes, consulte nossa [configuração do coletor de erros do agente .NET](/docs/agents/net-agent/installation-configuration/net-agent-configuration#error_collector)

## Relate vulnerabilidades de segurança à New Relic [#report]

A New Relic está comprometida com a segurança de nossos clientes e de seus dados. Se você acredita ter encontrado vulnerabilidades de segurança em um de nossos produtos ou sites, agradecemos e agradecemos muito que você relate isso ao programa de divulgação coordenado da New Relic. Para obter mais informações, consulte [Relatando vulnerabilidades de segurança](/docs/security/new-relic-security/data-privacy/reporting-security-vulnerabilities).

## Para obter mais ajuda [#more_help]

Recursos de documentação adicionais incluem:.

* [Atualizar o agente .NET](/docs/agents/net-agent/installation-configuration/upgrade-net-agent)
* [Erro do agente .NET na configuração do coletor](/docs/agents/net-agent/installation-configuration/net-agent-configuration#error_collector)
* [MSDN: Windows Communication Foundation](https://msdn.microsoft.com/en-us/library/dd456779(v=vs.110).aspx)
* [Segurança NR](https://newrelic.com/security)
