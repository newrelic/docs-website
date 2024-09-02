---
title: Mejores prácticas para la integración de usuario
tags:
  - Best practices
  - Integrations
metaDescription: Here are some best practices for controlling how you expose your New Relic data when you're using an integration.
freshnessValidatedDate: '2024-04-24T00:00:00.000Z'
translationType: machine
---

Como administrador de New Relic, debe operar su organización New Relic con el principio de privilegio mínimo. Este principio es un concepto de seguridad en el que un usuario solo debe tener acceso a los datos, sistemas y recursos específicos necesarios para completar una tarea necesaria para la organización. Si sigue este principio, puede reducir el riesgo de acceso no autorizado a datos confidenciales. Esto incluye la asignación de permisos según las funciones y responsabilidades laborales. En una [organización New Relic ](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure/), el acceso basado en cuenta le permite controlar qué información está disponible para el usuario en su organización. Esto garantiza que los datos confidenciales permanezcan seguros y que solo el personal autorizado pueda verlos.

Lidiar con la integración con sistemas de terceros puede complicar el acceso a las aplicaciones. Por ejemplo, es posible que el usuario de Atlassian Jira no tenga acceso a New Relic. El sistema también puede carecer de permisos o controles centralizados. Conozca las mejores prácticas para compartir datos en esta página.

## Cuenta y alcance de clave de API [#account-api-key-scope]

Lo primero que debe considerar al controlar el acceso a sus datos de New Relic es el alcance de su cuenta. Su organización puede tener varias cuentas y los usuarios pueden tener acceso a las cuentas. Esto le permite limitar los datos que estos usuarios pueden ver. Si su organización sólo tiene una única cuenta, esto significa que todos los usuarios tienen acceso a la misma información. En esta situación, es posible que solo desees exponer algunos datos a través de una integración.

Algunas integraciones con New Relic aprovechan la capacidad de generar una clave de API para exponer sus datos a otros sistemas (por ejemplo, la integración Atlassian). Si un usuario tiene acceso a 3 de 5 cuentas en una organización New Relic , su clave de API generada tendrá acceso a esas mismas 3 cuentas.

<Callout variant="important">
  Tenga en cuenta que una clave de API hereda los permisos de cuenta del usuario que la generó.
</Callout>

Es importante comprender esta distinción al configurar una integración. Por ejemplo, es posible que desee asegurarse de generar una clave de API de un usuario que tenga los permisos correctos. Es posible que desee que el usuario solo tenga acceso a determinadas cuentas de la aplicación. Esto limita lo que pueden ver y compartir con otros. Por ejemplo, digamos que tienes más usuarios en tu aplicación Atlassian que en tus cuentas New Relic y configuras la integración de Atlassian. El usuario de la integración Atlassian podrá ver los datos New Relic compartidos con el usuario Atlassian en la aplicación Atlassian, independientemente de si esos tienen acceso a las cuentas New Relic correspondientes.

## Aprovechamiento del usuario de integración [#integration-user-leverage]

Al configurar la integración de terceros con New Relic, recomendamos encarecidamente utilizar un usuario de integración dedicado. Esto significa [crear un usuario de New Relic](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions/) solo para una integración específica. Puedes darle a este usuario un nombre que represente la integración en cuestión. Una gran ventaja de esto es que no necesita utilizar su acceso de nivel de administrador para la integración. Todo lo que tienes que hacer es crear el nuevo usuario y asignar solo las cuentas que deseas exponer a la integración. Luego, genere una clave de API para el usuario de integración. Esto permite que la clave de API que utiliza para una integración exponga solo los detalles de la cuenta que desea utilizar para la integración. También le permite desacoplar su acceso personal a New Relic del de la integración.
