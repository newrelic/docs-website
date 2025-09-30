---
title: Configuração do aplicativo Microsoft Entra ID SCIM/SSO
tags:
  - Accounts
  - Accounts and billing
  - Automated user management
metaDescription: 'With New Relic, you can set up automated user provisioning and management for Azure Active Directory (AD) SSO.'
freshnessValidatedDate: never
translationType: machine
---

Nosso [gerenciamento automatizado de usuários](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign) permite que você importe e configure seus usuários e grupos New Relic do seu provedor de identidade via SCIM. Este guia fornece detalhes específicos do Azure AD sobre como configurar o aplicativo New Relic Azure AD SCIM/SSO.

## Requisitos

Antes de usar este guia, leia a [visão geral dos requisitos e procedimentos](/docs/assign-users-automated-provisioning-allow-single-sign#requirements).

Observe que essas instruções exigem alternar entre seu provedor de identidade e a New Relic.

## Etapa 1. Crie um domínio de autenticação e habilite o SCIM [#auth-domain]

Para saber como acessar a interface de domínio de autenticação New Relic, consulte [Domínio de autenticação](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#ui).

Se ainda não tiver um, crie um novo domínio de autenticação para seu usuário provisionado por SCIM clicando em <DNT>**+ Add new**</DNT>.

Para esse domínio de autenticação, em <DNT>**Source of users**</DNT>, selecione <DNT>**SCIM**</DNT>. Copie e salve o token da API para uso posterior. Observe que isso será mostrado apenas uma vez.

## Etapa 2. Configurar o aplicativo New Relic do Azure [#azure-app]

Em seguida, você configurará o aplicativo New Relic SAML/SCIM do Azure. O Microsoft Entra ID, anteriormente conhecido como Azure AD, fornece uma galeria de aplicativos, que inclui diversas integrações para o Microsoft Entra ID, incluindo aquelas que a New Relic oferece. Para configurar isso:

1. Vá para o centro de administração do Microsoft Entra ID e entre, se necessário. [aad.portal.azure.com/](https://aad.portal.azure.com/)

2. Clique em

   <DNT>
     **Applications**
   </DNT>

   no menu esquerdo.

3. No menu suspenso, clique em

   <DNT>
     **Enterprise applications**
   </DNT>

   .

4. Clique em

   <DNT>
     **+New Application**
   </DNT>

   .

5. Encontre nosso aplicativo SCIM/SSO digitando

   <DNT>
     **New Relic**
   </DNT>

   na caixa de pesquisa de nome e clique no aplicativo

   <DNT>
     **New Relic by organization**
   </DNT>

   (não em

   <DNT>
     **New Relic by account**
   </DNT>

   ).

6. Clique em

   <DNT>
     **Create**
   </DNT>

   .

## Passo 3. Configurar conexão [#configure]

Configure o aplicativo SCIM/SSO da New Relic para provisionar automaticamente seu usuário na New Relic.

1. Na página do aplicativo New Relic SCIM/SSO, clique no link

   <DNT>
     **Provisioning**
   </DNT>

   na barra lateral.

2. No painel principal, clique em

   <DNT>
     **Get started**
   </DNT>

   .

3. Na lista de seleção

   <DNT>
     **Provisioning Mode**
   </DNT>

   , escolha

   <DNT>
     **Automatic**
   </DNT>

   .

4. Na [interface de domínio de autenticação](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more) do New Relic, configure um novo domínio com [SCIM habilitado](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more#source-users).

5. No aplicativo New Relic SCIM/SSO do Azure AD, na seção

   <DNT>
     **Admin credentials**
   </DNT>

   , preencha os campos

   <DNT>
     **Tenant URL**
   </DNT>

   e

   <DNT>
     **Secret token**
   </DNT>

   com os valores fornecidos na interface do domínio de autenticação do New Relic.

6. Para verificar se você consegue se conectar ao New Relic, clique em

   <DNT>
     **Test Connection**
   </DNT>

   .

7. Ao ver uma mensagem indicando verificação bem-sucedida, clique em

   <DNT>
     **Save**
   </DNT>

   .

O aplicativo New Relic SCIM/SSO agora pode se conectar ao New Relic. Continue com a seção a seguir para configurar as regras de provisionamento.

## Etapa 4. Configurar regras de provisionamento [#configure-rules]

Inicialmente, nada está configurado para ser enviado ao New Relic. Você deve configurar o Microsoft Entra ID para enviar alterações para criação, atualizações e desativação de usuários.

Vá para a página <DNT>**Provisioning**</DNT> e conclua o seguinte:

1. Na página de visão geral, clique em <DNT>**Edit attribute mappings**</DNT>.

2. Expanda a seção <DNT>**Mappings**</DNT> .

3. Clique em <DNT>**Provision Azure Active Directory Users**</DNT>.

4. Verifique se as caixas de seleção <DNT>**Target Object Actions**</DNT>, <DNT>**Create**</DNT>, <DNT>**Update**</DNT> e <DNT>**Delete**</DNT> estão todas marcadas.

5. Verifique se <DNT>**Attribute Mappings**</DNT> está correto para seu ambiente. Cada um dos atributos da New Relic mostrados na lista deve receber um valor.

   <Callout variant="tip">
     Certifique-se de que os atributos do Azure Active Directory mostrados na lista à esquerda sejam boas fontes de informações a serem enviadas para a New Relic. Em particular, nem todos os ambientes definem o atributo <DNT>**mail**</DNT> . Se o seu ambiente não definir o atributo <DNT>**mail**</DNT> , <DNT>**userPrincipalName**</DNT> poderá ser uma boa alternativa.
   </Callout>

6. Deixe a chave de <DNT>**Enabled**</DNT> definida como <DNT>**No**</DNT> até concluir a configuração de usuário e grupo na próxima seção. Quando toda a configuração estiver pronta, retorne a esta página e defina a chave para <DNT>**Yes**</DNT>.

7. Clique em <DNT>**Save**</DNT>.

Aqui está um exemplo de página de mapeamento de atributo preenchida com os valores padrão. Seus valores podem ser configurados de forma diferente dependendo da sua situação.

<img
  title="Azure_AD_Provisioning_Attribute_Mapping.png"
  alt="Screen capture showing how to set attributes."
  src="/images/accounts_screenshot-crop_Azure-AD-attribute-mapping.webp"
/>

Depois de salvar as regras de provisionamento, o aplicativo New Relic SCIM/SSO estará pronto para provisionar quaisquer alterações feitas no usuário atribuído ao aplicativo. Continue com a seção a seguir para atribuir usuários e grupos ao aplicativo New Relic SCIM/SSO.

## Passo 5. Defina o tipo de usuário dos seus usuários [#user-type]

Quando seus usuários são provisionados no New Relic, você pode vê-los na [interface do usuário<DNT>**User management**</DNT> ](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where).

Se você estiver adicionando usuário ao New Relic via SCIM, mas **não** gerenciando seu [tipo de usuário](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) via SCIM, eles começarão como [usuário básico](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type). Para atualizar o usuário, você tem duas opções:

* Use a [interface de gerenciamento de usuários](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#edit-user-type) para editar usuário.
* [Configure o aplicativo Azure para gerenciar o tipo de usuário.](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#manage-user-type-scim)

## Passo 6. Atribuir acesso ao grupo [#assign-users]

Depois que essas etapas forem concluídas, você poderá ver seu usuário no New Relic acessando a [interface de gerenciamento de usuários](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where). Agora que seu usuário está presente no New Relic, você deve conceder a ele acesso a funções e contas. Caso isso não seja feito, seu usuário ainda não terá acesso ao New Relic. Para saber como fazer isso, veja:

* [Como funciona o acesso do usuário](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)
* O [tutorial de gerenciamento de usuários](/docs/accounts/accounts-billing/new-relic-one-user-management/tutorial-add-new-user-groups-roles-new-relic-one-user-model/)

## Etapa 7. Configurar SAML SSO [#saml]

Para ativar o SSO SAML para seu usuário, consulte as [instruções SAML](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#authentication).
