---
title: Plug-in Fluent Bit para encaminhamento de logs
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - Fluent Bit
metaDescription: 'Install and configure the New Relic logging plugin for Fluent Bit, so you can use enhanced log management capabilities.'
freshnessValidatedDate: '2024-10-30T00:00:00.000Z'
translationType: machine
---

Se seus dados de log já estão sendo monitorados pelo [Fluent Bit](https://fluentbit.io/), você pode usar nosso plug-in de saída Fluent Bit para encaminhar e enriquecer seus dados de log no New Relic.

Encaminhar seu log do Fluent Bit para New Relic lhe dará <InlinePopover type="logs" />recursos aprimorados para coletar, processar, explorar, consultar e alertar sobre seus log dados . Você tem estas opções para instalar o Fluent Bit:

* [Instalação Kubernetes](#k8s-installation)
* [Usando uma imagem Docker](#helm-docker-image)
* [Instalação no host](#on-host-installation)

## Instalação Kubernetes [#k8s-installation]

New Relic tem um [plug-in de saída Fluent Bit](https://github.com/newrelic/newrelic-fluent-bit-output) para encaminhar seu log para New Relic o gerenciamento de log . Você pode instalar este plug-in como uma imagem docker autônoma em um cluster do Kubernetes, onde ele funciona como um DaemonSet, também conhecido como plug-in Kubernetes .

Você pode instalá-lo em seu cluster usando nosso [gráfico Helm](https://github.com/newrelic/helm-charts/tree/master) de duas maneiras:

* Por meio de nossa instalação guiada
* Instalação manual

### Usando nossa instalação guiada [#helm-guided-install]

Embora o gráfico [`newrelic-logging`](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging) funcione de forma independente, recomendamos instalá-lo como parte do gráfico [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) .

A melhor maneira de instalar isso é por meio do nosso processo [de instalação guiada](/install/kubernetes/) . Esta instalação guiada gera os comandos Helm necessários para instalá-lo.

### Instalação manual

Você pode instalá-lo manualmente usando o Helm, embora essa opção não seja recomendada. Execute este comando para instalar o repositório:

```bash
    helm repo add newrelic https://helm-charts.newrelic.com
```

Para atualizar o repositório, execute este comando:

```bash
    helm repo update newrelic
```

<Callout variant="tip">
  Veja nosso [parâmetro de configuração compatível](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#supported-configuration-parameters) em nosso `newrelic-logging` gráfico do Helm.
</Callout>

Consulte [Desinstalar a integração do Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/installation/uninstall-kubernetes/) se quiser desinstalá-la.

## Usando uma imagem Docker [#helm-docker-image]

Se você tiver sua própria integração personalizada Kubernetes , recomendamos usar nossa [imagem docker](https://hub.docker.com/r/newrelic/newrelic-fluentbit-output) que vem com o plug-in [`newrelic-fluent-bit-output`](https://github.com/newrelic/newrelic-fluent-bit-output) . Ou você pode usar a imagem do docker como imagem base e sobrepor seus próprios arquivos de configuração personalizados.

## Instalação no host [#on-host-installation]

Para uma instalação no host do plug-in Fluent Bit, siga estas etapas:

1. Abra New Relic [o repositório de plug-ins Fluent Bit](https://github.com/newrelic/newrelic-fluent-bit-output) do no GitHub.

2. Na página do repositório, [clone ou baixe o repositório](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

3. Execute este comando para construir seu plug-in:

```sh
cd newrelic-fluent-bit-output && make all
```

4. Armazene `out_newrelic.so` ou `out_newrelic_winXX.dll` em um local onde o daemon `fluent-bit` possa acessá-los.

<Callout variant="tip">
  Se você preferir não compilar o plug-in, baixe versões pré-compiladas da [página de lançamentos do nosso repositório GitHub](https://github.com/newrelic/newrelic-fluent-bit-output/releases).
</Callout>

### Atualize o plug-in Fluent Bit [#upgrade-plugin]

Antes de atualizar seu plug-in Fluent Bit, execute a seguinte consulta NRQL para encontrar as versões atuais do plug-in de saída que você está usando em seu sistema:

```sql
FROM K8sContainerSample 
SELECT latest(containerImage) 
WHERE podName like '%newrelic-logging%' 
FACET clusterName
```

<Callout variant="caution">
  As [vulnerabilidades de segurança (CVE-2024-4323)](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-4323) afetam as versões 1.16.0-1.19.2 do plug-in de saída Fluent Bit. Se você estiver usando uma dessas versões, atualize para a versão 2.0.0 ou superior. Para mais informações sobre isso, consulte nosso boletim de segurança [NR24-01 - Fluent Bit](/docs/security/new-relic-security/security-bulletins/security-bulletin-nr24-01/).
</Callout>

Para atualizar, siga as instruções de instalação ou obtenha a versão pré-compilada mais recente do nosso [repositório GitHub](https://github.com/newrelic/newrelic-fluent-bit-output/releases).

## Configurar o plug-in Fluent Bit [#configure-plugin]

O Fluent Bit precisa saber a localização do plug-in New Relic e do New Relic <InlinePopover type="licenseKey" />para enviar dados para o New Relic.

<Callout variant="important">
  Preste atenção aos espaços em branco ao editar seus arquivos de configuração. Certifique-se de usar quatro espaços para recuar e um espaço entre chaves e valores.
</Callout>

Para configurar seu plug-in Fluent Bit, siga estas etapas:

1. Localize ou crie o arquivo `plugins.conf` no diretório do seu plug-in.

2. No arquivo `plugins.conf` , adicione uma referência a `out_newrelic.so`, adjacente ao seu arquivo `fluent-bit.conf` :

```ini
[PLUGINS]
    Path /PATH/TO/newrelic-fluent-bit-output/out_newrelic.so
```

3. No arquivo `fluent-bit.conf` , adicione a seguinte linha no bloco `service` :

```ini
[SERVICE]
    # This is the main configuration block for fluent bit.
    # Ensure the follow line exists somewhere in the SERVICE block
    Plugins_File plugins.conf
```

4. Na parte inferior do arquivo `fluent-bit.conf` , adicione o seguinte para configurar as seções de entrada, filtro e saída. Substitua o texto do espaço reservado pelo seu <InlinePopover type="licenseKey" />:

   ```ini
   [INPUT]
       Name tail
       Tag  my.tag
       Path /PATH/TO/YOUR/LOG/FILE
       
   # If you have multiple sources, just add another [INPUT] section like this:
   [INPUT] 
       Name tail 
       Tag  my.other.tag 
       Path /PATH/TO/SOME/OTHER/LOG/FILE 

   # Having multiple [FILTER] blocks allows you to control the flow of changes as they read top down. 
   [FILTER]
       Name modify
       # Here we only match on one tag, my.tag, defined in the [INPUT] section earlier
       Match  my.tag
       # Below, we're renaming the host.cpu attribute to CPU
       Rename host.cpu CPU

   [FILTER]
       Name   record_modifier
       # Match on all tags, *, so all logs get decorated per the Record clauses below. Record adds attributes + their values to each record.
       Match  *
       # Adding a logtype attribute ensures your logs will be automatically parsed by our built-in parsing rules
       Record logtype nginx
       # Add the server's hostname to all logs generated
       Record hostname ${HOSTNAME}

   [OUTPUT]
       Name       newrelic
       Match      *
       licenseKey YOUR_LICENSE_KEY
   ```

5. Reinicie sua instância do Fluent Bit. Execute este comando:

   ```sh
   fluent-bit -c /PATH/TO/fluent-bit.conf
   ```

## Teste o plug-in Fluent Bit [#test-plugin]

Para testar se o plug-in do Fluent Bit está recebendo entrada de um arquivo de log:

1. Execute este comando para anexar uma mensagem de teste do log ao seu arquivo de log:

   ```sh
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. Pesquise por `test message` em nossa [interface de logs](https://one.newrelic.com/launcher/logger.log-launcher) .

Para mais opções, consulte [o filtro `modify` na documentação do Fluent Bit](https://docs.fluentbit.io/manual/pipeline/filters/modify). Veja também nossa documentação para [encaminhar seu log utilizando o agente de infraestrutura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/#automatically-inserted-attributes).

## Opcional: Configurar atributo do plugin [#instrument-plugin]

Depois de instalar e [configurar](#configure-plugin) o plug-in Fluent Bit, você pode usar o seguinte atributo para configurar como o plug-in envia dados para o New Relic:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Chave
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `licenseKey`
      </td>

      <td>
        O <InlinePopover type="licenseKey" />. Use `licenseKey` (<DNT>**recommended**</DNT>) ou `apiKey`, não ambos. Padrão: `none`
      </td>
    </tr>

    <tr>
      <td>
        `maxBufferSize`
      </td>

      <td>
        O tamanho máximo que a carga enviou, em bytes. Padrão: `256000`
      </td>
    </tr>

    <tr>
      <td>
        `maxRecords`
      </td>

      <td>
        O número máximo de registros a serem enviados por vez. Padrão: `1024`
      </td>
    </tr>

    <tr>
      <td>
        `apiKey`
      </td>

      <td>
        <DNT>**Deprecated.**</DNT> Utiliza uma [chave de inserção do New Relic Insights](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api#register), mas é preferível usar o atributo `licenseKey` . Use `licenseKey` ou `apiKey`, não ambos.
      </td>
    </tr>

    <tr>
      <td>
        `endpoint`
      </td>

      <td>
        O padrão é `https://log-api.newrelic.com/log/v1`. Se você estiver usando uma chave da UE, você precisa configurá-la para `https://log-api.eu.newrelic.com/log/v1`
      </td>
    </tr>
  </tbody>
</table>

## Ver dados log [#find-data]

Se você configurou tudo corretamente e o New Relic coleta seus dados, você deverá ver dados de log em ambos os lugares:

* Nossa [interface de registros](https://one.newrelic.com/launcher/logger.log-launcher)

* Nossas ferramentas para executar [a consultaNRQL ](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-query-data/). Por exemplo, você pode executar uma consulta como esta:

```sql
SELECT * 
FROM Log
```

Se você não obtiver nenhum dado após ativar nossos recursos de gerenciamento de log , siga nossos procedimentos padrão log [de resolução de problemas](/docs/logs/troubleshooting/no-log-data-appears-ui/).

## Qual é o próximo? [#what-next]

Explore dados de registro em sua plataforma com nossa [interface de registro](/docs/logs/ui-data/use-logs-ui/).

* Obtenha visibilidade mais profunda dos dados de desempenho do seu aplicativo e da sua plataforma encaminhando seu log com nossos recursos [logs contextualizados](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .

* Configurar [alertas](/docs/alerts/create-alert/create-alert-condition/alert-conditions/).

* [consulte seus dados](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) e [crie dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desativar encaminhamento de logs [#disable]

Para desabilitar os recursos de encaminhamento de log , siga os procedimentos padrão na [documentação do Fluent Bit](https://fluentbit.io/). Você não precisa fazer mais nada no New Relic.