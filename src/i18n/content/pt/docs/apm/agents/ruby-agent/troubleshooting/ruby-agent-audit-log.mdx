---
title: Log de auditoria do agente Ruby
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'New Relic''s Ruby agent audit log is disabled by default. To enable it in your newrelic.yml file, add audit_log. enabled: true.'
freshnessValidatedDate: never
translationType: machine
---

Para fins de auditoria de segurança, o agente Ruby registra todos os dados enviados ao coletor New Relic em um arquivo de log em um formato legível por humanos. Este recurso está disponível com o agente Ruby versão 3.5.5 e superior.

## Configurar o log de auditoria [#configure]

<Callout variant="caution">
  Habilite esse recurso somente se precisar de informações detalhadas sobre o que está sendo transmitido para fins de depuração ou auditoria. Ativar esse recurso por um longo período pode sobrecarregar o arquivo de log de auditoria.
</Callout>

O log de auditoria está desabilitado por padrão e deve ser habilitado manualmente. Para ativar, adicione o seguinte ao arquivo <DNT>**newrelic.yml**</DNT> : `audit_log.enabled: true`.

Por padrão, o agente New Relic Ruby grava o log de auditoria em um arquivo próximo ao log principal do agente New Relic em <DNT>**log/newrelic_audit.log**</DNT>. Para controlar o local do arquivo de log de auditoria, defina o parâmetro de configuração `audit_log.path` como o caminho completo onde você deseja o log de auditoria.

## Conteúdo log de auditoria [#content]

O arquivo de log de auditoria não precisa de ferramentas especiais para ser lido. Ele contém duas linhas para cada solicitação que o agente New Relic faz ao coletor New Relic:

* A primeira linha lista o host e o caminho do URI em relação ao qual a solicitação foi feita.
* A segunda linha inclui o conteúdo completo do corpo da solicitação em um formato legível.

Os corpos de solicitação no log de auditoria não representam as sequências de bytes exatas enviadas ao coletor New Relic, pois podem ter várias camadas de codificação aplicadas antes da transmissão ao coletor New Relic. Entretanto, quando eles são despejados no log de auditoria, nenhuma outra informação é adicionada às solicitações de saída.

<Callout variant="tip">
  Para capturar os corpos brutos da solicitação em sua forma codificada, use uma ferramenta de captura de pacotes como <DNT>**tcpdump**</DNT>.
</Callout>

## Solicitar formato do corpo [#format]

O formato do corpo da solicitação depende do formato de comunicação utilizado pelo agente:

* As versões mais recentes do Ruby usam JSON para serialização de dados, portanto, o log de auditoria conterá representações JSON dos corpos da solicitação.
* Versões mais antigas do Ruby usam o formato Marshal nativo do Ruby para serializar os corpos das solicitações. Como esse é um formato opaco, o log de auditoria contém o resultado da chamada de `Object#inspect`. Isso produz uma representação legível do gráfico do objeto de solicitação imediatamente antes da serialização.
