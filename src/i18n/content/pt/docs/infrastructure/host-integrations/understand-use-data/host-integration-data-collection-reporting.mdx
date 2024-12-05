---
title: Coleta de dados e relatórios para integração no host
tags:
  - Integrations
  - On-host integrations
  - Understand and use data
metaDescription: How New Relic on-host integrations that work with the infrastructure agent collect and report data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

Este documento explica como nossa integração no host coleta e reporta dados.

## Processo de coleta de dados e relatórios [#data-collection]

É assim que a integração no host envia dados para o New Relic:

1. Na inicialização, o agente de infraestrutura verifica o diretório que contém os arquivos de definição da integração.
2. O agente de infraestrutura registra cada executável de integração definido no arquivo de definição.
3. O agente verifica um diretório dedicado em busca de arquivos de configuração de integração.
4. Se esses arquivos de configuração especificarem integração que foi registrada no agente de infraestrutura, o agente configura e agenda a integração.
5. No intervalo programado (o padrão é 15 segundos), o agente coleta os dados da integração e os prepara para transmissão. A cada 60 segundos, ele envia esses dados para a New Relic, juntamente com quaisquer outros dados de infraestrutura.
6. Após uma passagem de coleta bem-sucedida, o executável de integração é encerrado.

<img
  title="Agents and New Relic"
  alt="Agents and New Relic"
  src="/images/infrastructure_diagram_agents-and-nr.webp"
/>

## Integração arquitetura [#example-diagram]

Aqui está um exemplo de como funciona a integração do SQL Server:

* O host 1 com o agente de infraestrutura instalado precisa de uma regra de saída para a porta `1433`.
* O host 2 com SQL Server precisa de uma regra de entrada para a porta `1433`.

Neste exemplo, o host 1 extrai dados do host 2.

## Estrutura e especificações do arquivo [#file-structure]

Compreender a estrutura de arquivos dessas integração no host pode ajudá-lo a personalizar sua integração, entender e usar seus dados e solucionar problemas.

Essas integração obedecem a um conjunto de especificações de código aberto. Para obter uma explicação dessas especificações de arquivo, consulte [Especificações de arquivo](/docs/integrations/integrations-sdk/file-specifications).
