---
title: Uso de módulos Terraform y almacenamiento remoto
template: GuideTemplate
metaDescription: 'Learn how to use [Terraform](https://www.terraform.io/) modules in your configurations and store them remotely.'
freshnessValidatedDate: never
translationType: machine
---

[Terraform](https://www.terraform.io/) es una popular herramienta de software de infraestructura como código creada por HashiCorp. Se utiliza para aprovisionar todo tipo de infraestructura y servicios, incluido el panel de control y la alerta de New Relic.

En esta guía, aprenderá a utilizar los módulos de Terraform en su configuración de New Relic. Específicamente, creará módulos, importará datos, almacenará módulos en Github y administrará el estado de forma remota de Amazon S3.

En el video, revisamos pasos adicionales para instalar Terraform y configurar New Relic alerta. Si necesita ayuda para comenzar con Terraform, [Introducción a New Relic y Terraform](/docs/more-integrations/terraform/terraform-intro/) muestra cómo instalar Terraform, configurar la alerta New Relic y especificar un canal de notificación.

<Video
  id="2gl4kt4j14"
  type="wistia"
/>

## Antes de que empieces

Para utilizar esta guía, debe tener algunos conocimientos básicos tanto de New Relic como de Terraform. Si aún no ha implementado un agente de código abierto de New Relic, [instale New Relic](/docs/agents/manage-apm-agents/installation/install-agent) para su aplicación. Además, [instale Terraform CLI](https://www.terraform.io/intro/getting-started/install.html).

Comience inicializando un directorio de trabajo:

```bash
mkdir terraform-config && cd terraform-config
```

Para seguir los ejemplos de esta guía, el código de ejemplo adjunto está disponible en [GitHub.](https://github.com/jsbnr/nr-terraform-intro-example)

```bash
git clone https://github.com/jsbnr/nr-terraform-intro-example.git
```

<Steps>
  <Step>
    ## Crear un módulo Terraform

    Los módulos de Terraform le permiten reutilizar, compartir y almacenar su configuración de Terraform utilizando el control de versiones como Github. En los siguientes pasos, moverá su configuración de New Relic a un módulo reutilizable.

    Primero, en la raíz de su proyecto, cree un nuevo directorio para almacenar sus módulos llamado `modules`:

    ```bash
    mkdir modules && cd modules
    ```

    En el directorio de módulos, cree un nuevo directorio para un nuevo módulo llamado HostConditions y cree un nuevo archivo llamado `main.tf`:

    ```bash
    mkdir HostConditions && cd HostConditions
    touch main.tf
    ```

    Elimine las dos condiciones de alerta del archivo `main.tf` del proyecto raíz y cópielas en el nuevo archivo `main.tf` en el directorio `HostConditions` .

    En el archivo `main.tf` del directorio raíz, llame al nuevo módulo usando un bloque de módulo:

    ```hcl
    module "HostConditions" {
      source = "./modules/HostConditions"
    }
    ```

    Intente probar su configuración, ejecute `terraform plan` y `terraform init`:

    ```bash copyable=false
    [output] {muted}# Example output
    [output] ------------------------------------------------------------------------
    [output] 
    [output] Initializing modules...
    [output] - HostConditions in
    [output] 
    [output] Error: Unreadable module directory
    [output] 
    [output] Unable to evaluate directory symlink: lstat modules/HostConditions: no such
    [output] file or directory
    [output] 
    [output] 
    [output] Error: Failed to read module directory
    [output] 
    [output] Module directory  does not exist or cannot be read.
    [output] 
    [output] 
    [output] Error: Unreadable module directory
    [output] 
    [output] Unable to evaluate directory symlink: lstat modules/HostConditions: no such
    [output] file or directory
    [output] 
    [output] 
    [output] Error: Failed to read module directory
    [output] 
    [output] Module directory  does not exist or cannot be read.
    ```

    Ve un error en su consola debido a la falta de detalles del proveedor en su directorio de módulos. Para corregir el error, cree una copia del archivo raíz proveedor.tf en su directorio `HostConditions` :

    ```hcl
    provider "newrelic" {
     account_id = 12345 # Your New Relic account ID
     api_key = "NRAK-zzzzzz" # Your New Relic user key
     region = "US" # US or EU (defaults to US)
    }
    ```

    Intente probar su configuración, ejecute `terraform plan` y `terraform init`:

    ```bash copyable=false
    [output] {muted}# Example output
    [output] ------------------------------------------------------------------------
    [output] 
    [output] Error: Reference to undeclared resource
    [output] 
    [output]   on modules/HostConditions/main.tf line 2, in resource "newrelic_infra_alert_condition"
    [output] "cpuhot":
    [output]    2:   policy_id = newrelic_alert_policy.DemoPolicy.id
    [output] 
    [output] A managed resource "newrelic_alert_policy" "DemoPolicy" has not been declared
    [output] in module.HostConditions.
    [output] 
    [output] 
    [output] Error: Reference to undeclared resource
    [output] 
    [output]   on modules/HostConditions/main.tf line 24, in resource "newrelic_infra_alert_condition"
    [output] "highDiskUsage":
    [output]   24:   policy_id = newrelic_alert_policy.DemoPolicy.id
    [output] 
    [output] A managed resource "newrelic_alert_policy" "DemoPolicy" has not been declared
    [output] in module.HostConditions.
    ```

    Terraform init ya no muestra un error, pero la ejecución de terraform plan aún provoca que se produzca un error.

    El error se debe a que el ID de política utilizado en `./modules/HostConditions/provider.tf` no existe. Se necesita una variable para pasar al módulo.
  </Step>

  <Step>
    ## Crear una variable

    Las variables pasan detalles a su módulo y establecen valores predeterminados.

    Primero, en la parte superior de tu `HostConditions/provider.tf` crea una nueva variable:

    ```hcl
    variable "providerId" {}
    ```

    A continuación, en el bloque de recursos, reemplace el `policyId` existente con la nueva variable:

    ```hcl
    var.policy
    ```

    ### Pasar una variable a un módulo

    Para hacer que un módulo sea dinámico, pasará sus variables al módulo usando el bloque de recursos del módulo.

    En el directorio raíz `main.tf`, actualice el bloque del módulo para agregar la variable `policyId` :

    ```hcl
    module "HostConditions" {
      source = "./modules/HostConditions"
      policyId = newrelic_alert_policy.DemoPolicy.id
    }
    ```

    Ejecute `terraform plan` después de agregar su variable al módulo.

    ```bash
    terraform plan
    ```

    Ahora, agregue más variables y reemplace los valores CPU crítica, advertencia de CPU y porcentaje de disco. Luego, pase las nuevas variables al módulo.

    Agregue las nuevas variables a `HostConditions/main.tf`:

    ```hcl
    variable cpu_warning {}
    variable cpu_critical {}
    variable diskPercent {}
    ```

    Actualice la condición de alerta para usar las nuevas variables agregadas en `HostConditons/main.tf`:

    ```hcl
    resource "newrelic_infra_alert_condition" "cpuhot" {
      policy_id = var.policyId

      name       = "CPU hot!"
      type       = "infra_metric"
      event      = "SystemSample"
      select     = "cpuPercent"
      comparison = "above"
      where      = "(hostname LIKE '%myhost%')"

      critical {
        duration      = 5
        value         = var.cpu_critical
        time_function = "all"
      }
      warning {
        duration      = 5
        value         = var.cpu_warning
        time_function = "all"
      }
    }

    resource "newrelic_infra_alert_condition" "highDiskUsage" {
      policy_id = var.policyId

      name       = "high disk usage"
      type       = "infra_metric"
      event      = "SystemSample"
      select     = "diskUsedPercent"
      comparison = "above"
      where      = "(hostname LIKE '%myhost%')"

      critical {
        duration      = 5
        value         = var.diskPercent
        time_function = "all"
      }
    }
    ```

    Ejecute `terraform plan` después de agregar sus variables al módulo. Aparece un mensaje de error debido a que faltan valores de variables. Los valores se pueden agregar en el bloque del módulo o como valores predeterminados.

    ```bash
    terraform plan
    ```

    ### Agregar valores predeterminados

    Agregue valores de variables predeterminados a `HostConditions/main.tf`:

    ```hcl
    variable cpu_warning { default=80}
    variable cpu_critical { default=90}
    variable diskPercent { default=60 }
    ```

    ### Pasar valores de variables usando el bloque de módulo

    En el directorio raíz `main.tf`, actualice el bloque del módulo para agregar las variables `cpu_critical`, `cpu_warning` y `diskPercentage` :

    ```hcl
    module "HostConditions" {
      source = "./modules/HostConditions"
      policyId = newrelic_alert_policy.DemoPolicy.id
      cpu_critical = 88
      cpu_warning = 78
      diskPercentage = 66
    }
    ```

    Ejecute `terraform plan` después de agregar sus variables al módulo.

    ```bash
    terraform plan
    ```
  </Step>

  <Step>
    ## Reutilizar un módulo

    Puede reutilizar su módulo conectándose a una política de New Relic que ya existe. Antes de comenzar, en su cuenta New Relic , cree una nueva política de alertas llamada **Política preexistente**.

    ### Conectando una política de alertas existente

    Primero, en su archivo raíz `main.tf` agregue el bloque de datos para importar una política existente:

    ```hcl
    data "newrelic_alert_policy" "ExistingPolicy" {
    	name = "Preexisting Policy"
    }
    ```

    A continuación, cree un segundo nombre de bloque de módulo `HostConditions2`. Agregar la condición de alerta a la Póliza Preexistente.

    ```hcl
    module "HostConditions2" {
      source = "./modules/HostConditions"
      policyId = data.newrelic_alert_policy.ExistingPolicy.id
      cpu_critical = 87
      cpu_warning = 77
      diskPercentage = 67
    }
    ```

    Ejecute `terraform init` para inicializar el nuevo módulo y ejecute `terraform apply` para aplicar los cambios a su cuenta New Relic.

    El script terraform crea una nueva política de alertas y dos condiciones, pero también aplica la condición de alerta a la Política Preexistente.

    Busque en su cuenta New Relic la Política preexistente y vea la condición de alerta agregada para uso elevado de disco y CPU caliente.
  </Step>

  <Step>
    ## Almacenar un módulo en Github

    Después de haber creado un módulo, si desea almacenar el módulo en algún lugar que otras personas puedan usar, Github es la forma de hacerlo.

    ### Crea un nuevo repositorio de Github

    Primero, dentro de su directorio HostModules, inicialice un nuevo repositorio de Github. Agregue su `main.tf` y `provider.tf` al escenario para la confirmación:

    ```bash
    git add main.tf provider.tf
    git commit -m "init"
    ```

    A continuación, utilizando los comandos proporcionados en su nuevo repositorio, envíe su confirmación a Github:

    ```bash
    git remote add origin <repo_url>
    git branch -M main
    git push -u origin main
    ```

    ### Usando un módulo guardado en Github

    Consulte el repositorio de Github y vea que `main.tf` y `provider.tf` ahora están en su repositorio. Copie la URL web del repositorio de GitHub para clonar su repositorio.

    Actualice el archivo raíz `main.tf` usando GitHub como fuente para `HostConditions`:

    ```hcl
    module "HostConditions" {
      source = "git::https://github.com/<your_username>/<your_repo_name>" # Add your repo URL
      policyId = newrelic_alert_policy.DemoPolicy.id
      cpu_critical = 88
      cpu_warning = 78
      diskPercentage = 66
    }

    module "HostConditions2" {
      source = "git::https://github.com/<your_username>/<your_repo_name>" # Add your repo URL
      policyId = data.newrelic_alert_policy.ExistingPolicy.id
      cpu_critical = 87
      cpu_warning = 77
      diskPercentage = 67
    }
    ```

    Ejecute `terraform init` para inicializar el nuevo módulo. Cuando ejecuta `terraform init`, Terraform clona el repositorio localmente. Correr `terraform plan`

    Si necesita actualizar su módulo local con actualizaciones realizadas en el repositorio de git, ejecute `terraform get -update`
  </Step>

  <Step>
    ## Administrar el estado de forma remota en Amazon S3

    El archivo de estado es la representación que tiene terraform sobre los recursos creados. El archivo de estado está en el directorio raíz, pero si se elimina o se daña causaría problemas. El almacenamiento remoto del archivo de estado proporciona seguridad y permite compartir y acceder de forma remota.

    En `provider.tf` en el directorio raíz, agregue un bloque de backend de terraform para Amazon S3:

    ```hcl
    terraform {
    	backend "s3" {
    		bucket = "<s3_bucket_name>"
    		key = "<s3_bucket_key>"
    		region = "<s3_bucket_region>"
    	}
    }
    ```

    Se necesitan variables para proporcionar los detalles correctos del depósito S3 y se requiere acceso.

    Para otorgar acceso al depósito S3 en su cuenta de Amazon, cree un usuario de IAM. Otorgue al usuario de IAM acceso al depósito de S3 que almacena el estado de terraform.

    Agregue el perfil al bloque backend de Terraform:

    ```hcl
    terraform {
    	backend "s3" {
    		bucket = "<s3_bucket_name>"
    		key = "<s3_bucket_key>"
    		region = "<s3_bucket_region>"
    		profile = "<iam_user_profile_name>"
    	}
    }
    ```

    Antes de guardar su estado en Amazon S3, destruya la configuración actual para comenzar desde cero:

    ```bash
    terraform destroy
    ```

    Inicialice Terraform, ejecute Terraform init:

    ```bash
    terraform init
    ```

    En la terminal, la salida muestra el backend inicializado como S3. Eliminar el estado local ya que no es necesario.

    ```bash
    rm terraform.*
    ```

    Ejecute `terraform apply` para aplicar los cambios de configuración de Terraform.

    ```bash
    terraform apply
    ```

    El archivo de estado ahora se almacena en S3 en lugar de localmente. Mire en su depósito S3 y vea que existe el estado de terraformación.
  </Step>
</Steps>

## Conclusión

¡Felicidades! Estás utilizando módulos para hacer que tu configuración de terraform sea más flexible. Revise la [documentación del proveedor New Relic Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs) para saber cómo puede llevar su configuración al siguiente nivel.
