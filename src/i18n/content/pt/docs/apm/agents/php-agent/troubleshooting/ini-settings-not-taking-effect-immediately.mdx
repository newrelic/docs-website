---
title: As configurações INI não entram em vigor imediatamente
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'If you change INI settings for your New Relic PHP agent, restart your web server to ensure the new settings take effect properly.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

As alterações no arquivo `newrelic.ini` não entram em vigor imediatamente.

## Solução

Reinicie seu servidor web (Apache, Nginx, PHP-FPM, etc.) depois de fazer qualquer alteração nas configurações INI.

## Causa

Quando o seu servidor web (Apache, Nginx, PHP-FPM, etc.) inicializa e inicializa o PHP, ele lê todas as configurações INI. Ele também define os padrões globais para quaisquer configurações ausentes.

O Apache então cria um conjunto de processos "trabalhadores" para lidar com as solicitações. Esses processos de trabalho herdam as configurações definidas durante a inicialização. Você não tem como saber exatamente qual processo de trabalho lidará com uma determinada solicitação. Quando você faz alterações no arquivo INI, ainda pode haver centenas de processos de trabalho com as configurações antigas, e o próprio processo principal do Apache (que periodicamente elimina os processos de trabalho existentes e gera novos) também possui as configurações INI originais.

Até que você reinicie o servidor Apache, a maioria das alterações nos arquivos INI passarão despercebidas. A única exceção é se você usar o mecanismo de configuração "por diretório" do PHP usando arquivos `.htaccess` . Tais configurações são raras.
