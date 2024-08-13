---
title: Usando Terragrunt para gerenciar vários ambientes
metaDescription: 'Learn how to use [Terragrunt](https://www.terraform.io/) to manage configurations in multiple environments'
freshnessValidatedDate: never
translationType: machine
---

[Terraform](https://www.terraform.io/) é uma ferramenta popular de software de infraestrutura como código desenvolvida pela HashiCorp. Você o usa para provisionar todos os tipos de infraestrutura e serviços, incluindo New Relic <InlinePopover type="dashboards"/>e alerta.

[Terragrunt](https://terragrunt.gruntwork.io/#:~:text=Terragrunt%20is%20a%20thin%20wrapper,modules%2C%20and%20managing%20remote%20state.) é um wrapper fino em torno do Terraform que fornece ferramentas extras para:

* Reduzindo a repetição
* Trabalhando com vários módulos Terraform
* Gerenciando estado remoto

Neste guia, você usa o Terragrunt para:

* Gere sua configuração do Terraform
* Criar arquivos
* Gerenciar vários ambientes

<Video
  id="ivbp4e8t1f"
  type="wistia"
/>

## Antes de você começar

Para usar este guia, você deve ter algum conhecimento básico do New Relic e do Terraform.

Se você ainda não o fez:

* [Instale o agente New Relic Infrastructure ](/docs/infrastructure/install-infrastructure-agent)em seu host
* [Instale a CLI do Terraform](https://www.terraform.io/intro/getting-started/install.html)
* [Instale o Terragrunt](https://terragrunt.gruntwork.io/docs/getting-started/install/)

Para seguir os exemplos neste guia, você pode encontrar código de exemplo no [GitHub](https://github.com/jsbnr/nr-terragrunt-intro-example).

## Crie uma configuração

Terragrunt fornece ferramentas extras para sua configuração do Terraform. Aqui, você cria uma configuração usando Terragrunt, Terraform e New Relic.

<Steps>
  <Step>
    Inicialize um espaço de trabalho:

    ```bash
    mkdir terragrunt-config && cd terragrunt-config
    ```
  </Step>

  <Step>
    Na sua nova pasta, crie um arquivo _terragrunt.hcl_ :

    ```bash
    touch terragrunt.hcl
    ```
  </Step>

  <Step>
    A seguir, crie uma pasta _de ambientes_ com uma subpasta chamada _dev_:

    ```bash
    mkdir -p environments/dev
    ```
  </Step>

  <Step>
    Em seguida, crie uma pasta _src_ com os arquivos _main.tf_ e _provider.tf_ :

    ```bash
    mkdir src
    touch src/main.tf
    touch src/provider.tf
    ```

    Você configura recursos do Terraform em _main.tf_ e provedores em _provider.tf_.
  </Step>

  <Step>
    Em _src/provider.tf_, configurar um [provedor New Relic](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs).

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
    Em _src/main.tf_, adicione uma política de alertas da New Relic chamada `DemoPolicy`:

    ```hcl
    resource "newrelic_alert_policy" "DemoPolicy" {
    	name = "My Demo Policy"
    }
    ```
  </Step>

  <Step>
    Em _ambientes/dev_, crie um arquivo chamado _terragrunt.hcl_:

    ```bash
    touch environments/dev/terragrunt.hcl
    ```
  </Step>

  <Step>
    Nele, adicione a seguinte instrução `include` :

    ```hcl
    include {
    	path = find_in_parent_folders()
    }
    ```

    Isso instrui o Terragrunt a usar qualquer .hcl arquivos de configuração encontrados nas pastas pai.
  </Step>

  <Step>
    Adicione um bloco [`terraform`](https://terragrunt.gruntwork.io/docs/reference/config-blocks-and-attributes/#terraform) para fornecer ao Terragrunt uma referência de origem:

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
    Em _src/provider.tf_, configure o provedor New Relic com uma chave de API, ID de conta e região:

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

    Você usa variáveis para manter sua configuração dinâmica.
  </Step>

  <Step>
    Em _ambientes/dev_, inicialize o terragrunt:

    ```bash
    terragrunt init
    ```

    Isso configura um pouco de contexto, incluindo variáveis de ambiente, e então executa `terraform init`:

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
    Em _environments/dev/terragrunt.hcl_, adicione um bloco `inputs` para fornecer valores para as variáveis da sua conta New Relic:

    ```hcl
    inputs = {
    	newrelic_personal_apikey = "NRAK-*<DNT>**" # Your New Relic account ID
    	newrelic_account_id = "12345" # Your New Relic account ID
    	newrelic_region = "US" # US or EU (defaults to US)
    }
    ```
  </Step>

  <Step>
    Agora, execute `terragrunt plan`:

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

    Terragrunt fornece os valores do bloco `inputs` .
  </Step>

  <Step>
    Execute `terragrunt apply`:

    ```bash
    terragrunt apply
    ```

    Agora sua Política de Demonstração está em sua conta New Relic.
  </Step>
</Steps>

## Adicione à sua configuração

Agora que você criou uma configuração básica do New Relic, adicione as configurações de nossos guias [de introdução ao New Relic e aos](/docs/more-integrations/terraform/terraform-intro/) [módulos Terraform e Terraform](/terraform/terraform-modules) .

<Callout variant="tip">
  Se você ainda não seguiu esses guias, pode copiar a configuração do [repositório Github de introdução do Terragrunt](https://github.com/jsbnr/nr-terragrunt-intro-example).
</Callout>

<Steps>
  <Step>
    Em _src/main.tf_, atualize o endereço de e-mail no canal de alerta para o endereço de e-mail de sua preferência:

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

    Aqui, você adicionou um canal de alerta New Relic, inscreveu a política de demonstração no canal de alerta e adicionou um módulo hospedado no Github.
  </Step>

  <Step>
    Execute `terragrunt init` e depois execute `terragrunt apply`:

    ```bash
    terragrunt init
    terragrunt apply
    ```

    Após a conclusão do processamento do Terraform, sua política de alertas terá duas condições e um canal de alerta.
  </Step>
</Steps>

## Use seu ambiente como uma variável Terragrunt

Com o Terragrunt, você pode adicionar o nome do ambiente que está executando ao nome dos dados que está criando, tornando seu recurso mais identificável no New Relic.

<Steps>
  <Step>
    No arquivo raiz _terragrunt.hcl_ , crie uma entrada para `env_name`:

    ```hcl
    inputs = {
    	env_name = "develop"
    }
    ```
  </Step>

  <Step>
    No _src/main.tf_, file adicione uma nova variável chamada `env_name`:

    ```hcl
    variable "env_name" {}
    ```
  </Step>

  <Step>
    Adicione a nova variável `env_name` à política de alertas e aos blocos de recursos do canal de alerta:

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
    Execute `terragrunt plan` para ver a variável de ambiente adicionada ao nome da sua política:

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

    Aqui, você codificou o ambiente em _terragrunt.hcl_. Para tornar isso mais dinâmico, use uma função integrada do terragrunt para obter o ambiente para você.
  </Step>

  <Step>
    No arquivo raiz _terragrunt.hcl_ , atualize a entrada para usar `path_relative_to_include()` e passe o valor como a variável `env_name` :

    ```hcl
    inputs = {
    	env_name = path_relative_to_include()
    }
    ```
  </Step>

  <Step>
    Execute `terragrunt plan`:

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

    Observe que a variável `env_name` possui todo o caminho `./environments/dev/` . Em vez disso, você deseja incluir apenas a parte “dev”.
  </Step>

  <Step>
    Atualize o _terragrunt.hcl_ para remover "environements/" de `env_name`:

    ```hcl
    locals {
    	env_name = replace(path_relative_to_include(), "environments/", "")
    }

    inputs = {
    	env_name = local.env_name
    }
    ```

    Aqui, você adicionou um bloco `locals` para criar uma variável local e usou a função `replace` integrada para remover as partes indesejadas do caminho relativo. Em seguida, você atualizou o bloco `inputs` para usar a variável local.
  </Step>

  <Step>
    Execute `terragrunt plan`:

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

    O nome da sua nova política é "dev: My Demo Policy".
  </Step>

  <Step>
    Execute `terragrunt apply` para atualizar sua configuração:

    ```bash
    terragrunt apply
    ```
  </Step>
</Steps>

## Mova seu estado para armazenamento remoto

No momento, seu arquivo de estado é local. Agora, você atualiza sua configuração do Terraform para armazená-la no Amazon S3.

<Callout variant="tip">
  Como o Terragrunt permite configurar vários ambientes, você deve armazenar arquivos de estado em seus próprios buckets S3 para que não se sobrescrevam.
</Callout>

<Steps>
  <Step>
    [Crie um bucket S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) para seu arquivo de estado de desenvolvimento.
  </Step>

  <Step>
    [Crie um usuário IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html) com [permissões para armazenar arquivos em seu bucket](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html).
  </Step>

  <Step>
    Na sua raiz _terragrunt.hcl_, adicione um bloco `remote_state` que informa ao Terragrunt onde colocar seu arquivo no S3:

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

    Aqui, você definiu uma configuração de estado remoto que especifica um nome de bucket, região, criptografia e perfil. Certifique-se de substituir os valores do espaço reservado por valores reais. Para `key`, você usou o `env_name` local criado anteriormente para definir dinamicamente o ambiente para o arquivo de estado. Finalmente, você disse ao Terragrunt para gerar um novo arquivo chamado _backend.tf_ em seu bucket.
  </Step>

  <Step>
    Execute `terragrunt plan`:

    ```bash
    terragrunt plan
    ```

    No seu bucket, você verá uma pasta chamada _envs._ Dentro dela há uma pasta chamada _devs_ contendo um arquivo _terraform.tfstate_ .

    <Callout variant="tip">
      Dentro de `envs/dev`, existe uma pasta oculta chamada _terragrunt-cache_. Nele está o arquivo _backend.tf_ que o Terragrunt gerou.
    </Callout>
  </Step>
</Steps>

## Crie um novo ambiente

Agora que você configurou seu ambiente de desenvolvimento, crie outro que reutilize a maior parte do seu trabalho.

<Steps>
  <Step>
    Em _ambientes_, crie uma pasta chamada _nonprod_. Nele, crie um arquivo chamado _terragrunt.hcl_:

    ```bash
    mkdir nonprod && cd nonprod
    touch terragrunt.hcl
    ```
  </Step>

  <Step>
    Em _environments/nonprod/terragrunt.hcl_, copie a configuração de _environments/dev/terragrunt.hcl_:

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
      Se você estiver usando uma conta diferente para seu ambiente que não seja de produção, atualize `inputs` com um novo ID de conta, chave de API e região.
    </Callout>
  </Step>

  <Step>
    Dentro _de nonprod_, execute `terragrunt init` e `terragrunt apply`:

    ```bash
    terragrunt init
    terragrunt apply
    ```

    O Terraform cria um novo conjunto de recursos prefixados com "nonprod:".

    Agora, você criou dois ambientes, dev e nonprod, mas eles são iguais, exceto pelo nome.
  </Step>

  <Step>
    Em _src/main.tf_, adicione novas variáveis para o módulo Host Conditions:

    ```hcl
    variable "cpu_critical" {default = 89}
    variable "cpu_warningl" {default = 79}
    variable "diskPercentage" {default = 69}
    ```

    Usar variáveis como essas torna sua configuração mais dinâmica.
  </Step>

  <Step>
    Atualize `HostConditions` para usar as variáveis `cpu_critical`, `cpu_warning` e `diskPercentage` :

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
    Execute `terragrunt plan`:

    ```bash
    terragrunt plan
    ```

    Os valores `HostConditions` agora incluem os padrões de variáveis.
  </Step>

  <Step>
    Em _nonprod/terragrunt.hcl_, adicione valores para suas variáveis:

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

    Isso passa os valores para a configuração do seu ambiente.
  </Step>

  <Step>
    Execute `terragrunt apply`:

    ```bash
    terragrunt apply
    ```

    Na sua conta New Relic, você tem uma nova política com configuração não específica do produto.
  </Step>
</Steps>

## Conclusão

Parabéns! Você usou o Terragrunt para gerar a configuração do New Relic e gerenciar vários ambientes. Revise o [exemplo de introdução do Terragrunt](https://github.com/jsbnr/nr-terragrunt-intro-example), [a documentação do provedor New Relic Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs) e [o início rápido do Terragrunt](https://terragrunt.gruntwork.io/docs/getting-started/quick-start/) para saber como você pode levar sua configuração para o próximo nível.
