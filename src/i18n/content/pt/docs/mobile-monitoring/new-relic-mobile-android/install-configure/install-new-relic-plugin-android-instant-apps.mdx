---
title: Instale o plug-in New Relic para Android Instant Apps
tags:
  - Mobile monitoring
  - New Relic Mobile Android
  - Install configure
metaDescription: Use New Relic to detect and instrument all feature modules for Android Instant Apps.
freshnessValidatedDate: never
translationType: machine
---

[Os Instant Apps Android](https://developer.android.com/topic/instant-apps/index.html) permitem que o usuário use seu aplicativo rapidamente sem instalação. Com o agente Android [versão 5.17.0](/docs/release-notes/mobile-release-notes/android-release-notes/android-5170) e superior, você pode usar o New Relic para detectar e instrumentar todos os módulos de recursos de um aplicativo instantâneo.

Use esta documentação junto com os procedimentos padrão do New Relic para [instalar aplicativos Android com Gradle e Android Studio](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/install-android-apps-gradle-android-studio). Depois de seguir os procedimentos de instalação padrão, siga estas etapas adicionais para aplicativos instantâneos Android.

## Terminologia

Este procedimento usa os seguintes termos específicos do plug-in Android Instant Apps:

* <DNT>
    **Module**
  </DNT>

  : Qualquer classe empacotada e/ou coleção de recursos

* <DNT>
    **APK**
  </DNT>

  : Um módulo que empacota os recursos do aplicativo e as classes DEX

* <DNT>
    **Feature module**
  </DNT>

  : um módulo reduzido que contém apenas um subconjunto do APK total

## Instale o plug-in [#install]

Para instalar o plug-in New Relic para Android Instant Apps:

1. Primeiro, siga as etapas na documentação [Instalar aplicativos Android com Gradle e Android Studio](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/install-android-apps-gradle-android-studio) .

2. Aplique o plug-in do agente em cada arquivo de compilação do projeto Gradle.

3. Liste o agente Android como uma dependência.

4. Inicie o agente de cada [classe de atividade](https://developer.android.com/reference/android/app/Activity.html) no recurso que pode ser carregado lateralmente por meio de uma intenção do Digital Asset Link (por exemplo, mobile.example.com/signin).

   <CollapserGroup>
     <Collapser
       id="build.gradle"
       title="Exemplo mínimo de build.gradle"
     >
       ```gradle
       apply plugin: 'com.android.[application|library|feature|instantapp]'
       apply plugin: 'newrelic'

       dependencies {
           implementation "com.newrelic.agent.android:android-agent:${project.agentVersion}"
       }
       ```
     </Collapser>
   </CollapserGroup>

5. Revise as considerações para [instrumentação](#instrument).

<InstallFeedback/>

## Instrumentação [#instrument]

Ao usar um aplicativo instantâneo, esteja ciente das seguintes considerações com APKs:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Instant apps and APKs**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Instrumentação
      </td>

      <td>
        * A instrumentação de apps instantâneos se comporta da mesma forma que a instrumentação com um APK normal. O agente detectará quando um APK for um app instantâneo. Para APKs de recurso, o agente injetará um ID de compilação exclusivo que os aplicativos instantâneos usarão ao relatar falhas.
        * A atividade de carregamento lateral (principal) de cada recurso deve chamar `NewRelic.start()` quando a atividade for criada (conforme instruções normais).
      </td>
    </tr>

    <tr>
      <td>
        Suporte ProGuard e Dexguard para APKs de recursos e aplicativos
      </td>

      <td>
        Coloque o arquivo `newrelic.properties` no diretório raiz (principal) do projeto.
      </td>
    </tr>
  </tbody>
</table>

## Suporte ProGuard e Dexguard [#proguard]

O plug-in do Android Studio para Gradle ofuscará qualquer configuração de compilação em que `minifyEnabled` esteja definido como `true`. Nessas condições, o agente New Relic encaminhará o mapa ProGuard gerado para o build para o crash coletor, tag com um ID de build exclusivo gerado pelo agente.

A ofuscação é melhor configurada no aplicativo ou projeto de aplicativo instantâneo que inclui outros módulos como dependência. Os módulos podem configurar o ProGuard conforme necessário.

<Callout variant="important">
  Ao usar ProGuard ou DexGuard com aplicativos Android, siga os procedimentos para concluir as etapas de configuração adicionais necessárias. Para obter mais informações, consulte a documentação [de configuração do ProGuard e DexGuard](/docs/mobile-monitoring/new-relic-mobile-android/install-configure/configure-proguard-or-dexguard-android-apps) .
</Callout>

## Solucionar problemas de instrumentação automática [#troubleshooting]

Se você não sabe se o agente está instrumentando automaticamente um projeto de aplicativo instantâneo, tente executar estas etapas:

1. Crie o aplicativo com a opção `debug` (`-d`, `--debug`) e capture o log de compilação.

2. Pesquise no log evidências de aplicativos instantâneos procurando um destes termos:

   * ```
     This appears to be an Instant App
     ```
   * ```
     BuildId[1a2b34c5-def6-7890-g123-h4567890a]
     ```

3. O agente adicionará um atributo chamado `'instantApp'` aos atributos de sessão do aplicativo se o aplicativo parecer ser um aplicativo instantâneo.
