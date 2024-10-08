---
title: O aplicativo Android excede o limite multidex de 64k
type: troubleshooting
tags:
  - Mobile monitoring
  - New Relic Mobile Android
  - Troubleshoot
metaDescription: Troubleshooting tips if your Android application exceeds the 64k limit for DEX files.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Seu aplicativo Android excede o limite de 64k para o número total de métodos que podem ser referenciados em um único [arquivo executável Dalvik (DEX)](https://developer.android.com/studio/build/multidex.html), incluindo métodos para estrutura, biblioteca e seu próprio código de aplicativo Android. Você vê mensagens de erro do agente como estas:

<CollapserGroup>
  <Collapser
    id="dex-build"
    title="Exemplo de mensagem de erro de tempo de construção"
  >
    ```
    > com.android.build.api.transform.TransformException: com.android.ide.common.process.ProcessException: 
    java.util.concurrent.ExecutionException: com.android.dex.DexException: Too many classes in --main-dex-list, main dex capacity exceeded
    ```
  </Collapser>

  <Collapser
    id="runtime-crash-dex"
    title="Exemplo de mensagem de falha em tempo de execução"
  >
    ```
    E/AndroidRuntime: FATAL EXCEPTION: main
    Process: com.example.mobile.debug, PID: 12345
    java.lang.NoClassDefFoundError: com.example.foobar.myapp.MainActivity
    ```
  </Collapser>
</CollapserGroup>

Esses erros de exceção geralmente ocorrem em dispositivos Android anteriores ao [Android 5.0 (API de nível 21)](https://developer.android.com/about/versions/android-5.0.html), que requer a biblioteca de suporte [multidex](https://developer.android.com/studio/build/multidex.html) .

## Solução

Para corrigir erros de compilação ou exceções de tempo de execução ao usar a ferramenta de compilação Android mais recente:

1. Certifique-se de ter a [versão mais recente do agente Android](/docs/release-notes/mobile-release-notes/android-release-notes).
2. Habilite [multidex](https://developer.android.com/studio/build/multidex.html).
3. Habilite [Proguard ou Dexguard](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-proguard-or-dexguard-android-apps) para otimizar classes e métodos em seu DEX.
4. Se você ainda tiver problemas para manter seu aplicativo Android abaixo do limite de 64k, use um [keepfile](https://google.github.io/android-gradle-dsl/current/com.android.build.gradle.internal.dsl.BuildType.html#com.android.build.gradle.internal.dsl.BuildType:multiDexKeepProguard).
