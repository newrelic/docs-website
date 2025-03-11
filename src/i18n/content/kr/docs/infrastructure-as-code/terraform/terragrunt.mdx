---
title: Terragrunt를 사용한 여러 환경 관리
metaDescription: 'Learn how to use [Terragrunt](https://www.terraform.io/) to manage configurations in multiple environments'
freshnessValidatedDate: never
translationType: human
---

[Terraform](https://www.terraform.io/)은 HashiCorp에서 구축한 인기 있는 코드형 인프라 소프트웨어 도구입니다. 이를 사용해 뉴렐릭 <InlinePopover type="dashboards"/>과 알림 등 모든 유형의 인프라와 서비스를 프로비저닝합니다.

[Terragrunt](https://terragrunt.gruntwork.io/#:~:text=Terragrunt%20is%20a%20thin%20wrapper,modules%2C%20and%20managing%20remote%20state.)는 다음을 위한 추가 도구를 제공하는 Terraform의 씬 래퍼입니다.

* 반복 감소
* 여러 Terraform 모듈로 작업
* 원격 상태 관리

이 가이드에서는 Terragrunt를 사용하여 다음을 수행합니다.

* Terraform 구성 생성
* 파일 생성
* 여러 환경 관리

<Video
  id="ivbp4e8t1f"
  type="wistia"
/>

## 시작하기 전에

이 가이드를 사용하려면 뉴렐릭과 Terraform에 대한 기본 지식이 있어야 합니다.

먼저, 다음을 설치합니다.

* [뉴렐릭 에이전트를 호스트에 설치](/docs/infrastructure/install-infrastructure-agent)
* [Terraform CLI 설치](https://www.terraform.io/intro/getting-started/install.html)
* [Terragrunt 설치](https://terragrunt.gruntwork.io/docs/getting-started/install/)

이 가이드의 예시를 따르려면 [GitHub](https://github.com/jsbnr/nr-terragrunt-intro-example)에서 예시 코드를 찾을 수 있습니다.

## 구성 생성

Terragrunt는 Terraform 구성을 위한 추가 도구를 제공합니다. 여기에서는 Terragrunt, Terraform 및 뉴렐릭을 사용해 구성을 생성합니다.

<Steps>
  <Step>
    작업 공간을 초기화합니다.

    ```bash
    mkdir terragrunt-config && cd terragrunt-config
    ```
  </Step>

  <Step>
    새 폴더에서 _terragrunt.hcl_ 파일을 만듭니다.

    ```bash
    touch terragrunt.hcl
    ```
  </Step>

  <Step>
    다음으로 _dev_라는 하위 폴더가 있는 _environments_ 폴더를 만듭니다.

    ```bash
    mkdir -p environments/dev
    ```
  </Step>

  <Step>
    그런 다음 _main.tf_ 및 _provider.tf_ 파일이 포함된 _src_ 폴더를 만듭니다.

    ```bash
    mkdir src
    touch src/main.tf
    touch src/provider.tf
    ```

    _main.tf_에서 Terraform 리소스를 구성하고 _provider.tf_에서 provider를 구성합니다.
  </Step>

  <Step>
    _src/provider.tf_에서, [뉴렐릭 provider](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs)를 구성합니다.

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
    _src/main.tf_ 에서, `DemoPolicy` 라는 New Relic 알림 정책을 추가합니다.

    ```hcl
    resource "newrelic_alert_policy" "DemoPolicy" {
    	name = "My Demo Policy"
    }
    ```
  </Step>

  <Step>
    _environments/dev_에서 _terragrunt.hcl_이라는 파일을 만듭니다.

    ```bash
    touch environments/dev/terragrunt.hcl
    ```
  </Step>

  <Step>
    여기에 다음 `include` 문을 추가합니다.

    ```hcl
    include {
    	path = find_in_parent_folders()
    }
    ```

    이는 Terragrunt가 상위 폴더에서 발견하는 .hcl 구성 파일을 사용하도록 지시합니다.
  </Step>

  <Step>
    Terragrunt에 소스 참조를 제공하려면 [`terraform`](https://terragrunt.gruntwork.io/docs/reference/config-blocks-and-attributes/#terraform) 블록을 추가합니다.

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
    _src/provider.tf_에서, API 키, 계정 ID 및 지역으로 뉴렐릭 provider를 구성합니다.

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

    구성을 동적으로 유지하기 위해 변수를 사용합니다.
  </Step>

  <Step>
    _environments/dev_에서 terragrunt를 초기화합니다.

    ```bash
    terragrunt init
    ```

    그러면 환경 변수를 포함하여 약간의 컨텍스트가 설정되고 `terraform init`가 실행됩니다.

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
    _environments/dev/terragrunt.hcl_에 `inputs` 블록을 추가하여 뉴렐릭 계정 변수에 대한 값을 제공합니다.

    ```hcl
    inputs = {
    	newrelic_personal_apikey = "NRAK-*<DNT>**" # Your New Relic account ID
    	newrelic_account_id = "12345" # Your New Relic account ID
    	newrelic_region = "US" # US or EU (defaults to US)
    }
    ```
  </Step>

  <Step>
    이제 `terragrunt plan`을 실행합니다.

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

    Terragrunt는 `inputs` 블록의 값을 제공합니다.
  </Step>

  <Step>
    `terragrunt apply`를 실행합니다.

    ```bash
    terragrunt apply
    ```

    이제 데모 정책이 뉴렐릭 계정에 생깁니다.
  </Step>
</Steps>

## 구성에 추가

이제 기본 뉴렐릭 구성을 생성했으므로 [뉴렐릭 및 Terraform으로 시작하기](/docs/more-integrations/terraform/terraform-intro/) 및 [Terraform 모듈](/terraform/terraform-modules) 가이드의 구성을 추가합니다.

<Callout variant="tip">
  아직 이 가이드를 완료하지 않았다면 [Terragrunt 소개 Github 리포지터리](https://github.com/jsbnr/nr-terragrunt-intro-example)에서 해당 구성을 복사할 수 있습니다.
</Callout>

<Steps>
  <Step>
    _src/main.tf_에서, 알림 채널의 이메일 주소를 원하는 이메일 주소로 업데이트합니다.

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

    여기서는 뉴렐릭 알림 채널을 추가하고, 알림 채널에 데모 정책을 구독하고, Github에서 호스팅되는 모듈을 추가했습니다.
  </Step>

  <Step>
    `terragrunt init`를 실행한 후 `terragrunt apply`를 실행합니다.

    ```bash
    terragrunt init
    terragrunt apply
    ```

    Terraform이 처리를 완료하면 알림 정책에 두 가지 조건과 하나의 알림 채널이 생깁니다.
  </Step>
</Steps>

## 환경을 Terragrunt 변수로 사용하기

Terragrunt를 사용하면, 생성 중인 데이터 이름에 실행 중인 환경 이름을 추가하여 뉴렐릭에서 리소스를 더 쉽게 식별할 수 있습니다.

<Steps>
  <Step>
    루트 _terragrunt.hcl_ 파일에서 `env_name`에 대한 입력을 만듭니다.

    ```hcl
    inputs = {
    	env_name = "develop"
    }
    ```
  </Step>

  <Step>
    _src/main.tf_에서, 파일에 `env_name`이라는 새 변수를 추가합니다.

    ```hcl
    variable "env_name" {}
    ```
  </Step>

  <Step>
    알림 정책과 알림 채널 리소스 블록에 새 `env_name` 변수를 추가합니다.

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
    `terragrunt plan`을 실행하여 정책 이름에 추가된 환경 변수를 확인합니다.

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

    여기에서는 _terragrunt.hcl_에 환경을 하드코딩했습니다. 이를 더욱 동적으로 만들려면 terragrunt 내장 기능을 사용하여 환경을 확보할 수 있습니다.
  </Step>

  <Step>
    루트 _terragrunt.hcl_ 파일에서 `path_relative_to_include()`를 사용하도록 입력을 업데이트하고 값을 `env_name` 변수로 전달합니다.

    ```hcl
    inputs = {
    	env_name = path_relative_to_include()
    }
    ```
  </Step>

  <Step>
    `terragrunt plan`를 실행합니다.

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

    `env_name` 변수에는 전체 `./environments/dev/` 경로가 포함되어 있습니다. 대신 'dev' 부분만 포함하려고 합니다.
  </Step>

  <Step>
    _terragrunt.hcl_을 업데이트하여 `env_name`에서 'environements/'를 제거합니다.

    ```hcl
    locals {
    	env_name = replace(path_relative_to_include(), "environments/", "")
    }

    inputs = {
    	env_name = local.env_name
    }
    ```

    여기서는 `locals` 블록을 추가하여 로컬 변수를 생성하고 내장된 `replace` 함수를 사용하여 상대 경로에서 원하지 않는 부분을 제거했습니다. 그런 다음 로컬 변수를 사용하도록 `inputs` 블록을 업데이트했습니다.
  </Step>

  <Step>
    `terragrunt plan`를 실행합니다.

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

    새 정책 이름은 'dev: My Demo Policy'입니다.
  </Step>

  <Step>
    구성을 업데이트하려면 `terragrunt apply`를 실행합니다.

    ```bash
    terragrunt apply
    ```
  </Step>
</Steps>

## 상태를 원격 저장소로 이동하기

현재 상태 파일은 로컬입니다. 이제 Terraform 구성을 업데이트하여 이를 Amazon S3에 저장합니다.

<Callout variant="tip">
  Terragrunt를 사용하면 여러 환경을 구성할 수 있으므로 서로 덮어쓰지 않도록 상태 파일을 자체 S3 버킷에 저장해야 합니다.
</Callout>

<Steps>
  <Step>
    개발 상태 파일을 위한 [S3 버킷을 생성합니다](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html).
  </Step>

  <Step>
    [버킷에 파일을 저장할 수 있는 권한이 있는](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html) [IAM 사용자를 생성합니다](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html).
  </Step>

  <Step>
    루트 _terragrunt.hcl_에서, S3에서 파일을 배치할 위치를 Terragrunt에게 알려주는 `remote_state` 블록을 추가합니다.

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

    여기서는 버킷 이름, 지역, 암호화 및 프로필을 지정하는 원격 상태 구성을 정의했습니다. 자리표시자 값을 실제 값으로 바꿉니다. `key`의 경우 이전에 생성한 로컬 `env_name`을 사용하여 상태 파일에 대한 환경을 동적으로 설정했습니다. 마지막으로, 버킷에 _backend.tf_라는 새 파일을 생성하도록 Terragrunt에 지시했습니다.
  </Step>

  <Step>
    `terragrunt plan`를 실행합니다.

    ```bash
    terragrunt plan
    ```

    버킷에 _envs_라는 폴더가 표시됩니다. 그 안에는 _terraform.tfstate_ 파일이 포함된 _devs_라는 폴더가 있습니다.

    <Callout variant="tip">
      `envs/dev` 내부에는 _terragrunt-cache_라는 숨겨진 폴더가 있습니다. 그 안에는 Terragrunt가 생성한 _backend.tf_ 파일이 있습니다.
    </Callout>
  </Step>
</Steps>

## 새 환경 만들기

이제 개발 환경을 구성했으므로 대부분의 작업을 재사용하는 또 다른 개발 환경을 만들어봅니다.

<Steps>
  <Step>
    _environments_ 아래에 _nonprod_라는 폴더를 만듭니다. 여기에 _terragrunt.hcl_이라는 파일을 만듭니다.

    ```bash
    mkdir nonprod && cd nonprod
    touch terragrunt.hcl
    ```
  </Step>

  <Step>
    _environments/nonprod/terragrunt.hcl_에서 _environments/dev/terragrunt.hcl_의 구성을 복사합니다.

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
      비프로덕션 환경에 다른 계정을 사용하는 경우 새 계정 ID, API 키 및 지역으로 `inputs`을 업데이트합니다.
    </Callout>
  </Step>

  <Step>
    _nonprod_ 내에서 `terragrunt init` 및 `terragrunt apply`를 실행합니다.

    ```bash
    terragrunt init
    terragrunt apply
    ```

    Terraform은 'nonprod:' 접두사가 붙은 새로운 리소스 세트를 생성합니다.

    이제 dev와 nonprod라는 두 가지 환경을 만들었지만 이름만 다를 뿐 동일합니다.
  </Step>

  <Step>
    _src/main.tf_에서, 호스트 조건 모듈에 대한 새 변수를 추가합니다.

    ```hcl
    variable "cpu_critical" {default = 89}
    variable "cpu_warningl" {default = 79}
    variable "diskPercentage" {default = 69}
    ```

    이와 같은 변수를 사용하면 구성이 더욱 역동적으로 됩니다.
  </Step>

  <Step>
    `cpu_critical`, `cpu_warning` 및 `diskPercentage` 변수를 사용하도록 `HostConditions`를 업데이트합니다.

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
    `terragrunt plan`를 실행합니다.

    ```bash
    terragrunt plan
    ```

    이제 `HostConditions` 값에 변수 기본값이 포함됩니다.
  </Step>

  <Step>
    _nonprod/terragrunt.hcl_에서, 변수에 값을 추가합니다.

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

    그러면 값이 환경 구성으로 전달됩니다.
  </Step>

  <Step>
    `terragrunt apply`를 실행합니다.

    ```bash
    terragrunt apply
    ```

    뉴렐릭 계정에 nonprod별 구성이 포함된 새로운 정책이 생깁니다.
  </Step>
</Steps>

## 결론

축하합니다! Terragrunt를 사용하여 뉴렐릭 구성을 생성하고 여러 환경을 관리해보았습니다. [Terragrunt 소개 예시](https://github.com/jsbnr/nr-terragrunt-intro-example), [뉴렐릭 Terraform provider 문서](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs) 및 [Terragrunt 퀵스타트](https://terragrunt.gruntwork.io/docs/getting-started/quick-start/)를 검토하여 구성을 한 단계 더 발전시킬 수 있는 방법을 알아보십시오.
