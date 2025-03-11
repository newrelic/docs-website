---
title: Rastreie alterações usando NerdGraph (GraphQL)
tags:
  - APM
  - APM UI pages
  - Events
  - Browser
  - Mobile
  - NerdGraph
metaDescription: Here's how to use NerdGraph (GraphQL) to designate what you want to capture with change tracking.
freshnessValidatedDate: never
translationType: machine
---

O recurso Monitoramento de Alterações permite acompanhar o efeito de diversas alterações em seus clientes e sistemas. Por exemplo, se você fizer alguma implantação, poderá utilizar o recurso Monitoramento de Alterações para monitor os resultados nos gráficos da interface New Relic. Você também terá acesso a recursos que ajudam a entender os efeitos dessas mudanças.

Em vez de designar quais mudanças você deseja monitor usando nossa CLI ou uma integração CI/CD, você pode fazer a mesma coisa usando mutações GraphQL e consultar através de nossa API NerdGraph.

Para obter informações gerais sobre como usar o NerdGraph, consulte [Introdução ao NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph).

## Requisitos [#api-requirements]

Os requisitos incluem:

* [Requisitos do NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/#authentication)
* permissões de usuário: Qualquer [tipo de usuário](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) pode usar o NerdGraph para criar marcador de implantação e rastrear outras alterações, mas apenas usuários completos da plataforma podem acessar as experiências de interface do usuário com curadoria de Monitoramento de Alterações.

## Entenda os campos no NerdGraph Explorer [#field-definitions]

Os campos que você usará em sua consulta GraphQL se enquadram nestes tipos gerais:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="required-fields"
    title="Atributo obrigatório"
  >
    Para rastrear uma alteração, como uma implantação, você deve definir o seguinte:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Atributo
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `entityGuid`
          </td>

          <td>
            O valor `entityGuid` é o identificador exclusivo atribuído pela New Relic aos componentes do seu sistema durante os processos de instrumentação e configuração. Para obter mais informações sobre a entidade New Relic e como encontrar GUIDs de entidade, consulte este [guia](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/#find).
          </td>
        </tr>

        <tr>
          <td>
            `version`
          </td>

          <td>
            O valor do atributo version pode ser qualquer coisa, embora recomendamos usar o número de versão definido durante o processo de construção. Para ver um exemplo de como isso pode ser feito, consulte nossa [documentação do plug-in de implantação do Jenkins](#jenkins-markers) abaixo. Se você já informa números de versão para New Relic <InlinePopover type="mobile"/>ou por algum outro meio, recomendamos usar o mesmo aqui para se preparar para o próximo recurso que permitirá facetar e correlacionar dados por versão.
          </td>
        </tr>
      </tbody>
    </table>

    <Callout variant="tip">
      Se você estiver migrando da API REST herdada, precisará começar a usar o GUID da entidade do seu aplicativo em vez do appID. Você pode encontrar facilmente o GUID no NerdGraph com esta consulta:

      ```graphql
      {
        actor {
          entitySearch(query: "domainId=INSERT_YOUR_APPID") {
            count
            query
            results {
              entities {
                entityType
                name
                guid
              }
            }
          }
        }
      }
      ```
    </Callout>
  </Collapser>

  <Collapser
    className="freq-link"
    id="optional-fields"
    title="Atributo opcional"
  >
    Você pode definir alguns atributos opcionais e úteis para adicionar contexto à mudança que você está acompanhando. Esses atributos também podem viabilizar determinado recurso de Monitoramento de Alterações.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Atributo
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `changelog`
          </td>

          <td>
            Você pode enviar um URL ou qualquer string para o atributo changelog. Por exemplo: `changelog: "Added: /v2/deployments.rb, Removed: None"` ou `changelog: "https://github.com/nodejs/node/blob/v4.2.3/CHANGELOG.md"`.
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            Você pode enviar qualquer string para o atributo de descrição. Por exemplo: `description: "Added a deployments resource to the v2 API"`.

            O atributo description pode ser onde você escolhe inserir informações codificadas dos seus processos internos de gestão de implantação. Você pode usar IDs ou tags atribuídos a cada confirmação ou implantação que descreva o aspecto organizacional ou comercial do trabalho, por exemplo, `EU_MAINT_DMARK_v101`.
          </td>
        </tr>

        <tr>
          <td>
            `commit`
          </td>

          <td>
            Você pode enviar qualquer string para o atributo `commit` e sugerimos usar o SHA de confirmação associado à implantação ou alteração, por exemplo, `commit: "r3ws4sa43f"`.
          </td>
        </tr>

        <tr>
          <td>
            `deepLink`
          </td>

          <td>
            Você pode enviar qualquer URL para o atributo `deepLink` . Sugerimos usar um que ajude alguém a avaliar uma mudança no New Relic para chegar rapidamente a um local onde possa tomar outras medidas, como Jenkins, ArgoCD ou GitHub Actions. Aqui está um exemplo: `deepLink: "http://localhost:8080/job/PipelineV2/configure"`.
          </td>
        </tr>

        <tr>
          <td>
            `deploymentType`
          </td>

          <td>
            Você pode dividir as alterações relacionadas à implantação em diferentes tipos. Esses tipos se alinham com técnicas de implantação comuns, mas também existe um tipo `OTHER` . Os tipos incluem:

            * `BASIC`
            * `BLUE_GREEN`
            * `CANARY`
            * `ROLLING`
            * `SHADOW`
            * `OTHER`

              Atribuir um tipo para cada implantação ajudará você a filtrar os resultados nas interfaces de Monitoramento de Alterações e nos resultados da consulta NerdGraph/NRQL.
          </td>
        </tr>

        <tr>
          <td>
            `groupId`
          </td>

          <td>
            Você pode querer agrupar a implantação nos casos em que estiver fazendo uma série de alterações em uma ou mais entidades ou liberando muitas alterações em muitas entidades do seu sistema. Ao definir o mesmo valor de atributo `groupId` para cada implantação relacionada, você pode ver essas alterações juntas com mais facilidade nas interfaces do New Relic ou usar o `groupId` para restringir os resultados da consulta.

            O `groupId` pode ser qualquer string de sua preferência, e você pode continuar adicionando implantações a um grupo após o primeiro uso do `groupId` (caso queira relacionar esta implantação com outra que aconteceu semanas ou até meses atrás) .

            <Callout variant="tip">
              Além de usar o `groupId` para relacionar muitas implantações, você também pode usar o atributo para definir alterações de longa duração. Por exemplo, duas implantações com o mesmo `groupId` poderiam colocar entre parênteses um período em que os alertas foram suprimidos ou alguma migração estava ocorrendo.
            </Callout>
          </td>
        </tr>

        <tr>
          <td>
            usuário
          </td>

          <td>
            Pode ser qualquer sequência, por exemplo, `user: "datanerd@example.com"`.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    className="freq-link"
    id="nr-attributes"
    title="Atributo definido por New Relic"
  >
    New Relic define automaticamente o atributo `timestamp` e `deploymentId` . Você pode fornecer um valor `timestamp` como substituição, mas `deploymentId` sempre será gerado pelo New Relic para garantir a exclusividade.

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Atributo
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Timestamp
          </td>

          <td>
            A hora em que a chamada do NerdGraph foi recebida. Você pode fornecer uma substituição aqui como o número de milissegundos desde a época do Unix. Por exemplo: `timestamp: 1032480000000`.

            <Callout variant="important">
              Há uma limitação firme aplicada de que todo carimbo de data/hora deve ser +/- 24 horas do horário atual em que a chamada NerdGraph é recebida ou a carga útil será rejeitada.
            </Callout>
          </td>
        </tr>

        <tr>
          <td>
            `deploymentId`
          </td>

          <td>
            Um identificador exclusivo gerado quando a implantação é registrada. Embora você não possa definir `deploymentId`, você pode usá-lo em sua consulta NerdGraph e NRQL para localizar uma implantação específica. Aqui está um exemplo: `deploymentId: "8a3a594c-e726-4bc2-8078-26dffec9a3d8"`.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Crie um marcador de Monitoramento de Alterações usando uma mutação [#mutation-examples]

Para registrar uma alteração, como uma implantação, você precisará incluir os campos obrigatórios e, em seguida, decidir se deseja incluir algum campo opcional.

Aqui estão alguns exemplos de mutações do GraphQL que mostram algumas maneiras de criar marcador de implantação:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="simple-mutation"
    title="Mutação apenas com campos obrigatórios"
  >
    ```graphql
    mutation {
      changeTrackingCreateDeployment(
        deployment: {
          version: "0.0.1",
          entityGuid: "INSERT_YOUR_GUID"
        }
      )
        {
          deploymentId
          entityGuid
        }
    }
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="optional-mutation-example"
    title="Mutação com campos opcionais"
  >
    ```graphql
    mutation {
      changeTrackingCreateDeployment(
        deployment: {
          version: "0.0.1",
          user: "INSERT_YOUR_NAME",
          timestamp: INSERT_MS_EPOCH_TIMESTAMP,
          groupId: "78641",
          entityGuid: "INSERT_YOUR_GUID",
          description: "create a new marker",
          deploymentType: BASIC,
          deepLink: "example.com/path",
          commit: "INSERT_A_COMMIT_HASH",
          changelog: "test log"
        }
      )
      {
        changelog
        commit
        deepLink
        deploymentId
        deploymentType
        description
        entityGuid
        groupId
        timestamp
        user
        version
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Qual é o próximo [#whats-next]

Depois de usar mutações para designar as alterações que deseja rastrear, você pode analisar o efeito dessas alterações na interface do New Relic:

* Consulte suas alterações: você pode escrever sua própria consulta GraphQL ou NRQL para ver detalhes sobre as alterações que você está rastreando. Para obter detalhes, consulte [consultar dados de alteração](/docs/change-tracking/change-tracking-view-analyze/#query-deployments).
* Use nossos gráficos selecionados: para obter detalhes, consulte [Como visualizar e analisar suas alterações no New Relic](/docs/change-tracking/change-tracking-view-analyze).
