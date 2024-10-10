---
title: Boletim de Segurança NR18-07
tags:
  - Security
  - Security and Privacy
  - Security bulletins
metaDescription: 'Security vulnerability update for New Relic Java, Python, and .NET agents.'
releaseDate: '2020-12-10'
translationType: machine
---

## Resumo

Uma atualização de segurança para o agente Java, Python e .NET corrige um problema em que o agente pode relatar resultados de consulta de banco de dados para New Relic ou reemitir uma instrução SQL.

<DNT>**Release date:**</DNT> 7 de março de 2018

<DNT>**Vulnerability identifier:**</DNT> NR18-07

<DNT>**Priority:**</DNT> Alto

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
        Agente Java
      </td>

      <td>
        [3.26.1](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-3261) a [3.47.0](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-3470)
      </td>

      <td>
        Consulta SQL
      </td>

      <td>
        [3.47.1](/docs/release-notes/agent-release-notes/java-release-notes)
      </td>
    </tr>

    <tr>
      <td>
        Agente Python
      </td>

      <td>
        [1.1.0.192](/docs/release-notes/agent-release-notes/python-release-notes/python-agent-110192) a [2.106.0.87](/docs/release-notes/agent-release-notes/python-release-notes/python-agent-2106087)
      </td>

      <td>
        Consulta SQL
      </td>

      <td>
        [2.106.1.88](/docs/release-notes/agent-release-notes/python-release-notes/python-agent-2106188)
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET
      </td>

      <td>
        [2.5.112.0](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-251120) a [6.21.0.0](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-62100)

        [7.0.2.0](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-7020) a [7.1.229](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-712290)
      </td>

      <td>
        Consulta SQL com MySQL
      </td>

      <td>
        [8.0 ou 6.22 (para .NET framework 3.5)](/docs/release-notes/agent-release-notes/python-release-notes)
      </td>
    </tr>
  </tbody>
</table>

## Informações sobre vulnerabilidades [#vuln-info]

Agente New Relic executado explica planos para [rastreamento lento da transação](/docs/apm/applications-menu/monitoring/viewing-slow-query-details) e consulta Slow SQL. Versões anteriores do agente executariam um plano de explicação na consulta SQL acrescentando `explain` ao início da consulta. Isso pode causar um problema quando há diversas instruções separadas por ponto e vírgula em uma única consulta. A primeira instrução na string retorna seu plano de explicação, mas qualquer instrução subsequente pode ser executada como uma instrução SQL geral. Dependendo do idioma, da biblioteca e do banco de dados, o agente pode retornar os resultados das instruções adicionais para a New Relic. Também é possível que as instruções adicionais executem um comando `INSERT` ou `UPDATE` adicional. Com esta atualização de segurança, o agente New Relic não executará mais planos de explicação em qualquer consulta que contenha ponto e vírgula como separador de instruções.

### Fatores mitigantes [#factors]

* Muitas bibliotecas SQL e estruturas de linguagem impedem várias formas de execução de múltiplas instruções com `explain`.
* Os planos do Explique estão desativados para versões mais recentes do agente .NET.

## Soluções alternativas

Desative `explain` planos com tracer de transação na configuração do agente:

* [`transaction_tracer`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-Transaction-tracer) para Java
* [`transactiontracer`](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) para .NET
* [`transaction_tracer`](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings) para Python

## Relate vulnerabilidades de segurança à New Relic [#report]

A New Relic está comprometida com a segurança de nossos clientes e de seus dados. Se você acredita ter encontrado vulnerabilidades de segurança em um de nossos produtos ou sites, agradecemos e agradecemos muito que você relate isso ao programa de divulgação coordenado da New Relic. Para obter mais informações, consulte [Relatando vulnerabilidades de segurança](/docs/security/new-relic-security/data-privacy/reporting-security-vulnerabilities).

## Para obter mais ajuda [#more_help]

Recursos de documentação adicionais incluem:.

* [Atualizar o agente .NET](/docs/agents/net-agent/installation/update-net-agent)
* [Atualizar o agente Java](/docs/agents/java-agent/installation/upgrade-java-agent)
* [Atualizar o agente Python](/docs/agents/python-agent/installation-configuration/upgrade-python-agent)
* [Segurança NR](https://newrelic.com/security)
