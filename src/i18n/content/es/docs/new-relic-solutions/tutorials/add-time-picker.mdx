---
title: Agregar un selector de tiempo
metaDescription: Add a time picker to a sample application
freshnessValidatedDate: never
translationType: machine
---

Esta guía lo guía a través del proceso de agregar acceso a nuestro selector de tiempo en la aplicación de descripción general de transacciones de muestra.

La aplicación de muestra proporciona una descripción general de los telemetry data que muestran la transacción de su cuenta por aplicación, el tiempo de respuesta promedio, los códigos de respuesta HTTP y los errores de transacción. Cuando habilita el selector de tiempo, el usuario puede especificar el rango de tiempo de los datos a ver.

También tenemos un video de 12 minutos que cubre los pasos a continuación.

<Video
  id="inyshp3m7r"
  type="wistia"
/>

## Antes de que empieces [#begin]

Para desarrollar proyectos, necesita nuestra CLI (interfaz de línea de comando) New Relic One. Si aún no lo instaló, haga lo siguiente:

* Instale [Node.js.](https://nodejs.org/en/download/)
* Complete los pasos 1 a 4 del [inicio rápido de CLI](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==). En el paso 1, cerciorar de hacer una copia del número que precede al nombre de su cuenta. Esta es la identificación de su cuenta y la necesitará más adelante.

<Callout variant="important">
  Si ya instaló la CLI New Relic One, pero no recuerda el ID de su cuenta, inicie [el inicio rápido de la CLI](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==) nuevamente y luego haga clic en la flecha hacia abajo **Get your API key** . El ID de la cuenta es el número que precede al nombre de su cuenta.
</Callout>

Para obtener detalles adicionales, consulte [Configurar su entorno de desarrollo](/build-apps/set-up-dev-env).

## Prepare el código de muestra del selector de tiempo [#picker-sample-code]

Para comenzar, complete estos pasos para actualizar el UUID (ID único) de la aplicación y ejecutar la aplicación de muestra localmente:

<Steps>
  <Step>
    Si aún no lo hizo, clone la aplicación de ejemplo de nuestro [repositorio de instrucciones de GitHub](https://github.com/newrelic/nr1-how-to).

    ```bash
    git clone https://github.com/newrelic/nr1-how-to.git
    ```
  </Step>

  <Step>
    Cambie al directorio `nr1-howto-add-time-picker-nerdlet`:

    ```bash
    cd nr1-how-to/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet
    ```
  </Step>

  <Step>
    En su editor de texto preferido, abra `index.js`.
  </Step>

  <Step>
    Reemplace `YOUR_ACCOUNT_ID` con su ID de cuenta:

    <Callout variant="important">
      Su ID de cuenta está disponible en el inicio rápido de CLI (consulte **Before you begin**).
    </Callout>

    ```jsx
    this.accountId = <ADD YOUR ACCOUNT ID>;
    ```
  </Step>

  <Step>
    Cambie al directorio `add-time-picker` :

    ```bash
    cd /nr1-how-to/add-time-picker
    ```
  </Step>

  <Step>
    Ejecute estos comandos para actualizar el UUID y servir la aplicación de muestra:

    ```bash
    nr1 update
    nr1 nerdpack:uuid -gf
    nr1 nerdpack:serve
    ```
  </Step>

  <Step>
    Una vez que la aplicación de muestra se entregó correctamente, vaya a la versión local de New Relic ([https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local)), haga clic en **Apps** y haga clic en **Add Time Picker**.
  </Step>
</Steps>

Luego de iniciar la aplicación **Add Time Picker** , verá un dashboard que brinda una descripción general de la transacción en su cuenta New Relic .

De forma predeterminada, la aplicación muestra tus datos de los últimos 60 minutos. Si alterna el selector de tiempo, no actualiza los gráficos porque la aplicación de descripción general de transacciones no está conectada a la plataforma New Relic . No tiene acceso a los datos del selector de tiempo.

En las siguientes secciones, agregará el selector de tiempo a la aplicación de ejemplo y agregará el tiempo a la consulta.

## Importar el componente `PlatformStateContext` [#import]

El primer paso para agregar el selector de tiempo es importar el componente `PlatformStateContext` .

<Callout variant="important">
  Si necesita más detalles sobre el ejemplo `PlatformStateContext` que aparece a continuación, consulte la [página API y componentes](/components/platform-state-context).
</Callout>

Esto es lo que hace el componente `PlatformStateContext` :

* Envuelve todo el código dentro de la declaración de devolución del método de renderizado.
* Realiza una llamada de función pasando en el estado de plataforma New Relic.
* Devuelve todo el código dentro de nuestra declaración de devolución actual.

Complete estos pasos:

<Steps>
  <Step>
    En un editor de texto, abra `/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet/index.js`.
  </Step>

  <Step>
    Agregue el componente `PlatformStateContext` al final de la declaración de importación para que se vea así:

    ```jsx
    import {
      Grid,
      GridItem,
      HeadingText,
      AreaChart,
      TableChart,
      PieChart,
      PlatformStateContext,
    } from 'nr1';
    ```
  </Step>

  <Step>
    Justo debajo del `return` actual, inserte este código para el componente `PlatformStateContext` :

    ```jsx
    <PlatformStateContext.Consumer>
        {(platformState) => {
    return (
    // ADD THE CURRENT RETURN CODE HERE
    )
    }}
    </PlatformStateContext.Consumer>
    ```
  </Step>

  <Step>
    Mueva el código de la aplicación actual para que esté debajo del `return` de la llamada a la función `platformState` . La declaración `return` ahora debería ver así:

    ```jsx
    return (
      <PlatformStateContext.Consumer>
        {(platformState) => {
          return (
            <>
              <Grid
                className="primary-grid"
                spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
              >
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Transaction Overview
                    </HeadingText>
                    <TableChart
                      fullWidth
                      accountId={this.accountId}
                      query={trxOverview}
                    />
                  </main>
                </GridItem>
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Average Response Time
                    </HeadingText>
                    <AreaChart
                      fullWidth
                      accountId={this.accountId}
                      query={avgResTime}
                    />
                  </main>
                </GridItem>
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Response Code
                    </HeadingText>
                    <PieChart
                      fullWidth
                      accountId={this.accountId}
                      query={responseCodes}
                    />
                  </main>
                </GridItem>
                <GridItem className="primary-content-container" columnSpan={6}>
                  <main className="primary-content full-height">
                    <HeadingText
                      spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                      type={HeadingText.TYPE.HEADING_4}
                    >
                      Transaction Errors
                    </HeadingText>
                    <PieChart
                      fullWidth
                      accountId={this.accountId}
                      query={errCount}
                    />
                  </main>
                </GridItem>
              </Grid>
            </>
          );
        }}
      </PlatformStateContext.Consumer>
    );
    ```
  </Step>

  <Step>
    Agregue una declaración `console.log` para cerciorar de que está viendo los datos adecuados. Inserte el siguiente código dentro de la declaración de devolución `PlatformState` justo antes de la etiqueta de apertura del componente `<Grid>` :

    ```jsx
    /* Taking a peek at the PlatformState */
    console.log(platformState);
    ```
  </Step>
</Steps>

Luego de completar estos pasos, la consola de su browser muestra el log.

## Agrega el tiempo a la consulta. [#add-time]

En su consola, debería ver algunos datos del estado de la plataforma New Relic. Ahora está listo para agregar `timeRange` datos para actualizar los gráficos en la aplicación de descripción general de transacciones.

Este paso requiere que importe el método de utilidad `timeRangeToNrql` de la biblioteca comunitaria de la aplicación New Relic.

<Callout variant="important">
  Puede obtener más detalles sobre la biblioteca comunitaria de la aplicación New Relic en nuestro [repositorio de GitHub](https://github.com/newrelic/nr1-community).
</Callout>

Este método auxiliar toma los datos de duración `PlatformState.timeRange` , los formatea en milisegundos y devuelve una declaración `SINCE` formateada para agregar a su `NRQL`.

<Steps>
  <Step>
    Importe el método `timeRangeToNrql` insertando esta línea de código debajo de las otras secciones `import` :

    <Callout variant="important">
      No es necesario incluir el `AccountDropdown` del ejemplo de importación comunitaria.
    </Callout>

    ```jsx
    import { timeRangeToNrql } from '@newrelic/nr1-community';
    ```
  </Step>

  <Step>
    Pase el `platformState` al ayudante `timeRangeToNrql` y almacene su resultado como una declaración `since` para su uso posterior:

    ```jsx
    const since = timeRangeToNrql(platformState);
    ```
  </Step>

  <Step>
    Luego de crear la variable `since` , revise el código en la declaración de devolución `PlatformStateContext` y concatene la variable `since` en cada una de las consultas de componentes del gráfico existentes. Aquí hay un `TableChart` ejemplo:

    ```jsx
    <TableChart fullWidth accountId={this.accountId} query={trxOverview + since} />
    ```
  </Step>

  <Step>
    Luego de actualizar todos los componentes del gráfico, confirme que el archivo `index.js` final sea similar a este:

    <Callout variant="important">
      Este código de muestra completo se encuentra en su `nerdlet final.js`.
    </Callout>

    ```jsx
    import React from 'react';
    import {
      PlatformStateContext,
      Grid,
      GridItem,
      HeadingText,
      AreaChart,
      TableChart,
      PieChart,
    } from 'nr1';
    import { timeRangeToNrql } from '@newrelic/nr1-community';

    export default class Nr1HowtoAddTimePicker extends React.Component {
      constructor(props) {
        super(props);
        this.accountId = 1;
      }
      render() {
        const avgResTime = `SELECT average(duration) FROM Transaction FACET appName TIMESERIES AUTO `;
        const trxOverview = `FROM Transaction SELECT count(*) as 'Transactions', apdex(duration) as 'apdex', percentile(duration, 99, 95) FACET appName `;
        const errCount = `FROM TransactionError SELECT count(*) as 'Transaction Errors' FACET error.message `;
        const responseCodes = `SELECT count(*) as 'Response Code' FROM Transaction FACET httpResponseCode `;

        return (
          <PlatformStateContext.Consumer>
            {(platformState) => {
              /* Taking a peek at the platformState */
              console.log(platformState);

              const since = timeRangeToNrql(platformState);
              console.log(since);

              return (
                <>
                  <Grid
                    className="primary-grid"
                    spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
                  >
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Transaction Overview
                        </HeadingText>
                        <TableChart
                          fullWidth
                          accountId={this.accountId}
                          query={trxOverview + since}
                        />
                      </main>
                    </GridItem>
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Average Response Time
                        </HeadingText>
                        <AreaChart
                          fullWidth
                          accountId={this.accountId}
                          query={avgResTime + since}
                        />
                      </main>
                    </GridItem>
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Response Code
                        </HeadingText>
                        <PieChart
                          fullWidth
                          accountId={this.accountId}
                          query={responseCodes + since}
                        />
                      </main>
                    </GridItem>
                    <GridItem className="primary-content-container" columnSpan={6}>
                      <main className="primary-content full-height">
                        <HeadingText
                          spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                          type={HeadingText.TYPE.HEADING_4}
                        >
                          Transaction Errors
                        </HeadingText>
                        <PieChart
                          fullWidth
                          accountId={this.accountId}
                          query={errCount + since}
                        />
                      </main>
                    </GridItem>
                  </Grid>
                </>
              );
            }}
          </PlatformStateContext.Consumer>
        );
      }
    }
    ```
  </Step>
</Steps>

## Resumen [#summary]

Cuando completó todos los pasos de este ejemplo, implementó con éxito el selector de tiempo en su aplicación importando el componente `PlatformStateContext` y accediendo a su objeto de datos `timePicker` .
