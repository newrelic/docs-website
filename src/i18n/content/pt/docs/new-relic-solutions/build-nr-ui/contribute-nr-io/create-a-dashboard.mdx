---
title: Crie um dashboard
metaDescription: create a dashboard to observe your data in New Relic
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este procedimento faz parte do curso que ensina como criar um início rápido. Se ainda não o fez, confira a [introdução do curso](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart).

  Cada procedimento neste curso se baseia no anterior, portanto, certifique-se de [enviar o rastreamento do seu produto](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-traces) antes de prosseguir com este.
</Callout>

Com o painel New Relic , você observa e interpreta os dados coletados do seu aplicativo. Você reúne os dados que deseja ver em gráficos para personalizar a maneira como os vê.

Neste procedimento, você cria um dashboard no New Relic.

## Crie um dashboard [#create-dashboard]

<Steps>
  <Step>
    Navegue até [New Relic](https://one.newrelic.com/) e faça login com sua conta. Aqui você vê diferentes abas como **Browser**, **Dashboards**, **Alerts** na navegação esquerda.
  </Step>

  <Step>
    Vá para o **Dashboards** e clique em **Create a dashboard** no canto superior direito e selecione **Create a new dashboard**.

    <img
      title="Dashboards index"
      alt="Dashboards index"
      src="/images/dashboards_screenshot-full_dashboard-index.webp"
    />
  </Step>

  <Step>
    Nomeie seu dashboard como `FlashDB` e clique em **Create**.
  </Step>
</Steps>

## Adicione gráficos ao seu dashboard [#add-charts]

Assim que o dashboard estiver instalado, você poderá começar a criar gráficos. Você adicionará os seguintes gráficos:

* Métodos de banco de dados
* Tempo médio de resposta
* Erros
* Tamanho do banco de dados
* Ocorrência sem cache
* Chaves

### Métodos de banco de dados [#database-methods]

Passe o mouse sobre o dashboard e clique em **Add a new chart**.

A partir desta tela, você adiciona gráficos usando nosso criador de consulta, ou opta por adicionar texto, imagens ou links usando Markdown. Clique em **Add a chart**.

Poderá abrir a opção criador de consulta. Mude para o editor NRQL e edite a consulta da seguinte forma:

```sql
SELECT count(*) FROM fdb_method FACET method 
```

Clique em **Run** para ver os resultados acima.

Aqui você vê a contagem de cada consulta FlashDB, agrupada por método. Você pode optar por apresentar seus resultados em diferentes formatos, como tabela, outdoor ou gráfico de pizza.

Altere o tipo de gráfico para pizza, nomeie seu gráfico como "Métodos de banco de dados" e clique em salvar.

O gráfico agora está visível em seu dashboard.

Você pode adicionar mais gráficos ao seu dashboard seguindo o mesmo padrão. Para fazer isso, clique em **+** no canto superior direito.

Isso leva você à mesma página **Add to your dashboard** . Adicione outro gráfico ao seu dashboard.

### Tempo médio de resposta [#average-response]

Execute a seguinte consulta para observar o tempo médio de resposta da consulta FlashDB.

```sql
SELECT average(fdb_create_responses), average(fdb_read_responses), average(fdb_update_responses), average(fdb_delete_responses) FROM Metric TIMESERIES
```

Aqui você segue o tempo médio de resposta para outras consultas do FlashDB. Clique em **Save** para adicionar este gráfico ao seu dashboard. Siga o mesmo procedimento para adicionar o restante dos gráficos.

### Erros [#errors]

Para o gráfico de erros, use a seguinte consulta:

```sql
SELECT sum(fdb_create_errors), sum(fdb_read_errors), sum(fdb_update_errors), sum(fdb_delete_errors) FROM Metric TIMESERIES
```

### Tamanho do banco de dados [#database-size]

Use a consulta a seguir para obter o gráfico de tamanho do banco de dados.

```sql
SELECT latest(fdb_size) FROM Metric
```

O gráfico mostra o tamanho do banco de dados.

### Ocorrência sem cache [#cache-hits]

Para o gráfico de ocorrência no cache, utilize a seguinte consulta:

```sql
SELECT sum(fdb_cache_hits) FROM Metric TIMESERIES
```

Aqui você observa o número total de ocorrências no cache usando um gráfico de linhas.

### Chaves [#keys]

Use a consulta a seguir para contar o número de chaves em seu banco de dados.

```sql
SELECT count(fdb_keys) FROM Metric TIMESERIES
```

Aqui, você observa a contagem de chaves do FlashDB.

## Resumo [#summary]

Neste procedimento, você criou um dashboard e adicionou vários gráficos a ele para observar seus serviços no New Relic.

<Callout variant="tip">
  Este procedimento faz parte do curso que ensina como criar um início rápido. Continue para o próximo procedimento: [create alerts](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-alerts).
</Callout>
