---
title: Recuperar dSYMs para aplicativos Bitcode
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Configuration
metaDescription: How to retrieve dSYMs for crash reports from Bitcode-enabled iOS apps that are monitored with the New Relic agent.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Com o Xcode 14 e posterior, a App Store não aceita mais envios de bitcode do Xcode 14. Se um projeto ativar explicitamente o bitcode, o Xcode gerará uma mensagem de aviso que diz: "A construção com bitcode está obsoleta. Atualize seu projeto e/ou configurações de destino para desativar o bitcode.” As [notas de lançamento do Xcode 14](https://developer.apple.com/documentation/xcode-release-notes/xcode-14-release-notes) dizem que “a capacidade de criar aplicativos com bitcode será removida em uma atualização futura”.

  Se você usar o Xcode 14 ou posterior, em vez de usar bitcode para capturar a pilha de falhas simbolizada de suas compilações de lançamento, recomendamos usar o [script de upload automático de símbolos](/docs/mobile-monitoring/new-relic-mobile-ios/installation/spm-installation#configure-using-swift-package-manager) para carregar os símbolos de sua compilação.
</Callout>

Bitcode é um recurso que dá à Apple a capacidade de recompilar aplicativos iOS e tvOS para hardware de usuário específico. Isso fornece um tamanho de download menor para o usuário final. Para obter mais informações sobre esse processo, consulte [a documentação de Bitcode e redução de aplicativos](https://developer.apple.com/library/watchos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html) da Apple. Quando a Apple compila um aplicativo, os arquivos dSYM também são compilados. Para que o New Relic possa simbolizar travamentos do seu aplicativo habilitado para Bitcode, esses arquivos dSYM precisam ser baixados da Apple e depois carregados no New Relic.

## Identifique dSYMs ausentes [#IdentifyingMissingdSYMs]

Quando um aplicativo habilitado para Bitcode é carregado na Apple para revisão na App Store ou distribuição ad-hoc, os dSYMs precisam ser baixados manualmente da Apple e carregados na New Relic para permitir que os [relatórios de falhas móveis](/docs/mobile-monitoring/new-relic-mobile/getting-started/ios-agent-crash-reporting) sejam simbolizados adequadamente. Esses dSYMs podem ser baixados por meio do organizador de arquivos no Xcode alguns minutos após o upload do aplicativo. Nesta situação siga os procedimentos para [localizar o arquivo e baixar dSYMs](#Archive).

Se um aplicativo não tiver um arquivo dSYM, você verá três indicadores na interface de monitoramento do Mobile:

* <DNT>**Banner notification**</DNT>: um banner de aviso aparece na [página<DNT>**Crash report**</DNT> ](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-apps-crash-report-dashboard). O aviso diz:

  ```
  We were unable to locate your dsym.
  ```

* <DNT>**Upload prompt**</DNT>: na página <DNT>**Crash type summary**</DNT> você será solicitado automaticamente a [fazer upload de um arquivo dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps#mobile-ui) se ele estiver faltando.

* <DNT>**Machine code**</DNT>: o stack trace de falhas na página <DNT>**Crash report**</DNT> exibe código de máquina e não uma mensagem de erro legível.

## Baixe arquivos dSYM usando o iTunes Connect [#iTunes]

Para baixar os arquivos dSYM necessários para seu aplicativo:

1. Login no Apple [App Store Connect](https://appstoreconnect.apple.com/login).

2. Selecione

   <DNT>
     **Apps > (select an app) > TestFlight**
   </DNT>

   .

3. Na lista de compilações do seu aplicativo, selecione o número de compilação necessário para o dSYM.

4. Na guia

   <DNT>
     **Build Metadata**
   </DNT>

   , selecione

   <DNT>
     **Download dSYM**
   </DNT>

   .

Em seguida, para fazer upload do arquivo zip resultante diretamente para o New Relic:

1. Siga as instruções para [fazer upload manualmente do dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps#manual-dsym) e pule a etapa 1.
2. Descompacte um dSYM contido neste arquivo zip para recuperar um UUID de compilação que você pode carregar. (Siga a última etapa nas instruções de upload manual.)

Assim que a New Relic receber o arquivo zip, os UUIDs de construção para todos os outros dSYMs contidos nesse arquivo zip serão identificados.

## Baixe arquivos dSYM usando o arquivo do aplicativo do Xcode [#Archive]

Use a [versão do aplicativo e o número da versão](#identifyingAppVersion) para identificar o arquivo do aplicativo aplicável no Xcode <DNT>**Organizer**</DNT> e faça download dos dSYMs.

<img
  title="Download dSYMs for mobile app version/build"
  alt="Download dSYMs for mobile app version/build"
  src="/images/mobile_screenshot-full_download-dsym-file.webp"
/>

<figcaption>
  <DNT>**Using Xcode to download dSYMs:**</DNT> Na guia <DNT>**Archives**</DNT> , selecione o aplicativo e a versão/compilação e selecione <DNT>**Download dSYMs**</DNT>.
</figcaption>

1. Abra o Xcode

   <DNT>
     **Organizer**
   </DNT>

   : no menu

   <DNT>
     **Xcode**
   </DNT>

   , selecione

   <DNT>
     **Window > Organizer > Archives > (select a mobile app)**
   </DNT>

   .

2. Em

   <DNT>
     **Version**
   </DNT>

   , selecione o arquivo que corresponde à versão do aplicativo (listado primeiro) e ao número da compilação (após a versão do aplicativo entre parênteses).

3. Selecione

   <DNT>
     **Download dSYMs**
   </DNT>

   .

Os dSYMs serão baixados da Apple se disponíveis e se os nomes dos arquivos contiverem uma série de letras e números. Se os arquivos dSYM tiverem o nome da dependência do seu projeto, o download não será bem-sucedido.

## Carregar dSYMs [#Upload-dSYMs]

Depois de localizar os dSYMs, siga as instruções para [fazer upload de um dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps) para cada dSYM compactado.
