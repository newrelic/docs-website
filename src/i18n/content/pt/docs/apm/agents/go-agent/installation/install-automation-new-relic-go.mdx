---
title: Instrumentação fácil de Go
tags:
  - Agents
  - Go agent
  - Installation
metaDescription: How to use a script to get code suggestions to instrument your Golang apps and services.
freshnessValidatedDate: '2024-08-20T00:00:00.000Z'
translationType: machine
---

<Callout title="visualização">
  Ainda estamos trabalhando nesse recurso, mas adoraríamos que você experimentasse!

  Atualmente, esse recurso é fornecido como parte de um programa de visualização de acordo com nossas [políticas de pré-lançamento](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

Go é uma linguagem compilada com um tempo de execução opaco, o que a torna incapaz de oferecer suporte à instrumentação automática como outras linguagens. Por esse motivo, o agente New Relic Go foi projetado como um SDK. Como o agente Go é um SDK, ele requer mais trabalho manual para configurar do que o agente para linguagens que suportam instrumentação automática.

Em um esforço para facilitar a instrumentação, a equipe do agente Go criou a ferramenta de instrumentação fácil de Go, que está atualmente em versão prévia. Esta ferramenta faz a maior parte do trabalho para você, sugerindo alterações no seu código-fonte que instrumentam seu aplicativo com o agente New Relic Go.

Para começar, confira este [vídeo de quatro minutos](https://asciinema.org/a/r0Il7o2eMiZaLKHIlew3IL2nx) ou pule para [Como funciona](#how-it-works).

## Aviso de pré-visualização [#preview-notice]

<CollapserGroup>
  <Collapser id="preview-usage-details" title="O que você pode esperar desta prévia">
    Atualmente, esse recurso é fornecido como parte de uma prévia do produto e está sujeito às nossas políticas experimentais do New Relic. As alterações de código recomendadas são apenas sugestões e devem estar sujeitas à revisão humana para verificar precisão, aplicabilidade e adequação ao seu ambiente. Este recurso só deve ser utilizado em ambientes não críticos, de não produção e que não contenham dados sensíveis.

    Este projeto, seu código e a UX estão em intenso desenvolvimento, então você deve esperar que eles mudem. Leve isso em consideração ao participar desta prévia. Se você encontrar algum problema, informe-o usando [o Github issues](https://github.com/newrelic/go-easy-instrumentation) e preencha o máximo possível do modelo de problema para que possamos melhorar esta ferramenta.
  </Collapser>
</CollapserGroup>

## Como funciona [#how-it-works]

Esta ferramenta não interfere na operação do seu aplicativo e não faz nenhuma alteração diretamente no seu código. Veja o que acontece:

* Ele analisa seu código e sugere alterações que permitem que o agente Go capture dados de telemetria.
* Você revisa as alterações no arquivo `.diff` e decide quais alterações adicionar ao seu código-fonte.

Como parte da análise, esta ferramenta pode invocar `go get` ou outros comandos da cadeia de ferramentas da linguagem Go que podem modificar seu arquivo `go.mod` , mas não seu código-fonte real.

<Callout variant="important">
  Esta ferramenta não consegue detectar se você já possui instrumentação New Relic. Por favor, use esta ferramenta somente no aplicativo sem nenhuma instrumentação.
</Callout>

## O que é instrumentado? [#what-is-instrumented]

O escopo do que esta ferramenta pode instrumentar em seu aplicativo é limitado a estas ações:

* Capturando erros em qualquer função encapsulada ou rastreada por uma transação
* Rastreando funções definidas localmente que são invocadas no método `main()` do aplicativo com uma transação
* Rastreando funções assíncronas e literais de função com um segmento assíncrono
* Adicionando middleware à biblioteca suportada para rastreamento
* Injetando distributed tracing no tráfego externo

### Bibliotecas suportadas [#supported-libraries]

* biblioteca padrão
* net/http
* gin
* gRPC

## instalação [#go-easy-install]

Antes de iniciar as etapas de instalação abaixo, certifique-se de ter uma versão do Go instalada que esteja dentro da janela de suporte para o [ciclo de vida atual da linguagem de programação Go](https://endoflife.date/go).

Instalar instrumentação Go easy:

```sh
go install github.com/newrelic/go-easy-instrumentation@latest
```

<CollapserGroup>
  <Collapser id="setup-go-path" title="Configurando seu GOPATH">
    Para instalar `go-easy-instrumentation` certifique-se de que `GOPATH` bin esteja em seu `PATH`.

    <CollapserGroup>
      <Collapser id="unix-gopath" title="Mac ou Linux">
        No seu terminal, bashrc ou zshrc, a linha a seguir adiciona o caminho para o seu bin `GOPATH` ao seu `PATH`:

        ```sh
        export PATH=$PATH:$(go env GOPATH)/bin
        ```
      </Collapser>

      <Collapser id="windows-gopath" title="Windows">
        Em um terminal do Windows ou janela do PowerShell, a linha a seguir adicionará o caminho para seu bin `GOPATH` ao seu `PATH`:

        ```sh
        go env -w GOPATH=c:\go-work
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>

## Gerar sugestões de instrumentação [#generate-suggestions]

Esta ferramenta funciona melhor com o Git. Recomendamos que você verifique se seu aplicativo está em uma ramificação sem nenhuma alteração não preparada antes de aplicar qualquer uma das alterações geradas a ele. Depois de verificar isso, siga estas etapas para gerar e aplicar as alterações que instalam o agente New Relic Go em um aplicativo:

1. Execute o seguinte comando CLI para criar um arquivo chamado `new-relic-instrumentation.diff` no seu diretório de trabalho:
   ```sh
   go-easy-instrumentation instrument ../my-application/
   ```
2. Abra o arquivo `.diff` e verifique ou corrija o conteúdo.
3. Quando estiver satisfeito com as sugestões de instrumentação, salve o arquivo e aplique as alterações:
   ```sh
   mv new-relic-instrumentation.diff ../my-application/
   cd ../my-application
   git apply new-relic-instrumentation.diff
   ```

Depois que as alterações forem aplicadas, o aplicativo deverá ser executado com o agente New Relic Go instalado. Se a instalação do agente não estiver funcionando da maneira que você deseja, você pode recuperá-la facilmente usando comandos comuns do Git. Por exemplo, você pode tentar um dos seguintes:

* Guarde as mudanças com `git stash`
* Reverter o código para um commit anterior

## Qual é o próximo? [#what-is-next]

Se você tiver alguma sugestão ou encontrar problemas, crie um [problema no Github](https://github.com/newrelic/go-easy-instrumentation).