---
title: Estabelecer SLIs de capacidade
metaDescription: 'New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders.'
freshnessValidatedDate: never
translationType: machine
---

Ter um nível de serviço em recursos críticos de negócios, como login ou autorização de pagamento, fechará rapidamente a barreira linguística entre a TI e os negócios. As pontuações de nível de serviço nas capacidades também oferecem melhores oportunidades para corrigir os níveis de serviço quando eles começam a piorar. Por exemplo, se o nível de serviço de login começar a degradar, você saberá observar a dependência do gerenciamento de identidade e o fluxo de trabalho começando na API voltada para o consumidor.

Você não precisa ter conhecimento profundo de um aplicativo ou serviço para concluir esta tarefa. Você só precisa encontrar a API voltada para o consumidor (limite de serviço) e seguir as etapas abaixo para criar um nível de serviço de capacidade:

1. Identifique o aplicativo de limite de serviço conforme descrito no documento [de estabelecimento de um SLI de saída](/docs/tutorial-service-level-mgmt/establish-output-sli/) .

2. Execute a consulta NRQL a seguir para identificar a linha de base da transação usada com mais frequência. Lembre-se de substituir `Order-Processing` pelo nome do aplicativo que você identificou.

   ```
   FROM Transaction SELECT count(*), percentile(duration, 95) WHERE appName='Order-Processing' FACET name SINCE 1 WEEK AGO
   ```

   Você deverá ver algo semelhante à captura de tela abaixo. Você verá que a primeira transação afirma que tem algo a ver com “compra”. Agora você pode criar um nível de serviço de capacidade de "compra".

   <img
     alt="transaction list query"
     src="/images/queries-nrql_screenshot-full_transaction-list-nrql.webp"
   />

3. Adicione `WHERE name='Controller/Sinatra//purchase'` ao final da sua consulta, substituindo `Controller/Sinatra//purchase` pelo nome da sua transação.

4. Execute a consulta para ter certeza de que funciona. Agora você deve ver apenas uma transação no seu resultado. Copie esta consulta e o resultado `DURATION (95%)` em um bloco de notas. Você precisará de ambos em um momento.

5. Crie um novo nível de serviço na plataforma. O início de um novo nível de serviço é descrito em [Estabelecendo um SLI de desempenho de entrada](#establishing-input-sli).

Neste caso você deseja encontrar seu aplicativo (tipo APM `Entity` ) na lista para que possamos reter os metadados (tag) através do GUID da entidade. Em vez de " monitorSintético" como na seção acima, selecione "APM" no dropdown do filtro de entidade.

6. Selecione o fluxo de trabalho guiado por "latência" para que a consulta válida seja preenchida automaticamente para você.

7. Use seu bloco de notas para copiar apenas o `name='your/transaction/name/here'`.

8. Adicione esta condição a ambas as consultas em nível de serviço, **precedida de um `AND `**, conforme sublinhado na imagem abaixo.

   <img
     alt="capability query clause"
     src="/images/apm_screenshot-crop_capability-filter-clause.webp"
   />

9. Ajuste a parte `duration < 1.78` da segunda consulta para corresponder ao resultado `DURATION (95%)` na baseline original copiada para o bloco de notas.

10. Nomeie esse nível de serviço, atualize a descrição e salve o nível de serviço.

A partir daqui, recomendamos que você configure alguns desses recursos de nível de serviço e apresente à equipe do aplicativo e à sua liderança para feedback.

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-service-level-mgmt/improve-with-slm/","title":"Próxima Etapa","body":"Aprenda como usar técnicas de SLM para melhorar sua confiabilidade"}}
  previousStep={{"path":"/docs/tutorial-service-level-mgmt/establish-input-sli/","title":"Passo anterior","body":"Aprenda como criar indicadores de entrada e objetivos"}}
/>
