---
title: Instalación de AWS Elastic Beanstalk para PHP
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: Directions for installing the New Relic PHP agent with Elastic Beanstalk.
freshnessValidatedDate: never
translationType: machine
---

AWS [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk) es un servicio dinámico que permite un fácil despliegue y escalabilidad para su aplicación PHP. Siga estas instrucciones para instalar AWS con el agente PHP de New Relic.

<Callout variant="tip">
  Para obtener más información sobre el uso de las herramientas de Amazon con New Relic, consulte [Usuario de Amazon Web Services (AWS)](/docs/accounts-partnerships/partnerships/partner-based-installation/amazon-web-services-aws-users).
</Callout>

## Requisitos

Antes de instalar el agente PHP de New Relic, asegúrese de tener una [cuenta de Amazon Web Services](http://aws.amazon.com/elasticbeanstalk/ "El enlace se abre en una ventana nueva.") compatible. Además, para cualquier instalación de New Relic, necesitará su New Relic <InlinePopover type="licenseKey"/>. Esta es una cadena hexadecimal de 40 caracteres que New Relic proporciona cuando se [registra](http://newrelic.com/signup "El enlace se abre en una ventana nueva.") para obtener su cuenta.

## Instalacion

Para instalar el agente PHP de New Relic en AWS Elastic Beanstalk:

1. En la carpeta `.ebextensions` dentro de su aplicación Elastic BeanStalk, cree un nuevo archivo llamado `newrelic.config`.

2. Agregue el siguiente contenido al archivo:

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

3. Reemplace `INSERT_LINK_TO_REPO` con la URL del repositorio adecuada.

   * Para sistemas de 32 bits, utilice `http://yum.newrelic.com/pub/newrelic/el5/i386/newrelic-repo-5-3.noarch.rpm`
   * Para sistemas de 64 bits, utilice `http://yum.newrelic.com/pub/newrelic/el5/x86_64/newrelic-repo-5-3.noarch.rpm`

4. Reemplaza `INSERT_LICENSE_KEY` con tu New Relic <InlinePopover type="licenseKey"/>.

5. Envíe su aplicación a Elastic BeanStalk:

   * En general, utilice [`eb deploy`](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-deploy.html).
   * Si todavía usa [Eb CLI 2.6](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli.html) , use `git aws.push` si es necesario.

Después de una configuración exitosa, pueden pasar hasta quince minutos antes de que la métrica comience a aparecer en New Relic. Para ver su [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/applications-overview-dashboard): vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select your app)**</DNT>.
