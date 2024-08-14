---
title: Configurar o observador trace
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: 'How to set up New Relic''s trace observer, which is required for enabling our tracing tools that use Infinite Tracing.'
freshnessValidatedDate: never
translationType: machine
---

Se você estiver seguindo as [etapas para configurar distributed tracing](/docs/distributed-tracing/enable-configure/quick-start) e continuar com as etapas da opção avançada chamada Rastreamento Infinito, será necessário configurar um observador trace . O observador trace é um serviço baseado em AWS para rastreamento infinito que fornece uma maneira de baixa latência e baixo custo de enviar seus dados de telemetria para a New Relic. À medida que recebe seus dados de rastreamento, o observador trace usa [amostras tail-based](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#tail-based) para decidir o que manter e enviar para a New Relic.

Conclua a configuração do observador trace que se adapta aos seus tipos de fontes de dados (serviços, aplicativos ou entidade). Talvez seja necessário executar etapas em mais de uma seção se você tiver vários tipos:

* [Instrumento de serviços com agente APM e ferramentas de telemetria de terceiros](#apm-and-third-party)
* [Instrumento de serviços com New Relic Browser, mobile e Lambda](#browser-mobile-lambda)
* [(Opcional) Configuração adicional para todos os tipos de serviço](#follow-up-config)

<Callout variant="tip">
  Algumas de suas solicitações se comunicam com serviços que ainda usam distributed tracing padrão? Para evitar [conflitos de configuração](/docs/understand-dependencies/distributed-tracing/troubleshooting/infinite-tracing-trace-configuration-conflicts), o ideal é ativar o Rastreamento Infinito para todos os serviços associados.
</Callout>

## Instrumento de serviços com agente APM e ferramentas de telemetria de terceiros [#apm-and-third-party]

Para criar um novo observador trace se você estiver usando o <InlinePopover type="apm"/>agente New Relic ou integração de terceiros:

1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**</DNT>.

2. Selecione uma conta no dropdown superior esquerdo. Se você tiver acesso a várias contas, certifique-se de estar na conta onde deseja ativar o Rastreamento infinito. Se não for possível adicionar um observador, provavelmente é porque permitimos apenas [um observador por região, por família de contas](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#infinite-architecture).

3. Se nenhum observador trace ainda estiver presente, clique em <DNT>**New trace observer**</DNT> para adicionar um, preencha as informações e clique em <DNT>**Create**</DNT>. Observe que oferecemos as seguintes regiões:

   * <DNT>
       **us-east-1 (US)**
     </DNT>

   * <DNT>
       **us-west-2 (US)**
     </DNT>

   * <DNT>
       **eu-central-1 (EU):**
     </DNT>

     Selecione esta região se você estiver coletando dados de solicitações da UE e tiver uma conta New Relic baseada na UE que gera relatórios no data center da UE.

   * <DNT>
       **eu-west-1 (US):**
     </DNT>

     Selecione esta região se você estiver coletando dados de solicitações da UE e tiver uma conta New Relic baseada nos EUA que gera relatórios no data center dos EUA.

   * <DNT>
       **ap-southeast-1 (US)**
     </DNT>

   * <DNT>
       **ap-southeast-2 (US)**
     </DNT>

   * <DNT>
       **us-east-2 (US, FedRAMP)**
     </DNT>

4. No dropdown <DNT>**Endpoints**</DNT>, copie o valor do endpoint em <DNT>**For other integrations**</DNT> e prepare-o. Esse valor é referenciado em nossos exemplos de código como `YOUR_TRACE_OBSERVER_URL`. Isto é usado para testar o [observadortrace ](#sample-payload), bem como para configurar nossa [integração de telemetria](/docs/distributed-tracing/enable-configure/quick-start) e para enviar dados através da [API Trace](/docs/distributed-tracing/trace-api/introduction-trace-api/).

5. Se estiver configurando um agente APM, você também deverá copiar o valor do endpoint em <DNT>**For language agents**</DNT> e tê-lo pronto. Esse valor é referenciado em nossos exemplos de código como `YOUR_TRACE_OBSERVER_HOST`. Isso é usado para [configurar nosso agente de linguagem para enviar dados ao observador trace ](/docs/distributed-tracing/enable-configure/quick-start).

6. (Opcional) Para verificar se o observador trace está funcionando, recomendamos o envio de uma amostra de carga útil trace . Se você estiver usando nossa [API Trace](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api) diretamente, isso ajudará você a aprender como a API funciona.

   <CollapserGroup>
     <Collapser
       id="sample-request"
       title="Enviar amostra de carga útil"
     >
       <Callout variant="important">
         Se você estiver usando dados no formato Zipkin, consulte [Enviar carga útil do Zipkin](/docs/understand-dependencies/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api#send-zipkin-curl).
       </Callout>

       Este teste envia uma carga útil trace de amostra com um trace e dois períodos de um serviço denominado `Test Service A`.

       Para enviar este exemplo de solicitação:

       1. Obtenha o <InlinePopover type="licenseKey"/>da conta para a qual deseja relatar dados e prepare-o.

       2. Copie a seguinte solicitação `curl` em um editor de texto:

          ```bash
          curl -i -H 'Content-Type: application/json' \
              -H 'Api-Key: YOUR_LICENSE_KEY' \
              -H 'Data-Format: newrelic' \
              -H 'Data-Format-Version: 1' \
              -X POST \
              -d '[
                  {
                      "common": {
                          "attributes": {
                              "environment": "staging"
                          }
                      },
                      "spans": [
                          {
                              "trace.id": "123456",
                              "id": "ABC",
                              "attributes": {
                                  "duration.ms": 12.53,
                                  "host": "host123.example.com",
                                  "name": "/home",
                                  "service.name": "Test Service A"
                              }
                          },
                          {
                              "trace.id": "123456",
                              "id": "DEF",
                              "attributes": {
                                  "error.message": "Invalid credentials",
                                  "service.name": "Test Service B",
                                  "host": "host456.example.com",
                                  "duration.ms": 2.97,
                                  "name": "/auth",
                                  "parent.id": "ABC"
                              }
                          }
                      ]
                  }
              ]' 'YOUR_TRACE_OBSERVER_URL'
          ```

       3. Insira seus próprios valores na solicitação `curl` :

          <table>
            <thead>
              <tr>
                <th>
                  Valor
                </th>

                <th>
                  Descrição
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `YOUR_LICENSE_KEY`
                </td>

                <td>
                  Substitua isso pela sua ingestão <InlinePopover type="licenseKey"/>.
                </td>
              </tr>

              <tr>
                <td>
                  `YOUR_TRACE_OBSERVER_URL`
                </td>

                <td>
                  Substitua pelo valor do endpoint <DNT>**For other integrations**</DNT> que você copiou na etapa anterior.
                </td>
              </tr>
            </tbody>
          </table>

       4. Copie a solicitação curl em um terminal e execute-a.

       5. O teste deve retornar `HTTP/1.1 202 Accepted`, indicando sucesso. Caso contrário, verifique os seguintes problemas comuns:

          * Confirme se você usou o valor [do endpoint](#endpoints)

            <DNT>
              [**For other integrations**](#endpoints)
            </DNT>

            [](#endpoints).

          * Confirme que você está usando aspas simples em torno de `YOUR_TRACE_OBSERVER_URL`.

          * Verifique se você está usando a chave de API correta.

       6. Se o seu teste retornou `HTTP/1.1 202 Accepted`, acesse a interface do New Relic para ver uma consulta dos dados de carga útil de amostra usando o atributo span `service.name = Test Service A` ([aqui está um link para essa consulta](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing?launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIiwicXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJpbmRleFF1ZXJ5Ijp7ImNvbmRpdGlvblR5cGUiOiJJTkRFWCIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W119LCJzcGFuUXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJjb25kaXRpb25TZXRzIjpbeyJjb25kaXRpb25UeXBlIjoiU1BBTiIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W3siYXR0ciI6InNlcnZpY2UubmFtZSIsIm9wZXJhdG9yIjoiRVEiLCJ2YWx1ZSI6IlRlc3QgU2VydmljZSBBIn1dfV19fX0=)). Como a carga útil da amostra contém um atributo de erro, o amostrador de erros irá marcá-lo para manutenção. Se você modificar a carga útil para remover o atributo de erro, o amostrador aleatório poderá não optar por manter esse trace específico.

          <Callout variant="tip">
            O rastreamento pode levar até um minuto para aparecer na interface.
          </Callout>
     </Collapser>
   </CollapserGroup>

7. Marque a [configuração opcional](#follow-up-config) abaixo para que você possa retornar a ela depois de experimentar o Infinite Tracing.

8. Retorne às instruções originais de configuração distributed tracing para seu agente ou ferramenta de telemetria de terceiros e insira seu novo valor de endpoint na configuração de cada serviço.

9. Se você também possui [um instrumento de serviços com New Relic Browser, mobile e Lambda](#browser-mobile-lambda), siga as etapas dessa seção para selecionar suas fontes de dados (serviços, aplicativos ou entidade) no trace observer.

## Instrumento de serviços com New Relic Browser, mobile e Lambda [#browser-mobile-lambda]

Para criar um novo observador trace se você estiver usando New Relic Browser, mobile ou Lambda, siga etapas semelhantes às do [agente APM e integração de terceiros](#apm-and-third-party). A diferença entre essa configuração é que você não precisa inserir um novo do trace observador endpoint na configuração de cada serviço. Em vez disso, você conclui uma configuração separada no observador trace que especifica quais fontes de dados (serviços, aplicativos ou entidade) devem ter seus dados enviados para o observador trace do Infinite Tracing.

Se você já criou um observador de trace ao configurar outro tipo de serviço (por exemplo, um agente <InlinePopover type="apm"/>), você pode ignorar as etapas sobre como criar o observador de trace e ir direto para [Configuração inicial do observador de trace para browser, mobile e Lambda](#initial-config) para selecionar suas fontes de dados.

### Crie um observador trace [#create-for-mlb]

Se você ainda não configurou um observador trace , faça o seguinte:

1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**</DNT>.

2. Selecione uma conta no dropdown superior esquerdo. Se você tiver acesso a várias contas, certifique-se de estar na conta onde deseja ativar o Rastreamento infinito. Se não for possível adicionar um observador, provavelmente é porque permitimos apenas [um observador por região, por família de contas](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#infinite-architecture).

3. Se nenhum observador trace ainda estiver presente, clique em <DNT>**New trace observer**</DNT> para adicionar um, preencha as informações e clique em <DNT>**Create**</DNT>. Observe que oferecemos as seguintes regiões:

   * <DNT>
       **us-east-1 (US)**
     </DNT>

   * <DNT>
       **us-west-2 (US)**
     </DNT>

   * <DNT>
       **eu-central-1 (EU):**
     </DNT>

     Selecione esta região se você estiver coletando dados de solicitações da UE e tiver uma conta New Relic baseada na UE que gera relatórios no data center da UE.

   * <DNT>
       **eu-west-1 (US):**
     </DNT>

     Selecione esta região se você estiver coletando dados de solicitações da UE e tiver uma conta New Relic baseada nos EUA que gera relatórios no data center dos EUA.

   * <DNT>
       **ap-southeast-1 (US)**
     </DNT>

   * <DNT>
       **ap-southeast-2 (US)**
     </DNT>

   * <DNT>
       **us-east-2 (US, FedRAMP)**
     </DNT>

4. No dropdown <DNT>**Endpoints**</DNT>, copie o valor endpoint em <DNT>**For other integrations**</DNT> e prepare-o. Esse valor é referenciado em nossos exemplos de código como `YOUR_TRACE_OBSERVER_URL`. Isso é usado para testar o [observadortrace ](#sample-payload).

5. (Opcional) Para verificar se o observador trace está funcionando, recomendamos o envio de uma amostra de carga útil trace .

   <CollapserGroup>
     <Collapser
       id="sample-request"
       title="Enviar amostra de carga útil"
     >
       <Callout variant="important">
         Se você estiver usando dados no formato Zipkin, consulte [Enviar carga útil do Zipkin](/docs/understand-dependencies/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api#send-zipkin-curl).
       </Callout>

       Este teste envia uma carga útil trace de amostra com um trace e dois períodos de um serviço denominado `Test Service A`.

       Para enviar este exemplo de solicitação:

       1. Obtenha o <InlinePopover type="licenseKey"/>da conta para a qual deseja relatar dados e prepare-o.

       2. Copie a seguinte solicitação `curl` em um editor de texto:

          ```bash
          curl -i -H 'Content-Type: application/json' \
              -H 'Api-Key: YOUR_LICENSE_KEY' \
              -H 'Data-Format: newrelic' \
              -H 'Data-Format-Version: 1' \
              -X POST \
              -d '[
                  {
                      "common": {
                          "attributes": {
                              "environment": "staging"
                          }
                      },
                      "spans": [
                          {
                              "trace.id": "123456",
                              "id": "ABC",
                              "attributes": {
                                  "duration.ms": 12.53,
                                  "host": "host123.example.com",
                                  "name": "/home",
                                  "service.name": "Test Service A"
                              }
                          },
                          {
                              "trace.id": "123456",
                              "id": "DEF",
                              "attributes": {
                                  "error.message": "Invalid credentials",
                                  "service.name": "Test Service B",
                                  "host": "host456.example.com",
                                  "duration.ms": 2.97,
                                  "name": "/auth",
                                  "parent.id": "ABC"
                              }
                          }
                      ]
                  }
              ]' 'YOUR_TRACE_OBSERVER_URL'
          ```

       3. Insira seus próprios valores na solicitação `curl` :

          <table>
            <thead>
              <tr>
                <th>
                  Valor
                </th>

                <th>
                  Descrição
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  `YOUR_LICENSE_KEY`
                </td>

                <td>
                  Substitua isso pelo seu <InlinePopover type="licenseKey"/>.
                </td>
              </tr>

              <tr>
                <td>
                  `YOUR_TRACE_OBSERVER_URL`
                </td>

                <td>
                  Substitua pelo valor do endpoint <DNT>**For other integrations**</DNT> que você copiou na etapa anterior.
                </td>
              </tr>
            </tbody>
          </table>

       4. Copie a solicitação curl em um terminal e execute-a.

       5. O teste deve retornar `HTTP/1.1 202 Accepted`, indicando sucesso. Caso contrário, verifique os seguintes problemas comuns:

          * Confirme se você usou o valor [do endpoint](#endpoints)

            <DNT>
              [**For other integrations**](#endpoints)
            </DNT>

            [](#endpoints).

          * Confirme que você está usando aspas simples em torno de `YOUR_TRACE_OBSERVER_URL`.

          * Verifique se você está usando a chave de API correta.

       6. Se o seu teste retornou `HTTP/1.1 202 Accepted`, acesse a interface do New Relic para ver uma consulta dos dados de carga útil de amostra usando o atributo span `service.name = Test Service A` ([aqui está um link para essa consulta](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing?launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIiwicXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJpbmRleFF1ZXJ5Ijp7ImNvbmRpdGlvblR5cGUiOiJJTkRFWCIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W119LCJzcGFuUXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJjb25kaXRpb25TZXRzIjpbeyJjb25kaXRpb25UeXBlIjoiU1BBTiIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W3siYXR0ciI6InNlcnZpY2UubmFtZSIsIm9wZXJhdG9yIjoiRVEiLCJ2YWx1ZSI6IlRlc3QgU2VydmljZSBBIn1dfV19fX0=)). Como a carga útil da amostra contém um atributo de erro, o amostrador de erros irá marcá-lo para manutenção. Se você modificar a carga útil para remover o atributo de erro, o amostrador aleatório poderá não optar por manter esse trace específico.

          <Callout variant="tip">
            O rastreamento pode levar até um minuto para aparecer na interface.
          </Callout>
     </Collapser>
   </CollapserGroup>

### Configuração inicial do observador trace para browser, mobile e Lambda [#initial-config]

Depois de ter um observador trace , você precisa especificar quais fontes de dados (serviços, aplicativos ou entidade) devem ter seus dados enviados para o observador trace do Infinite Tracing. Antes de selecionar suas fontes de dados, familiarize-se com o seguinte:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="timing"
    title="Quanto tempo leva para ver meus dados na interface do New Relic?"
  >
    Ao selecionar fontes de dados do browser, dispositivos móveis e Lambda, você deve esperar um atraso de até três minutos antes de ver os resultados na interface do New Relic para esse observador trace . Isso permite que o observador trace espere o tempo suficiente para que essas fontes de dados de alta latência cheguem antes de tomar uma decisão de amostragem.

    Por exemplo, se você executar novamente o teste [de curl de amostra](#sample-request) depois de adicionar fontes de dados de browser, dispositivos móveis ou Lambda, deverá esperar um atraso antes que os dados apareçam na interface.
  </Collapser>

  <Collapser
    className="freq-link"
    id="multi-named-apps"
    title="E se meu aplicativo de browser estiver conectado a um agente APM que tenha vários nomes?"
  >
    Se seu aplicativo de browser estiver associado a um [aplicativo APM com vários nomes](/docs/apm/agents/manage-apm-agents/app-naming/use-multiple-names-app/), você só poderá selecionar um no grupo de aplicativos de browser com vários nomes ao escolher sua fonte de dados. Se você tentar selecionar o mesmo aplicativo com outro nome, a interface prompt que você escolha apenas um aplicativo de browser.
  </Collapser>

  <Collapser
    className="freq-link"
    id="lambda-sampling"
    title="Como funciona a amostragem Lambda?"
  >
    Por padrão, ao configurar camadas Lambda, você obtém automaticamente o Amostragem baseado em head. Quando você habilita o Infinite Tracing para Lambda, seus dados baseados em head do Amostragem também são amostrados pelo observador trace . O principal benefício de habilitar o Infinite Tracing para sua função do Lambda é garantir que seus spans sejam incluídos com spans de outros serviços rastreados pelo Infinite Tracing.
  </Collapser>
</CollapserGroup>

O procedimento abaixo é para usar a interface New Relic, mas se preferir uma abordagem programática, você pode [especificar fontes de dados com GraphQL](/docs/apis/nerdgraph/examples/configure-infinite-tracing-graphql/#updating-the-data-sources). Se você usa GraphQL, retorne a este procedimento e continue com a etapa 4 (configuração opcional) abaixo.

Para finalizar a configuração do browser, mobile e Lambda na interface:

1. Retorne ao aplicativo observador trace (<DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**</DNT>).

2. Para o observador trace , vá até o final da linha, clique no ícone de reticências <DNT>**...**</DNT> e, em seguida, clique em <DNT>**Edit mobile, browser, lambda sources**</DNT>.

   <img
     title="Screenshot showing menu when you click the ellipsis next to your trace observer"
     alt="Screenshot showing menu when you click the three dots next to your trace observer"
     src="/images/distributed-tracing_screenshot-crop_mobile-lambda-menu-.webp"
   />

3. Selecione as fontes de dados que deseja incluir, tendo em mente o seguinte:

   * Você pode usar o filtro para restringir suas opções.

   * Se o seu aplicativo de browser estiver conectado a um agente

     <InlinePopover type="apm"/>

     que tenha vários nomes, você poderá escolher apenas um nome.

   * Se uma entrada estiver cinza, ela já está sendo usada por outro observador trace .


4. Marque a [configuração opcional](#follow-up-config) abaixo para que você possa retornar a ela depois de experimentar o Infinite Tracing.
5. Visualize seus dados de rastreamento infinito na [interface distributed tracing do New Relic](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/).
6. Se você também possui [instrumento de serviços com agente APM ou ferramentas de telemetria de terceiros,](#apm-and-third-party) siga as etapas dessa seção para garantir que seus dados sejam reportados à New Relic.

## (Opcional) Configuração adicional para todos os tipos de serviço [#follow-up-config]

<Callout variant="tip">
  Você pode adiar essas configurações opcionais até depois de trabalhar com esse recurso por um tempo.
</Callout>

Você pode controlar o comportamento do observador trace com várias configurações. Aqui estão alguns dos recursos que você pode configurar:

* [Configurar monitoramento do observador trace ](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-trace-observer-monitoring/): permite ver a quantidade de rastreamentos vistos e retidos.
* [Configurar filtro de rastreamento de atributo de span](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-span-attribute-trace-filter/): crie regras de filtro personalizadas para spans.
* [Rastreamento infinito: Configurar filtro trace aleatório](/docs/distributed-tracing/infinite-tracing/infinite-tracing-configure-random-trace-filter): ajuste a porcentagem usada pelo filtro trace aleatório.
