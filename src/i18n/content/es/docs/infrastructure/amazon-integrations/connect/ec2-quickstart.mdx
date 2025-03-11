---
title: Monitoreo automatizado de instancias EC2
tags:
  - Infrastructure
  - Automated monitoring of EC2 instances
  - EC2 instances
  - AWS Systems Manager Distributor
  - Amazon Elastic Compute Cloud
metaDescription: Automated monitoring of EC2 instances
freshnessValidatedDate: never
translationType: machine
---

La integración EC2 de New Relic instala nuestro [agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic) en su instancia. Utiliza una plantilla de CloudFormation. El agente es un archivo ejecutable liviano que recopila datos sobre su instancia. También reenvía datos de infraestructura integración a New Relic y reenvía datos log para análisis log . Este documento le guía por los requisitos previos y los pasos para instalar el agente de infraestructura en instancias EC2.

## Requisitos previos [#prereq]

* Rol de IAM necesario para instalar la plantilla de CloudFormation.
* Habilite la dirección IP pública en las instancias EC2.
* Instale el agente SSM en la imagen de máquina de Amazon (AMI) de la instancia. Nota: La mayoría de las AMI ya incluyen el agente SSM de forma predeterminada. Consulte la lista de AMI con el agente SSM preinstalado [aquí](https://docs.aws.amazon.com/systems-manager/latest/userguide/ami-preinstalled-agent.html).
* Las instancias EC2 tienen los permisos necesarios para interactuar con SSM y el perfil o rol de la instancia está adjunto a la política `AmazonSSMManagedInstanceCore`.
* La subred de VPC asociada con la instancia tiene una tabla de rutas conectada a una puerta de enlace de Internet.
* Finalmente, tenga una cuenta New Relic y su clave de licencia válida. Vea [cómo obtener la clave de licencia de New Relic](/docs/apis/intro-apis/new-relic-api-keys/) si necesita más información.

Para implementar esta plantilla en muchas regiones, cuentas y unidades organizativas, necesita tener estos [permisos](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html).

## Pasos para habilitar el monitoreo automatizado de instancia

1. Siga todos los requisitos previos mencionados anteriormente.
2. Implemente la [plantilla de CloudFormation](https://github.com/aws-quickstart/quickstart-ct-newrelic-one/blob/main/templates/EC2_Quickstart.yml) en su cuenta y complete los campos obligatorios. etiqueta valor par principal asociado con las instancias EC2 donde desea instalar el agente New Relic Infrastructure . El agente New Relic Infrastructure solo se instala en instancias que tienen esa etiqueta de par principal de valor específico. Sin una etiqueta de par principal de valor específica, se instalará en todos de forma predeterminada.
3. Una vez que finalice la implementación, puede verificar el registro detallado y la métrica de las instancias EC2 nuevas y antiguas calificadas de una cuenta AWS en New Relic.

<Callout variant="important">
  Hay una actualización mensual de todas las instancias con el último agente New Relic Infrastructure .
</Callout>
