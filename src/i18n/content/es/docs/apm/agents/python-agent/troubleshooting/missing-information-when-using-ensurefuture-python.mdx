---
title: Información faltante al usar ensure_future (Python)
type: troubleshooting
tags:
  - Agents
  - Python agent
  - Troubleshooting
metaDescription: 'If your Python application doesn''t report data after a few minutes, try these troubleshooting steps.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

La información detallada de la traza de la función no aparece cuando se usa `asyncio.ensure_future` en corrutinas.

## Solución

Los futuros creados a partir de `ensure_future` deben esperarse en la misma rutina en la que se crearon. Por ejemplo, en la sección <DNT>**Before**</DNT> , `await` no está presente con `ensure_future`, lo que provocaría que falte información:

<DNT>**Before**</DNT>:

```
import asyncio

async def foo():
  ensure_future(bar())

async def bar():
  await asyncio.sleep(0.5)
```

<DNT>**After**</DNT>:

```
import asyncio

async def foo():
  await ensure_future(bar())

async def bar():
  await asyncio.sleep(0.5)
```
