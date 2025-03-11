---
title: Usando módulos Terraform e armazenamento remoto
template: GuideTemplate
metaDescription: 'Learn how to use [Terraform](https://www.terraform.io/) modules in your configurations and store them remotely.'
freshnessValidatedDate: never
translationType: machine
---

[Terraform](https://www.terraform.io/) é uma ferramenta popular de software de infraestrutura como código desenvolvida pela HashiCorp. Você o usa para provisionar todos os tipos de infraestrutura e serviços, incluindo painel e alerta da New Relic.

Neste guia, você aprende a usar os módulos do Terraform na configuração do New Relic. Especificamente, você criará módulos, importará dados, armazenará módulos no Github e gerenciará remotamente o estado do Amazon S3.

No vídeo, revisamos etapas adicionais de instalação do Terraform e configuração do alerta New Relic. Se precisar de ajuda para começar a usar o Terraform, o [guia Introdução ao New Relic e ao Terraform](/docs/more-integrations/terraform/terraform-intro/) mostra como instalar o Terraform, configurar o alerta do New Relic e especificar um canal de notificação.

<Video
  id="2gl4kt4j14"
  type="wistia"
/>

## Antes de você começar

Para usar este guia, você deve ter algum conhecimento básico do New Relic e do Terraform. Se você ainda não implantou um agente de código aberto New Relic, [instale o New Relic](/docs/agents/manage-apm-agents/installation/install-agent) para seu aplicativo. Além disso, [instale a CLI do Terraform](https://www.terraform.io/intro/getting-started/install.html).

Comece inicializando um diretório de trabalho:

```bash
mkdir terraform-config && cd terraform-config
```

Para seguir os exemplos deste guia, o código de exemplo que o acompanha está disponível no [GitHub](https://github.com/jsbnr/nr-terraform-intro-example)

```bash
git clone https://github.com/jsbnr/nr-terraform-intro-example.git
```

<Steps>
  <Step>
    ## Criando um Módulo Terraform

    Os módulos do Terraform permitem reutilizar, compartilhar e armazenar sua configuração do Terraform usando controle de versão como o Github. Nas próximas etapas, você moverá sua configuração do New Relic para um módulo reutilizável.

    Primeiro, na raiz do seu projeto, crie um novo diretório para armazenar seus módulos chamado `modules`:

    ```bash
    mkdir modules && cd modules
    ```

    No diretório de módulos, crie um novo diretório para um novo módulo chamado HostConditions e crie um novo arquivo chamado `main.tf`:

    ```bash
    mkdir HostConditions && cd HostConditions
    touch main.tf
    ```

    Remova as duas condições do alerta do arquivo `main.tf` do projeto raiz e copie-as para o novo arquivo `main.tf` no diretório `HostConditions` .

    No arquivo `main.tf` do diretório raiz, chame o novo módulo usando um bloco de módulo:

    ```hcl
    module "HostConditions" {
      source = "./modules/HostConditions"
    }
    ```

    Tente testar sua configuração, execute `terraform plan` e `terraform init`:

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

    Você vê um erro no seu console devido à falta de detalhes do provedor no diretório de módulos. Para corrigir o erro, crie uma cópia do provedor raiz.tf em seu diretório `HostConditions` :

    ```hcl
    provider "newrelic" {
     account_id = 12345 # Your New Relic account ID
     api_key = "NRAK-zzzzzz" # Your New Relic user key
     region = "US" # US or EU (defaults to US)
    }
    ```

    Tente testar sua configuração, execute `terraform plan` e `terraform init`:

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

    O init do Terraform não mostra mais um erro, mas a execução do plano terraform ainda causa a ocorrência de um erro.

    O erro ocorre porque o ID da política usado em `./modules/HostConditions/provider.tf` não existe. Uma variável é necessária para passar para o módulo.
  </Step>

  <Step>
    ## Crie uma variável

    As variáveis passam detalhes para o seu módulo e definem valores padrão.

    Primeiro, no topo do seu `HostConditions/provider.tf` crie uma nova variável:

    ```hcl
    variable "providerId" {}
    ```

    A seguir, no bloco de recursos, substitua o `policyId` existente pela nova variável:

    ```hcl
    var.policy
    ```

    ### Passando uma variável para um módulo

    Para tornar um módulo dinâmico, você passará suas variáveis para o módulo usando o bloco de recursos do módulo.

    No diretório raiz `main.tf`, atualize o bloco do módulo para adicionar a variável `policyId` :

    ```hcl
    module "HostConditions" {
      source = "./modules/HostConditions"
      policyId = newrelic_alert_policy.DemoPolicy.id
    }
    ```

    Execute `terraform plan` depois de adicionar sua variável ao módulo.

    ```bash
    terraform plan
    ```

    Agora, adicione mais variáveis e substitua os valores CPU crítica, aviso de CPU e porcentagem de disco. Em seguida, passe as novas variáveis para o módulo.

    Adicione as novas variáveis a `HostConditions/main.tf`:

    ```hcl
    variable cpu_warning {}
    variable cpu_critical {}
    variable diskPercent {}
    ```

    Atualize a condição do alerta para usar as novas variáveis adicionadas em `HostConditons/main.tf`:

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

    Execute `terraform plan` depois de adicionar suas variáveis ao módulo. Uma mensagem de erro é exibida devido à falta de valores de variáveis. Os valores podem ser adicionados no bloco do módulo ou como valores padrão.

    ```bash
    terraform plan
    ```

    ### Adicionando valores padrão

    Adicione valores de variáveis padrão a `HostConditions/main.tf`:

    ```hcl
    variable cpu_warning { default=80}
    variable cpu_critical { default=90}
    variable diskPercent { default=60 }
    ```

    ### Passar valores de variáveis usando bloco de módulo

    No diretório raiz `main.tf`, atualize o bloco do módulo para adicionar as variáveis `cpu_critical`, `cpu_warning` e `diskPercentage` :

    ```hcl
    module "HostConditions" {
      source = "./modules/HostConditions"
      policyId = newrelic_alert_policy.DemoPolicy.id
      cpu_critical = 88
      cpu_warning = 78
      diskPercentage = 66
    }
    ```

    Execute `terraform plan` depois de adicionar suas variáveis ao módulo.

    ```bash
    terraform plan
    ```
  </Step>

  <Step>
    ## Reutilizando um módulo

    Você pode reutilizar seu módulo conectando-se a uma política New Relic que já existe. Antes de começar, em sua conta New Relic , crie uma nova política de alertas chamada **Política Preexistente**.

    ### Conectando uma política de alertas existente

    Primeiro, em seu arquivo raiz `main.tf` adicione o bloco de dados para importar uma política existente:

    ```hcl
    data "newrelic_alert_policy" "ExistingPolicy" {
    	name = "Preexisting Policy"
    }
    ```

    Em seguida, crie um segundo bloco de módulo com o nome `HostConditions2`. Adicione a condição do alerta à Política Pré-existente.

    ```hcl
    module "HostConditions2" {
      source = "./modules/HostConditions"
      policyId = data.newrelic_alert_policy.ExistingPolicy.id
      cpu_critical = 87
      cpu_warning = 77
      diskPercentage = 67
    }
    ```

    Execute `terraform init` para inicializar o novo módulo e execute `terraform apply` para aplicar as alterações à sua conta New Relic.

    O script terraform cria uma nova política de alertas e duas condições, mas também aplica a condição do alerta à Política Pré-Existente.

    Procure em sua conta New Relic a Política Pré-existente e veja a condição do alerta adicionada para CPU Quente e Alto Uso de Disco.
  </Step>

  <Step>
    ## Armazene um módulo no Github

    Depois de criar um módulo, se quiser armazená-lo em algum lugar que outras pessoas possam usar, o Github é como você pode fazer isso.

    ### Crie um novo repositório Github

    Primeiro, dentro do diretório HostModules, inicialize um novo repositório Github. Adicione seu `main.tf` e `provider.tf` ao cenário para confirmação:

    ```bash
    git add main.tf provider.tf
    git commit -m "init"
    ```

    Em seguida, usando os comandos fornecidos em seu novo repositório, envie seu commit para o Github:

    ```bash
    git remote add origin <repo_url>
    git branch -M main
    git push -u origin main
    ```

    ### Usando um módulo salvo no Github

    Verifique o repositório do Github e veja que `main.tf` e `provider.tf` agora estão em seu repositório. Copie o URL da web do repositório GitHub para clonar seu repositório.

    Atualize o arquivo raiz `main.tf` usando GitHub como origem para `HostConditions`:

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

    Execute `terraform init` para inicializar o novo módulo. Quando você executa `terraform init`, o Terraform clona o repositório localmente. Correr `terraform plan`

    Se você precisar atualizar seu módulo local com atualizações feitas no repositório git, execute `terraform get -update`
  </Step>

  <Step>
    ## Gerencie o estado remotamente no Amazon S3

    O arquivo de estado é a representação que o terraform mantém sobre os recursos criados. O arquivo de estado está no diretório raiz, mas se excluído ou corrompido causará problemas. Armazenar o arquivo de estado remotamente fornece segurança e permite compartilhamento e acesso remoto.

    Em `provider.tf` no diretório raiz, adicione um bloco backend terraform para Amazon S3:

    ```hcl
    terraform {
    	backend "s3" {
    		bucket = "<s3_bucket_name>"
    		key = "<s3_bucket_key>"
    		region = "<s3_bucket_region>"
    	}
    }
    ```

    As variáveis são necessárias para fornecer os detalhes corretos do bucket S3 e o acesso é necessário.

    Para conceder acesso ao bucket S3 em sua conta Amazon, crie um usuário IAM. Conceda ao usuário IAM acesso ao bucket S3 que armazena o estado do terraform.

    Adicione o perfil ao bloco backend do terraform:

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

    Antes de salvar seu estado no Amazon S3, destrua a configuração atual para começar do zero:

    ```bash
    terraform destroy
    ```

    Inicialize o Terraform, execute o init do Terraform:

    ```bash
    terraform init
    ```

    No terminal, a saída mostra o backend inicializado como S3. Exclua o estado local, pois não é necessário

    ```bash
    rm terraform.*
    ```

    Execute `terraform apply` para aplicar as alterações de configuração do Terraform.

    ```bash
    terraform apply
    ```

    O arquivo de estado agora é armazenado no S3 em vez de localmente. Olhe em seu bucket S3 e veja se o estado do terraform existe.
  </Step>
</Steps>

## Conclusão

Parabéns! Você está usando módulos para tornar sua configuração do terraform mais flexível. Revise a [documentação do provedor New Relic Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs) para saber como levar sua configuração para o próximo nível.
