---
title: Go agente nível do código métrico instrumentação
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: 'For the New Relic Go language agent, once you enable code-level metrics, you can fine-tune how your metrics are collected.'
freshnessValidatedDate: never
translationType: machine
---

Depois de ativar o nível do código métrico usando as etapas em [Configuração de nível do código métrica do agente Go](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config), você pode ajustar como suas métricas são coletadas usando instrumentação adicional.

## Transação instrumentada [#instrument-transactions-clm]

Com o nível do código métrico habilitado, o agente Go adicionará informações de contexto do código-fonte a qualquer transação iniciada por uma chamada ao método `StartTransaction` da aplicação. Sem alterar nenhum código de instrumentação existente, isso significa que a localização do código-fonte será adicionada com base na função que chamou `StartTransaction`. Isso é verdade mesmo se `StartTransaction` for chamado por um pacote de instrumentação.

No entanto, se desejar exercer algum controle manual sobre como o nível do código métrico é coletado para uma transação específica, você pode adicionar uma série de funções `newrelic.TraceOption` conforme descrito abaixo:

### Suprimindo nível do código métrico para uma única transação [#instrument-transactions-suppress-clm]

Se você não quiser o nível do código métrico para uma transação específica (digamos, para evitar a sobrecarga de coletar as informações quando você sabe que não precisará desses dados), adicione uma função `WithoutCodeLevelMetrics` ao final de `StartTransaction` chamar:

```go
txn := app.StartTransaction("nothing-here-to-see", newrelic.WithoutCodeLevelMetrics())
defer txn.End()
```

### Ajustando o prefixo do caminho do arquivo [#instrument-transactions-path-prefix-clm]

Por padrão, o agente Go reportará nomes de caminho de arquivo completos (absolutos) para os arquivos de origem referenciados pelo nível do código métrico. O [guia de configuração](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config) contém informações sobre como você pode truncar nomes de caminho de arquivo globalmente para começar com sua escolha de nome de diretório por meio da configuração `ConfigCodeLevelMetricsPathPrefixes` , mas pode ser necessário especificar um prefixo de caminho de arquivo diferente para transações individuais. Se sim, basta adicionar uma opção `WithPathPrefixes` à transação:

```go
txn := app.StartTransaction("mytransaction", newrelic.WithPathPrefixes("otherproject/lib/src"))
defer txn.End()
```

Isso significa que, apenas para esta transação, um nome de caminho de arquivo de origem, por exemplo, `"/usr/src/otherproject/lib/src/main.go"` é abreviado para `"otherproject/lib/src/main.go"`.

Se você tiver vários prefixos de caminho que deseja usar, simplesmente passe-os como parâmetro adicional para `WithPathPrefixes`:

```go
txn := app.StartTransaction("mytransaction", newrelic.WithPathPrefixes("otherproject/lib/src", "myproject/src"))
defer txn.End()
```

### Ajustando o prefixo de ignorar da heurística de reconhecimento de função [#instrument-transactions-ignore-prefix-clm]

Por padrão, o agente Go contém lógica para pular funções da stack chamadas que são internas ao próprio agente, para chegar àquela que você está instrumentado. O [guia de configuração](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config) contém informações sobre como você pode alterar globalmente essa heurística por meio da configuração `ConfigCodeLevelMetricsIgnoredPrefixes` , mas talvez você queira fornecer um prefixo personalizado para ignorar o namespace para uma única transação. Você pode fazer isso adicionando uma opção `WithIgnoredPrefixes` à transação:

```go
txn := app.StartTransaction("mytransaction", newrelic.WithIgnoredPrefixes("github.com/ignore/this/"))
defer txn.End()
```

Você pode especificar vários argumentos de string para `WithIgnoredPrefixes` se houver vários pacotes cujas funções devem ser ignoradas:

```go
txn := app.StartTransaction("mytransaction", newrelic.WithIgnoredPrefixes("github.com/ignore/this/", "github.com/ignore/that/"))
defer txn.End()
```

Com esta mudança, quaisquer funções de um pacote cujo nome comece com `github.com/ignore/this/` (ou `github.com/ignore/that/` no segundo exemplo) serão ignoradas para encontrar a função que está sendo instrumentada.

### Marque explicitamente a localização do código [#instrument-transactions-this-location-clm]

Para facilitar a identificação do ponto de interesse a ser reportado, adicione `WithThisCodeLocation` ao final da chamada `StartTransaction` (por exemplo, se a transação for realmente iniciada dentro de outro framework). Isto forçará o nível do código métrico a reportar a localização no código fonte onde `WithThisCodeLocation` foi invocado.

```go
txn := app.StartTransaction("mytransaction", newrelic.WithThisCodeLocation())
defer txn.End()
```

### Marque explicitamente qualquer localização de código [#instrument-transactions-any-location-clm]

Você também pode controlar totalmente a localização em seu código-fonte a ser associada a uma transação. Basicamente, você pode marcar qualquer local chamando `ThisCodeLocation` para obter um "marcador" para esse local. Em seguida, use esse marcador salvo com a opção `WithCodeLocation` para uma chamada `StartTransaction` :

```go
here := newrelic.ThisCodeLocation()
.
.
.
txn := app.StartTransaction("mytransaction", newrelic.WithCodeLocation(here))
defer txn.End()
```

Se necessário, você pode instruir `ThisCodeLocation` para ignorar uma série de funções de chamada para que o local relatado fique mais acima na stack de chamadas . Por exemplo, para pular 1 chamador, de modo que `here` se refira ao chamador da função que chama `ThisCodeLocation`, altere o exemplo acima para:

```go
here := newrelic.ThisCodeLocation(1)
.
.
.
txn := app.StartTransaction("mytransaction", newrelic.WithCodeLocation(here))
defer txn.End()
```

### Marcar explicitamente a localização do código com base em um valor de função [#instrument-transactions-by-function-clm]

Se o código que você deseja usar como instrumento estiver disponível como um valor do tipo `func` , como o nome de uma função ou um valor literal de função, você poderá especificá-lo como o local para o relatório de nível do código métrico adicionando um `WithFunctionLocation` para `StartTransaction`, passando o valor `func` como parâmetro:

```go
func myfunction() { ... }
.
.
.
txn := app.StartTransaction("myfunction", newrelic.WithFunctionLocation(myfunction))
```

ou

```go
someFunction := func() {...}
.
.
.
txn := app.StartTransaction("myfunction", newrelic.WithFunctionLocation(someFunction))
```

Você também pode obter um valor `CodeLocation` de um valor `func` para uso posterior com a opção `WithCodeLocation` . Compare isso com [o uso mostrado acima](#instrument-transactions-any-location-clm) para salvar um local de código com `ThisCodeLocation` para referência posterior com `WithCodeLocation`. Desta vez fazemos a mesma coisa, mas com um valor `func` :

```go
func myFunc() {...}
.
.
.
locationOfMyFunc, err := newrelic.FunctionLocation(myFunc)
if err != nil {
    // handle the case that the location could not be determined
    // from the value passed to FunctionLocation.
}
.
.
.
txn := app.StartTransaction("mytransaction", newrelic.WithCodeLocation(locationOfMyFunc))
```

Observe que `FunctionLocation` retornará um erro se o valor passado para ele não for uma função válida ou se o local do código-fonte não puder ser obtido a partir dele. Por outro lado, a opção `WithFunctionLocation` define o nível do código métrico com base no valor passado, se possível, mas silenciosamente não faz nada se ocorrer um erro.

## Adicionando opções personalizadas a manipuladores agrupados [#instrument-transactions-custom-wrappers-clm]

As mesmas opções descritas acima que podem ser adicionadas ao final de `StartTransaction` também podem ser adicionadas a `WrapHandle` e `WrapHandleFunc` para ajustar o nível do código métrico da coleção associada à transação iniciada por eles, se desejado (embora na maioria dos casos as funções `WrapHandle` e `WrapHandleFunc` identificarão corretamente a localização do código que está sendo instrumentado). Por exemplo:

```go
http.HandleFunc(newrelic.WrapHandleFunc(app, "/endpoint", endpointFunction, newrelic.WithThisCodeLocation()))
```

## Alterando opções trace após o início de uma transação [#instrument-transactions-set-options-clm]

Às vezes, você não pode se dar ao luxo de saber a localização do código até que a transação já tenha sido iniciada (talvez por uma framework ou função de integração em seu nome). Você pode alterar as opções de transação em uma transação existente chamando seu método `SetOption` . O parâmetro é um conjunto de funções `TraceOption` conforme descrito acima. Por exemplo:

```go
txn := newrelic.FromContext(r.context)
txn.SetOption(newrelic.WithThisCodeLocation())
```

## Melhorando o desempenho com funções de nível do código métrico em cache [#instrument-transactions-cached-clm]

Freqüentemente, a maneira mais conveniente de instrumentar uma transação com nível do código métrico é chamar `newrelic.WithThisCodeLocation()` (ou função semelhante descrita acima) dentro da função instrumentado. No entanto, se essa função for chamada muitas vezes durante o tempo de execução do seu aplicativo, seria preferível evitar a sobrecarga de calcular repetidamente a localização do código-fonte. Isto é especialmente verdadeiro se o código da transação for executado simultaneamente em muitas goroutines.

Para atenuar isso, o agente Go fornece versões _de cache_ de várias dessas funções. Eles operam da mesma forma que seus equivalentes sem cache, exceto que eles apenas fazem o trabalho de descobrir a localização do código-fonte na _primeira_ vez que são chamados e, em seguida, simplesmente reutilizam esse valor nas vezes subsequentes.

Para fazer uso deste recurso, é necessário criar uma variável de armazenamento em cache chamando `NewCachedCodeLocation()` e colocá-la onde ela persistirá entre as execuções da transação instrumentada. Esta variável conterá o valor armazenado em cache para esse local de código. Em seguida, simplesmente use os métodos `FunctionLocation(functionValue)` ou `ThisCodeLocation()` da mesma forma que usaria as funções independentes de mesmo nome, mas neste caso eles são métodos da sua variável `CachedCodeLocation` . Esses métodos são thread-safe, portanto você pode usá-los em goroutines simultâneas sem adicionar nenhum controle de simultaneidade adicional a eles.

Por exemplo, neste código configuramos uma variável de cache que é usada no encerramento atribuído à variável `myFunc` .

```go
cache := newrelic.NewCachedCodeLocation()

myFunc := func() {
	txn := app.StartTransaction("mytransaction", cache.WithThisCodeLocation())
	defer txn.End()
	// go on to perform the transaction
}
```

(Este exemplo pressupõe que `app` é o valor `Application` do agente criado quando o agente foi iniciado e é visível para este trecho de código.)

Agora podemos chamar a função `myFunc` várias vezes. Cada invocação (possivelmente simultânea) de `myFunc` tem uma referência à variável `cache` . A primeira invocação para executar `cache.WithThisCodeLocation()` calculará a localização do código-fonte naquele ponto e o armazenará na variável `cache` . As execuções subsequentes de `myFunc` reutilizarão o valor armazenado anteriormente em `cache`.

Observe que você deve usar uma variável de cache diferente para cada local de código que deseja usar, pois o objetivo é avaliar esse local apenas uma vez e, em seguida, usar o valor armazenado em cache a partir daí. A variável cache não se destina a ser copiada ou usada de outra forma senão conforme documentado aqui e na documentação do pacote do módulo.

Consulte a [documentação completa do pacote do módulo](https://pkg.go.dev/github.com/newrelic/go-agent/v3/newrelic) Go para obter mais detalhes sobre todas as funções e métodos de nível do código métrico em cache que você pode empregar.
