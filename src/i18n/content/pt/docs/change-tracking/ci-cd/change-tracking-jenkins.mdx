---
title: Acompanhe as alterações usando Jenkins
tags:
  - APM
  - APM UI pages
  - Events
  - Browser
  - Mobile
  - NerdGraph
metaDescription: Here's how to use Jenkins to designate what you want to capture with change tracking.
freshnessValidatedDate: never
translationType: machine
---

O recurso Monitoramento de Alterações permite designar alterações que você deseja monitor para ver como elas afetam seus clientes e sistemas. Embora você possa designar quais alterações deseja monitor usando GraphQL ou nossa CLI, você também pode registrar alterações usando pipelines no Jenkins.

Um pipeline chamará qualquer build que você especificar e também passará variáveis de ambiente adicionais para o processo de build. Isso preenche os dados necessários para que sua implantação apareça em gráficos no New Relic. Você verá os resultados na interface do Monitoramento de Alterações e poderá usar essas informações para entender o impacto das alterações na integridade da entidade.

## Pré-requisitos [#prereq]

Para instalar o plug-in Jenkins, você precisará de:

* Jenkins 1.580.1 ou mais recente
* Privilégios de administrador do Jenkins

## Instale o plug-in Jenkins [#install]

1. Ao abrir o Jenkins, vá para <DNT>**Manage Jenkins**</DNT> e depois <DNT>**Plugins**</DNT>.

   <img
     title="Screenshot showing where to find Manage Jenkins"
     alt="Screenshot showing where to find Manage Jenkins"
     src="/images/tracking_screenshot-crop_jenkins-home-page.webp"
   />

2. Clique em <DNT>**Available plugins**</DNT> e pesquise `newrelic-deployment-notifier`. Clique em <DNT>**Install**</DNT>.

   <img
     title="Screenshot showing how to install the plugin"
     alt="Screenshot showing how to install the plugins"
     src="/images/tracking_screenshot-crop_jenkins-install-notifier.webp"
   />

3. Uma nova página aparece com o andamento da sua instalação. Nenhuma reinicialização é necessária para o plug-in.

## Criar ação pós-construção [#create-post--build-action]

Para adicionar o Notificador de implantação New Relic como uma ação pós-compilação na configuração do trabalho de compilação do Jenkins:

1. Na configuração do trabalho do Jenkins, vá para

   <DNT>
     **Post-build Actions section**
   </DNT>

   , clique em

   <DNT>
     **Add post-build action**
   </DNT>

   e selecione

   <DNT>
     **New Relic Deployment Notifications**
   </DNT>

   .

<img
  style={{ align: "left" }}
  title="Screenshot showing the Add post-build action button, with the dropdown menu showing New Relic Deployment Notifications"
  alt="Screenshot showing the Add post-build action button, with the dropdown menu showing New Relic Deployment Notifications"
  src="/images/tracking_screenshot-crop_jenkins--postbuild.webp"
/>

2. Crie uma credencial de nome de usuário/senha para a [chave de API](/docs/apis/intro-apis/new-relic-api-keys/) do usuário. Digite a chave como senha.

   <img
     style={{ align: "left" }}
     title="Screenshot showing credential creation dialog"
     alt="Screenshot showing credential creation dialog"
     src="/images/tracking_screenshot-crop_jenkins--credential.webp"
   />

3. Selecione uma entidade na lista dropdown .

   <img
     style={{align: "left"}}
     title="Screenshot showing how to find Deployment Notifications"
     alt="Screenshot showing how to find Deployment Notifications"
     src="/images/tracking_screenshot-crop_jenkins--validcredential.webp"
   />

4. Adicione o valor `Version` ou `Revision` obrigatório e qualquer um dos valores opcionais. Você pode [usar variáveis de ambiente](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#using-environment-variables) nesses campos, como `${BUILD_NUMBER}`.

   <img
     style={{ align: "left" }}
     title="Screenshot showing optional fields"
     alt="Screenshot showing optional fields"
     src="/images/tracking_screenshot-crop_jenkins--optional.webp"
   />

   <table>
     <thead>
       <tr>
         <th style={{ width: "200px" }}>
           Campo
         </th>

         <th>
           Descrição
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td>
           Descrição
         </td>

         <td>
           Insira uma descrição do que você está rastreando.
         </td>
       </tr>

       <tr>
         <td>
           Revisão
         </td>

         <td>
           Revisão para a implantação. `${BUILD_NUMBER}` pode ser um bom valor aqui.
         </td>
       </tr>

       <tr>
         <td>
           Registro de alterações
         </td>

         <td>
           Referência à lista de alterações ocorridas na implantação.
         </td>
       </tr>

       <tr>
         <td>
           Comprometer-se
         </td>

         <td>
           Um hash aplicado para fazer referência ao ID do commit.
         </td>
       </tr>

       <tr>
         <td>
           Link profundo
         </td>

         <td>
           Um link direto para o trabalho do Jenkins ou qualquer outra referência à implantação.
         </td>
       </tr>

       <tr>
         <td>
           EntityGuid
         </td>

         <td>
           A entidade do aplicativo em referência à implantação (consulte [Mais sobre o GUID do aplicativo](#guid)).
         </td>
       </tr>

       <tr>
         <td>
           Tipo de implantação
         </td>

         <td>
           O tipo de implantação que está sendo conduzida.
         </td>
       </tr>

       <tr>
         <td>
           ID do grupo
         </td>

         <td>
           Um identificador para fazer referência a um cluster de alterações.
         </td>
       </tr>

       <tr>
         <td>
           Timestamp
         </td>

         <td>
           Timestamp opcional no formato longo Unix Epoch. Se não for fornecido, definiremos o horário em que recebemos a solicitação, que será o número de milissegundos desde a Época Unix.
         </td>
       </tr>

       <tr>
         <td>
           Versão
         </td>

         <td>
           Versão do que está sendo implantado. `${BUILD_NUMBER}` pode ser um bom valor aqui.
         </td>
       </tr>

       <tr>
         <td>
           Usuário
         </td>

         <td>
           O usuário que conduz a implantação. <DNT>**Tip:**</DNT> Você pode instalar [o plug-in Build User Vars](https://wiki.jenkins.io/display/JENKINS/Build+User+Vars+Plugin) para ter variáveis de ambiente referentes ao usuário Jenkins, e pode usá-las neste campo, como `${BUILD_USER}`.

           <img
             style={{ align: "left" }}
             title="Screenshot showing User field set to ${BUILD_USER}"
             alt="Screenshot showing User field set to ${BUILD_USER}"
             src="/images/tracking_screenshot-crop_jenkins--user.webp"
           />
         </td>
       </tr>
     </tbody>
   </table>

5. (Opcional) Se este trabalho do Jenkins afetar múltiplas entidades, elas também poderão ser adicionadas para receber notificações. Clique no botão <DNT>**Add another notification**</DNT> para adicionar mais aplicativos.

## Qual é o próximo? [#whats-next]

Depois de designar as alterações que deseja rastrear, você pode analisar o efeito dessas alterações na interface do New Relic. Para obter detalhes, consulte [Como visualizar e analisar suas alterações no New Relic](/docs/change-tracking/change-tracking-view-analyze).

## Remova o plug-in [#remove-plugin]

1. Na página

   <DNT>
     **Plugins**
   </DNT>

   , clique em

   <DNT>
     **Installed plugins**
   </DNT>

   .

2. Pesquise por `newrelic-deployment-notifier`.

3. Clique no `X` vermelho.

   <img
     title="Screenshot to remove the plugin"
     alt="Screenshot to remove the plugin"
     src="/images/tracking_screenshot-crop_jenkins-rollback.webp"
   />
