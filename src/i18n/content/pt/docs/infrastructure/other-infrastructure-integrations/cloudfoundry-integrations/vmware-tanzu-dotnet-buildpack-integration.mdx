---
title: New Relic .NET para VMware Tanzu
tags:
  - Integrations
  - Cloudfoundry
  - Tanzu
metaDescription: Use our integration to gain increased visibility into the performance of your VMware Tanzu environment.
freshnessValidatedDate: '2024-07-31T00:00:00.000Z'
translationType: machine
---

Esta documentação descreve o buildpack de extensão New Relic .NET para VMware Tanzu e fornece instruções sobre como instalar o bloco. O bloco pode vincular o agente New Relic a aplicativos ..NET Core ou .NET framework para que você possa monitor los em um ambiente VMware Tanzu.

O buildpack de extensão New Relic .NET para VMware Tanzu permite vincular seus aplicativos ..NET Core e framework ao agente New Relic .NET. Isso permite monitor a integridade e o desempenho desses aplicativos, analisar os dados capturados pelo agente e, adicionalmente, correlacionar os dados capturados do agente com as métricas de infraestrutura do VMware Tanzu e os eventos coletados pelo [New Relic Firehose Nozzle](https://network.pivotal.io/products/nr-firehose-nozzle/).

## Pré-requisitos [#prereqs]

Este produto foi testado e é compatível com versões do VMware Tanzu OpsManager até v3.0 e Tanzu aplicativo Service 5.0.

O buildpack de extensão New Relic .NET para VMware Tanzu requer o seguinte:

* Uma conta ativa da New Relic com uma chave de licença. Isso é usado para vincular aplicativos .NET ao agente .NET New Relic.
* Para usar multi-buildpacks no manifesto do aplicativo, você precisa do CLI v6.38 ou posterior. Para obter informações gerais sobre como adicionar buildpacks a manifestos, consulte [Enviando um aplicativo com vários buildpacks](https://docs.pivotal.io/application-service/buildpacks/use-multiple-buildpacks.html) na documentação do Cloud Foundry.
* Para usar a extensão .NET HWC, você precisa do HWC buildpack 3.0.3 ou mais tarde.
* Para usar a extensão .NET Core, você precisa do dotnet core buildpack 2.1.5 ou mais tarde.

A tabela a seguir fornece informações de versão e suporte de versão sobre o buildpack de extensão .NET do New Relic para VMware Tanzu.

<table>
  <thead>
    <tr>
      <th>
        Elemento
      </th>

      <th>
        Detalhes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Versão lado a lado
      </td>

      <td>
        1.1.13
      </td>
    </tr>

    <tr>
      <td>
        Data de lançamento
      </td>

      <td>
        25 de janeiro de 2024
      </td>
    </tr>

    <tr>
      <td>
        Versão do componente de software
      </td>

      <td>
        New Relic 1.1.13
      </td>
    </tr>

    <tr>
      <td>
        Versões compatíveis do Ops Manager
      </td>

      <td>
        2.9.x, 2.10.xe 3.0.x
      </td>
    </tr>

    <tr>
      <td>
        Serviço de aplicativo VMware Tanzu compatível para versões de VM
      </td>

      <td>
        2.10.x, 2.11.x, 2.12.x, 2.13.x, 3.0.x, 4.0.x e 5.0.x
      </td>
    </tr>

    <tr>
      <td>
        Versão de célula-tronco BOSH
      </td>

      <td>
        Ubuntu Jammy
      </td>
    </tr>

    <tr>
      <td>
        Suporte IaaS
      </td>

      <td>
        AWS, GCP, Azure e vSphere
      </td>
    </tr>
  </tbody>
</table>

## instalação [#install]

O buildpack de extensão New Relic .NET para VMware Tanzu pode ser instalado por meio do bloco no Ops Manager. Como alternativa, você pode extrair o arquivo `.Pivotal` e instalar buildpacks de extensão individuais usando o comando cf linha de comando Interface (CLI) `cf create-buildpack`.

Depois de iniciar o monitoramento de seus aplicativos, você pode definir <InlinePopover type="alerts" />com base em quaisquer métricas coletadas pelo agente .NET usando o subsistema de alerta New Relic.

O buildpack de extensão New Relic .NET para VMware Tanzu instala um ou mais dos seguintes buildpacks, dependendo da configuração do bloco (total de 8 buildpacks de extensão):

* New Relic ..NET Core para aplicativo ..NET Core em execução na pilha Ubuntu Jammy 1.\*. Este buildpack de extensão não é armazenado em cache.
* New Relic ..NET Core buildpack em cache de extensão para aplicativo ..NET Core em execução no Ubuntu Jammy 1.\* em implantação desconectada (isolada) do VMware Tanzu. Isto é para apoiar ambientes isolados onde não há acesso ao mundo exterior.
* 3 New Relic HWC para aplicativo .NET Framework em execução na pilha do Windows 2019. Este buildpack de extensão não é armazenado em cache.
* 3 New Relic HWC para aplicativo .NET Framework em execução na pilha do Windows 2019 em implantação desconectada (isolada) do VMware Tanzu. Isto é para apoiar ambientes isolados onde não há acesso ao mundo exterior.

Todos os buildpacks usam a abordagem de vários buildpacks do Cloud Foundry e exigem que o buildpack padrão do .NET Core ou o buildpack HWC sejam especificados como o último buildpack na cadeia de buildpacks, no manifesto do aplicativo ou na linha de comando `cf push` .

<Callout variant="important">
  A versão em cache deste buildpack de extensão para .NET Core e .NET framework contém a versão do agente New Relic .NET `9.1.1`
</Callout>

## Deixe-nos comentários [#feedback]

Se você tiver uma solicitação de recurso, dúvidas ou informações sobre um bug, [envie um problema do GitHub](https://github.com/newrelic/newrelic-dotnet-buildpack-tile/issues).