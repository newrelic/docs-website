---
title: Instrumentación métrica a nivel de código de agente Go
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: 'For the New Relic Go language agent, once you enable code-level metrics, you can fine-tune how your metrics are collected.'
freshnessValidatedDate: never
translationType: machine
---

Después de haber activado la métrica a nivel de código siguiendo los pasos de [la configuración métrica a nivel de código del agente Go](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config), puede ajustar cómo se recopilan sus métricas mediante el uso de instrumentación adicional.

## Transacción instrumentada [#instrument-transactions-clm]

Con la métrica a nivel de código habilitada, el agente Go agregará información de contexto del código fuente a cualquier transacción iniciada mediante una llamada al método `StartTransaction` de la aplicación. Sin cambiar nada de su código de instrumentación existente, esto significa que la ubicación del código fuente se agregará en función de la función que llamó a `StartTransaction`. Esto es cierto incluso si un paquete de instrumentación llama a `StartTransaction` .

Sin embargo, si desea ejercer algún control manual sobre cómo se recopilan las métricas a nivel de código para una transacción en particular, puede agregar una serie de funciones `newrelic.TraceOption` como se describe a continuación:

### Supresión de métricas a nivel de código para una sola transacción [#instrument-transactions-suppress-clm]

Si no desea métricas a nivel de código para una transacción en particular (por ejemplo, para evitar la sobrecarga de recopilar información cuando sabe que no necesitará esos datos), agregue una función `WithoutCodeLevelMetrics` al final de `StartTransaction` llamar:

```go
txn := app.StartTransaction("nothing-here-to-see", newrelic.WithoutCodeLevelMetrics())
defer txn.End()
```

### Ajustar el prefijo de la ruta del archivo [#instrument-transactions-path-prefix-clm]

De forma predeterminada, el agente Go informará los nombres de ruta completos (absolutos) de los archivos fuente a los que hace referencia la métrica a nivel de código. La [guía de configuración](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config) tiene información sobre cómo puede truncar los nombres de ruta de los archivos globalmente para comenzar con el nombre de directorio que elija a través de la configuración `ConfigCodeLevelMetricsPathPrefixes` , pero es posible que deba especificar un prefijo de nombre de ruta de archivo diferente para la transacción individual. Si es así, simplemente agregue una opción `WithPathPrefixes` a la transacción:

```go
txn := app.StartTransaction("mytransaction", newrelic.WithPathPrefixes("otherproject/lib/src"))
defer txn.End()
```

Esto significa que, solo para esta transacción, la ruta del archivo fuente de, por ejemplo, `"/usr/src/otherproject/lib/src/main.go"` se abrevia a `"otherproject/lib/src/main.go"`.

Si tiene varios prefijos de ruta que desea utilizar, simplemente páselos como parámetro adicional a `WithPathPrefixes`:

```go
txn := app.StartTransaction("mytransaction", newrelic.WithPathPrefixes("otherproject/lib/src", "myproject/src"))
defer txn.End()
```

### Ajustar el prefijo de ignorar de la heurística de reconocimiento de funciones [#instrument-transactions-ignore-prefix-clm]

De forma predeterminada, el agente Go contiene lógica para omitir funciones en la stack de llamadas que son internas del propio agente, para llegar a la que está instrumentado. La [guía de configuración](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config) tiene información sobre cómo puede cambiar globalmente esta heurística a través de la configuración `ConfigCodeLevelMetricsIgnoredPrefixes`, pero es posible que desee proporcionar un prefijo de ignorar namespace personalizado para una sola transacción. Puede hacerlo agregando una opción `WithIgnoredPrefixes` a la transacción:

```go
txn := app.StartTransaction("mytransaction", newrelic.WithIgnoredPrefixes("github.com/ignore/this/"))
defer txn.End()
```

Puede especificar varios argumentos de cadena para `WithIgnoredPrefixes` si hay varios paquetes cuyas funciones deben ignorarse:

```go
txn := app.StartTransaction("mytransaction", newrelic.WithIgnoredPrefixes("github.com/ignore/this/", "github.com/ignore/that/"))
defer txn.End()
```

Con este cambio, cualquier función de un paquete cuyo nombre comience con `github.com/ignore/this/` (o `github.com/ignore/that/` en el segundo ejemplo) se omitirá para encontrar la función que se está instrumentando.

### Marque explícitamente la ubicación del código [#instrument-transactions-this-location-clm]

Para que sea más fácil identificar el punto de interés que se debe informar, agregue `WithThisCodeLocation` al final de la llamada `StartTransaction` (por ejemplo, si la transacción realmente se inicia dentro de otro framework). Esto obligará a la métrica a nivel de código a informar la ubicación en el código fuente donde se invocó `WithThisCodeLocation` .

```go
txn := app.StartTransaction("mytransaction", newrelic.WithThisCodeLocation())
defer txn.End()
```

### Marque explícitamente cualquier ubicación de código [#instrument-transactions-any-location-clm]

También puede controlar completamente la ubicación en su código fuente que se asociará con una transacción. En esencia, puedes marcar cualquier ubicación llamando `ThisCodeLocation` para obtener un "marcador" para esa ubicación. Luego, use ese marcador guardado con la opción `WithCodeLocation` para una llamada `StartTransaction` :

```go
here := newrelic.ThisCodeLocation()
.
.
.
txn := app.StartTransaction("mytransaction", newrelic.WithCodeLocation(here))
defer txn.End()
```

Si es necesario, puede indicarle a `ThisCodeLocation` que omita una serie de funciones de llamada para que la ubicación informada esté más arriba en la stack de llamadas. Por ejemplo, para omitir 1 llamador, de modo que `here` se refiera al llamador de la función que llama a `ThisCodeLocation`, cambie el ejemplo anterior a:

```go
here := newrelic.ThisCodeLocation(1)
.
.
.
txn := app.StartTransaction("mytransaction", newrelic.WithCodeLocation(here))
defer txn.End()
```

### Marque explícitamente la ubicación del código según el valor de una función [#instrument-transactions-by-function-clm]

Si el código que desea instrumentar está disponible para usted como un valor de tipo `func` , como el nombre de una función o un valor literal de función, puede especificarlo como la ubicación para el informe métrico a nivel de código agregando un `WithFunctionLocation` opción a `StartTransaction`, pasando el valor `func` como parámetro:

```go
func myfunction() { ... }
.
.
.
txn := app.StartTransaction("myfunction", newrelic.WithFunctionLocation(myfunction))
```

o

```go
someFunction := func() {...}
.
.
.
txn := app.StartTransaction("myfunction", newrelic.WithFunctionLocation(someFunction))
```

También puede obtener un valor `CodeLocation` a partir de un valor `func` para usarlo más adelante con la opción `WithCodeLocation` . Compare esto con [el uso que se muestra arriba](#instrument-transactions-any-location-clm) para guardar una ubicación de código con `ThisCodeLocation` para referencia posterior con `WithCodeLocation`. Esta vez hacemos lo mismo pero con un valor `func` :

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

Tenga en cuenta que `FunctionLocation` devuelve un error si el valor que se le pasó no era una función válida o si no se pudo obtener la ubicación del código fuente. Por el contrario, la opción `WithFunctionLocation` establece la métrica a nivel de código basándose en el valor pasado si es posible, pero silenciosamente no hace nada si ocurre un error.

## Agregar opciones personalizadas a controladores envueltos [#instrument-transactions-custom-wrappers-clm]

Las mismas opciones descritas anteriormente que se pueden agregar al final de `StartTransaction` también se pueden agregar a `WrapHandle` y `WrapHandleFunc` para ajustar la colección de métricas a nivel de código asociada con la transacción iniciada por ellos, si se desea (aunque en la mayoría de los casos las funciones `WrapHandle` y `WrapHandleFunc` identificarán correctamente la ubicación del código que se está instrumentando). Por ejemplo:

```go
http.HandleFunc(newrelic.WrapHandleFunc(app, "/endpoint", endpointFunction, newrelic.WithThisCodeLocation()))
```

## Cambiar las opciones de traza después de que haya comenzado una transacción [#instrument-transactions-set-options-clm]

A veces no puede darse el lujo de conocer la ubicación del código hasta que la transacción ya se haya iniciado (tal vez mediante un framework o una función de integración en su nombre). Puede cambiar las opciones de transacción en una transacción existente llamando a su método `SetOption` . El parámetro es un conjunto de funciones `TraceOption` tal como se describe anteriormente. Por ejemplo:

```go
txn := newrelic.FromContext(r.context)
txn.SetOption(newrelic.WithThisCodeLocation())
```

## Mejora del rendimiento con funciones métricas a nivel de código almacenadas en caché [#instrument-transactions-cached-clm]

A menudo, la forma más conveniente de instrumentar una transacción con métrica a nivel de código es llamar a `newrelic.WithThisCodeLocation()` (o una función similar a la descrita anteriormente) dentro de la función instrumentado. Sin embargo, si esa función va a ser llamada muchas veces durante el tiempo de ejecución de su aplicación, sería preferible evitar la sobrecarga de calcular repetidamente la ubicación del código fuente. Esto es especialmente cierto si el código de transacción se ejecutará simultáneamente en muchas goroutines.

Para mitigar esto, el agente Go proporciona versiones _de almacenamiento en caché_ de varias de estas funciones. Operan igual que sus contrapartes sin caché, excepto que solo hacen el trabajo de descubrir la ubicación del código fuente la _primera_ vez que se les llama, y luego simplemente reutilizan ese valor cada vez siguiente.

Para hacer uso de esta característica, necesita crear una variable de almacenamiento en caché llamando a `NewCachedCodeLocation()` y colocarla donde persistirá entre ejecuciones de la transacción instrumentada. Esta variable contendrá el valor almacenado en caché para esa ubicación del código. Luego simplemente use los métodos `FunctionLocation(functionValue)` o `ThisCodeLocation()` tal como usaría las funciones independientes con los mismos nombres, pero en este caso son métodos de su variable `CachedCodeLocation` . Estos métodos son seguros para subprocesos, por lo que puede usarlos en goroutines concurrentes sin agregarles ningún control de concurrencia adicional.

Por ejemplo, en este código configuramos una variable de caché que se usa en el cierre asignado a la variable `myFunc` .

```go
cache := newrelic.NewCachedCodeLocation()

myFunc := func() {
	txn := app.StartTransaction("mytransaction", cache.WithThisCodeLocation())
	defer txn.End()
	// go on to perform the transaction
}
```

(Este ejemplo supone que `app` es el valor `Application` del agente creado cuando se inició el agente y es visible en este fragmento de código).

Ahora podemos llamar a la función `myFunc` muchas veces. Cada invocación (posiblemente simultánea) de `myFunc` tiene una referencia a la variable `cache` . La primera invocación para ejecutar `cache.WithThisCodeLocation()` calculará la ubicación del código fuente en ese punto y lo almacenará en la variable `cache` . Las ejecuciones posteriores de `myFunc` reutilizarán el valor previamente almacenado en `cache`.

Tenga en cuenta que debe usar una variable de caché diferente para cada ubicación de código que desee usar, ya que el objetivo es evaluar esa ubicación solo una vez y luego usar el valor almacenado en caché desde allí. La variable de caché no está diseñada para copiarse ni usarse de otra manera que no sea la documentada aquí y en la documentación del paquete del módulo.

Consulte la [documentación completa del paquete del módulo](https://pkg.go.dev/github.com/newrelic/go-agent/v3/newrelic) Go para obtener más detalles sobre todas las funciones y métodos métricos a nivel de código almacenados en caché que puede emplear.
