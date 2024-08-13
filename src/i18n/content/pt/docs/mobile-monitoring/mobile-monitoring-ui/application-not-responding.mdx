---
title: 'O aplicativo não está respondendo: rastreie e analise erros de ANR'
tags:
  - Mobile monitoring
  - Mobile monitoring UI
  - Application not responding
  - Errors
metaDescription: Use New Relic's Application Not Monitoring UI page to track and analyze ANR errors.
freshnessValidatedDate: '2024-06-24T00:00:00.000Z'
translationType: machine
---

Em aplicativos móveis Android, [os erros de aplicativo que não responde (ANR)](https://developer.android.com/topic/performance/vitals/anr) são acionados quando o thread da interface principal de um aplicativo é bloqueado por mais de cinco segundos. Os erros de ANR podem ser causados por vários fatores, como chamadas de rede, cálculos complexos ou contenção de recursos. Ao monitorar sua frequência e padrões de ocorrência, você obtém insights valiosos sobre a estabilidade geral do seu aplicativo e a experiência do usuário.

## Como os erros de ANR são relatados à New Relic [#anr-reporting]

Por padrão, o agente do Android relata erros de ANR como evento [`MobileApplicationExit`](/attribute-dictionary/?event=MobileApplicationExit) , que utiliza [API`ApplicationExitInfo` ](https://developer.android.com/reference/android/app/ApplicationExitInfo)do Android para monitor e relatar as diferentes causas de encerramento do aplicativo. O agente lê a API `ApplicationExitInfo` no próximo lançamento do aplicativo e envia de forma assíncrona o evento `MobileApplicationExit` para o New Relic para cada saída do aplicativo no histórico.

### Compreendendo as discrepâncias de ANR entre New Relic e Google Play Console [#new-relic-vs-google-play]

Você pode encontrar variações nas contagens e taxas de ANR entre o New Relic e o Google Play Console. Isto se deve a diferenças nos métodos de coleta de dados:

* Cobertura da versão Android:

  * A New Relic se concentra em ANRs de dispositivos com Android 11 ou superior.
  * O Google Play Console captura ANRs em todas as versões do Android.

* Escopo do dispositivo e do aplicativo:

  * New Relic informa de dispositivos com o agente New Relic instalado, independentemente da origem do aplicativo.
  * O Google Play Console gera relatórios exclusivamente de dispositivos certificados com apps baixados da Play Store.

Para obter mais informações, consulte a [documentação do Google Play](https://developer.android.com/topic/performance/vitals).

## Ver ANRs no New Relic [#view-anr-in-new-relic]

Por padrão, nosso agente Android coleta e relata erros de ANR para a New Relic. Você pode encontrar dados ANR em dois lugares:

* Na página Summary, há um widget chamado

  <DNT>
    **ANR rate**
  </DNT>

  que exibe a porcentagem de erros.

* Na página ANR, onde você pode visualizar o detalhamento das taxas de erros, grupos de usuários afetados e detalhes dos atributos.

<img
  title="ANR UI page"
  alt="screenshot of ANR UI page"
  src="/images/mobile_screenshot-full_anr-ui-page.webp"
  style="float: left;"
/>

Para visualizar a página ANR:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities)**
   </DNT>

   .

2. Clique em

   <DNT>
     **Mobile**
   </DNT>

   .

3. Selecione um aplicativo Android.

4. No painel esquerdo, clique em

   <DNT>
     **ANR**
   </DNT>

   .

### Filtrar por grupos ANR [#filter]

O widget na página ANR é baseado em grupos de ANRs. Por padrão, os ANRs são agrupados pelo atributo `description` .

<img
  title="top occurences chart"
  width="50%"
  alt="screenshot of top occurences chart"
  src="/images/mobile_screenshot-crop_group-by.webp"
  style="float: left;"
/>

Para alterar a forma como os ANRs são agrupados (como tipo de dispositivo, versão do aplicativo ou um [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/)), clique em <DNT>**Group by**</DNT> e selecione um atributo na lista. A página ANR será atualizada para mostrar dados do novo grupo ANR.

### Monitora a taxa ANR [#anr-rate-chart]

O gráfico <DNT>**ANR rate**</DNT> para ver rapidamente se há picos, quedas ou padrões inesperados com ANRs em geral.

Por exemplo, se você lançou uma versão recente do aplicativo, o gráfico de taxa ANR mostra a porcentagem de sessões que apresentaram erros ao longo do tempo como uma porcentagem de todas as sessões, divididas por versão do aplicativo. A porcentagem média da sessão ANR é mostrada no canto superior direito.

<img
  title="anr rate chart"
  alt="screenshot of anr rate chart"
  src="/images/mobile_screenshot-crop_anr-rate-chart.webp"
  style="float: left;"
  width="60%"
/>

O gráfico <DNT>**ANR rate by day**</DNT> mostra a porcentagem de usuários únicos que experimentaram um ANR ao longo do tempo como uma porcentagem de todos os usuários únicos.

Nota: Independentemente do horário selecionado, este gráfico mostrará a taxa média de ANR dos últimos 28 dias.

### Visualize ocorrências de ANR por importância [#anr-occurences]

O gráfico <DNT>**ANR occurrences by importance**</DNT> mostra a distribuição de ANRs por importância relativa do processo do aplicativo antes do encerramento devido a um ANR. Mais informações sobre a importância do processo de um aplicativo podem ser encontradas [aqui](https://developer.android.com/reference/android/app/ApplicationExitInfo#getImportance).

<img
  title="anr occurrences by importance"
  alt="screenshot of anrs by importance"
  src="/images/mobile_screenshot-crop_anr-occurences-by-importance.webp"
  style="float: left;"
/>

### Vá mais fundo com perfis ANR [#anr-profiles]

Os perfis ANR mostram a distribuição do atributo em todas as suas ocorrências de ANR, ajudando a identificar padrões para identificar rapidamente e solucionar problemas da causa raiz.

<img
  title="anr profiles"
  alt="screenshot of anr profiles"
  src="/images/mobile_screenshot-crop_anr-profiles.webp"
  style="float: left;"
/>

## Desativar monitoramento ANR [#disable-anr-monitoring]

<Callout variant="important">
  A configuração no lado do servidor sempre tem precedência sobre a configuração do agente local. Para aplicativos móveis com menos de 100.000 dispositivos ativos simultaneamente, pode levar até 10 minutos para aplicar alterações aos dispositivos do usuário final. Para aplicativos com mais de 100.000 dispositivos ativos, isso pode levar várias horas.
</Callout>

Se você precisar desativar o monitoramento de ANR:

1. No New Relic, navegue até seu aplicativo móvel.

2. No painel esquerdo em

   <DNT>
     **Settings**
   </DNT>

   , clique em

   <DNT>
     **Application**
   </DNT>

   .

3. Desative o **Application Not Responding (ANR)** .

4. Clique em **Save**.

<img
  title="ANR setting toggle"
  alt="Screenshot of the ANR setting"
  src="/images/mobile_screenshot-crop_anr-setting-toggle.webp"
  style="float: left;"
/>
