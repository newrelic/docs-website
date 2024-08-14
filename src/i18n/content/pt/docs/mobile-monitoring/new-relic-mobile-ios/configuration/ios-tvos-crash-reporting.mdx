---
title: Relatório de falhas do iOS e tvOS
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: 'By default, New Relic enables crash reporting for your mobile iOS apps to help track and diagnose crashes.'
freshnessValidatedDate: never
translationType: machine
---

Para o agente versão 4 ou superior, a New Relic produz relatórios de falhas para seu aplicativo móvel. Quando um aplicativo iOS ou tvOS falha, o sistema operacional cria um relatório de falha e o armazena no dispositivo. A New Relic carrega este relatório na próxima vez que o aplicativo for lançado.

Usando este relatório e quaisquer arquivos dSYM relevantes, o relatório de falha inclui o stack trace completo com informações legíveis por humanos. Você pode então log no New Relic e ver cada falha, incluindo o método e a linha onde ocorreu a falha, além de detalhes do dispositivo e do ambiente.

## Arquivos dSYM [#about-dsym]

Quando você cria uma versão de um aplicativo iOS ou tvOS, os nomes dos métodos e classes são removidos, deixando apenas endereços de memória legíveis por máquina. Quando o aplicativo falha, o stack trace consiste nesse código legível por máquina.

Um <DNT>**dSYM file**</DNT> é um arquivo de projeto Xcode para <DNT>**debug symbols**</DNT>. Ele contém os símbolos de depuração que permitem a tradução do relatório de falha inicial em informações legíveis por humanos. Este processo é conhecido como simbolização.

New Relic tem suporte framework dinâmica para upload de dSYM. Se o seu aplicativo usa uma framework dinâmica com vários arquivos dSYM, o New Relic carrega e usa esses arquivos automaticamente.

Para obter mais informações, consulte [Recuperar e fazer download de dSYMs](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/retrieve-upload-dsyms) ou [Carregar arquivos dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps).

## Depurar o repórter de falhas [#debugging]

O relatório de falhas está ativado por padrão, mas há algumas circunstâncias em que ele será desativado:

* <DNT>**If the app is running in a simulator:**</DNT> Um aplicativo em execução no simulador não pode ser usado com relatórios de falhas. As falhas do simulador não podem ser simbolizadas.

* <DNT>**If the debugger is enabled:**</DNT> Só pode haver um manipulador de exceções não capturado registrado por vez por aplicativo. Se estiver executando com o depurador conectado, o New Relic não capturará e reportará falhas.

* <DNT>**If another crash reporter is enabled:**</DNT> Se outro manipulador de exceção não detectado for registrado após o início do New Relic, esta mensagem de erro será registrada:

  ```
  The New Relic exception handler has been replaced. 
  This may result in crashes no longer reporting to New Relic.
  ```

## Desativar relatório de falhas [#disabling-crash-reporting]

Para desativar o relatório de falhas do New Relic, chame o seguinte método de API:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Language**
        </DNT>
      </th>

      <th>
        <DNT>
          **Procedure**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Objective-C
      </td>

      <td>
        Ligue antes de `[NewRelic startWithApplicationToken:...];`

        ```objectivec
        [NewRelic disableFeatures:NRFeatureFlag_CrashReporting];
        ```
      </td>
    </tr>

    <tr>
      <td>
        Swift
      </td>

      <td>
        Ligue antes de `NewRelic.start(withApplicationToken:)`

        ```swift
        NewRelic.disableFeatures(NRMAFeatureFlags.NRFeatureFlag_CrashReporting)
        ```
      </td>
    </tr>
  </tbody>
</table>

Para obter mais informações sobre esta chamada, consulte o arquivo `NewRelic.h` . Para obter mais informações sobre sinalizadores de recurso aplicáveis, consulte o arquivo `NewRelicFeatureFlags.h` .
