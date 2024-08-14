---
title: Nenhum dado log aparece na interface
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: 'If no data appears in the logs UI in New Relic, follow these troubleshooting tips.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você não verá os dados log esperados na interface New Relic após dez minutos da instalação do agente de infraestrutura, o <InlinePopover type="apm"/>agente, ou da configuração do encaminhamento de registros.

## Soluções

Se nenhum dado aparecer depois de configurar uma solução de relatório de log e aguardar cerca de cinco minutos, tente o seguinte:

<table>
  <thead>
    <tr>
      <th>
        Log resolução de problemas
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Infraestrutura e agente APM
      </td>

      <td>
        Esses agentes são projetados para reportar automaticamente dados log . Isso é conhecido como [log-in-context](/docs/logs/logs-context/logs-in-context). Se você não vir esses dados ou quiser fazer configurações adicionais, algumas opções:

        Para APM:

        * Revise [nossos documentos sobre como ativar o log-in-context APM ](/docs/logs/logs-context/get-started-logs-context).

        * Certifique-se de que seu agente APM seja uma versão que suporte log-in-context. Aqui estão os detalhes sobre agentes e versões compatíveis:

          * Logs contextualizados Java (agente v7.6.0 ou superior)

            * Log4j1 1.2.17 ou superior
            * Log4j 2.6 ou superior
            * Logback 1.1 ou superior
            * JUL (java.util.logging) JDK 8+
            * JBoss Logging 1.3.0.Final a 2.x
            * Registro do Dropwizard

          * Logs contextualizados .NET (agente v9.7.0.0 ou superior)

            * NLog: 4.1+ (.NET framework), 4.5+ ..NET Core requer agente .NET v9.7 ou superior.
            * Serilog: 2.0 ou superior (.NET framework), 2.5+ (.NET Core). Requer agente .NET v9.7.0 ou superior.
            * Microsoft.Extensions.Logging: 3.0+. Requer agente .NET v9.7.0 ou superior (.NET Core), agente .NET v10.0.0 ou superior (.NET framework).
            * Log4net, Serilog, Nlog

          * Logs contextualizados do Node.js (agente v8.11.0 ou superior)

            * Winston 3.0.0 ou mais alto
            * Pino 7.0.0 ou superior
            * Bunyan 1.8.12 ou superior

          * Logs contextualizados do Python (agente v7.12.0.176 ou superior)

            * Biblioteca de registro suportada: logging e loguru

          * Logs contextualizados Ruby (agente v8.6.0 ou superior)

            * Classe agente (biblioteca padrão Ruby logger)

          * Logs contextualizados Go (agente v3.19.1 ou superior)

            * Logpadrão da biblioteca
            * Registro zero
            * Logs contextualizados Logrus PHP (agente v10.1.0)
            * Monólogo (versão 2 ou 3)

        * Você pode usar nosso [aplicativo Groundskeeper](https://onenr.io/0OQMXd57DjG) para ver se o seu agente APM está atualizado.

          Para o agente de infraestrutura: consulte [opções de configuração de criação de log](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/#logging-variables).
      </td>
    </tr>

    <tr>
      <td>
        Acesso aos dados
      </td>

      <td>
        É possível que você não tenha as permissões ou acesso à conta corretos. Consulte [Fatores que afetam o acesso a recursos e dados](/docs/accounts/accounts-billing/account-structure/factors-affecting-access-features-data/).
      </td>
    </tr>

    <tr>
      <td>
        Compatibilidade
      </td>

      <td>
        Se você configurou o encaminhamento de logs, certifique-se de ter instalado um [direcionador de log compatível](/docs/logs/forward-logs/).
      </td>
    </tr>

    <tr>
      <td>
        Códigos de status
      </td>

      <td>
        Verifique o código de status da resposta retornado do endpoint de coleta de logs do New Relic. Por exemplo, você pode ver:

        ```
        HTTP Error 403: Forbidden. Review your license key.
        ```

        Este erro significa que você está usando uma chave de segurança inválida. New Relic requer um <InlinePopover type="licenseKey"/>para ativar o envio log .

        Uma resposta `HTTP 202` indica sucesso.
      </td>
    </tr>

    <tr>
      <td>
        Erros
      </td>

      <td>
        Execute uma consulta usando o [evento`NrIntegrationErrors` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror/)para ver se algum erro está relacionado à geração de registros. Por exemplo, procure mensagens como:

        ```
        Error unmarshalling message payload
        ```
      </td>
    </tr>

    <tr>
      <td>
        Consulta `Log`
      </td>

      <td>
        Tente consultar o tipo de dados `Log` :

        ```sql
        SELECT * FROM Log
        ```

        Se nenhum dado aparecer no criador de consulta, nenhum dado aparecerá na interface <DNT>**Logs**</DNT> . Para obter mais informações, consulte [nossos documentos sobre opções de consulta de dados](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data).
      </td>
    </tr>
  </tbody>
</table>
