---
title: Adicione um seletor de hora
metaDescription: Add a time picker to a sample application
freshnessValidatedDate: never
translationType: machine
---

Este guia orienta você no processo de adição de acesso ao nosso seletor de hora no aplicativo de visão geral de transação de exemplo.

O aplicativo de exemplo fornece uma visão geral dos dados de telemetria mostrando a transação da sua conta por aplicativo, tempo médio de resposta, códigos de resposta HTTP e erros de transação. Ao ativar o seletor de hora, o usuário pode especificar o intervalo de tempo dos dados a serem visualizados.

Também temos um vídeo de 12 minutos que aborda as etapas abaixo.

<Video
  id="inyshp3m7r"
  type="wistia"
/>

## Antes de você começar [#begin]

Para desenvolver projetos, você precisa de nossa CLI (interface de linha de comando) New Relic One. Se você ainda não o instalou, faça o seguinte:

* Instale [Node.js.](https://nodejs.org/en/download/)
* Conclua as etapas 1 a 4 do [início rápido da CLI](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==). Na etapa 1, certifique-se de fazer uma cópia do número que precede o nome da sua conta. Este é o ID da sua conta e você precisará dele mais tarde.

<Callout variant="important">
  Se você já instalou a CLI do New Relic One, mas não consegue se lembrar do ID da sua conta, inicie o [início rápido da CLI](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==) novamente e clique na seta para baixo **Get your API key** . O ID da conta é o número que precede o nome da sua conta.
</Callout>

Para obter detalhes adicionais, consulte [Configurar seu ambiente de desenvolvimento](/build-apps/set-up-dev-env).

## Prepare o código de exemplo do seletor de hora [#picker-sample-code]

Para começar, conclua estas etapas para atualizar o aplicativo UUID (ID único) e execute o aplicativo de amostra localmente:

<Steps>
  <Step>
    Caso ainda não tenha feito isso, clone o aplicativo de exemplo em nosso [repositório GitHub de instruções](https://github.com/newrelic/nr1-how-to).

    ```bash
    git clone https://github.com/newrelic/nr1-how-to.git
    ```
  </Step>

  <Step>
    Mude para o diretório `nr1-howto-add-time-picker-nerdlet`:

    ```bash
    cd nr1-how-to/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet
    ```
  </Step>

  <Step>
    No seu editor de texto preferido, abra `index.js`.
  </Step>

  <Step>
    Substitua `YOUR_ACCOUNT_ID` pelo ID da sua conta:

    <Callout variant="important">
      O ID da sua conta está disponível no início rápido da CLI (consulte **Before you begin**).
    </Callout>

    ```jsx
    this.accountId = <ADD YOUR ACCOUNT ID>;
    ```
  </Step>

  <Step>
    Mude para o diretório `add-time-picker` :

    ```bash
    cd /nr1-how-to/add-time-picker
    ```
  </Step>

  <Step>
    Execute estes comandos para atualizar o UUID e servir o aplicativo de amostra:

    ```bash
    nr1 update
    nr1 nerdpack:uuid -gf
    nr1 nerdpack:serve
    ```
  </Step>

  <Step>
    Assim que o aplicativo de amostra for servido com sucesso, vá para a versão local do New Relic ([https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local)), clique em **Apps** e clique em **Add Time Picker**.
  </Step>
</Steps>

Após iniciar o aplicativo **Add Time Picker** , você verá um dashboard que fornece uma visão geral da transação em sua conta New Relic .

Por padrão, o aplicativo mostra seus dados dos últimos 60 minutos. Se você alternar o seletor de hora, os gráficos não serão atualizados porque o aplicativo de visão geral da transação não está conectado à plataforma New Relic . Não tem acesso aos dados do seletor de hora.

Nas seções a seguir, você adicionará o seletor de hora ao aplicativo de exemplo e adicionará o horário à consulta.

## Importe o componente `PlatformStateContext` [#import]

A primeira etapa para adicionar o seletor de hora é importar o componente `PlatformStateContext` .

<Callout variant="important">
  Se precisar de mais detalhes sobre o exemplo `PlatformStateContext` a seguir, consulte a [páginaAPI e componentes](/components/platform-state-context).
</Callout>

Veja o que o componente `PlatformStateContext` faz:

* Envolve todo o código na instrução de retorno do método render.
* Faz uma chamada de função passando no estado da plataforma New Relic.
* Retorna todo o código da nossa instrução de retorno atual.

Conclua estas etapas:

<Steps>
  <Step>
    Em um editor de texto, abra `/add-time-picker/nerdlets/nr1-howto-add-time-picker-nerdlet/index.js`.
  </Step>

  <Step>
    Adicione o componente `PlatformStateContext` ao final da instrução de importação para que fique assim:

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
    Logo abaixo do `return` atual, insira este código para o componente `PlatformStateContext` :

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
    Mova o código do aplicativo atual para que fique abaixo do `return` da chamada de função `platformState` . A instrução `return` agora deve ficar assim:

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
    Adicione uma instrução `console.log` para garantir que você esteja vendo os dados apropriados. Insira o seguinte código dentro da instrução de retorno `PlatformState` logo antes da tag de abertura do componente `<Grid>` :

    ```jsx
    /* Taking a peek at the PlatformState */
    console.log(platformState);
    ```
  </Step>
</Steps>

Depois de concluir essas etapas, o console do browser exibirá o log.

## Adicione o tempo à consulta [#add-time]

Em seu console, você deverá ver alguns dados do estado da plataforma New Relic. Agora você está pronto para adicionar dados `timeRange` para atualizar os gráficos no aplicativo de visão geral da transação.

Esta etapa exige que você importe o método utilitário `timeRangeToNrql` da biblioteca da comunidade do aplicativo New Relic.

<Callout variant="important">
  Você pode obter mais detalhes sobre a biblioteca da comunidade do aplicativo New Relic em nosso [repositório GitHub](https://github.com/newrelic/nr1-community).
</Callout>

Este método auxiliar pega seus dados de duração `PlatformState.timeRange` , formata-os em milissegundos e retorna uma instrução `SINCE` formatada para adicionar ao seu `NRQL`.

<Steps>
  <Step>
    Importe o método `timeRangeToNrql` inserindo esta linha de código abaixo das outras seções `import` :

    <Callout variant="important">
      Você não precisa incluir o `AccountDropdown` do exemplo de importação da comunidade.
    </Callout>

    ```jsx
    import { timeRangeToNrql } from '@newrelic/nr1-community';
    ```
  </Step>

  <Step>
    Passe o `platformState` para o auxiliar `timeRangeToNrql` e salve sua saída como uma instrução `since` para uso posterior:

    ```jsx
    const since = timeRangeToNrql(platformState);
    ```
  </Step>

  <Step>
    Depois de criar a variável `since` , analise o código na instrução de retorno `PlatformStateContext` e concatene a variável `since` em cada uma das consultas de componentes do gráfico existentes. Aqui está um exemplo `TableChart` :

    ```jsx
    <TableChart fullWidth accountId={this.accountId} query={trxOverview + since} />
    ```
  </Step>

  <Step>
    Depois de atualizar todos os componentes do gráfico, confirme se o arquivo `index.js` final é semelhante a este:

    <Callout variant="important">
      Este código de amostra concluído está em seu `nerdlet final.js`.
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

## Resumo [#summary]

Ao concluir todas as etapas deste exemplo, você implementou com sucesso o seletor de hora em seu aplicativo importando o componente `PlatformStateContext` e acessando seu objeto de dados `timePicker` .
