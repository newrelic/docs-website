---
title: Relatório de falhas do agente Android
tags:
  - Mobile monitoring
  - New Relic Mobile Android
  - Install configure
metaDescription: How to use Proguard with Android mobile monitoring to automatically process and de-obfuscate crash details.
freshnessValidatedDate: never
translationType: machine
---

Por padrão, <InlinePopover type="mobile"/>permite relatórios de falhas para seu aplicativo móvel para ajudar a rastrear e diagnosticar falhas. Quando um aplicativo Android falha, o agente carrega um relatório de falha no [coletor](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector) New Relic. Os detalhes da falha serão processados e desofuscados automaticamente se você estiver usando ProGuard ou DexGuard.

Você pode visualizar informações detalhadas sobre falhas na [interface do usuário<DNT>**Crash analysis**</DNT> ](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/crash-analysis-group-filter-your-crashes)ou receber notificações de falhas por [e-mail](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/receive-crash-notifications-email). Você também pode [integrar-se a sistemas de tickets](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/file-tickets-mobile-app-crashes) para investigações adicionais.

## Carregue o arquivo ProGuard ou DexGuard [#upload-proguard]

O agente Android oferece suporte a ProGuard e DexGuard. DexGuard é uma extensão do ProGuard e se comporta da mesma forma que o ProGuard ao lidar com simbologia de travamento e mapas de código ofuscados.

O ProGuard ofusca seu código renomeando classes, campos e métodos com rótulos semanticamente obscuros. O DexGuard adiciona outra camada adicional de ofuscação e segurança, mas por outro lado se comporta de forma idêntica ao ProGuard. Se o ProGuard ou DexGuard estiver ativado, o stack trace produzido por uma falha consiste apenas nesses rótulos ofuscados, que não são legíveis por humanos.

Siga as instruções de instalação ou atualização do SDK para [configurar o ProGuard ou DexGuard](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-proguard-or-dexguard-android-apps) e ativar relatórios de falhas. Certifique-se de criar o arquivo `newrelic.properties` contendo o token do seu aplicativo.

## Usar arquivo mapping.txt [#mapping-file]

O agente usa o arquivo `mapping.txt` produzido durante uma compilação habilitada para ProGuard/DexGuard. Este arquivo consiste nos nomes dos rótulos ofuscados e fornece mapeamento reverso entre rótulos ofuscados e de texto simples. Você deve usar a cópia de `mapping.txt` gerada durante a construção que produziu seu aplicativo final. O ID de build do aplicativo muda sempre que um APK é gerado, e o ID de build no arquivo de mapeamento deve corresponder ao ID contido em cada relatório de falhas enviado.

Depois de criar um arquivo `newrelic.properties` contendo o token do aplicativo New Relic em seu projeto, o arquivo ProGuard ou DexGuard `mapping.txt` será carregado automaticamente após cada compilação.

### Exceção [#exception]

Se ocorrer uma das situações a seguir, você deverá [fazer upload manualmente](#manual-proguard) do arquivo de substituição `mapping.txt` :

* Se o arquivo `mapping.txt` for renomeado usando a opção DexGuard `-printmapping` , o agente Android não conseguirá localizar ou fazer upload dos nomes removidos.

* Se você vir relatórios de falhas ofuscados na [página](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-apps-crashes-dashboard)

  <DNT>
    [**Crashes**](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-apps-crashes-dashboard)
  </DNT>

  [](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-apps-crashes-dashboard), talvez você não tenha carregado um arquivo `mapping.txt` .

### Processamento de mapas [#map-processing]

<Callout variant="important">
  [A versão 5.27.0 do agente](/docs/release-notes/mobile-release-notes/android-release-notes/android-5270) introduz alterações na forma como o processo do plug-in do agente é mapeado durante as compilações.
</Callout>

#### Os mapas são relatados para versões de variantes selecionadas [#variant-builds]

O agente tag e reportará apenas os `mapping.txt` arquivos gerados por `Release` variantes de tipo de build. Esse comportamento pode ser configurado ou desabilitado por meio da extensão [do plug-in New Relic Gradle](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-agent-gradle-plugin-extension) .

#### As variantes recebem IDs de compilação exclusivos [#build-ids]

Durante a execução de uma compilação Gradle, um único ID único (ID de compilação) foi gerado para representar todas as variantes do aplicativo criado durante aquela invocação. Isso geralmente levava a relatórios de falhas incompatíveis para clientes que usavam variantes para personalizar uma base de código de aplicativo comum.

Cada variante agora é identificada por seu próprio ID único, que é usado ao relatar o mapa ProGuard da variante para a New Relic. Você pode desativar esse comportamento por meio da extensão [do plug-in New Relic Gradle](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-agent-gradle-plugin-extension) .

#### Compactar mapas antes do upload [#compress]

À medida que os aplicativos ficam maiores, também aumentam os mapas associados, o que resulta em tempos de upload mais longos ao relatar o mapa. Se o tempo de relatório do mapa for excessivamente longo, o agente poderá compactar o mapa antes da transferência.

Para ativar uploads de mapas compactados, adicione o seguinte ao arquivo `newrelic.properties` do seu aplicativo:

```properties
com.newrelic.compressed_uploads=true
```

#### Configurar host de upload de mapeamento

Adicione o seguinte ao arquivo `newrelic.properties` do seu aplicativo para enviar mapas em um servidor redirecionado:

```properties
# Please only provide the host name as the value without https:// at the beginning or / at the end, for example: xyz.api.com
com.newrelic.mapping_upload_host=xyz.api.com
```

### Relatório de falhas adiado

<Callout variant="important">
  [A versão 6.0.0 do agente](/docs/release-notes/mobile-release-notes/android-release-notes/android-600) introduz alterações na forma como o plugin do agente processa travamentos em tempo de execução.
</Callout>

Na tentativa de resolver a duplicação de relatórios de falhas, o relatório de falhas adiado agora é o comportamento padrão de relatório de falhas. Nesse caso, os relatórios de falhas são registrados quando ocorrem, mas não são carregados até o próximo lançamento do aplicativo.

O comportamento anterior de relatório de falhas ainda está disponível: carregar a falha assim que ela ocorrer, antes que o processo do aplicativo termine. Você pode usar o método de API `NewRelic.withCrashReportingEnabled(boolean)` . Por exemplo:

```java
NewRelic
      .withApplicationToken("<appToken>")
      .withCrashReportingEnabled(true)
      .start(this.getApplication());
```

## Desativar relatório de falhas [#disable]

Se quiser usar outra ferramenta de relatório de falhas, você poderá desativar o relatório de falhas ligando para `NewRelic.disableFeature(FeatureFlag.CrashReporting)` antes da inicialização do agente. Por exemplo:

```java
NewRelic.disableFeature(FeatureFlag.CrashReporting);
NewRelic
      .withApplicationToken("<appToken>")
      .start(this.getApplication());
```

## Depurar o repórter de falhas [#debug]

O relatório de falhas para Android foi projetado para funcionar com outra estrutura de relatórios de falhas, encadeando o manipulador de exceções não capturadas, se já estiver registrado.

* Se nenhuma outra framework for encontrada (ou se New Relic for a primeira framework registrada), o log de depuração incluirá:

  ```
  Installing New Relic crash handler.
  ```

* Se outro manipulador já estiver registrado, o log de depuração incluirá:

  ```
  Installing New Relic crash handler and chaining previous exception handler.
  ```

Cada vez que o New Relic captura uma exceção, ela é [registrada no nível `DEBUG` ](/docs/mobile-monitoring/new-relic-mobile-android/api-guides/android-agent-configuration-feature-flags#logging). Por exemplo:

```
A crash has been detected in <className>.
```

Se o New Relic capturar uma exceção, mas o relatório de falhas tiver sido desativado por qualquer motivo, esta mensagem será registrada:

```
A crash has been detected but crash reporting is disabled.
```

Se você não vir relatórios de falhas, verifique se há mensagens como esta no log de depuração.

## Carregar manualmente um arquivo de mapa ProGuard ou DexGuard [#manual-proguard]

Em algumas circunstâncias incomuns, pode não ser possível carregar automaticamente o arquivo de mapeamento ProGuard ou DexGuard. Isso geralmente ocorre devido à criação incorreta de um arquivo `newrelic.properties` contendo o token do seu aplicativo. Isso resultará em erros de compilação ou avisos com mensagem do log detalhada.

Para carregar manualmente um arquivo de mapa ProGuard ou DexGuard:

1. Encontre os arquivos `mapping.txt` no diretório de compilação do projeto. Por exemplo, o arquivo está localizado no diretório `<PROJECT_ROOT>/app/build/outputs/mapping/<BUILD_VARIANT>` para projetos que usam o Android Studio. Geralmente, uma variante `release` é usada ao construir a versão final do aplicativo. O seguinte comando é útil para localizar arquivos de mapa:

   ```bash
   find <project_root> -name mapping.txt
   ```

2. Usando um terminal de comando, carregue o arquivo de mapeamento ProGuard ou DexGuard:

   * Para um <DNT>**US account**</DNT>:

     ```bash
     curl -v -F upload=@"<mapping.txt>" -H "X-APP-LICENSE-KEY:<APPLICATION_TOKEN>" https://mobile-symbol-upload.newrelic.com/symbol
     ```

   * Para um <DNT>**EU account**</DNT>:

     ```bash
     curl -v -F upload=@"<mapping.txt>" -H "X-APP-LICENSE-KEY:<APPLICATION_TOKEN>" https://mobile-symbol-upload.eu.newrelic.com/symbol
     ```

   Substitua o seguinte em seu comando:

   * `<mapping.txt>` é o caminho completo para o arquivo ProGuard ou DexGuard `mapping.txt` .
   * `<APPLICATION_TOKEN>` é o seu [token de monitoramento de aplicativo](/docs/mobile-monitoring/new-relic-mobile/maintenance/viewing-your-application-token) Mobile.

## Relatório de falhas nativas do Android [#native-crash-reporting]

A partir do [agente New Relic Android versão 6.7.0](/docs/release-notes/mobile-release-notes/android-release-notes/android-670), para ajudar a rastrear e diagnosticar falhas nativas, os relatórios e a análise foram aprimorados para incluir violação de sinal e outras falhas que ocorrem no nível do código nativo durante o tempo de execução.

Saiba mais sobre relatórios de falhas nativos do Android [aqui](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/android-agent-native-crash-reporting).
