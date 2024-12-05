---
title: Criar alerta
metaDescription: create alerts in New Relic
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este procedimento faz parte do curso que ensina como criar um início rápido. Se ainda não o fez, confira a [introdução do curso](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart).

  Cada procedimento neste curso se baseia no anterior, portanto, certifique-se de [criar um dashboard](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-a-dashboard) antes de prosseguir com este.
</Callout>

Com os alertas New Relic , você pode monitor seus serviços e receber notificações sobre problemas de seu interesse, para que possa reagir rapidamente para solucioná-los e resolvê-los. Existem dois tipos de alertas que você pode ter no New Relic:

* Estático
* Baseline

Neste procedimento, você aprende como criar esses alertas.

<Callout variant="tip">
  Presume-se que você já esteja familiarizado com os princípios básicos dos alertas. Se você está apenas começando, visite a [documentação do alerta](/docs/alerts-applied-intelligence/overview) para se familiarizar com o básico antes de continuar.
</Callout>

## Crie uma política de alertas [#create-alert-policy]

Antes de definir a condição do alerta, você deve criar uma política.

Nos **Alerts** na navegação à esquerda, vá para a seção **Alert conditions**. Em seguida, clique em **New alert policy**.

Dê um nome à sua política `FlashDB alert policy`.

Utilize os valores padrão para o restante dos campos, role a página para baixo e clique em **Create policy without notifications**.

O próximo passo é adicionar condições à política de alertas.

## Criar condição de alerta [#create-alert-conditions]

Você irá adicionar a seguinte condição do alerta:

* respostas de leitura lenta
* baixa ocorrência sem proporção de cache

### Crie um ritmo alto de resposta condição do alerta [#crete-response-time]

Em **FlashDB alert policy**, clique em **Create a condition**.

A próxima página pede que você escolha uma categoria para sua condição. Escolha NRQL, que permite criar uma condição usando uma consulta NRQL. Em seguida, clique em **Next, define thresholds**.

Você deseja que o New Relic o notifique se a operação de leitura estiver demorando mais do que o esperado. Nomeie sua condição do alerta como "respostas de leitura lenta" e insira a seguinte consulta NRQL para sua condição.

```sql
SELECT average(fdb_read_responses) FROM Metric
```

Aqui, você selecionou a resposta média de leitura para FlashDB.

Role para baixo na mesma página para definir o limite. Selecione **Static** como o tipo de limite. É o tipo de limite mais simples e cria uma condição baseada no valor numérico retornado pela consulta.

Defina o valor limite crítico em 0,9. Aqui, você definiu uma condição que abrirá violação sempre que o tempo de resposta de leitura estiver acima de 0,9 por pelo menos 5 minutos.

Em seguida, clique em **Add warning threshold**.

Insira o valor limite em 0,8 para receber um aviso quando a resposta de leitura estiver acima de 0,8 por pelo menos 5 minutos.

Use os valores padrão para o restante dos campos, role a página para baixo e clique em **Save condition**.

Agora, você pode ver sua nova condição na política de alertas do FlashDB.

### Crie uma condição de ocorrência sem taxa de cache [#create-cache-hit]

Você afirmou que seu banco de dados é o mais rápido no espaço, então você também deseja que New Relic o notifique se sua taxa de ocorrência no cache for muito baixa. Adicione outra condição na mesma política clicando em **Add a condition**.

A próxima página pede que você escolha a categoria para sua condição. Escolha NRQL e clique em **Next, define threshold**.

Digite o nome "Low ocorrência no cache ratio" para sua condição e utilize a seguinte consulta NRQL.

```sql
SELECT sum(fdb_cache_hits)/sum(fdb_read_responses) FROM Metric
```

No **Threshold Type** , escolha **Anomaly** e altere a **Threshold direction** para **Lower only**. Em seguida, defina o limite crítico e de aviso em 3 e 2 desvio padrão, respectivamente.

Salve a condição para adicioná-la à sua política de alertas, que agora se parece com a seguinte.

## Crie um fluxo de trabalho de notificação [#create-notification]

Para receber notificação de qualquer denúncia aberta, também é necessário criar um fluxo de trabalho de notificação.

Primeiro, vá para a guia **Notification settings** e clique em **Create workflow**.

Isso leva você à página **Create a new workflow to get notified**. Na lista de opções de canal, clique em **Email**.

Digite o e-mail no qual deseja receber sua notificação, atualize o **Email subject** e clique em **Save**.

Isso leva você de volta à página **Create a new workflow to get notified** onde você vê que o canal de notificação foi adicionado. Em seguida, clique em **Activate workflow**.

Você vê o fluxo de trabalho nas **Notification settings** agora.

## Resumo [#summary]

Durante este procedimento, você criou a política de alertas do FlashDB e adicionou respostas de leitura lenta e condições de baixa ocorrência sem taxa de cache. Você também criou um fluxo de trabalho para receber notificações sobre qualquer violação aberta.

<Callout variant="tip">
  Este procedimento faz parte do curso que ensina como criar um início rápido. Continue para o próximo procedimento: [crie um início rápido](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/build-a-quickstart).
</Callout>
