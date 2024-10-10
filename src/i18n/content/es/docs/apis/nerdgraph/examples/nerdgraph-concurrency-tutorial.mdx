---
title: 'Tutorial de NerdGraph: manejar límites de concurrencia'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Code examples for handling New Relic NerdGraph concurrency limits.
freshnessValidatedDate: never
translationType: machine
---

La API NerdGraph de New Relic impone un límite de <DNT>**25 concurrent requests per user**</DNT>. Los siguientes ejemplos de código se pueden utilizar como puntos de partida para evitar estos límites o recibir códigos de estado HTTP `429` . Los dos ejemplos siguientes siguen el mismo caso de uso en el que se ejecuta una consulta en muchas cuentas de New Relic en paralelo, pero aún así se encuentran por debajo del límite de concurrencia de NerdGraph.

## JavaScript

Una forma de manejar la simultaneidad es utilizar un grupo de trabajadores. El siguiente ejemplo utiliza el [módulo asíncrono](https://caolan.github.io/async/v3/docs.html#queue) para hacerlo. Crea una cola que tiene un límite de ejecución concurrente establecido, envía solicitudes como tareas a esa cola y vacía la cola una vez que se completan todas las tareas.

```node
import got from 'got';
import async from 'async';

const API_KEY = '<key>' //GraphQL User Key
const MAX_CONCURRENCY = 25; //Maximum amount of requests in queue at a given time

const GRAPH_API = 'https://api.newrelic.com/graphql';
const HEADERS = { 'Content-Type': 'application/json', 'Api-Key': API_KEY };


async function main() {
  let accounts = await getAccounts(); //All accounts to run a query against
  var allResults = [];

  //Queue initialization
  const q = async.queue(async (task, cb) => {
    let result = await makeRequest(task.acct)
    allResults.push({'transactionCount': result[0].count, 'account': task.acct.id});
    cb();
  }, MAX_CONCURRENCY);

  //Push requests on to the queue (one for each account)
  accounts.forEach(acct => {
    q.push({acct: acct});
  });

  await q.drain(); //Drain event listener when all tasks are complete

  console.log(allResults);
}

async function makeRequest(acct) {
  let nrql = `SELECT count(*) FROM Transaction`;
  let gql = `{
      actor {
        account(id: ${acct.id}) {
          nrql(query: "${nrql}", timeout: 90) {
            results
          }
        }
      }
    }`;

  let opts = {
    url: GRAPH_API,
    headers: HEADERS,
    json: {'query': gql, 'variables': {}}
  };

  let response = await got.post(opts).json();
  if (!response.errors) {
    return response.data.actor.account.nrql.results;
  } else {
    console.log('Query Error');
    console.log(response.errors);
  }
}

async function getAccounts() {
  var q = `{
            actor {
              accounts {
                id
                name
              }
            }
          }`

  var opts = {
    url: GRAPH_API,
    headers: HEADERS,
    json: {'query': q, 'variables': {}}
  }

  let resp = await got.post(opts).json();
  return resp.data.actor.accounts;
}


main();

```

## Python

También puede utilizar Python aprovechando los siguientes paquetes para manejar solicitudes asincrónicas y concurrencia:

* [aiohttp](https://docs.aiohttp.org/en/stable/) : se utiliza para realizar solicitudes http asíncronas
* [asyncio](https://docs.python.org/3/library/asyncio.html) : se utiliza para manejar la concurrencia

A continuación se establece un [semáforo](https://docs.python.org/3/library/asyncio-sync.html?highlight=semaphore#asyncio.Semaphore) que gestiona la cantidad de solicitudes simultáneas. Luego utiliza `asyncio.gather()` para ejecutar múltiples co-rutinas simultáneamente y espera a que se completen.

```
import aiohttp
import asyncio

API_KEY = '<key>'
MAX_CONCURRENCY = 25
GRAPHQL_API = 'https://api.newrelic.com/graphql'
HEADERS = {'Content-Type': 'application/json', 'Api-Key': API_KEY}


async def main():
    #All accounts to run a query against
    accounts = await get_accounts()

    # Semaphore for controlling concurrency
    limit = asyncio.Semaphore(MAX_CONCURRENCY)

    #Add all accounts to run a query against
    tasks = [send_request(acct, limit) for acct in accounts]

    #Schedule all tasks to run concurrently
    allResults = await asyncio.gather(*tasks)

    print(allResults)


async def send_request(acct, limit):
    nrql = "SELECT count(*) FROM Transaction"
    gql = f'''
    {{
      actor {{
        account(id: {acct['id']}) {{
          nrql(query: "{nrql}", timeout: 90) {{
            results
          }}
        }}
      }}
    }}
    '''

    async with limit:
        try:
            async with aiohttp.ClientSession() as session:
                async with session.post(GRAPHQL_API, json={"query": gql, "variables":{}}, headers=HEADERS) as response:
                    result = await response.json()
                    return {'transactionCount': result['data']['actor']['account']['nrql']['results'][0]['count'], 'account': acct['id']}
        except Exception as error:
            print("Query Error")
            raise error


async def get_accounts():
    gql = """
    {
      actor {
        accounts {
          id
          name
        }
       }
     }
    """

    async with aiohttp.ClientSession() as session:
        async with session.post(GRAPHQL_API, json={"query": gql, "variables":{}}, headers=HEADERS) as response:
            result = await response.json()
            return result['data']['actor']['accounts']


if __name__ == '__main__':
    asyncio.run(main()) #Run event loop

```

Para obtener más detalles sobre los límites de NerdGraph, consulte [Límites de uso de NerdGraph](/docs/apis/nerdgraph/nerdgraph-usage-limits).
