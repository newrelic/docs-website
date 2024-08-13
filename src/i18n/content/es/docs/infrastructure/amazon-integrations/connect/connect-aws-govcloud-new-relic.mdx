---
title: Conecte AWS GovCloud a New Relic
tags:
  - Integrations
  - Amazon integrations
  - Get started
metaDescription: 'Deploy your most critical services on AWS GovCloud, and monitor your entire infrastructure with New Relic.'
freshnessValidatedDate: never
translationType: machine
---

Las regiones [de AWS GovCloud (EE. UU.)](https://aws.amazon.com/govcloud-us/) están diseñadas para abordar las necesidades regulatorias específicas de Estados Unidos (agencias federales, estatales y locales), las instituciones educativas y el ecosistema de soporte. Es una región aislada AWS diseñada para alojar datos confidenciales y carga de trabajo regulada en la nube, lo que ayuda a los clientes a cumplir con los requisitos de cumplimiento del gobierno de EE. UU. El [conjunto disponible de servicios de AWS](https://aws.amazon.com/govcloud-us/details/) es un subconjunto del ecosistema de AWS.

New Relic te brinda la confianza para desplegar tus servicios más críticos en GovCloud, permitiéndote monitor y observar todo tu ecosistema desde [nuestra plataforma](/docs/new-relic-one/use-new-relic-one/get-started/introduction-new-relic-one).

La capacidad AWS CloudWatch Metric Streams no está disponible en las regiones de GovCloud.

<Callout variant="tip">
  Puede utilizar Terraform para automatizar el proceso de habilitar la integración en la nube. Lea cómo hacerlo en el [sitio de documentación oficial de Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs/guides/cloud_integrations_guide).
</Callout>

## Requisitos [#requirements]

* Debe tener [su cuenta de AWS conectada a New Relic](/docs/integrations/amazon-integrations/get-started/connect-aws-infrastructure) antes de conectarse a GovCloud.

* Si está utilizando nuestro [monitoreo AWS Lambda ](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda): nuestro `newrelic-log-ingestion` no está implementado en el [repositorio de aplicacionesAWS Serverless](https://aws.amazon.com/serverless/serverlessrepo/) para AWS GovCloud; debe instalarse manualmente. Para obtener instrucciones, consulte [Habilitar el monitoreo Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#connect-aws).

* Integración AWS soportada en GovCloud:

  * [ALB/NLB](/docs/integrations/amazon-integrations/aws-integrations-list/aws-albnlb-monitoring-integration)
  * [Puerta de enlace API](/docs/integrations/amazon-integrations/aws-integrations-list/aws-api-gateway-monitoring-integration)
  * [Escalado automático](/docs/integrations/amazon-integrations/aws-integrations-list/aws-auto-scaling-monitoring-integration)
  * [NubeTrail](/docs/integrations/amazon-integrations/aws-integrations-list/aws-cloudtrail-monitoring-integration)
  * [Conexión directa](/docs/integrations/amazon-integrations/aws-integrations-list/aws-direct-connect-monitoring-integration)
  * [DinamoDB](/docs/integrations/amazon-integrations/aws-integrations-list/aws-dynamodb-monitoring-integration)
  * [EBS](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ebs-monitoring-integration)
  * [EC2](/docs/integrations/amazon-integrations/aws-integrations-list/aws-ec2-monitoring-integration)
  * [Elasticsearch](/docs/integrations/amazon-integrations/aws-integrations-list/aws-elasticsearch-monitoring-integration)
  * [ELB (Clásico)](/docs/integrations/amazon-integrations/aws-integrations-list/aws-elb-classic-monitoring-integration)
  * [EMR](/docs/integrations/amazon-integrations/aws-integrations-list/aws-emr-monitoring-integration)
  * [SOY](/docs/integrations/amazon-integrations/aws-integrations-list/aws-iam-monitoring-integration)
  * [Lambda](/docs/integrations/amazon-integrations/aws-integrations-list/aws-lambda-monitoring-integration)
  * [RDS](/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-monitoring-integration)
  * [Redshift](/docs/integrations/amazon-integrations/aws-integrations-list/aws-redshift-integration)
  * [Ruta53](/docs/integrations/amazon-integrations/aws-integrations-list/aws-route-53-monitoring-integration)
  * [T3](/docs/integrations/amazon-integrations/aws-integrations-list/aws-s3-monitoring-integration)
  * [SNS](/docs/integrations/amazon-integrations/aws-integrations-list/aws-sns-monitoring-integration)
  * [SQS](/docs/integrations/amazon-integrations/aws-integrations-list/aws-sqs-monitoring-integration)
  * [Funciones de paso](/docs/integrations/amazon-integrations/aws-integrations-list/aws-step-functions-monitoring-integration)

## Conecte AWS GovCloud a New Relic

Para comenzar a recibir datos de Amazon con la integración de New Relic AWS , conecte su cuenta de Amazon a New Relic.

1. Obtenga [sus credenciales](#govcloud-credentials).

2. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > GovCloud**
   </DNT>

   .

3. Haga clic en

   <DNT>
     **Add AWS GovCloud account**
   </DNT>

   .

4. Asigne un nombre a su cuenta de AWS, proporcione las credenciales para conectar su cuenta y haga clic en

   <DNT>
     **Submit**
   </DNT>

   .

5. Seleccione los servicios web de Amazon que desea monitorear con la integración New Relic Infrastructure y luego haga clic en

   <DNT>
     **Save**
   </DNT>

   .

## Cómo obtener credenciales de GovCloud para New Relic [#govcloud-credentials]

1. Desde la [consola de IAM](https://console.amazonaws-us-gov.com/iam/home#/users), haga clic en <DNT>**Add user**</DNT>.

2. Para <DNT>**User name**</DNT>, escriba <DNT>**NewRelicInfrastructure-Integrations**</DNT>. Para <DNT>**Select AWS access type**</DNT>, seleccione como <DNT>**Programmatic access**</DNT>.

   <img
     title="AWS-add-user.png"
     alt="Add a user in the AWS IAM console."
     src="/images/infrastructure_screenshot-crop_aws-add-user.webp"
   />

   <figcaption>
     <DNT>**AWS IAM console > Add user**</DNT>: agregue <DNT>**NewRelicInfrastructure-Integrations**</DNT> como usuario.
   </figcaption>

3. Adjunte la política: busque <DNT>**ReadOnlyAccess**</DNT>, seleccione la casilla de verificación de la política denominada <DNT>**ReadOnlyAccess**</DNT> y luego haga clic en <DNT>**Next: Tags**</DNT> (agregar una etiqueta es opcional). Alternativamente, puede [crear su propia política administrada](/docs/integrations/amazon-integrations/getting-started/integrations-managed-policies) y limitar los permisos que otorga New Relic según los servicios de AWS que desee monitor.

   <img
     title="AWS-set-permissions.png"
     alt="AWS-set-permissions.png"
     src="/images/infrastructure_screenshot-crop_aws-set-permissions.webp"
   />

   <figcaption>
     <DNT>**AWS IAM console > Add user > Set permissions**</DNT>: seleccione <DNT>**ReadOnlyAccess**</DNT>.
   </figcaption>

4. En la página <DNT>**Tags**</DNT> , haga clic en <DNT>**Next: Review**</DNT>. Revise el resumen de detalles del usuario y haga clic en <DNT>**Create user**</DNT>.

   <img
     title="AWS-create-user.png"
     alt="In IAM console, create the user."
     src="/images/infrastructure_screenshot-crop_aws-create-user.webp"
   />

   <figcaption>
     <DNT>**AWS IAM console > Add user > Set permissions > Tags > Review**</DNT>: verifique que la información del nuevo usuario sea precisa.
   </figcaption>

5. Su usuario debería haberse creado correctamente. Descargue las credenciales de seguridad del usuario haciendo clic en el botón <DNT>**Download .csv**</DNT> y luego haga clic en <DNT>**Close**</DNT>.
