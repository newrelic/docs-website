---
title: 'Add a time picker'
metaDescription: 'Add a time picker to a sample application'
freshnessValidatedDate: never
---

This guide steps you through the process of adding access to our time picker in the sample transaction overview application.

The sample application provides an overview of the telemetry data showing your account's transactions by application, average response time, HTTP response codes, and transaction errors. When you enable the time picker, users can specify the time range of data to view.

We also have a 12 minute video that covers the steps below.

<Video
  id="inyshp3m7r"
  type="wistia"
/>

## Before you begin [#begin]

To develop projects, you need our New Relic One CLI (command line interface). If you haven't already installed it, do the following:

* Install [Node.js](https://nodejs.org/en/download/).
* Complete steps 1–4 of the [CLI quick start](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==). In step 1, be sure to make a copy of the number preceding your account name. This is your accound ID, and you’ll need it later.

<Callout variant="important">
  If you've already installed the New Relic One CLI, but you can't remember your account ID, start the [CLI quick start](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==) again, and then click the **Get your API key** down arrow. The account ID is the number preceding your account name.
</Callout>

For additional details, see [Set up your development environment](/build-apps/set-up-dev-env).

## Prepare the time picker sample code [#picker-sample-code]

To get started, complete these steps to update the application UUID (unique ID) and run the sample application locally:

<Steps>
  <Step>
    If you haven't already done so, clone the example applications from our [how-to GitHub repo](https://github.com/newrelic/nr1-how-to).

    ```bash
    git clone https://github.com/newrelic/nr1-how-to.git
    ```
  </Step>

  <Step>
    Change to the directory `nr1-howto-add-time-picker-nerdlet`:

    ```bash
    cd nr1-how-to/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet
    ```
  </Step>

  <Step>
    In your preferred text editor, open `index.js`.
  </Step>

  <Step>
    Replace `YOUR_ACCOUNT_ID` with your account id:

    <Callout variant="important">
      Your account ID is available in the CLI quick start (see **Before you begin**).
    </Callout>

    ```jsx
    this.accountId = <ADD YOUR ACCOUNT ID>;
    ```
  </Step>

  <Step>
    Change to the `add-time-picker` directory:

    ```bash
    cd /nr1-how-to/add-time-picker
    ```
  </Step>

  <Step>
    Execute these commands to update the UUID and serve the sample application:

    ```bash
    nr1 update
    nr1 nerdpack:uuid -gf
    nr1 nerdpack:serve
    ```
  </Step>

  <Step>
    Once the sample application is successfully served, go to the local version of New Relic ([https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local)) click **Apps**, and click **Add Time Picker**.
  </Step>
</Steps>

After launching the **Add Time Picker** application, you see a dashboard that gives an overview of the transactions in your New Relic account.

By default, the application shows your data within the last 60 minutes. If you toggle the time picker, it doesn't update the charts because the transaction overview application isn't connected to the New Relic platform. It has no access to the data from the time picker.

In the following sections, you'll add the time picker to the example application and add the time to the queries.

## Import the `PlatformStateContext` component [#import]

The first step in adding the time picker is to import the `PlatformStateContext` component.

<Callout variant="important">
  If you need more details about the `PlatformStateContext` example that follows, see the [APIs and components page](/components/platform-state-context).
</Callout>

Here's what the `PlatformStateContext` component does:

* Wraps all of the code within the return statement of the render method.
* Makes a function call passing in the New Relic platform state.
* Returns all of the code within our current return statement.

Complete these steps:

<Steps>
  <Step>
    In a text editor, open `/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet/index.js`.
  </Step>

  <Step>
    Add the `PlatformStateContext` component to the end of the import statement so it looks like this:

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
    Just below the current `return` insert this code for the `PlatformStateContext` component:

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
    Move the current application code so it is under the `return` of the `platformState` function call. The `return` statement should now look like this:

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
    Add a `console.log` statement to make sure you are seeing appropriate data. Insert the following code inside the `PlatformState` return statement just before the opening tag for the `<Grid>` component:

    ```jsx
    /* Taking a peek at the PlatformState */
    console.log(platformState);
    ```
  </Step>
</Steps>

After you complete these steps, your browser console displays the log.

## Add the time to the queries [#add-time]

In your console, you should see some data from the New Relic platform state. Now you're ready to add `timeRange` data to update the charts in the transaction overview application.

This step requires you to import the `timeRangeToNrql` utility method from the New Relic app community library.

<Callout variant="important">
  You can get more details on the New Relic app community library from our [GitHub repo](https://github.com/newrelic/nr1-community).
</Callout>

This helper method takes your `PlatformState.timeRange` duration data, formats it from milliseconds, and returns a formatted `SINCE` statement to add to your `NRQL`.

<Steps>
  <Step>
    Import the `timeRangeToNrql` method by inserting this line of code below the other `import` sections:

    <Callout variant="important">
      You don't need to include the `AccountDropdown` from the community import example.
    </Callout>

    ```jsx
    import { timeRangeToNrql } from '@newrelic/nr1-community';
    ```
  </Step>

  <Step>
    Pass the `platformState` to the `timeRangeToNrql` helper, and save its output as a `since` statement for later use:

    ```jsx
    const since = timeRangeToNrql(platformState);
    ```
  </Step>

  <Step>
    After creating the `since` variable, go through the code in the `PlatformStateContext` return statement and concatenate the `since` variable in each of the existing chart component queries. Here's a `TableChart` example:

    ```jsx
    <TableChart fullWidth accountId={this.accountId} query={trxOverview + since} />
    ```
  </Step>

  <Step>
    After you update all of the chart components, confirm that the final `index.js` file looks similar to this:

    <Callout variant="important">
      This completed sample code is in your `nerdlet final.js`.
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

## Summary [#summary]

When you completed all the steps in this example, you successfully implemented the time picker in your application by importing the `PlatformStateContext` component and accessing its `timePicker` data object.
