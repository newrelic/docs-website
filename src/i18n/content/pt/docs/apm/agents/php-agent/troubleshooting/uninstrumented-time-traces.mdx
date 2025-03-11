---
title: Tempo não instrumentado no rastreamento
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Two known causes of uninstrumented time with detail=1 in transaction traces with New Relic's PHP agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você vê blocos vermelhos de tempo não instrumentado no rastreamento da transação com `transaction_tracer.detail=1` definido.

## Causa

Há dois motivos pelos quais você pode ver blocos vermelhos de tempo não instrumentado em um rastreamento de transação.

A primeira razão é quando você tem uma função que é chamada com frequência e é muito rápida (abaixo do limite padrão de 2 ms para a lista dos 100 principais).

O segundo motivo, e mais comum, é quando uma função:

* Demora muito para executar
* Está escrito em C
* É uma função interna ou é uma função fornecida por um módulo externo

Nessa situação, os culpados mais frequentes são funções que enviam grandes blocos de dados ou arquivos grandes ao usuário. Se o usuário estiver em uma conexão lenta, o envio de arquivos pequenos (imagens pequenas, por exemplo) poderá demorar muito devido à simples latência da rede. Como nenhuma função interna ou de extensão C é instrumentada, o agente PHP não tem ninguém para “culpar” o tempo gasto, e isso aparece em um trace da transação como tempo não instrumentado.
