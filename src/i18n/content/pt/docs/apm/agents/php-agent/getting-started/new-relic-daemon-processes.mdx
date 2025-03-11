---
title: Processos do daemon New Relic
tags:
  - Agents
  - PHP agent
  - Getting started
metaDescription: Information about daemons for New Relic PHP agent installations prior to 3.0.
freshnessValidatedDate: never
translationType: machine
---

O agente PHP consiste em duas partes:

* O módulo de extensão PHP, `newrelic.so`
* O daemon do agente, `newrelic-daemon`

O daemon atua como um proxy entre o agente PHP e o coletor New Relic para reduzir o tráfego de rede e melhorar o tempo de resposta do aplicativo instrumentado. Se o daemon não estiver em execução, nenhum dado será relatado ao New Relic.

## Estados iniciais ou inativos do daemon PHP [#daemon]

Quando o daemon está em estado inicial ou inativo, <DNT>**two**</DNT> transação deve ocorrer antes de começar a relatar.

Em um estado <DNT>**initial**</DNT> :

* Com a primeira transação, o daemon adiciona seu aplicativo recém-relatado à sua própria tabela de informações do aplicativo.
* Assim que o aplicativo for adicionado, o daemon reportará a segunda transação ao New Relic.

Em um estado <DNT>**idle**</DNT> :

* A primeira transação ativa o daemon e restabelece a conexão com o New Relic.
* A segunda transação reporta dados para a New Relic.

## Processos de watchdog e de trabalho [#processes]

Se você fizer uma listagem de processos, verá que sempre há dois processos daemon em execução:

```
$ ps -ef | grep newrelic-daemon
newrelic     1368     1  0 00:28 ?     00:00:00 /usr/bin/newrelic-daemon ...
newrelic     1370  1368  0 00:28 ?     00:00:00 /usr/bin/newrelic-daemon ...
```

Ter dois processos em execução é um comportamento normal. A primeira coluna é o proprietário do processo, a segunda é o ID do processo (PID) e a terceira é o ID do processo pai (PPID).

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Processos daemon
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Watchdog (primeiro processo)
      </td>

      <td>
        O primeiro processo, pertencente ao PID 1, é o processo "watchdog". Ele observa o segundo processo, que é o processo “trabalhador”.
      </td>
    </tr>

    <tr>
      <td>
        Trabalhador (segundo processo)
      </td>

      <td>
        O processo de trabalho faz o seguinte:

        * Aceita conexões do agente PHP
        * Reúne métricas
        * Comunica-se com o coletor New Relic
      </td>
    </tr>

    <tr>
      <td>
        Encerrando processos
      </td>

      <td>
        Quando o daemon está sendo encerrado normalmente (geralmente executando `/etc/init.d/newrelic-daemon stop`), ele enviará um sinal de encerramento para o processo watchdog. Isso encerrará de forma limpa o processo de trabalho e dará a ele a chance de enviar quaisquer dados pendentes para o New Relic.

        <Callout variant="important">
          Se você precisar encerrar manualmente o daemon, sempre encerre o watchdog, não o trabalhador.
        </Callout>

        Se o processo de trabalho encontrar um erro fatal e terminar inesperadamente, o processo watchdog gerará imediatamente um novo processo de trabalho. Isso ajuda a garantir que o daemon experimente um período mínimo absoluto de inatividade.
      </td>
    </tr>
  </tbody>
</table>

## Pare o daemon [#killing]

Os seguintes métodos podem ser usados para matar o daemon:

* Processo recomendado: Use `/etc/init.d/newrelic-daemon stop`. Este é o método preferido para interagir com o daemon.

* Mate o processo diretamente com seu ID de processo:

  ```
  kill 1368
  ```

* Use o arquivo PID do watchdog:

  ```
  kill `cat /var/run/newrelic-daemon.pid`
  ```
