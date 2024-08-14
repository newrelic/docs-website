---
title: Uso de Terragrunt para gestionar múltiples entornos
metaDescription: 'Learn how to use [Terragrunt](https://www.terraform.io/) to manage configurations in multiple environments'
freshnessValidatedDate: never
translationType: machine
---

[Terraform](https://www.terraform.io/) es una popular herramienta de software de infraestructura como código creada por HashiCorp. Se utiliza para aprovisionar todo tipo de infraestructura y servicios, incluidos New Relic <InlinePopover type="dashboards"/>y alerta.

[Terragrunt](https://terragrunt.gruntwork.io/#:~:text=Terragrunt%20is%20a%20thin%20wrapper,modules%2C%20and%20managing%20remote%20state.) es una envoltura delgada de Terraform que proporciona herramientas adicionales para:

* Reducir la repetición
* Trabajar con múltiples módulos Terraform
* Gestión del estado remoto

En esta guía, utilizarás Terragrunt para:

* Genera tu configuración de Terraform
* Crear archivos
* Gestionar múltiples entornos

<Video
  id="ivbp4e8t1f"
  type="wistia"
/>

## Antes de que empieces

Para utilizar esta guía, debe tener algunos conocimientos básicos tanto de New Relic como de Terraform.

Si aún no lo has hecho:

* [Instale el agente New Relic Infrastructure ](/docs/infrastructure/install-infrastructure-agent)en su host
* [Instalar la CLI de Terraform](https://www.terraform.io/intro/getting-started/install.html)
* [Instalar Terragrunt](https://terragrunt.gruntwork.io/docs/getting-started/install/)

Para seguir los ejemplos de esta guía, puede encontrar código de ejemplo en [GitHub](https://github.com/jsbnr/nr-terragrunt-intro-example).

## Crear una configuración

Terragrunt proporciona herramientas adicionales para su configuración de Terraform. Aquí, crea una configuración usando Terragrunt, Terraform y New Relic.

<Steps>
  <Step>
    Inicializar un espacio de trabajo:

    ```bash
    mkdir terragrunt-config && cd terragrunt-config
    ```
  </Step>

  <Step>
    En su nueva carpeta, cree un archivo _terragrunt.hcl_ :

    ```bash
    touch terragrunt.hcl
    ```
  </Step>

  <Step>
    A continuación, cree una carpeta _de entornos_ con una subcarpeta llamada _dev_:

    ```bash
    mkdir -p environments/dev
    ```
  </Step>

  <Step>
    Luego, cree una carpeta _src_ con los archivos _main.tf_ y _provider.tf_ :

    ```bash
    mkdir src
    touch src/main.tf
    touch src/provider.tf
    ```

    Los recursos de Terraform se configuran en _main.tf_ y los proveedores en _provider.tf_.
  </Step>

  <Step>
    En _src/provider.tf_, configurar un [proveedor de New Relic](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs).

    ```hcl
    terraform {
    	required_version = "~> 0.14.3"
    	required_providers {
    		newrelic = {
    			source = "newrelic/newrelic"
    			version = "~> 2.14.0"
    		}
    	}
    }
    ```
  </Step>

  <Step>
    En _src/main.tf_, agregue una política de alertas New Relic llamada `DemoPolicy`:

    ```hcl
    resource "newrelic_alert_policy" "DemoPolicy" {
    	name = "My Demo Policy"
    }
    ```
  </Step>

  <Step>
    En _entornos/dev_, cree un archivo llamado _terragrunt.hcl_:

    ```bash
    touch environments/dev/terragrunt.hcl
    ```
  </Step>

  <Step>
    En él, agregue la siguiente declaración `include` :

    ```hcl
    include {
    	path = find_in_parent_folders()
    }
    ```

    Esto le indica a Terragrunt que use cualquier .hcl archivos de configuración que encuentra en las carpetas principales.
  </Step>

  <Step>
    Agregue un bloque [`terraform`](https://terragrunt.gruntwork.io/docs/reference/config-blocks-and-attributes/#terraform) para darle a Terragrunt una referencia de fuente:

    ```hcl
    include {
    	path = find_in_parent_folders()
    }

    terraform {
    	source = "../../src"
    }
    ```
  </Step>

  <Step>
    En _src/provider.tf_, configure el proveedor New Relic con una clave de API, ID de cuenta y región:

    ```hcl
    terraform {
        required_version = "~> 0.14.3"
        required_providers {
            newrelic = {
                source = "newrelic/newrelic"
                version = "~> 2.14.0"
            }
        }
    }

    variable "newrelic_personal_apikey" {}
    variable "newrelic_account_id" {}
    variable "newrelic_region" {}

    provider "newrelic" {
    	account_id = var.newrelic_account_id
    	api_key = var.newrelic_personal_apikey
    	region = var.newrelic_region
    }
    ```

    Utiliza variables para mantener su configuración dinámica.
  </Step>

  <Step>
    En _entornos/dev_, inicializa terragrunt:

    ```bash
    terragrunt init
    ```

    Esto configura un poco de contexto, incluidas las variables de entorno, luego ejecuta `terraform init`:

    ```bash copyable=false
    [output] Terraform has created a lock file .terraform.lock.hcl to record the provider
    [output] selections it made above. Include this file in your version control repository
    [output] so that Terraform can guarantee to make the same selections by default when
    [output] you run "terraform init" in the future.
    [output]
    [output] Terraform has been successfully initialized!
    [output]
    [output] You may now begin working with Terraform. Try running "terraform plan" to see
    [output] any changes that are required for your infrastructure. All Terraform commands
    [output] should now work.
    [output]
    [output] If you ever set or change modules or backend configuration for Terraform,
    [output] rerun this command to reinitialize your working directory. If you forget, other
    [output] commands will detect it and remind you to do so if necessary.
    [output] [terragrunt] [/workspace/terragrunt-config/environments/dev] 2021/02/02 13:30:31 Copying lock file [output] from /workspace/terragrunt-config/environments/dev/.terragrunt-cache/e-PoBgWhdv3v8QGOtDQxS_WeYu4/
    [output] 69zjIFUfApJiUt8gFmi-6-dcPe8/.terraform.lock.hcl to /workspace/terragrunt-config/environments/dev
    ```
  </Step>

  <Step>
    En _environments/dev/terragrunt.hcl_, agregue un bloque `inputs` para proporcionar valores para las variables de su cuenta New Relic:

    ```hcl
    inputs = {
    	newrelic_personal_apikey = "NRAK-*<DNT>**" # Your New Relic account ID
    	newrelic_account_id = "12345" # Your New Relic account ID
    	newrelic_region = "US" # US or EU (defaults to US)
    }
    ```
  </Step>

  <Step>
    Ahora, ejecuta `terragrunt plan`:

    ```bash copyable=false
    [output] An execution plan has been generated and is shown below.
    [output] Resource actions are indicated with the following symbols:
    [output]  + create
    [output]
    [output] Terraform will perform the following actions:
    [output]
    [output]  # newrelic_alert_policy.DemoPolicy will be created
    [output]  + resource "newrelic_alert_policy" "DemoPolicy" {
    [output]    + account_id     = (known after apply)
    [output]    + id         = (known after apply)
    [output]    + incident_preference = "PER_POLICY"
    [output]    + name        = "My Demo Policy"
    [output]   }
    [output]
    [output] Plan: 1 to add, 0 to change, 0 to destroy.
    [output]
    [output] ------------------------------------------------------------------------
    [output]
    [output] Note: You didn't specify an "-out" parameter to save this plan, so Terraform
    [output] can't guarantee that exactly these actions will be performed if
    [output] "terraform apply" is subsequently run.
    ```

    Terragrunt proporciona los valores del bloque `inputs` .
  </Step>

  <Step>
    Ejecute `terragrunt apply`:

    ```bash
    terragrunt apply
    ```

    Ahora su Política de demostración está en su cuenta New Relic.
  </Step>
</Steps>

## Añadir a tu configuración

Ahora que ha creado una configuración básica de New Relic, agregue las configuraciones de nuestras guías [de Introducción a New Relic y Terraform](/docs/more-integrations/terraform/terraform-intro/) y [los módulos Terraform](/terraform/terraform-modules) .

<Callout variant="tip">
  Si aún no ha realizado estas guías, puede copiar su configuración desde el [repositorio de introducción de Terragrunt en Github](https://github.com/jsbnr/nr-terragrunt-intro-example).
</Callout>

<Steps>
  <Step>
    En _src/main.tf_, actualice la dirección de correo electrónico en el canal de alerta a su dirección de correo electrónico preferida:

    ```hcl
    resource "newrelic_alert_policy" "DemoPolicy" {
    	name = "My Demo Policy"
    }

    resource "newrelic_alert_channel" "DemoChannel" {
    	name = "My Demo Channel"
    	type = "email"

    	config {
    		recipients = "your@email_address.com"
    		include_json_attachment = "1"
    	}
    }

    resource "newrelic_alert_policy_channel" "ChannelSubs" {
    	policy_id = newrelic_alert_policy.DemoPolicy.id
    	channel_ids = [
    		newrelic_alert_channel.DemoChannel.id
    	]
    }

    module "HostConditions" {
    	source = "git::https://github.com/jsbnr/demo-terraform.git"
    	policyId = newrelic_alert_policy.DemoPolicy.id
    	cpu_critical = 88
    	cpu_warning = 78
    	diskPercent = 68
    }
    ```

    Aquí, agregó un canal de alerta New Relic, suscribió la política de demostración al canal de alerta y agregó un módulo alojado en Github.
  </Step>

  <Step>
    Ejecute `terragrunt init` y luego ejecute `terragrunt apply`:

    ```bash
    terragrunt init
    terragrunt apply
    ```

    Una vez que Terraform termina de procesarse, su política de alertas tiene dos condiciones y un canal de alerta.
  </Step>
</Steps>

## Utilice su entorno como una variable Terragrunt

Con Terragrunt, puedes agregar el nombre del entorno que estás ejecutando al nombre de los datos que estás creando, haciendo que tu recurso sea más identificable en New Relic.

<Steps>
  <Step>
    En el archivo raíz _terragrunt.hcl_ , cree una entrada para `env_name`:

    ```hcl
    inputs = {
    	env_name = "develop"
    }
    ```
  </Step>

  <Step>
    En _src/main.tf_, archivo agrega una nueva variable llamada `env_name`:

    ```hcl
    variable "env_name" {}
    ```
  </Step>

  <Step>
    Agregue la nueva variable `env_name` a los bloques de recursos de política de alertas y canal de alerta:

    ```hcl
    resource "newrelic_alert_policy" "DemoPolicy" {
    	name = "${var.env_name}: My Demo Policy"
    }

    resource "newrelic_alert_channel" "DemoChannel" {
    	name = "${env_name}: My Demo Channel"
    	type = "email"

    	config {
    		recipients = "your@email_address.com"
    		include_json_attachment = "1"
    	}
    }
    ```
  </Step>

  <Step>
    Ejecute `terragrunt plan` para ver la variable de entorno agregada al nombre de su política:

    ```bash copyable=false
    [output] # newrelic_alert_policy.DemoPolicy will be updated in-place
    [output] ~ resource "newrelic_alert_policy" "DemoPolicy" {
    [output]    id         = "1216533"
    [output]   ~ name        = "My Demo Policy" -> "develop: My Demo Policy"
    [output]    # (2 unchanged attributes hidden)
    [output]  }
    [output]
    [output] # newrelic_alert_policy_channel.ChannelSubs must be replaced
    [output] -/+ resource "newrelic_alert_policy_channel" "ChannelSubs" {
    [output]   ~ channel_ids = [
    [output]     - 4737437,
    [output]    ] -> (known after apply) # forces replacement
    [output]   ~ id     = "1216533:4737437" -> (known after apply)
    [output]    # (1 unchanged attribute hidden)
    [output]  }
    ```

    Aquí, codificaste el entorno en _terragrunt.hcl_. Para hacer esto más dinámico, use una función incorporada de Terragrunt para crear el entorno para usted.
  </Step>

  <Step>
    En el archivo raíz _terragrunt.hcl_ , actualice la entrada para usar `path_relative_to_include()` y pase el valor como la variable `env_name` :

    ```hcl
    inputs = {
    	env_name = path_relative_to_include()
    }
    ```
  </Step>

  <Step>
    Ejecute `terragrunt plan`:

    ```bash copyable=false
    [output] # newrelic_alert_policy.DemoPolicy will be updated in-place
    [output] ~ resource "newrelic_alert_policy" "DemoPolicy" {
    [output]    id         = "1216533"
    [output]   ~ name        = "My Demo Policy" -> "environments/dev: My Demo Policy"
    [output]    # (2 unchanged attributes hidden)
    [output]  }
    [output]
    [output] # newrelic_alert_policy_channel.ChannelSubs must be replaced
    [output] -/+ resource "newrelic_alert_policy_channel" "ChannelSubs" {
    [output]   ~ channel_ids = [
    [output]     - 4737437,
    [output]    ] -> (known after apply) # forces replacement
    [output]   ~ id     = "1216533:4737437" -> (known after apply)
    [output]    # (1 unchanged attribute hidden)
    [output]  }
    [output]
    [output] Plan: 2 to add, 1 to change, 2 to destroy.
    ```

    Tenga en cuenta que la variable `env_name` tiene la ruta `./environments/dev/` completa. En su lugar, desea incluir sólo la parte "dev".
  </Step>

  <Step>
    Actualice _terragrunt.hcl_ para eliminar "entornos/" de `env_name`:

    ```hcl
    locals {
    	env_name = replace(path_relative_to_include(), "environments/", "")
    }

    inputs = {
    	env_name = local.env_name
    }
    ```

    Aquí, agregó un bloque `locals` para crear una variable local y utilizó la función incorporada `replace` para eliminar las partes no deseadas de la ruta relativa. Luego, actualizó el bloque `inputs` para usar la variable local.
  </Step>

  <Step>
    Ejecute `terragrunt plan`:

    ```bash copyable=false
    [output]  # newrelic_alert_policy.DemoPolicy will be updated in-place
    [output]  ~ resource "newrelic_alert_policy" "DemoPolicy" {
    [output]     id         = "1216533"
    [output]    ~ name        = "My Demo Policy" -> "dev: My Demo Policy"
    [output]     # (2 unchanged attributes hidden)
    [output]   }
    [output]
    [output]  # newrelic_alert_policy_channel.ChannelSubs must be replaced
    [output] -/+ resource "newrelic_alert_policy_channel" "ChannelSubs" {
    [output]    ~ channel_ids = [
    [output]      - 4737437,
    [output]     ] -> (known after apply) # forces replacement
    [output]    ~ id     = "1216533:4737437" -> (known after apply)
    [output]     # (1 unchanged attribute hidden)
    [output]   }
    [output]
    [output] Plan: 2 to add, 1 to change, 2 to destroy.
    ```

    El nombre de su nueva política es "dev: Mi política de demostración".
  </Step>

  <Step>
    Ejecute `terragrunt apply` para actualizar su configuración:

    ```bash
    terragrunt apply
    ```
  </Step>
</Steps>

## Mueva su estado al almacenamiento remoto

Por el momento, su expediente estatal es local. Ahora, actualiza su configuración de Terraform para almacenarla en Amazon S3.

<Callout variant="tip">
  Dado que Terragrunt le permite configurar múltiples entornos, debe almacenar los archivos de estado en sus propios depósitos S3 para que no se sobrescriban entre sí.
</Callout>

<Steps>
  <Step>
    [Cree un depósito S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) para su archivo de estado de desarrollo.
  </Step>

  <Step>
    [Cree un usuario de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html) con [permisos para almacenar archivos en su depósito](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html).
  </Step>

  <Step>
    En tu raíz _terragrunt.hcl_, agregue un bloque `remote_state` que le indique a Terragrunt dónde colocar su archivo en S3:

    ```hcl
    remote_state {
    	backend = "s3"
    	generate = {
    		path = "backend.tf"
    		if_exists = "overwrite_terragrunt"
    	}
    	config = {
    		bucket = "YOUR_S3_BUCKET_NAME" # Amazon S3 bucket required

    		key     = "envs/${local.env_name}/terraform.tfstate"
    		region  = "us-east-1"
    		encrypt = true
    		profile = "YOUR_PROFILE_NAME" # Profile name required
    	}
    }
    ```

    Aquí, definió una configuración de estado remoto que especifica un nombre de depósito, una región, un cifrado y un perfil. Asegúrese de reemplazar los valores del marcador de posición por valores reales. Para `key`, utilizó el `env_name` local que creó anteriormente para configurar dinámicamente el entorno para el archivo de estado. Finalmente, le dijiste a Terragrunt que generara un nuevo archivo llamado _backend.tf_ en tu depósito.
  </Step>

  <Step>
    Ejecute `terragrunt plan`:

    ```bash
    terragrunt plan
    ```

    En su depósito, ve una carpeta llamada _envs._ Dentro hay una carpeta llamada _devs_ que contiene un archivo _terraform.tfstate_ .

    <Callout variant="tip">
      Dentro de `envs/dev`, hay una carpeta oculta llamada _terragrunt-cache_. En él, está el archivo _backend.tf_ que generó Terragrunt.
    </Callout>
  </Step>
</Steps>

## Crear un nuevo entorno

Ahora que ha configurado su entorno de desarrollo, cree otro que reutilice la mayor parte de su trabajo.

<Steps>
  <Step>
    En _entornos_, cree una carpeta denominada _nonprod_. En él, crea un archivo llamado _terragrunt.hcl_:

    ```bash
    mkdir nonprod && cd nonprod
    touch terragrunt.hcl
    ```
  </Step>

  <Step>
    En _environments/nonprod/terragrunt.hcl_, copie la configuración de _environments/dev/terragrunt.hcl_:

    ```hcl
    include {
    	path= find_in_parent_folders()
    }

    terraform {
    	source = "../../src"
    }

    inputs = {
    	newrelic_personal_apikey = "NRAK-**</DNT>*" # Your New Relic account ID
    	newrelic_account_id = "12345" # Your New Relic account ID
    	newrelic_region = "US" # US or EU (defaults to US)
    }
    ```

    <Callout variant="tip">
      Si está utilizando una cuenta diferente para su entorno no de producción, actualice `inputs` con un nuevo ID de cuenta, clave de API y región.
    </Callout>
  </Step>

  <Step>
    Dentro _de nonprod_, ejecute `terragrunt init` y `terragrunt apply`:

    ```bash
    terragrunt init
    terragrunt apply
    ```

    Terraform crea un nuevo conjunto de recursos con el prefijo "nonprod:".

    Ahora, ha creado dos entornos, dev y nonprod, pero son iguales, excepto por su nombre.
  </Step>

  <Step>
    En _src/main.tf_, agregue nuevas variables para el módulo Condiciones del host:

    ```hcl
    variable "cpu_critical" {default = 89}
    variable "cpu_warningl" {default = 79}
    variable "diskPercentage" {default = 69}
    ```

    El uso de variables como estas hace que tu configuración sea más dinámica.
  </Step>

  <Step>
    Actualice `HostConditions` para usar las variables `cpu_critical`, `cpu_warning` y `diskPercentage` :

    ```hcl
    module "HostConditions" {
    	source = "git::https://github.com/jsbnr/demo-terraform.git"
    	policyId = newrelic_alert_policy.DemoPolicy.id
    	cpu_critical = var.cpu_critical
    	cpu_warning = var.cpu_warninig
    	diskPercent = var.dskPercentage
    }
    ```
  </Step>

  <Step>
    Ejecute `terragrunt plan`:

    ```bash
    terragrunt plan
    ```

    Los valores `HostConditions` ahora incluyen los valores predeterminados de las variables.
  </Step>

  <Step>
    En _nonprod/terragrunt.hcl_, agregue valores para sus variables:

    ```hcl
    inputs = {
    	newrelic_personal_apikey = "NRAK-***" # Your New Relic account ID
    	newrelic_account_id = "12345" # Your New Relic account ID
    	newrelic_region = "US" # US or EU (defaults to US)

    	cpu_critical = 50
    	cpu_warninig = 40
    	diskPercentage = 98
    }
    ```

    Esto pasa los valores a la configuración de su entorno.
  </Step>

  <Step>
    Ejecute `terragrunt apply`:

    ```bash
    terragrunt apply
    ```

    En su cuenta New Relic, tiene una nueva política con una configuración no específica de producto.
  </Step>
</Steps>

## Conclusión

¡Felicidades! Ha utilizado Terragrunt para generar la configuración de New Relic y administrar múltiples entornos. Revise el [ejemplo de introducción de Terragrunt](https://github.com/jsbnr/nr-terragrunt-intro-example), [la documentación del proveedor New Relic Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs) y [el inicio rápido de Terragrunt](https://terragrunt.gruntwork.io/docs/getting-started/quick-start/) para aprender cómo puede llevar su configuración al siguiente nivel.
