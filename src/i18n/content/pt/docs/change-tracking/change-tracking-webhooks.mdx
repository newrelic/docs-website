---
title: Notifique sua equipe sobre a implantação do aplicativo APM
tags:
  - APM
metaDescription: 'After you set up the changes you want to monitor, you can use a webhook to notify your colleagues about the impacts of those changes.'
freshnessValidatedDate: '2023-08-29T00:00:00.000Z'
translationType: machine
---

Depois de registrar uma implantação para uma entidade de aplicativo APM, você poderá manter sua equipe informada sobre essas alterações por meio do uso de um webhook. Eles estão disponíveis se você registrar sua implantação usando o recurso Monitoramento de Alterações ou a [API REST](/docs/apm/apm-ui-pages/events/record-deployments/#api-instructions) mais antiga.

## Permissões necessárias [#requirements]

As configurações de notificação do Monitoramento de Alterações requerem [permissões](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions) específicas:

* Para `create` o webhook: `Modify` permissões para `Applied intelligence > Destinations` e `Applied intelligence > Channels`.
* Para `view` e `test` o webhook: `View` permissões para `Applied intelligence > Destinations` e `Applied intelligence > Channels`.
* Para `modify` o webhook: `View` permissões para `Applied intelligence > Destinations` e `Applied intelligence > Channels` e `Modify` em `Applied intelligence > Destinations`.
* Para `delete` o webhook: `Delete` permissões para `Applied intelligence > Destinations` e `Applied intelligence > Channels`.

## Obtenha o URL de destino do seu webhook [#get-webhook-url]

Você pode enviar dados de implantação para vários destinos de webhook. Siga as instruções da ferramenta que você está usando para obter o URL do webhook. Assim que tiver o URL, conclua as etapas da próxima seção para configurar a notificação do webhook.

Se você estiver usando o Slack, siga estas instruções para configurar o aplicativo legado New Relic <InlinePopover type="alerts"/>:

1. Login em sua conta do Slack como administrador e vá para

   <DNT>
     **Apps**
   </DNT>

   .

2. Procure por

   <DNT>
     **New Relic Alerts**
   </DNT>

   e clique nesse bloco.

3. Na listagem

   <DNT>
     **New Relic Alerts**
   </DNT>

   , clique no botão

   <DNT>
     **Configuration**
   </DNT>

   abaixo do ícone New Relic.

4. Clique na guia

   <DNT>
     **Configuration**
   </DNT>

   abaixo do título

   <DNT>
     **New Relic Alerts**
   </DNT>

   .

5. Na guia

   <DNT>
     **Configuration**
   </DNT>

   , clique no ícone de lápis.

6. Role para baixo até a seção

   <DNT>
     **Webhook URL**
   </DNT>

   e clique em

   <DNT>
     **Copy URL**
   </DNT>

   .

## Configurar notificação de webhook para alterações rastreadas [#configure-webhook]

Insira o URL do webhook na interface do New Relic:

1. Acesse a tela de configuração da notificação de implantação:

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/) > (user menu) > Administration > Integrations > Deploy notifications**
   </DNT>

   .

2. Cole o URL do seu webhook no campo

   <DNT>
     **Webhook URL**
   </DNT>

   e clique em

   <DNT>
     **Save**
   </DNT>

   .

3. Clique em

   <DNT>
     **Send a test request**
   </DNT>

   para enviar um exemplo de carga útil com dados artificiais para o URL do seu webhook.

   <img
     style={{align: "left"}}
     title="A screenshot showing how to test the webhook"
     alt="A screenshot showing how to test the webhook"
     src="/images/tracking_screenshot-crop_webhook_test.webp"
   />

4. Em

   <DNT>
     **Toggle this webhook**
   </DNT>

   , você pode desativar ou reativar a notificação do webhook deslizando o botão de alternância.

5. Para excluir permanentemente a configuração de notificação do webhook, clique em

   <DNT>
     **Delete this webhook**
   </DNT>

   .

## Estrutura de carga útil de notificação [#payload-structure]

Quando sua notificação de implantação estiver ativada e você começar a rastrear uma alteração, seu webhook receberá uma solicitação `POST` com uma carga útil do tipo `application/x-www-form-urlencoded`. As chaves e os valores são codificados em tuplas de valor principal separadas por um `&`, com um símbolo `=` entre a chave e o valor. Caracteres não alfanuméricos em chaves e valores serão codificados por URL.

Serão enviadas as seguintes chaves e valores, com base no atributo da implantação e da entidade aplicação APM que foi implantada.

<table>
  <thead>
    <tr>
      <th>
        Chave
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `created_at`
      </td>

      <td>
        O timestamp da implantação no formato ISO 8601
      </td>
    </tr>

    <tr>
      <td>
        `application_name`
      </td>

      <td>
        O nome da entidade do aplicativo APM
      </td>
    </tr>

    <tr>
      <td>
        `account_name`
      </td>

      <td>
        O nome da conta que possui a entidade do aplicativo APM
      </td>
    </tr>

    <tr>
      <td>
        `changelog`
      </td>

      <td>
        Uma lista de alterações incluídas na implantação
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        Uma descrição da implantação
      </td>
    </tr>

    <tr>
      <td>
        `revision`
      </td>

      <td>
        A versão do software implantar
      </td>
    </tr>

    <tr>
      <td>
        `deployment_url`
      </td>

      <td>
        Um link para a interface de implantação da entidade solicitante do APM
      </td>
    </tr>

    <tr>
      <td>
        `deployed_by`
      </td>

      <td>
        O usuário que implanta a aplicação
      </td>
    </tr>
  </tbody>
</table>
