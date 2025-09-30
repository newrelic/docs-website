---
title: Alto uso de memória (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting tips to determine if Windows Working Set memory usage is a concern after you install New Relic's .NET agent for your app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Depois de instalar o agente .NET da New Relic, você verá um aumento no uso de memória `Working Set` em ferramentas de monitoramento como o Microsoft Windows <DNT>**Task Manager**</DNT>. O aumento geralmente é de cerca de 100 MB por aplicativo de monitor. Isso pode ocorrer tanto na máquina física quanto na máquina virtual.

## Solução

Esse aumento no uso de memória `Working Set` geralmente não afeta o desempenho. O Windows reserva `Working Set` memória para um aplicativo específico, mas ela pode ser liberada a qualquer momento se outro aplicativo precisar de memória. Este é um comportamento normal e esperado para qualquer aplicativo do Windows.

Em casos raros, especialmente em sistemas com RAM limitada ou muitos pools de aplicativos, o uso de memória pode afetar o desempenho. Se o seu desempenho for afetado, tente qualquer uma destas opções:

* [Habilitar instrumentação somente para pools de aplicativos específicos](/docs/agents/net-agent/configuration/net-agent-configuration#include_exclude_apps)

* Adicione mais RAM à máquina.

* Remova alguns pools de aplicativos da máquina.

* Monitor o desempenho para ver se o aumento do uso de memória mostrado em

  <DNT>
    **Task Manager**
  </DNT>

  está realmente afetando o desempenho. Se for, libere memória e compartilhe com outros processos.

## Causa

A causa subjacente é a forma como [o próprio Windows antecipa e aloca memória por processo](https://docs.microsoft.com/en-us/windows/win32/memory/working-set). O Windows aloca essa memória como memória `Working Set` , que é a memória que o sistema operacional reserva para o processo. O sistema operacional pode liberar a memória `Working Set` rapidamente se outro processo precisar dela. Como a alocação de memória é decidida pelo Windows, o New Relic não pode reduzir a quantidade de memória mostrada em uso.

Geralmente este aumento não é um problema, a menos que haja uma queda correspondente no desempenho. Podem ocorrer problemas de desempenho se toda a memória disponível estiver ocupada como `Private Working Set` memória. Se o servidor estiver com pouca memória, monitor o tempo de resposta e o tempo de transação para ver se esse uso de memória está realmente impactando o desempenho. Se não houver aumento por algum tempo, o uso de memória não será um problema.

Normalmente, o uso de memória `Working Set` causa problemas apenas em sistemas com RAM limitada. Por exemplo, os sistemas de teste da New Relic podem mostrar um aumento de aproximadamente 100 MB por aplicativo de monitor ou pool de aplicativos. Um aumento de 80% é notável quando é 80% de 64 GB, mas menos notável quando é 80% de 4 GB.

Da mesma forma, o número de pools de aplicativos monitorados afeta o uso. Um único pool de aplicativos raramente aumenta significativamente o uso, mas um sistema com 4 GB de RAM e 30 pools de aplicativos pode ter problemas.
