---
title: Boletín de Seguridad NR18-07
tags:
  - Security
  - Security and Privacy
  - Security bulletins
metaDescription: 'Security vulnerability update for New Relic Java, Python, and .NET agents.'
releaseDate: '2020-12-10'
translationType: machine
---

## Resumen

Una actualización de seguridad para el agente Java, Python y .NET corrige un problema por el cual el agente puede informar los resultados de la consulta de base de datos a New Relic o volver a emitir una declaración SQL.

<DNT>**Release date:**</DNT> 7 de marzo de 2018

<DNT>**Vulnerability identifier:**</DNT> NR18-07

<DNT>**Priority:**</DNT> Alto

## Software afectado [#affected]

Las siguientes versiones del agente New Relic se ven afectadas:

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
        Agente de Java
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
        Consulta SQL con MySQL
      </td>

      <td>
        [8.0 o 6.22 (para .NET framework 3.5)](/docs/release-notes/agent-release-notes/python-release-notes)
      </td>
    </tr>
  </tbody>
</table>

## Información de vulnerabilidades [#vuln-info]

New Relic agente run explica los planes para [Slow traza de la transacción](/docs/apm/applications-menu/monitoring/viewing-slow-query-details) y Slow SQL consulta. Las versiones anteriores del agente ejecutarían un plan de explicación en la consulta SQL anteponiendo la consulta con `explain`. Esto puede causar un problema cuando hay varias declaraciones separadas por punto y coma en una sola consulta. La primera declaración de la cadena devuelve su plan de explicación, pero cualquier declaración posterior puede ejecutarse como una declaración SQL general. Dependiendo del idioma, la biblioteca y la base de datos, el agente puede devolver los resultados de las declaraciones adicionales a New Relic. También es posible que las declaraciones adicionales puedan ejecutar un comando `INSERT` o `UPDATE` adicional. Con esta actualización de seguridad, el agente New Relic ya no ejecutará planes explicativos en ninguna consulta que contenga un punto y coma como separador de declaraciones.

### Factores atenuantes [#factors]

* Muchas bibliotecas y marcos de lenguaje SQL impiden diversas formas de ejecutar múltiples declaraciones con `explain`.
* Los planes de explicación están desactivados para las versiones más nuevas del agente .NET.

## Soluciones alternativas

Deshabilite `explain` planes con transacción rastreador en la configuración del agente:

* [`transaction_tracer`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-Transaction-tracer) para Java
* [`transactiontracer`](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) para .NET
* [`transaction_tracer`](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings) para Python

## Informar vulnerabilidades de seguridad a New Relic [#report]

New Relic está comprometido con la seguridad de nuestros clientes y sus datos. Si cree que ha encontrado vulnerabilidades de seguridad en uno de nuestros productos o sitios web, le damos la bienvenida y le agradecemos enormemente que lo informe al programa de divulgación coordinada de New Relic. Para obtener más información, consulte [Informar vulnerabilidades de seguridad](/docs/security/new-relic-security/data-privacy/reporting-security-vulnerabilities).

## Para más ayuda [#more_help]

Los recursos de documentación adicionales incluyen:.

* [Actualizar el agente .NET](/docs/agents/net-agent/installation/update-net-agent)
* [Actualizar el agente de Java](/docs/agents/java-agent/installation/upgrade-java-agent)
* [Actualizar el agente Python](/docs/agents/python-agent/installation-configuration/upgrade-python-agent)
* [Seguridad NR](https://newrelic.com/security)
