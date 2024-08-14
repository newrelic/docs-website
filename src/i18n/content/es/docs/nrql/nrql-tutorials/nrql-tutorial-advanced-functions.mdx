---
title: Utilice funciones NRQL avanzadas
tags:
  - NRQL tutorial
  - 'NRQL: New Relic query language'
  - Get started
  - Tutorial
metaDescription: Learn how to use advanced NRQL functions
freshnessValidatedDate: never
translationType: machine
---

Hasta ahora, ha aprendido los conceptos básicos del uso de NRQL, cómo utilizar NRQL para controlar sus datos y cómo utilizar NRQL para avanzar en su panel de control. En esta serie final de tutoriales, aprenderá las técnicas NRQL más avanzadas que le permitirán consultar absolutamente todo lo que necesite a partir de sus datos. Este tutorial analizará técnicas de agregación adicionales, funciones matemáticas de nivel superior y características avanzadas como el filtrado Regex y la agregación anidada. Específicamente, aprenderá a utilizar:

* La función de agregación `stddev()` y cómo agrupar datos agregados mediante la función `buckets()` .
* Las funciones matemáticas avanzadas disponibles dentro de NRQL para suavizar, sujetar y manipular los datos.
* Cómo descubrir los tipos de eventos y atributos disponibles en tus datos dentro de un período específico.
* Cómo filtrar datos con Regex usando `RLIKE`.
* Cómo utilizar agregaciones anidadas y subconsultas.

Creemos que estas características le resultarán absolutamente invaluables. ¡Empecemos!

### Utilice el agrupamiento con agregación

<Steps>
  <Step>
    La desviación estándar mide la cantidad de variación o dispersión dentro de un conjunto de valores. Utiliza una escala que va desde bajo (valores cercanos a la media) hasta alto (valores alejados de la media). La función `stddev()`le permite mirar entre líneas de promedios y comprender los valores informados en un nivel más profundo. En este ejemplo, se compara la desviación estándar del tiempo de respuesta de la transacción ("duración") del último día con el día anterior.

    ```sql
    SELECT stddev(duration) 
    FROM Transaction 
    SINCE 24 hours ago 
    COMPARE WITH 24 hours ago 
    TIMESERIES
    ```

    <img
      title="Use standard deviation"
      alt="A screenshot showing the use of standard deviation in a query"
      src="/images/queries-nrql_screenshot-crop-tutorial4-1.webp"
    />

    La función `stdvar()` funciona de manera similar a `stddev()` pero devuelve la varianza estándar para el atributo numérico.
  </Step>

  <Step>
    En una lección anterior, aprendió a agrupar datos en una configuración específica de depósitos usando `FACET cases()`. También puede agrupar datos según un atributo específico automáticamente usando `FACET buckets()`. Esta función simplifica la agrupación de datos para cualquier función de agregación y toma tres argumentos:

    `buckets(attribute, ceiling, number-of-buckets)`.

    * El atributo por el que desea agrupar.
    * Valor máximo del rango de muestra (cualquier valor atípico aparecerá en el segmento final).
    * El número total de cubos que necesitas.

      En la consulta de ejemplo, utiliza NRQL para encontrar la duración promedio de una transacción completa. Pero ese desempeño se agrupa en transacciones que realizan volúmenes específicos de llamadas de base de datos. Por lo tanto, especifica el atributo del depósito como `databaseCallCount`, establece el límite en 400 llamadas y lo agrupa en 10 depósitos. Esto da como resultado el rendimiento de transacciones realizando 0-40, 40-80, 80-120, 120-160, 160-200, 200-240, 240-280, 280-320, 320-360 y >360 base de datos. Llamadas. 10 cubos transparentes divididos uniformemente hasta el techo.

      ```sql
      SELECT average(duration) 
      FROM Transaction 
      SINCE 12 hours ago 
      FACET buckets(databaseCallCount, 400, 10)
      ```

      <img
        title="Facet bucketing"
        alt="A screenshot showing the use of facet bucketing in queries"
        src="/images/queries-nrql_screenshot-crop-tutorial4-2.webp"
      />
  </Step>

  ¡Con esto, ya ha aprendido todas las funciones de agregación que existen actualmente en NRQL! Puede dividir y desmenuzar sus datos como un profesional. Si cree que falta una capacidad de agregación en NRQL, infórmeselo a su equipo de cuentas: siempre estamos buscando la próxima funcionalidad excelente que pueda necesitar.
</Steps>

### Utilice funciones matemáticas avanzadas

NRQL también admite funciones matemáticas más avanzadas para aquellos que necesitan profundizar mucho en sus datos. Estas funciones pueden extrapolar valores a la potencia de X, encontrar raíces cuadradas, aplicar sujeción para imponer límites superiores e inferiores, o incluso simplemente mantener valores positivos en el eje Y.

<Steps>
  <Step>
    NRQL tiene muchas funciones matemáticas que manipulan valores de alguna manera. En este ejemplo, verá algunos demostrados simultáneamente.

    La función `abs(n)` devuelve el valor absoluto de n: para n valores no negativos devuelve "n" y para n valores negativos devuelve el número positivo "n". Por ejemplo, `abs(2)` = 2 y `abs(-4)` = 4.

    También puede redondear números decimales a enteros usando `floor()`, `ceil()` y `round()`. `floor()` devuelve el número entero completo más cercano redondeando hacia abajo y `ceil()` hace lo contrario redondeando hacia arriba. `round()` es bidireccional y se redondea hacia arriba o hacia abajo al entero completo más cercano.

    ```sql
    SELECT abs(duration), round(duration), ceil(duration), floor(duration) 
    FROM Transaction 
    SINCE 1 day ago
    ```

    <img
      title="Using abs(n)"
      alt="A screenshot showing the results of a query using absolute value"
      src="/images/queries-nrql_screenshot-crop-tutorial4-3.webp"
    />
  </Step>

  <Step>
    Puede utilizar la sujeción de un atributo para imponer un límite superior o inferior a su valor. Esto es útil para cosas como garantizar que el valor atípico extremo no sesgue la escala de un gráfico de serie temporal. `clamp_max(duration, 10)` devuelve la duración, a menos que supere 10, en cuyo caso devuelve 10. En pocas palabras, cualquier valor mayor que 10 sigue siendo igual a 10. `clamp_min(duration,1)` hace lo inverso; si alguna duración es inferior a 1, se informa como igual a 1.

    ```sql
    SELECT clamp_max(average(duration), 10), clamp_min(average(duration), 1) 
    FROM Transaction 
    SINCE 1 day ago 
    TIMESERIES
    ```

    <img
      title="Clamping data"
      alt="A screenshot showing a query that uses clamp max"
      src="/images/queries-nrql_screenshot-crop-tutorial4-4.webp"
    />
  </Step>

  <Step>
    Ahora puede pasar a las matemáticas avanzadas que a muchos les resulta difícil utilizar. Como antes, podemos mostrarle todas estas funciones en una única consulta de ejemplo.

    La función `pow()` eleva el primer argumento a la potencia del segundo argumento. En este ejemplo, eleva la duración a la potencia de 2. Si necesita la raíz cuadrada de un valor, la función `sqrt()` puede proporcionársela rápidamente. Y la función `exp()` calcula la función exponencial natural de su argumento.

    Finalmente, NRQL también ofrece logaritmos adaptados a una serie de funciones similares:

    * `ln(n)` calcular el logaritmo natural: el logaritmo en base e.
    * `log2(n)` calcular el logaritmo en base 2.
    * `log10(n)` calcular el logaritmo en base 10.
    * `log(n, b)` le permite calcular logaritmos con una base arbitraria b.

      ```sql
      SELECT pow(duration, 2), sqrt(duration), exp(duration), ln(duration), log2(duration) 
      FROM Transaction 
      SINCE 1 day ago
      ```

      <img
        title="Advanced math"
        alt="A screenshot showing a query using the advaned math features pow, SQRT, and EXP"
        src="/images/queries-nrql_screenshot-crop-tutorial4-5.webp"
      />
  </Step>

  En esta lección, aprendió a suavizar los datos de su evento. `round()`/`ceil()`/`floor()` te permiten redondear como quieras. La sujeción le permite poner límites a los datos, y las herramientas matemáticas avanzadas para logaritmo, raíz cuadrada, potencia y exponencial ofrecen mayor control para manipular los datos según sea necesario. A continuación, aprenderá cómo descubrir eventos y atributos.
</Steps>

### Descubra evento y atributo

¡Descubrir eventos y atributos puede ayudar a responder preguntas sobre los datos disponibles antes de consultarlos y ayudar con la automatización! Tomémonos un momento para explorar esta poderosa utilidad.

<Steps>
  <Step>
    Digamos que desea una lista de todos los tipos de eventos que actualmente se reportan a su cuenta New Relic. La sintaxis `SHOW EVENT TYPES` devuelve una lista de todos los tipos de eventos informados en un período determinado. Es una de las raras excepciones en las que una consulta NRQL no necesita `SELECT` y `FROM`. Puede utilizar esta funcionalidad para cosas como confirmar la existencia de datos de eventos personalizados.

    ```sql
    SHOW EVENT TYPES 
    SINCE 1 week ago
    ```

    <img
      title="Event types"
      alt="A screenshot showing a the result of a query using event types"
      src="/images/queries-nrql_screenshot-crop-tutorial4-6.webp"
    />
  </Step>

  <Step>
    Es posible que necesites saber qué atributo tienes disponible para un tipo de evento determinado. La función `keyset()` proporciona una lista de todos los atributos para un tipo de evento, agrupados por tipo de atributo. Solo obtendrás atributos que contengan valores dentro del período de tiempo proporcionado, que puedes usar para explorar tus datos. También puede usarlo en automatización, para cosas como garantizar que los datos de los clientes informen correctamente.

    ```sql
    SELECT keyset() 
    FROM Transaction 
    SINCE 1 week ago
    ```

    <img
      title="Keyset"
      alt="A screenshot showing the result of a keyset query"
      src="/images/queries-nrql_screenshot-crop-tutorial4-7.webp"
    />
  </Step>

  Estas características lo ayudan a descubrir cambios en los tipos de eventos y atributos. Más ingenieros de DevOps utilizan estas funcionalidades para finalizar trabajos o incluso automatizarlos rápidamente. A continuación, aprenderá cómo filtrar datos con Regex.
</Steps>

### Filtrar con expresiones regulares

<Steps>
  <Step>
    Es posible que en ocasiones desees filtrar datos con coincidencias de patrones más complejas que las que `LIKE` puede proporcionar. Con la cláusula `RLIKE` , puede filtrar con expresiones regulares para coincidencias más complicadas.

    En cualquier escenario en el que pueda usar `LIKE`, tiene la opción de usar `RLIKE` en lugar de proporcionar la expresión regular correspondiente entre comillas. En este ejemplo, hay una lista de todos los nombres de host que terminan en números pares o consonantes.

    <SideBySide>
      <Side>
        ```sql
        SELECT uniques(host) 
        FROM Transaction 
        WHERE host 
        RLIKE '^.*[02468bcdfghjklmnpqrstvwxyz]'
        ```
      </Side>

      <Side>
        <img
          title="Regex"
          alt="A screenshot showing the result of a query using R like"
          src="/images/queries-nrql_screenshot-crop-tutorial4-8.webp"
        />
      </Side>
    </SideBySide>
  </Step>

  <Step>
    También puedes hacer combinaciones simples. Por ejemplo, si desea hacer coincidir un valor que comienza con una letra o palabra determinada.

    ```sql
    SELECT count(*) 
    FROM Transaction 
    WHERE name 
    RLIKE 'W.*|O.*' 
    FACET name
    ```

    El motor de expresiones regulares utiliza la sintaxis RE2. Si necesita eliminar caracteres, es posible que necesite utilizar secuencias de escape de doble barra invertida. (p.ej \\).

    Recuerde que `RLIKE` tiene inherentemente más complejidad y menos rendimiento que `LIKE`. Úselo únicamente cuando `LIKE` y otras funciones de filtrado no se ajusten a sus necesidades.
  </Step>

  El soporte de expresiones regulares permite posibilidades de coincidencia de patrones casi infinitas. Si ya eres un gurú de las expresiones regulares, sabes el poder que esto añade a NRQL. Pero si no es así, ¡no te preocupes! Regex tiene muchos recursos disponibles para consultar en línea. Ahora que ha aprendido a usar expresiones regulares con NRQL, el siguiente en la lista es usar agregación anidada.
</Steps>

### Usar agregación anidada

Puede escribir consultas de agregación anidadas con NRQL que utiliza una consulta como `FROM` para la consulta principal. Esto le permite responder preguntas como:

* ¿Cuántas transacciones por minuto manejó mi aplicación y cuál fue la tasa máxima de solicitudes por minuto en la última hora?
* ¿Cuál es el uso promedio de CPU de todos mis servidores y qué servidores específicos superan el 90 %?
* ¿Qué porcentaje de todas las sesiones de usuario rebotaron inmediatamente (es decir, ¿Solo una vista de página en la sesión)?

Exploremos cada uno de estos casos de uso con más detalle.

<Steps>
  <Step>
    #### Ejemplo 1: API de llamadas máximas durante la última hora

    Primero, puede contar la cantidad de llamadas API por minuto durante la última hora. Esto devuelve 60 puntos de datos en un gráfico:

    ```sql
    SELECT count(*) AS apicalls
    FROM Transaction 
    TIMESERIES 1 MINUTE
    ```

    <img
      title="API calls"
      alt="A screenshot showing the results of the API call query"
      src="/images/queries-nrql_screenshot-crop-tutorial4-10.webp"
    />

    Ahora, para encontrar el valor máximo informado durante ese período, encierre la consulta entre paréntesis y use `SELECT ... FROM` de esta manera: `SELECT z FROM (SELECT x AS z FROM y)`

    ```sql
    SELECT max(apicalls) 
    FROM ( SELECT count(*) AS apicalls FROM Public_APICall TIMESERIES 1 minute )
    ```
  </Step>

  <Step>
    #### Ejemplo 2: servidores con alta carga de CPU

    Este ejemplo utiliza datos de New Relic Infrastructure. A veces, solo desea ver los hosts cuya CPU, en promedio, superó un cierto porcentaje. Si solicita a NRQL el `average(cpuPercent)`, obtendrá una lista de hosts con el porcentaje de CPU promedio más alto. Pero no puede simplemente agregar un `WHERE cpuPercent > 90` para limitar esto solo a hosts que se ejecutan al 90 % o más, porque esto eliminaría los datos antes de calcular el promedio.

    ¡Pero puedes resolver esto con agregación anidada! Al solicitar `average(cpuPercent)` en la subconsulta, obtienes la lista de hosts y su CPU promedio. Ahora, en la consulta externa, puede filtrar solo los resultados que fueron `> x%`. (Consejo: es posible que deba ajustar el umbral de esta consulta para que funcione con la CPU de sus hosts. Lo hemos establecido en 20% aquí.)

    ```sql
    SELECT hostname, cpu 
    FROM (SELECT average(cpuPercent) AS cpu FROM SystemSample FACET hostname) 
    WHERE cpu > 20
    ```
  </Step>

  <Step>
    #### Ejemplo 3: rebotes de sesión

    La gente a menudo se pregunta cómo calcular la tasa de rebote en el monitoreo frontend. Esto se refiere a sesiones que ven una sola página y "rebotan" antes de visitar más páginas. Con la agregación anidada, puedes lograr esto fácilmente. Nuestra consulta interna cuenta los `PageViews`, agrupándolos por sesión. El conjunto de resultados pasado a la consulta externa enumera todas las sesiones y cuántas páginas vio cada una. Luego, la consulta externa calcula el porcentaje de sesiones con un recuento de 1 (esto indica una "sesión rebotada", porque solo vieron una página).

    ```sql
    SELECT percentage(count(*), WHERE sessionLength = 1) 
    FROM (SELECT count(*) AS sessionLength FROM PageView FACET session)
    ```

    En esta lección, aprendió cómo puede utilizar una consulta como `FROM` de otra consulta para responder preguntas más complicadas. Sólo queda una última cosa que aprender: ¡cómo utilizar subconsultas!
  </Step>
</Steps>

### Usar subconsultas

Las subconsultas en NRQL son similares a las agregaciones anidadas, lo que le permite utilizar una consulta anidada dentro de otra consulta. Con las subconsultas, la consulta anidada va a la instrucción `SELECT` y la cláusula `WHERE` , mientras que las agregaciones anidadas van a la cláusula `FROM` .

Veamos algunos ejemplos de estos diferentes tipos de subconsultas.

<Steps>
  <Step>
    #### Condiciones numéricas

    Puede utilizar cualquier consulta que devuelva un único valor numérico en condiciones numéricas. Este ejemplo utiliza una subconsulta en la cláusula `WHERE` que devuelve el valor del percentil 97 de la duración de la llamada API y luego devuelve el nombre y la duración de aquellas llamadas mayores que ese valor.

    ```sql
    SELECT http.url, duration 
    FROM Public_APICall 
    WHERE duration > (SELECT percentile(duration,97) FROM Public_APICall)
    ```

    <img
      title="Subqueries"
      alt="A screenshot showing the results of a numeric condition subquery"
      src="/images/queries-nrql_screenshot-crop-tutorial4-12.webp"
    />
  </Step>

  <Step>
    #### IN condiciones

    Cuando tenga varios valores que regresan de una subconsulta, use una condición `IN` para que la consulta principal se compare con cada valor. En el ejemplo, el atributo `entity.guid` proporciona datos para cada entidad única que tiene un error de transacción, y esto coincide con el valor `entity.guid` de las transacciones para determinar la duración promedio de las entidades con errores.

    ```sql
    SELECT average(duration) 
    FROM Transaction 
    WHERE entity.guid 
    IN (SELECT uniques(entity.guid) FROM TransactionError) 
    FACET appName 
    TIMESERIES
    ```

    <img
      title="IN condition"
      alt="A screenshot showing the result of a query using the in condition"
      src="/images/queries-nrql_screenshot-crop-tutorial4-14.webp"
    />
  </Step>

  <Step>
    #### Subconsultas en la declaración SELECT

    Puede utilizar los resultados de la subconsulta en cálculos con una declaración `SELECT` y puede especificar un rango de tiempo diferente al de la consulta externa. Este ejemplo calcula el delta entre la duración promedio actual y la de los últimos 7 días.

    ```sql
    SELECT average(duration) - (SELECT average(duration) FROM Public_APICall SINCE 7 days ago) 
    FROM Public_APICall 
    TIMESERIES
    ```

    <img
      title="Subqueries with SELECT"
      alt="A screenshot showing the results of a subquery that uses select"
      src="/images/queries-nrql_screenshot-crop-tutorial4-15.webp"
    />

    Las subconsultas son una herramienta poderosa para la exploración de datos, que permite realizar consultas más sofisticadas entre diferentes fuentes de datos y rangos de tiempo.
  </Step>
</Steps>

Felicitaciones por completar este tutorial. Aprendió sobre técnicas de agregación adicionales, funciones matemáticas de nivel superior y características avanzadas como filtrado Regex, agregación anidada y subconsultas. Si ha completado los tres tutoriales anteriores, entonces habrá trabajado con casi todos los aspectos de NRQL que puede utilizar.

Esperamos que NRQL le resulte útil para explorar sus datos y, si tiene más preguntas o tiene problemas, no dude en [ponerse en contacto con el soporte de New Relic](https://support.newrelic.com/). O, si lo prefieres, puedes compartir tu experiencia con nuestra [comunidad en línea](https://discuss.newrelic.com/).
