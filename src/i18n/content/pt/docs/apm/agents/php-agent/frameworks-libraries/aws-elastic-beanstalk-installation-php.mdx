---
title: Instalação do AWS Elastic Beanstalk para PHP
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: Directions for installing the New Relic PHP agent with Elastic Beanstalk.
freshnessValidatedDate: never
translationType: machine
---

O AWS [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk) é um serviço dinâmico que permite fácil implantação e escalabilidade para seu aplicativo PHP. Siga estas instruções para instalar o AWS com o agente PHP da New Relic.

<Callout variant="tip">
  Para obter mais informações sobre como usar ferramentas da Amazon com New Relic, consulte [Usuário da Amazon Web Services (AWS)](/docs/accounts-partnerships/partnerships/partner-based-installation/amazon-web-services-aws-users).
</Callout>

## Requisitos

Antes de instalar o agente PHP da New Relic, certifique-se de ter uma [conta Amazon Web Services](http://aws.amazon.com/elasticbeanstalk/ "O link abre em uma nova janela") compatível. Além disso, para qualquer instalação do New Relic, você precisará do New Relic <InlinePopover type="licenseKey"/>. Esta é uma string hexadecimal de 40 caracteres que a New Relic fornece quando você [se inscreve](http://newrelic.com/signup "O link abre em uma nova janela") em sua conta.

## instalação

Para instalar o agente PHP da New Relic no AWS Elastic Beanstalk:

1. Na pasta `.ebextensions` dentro do seu aplicativo Elastic BeanStalk, crie um novo arquivo chamado `newrelic.config`.

2. Adicione o seguinte conteúdo ao arquivo:

   ```yml
   packages:
     yum:
       newrelic-php5: []
     rpm:
       newrelic: INSERT_LINK_TO_REPO
   commands:
     configure_new_relic:
       command: newrelic-install install
       env:
         NR_INSTALL_SILENT: true
         NR_INSTALL_KEY: INSERT_LICENSE_KEY
   ```

3. Substitua `INSERT_LINK_TO_REPO` pelo URL do repositório apropriado.

   * Para sistemas de 32 bits, use `http://yum.newrelic.com/pub/newrelic/el5/i386/newrelic-repo-5-3.noarch.rpm`
   * Para sistemas de 64 bits, use `http://yum.newrelic.com/pub/newrelic/el5/x86_64/newrelic-repo-5-3.noarch.rpm`

4. Substitua `INSERT_LICENSE_KEY` pela sua New Relic <InlinePopover type="licenseKey"/>.

5. Envie seu aplicativo para o Elastic BeanStalk:

   * Em geral, use [`eb deploy`](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-deploy.html).
   * Se você ainda estiver usando [o Eb CLI 2.6](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli.html) , use `git aws.push` se necessário.

Após uma configuração bem-sucedida, pode levar até quinze minutos para que as métricas comecem a aparecer no New Relic. Para visualizar sua [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/applications-overview-dashboard): Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select your app)**</DNT>.
