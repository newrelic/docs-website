---
title: Recomendações de registro de integração
tags:
  - Create integrations
  - Infrastructure Integrations SDK
  - Specifications
metaDescription: Integration logging recommendations.
freshnessValidatedDate: never
translationType: machine
---

[O agente de infraestrutura](/docs/infrastructure/new-relic-infrastructure/getting-started/introduction-new-relic-infrastructure) da New Relic fornece um [SDK para criar uma integração no host](/docs/infrastructure/host-integrations/infrastructure-integrations-sdk/get-started/introduction-infrastructure-integrations-sdk/). Este documento explica requisitos e práticas recomendadas para geração de registro de integração.

## Requisitos de registro [#required]

Cabe a você decidir que tipo de mensagem de log criar e que tipo de informação será útil para depurar problemas. Há apenas um requisito: o executável de integração deve gravar o log no erro padrão (stderr).

O agente de infraestrutura capturará as linhas gravadas no erro padrão e as mesclará no [fluxo de log](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generating-logs-troubleshooting-infrastructure) gravado pelo próprio agente de infraestrutura.

Para evitar depender de soluções de log de terceiros, a biblioteca de construção Go integração fornece um [pacote log simples](https://github.com/newrelic/infra-integrations-sdk/blob/master/docs/toolset/log.md) com o nível de log comum.

## Recomendações e práticas recomendadas [#recommended]

Aqui estão as práticas recomendadas para gerar log de integração:

* Por padrão, uma integração deve ser “silenciosa”. Além dos dados emitidos para a saída padrão, deve haver muito poucas mensagens de registro ou de diagnóstico geradas.
* Recomendamos que você inclua um modo de registro detalhado semelhante à configuração [`verbose`](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#verbose) no agente de infraestrutura. Inclua uma opção de linha de comando para ativar e desativar o registro detalhado (por exemplo, `-verbose`).
* Para depurar sua integração enquanto a integração está em execução, inclua a opção detalhada no arquivo de definição como parte da linha de comando a ser executada. Isso enviará o log detalhado para o arquivo de log do próprio agente de infraestrutura.
* Para fins gerais de depuração, use um sinalizador que grave os dados JSON padrão em um formato "bem impresso" legível por humanos (por exemplo, `--pretty`). Observe que a saída escrita em um formato "bem impresso" é apenas para fins de depuração e não é compatível com o agente de infraestrutura.
* Sua integração deve ser criada para que possa funcionar sozinha. Em caso de dúvida se a integração está se comunicando com o agente, você pode executar a integração a partir da linha de comando e ver se está produzindo a saída ou mensagem do log correta que você espera.

Para obter informações sobre o pacote de log da linguagem Go, consulte [Pacote de log](https://github.com/newrelic/infra-integrations-sdk/blob/master/docs/toolset/log.md).
