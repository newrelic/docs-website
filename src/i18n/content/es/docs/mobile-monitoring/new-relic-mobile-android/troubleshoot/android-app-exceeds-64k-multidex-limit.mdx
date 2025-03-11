---
title: La aplicación de Android supera el límite multidex de 64k
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

Su aplicación de Android excede el límite de 64k para la cantidad total de métodos a los que se puede hacer referencia dentro de un único [archivo ejecutable Dalvik (DEX)](https://developer.android.com/studio/build/multidex.html), incluidos los métodos para el marco, la biblioteca y el código de su propia aplicación de Android. Verá mensajes de error del agente como estos:

<CollapserGroup>
  <Collapser
    id="dex-build"
    title="Ejemplo de mensaje de error en tiempo de compilación"
  >
    ```
    > com.android.build.api.transform.TransformException: com.android.ide.common.process.ProcessException: 
    java.util.concurrent.ExecutionException: com.android.dex.DexException: Too many classes in --main-dex-list, main dex capacity exceeded
    ```
  </Collapser>

  <Collapser
    id="runtime-crash-dex"
    title="Ejemplo de mensaje de fallo en tiempo de ejecución"
  >
    ```
    E/AndroidRuntime: FATAL EXCEPTION: main
    Process: com.example.mobile.debug, PID: 12345
    java.lang.NoClassDefFoundError: com.example.foobar.myapp.MainActivity
    ```
  </Collapser>
</CollapserGroup>

Estos errores de excepción suelen ocurrir con dispositivos Android anteriores a [Android 5.0 (nivel de API 21)](https://developer.android.com/about/versions/android-5.0.html), que requiere la biblioteca de soporte [multidex](https://developer.android.com/studio/build/multidex.html) .

## Solución

Para corregir errores de compilación o excepciones de tiempo de ejecución al utilizar la última herramienta de compilación de Android:

1. Asegúrese de tener la [última versión del agente de Android](/docs/release-notes/mobile-release-notes/android-release-notes).
2. Habilitar [multidex](https://developer.android.com/studio/build/multidex.html).
3. Habilite [Proguard o Dexguard](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-proguard-or-dexguard-android-apps) para optimizar clases y métodos en su DEX.
4. Si aún tienes problemas para mantener tu aplicación de Android por debajo del límite de 64k, usa un [keepfile](https://google.github.io/android-gradle-dsl/current/com.android.build.gradle.internal.dsl.BuildType.html#com.android.build.gradle.internal.dsl.BuildType:multiDexKeepProguard).
