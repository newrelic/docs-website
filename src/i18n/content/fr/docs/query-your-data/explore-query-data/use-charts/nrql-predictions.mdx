---
title: Prévisions NRQL
tags:
  - Prediction on a chart
  - Forecasting on a chart
  - NRQL Predictions
  - Forecasting
metaDescription: Use NRQL Predictions to predict future trends and potential performance issues.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="Aperçu">
  Nous travaillons toujours sur cette fonctionnalité, mais nous aimerions que vous l&apos;essayiez !

  Cette fonctionnalité est actuellement fournie dans le cadre d&apos;un programme d&apos;aperçu conformément à nos [politiques de pré-sortie](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

<DNT>**NRQL Predictions**</DNT> in New Relic uses your metric&amp;apos;s historical data to predict future trends, providing insights into how metrics might behave in the future. This proactive approach helps you visualize trends and anticipate potential issues, enabling timely interventions to maintain optimal system performance. While <DNT>**NRQL Predictions**</DNT> itself does not identify potential issues, it equips you with the information needed to assess trends and plan for future challenges.

Pour l&apos;identification automatique des problèmes potentiels, vous pouvez vous inscrire à la fonctionnalité <DNT>**[Predictive Alerts](/docs/query-your-data/explore-query-data/use-charts/nrql-predictions)**</DNT> , actuellement disponible en version préliminaire publique. <DNT>**Predictive Alerts**</DNT> fonctionne aux côtés de <DNT>**NRQL Predictions**</DNT> pour déclencher automatiquement des alertes lorsque les tendances projetées indiquent un problème potentiel, permettant une gestion proactive de votre système.

## Tarifs [#pricing]

Votre utilisation de <DNT>**NRQL Predictions**</DNT> est facturable pendant l&amp;apos;aperçu conformément à votre commande, conformément au modèle de tarification associé à votre compte. Les requêtes de langage New Relic (NRQLS) liées à l&amp;apos;utilisation de cette fonctionnalité sont facturables en tant que produit Core calculer. Si cette fonctionnalité devient généralement disponible, votre utilisation sera facturable conformément à votre commande.

Pour plus de détails sur les prix, veuillez contacter notre équipe commerciale ou vous référer à votre commande.

## Inscription [#enrollment]

Pour vous inscrire à la fonctionnalité <DNT>**NRQL Predictions**</DNT> , accédez à <DNT>**[one.newrelic.com &gt; Administration](https://one.newrelic.com//admin-portal) &amp;gt; Preview &amp;amp; Trials**</DNT> et activez <DNT>**NRQL predictions**</DNT>.

## Ajouter une prédiction sur un graphique linéaire ou à aires [#add-prediction]

You can add predictions to line and area charts in following two ways:

<CollapserGroup>
  <Collapser id="prediction-on-existing-chart" title="Add a prediction to an existing chart.">
    To add a prediction to an existing chart, follow these steps:

    <Steps>
      <Step>
        ### Accéder à un graphique linéaire ou à aires [#access-a-chart]

        1. Accédez à [one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities).
        2. Pour ajouter une prédiction à un graphique linéaire ou à aires, sélectionnez-le à partir de <DNT>**Dashboards**</DNT> ou ouvrez-le à partir de <DNT>**Metrics and events**</DNT>.
      </Step>

      <Step>
        ### Ajouter une prédiction [#add-prediction]

        Pour ajouter une prédiction, à partir de la <Icon name="fe-more-horizontal" /> menu, sélectionnez <DNT>**Predict trend**</DNT>. Dans **Data Explorer**, la tendance de prédiction apparaît sur le graphique, projetant les tendances futures. La plage de prédiction est automatiquement définie sur 20 % de la fenêtre de requête et surlignée en gris. Le graphique apparaît en lignes pointillées dans la plage prédite.

        Le mot clé `PREDICT` est ajouté à la requête du graphique. Vous pouvez [affiner la requête](#customize-prediction-range) en fonction de vos besoins et l&amp;apos;exécuter pour obtenir la tendance mise à jour.

        <Callout variant="tip">
          Lorsque vous ajoutez une prédiction à un graphique en aires, le type de graphique devient un graphique linéaire avec prédiction.
        </Callout>
      </Step>

      <Step>
        ### Ajouter au dashboard [#add-to-dashboard]

        1. Pour ajouter le graphique avec prédiction à un dashboard, cliquez sur <DNT>**Add to dashboard**</DNT>.
        2. Entrez un nom de widget.
        3. Sélectionnez un dashboard dans lequel vous souhaitez ajouter le widget ou créez un nouveau dashboard pour celui-ci.

        Vous pouvez maintenant visualiser le graphique avec prédiction sur le dashboard sélectionné.
      </Step>
    </Steps>
  </Collapser>

  <Collapser id="use-predict-clause" title="Use the `PREDICT` clause in an NRQL query.">
    To add the `PREDICT` clause to an NRQL query, follow these steps:

    <Steps>
      <Step>
        ### Create an NRQL query [#create-query]

        1. Go to [one.newrelic.com](https://one.newrelic.com) and select the account in which you want to create the query.
        2. To open <DNT>**Data Explorer**</DNT>, select <DNT>**Query Your Data**</DNT>.
        3. Compose a time series query using the NRQL syntax. Refer [NRQL syntax documentation](https://docs.newrelic.com/docs/nrql/nrql-syntax-clauses-functions) for more information.

        <Callout variant="important">
          Make sure the query does not include [metric timeslice data](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#timeslice-data), the [`COMPARE WITH`](/docs/nrql/nrql-syntax-clauses-functions/#sel-compare) clause, or [nested aggregations](/docs/nrql/using-nrql/nested-aggregation-make-ordered-computations-single-query) inside [subqueries](/docs/nrql/using-nrql/subqueries-in-nrql/), as predictions are not supported in these cases.
        </Callout>
      </Step>

      <Step>
        ### Ajouter une prédiction [#add-prediction-to-query]

        To add prediction to the chart, append the `PREDICT` clause to the query and run it. The prediction range is automatically set to 20% of the query window, and highlighted in gray. The graph appears in dotted lines within the predicted range.

        You can further [refine the query](#customize-prediction-range) according to your requirements.
      </Step>

      <Step>
        ### Ajouter au dashboard [#add-query-to-dashboard]

        1. Pour ajouter le graphique avec prédiction à un dashboard, cliquez sur <DNT>**Add to dashboard**</DNT>.
        2. Entrez un nom de widget.
        3. Sélectionnez un dashboard dans lequel vous souhaitez ajouter le widget ou créez un nouveau dashboard pour celui-ci.

        Vous pouvez maintenant visualiser le graphique avec prédiction sur le dashboard sélectionné.
      </Step>
    </Steps>
  </Collapser>
</CollapserGroup>

## Supported prediction algorithm [#supported-algorithm]

Currently, <DNT>**NRQL predictions**</DNT> only supports the <DNT>**Holt-Winters**</DNT> algorithm for both seasonal and non-seasonal time series. This is a commonly used and standard algorithm for forecasting and prediction tasks. We support hourly, daily, and weekly seasonal lengths for the Holt-Winters model.

## Comportement par défaut [#defaults]

The `PREDICT` clause in a query comes with the following default behaviors:

* **Seasonality**: Automatically detects seasonality in the data and uses the same season length to construct the predictive model. If no seasonality is found, it constructs a non-seasonal model.
* **Prediction window**: Projects 20% of the total time span specified in your query window.
* **Historical data for training**: Uses historical data from the current query window and the two preceding ones to generate predictions.
* **Time interval**: Aligns with the data point interval of the time series in the query window to ensure consistency in data projection.

Example of using `PREDICT` in NRQL query:

```sql
FROM Transaction SELECT count(*) WHERE error IS TRUE TIMESERIES PREDICT
```

La prédiction par défaut sur le graphique apparaît comme suit :

<img title="Default prediction" alt="Default prediction" src="/images/nrql-prediction-default.webp" />

<figcaption>
  <DNT>**[one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities) &amp;gt; dashboards**</DNT>: prédiction par défaut.
</figcaption>

## Customize the predictive model [#customize-prediction-range]

You can customize the predictions by manually setting the training model&apos;s hyperparameters and adding the `USING` and `BY` keywords. To get familiar with NRQL, refer to [NRQL documentation](/docs/nrql/get-started/introduction-nrql-new-relics-query-language).

<CollapserGroup>
  <Collapser id="hyperparameters" title="Set model hyperparameters.">
    Currently, <DNT>**Holt-Winters**</DNT> is the only prediction algorithm we support, and it comes with several hyperparameters to help you fine-tune your predictions. Refer to the following table to understand the behavior of each hyperparameter and choose the ones that suit your use case.

    To modify your query, append `holtwinters(<hyperparameters>: <value>)` after the `PREDICT` clause.

    <table id="hyperparameters">
      <thead>
        <tr>
          <th colSpan="3" />
        </tr>

        <tr>
          <th>
            Hyperparameter
          </th>

          <th>
            Valeur
          </th>

          <th>
            Behavior
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td rowspan="3" style="width: 300px;">
            `seasonality`
          </td>

          <td>
            `<season length>`
          </td>

          <td>
            Sets the seasonality of the time series to a specific season length. Make sure the season length is an `integer unit` of time.\
            **Examples**: `1 day` or `3 hours`
          </td>
        </tr>

        <tr>
          <td>
            `AUTO`
          </td>

          <td>
            Automatically detects the seasonality of the time series and generates predictions with the identified seasonality.
          </td>
        </tr>

        <tr>
          <td>
            `NONE`
          </td>

          <td>
            Disables the seasonality of the time series and generates a non-seasonal prediction.

            <Callout variant="important">
              `seasonality: NONE` is not compatible with the `gamma` hyperparameter, which sets the trend damping factor.
            </Callout>
          </td>
        </tr>

        <tr>
          <td>
            `alpha`
          </td>

          <td>
            0 to 1
          </td>

          <td>
            Sets the level smoothing factor.

            * **Lower value**: More weight on historical data.
            * **Higher value**: More weight on recent data.
          </td>
        </tr>

        <tr>
          <td>
            `beta`
          </td>

          <td>
            0 to 1
          </td>

          <td>
            Sets the trend smoothing factor.

            * **Lower value**: More weight on historical data.
            * **Higher value**: More weight on recent data.
          </td>
        </tr>

        <tr>
          <td>
            `gamma`
          </td>

          <td>
            0 to 1
          </td>

          <td>
            Sets the season smoothing factor.

            * **Lower value**: More weight on historical data.
            * **Higher value**: More weight on recent data.
          </td>
        </tr>

        <tr>
          <td>
            `phi`
          </td>

          <td>
            0.98 to 1
          </td>

          <td>
            Sets the trend damping parameter.

            * **Lower value**: More damping effect to the prediction curve that gradually levels out to a flat curve.
            * **Higher value**: Lesser damping effect to the prediction curve.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="by"
    title={<>Add the <InlineCode>
      BY
    </InlineCode> keyword.</>
    }
  >
    Use the `BY` keyword to set how far ahead in time you want the model to predict. For example, `PREDICT BY 3 hours` generates a prediction of three hours into the future from the latest point in the time series. Make sure the time span is an `integer unit` of time.
  </Collapser>

  <Collapser
    id="using"
    title={<>Add the <InlineCode>
      USING
    </InlineCode> keyword.</>
    }
  >
    Use the `USING` keyword to specify the amount of historical data you want to use to train the model. For example, `PREDICT USING 1 day` uses the query window along with the data from the preceding day to train the model. Make sure the time span is an `integer unit` of time.
  </Collapser>
</CollapserGroup>

Example of using `PREDICT` with hyperparameters, `BY`, and `USING` keywords:

```sql
FROM Transaction SELECT count(*) WHERE error IS TRUE TIMESERIES PREDICT holtwinters(seasonality: AUTO, alpha: 0.2) BY 1 hour USING 2 hours
```

This query sets the seasonality to automatic detection and emphasizes historical data by adjusting the level smoothing factor. It predicts one hour into the future and trains the model using the query window length along with the previous two hours of historical data. The chart displays the customized prediction as follows:

<img title="Custom prediction" alt="Custom prediction" src="/images/nrql-prediction-custom.webp" />

<figcaption>
  <DNT>**[one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities) &amp;gt; dashboards**</DNT>: prédiction personnalisée.
</figcaption>