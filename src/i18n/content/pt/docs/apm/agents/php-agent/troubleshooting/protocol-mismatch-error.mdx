---
title: Erro de incompatibilidade de protocolo
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Protocol mismatch errors mean your agent and daemon are out of sync. Follow these steps to fix it.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você verá erros no arquivo de log do daemon após atualizar seu agente como este:`protocol mismatch: A.B != X.Y`.

## Solução

1. Certifique-se de que seu agente e daemon estejam atualizados com o mesmo número de versão.

2. Reinicie seu servidor web (Apache, Nginx, PHP-FPM, etc.).

3. Se o número `A.B` for menor que o número `X.Y`, significa que você tem um agente desatualizado tentando se comunicar com um daemon mais moderno.

   Se o número `A.B` for maior que o número `X.Y`, significa que seu daemon está desatualizado e a causa mais provável é que você tem muitos daemons em execução. Nesse caso, elimine todos os processos `newrelic-daemon` atualmente em execução e reinicie o daemon usando `/etc/init.d/newrelic-daemon start`.

## Causa

A única razão para esse erro é que o agente e o daemon estão fora de sincronia entre si. O daemon e o agente real (a extensão PHP) são um par fortemente acoplado, e o daemon só aceitará conexões e comandos de um agente que corresponda a ele.

Às vezes, o processo de atualização não consegue eliminar o daemon antigo corretamente e você ainda pode ter processos do daemon antigo em execução. Freqüentemente, esse erro é causado pela não reinicialização do servidor web após uma atualização. Se o daemon foi atualizado corretamente, mas seu servidor web ainda contém um agente mais antigo, você verá este erro. O próprio erro indica qual está desatualizado.
