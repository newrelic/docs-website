---
title: Práticas recomendadas para integração usuário
tags:
  - Best practices
  - Integrations
metaDescription: Here are some best practices for controlling how you expose your New Relic data when you're using an integration.
freshnessValidatedDate: '2024-04-24T00:00:00.000Z'
translationType: machine
---

Como administrador da New Relic, você deve operar sua organização New Relic com o princípio do menor privilégio. Este princípio é um conceito de segurança no qual um usuário deve ter acesso apenas aos dados, sistemas e recursos específicos necessários para concluir uma tarefa necessária para a organização. Seguindo este princípio, você pode reduzir o risco de acesso não autorizado a dados confidenciais. Isso inclui a atribuição de permissões com base nas funções e responsabilidades do trabalho. Em uma [organização New Relic ](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure/), o acesso baseado em conta permite controlar quais informações estão disponíveis para o usuário em sua organização. Isso garante que os dados confidenciais permaneçam seguros e que somente pessoal autorizado possa visualizá-los.

Lidar com integração com sistemas de terceiros pode complicar o acesso a aplicativos. Por exemplo, o usuário no Atlassian Jira pode não ter acesso ao New Relic. O sistema também pode não ter permissões ou controles centralizados. Aprenda sobre as práticas recomendadas para compartilhamento de dados nesta página.

## Escopo da conta e da chave de API [#account-api-key-scope]

A primeira coisa a considerar ao controlar o acesso aos dados do New Relic é o escopo da sua conta. Sua organização pode ter múltiplas contas e o usuário terá acesso às contas. Isso permite limitar os dados que esses usuários podem ver. Se a sua organização tiver apenas uma conta, isso significa que todos os utilizadores têm acesso à mesma informação. Nessa situação, talvez você queira expor apenas alguns dados por meio de uma integração.

Algumas integrações com New Relic aproveitam a capacidade de gerar uma chave de API para expor seus dados a outros sistemas (por exemplo, a integração Atlassian). Se um usuário tiver acesso a 3 de 5 contas em uma organização New Relic, a chave de API gerada terá acesso a essas mesmas 3 contas.

<Callout variant="important">
  Observe que uma chave de API herda as permissões da conta do usuário que a gerou.
</Callout>

É importante entender essa distinção ao configurar uma integração. Por exemplo, você pode querer ter certeza de gerar uma chave de API de um usuário que tenha as permissões corretas. Você pode querer que o usuário tenha acesso apenas a determinadas contas no aplicativo. Isso limita o que eles podem ver e compartilhar com outras pessoas. Por exemplo, digamos que você tenha mais usuários em seu aplicativo Atlassian do que em suas contas New Relic e configure a integração Atlassian. O usuário na integração Atlassian poderá ver os dados New Relic compartilhados com o Atlassian no aplicativo Atlassian, independentemente de esse usuário ter acesso às contas correspondentes New Relic .

## Aproveitamento do usuário de integração [#integration-user-leverage]

Ao configurar a integração de terceiros com New Relic, é altamente recomendável usar uma integração de usuário dedicada. Isso significa [criar um usuário New Relic](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions/) apenas para uma integração específica. Você pode dar a esse usuário um nome que represente a integração em questão. Uma grande vantagem disso é que você não precisa usar seu acesso de administrador para a integração. Basta criar o novo usuário e atribuir apenas as contas que deseja expor à integração. Em seguida, gere uma chave de API para o usuário de integração. Isso permite que a chave de API usada para uma integração exponha apenas os detalhes da conta que você deseja usar para a integração. Ele também permite que você dissocie seu acesso pessoal ao New Relic daquele da integração.
