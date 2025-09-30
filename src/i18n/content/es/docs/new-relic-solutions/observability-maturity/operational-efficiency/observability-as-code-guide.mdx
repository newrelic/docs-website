---
title: 'Observabilidad como código: automatice su configuración de observabilidad para generar valor'
metaDescription: Our observability as code guide gives you best practices for automating your New Relic installation and configuration.
tags:
  - Observability as Code
  - Automation
  - Workflow
  - Implementation guide
freshnessValidatedDate: never
translationType: machine
---

Esta guía lo guía a través de ideas y procesos para automatizar la instalación y configuración de New Relic para maximizar el valor que obtiene de la observabilidad. Es parte de nuestra [serie sobre madurez de observabilidad](/docs/new-relic-solutions/observability-maturity/introduction).

## Descripción general [#overview]

<DNT>**Observability as code**</DNT> es un término utilizado para describir el proceso de automatización de la configuración de sus herramientas de observabilidad, de manera consistente, controlada y automatizada, para ayudarlo a obtener el máximo valor de sus telemetry data. Este recurso se centrará en hacer esto para su implementación de New Relic.

¿Por qué debería utilizar esta guía?

A medida que su infraestructura, aplicaciones y tecnologías de servicios evolucionan, su escala y complejidad aumentan, lo que aumenta el volumen de datos recopilados a partir de herramientas de instrumentación (incluida New Relic) y el desafío asociado con darle sentido a los datos, ponerlos en contexto e impulsar acciones. detrás de él.

El uso de nuestra observabilidad como metodología de código para automatizar la configuración de New Relic aborda este desafío, ayudando a la organización a acelerar la adopción, mejorar la estabilidad e impulsar una mejor gobernanza.

Esta guía proporciona orientación sobre cómo abordar la implementación de la observabilidad como código y ofrece consejos de buenas prácticas y ejemplos de referencia para permitirle construir y mantener su plataforma New Relic a velocidad y escala. Aprovecha la automatización del flujo de trabajo y las herramientas de aprovisionamiento para permitir que la organización escale las mejores prácticas de observabilidad, al tiempo que reduce el esfuerzo manual y mejora la prestación de servicios. Una implementación exitosa de estas ideas debería ofrecer valor real tanto a la propia organización de TI como a las empresas que respaldan.

## Resultados deseados [#desired-outcomes]

Reducir los costos y riesgos asociados con la implementación y el mantenimiento de una solución de observabilidad configurada de manera óptima en entornos que cambian rápidamente y a gran escala.

Específicamente, algunos de los beneficios de adoptar la observabilidad como prácticas de código son:

### Repetible, replicable, reutilizable

Administrar los recursos de New Relic a través del código significa que se pueden repetir, escalar y actualizar fácilmente de forma masiva. Aprovechar un enfoque modular con herramientas de aprovisionamiento como Terraform permite compartir y desplegar rápida y fácilmente conjuntos empaquetados de recursos, como tablero, alerta y carga de trabajo, acelerando el tiempo de inicio y mejorando los estándares de toda la organización.

### Trabajo reducido

La tarea de crear y mantener recursos de New Relic administrados a través de código es significativamente menor que administrarlos manualmente a través de la interfaz de usuario, especialmente cuando se trabaja a escala. Nuestra interfaz se presta bien para el descubrimiento y las pruebas, pero los cambios en los recursos administrados por código se pueden aplicar de forma masiva, lo que reduce enormemente el tiempo de administración de los recursos. Un enfoque común es desarrollar alertas y paneles dentro de la interfaz de usuario y luego, cuando se consideren lo suficientemente maduros, migrarlos a recursos administrados por código.

### Documentación y contexto

La gran variedad de recursos que se pueden configurar en New Relic puede hacer que sea difícil entender, cuando se mira un solo recurso, por qué se creó o configuró como lo hizo. La configuración mediante código permite comentarios y documentación asociados que ayudan a explicar por qué se pueden haber tomado ciertas decisiones, cuándo y quién.

### Historial auditable

Si bien es posible comprender quién realizó cambios en los recursos de New Relic a través del evento `NRAuditEvent` , esto no proporciona muchos antecedentes sobre <DNT>**why**</DNT> que se realizaron los cambios, cuál era su estado anterior o quién aprobó los cambios. La gestión de recursos a través de código en conjunto con un flujo de trabajo de aprovisionamiento automatizado basado en aprobación permite una visibilidad mucho más clara de los cambios y una mejor gobernanza, al mismo tiempo que proporciona métodos de reversión y recuperación.

### Seguridad

La observabilidad como código permite controles más estrictos sobre el uso de la clave de API para administrar los recursos de New Relic. La seguridad se mejora al reducir la cantidad de claves de API en circulación y garantizar que exista una gobernanza adecuada con respecto a su creación y difusión. Disuadir al usuario de usar sus propias claves, especialmente dentro del flujo de trabajo automatizado, significa que se reduce el área de superficie para una violación de clave o corrupción no intencionada.

### Cambios delta eficientes

Las herramientas de aprovisionamiento como Terraform permiten realizar cambios delta en los recursos existentes. Esto hace que las actualizaciones sean rápidas y eficientes, ya que solo se cambian los atributos de recursos que necesitan cambiar, con una destrucción y recreación mínima de recursos. Esto es importante ya que garantiza que los GUID de recursos como el panel y la alerta no cambien durante la actualización.

### Reaccionar a estímulos externos.

La combinación de la observabilidad como código con el flujo de trabajo automatizado permite que los recursos de New Relic se creen y modifiquen como resultado de estímulos externos como el despliegue de aplicaciones, eventos de infraestructura o cualquier otra entrada de datos. Por ejemplo, podría generar automáticamente un panel y una alerta que comparen la señal métrica clave entre las versiones del código en el momento de su implementación.

### Propiedad contextual y embalaje

La gestión de recursos en código permite gestionar juntos los recursos relacionados. Es más fácil comprenderlos y administrarlos en un solo lugar, en código, que cuando se distribuyen en la interfaz de usuario. Por ejemplo, esto permite que diferentes equipos administren, vean y mantengan los recursos dentro de su esfera de influencia y no tengan que buscar los recursos que administran.

### Recuperación de desastres

Ocasionalmente ocurren errores, se actualiza o elimina el recurso incorrecto. Recuperarse de estas situaciones con la gestión manual de recursos es difícil porque no es fácil saber qué existía antes o incluso si el recurso se modificó o se perdió. La observabilidad como código ayuda a proteger contra estos problemas al garantizar que cualquier recurso se pueda recrear o restablecer a la configuración esperada. También crea una oportunidad para detectar de forma proactiva la desviación de la configuración.

### Velocidad de despliegue

Observabilidad a medida que el código acelera la velocidad de implementación al permitir que un conjunto común de recursos se comparta fácilmente entre los equipos y se utilice para arrancar herramientas de observabilidad. Esto es particularmente evidente en la arquitectura de microservicios, donde aplicaciones similares de arquitectura de despliegue se benefician de los recursos New Relic basados en módulos prefabricados. La creación de módulos reutilizables administrados centralmente también ayuda a estandarizar enfoques comunes para las herramientas de observabilidad.

## Indicadores de rendimiento clave [#key-performance-indicators]

La madurez de su observabilidad como código implementado se puede evaluar de varias maneras. Generalmente, cuantos más recursos en un entorno se administren mediante código, más maduro será el despliegue. Estos son algunos de los KPI:

<CollapserGroup>
  <Collapser
    id="resources-managed-kpi"
    title="Ratio de recursos gestionados a través de código"
  >
    <img
      src="/images/oac_diagram_env-maturity.webp"
      title="Environment maturity"
      alt="Percentage of code driven configuration increases with environment maturity"
    />

    <figcaption>
      Este diagrama ilustra cómo el porcentaje de recursos administrados con código puede aumentar hacia el entorno de producción.
    </figcaption>

    ### Calcular recursos administrados

    La proporción de recursos gestionados a través de código se puede utilizar como indicador de madurez. Este KPI se puede utilizar para comparar la madurez de diferentes entornos y también para realizar un seguimiento a lo largo del tiempo del progreso de su observabilidad como proceso de madurez del código.

    Primero debe decidir qué recursos incluir en su cálculo y con qué granularidad.

    Por ejemplo, algunos recursos, como la política de alertas, se componen de múltiples subrecursos (condición de alerta). Es posible que desee considerar contar solo la cantidad de pólizas o puede optar por ir un nivel más profundo y también contar las condiciones.

    Una vez que haya decidido qué recursos incluir en su KPI, debe identificar cuántos de esos recursos se administran mediante código y cuántos no.

    Luego puede calcular el KPI con la siguiente fórmula:

    Porcentaje de KPI de recursos de OaC = (resources_code_managed/(resources_code_managed + resources_not_code_managed)) \* 100

    Por ejemplo:

    | Tipo de recurso      | Código gestionado | No gestionado por código | KPI                |
    | -------------------- | ----------------- | ------------------------ | ------------------ |
    | Panel                | 20                | 13                       | 60%                |
    | Politica de alertas  | 10                | 20                       | 33%                |
    | Carga de trabajo     | 5                 | 3                        | 63%                |
    | Viajes sintéticos    | 14                | 5                        | 74%                |
    | <DNT>**Total**</DNT> | <DNT>**49**</DNT> | <DNT>**41**</DNT>        | <DNT>**54%**</DNT> |

    ### Madurez del entorno

    Es un patrón familiar para entidades de diferentes entornos ser instrumentadas e informar a diferentes cuentas de New Relic. Por ejemplo, su stack de producción podría informar a una cuenta de producción y la de no producción a otra. La proporción de recursos aprovisionados con código en comparación con los aprovisionados manualmente debería ser mayor cuanto más cerca esté el entorno de producción. Algunos clientes optan por restringir por completo el acceso manual al entorno de producción, imponiendo cambios de código administrado y auditable en la configuración de producción.
  </Collapser>
</CollapserGroup>

<CollapserGroup>
  <Collapser
    id="shared-resources-kpi"
    title="Proporción de recursos gestionados a través de recursos compartidos"
  >
    Uno de los beneficios de adoptar la observabilidad como código es la capacidad de publicar y compartir configuraciones fácilmente entre equipos. Crear y compartir módulos que empaqueten múltiples recursos de manera consistente y estandarizada permite a los equipos acelerar su implementación, reducir el trabajo y mantener la calidad. Una observabilidad madura a medida que se implementa el código tendrá una mayor proporción de recursos que se administran con módulos compartidos centralizados.

    ### Calcular recursos compartidos

    Calcular este KPI requiere que sepa cuántos de los recursos administrados por código se aprovisionan como resultado de un módulo compartido. Puede hacer que el despliegue de recursos a través de módulos compartidos sea más fácil de identificar asegurándose de que estén bien etiquetados.

    KPI de recursos compartidos = número de recursos implementados a través de módulos compartidos / número total de recursos administrados por código
  </Collapser>
</CollapserGroup>

<CollapserGroup>
  <Collapser
    id="trigger-kpi"
    title="Aprovisionamiento automático basado en activadores"
  >
    La observabilidad como código ofrece oportunidades para innovar mediante la implementación de una configuración que se aprovisiona automáticamente en función de los activadores. Por ejemplo, puede aprovisionar automáticamente un dashboard y un paquete de alerta cuando se implementa una nueva versión de una aplicación o cuando se lanza un nuevo producto. Una observabilidad madura a medida que se implementa el código exhibirá algunas de estas innovaciones.

    ### Calcular el aprovisionamiento basado en activadores

    Hay dos KPI que podría considerar realizar un seguimiento para el aprovisionamiento basado en activadores:

    <DNT>**Number and scale of triggers configured:**</DNT> Este KPI le permite identificar qué cuentas contienen recursos proporcionados por activador. Puede considerar contar la cantidad de recursos administrados por los desencadenadores además de un recuento de desencadenadores individuales que se han configurado. <DNT>**Number of invocations of each trigger:**</DNT> Este KPI le permite realizar un seguimiento de la frecuencia con la que se utilizan sus activadores y le ayuda a identificar activadores redundantes o significativamente ruidosos.
  </Collapser>
</CollapserGroup>

<CollapserGroup>
  <Collapser
    id="calculating-config-drift-kpi"
    title="Deriva de configuración"
  >
    El seguimiento de la frecuencia y la escala de la deriva de la configuración le permite evaluar la estabilidad y la calidad de su canal de observabilidad y sus recursos. Puede utilizar este KPI para identificar aquellos recursos que pueden necesitar refinarse y mejorar.

    ### Calcular la deriva de configuración

    Puede calcular un KPI para la desviación de la configuración registrando el número de ocurrencias en las que se ha identificado la desviación de la configuración. Hacer un seguimiento de esto a lo largo del tiempo le ayuda a evaluar la eficacia de su estrategia de madurez ambiental y a descubrir qué recursos podrían necesitar perfeccionarse.
  </Collapser>
</CollapserGroup>

## Requisitos previos [#prerequisites]

Antes de embarcarse en una implementación <DNT>**Observability as code**</DNT> con New Relic, debe familiarizarse con nuestros fundamentos que están disponibles en [New Relic University](https://learn.newrelic.com).

También deberías:

* Elija y esté familiarizado con una herramienta de aprovisionamiento como Terraform
* Tener acceso a una plataforma CI/CD que admita la automatización del flujo de trabajo
* Familiarícese con la plataforma New Relic y la característica API.
* Haber determinado una etiqueta y una convención de nomenclatura o estrategia para sus recursos.
* Decidir la estrategia de granularidad de activos para determinar los KPI
* Tener preparada la clave de API de la cuenta de servicio y un modelo de permisos para aplicar cambios desde las herramientas CI/CD.

## Establecer el estado actual [#establish-current-state]

Antes de embarcarse en la adopción de prácticas de observabilidad como código, debe evaluar el estado actual. Puede aprovechar los conceptos de evaluación de madurez discutidos anteriormente para determinar qué tan maduros son sus entornos y priorizar qué entornos abordar primero.

## Proceso de mejora [#improvement-process]

Es posible que haya decidido adoptar la observabilidad como código con New Relic, pero no está seguro de cómo empezar o desea evitar trampas y callejones sin salida comunes. Aquí proporcionamos guías sobre buenas prácticas, consejos y ejemplos de referencia para ayudarle a adoptar con confianza la observabilidad como código.

### Aislamiento de recursos basado en equipo [#team-based-resources]

Muchos equipos pueden participar en la gestión de recursos en una sola cuenta de New Relic o en varias cuentas. Nuestra práctica de observabilidad como código proporciona una forma de controlar más estrictamente el aislamiento, el acceso y la gestión de los recursos. Restringir el acceso de escritura a individuos y hacer cumplir los cambios a través de código administrado permite a los equipos trabajar de forma segura en el mismo espacio sin correr el riesgo de afectar los recursos de los demás.

Por ejemplo, es posible que tenga un equipo de infraestructura compartida que administre la infraestructura de la nube en nombre de múltiples equipos de aplicaciones, cada uno de los cuales monitor su aplicación en diferentes cuentas de New Relic. Este equipo de infraestructura compartida administraría sus propios recursos de New Relic dentro de estas cuentas junto con los recursos propios de los equipos de la aplicación. Restringir el acceso de escritura de los usuarios y garantizar que los recursos clave solo se administren a través del flujo de trabajo de observabilidad como código permite que los recursos de los equipos convivan en armonía y reduce la posibilidad de cambios no autorizados o involuntarios.

<img
  src="/images/oac_diagram_team-based-access.webp"
  title="Team based resource isolation permission model"
  alt="Team based resource isolation permission model"
/>

<figcaption>
  Este diagrama ilustra cómo la canalización de CI/CD para diferentes equipos puede tener acceso para administrar recursos aislados en múltiples cuentas superpuestas.
</figcaption>

### Clave de API

La gestión de recursos mediante nuestra API NerdGraph o mediante herramientas de aprovisionamiento como Terraform requiere una [clave de usuario](/docs/apis/intro-apis/new-relic-api-keys) de New Relic. Las claves de usuario están asociadas con un usuario específico y heredan los permisos de ese usuario.

### Cuentas de servicio

La creación de claves de usuario de New Relic frente a usuarios humanos reales puede causar problemas en las canalizaciones automatizadas. Por ejemplo, si los permisos de ese usuario cambian como parte de un movimiento de equipo, o si el usuario abandona la organización, un proceso de automatización que depende de él podría fallar.

Considere la posibilidad de crear un usuario de "cuenta de servicio" administrado por un equipo de administración central creado específicamente para fines de automatización. Estos equipos luego pueden generar y gestionar claves para difundirlas a otros equipos de implementación. Las cuentas de servicio se pueden usar para generar múltiples claves, lo que garantiza que los equipos de implementación solo usen su propia clave. Las claves administradas de esta manera se auditan más fácilmente y ayudan a garantizar que los permisos estén configurados correctamente y permanezcan estables. Se debe alentar a las personas a no utilizar sus propias claves de usuario, excepto para desarrollo y pruebas.

### Generación automatizada de claves de API

Se pueden generar New Relic a través de [NerdGraph](/docs/apis/nerdgraph/examples/use-nerdgraph-manage-license-keys-user-keys), lo que permite el aprovisionamiento de claves bajo demanda totalmente automatizado. Esto podría usarse para automatizar la generación de claves a través de un portal o flujo de proceso de servicio.

## Herramientas de automatización

Recomendamos utilizar [Terraform](https://www.terraform.io) para gestionar el aprovisionamiento de sus recursos de New Relic. Herramientas como Terraform le permiten configurar recursos en código sin tener que preocuparse por qué API llamar o cómo mantener un registro de lo que se ha creado.

New Relic mantiene activamente nuestro propio [proveedor New Relic Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs). Las solicitudes y problemas de características se pueden enviar en [nuestro repositorio Terraform GitHub de código abierto](https://github.com/newrelic/terraform-provider-newrelic/issues).

### Administración del Estado

Al gestionar los recursos de New Relic con Terraform, es importante mantener un registro estable del estado de Terraform. Lo ideal es que el estado se almacene de forma segura en una [ubicación remota](https://www.terraform.io/language/state/remote), se controle la versión y se aproveche [el bloqueo del estado](https://www.terraform.io/language/state/locking) para garantizar la estabilidad.

### Identificar los recursos gestionados

Es importante que pueda identificar fácilmente los recursos en New Relic que se administran mediante código. Esto hace posible no solo evaluar el KPI de madurez, sino que también ayuda a los usuarios que interactúan con la UI a comprender qué recursos se administran mediante código y que, por lo tanto, no deben cambiarse manualmente.

Es una buena práctica desarrollar un estándar coherente para toda la organización para las etiquetas y los recursos de nombres que se administran en código. Como mínimo, debe etiquetar e identificar que un recurso está administrado por código. Por ejemplo, podría agregar la etiqueta `codeManaged=true` y quizás un sufijo o prefijo al nombre del recurso (por ejemplo, "Resumen de rendimiento de la base de datos \[CM]") para ayudar a identificarlos. Además, deberías considerar etiquetar recursos con más información útil, como el equipo propietario, la fuente del recurso o la versión del código, por ejemplo.

### Tratar con grandes conjuntos de recursos

Cada recurso configurado en Terraform debe actualizarse y evaluarse para buscar cambios cuando se aplique una nueva configuración. A medida que crece la cantidad de configuración, aumenta la lista de recursos para verificar. Cada verificación requiere una llamada API y, por lo tanto, una configuración grande puede tardar algún tiempo en completarse y puede encontrar límites de API si se realizan demasiadas solicitudes en paralelo. Un enfoque es reducir la cantidad de recursos administrados dentro de un solo estado, dividiendo la configuración en partes. También reducir el [paralelismo de las solicitudes de Terraform](https://www.terraform.io/cli/commands/apply#parallelism-n) puede aliviar la limitación de API.

### Adopte un enfoque modular

Los módulos son la forma principal de empaquetar y reutilizar la configuración de recursos con Terraform y se pueden aprovechar para empaquetar cualquier cantidad de recursos de New Relic. Un embalaje como este permite el despliegue basado en parámetros. Por ejemplo, es posible que tenga un módulo que tome el nombre de una aplicación y cree un dashboard descripción general, una alerta de señal dorada y un funcionamiento completo del viaje sintético.

Los módulos de Terraform se pueden [publicar](https://www.terraform.io/language/modules#published-modules) en registros remotos, lo que permite a los equipos compartir y consumir paquetes de recursos desarrollados por otros equipos. Esto brinda oportunidades para implementar la estandarización e implementar fácilmente cambios y mejoras controladas por versiones.

## Referencia de implementación [#implementation-reference]

### Automatización flujo de trabajo

La automatización del flujo de trabajo es esencial para escalar la observabilidad como código a equipos y organizaciones. Hay muchas herramientas y servicios de CI/CD disponibles que pueden impulsar [el flujo de trabajo de Terraform](https://www.terraform.io/intro/core-workflow). Estos permiten discutir y aprobar los cambios de configuración y, al mismo tiempo, proporcionan un seguimiento auditable de los cambios.

Recomendamos adoptar un [flujo de trabajo Terraform](https://www.terraform.io/intro/core-workflow) para permitir que los equipos trabajen juntos en la configuración de New Relic. Uno de esos flujos de trabajo aprovecha las capacidades de CI/CD de los sistemas de control de versiones de código como GitHub, GitLab y Bitbucket para planificar y aplicar código automáticamente utilizando mecanismos integrados de aprobación y revisión.

<img
  src="/images/oac_diagram_tf-workflow.webp"
  title="Simple Terraform workflow"
  alt="Example Terraform workflow"
/>

<figcaption>
  Este diagrama ilustra cómo se genera un cambio como PR, que luego se aprueba y se fusiona con main para activar el despliegue de recursos.
</figcaption>

### Implementaciones de flujo de trabajo de ejemplo

Los siguientes [ejemplos de referencia](https://github.com/newrelic-experimental/oma-nr-terraform-workflows) demuestran cómo configurar un flujo de trabajo de Terraform en varios sistemas diferentes:

* [Ejemplo de GitHub Actions](https://github.com/newrelic-experimental/oma-nr-terraform-workflows/blob/main/github-action-example): este ejemplo muestra cómo utilizar [GitHub Actions](https://github.com/features/actions) junto con el almacenamiento de estado respaldado por AWS S3.
* [Ejemplo de canalización de GitLab](https://github.com/newrelic-experimental/oma-nr-terraform-workflows/blob/main/gitlab-pipeline-example): este ejemplo muestra cómo utilizar una [canalización de GitLab](https://docs.gitlab.com/ee/user/infrastructure/iac/) junto con el almacenamiento de estado http de Gitlab.
* [Ejemplo de canalización de Bitbucket](https://github.com/newrelic-experimental/oma-nr-terraform-workflows/blob/main/bitbucket-pipeline-example): este ejemplo demuestra el uso de una [canalización de Bitbucket](https://bitbucket.org/product/features/pipelines) junto con el almacenamiento de estado respaldado por S3.

### Fijación de versión

Al aprovisionar recursos automáticamente a través de flujos de trabajo de observabilidad como código, es importante garantizar que el flujo de trabajo funcione de la misma manera en cada ejecución. Recomendamos fijar la versión del proveedor New Relic y Terraform que ha utilizado, para garantizar que no se produzcan actualizaciones inesperadas que provoquen fallas en la canalización. Si decide fijar la versión, debe actualizar y probar periódicamente las últimas versiones. Puede obtener más información sobre cómo restringir versiones en los [documentos de Terraform](https://www.terraform.io/language/expressions/version-constraints).

### Detectar deriva de configuración

Comprender la deriva de la configuración es importante para garantizar la estabilidad y confiabilidad de su plataforma de observabilidad. Dependiendo de su estrategia de control de acceso y permisos, es posible que los usuarios puedan cambiar recursos en la UI que también se administran mediante código. Detectar esta desviación de la configuración le permite comprender los cambios y corregir la configuración si es necesario.

Hay dos modos principales de operación:

* <DNT>
    **Detect and notify**
  </DNT>

  : En este modo, se detecta deriva y se notifica a los operadores. Sin embargo, no se realizan cambios correctivos automáticamente.

* <DNT>
    **Detect, remediate and notify**
  </DNT>

  : En este modo, la desviación se detecta y, cuando es posible, el flujo de trabajo también la soluciona automáticamente.

<img
  src="/images/oac_diagram_config-drift.webp"
  title="Configuration drift workflow"
  alt="Configuration drift workflow"
/>

<figcaption>
  Este diagrama ilustra cómo se puede implementar un flujo de trabajo de deriva de configuración. Los cambios detectados se informan a New Relic, donde se pueden alertar y rastrear a lo largo del tiempo.
</figcaption>

#### Ejemplo de referencia de deriva de configuración

Este ejemplo de referencia aprovecha GitHub Actions para programar operaciones regulares del plan Terraform. La cantidad de cambios detectados se informa a New Relic y, opcionalmente, se puede iniciar la reaplicación de Terraform.

[Ejemplo de deriva de configuración de Terraform](https://github.com/newrelic-experimental/oma-nr-terraform-workflows/tree/main/github-tf-config-drift)

## Conclusión [#conclusion]

### Mejores prácticas para adoptar

* Defina e implemente claramente los KPI para medir la madurez de la observabilidad como código.
* Establezca y comunique el estado actual antes de implementar nuevas capacidades de observabilidad como código.
* Aproveche la automatización siempre que sea posible para acelerar la entrega de observabilidad en todos los entornos.
* Activos de documentos automáticos creados mediante código.
* Seguimiento y dirección de la deriva de configuración.
* Impulse la reutilización ampliada de activos en todos los entornos.

### Realización de valor

Al final de este proceso deberías obtener los siguientes beneficios:

* Comunique de manera fácil y efectiva su madurez actual de observabilidad como código.
* Reduzca el tiempo de observabilidad de sus entornos.
* Reduzca el esfuerzo manual necesario para implementar la observabilidad y libere tiempo productivo.
* Reduzca el riesgo operativo en su entorno de producción.
* Mejore la capacidad de detectar y resolver problemas más rápido.
* Acelerar el tiempo para desplegar nuevos lanzamientos.
* Haga que telemetry data sean más procesables para su organización en su conjunto.
* Mejore la disponibilidad y entrega de su servicio al negocio.
